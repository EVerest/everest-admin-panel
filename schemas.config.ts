// SPDX-License-Identifier: Apache-2.0
// Copyright 2020 - 2024 Pionix GmbH and Contributors to EVerest

// configure the release tag / branch of EVerest/everest-framework here
const releaseTag = 'v0.20.2';

export type RemoteSchema = {
    url: string;
    name: string;
    hash: string;
}

// TODO : Currently we reference the schemas from a tag of the git repo.
// TODO : In the future we might want to release the schemas separately with a version number.
export const remoteSchemas: RemoteSchema[] = [
    {
        url: `https://raw.githubusercontent.com/EVerest/everest-framework/${releaseTag}/schemas/config.yaml`,
        name: 'config',
        hash: '8b548f1b5ed6a29a04fd30ca344850bc8e8f2c132063cc4422e94e1108b93e9a' // sha256 hash of the fetched schema
    },
    {
        url: `https://raw.githubusercontent.com/EVerest/everest-framework/${releaseTag}/schemas/interface.yaml`,
        name: 'interface',
        hash: '9b1059249c4073737bec94753a6735f664d77b97321d4379b9de3179ea0a9cd5' // sha256 hash of the fetched schema
    }
];
