// SPDX-License-Identifier: Apache-2.0
// Copyright 2020 - 2022 Pionix GmbH and Contributors to EVerest

import { EverestConfigList } from ".";

export default {
  "sample-config-sil": {
    active_modules: {
      auth: {
        connections: {
          tokenProvider: [
            {
              implementation_id: "main",
              module_id: "token_provider_1",
            },
          ],
          tokenValidator: [
            {
              implementation_id: "main",
              module_id: "token_validator",
            },
          ],
        },
        module: "JsAuth",
        "x-view-model": {
          position: {
            x: 6,
            y: 1,
          },
          terminals: {
            bottom: [
              {
                id: "tokenProvider",
                interface: "auth_token_provider",
                type: "requirement",
              },
            ],
            left: [
              {
                id: "main",
                interface: "auth",
                type: "provide",
              },
            ],
            right: [
              {
                id: "tokenValidator",
                interface: "auth_token_validator",
                type: "requirement",
              },
            ],
            top: [],
          },
        },
      },
      car_simulator: {
        connections: {
          simulation_control: [
            {
              implementation_id: "yeti_simulation_control",
              module_id: "yeti_driver",
            },
          ],
        },
        module: "JsCarSimulator",
        "x-view-model": {
          position: {
            x: -28,
            y: 35,
          },
          terminals: {
            bottom: [],
            left: [],
            right: [
              {
                id: "main",
                interface: "car_simulator",
                type: "provide",
              },
            ],
            top: [
              {
                id: "simulation_control",
                interface: "yeti_simulation_control",
                type: "requirement",
              },
            ],
          },
        },
      },
      energy_manager: {
        connections: {
          energy_trunk: [
            {
              implementation_id: "energy_grid",
              module_id: "grid_connection_point",
            },
          ],
        },
        module: "EnergyManager",
        "x-view-model": {
          position: {
            x: 2,
            y: 38,
          },
          terminals: {
            bottom: [],
            left: [],
            right: [
              {
                id: "main",
                interface: "energy_manager",
                type: "provide",
              },
            ],
            top: [
              {
                id: "energy_trunk",
                interface: "energy",
                type: "requirement",
              },
            ],
          },
        },
      },
      evse_manager: {
        connections: {
          auth: [
            {
              implementation_id: "main",
              module_id: "auth",
            },
          ],
          bsp: [
            {
              implementation_id: "board_support",
              module_id: "yeti_driver",
            },
          ],
          powermeter: [
            {
              implementation_id: "powermeter",
              module_id: "yeti_driver",
            },
          ],
        },
        module: "EvseManager",
        "x-view-model": {
          position: {
            x: -11,
            y: 13,
          },
          terminals: {
            bottom: [
              {
                id: "energy_grid",
                interface: "energy",
                type: "provide",
              },
            ],
            left: [
              {
                id: "bsp",
                interface: "board_support_AC",
                type: "requirement",
              },
              {
                id: "powermeter",
                interface: "powermeter",
                type: "requirement",
              },
            ],
            right: [
              {
                id: "evse",
                interface: "evse_manager",
                type: "provide",
              },
            ],
            top: [
              {
                id: "auth",
                interface: "auth",
                type: "requirement",
              },
            ],
          },
        },
      },
      grid_connection_point: {
        connections: {
          energy_consumer: [
            {
              implementation_id: "energy_grid",
              module_id: "evse_manager",
            },
          ],
          powermeter: [
            {
              implementation_id: "powermeter",
              module_id: "yeti_driver",
            },
          ],
        },
        module: "EnergyNode",
        "x-view-model": {
          position: {
            x: 2,
            y: 26,
          },
          terminals: {
            bottom: [
              {
                id: "energy_grid",
                interface: "energy",
                type: "provide",
              },
            ],
            left: [
              {
                id: "energy_consumer",
                interface: "energy",
                type: "requirement",
              },
              {
                id: "powermeter",
                interface: "powermeter",
                type: "requirement",
              },
              {
                id: "price_information",
                interface: "energy_price_information",
                type: "requirement",
              },
            ],
            right: [],
            top: [],
          },
        },
      },
      iso15118_charger: {
        connections: {},
        module: "JsRiseV2G",
        "x-view-model": {
          position: {
            x: -29,
            y: 4,
          },
          terminals: {
            bottom: [],
            left: [
              {
                id: "slac",
                interface: "ISO15118_3_SLAC",
                type: "requirement",
              },
            ],
            right: [
              {
                id: "ac_charger",
                interface: "ISO15118_ac_charger",
                type: "provide",
              },
              {
                id: "dc_charger",
                interface: "ISO15118_dc_charger",
                type: "provide",
              },
              {
                id: "main",
                interface: "empty",
                type: "provide",
              },
            ],
            top: [],
          },
        },
      },
      token_provider_1: {
        connections: {
          evse: [
            {
              implementation_id: "evse",
              module_id: "evse_manager",
            },
          ],
        },
        module: "JsDummyTokenProvider",
        "x-view-model": {
          position: {
            x: 6,
            y: 13,
          },
          terminals: {
            bottom: [],
            left: [
              {
                id: "evse",
                interface: "evse_manager",
                type: "requirement",
              },
            ],
            right: [],
            top: [
              {
                id: "main",
                interface: "auth_token_provider",
                type: "provide",
              },
            ],
          },
        },
      },
      token_validator: {
        connections: {},
        module: "JsDummyTokenValidator",
        "x-view-model": {
          position: {
            x: 22,
            y: 1,
          },
          terminals: {
            bottom: [],
            left: [
              {
                id: "main",
                interface: "auth_token_validator",
                type: "provide",
              },
            ],
            right: [],
            top: [],
          },
        },
      },
      yeti_driver: {
        connections: {},
        module: "JsYetiSimulator",
        "x-view-model": {
          position: {
            x: -28,
            y: 24,
          },
          terminals: {
            bottom: [
              {
                id: "yeti_simulation_control",
                interface: "yeti_simulation_control",
                type: "provide",
              },
            ],
            left: [
              {
                id: "yeti_extras",
                interface: "yeti_extras",
                type: "provide",
              },
              {
                id: "debug_state",
                interface: "debug_json",
                type: "provide",
              },
              {
                id: "debug_yeti",
                interface: "debug_json",
                type: "provide",
              },
            ],
            right: [
              {
                id: "debug_keepalive",
                interface: "debug_json",
                type: "provide",
              },
              {
                id: "debug_powermeter",
                interface: "debug_json",
                type: "provide",
              },
              {
                id: "powermeter",
                interface: "powermeter",
                type: "provide",
              },
            ],
            top: [
              {
                id: "board_support",
                interface: "board_support_AC",
                type: "provide",
              },
            ],
          },
        },
      },
    },
    "x-module-layout": {
      auth: {
        position: {
          x: 6,
          y: 1,
        },
        terminals: {
          bottom: [
            {
              id: "tokenProvider",
              interface: "auth_token_provider",
              type: "requirement",
            },
          ],
          left: [
            {
              id: "main",
              interface: "auth",
              type: "provide",
            },
          ],
          right: [
            {
              id: "tokenValidator",
              interface: "auth_token_validator",
              type: "requirement",
            },
          ],
          top: [],
        },
      },
      car_simulator: {
        position: {
          x: -28,
          y: 35,
        },
        terminals: {
          bottom: [],
          left: [],
          right: [
            {
              id: "main",
              interface: "car_simulator",
              type: "provide",
            },
          ],
          top: [
            {
              id: "simulation_control",
              interface: "yeti_simulation_control",
              type: "requirement",
            },
          ],
        },
      },
      energy_manager: {
        position: {
          x: 2,
          y: 38,
        },
        terminals: {
          bottom: [],
          left: [],
          right: [
            {
              id: "main",
              interface: "energy_manager",
              type: "provide",
            },
          ],
          top: [
            {
              id: "energy_trunk",
              interface: "energy",
              type: "requirement",
            },
          ],
        },
      },
      evse_manager: {
        position: {
          x: -11,
          y: 13,
        },
        terminals: {
          bottom: [
            {
              id: "energy_grid",
              interface: "energy",
              type: "provide",
            },
          ],
          left: [
            {
              id: "bsp",
              interface: "board_support_AC",
              type: "requirement",
            },
            {
              id: "powermeter",
              interface: "powermeter",
              type: "requirement",
            },
          ],
          right: [
            {
              id: "evse",
              interface: "evse_manager",
              type: "provide",
            },
          ],
          top: [
            {
              id: "auth",
              interface: "auth",
              type: "requirement",
            },
          ],
        },
      },
      grid_connection_point: {
        position: {
          x: 2,
          y: 26,
        },
        terminals: {
          bottom: [
            {
              id: "energy_grid",
              interface: "energy",
              type: "provide",
            },
          ],
          left: [
            {
              id: "energy_consumer",
              interface: "energy",
              type: "requirement",
            },
            {
              id: "powermeter",
              interface: "powermeter",
              type: "requirement",
            },
            {
              id: "price_information",
              interface: "energy_price_information",
              type: "requirement",
            },
          ],
          right: [],
          top: [],
        },
      },
      iso15118_charger: {
        position: {
          x: -29,
          y: 4,
        },
        terminals: {
          bottom: [],
          left: [
            {
              id: "slac",
              interface: "ISO15118_3_SLAC",
              type: "requirement",
            },
          ],
          right: [
            {
              id: "ac_charger",
              interface: "ISO15118_ac_charger",
              type: "provide",
            },
            {
              id: "dc_charger",
              interface: "ISO15118_dc_charger",
              type: "provide",
            },
            {
              id: "main",
              interface: "empty",
              type: "provide",
            },
          ],
          top: [],
        },
      },
      token_provider_1: {
        position: {
          x: 6,
          y: 13,
        },
        terminals: {
          bottom: [],
          left: [
            {
              id: "evse",
              interface: "evse_manager",
              type: "requirement",
            },
          ],
          right: [],
          top: [
            {
              id: "main",
              interface: "auth_token_provider",
              type: "provide",
            },
          ],
        },
      },
      token_validator: {
        position: {
          x: 22,
          y: 1,
        },
        terminals: {
          bottom: [],
          left: [
            {
              id: "main",
              interface: "auth_token_validator",
              type: "provide",
            },
          ],
          right: [],
          top: [],
        },
      },
      yeti_driver: {
        position: {
          x: -28,
          y: 24,
        },
        terminals: {
          bottom: [
            {
              id: "yeti_simulation_control",
              interface: "yeti_simulation_control",
              type: "provide",
            },
          ],
          left: [
            {
              id: "yeti_extras",
              interface: "yeti_extras",
              type: "provide",
            },
            {
              id: "debug_state",
              interface: "debug_json",
              type: "provide",
            },
            {
              id: "debug_yeti",
              interface: "debug_json",
              type: "provide",
            },
          ],
          right: [
            {
              id: "debug_keepalive",
              interface: "debug_json",
              type: "provide",
            },
            {
              id: "debug_powermeter",
              interface: "debug_json",
              type: "provide",
            },
            {
              id: "powermeter",
              interface: "powermeter",
              type: "provide",
            },
          ],
          top: [
            {
              id: "board_support",
              interface: "board_support_AC",
              type: "provide",
            },
          ],
        },
      },
    },
  },
} as EverestConfigList;
