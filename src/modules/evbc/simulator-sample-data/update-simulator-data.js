#!/usr/bin/env node
// SPDX-License-Identifier: Apache-2.0
// Copyright 2020 - 2024 Pionix GmbH and Contributors to EVerest
import WebSocket from 'ws';
import fs from 'fs';
import path, {dirname} from 'path';
import process from 'process';
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Default URL of the EVerest WebSocket instance
const defaultUrl = 'ws://localhost:8849';
const args = process.argv.slice(2);
const url = args.find(arg => arg.startsWith('--url='))?.split('=').slice(1).join('=') || defaultUrl;

const help = `
Usage: node update-simulator-data.js [options]
Options:
  --url=<ws-url>     Specify the WebSocket URL of the EVerest instance (default: ${defaultUrl})
  --help             Show this help message
`;

if (args.includes('--help')) {
    console.log(help);
    process.exit(0);
}

const ws = new WebSocket(url);

const resolvers = {};

// Handler to manage both module and interface requests
ws.on('open', async () => {
    console.log('Connected to EVerest WebSocket');
    await Promise.all([
        new Promise((resolve) => {
            resolvers[1] = resolve;
            sendRequest('get_modules', 1);
        }),
        new Promise((resolve) => {
            resolvers[2] = resolve;
            sendRequest('get_interfaces', 2);
        }),
        new Promise((resolve) => {
            compileConfigFiles();
            resolve();
        })
    ])
    ws.close();
    console.log('Disconnected from EVerest WebSocket');
});

ws.on('message', function incoming(data) {
    const response = JSON.parse(data);
    if (response.id === 1 && response.result) {
        updateFiles(response.result, 'sample_module_info.ts', 'EverestModuleDefinitionList');
    } else if (response.id === 2 && response.result) {
        updateFiles(response.result, 'sample_interfaces_list.ts', 'EverestInterfaceDefinitionList');
    } else {
        throw new Error("Invalid response received from EVerest WebSocket");
    }
    resolvers[response.id]();
});

ws.on('error', function error(e) {
    console.error('Failed to connect to EVerest WebSocket:', e.message);
    process.exit(1);
});

function sendRequest(method, id) {
    const request = {
        method: method,
        params: null,
        id: id
    };
    ws.send(JSON.stringify(request));
}

function updateFiles(data, filename, typecast) {
    const content = generateContent(data, typecast);
    writeToFile(filename, content);
}

function generateContent(data, typecast) {
    let content = licenseHeader();
    content += `import {${typecast}} from "../index";\n\n`;
    content += `export default ${JSON.stringify(data, null, 2)} as ${typecast};\n`;
    return content;
}

function licenseHeader() {
    return `// SPDX-License-Identifier: Apache-2.0
// Copyright 2020 - ${new Date().getFullYear()} Pionix GmbH and Contributors to EVerest\n\n`;
}

function writeToFile(filename, content) {
    const filePath = path.join(__dirname, filename);
    try {
        fs.writeFileSync(filePath, content);
        console.log(`${filename} updated successfully!`);
    } catch (err) {
        console.error(`Failed to write data to ${filename}:`, err);
    }
}

function compileConfigFiles() {
    const configDirPath = path.join(__dirname, 'sample-configs');
    const configFiles = fs.readdirSync(configDirPath);

    let configs = {};

    configFiles.forEach(file => {
        if (path.extname(file) === '.json') {
            const configName = path.basename(file, '.json');
            const filePath = path.join(configDirPath, file);
            const fileContent = fs.readFileSync(filePath, 'utf8');
            configs[`${configName}`] = JSON.parse(fileContent);
        } else {
            console.warn(`Ignoring file ${file} as it is not a JSON file.`);
        }
    });

    const content = generateContent(configs, 'EverestConfigList');
    writeToFile('sample_config_list.ts', content);
}
