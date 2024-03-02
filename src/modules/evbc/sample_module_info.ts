// SPDX-License-Identifier: Apache-2.0
// Copyright 2020 - 2022 Pionix GmbH and Contributors to EVerest

import { EverestModuleDefinitionList } from ".";

export default {
  EnergyManager: {
    description: "This module is the global Energy Manager for all EVSE/Charging stations in this building",
    enable_external_mqtt: false,
    metadata: {
      authors: ["Cornelius Claussen"],
      license: "https://opensource.org/licenses/Apache-2.0",
    },
    provides: {
      main: {
        description: "Main interface of the energy manager",
        interface: "energy_manager",
      },
    },
    requires: {
      energy_trunk: {
        interface: "energy",
      },
    },
  },
  EnergyNode: {
    config: {
      fuse_limit_A: {
        description: "Fuse limit in ampere for all phases",
        minimum: 0,
        type: "number",
      },
      phase_count: {
        description: "phase count limit. Omit if not limited in this fuse.",
        maximum: 3,
        minimum: 0,
        type: "integer",
      },
    },
    description: "This module is part of the Energy Tree and represents a simple current fuse.",
    enable_external_mqtt: false,
    metadata: {
      authors: ["Cornelius Claussen"],
      license: "https://opensource.org/licenses/Apache-2.0",
    },
    provides: {
      energy_grid: {
        description: "This is the chain interface to build the energy supply tree",
        interface: "energy",
      },
    },
    requires: {
      energy_consumer: {
        interface: "energy",
        max_connections: 128,
        min_connections: 1,
      },
      powermeter: {
        interface: "powermeter",
        max_connections: 128,
        min_connections: 0,
      },
      price_information: {
        interface: "energy_price_information",
        max_connections: 128,
        min_connections: 0,
      },
    },
  },
  EvseManager: {
    config: {
      country_code: {
        default: "DE",
        description: "Country Code",
        type: "string",
      },
      has_ventilation: {
        default: true,
        description: "Allow ventilated charging or not",
        type: "boolean",
      },
      max_current: {
        default: 32,
        description: "User configurable current limit for this EVSE",
        type: "number",
      },
      rcd_enabled: {
        default: true,
        description: "Enable or disable RCD",
        type: "boolean",
      },
      three_phases: {
        default: true,
        description: "Limit to three phases (true) or one phase (false)",
        type: "boolean",
      },
    },
    description: "EVSE Manager",
    enable_external_mqtt: true,
    metadata: {
      authors: ["Cornelius Claussen", "Anton Woellert"],
      license: "https://spdx.org/licenses/Apache-2.0.html",
    },
    provides: {
      energy_grid: {
        description: "This is the tree leaf interface to build the energy supply tree",
        interface: "energy",
      },
      evse: {
        description: "This is the main evsemanager interface",
        interface: "evse_manager",
      },
    },
    requires: {
      auth: {
        interface: "auth",
      },
      bsp: {
        interface: "board_support_AC",
      },
      powermeter: {
        interface: "powermeter",
      },
    },
  },
  EvseSlac: {
    description: "Implementation of SLAC data link negotiation according to ISO15118-3.",
    metadata: {
      authors: ["aw@pionix.de", "Cornelius Claussen (Pionix GmbH)"],
      base_license: "https://directory.fsf.org/wiki/License:BSD-3-Clause-Clear",
      license: "https://opensource.org/licenses/Apache-2.0",
    },
    provides: {
      main: {
        config: {
          device: {
            default: "eth1",
            description: "Ethernet device used for PLC.",
            type: "string",
          },
          evse_id: {
            default: "PIONIX_SAYS_HELLO",
            description: "EVSE id - 17 octets.",
            type: "string",
          },
          nid: {
            default: "pionix!",
            description: "NID (Network Identification Key) - 7 octets.",
            type: "string",
          },
          number_of_sounds: {
            default: 10,
            description: "SLAC number of sounds.",
            type: "integer",
          },
        },
        description: "SLAC interface implementation.",
        interface: "slac",
      },
    },
  },
  Example: {
    description: "Simple example module written in C++",
    enable_external_mqtt: true,
    metadata: {
      authors: ["Kai-Uwe Hermann"],
      license: "https://opensource.org/licenses/Apache-2.0",
    },
    provides: {
      example: {
        config: {
          current: {
            description: "The current the physical connector can supply",
            maximum: 60,
            minimum: 1,
            type: "number",
          },
          enum_test: {
            description: "A config value that tests the enum type",
            enum: ["one", "two", "three"],
            type: "string",
          },
          enum_test2: {
            description: "Another config value that tests the enum type",
            enum: [1, 2, 3],
            type: "integer",
          },
        },
        description: "This implements an example interface that uses multiple framework features",
        interface: "example_child",
      },
      store: {
        description: "This implements the kvs interface, mostly for testing multiple interfaces in one manifest",
        interface: "kvs",
      },
    },
    requires: {
      kvs: {
        interface: "kvs",
      },
    },
  },
  ExampleUser: {
    description: "Simple example module written in C++ and using the other example module",
    metadata: {
      authors: ["Kai-Uwe Hermann"],
      license: "https://opensource.org/licenses/Apache-2.0",
    },
    provides: {
      example_user: {
        description: "This implements the example_user interface",
        interface: "example_user",
      },
    },
    requires: {
      example: {
        interface: "example",
      },
    },
  },
  JsAuth: {
    description: "This module implements the authentication API for the everest system.",
    metadata: {
      authors: ["Thilo Molitor"],
      license: "https://opensource.org/licenses/Apache-2.0",
    },
    provides: {
      main: {
        description: "This implements the authentication interface for the everest system.",
        interface: "auth",
      },
    },
    requires: {
      tokenProvider: {
        interface: "auth_token_provider",
        max_connections: 128,
        min_connections: 1,
      },
      tokenValidator: {
        interface: "auth_token_validator",
        max_connections: 128,
        min_connections: 1,
      },
    },
  },
  JsCarSimulator: {
    description:
      "This module implements a Car simulator that can execute charging sessions using the yeti-simulation-control interface",
    enable_external_mqtt: true,
    metadata: {
      authors: ["Cornelius Claussen"],
      license: "https://opensource.org/licenses/Apache-2.0",
    },
    provides: {
      main: {
        description: "This implements the car simulator",
        interface: "car_simulator",
      },
    },
    requires: {
      simulation_control: {
        interface: "yeti_simulation_control",
      },
    },
  },
  JsDummy: {
    description: "This module is only for testing",
    metadata: {
      authors: ["aw"],
      license: "https://opensource.org/licenses/MIT",
    },
    provides: {
      main: {
        config: {
          test: {
            description: "test parm",
            type: "boolean",
          },
          type: {
            description: "test type",
            type: "number",
          },
        },
        description: "This implements the dummy API for the everest system.",
        interface: "dummy",
      },
    },
  },
  JsDummyTokenProvider: {
    description:
      "Dummy token provider that listens to AuthRequired event from evse_manager and then publishes one token",
    metadata: {
      authors: ["Thilo Molitor", "Cornelius Claussen"],
      license: "https://opensource.org/licenses/Apache-2.0",
    },
    provides: {
      main: {
        config: {
          timeout: {
            default: 10,
            description: "Time our dummy token is valid (in s)",
            maximum: 120,
            minimum: 0,
            type: "number",
          },
          token: {
            default: "DEADBEEF",
            description: "Dummy token string to return",
            maxLength: 20,
            minLength: 1,
            type: "string",
          },
          type: {
            default: "dummy",
            description: "Type to report for our dummy token",
            maxLength: 32,
            minLength: 2,
            type: "string",
          },
        },
        description: "Main implementation of dummy token provider always returning one configured token",
        interface: "auth_token_provider",
      },
    },
    requires: {
      evse: {
        interface: "evse_manager",
      },
    },
  },
  JsDummyTokenValidator: {
    description: "Dummy token validator always returning the same configured token validation result for every token",
    metadata: {
      authors: ["Thilo Molitor"],
      license: "https://opensource.org/licenses/Apache-2.0",
    },
    provides: {
      main: {
        config: {
          sleep: {
            default: 0.5,
            description: "Time to wait before returning the dumy validation result (in s)",
            maximum: 120,
            minimum: 0,
            type: "number",
          },
          validation_reason: {
            default: "Token valid",
            description: "Dummy validation reason to return",
            minLength: 5,
            type: "string",
          },
          validation_result: {
            default: "Accepted",
            description: "Dummy validation result to return",
            enum: ["Accepted", "Blocked", "Expired", "Invalid"],
            type: "string",
          },
        },
        description:
          "Main implementation of dummy token validator always returning the same configured token validation result for every token",
        interface: "auth_token_validator",
      },
    },
  },
  JsEmulator: {
    description: "Emulation modul, provides different emulation units",
    metadata: {
      authors: ["aw@pionix.de"],
      license: "https://opensource.org/licenses/MIT",
    },
    provides: {
      iso15118_evcc: {
        config: {
          conf1: {
            description: "conf1 setting",
            type: "string",
          },
        },
        description: "Unit for emulating an ISO15118 EVCC",
        interface: "iso15118_evcc_emu",
      },
    },
  },
  JsForecastDotSolar: {
    description: "This modules fetches data from the ForecastDotSolar API and publishes it.",
    enable_external_mqtt: true,
    metadata: {
      authors: ["Andreas Heinrich", "Leonardo Oliveira"],
      license: "https://opensource.org/licenses/Apache-2.0",
    },
    provides: {
      main: {
        config: {
          all_panels_max_power: {
            description: "Maximum power peak production of ALL combined solar panels",
            minimum: 0,
            type: "number",
          },
          api_key: {
            description: "API key for forecast.solar",
            type: "string",
          },
          azimuth: {
            description: "Plane azimuth angle",
            maximum: 360,
            minimum: 0,
            type: "number",
          },
          latitude: {
            description: "Location latitude",
            maximum: 90,
            minimum: -90,
            type: "number",
          },
          longitude: {
            description: "Location longitude",
            maximum: 180,
            minimum: -180,
            type: "number",
          },
          update_interval: {
            description: "Update interval in minutes",
            type: "integer",
          },
        },
        description: "This interface is responsible for providing the solar forecast data",
        interface: "solar_forecast",
      },
    },
  },
  JsPN532TokenProvider: {
    description: "PN532 RFID/NFC token provider returning the token as soon as the tag can be read by the reader",
    metadata: {
      authors: ["Thilo Molitor"],
      license: "https://opensource.org/licenses/Apache-2.0",
    },
    provides: {
      main: {
        config: {
          baud_rate: {
            default: 115200,
            description: "Serial baud rate to use when communicating with PN532 hardware",
            maximum: 230400,
            minimum: 9600,
            type: "integer",
          },
          serial_port: {
            default: "/dev/ttyS0",
            description: "Serial port the PN532 hardware is connected to",
            type: "string",
          },
          timeout: {
            default: 30,
            description: "Time a new token is valid (in s)",
            maximum: 120,
            minimum: 0,
            type: "number",
          },
        },
        description: "Implementation of PN532 RFID/NFC token provider",
        interface: "auth_token_provider",
      },
    },
  },
  JsRiseV2G: {
    description:
      "This module implements ISO15118 ac and dc charging by proxying everything into a modified RISE-V2G implementation",
    enable_external_mqtt: true,
    metadata: {
      authors: ["Thilo Molitor"],
      license: "https://opensource.org/licenses/Apache-2.0",
    },
    provides: {
      ac_charger: {
        description: "This module implements the ISO15118-2 implementation of an AC charger",
        interface: "ISO15118_ac_charger",
      },
      dc_charger: {
        description: "This module implements the ISO15118-2 implementation of a DC charger",
        interface: "ISO15118_dc_charger",
      },
      main: {
        config: {
          mqtt_base_path: {
            default: "everest_external/iso15118/java",
            description: "Base path for the mqtt communication used by the java process",
            type: "string",
          },
        },
        description: "This module implements a proxy to the RISE-V2G ISO15118-2 implementation in java",
        interface: "empty",
      },
    },
    requires: {
      slac: {
        interface: "ISO15118_3_SLAC",
        min_connections: 0,
      },
    },
  },
  JsTibber: {
    description: "This modules fetches data from the Tibber Price Energy Forecast API and publishes it.",
    enable_external_mqtt: false,
    metadata: {
      authors: ["Andreas Heinrich", "Leonardo Oliveira", "Cornelius Claussen"],
      license: "https://opensource.org/licenses/Apache-2.0",
    },
    provides: {
      main: {
        config: {
          additional_cost_per_kwh: {
            description: "Constant to add to the reported price. Usually 0.",
            type: "number",
          },
          api_key: {
            description: "API key from Tibber developer account",
            type: "string",
          },
          update_interval: {
            description: "Update interval in minutes. Typically 60 or so.",
            type: "integer",
          },
        },
        description: "This interface is responsible for providing the price forecast data from Tibber",
        interface: "energy_price_information",
      },
    },
  },
  JsYetiSimulator: {
    description: "SIL simulator for YETI hardware v1.0",
    enable_external_mqtt: true,
    metadata: {
      authors: ["Cornelius Claussen"],
      license: "https://opensource.org/licenses/Apache-2.0",
    },
    provides: {
      board_support: {
        description: "provides the board support Interface to low level control control pilot, relais, rcd, motor lock",
        interface: "board_support_AC",
      },
      debug_keepalive: {
        description: "Provides the keepalive as a json object",
        interface: "debug_json",
      },
      debug_powermeter: {
        description: "Provides the powermeter as a json object",
        interface: "debug_json",
      },
      debug_state: {
        description: "Provides the state as a json object",
        interface: "debug_json",
      },
      debug_yeti: {
        description: "provides the debug information of the charging driver",
        interface: "debug_json",
      },
      powermeter: {
        description: "provides the Yeti Internal Power Meter",
        interface: "powermeter",
      },
      yeti_extras: {
        description: "extra functionality special for Yeti",
        interface: "yeti_extras",
      },
      yeti_simulation_control: {
        description: "Interface for the Yeti HIL simulator",
        interface: "yeti_simulation_control",
      },
    },
  },
  ModbusMeter: {
    description: "Module that collects power and energy measurements from a MODBUS device",
    enable_external_mqtt: true,
    metadata: {
      authors: ["Andreas Heinrich", "Leonardo Fernandes"],
      license: "https://opensource.org/licenses/Apache-2.0",
    },
    provides: {
      main: {
        config: {
          energy_in_length: {
            description: "Amount of modbus registers uint16 = 1, uint32 = 2, uint64 = 4",
            enum: [2],
            type: "integer",
          },
          energy_in_register: {
            description: "Modbus register for energy in Watthours imported",
            minimum: 0,
            type: "integer",
          },
          energy_out_length: {
            description: "Amount of modbus registers uint16 = 1, uint32 = 2, uint64 = 4",
            enum: [2],
            type: "integer",
          },
          energy_out_register: {
            description: "Modbus register for energy in Watthours imported",
            minimum: 0,
            type: "integer",
          },
          energy_unit_id: {
            description: "Modbus unit_id, mostly 1",
            maximum: 255,
            minimum: 1,
            type: "integer",
          },
          modbus_ip_address: {
            description: "The ip address which should be used to get the modbus values",
            pattern: "^(?:[0-9]{1,3}.){3}[0-9]{1,3}$",
            type: "string",
          },
          modbus_port: {
            description: "The port which should be used to get the modbus values",
            minimum: 0,
            type: "integer",
          },
          power_in_length: {
            description: "Amount of modbus registers uint16 = 1, uint32 = 2, uint64 = 4",
            enum: [2],
            type: "integer",
          },
          power_in_register: {
            description: "Modbus register for power in Watts imported",
            minimum: 0,
            type: "integer",
          },
          power_out_length: {
            description: "Amount of modbus registers uint16 = 1, uint32 = 2, uint64 = 4",
            enum: [2],
            type: "integer",
          },
          power_out_register: {
            description: "Modbus register for power in Watts exported",
            minimum: 0,
            type: "integer",
          },
          power_unit_id: {
            description: "Modbus unit_id, mostly 1",
            maximum: 255,
            minimum: 1,
            type: "integer",
          },
          update_interval: {
            description: "Update interval in milliseconds.",
            minimum: 0,
            type: "integer",
          },
        },
        description: "This is the main unit of the module",
        interface: "powermeter",
      },
    },
  },
  OCPP: {
    config: {
      ChargePointConfigPath: {
        default: "charge_point_config.json",
        description: "Path to the configuration file",
        type: "string",
      },
      DatabasePath: {
        default: "/tmp/ocpp_1_6_charge_point",
        description: "Path to the persistent SQLite database folder",
        type: "string",
      },
      SchemasPath: {
        default: "/tmp/ocpp_1_6_charge_point",
        description: "Path to the schemas folder in which the OCPP 1.6 schemas reside",
        type: "string",
      },
    },
    description: "A OCPP charge point / charging station module, currently targeting OCPP-J 1.6",
    enable_external_mqtt: true,
    metadata: {
      authors: ["Kai-Uwe Hermann"],
      license: "https://opensource.org/licenses/Apache-2.0",
    },
    provides: {
      auth_validator: {
        description: "Validates the provided auth token with OCPP",
        interface: "auth_token_validator",
      },
      main: {
        description: "This is a OCPP 1.6 charge point",
        interface: "ocpp_1_6_charge_point",
      },
    },
    requires: {
      evse_manager: {
        interface: "evse_manager",
        max_connections: 128,
        min_connections: 1,
      },
    },
  },
  PersistentStore: {
    config: {
      sqlite_db_file_path: {
        default: "everest_persistent_store.db",
        description: "Path to the SQLite db file.",
        type: "string",
      },
    },
    description: "Simple implementation of a SQLite backed persistent key-value store",
    metadata: {
      authors: ["Kai-Uwe Hermann"],
      license: "https://opensource.org/licenses/Apache-2.0",
    },
    provides: {
      main: {
        description: "This implements a persistent key-value store",
        interface: "kvs",
      },
    },
  },
  Store: {
    description: "Simple implementation of a memory-backed key-value store",
    metadata: {
      authors: ["Kai-Uwe Hermann", "Thilo Molitor"],
      license: "https://opensource.org/licenses/Apache-2.0",
    },
    provides: {
      main: {
        description: "This implements a key-value store",
        interface: "kvs",
      },
    },
  },
  SunspecReader: {
    description:
      "Module that collects measurements from a Sunspec-conformant device, given a string formatted input query.",
    enable_external_mqtt: true,
    metadata: {
      authors: ["Andreas Heinrich", "Leonardo Fernandes"],
      license: "https://opensource.org/licenses/Apache-2.0",
    },
    provides: {
      main: {
        config: {
          ip_address: {
            description: "IP address of device to be read.",
            pattern:
              "^\\b(?:(?:2(?:[0-4][0-9]|5[0-5])|[0-1]?[0-9]?[0-9])\\.){3}(?:(?:2([0-4][0-9]|5[0-5])|[0-1]?[0-9]?[0-9]))\\b$",
            type: "string",
          },
          port: {
            description: "TCP port number.",
            minimum: 0,
            type: "integer",
          },
          query: {
            description: "Query string in the predefined format.",
            pattern: "^<[0-9]+>::<[a-zA-Z]+>::<[a-zA-Z]+>$",
            type: "string",
          },
          read_interval: {
            description: "Polling interval for read (in milliseconds).",
            type: "integer",
          },
          unit: {
            description: "MODBUS unit ID.",
            minimum: 0,
            type: "integer",
          },
        },
        description: "This is the main unit of the module",
        interface: "sunspec_reader",
      },
    },
  },
  SunspecScanner: {
    description: "Module to implement a scan for Sunspec compliant devices",
    enable_external_mqtt: true,
    metadata: {
      authors: ["Andreas Heinrich", "Leonardo Fernandes"],
      license: "https://opensource.org/licenses/Apache-2.0",
    },
    provides: {
      main: {
        description: "This is the main unit of the module",
        interface: "sunspec_scanner",
      },
    },
  },
  TestUser: {
    description:
      "This implements a simple power regulator module publishing the max_current for the charger being the minimum of the incomng max_current values received from power_in and (optionally solar modules)",
    metadata: {
      authors: ["Nobody"],
      license: "https://opensource.org/licenses/Apache-2.0",
    },
    provides: {
      fool: {
        description: "nothing",
        interface: "empty",
      },
    },
    requires: {
      test_intf: {
        interface: "TestIntf",
      },
    },
  },
  TestX: {
    description:
      "This implements a simple power regulator module publishing the max_current for the charger being the minimum of the incomng max_current values received from power_in and (optionally solar modules)",
    metadata: {
      authors: ["Nobody"],
      license: "https://opensource.org/licenses/Apache-2.0",
    },
    provides: {
      main: {
        description: "This implements the main logic of the module Power",
        interface: "TestIntf",
      },
    },
  },
  YetiDriver: {
    config: {
      baud_rate: {
        default: 115200,
        description: "Serial baud rate to use when communicating with Yeti hardware",
        maximum: 230400,
        minimum: 9600,
        type: "integer",
      },
      control_mode: {
        default: "low",
        description: "none, high or low",
        enum: ["none", "high", "low"],
        type: "string",
      },
      serial_port: {
        default: "/dev/ttyUSB0",
        description: "Serial port the Yeti hardware is connected to",
        type: "string",
      },
    },
    description: "Driver module for the YETI hardware v1.0",
    enable_external_mqtt: true,
    metadata: {
      authors: ["Cornelius Claussen", "Kai-Uwe Hermann", "Thilo Molitor", "Anton Woellert"],
      license: "https://opensource.org/licenses/Apache-2.0",
    },
    provides: {
      board_support: {
        description: "provides the board support Interface to low level control control pilot, relais, rcd, motor lock",
        interface: "board_support_AC",
      },
      debug_keepalive: {
        description: "Provides the keepalive as a json object",
        interface: "debug_json",
      },
      debug_powermeter: {
        description: "Provides the powermeter as a json object",
        interface: "debug_json",
      },
      debug_state: {
        description: "Provides the state as a json object",
        interface: "debug_json",
      },
      debug_yeti: {
        description: "provides the debug information of the charging driver",
        interface: "debug_json",
      },
      powermeter: {
        description: "provides the Yeti Internal Power Meter",
        interface: "powermeter",
      },
      yeti_extras: {
        description: "extra functionality special for Yeti",
        interface: "yeti_extras",
      },
      yeti_simulation_control: {
        description: "Interface for the Yeti HIL simulator",
        interface: "yeti_simulation_control",
      },
    },
  },
} as EverestModuleDefinitionList;
