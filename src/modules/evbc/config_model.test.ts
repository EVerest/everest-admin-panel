// SPDX-License-Identifier: Apache-2.0
// Copyright 2020 - 2025 Pionix GmbH and Contributors to EVerest

import { describe, it, expect } from "vitest";
import EVConfigModel from "./config_model";
import { EverestConfig, EverestDefinitions } from "./index";

// Consumer-only modules (e.g. API, EvAPI, Setup) have no "provides" section,
// provider-only modules have no "requires" section. Both are valid manifests.
const metadata = { license: "https://opensource.org/licenses/Apache-2.0", authors: ["EVerest"] };
const definitions: EverestDefinitions = {
  modules: {
    Consumer: {
      description: "Module without provides",
      requires: {
        provider: { interface: "example" },
      },
      metadata,
    },
    Provider: {
      description: "Module without requires",
      provides: {
        main: { interface: "example", description: "Example implementation" },
      },
      metadata,
    },
  },
  interfaces: {
    example: { description: "Example interface" },
  },
};

describe("EVConfigModel", () => {
  describe("modules without provides", () => {
    it("can add a module instance without provides", () => {
      const model = new EVConfigModel(definitions, "test");
      const instance_id = model.add_new_module_instance("Consumer");
      expect(model.get_module_instance(instance_id).type).toEqual("Consumer");
    });

    it("can load a config containing a module without provides", () => {
      const config: EverestConfig = {
        active_modules: {
          provider: { module: "Provider" },
          consumer: {
            module: "Consumer",
            connections: {
              provider: [{ module_id: "provider", implementation_id: "main" }],
            },
          },
        },
      };
      const model = new EVConfigModel(definitions, "test", config);
      expect(Object.values(model._instances).map((instance) => instance.id)).toEqual(["provider", "consumer"]);
      expect(Object.keys(model._connections)).toHaveLength(1);
    });

    it("rejects a connection to a module without provides with a descriptive error", () => {
      const model = new EVConfigModel(definitions, "test");
      const consumer_a = model.add_new_module_instance("Consumer", "consumer_a");
      const consumer_b = model.add_new_module_instance("Consumer", "consumer_b");
      expect(() =>
        model.add_connection({
          providing_instance_id: consumer_a,
          providing_impl_name: "main",
          requiring_instance_id: consumer_b,
          requirement_name: "provider",
        }),
      ).toThrow(/does not provide an implementation named/);
    });

    it("rejects a connection from a module without requires with a descriptive error", () => {
      const model = new EVConfigModel(definitions, "test");
      const provider_a = model.add_new_module_instance("Provider", "provider_a");
      const provider_b = model.add_new_module_instance("Provider", "provider_b");
      expect(() =>
        model.add_connection({
          providing_instance_id: provider_a,
          providing_impl_name: "main",
          requiring_instance_id: provider_b,
          requirement_name: "provider",
        }),
      ).toThrow(/does not have an requirement called/);
    });
  });
});
