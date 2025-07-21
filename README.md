# EVerest Admin Panel

[![Stable release](https://img.shields.io/badge/demo-click_to_open-brightgreen.svg)](https://everest.github.io/everest-admin-panel/stable)

## Introduction

The EVerest Admin Panel is a beta-stage frontend tool designed for graphically
editing the EVerest configuration file and controlling or restarting the
EVerest process.
It provides a user-friendly interface for managing EVerest instances and
includes a simulator for experimenting without an actual EVerest instance.

## Table of Contents

- [EVerest Admin Panel](#everest-admin-panel)
  - [Introduction](#introduction)
  - [Table of Contents](#table-of-contents)
  - [Features](#features)
  - [Demo](#demo)
  - [Development](#development)
    - [Releasing a new version](#releasing-a-new-version)
    - [Updating the simulator data](#updating-the-simulator-data)
    - [Updating config/interface-schemas](#updating-configinterface-schemas)
  - [Documentation](#documentation)
  - [Troubleshooting](#troubleshooting)
  - [Contributing](#contributing)
  - [Dependencies](#dependencies)
  - [License](#license)

## Features

- **Edit EVerest Configuration Files**: Easily modify your EVerest
  configuration directly from the admin panel.
- **Connect to Multiple EVerest Instances**: Manage multiple instances from a
  single interface.
- **Simulator**: Experiment and learn without the need for a live EVerest
  instance.
- **Restart EVerest**: Restart your EVerest instance with the click of a
  button.

## Demo

We continuously deploy the latest tagged version of the admin panel to
GitHub Pages: [Demo](https://everest.github.io/everest-admin-panel/stable).
This allows you to try out the admin panel without having to install it
locally.

For every pull request we deploy a version to
`https://everest.github.io/everest-admin-panel/pr-<PR_NUMBER>` so you can test
the changes before a pull request is merged.

The latest version of the main branch is deployed to
`https://everest.github.io/everest-admin-panel/main`.

## Development

1. Ensure you have `pnpm` installed on your system.
2. Clone this repository.
3. Navigate to the project directory and run:

```bash
pnpm install
```

- For development purposes, run:

```bash
pnpm dev
```

This will start the development server, making the admin panel accessible on
`localhost:8080`.

- To build the project, run:

```bash
pnpm build
```

- To preview the build result, run:

```bash
pnpm preview
```

For instructions on setting up an EVerest instance, refer to the
[EVerest Quick Start Guide](https://everest.github.io/nightly/general/03_quick_start_guide.html).
This is recommended if you're not using the simulator version.

### Releasing a new version

To release a new version, follow these steps:

1. Generate a changelog using [cocogitto](https://github.com/cocogitto/cocogitto): `cog changelog vX.Y.Z..HEAD`. Copy it.
2. Update the version in `package.json`.
3. Commit the changes, the commit message should look like this: `chore(release): vX.Y.Z`.
4. Create a new tag with the version number: `git tag -a vX.Y.Z`. Use the changelog as the tag message.
5. Push the changes and the tag: `git push origin main --follow-tags`. For this you need to have the necessary permissions.
6. The CI will automatically create a GitHub release. Add the changelog to the release description.

### Updating the simulator data

Find a detailed guide on how to update the simulator data [here](src/modules/evbc/simulator-sample-data/README.md).

### Updating config/interface-schemas

The admin panel relies on definitions of json/yaml scehams in github.com/EVerest/everest-framework to correctly parse configs. If the schemas are outdated:

1. Change the release tag in `schemas.config.ts`
2. Delete locally fetched schemas: `rm public/schemas/*.json`
3. Run `pnpm build` to fetch schemas (after `pnpm install` if you didn't setup the project already)
4. You will get an error like this: `Error: Schema hash mismatch for https://raw.githubusercontent.com/EVerest/everest-framework/v0.20.2/schemas/config.yaml. Expected: 8b548f1b5ed6a29a04fd30ca344850bc8e8f2c132063cc4422e94e1108b93e9b, got: 8b548f1b5ed6a29a04fd30ca344850bc8e8f2c132063cc4422e94e1108b93e9a`. Copy the hash and paste it in `schemas.config.ts` in the appropriate place.
5. Run `pnpm build` again. It should now be successful 🎉

## Documentation

For more information about EVerest, please consult the
[general documentation](https://everest.github.io/nightly/).
The main EVerest repository can be found
[here](https://github.com/EVerest/everest).

## Troubleshooting

As the admin panel is currently in its beta stage, bug reports and feedback
are highly appreciated. If you encounter any issues, please feel free to open
an issue on our GitHub repository.

## Contributing

Contributions are welcome! If you'd like to contribute, please:

1. Create an issue to discuss the changes you propose.
2. Fork the repository.
3. Create your feature branch (`git checkout -b feature/AmazingFeature`).
4. Commit your changes (`git commit -s -m 'feat(some-module): amazing new
   feature'`). Please follow the
   [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/)
   standard and sign off your commits using the `-s` option.
5. Push to the branch (`git push origin feature/AmazingFeature`).
6. Open a pull request.

Please make sure to create an issue before creating a pull request.

## Dependencies

The most important technologies used in this project are:

- [Vue.js](https://vuejs.org/)
- [vuetify](https://vuetifyjs.com/)
- [Konva.js](https://konvajs.org)
- [vuetify-jsonschema-form](https://github.com/koumoul-dev/vuetify-jsonschema-form)

## License

This project is licensed under the Apache License Version 2.0, January 2004.
For more information, please see the
[LICENSE](https://github.com/EVerest/everest-admin-panel/blob/main/LICENSE)
file in this repository.
