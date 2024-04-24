// SPDX-License-Identifier: Apache-2.0
// Copyright 2020 - 2024 Pionix GmbH and Contributors to EVerest

// configure the release branch here
const releaseBranch = 'release/2024.3.0-rc1';

export type RemoteSchema = {
    url: string;
    name: string;
    hash: string;
}

// TODO : Currently we reference the schemas from a branch of the git repo.
// TODO : In the future we might want to release the schemas separately with a version number.
export const remoteSchemas: RemoteSchema[] = [
    {
        url: `https://raw.githubusercontent.com/EVerest/everest-framework/${releaseBranch}/schemas/config.yaml`,
        name: 'config',
        hash: 'cd2296cdf0bd29bfffa58e920e5052d1bd5d2f1d2fd63d92fd5ac7e8af64d80b'
    },
    {
        url: `https://raw.githubusercontent.com/EVerest/everest-framework/${releaseBranch}/schemas/interface.yaml`,
        name: 'interface',
        hash: '9b1059249c4073737bec94753a6735f664d77b97321d4379b9de3179ea0a9cd5'
    }
];
