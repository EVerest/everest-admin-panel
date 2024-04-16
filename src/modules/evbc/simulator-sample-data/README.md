# EVerest Simulator Data Updater

## Overview

This directory contains a Node.js script (`update-simulator-data.js`) designed to update the dummy data directly from a
running EVerest instance. The script interfaces with the EVerest WebSocket API to fetch and refresh module and interface
data and converts the sample-configs in `./sample-configs` in a config list ensuring that the TypeScript files here
reflect the latest system definitions.

## Files

- `update-simulator-data.js`: The main script responsible for fetching data from the EVerest WebSocket API and updating
  the TypeScript files.
- `sample_module_info.ts`: Updated to contain module information as EverestModuleDefinitionList.
- `sample_interfaces_list.ts`: Updated to contain interface definitions as EverestInterfaceDefinitionList.
- `sample_config_list.ts`: Updated to contain a few sample configs as EverestConfigList.

## Usage

Run the script using the following command:

```bash
node update-simulator-data.js [--url=<custom-ws-url>]
```

Options:
`--url=<custom-ws-url>`: Use this option to specify a custom WebSocket URL if your EVerest instance is not running on
the default ws://localhost:8849.
