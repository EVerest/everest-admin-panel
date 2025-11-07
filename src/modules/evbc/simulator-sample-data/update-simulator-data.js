#!/usr/bin/env node
// SPDX-License-Identifier: Apache-2.0
// Copyright 2020 - 2025 Pionix GmbH and Contributors to EVerest
import WebSocket from "ws";
import fs from "fs";
import path, { dirname } from "path";
import process from "process";
import { fileURLToPath } from "url";
import * as yaml from "js-yaml";
import { inspect } from 'util';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Default URL of the EVerest WebSocket instance
const defaultUrl = "ws://localhost:8849";
const args = process.argv.slice(2);
const url =
  args
    .find((arg) => arg.startsWith("--url="))
    ?.split("=")
    .slice(1)
    .join("=") || defaultUrl;

const help = `
Usage: node update-simulator-data.js [options]
Options:
  --url=<ws-url>     Specify the WebSocket URL of the EVerest instance (default: ${defaultUrl})
  --help             Show this help message
`;

if (args.includes("--help")) {
  console.log(help);
  process.exit(0);
}

const ws = new WebSocket(url);

const resolvers = {};

// Handler to manage both module and interface requests
ws.on("open", async () => {
  console.log("Connected to EVerest WebSocket");
  await Promise.all([
    new Promise((resolve) => {
      resolvers[1] = resolve;
      sendRequest("get_modules", 1);
    }),
    new Promise((resolve) => {
      resolvers[2] = resolve;
      sendRequest("get_interfaces", 2);
    }),
    new Promise((resolve) => {
      compileConfigFiles();
      resolve();
    }),
  ]);
  ws.close();
  console.log("Disconnected from EVerest WebSocket");
});

ws.on("message", function incoming(data) {
  const response = JSON.parse(data);
  if (response.id === 1 && response.result) {
    updateFiles(response.result, "sample_module_info.ts", "EverestModuleDefinitionList");
    updateI18nFiles(response.result, "../../../locales/en_module_info.ts");
  } else if (response.id === 2 && response.result) {
    updateFiles(response.result, "sample_interfaces_list.ts", "EverestInterfaceDefinitionList");
    updateI18nFiles(response.result, "../../../locales/en_interfaces_list.ts");
  } else {
    throw new Error("Invalid response received from EVerest WebSocket");
  }
  resolvers[response.id]();
});

ws.on("error", function error(e) {
  console.error("Failed to connect to EVerest WebSocket:", e.message);
  process.exit(1);
});

function sendRequest(method, id) {
  const request = {
    method: method,
    params: null,
    id: id,
  };
  ws.send(JSON.stringify(request));
}

function updateFiles(data, filename, typecast) {
  const content = generateContent(data, typecast);
  writeToFile(filename, content);
}

function updateI18nFiles(data, filename) {
  const content = generateI18nContent(data);
  writeToFile(filename, content);
}

function findAndReplaceDescriptions(obj, jsonPath) {
  if (obj === null || typeof obj !== 'object') {
    return obj;
  }

  if (Array.isArray(obj)) {
    return obj.map((item, index) => findAndReplaceDescriptions(item, `${jsonPath}[${index}]`));
  }

  const result = { ...obj };

  for (const key in result) {
    if (typeof key === 'string' && key === 'description' && typeof result[key] === 'string') {
      result[key] = `tc("${jsonPath}.${key}")`;
    } else if (typeof result[key] === 'object' && result[key] !== null) {
      // Sanitize key to avoid injection into generated code strings
      const safeKey = String(key).replace(/\\/g, '\\\\').replace(/"/g, '\\"');

      // Recursively process nested objects
      if (jsonPath === "") {
        result[key] = findAndReplaceDescriptions(result[key], safeKey);
      } else {
        result[key] = findAndReplaceDescriptions(result[key], `${jsonPath}.${safeKey}`);
      }
    }
  }

  return result;
}

function extractDescriptions(obj, jsonPath) {
  if (obj === null || typeof obj !== 'object') {
    return obj;
  }

  if (Array.isArray(obj)) {
    return undefined;
    // return obj.map((item, index) => extractDescriptions(item, `${jsonPath}[${index}]`));
  }

  const result = {};

  for (const key in obj) {
    if (typeof key === 'string' && key === 'description' && typeof obj[key] === 'string') {
    } else if (typeof obj[key] === 'object' && obj[key] !== null) {
      // Sanitize key to avoid injection into generated code strings
      const safeKey = String(key).replace(/\\/g, '\\\\').replace(/"/g, '\\"');

      // Recursively process nested objects; sanitize key to avoid injection into generated code strings
      const nestedResult = extractDescriptions(obj[key], jsonPath === "" ? safeKey : `${jsonPath}.${safeKey}`);

      if (nestedResult !== undefined && Object.keys(nestedResult).length > 0) {
        // Only add the nested result if it contains meaningful data
        result[key] = nestedResult;
      }
    }
    }
  }

  return result;
}  

function generateContent(data, typecast) {
  let content = licenseHeader();
  content += '// This file is generated, see README.md for more information.\n\n'
  content += `import {${typecast}} from "../index";\n`;

  const sampleData = findAndReplaceDescriptions(data, "");
  const sampleContent = `export default ${inspect(sampleData, { depth: null, colors: false })} as ${typecast};\n`;

  if (sampleContent.includes('tc("')) {
    content += 'import { tc } from "@/plugins/i18n";\n';
  }

  content += "\n" + sampleContent;

  // Convert tc function calls from string to literal.
  content = content.replace(/'tc\("(.*?)"\)'/g, "tc('$1')");

  return content;
}

function generateI18nContent(data) {
  const extractedDescriptions = extractDescriptions(data, "");

  let content = licenseHeader();
  content += '// This file is generated, see README.md for more information.\n\n'
  content += `export default ${inspect(extractedDescriptions, { depth: null, colors: false })} as const;\n`;

  // Convert tc function calls from string to literal.
  content = content.replace(/'tc\("(.*?)"\)'/g, "tc('$1')");

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
  const configDirPath = path.join(__dirname, "sample-configs");
  const configFiles = fs.readdirSync(configDirPath);

  const configs = {};

  configFiles.forEach((file) => {
    if (path.extname(file) === ".yaml") {
      const configName = path.basename(file, ".yaml");
      const filePath = path.join(configDirPath, file);
      const fileContent = fs.readFileSync(filePath, "utf8");
      configs[`${configName}`] = yaml.load(fileContent);
    } else {
      console.warn(`Ignoring file ${file} as it is not a yaml file.`);
    }
  });

  const content = generateContent(configs, "EverestConfigList");
  writeToFile("sample_config_list.ts", content);
}
