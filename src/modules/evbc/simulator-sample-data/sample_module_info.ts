// SPDX-License-Identifier: Apache-2.0
// Copyright 2020 - 2025 Pionix GmbH and Contributors to EVerest

// This file is generated, see README.md for more information.

import { EverestModuleDefinitionList } from "../index";
import { tc } from "@/plugins/i18n";

/* eslint-disable prettier/prettier */
export default {
  API: {
    config: {
      charger_information_file: {
        default: '',
        description: tc('API.config.charger_information_file.description'),
        type: 'string'
      },
      hw_caps_max_current_export_decimal_places: {
        default: 2,
        description: tc('API.config.hw_caps_max_current_export_decimal_places.description'),
        minimum: 0,
        type: 'integer'
      },
      hw_caps_max_current_export_round_to: {
        default: 0,
        description: tc('API.config.hw_caps_max_current_export_round_to.description'),
        type: 'number'
      },
      hw_caps_max_current_import_decimal_places: {
        default: 2,
        description: tc('API.config.hw_caps_max_current_import_decimal_places.description'),
        minimum: 0,
        type: 'integer'
      },
      hw_caps_max_current_import_round_to: {
        default: 0,
        description: tc('API.config.hw_caps_max_current_import_round_to.description'),
        type: 'number'
      },
      hw_caps_max_plug_temperature_C_decimal_places: {
        default: 2,
        description: tc('API.config.hw_caps_max_plug_temperature_C_decimal_places.description'),
        minimum: 0,
        type: 'integer'
      },
      hw_caps_max_plug_temperature_C_round_to: {
        default: 0,
        description: tc('API.config.hw_caps_max_plug_temperature_C_round_to.description'),
        type: 'number'
      },
      hw_caps_min_current_export_decimal_places: {
        default: 2,
        description: tc('API.config.hw_caps_min_current_export_decimal_places.description'),
        minimum: 0,
        type: 'integer'
      },
      hw_caps_min_current_export_round_to: {
        default: 0,
        description: tc('API.config.hw_caps_min_current_export_round_to.description'),
        type: 'number'
      },
      hw_caps_min_current_import_decimal_places: {
        default: 2,
        description: tc('API.config.hw_caps_min_current_import_decimal_places.description'),
        minimum: 0,
        type: 'integer'
      },
      hw_caps_min_current_import_round_to: {
        default: 0,
        description: tc('API.config.hw_caps_min_current_import_round_to.description'),
        type: 'number'
      },
      limits_max_current_decimal_places: {
        default: 2,
        description: tc('API.config.limits_max_current_decimal_places.description'),
        minimum: 0,
        type: 'integer'
      },
      limits_max_current_round_to: {
        default: 0,
        description: tc('API.config.limits_max_current_round_to.description'),
        type: 'number'
      },
      powermeter_VAR_decimal_places: {
        default: 2,
        description: tc('API.config.powermeter_VAR_decimal_places.description'),
        minimum: 0,
        type: 'integer'
      },
      powermeter_VAR_round_to: {
        default: 0,
        description: tc('API.config.powermeter_VAR_round_to.description'),
        type: 'number'
      },
      powermeter_current_decimal_places: {
        default: 2,
        description: tc('API.config.powermeter_current_decimal_places.description'),
        minimum: 0,
        type: 'integer'
      },
      powermeter_current_round_to: {
        default: 0,
        description: tc('API.config.powermeter_current_round_to.description'),
        type: 'number'
      },
      powermeter_energy_export_decimal_places: {
        default: 2,
        description: tc('API.config.powermeter_energy_export_decimal_places.description'),
        minimum: 0,
        type: 'integer'
      },
      powermeter_energy_export_round_to: {
        default: 0,
        description: tc('API.config.powermeter_energy_export_round_to.description'),
        type: 'number'
      },
      powermeter_energy_import_decimal_places: {
        default: 2,
        description: tc('API.config.powermeter_energy_import_decimal_places.description'),
        minimum: 0,
        type: 'integer'
      },
      powermeter_energy_import_round_to: {
        default: 0,
        description: tc('API.config.powermeter_energy_import_round_to.description'),
        type: 'number'
      },
      powermeter_frequency_decimal_places: {
        default: 2,
        description: tc('API.config.powermeter_frequency_decimal_places.description'),
        minimum: 0,
        type: 'integer'
      },
      powermeter_frequency_round_to: {
        default: 0,
        description: tc('API.config.powermeter_frequency_round_to.description'),
        type: 'number'
      },
      powermeter_power_decimal_places: {
        default: 2,
        description: tc('API.config.powermeter_power_decimal_places.description'),
        minimum: 0,
        type: 'integer'
      },
      powermeter_power_round_to: {
        default: 0,
        description: tc('API.config.powermeter_power_round_to.description'),
        type: 'number'
      },
      powermeter_voltage_decimal_places: {
        default: 2,
        description: tc('API.config.powermeter_voltage_decimal_places.description'),
        minimum: 0,
        type: 'integer'
      },
      powermeter_voltage_round_to: {
        default: 0,
        description: tc('API.config.powermeter_voltage_round_to.description'),
        type: 'number'
      },
      telemetry_evse_temperature_C_decimal_places: {
        default: 2,
        description: tc('API.config.telemetry_evse_temperature_C_decimal_places.description'),
        minimum: 0,
        type: 'integer'
      },
      telemetry_evse_temperature_C_round_to: {
        default: 0,
        description: tc('API.config.telemetry_evse_temperature_C_round_to.description'),
        type: 'number'
      },
      telemetry_fan_rpm_decimal_places: {
        default: 2,
        description: tc('API.config.telemetry_fan_rpm_decimal_places.description'),
        minimum: 0,
        type: 'integer'
      },
      telemetry_fan_rpm_round_to: {
        default: 0,
        description: tc('API.config.telemetry_fan_rpm_round_to.description'),
        type: 'number'
      },
      telemetry_plug_temperature_C_decimal_places: {
        default: 2,
        description: tc('API.config.telemetry_plug_temperature_C_decimal_places.description'),
        minimum: 0,
        type: 'integer'
      },
      telemetry_plug_temperature_C_round_to: {
        default: 0,
        description: tc('API.config.telemetry_plug_temperature_C_round_to.description'),
        type: 'number'
      },
      telemetry_supply_voltage_12V_decimal_places: {
        default: 2,
        description: tc('API.config.telemetry_supply_voltage_12V_decimal_places.description'),
        minimum: 0,
        type: 'integer'
      },
      telemetry_supply_voltage_12V_round_to: {
        default: 0,
        description: tc('API.config.telemetry_supply_voltage_12V_round_to.description'),
        type: 'number'
      },
      telemetry_supply_voltage_minus_12V_decimal_places: {
        default: 2,
        description: tc('API.config.telemetry_supply_voltage_minus_12V_decimal_places.description'),
        minimum: 0,
        type: 'integer'
      },
      telemetry_supply_voltage_minus_12V_round_to: {
        default: 0,
        description: tc('API.config.telemetry_supply_voltage_minus_12V_round_to.description'),
        type: 'number'
      }
    },
    description: tc('API.description'),
    enable_external_mqtt: true,
    metadata: {
      authors: [ 'Kai-Uwe Hermann' ],
      license: 'https://opensource.org/licenses/Apache-2.0'
    },
    provides: {
      main: {
        description: tc('API.provides.main.description'),
        interface: 'empty'
      }
    },
    requires: {
      error_history: {
        interface: 'error_history',
        max_connections: 1,
        min_connections: 0
      },
      evse_energy_sink: {
        interface: 'external_energy_limits',
        max_connections: 128,
        min_connections: 0
      },
      evse_manager: {
        interface: 'evse_manager',
        max_connections: 128,
        min_connections: 1
      },
      ocpp: { interface: 'ocpp', max_connections: 1, min_connections: 0 },
      random_delay: {
        interface: 'uk_random_delay',
        max_connections: 128,
        min_connections: 0
      }
    }
  },
  AdAcEvse22KwzKitBSP: {
    config: {
      baud_rate: {
        default: 115200,
        description: tc('AdAcEvse22KwzKitBSP.config.baud_rate.description'),
        maximum: 230400,
        minimum: 9600,
        type: 'integer'
      },
      caps_max_current_A: {
        default: -1,
        description: tc('AdAcEvse22KwzKitBSP.config.caps_max_current_A.description'),
        type: 'integer'
      },
      caps_min_current_A: {
        default: -1,
        description: tc('AdAcEvse22KwzKitBSP.config.caps_min_current_A.description'),
        type: 'integer'
      },
      reset_gpio: {
        default: 27,
        description: tc('AdAcEvse22KwzKitBSP.config.reset_gpio.description'),
        type: 'integer'
      },
      reset_gpio_chip: {
        default: 'gpiochip0',
        description: tc('AdAcEvse22KwzKitBSP.config.reset_gpio_chip.description'),
        type: 'string'
      },
      serial_port: {
        default: '/dev/ttyUSB0',
        description: tc('AdAcEvse22KwzKitBSP.config.serial_port.description'),
        type: 'string'
      }
    },
    description: tc('AdAcEvse22KwzKitBSP.description'),
    enable_telemetry: true,
    metadata: {
      authors: [
        'Cornelius Claussen',
        'Kai-Uwe Hermann',
        'Thilo Molitor',
        'Anton Wöllert',
        'Ryan Wiebe'
      ],
      license: 'https://opensource.org/licenses/Apache-2.0'
    },
    provides: {
      board_support: {
        description: tc('AdAcEvse22KwzKitBSP.provides.board_support.description'),
        interface: 'evse_board_support'
      },
      powermeter: {
        description: tc('AdAcEvse22KwzKitBSP.provides.powermeter.description'),
        interface: 'powermeter'
      }
    }
  },
  Auth: {
    config: {
      connection_timeout: {
        description: tc('Auth.config.connection_timeout.description'),
        type: 'integer'
      },
      ignore_connector_faults: {
        default: false,
        description: tc('Auth.config.ignore_connector_faults.description'),
        type: 'boolean'
      },
      master_pass_group_id: {
        default: '',
        description: tc('Auth.config.master_pass_group_id.description'),
        type: 'string'
      },
      prioritize_authorization_over_stopping_transaction: {
        default: true,
        description: tc('Auth.config.prioritize_authorization_over_stopping_transaction.description'),
        type: 'boolean'
      },
      selection_algorithm: {
        default: 'FindFirst',
        description: tc('Auth.config.selection_algorithm.description'),
        type: 'string'
      }
    },
    description: tc('Auth.description'),
    metadata: {
      authors: [ 'Piet Gömpel' ],
      license: 'https://opensource.org/licenses/Apache-2.0'
    },
    provides: {
      main: {
        description: tc('Auth.provides.main.description'),
        interface: 'auth'
      },
      reservation: {
        description: tc('Auth.provides.reservation.description'),
        interface: 'reservation'
      }
    },
    requires: {
      evse_manager: {
        interface: 'evse_manager',
        max_connections: 128,
        min_connections: 1
      },
      kvs: { interface: 'kvs', max_connections: 1, min_connections: 0 },
      token_provider: {
        interface: 'auth_token_provider',
        max_connections: 128,
        min_connections: 1
      },
      token_validator: {
        interface: 'auth_token_validator',
        max_connections: 128,
        min_connections: 1
      }
    }
  },
  DCSupplySimulator: {
    description: tc('DCSupplySimulator.description'),
    metadata: {
      authors: [
        'Cornelius Claussen (Pionix GmbH)',
        'Fabian Hartung (chargebyte GmbH)',
        'Mohannad Oraby (chargebyte GmbH)',
        'Sebastian Lukas (Pionix GmbH)'
      ],
      license: 'https://opensource.org/licenses/Apache-2.0'
    },
    provides: {
      main: {
        config: {
          bidirectional: {
            default: true,
            description: tc('DCSupplySimulator.provides.main.config.bidirectional.description'),
            type: 'boolean'
          },
          max_current: {
            default: 200,
            description: tc('DCSupplySimulator.provides.main.config.max_current.description'),
            type: 'number'
          },
          max_power: {
            default: 150000,
            description: tc('DCSupplySimulator.provides.main.config.max_power.description'),
            type: 'number'
          },
          max_voltage: {
            default: 900,
            description: tc('DCSupplySimulator.provides.main.config.max_voltage.description'),
            type: 'number'
          },
          min_current: {
            default: 1,
            description: tc('DCSupplySimulator.provides.main.config.min_current.description'),
            type: 'number'
          },
          min_voltage: {
            default: 200,
            description: tc('DCSupplySimulator.provides.main.config.min_voltage.description'),
            type: 'number'
          }
        },
        description: tc('DCSupplySimulator.provides.main.description'),
        interface: 'power_supply_DC'
      },
      powermeter: {
        description: tc('DCSupplySimulator.provides.powermeter.description'),
        interface: 'powermeter'
      }
    }
  },
  DPM1000: {
    config: {
      current_limit_A: {
        default: 100,
        description: tc('DPM1000.config.current_limit_A.description'),
        maximum: 100,
        type: 'number'
      },
      debug_print_all_telemetry: {
        default: false,
        description: tc('DPM1000.config.debug_print_all_telemetry.description'),
        type: 'boolean'
      },
      device: {
        default: 'can0',
        description: tc('DPM1000.config.device.description'),
        type: 'string'
      },
      device_address: {
        default: 0,
        description: tc('DPM1000.config.device_address.description'),
        type: 'integer'
      },
      discharge_gpio_chip: {
        default: '',
        description: tc('DPM1000.config.discharge_gpio_chip.description'),
        type: 'string'
      },
      discharge_gpio_line: {
        default: 0,
        description: tc('DPM1000.config.discharge_gpio_line.description'),
        type: 'integer'
      },
      discharge_gpio_polarity: {
        default: true,
        description: tc('DPM1000.config.discharge_gpio_polarity.description'),
        type: 'boolean'
      },
      power_limit_W: {
        default: 30000,
        description: tc('DPM1000.config.power_limit_W.description'),
        maximum: 30000,
        type: 'number'
      },
      series_parallel_mode: {
        default: 'Series',
        description: tc('DPM1000.config.series_parallel_mode.description'),
        enum: [ 'Series', 'Parallel', 'Automatic' ],
        type: 'string'
      },
      voltage_limit_V: {
        default: 1000,
        description: tc('DPM1000.config.voltage_limit_V.description'),
        maximum: 1000,
        type: 'number'
      }
    },
    description: tc('DPM1000.description'),
    metadata: {
      authors: [ 'aw@pionix.de' ],
      license: 'https://opensource.org/licenses/Apache-2.0'
    },
    provides: {
      main: {
        description: tc('DPM1000.provides.main.description'),
        interface: 'power_supply_DC'
      }
    }
  },
  DummyBankSessionTokenProvider: {
    description: tc('DummyBankSessionTokenProvider.description'),
    enable_external_mqtt: false,
    metadata: {
      authors: [ 'Kai-Uwe Hermann', 'Christoph Burandt' ],
      license: 'https://opensource.org/licenses/Apache-2.0'
    },
    provides: {
      main: {
        config: {
          randomize: {
            default: false,
            description: tc('DummyBankSessionTokenProvider.provides.main.config.randomize.description'),
            type: 'boolean'
          },
          token: {
            default: 'DummyBankSessionToken',
            description: tc('DummyBankSessionTokenProvider.provides.main.config.token.description'),
            type: 'string'
          }
        },
        description: tc('DummyBankSessionTokenProvider.provides.main.description'),
        interface: 'bank_session_token_provider'
      }
    },
    requires: {}
  },
  DummyTokenProvider: {
    description: tc('DummyTokenProvider.description'),
    metadata: {
      authors: [ 'Thilo Molitor', 'Cornelius Claussen' ],
      license: 'https://opensource.org/licenses/Apache-2.0'
    },
    provides: {
      main: {
        config: {
          connector_id: {
            default: 0,
            description: tc('DummyTokenProvider.provides.main.config.connector_id.description'),
            minimum: 0,
            type: 'integer'
          },
          timeout: {
            default: 10,
            description: tc('DummyTokenProvider.provides.main.config.timeout.description'),
            maximum: 120,
            minimum: 0,
            type: 'number'
          },
          token: {
            default: 'DEADBEEF',
            description: tc('DummyTokenProvider.provides.main.config.token.description'),
            maxLength: 20,
            minLength: 1,
            type: 'string'
          },
          type: {
            default: 'RFID',
            description: tc('DummyTokenProvider.provides.main.config.type.description'),
            maxLength: 32,
            minLength: 2,
            type: 'string'
          }
        },
        description: tc('DummyTokenProvider.provides.main.description'),
        interface: 'auth_token_provider'
      }
    },
    requires: { evse: { interface: 'evse_manager' } }
  },
  DummyTokenProviderManual: {
    description: tc('DummyTokenProviderManual.description'),
    enable_external_mqtt: true,
    metadata: {
      authors: [ 'Kai-Uwe Hermann', 'Cornelius Claussen' ],
      license: 'https://opensource.org/licenses/Apache-2.0'
    },
    provides: {
      main: {
        config: {
          timeout: {
            default: 10,
            description: tc('DummyTokenProviderManual.provides.main.config.timeout.description'),
            maximum: 120,
            minimum: 0,
            type: 'number'
          },
          token: {
            default: 'DEADBEEF',
            description: tc('DummyTokenProviderManual.provides.main.config.token.description'),
            maxLength: 20,
            minLength: 1,
            type: 'string'
          },
          type: {
            default: 'RFID',
            description: tc('DummyTokenProviderManual.provides.main.config.type.description'),
            maxLength: 32,
            minLength: 2,
            type: 'string'
          }
        },
        description: tc('DummyTokenProviderManual.provides.main.description'),
        interface: 'auth_token_provider'
      }
    },
    requires: {}
  },
  DummyTokenValidator: {
    description: tc('DummyTokenValidator.description'),
    metadata: {
      authors: [ 'Thilo Molitor', 'Cornelius Claussen' ],
      license: 'https://opensource.org/licenses/Apache-2.0'
    },
    provides: {
      main: {
        config: {
          sleep: {
            default: 0.5,
            description: tc('DummyTokenValidator.provides.main.config.sleep.description'),
            maximum: 120,
            minimum: 0,
            type: 'number'
          },
          validation_reason: {
            default: 'Token valid',
            description: tc('DummyTokenValidator.provides.main.config.validation_reason.description'),
            minLength: 5,
            type: 'string'
          },
          validation_result: {
            default: 'Accepted',
            description: tc('DummyTokenValidator.provides.main.config.validation_result.description'),
            enum: [ 'Accepted', 'Blocked', 'Expired', 'Invalid' ],
            type: 'string'
          }
        },
        description: tc('DummyTokenValidator.provides.main.description'),
        interface: 'auth_token_validator'
      }
    }
  },
  DummyV2G: {
    description: tc('DummyV2G.description'),
    metadata: {
      authors: [ 'Cornelius Claussen' ],
      license: 'https://opensource.org/licenses/Apache-2.0'
    },
    provides: {
      main: {
        description: tc('DummyV2G.provides.main.description'),
        interface: 'ISO15118_charger'
      }
    }
  },
  EnergyManager: {
    config: {
      debug: {
        default: false,
        description: tc('EnergyManager.config.debug.description'),
        type: 'boolean'
      },
      nominal_ac_voltage: {
        default: 230,
        description: tc('EnergyManager.config.nominal_ac_voltage.description'),
        type: 'number'
      },
      schedule_interval_duration: {
        default: 60,
        description: tc('EnergyManager.config.schedule_interval_duration.description'),
        type: 'integer'
      },
      schedule_total_duration: {
        default: 1,
        description: tc('EnergyManager.config.schedule_total_duration.description'),
        type: 'integer'
      },
      slice_ampere: {
        default: 0.5,
        description: tc('EnergyManager.config.slice_ampere.description'),
        type: 'number'
      },
      slice_watt: {
        default: 500,
        description: tc('EnergyManager.config.slice_watt.description'),
        type: 'number'
      },
      switch_3ph1ph_max_nr_of_switches_per_session: {
        default: 0,
        description: tc('EnergyManager.config.switch_3ph1ph_max_nr_of_switches_per_session.description'),
        type: 'integer'
      },
      switch_3ph1ph_power_hysteresis_W: {
        default: 200,
        description: tc('EnergyManager.config.switch_3ph1ph_power_hysteresis_W.description'),
        type: 'integer'
      },
      switch_3ph1ph_switch_limit_stickyness: {
        default: 'DontChange',
        description: tc('EnergyManager.config.switch_3ph1ph_switch_limit_stickyness.description'),
        enum: [ 'SinglePhase', 'ThreePhase', 'DontChange' ],
        type: 'string'
      },
      switch_3ph1ph_time_hysteresis_s: {
        default: 600,
        description: tc('EnergyManager.config.switch_3ph1ph_time_hysteresis_s.description'),
        type: 'integer'
      },
      switch_3ph1ph_while_charging_mode: {
        default: 'Never',
        description: tc('EnergyManager.config.switch_3ph1ph_while_charging_mode.description'),
        enum: [ 'Never', 'Oneway', 'Both' ],
        type: 'string'
      },
      update_interval: {
        default: 1,
        description: tc('EnergyManager.config.update_interval.description'),
        type: 'integer'
      }
    },
    description: tc('EnergyManager.description'),
    enable_external_mqtt: false,
    metadata: {
      authors: [ 'Cornelius Claussen', 'Lars Dieckmann' ],
      license: 'https://opensource.org/licenses/Apache-2.0'
    },
    provides: {
      main: {
        description: tc('EnergyManager.provides.main.description'),
        interface: 'energy_manager'
      }
    },
    requires: {
      energy_trunk: { interface: 'energy', max_connections: 1, min_connections: 1 }
    }
  },
  EnergyNode: {
    config: {
      fuse_limit_A: {
        description: tc('EnergyNode.config.fuse_limit_A.description'),
        minimum: 0,
        type: 'number'
      },
      phase_count: {
        description: tc('EnergyNode.config.phase_count.description'),
        maximum: 3,
        minimum: 0,
        type: 'integer'
      }
    },
    description: tc('EnergyNode.description'),
    enable_external_mqtt: false,
    metadata: {
      authors: [ 'Cornelius Claussen' ],
      license: 'https://opensource.org/licenses/Apache-2.0'
    },
    provides: {
      energy_grid: {
        description: tc('EnergyNode.provides.energy_grid.description'),
        interface: 'energy'
      },
      external_limits: {
        description: tc('EnergyNode.provides.external_limits.description'),
        interface: 'external_energy_limits'
      }
    },
    requires: {
      energy_consumer: { interface: 'energy', max_connections: 128, min_connections: 1 },
      powermeter: {
        interface: 'powermeter',
        max_connections: 1,
        min_connections: 0
      },
      price_information: {
        interface: 'energy_price_information',
        max_connections: 1,
        min_connections: 0
      }
    }
  },
  ErrorHistory: {
    description: tc('ErrorHistory.description'),
    enable_global_errors: true,
    metadata: {
      authors: [ 'Andreas Heinrich' ],
      license: 'https://spdx.org/licenses/Apache-2.0.html'
    },
    provides: {
      error_history: {
        config: {
          database_path: {
            description: tc('ErrorHistory.provides.error_history.config.database_path.description'),
            type: 'string'
          }
        },
        description: tc('ErrorHistory.provides.error_history.description'),
        interface: 'error_history'
      }
    }
  },
  EvAPI: {
    config: {},
    description: tc('EvAPI.description'),
    enable_external_mqtt: true,
    metadata: {
      authors: [ 'Kai-Uwe Hermann' ],
      license: 'https://opensource.org/licenses/Apache-2.0'
    },
    provides: {
      main: {
        description: tc('EvAPI.provides.main.description'),
        interface: 'empty'
      }
    },
    requires: {
      ev_manager: {
        interface: 'ev_manager',
        max_connections: 128,
        min_connections: 1
      }
    }
  },
  EvManager: {
    config: {
      ac_nominal_voltage: {
        default: 230,
        description: tc('EvManager.config.ac_nominal_voltage.description'),
        type: 'number'
      },
      auto_enable: {
        default: false,
        description: tc('EvManager.config.auto_enable.description'),
        type: 'boolean'
      },
      auto_exec: {
        default: false,
        description: tc('EvManager.config.auto_exec.description'),
        type: 'boolean'
      },
      auto_exec_commands: {
        default: '',
        description: tc('EvManager.config.auto_exec_commands.description'),
        type: 'string'
      },
      auto_exec_infinite: {
        default: false,
        description: tc('EvManager.config.auto_exec_infinite.description'),
        type: 'boolean'
      },
      connector_id: {
        description: tc('EvManager.config.connector_id.description'),
        type: 'integer'
      },
      dc_discharge_max_current_limit: {
        default: 300,
        description: tc('EvManager.config.dc_discharge_max_current_limit.description'),
        type: 'integer'
      },
      dc_discharge_max_power_limit: {
        default: 150000,
        description: tc('EvManager.config.dc_discharge_max_power_limit.description'),
        type: 'integer'
      },
      dc_discharge_target_current: {
        default: 5,
        description: tc('EvManager.config.dc_discharge_target_current.description'),
        type: 'integer'
      },
      dc_discharge_v2g_minimal_soc: {
        default: 20,
        description: tc('EvManager.config.dc_discharge_v2g_minimal_soc.description'),
        type: 'integer'
      },
      dc_energy_capacity: {
        default: 60000,
        description: tc('EvManager.config.dc_energy_capacity.description'),
        type: 'integer'
      },
      dc_max_current_limit: {
        default: 300,
        description: tc('EvManager.config.dc_max_current_limit.description'),
        type: 'integer'
      },
      dc_max_power_limit: {
        default: 150000,
        description: tc('EvManager.config.dc_max_power_limit.description'),
        type: 'integer'
      },
      dc_max_voltage_limit: {
        default: 900,
        description: tc('EvManager.config.dc_max_voltage_limit.description'),
        type: 'integer'
      },
      dc_target_current: {
        default: 5,
        description: tc('EvManager.config.dc_target_current.description'),
        type: 'integer'
      },
      dc_target_voltage: {
        default: 200,
        description: tc('EvManager.config.dc_target_voltage.description'),
        type: 'integer'
      },
      departure_time: {
        default: 86400,
        description: tc('EvManager.config.departure_time.description'),
        type: 'integer'
      },
      e_amount: {
        default: 0,
        description: tc('EvManager.config.e_amount.description'),
        type: 'integer'
      },
      keep_cross_boot_plugin_state: {
        default: false,
        description: tc('EvManager.config.keep_cross_boot_plugin_state.description'),
        type: 'boolean'
      },
      max_current: {
        default: 16,
        description: tc('EvManager.config.max_current.description'),
        type: 'number'
      },
      soc: {
        default: 30,
        description: tc('EvManager.config.soc.description'),
        type: 'integer'
      },
      support_sae_j2847: {
        default: false,
        description: tc('EvManager.config.support_sae_j2847.description'),
        type: 'boolean'
      },
      three_phases: {
        default: true,
        description: tc('EvManager.config.three_phases.description'),
        type: 'boolean'
      }
    },
    description: tc('EvManager.description'),
    enable_external_mqtt: true,
    metadata: {
      authors: [ 'Cornelius Claussen', 'Sebastian Lukas', 'Tobias Marzell' ],
      license: 'https://opensource.org/licenses/Apache-2.0'
    },
    provides: {
      ev_manager: {
        description: tc('EvManager.provides.ev_manager.description'),
        interface: 'ev_manager'
      },
      main: {
        description: tc('EvManager.provides.main.description'),
        interface: 'car_simulator'
      }
    },
    requires: {
      ev: {
        interface: 'ISO15118_ev',
        max_connections: 1,
        min_connections: 0
      },
      ev_board_support: { interface: 'ev_board_support' },
      kvs: { interface: 'kvs', max_connections: 1, min_connections: 0 },
      powermeter: {
        interface: 'powermeter',
        max_connections: 1,
        min_connections: 0
      },
      slac: { interface: 'ev_slac', max_connections: 1, min_connections: 0 }
    }
  },
  EvSlac: {
    description: tc('EvSlac.description'),
    metadata: {
      authors: [ 'aw@pionix.de' ],
      base_license: 'https://directory.fsf.org/wiki/License:BSD-3-Clause-Clear',
      license: 'https://opensource.org/licenses/Apache-2.0'
    },
    provides: {
      main: {
        config: {
          device: {
            default: 'eth1',
            description: tc('EvSlac.provides.main.config.device.description'),
            type: 'string'
          },
          set_key_timeout_ms: {
            default: 500,
            description: tc('EvSlac.provides.main.config.set_key_timeout_ms.description'),
            type: 'integer'
          }
        },
        description: tc('EvSlac.provides.main.description'),
        interface: 'ev_slac'
      }
    }
  },
  Evse15118D20: {
    config: {
      custom_protocol_namespace: {
        default: '',
        description: tc('Evse15118D20.config.custom_protocol_namespace.description'),
        type: 'string'
      },
      device: {
        default: 'eth0',
        description: tc('Evse15118D20.config.device.description'),
        type: 'string'
      },
      enable_sdp_server: {
        default: true,
        description: tc('Evse15118D20.config.enable_sdp_server.description'),
        type: 'boolean'
      },
      enable_ssl_logging: {
        default: false,
        description: tc('Evse15118D20.config.enable_ssl_logging.description'),
        type: 'boolean'
      },
      enable_tls_key_logging: {
        default: false,
        description: tc('Evse15118D20.config.enable_tls_key_logging.description'),
        type: 'boolean'
      },
      enforce_tls_1_3: {
        default: false,
        description: tc('Evse15118D20.config.enforce_tls_1_3.description'),
        type: 'boolean'
      },
      logging_path: {
        default: '.',
        description: tc('Evse15118D20.config.logging_path.description'),
        type: 'string'
      },
      supported_dynamic_mode: {
        default: true,
        description: tc('Evse15118D20.config.supported_dynamic_mode.description'),
        type: 'boolean'
      },
      supported_mobility_needs_mode_provided_by_secc: {
        default: false,
        description: tc('Evse15118D20.config.supported_mobility_needs_mode_provided_by_secc.description'),
        type: 'boolean'
      },
      supported_scheduled_mode: {
        default: false,
        description: tc('Evse15118D20.config.supported_scheduled_mode.description'),
        type: 'boolean'
      },
      tls_key_logging_path: {
        default: '/tmp',
        description: tc('Evse15118D20.config.tls_key_logging_path.description'),
        type: 'string'
      },
      tls_negotiation_strategy: {
        default: 'ACCEPT_CLIENT_OFFER',
        description: tc('Evse15118D20.config.tls_negotiation_strategy.description'),
        enum: [ 'ACCEPT_CLIENT_OFFER', 'ENFORCE_TLS', 'ENFORCE_NO_TLS' ],
        type: 'string'
      }
    },
    description: tc('Evse15118D20.description'),
    enable_external_mqtt: false,
    metadata: {
      authors: [ 'aw@pionix.de', 'Sebastian Lukas' ],
      license: 'https://opensource.org/licenses/Apache-2.0'
    },
    provides: {
      charger: {
        description: tc('Evse15118D20.provides.charger.description'),
        interface: 'ISO15118_charger'
      },
      extensions: {
        description: tc('Evse15118D20.provides.extensions.description'),
        interface: 'iso15118_extensions'
      }
    },
    requires: {
      iso15118_vas: {
        interface: 'ISO15118_vas',
        max_connections: 128,
        min_connections: 0
      },
      security: { interface: 'evse_security' }
    }
  },
  EvseManager: {
    config: {
      ac_enforce_hlc: {
        default: false,
        description: tc('EvseManager.config.ac_enforce_hlc.description'),
        type: 'boolean'
      },
      ac_hlc_enabled: {
        default: false,
        description: tc('EvseManager.config.ac_hlc_enabled.description'),
        type: 'boolean'
      },
      ac_hlc_use_5percent: {
        default: false,
        description: tc('EvseManager.config.ac_hlc_use_5percent.description'),
        type: 'boolean'
      },
      ac_nominal_voltage: {
        default: 230,
        description: tc('EvseManager.config.ac_nominal_voltage.description'),
        type: 'number'
      },
      ac_with_soc: {
        default: false,
        description: tc('EvseManager.config.ac_with_soc.description'),
        type: 'boolean'
      },
      autocharge_use_slac_instead_of_hlc: {
        default: false,
        description: tc('EvseManager.config.autocharge_use_slac_instead_of_hlc.description'),
        type: 'boolean'
      },
      cable_check_enable_imd_self_test: {
        default: true,
        description: tc('EvseManager.config.cable_check_enable_imd_self_test.description'),
        type: 'boolean'
      },
      cable_check_wait_below_60V_before_finish: {
        default: true,
        description: tc('EvseManager.config.cable_check_wait_below_60V_before_finish.description'),
        type: 'boolean'
      },
      cable_check_wait_number_of_imd_measurements: {
        default: 1,
        description: tc('EvseManager.config.cable_check_wait_number_of_imd_measurements.description'),
        type: 'integer'
      },
      central_contract_validation_allowed: {
        default: false,
        description: tc('EvseManager.config.central_contract_validation_allowed.description'),
        type: 'boolean'
      },
      charge_mode: {
        default: 'AC',
        description: tc('EvseManager.config.charge_mode.description'),
        enum: [ 'AC', 'DC' ],
        type: 'string'
      },
      connector_id: {
        description: tc('EvseManager.config.connector_id.description'),
        type: 'integer'
      },
      connector_type: {
        default: 'Unknown',
        description: tc('EvseManager.config.connector_type.description'),
        type: 'string'
      },
      contract_certificate_installation_enabled: {
        default: true,
        description: tc('EvseManager.config.contract_certificate_installation_enabled.description'),
        type: 'boolean'
      },
      dbg_hlc_auth_after_tstep: {
        default: false,
        description: tc('EvseManager.config.dbg_hlc_auth_after_tstep.description'),
        type: 'boolean'
      },
      dc_isolation_voltage_V: {
        default: 0,
        description: tc('EvseManager.config.dc_isolation_voltage_V.description'),
        type: 'integer'
      },
      disable_authentication: {
        default: false,
        description: tc('EvseManager.config.disable_authentication.description'),
        type: 'boolean'
      },
      enable_autocharge: {
        default: false,
        description: tc('EvseManager.config.enable_autocharge.description'),
        type: 'boolean'
      },
      ev_receipt_required: {
        default: false,
        description: tc('EvseManager.config.ev_receipt_required.description'),
        type: 'boolean'
      },
      evse_id: {
        default: 'DE*PNX*E1234567*1',
        description: tc('EvseManager.config.evse_id.description'),
        type: 'string'
      },
      evse_id_din: {
        default: '49A80737A45678',
        description: tc('EvseManager.config.evse_id_din.description'),
        type: 'string'
      },
      external_ready_to_start_charging: {
        default: false,
        description: tc('EvseManager.config.external_ready_to_start_charging.description'),
        type: 'boolean'
      },
      fail_on_powermeter_errors: {
        default: true,
        description: tc('EvseManager.config.fail_on_powermeter_errors.description'),
        type: 'boolean'
      },
      hack_allow_bpt_with_iso2: {
        default: false,
        description: tc('EvseManager.config.hack_allow_bpt_with_iso2.description'),
        type: 'boolean'
      },
      hack_fix_hlc_integer_current_requests: {
        default: false,
        description: tc('EvseManager.config.hack_fix_hlc_integer_current_requests.description'),
        type: 'boolean'
      },
      hack_pause_imd_during_precharge: {
        default: false,
        description: tc('EvseManager.config.hack_pause_imd_during_precharge.description'),
        type: 'boolean'
      },
      hack_present_current_offset: {
        default: 0,
        description: tc('EvseManager.config.hack_present_current_offset.description'),
        type: 'integer'
      },
      hack_simplified_mode_limit_10A: {
        default: false,
        description: tc('EvseManager.config.hack_simplified_mode_limit_10A.description'),
        type: 'boolean'
      },
      hack_skoda_enyaq: {
        default: false,
        description: tc('EvseManager.config.hack_skoda_enyaq.description'),
        type: 'boolean'
      },
      hack_sleep_in_cable_check: {
        default: 0,
        description: tc('EvseManager.config.hack_sleep_in_cable_check.description'),
        type: 'integer'
      },
      hack_sleep_in_cable_check_volkswagen: {
        default: 0,
        description: tc('EvseManager.config.hack_sleep_in_cable_check_volkswagen.description'),
        type: 'integer'
      },
      has_ventilation: {
        default: true,
        description: tc('EvseManager.config.has_ventilation.description'),
        type: 'boolean'
      },
      initial_meter_value_timeout_ms: {
        default: 5000,
        description: tc('EvseManager.config.initial_meter_value_timeout_ms.description'),
        type: 'integer'
      },
      inoperative_error_use_vendor_id: {
        default: false,
        description: tc('EvseManager.config.inoperative_error_use_vendor_id.description'),
        type: 'boolean'
      },
      lock_connector_in_state_b: {
        default: true,
        description: tc('EvseManager.config.lock_connector_in_state_b.description'),
        type: 'boolean'
      },
      logfile_suffix: {
        default: 'session_uuid',
        description: tc('EvseManager.config.logfile_suffix.description'),
        type: 'string'
      },
      max_current_export_A: {
        default: 32,
        description: tc('EvseManager.config.max_current_export_A.description'),
        type: 'number'
      },
      max_current_import_A: {
        default: 32,
        description: tc('EvseManager.config.max_current_import_A.description'),
        type: 'number'
      },
      payment_enable_contract: {
        default: true,
        description: tc('EvseManager.config.payment_enable_contract.description'),
        type: 'boolean'
      },
      payment_enable_eim: {
        default: true,
        description: tc('EvseManager.config.payment_enable_eim.description'),
        type: 'boolean'
      },
      raise_mrec9: {
        default: false,
        description: tc('EvseManager.config.raise_mrec9.description'),
        type: 'boolean'
      },
      request_zero_power_in_idle: {
        default: false,
        description: tc('EvseManager.config.request_zero_power_in_idle.description'),
        type: 'boolean'
      },
      sae_j2847_2_bpt_enabled: {
        default: false,
        description: tc('EvseManager.config.sae_j2847_2_bpt_enabled.description'),
        type: 'boolean'
      },
      sae_j2847_2_bpt_mode: {
        default: 'V2G',
        description: tc('EvseManager.config.sae_j2847_2_bpt_mode.description'),
        enum: [ 'V2H', 'V2G' ],
        type: 'string'
      },
      session_id_type: {
        default: 'UUID',
        description: tc('EvseManager.config.session_id_type.description'),
        enum: [ 'UUID', 'UUID_BASE64', 'SHORT_BASE64' ],
        type: 'string'
      },
      session_logging: {
        default: false,
        description: tc('EvseManager.config.session_logging.description'),
        type: 'boolean'
      },
      session_logging_path: {
        default: '/tmp',
        description: tc('EvseManager.config.session_logging_path.description'),
        type: 'string'
      },
      session_logging_xml: {
        default: true,
        description: tc('EvseManager.config.session_logging_xml.description'),
        type: 'boolean'
      },
      sleep_before_enabling_pwm_hlc_mode_ms: {
        default: 500,
        description: tc('EvseManager.config.sleep_before_enabling_pwm_hlc_mode_ms.description'),
        type: 'integer'
      },
      soft_over_current_measurement_noise_A: {
        default: 0.5,
        description: tc('EvseManager.config.soft_over_current_measurement_noise_A.description'),
        type: 'number'
      },
      soft_over_current_timeout_ms: {
        default: 7000,
        description: tc('EvseManager.config.soft_over_current_timeout_ms.description'),
        minimum: 6000,
        type: 'integer'
      },
      soft_over_current_tolerance_percent: {
        default: 10,
        description: tc('EvseManager.config.soft_over_current_tolerance_percent.description'),
        type: 'number'
      },
      state_F_after_fault_ms: {
        default: 300,
        description: tc('EvseManager.config.state_F_after_fault_ms.description'),
        type: 'integer'
      },
      switch_3ph1ph_cp_state: {
        default: 'X1',
        description: tc('EvseManager.config.switch_3ph1ph_cp_state.description'),
        enum: [ 'X1', 'F' ],
        type: 'string'
      },
      switch_3ph1ph_delay_s: {
        default: 10,
        description: tc('EvseManager.config.switch_3ph1ph_delay_s.description'),
        type: 'integer'
      },
      uk_smartcharging_random_delay_at_any_change: {
        default: true,
        description: tc('EvseManager.config.uk_smartcharging_random_delay_at_any_change.description'),
        type: 'boolean'
      },
      uk_smartcharging_random_delay_enable: {
        default: false,
        description: tc('EvseManager.config.uk_smartcharging_random_delay_enable.description'),
        type: 'boolean'
      },
      uk_smartcharging_random_delay_max_duration: {
        default: 600,
        description: tc('EvseManager.config.uk_smartcharging_random_delay_max_duration.description'),
        type: 'integer'
      }
    },
    description: tc('EvseManager.description'),
    enable_external_mqtt: true,
    enable_telemetry: true,
    metadata: {
      authors: [ 'Cornelius Claussen', 'Anton Woellert' ],
      license: 'https://opensource.org/licenses/Apache-2.0'
    },
    provides: {
      energy_grid: {
        description: tc('EvseManager.provides.energy_grid.description'),
        interface: 'energy'
      },
      evse: {
        description: tc('EvseManager.provides.evse.description'),
        interface: 'evse_manager'
      },
      random_delay: {
        description: tc('EvseManager.provides.random_delay.description'),
        interface: 'uk_random_delay'
      },
      token_provider: {
        description: tc('EvseManager.provides.token_provider.description'),
        interface: 'auth_token_provider'
      }
    },
    requires: {
      ac_rcd: { interface: 'ac_rcd', max_connections: 1, min_connections: 0 },
      bsp: { interface: 'evse_board_support' },
      connector_lock: {
        interface: 'connector_lock',
        max_connections: 1,
        min_connections: 0
      },
      hlc: {
        interface: 'ISO15118_charger',
        max_connections: 1,
        min_connections: 0
      },
      imd: {
        interface: 'isolation_monitor',
        max_connections: 1,
        min_connections: 0
      },
      over_voltage_monitor: {
        interface: 'over_voltage_monitor',
        max_connections: 1,
        min_connections: 0
      },
      powermeter_car_side: {
        interface: 'powermeter',
        max_connections: 1,
        min_connections: 0
      },
      powermeter_grid_side: {
        interface: 'powermeter',
        max_connections: 1,
        min_connections: 0
      },
      powersupply_DC: {
        interface: 'power_supply_DC',
        max_connections: 1,
        min_connections: 0
      },
      slac: { interface: 'slac', max_connections: 1, min_connections: 0 },
      store: { interface: 'kvs', max_connections: 1, min_connections: 0 }
    }
  },
  EvseSecurity: {
    config: {
      csms_ca_bundle: {
        default: 'ca/csms/CSMS_ROOT_CA.pem',
        description: tc('EvseSecurity.config.csms_ca_bundle.description'),
        type: 'string'
      },
      csms_leaf_cert_directory: {
        default: 'client/csms',
        description: tc('EvseSecurity.config.csms_leaf_cert_directory.description'),
        type: 'string'
      },
      csms_leaf_key_directory: {
        default: 'client/csms',
        description: tc('EvseSecurity.config.csms_leaf_key_directory.description'),
        type: 'string'
      },
      mf_ca_bundle: {
        default: 'ca/mf/MF_ROOT_CA.pem',
        description: tc('EvseSecurity.config.mf_ca_bundle.description'),
        type: 'string'
      },
      mo_ca_bundle: {
        default: 'ca/mo/MO_ROOT_CA.pem',
        description: tc('EvseSecurity.config.mo_ca_bundle.description'),
        type: 'string'
      },
      private_key_password: {
        default: '',
        description: tc('EvseSecurity.config.private_key_password.description'),
        type: 'string'
      },
      secc_leaf_cert_directory: {
        default: 'client/cso',
        description: tc('EvseSecurity.config.secc_leaf_cert_directory.description'),
        type: 'string'
      },
      secc_leaf_key_directory: {
        default: 'client/cso',
        description: tc('EvseSecurity.config.secc_leaf_key_directory.description'),
        type: 'string'
      },
      v2g_ca_bundle: {
        default: 'ca/v2g/V2G_ROOT_CA.pem',
        description: tc('EvseSecurity.config.v2g_ca_bundle.description'),
        type: 'string'
      }
    },
    description: tc('EvseSecurity.description'),
    enable_external_mqtt: false,
    enable_telemetry: false,
    metadata: {
      authors: [ 'Piet Gömpel' ],
      license: 'https://spdx.org/licenses/Apache-2.0.html'
    },
    provides: {
      main: {
        description: tc('EvseSecurity.provides.main.description'),
        interface: 'evse_security'
      }
    }
  },
  EvseSlac: {
    description: tc('EvseSlac.description'),
    metadata: {
      authors: [ 'aw@pionix.de', 'Cornelius Claussen (Pionix GmbH)' ],
      base_license: 'https://directory.fsf.org/wiki/License:BSD-3-Clause-Clear',
      license: 'https://opensource.org/licenses/Apache-2.0'
    },
    provides: {
      main: {
        config: {
          ac_mode_five_percent: {
            default: true,
            description: tc('EvseSlac.provides.main.config.ac_mode_five_percent.description'),
            type: 'boolean'
          },
          chip_reset_delay_ms: {
            default: 100,
            description: tc('EvseSlac.provides.main.config.chip_reset_delay_ms.description'),
            type: 'integer'
          },
          chip_reset_timeout_ms: {
            default: 500,
            description: tc('EvseSlac.provides.main.config.chip_reset_timeout_ms.description'),
            type: 'integer'
          },
          debug_simulate_failed_matching: {
            default: false,
            description: tc('EvseSlac.provides.main.config.debug_simulate_failed_matching.description'),
            type: 'boolean'
          },
          device: {
            default: 'eth1',
            description: tc('EvseSlac.provides.main.config.device.description'),
            type: 'string'
          },
          do_chip_reset: {
            default: false,
            description: tc('EvseSlac.provides.main.config.do_chip_reset.description'),
            type: 'boolean'
          },
          link_status_detection: {
            default: false,
            description: tc('EvseSlac.provides.main.config.link_status_detection.description'),
            type: 'boolean'
          },
          link_status_retry_ms: {
            default: 100,
            description: tc('EvseSlac.provides.main.config.link_status_retry_ms.description'),
            type: 'integer'
          },
          link_status_timeout_ms: {
            default: 10000,
            description: tc('EvseSlac.provides.main.config.link_status_timeout_ms.description'),
            type: 'integer'
          },
          number_of_sounds: {
            default: 10,
            description: tc('EvseSlac.provides.main.config.number_of_sounds.description'),
            type: 'integer'
          },
          publish_mac_on_first_parm_req: {
            default: false,
            description: tc('EvseSlac.provides.main.config.publish_mac_on_first_parm_req.description'),
            type: 'boolean'
          },
          publish_mac_on_match_cnf: {
            default: true,
            description: tc('EvseSlac.provides.main.config.publish_mac_on_match_cnf.description'),
            type: 'boolean'
          },
          reset_instead_of_fail: {
            default: true,
            description: tc('EvseSlac.provides.main.config.reset_instead_of_fail.description'),
            type: 'boolean'
          },
          set_key_timeout_ms: {
            default: 1000,
            description: tc('EvseSlac.provides.main.config.set_key_timeout_ms.description'),
            type: 'integer'
          },
          sounding_attenuation_adjustment: {
            default: 0,
            description: tc('EvseSlac.provides.main.config.sounding_attenuation_adjustment.description'),
            type: 'integer'
          }
        },
        description: tc('EvseSlac.provides.main.description'),
        interface: 'slac'
      }
    }
  },
  EvseV2G: {
    config: {
      auth_timeout_eim: {
        default: 300,
        description: tc('EvseV2G.config.auth_timeout_eim.description'),
        type: 'integer'
      },
      auth_timeout_pnc: {
        default: 55,
        description: tc('EvseV2G.config.auth_timeout_pnc.description'),
        type: 'integer'
      },
      device: {
        default: 'eth0',
        description: tc('EvseV2G.config.device.description'),
        type: 'string'
      },
      enable_sdp_server: {
        default: true,
        description: tc('EvseV2G.config.enable_sdp_server.description'),
        type: 'boolean'
      },
      supported_DIN70121: {
        default: true,
        description: tc('EvseV2G.config.supported_DIN70121.description'),
        type: 'boolean'
      },
      supported_ISO15118_2: {
        default: true,
        description: tc('EvseV2G.config.supported_ISO15118_2.description'),
        type: 'boolean'
      },
      terminate_connection_on_failed_response: {
        default: false,
        description: tc('EvseV2G.config.terminate_connection_on_failed_response.description'),
        type: 'boolean'
      },
      tls_key_logging: {
        default: false,
        description: tc('EvseV2G.config.tls_key_logging.description'),
        type: 'boolean'
      },
      tls_key_logging_path: {
        default: '/tmp',
        description: tc('EvseV2G.config.tls_key_logging_path.description'),
        type: 'string'
      },
      tls_security: {
        default: 'prohibit',
        description: tc('EvseV2G.config.tls_security.description'),
        enum: [ 'prohibit', 'allow', 'force' ],
        type: 'string'
      },
      tls_timeout: {
        default: 15000,
        description: tc('EvseV2G.config.tls_timeout.description'),
        type: 'integer'
      },
      verify_contract_cert_chain: {
        default: false,
        description: tc('EvseV2G.config.verify_contract_cert_chain.description'),
        type: 'boolean'
      }
    },
    description: tc('EvseV2G.description'),
    enable_external_mqtt: true,
    metadata: {
      authors: [ 'Fabian Hartung', 'Mohannad Oraby', 'Sebastian Lukas' ],
      license: 'https://opensource.org/licenses/Apache-2.0'
    },
    provides: {
      charger: {
        description: tc('EvseV2G.provides.charger.description'),
        interface: 'ISO15118_charger'
      },
      extensions: {
        description: tc('EvseV2G.provides.extensions.description'),
        interface: 'iso15118_extensions'
      }
    },
    requires: { security: { interface: 'evse_security' } }
  },
  Example: {
    description: tc('Example.description'),
    enable_external_mqtt: true,
    metadata: {
      authors: [ 'Kai-Uwe Hermann', 'Andreas Heinrich' ],
      license: 'https://opensource.org/licenses/Apache-2.0'
    },
    provides: {
      example: {
        config: {
          current: {
            description: tc('Example.provides.example.config.current.description'),
            maximum: 60,
            minimum: 1,
            type: 'number'
          },
          enum_test: {
            description: tc('Example.provides.example.config.enum_test.description'),
            enum: [ 'one', 'two', 'three' ],
            type: 'string'
          },
          enum_test2: {
            description: tc('Example.provides.example.config.enum_test2.description'),
            enum: [ 1, 2, 3 ],
            type: 'integer'
          }
        },
        description: tc('Example.provides.example.description'),
        interface: 'example'
      },
      store: {
        description: tc('Example.provides.store.description'),
        interface: 'kvs'
      }
    },
    requires: { kvs: { interface: 'kvs' } }
  },
  ExampleErrorGlobalSubscriber: {
    description: tc('ExampleErrorGlobalSubscriber.description'),
    enable_global_errors: true,
    metadata: {
      authors: [ 'Andreas Heinrich' ],
      license: 'https://opensource.org/licenses/Apache-2.0'
    },
    provides: {
      example_global_subscriber: {
        description: tc('ExampleErrorGlobalSubscriber.provides.example_global_subscriber.description'),
        interface: 'example_error_framework'
      }
    }
  },
  ExampleErrorRaiser: {
    description: tc('ExampleErrorRaiser.description'),
    metadata: {
      authors: [ 'Andreas Heinrich' ],
      license: 'https://opensource.org/licenses/Apache-2.0'
    },
    provides: {
      example_raiser: {
        description: tc('ExampleErrorRaiser.provides.example_raiser.description'),
        interface: 'example_error_framework'
      }
    }
  },
  ExampleErrorSubscriber: {
    description: tc('ExampleErrorSubscriber.description'),
    metadata: {
      authors: [ 'Andreas Heinrich' ],
      license: 'https://opensource.org/licenses/Apache-2.0'
    },
    provides: {
      example_subscriber: {
        description: tc('ExampleErrorSubscriber.provides.example_subscriber.description'),
        interface: 'example_error_framework'
      }
    },
    requires: { example_raiser: { interface: 'example_error_framework' } }
  },
  ExampleUser: {
    description: tc('ExampleUser.description'),
    metadata: {
      authors: [ 'Kai-Uwe Hermann', 'Andreas Heinrich' ],
      license: 'https://opensource.org/licenses/Apache-2.0'
    },
    provides: {
      example_user: {
        description: tc('ExampleUser.provides.example_user.description'),
        interface: 'example_user'
      }
    },
    requires: { example: { interface: 'example' } }
  },
  GenericPowermeter: {
    description: tc('GenericPowermeter.description'),
    metadata: {
      authors: [ 'Lars Dieckmann' ],
      license: 'https://opensource.org/licenses/Apache-2.0'
    },
    provides: {
      main: {
        config: {
          modbus_base_address: {
            default: 30001,
            description: tc('GenericPowermeter.provides.main.config.modbus_base_address.description'),
            maximum: 65535,
            minimum: 0,
            type: 'integer'
          },
          model: {
            default: 'test_dummy',
            description: tc('GenericPowermeter.provides.main.config.model.description'),
            type: 'string'
          },
          powermeter_device_id: {
            default: 1,
            description: tc('GenericPowermeter.provides.main.config.powermeter_device_id.description'),
            maximum: 247,
            minimum: 1,
            type: 'integer'
          }
        },
        description: tc('GenericPowermeter.provides.main.description'),
        interface: 'powermeter'
      }
    },
    requires: { serial_comm_hub: { interface: 'serial_communication_hub' } }
  },
  IMDSimulator: {
    description: tc('IMDSimulator.description'),
    metadata: {
      authors: [
        'Fabian Hartung (chargebyte GmbH)',
        'Cornelius Claussen (Pionix GmbH)'
      ],
      license: 'https://opensource.org/licenses/Apache-2.0'
    },
    provides: {
      main: {
        config: {
          interval: {
            default: 1000,
            description: tc('IMDSimulator.provides.main.config.interval.description'),
            type: 'integer'
          },
          resistance_F_Ohm: {
            default: 900000,
            description: tc('IMDSimulator.provides.main.config.resistance_F_Ohm.description'),
            type: 'number'
          },
          selftest_success: {
            default: true,
            description: tc('IMDSimulator.provides.main.config.selftest_success.description'),
            type: 'boolean'
          }
        },
        description: tc('IMDSimulator.provides.main.description'),
        interface: 'isolation_monitor'
      }
    }
  },
  IsabellenhuetteIemDcr: {
    config: {
      CI: {
        default: '1234',
        description: tc('IsabellenhuetteIemDcr.config.CI.description'),
        type: 'string'
      },
      CT: {
        default: 'EVSEID',
        description: tc('IsabellenhuetteIemDcr.config.CT.description'),
        type: 'string'
      },
      TT_initial: {
        default: '',
        description: tc('IsabellenhuetteIemDcr.config.TT_initial.description'),
        type: 'string'
      },
      US: {
        default: false,
        description: tc('IsabellenhuetteIemDcr.config.US.description'),
        type: 'boolean'
      },
      datetime_resync_interval: {
        default: 2,
        description: tc('IsabellenhuetteIemDcr.config.datetime_resync_interval.description'),
        maximum: 24,
        minimum: 1,
        type: 'integer'
      },
      ip_address: {
        default: '192.168.60.12',
        description: tc('IsabellenhuetteIemDcr.config.ip_address.description'),
        type: 'string'
      },
      port_http: {
        default: 80,
        description: tc('IsabellenhuetteIemDcr.config.port_http.description'),
        maximum: 65535,
        minimum: 0,
        type: 'integer'
      },
      resilience_initial_connection_retry_delay: {
        default: 10000,
        description: tc('IsabellenhuetteIemDcr.config.resilience_initial_connection_retry_delay.description'),
        maximum: 65535,
        minimum: 1000,
        type: 'integer'
      },
      resilience_transaction_request_retries: {
        default: 3,
        description: tc('IsabellenhuetteIemDcr.config.resilience_transaction_request_retries.description'),
        maximum: 5,
        minimum: 0,
        type: 'integer'
      },
      resilience_transaction_request_retry_delay: {
        default: 250,
        description: tc('IsabellenhuetteIemDcr.config.resilience_transaction_request_retry_delay.description'),
        maximum: 1000,
        minimum: 200,
        type: 'integer'
      },
      timezone: {
        default: '+0100',
        description: tc('IsabellenhuetteIemDcr.config.timezone.description'),
        type: 'string'
      },
      timezone_handle_DST: {
        default: true,
        description: tc('IsabellenhuetteIemDcr.config.timezone_handle_DST.description'),
        type: 'boolean'
      }
    },
    description: tc('IsabellenhuetteIemDcr.description'),
    metadata: {
      authors: [ 'Josef Herbert <josef.herbert@isabellenhuette.com>' ],
      license: 'https://opensource.org/licenses/Apache-2.0'
    },
    provides: {
      main: {
        description: tc('IsabellenhuetteIemDcr.provides.main.description'),
        interface: 'powermeter'
      }
    }
  },
  IsoMux: {
    config: {
      device: {
        default: 'eth0',
        description: tc('IsoMux.config.device.description'),
        type: 'string'
      },
      proxy_port_iso2: {
        default: 61341,
        description: tc('IsoMux.config.proxy_port_iso2.description'),
        type: 'integer'
      },
      proxy_port_iso20: {
        default: 50000,
        description: tc('IsoMux.config.proxy_port_iso20.description'),
        type: 'integer'
      },
      tls_key_logging: {
        default: false,
        description: tc('IsoMux.config.tls_key_logging.description'),
        type: 'boolean'
      },
      tls_security: {
        default: 'prohibit',
        description: tc('IsoMux.config.tls_security.description'),
        enum: [ 'prohibit', 'allow', 'force' ],
        type: 'string'
      },
      tls_timeout: {
        default: 15000,
        description: tc('IsoMux.config.tls_timeout.description'),
        type: 'integer'
      }
    },
    description: tc('IsoMux.description'),
    metadata: {
      authors: [ 'Cornelius Claussen' ],
      license: 'https://opensource.org/licenses/Apache-2.0'
    },
    provides: {
      charger: {
        description: tc('IsoMux.provides.charger.description'),
        interface: 'ISO15118_charger'
      },
      extensions: {
        description: tc('IsoMux.provides.extensions.description'),
        interface: 'iso15118_extensions'
      }
    },
    requires: {
      ext2: { interface: 'iso15118_extensions' },
      ext20: { interface: 'iso15118_extensions' },
      iso2: { interface: 'ISO15118_charger' },
      iso20: { interface: 'ISO15118_charger' },
      security: { interface: 'evse_security' }
    }
  },
  LemDCBM400600: {
    config: {
      SC: {
        default: 0,
        description: tc('LemDCBM400600.config.SC.description'),
        type: 'integer'
      },
      UD: {
        default: '',
        description: tc('LemDCBM400600.config.UD.description'),
        type: 'string'
      },
      UV: {
        default: '',
        description: tc('LemDCBM400600.config.UV.description'),
        type: 'string'
      },
      cable_id: {
        default: 0,
        description: tc('LemDCBM400600.config.cable_id.description'),
        type: 'integer'
      },
      command_timeout_ms: {
        default: 5000,
        description: tc('LemDCBM400600.config.command_timeout_ms.description'),
        maximum: 20000,
        minimum: 1000,
        type: 'integer'
      },
      ip_address: {
        description: tc('LemDCBM400600.config.ip_address.description'),
        type: 'string'
      },
      meter_dst: {
        default: '{"activated": false, "offset": 60, "start": {"order": "last", "day": "sunday", "month": "march", "hour": "T01:00Z"}, "end": {"order": "last", "day": "sunday", "month": "october", "hour": "T01:00Z" }}',
        description: tc('LemDCBM400600.config.meter_dst.description'),
        type: 'string'
      },
      meter_timezone: {
        default: '+00:00',
        description: tc('LemDCBM400600.config.meter_timezone.description'),
        type: 'string'
      },
      meter_tls_certificate: {
        default: '',
        description: tc('LemDCBM400600.config.meter_tls_certificate.description'),
        type: 'string'
      },
      ntp_server_1_ip_addr: {
        default: '',
        description: tc('LemDCBM400600.config.ntp_server_1_ip_addr.description'),
        type: 'string'
      },
      ntp_server_1_port: {
        default: 123,
        description: tc('LemDCBM400600.config.ntp_server_1_port.description'),
        type: 'integer'
      },
      ntp_server_2_ip_addr: {
        default: '',
        description: tc('LemDCBM400600.config.ntp_server_2_ip_addr.description'),
        type: 'string'
      },
      ntp_server_2_port: {
        default: 123,
        description: tc('LemDCBM400600.config.ntp_server_2_port.description'),
        type: 'integer'
      },
      port: {
        default: 80,
        description: tc('LemDCBM400600.config.port.description'),
        type: 'integer'
      },
      resilience_initial_connection_retries: {
        default: 25,
        description: tc('LemDCBM400600.config.resilience_initial_connection_retries.description'),
        type: 'integer'
      },
      resilience_initial_connection_retry_delay: {
        default: 10000,
        description: tc('LemDCBM400600.config.resilience_initial_connection_retry_delay.description'),
        type: 'integer'
      },
      resilience_transaction_request_retries: {
        default: 3,
        description: tc('LemDCBM400600.config.resilience_transaction_request_retries.description'),
        type: 'integer'
      },
      resilience_transaction_request_retry_delay: {
        default: 250,
        description: tc('LemDCBM400600.config.resilience_transaction_request_retry_delay.description'),
        type: 'integer'
      },
      tariff_id: {
        default: 0,
        description: tc('LemDCBM400600.config.tariff_id.description'),
        type: 'integer'
      }
    },
    description: tc('LemDCBM400600.description'),
    metadata: {
      authors: [
        'Valentin Dimov, valentin.dimov@pionix.de',
        'Fabian Klemm, fabian.klemm@pionix.de'
      ],
      license: 'https://opensource.org/licenses/Apache-2.0'
    },
    provides: {
      main: {
        description: tc('LemDCBM400600.provides.main.description'),
        interface: 'powermeter'
      }
    }
  },
  MicroMegaWattBSP: {
    config: {
      baud_rate: {
        default: 115200,
        description: tc('MicroMegaWattBSP.config.baud_rate.description'),
        maximum: 230400,
        minimum: 9600,
        type: 'integer'
      },
      connector_id: {
        default: 1,
        description: tc('MicroMegaWattBSP.config.connector_id.description'),
        type: 'integer'
      },
      dc_max_voltage: {
        default: 1000,
        description: tc('MicroMegaWattBSP.config.dc_max_voltage.description'),
        maximum: 1000,
        minimum: 50,
        type: 'integer'
      },
      reset_gpio: {
        default: 27,
        description: tc('MicroMegaWattBSP.config.reset_gpio.description'),
        type: 'integer'
      },
      reset_gpio_chip: {
        default: 'gpiochip0',
        description: tc('MicroMegaWattBSP.config.reset_gpio_chip.description'),
        type: 'string'
      },
      serial_port: {
        default: '/dev/ttyUSB0',
        description: tc('MicroMegaWattBSP.config.serial_port.description'),
        type: 'string'
      }
    },
    description: tc('MicroMegaWattBSP.description'),
    enable_external_mqtt: true,
    metadata: {
      authors: [ 'Cornelius Claussen' ],
      license: 'https://opensource.org/licenses/Apache-2.0'
    },
    provides: {
      board_support: {
        description: tc('MicroMegaWattBSP.provides.board_support.description'),
        interface: 'evse_board_support'
      },
      dc_supply: {
        description: tc('MicroMegaWattBSP.provides.dc_supply.description'),
        interface: 'power_supply_DC'
      },
      powermeter: {
        description: tc('MicroMegaWattBSP.provides.powermeter.description'),
        interface: 'powermeter'
      }
    }
  },
  OCPP: {
    config: {
      ChargePointConfigPath: {
        default: 'ocpp-config.json',
        description: tc('OCPP.config.ChargePointConfigPath.description'),
        type: 'string'
      },
      DatabasePath: {
        default: '/tmp/ocpp_1_6_charge_point',
        description: tc('OCPP.config.DatabasePath.description'),
        type: 'string'
      },
      DelayOcppStart: {
        default: 0,
        description: tc('OCPP.config.DelayOcppStart.description'),
        type: 'integer'
      },
      EnableExternalWebsocketControl: {
        default: false,
        description: tc('OCPP.config.EnableExternalWebsocketControl.description'),
        type: 'boolean'
      },
      MessageLogPath: {
        default: '/tmp/everest_ocpp_logs',
        description: tc('OCPP.config.MessageLogPath.description'),
        type: 'string'
      },
      MessageQueueResumeDelay: {
        default: 0,
        description: tc('OCPP.config.MessageQueueResumeDelay.description'),
        type: 'integer'
      },
      PublishChargingScheduleDurationS: {
        default: 600,
        description: tc('OCPP.config.PublishChargingScheduleDurationS.description'),
        type: 'integer'
      },
      PublishChargingScheduleIntervalS: {
        default: 30,
        description: tc('OCPP.config.PublishChargingScheduleIntervalS.description'),
        type: 'integer'
      },
      RequestCompositeScheduleUnit: {
        default: 'A',
        description: tc('OCPP.config.RequestCompositeScheduleUnit.description'),
        type: 'string'
      },
      ResetStopDelay: {
        default: 0,
        description: tc('OCPP.config.ResetStopDelay.description'),
        type: 'integer'
      },
      UserConfigPath: {
        default: 'user_config.json',
        description: tc('OCPP.config.UserConfigPath.description'),
        type: 'string'
      }
    },
    description: tc('OCPP.description'),
    enable_external_mqtt: true,
    enable_global_errors: true,
    metadata: {
      authors: [ 'Kai-Uwe Hermann', 'Piet Gömpel' ],
      license: 'https://opensource.org/licenses/Apache-2.0'
    },
    provides: {
      auth_provider: {
        description: tc('OCPP.provides.auth_provider.description'),
        interface: 'auth_token_provider'
      },
      auth_validator: {
        description: tc('OCPP.provides.auth_validator.description'),
        interface: 'auth_token_validator'
      },
      data_transfer: {
        description: tc('OCPP.provides.data_transfer.description'),
        interface: 'ocpp_data_transfer'
      },
      main: {
        description: tc('OCPP.provides.main.description'),
        interface: 'ocpp_1_6_charge_point'
      },
      ocpp_generic: {
        description: tc('OCPP.provides.ocpp_generic.description'),
        interface: 'ocpp'
      },
      session_cost: {
        description: tc('OCPP.provides.session_cost.description'),
        interface: 'session_cost'
      }
    },
    requires: {
      auth: { interface: 'auth', max_connections: 1, min_connections: 1 },
      data_transfer: {
        interface: 'ocpp_data_transfer',
        max_connections: 1,
        min_connections: 0
      },
      display_message: {
        interface: 'display_message',
        max_connections: 1,
        min_connections: 0
      },
      evse_energy_sink: {
        interface: 'external_energy_limits',
        max_connections: 129,
        min_connections: 0
      },
      evse_manager: {
        interface: 'evse_manager',
        max_connections: 128,
        min_connections: 1
      },
      extensions_15118: {
        interface: 'iso15118_extensions',
        max_connections: 128,
        min_connections: 0
      },
      reservation: {
        interface: 'reservation',
        max_connections: 1,
        min_connections: 1
      },
      security: {
        interface: 'evse_security',
        max_connections: 1,
        min_connections: 1
      },
      system: { interface: 'system', max_connections: 1, min_connections: 1 }
    }
  },
  OCPP201: {
    config: {
      CompositeScheduleIntervalS: {
        default: 30,
        description: tc('OCPP201.config.CompositeScheduleIntervalS.description'),
        type: 'integer'
      },
      CoreDatabasePath: {
        default: '/tmp/ocpp201',
        description: tc('OCPP201.config.CoreDatabasePath.description'),
        type: 'string'
      },
      DelayOcppStart: {
        default: 0,
        description: tc('OCPP201.config.DelayOcppStart.description'),
        type: 'integer'
      },
      DeviceModelConfigPath: {
        default: 'component_config',
        description: tc('OCPP201.config.DeviceModelConfigPath.description'),
        type: 'string'
      },
      DeviceModelDatabaseMigrationPath: {
        default: 'device_model_migrations',
        description: tc('OCPP201.config.DeviceModelDatabaseMigrationPath.description'),
        type: 'string'
      },
      DeviceModelDatabasePath: {
        default: 'device_model_storage.db',
        description: tc('OCPP201.config.DeviceModelDatabasePath.description'),
        type: 'string'
      },
      EnableExternalWebsocketControl: {
        default: false,
        description: tc('OCPP201.config.EnableExternalWebsocketControl.description'),
        type: 'boolean'
      },
      EverestDeviceModelDatabasePath: {
        default: 'everest_device_model_storage.db',
        description: tc('OCPP201.config.EverestDeviceModelDatabasePath.description'),
        type: 'string'
      },
      MessageLogPath: {
        default: '/tmp/everest_ocpp_logs',
        description: tc('OCPP201.config.MessageLogPath.description'),
        type: 'string'
      },
      MessageQueueResumeDelay: {
        default: 0,
        description: tc('OCPP201.config.MessageQueueResumeDelay.description'),
        type: 'integer'
      },
      RequestCompositeScheduleDurationS: {
        default: 600,
        description: tc('OCPP201.config.RequestCompositeScheduleDurationS.description'),
        type: 'integer'
      },
      RequestCompositeScheduleUnit: {
        default: 'A',
        description: tc('OCPP201.config.RequestCompositeScheduleUnit.description'),
        type: 'string'
      }
    },
    description: tc('OCPP201.description'),
    enable_external_mqtt: true,
    enable_global_errors: true,
    metadata: {
      authors: [ 'Piet Gömpel', 'Kai-Uwe Hermann' ],
      license: 'https://opensource.org/licenses/Apache-2.0'
    },
    provides: {
      auth_provider: {
        description: tc('OCPP201.provides.auth_provider.description'),
        interface: 'auth_token_provider'
      },
      auth_validator: {
        description: tc('OCPP201.provides.auth_validator.description'),
        interface: 'auth_token_validator'
      },
      data_transfer: {
        description: tc('OCPP201.provides.data_transfer.description'),
        interface: 'ocpp_data_transfer'
      },
      ocpp_generic: {
        description: tc('OCPP201.provides.ocpp_generic.description'),
        interface: 'ocpp'
      },
      session_cost: {
        description: tc('OCPP201.provides.session_cost.description'),
        interface: 'session_cost'
      }
    },
    requires: {
      auth: { interface: 'auth', max_connections: 1, min_connections: 1 },
      data_transfer: {
        interface: 'ocpp_data_transfer',
        max_connections: 1,
        min_connections: 0
      },
      display_message: {
        interface: 'display_message',
        max_connections: 1,
        min_connections: 0
      },
      evse_energy_sink: {
        interface: 'external_energy_limits',
        max_connections: 129,
        min_connections: 0
      },
      evse_manager: {
        interface: 'evse_manager',
        max_connections: 128,
        min_connections: 1
      },
      extensions_15118: {
        interface: 'iso15118_extensions',
        max_connections: 128,
        min_connections: 0
      },
      reservation: {
        interface: 'reservation',
        max_connections: 1,
        min_connections: 0
      },
      security: {
        interface: 'evse_security',
        max_connections: 1,
        min_connections: 1
      },
      system: { interface: 'system', max_connections: 1, min_connections: 1 }
    }
  },
  OCPPExtensionExample: {
    config: {
      keys_to_monitor: {
        default: 'HeartbeatInterval,SecurityProfile,ExampleConfigurationKey',
        description: tc('OCPPExtensionExample.config.keys_to_monitor.description'),
        type: 'string'
      }
    },
    description: tc('OCPPExtensionExample.description'),
    metadata: {
      authors: [ 'Piet Gömpel' ],
      license: 'https://opensource.org/licenses/Apache-2.0'
    },
    provides: {
      data_transfer: {
        description: tc('OCPPExtensionExample.provides.data_transfer.description'),
        interface: 'ocpp_data_transfer'
      }
    },
    requires: {
      data_transfer: {
        interface: 'ocpp_data_transfer',
        max_connections: 1,
        min_connections: 1
      },
      ocpp: { interface: 'ocpp', max_connections: 1, min_connections: 1 }
    }
  },
  OVMSimulator: {
    description: tc('OVMSimulator.description'),
    metadata: {
      authors: [ 'Cornelius Claussen (Pionix GmbH)' ],
      license: 'https://opensource.org/licenses/Apache-2.0'
    },
    provides: {
      main: {
        config: {
          simulate_error: {
            default: false,
            description: tc('OVMSimulator.provides.main.config.simulate_error.description'),
            type: 'boolean'
          },
          simulate_error_delay: {
            default: 5,
            description: tc('OVMSimulator.provides.main.config.simulate_error_delay.description'),
            type: 'integer'
          }
        },
        description: tc('OVMSimulator.provides.main.description'),
        interface: 'over_voltage_monitor'
      }
    }
  },
  PN532TokenProvider: {
    description: tc('PN532TokenProvider.description'),
    metadata: {
      authors: [
        'Cornelius Claussen',
        'Kai-Uwe Hermann',
        'Thilo Molitor',
        'Anton Wöllert'
      ],
      license: 'https://opensource.org/licenses/Apache-2.0'
    },
    provides: {
      main: {
        config: {
          baud_rate: {
            default: 115200,
            description: tc('PN532TokenProvider.provides.main.config.baud_rate.description'),
            maximum: 230400,
            minimum: 9600,
            type: 'integer'
          },
          debug: {
            default: false,
            description: tc('PN532TokenProvider.provides.main.config.debug.description'),
            type: 'boolean'
          },
          read_timeout: {
            default: 5,
            description: tc('PN532TokenProvider.provides.main.config.read_timeout.description'),
            maximum: 120,
            minimum: 0,
            type: 'integer'
          },
          serial_port: {
            default: '/dev/ttyS0',
            description: tc('PN532TokenProvider.provides.main.config.serial_port.description'),
            type: 'string'
          }
        },
        description: tc('PN532TokenProvider.provides.main.description'),
        interface: 'auth_token_provider'
      }
    }
  },
  PN7160TokenProvider: {
    description: tc('PN7160TokenProvider.description'),
    metadata: {
      authors: [
        'Cornelius Claussen',
        'Kai-Uwe Hermann',
        'Thilo Molitor',
        'Anton Wöllert',
        'Christoph Burandt'
      ],
      license: 'https://opensource.org/licenses/Apache-2.0'
    },
    provides: {
      main: {
        config: {
          debug: {
            default: false,
            description: tc('PN7160TokenProvider.provides.main.config.debug.description'),
            type: 'boolean'
          },
          disable_nfc_rfid: {
            default: false,
            description: tc('PN7160TokenProvider.provides.main.config.disable_nfc_rfid.description'),
            type: 'boolean'
          },
          token_debounce_interval_ms: {
            default: 3000,
            description: tc('PN7160TokenProvider.provides.main.config.token_debounce_interval_ms.description'),
            maximum: 10000,
            minimum: 1000,
            type: 'integer'
          }
        },
        description: tc('PN7160TokenProvider.provides.main.description'),
        interface: 'auth_token_provider'
      }
    }
  },
  PacketSniffer: {
    config: {
      device: {
        default: 'eth1',
        description: tc('PacketSniffer.config.device.description'),
        type: 'string'
      },
      session_logging_path: {
        default: '/tmp',
        description: tc('PacketSniffer.config.session_logging_path.description'),
        type: 'string'
      }
    },
    description: tc('PacketSniffer.description'),
    metadata: {
      authors: [ 'Sebastian Lukas' ],
      license: 'https://opensource.org/licenses/Apache-2.0'
    },
    provides: {
      main: {
        description: tc('PacketSniffer.provides.main.description'),
        interface: 'empty'
      }
    },
    requires: { evse_manager: { interface: 'evse_manager' } }
  },
  PersistentStore: {
    config: {
      sqlite_db_file_path: {
        default: 'everest_persistent_store.db',
        description: tc('PersistentStore.config.sqlite_db_file_path.description'),
        type: 'string'
      }
    },
    description: tc('PersistentStore.description'),
    metadata: {
      authors: [ 'Kai-Uwe Hermann' ],
      license: 'https://opensource.org/licenses/Apache-2.0'
    },
    provides: {
      main: {
        description: tc('PersistentStore.provides.main.description'),
        interface: 'kvs'
      }
    }
  },
  PhyVersoBSP: {
    config: {
      baud_rate: {
        default: 115200,
        description: tc('PhyVersoBSP.config.baud_rate.description'),
        maximum: 230400,
        minimum: 9600,
        type: 'integer'
      },
      conn1_dc: {
        default: false,
        description: tc('PhyVersoBSP.config.conn1_dc.description'),
        type: 'boolean'
      },
      conn1_gpio_stop_button_bank: {
        default: 'gpiochip1',
        description: tc('PhyVersoBSP.config.conn1_gpio_stop_button_bank.description'),
        type: 'string'
      },
      conn1_gpio_stop_button_enabled: {
        default: false,
        description: tc('PhyVersoBSP.config.conn1_gpio_stop_button_enabled.description'),
        type: 'boolean'
      },
      conn1_gpio_stop_button_invert: {
        default: false,
        description: tc('PhyVersoBSP.config.conn1_gpio_stop_button_invert.description'),
        type: 'boolean'
      },
      conn1_gpio_stop_button_pin: {
        default: 36,
        description: tc('PhyVersoBSP.config.conn1_gpio_stop_button_pin.description'),
        type: 'integer'
      },
      conn1_has_socket: {
        default: false,
        description: tc('PhyVersoBSP.config.conn1_has_socket.description'),
        type: 'boolean'
      },
      conn1_max_current_A_export: {
        default: 0,
        description: tc('PhyVersoBSP.config.conn1_max_current_A_export.description'),
        maximum: 63,
        minimum: 0,
        type: 'integer'
      },
      conn1_max_current_A_import: {
        default: 16,
        description: tc('PhyVersoBSP.config.conn1_max_current_A_import.description'),
        minimum: 0,
        type: 'integer'
      },
      conn1_max_phase_count_export: {
        default: 3,
        description: tc('PhyVersoBSP.config.conn1_max_phase_count_export.description'),
        maximum: 3,
        minimum: 1,
        type: 'integer'
      },
      conn1_max_phase_count_import: {
        default: 3,
        description: tc('PhyVersoBSP.config.conn1_max_phase_count_import.description'),
        maximum: 3,
        minimum: 1,
        type: 'integer'
      },
      conn1_min_current_A_export: {
        default: 0,
        description: tc('PhyVersoBSP.config.conn1_min_current_A_export.description'),
        maximum: 63,
        minimum: 0,
        type: 'integer'
      },
      conn1_min_current_A_import: {
        default: 6,
        description: tc('PhyVersoBSP.config.conn1_min_current_A_import.description'),
        minimum: 0,
        type: 'integer'
      },
      conn1_min_phase_count_export: {
        default: 3,
        description: tc('PhyVersoBSP.config.conn1_min_phase_count_export.description'),
        maximum: 3,
        minimum: 1,
        type: 'integer'
      },
      conn1_min_phase_count_import: {
        default: 3,
        description: tc('PhyVersoBSP.config.conn1_min_phase_count_import.description'),
        maximum: 3,
        minimum: 1,
        type: 'integer'
      },
      conn1_motor_lock_type: {
        default: 2,
        description: tc('PhyVersoBSP.config.conn1_motor_lock_type.description'),
        type: 'integer'
      },
      conn2_dc: {
        default: false,
        description: tc('PhyVersoBSP.config.conn2_dc.description'),
        type: 'boolean'
      },
      conn2_gpio_stop_button_bank: {
        default: 'gpiochip1',
        description: tc('PhyVersoBSP.config.conn2_gpio_stop_button_bank.description'),
        type: 'string'
      },
      conn2_gpio_stop_button_enabled: {
        default: false,
        description: tc('PhyVersoBSP.config.conn2_gpio_stop_button_enabled.description'),
        type: 'boolean'
      },
      conn2_gpio_stop_button_invert: {
        default: false,
        description: tc('PhyVersoBSP.config.conn2_gpio_stop_button_invert.description'),
        type: 'boolean'
      },
      conn2_gpio_stop_button_pin: {
        default: 37,
        description: tc('PhyVersoBSP.config.conn2_gpio_stop_button_pin.description'),
        type: 'integer'
      },
      conn2_has_socket: {
        default: false,
        description: tc('PhyVersoBSP.config.conn2_has_socket.description'),
        type: 'boolean'
      },
      conn2_max_current_A_export: {
        default: 0,
        description: tc('PhyVersoBSP.config.conn2_max_current_A_export.description'),
        maximum: 63,
        minimum: 0,
        type: 'integer'
      },
      conn2_max_current_A_import: {
        default: 16,
        description: tc('PhyVersoBSP.config.conn2_max_current_A_import.description'),
        minimum: 0,
        type: 'integer'
      },
      conn2_max_phase_count_export: {
        default: 3,
        description: tc('PhyVersoBSP.config.conn2_max_phase_count_export.description'),
        maximum: 3,
        minimum: 1,
        type: 'integer'
      },
      conn2_max_phase_count_import: {
        default: 3,
        description: tc('PhyVersoBSP.config.conn2_max_phase_count_import.description'),
        maximum: 3,
        minimum: 1,
        type: 'integer'
      },
      conn2_min_current_A_export: {
        default: 0,
        description: tc('PhyVersoBSP.config.conn2_min_current_A_export.description'),
        maximum: 63,
        minimum: 0,
        type: 'integer'
      },
      conn2_min_current_A_import: {
        default: 6,
        description: tc('PhyVersoBSP.config.conn2_min_current_A_import.description'),
        minimum: 0,
        type: 'integer'
      },
      conn2_min_phase_count_export: {
        default: 3,
        description: tc('PhyVersoBSP.config.conn2_min_phase_count_export.description'),
        maximum: 3,
        minimum: 1,
        type: 'integer'
      },
      conn2_min_phase_count_import: {
        default: 3,
        description: tc('PhyVersoBSP.config.conn2_min_phase_count_import.description'),
        maximum: 3,
        minimum: 1,
        type: 'integer'
      },
      conn2_motor_lock_type: {
        default: 2,
        description: tc('PhyVersoBSP.config.conn2_motor_lock_type.description'),
        type: 'integer'
      },
      reset_gpio: {
        default: -1,
        description: tc('PhyVersoBSP.config.reset_gpio.description'),
        maximum: 1000,
        minimum: -1,
        type: 'integer'
      },
      reset_gpio_bank: {
        default: 1,
        description: tc('PhyVersoBSP.config.reset_gpio_bank.description'),
        type: 'integer'
      },
      reset_gpio_pin: {
        default: 23,
        description: tc('PhyVersoBSP.config.reset_gpio_pin.description'),
        type: 'integer'
      },
      serial_port: {
        default: '/dev/ttyUSB0',
        description: tc('PhyVersoBSP.config.serial_port.description'),
        type: 'string'
      }
    },
    description: tc('PhyVersoBSP.description'),
    enable_external_mqtt: true,
    enable_telemetry: true,
    metadata: {
      authors: [ 'Cornelius Claussen' ],
      license: 'https://opensource.org/licenses/Apache-2.0'
    },
    provides: {
      connector_1: {
        description: tc('PhyVersoBSP.provides.connector_1.description'),
        interface: 'evse_board_support'
      },
      connector_2: {
        description: tc('PhyVersoBSP.provides.connector_2.description'),
        interface: 'evse_board_support'
      },
      connector_lock_1: {
        description: tc('PhyVersoBSP.provides.connector_lock_1.description'),
        interface: 'connector_lock'
      },
      connector_lock_2: {
        description: tc('PhyVersoBSP.provides.connector_lock_2.description'),
        interface: 'connector_lock'
      },
      phyverso_mcu_temperature: {
        description: tc('PhyVersoBSP.provides.phyverso_mcu_temperature.description'),
        interface: 'phyverso_mcu_temperature'
      },
      rcd_1: {
        description: tc('PhyVersoBSP.provides.rcd_1.description'),
        interface: 'ac_rcd'
      },
      rcd_2: {
        description: tc('PhyVersoBSP.provides.rcd_2.description'),
        interface: 'ac_rcd'
      },
      system_specific_data_1: {
        description: tc('PhyVersoBSP.provides.system_specific_data_1.description'),
        interface: 'generic_array'
      },
      system_specific_data_2: {
        description: tc('PhyVersoBSP.provides.system_specific_data_2.description'),
        interface: 'generic_array'
      }
    }
  },
  PyEvJosev: {
    config: {
      device: {
        default: 'eth0',
        description: tc('PyEvJosev.config.device.description'),
        type: 'string'
      },
      enable_tls_1_3: {
        default: false,
        description: tc('PyEvJosev.config.enable_tls_1_3.description'),
        type: 'boolean'
      },
      enforce_tls: {
        default: false,
        description: tc('PyEvJosev.config.enforce_tls.description'),
        type: 'boolean'
      },
      is_cert_install_needed: {
        default: false,
        description: tc('PyEvJosev.config.is_cert_install_needed.description'),
        type: 'boolean'
      },
      supported_DIN70121: {
        default: false,
        description: tc('PyEvJosev.config.supported_DIN70121.description'),
        type: 'boolean'
      },
      supported_ISO15118_2: {
        default: false,
        description: tc('PyEvJosev.config.supported_ISO15118_2.description'),
        type: 'boolean'
      },
      supported_ISO15118_20_AC: {
        default: false,
        description: tc('PyEvJosev.config.supported_ISO15118_20_AC.description'),
        type: 'boolean'
      },
      supported_ISO15118_20_DC: {
        default: false,
        description: tc('PyEvJosev.config.supported_ISO15118_20_DC.description'),
        type: 'boolean'
      },
      tls_active: {
        default: false,
        description: tc('PyEvJosev.config.tls_active.description'),
        type: 'boolean'
      }
    },
    description: tc('PyEvJosev.description'),
    enable_external_mqtt: true,
    metadata: {
      authors: [ 'Sebastian Lukas' ],
      license: 'https://opensource.org/licenses/Apache-2.0'
    },
    provides: {
      ev: {
        description: tc('PyEvJosev.provides.ev.description'),
        interface: 'ISO15118_ev'
      }
    }
  },
  PyExampleErrorRaiser: {
    description: tc('PyExampleErrorRaiser.description'),
    metadata: {
      authors: [ 'Andreas Heinrich' ],
      license: 'https://opensource.org/licenses/Apache-2.0'
    },
    provides: {
      example_raiser: {
        description: tc('PyExampleErrorRaiser.provides.example_raiser.description'),
        interface: 'example_error_framework'
      }
    }
  },
  PyExampleErrorSubscriber: {
    description: tc('PyExampleErrorSubscriber.description'),
    metadata: {
      authors: [ 'Andreas Heinrich' ],
      license: 'https://opensource.org/licenses/Apache-2.0'
    },
    provides: {
      example_subscriber: {
        description: tc('PyExampleErrorSubscriber.provides.example_subscriber.description'),
        interface: 'example_error_framework'
      }
    },
    requires: { example_raiser: { interface: 'example_error_framework' } }
  },
  SerialCommHub: {
    description: tc('SerialCommHub.description'),
    metadata: {
      authors: [ 'Lars Dieckmann', 'Cornelius Claussen' ],
      license: 'https://opensource.org/licenses/Apache-2.0'
    },
    provides: {
      main: {
        config: {
          baudrate: {
            default: 9600,
            description: tc('SerialCommHub.provides.main.config.baudrate.description'),
            maximum: 230400,
            minimum: 0,
            type: 'integer'
          },
          ignore_echo: {
            default: false,
            description: tc('SerialCommHub.provides.main.config.ignore_echo.description'),
            type: 'boolean'
          },
          initial_timeout_ms: {
            default: 500,
            description: tc('SerialCommHub.provides.main.config.initial_timeout_ms.description'),
            type: 'integer'
          },
          max_packet_size: {
            default: 256,
            description: tc('SerialCommHub.provides.main.config.max_packet_size.description'),
            maximum: 65536,
            minimum: 7,
            type: 'integer'
          },
          parity: {
            default: 0,
            description: tc('SerialCommHub.provides.main.config.parity.description'),
            maximum: 2,
            minimum: 0,
            type: 'integer'
          },
          retries: {
            default: 2,
            description: tc('SerialCommHub.provides.main.config.retries.description'),
            maximum: 10,
            minimum: 0,
            type: 'integer'
          },
          rtscts: {
            default: false,
            description: tc('SerialCommHub.provides.main.config.rtscts.description'),
            type: 'boolean'
          },
          rxtx_gpio_chip: {
            default: '',
            description: tc('SerialCommHub.provides.main.config.rxtx_gpio_chip.description'),
            type: 'string'
          },
          rxtx_gpio_line: {
            default: 0,
            description: tc('SerialCommHub.provides.main.config.rxtx_gpio_line.description'),
            type: 'integer'
          },
          rxtx_gpio_tx_high: {
            default: false,
            description: tc('SerialCommHub.provides.main.config.rxtx_gpio_tx_high.description'),
            type: 'boolean'
          },
          serial_port: {
            default: '/dev/ttyUSB0',
            description: tc('SerialCommHub.provides.main.config.serial_port.description'),
            type: 'string'
          },
          within_message_timeout_ms: {
            default: 100,
            description: tc('SerialCommHub.provides.main.config.within_message_timeout_ms.description'),
            type: 'integer'
          }
        },
        description: tc('SerialCommHub.provides.main.description'),
        interface: 'serial_communication_hub'
      }
    }
  },
  Setup: {
    config: {
      ap_interface: {
        default: 'wlan0',
        description: tc('Setup.config.ap_interface.description'),
        type: 'string'
      },
      ap_ipv4: {
        default: '192.168.1.1/24',
        description: tc('Setup.config.ap_ipv4.description'),
        type: 'string'
      },
      initialized_by_default: {
        default: true,
        description: tc('Setup.config.initialized_by_default.description'),
        type: 'boolean'
      },
      localization: {
        default: false,
        description: tc('Setup.config.localization.description'),
        type: 'boolean'
      },
      online_check_host: {
        default: 'lfenergy.org',
        description: tc('Setup.config.online_check_host.description'),
        type: 'string'
      },
      release_metadata_file: {
        default: 'release.json',
        description: tc('Setup.config.release_metadata_file.description'),
        type: 'string'
      },
      setup_simulation: {
        default: false,
        description: tc('Setup.config.setup_simulation.description'),
        type: 'boolean'
      },
      setup_wifi: {
        default: false,
        description: tc('Setup.config.setup_wifi.description'),
        type: 'boolean'
      }
    },
    description: tc('Setup.description'),
    enable_external_mqtt: true,
    metadata: {
      authors: [ 'Kai-Uwe Hermann' ],
      license: 'https://opensource.org/licenses/Apache-2.0'
    },
    provides: {
      main: {
        description: tc('Setup.provides.main.description'),
        interface: 'empty'
      }
    },
    requires: { store: { interface: 'kvs' } }
  },
  SlacSimulator: {
    description: tc('SlacSimulator.description'),
    enable_external_mqtt: true,
    metadata: {
      authors: [
        'Cornelius Claussen (Pionix GmbH)',
        'Tobias Marzell (Pionix GmbH)'
      ],
      license: 'https://opensource.org/licenses/Apache-2.0'
    },
    provides: {
      ev: {
        description: tc('SlacSimulator.provides.ev.description'),
        interface: 'ev_slac'
      },
      evse: {
        description: tc('SlacSimulator.provides.evse.description'),
        interface: 'slac'
      }
    }
  },
  StaticISO15118VASProvider: {
    config: {
      service_file: {
        description: tc('StaticISO15118VASProvider.config.service_file.description'),
        type: 'string'
      }
    },
    description: tc('StaticISO15118VASProvider.description'),
    metadata: {
      authors: [ 'Mark Oude Elberink' ],
      license: 'https://opensource.org/licenses/Apache-2.0'
    },
    provides: {
      iso15118_vas: {
        description: tc('StaticISO15118VASProvider.provides.iso15118_vas.description'),
        interface: 'ISO15118_vas'
      }
    }
  },
  Store: {
    description: tc('Store.description'),
    metadata: {
      authors: [ 'Kai-Uwe Hermann', 'Thilo Molitor' ],
      license: 'https://opensource.org/licenses/Apache-2.0'
    },
    provides: {
      main: {
        description: tc('Store.provides.main.description'),
        interface: 'kvs'
      }
    }
  },
  System: {
    config: {
      DefaultRetries: {
        default: 1,
        description: tc('System.config.DefaultRetries.description'),
        type: 'number'
      },
      DefaultRetryInterval: {
        default: 1,
        description: tc('System.config.DefaultRetryInterval.description'),
        type: 'number'
      },
      ResetDelay: {
        default: 0,
        description: tc('System.config.ResetDelay.description'),
        minimum: 0,
        type: 'integer'
      }
    },
    description: tc('System.description'),
    enable_external_mqtt: false,
    metadata: {
      authors: [ 'Piet Gömpel' ],
      license: 'https://opensource.org/licenses/Apache-2.0'
    },
    provides: {
      main: {
        description: tc('System.provides.main.description'),
        interface: 'system'
      }
    },
    requires: {
      store: { interface: 'kvs', max_connections: 1, min_connections: 0 }
    }
  },
  TerminalCostAndPriceMessage: {
    description: tc('TerminalCostAndPriceMessage.description'),
    metadata: {
      authors: [ 'Maaike Zijderveld' ],
      license: 'https://opensource.org/licenses/Apache-2.0'
    },
    provides: {
      main: {
        description: tc('TerminalCostAndPriceMessage.provides.main.description'),
        interface: 'empty'
      }
    },
    requires: {
      session_cost: {
        interface: 'session_cost',
        max_connections: 1,
        min_connections: 1
      }
    }
  },
  TerminalDisplayMessage: {
    description: tc('TerminalDisplayMessage.description'),
    metadata: {
      authors: [ 'Maaike Zijderveld' ],
      license: 'https://opensource.org/licenses/Apache-2.0'
    },
    provides: {
      display_message: {
        description: tc('TerminalDisplayMessage.provides.display_message.description'),
        interface: 'display_message'
      }
    }
  },
  TestErrorHandling: {
    description: tc('TestErrorHandling.description'),
    enable_global_errors: true,
    metadata: {
      authors: [ 'Andreas Heinrich' ],
      license: 'https://opensource.org/licenses/Apache-2.0'
    },
    provides: {
      main: {
        description: tc('TestErrorHandling.provides.main.description'),
        interface: 'test_error_handling'
      }
    },
    requires: { error_raiser: { interface: 'test_error_raiser' } }
  },
  YetiDriver: {
    config: {
      baud_rate: {
        default: 115200,
        description: tc('YetiDriver.config.baud_rate.description'),
        maximum: 230400,
        minimum: 9600,
        type: 'integer'
      },
      caps_max_current_A: {
        default: -1,
        description: tc('YetiDriver.config.caps_max_current_A.description'),
        type: 'integer'
      },
      caps_min_current_A: {
        default: -1,
        description: tc('YetiDriver.config.caps_min_current_A.description'),
        type: 'integer'
      },
      reset_gpio: {
        default: 27,
        description: tc('YetiDriver.config.reset_gpio.description'),
        type: 'integer'
      },
      reset_gpio_chip: {
        default: 'gpiochip0',
        description: tc('YetiDriver.config.reset_gpio_chip.description'),
        type: 'string'
      },
      serial_port: {
        default: '/dev/ttyUSB0',
        description: tc('YetiDriver.config.serial_port.description'),
        type: 'string'
      }
    },
    description: tc('YetiDriver.description'),
    enable_telemetry: true,
    metadata: {
      authors: [
        'Cornelius Claussen',
        'Kai-Uwe Hermann',
        'Thilo Molitor',
        'Anton Wöllert'
      ],
      license: 'https://opensource.org/licenses/Apache-2.0'
    },
    provides: {
      board_support: {
        description: tc('YetiDriver.provides.board_support.description'),
        interface: 'evse_board_support'
      },
      connector_lock: {
        description: tc('YetiDriver.provides.connector_lock.description'),
        interface: 'connector_lock'
      },
      powermeter: {
        description: tc('YetiDriver.provides.powermeter.description'),
        interface: 'powermeter'
      },
      rcd: {
        description: tc('YetiDriver.provides.rcd.description'),
        interface: 'ac_rcd'
      }
    }
  },
  YetiEvDriver: {
    config: {
      baud_rate: {
        default: 115200,
        description: tc('YetiEvDriver.config.baud_rate.description'),
        maximum: 230400,
        minimum: 9600,
        type: 'integer'
      },
      reset_gpio: {
        default: -1,
        description: tc('YetiEvDriver.config.reset_gpio.description'),
        maximum: 1000,
        minimum: -1,
        type: 'integer'
      },
      serial_port: {
        default: '/dev/ttyUSB0',
        description: tc('YetiEvDriver.config.serial_port.description'),
        type: 'string'
      }
    },
    description: tc('YetiEvDriver.description'),
    enable_external_mqtt: true,
    enable_telemetry: true,
    metadata: {
      authors: [ 'Cornelius Claussen', 'Sebastian Lukas', 'Piet Gömpel' ],
      license: 'https://opensource.org/licenses/Apache-2.0'
    },
    provides: {
      ev_board_support: {
        description: tc('YetiEvDriver.provides.ev_board_support.description'),
        interface: 'ev_board_support'
      }
    }
  },
  YetiSimulator: {
    config: {
      connector_id: {
        description: tc('YetiSimulator.config.connector_id.description'),
        type: 'integer'
      },
      reset_powermeter_on_session_start: {
        default: true,
        description: tc('YetiSimulator.config.reset_powermeter_on_session_start.description'),
        type: 'boolean'
      }
    },
    description: tc('YetiSimulator.description'),
    enable_external_mqtt: true,
    enable_telemetry: true,
    metadata: {
      authors: [ 'Cornelius Claussen', 'Tobias Marzell (Pionix GmbH)' ],
      license: 'https://opensource.org/licenses/Apache-2.0'
    },
    provides: {
      board_support: {
        description: tc('YetiSimulator.provides.board_support.description'),
        interface: 'evse_board_support'
      },
      connector_lock: {
        description: tc('YetiSimulator.provides.connector_lock.description'),
        interface: 'connector_lock'
      },
      ev_board_support: {
        description: tc('YetiSimulator.provides.ev_board_support.description'),
        interface: 'ev_board_support'
      },
      powermeter: {
        description: tc('YetiSimulator.provides.powermeter.description'),
        interface: 'powermeter'
      },
      rcd: {
        description: tc('YetiSimulator.provides.rcd.description'),
        interface: 'ac_rcd'
      }
    }
  }
} as EverestModuleDefinitionList;
