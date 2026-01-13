#!/usr/bin/env node
// SPDX-License-Identifier: Apache-2.0
// Copyright 2020 - 2026 Pionix GmbH and Contributors to EVerest
import WebSocket from "ws";
import fs from "fs";
import path from "path";
import process from "process";
import * as yaml from "js-yaml";
import { inspect } from 'util';

// Allowed config files map (literal keys -> absolute paths)
const ALLOWED_CONFIG_FILES = [
  "config-sil-dc.yaml",
  "config-sil-ocpp201.yaml",
  "config-sil.yaml",
];

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
  --local-only       Skip WebSocket connection and only update config files from local YAML
  --help             Show this help message
`;

if (args.includes("--help")) {
  console.log(help);
  process.exit(0);
}

if (args.includes("--local-only")) {
  console.log("Running in local-only mode...");
  compileConfigFiles();
  process.exit(0);
}

const ws = new WebSocket(url);

const resolvers = new Map();

// Handler to manage both module and interface requests
ws.on("open", async () => {
  console.log("Connected to EVerest WebSocket");
  await Promise.all([
    new Promise((resolve) => {
      resolvers.set(1, resolve);
      sendRequest("get_modules", 1);
    }),
    new Promise((resolve) => {
      resolvers.set(2, resolve);
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
  const resolver = resolvers.get(response.id);

  if (typeof resolver === "function") {
    resolver();
  }
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
  // Use Object.entries and Object.fromEntries to avoid dynamic bracket access patterns
  const entries = Object.entries(obj);
  const mapped = entries.map(([key, value]) => {
    if (key === 'description' && typeof value === 'string') {
      return [key, `computed(() => String(t("${jsonPath}.${key}"))) as LocalizedString`];
    }

    if (typeof value === 'object' && value !== null) {
      // Sanitize key to avoid injection into generated code strings
      const safeKey = String(key).replace(/\\/g, '\\\\').replace(/"/g, '\\"');
      const nextPath = jsonPath === "" ? safeKey : `${jsonPath}.${safeKey}`;
      return [key, findAndReplaceDescriptions(value, nextPath)];
    }

    return [key, value];
  });

  return Object.fromEntries(mapped);
}

function extractDescriptions(obj, jsonPath) {
  if (obj === null || typeof obj !== 'object') {
    return obj;
  }

  if (Array.isArray(obj)) {
    return undefined;
    // return obj.map((item, index) => extractDescriptions(item, `${jsonPath}[${index}]`));
  }
  const entries = Object.entries(obj);
  const mapped = entries.map(([key, value]) => {
    if (key === 'description' && typeof value === 'string') {
      return [key, value];
    }

    if (typeof value === 'object' && value !== null) {
      // Sanitize key to avoid injection into generated code strings
      const safeKey = String(key).replace(/\\/g, '\\\\').replace(/"/g, '\\"');
      const nestedResult = extractDescriptions(value, jsonPath === "" ? safeKey : `${jsonPath}.${safeKey}`);
      if (nestedResult !== undefined && Object.keys(nestedResult).length > 0) {
        return [key, nestedResult];
      }
    }

    return null; // signal to drop this key
  });

  // Filter out nulls and build object
  const finalEntries = mapped.filter((e) => e !== null);
  return Object.fromEntries(finalEntries);
}

function generateContent(data, typecast) {
  let content = licenseHeader();
  content += '// This file is generated, see README.md for more information.\n\n'

  const sampleData = findAndReplaceDescriptions(data, "");
  const sampleContent = `export default ${inspect(sampleData, { depth: null, colors: false })} as ${typecast};\n`;

  if (sampleContent.includes('t("')) {
    content += `import { ${typecast}, LocalizedString } from "../index";\n`;
    content += 'import { computed } from "vue";\n';
    content += 'import { i18n } from "../../../plugins/i18n";\n';
    content += 'import { ComposerTranslation } from "vue-i18n";\n\n';
    content += "const t = (i18n as unknown as { global: { t: ComposerTranslation } }).global.t;\n";
  } else {
    content += `import { ${typecast} } from "../index";\n`;
  }

  // `inspect()` will generate output that conflicts with Prettier rules
  content += '\n/* eslint-disable prettier/prettier */\n';

  content += sampleContent;

  // Convert function calls from string to literal.
  content = content.replace(/'computed\(\(\) => String\(t\("(.*?)"\)\)\) as LocalizedString'/g, "computed(() => String(t(\"$1\"))) as LocalizedString");

  return content;
}

function generateI18nContent(data) {
  const extractedDescriptions = extractDescriptions(data, "");

  let content = licenseHeader();
  content += '// This file is generated, see README.md for more information.\n\n'

  // `inspect()` will generate output that conflicts with Prettier rules
  content += '/* eslint-disable prettier/prettier */\n';

  content += `export default ${inspect(extractedDescriptions, { depth: null, colors: false })} as const;\n`;

  // Convert tc function calls from string to literal.
  content = content.replace(/'t\("(.*?)"\) as LocalizedString'/g, "t('$1') as LocalizedString");

  return content;
}

function licenseHeader() {
  return `// SPDX-License-Identifier: Apache-2.0
// Copyright 2020 - ${new Date().getFullYear()} Pionix GmbH and Contributors to EVerest\n\n`;
}

function writeToFile(filename, content) {
  try {
    // Use literal filenames to avoid Codacy critical error "The application dynamically constructs file or path information."
    switch (filename) {
      case "sample_module_info.ts":
        fs.writeFileSync("sample_module_info.ts", content);
        break;
      case "sample_interfaces_list.ts":
        fs.writeFileSync("sample_interfaces_list.ts", content);
        break;
      case "sample_config_list.ts":
        fs.writeFileSync("sample_config_list.ts", content);
        break;
      case "../../../locales/en_module_info.ts":
        fs.writeFileSync("../../../locales/en_module_info.ts", content);
        break;
      case "../../../locales/en_interfaces_list.ts":
        fs.writeFileSync("../../../locales/en_interfaces_list.ts", content);
        break;
      default:
        throw new Error(`Attempt to write disallowed filename: ${filename}`);
    }

    console.log("%s updated successfully!", filename);
  } catch (err) {
    console.error("Failed to write data to %s:", filename, err);
  }
}

function compileConfigFiles() {
  const configs = {};
  for (const filename of ALLOWED_CONFIG_FILES) {
    let fileContent;

    try {
      // Use literal filenames to avoid Codacy critical error "Found readFileSync from package "fs" with non literal argument at index 0"
      switch (filename) {
        case "config-sil-dc.yaml":
          fileContent = fs.readFileSync("sample-configs/config-sil-dc.yaml", "utf8");
          break;
        case "config-sil-ocpp201.yaml":
          fileContent = fs.readFileSync("sample-configs/config-sil-ocpp201.yaml", "utf8");
          break;
        case "config-sil.yaml":
          fileContent = fs.readFileSync("sample-configs/config-sil.yaml", "utf8");
          break;
        default:
          throw new Error(`Attempt to read disallowed filename: ${filename}`);
      }

      const configName = path.basename(filename, ".yaml");
      
      // There is no object injection possible here, `configName` is valid.
      // Prevent ESlint from flagging a false positive for `configs[configName]`.
      // eslint-disable-next-line security/detect-object-injection
      configs[configName] = yaml.load(fileContent);
    } catch (err) {
      console.warn("Failed to read file %s:", filename, err);
    }
  }

  const content = generateContent(configs, "EverestConfigList");
  writeToFile("sample_config_list.ts", content);
}
