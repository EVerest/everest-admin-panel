# EVerest Simulator Data Updater

## Overview

This directory contains a Node.js script (`update-simulator-data.js`) designed to update the dummy data directly from a
running EVerest instance. The script interfaces with the EVerest WebSocket API to fetch and refresh module and interface
data and converts the manually curated sample-configs in `./sample-configs` in a config list ensuring that the
TypeScript files here reflect the latest system definitions.

The script also updates the English language definition files in the `src/locales` directory, using unique keys from the module and interface data. Note that other language definition files are not updated by this script.

## Files

- `update-simulator-data.js`: The main script responsible for fetching data from the EVerest WebSocket API and updating
  the TypeScript files.
- `sample_module_info.ts`: Updated to contain module information as EverestModuleDefinitionList.
- `sample_interfaces_list.ts`: Updated to contain interface definitions as EverestInterfaceDefinitionList.
- `sample_config_list.ts`: Updated to contain a few sample configs as EverestConfigList.
- `src/locales/en_module_info.ts`: Updated to contain the English language labels for the keys used in `sample_module_info.ts`.
- `src/locales/en_interfaces_list.ts`: Updated to contain the English language labels for the keys used in `sample_interfaces_list.ts`.

## Usage

Run the script using the following command:

```bash
node update-simulator-data.js [--url=<custom-ws-url>]
```

Options:
`--url=<custom-ws-url>`: Use this option to specify a custom WebSocket URL if your EVerest instance is not running on
the default ws://localhost:8849.
