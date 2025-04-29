// SPDX-License-Identifier: Apache-2.0
// Copyright 2020 - 2025 Pionix GmbH and Contributors to EVerest

import { EverestModuleDefinitionList } from "../index";

export default {
  API: {
    config: {
      charger_information_file: {
        default: "",
        description: "Path to a file containing information about the charger like its serial number",
        type: "string",
      },
      hw_caps_max_current_export_decimal_places: {
        default: 2,
        description: "Maximum number of decimal places for maximum export current in the hardware capabilities",
        minimum: 0,
        type: "integer",
      },
      hw_caps_max_current_export_round_to: {
        default: 0,
        description: "Round maximum export current in hardware limits to the nearest step. Ignored if value is 0",
        type: "number",
      },
      hw_caps_max_current_import_decimal_places: {
        default: 2,
        description: "Maximum number of decimal places for maximum import current in the hardware capabilities",
        minimum: 0,
        type: "integer",
      },
      hw_caps_max_current_import_round_to: {
        default: 0,
        description: "Round maximum import current in hardware limits to the nearest step. Ignored if value is 0",
        type: "number",
      },
      hw_caps_max_plug_temperature_C_decimal_places: {
        default: 2,
        description: "Maximum number of decimal places for max_plug_temperature_C in the hardware capabilities",
        minimum: 0,
        type: "integer",
      },
      hw_caps_max_plug_temperature_C_round_to: {
        default: 0,
        description: "Round max_plug_temperature_C in hardware limits to the nearest step. Ignored if value is 0",
        type: "number",
      },
      hw_caps_min_current_export_decimal_places: {
        default: 2,
        description: "Maximum number of decimal places for minimum export current in the hardware capabilities",
        minimum: 0,
        type: "integer",
      },
      hw_caps_min_current_export_round_to: {
        default: 0,
        description: "Round minimum export current in hardware limits to the nearest step. Ignored if value is 0",
        type: "number",
      },
      hw_caps_min_current_import_decimal_places: {
        default: 2,
        description: "Maximum number of decimal places for minimum import current in the hardware capabilities",
        minimum: 0,
        type: "integer",
      },
      hw_caps_min_current_import_round_to: {
        default: 0,
        description: "Round minimum import current in hardware limits to the nearest step. Ignored if value is 0",
        type: "number",
      },
      limits_max_current_decimal_places: {
        default: 2,
        description: "Maximum number of decimal places for maximum current in the limits",
        minimum: 0,
        type: "integer",
      },
      limits_max_current_round_to: {
        default: 0,
        description: "Round maximum current in limits to the nearest step. Ignored if value is 0",
        type: "number",
      },
      powermeter_VAR_decimal_places: {
        default: 2,
        description: "Maximum number of decimal places for VAR in the power meter",
        minimum: 0,
        type: "integer",
      },
      powermeter_VAR_round_to: {
        default: 0,
        description: "Round VAR to the nearest step. Ignored if value is 0",
        type: "number",
      },
      powermeter_current_decimal_places: {
        default: 2,
        description: "Maximum number of decimal places for current in the power meter",
        minimum: 0,
        type: "integer",
      },
      powermeter_current_round_to: {
        default: 0,
        description: "Round current to the nearest step. Ignored if value is 0",
        type: "number",
      },
      powermeter_energy_export_decimal_places: {
        default: 2,
        description: "Maximum number of decimal places for export energy in the power meter",
        minimum: 0,
        type: "integer",
      },
      powermeter_energy_export_round_to: {
        default: 0,
        description: "Round export energy to the nearest step. Ignored if value is 0",
        type: "number",
      },
      powermeter_energy_import_decimal_places: {
        default: 2,
        description: "Maximum number of decimal places for import energy in the power meter",
        minimum: 0,
        type: "integer",
      },
      powermeter_energy_import_round_to: {
        default: 0,
        description: "Round import energy to the nearest step. Ignored if value is 0",
        type: "number",
      },
      powermeter_frequency_decimal_places: {
        default: 2,
        description: "Maximum number of decimal places for frequency in the power meter",
        minimum: 0,
        type: "integer",
      },
      powermeter_frequency_round_to: {
        default: 0,
        description: "Round frequency to the nearest step. Ignored if value is 0",
        type: "number",
      },
      powermeter_power_decimal_places: {
        default: 2,
        description: "Maximum number of decimal places for power in the power meter",
        minimum: 0,
        type: "integer",
      },
      powermeter_power_round_to: {
        default: 0,
        description: "Round power to the nearest step. Ignored if value is 0",
        type: "number",
      },
      powermeter_voltage_decimal_places: {
        default: 2,
        description: "Maximum number of decimal places for voltage in the power meter",
        minimum: 0,
        type: "integer",
      },
      powermeter_voltage_round_to: {
        default: 0,
        description: "Round voltage to the nearest step. Ignored if value is 0",
        type: "number",
      },
      telemetry_evse_temperature_C_decimal_places: {
        default: 2,
        description: "Maximum number of decimal places for evse_temperature_C in telemetry",
        minimum: 0,
        type: "integer",
      },
      telemetry_evse_temperature_C_round_to: {
        default: 0,
        description: "Round evse_temperature_C in telemetry to the nearest step. Ignored if value is 0",
        type: "number",
      },
      telemetry_fan_rpm_decimal_places: {
        default: 2,
        description: "Maximum number of decimal places for fan RPM in telemetry",
        minimum: 0,
        type: "integer",
      },
      telemetry_fan_rpm_round_to: {
        default: 0,
        description: "Round fan RPM in telemetry to the nearest step. Ignored if value is 0",
        type: "number",
      },
      telemetry_plug_temperature_C_decimal_places: {
        default: 2,
        description: "Maximum number of decimal places for RCD current in telemetry",
        minimum: 0,
        type: "integer",
      },
      telemetry_plug_temperature_C_round_to: {
        default: 0,
        description: "Round plug_temperature_C in telemetry to the nearest step. Ignored if value is 0",
        type: "number",
      },
      telemetry_supply_voltage_12V_decimal_places: {
        default: 2,
        description: "Maximum number of decimal places for supply voltage 12V in telemetry",
        minimum: 0,
        type: "integer",
      },
      telemetry_supply_voltage_12V_round_to: {
        default: 0,
        description: "Round supply voltage 12V in telemetry to the nearest step. Ignored if value is 0",
        type: "number",
      },
      telemetry_supply_voltage_minus_12V_decimal_places: {
        default: 2,
        description: "Maximum number of decimal places for supply voltage -12V in telemetry",
        minimum: 0,
        type: "integer",
      },
      telemetry_supply_voltage_minus_12V_round_to: {
        default: 0,
        description: "Round supply voltage -12V in telemetry to the nearest step. Ignored if value is 0",
        type: "number",
      },
    },
    description: "The EVerest API module, exposing some internal functionality on an external MQTT connection.",
    enable_external_mqtt: true,
    metadata: {
      authors: ["Kai-Uwe Hermann"],
      license: "https://opensource.org/licenses/Apache-2.0",
    },
    provides: {
      main: {
        description: "EVerest API",
        interface: "empty",
      },
    },
    requires: {
      error_history: {
        interface: "error_history",
        max_connections: 1,
        min_connections: 0,
      },
      evse_energy_sink: {
        interface: "external_energy_limits",
        max_connections: 128,
        min_connections: 0,
      },
      evse_manager: {
        interface: "evse_manager",
        max_connections: 128,
        min_connections: 1,
      },
      ocpp: {
        interface: "ocpp",
        max_connections: 1,
        min_connections: 0,
      },
      random_delay: {
        interface: "uk_random_delay",
        max_connections: 128,
        min_connections: 0,
      },
    },
  },
  Auth: {
    config: {
      connection_timeout: {
        description:
          "Defines how many seconds an authorization is valid before it is discarded. Defines how many seconds a user can provide authorization after the plug in of a car",
        type: "integer",
      },
      ignore_connector_faults: {
        default: false,
        description:
          "Boolean value to describe the handling of faults on connectors.\nIf true, faults reported on connectors are ignored, i.e. they can still be authorized. This should be disabled in most use cases, but e.g. in free charging applications it may be useful to allow a charging session in the following case: A connector e.g. has an overtemperature fault that at some point will clear once it is cooled down. A car is plugged in before  the error is cleared. The user would expect that the charging starts once it is cooled down. When this option is set to false,  it will not be authorized on plug in as the connector is in fault state and it will never recover until the car is replugged. If it is set to true, the authorization happens on the faulty connector and charging will start once the fault is cleared.\nIf false, faulty connectors are treated as not available and will not be authorized. This is a good setting for e.g. public chargers.",
        type: "boolean",
      },
      master_pass_group_id: {
        default: "",
        description:
          "IdTokens that have this id as groupId belong to the Master Pass Group. Meaning they can stop any ongoing transaction, but cannot start transactions. This can, for example, be used by law enforcement personal to stop any ongoing transaction when an EV has to be towed away. If left empty, master_pass_group_id is not used.",
        type: "string",
      },
      prioritize_authorization_over_stopping_transaction: {
        default: true,
        description:
          "Boolean value to describe the handling of parent id tokens.\nIf true, a new token will be preferably used for authorization of a new connector if a connector is available. It will not be used to finish a transaction using its parent_id_token. parent_id_token will only be used to finish transaction if no connector is available for authorization anymore.\nIf false, a new token will be used to finish a transaction if the parent_id_token of a present transaction matches the parent_id_token of the provided_token. Authorization to available connectors will only be provided if no transaction can be stopped using the given parent_id_token",
        type: "boolean",
      },
      selection_algorithm: {
        default: "FindFirst",
        description:
          "The selection algorithm contains the logic to select one connector for an incoming token. In case the charging station has only one connector, the selection of a connector is pretty straight-forward because there is only one that is  available. The selection algorithm becomes relevant in case the Auth  module manages authorization requests  for multiple connectors. The following values can be set: PlugEvents: Selection of connector is based on EV Plug In events FindFirst: Simply selects the first available connector that has no active transaction UserInput: Placeholder, not yet implemented",
        type: "string",
      },
    },
    description:
      "This module implements the authentication handling for the EVerest. It is responsible for providing authorization to the connected evse managers. In addition to that, it handles the reservation management.",
    metadata: {
      authors: ["Piet Gömpel"],
      license: "https://opensource.org/licenses/Apache-2.0",
    },
    provides: {
      main: {
        description: "This implements the auth interface for EVerest",
        interface: "auth",
      },
      reservation: {
        description: "This implements the reservation interface for EVerest.",
        interface: "reservation",
      },
    },
    requires: {
      evse_manager: {
        interface: "evse_manager",
        max_connections: 128,
        min_connections: 1,
      },
      kvs: {
        interface: "kvs",
        max_connections: 1,
        min_connections: 0,
      },
      token_provider: {
        interface: "auth_token_provider",
        max_connections: 128,
        min_connections: 1,
      },
      token_validator: {
        interface: "auth_token_validator",
        max_connections: 128,
        min_connections: 1,
      },
    },
  },
  DCSupplySimulator: {
    description: "Implementation of a programmable power supply for DC charging",
    metadata: {
      authors: [
        "Cornelius Claussen (Pionix GmbH)",
        "Fabian Hartung (chargebyte GmbH)",
        "Mohannad Oraby (chargebyte GmbH)",
        "Sebastian Lukas (Pionix GmbH)",
      ],
      license: "https://opensource.org/licenses/Apache-2.0",
    },
    provides: {
      main: {
        config: {
          bidirectional: {
            default: true,
            description: "Set to true for bidirectional supply",
            type: "boolean",
          },
          max_current: {
            default: 200,
            description: "Max supported current",
            type: "number",
          },
          max_power: {
            default: 150000,
            description: "Max supported power in watt",
            type: "number",
          },
          max_voltage: {
            default: 900,
            description: "Max supported voltage",
            type: "number",
          },
          min_current: {
            default: 1,
            description: "Min supported current",
            type: "number",
          },
          min_voltage: {
            default: 200,
            description: "Min supported voltage",
            type: "number",
          },
        },
        description: "Main interface for the power supply",
        interface: "power_supply_DC",
      },
      powermeter: {
        description: "Power meter interface for simulation",
        interface: "powermeter",
      },
    },
  },
  DPM1000: {
    config: {
      current_limit_A: {
        default: 100,
        description: "Maximum Current Limit in Ampere",
        maximum: 100,
        type: "number",
      },
      debug_print_all_telemetry: {
        default: false,
        description: "Read and print all telemetry from the power module. Helpful while debugging.",
        type: "boolean",
      },
      device: {
        default: "can0",
        description: "Interface name for can device",
        type: "string",
      },
      device_address: {
        default: 0,
        description: "Device address (as selected on front LED panel)",
        type: "integer",
      },
      discharge_gpio_chip: {
        default: "",
        description:
          "GPIO chip to use to switch external discharge load on and off. An empty string disables discharging. Note that the hardware load must be designed to allow permanent discharge from the highest voltage (e.g. 1000V)",
        type: "string",
      },
      discharge_gpio_line: {
        default: 0,
        description: "GPIO line to use to switch discharge load",
        type: "integer",
      },
      discharge_gpio_polarity: {
        default: true,
        description: "GPIO polarity, false means active low, true means active high",
        type: "boolean",
      },
      power_limit_W: {
        default: 30000,
        description: "Maximum Power Limit in Watt",
        maximum: 30000,
        type: "number",
      },
      series_parallel_mode: {
        default: "Series",
        description:
          "Select series (300-1000V), parallel (50-500) or automatic switching mode (50-1000). This switches the internal configuration of one module and should not be confused with parallel operation of multiple modules.",
        enum: ["Series", "Parallel", "Automatic"],
        type: "string",
      },
      voltage_limit_V: {
        default: 1000,
        description: "Maximum Voltage Limit in Volt. Will be limited by series parallel setting as well.",
        maximum: 1000,
        type: "number",
      },
    },
    description: "DC Power Supply Driver",
    metadata: {
      authors: ["aw@pionix.de"],
      license: "https://opensource.org/licenses/Apache-2.0",
    },
    provides: {
      main: {
        description: "Power supply driver for DPM 1000-30 from SCU Power. Currently supports only one module.",
        interface: "power_supply_DC",
      },
    },
  },
  DummyBankSessionTokenProvider: {
    description: "Dummy bank session token provider",
    enable_external_mqtt: false,
    metadata: {
      authors: ["Kai-Uwe Hermann"],
      license: "https://opensource.org/licenses/Apache-2.0",
    },
    provides: {
      main: {
        config: {
          token: {
            default: "DummyBankSessionToken",
            description: "Dummy token string to return",
            type: "string",
          },
        },
        description: "Main implementation of bank session dummy token provider always returning one configured token",
        interface: "bank_session_token_provider",
      },
    },
    requires: {},
  },
  DummyTokenProvider: {
    description:
      "Dummy token provider that listens to AuthRequired event from evse_manager and then publishes one token",
    metadata: {
      authors: ["Thilo Molitor", "Cornelius Claussen"],
      license: "https://opensource.org/licenses/Apache-2.0",
    },
    provides: {
      main: {
        config: {
          connector_id: {
            default: 0,
            description: "If >0, the generated token is only valid for this connector_id",
            minimum: 0,
            type: "integer",
          },
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
            default: "RFID",
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
  DummyTokenProviderManual: {
    description: "Dummy token provider that manually publishes one token",
    enable_external_mqtt: true,
    metadata: {
      authors: ["Kai-Uwe Hermann", "Cornelius Claussen"],
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
            default: "RFID",
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
    requires: {},
  },
  DummyTokenValidator: {
    description: "Dummy token validator always returning the same configured token validation result for every token",
    metadata: {
      authors: ["Thilo Molitor", "Cornelius Claussen"],
      license: "https://opensource.org/licenses/Apache-2.0",
    },
    provides: {
      main: {
        config: {
          sleep: {
            default: 0.5,
            description: "Time to wait before returning the dummy validation result (in s)",
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
  DummyV2G: {
    description: "This module implements an empty dummy for HLC. It does not actually communicate with the car.",
    metadata: {
      authors: ["Cornelius Claussen"],
      license: "https://opensource.org/licenses/Apache-2.0",
    },
    provides: {
      main: {
        description: "This module implements the ISO15118-2 implementation of an AC or DC charger",
        interface: "ISO15118_charger",
      },
    },
  },
  EnergyManager: {
    config: {
      debug: {
        default: false,
        description: "Show debug output on command line.",
        type: "boolean",
      },
      nominal_ac_voltage: {
        default: 230,
        description: "Nominal AC voltage to use to convert Ampere to Watt on AC",
        type: "number",
      },
      schedule_interval_duration: {
        default: 60,
        description: "Duration of the schedule interval for forecast [min]",
        type: "integer",
      },
      schedule_total_duration: {
        default: 1,
        description: "Total duration of schedule forcast [h]",
        type: "integer",
      },
      slice_ampere: {
        default: 0.5,
        description:
          "Ampere slice for trading. Lower values will give more even distribution but increase processing time [A].",
        type: "number",
      },
      slice_watt: {
        default: 500,
        description:
          "Watt slice for trading. Lower values will give more even distribution but increase processing time [W].",
        type: "number",
      },
      switch_3ph1ph_max_nr_of_switches_per_session: {
        default: 0,
        description:
          "Limit the maximum number of switches between 1ph and 3ph per charging session. Set to 0 for no limit.",
        type: "integer",
      },
      switch_3ph1ph_power_hysteresis_W: {
        default: 200,
        description:
          "Power based hysteresis in Watt. If set to 200W for example, the hysteresis for PWM based charging will be 4.2kW to 4.4kW. Actual values will depend on configured nominal AC voltage, and they may be different for PWM vs ISO based charging in the future.",
        type: "integer",
      },
      switch_3ph1ph_switch_limit_stickyness: {
        default: "DontChange",
        description:
          "If the maximum number of switches between 1ph and 3ph is reached, select what should happen:\n  - SinglePhase: Switch to 1ph mode\n  - ThreePhase: Switch to 3ph mode\n  - DontChange: Stay in the mode it is currently in",
        enum: ["SinglePhase", "ThreePhase", "DontChange"],
        type: "string",
      },
      switch_3ph1ph_time_hysteresis_s: {
        default: 600,
        description:
          "Time based hysteresis. It will only switch to 3 phases if the condition to select 3 phases is stable for the configured number of seconds. It will always switch to 1ph mode without waiting for this delay. Set to 0 to disable time based hysteresis.",
        type: "integer",
      },
      switch_3ph1ph_while_charging_mode: {
        default: "Never",
        description:
          "If supported by BSP in capabilities to switch between three phases and one phase and config option three_phases is set to true, this controls the algorithm:\n  - Never: Do not use 1ph/3ph switching even if supported by the BSP\n  - Oneway: Only switch from 3ph to 1ph if power is not enough, but never switch back to 3ph for a session.\n  - Both: Switch in both directions, i.e. from 3ph to 1ph and back to 3ph if available power changes",
        enum: ["Never", "Oneway", "Both"],
        type: "string",
      },
      update_interval: {
        default: 1,
        description: "Update interval for energy distribution [s]",
        type: "integer",
      },
    },
    description: "This module is the global Energy Manager for all EVSE/Charging stations in this building",
    enable_external_mqtt: false,
    metadata: {
      authors: ["Cornelius Claussen", "Lars Dieckmann"],
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
        max_connections: 1,
        min_connections: 1,
      },
    },
  },
  EnergyNode: {
    config: {
      fuse_limit_A: {
        description:
          "Fuse limit in ampere for all phases. Note: this always applies in addition to limits set by external_limits interface.",
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
      external_limits: {
        description: "Additional external limits can be set via this interface.",
        interface: "external_energy_limits",
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
        max_connections: 1,
        min_connections: 0,
      },
      price_information: {
        interface: "energy_price_information",
        max_connections: 1,
        min_connections: 0,
      },
    },
  },
  ErrorHistory: {
    description: "This module provides a persistent error history",
    enable_global_errors: true,
    metadata: {
      authors: ["Andreas Heinrich"],
      license: "https://spdx.org/licenses/Apache-2.0.html",
    },
    provides: {
      error_history: {
        config: {
          database_path: {
            description: "Absolute path to the database file",
            type: "string",
          },
        },
        description: "Error history",
        interface: "error_history",
      },
    },
  },
  EvManager: {
    config: {
      auto_enable: {
        default: false,
        description:
          "Enable this simulation directly at start. Set to true for pure SIL configs, set to false for HIL.",
        type: "boolean",
      },
      auto_exec: {
        default: false,
        description:
          "Enable automatic execution of simulation commands at startup from auto_exec_commands config option.",
        type: "boolean",
      },
      auto_exec_commands: {
        default: "",
        description:
          "Simulation commands, e.g. sleep 1;iec_wait_pwr_ready;sleep 1;draw_power_regulated 16,3;sleep 30;unplug",
        type: "string",
      },
      auto_exec_infinite: {
        default: false,
        description: "If enabled the simulation commands executes infinitely.",
        type: "boolean",
      },
      connector_id: {
        description: "Connector id of the evse manager to which this simulator is connected to",
        type: "integer",
      },
      dc_discharge_max_current_limit: {
        default: 300,
        description: "Maximum discharge current allowed by the EV",
        type: "integer",
      },
      dc_discharge_max_power_limit: {
        default: 150000,
        description: "Maximum discharge power allowed by the EV",
        type: "integer",
      },
      dc_discharge_target_current: {
        default: 5,
        description: "Discharge target current requested by the EV",
        type: "integer",
      },
      dc_discharge_v2g_minimal_soc: {
        default: 20,
        description: "Discharge minimal soc at which the evse should shutdown",
        type: "integer",
      },
      dc_energy_capacity: {
        default: 60000,
        description: "Energy capacity of the EV",
        type: "integer",
      },
      dc_max_current_limit: {
        default: 300,
        description: "Maximum current allowed by the EV",
        type: "integer",
      },
      dc_max_power_limit: {
        default: 150000,
        description: "Maximum power allowed by the EV",
        type: "integer",
      },
      dc_max_voltage_limit: {
        default: 900,
        description: "Maximum voltage allowed by the EV",
        type: "integer",
      },
      dc_target_current: {
        default: 5,
        description: "Target current requested by the EV",
        type: "integer",
      },
      dc_target_voltage: {
        default: 200,
        description: "Target voltage requested by the EV",
        type: "integer",
      },
      max_current: {
        default: 16,
        description: "Ac max current in Ampere",
        type: "number",
      },
      support_sae_j2847: {
        default: false,
        description: "Supporting SAE J2847 ISO 2 bidi version",
        type: "boolean",
      },
      three_phases: {
        default: true,
        description: "Support three phase",
        type: "boolean",
      },
    },
    description:
      "This module implements a Car simulator that can execute charging sessions using the car_simulator interface.",
    enable_external_mqtt: true,
    metadata: {
      authors: ["Cornelius Claussen", "Sebastian Lukas", "Tobias Marzell"],
      license: "https://opensource.org/licenses/Apache-2.0",
    },
    provides: {
      main: {
        description: "This implements the car simulator",
        interface: "car_simulator",
      },
    },
    requires: {
      ev: {
        interface: "ISO15118_ev",
        max_connections: 1,
        min_connections: 0,
      },
      ev_board_support: {
        interface: "ev_board_support",
      },
      powermeter: {
        interface: "powermeter",
        max_connections: 1,
        min_connections: 0,
      },
      slac: {
        interface: "ev_slac",
        max_connections: 1,
        min_connections: 0,
      },
    },
  },
  EvSlac: {
    description: "Implementation of EV SLAC data link negotiation according to ISO15118-3.",
    metadata: {
      authors: ["aw@pionix.de"],
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
          set_key_timeout_ms: {
            default: 500,
            description: "Timeout for CM_SET_KEY.REQ. Default works for QCA7000/QCA7005/CG5317.",
            type: "integer",
          },
        },
        description: "SLAC interface implementation.",
        interface: "ev_slac",
      },
    },
  },
  Evse15118D20: {
    config: {
      device: {
        default: "eth0",
        description:
          "Ethernet device used for HLC. Any local interface that has an ipv6 link-local and a MAC addr will work",
        type: "string",
      },
      enable_sdp_server: {
        default: true,
        description: "Enable the built-in SDP server",
        type: "boolean",
      },
      enable_ssl_logging: {
        default: false,
        description: "Verbosely log the ssl/tls connection",
        type: "boolean",
      },
      enable_tls_key_logging: {
        default: false,
        description:
          "Enable/Disable the export of TLS session keys (pre-master-secret) during a TLS handshake. Note that this option is for testing and simulation purpose only",
        type: "boolean",
      },
      enforce_tls_1_3: {
        default: false,
        description: "Enforcing tls version 1.3. Only applies if tls_negotiation_strategy is ENFORCE_TLS.",
        type: "boolean",
      },
      logging_path: {
        default: ".",
        description: "Path to logging directory (will be created if non existent)",
        type: "string",
      },
      supported_dynamic_mode: {
        default: true,
        description: "The EVSE should support dynamic mode",
        type: "boolean",
      },
      supported_mobility_needs_mode_provided_by_secc: {
        default: false,
        description:
          "The EVSE should support the mobility needs mode provided by the SECC. Mobility needs mode provided by the EVCC is always provided.",
        type: "boolean",
      },
      supported_scheduled_mode: {
        default: false,
        description: "The EVSE should support scheduled mode",
        type: "boolean",
      },
      tls_key_logging_path: {
        default: "/tmp",
        description: "Output directory for the TLS key log file",
        type: "string",
      },
      tls_negotiation_strategy: {
        default: "ACCEPT_CLIENT_OFFER",
        description: "Select strategy on how to negotiate connection encryption",
        enum: ["ACCEPT_CLIENT_OFFER", "ENFORCE_TLS", "ENFORCE_NO_TLS"],
        type: "string",
      },
    },
    description: "This module is a draft implementation of iso15118-20 for the EVSE side",
    enable_external_mqtt: false,
    metadata: {
      authors: ["aw@pionix.de", "Sebastian Lukas"],
      license: "https://opensource.org/licenses/Apache-2.0",
    },
    provides: {
      charger: {
        description: "This interface provides limited access to iso15118-20",
        interface: "ISO15118_charger",
      },
      extensions: {
        description:
          "This interface is used to share data between ISO15118 and OCPP modules to support the requirements of the OCPP protocol",
        interface: "iso15118_extensions",
      },
    },
    requires: {
      security: {
        interface: "evse_security",
      },
    },
  },
  EvseManager: {
    config: {
      ac_enforce_hlc: {
        default: false,
        description:
          "Combine with 5percent option to really enforce HLC even with EIM. It is not ISO15118-2/-3 compliant as it waits for matching even if EIM is available before SLAC reaches matched state. On cars that do not support ISO15118 on AC this will take a very long time to timeout and fall back to basic nominal PWM charging, but it will eventually.",
        type: "boolean",
      },
      ac_hlc_enabled: {
        default: false,
        description: "Enable or disable HLC (aka ISO15118) for AC mode",
        type: "boolean",
      },
      ac_hlc_use_5percent: {
        default: false,
        description:
          "Use 5 percent PWM signalling to try to enforce HLC on AC. Note that if EIM arrives before SLAC matching, we will fall back to nominal PWM charging. So most cars will never use HLC in this mode, especially on a free service where EIM is always available, but that is what ISO15118-2/-3 requires to be compliant - it wants to use HLC only for PnC and not for EIM.",
        type: "boolean",
      },
      ac_nominal_voltage: {
        default: 230,
        description: "Nominal AC voltage between phase and neutral in Volt",
        type: "number",
      },
      ac_with_soc: {
        default: false,
        description: "Special mode that switches between AC and DC charging to get SoC percentage with AC charging",
        type: "boolean",
      },
      autocharge_use_slac_instead_of_hlc: {
        default: false,
        description: "Use slac ev mac address for autocharge instead of EVCCID from HLC",
        type: "boolean",
      },
      cable_check_enable_imd_self_test: {
        default: true,
        description: "Enable self testing of IMD in cable check. This is required for IEC 61851-23 (2023) compliance.",
        type: "boolean",
      },
      cable_check_wait_below_60V_before_finish: {
        default: true,
        description:
          "Switch off power supply and wait until output voltage drops below 60V before cable check is finished. Note: There are different versions of IEC 61851-23:2023 in the wild with the same version number but slightly different content. The IEC was correcting mistakes _after_ releasing the document initially without tagging a new version number. Some early versions require to wait for the output voltage to drop below 60V in CC.4.1.2 (last sentence). Later versions do not have that requirement. The later versions are correct and should be used according to IEC. Both settings (true and false) are compliant with the correct version of IEC 61851-23:2023. Set to true when:\n  - the power supply has no active discharge, and lowering the voltage with no load takes a very long time. In this case\n    this option usually helps to ramp the voltage down quickly by switching it off. It will be switched on again in precharge.\n    Also, some EVs switch their internal relay on at a too high voltage when the voltage is ramped down directly from cablecheck voltage to precharge voltage,\n    so true is the recommended default.\nSet to false when:\n  - the power supply has active discharge and can ramp down quickly without a switch off (by just setting a lower target voltage).\n    This may save a few seconds as it avoids unnecessary voltage down and up ramping.",
        type: "boolean",
      },
      cable_check_wait_number_of_imd_measurements: {
        default: 1,
        description:
          "Amount of isolation measurement samples to collect before the value can be trusted. This does not average, it will evaluate the last measurement. Some IMDs (e.g. from Bender) need to measure for 10s to really get a trustable result. In this case, at 1 Hz sample rate, specify 10 samples here.",
        type: "integer",
      },
      charge_mode: {
        default: "AC",
        description: "Select charging mode",
        enum: ["AC", "DC"],
        type: "string",
      },
      connector_id: {
        description: "Connector id of this evse manager",
        type: "integer",
      },
      connector_type: {
        default: "Unknown",
        description: "The connector type of this evse manager (/evse_manager#/ConnectorTypeEnum)",
        type: "string",
      },
      dbg_hlc_auth_after_tstep: {
        default: false,
        description:
          "Special mode: send HLC auth ok only after t_step_XX is finished (true) or directly when available (false)",
        type: "boolean",
      },
      dc_isolation_voltage_V: {
        default: 0,
        description:
          "Override DC voltage used to test isolation in CableCheck. Default is 0, which means the voltage will be determined according to IEC 61851-23 (2023) CC.4.1.2",
        type: "integer",
      },
      disable_authentication: {
        default: false,
        description:
          "Do not wait for authorization from Auth module, offer a free service. Start charging immediately after plug in. Do not use with Auth manager or OCPP, this option is only to allow charging with a standalone EvseManager that is not connected to an Auth manager. Use DummyTokenProvider/Validator when testing with Auth module and/or OCPP.",
        type: "boolean",
      },
      enable_autocharge: {
        default: false,
        description:
          "Enables Autocharge (i.e. Mac address for authorization). Disabled by default as PnC should be used instead.",
        type: "boolean",
      },
      ev_receipt_required: {
        default: false,
        description: "Unsupported: request receipt from EV with HLC",
        type: "boolean",
      },
      evse_id: {
        default: "DE*PNX*E1234567*1",
        description: "EVSE ID",
        type: "string",
      },
      evse_id_din: {
        default: "49A80737A45678",
        description: "EVSE ID DIN after DIN SPEC 91286",
        type: "string",
      },
      external_ready_to_start_charging: {
        default: false,
        description:
          "Enable the external ready to start charging signal that delays charging ready until it has been received",
        type: "boolean",
      },
      fail_on_powermeter_errors: {
        default: true,
        description:
          "Set the EVSE Manager to an inoperative state if the powermeter requirement is configured and has reported errors",
        type: "boolean",
      },
      hack_allow_bpt_with_iso2: {
        default: false,
        description:
          "Hack. Allow bidirectional power transfer with DIN spec and ISO-2. Currents communicated on HLC will always be positive but power supply may actually discharge the car.",
        type: "boolean",
      },
      hack_fix_hlc_integer_current_requests: {
        default: false,
        description:
          "Some cars request only integer ampere values during DC charging. For low power DC charging that means that they charge a few hundred watts slower then needed. If enabled, this will charge at full power if the difference between EV requested current (integer) and HLC current limit is less then 1.0",
        type: "boolean",
      },
      hack_pause_imd_during_precharge: {
        default: false,
        description:
          "Disable IMD at the end of CableCheck and re-enable when current is flowing in CurrentDemand. Some DCDC power supplies do not start current flow when insulation measurement is active. Set to true to enable dirty workaround for some IMD hardware.",
        type: "boolean",
      },
      hack_present_current_offset: {
        default: 0,
        description:
          "Adds an offset [A] to the present current reported to the car on HLC. Set to 0 unless you really know what you are doing.",
        type: "integer",
      },
      hack_simplified_mode_limit_10A: {
        default: false,
        description:
          "Limit PWM to 10A if EV uses simplified charging mode. Set to false to be compliant with IEC61851-1:2019 section A.2.3. It is the responsibility of the EV to limit to 10A according to the norm. Enable this option to deviate from the norm and limit from the EVSE side.",
        type: "boolean",
      },
      hack_skoda_enyaq: {
        default: false,
        description:
          "Skoda Enyaq requests DC charging voltages below its battery level or even below 0 initially. Set to true to enable dirty workaround.",
        type: "boolean",
      },
      hack_sleep_in_cable_check: {
        default: 0,
        description: "Hack: Sleep for n seconds at the end of cable check.",
        type: "integer",
      },
      hack_sleep_in_cable_check_volkswagen: {
        default: 0,
        description: "Hack: Additional sleep for Volkswagen cars for n seconds at the end of cable check",
        type: "integer",
      },
      has_ventilation: {
        default: true,
        description: "Allow ventilated charging or not",
        type: "boolean",
      },
      initial_meter_value_timeout_ms: {
        default: 5000,
        description:
          "This timeout in ms defines for how long the EvseManager waits for an initial meter value from a powermeter before it becomes ready to start charging. If configured to 0, the EvseManager will not wait for an initial meter value before it becomes ready to start charging.",
        type: "integer",
      },
      lock_connector_in_state_b: {
        default: true,
        description:
          "Indicates if the connector lock should be locked in state B. If set to false, connector will remain unlocked in CP state B and this violates IEC61851-1:2019 D.6.5 Table D.9 line 4 and should not be used in public environments!",
        type: "boolean",
      },
      logfile_suffix: {
        default: "session_uuid",
        description:
          "Use the string given for the log folder name. Special string session_uuid will be replaced with session uuid.",
        type: "string",
      },
      max_current_export_A: {
        default: 32,
        description: "User configurable current limit for this EVSE in Ampere",
        type: "number",
      },
      max_current_import_A: {
        default: 32,
        description: "User configurable current limit for this EVSE in Ampere",
        type: "number",
      },
      payment_enable_contract: {
        default: true,
        description: "Set to true to enable contract (aka plug and charge) authorization",
        type: "boolean",
      },
      payment_enable_eim: {
        default: true,
        description: "Set to true to enable EIM (e.g. RFID card or mobile app) authorization",
        type: "boolean",
      },
      raise_mrec9: {
        default: false,
        description:
          "Allows to configure if an MREC9 authorization timeout error shall be raised by this module in case an authorization timeout occurs. It is recommended to disable it if OCPP1.6 is used.",
        type: "boolean",
      },
      request_zero_power_in_idle: {
        default: false,
        description:
          '"true: In Idle mode (no car connected), request 0A from energy management. In installations with many charging stations this should be set" "to allow the power to be distributed to the chargers that are connected to a car." "false: Request the normal current even if no car is connected. This speeds up the start of charging on AC BASIC charging as" "EvseManager does not need to wait for energy from the energy manager after plug in."',
        type: "boolean",
      },
      sae_j2847_2_bpt_enabled: {
        default: false,
        description: "Enable SAE J2847 2 V2G or V2H mode",
        type: "boolean",
      },
      sae_j2847_2_bpt_mode: {
        default: "V2G",
        description: "SAE J2847 2 BPT mode",
        enum: ["V2H", "V2G"],
        type: "string",
      },
      session_logging: {
        default: false,
        description: "Enable/Disable session log file output",
        type: "boolean",
      },
      session_logging_path: {
        default: "/tmp",
        description: "Output directory for session log files",
        type: "string",
      },
      session_logging_xml: {
        default: true,
        description: "Log full XML messages for HLC",
        type: "boolean",
      },
      soft_over_current_measurement_noise_A: {
        default: 0.5,
        description: "Set current measurement noise. Added to limit as an offset to avoid false triggers.",
        type: "number",
      },
      soft_over_current_timeout_ms: {
        default: 7000,
        description: "Allow for over current to be present for N ms in soft over current checking during AC charging.",
        minimum: 6000,
        type: "integer",
      },
      soft_over_current_tolerance_percent: {
        default: 10,
        description: "Allow for N percent over current in soft over current checking during AC charging.",
        type: "number",
      },
      state_F_after_fault_ms: {
        default: 300,
        description:
          "Set state F after any fault that stops charging for the specified time in ms while in Charging mode (CX->F(300ms)->C1/B1). When a fault occurs in state B2, no state F is added (B2->B1 on fault). Some (especially older hybrid vehicles) may go into a permanent fault mode once they detect state F, in this case EVerest cannot recover the charging session if the fault is cleared. In this case you can set this parameter to 0, which will avoid to use state F in case of a fault and only disables PWM (C2->C1) while switching off power. This will violate IEC 61851-1:2017 however. The default is 300ms as the minimum suggested by IEC 61851-1:2017 Table A.5 (description) to be compliant. This setting is only active in BASIC charging mode.",
        type: "integer",
      },
      switch_3ph1ph_cp_state: {
        default: "X1",
        description:
          "CP state to use for switching. WARNING: Some EVs may be permanently destroyed when switching from 1ph to 3ph. It is the responsibiltiy of the evse_board_support implementation to ensure the EV is capable of performing the switch. If it is not, the capabilities must set the supports_changing_phases_during_charging to false. Phase switching is only possible in basic charging mode.",
        enum: ["X1", "F"],
        type: "string",
      },
      switch_3ph1ph_delay_s: {
        default: 10,
        description: "Wait for n seconds when switching between 3ph/1ph mode.",
        type: "integer",
      },
      uk_smartcharging_random_delay_at_any_change: {
        default: true,
        description:
          '"True: use random delays on any current change during charging. False: Only use if current is reduced to zero or increased from zero."',
        type: "boolean",
      },
      uk_smartcharging_random_delay_enable: {
        default: false,
        description:
          '"true: enable random_delays on start up, false: disable random delays on startup." "They can also be enabled/disabled during runtime on the random_delay implementation."',
        type: "boolean",
      },
      uk_smartcharging_random_delay_max_duration: {
        default: 600,
        description:
          '"Start up value for the maximum duration of a random delay." "Can be modified during runtime on the random_delay implementation."',
        type: "integer",
      },
    },
    description:
      "EVSE Manager. Grid side power meter: Will be used for energy management. Will also be used for billing if no car side power meter connected. Car side powermeter: Will be used for billing if present.",
    enable_external_mqtt: true,
    enable_telemetry: true,
    metadata: {
      authors: ["Cornelius Claussen", "Anton Woellert"],
      license: "https://opensource.org/licenses/Apache-2.0",
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
      random_delay: {
        description: "Provides control over UK smart charging regulation random delay feature",
        interface: "uk_random_delay",
      },
      token_provider: {
        description: "Provides authtokens for autocharge or plug and charge",
        interface: "auth_token_provider",
      },
    },
    requires: {
      ac_rcd: {
        interface: "ac_rcd",
        max_connections: 1,
        min_connections: 0,
      },
      bsp: {
        interface: "evse_board_support",
      },
      connector_lock: {
        interface: "connector_lock",
        max_connections: 1,
        min_connections: 0,
      },
      hlc: {
        interface: "ISO15118_charger",
        max_connections: 1,
        min_connections: 0,
      },
      imd: {
        interface: "isolation_monitor",
        max_connections: 1,
        min_connections: 0,
      },
      over_voltage_monitor: {
        interface: "over_voltage_monitor",
        max_connections: 1,
        min_connections: 0,
      },
      powermeter_car_side: {
        interface: "powermeter",
        max_connections: 1,
        min_connections: 0,
      },
      powermeter_grid_side: {
        interface: "powermeter",
        max_connections: 1,
        min_connections: 0,
      },
      powersupply_DC: {
        interface: "power_supply_DC",
        max_connections: 1,
        min_connections: 0,
      },
      slac: {
        interface: "slac",
        max_connections: 1,
        min_connections: 0,
      },
      store: {
        interface: "kvs",
        max_connections: 1,
        min_connections: 0,
      },
    },
  },
  EvseSecurity: {
    config: {
      csms_ca_bundle: {
        default: "ca/csms/CSMS_ROOT_CA.pem",
        description:
          "Path to csms_ca_bundle file. If relative will be prefixed with everest prefix + etc/everest/certs. Otherwise absolute file path is used.",
        type: "string",
      },
      csms_leaf_cert_directory: {
        default: "client/csms",
        description:
          "Directory where CSMS leaf certificates are stored. If relative will be prefixed with everest prefix + etc/everest/certs. Otherwise absolute file path is used.",
        type: "string",
      },
      csms_leaf_key_directory: {
        default: "client/csms",
        description:
          "Directory where CSMS private keys are stored. If relative will be prefixed with everest prefix + etc/everest/certs. Otherwise absolute file path is used.",
        type: "string",
      },
      mf_ca_bundle: {
        default: "ca/mf/MF_ROOT_CA.pem",
        description:
          "Path to mf_ca_bundle file. If relative will be prefixed with everest prefix + etc/everest/certs. Otherwise absolute file path is used.",
        type: "string",
      },
      mo_ca_bundle: {
        default: "ca/mo/MO_ROOT_CA.pem",
        description:
          "Path to mo_ca_bundle file. If relative will be prefixed with everest prefix + etc/everest/certs. Otherwise absolute file path is used.",
        type: "string",
      },
      private_key_password: {
        default: "",
        description: "Password for encrypted private keys.",
        type: "string",
      },
      secc_leaf_cert_directory: {
        default: "client/cso",
        description:
          "Directory where SECC leaf certificates are stored. If relative will be prefixed with everest prefix + etc/everest/certs. Otherwise absolute file path is used.",
        type: "string",
      },
      secc_leaf_key_directory: {
        default: "client/cso",
        description:
          "Directory where SECC private keys are stored. If relative will be prefixed with everest prefix + etc/everest/certs. Otherwise absolute file path is used.",
        type: "string",
      },
      v2g_ca_bundle: {
        default: "ca/v2g/V2G_ROOT_CA.pem",
        description:
          "Path to v2g_ca_bundle file. If relative will be prefixed with everest prefix + etc/everest/certs. Otherwise absolute file path is used.",
        type: "string",
      },
    },
    description:
      "This module implements the evse_security interface. It uses the filesystem to store certificates and keys",
    enable_external_mqtt: false,
    enable_telemetry: false,
    metadata: {
      authors: ["Piet Gömpel"],
      license: "https://spdx.org/licenses/Apache-2.0.html",
    },
    provides: {
      main: {
        description: "Implementation of the evse_security interface",
        interface: "evse_security",
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
          ac_mode_five_percent: {
            default: false,
            description:
              "Use 5% mode in AC (true). Set to false for DC. The only difference is the handling of retries.",
            type: "boolean",
          },
          chip_reset_delay_ms: {
            default: 100,
            description: "Delay between SET_KEY.CNF and RS_DEV.REQ",
            type: "integer",
          },
          chip_reset_timeout_ms: {
            default: 500,
            description: "Timeout for RS_DEV.REQ (waiting for RS_DEV.CNF)",
            type: "integer",
          },
          debug_simulate_failed_matching: {
            default: false,
            description: "Only for debugging. Simulate failed matching by sending a wrong NMK to the EV.",
            type: "boolean",
          },
          device: {
            default: "eth1",
            description: "Ethernet device used for PLC.",
            type: "string",
          },
          do_chip_reset: {
            default: false,
            description:
              "Perform a chip reset after setting NMK using the RS_DEV.REQ Vendor MME Extension (Only works on Qualcomm chips)",
            type: "boolean",
          },
          link_status_detection: {
            default: false,
            description:
              "After matching.cnf, wait for link to come up before sending out d_link_ready=connected using LINK_STATUS Vendor MME Extension (Works on Qualcomm and Lumissil chips)",
            type: "boolean",
          },
          link_status_retry_ms: {
            default: 100,
            description: "Delay between retries of LINK_STATUS requests after matching request",
            type: "integer",
          },
          link_status_timeout_ms: {
            default: 10000,
            description: "Timeout for Link to come up after matching request",
            type: "integer",
          },
          number_of_sounds: {
            default: 10,
            description: "SLAC number of sounds.",
            type: "integer",
          },
          publish_mac_on_first_parm_req: {
            default: false,
            description:
              "Publish the EV MAC address when the first CM_SLAC_PARM.REQ. This should not be used as it is quite error prone: The MAC address might be from another car via cross talk. It is better to wait for the matching to be done.",
            type: "boolean",
          },
          publish_mac_on_match_cnf: {
            default: true,
            description:
              "Publish the EV MAC address on the token_provider interface when matching is confirmed (CM_SLAC_MATCH.CNF). This can be used for autocharge as an alternative to the EVCCID derived from HLC and published by EvseManager.  This can be used for AC autocharge on cars that do not support actual HLC on AC.",
            type: "boolean",
          },
          set_key_timeout_ms: {
            default: 1000,
            description: "Timeout for CM_SET_KEY.REQ. Default works for QCA7000/QCA7005/CG5317.",
            type: "integer",
          },
          sounding_attenuation_adjustment: {
            default: 0,
            description: "Offset in dB that should be added to the calculated sounding attenuation",
            type: "integer",
          },
        },
        description: "SLAC interface implementation.",
        interface: "slac",
      },
    },
  },
  EvseV2G: {
    config: {
      auth_timeout_eim: {
        default: 300,
        description:
          "Defines how many seconds the EVSE should wait for authorization in EIM case, before the charging session is aborted. Write 0 if the EVSE should wait indefinitely for EIM authorization.",
        type: "integer",
      },
      auth_timeout_pnc: {
        default: 55,
        description:
          "Defines how many seconds the EVSE should wait for authorization in PnC case, before the charging session is aborted. Write 0 if the EVSE should wait indefinitely for PnC authorization.",
        type: "integer",
      },
      device: {
        default: "eth0",
        description:
          "Ethernet device used for HLC. Any local interface that has an ipv6 link-local and a MAC addr will work",
        type: "string",
      },
      enable_sdp_server: {
        default: true,
        description: "Enable the built-in SDP server",
        type: "boolean",
      },
      supported_DIN70121: {
        default: true,
        description: "The EVSE supports the DIN SPEC",
        type: "boolean",
      },
      supported_ISO15118_2: {
        default: true,
        description: "The EVSE supports ISO15118-2",
        type: "boolean",
      },
      terminate_connection_on_failed_response: {
        default: false,
        description:
          "Controls how to handle a failed response code of the EVSE. If true the V2G connection is terminated immediately on a failed response code, otherwise the EV is responsible for closing of the V2G communication session with SessionStop.",
        type: "boolean",
      },
      tls_key_logging: {
        default: false,
        description:
          "Enable/Disable the export of TLS session keys (pre-master-secret) during a TLS handshake. This log file can be used to decrypt TLS sessions. Note that this option is for testing and simulation purpose only",
        type: "boolean",
      },
      tls_key_logging_path: {
        default: "/tmp",
        description: "Output directory for the TLS key log file",
        type: "string",
      },
      tls_security: {
        default: "prohibit",
        description: "Controls how to handle encrypted communication",
        enum: ["prohibit", "allow", "force"],
        type: "string",
      },
      tls_timeout: {
        default: 15000,
        description: "Set the TLS timeout in ms when establishing a tls connection ",
        type: "integer",
      },
      verify_contract_cert_chain: {
        default: false,
        description: "Specifies if the EVSE should verify the contract certificate chain locally.",
        type: "boolean",
      },
    },
    description: "This module includes a DIN70121 and ISO15118-2 implementation provided by chargebyte GmbH",
    enable_external_mqtt: true,
    metadata: {
      authors: ["Fabian Hartung", "Mohannad Oraby", "Sebastian Lukas"],
      license: "https://opensource.org/licenses/Apache-2.0",
    },
    provides: {
      charger: {
        description: "This module implements the ISO15118-2 implementation of an AC or DC charger",
        interface: "ISO15118_charger",
      },
      extensions: {
        description:
          "This interface is used to share data between ISO15118 and OCPP modules to support the requirements of the OCPP protocol",
        interface: "iso15118_extensions",
      },
    },
    requires: {
      security: {
        interface: "evse_security",
      },
    },
  },
  Example: {
    description: "Simple example module written in C++",
    enable_external_mqtt: true,
    metadata: {
      authors: ["Kai-Uwe Hermann", "Andreas Heinrich"],
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
        interface: "example",
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
  ExampleErrorGlobalSubscriber: {
    description: "Simple example module written in C++ to demonstrate error framework on global subscriber side",
    enable_global_errors: true,
    metadata: {
      authors: ["Andreas Heinrich"],
      license: "https://opensource.org/licenses/Apache-2.0",
    },
    provides: {
      example_global_subscriber: {
        description: "This implements the example interface",
        interface: "example_error_framework",
      },
    },
  },
  ExampleErrorRaiser: {
    description: "Simple example module written in C++ to demonstrate error handling on raiser side",
    metadata: {
      authors: ["Andreas Heinrich"],
      license: "https://opensource.org/licenses/Apache-2.0",
    },
    provides: {
      example_raiser: {
        description: "This implements an example interface",
        interface: "example_error_framework",
      },
    },
  },
  ExampleErrorSubscriber: {
    description: "Simple example module written in C++ to demonstrate error framework on subscriber side",
    metadata: {
      authors: ["Andreas Heinrich"],
      license: "https://opensource.org/licenses/Apache-2.0",
    },
    provides: {
      example_subscriber: {
        description: "This implements the example interface",
        interface: "example_error_framework",
      },
    },
    requires: {
      example_raiser: {
        interface: "example_error_framework",
      },
    },
  },
  ExampleUser: {
    description: "Simple example module written in C++ and using the other example module",
    metadata: {
      authors: ["Kai-Uwe Hermann", "Andreas Heinrich"],
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
  GenericPowermeter: {
    description: "Powermeter driver for various powermeter hardware",
    metadata: {
      authors: ["Lars Dieckmann"],
      license: "https://opensource.org/licenses/Apache-2.0",
    },
    provides: {
      main: {
        config: {
          modbus_base_address: {
            default: 30001,
            description: "The base address for register access",
            maximum: 65535,
            minimum: 0,
            type: "integer",
          },
          model: {
            default: "test_dummy",
            description: "Selector for the powermeter configuration file to be used",
            type: "string",
          },
          powermeter_device_id: {
            default: 1,
            description: "The powermeter's address on the serial bus",
            maximum: 247,
            minimum: 1,
            type: "integer",
          },
        },
        description: "Implementation of the driver functionality",
        interface: "powermeter",
      },
    },
    requires: {
      serial_comm_hub: {
        interface: "serial_communication_hub",
      },
    },
  },
  IMDSimulator: {
    description: "SIL Implementation of an Isolation Monitoring Device (IMD) for DC charging",
    metadata: {
      authors: ["Fabian Hartung (chargebyte GmbH)", "Cornelius Claussen (Pionix GmbH)"],
      license: "https://opensource.org/licenses/Apache-2.0",
    },
    provides: {
      main: {
        config: {
          interval: {
            default: 1000,
            description: "Measurement update interval in milliseconds",
            type: "integer",
          },
          resistance_F_Ohm: {
            default: 900000,
            description: "Resistance to return for the simulated measurements in Ohm",
            type: "number",
          },
          selftest_success: {
            default: true,
            description: "Set to true for successful self testing, false for fault",
            type: "boolean",
          },
        },
        description: "Main interface for the IMD",
        interface: "isolation_monitor",
      },
    },
  },
  IsoMux: {
    config: {
      device: {
        default: "eth0",
        description:
          "Ethernet device used for HLC. Any local interface that has an ipv6 link-local and a MAC addr will work",
        type: "string",
      },
      proxy_port_iso2: {
        default: 61341,
        description: "TCP port of the local ISO2 instance",
        type: "integer",
      },
      proxy_port_iso20: {
        default: 50000,
        description: "TCP port of the local ISO20 instance",
        type: "integer",
      },
      tls_key_logging: {
        default: false,
        description:
          "Enable/Disable the export of TLS session keys (pre-master-secret) during a TLS handshake. This log file can be used to decrypt TLS sessions. Note that this option is for testing and simulation purpose only",
        type: "boolean",
      },
      tls_security: {
        default: "prohibit",
        description: "Controls how to handle encrypted communication",
        enum: ["prohibit", "allow", "force"],
        type: "string",
      },
      tls_timeout: {
        default: 15000,
        description: "Set the TLS timeout in ms when establishing a tls connection ",
        type: "integer",
      },
    },
    description: "This module is a multiplexer to support switching over between different ISO module implementations",
    metadata: {
      authors: ["Cornelius Claussen"],
      license: "https://opensource.org/licenses/Apache-2.0",
    },
    provides: {
      charger: {
        description: "This module implements the ISO15118-2 implementation of an AC or DC charger",
        interface: "ISO15118_charger",
      },
      extensions: {
        description:
          "This interface is used to share data between ISO15118 and OCPP modules to support the requirements of the OCPP protocol",
        interface: "iso15118_extensions",
      },
    },
    requires: {
      ext2: {
        interface: "iso15118_extensions",
      },
      ext20: {
        interface: "iso15118_extensions",
      },
      iso2: {
        interface: "ISO15118_charger",
      },
      iso20: {
        interface: "ISO15118_charger",
      },
      security: {
        interface: "evse_security",
      },
    },
  },
  JsEvManager: {
    config: {
      auto_enable: {
        default: false,
        description:
          "Enable this simulation directly at start. Set to true for pure SIL configs, set to false for HIL.",
        type: "boolean",
      },
      auto_exec: {
        default: false,
        description:
          "Enable automatic execution of simulation commands at startup from auto_exec_commands config option.",
        type: "boolean",
      },
      auto_exec_commands: {
        default: "",
        description:
          "Simulation commands, e.g. sleep 1;iec_wait_pwr_ready;sleep 1;draw_power_regulated 16,3;sleep 30;unplug",
        type: "string",
      },
      auto_exec_infinite: {
        default: false,
        description: "If enabled the simulation commands executes infinitely.",
        type: "boolean",
      },
      connector_id: {
        description: "Connector id of the evse manager to which this simulator is connected to",
        type: "integer",
      },
      dc_discharge_max_current_limit: {
        default: 300,
        description: "Maximum discharge current allowed by the EV",
        type: "integer",
      },
      dc_discharge_max_power_limit: {
        default: 150000,
        description: "Maximum discharge power allowed by the EV",
        type: "integer",
      },
      dc_discharge_target_current: {
        default: 5,
        description: "Discharge target current requested by the EV",
        type: "integer",
      },
      dc_discharge_v2g_minimal_soc: {
        default: 20,
        description: "Discharge minimal soc at which the evse should shutdown",
        type: "integer",
      },
      dc_energy_capacity: {
        default: 60000,
        description: "Energy capacity of the EV",
        type: "integer",
      },
      dc_max_current_limit: {
        default: 300,
        description: "Maximum current allowed by the EV",
        type: "integer",
      },
      dc_max_power_limit: {
        default: 150000,
        description: "Maximum power allowed by the EV",
        type: "integer",
      },
      dc_max_voltage_limit: {
        default: 900,
        description: "Maximum voltage allowed by the EV",
        type: "integer",
      },
      dc_target_current: {
        default: 5,
        description: "Target current requested by the EV",
        type: "integer",
      },
      dc_target_voltage: {
        default: 200,
        description: "Target voltage requested by the EV",
        type: "integer",
      },
      max_current: {
        default: 16,
        description: "AC max current in Ampere",
        type: "number",
      },
      support_sae_j2847: {
        default: false,
        description: "Supporting SAE J2847 ISO 2 bidi version",
        type: "boolean",
      },
      three_phases: {
        default: true,
        description: "Support three phase",
        type: "boolean",
      },
    },
    description:
      "This module implements a Car simulator that can execute charging sessions using the yeti-simulation-control interface",
    enable_external_mqtt: true,
    metadata: {
      authors: ["Cornelius Claussen", "Sebastian Lukas"],
      license: "https://opensource.org/licenses/Apache-2.0",
    },
    provides: {
      main: {
        description: "This implements the car simulator",
        interface: "car_simulator",
      },
    },
    requires: {
      ev: {
        interface: "ISO15118_ev",
        max_connections: 1,
        min_connections: 0,
      },
      ev_board_support: {
        interface: "ev_board_support",
      },
      powermeter: {
        interface: "powermeter",
        max_connections: 1,
        min_connections: 0,
      },
      slac: {
        interface: "ev_slac",
        max_connections: 1,
        min_connections: 0,
      },
    },
  },
  JsExampleErrorRaiser: {
    description: "Simple example module written in Javascript to demonstrate error handling on raiser side",
    metadata: {
      authors: ["Andreas Heinrich"],
      license: "https://opensource.org/licenses/Apache-2.0",
    },
    provides: {
      example_raiser: {
        description: "This implements an example interface",
        interface: "example_error_framework",
      },
    },
  },
  JsExampleErrorSubscriber: {
    description: "Simple example module written in Javascript to demonstrate error framework on subscriber side",
    metadata: {
      authors: ["Andreas Heinrich"],
      license: "https://opensource.org/licenses/Apache-2.0",
    },
    provides: {
      example_subscriber: {
        description: "This implements the example interface",
        interface: "example_error_framework",
      },
    },
    requires: {
      example_raiser: {
        interface: "example_error_framework",
      },
    },
  },
  JsSlacSimulator: {
    description: "SIL Implementation of SLAC data link negotiation according to ISO15118-3.",
    enable_external_mqtt: true,
    metadata: {
      authors: ["Cornelius Claussen (Pionix GmbH)"],
      license: "https://opensource.org/licenses/Apache-2.0",
    },
    provides: {
      ev: {
        config: {
          ev_id: {
            default: "PIONIX_SAYS_HELLO",
            description: "EV id - 17 octets.",
            type: "string",
          },
        },
        description: "SLAC interface implementation for EV side",
        interface: "ev_slac",
      },
      evse: {
        config: {
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
        description: "SLAC interface implementation for EVSE side",
        interface: "slac",
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
    config: {
      connector_id: {
        description: "Connector id of the evse manager to which this simulator is connected to",
        type: "integer",
      },
    },
    description: "SIL simulator for YETI hardware v1.0",
    enable_external_mqtt: true,
    enable_telemetry: true,
    metadata: {
      authors: ["Cornelius Claussen"],
      license: "https://opensource.org/licenses/Apache-2.0",
    },
    provides: {
      board_support: {
        description: "provides the EVSE board support Interface to low level control pilot, relais, rcd, motor lock",
        interface: "evse_board_support",
      },
      connector_lock: {
        description: "Interface for the simulated Connector lock",
        interface: "connector_lock",
      },
      ev_board_support: {
        description: "provides the EV board support Interface to low level control pilot, relais, rcd",
        interface: "ev_board_support",
      },
      powermeter: {
        description: "provides the Yeti Internal Power Meter",
        interface: "powermeter",
      },
      rcd: {
        description: "Interface for the simulated AC RCD",
        interface: "ac_rcd",
      },
    },
  },
  LemDCBM400600: {
    config: {
      SC: {
        default: 0,
        description: "SC (OCMF/transaction fields)",
        type: "integer",
      },
      UD: {
        default: "",
        description: "UD (OCMF/transaction fields)",
        type: "string",
      },
      UV: {
        default: "",
        description: "User SW Version (OCMF/transaction fields)",
        type: "string",
      },
      cable_id: {
        default: 0,
        description:
          "The cable loss compensation level to use. This allows compensating the measurements of the DCBM with a resistance.",
        type: "integer",
      },
      ip_address: {
        description: "IP Address of the power meter API.",
        type: "string",
      },
      meter_dst: {
        default:
          '{"activated": false, "offset": 60, "start": {"order": "last", "day": "sunday", "month": "march", "hour": "T01:00Z"}, "end": {"order": "last", "day": "sunday", "month": "october", "hour": "T01:00Z" }}',
        description: "The Daylight Saving Time (DST) settings (ignored if NTP is set)",
        type: "string",
      },
      meter_timezone: {
        default: "+00:00",
        description:
          "The timezone offset (ignored if NTP servers are set) - it can go from -11 to +14 for hours and 00, 15, 30, 45 for minutes",
        type: "string",
      },
      meter_tls_certificate: {
        default: "",
        description:
          "The DCBM's HTTPS certificate, in PEM format. If provided, HTTPS will be used. If left empty, regular HTTP will be used. Note that this does not affect the default port - specify a port explicitly if you wish to use a port other than 80.",
        type: "string",
      },
      ntp_server_1_ip_addr: {
        default: "",
        description:
          "The IPv4 address (in 4-octet form W.X.Y.Z) of the first NTP server to use for time sync. If this is left empty, NTP will not be configured on the DCBM - its time will be synced with EVerest's system time instead.",
        type: "string",
      },
      ntp_server_1_port: {
        default: 123,
        description: "The port (1-65535) of the first NTP server.",
        type: "integer",
      },
      ntp_server_2_ip_addr: {
        default: "",
        description:
          "The IPv4 address (in 4-octet form W.X.Y.Z) of the second NTP server to use for time sync. This is ignored if ntp_server_1_ip_addr is empty.",
        type: "string",
      },
      ntp_server_2_port: {
        default: 123,
        description: "The port (1-65535) fof the second NTP server.",
        type: "integer",
      },
      port: {
        default: 80,
        description: "Port of the power meter API.",
        type: "integer",
      },
      resilience_initial_connection_retries: {
        default: 25,
        description:
          "For the controller resilience, the number of retries to connect to the powermeter at module initialization.",
        type: "integer",
      },
      resilience_initial_connection_retry_delay: {
        default: 10000,
        description:
          "For the controller resilience, the delay in milliseconds before a retry attempt at module initialization..",
        type: "integer",
      },
      resilience_transaction_request_retries: {
        default: 3,
        description:
          "For the controller resilience, the number of retries to connect to the powermeter at a transaction start or stop request.",
        type: "integer",
      },
      resilience_transaction_request_retry_delay: {
        default: 250,
        description:
          "For the controller resilience, the delay in milliseconds before a retry attempt  at a transaction start or stop request.",
        type: "integer",
      },
      tariff_id: {
        default: 0,
        description: "Used for a unique transaction tariff designation",
        type: "integer",
      },
    },
    description: "Module implementing the LEM DCBM 400/600 power meter driver adapter via HTTP.",
    metadata: {
      authors: ["Valentin Dimov, valentin.dimov@pionix.de", "Fabian Klemm, fabian.klemm@pionix.de"],
      license: "https://opensource.org/licenses/Apache-2.0",
    },
    provides: {
      main: {
        description: "This is the main unit of the module",
        interface: "powermeter",
      },
    },
  },
  MicroMegaWattBSP: {
    config: {
      baud_rate: {
        default: 115200,
        description: "Serial baud rate to use when communicating with uMWC hardware",
        maximum: 230400,
        minimum: 9600,
        type: "integer",
      },
      connector_id: {
        default: 1,
        description: "Connector id",
        type: "integer",
      },
      dc_max_voltage: {
        default: 1000,
        description: "Maximum voltage to support",
        maximum: 1000,
        minimum: 50,
        type: "integer",
      },
      reset_gpio: {
        default: 27,
        description: "GPIO line to use to reset uMWC",
        type: "integer",
      },
      reset_gpio_chip: {
        default: "gpiochip0",
        description: "Reset GPIO chip to use to HW reset uMWC. If set to empty string, it is disabled.",
        type: "string",
      },
      serial_port: {
        default: "/dev/ttyUSB0",
        description: "Serial port the uMWC hardware is connected to",
        type: "string",
      },
    },
    description: "Driver module for the Micro Mega Watt DC Charging Tester v1.0",
    enable_external_mqtt: true,
    metadata: {
      authors: ["Cornelius Claussen"],
      license: "https://opensource.org/licenses/Apache-2.0",
    },
    provides: {
      board_support: {
        description: "provides the board support Interface to low level control control pilot, relais, rcd, motor lock",
        interface: "evse_board_support",
      },
      dc_supply: {
        description: "Interface for the DC/DC output supply",
        interface: "power_supply_DC",
      },
      powermeter: {
        description: "Interface for the powermeter",
        interface: "powermeter",
      },
    },
  },
  OCPP: {
    config: {
      ChargePointConfigPath: {
        default: "ocpp-config.json",
        description:
          "Path to the ocpp configuration file. Libocpp defines a JSON schema for this file. Please refer to the documentation of libocpp for more information about the configuration options.  ",
        type: "string",
      },
      DatabasePath: {
        default: "/tmp/ocpp_1_6_charge_point",
        description:
          "Path to the persistent SQLite database directory. Please refer to the libocpp documentation for more information about the database and its structure.",
        type: "string",
      },
      EnableExternalWebsocketControl: {
        default: false,
        description:
          "If true websocket can be disconnected and connected externally. This parameter is for debug and testing purposes.",
        type: "boolean",
      },
      MessageLogPath: {
        default: "/tmp/everest_ocpp_logs",
        description: "Path to directory where logs of all OCPP messages are written to",
        type: "string",
      },
      MessageQueueResumeDelay: {
        default: 0,
        description:
          "Time (seconds) to delay resuming the message queue after reconnecting. This parameter was introduced because some OCTT test cases require that the first message after a reconnect is sent by the CSMS.",
        type: "integer",
      },
      PublishChargingScheduleDurationS: {
        default: 600,
        description:
          "Duration in seconds that defines the duration of the requested charging schedules starting from now",
        type: "integer",
      },
      PublishChargingScheduleIntervalS: {
        default: 30,
        description:
          "Interval in seconds in which charging schedules received from OCPP are be published over MQTT and signalled to connected modules. If the value is set to 0, charging schedules are only published when changed by CSMS",
        type: "integer",
      },
      RequestCompositeScheduleUnit: {
        default: "A",
        description:
          "Unit in which composite schedules are requested and shared within EVerest. It is recommended to use Amps for AC and Watts for DC charging stations. Allowed values:\n  - 'A' for Amps\n  - 'W' for Watts ",
        type: "string",
      },
      UserConfigPath: {
        default: "user_config.json",
        description:
          "Path to the file of the OCPP user config. The user config is used as an overlay for the original config defined by the ChargePointConfigPath. Any changes to configuration keys turned out internally or by the CSMS will be  written to the user config file.",
        type: "string",
      },
    },
    description: "A OCPP charge point / charging station module, currently targeting OCPP-J 1.6",
    enable_external_mqtt: true,
    enable_global_errors: true,
    metadata: {
      authors: ["Kai-Uwe Hermann", "Piet Gömpel"],
      license: "https://opensource.org/licenses/Apache-2.0",
    },
    provides: {
      auth_provider: {
        description: "Provides auth tokens from OCPP",
        interface: "auth_token_provider",
      },
      auth_validator: {
        description: "Validates the provided auth token with OCPP",
        interface: "auth_token_validator",
      },
      data_transfer: {
        description: "OCPP data transfer towards the CSMS",
        interface: "ocpp_data_transfer",
      },
      main: {
        description: "This is a OCPP 1.6 charge point",
        interface: "ocpp_1_6_charge_point",
      },
      ocpp_generic: {
        description: "Generic OCPP interface.",
        interface: "ocpp",
      },
      session_cost: {
        description: "Send session cost",
        interface: "session_cost",
      },
    },
    requires: {
      auth: {
        interface: "auth",
        max_connections: 1,
        min_connections: 1,
      },
      data_transfer: {
        interface: "ocpp_data_transfer",
        max_connections: 1,
        min_connections: 0,
      },
      display_message: {
        interface: "display_message",
        max_connections: 1,
        min_connections: 0,
      },
      evse_energy_sink: {
        interface: "external_energy_limits",
        max_connections: 129,
        min_connections: 0,
      },
      evse_manager: {
        interface: "evse_manager",
        max_connections: 128,
        min_connections: 1,
      },
      extensions_15118: {
        interface: "iso15118_extensions",
        max_connections: 128,
        min_connections: 0,
      },
      reservation: {
        interface: "reservation",
        max_connections: 1,
        min_connections: 1,
      },
      security: {
        interface: "evse_security",
        max_connections: 1,
        min_connections: 1,
      },
      system: {
        interface: "system",
        max_connections: 1,
        min_connections: 1,
      },
    },
  },
  OCPP201: {
    config: {
      CompositeScheduleIntervalS: {
        default: 30,
        description:
          "Interval in seconds in which composite schedules are received from libocpp are be published over MQTT and signalled to connected modules. If the value is set to 0, composite schedules are only published when changed by CSMS",
        type: "integer",
      },
      CoreDatabasePath: {
        default: "/tmp/ocpp201",
        description:
          "Path to the persistent SQLite database directory. Please refer to the libocpp documentation for more information about the database and its structure.",
        type: "string",
      },
      DeviceModelConfigPath: {
        default: "component_config",
        description:
          "Path to the device model component config directory. Libocpp defines a certain schema for these files. Please refer to the documentation of libocpp for more information about the configuration options.",
        type: "string",
      },
      DeviceModelDatabaseMigrationPath: {
        default: "device_model_migrations",
        description: "Path to the migration files for the device model",
        type: "string",
      },
      DeviceModelDatabasePath: {
        default: "device_model_storage.db",
        description: "Path to the SQLite database for the device model",
        type: "string",
      },
      EnableExternalWebsocketControl: {
        default: false,
        description:
          "If true websocket can be disconnected and connected externally. This parameter is for debug and testing purposes.",
        type: "boolean",
      },
      MessageLogPath: {
        default: "/tmp/everest_ocpp_logs",
        description: "Path to directory where logs of all OCPP messages are written to",
        type: "string",
      },
      MessageQueueResumeDelay: {
        default: 0,
        description:
          "Time (seconds) to delay resuming the message queue after reconnecting. This parameter was introduced because some OCTT test cases require that the first message after a reconnect is sent by the CSMS.",
        type: "integer",
      },
      RequestCompositeScheduleDurationS: {
        default: 600,
        description:
          "Time (seconds) for which composite schedules are requested.  Schedules are requested from now until now + RequestCompositeScheduleDurationS",
        type: "integer",
      },
      RequestCompositeScheduleUnit: {
        default: "A",
        description:
          "Unit in which composite schedules are requested and shared within EVerest. It is recommended to use Amps for AC and Watts for DC charging stations. Allowed values:\n  - 'A' for Amps\n  . 'W' for Watts ",
        type: "string",
      },
    },
    description: "A OCPP charge point / charging station module for OCPP 2.0.1",
    enable_external_mqtt: true,
    enable_global_errors: true,
    metadata: {
      authors: ["Piet Gömpel", "Kai-Uwe Hermann"],
      license: "https://opensource.org/licenses/Apache-2.0",
    },
    provides: {
      auth_provider: {
        description: "Provides authorization requests by CSMS",
        interface: "auth_token_provider",
      },
      auth_validator: {
        description: "Validates the provided token using CSMS, AuthorizationList or AuthorizationCache",
        interface: "auth_token_validator",
      },
      data_transfer: {
        description: "OCPP data transfer towards the CSMS",
        interface: "ocpp_data_transfer",
      },
      ocpp_generic: {
        description: "Generic OCPP interface.",
        interface: "ocpp",
      },
      session_cost: {
        description: "Send session cost",
        interface: "session_cost",
      },
    },
    requires: {
      auth: {
        interface: "auth",
        max_connections: 1,
        min_connections: 1,
      },
      data_transfer: {
        interface: "ocpp_data_transfer",
        max_connections: 1,
        min_connections: 0,
      },
      display_message: {
        interface: "display_message",
        max_connections: 1,
        min_connections: 0,
      },
      evse_energy_sink: {
        interface: "external_energy_limits",
        max_connections: 129,
        min_connections: 0,
      },
      evse_manager: {
        interface: "evse_manager",
        max_connections: 128,
        min_connections: 1,
      },
      extensions_15118: {
        interface: "iso15118_extensions",
        max_connections: 128,
        min_connections: 0,
      },
      reservation: {
        interface: "reservation",
        max_connections: 1,
        min_connections: 0,
      },
      security: {
        interface: "evse_security",
        max_connections: 1,
        min_connections: 1,
      },
      system: {
        interface: "system",
        max_connections: 1,
        min_connections: 1,
      },
    },
  },
  OCPPExtensionExample: {
    config: {
      keys_to_monitor: {
        default: "HeartbeatInterval,SecurityProfile,ExampleConfigurationKey",
        description: "Commad seperated list of keys that should be monitored",
        type: "string",
      },
    },
    description:
      "This is an example module that shows how the OCPP module of EVerest could be extended using the DataTransfer functionality and custom configuration keys",
    metadata: {
      authors: ["Piet Gömpel"],
      license: "https://opensource.org/licenses/Apache-2.0",
    },
    provides: {
      data_transfer: {
        description: "OCPP data transfer",
        interface: "ocpp_data_transfer",
      },
    },
    requires: {
      data_transfer: {
        interface: "ocpp_data_transfer",
        max_connections: 1,
        min_connections: 1,
      },
      ocpp: {
        interface: "ocpp",
        max_connections: 1,
        min_connections: 1,
      },
    },
  },
  OVMSimulator: {
    description: "SIL Implementation of an Over voltage monitor for DC charging",
    metadata: {
      authors: ["Cornelius Claussen (Pionix GmbH)"],
      license: "https://opensource.org/licenses/Apache-2.0",
    },
    provides: {
      main: {
        config: {
          simulate_error: {
            default: false,
            description: "Set to true to throw an over voltage error during charging",
            type: "boolean",
          },
          simulate_error_delay: {
            default: 5,
            description: "Simulate over voltage error N seconds after start of charging",
            type: "integer",
          },
        },
        description: "Main interface for the OVM",
        interface: "over_voltage_monitor",
      },
    },
  },
  PN532TokenProvider: {
    description: "PN532 RFID/NFC token provider returning the token as soon as the tag can be read by the reader",
    metadata: {
      authors: ["Cornelius Claussen", "Kai-Uwe Hermann", "Thilo Molitor", "Anton Wöllert"],
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
          debug: {
            default: false,
            description: "Show debug output on command line.",
            type: "boolean",
          },
          read_timeout: {
            default: 5,
            description: "Time between subsequent card reads (in s)",
            maximum: 120,
            minimum: 0,
            type: "integer",
          },
          serial_port: {
            default: "/dev/ttyS0",
            description: "Serial port the PN532 hardware is connected to",
            type: "string",
          },
        },
        description: "Implementation of PN532 RFID/NFC token provider",
        interface: "auth_token_provider",
      },
    },
  },
  PN7160TokenProvider: {
    description: "PN7160 RFID/NFC token provider returning the token as soon as the tag can be read by the reader",
    metadata: {
      authors: ["Cornelius Claussen", "Kai-Uwe Hermann", "Thilo Molitor", "Anton Wöllert", "Christoph Burandt"],
      license: "https://opensource.org/licenses/Apache-2.0",
    },
    provides: {
      main: {
        config: {
          debug: {
            default: false,
            description: "Show debug output on command line.",
            type: "boolean",
          },
          disable_nfc_rfid: {
            default: false,
            description: "Disable NFC RFID reader",
            type: "boolean",
          },
          token_debounce_interval_ms: {
            default: 3000,
            description: "Minimal wait time in ms until next token will be published (debounce interval).",
            maximum: 10000,
            minimum: 1000,
            type: "integer",
          },
        },
        description: "Implementation of PN7160 RFID/NFC token provider",
        interface: "auth_token_provider",
      },
    },
  },
  PacketSniffer: {
    config: {
      device: {
        default: "eth1",
        description: "The ethernet device on which the messages are to be captured",
        type: "string",
      },
      session_logging_path: {
        default: "/tmp",
        description: "Output directory for session capture dump files",
        type: "string",
      },
    },
    description:
      'Using the "PacketSniffer" EVerest module it is possible to capture and store the different packets on the PLC interface.',
    metadata: {
      authors: ["Sebastian Lukas"],
      license: "https://opensource.org/licenses/Apache-2.0",
    },
    provides: {
      main: {
        description: "EVerest API",
        interface: "empty",
      },
    },
    requires: {
      evse_manager: {
        interface: "evse_manager",
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
  PhyVersoBSP: {
    config: {
      baud_rate: {
        default: 115200,
        description: "Serial baud rate to use when communicating with the hardware",
        maximum: 230400,
        minimum: 9600,
        type: "integer",
      },
      conn1_dc: {
        default: false,
        description: "Set to true if it is for DC, false if it is AC",
        type: "boolean",
      },
      conn1_gpio_stop_button_bank: {
        default: "gpiochip1",
        description: "GPIO peripheral bank for connector 1 stop button",
        type: "string",
      },
      conn1_gpio_stop_button_enabled: {
        default: false,
        description:
          "Set to true to enable external charging stop button for connector 1 on a GPIO connected to the SOM",
        type: "boolean",
      },
      conn1_gpio_stop_button_invert: {
        default: false,
        description: "Set to true to invert pin logic",
        type: "boolean",
      },
      conn1_gpio_stop_button_pin: {
        default: 36,
        description: "GPIO peripheral pin for connector 1 stop button",
        type: "integer",
      },
      conn1_has_socket: {
        default: false,
        description: "Set to true if it has a socket, false if it has a permanently attached cable",
        type: "boolean",
      },
      conn1_max_current_A_export: {
        default: 0,
        description: "Maximum export current in amps",
        maximum: 63,
        minimum: 0,
        type: "integer",
      },
      conn1_max_current_A_import: {
        default: 16,
        description: "Maximum import current in amps",
        minimum: 0,
        type: "integer",
      },
      conn1_max_phase_count_export: {
        default: 3,
        description: "Maximum phase count for export",
        maximum: 3,
        minimum: 1,
        type: "integer",
      },
      conn1_max_phase_count_import: {
        default: 3,
        description: "Maximum phase count for import",
        maximum: 3,
        minimum: 1,
        type: "integer",
      },
      conn1_min_current_A_export: {
        default: 0,
        description: "Minimum export current in amps",
        maximum: 63,
        minimum: 0,
        type: "integer",
      },
      conn1_min_current_A_import: {
        default: 6,
        description: "Minimum import current in amps",
        minimum: 0,
        type: "integer",
      },
      conn1_min_phase_count_export: {
        default: 3,
        description: "Minimum phase count for export",
        maximum: 3,
        minimum: 1,
        type: "integer",
      },
      conn1_min_phase_count_import: {
        default: 3,
        description: "Minimum phase count for import",
        maximum: 3,
        minimum: 1,
        type: "integer",
      },
      conn1_motor_lock_type: {
        default: 2,
        description:
          "Connector 1 motor lock type; 1 == Hella Style time-based lock, 2 == Valeo potentiometer feedback based",
        type: "integer",
      },
      conn2_dc: {
        default: false,
        description: "Set to true if it is for DC, false if it is AC",
        type: "boolean",
      },
      conn2_gpio_stop_button_bank: {
        default: "gpiochip1",
        description: "GPIO peripheral bank for connector 2 stop button",
        type: "string",
      },
      conn2_gpio_stop_button_enabled: {
        default: false,
        description:
          "Set to true to enable external charging stop button for connector 2 on a GPIO connected to the SOM",
        type: "boolean",
      },
      conn2_gpio_stop_button_invert: {
        default: false,
        description: "Set to true to invert pin logic",
        type: "boolean",
      },
      conn2_gpio_stop_button_pin: {
        default: 37,
        description: "GPIO peripheral pin for connector 2 stop button",
        type: "integer",
      },
      conn2_has_socket: {
        default: false,
        description: "Set to true if it has a socket, false if it has a permanently attached cable",
        type: "boolean",
      },
      conn2_max_current_A_export: {
        default: 0,
        description: "Maximum export current in amps",
        maximum: 63,
        minimum: 0,
        type: "integer",
      },
      conn2_max_current_A_import: {
        default: 16,
        description: "Maximum import current in amps",
        minimum: 0,
        type: "integer",
      },
      conn2_max_phase_count_export: {
        default: 3,
        description: "Maximum phase count for export",
        maximum: 3,
        minimum: 1,
        type: "integer",
      },
      conn2_max_phase_count_import: {
        default: 3,
        description: "Maximum phase count for import",
        maximum: 3,
        minimum: 1,
        type: "integer",
      },
      conn2_min_current_A_export: {
        default: 0,
        description: "Minimum export current in amps",
        maximum: 63,
        minimum: 0,
        type: "integer",
      },
      conn2_min_current_A_import: {
        default: 6,
        description: "Minimum import current in amps",
        minimum: 0,
        type: "integer",
      },
      conn2_min_phase_count_export: {
        default: 3,
        description: "Minimum phase count for export",
        maximum: 3,
        minimum: 1,
        type: "integer",
      },
      conn2_min_phase_count_import: {
        default: 3,
        description: "Minimum phase count for import",
        maximum: 3,
        minimum: 1,
        type: "integer",
      },
      conn2_motor_lock_type: {
        default: 2,
        description:
          "Connector 2 motor lock type; 1 == Hella Style time-based lock, 2 == Valeo potentiometer feedback based",
        type: "integer",
      },
      reset_gpio: {
        default: -1,
        description:
          "If set <0 it is disabled. If > 0, configured reset_gpio_bank and reset_gpio_pin configuration is used for hard reset of MCU",
        maximum: 1000,
        minimum: -1,
        type: "integer",
      },
      reset_gpio_bank: {
        default: 1,
        description: "GPIO peripheral bank the nRST pin of the MCU is mapped to",
        type: "integer",
      },
      reset_gpio_pin: {
        default: 23,
        description: "GPIO peripheral pin the nRST pin of the MCU is mapped to",
        type: "integer",
      },
      serial_port: {
        default: "/dev/ttyUSB0",
        description: "Serial port the hardware is connected to",
        type: "string",
      },
    },
    description: "Driver module for Phytec PhyVerso EV Charging controller with Pionix MCU firmware",
    enable_external_mqtt: true,
    enable_telemetry: true,
    metadata: {
      authors: ["Cornelius Claussen"],
      license: "https://opensource.org/licenses/Apache-2.0",
    },
    provides: {
      connector_1: {
        description:
          "provides the board support interface to low level control the proximity and control pilots, relais and motor lock",
        interface: "evse_board_support",
      },
      connector_2: {
        description:
          "provides the board support interface to low level control the proximity and control pilots, relais and motor lock",
        interface: "evse_board_support",
      },
      connector_lock_1: {
        description: "Lock interface",
        interface: "connector_lock",
      },
      connector_lock_2: {
        description: "Lock interface",
        interface: "connector_lock",
      },
      phyverso_mcu_temperature: {
        description: "Temperatures from MCU",
        interface: "phyverso_mcu_temperature",
      },
      rcd_1: {
        description: "RCD interface of the onboard RCD",
        interface: "ac_rcd",
      },
      rcd_2: {
        description: "RCD interface of the onboard RCD",
        interface: "ac_rcd",
      },
      system_specific_data_1: {
        description: "Opaque data blobs coming from connector 1",
        interface: "generic_array",
      },
      system_specific_data_2: {
        description: "Opaque data blobs coming from connector 2",
        interface: "generic_array",
      },
    },
  },
  PyEvJosev: {
    config: {
      device: {
        default: "eth0",
        description:
          "Ethernet device used for HLC. Any local interface that has an ipv6 link-local and a MAC addr will work.",
        type: "string",
      },
      enable_tls_1_3: {
        default: false,
        description: "The EVCC will enable TLS version 1.3",
        type: "boolean",
      },
      enforce_tls: {
        default: false,
        description: "The EVCC will enforce a TLS connection",
        type: "boolean",
      },
      is_cert_install_needed: {
        default: false,
        description:
          "If true, the contract certificate will be installed via the evse. And any existing contract certificate will also be overwritten.",
        type: "boolean",
      },
      supported_DIN70121: {
        default: false,
        description: "The EVSE supports the DIN SPEC",
        type: "boolean",
      },
      supported_ISO15118_2: {
        default: false,
        description: "The EVSE supports ISO15118-2",
        type: "boolean",
      },
      supported_ISO15118_20_AC: {
        default: false,
        description: "The EVSE supports ISO15118-20 AC",
        type: "boolean",
      },
      supported_ISO15118_20_DC: {
        default: false,
        description: "The EVSE supports ISO15118-20 DC",
        type: "boolean",
      },
      tls_active: {
        default: false,
        description: "If true, EVCC connects to SECC as TLS client",
        type: "boolean",
      },
    },
    description: "This module implements an DIN70121, ISO15118-2 and ISO15118-20 EV using the Josev project.",
    enable_external_mqtt: true,
    metadata: {
      authors: ["Sebastian Lukas"],
      license: "https://opensource.org/licenses/Apache-2.0",
    },
    provides: {
      ev: {
        description: "This module implements the ISO15118-2 implementation of an EV",
        interface: "ISO15118_ev",
      },
    },
  },
  PyExampleErrorRaiser: {
    description: "Simple example module written in Python to demonstrate error handling on raiser side",
    metadata: {
      authors: ["Andreas Heinrich"],
      license: "https://opensource.org/licenses/Apache-2.0",
    },
    provides: {
      example_raiser: {
        description: "This implements an example interface",
        interface: "example_error_framework",
      },
    },
  },
  PyExampleErrorSubscriber: {
    description: "Simple example module written in Python to demonstrate error framework on subscriber side",
    metadata: {
      authors: ["Andreas Heinrich"],
      license: "https://opensource.org/licenses/Apache-2.0",
    },
    provides: {
      example_subscriber: {
        description: "This implements the example interface",
        interface: "example_error_framework",
      },
    },
    requires: {
      example_raiser: {
        interface: "example_error_framework",
      },
    },
  },
  SerialCommHub: {
    description: "Hub to communicate with attached serial devices",
    metadata: {
      authors: ["Lars Dieckmann", "Cornelius Claussen"],
      license: "https://opensource.org/licenses/Apache-2.0",
    },
    provides: {
      main: {
        config: {
          baudrate: {
            default: 9600,
            description: "Baudrate",
            maximum: 230400,
            minimum: 0,
            type: "integer",
          },
          ignore_echo: {
            default: false,
            description:
              "On some hardware every message that is sent is read back, this setting filters the sent message in the reply.",
            type: "boolean",
          },
          initial_timeout_ms: {
            default: 500,
            description: "Timeout in ms for the first packet.",
            type: "integer",
          },
          max_packet_size: {
            default: 256,
            description:
              "Maximum size of a packet to read/write in bytes. Payload exceeding the size will be chunked. The APU size according to [wikipedia](https://en.wikipedia.org/wiki/Modbus) is 256 bytes, which is used as default here.",
            maximum: 65536,
            minimum: 7,
            type: "integer",
          },
          parity: {
            default: 0,
            description: "Parity bit: 0: None, 1: Odd, 2: Even",
            maximum: 2,
            minimum: 0,
            type: "integer",
          },
          retries: {
            default: 2,
            description: "Count of retries in case of error in Modbus query.",
            maximum: 10,
            minimum: 0,
            type: "integer",
          },
          rtscts: {
            default: false,
            description: "Use RTS/CTS hardware flow control",
            type: "boolean",
          },
          rxtx_gpio_chip: {
            default: "",
            description: "GPIO chip to use to switch between RX/TX. An empty string disables GPIO usage.",
            type: "string",
          },
          rxtx_gpio_line: {
            default: 0,
            description: "GPIO line to use to switch between RX/TX",
            type: "integer",
          },
          rxtx_gpio_tx_high: {
            default: false,
            description: "GPIO direction, false means low for TX, true means high for TX",
            type: "boolean",
          },
          serial_port: {
            default: "/dev/ttyUSB0",
            description: "Serial port the hardware is connected to",
            type: "string",
          },
          within_message_timeout_ms: {
            default: 100,
            description: "Timeout in ms for subsequent packets.",
            type: "integer",
          },
        },
        description: "Implementation of serial communication hub",
        interface: "serial_communication_hub",
      },
    },
  },
  Setup: {
    config: {
      ap_interface: {
        default: "wlan0",
        description: "Wifi interface for AP mode",
        type: "string",
      },
      ap_ipv4: {
        default: "192.168.1.1/24",
        description: "IPv4 address of the AP",
        type: "string",
      },
      initialized_by_default: {
        default: true,
        description: "Always report as if the charger was initialized",
        type: "boolean",
      },
      localization: {
        default: false,
        description: "Enable localization support",
        type: "boolean",
      },
      online_check_host: {
        default: "lfenergy.org",
        description: "Hostname or IP to use to check for internet connectivity",
        type: "string",
      },
      release_metadata_file: {
        default: "release.json",
        description: "Location of the release metadata file relative to the EVerest prefix",
        type: "string",
      },
      setup_simulation: {
        default: false,
        description: "Allow simulation setup",
        type: "boolean",
      },
      setup_wifi: {
        default: false,
        description: "Allow wifi setup",
        type: "boolean",
      },
    },
    description:
      "The EVerest Setup module for setting up a LAN or WIFI network connection. This module needs privileged access and should not run during normal operations",
    enable_external_mqtt: true,
    metadata: {
      authors: ["Kai-Uwe Hermann"],
      license: "https://opensource.org/licenses/Apache-2.0",
    },
    provides: {
      main: {
        description: "EVerest Setup",
        interface: "empty",
      },
    },
    requires: {
      store: {
        interface: "kvs",
      },
    },
  },
  SlacSimulator: {
    description: "SIL Implementation of SLAC data link negotiation according to ISO15118-3.",
    enable_external_mqtt: true,
    metadata: {
      authors: ["Cornelius Claussen (Pionix GmbH)", "Tobias Marzell (Pionix GmbH)"],
      license: "https://opensource.org/licenses/Apache-2.0",
    },
    provides: {
      ev: {
        description: "SLAC interface implementation for EV side",
        interface: "ev_slac",
      },
      evse: {
        description: "SLAC interface implementation for EVSE side",
        interface: "slac",
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
  System: {
    config: {
      DefaultRetries: {
        default: 1,
        description: "Specifies how many times Charge Point tries to upload or download files on previous failure.",
        type: "number",
      },
      DefaultRetryInterval: {
        default: 1,
        description:
          "Specifies in seconds after which time a retry of an upload or download on previous failure may be attempted.",
        type: "number",
      },
      ResetDelay: {
        default: 0,
        description:
          "When receiving a reset request, then the actual execution can be delayed by this amount of time (given in seconds). This might be necessary, for example, when the reset request arrives via the network and the call acknowledgement should be given some time to travel the return path to the caller. Defaults to zero, which means that the reset is executed directly without delay.",
        minimum: 0,
        type: "integer",
      },
    },
    description: "This module implements system wide operations",
    enable_external_mqtt: false,
    metadata: {
      authors: ["Piet Gömpel"],
      license: "https://opensource.org/licenses/Apache-2.0",
    },
    provides: {
      main: {
        description: "Implements the system interface",
        interface: "system",
      },
    },
    requires: {},
  },
  TerminalCostAndPriceMessage: {
    description: "Example cost and price message module",
    metadata: {
      authors: ["Maaike Zijderveld"],
      license: "https://opensource.org/licenses/Apache-2.0",
    },
    provides: {
      display_message: {
        description: "module to show a message",
        interface: "display_message",
      },
    },
    requires: {
      session_cost: {
        interface: "session_cost",
        max_connections: 1,
        min_connections: 1,
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
      caps_max_current_A: {
        default: -1,
        description:
          "Maximum current on AC side. For AC this is typically 16 or 32, but for HLC this can be less. -1 means use limit reported by HW.",
        type: "integer",
      },
      caps_min_current_A: {
        default: -1,
        description:
          "Minimal current on AC side. For AC this is typically 6, but for HLC this can be less. -1 means use limit reported by HW.",
        type: "integer",
      },
      reset_gpio: {
        default: 27,
        description: "GPIO line to use to reset Yeti",
        type: "integer",
      },
      reset_gpio_chip: {
        default: "gpiochip0",
        description: "Reset GPIO chip to use to HW reset Yeti. If set to empty string, it is disabled.",
        type: "string",
      },
      serial_port: {
        default: "/dev/ttyUSB0",
        description: "Serial port the Yeti hardware is connected to",
        type: "string",
      },
    },
    description: "Driver module for the YETI hardware v1.0",
    enable_telemetry: true,
    metadata: {
      authors: ["Cornelius Claussen", "Kai-Uwe Hermann", "Thilo Molitor", "Anton Wöllert"],
      license: "https://opensource.org/licenses/Apache-2.0",
    },
    provides: {
      board_support: {
        description: "provides the board support Interface to low level control control pilot, relais, motor lock",
        interface: "evse_board_support",
      },
      connector_lock: {
        description: "Interface for the motor lock",
        interface: "connector_lock",
      },
      powermeter: {
        description: "provides the Yeti Internal Power Meter",
        interface: "powermeter",
      },
      rcd: {
        description: "RCD interface of the onboard RCD",
        interface: "ac_rcd",
      },
    },
  },
  YetiEvDriver: {
    config: {
      baud_rate: {
        default: 115200,
        description: "Serial baud rate to use when communicating with Yeti hardware",
        maximum: 230400,
        minimum: 9600,
        type: "integer",
      },
      reset_gpio: {
        default: -1,
        description: "Reset GPIO number to use to HW reset Yeti. If set <0 it is disabled.",
        maximum: 1000,
        minimum: -1,
        type: "integer",
      },
      serial_port: {
        default: "/dev/ttyUSB0",
        description: "Serial port the Yeti hardware is connected to",
        type: "string",
      },
    },
    description: "Driver module for EV side for the YETI hardware",
    enable_external_mqtt: true,
    enable_telemetry: true,
    metadata: {
      authors: ["Cornelius Claussen", "Sebastian Lukas", "Piet Gömpel"],
      license: "https://opensource.org/licenses/Apache-2.0",
    },
    provides: {
      ev_board_support: {
        description: "provides the board support Interface to low level control control pilot, relais, rcd",
        interface: "ev_board_support",
      },
    },
  },
  YetiSimulator: {
    config: {
      connector_id: {
        description: "Connector id of the evse manager to which this simulator is connected to",
        type: "integer",
      },
    },
    description: "SIL simulator for YETI hardware v1.0",
    enable_external_mqtt: true,
    enable_telemetry: true,
    metadata: {
      authors: ["Cornelius Claussen", "Tobias Marzell (Pionix GmbH)"],
      license: "https://opensource.org/licenses/Apache-2.0",
    },
    provides: {
      board_support: {
        description: "provides the EVSE board support Interface to low level control pilot, relais, rcd, motor lock",
        interface: "evse_board_support",
      },
      connector_lock: {
        description: "Interface for the simulated Connector lock",
        interface: "connector_lock",
      },
      ev_board_support: {
        description: "provides the EV board support Interface to low level control pilot, relais, rcd",
        interface: "ev_board_support",
      },
      powermeter: {
        description: "provides the Yeti Internal Power Meter",
        interface: "powermeter",
      },
      rcd: {
        description: "Interface for the simulated AC RCD",
        interface: "ac_rcd",
      },
    },
  },
} as EverestModuleDefinitionList;
