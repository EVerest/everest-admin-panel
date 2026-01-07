// SPDX-License-Identifier: Apache-2.0
// Copyright 2020 - 2026 Pionix GmbH and Contributors to EVerest
import { remoteSchemas } from "../schemas.config";
import yaml from "js-yaml";
import crypto from "crypto";
import fs from "fs";

export function vitePluginFetchSchemas() {
  return {
    name: "vite-plugin-fetch-schema",
    buildStart() {
      fetchRemoteSchemas();
    },
  };
}

function sha256(data: string): string {
  return crypto.createHash("sha256").update(data, "utf8").digest("hex");
}

export function fetchRemoteSchemas() {
  remoteSchemas.forEach((schema) => {
    void (async () => {
      if (!fs.existsSync(`./public/schemas/${schema.name}.json`)) {
        const fetchedSchemaYAML = await fetch(schema.url).then((res) =>
          res.text(),
        );
        const fetchedSchemaHash = sha256(fetchedSchemaYAML);
        if (fetchedSchemaHash !== schema.hash) {
          throw new Error(
            `Schema hash mismatch for ${schema.url}. Expected: ${schema.hash}, got: ${fetchedSchemaHash}`,
          );
        }
        const schemaJSON = yaml.load(fetchedSchemaYAML);

        schema.hash = fetchedSchemaHash;
        fs.mkdirSync("./public/schemas", { recursive: true });
        fs.writeFileSync(
          `./public/schemas/${schema.name}.json`,
          JSON.stringify(schemaJSON),
        );

        console.log(`${schema.url} fetched and cached successfully.`);
      }
    })();
  });
}
