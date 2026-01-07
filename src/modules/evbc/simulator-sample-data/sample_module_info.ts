// SPDX-License-Identifier: Apache-2.0
// Copyright 2020 - 2026 Pionix GmbH and Contributors to EVerest

// This file is generated, see README.md for more information.

import { EverestModuleDefinitionList, LocalizedString } from "../index";
import { computed } from "vue";
import { i18n } from "../../../plugins/i18n";
import { ComposerTranslation } from "vue-i18n";

const t = (i18n as unknown as { global: { t: ComposerTranslation } }).global.t;

/* eslint-disable prettier/prettier */
export default {
  API: {
    config: {
      charger_information_file: {
        default: '',
        description: computed(() => String(t("API.config.charger_information_file.description"))) as LocalizedString,
        type: 'string'
      },
      hw_caps_max_current_export_decimal_places: {
        default: 2,
        description: computed(() => String(t("API.config.hw_caps_max_current_export_decimal_places.description"))) as LocalizedString,
        minimum: 0,
        type: 'integer'
      },
      hw_caps_max_current_export_round_to: {
        default: 0,
        description: computed(() => String(t("API.config.hw_caps_max_current_export_round_to.description"))) as LocalizedString,
        type: 'number'
      },
      hw_caps_max_current_import_decimal_places: {
        default: 2,
        description: computed(() => String(t("API.config.hw_caps_max_current_import_decimal_places.description"))) as LocalizedString,
        minimum: 0,
        type: 'integer'
      },
      hw_caps_max_current_import_round_to: {
        default: 0,
        description: computed(() => String(t("API.config.hw_caps_max_current_import_round_to.description"))) as LocalizedString,
        type: 'number'
      },
      hw_caps_max_plug_temperature_C_decimal_places: {
        default: 2,
        description: computed(() => String(t("API.config.hw_caps_max_plug_temperature_C_decimal_places.description"))) as LocalizedString,
        minimum: 0,
        type: 'integer'
      },
      hw_caps_max_plug_temperature_C_round_to: {
        default: 0,
        description: computed(() => String(t("API.config.hw_caps_max_plug_temperature_C_round_to.description"))) as LocalizedString,
        type: 'number'
      },
      hw_caps_min_current_export_decimal_places: {
        default: 2,
        description: computed(() => String(t("API.config.hw_caps_min_current_export_decimal_places.description"))) as LocalizedString,
        minimum: 0,
        type: 'integer'
      },
      hw_caps_min_current_export_round_to: {
        default: 0,
        description: computed(() => String(t("API.config.hw_caps_min_current_export_round_to.description"))) as LocalizedString,
        type: 'number'
      },
      hw_caps_min_current_import_decimal_places: {
        default: 2,
        description: computed(() => String(t("API.config.hw_caps_min_current_import_decimal_places.description"))) as LocalizedString,
        minimum: 0,
        type: 'integer'
      },
      hw_caps_min_current_import_round_to: {
        default: 0,
        description: computed(() => String(t("API.config.hw_caps_min_current_import_round_to.description"))) as LocalizedString,
        type: 'number'
      },
      limits_max_current_decimal_places: {
        default: 2,
        description: computed(() => String(t("API.config.limits_max_current_decimal_places.description"))) as LocalizedString,
        minimum: 0,
        type: 'integer'
      },
      limits_max_current_round_to: {
        default: 0,
        description: computed(() => String(t("API.config.limits_max_current_round_to.description"))) as LocalizedString,
        type: 'number'
      },
      powermeter_VAR_decimal_places: {
        default: 2,
        description: computed(() => String(t("API.config.powermeter_VAR_decimal_places.description"))) as LocalizedString,
        minimum: 0,
        type: 'integer'
      },
      powermeter_VAR_round_to: {
        default: 0,
        description: computed(() => String(t("API.config.powermeter_VAR_round_to.description"))) as LocalizedString,
        type: 'number'
      },
      powermeter_current_decimal_places: {
        default: 2,
        description: computed(() => String(t("API.config.powermeter_current_decimal_places.description"))) as LocalizedString,
        minimum: 0,
        type: 'integer'
      },
      powermeter_current_round_to: {
        default: 0,
        description: computed(() => String(t("API.config.powermeter_current_round_to.description"))) as LocalizedString,
        type: 'number'
      },
      powermeter_energy_export_decimal_places: {
        default: 2,
        description: computed(() => String(t("API.config.powermeter_energy_export_decimal_places.description"))) as LocalizedString,
        minimum: 0,
        type: 'integer'
      },
      powermeter_energy_export_round_to: {
        default: 0,
        description: computed(() => String(t("API.config.powermeter_energy_export_round_to.description"))) as LocalizedString,
        type: 'number'
      },
      powermeter_energy_import_decimal_places: {
        default: 2,
        description: computed(() => String(t("API.config.powermeter_energy_import_decimal_places.description"))) as LocalizedString,
        minimum: 0,
        type: 'integer'
      },
      powermeter_energy_import_round_to: {
        default: 0,
        description: computed(() => String(t("API.config.powermeter_energy_import_round_to.description"))) as LocalizedString,
        type: 'number'
      },
      powermeter_frequency_decimal_places: {
        default: 2,
        description: computed(() => String(t("API.config.powermeter_frequency_decimal_places.description"))) as LocalizedString,
        minimum: 0,
        type: 'integer'
      },
      powermeter_frequency_round_to: {
        default: 0,
        description: computed(() => String(t("API.config.powermeter_frequency_round_to.description"))) as LocalizedString,
        type: 'number'
      },
      powermeter_power_decimal_places: {
        default: 2,
        description: computed(() => String(t("API.config.powermeter_power_decimal_places.description"))) as LocalizedString,
        minimum: 0,
        type: 'integer'
      },
      powermeter_power_round_to: {
        default: 0,
        description: computed(() => String(t("API.config.powermeter_power_round_to.description"))) as LocalizedString,
        type: 'number'
      },
      powermeter_voltage_decimal_places: {
        default: 2,
        description: computed(() => String(t("API.config.powermeter_voltage_decimal_places.description"))) as LocalizedString,
        minimum: 0,
        type: 'integer'
      },
      powermeter_voltage_round_to: {
        default: 0,
        description: computed(() => String(t("API.config.powermeter_voltage_round_to.description"))) as LocalizedString,
        type: 'number'
      },
      telemetry_evse_temperature_C_decimal_places: {
        default: 2,
        description: computed(() => String(t("API.config.telemetry_evse_temperature_C_decimal_places.description"))) as LocalizedString,
        minimum: 0,
        type: 'integer'
      },
      telemetry_evse_temperature_C_round_to: {
        default: 0,
        description: computed(() => String(t("API.config.telemetry_evse_temperature_C_round_to.description"))) as LocalizedString,
        type: 'number'
      },
      telemetry_fan_rpm_decimal_places: {
        default: 2,
        description: computed(() => String(t("API.config.telemetry_fan_rpm_decimal_places.description"))) as LocalizedString,
        minimum: 0,
        type: 'integer'
      },
      telemetry_fan_rpm_round_to: {
        default: 0,
        description: computed(() => String(t("API.config.telemetry_fan_rpm_round_to.description"))) as LocalizedString,
        type: 'number'
      },
      telemetry_plug_temperature_C_decimal_places: {
        default: 2,
        description: computed(() => String(t("API.config.telemetry_plug_temperature_C_decimal_places.description"))) as LocalizedString,
        minimum: 0,
        type: 'integer'
      },
      telemetry_plug_temperature_C_round_to: {
        default: 0,
        description: computed(() => String(t("API.config.telemetry_plug_temperature_C_round_to.description"))) as LocalizedString,
        type: 'number'
      },
      telemetry_supply_voltage_12V_decimal_places: {
        default: 2,
        description: computed(() => String(t("API.config.telemetry_supply_voltage_12V_decimal_places.description"))) as LocalizedString,
        minimum: 0,
        type: 'integer'
      },
      telemetry_supply_voltage_12V_round_to: {
        default: 0,
        description: computed(() => String(t("API.config.telemetry_supply_voltage_12V_round_to.description"))) as LocalizedString,
        type: 'number'
      },
      telemetry_supply_voltage_minus_12V_decimal_places: {
        default: 2,
        description: computed(() => String(t("API.config.telemetry_supply_voltage_minus_12V_decimal_places.description"))) as LocalizedString,
        minimum: 0,
        type: 'integer'
      },
      telemetry_supply_voltage_minus_12V_round_to: {
        default: 0,
        description: computed(() => String(t("API.config.telemetry_supply_voltage_minus_12V_round_to.description"))) as LocalizedString,
        type: 'number'
      }
    },
    description: computed(() => String(t("API.description"))) as LocalizedString,
    enable_external_mqtt: true,
    metadata: {
      authors: [ 'Kai-Uwe Hermann' ],
      license: 'https://opensource.org/licenses/Apache-2.0'
    },
    provides: {
      main: {
        description: computed(() => String(t("API.provides.main.description"))) as LocalizedString,
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
        description: computed(() => String(t("AdAcEvse22KwzKitBSP.config.baud_rate.description"))) as LocalizedString,
        maximum: 230400,
        minimum: 9600,
        type: 'integer'
      },
      caps_max_current_A: {
        default: -1,
        description: computed(() => String(t("AdAcEvse22KwzKitBSP.config.caps_max_current_A.description"))) as LocalizedString,
        type: 'integer'
      },
      caps_min_current_A: {
        default: -1,
        description: computed(() => String(t("AdAcEvse22KwzKitBSP.config.caps_min_current_A.description"))) as LocalizedString,
        type: 'integer'
      },
      reset_gpio: {
        default: 27,
        description: computed(() => String(t("AdAcEvse22KwzKitBSP.config.reset_gpio.description"))) as LocalizedString,
        type: 'integer'
      },
      reset_gpio_chip: {
        default: 'gpiochip0',
        description: computed(() => String(t("AdAcEvse22KwzKitBSP.config.reset_gpio_chip.description"))) as LocalizedString,
        type: 'string'
      },
      serial_port: {
        default: '/dev/ttyUSB0',
        description: computed(() => String(t("AdAcEvse22KwzKitBSP.config.serial_port.description"))) as LocalizedString,
        type: 'string'
      }
    },
    description: computed(() => String(t("AdAcEvse22KwzKitBSP.description"))) as LocalizedString,
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
        description: computed(() => String(t("AdAcEvse22KwzKitBSP.provides.board_support.description"))) as LocalizedString,
        interface: 'evse_board_support'
      },
      powermeter: {
        description: computed(() => String(t("AdAcEvse22KwzKitBSP.provides.powermeter.description"))) as LocalizedString,
        interface: 'powermeter'
      }
    }
  },
  Auth: {
    config: {
      connection_timeout: {
        description: computed(() => String(t("Auth.config.connection_timeout.description"))) as LocalizedString,
        type: 'integer'
      },
      ignore_connector_faults: {
        default: false,
        description: computed(() => String(t("Auth.config.ignore_connector_faults.description"))) as LocalizedString,
        type: 'boolean'
      },
      master_pass_group_id: {
        default: '',
        description: computed(() => String(t("Auth.config.master_pass_group_id.description"))) as LocalizedString,
        type: 'string'
      },
      prioritize_authorization_over_stopping_transaction: {
        default: true,
        description: computed(() => String(t("Auth.config.prioritize_authorization_over_stopping_transaction.description"))) as LocalizedString,
        type: 'boolean'
      },
      selection_algorithm: {
        default: 'FindFirst',
        description: computed(() => String(t("Auth.config.selection_algorithm.description"))) as LocalizedString,
        type: 'string'
      }
    },
    description: computed(() => String(t("Auth.description"))) as LocalizedString,
    metadata: {
      authors: [ 'Piet Gömpel' ],
      license: 'https://opensource.org/licenses/Apache-2.0'
    },
    provides: {
      main: {
        description: computed(() => String(t("Auth.provides.main.description"))) as LocalizedString,
        interface: 'auth'
      },
      reservation: {
        description: computed(() => String(t("Auth.provides.reservation.description"))) as LocalizedString,
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
    description: computed(() => String(t("DCSupplySimulator.description"))) as LocalizedString,
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
            description: computed(() => String(t("DCSupplySimulator.provides.main.config.bidirectional.description"))) as LocalizedString,
            type: 'boolean'
          },
          max_current: {
            default: 200,
            description: computed(() => String(t("DCSupplySimulator.provides.main.config.max_current.description"))) as LocalizedString,
            type: 'number'
          },
          max_power: {
            default: 150000,
            description: computed(() => String(t("DCSupplySimulator.provides.main.config.max_power.description"))) as LocalizedString,
            type: 'number'
          },
          max_voltage: {
            default: 900,
            description: computed(() => String(t("DCSupplySimulator.provides.main.config.max_voltage.description"))) as LocalizedString,
            type: 'number'
          },
          min_current: {
            default: 1,
            description: computed(() => String(t("DCSupplySimulator.provides.main.config.min_current.description"))) as LocalizedString,
            type: 'number'
          },
          min_voltage: {
            default: 200,
            description: computed(() => String(t("DCSupplySimulator.provides.main.config.min_voltage.description"))) as LocalizedString,
            type: 'number'
          }
        },
        description: computed(() => String(t("DCSupplySimulator.provides.main.description"))) as LocalizedString,
        interface: 'power_supply_DC'
      },
      powermeter: {
        description: computed(() => String(t("DCSupplySimulator.provides.powermeter.description"))) as LocalizedString,
        interface: 'powermeter'
      }
    }
  },
  DPM1000: {
    config: {
      current_limit_A: {
        default: 100,
        description: computed(() => String(t("DPM1000.config.current_limit_A.description"))) as LocalizedString,
        maximum: 100,
        type: 'number'
      },
      debug_print_all_telemetry: {
        default: false,
        description: computed(() => String(t("DPM1000.config.debug_print_all_telemetry.description"))) as LocalizedString,
        type: 'boolean'
      },
      device: {
        default: 'can0',
        description: computed(() => String(t("DPM1000.config.device.description"))) as LocalizedString,
        type: 'string'
      },
      device_address: {
        default: 0,
        description: computed(() => String(t("DPM1000.config.device_address.description"))) as LocalizedString,
        type: 'integer'
      },
      discharge_gpio_chip: {
        default: '',
        description: computed(() => String(t("DPM1000.config.discharge_gpio_chip.description"))) as LocalizedString,
        type: 'string'
      },
      discharge_gpio_line: {
        default: 0,
        description: computed(() => String(t("DPM1000.config.discharge_gpio_line.description"))) as LocalizedString,
        type: 'integer'
      },
      discharge_gpio_polarity: {
        default: true,
        description: computed(() => String(t("DPM1000.config.discharge_gpio_polarity.description"))) as LocalizedString,
        type: 'boolean'
      },
      power_limit_W: {
        default: 30000,
        description: computed(() => String(t("DPM1000.config.power_limit_W.description"))) as LocalizedString,
        maximum: 30000,
        type: 'number'
      },
      series_parallel_mode: {
        default: 'Series',
        description: computed(() => String(t("DPM1000.config.series_parallel_mode.description"))) as LocalizedString,
        enum: [ 'Series', 'Parallel', 'Automatic' ],
        type: 'string'
      },
      voltage_limit_V: {
        default: 1000,
        description: computed(() => String(t("DPM1000.config.voltage_limit_V.description"))) as LocalizedString,
        maximum: 1000,
        type: 'number'
      }
    },
    description: computed(() => String(t("DPM1000.description"))) as LocalizedString,
    metadata: {
      authors: [ 'aw@pionix.de' ],
      license: 'https://opensource.org/licenses/Apache-2.0'
    },
    provides: {
      main: {
        description: computed(() => String(t("DPM1000.provides.main.description"))) as LocalizedString,
        interface: 'power_supply_DC'
      }
    }
  },
  DummyBankSessionTokenProvider: {
    description: computed(() => String(t("DummyBankSessionTokenProvider.description"))) as LocalizedString,
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
            description: computed(() => String(t("DummyBankSessionTokenProvider.provides.main.config.randomize.description"))) as LocalizedString,
            type: 'boolean'
          },
          token: {
            default: 'DummyBankSessionToken',
            description: computed(() => String(t("DummyBankSessionTokenProvider.provides.main.config.token.description"))) as LocalizedString,
            type: 'string'
          }
        },
        description: computed(() => String(t("DummyBankSessionTokenProvider.provides.main.description"))) as LocalizedString,
        interface: 'bank_session_token_provider'
      }
    },
    requires: {}
  },
  DummyTokenProvider: {
    description: computed(() => String(t("DummyTokenProvider.description"))) as LocalizedString,
    metadata: {
      authors: [ 'Thilo Molitor', 'Cornelius Claussen' ],
      license: 'https://opensource.org/licenses/Apache-2.0'
    },
    provides: {
      main: {
        config: {
          connector_id: {
            default: 0,
            description: computed(() => String(t("DummyTokenProvider.provides.main.config.connector_id.description"))) as LocalizedString,
            minimum: 0,
            type: 'integer'
          },
          timeout: {
            default: 10,
            description: computed(() => String(t("DummyTokenProvider.provides.main.config.timeout.description"))) as LocalizedString,
            maximum: 120,
            minimum: 0,
            type: 'number'
          },
          token: {
            default: 'DEADBEEF',
            description: computed(() => String(t("DummyTokenProvider.provides.main.config.token.description"))) as LocalizedString,
            maxLength: 20,
            minLength: 1,
            type: 'string'
          },
          type: {
            default: 'RFID',
            description: computed(() => String(t("DummyTokenProvider.provides.main.config.type.description"))) as LocalizedString,
            maxLength: 32,
            minLength: 2,
            type: 'string'
          }
        },
        description: computed(() => String(t("DummyTokenProvider.provides.main.description"))) as LocalizedString,
        interface: 'auth_token_provider'
      }
    },
    requires: { evse: { interface: 'evse_manager' } }
  },
  DummyTokenProviderManual: {
    description: computed(() => String(t("DummyTokenProviderManual.description"))) as LocalizedString,
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
            description: computed(() => String(t("DummyTokenProviderManual.provides.main.config.timeout.description"))) as LocalizedString,
            maximum: 120,
            minimum: 0,
            type: 'number'
          },
          token: {
            default: 'DEADBEEF',
            description: computed(() => String(t("DummyTokenProviderManual.provides.main.config.token.description"))) as LocalizedString,
            maxLength: 20,
            minLength: 1,
            type: 'string'
          },
          type: {
            default: 'RFID',
            description: computed(() => String(t("DummyTokenProviderManual.provides.main.config.type.description"))) as LocalizedString,
            maxLength: 32,
            minLength: 2,
            type: 'string'
          }
        },
        description: computed(() => String(t("DummyTokenProviderManual.provides.main.description"))) as LocalizedString,
        interface: 'auth_token_provider'
      }
    },
    requires: {}
  },
  DummyTokenValidator: {
    description: computed(() => String(t("DummyTokenValidator.description"))) as LocalizedString,
    metadata: {
      authors: [ 'Thilo Molitor', 'Cornelius Claussen' ],
      license: 'https://opensource.org/licenses/Apache-2.0'
    },
    provides: {
      main: {
        config: {
          sleep: {
            default: 0.5,
            description: computed(() => String(t("DummyTokenValidator.provides.main.config.sleep.description"))) as LocalizedString,
            maximum: 120,
            minimum: 0,
            type: 'number'
          },
          validation_reason: {
            default: 'Token valid',
            description: computed(() => String(t("DummyTokenValidator.provides.main.config.validation_reason.description"))) as LocalizedString,
            minLength: 5,
            type: 'string'
          },
          validation_result: {
            default: 'Accepted',
            description: computed(() => String(t("DummyTokenValidator.provides.main.config.validation_result.description"))) as LocalizedString,
            enum: [ 'Accepted', 'Blocked', 'Expired', 'Invalid' ],
            type: 'string'
          }
        },
        description: computed(() => String(t("DummyTokenValidator.provides.main.description"))) as LocalizedString,
        interface: 'auth_token_validator'
      }
    }
  },
  DummyV2G: {
    description: computed(() => String(t("DummyV2G.description"))) as LocalizedString,
    metadata: {
      authors: [ 'Cornelius Claussen' ],
      license: 'https://opensource.org/licenses/Apache-2.0'
    },
    provides: {
      main: {
        description: computed(() => String(t("DummyV2G.provides.main.description"))) as LocalizedString,
        interface: 'ISO15118_charger'
      }
    }
  },
  EnergyManager: {
    config: {
      debug: {
        default: false,
        description: computed(() => String(t("EnergyManager.config.debug.description"))) as LocalizedString,
        type: 'boolean'
      },
      nominal_ac_voltage: {
        default: 230,
        description: computed(() => String(t("EnergyManager.config.nominal_ac_voltage.description"))) as LocalizedString,
        type: 'number'
      },
      schedule_interval_duration: {
        default: 60,
        description: computed(() => String(t("EnergyManager.config.schedule_interval_duration.description"))) as LocalizedString,
        type: 'integer'
      },
      schedule_total_duration: {
        default: 1,
        description: computed(() => String(t("EnergyManager.config.schedule_total_duration.description"))) as LocalizedString,
        type: 'integer'
      },
      slice_ampere: {
        default: 0.5,
        description: computed(() => String(t("EnergyManager.config.slice_ampere.description"))) as LocalizedString,
        type: 'number'
      },
      slice_watt: {
        default: 500,
        description: computed(() => String(t("EnergyManager.config.slice_watt.description"))) as LocalizedString,
        type: 'number'
      },
      switch_3ph1ph_max_nr_of_switches_per_session: {
        default: 0,
        description: computed(() => String(t("EnergyManager.config.switch_3ph1ph_max_nr_of_switches_per_session.description"))) as LocalizedString,
        type: 'integer'
      },
      switch_3ph1ph_power_hysteresis_W: {
        default: 200,
        description: computed(() => String(t("EnergyManager.config.switch_3ph1ph_power_hysteresis_W.description"))) as LocalizedString,
        type: 'integer'
      },
      switch_3ph1ph_switch_limit_stickyness: {
        default: 'DontChange',
        description: computed(() => String(t("EnergyManager.config.switch_3ph1ph_switch_limit_stickyness.description"))) as LocalizedString,
        enum: [ 'SinglePhase', 'ThreePhase', 'DontChange' ],
        type: 'string'
      },
      switch_3ph1ph_time_hysteresis_s: {
        default: 600,
        description: computed(() => String(t("EnergyManager.config.switch_3ph1ph_time_hysteresis_s.description"))) as LocalizedString,
        type: 'integer'
      },
      switch_3ph1ph_while_charging_mode: {
        default: 'Never',
        description: computed(() => String(t("EnergyManager.config.switch_3ph1ph_while_charging_mode.description"))) as LocalizedString,
        enum: [ 'Never', 'Oneway', 'Both' ],
        type: 'string'
      },
      update_interval: {
        default: 1,
        description: computed(() => String(t("EnergyManager.config.update_interval.description"))) as LocalizedString,
        type: 'integer'
      }
    },
    description: computed(() => String(t("EnergyManager.description"))) as LocalizedString,
    enable_external_mqtt: false,
    metadata: {
      authors: [ 'Cornelius Claussen', 'Lars Dieckmann' ],
      license: 'https://opensource.org/licenses/Apache-2.0'
    },
    provides: {
      main: {
        description: computed(() => String(t("EnergyManager.provides.main.description"))) as LocalizedString,
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
        description: computed(() => String(t("EnergyNode.config.fuse_limit_A.description"))) as LocalizedString,
        minimum: 0,
        type: 'number'
      },
      phase_count: {
        description: computed(() => String(t("EnergyNode.config.phase_count.description"))) as LocalizedString,
        maximum: 3,
        minimum: 0,
        type: 'integer'
      }
    },
    description: computed(() => String(t("EnergyNode.description"))) as LocalizedString,
    enable_external_mqtt: false,
    metadata: {
      authors: [ 'Cornelius Claussen' ],
      license: 'https://opensource.org/licenses/Apache-2.0'
    },
    provides: {
      energy_grid: {
        description: computed(() => String(t("EnergyNode.provides.energy_grid.description"))) as LocalizedString,
        interface: 'energy'
      },
      external_limits: {
        description: computed(() => String(t("EnergyNode.provides.external_limits.description"))) as LocalizedString,
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
    description: computed(() => String(t("ErrorHistory.description"))) as LocalizedString,
    enable_global_errors: true,
    metadata: {
      authors: [ 'Andreas Heinrich' ],
      license: 'https://spdx.org/licenses/Apache-2.0.html'
    },
    provides: {
      error_history: {
        config: {
          database_path: {
            description: computed(() => String(t("ErrorHistory.provides.error_history.config.database_path.description"))) as LocalizedString,
            type: 'string'
          }
        },
        description: computed(() => String(t("ErrorHistory.provides.error_history.description"))) as LocalizedString,
        interface: 'error_history'
      }
    }
  },
  EvAPI: {
    config: {},
    description: computed(() => String(t("EvAPI.description"))) as LocalizedString,
    enable_external_mqtt: true,
    metadata: {
      authors: [ 'Kai-Uwe Hermann' ],
      license: 'https://opensource.org/licenses/Apache-2.0'
    },
    provides: {
      main: {
        description: computed(() => String(t("EvAPI.provides.main.description"))) as LocalizedString,
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
        description: computed(() => String(t("EvManager.config.ac_nominal_voltage.description"))) as LocalizedString,
        type: 'number'
      },
      auto_enable: {
        default: false,
        description: computed(() => String(t("EvManager.config.auto_enable.description"))) as LocalizedString,
        type: 'boolean'
      },
      auto_exec: {
        default: false,
        description: computed(() => String(t("EvManager.config.auto_exec.description"))) as LocalizedString,
        type: 'boolean'
      },
      auto_exec_commands: {
        default: '',
        description: computed(() => String(t("EvManager.config.auto_exec_commands.description"))) as LocalizedString,
        type: 'string'
      },
      auto_exec_infinite: {
        default: false,
        description: computed(() => String(t("EvManager.config.auto_exec_infinite.description"))) as LocalizedString,
        type: 'boolean'
      },
      connector_id: {
        description: computed(() => String(t("EvManager.config.connector_id.description"))) as LocalizedString,
        type: 'integer'
      },
      dc_discharge_max_current_limit: {
        default: 300,
        description: computed(() => String(t("EvManager.config.dc_discharge_max_current_limit.description"))) as LocalizedString,
        type: 'integer'
      },
      dc_discharge_max_power_limit: {
        default: 150000,
        description: computed(() => String(t("EvManager.config.dc_discharge_max_power_limit.description"))) as LocalizedString,
        type: 'integer'
      },
      dc_discharge_target_current: {
        default: 5,
        description: computed(() => String(t("EvManager.config.dc_discharge_target_current.description"))) as LocalizedString,
        type: 'integer'
      },
      dc_discharge_v2g_minimal_soc: {
        default: 20,
        description: computed(() => String(t("EvManager.config.dc_discharge_v2g_minimal_soc.description"))) as LocalizedString,
        type: 'integer'
      },
      dc_energy_capacity: {
        default: 60000,
        description: computed(() => String(t("EvManager.config.dc_energy_capacity.description"))) as LocalizedString,
        type: 'integer'
      },
      dc_max_current_limit: {
        default: 300,
        description: computed(() => String(t("EvManager.config.dc_max_current_limit.description"))) as LocalizedString,
        type: 'integer'
      },
      dc_max_power_limit: {
        default: 150000,
        description: computed(() => String(t("EvManager.config.dc_max_power_limit.description"))) as LocalizedString,
        type: 'integer'
      },
      dc_max_voltage_limit: {
        default: 900,
        description: computed(() => String(t("EvManager.config.dc_max_voltage_limit.description"))) as LocalizedString,
        type: 'integer'
      },
      dc_target_current: {
        default: 5,
        description: computed(() => String(t("EvManager.config.dc_target_current.description"))) as LocalizedString,
        type: 'integer'
      },
      dc_target_voltage: {
        default: 200,
        description: computed(() => String(t("EvManager.config.dc_target_voltage.description"))) as LocalizedString,
        type: 'integer'
      },
      departure_time: {
        default: 86400,
        description: computed(() => String(t("EvManager.config.departure_time.description"))) as LocalizedString,
        type: 'integer'
      },
      e_amount: {
        default: 0,
        description: computed(() => String(t("EvManager.config.e_amount.description"))) as LocalizedString,
        type: 'integer'
      },
      keep_cross_boot_plugin_state: {
        default: false,
        description: computed(() => String(t("EvManager.config.keep_cross_boot_plugin_state.description"))) as LocalizedString,
        type: 'boolean'
      },
      max_current: {
        default: 16,
        description: computed(() => String(t("EvManager.config.max_current.description"))) as LocalizedString,
        type: 'number'
      },
      soc: {
        default: 30,
        description: computed(() => String(t("EvManager.config.soc.description"))) as LocalizedString,
        type: 'integer'
      },
      support_sae_j2847: {
        default: false,
        description: computed(() => String(t("EvManager.config.support_sae_j2847.description"))) as LocalizedString,
        type: 'boolean'
      },
      three_phases: {
        default: true,
        description: computed(() => String(t("EvManager.config.three_phases.description"))) as LocalizedString,
        type: 'boolean'
      }
    },
    description: computed(() => String(t("EvManager.description"))) as LocalizedString,
    enable_external_mqtt: true,
    metadata: {
      authors: [ 'Cornelius Claussen', 'Sebastian Lukas', 'Tobias Marzell' ],
      license: 'https://opensource.org/licenses/Apache-2.0'
    },
    provides: {
      ev_manager: {
        description: computed(() => String(t("EvManager.provides.ev_manager.description"))) as LocalizedString,
        interface: 'ev_manager'
      },
      main: {
        description: computed(() => String(t("EvManager.provides.main.description"))) as LocalizedString,
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
    description: computed(() => String(t("EvSlac.description"))) as LocalizedString,
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
            description: computed(() => String(t("EvSlac.provides.main.config.device.description"))) as LocalizedString,
            type: 'string'
          },
          set_key_timeout_ms: {
            default: 500,
            description: computed(() => String(t("EvSlac.provides.main.config.set_key_timeout_ms.description"))) as LocalizedString,
            type: 'integer'
          }
        },
        description: computed(() => String(t("EvSlac.provides.main.description"))) as LocalizedString,
        interface: 'ev_slac'
      }
    }
  },
  Evse15118D20: {
    config: {
      custom_protocol_namespace: {
        default: '',
        description: computed(() => String(t("Evse15118D20.config.custom_protocol_namespace.description"))) as LocalizedString,
        type: 'string'
      },
      device: {
        default: 'eth0',
        description: computed(() => String(t("Evse15118D20.config.device.description"))) as LocalizedString,
        type: 'string'
      },
      enable_sdp_server: {
        default: true,
        description: computed(() => String(t("Evse15118D20.config.enable_sdp_server.description"))) as LocalizedString,
        type: 'boolean'
      },
      enable_ssl_logging: {
        default: false,
        description: computed(() => String(t("Evse15118D20.config.enable_ssl_logging.description"))) as LocalizedString,
        type: 'boolean'
      },
      enable_tls_key_logging: {
        default: false,
        description: computed(() => String(t("Evse15118D20.config.enable_tls_key_logging.description"))) as LocalizedString,
        type: 'boolean'
      },
      enforce_tls_1_3: {
        default: false,
        description: computed(() => String(t("Evse15118D20.config.enforce_tls_1_3.description"))) as LocalizedString,
        type: 'boolean'
      },
      logging_path: {
        default: '.',
        description: computed(() => String(t("Evse15118D20.config.logging_path.description"))) as LocalizedString,
        type: 'string'
      },
      supported_dynamic_mode: {
        default: true,
        description: computed(() => String(t("Evse15118D20.config.supported_dynamic_mode.description"))) as LocalizedString,
        type: 'boolean'
      },
      supported_mobility_needs_mode_provided_by_secc: {
        default: false,
        description: computed(() => String(t("Evse15118D20.config.supported_mobility_needs_mode_provided_by_secc.description"))) as LocalizedString,
        type: 'boolean'
      },
      supported_scheduled_mode: {
        default: false,
        description: computed(() => String(t("Evse15118D20.config.supported_scheduled_mode.description"))) as LocalizedString,
        type: 'boolean'
      },
      tls_key_logging_path: {
        default: '/tmp',
        description: computed(() => String(t("Evse15118D20.config.tls_key_logging_path.description"))) as LocalizedString,
        type: 'string'
      },
      tls_negotiation_strategy: {
        default: 'ACCEPT_CLIENT_OFFER',
        description: computed(() => String(t("Evse15118D20.config.tls_negotiation_strategy.description"))) as LocalizedString,
        enum: [ 'ACCEPT_CLIENT_OFFER', 'ENFORCE_TLS', 'ENFORCE_NO_TLS' ],
        type: 'string'
      }
    },
    description: computed(() => String(t("Evse15118D20.description"))) as LocalizedString,
    enable_external_mqtt: false,
    metadata: {
      authors: [ 'aw@pionix.de', 'Sebastian Lukas' ],
      license: 'https://opensource.org/licenses/Apache-2.0'
    },
    provides: {
      charger: {
        description: computed(() => String(t("Evse15118D20.provides.charger.description"))) as LocalizedString,
        interface: 'ISO15118_charger'
      },
      extensions: {
        description: computed(() => String(t("Evse15118D20.provides.extensions.description"))) as LocalizedString,
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
        description: computed(() => String(t("EvseManager.config.ac_enforce_hlc.description"))) as LocalizedString,
        type: 'boolean'
      },
      ac_hlc_enabled: {
        default: false,
        description: computed(() => String(t("EvseManager.config.ac_hlc_enabled.description"))) as LocalizedString,
        type: 'boolean'
      },
      ac_hlc_use_5percent: {
        default: false,
        description: computed(() => String(t("EvseManager.config.ac_hlc_use_5percent.description"))) as LocalizedString,
        type: 'boolean'
      },
      ac_nominal_voltage: {
        default: 230,
        description: computed(() => String(t("EvseManager.config.ac_nominal_voltage.description"))) as LocalizedString,
        type: 'number'
      },
      ac_with_soc: {
        default: false,
        description: computed(() => String(t("EvseManager.config.ac_with_soc.description"))) as LocalizedString,
        type: 'boolean'
      },
      autocharge_use_slac_instead_of_hlc: {
        default: false,
        description: computed(() => String(t("EvseManager.config.autocharge_use_slac_instead_of_hlc.description"))) as LocalizedString,
        type: 'boolean'
      },
      cable_check_enable_imd_self_test: {
        default: true,
        description: computed(() => String(t("EvseManager.config.cable_check_enable_imd_self_test.description"))) as LocalizedString,
        type: 'boolean'
      },
      cable_check_wait_below_60V_before_finish: {
        default: true,
        description: computed(() => String(t("EvseManager.config.cable_check_wait_below_60V_before_finish.description"))) as LocalizedString,
        type: 'boolean'
      },
      cable_check_wait_number_of_imd_measurements: {
        default: 1,
        description: computed(() => String(t("EvseManager.config.cable_check_wait_number_of_imd_measurements.description"))) as LocalizedString,
        type: 'integer'
      },
      central_contract_validation_allowed: {
        default: false,
        description: computed(() => String(t("EvseManager.config.central_contract_validation_allowed.description"))) as LocalizedString,
        type: 'boolean'
      },
      charge_mode: {
        default: 'AC',
        description: computed(() => String(t("EvseManager.config.charge_mode.description"))) as LocalizedString,
        enum: [ 'AC', 'DC' ],
        type: 'string'
      },
      connector_id: {
        description: computed(() => String(t("EvseManager.config.connector_id.description"))) as LocalizedString,
        type: 'integer'
      },
      connector_type: {
        default: 'Unknown',
        description: computed(() => String(t("EvseManager.config.connector_type.description"))) as LocalizedString,
        type: 'string'
      },
      contract_certificate_installation_enabled: {
        default: true,
        description: computed(() => String(t("EvseManager.config.contract_certificate_installation_enabled.description"))) as LocalizedString,
        type: 'boolean'
      },
      dbg_hlc_auth_after_tstep: {
        default: false,
        description: computed(() => String(t("EvseManager.config.dbg_hlc_auth_after_tstep.description"))) as LocalizedString,
        type: 'boolean'
      },
      dc_isolation_voltage_V: {
        default: 0,
        description: computed(() => String(t("EvseManager.config.dc_isolation_voltage_V.description"))) as LocalizedString,
        type: 'integer'
      },
      disable_authentication: {
        default: false,
        description: computed(() => String(t("EvseManager.config.disable_authentication.description"))) as LocalizedString,
        type: 'boolean'
      },
      enable_autocharge: {
        default: false,
        description: computed(() => String(t("EvseManager.config.enable_autocharge.description"))) as LocalizedString,
        type: 'boolean'
      },
      ev_receipt_required: {
        default: false,
        description: computed(() => String(t("EvseManager.config.ev_receipt_required.description"))) as LocalizedString,
        type: 'boolean'
      },
      evse_id: {
        default: 'DE*PNX*E1234567*1',
        description: computed(() => String(t("EvseManager.config.evse_id.description"))) as LocalizedString,
        type: 'string'
      },
      evse_id_din: {
        default: '49A80737A45678',
        description: computed(() => String(t("EvseManager.config.evse_id_din.description"))) as LocalizedString,
        type: 'string'
      },
      external_ready_to_start_charging: {
        default: false,
        description: computed(() => String(t("EvseManager.config.external_ready_to_start_charging.description"))) as LocalizedString,
        type: 'boolean'
      },
      fail_on_powermeter_errors: {
        default: true,
        description: computed(() => String(t("EvseManager.config.fail_on_powermeter_errors.description"))) as LocalizedString,
        type: 'boolean'
      },
      hack_allow_bpt_with_iso2: {
        default: false,
        description: computed(() => String(t("EvseManager.config.hack_allow_bpt_with_iso2.description"))) as LocalizedString,
        type: 'boolean'
      },
      hack_fix_hlc_integer_current_requests: {
        default: false,
        description: computed(() => String(t("EvseManager.config.hack_fix_hlc_integer_current_requests.description"))) as LocalizedString,
        type: 'boolean'
      },
      hack_pause_imd_during_precharge: {
        default: false,
        description: computed(() => String(t("EvseManager.config.hack_pause_imd_during_precharge.description"))) as LocalizedString,
        type: 'boolean'
      },
      hack_present_current_offset: {
        default: 0,
        description: computed(() => String(t("EvseManager.config.hack_present_current_offset.description"))) as LocalizedString,
        type: 'integer'
      },
      hack_simplified_mode_limit_10A: {
        default: false,
        description: computed(() => String(t("EvseManager.config.hack_simplified_mode_limit_10A.description"))) as LocalizedString,
        type: 'boolean'
      },
      hack_skoda_enyaq: {
        default: false,
        description: computed(() => String(t("EvseManager.config.hack_skoda_enyaq.description"))) as LocalizedString,
        type: 'boolean'
      },
      hack_sleep_in_cable_check: {
        default: 0,
        description: computed(() => String(t("EvseManager.config.hack_sleep_in_cable_check.description"))) as LocalizedString,
        type: 'integer'
      },
      hack_sleep_in_cable_check_volkswagen: {
        default: 0,
        description: computed(() => String(t("EvseManager.config.hack_sleep_in_cable_check_volkswagen.description"))) as LocalizedString,
        type: 'integer'
      },
      has_ventilation: {
        default: true,
        description: computed(() => String(t("EvseManager.config.has_ventilation.description"))) as LocalizedString,
        type: 'boolean'
      },
      initial_meter_value_timeout_ms: {
        default: 5000,
        description: computed(() => String(t("EvseManager.config.initial_meter_value_timeout_ms.description"))) as LocalizedString,
        type: 'integer'
      },
      inoperative_error_use_vendor_id: {
        default: false,
        description: computed(() => String(t("EvseManager.config.inoperative_error_use_vendor_id.description"))) as LocalizedString,
        type: 'boolean'
      },
      lock_connector_in_state_b: {
        default: true,
        description: computed(() => String(t("EvseManager.config.lock_connector_in_state_b.description"))) as LocalizedString,
        type: 'boolean'
      },
      logfile_suffix: {
        default: 'session_uuid',
        description: computed(() => String(t("EvseManager.config.logfile_suffix.description"))) as LocalizedString,
        type: 'string'
      },
      max_current_export_A: {
        default: 32,
        description: computed(() => String(t("EvseManager.config.max_current_export_A.description"))) as LocalizedString,
        type: 'number'
      },
      max_current_import_A: {
        default: 32,
        description: computed(() => String(t("EvseManager.config.max_current_import_A.description"))) as LocalizedString,
        type: 'number'
      },
      payment_enable_contract: {
        default: true,
        description: computed(() => String(t("EvseManager.config.payment_enable_contract.description"))) as LocalizedString,
        type: 'boolean'
      },
      payment_enable_eim: {
        default: true,
        description: computed(() => String(t("EvseManager.config.payment_enable_eim.description"))) as LocalizedString,
        type: 'boolean'
      },
      raise_mrec9: {
        default: false,
        description: computed(() => String(t("EvseManager.config.raise_mrec9.description"))) as LocalizedString,
        type: 'boolean'
      },
      request_zero_power_in_idle: {
        default: false,
        description: computed(() => String(t("EvseManager.config.request_zero_power_in_idle.description"))) as LocalizedString,
        type: 'boolean'
      },
      sae_j2847_2_bpt_enabled: {
        default: false,
        description: computed(() => String(t("EvseManager.config.sae_j2847_2_bpt_enabled.description"))) as LocalizedString,
        type: 'boolean'
      },
      sae_j2847_2_bpt_mode: {
        default: 'V2G',
        description: computed(() => String(t("EvseManager.config.sae_j2847_2_bpt_mode.description"))) as LocalizedString,
        enum: [ 'V2H', 'V2G' ],
        type: 'string'
      },
      session_id_type: {
        default: 'UUID',
        description: computed(() => String(t("EvseManager.config.session_id_type.description"))) as LocalizedString,
        enum: [ 'UUID', 'UUID_BASE64', 'SHORT_BASE64' ],
        type: 'string'
      },
      session_logging: {
        default: false,
        description: computed(() => String(t("EvseManager.config.session_logging.description"))) as LocalizedString,
        type: 'boolean'
      },
      session_logging_path: {
        default: '/tmp',
        description: computed(() => String(t("EvseManager.config.session_logging_path.description"))) as LocalizedString,
        type: 'string'
      },
      session_logging_xml: {
        default: true,
        description: computed(() => String(t("EvseManager.config.session_logging_xml.description"))) as LocalizedString,
        type: 'boolean'
      },
      sleep_before_enabling_pwm_hlc_mode_ms: {
        default: 500,
        description: computed(() => String(t("EvseManager.config.sleep_before_enabling_pwm_hlc_mode_ms.description"))) as LocalizedString,
        type: 'integer'
      },
      soft_over_current_measurement_noise_A: {
        default: 0.5,
        description: computed(() => String(t("EvseManager.config.soft_over_current_measurement_noise_A.description"))) as LocalizedString,
        type: 'number'
      },
      soft_over_current_timeout_ms: {
        default: 7000,
        description: computed(() => String(t("EvseManager.config.soft_over_current_timeout_ms.description"))) as LocalizedString,
        minimum: 6000,
        type: 'integer'
      },
      soft_over_current_tolerance_percent: {
        default: 10,
        description: computed(() => String(t("EvseManager.config.soft_over_current_tolerance_percent.description"))) as LocalizedString,
        type: 'number'
      },
      state_F_after_fault_ms: {
        default: 300,
        description: computed(() => String(t("EvseManager.config.state_F_after_fault_ms.description"))) as LocalizedString,
        type: 'integer'
      },
      switch_3ph1ph_cp_state: {
        default: 'X1',
        description: computed(() => String(t("EvseManager.config.switch_3ph1ph_cp_state.description"))) as LocalizedString,
        enum: [ 'X1', 'F' ],
        type: 'string'
      },
      switch_3ph1ph_delay_s: {
        default: 10,
        description: computed(() => String(t("EvseManager.config.switch_3ph1ph_delay_s.description"))) as LocalizedString,
        type: 'integer'
      },
      uk_smartcharging_random_delay_at_any_change: {
        default: true,
        description: computed(() => String(t("EvseManager.config.uk_smartcharging_random_delay_at_any_change.description"))) as LocalizedString,
        type: 'boolean'
      },
      uk_smartcharging_random_delay_enable: {
        default: false,
        description: computed(() => String(t("EvseManager.config.uk_smartcharging_random_delay_enable.description"))) as LocalizedString,
        type: 'boolean'
      },
      uk_smartcharging_random_delay_max_duration: {
        default: 600,
        description: computed(() => String(t("EvseManager.config.uk_smartcharging_random_delay_max_duration.description"))) as LocalizedString,
        type: 'integer'
      }
    },
    description: computed(() => String(t("EvseManager.description"))) as LocalizedString,
    enable_external_mqtt: true,
    enable_telemetry: true,
    metadata: {
      authors: [ 'Cornelius Claussen', 'Anton Woellert' ],
      license: 'https://opensource.org/licenses/Apache-2.0'
    },
    provides: {
      energy_grid: {
        description: computed(() => String(t("EvseManager.provides.energy_grid.description"))) as LocalizedString,
        interface: 'energy'
      },
      evse: {
        description: computed(() => String(t("EvseManager.provides.evse.description"))) as LocalizedString,
        interface: 'evse_manager'
      },
      random_delay: {
        description: computed(() => String(t("EvseManager.provides.random_delay.description"))) as LocalizedString,
        interface: 'uk_random_delay'
      },
      token_provider: {
        description: computed(() => String(t("EvseManager.provides.token_provider.description"))) as LocalizedString,
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
        description: computed(() => String(t("EvseSecurity.config.csms_ca_bundle.description"))) as LocalizedString,
        type: 'string'
      },
      csms_leaf_cert_directory: {
        default: 'client/csms',
        description: computed(() => String(t("EvseSecurity.config.csms_leaf_cert_directory.description"))) as LocalizedString,
        type: 'string'
      },
      csms_leaf_key_directory: {
        default: 'client/csms',
        description: computed(() => String(t("EvseSecurity.config.csms_leaf_key_directory.description"))) as LocalizedString,
        type: 'string'
      },
      mf_ca_bundle: {
        default: 'ca/mf/MF_ROOT_CA.pem',
        description: computed(() => String(t("EvseSecurity.config.mf_ca_bundle.description"))) as LocalizedString,
        type: 'string'
      },
      mo_ca_bundle: {
        default: 'ca/mo/MO_ROOT_CA.pem',
        description: computed(() => String(t("EvseSecurity.config.mo_ca_bundle.description"))) as LocalizedString,
        type: 'string'
      },
      private_key_password: {
        default: '',
        description: computed(() => String(t("EvseSecurity.config.private_key_password.description"))) as LocalizedString,
        type: 'string'
      },
      secc_leaf_cert_directory: {
        default: 'client/cso',
        description: computed(() => String(t("EvseSecurity.config.secc_leaf_cert_directory.description"))) as LocalizedString,
        type: 'string'
      },
      secc_leaf_key_directory: {
        default: 'client/cso',
        description: computed(() => String(t("EvseSecurity.config.secc_leaf_key_directory.description"))) as LocalizedString,
        type: 'string'
      },
      v2g_ca_bundle: {
        default: 'ca/v2g/V2G_ROOT_CA.pem',
        description: computed(() => String(t("EvseSecurity.config.v2g_ca_bundle.description"))) as LocalizedString,
        type: 'string'
      }
    },
    description: computed(() => String(t("EvseSecurity.description"))) as LocalizedString,
    enable_external_mqtt: false,
    enable_telemetry: false,
    metadata: {
      authors: [ 'Piet Gömpel' ],
      license: 'https://spdx.org/licenses/Apache-2.0.html'
    },
    provides: {
      main: {
        description: computed(() => String(t("EvseSecurity.provides.main.description"))) as LocalizedString,
        interface: 'evse_security'
      }
    }
  },
  EvseSlac: {
    description: computed(() => String(t("EvseSlac.description"))) as LocalizedString,
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
            description: computed(() => String(t("EvseSlac.provides.main.config.ac_mode_five_percent.description"))) as LocalizedString,
            type: 'boolean'
          },
          chip_reset_delay_ms: {
            default: 100,
            description: computed(() => String(t("EvseSlac.provides.main.config.chip_reset_delay_ms.description"))) as LocalizedString,
            type: 'integer'
          },
          chip_reset_timeout_ms: {
            default: 500,
            description: computed(() => String(t("EvseSlac.provides.main.config.chip_reset_timeout_ms.description"))) as LocalizedString,
            type: 'integer'
          },
          debug_simulate_failed_matching: {
            default: false,
            description: computed(() => String(t("EvseSlac.provides.main.config.debug_simulate_failed_matching.description"))) as LocalizedString,
            type: 'boolean'
          },
          device: {
            default: 'eth1',
            description: computed(() => String(t("EvseSlac.provides.main.config.device.description"))) as LocalizedString,
            type: 'string'
          },
          do_chip_reset: {
            default: false,
            description: computed(() => String(t("EvseSlac.provides.main.config.do_chip_reset.description"))) as LocalizedString,
            type: 'boolean'
          },
          link_status_detection: {
            default: false,
            description: computed(() => String(t("EvseSlac.provides.main.config.link_status_detection.description"))) as LocalizedString,
            type: 'boolean'
          },
          link_status_retry_ms: {
            default: 100,
            description: computed(() => String(t("EvseSlac.provides.main.config.link_status_retry_ms.description"))) as LocalizedString,
            type: 'integer'
          },
          link_status_timeout_ms: {
            default: 10000,
            description: computed(() => String(t("EvseSlac.provides.main.config.link_status_timeout_ms.description"))) as LocalizedString,
            type: 'integer'
          },
          number_of_sounds: {
            default: 10,
            description: computed(() => String(t("EvseSlac.provides.main.config.number_of_sounds.description"))) as LocalizedString,
            type: 'integer'
          },
          publish_mac_on_first_parm_req: {
            default: false,
            description: computed(() => String(t("EvseSlac.provides.main.config.publish_mac_on_first_parm_req.description"))) as LocalizedString,
            type: 'boolean'
          },
          publish_mac_on_match_cnf: {
            default: true,
            description: computed(() => String(t("EvseSlac.provides.main.config.publish_mac_on_match_cnf.description"))) as LocalizedString,
            type: 'boolean'
          },
          reset_instead_of_fail: {
            default: true,
            description: computed(() => String(t("EvseSlac.provides.main.config.reset_instead_of_fail.description"))) as LocalizedString,
            type: 'boolean'
          },
          set_key_timeout_ms: {
            default: 1000,
            description: computed(() => String(t("EvseSlac.provides.main.config.set_key_timeout_ms.description"))) as LocalizedString,
            type: 'integer'
          },
          sounding_attenuation_adjustment: {
            default: 0,
            description: computed(() => String(t("EvseSlac.provides.main.config.sounding_attenuation_adjustment.description"))) as LocalizedString,
            type: 'integer'
          }
        },
        description: computed(() => String(t("EvseSlac.provides.main.description"))) as LocalizedString,
        interface: 'slac'
      }
    }
  },
  EvseV2G: {
    config: {
      auth_timeout_eim: {
        default: 300,
        description: computed(() => String(t("EvseV2G.config.auth_timeout_eim.description"))) as LocalizedString,
        type: 'integer'
      },
      auth_timeout_pnc: {
        default: 55,
        description: computed(() => String(t("EvseV2G.config.auth_timeout_pnc.description"))) as LocalizedString,
        type: 'integer'
      },
      device: {
        default: 'eth0',
        description: computed(() => String(t("EvseV2G.config.device.description"))) as LocalizedString,
        type: 'string'
      },
      enable_sdp_server: {
        default: true,
        description: computed(() => String(t("EvseV2G.config.enable_sdp_server.description"))) as LocalizedString,
        type: 'boolean'
      },
      supported_DIN70121: {
        default: true,
        description: computed(() => String(t("EvseV2G.config.supported_DIN70121.description"))) as LocalizedString,
        type: 'boolean'
      },
      supported_ISO15118_2: {
        default: true,
        description: computed(() => String(t("EvseV2G.config.supported_ISO15118_2.description"))) as LocalizedString,
        type: 'boolean'
      },
      terminate_connection_on_failed_response: {
        default: false,
        description: computed(() => String(t("EvseV2G.config.terminate_connection_on_failed_response.description"))) as LocalizedString,
        type: 'boolean'
      },
      tls_key_logging: {
        default: false,
        description: computed(() => String(t("EvseV2G.config.tls_key_logging.description"))) as LocalizedString,
        type: 'boolean'
      },
      tls_key_logging_path: {
        default: '/tmp',
        description: computed(() => String(t("EvseV2G.config.tls_key_logging_path.description"))) as LocalizedString,
        type: 'string'
      },
      tls_security: {
        default: 'prohibit',
        description: computed(() => String(t("EvseV2G.config.tls_security.description"))) as LocalizedString,
        enum: [ 'prohibit', 'allow', 'force' ],
        type: 'string'
      },
      tls_timeout: {
        default: 15000,
        description: computed(() => String(t("EvseV2G.config.tls_timeout.description"))) as LocalizedString,
        type: 'integer'
      },
      verify_contract_cert_chain: {
        default: false,
        description: computed(() => String(t("EvseV2G.config.verify_contract_cert_chain.description"))) as LocalizedString,
        type: 'boolean'
      }
    },
    description: computed(() => String(t("EvseV2G.description"))) as LocalizedString,
    enable_external_mqtt: true,
    metadata: {
      authors: [ 'Fabian Hartung', 'Mohannad Oraby', 'Sebastian Lukas' ],
      license: 'https://opensource.org/licenses/Apache-2.0'
    },
    provides: {
      charger: {
        description: computed(() => String(t("EvseV2G.provides.charger.description"))) as LocalizedString,
        interface: 'ISO15118_charger'
      },
      extensions: {
        description: computed(() => String(t("EvseV2G.provides.extensions.description"))) as LocalizedString,
        interface: 'iso15118_extensions'
      }
    },
    requires: { security: { interface: 'evse_security' } }
  },
  Example: {
    description: computed(() => String(t("Example.description"))) as LocalizedString,
    enable_external_mqtt: true,
    metadata: {
      authors: [ 'Kai-Uwe Hermann', 'Andreas Heinrich' ],
      license: 'https://opensource.org/licenses/Apache-2.0'
    },
    provides: {
      example: {
        config: {
          current: {
            description: computed(() => String(t("Example.provides.example.config.current.description"))) as LocalizedString,
            maximum: 60,
            minimum: 1,
            type: 'number'
          },
          enum_test: {
            description: computed(() => String(t("Example.provides.example.config.enum_test.description"))) as LocalizedString,
            enum: [ 'one', 'two', 'three' ],
            type: 'string'
          },
          enum_test2: {
            description: computed(() => String(t("Example.provides.example.config.enum_test2.description"))) as LocalizedString,
            enum: [ 1, 2, 3 ],
            type: 'integer'
          }
        },
        description: computed(() => String(t("Example.provides.example.description"))) as LocalizedString,
        interface: 'example'
      },
      store: {
        description: computed(() => String(t("Example.provides.store.description"))) as LocalizedString,
        interface: 'kvs'
      }
    },
    requires: { kvs: { interface: 'kvs' } }
  },
  ExampleErrorGlobalSubscriber: {
    description: computed(() => String(t("ExampleErrorGlobalSubscriber.description"))) as LocalizedString,
    enable_global_errors: true,
    metadata: {
      authors: [ 'Andreas Heinrich' ],
      license: 'https://opensource.org/licenses/Apache-2.0'
    },
    provides: {
      example_global_subscriber: {
        description: computed(() => String(t("ExampleErrorGlobalSubscriber.provides.example_global_subscriber.description"))) as LocalizedString,
        interface: 'example_error_framework'
      }
    }
  },
  ExampleErrorRaiser: {
    description: computed(() => String(t("ExampleErrorRaiser.description"))) as LocalizedString,
    metadata: {
      authors: [ 'Andreas Heinrich' ],
      license: 'https://opensource.org/licenses/Apache-2.0'
    },
    provides: {
      example_raiser: {
        description: computed(() => String(t("ExampleErrorRaiser.provides.example_raiser.description"))) as LocalizedString,
        interface: 'example_error_framework'
      }
    }
  },
  ExampleErrorSubscriber: {
    description: computed(() => String(t("ExampleErrorSubscriber.description"))) as LocalizedString,
    metadata: {
      authors: [ 'Andreas Heinrich' ],
      license: 'https://opensource.org/licenses/Apache-2.0'
    },
    provides: {
      example_subscriber: {
        description: computed(() => String(t("ExampleErrorSubscriber.provides.example_subscriber.description"))) as LocalizedString,
        interface: 'example_error_framework'
      }
    },
    requires: { example_raiser: { interface: 'example_error_framework' } }
  },
  ExampleUser: {
    description: computed(() => String(t("ExampleUser.description"))) as LocalizedString,
    metadata: {
      authors: [ 'Kai-Uwe Hermann', 'Andreas Heinrich' ],
      license: 'https://opensource.org/licenses/Apache-2.0'
    },
    provides: {
      example_user: {
        description: computed(() => String(t("ExampleUser.provides.example_user.description"))) as LocalizedString,
        interface: 'example_user'
      }
    },
    requires: { example: { interface: 'example' } }
  },
  GenericPowermeter: {
    description: computed(() => String(t("GenericPowermeter.description"))) as LocalizedString,
    metadata: {
      authors: [ 'Lars Dieckmann' ],
      license: 'https://opensource.org/licenses/Apache-2.0'
    },
    provides: {
      main: {
        config: {
          modbus_base_address: {
            default: 30001,
            description: computed(() => String(t("GenericPowermeter.provides.main.config.modbus_base_address.description"))) as LocalizedString,
            maximum: 65535,
            minimum: 0,
            type: 'integer'
          },
          model: {
            default: 'test_dummy',
            description: computed(() => String(t("GenericPowermeter.provides.main.config.model.description"))) as LocalizedString,
            type: 'string'
          },
          powermeter_device_id: {
            default: 1,
            description: computed(() => String(t("GenericPowermeter.provides.main.config.powermeter_device_id.description"))) as LocalizedString,
            maximum: 247,
            minimum: 1,
            type: 'integer'
          }
        },
        description: computed(() => String(t("GenericPowermeter.provides.main.description"))) as LocalizedString,
        interface: 'powermeter'
      }
    },
    requires: { serial_comm_hub: { interface: 'serial_communication_hub' } }
  },
  IMDSimulator: {
    description: computed(() => String(t("IMDSimulator.description"))) as LocalizedString,
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
            description: computed(() => String(t("IMDSimulator.provides.main.config.interval.description"))) as LocalizedString,
            type: 'integer'
          },
          resistance_F_Ohm: {
            default: 900000,
            description: computed(() => String(t("IMDSimulator.provides.main.config.resistance_F_Ohm.description"))) as LocalizedString,
            type: 'number'
          },
          selftest_success: {
            default: true,
            description: computed(() => String(t("IMDSimulator.provides.main.config.selftest_success.description"))) as LocalizedString,
            type: 'boolean'
          }
        },
        description: computed(() => String(t("IMDSimulator.provides.main.description"))) as LocalizedString,
        interface: 'isolation_monitor'
      }
    }
  },
  IsabellenhuetteIemDcr: {
    config: {
      CI: {
        default: '1234',
        description: computed(() => String(t("IsabellenhuetteIemDcr.config.CI.description"))) as LocalizedString,
        type: 'string'
      },
      CT: {
        default: 'EVSEID',
        description: computed(() => String(t("IsabellenhuetteIemDcr.config.CT.description"))) as LocalizedString,
        type: 'string'
      },
      TT_initial: {
        default: '',
        description: computed(() => String(t("IsabellenhuetteIemDcr.config.TT_initial.description"))) as LocalizedString,
        type: 'string'
      },
      US: {
        default: false,
        description: computed(() => String(t("IsabellenhuetteIemDcr.config.US.description"))) as LocalizedString,
        type: 'boolean'
      },
      datetime_resync_interval: {
        default: 2,
        description: computed(() => String(t("IsabellenhuetteIemDcr.config.datetime_resync_interval.description"))) as LocalizedString,
        maximum: 24,
        minimum: 1,
        type: 'integer'
      },
      ip_address: {
        default: '192.168.60.12',
        description: computed(() => String(t("IsabellenhuetteIemDcr.config.ip_address.description"))) as LocalizedString,
        type: 'string'
      },
      port_http: {
        default: 80,
        description: computed(() => String(t("IsabellenhuetteIemDcr.config.port_http.description"))) as LocalizedString,
        maximum: 65535,
        minimum: 0,
        type: 'integer'
      },
      resilience_initial_connection_retry_delay: {
        default: 10000,
        description: computed(() => String(t("IsabellenhuetteIemDcr.config.resilience_initial_connection_retry_delay.description"))) as LocalizedString,
        maximum: 65535,
        minimum: 1000,
        type: 'integer'
      },
      resilience_transaction_request_retries: {
        default: 3,
        description: computed(() => String(t("IsabellenhuetteIemDcr.config.resilience_transaction_request_retries.description"))) as LocalizedString,
        maximum: 5,
        minimum: 0,
        type: 'integer'
      },
      resilience_transaction_request_retry_delay: {
        default: 250,
        description: computed(() => String(t("IsabellenhuetteIemDcr.config.resilience_transaction_request_retry_delay.description"))) as LocalizedString,
        maximum: 1000,
        minimum: 200,
        type: 'integer'
      },
      timezone: {
        default: '+0100',
        description: computed(() => String(t("IsabellenhuetteIemDcr.config.timezone.description"))) as LocalizedString,
        type: 'string'
      },
      timezone_handle_DST: {
        default: true,
        description: computed(() => String(t("IsabellenhuetteIemDcr.config.timezone_handle_DST.description"))) as LocalizedString,
        type: 'boolean'
      }
    },
    description: computed(() => String(t("IsabellenhuetteIemDcr.description"))) as LocalizedString,
    metadata: {
      authors: [ 'Josef Herbert <josef.herbert@isabellenhuette.com>' ],
      license: 'https://opensource.org/licenses/Apache-2.0'
    },
    provides: {
      main: {
        description: computed(() => String(t("IsabellenhuetteIemDcr.provides.main.description"))) as LocalizedString,
        interface: 'powermeter'
      }
    }
  },
  IsoMux: {
    config: {
      device: {
        default: 'eth0',
        description: computed(() => String(t("IsoMux.config.device.description"))) as LocalizedString,
        type: 'string'
      },
      proxy_port_iso2: {
        default: 61341,
        description: computed(() => String(t("IsoMux.config.proxy_port_iso2.description"))) as LocalizedString,
        type: 'integer'
      },
      proxy_port_iso20: {
        default: 50000,
        description: computed(() => String(t("IsoMux.config.proxy_port_iso20.description"))) as LocalizedString,
        type: 'integer'
      },
      tls_key_logging: {
        default: false,
        description: computed(() => String(t("IsoMux.config.tls_key_logging.description"))) as LocalizedString,
        type: 'boolean'
      },
      tls_security: {
        default: 'prohibit',
        description: computed(() => String(t("IsoMux.config.tls_security.description"))) as LocalizedString,
        enum: [ 'prohibit', 'allow', 'force' ],
        type: 'string'
      },
      tls_timeout: {
        default: 15000,
        description: computed(() => String(t("IsoMux.config.tls_timeout.description"))) as LocalizedString,
        type: 'integer'
      }
    },
    description: computed(() => String(t("IsoMux.description"))) as LocalizedString,
    metadata: {
      authors: [ 'Cornelius Claussen' ],
      license: 'https://opensource.org/licenses/Apache-2.0'
    },
    provides: {
      charger: {
        description: computed(() => String(t("IsoMux.provides.charger.description"))) as LocalizedString,
        interface: 'ISO15118_charger'
      },
      extensions: {
        description: computed(() => String(t("IsoMux.provides.extensions.description"))) as LocalizedString,
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
        description: computed(() => String(t("LemDCBM400600.config.SC.description"))) as LocalizedString,
        type: 'integer'
      },
      UD: {
        default: '',
        description: computed(() => String(t("LemDCBM400600.config.UD.description"))) as LocalizedString,
        type: 'string'
      },
      UV: {
        default: '',
        description: computed(() => String(t("LemDCBM400600.config.UV.description"))) as LocalizedString,
        type: 'string'
      },
      cable_id: {
        default: 0,
        description: computed(() => String(t("LemDCBM400600.config.cable_id.description"))) as LocalizedString,
        type: 'integer'
      },
      command_timeout_ms: {
        default: 5000,
        description: computed(() => String(t("LemDCBM400600.config.command_timeout_ms.description"))) as LocalizedString,
        maximum: 20000,
        minimum: 1000,
        type: 'integer'
      },
      ip_address: {
        description: computed(() => String(t("LemDCBM400600.config.ip_address.description"))) as LocalizedString,
        type: 'string'
      },
      meter_dst: {
        default: '{"activated": false, "offset": 60, "start": {"order": "last", "day": "sunday", "month": "march", "hour": "T01:00Z"}, "end": {"order": "last", "day": "sunday", "month": "october", "hour": "T01:00Z" }}',
        description: computed(() => String(t("LemDCBM400600.config.meter_dst.description"))) as LocalizedString,
        type: 'string'
      },
      meter_timezone: {
        default: '+00:00',
        description: computed(() => String(t("LemDCBM400600.config.meter_timezone.description"))) as LocalizedString,
        type: 'string'
      },
      meter_tls_certificate: {
        default: '',
        description: computed(() => String(t("LemDCBM400600.config.meter_tls_certificate.description"))) as LocalizedString,
        type: 'string'
      },
      ntp_server_1_ip_addr: {
        default: '',
        description: computed(() => String(t("LemDCBM400600.config.ntp_server_1_ip_addr.description"))) as LocalizedString,
        type: 'string'
      },
      ntp_server_1_port: {
        default: 123,
        description: computed(() => String(t("LemDCBM400600.config.ntp_server_1_port.description"))) as LocalizedString,
        type: 'integer'
      },
      ntp_server_2_ip_addr: {
        default: '',
        description: computed(() => String(t("LemDCBM400600.config.ntp_server_2_ip_addr.description"))) as LocalizedString,
        type: 'string'
      },
      ntp_server_2_port: {
        default: 123,
        description: computed(() => String(t("LemDCBM400600.config.ntp_server_2_port.description"))) as LocalizedString,
        type: 'integer'
      },
      port: {
        default: 80,
        description: computed(() => String(t("LemDCBM400600.config.port.description"))) as LocalizedString,
        type: 'integer'
      },
      resilience_initial_connection_retries: {
        default: 25,
        description: computed(() => String(t("LemDCBM400600.config.resilience_initial_connection_retries.description"))) as LocalizedString,
        type: 'integer'
      },
      resilience_initial_connection_retry_delay: {
        default: 10000,
        description: computed(() => String(t("LemDCBM400600.config.resilience_initial_connection_retry_delay.description"))) as LocalizedString,
        type: 'integer'
      },
      resilience_transaction_request_retries: {
        default: 3,
        description: computed(() => String(t("LemDCBM400600.config.resilience_transaction_request_retries.description"))) as LocalizedString,
        type: 'integer'
      },
      resilience_transaction_request_retry_delay: {
        default: 250,
        description: computed(() => String(t("LemDCBM400600.config.resilience_transaction_request_retry_delay.description"))) as LocalizedString,
        type: 'integer'
      },
      tariff_id: {
        default: 0,
        description: computed(() => String(t("LemDCBM400600.config.tariff_id.description"))) as LocalizedString,
        type: 'integer'
      }
    },
    description: computed(() => String(t("LemDCBM400600.description"))) as LocalizedString,
    metadata: {
      authors: [
        'Valentin Dimov, valentin.dimov@pionix.de',
        'Fabian Klemm, fabian.klemm@pionix.de'
      ],
      license: 'https://opensource.org/licenses/Apache-2.0'
    },
    provides: {
      main: {
        description: computed(() => String(t("LemDCBM400600.provides.main.description"))) as LocalizedString,
        interface: 'powermeter'
      }
    }
  },
  MicroMegaWattBSP: {
    config: {
      baud_rate: {
        default: 115200,
        description: computed(() => String(t("MicroMegaWattBSP.config.baud_rate.description"))) as LocalizedString,
        maximum: 230400,
        minimum: 9600,
        type: 'integer'
      },
      connector_id: {
        default: 1,
        description: computed(() => String(t("MicroMegaWattBSP.config.connector_id.description"))) as LocalizedString,
        type: 'integer'
      },
      dc_max_voltage: {
        default: 1000,
        description: computed(() => String(t("MicroMegaWattBSP.config.dc_max_voltage.description"))) as LocalizedString,
        maximum: 1000,
        minimum: 50,
        type: 'integer'
      },
      reset_gpio: {
        default: 27,
        description: computed(() => String(t("MicroMegaWattBSP.config.reset_gpio.description"))) as LocalizedString,
        type: 'integer'
      },
      reset_gpio_chip: {
        default: 'gpiochip0',
        description: computed(() => String(t("MicroMegaWattBSP.config.reset_gpio_chip.description"))) as LocalizedString,
        type: 'string'
      },
      serial_port: {
        default: '/dev/ttyUSB0',
        description: computed(() => String(t("MicroMegaWattBSP.config.serial_port.description"))) as LocalizedString,
        type: 'string'
      }
    },
    description: computed(() => String(t("MicroMegaWattBSP.description"))) as LocalizedString,
    enable_external_mqtt: true,
    metadata: {
      authors: [ 'Cornelius Claussen' ],
      license: 'https://opensource.org/licenses/Apache-2.0'
    },
    provides: {
      board_support: {
        description: computed(() => String(t("MicroMegaWattBSP.provides.board_support.description"))) as LocalizedString,
        interface: 'evse_board_support'
      },
      dc_supply: {
        description: computed(() => String(t("MicroMegaWattBSP.provides.dc_supply.description"))) as LocalizedString,
        interface: 'power_supply_DC'
      },
      powermeter: {
        description: computed(() => String(t("MicroMegaWattBSP.provides.powermeter.description"))) as LocalizedString,
        interface: 'powermeter'
      }
    }
  },
  OCPP: {
    config: {
      ChargePointConfigPath: {
        default: 'ocpp-config.json',
        description: computed(() => String(t("OCPP.config.ChargePointConfigPath.description"))) as LocalizedString,
        type: 'string'
      },
      DatabasePath: {
        default: '/tmp/ocpp_1_6_charge_point',
        description: computed(() => String(t("OCPP.config.DatabasePath.description"))) as LocalizedString,
        type: 'string'
      },
      DelayOcppStart: {
        default: 0,
        description: computed(() => String(t("OCPP.config.DelayOcppStart.description"))) as LocalizedString,
        type: 'integer'
      },
      EnableExternalWebsocketControl: {
        default: false,
        description: computed(() => String(t("OCPP.config.EnableExternalWebsocketControl.description"))) as LocalizedString,
        type: 'boolean'
      },
      MessageLogPath: {
        default: '/tmp/everest_ocpp_logs',
        description: computed(() => String(t("OCPP.config.MessageLogPath.description"))) as LocalizedString,
        type: 'string'
      },
      MessageQueueResumeDelay: {
        default: 0,
        description: computed(() => String(t("OCPP.config.MessageQueueResumeDelay.description"))) as LocalizedString,
        type: 'integer'
      },
      PublishChargingScheduleDurationS: {
        default: 600,
        description: computed(() => String(t("OCPP.config.PublishChargingScheduleDurationS.description"))) as LocalizedString,
        type: 'integer'
      },
      PublishChargingScheduleIntervalS: {
        default: 30,
        description: computed(() => String(t("OCPP.config.PublishChargingScheduleIntervalS.description"))) as LocalizedString,
        type: 'integer'
      },
      RequestCompositeScheduleUnit: {
        default: 'A',
        description: computed(() => String(t("OCPP.config.RequestCompositeScheduleUnit.description"))) as LocalizedString,
        type: 'string'
      },
      ResetStopDelay: {
        default: 0,
        description: computed(() => String(t("OCPP.config.ResetStopDelay.description"))) as LocalizedString,
        type: 'integer'
      },
      UserConfigPath: {
        default: 'user_config.json',
        description: computed(() => String(t("OCPP.config.UserConfigPath.description"))) as LocalizedString,
        type: 'string'
      }
    },
    description: computed(() => String(t("OCPP.description"))) as LocalizedString,
    enable_external_mqtt: true,
    enable_global_errors: true,
    metadata: {
      authors: [ 'Kai-Uwe Hermann', 'Piet Gömpel' ],
      license: 'https://opensource.org/licenses/Apache-2.0'
    },
    provides: {
      auth_provider: {
        description: computed(() => String(t("OCPP.provides.auth_provider.description"))) as LocalizedString,
        interface: 'auth_token_provider'
      },
      auth_validator: {
        description: computed(() => String(t("OCPP.provides.auth_validator.description"))) as LocalizedString,
        interface: 'auth_token_validator'
      },
      data_transfer: {
        description: computed(() => String(t("OCPP.provides.data_transfer.description"))) as LocalizedString,
        interface: 'ocpp_data_transfer'
      },
      main: {
        description: computed(() => String(t("OCPP.provides.main.description"))) as LocalizedString,
        interface: 'ocpp_1_6_charge_point'
      },
      ocpp_generic: {
        description: computed(() => String(t("OCPP.provides.ocpp_generic.description"))) as LocalizedString,
        interface: 'ocpp'
      },
      session_cost: {
        description: computed(() => String(t("OCPP.provides.session_cost.description"))) as LocalizedString,
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
        description: computed(() => String(t("OCPP201.config.CompositeScheduleIntervalS.description"))) as LocalizedString,
        type: 'integer'
      },
      CoreDatabasePath: {
        default: '/tmp/ocpp201',
        description: computed(() => String(t("OCPP201.config.CoreDatabasePath.description"))) as LocalizedString,
        type: 'string'
      },
      DelayOcppStart: {
        default: 0,
        description: computed(() => String(t("OCPP201.config.DelayOcppStart.description"))) as LocalizedString,
        type: 'integer'
      },
      DeviceModelConfigPath: {
        default: 'component_config',
        description: computed(() => String(t("OCPP201.config.DeviceModelConfigPath.description"))) as LocalizedString,
        type: 'string'
      },
      DeviceModelDatabaseMigrationPath: {
        default: 'device_model_migrations',
        description: computed(() => String(t("OCPP201.config.DeviceModelDatabaseMigrationPath.description"))) as LocalizedString,
        type: 'string'
      },
      DeviceModelDatabasePath: {
        default: 'device_model_storage.db',
        description: computed(() => String(t("OCPP201.config.DeviceModelDatabasePath.description"))) as LocalizedString,
        type: 'string'
      },
      EnableExternalWebsocketControl: {
        default: false,
        description: computed(() => String(t("OCPP201.config.EnableExternalWebsocketControl.description"))) as LocalizedString,
        type: 'boolean'
      },
      EverestDeviceModelDatabasePath: {
        default: 'everest_device_model_storage.db',
        description: computed(() => String(t("OCPP201.config.EverestDeviceModelDatabasePath.description"))) as LocalizedString,
        type: 'string'
      },
      MessageLogPath: {
        default: '/tmp/everest_ocpp_logs',
        description: computed(() => String(t("OCPP201.config.MessageLogPath.description"))) as LocalizedString,
        type: 'string'
      },
      MessageQueueResumeDelay: {
        default: 0,
        description: computed(() => String(t("OCPP201.config.MessageQueueResumeDelay.description"))) as LocalizedString,
        type: 'integer'
      },
      RequestCompositeScheduleDurationS: {
        default: 600,
        description: computed(() => String(t("OCPP201.config.RequestCompositeScheduleDurationS.description"))) as LocalizedString,
        type: 'integer'
      },
      RequestCompositeScheduleUnit: {
        default: 'A',
        description: computed(() => String(t("OCPP201.config.RequestCompositeScheduleUnit.description"))) as LocalizedString,
        type: 'string'
      }
    },
    description: computed(() => String(t("OCPP201.description"))) as LocalizedString,
    enable_external_mqtt: true,
    enable_global_errors: true,
    metadata: {
      authors: [ 'Piet Gömpel', 'Kai-Uwe Hermann' ],
      license: 'https://opensource.org/licenses/Apache-2.0'
    },
    provides: {
      auth_provider: {
        description: computed(() => String(t("OCPP201.provides.auth_provider.description"))) as LocalizedString,
        interface: 'auth_token_provider'
      },
      auth_validator: {
        description: computed(() => String(t("OCPP201.provides.auth_validator.description"))) as LocalizedString,
        interface: 'auth_token_validator'
      },
      data_transfer: {
        description: computed(() => String(t("OCPP201.provides.data_transfer.description"))) as LocalizedString,
        interface: 'ocpp_data_transfer'
      },
      ocpp_generic: {
        description: computed(() => String(t("OCPP201.provides.ocpp_generic.description"))) as LocalizedString,
        interface: 'ocpp'
      },
      session_cost: {
        description: computed(() => String(t("OCPP201.provides.session_cost.description"))) as LocalizedString,
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
        description: computed(() => String(t("OCPPExtensionExample.config.keys_to_monitor.description"))) as LocalizedString,
        type: 'string'
      }
    },
    description: computed(() => String(t("OCPPExtensionExample.description"))) as LocalizedString,
    metadata: {
      authors: [ 'Piet Gömpel' ],
      license: 'https://opensource.org/licenses/Apache-2.0'
    },
    provides: {
      data_transfer: {
        description: computed(() => String(t("OCPPExtensionExample.provides.data_transfer.description"))) as LocalizedString,
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
    description: computed(() => String(t("OVMSimulator.description"))) as LocalizedString,
    metadata: {
      authors: [ 'Cornelius Claussen (Pionix GmbH)' ],
      license: 'https://opensource.org/licenses/Apache-2.0'
    },
    provides: {
      main: {
        config: {
          simulate_error: {
            default: false,
            description: computed(() => String(t("OVMSimulator.provides.main.config.simulate_error.description"))) as LocalizedString,
            type: 'boolean'
          },
          simulate_error_delay: {
            default: 5,
            description: computed(() => String(t("OVMSimulator.provides.main.config.simulate_error_delay.description"))) as LocalizedString,
            type: 'integer'
          }
        },
        description: computed(() => String(t("OVMSimulator.provides.main.description"))) as LocalizedString,
        interface: 'over_voltage_monitor'
      }
    }
  },
  PN532TokenProvider: {
    description: computed(() => String(t("PN532TokenProvider.description"))) as LocalizedString,
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
            description: computed(() => String(t("PN532TokenProvider.provides.main.config.baud_rate.description"))) as LocalizedString,
            maximum: 230400,
            minimum: 9600,
            type: 'integer'
          },
          debug: {
            default: false,
            description: computed(() => String(t("PN532TokenProvider.provides.main.config.debug.description"))) as LocalizedString,
            type: 'boolean'
          },
          read_timeout: {
            default: 5,
            description: computed(() => String(t("PN532TokenProvider.provides.main.config.read_timeout.description"))) as LocalizedString,
            maximum: 120,
            minimum: 0,
            type: 'integer'
          },
          serial_port: {
            default: '/dev/ttyS0',
            description: computed(() => String(t("PN532TokenProvider.provides.main.config.serial_port.description"))) as LocalizedString,
            type: 'string'
          }
        },
        description: computed(() => String(t("PN532TokenProvider.provides.main.description"))) as LocalizedString,
        interface: 'auth_token_provider'
      }
    }
  },
  PN7160TokenProvider: {
    description: computed(() => String(t("PN7160TokenProvider.description"))) as LocalizedString,
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
            description: computed(() => String(t("PN7160TokenProvider.provides.main.config.debug.description"))) as LocalizedString,
            type: 'boolean'
          },
          disable_nfc_rfid: {
            default: false,
            description: computed(() => String(t("PN7160TokenProvider.provides.main.config.disable_nfc_rfid.description"))) as LocalizedString,
            type: 'boolean'
          },
          token_debounce_interval_ms: {
            default: 3000,
            description: computed(() => String(t("PN7160TokenProvider.provides.main.config.token_debounce_interval_ms.description"))) as LocalizedString,
            maximum: 10000,
            minimum: 1000,
            type: 'integer'
          }
        },
        description: computed(() => String(t("PN7160TokenProvider.provides.main.description"))) as LocalizedString,
        interface: 'auth_token_provider'
      }
    }
  },
  PacketSniffer: {
    config: {
      device: {
        default: 'eth1',
        description: computed(() => String(t("PacketSniffer.config.device.description"))) as LocalizedString,
        type: 'string'
      },
      session_logging_path: {
        default: '/tmp',
        description: computed(() => String(t("PacketSniffer.config.session_logging_path.description"))) as LocalizedString,
        type: 'string'
      }
    },
    description: computed(() => String(t("PacketSniffer.description"))) as LocalizedString,
    metadata: {
      authors: [ 'Sebastian Lukas' ],
      license: 'https://opensource.org/licenses/Apache-2.0'
    },
    provides: {
      main: {
        description: computed(() => String(t("PacketSniffer.provides.main.description"))) as LocalizedString,
        interface: 'empty'
      }
    },
    requires: { evse_manager: { interface: 'evse_manager' } }
  },
  PersistentStore: {
    config: {
      sqlite_db_file_path: {
        default: 'everest_persistent_store.db',
        description: computed(() => String(t("PersistentStore.config.sqlite_db_file_path.description"))) as LocalizedString,
        type: 'string'
      }
    },
    description: computed(() => String(t("PersistentStore.description"))) as LocalizedString,
    metadata: {
      authors: [ 'Kai-Uwe Hermann' ],
      license: 'https://opensource.org/licenses/Apache-2.0'
    },
    provides: {
      main: {
        description: computed(() => String(t("PersistentStore.provides.main.description"))) as LocalizedString,
        interface: 'kvs'
      }
    }
  },
  PhyVersoBSP: {
    config: {
      baud_rate: {
        default: 115200,
        description: computed(() => String(t("PhyVersoBSP.config.baud_rate.description"))) as LocalizedString,
        maximum: 230400,
        minimum: 9600,
        type: 'integer'
      },
      conn1_dc: {
        default: false,
        description: computed(() => String(t("PhyVersoBSP.config.conn1_dc.description"))) as LocalizedString,
        type: 'boolean'
      },
      conn1_gpio_stop_button_bank: {
        default: 'gpiochip1',
        description: computed(() => String(t("PhyVersoBSP.config.conn1_gpio_stop_button_bank.description"))) as LocalizedString,
        type: 'string'
      },
      conn1_gpio_stop_button_enabled: {
        default: false,
        description: computed(() => String(t("PhyVersoBSP.config.conn1_gpio_stop_button_enabled.description"))) as LocalizedString,
        type: 'boolean'
      },
      conn1_gpio_stop_button_invert: {
        default: false,
        description: computed(() => String(t("PhyVersoBSP.config.conn1_gpio_stop_button_invert.description"))) as LocalizedString,
        type: 'boolean'
      },
      conn1_gpio_stop_button_pin: {
        default: 36,
        description: computed(() => String(t("PhyVersoBSP.config.conn1_gpio_stop_button_pin.description"))) as LocalizedString,
        type: 'integer'
      },
      conn1_has_socket: {
        default: false,
        description: computed(() => String(t("PhyVersoBSP.config.conn1_has_socket.description"))) as LocalizedString,
        type: 'boolean'
      },
      conn1_max_current_A_export: {
        default: 0,
        description: computed(() => String(t("PhyVersoBSP.config.conn1_max_current_A_export.description"))) as LocalizedString,
        maximum: 63,
        minimum: 0,
        type: 'integer'
      },
      conn1_max_current_A_import: {
        default: 16,
        description: computed(() => String(t("PhyVersoBSP.config.conn1_max_current_A_import.description"))) as LocalizedString,
        minimum: 0,
        type: 'integer'
      },
      conn1_max_phase_count_export: {
        default: 3,
        description: computed(() => String(t("PhyVersoBSP.config.conn1_max_phase_count_export.description"))) as LocalizedString,
        maximum: 3,
        minimum: 1,
        type: 'integer'
      },
      conn1_max_phase_count_import: {
        default: 3,
        description: computed(() => String(t("PhyVersoBSP.config.conn1_max_phase_count_import.description"))) as LocalizedString,
        maximum: 3,
        minimum: 1,
        type: 'integer'
      },
      conn1_min_current_A_export: {
        default: 0,
        description: computed(() => String(t("PhyVersoBSP.config.conn1_min_current_A_export.description"))) as LocalizedString,
        maximum: 63,
        minimum: 0,
        type: 'integer'
      },
      conn1_min_current_A_import: {
        default: 6,
        description: computed(() => String(t("PhyVersoBSP.config.conn1_min_current_A_import.description"))) as LocalizedString,
        minimum: 0,
        type: 'integer'
      },
      conn1_min_phase_count_export: {
        default: 3,
        description: computed(() => String(t("PhyVersoBSP.config.conn1_min_phase_count_export.description"))) as LocalizedString,
        maximum: 3,
        minimum: 1,
        type: 'integer'
      },
      conn1_min_phase_count_import: {
        default: 3,
        description: computed(() => String(t("PhyVersoBSP.config.conn1_min_phase_count_import.description"))) as LocalizedString,
        maximum: 3,
        minimum: 1,
        type: 'integer'
      },
      conn1_motor_lock_type: {
        default: 2,
        description: computed(() => String(t("PhyVersoBSP.config.conn1_motor_lock_type.description"))) as LocalizedString,
        type: 'integer'
      },
      conn2_dc: {
        default: false,
        description: computed(() => String(t("PhyVersoBSP.config.conn2_dc.description"))) as LocalizedString,
        type: 'boolean'
      },
      conn2_gpio_stop_button_bank: {
        default: 'gpiochip1',
        description: computed(() => String(t("PhyVersoBSP.config.conn2_gpio_stop_button_bank.description"))) as LocalizedString,
        type: 'string'
      },
      conn2_gpio_stop_button_enabled: {
        default: false,
        description: computed(() => String(t("PhyVersoBSP.config.conn2_gpio_stop_button_enabled.description"))) as LocalizedString,
        type: 'boolean'
      },
      conn2_gpio_stop_button_invert: {
        default: false,
        description: computed(() => String(t("PhyVersoBSP.config.conn2_gpio_stop_button_invert.description"))) as LocalizedString,
        type: 'boolean'
      },
      conn2_gpio_stop_button_pin: {
        default: 37,
        description: computed(() => String(t("PhyVersoBSP.config.conn2_gpio_stop_button_pin.description"))) as LocalizedString,
        type: 'integer'
      },
      conn2_has_socket: {
        default: false,
        description: computed(() => String(t("PhyVersoBSP.config.conn2_has_socket.description"))) as LocalizedString,
        type: 'boolean'
      },
      conn2_max_current_A_export: {
        default: 0,
        description: computed(() => String(t("PhyVersoBSP.config.conn2_max_current_A_export.description"))) as LocalizedString,
        maximum: 63,
        minimum: 0,
        type: 'integer'
      },
      conn2_max_current_A_import: {
        default: 16,
        description: computed(() => String(t("PhyVersoBSP.config.conn2_max_current_A_import.description"))) as LocalizedString,
        minimum: 0,
        type: 'integer'
      },
      conn2_max_phase_count_export: {
        default: 3,
        description: computed(() => String(t("PhyVersoBSP.config.conn2_max_phase_count_export.description"))) as LocalizedString,
        maximum: 3,
        minimum: 1,
        type: 'integer'
      },
      conn2_max_phase_count_import: {
        default: 3,
        description: computed(() => String(t("PhyVersoBSP.config.conn2_max_phase_count_import.description"))) as LocalizedString,
        maximum: 3,
        minimum: 1,
        type: 'integer'
      },
      conn2_min_current_A_export: {
        default: 0,
        description: computed(() => String(t("PhyVersoBSP.config.conn2_min_current_A_export.description"))) as LocalizedString,
        maximum: 63,
        minimum: 0,
        type: 'integer'
      },
      conn2_min_current_A_import: {
        default: 6,
        description: computed(() => String(t("PhyVersoBSP.config.conn2_min_current_A_import.description"))) as LocalizedString,
        minimum: 0,
        type: 'integer'
      },
      conn2_min_phase_count_export: {
        default: 3,
        description: computed(() => String(t("PhyVersoBSP.config.conn2_min_phase_count_export.description"))) as LocalizedString,
        maximum: 3,
        minimum: 1,
        type: 'integer'
      },
      conn2_min_phase_count_import: {
        default: 3,
        description: computed(() => String(t("PhyVersoBSP.config.conn2_min_phase_count_import.description"))) as LocalizedString,
        maximum: 3,
        minimum: 1,
        type: 'integer'
      },
      conn2_motor_lock_type: {
        default: 2,
        description: computed(() => String(t("PhyVersoBSP.config.conn2_motor_lock_type.description"))) as LocalizedString,
        type: 'integer'
      },
      reset_gpio: {
        default: -1,
        description: computed(() => String(t("PhyVersoBSP.config.reset_gpio.description"))) as LocalizedString,
        maximum: 1000,
        minimum: -1,
        type: 'integer'
      },
      reset_gpio_bank: {
        default: 1,
        description: computed(() => String(t("PhyVersoBSP.config.reset_gpio_bank.description"))) as LocalizedString,
        type: 'integer'
      },
      reset_gpio_pin: {
        default: 23,
        description: computed(() => String(t("PhyVersoBSP.config.reset_gpio_pin.description"))) as LocalizedString,
        type: 'integer'
      },
      serial_port: {
        default: '/dev/ttyUSB0',
        description: computed(() => String(t("PhyVersoBSP.config.serial_port.description"))) as LocalizedString,
        type: 'string'
      }
    },
    description: computed(() => String(t("PhyVersoBSP.description"))) as LocalizedString,
    enable_external_mqtt: true,
    enable_telemetry: true,
    metadata: {
      authors: [ 'Cornelius Claussen' ],
      license: 'https://opensource.org/licenses/Apache-2.0'
    },
    provides: {
      connector_1: {
        description: computed(() => String(t("PhyVersoBSP.provides.connector_1.description"))) as LocalizedString,
        interface: 'evse_board_support'
      },
      connector_2: {
        description: computed(() => String(t("PhyVersoBSP.provides.connector_2.description"))) as LocalizedString,
        interface: 'evse_board_support'
      },
      connector_lock_1: {
        description: computed(() => String(t("PhyVersoBSP.provides.connector_lock_1.description"))) as LocalizedString,
        interface: 'connector_lock'
      },
      connector_lock_2: {
        description: computed(() => String(t("PhyVersoBSP.provides.connector_lock_2.description"))) as LocalizedString,
        interface: 'connector_lock'
      },
      phyverso_mcu_temperature: {
        description: computed(() => String(t("PhyVersoBSP.provides.phyverso_mcu_temperature.description"))) as LocalizedString,
        interface: 'phyverso_mcu_temperature'
      },
      rcd_1: {
        description: computed(() => String(t("PhyVersoBSP.provides.rcd_1.description"))) as LocalizedString,
        interface: 'ac_rcd'
      },
      rcd_2: {
        description: computed(() => String(t("PhyVersoBSP.provides.rcd_2.description"))) as LocalizedString,
        interface: 'ac_rcd'
      },
      system_specific_data_1: {
        description: computed(() => String(t("PhyVersoBSP.provides.system_specific_data_1.description"))) as LocalizedString,
        interface: 'generic_array'
      },
      system_specific_data_2: {
        description: computed(() => String(t("PhyVersoBSP.provides.system_specific_data_2.description"))) as LocalizedString,
        interface: 'generic_array'
      }
    }
  },
  PyEvJosev: {
    config: {
      device: {
        default: 'eth0',
        description: computed(() => String(t("PyEvJosev.config.device.description"))) as LocalizedString,
        type: 'string'
      },
      enable_tls_1_3: {
        default: false,
        description: computed(() => String(t("PyEvJosev.config.enable_tls_1_3.description"))) as LocalizedString,
        type: 'boolean'
      },
      enforce_tls: {
        default: false,
        description: computed(() => String(t("PyEvJosev.config.enforce_tls.description"))) as LocalizedString,
        type: 'boolean'
      },
      is_cert_install_needed: {
        default: false,
        description: computed(() => String(t("PyEvJosev.config.is_cert_install_needed.description"))) as LocalizedString,
        type: 'boolean'
      },
      supported_DIN70121: {
        default: false,
        description: computed(() => String(t("PyEvJosev.config.supported_DIN70121.description"))) as LocalizedString,
        type: 'boolean'
      },
      supported_ISO15118_2: {
        default: false,
        description: computed(() => String(t("PyEvJosev.config.supported_ISO15118_2.description"))) as LocalizedString,
        type: 'boolean'
      },
      supported_ISO15118_20_AC: {
        default: false,
        description: computed(() => String(t("PyEvJosev.config.supported_ISO15118_20_AC.description"))) as LocalizedString,
        type: 'boolean'
      },
      supported_ISO15118_20_DC: {
        default: false,
        description: computed(() => String(t("PyEvJosev.config.supported_ISO15118_20_DC.description"))) as LocalizedString,
        type: 'boolean'
      },
      tls_active: {
        default: false,
        description: computed(() => String(t("PyEvJosev.config.tls_active.description"))) as LocalizedString,
        type: 'boolean'
      }
    },
    description: computed(() => String(t("PyEvJosev.description"))) as LocalizedString,
    enable_external_mqtt: true,
    metadata: {
      authors: [ 'Sebastian Lukas' ],
      license: 'https://opensource.org/licenses/Apache-2.0'
    },
    provides: {
      ev: {
        description: computed(() => String(t("PyEvJosev.provides.ev.description"))) as LocalizedString,
        interface: 'ISO15118_ev'
      }
    }
  },
  PyExampleErrorRaiser: {
    description: computed(() => String(t("PyExampleErrorRaiser.description"))) as LocalizedString,
    metadata: {
      authors: [ 'Andreas Heinrich' ],
      license: 'https://opensource.org/licenses/Apache-2.0'
    },
    provides: {
      example_raiser: {
        description: computed(() => String(t("PyExampleErrorRaiser.provides.example_raiser.description"))) as LocalizedString,
        interface: 'example_error_framework'
      }
    }
  },
  PyExampleErrorSubscriber: {
    description: computed(() => String(t("PyExampleErrorSubscriber.description"))) as LocalizedString,
    metadata: {
      authors: [ 'Andreas Heinrich' ],
      license: 'https://opensource.org/licenses/Apache-2.0'
    },
    provides: {
      example_subscriber: {
        description: computed(() => String(t("PyExampleErrorSubscriber.provides.example_subscriber.description"))) as LocalizedString,
        interface: 'example_error_framework'
      }
    },
    requires: { example_raiser: { interface: 'example_error_framework' } }
  },
  SerialCommHub: {
    description: computed(() => String(t("SerialCommHub.description"))) as LocalizedString,
    metadata: {
      authors: [ 'Lars Dieckmann', 'Cornelius Claussen' ],
      license: 'https://opensource.org/licenses/Apache-2.0'
    },
    provides: {
      main: {
        config: {
          baudrate: {
            default: 9600,
            description: computed(() => String(t("SerialCommHub.provides.main.config.baudrate.description"))) as LocalizedString,
            maximum: 230400,
            minimum: 0,
            type: 'integer'
          },
          ignore_echo: {
            default: false,
            description: computed(() => String(t("SerialCommHub.provides.main.config.ignore_echo.description"))) as LocalizedString,
            type: 'boolean'
          },
          initial_timeout_ms: {
            default: 500,
            description: computed(() => String(t("SerialCommHub.provides.main.config.initial_timeout_ms.description"))) as LocalizedString,
            type: 'integer'
          },
          max_packet_size: {
            default: 256,
            description: computed(() => String(t("SerialCommHub.provides.main.config.max_packet_size.description"))) as LocalizedString,
            maximum: 65536,
            minimum: 7,
            type: 'integer'
          },
          parity: {
            default: 0,
            description: computed(() => String(t("SerialCommHub.provides.main.config.parity.description"))) as LocalizedString,
            maximum: 2,
            minimum: 0,
            type: 'integer'
          },
          retries: {
            default: 2,
            description: computed(() => String(t("SerialCommHub.provides.main.config.retries.description"))) as LocalizedString,
            maximum: 10,
            minimum: 0,
            type: 'integer'
          },
          rtscts: {
            default: false,
            description: computed(() => String(t("SerialCommHub.provides.main.config.rtscts.description"))) as LocalizedString,
            type: 'boolean'
          },
          rxtx_gpio_chip: {
            default: '',
            description: computed(() => String(t("SerialCommHub.provides.main.config.rxtx_gpio_chip.description"))) as LocalizedString,
            type: 'string'
          },
          rxtx_gpio_line: {
            default: 0,
            description: computed(() => String(t("SerialCommHub.provides.main.config.rxtx_gpio_line.description"))) as LocalizedString,
            type: 'integer'
          },
          rxtx_gpio_tx_high: {
            default: false,
            description: computed(() => String(t("SerialCommHub.provides.main.config.rxtx_gpio_tx_high.description"))) as LocalizedString,
            type: 'boolean'
          },
          serial_port: {
            default: '/dev/ttyUSB0',
            description: computed(() => String(t("SerialCommHub.provides.main.config.serial_port.description"))) as LocalizedString,
            type: 'string'
          },
          within_message_timeout_ms: {
            default: 100,
            description: computed(() => String(t("SerialCommHub.provides.main.config.within_message_timeout_ms.description"))) as LocalizedString,
            type: 'integer'
          }
        },
        description: computed(() => String(t("SerialCommHub.provides.main.description"))) as LocalizedString,
        interface: 'serial_communication_hub'
      }
    }
  },
  Setup: {
    config: {
      ap_interface: {
        default: 'wlan0',
        description: computed(() => String(t("Setup.config.ap_interface.description"))) as LocalizedString,
        type: 'string'
      },
      ap_ipv4: {
        default: '192.168.1.1/24',
        description: computed(() => String(t("Setup.config.ap_ipv4.description"))) as LocalizedString,
        type: 'string'
      },
      initialized_by_default: {
        default: true,
        description: computed(() => String(t("Setup.config.initialized_by_default.description"))) as LocalizedString,
        type: 'boolean'
      },
      localization: {
        default: false,
        description: computed(() => String(t("Setup.config.localization.description"))) as LocalizedString,
        type: 'boolean'
      },
      online_check_host: {
        default: 'lfenergy.org',
        description: computed(() => String(t("Setup.config.online_check_host.description"))) as LocalizedString,
        type: 'string'
      },
      release_metadata_file: {
        default: 'release.json',
        description: computed(() => String(t("Setup.config.release_metadata_file.description"))) as LocalizedString,
        type: 'string'
      },
      setup_simulation: {
        default: false,
        description: computed(() => String(t("Setup.config.setup_simulation.description"))) as LocalizedString,
        type: 'boolean'
      },
      setup_wifi: {
        default: false,
        description: computed(() => String(t("Setup.config.setup_wifi.description"))) as LocalizedString,
        type: 'boolean'
      }
    },
    description: computed(() => String(t("Setup.description"))) as LocalizedString,
    enable_external_mqtt: true,
    metadata: {
      authors: [ 'Kai-Uwe Hermann' ],
      license: 'https://opensource.org/licenses/Apache-2.0'
    },
    provides: {
      main: {
        description: computed(() => String(t("Setup.provides.main.description"))) as LocalizedString,
        interface: 'empty'
      }
    },
    requires: { store: { interface: 'kvs' } }
  },
  SlacSimulator: {
    description: computed(() => String(t("SlacSimulator.description"))) as LocalizedString,
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
        description: computed(() => String(t("SlacSimulator.provides.ev.description"))) as LocalizedString,
        interface: 'ev_slac'
      },
      evse: {
        description: computed(() => String(t("SlacSimulator.provides.evse.description"))) as LocalizedString,
        interface: 'slac'
      }
    }
  },
  StaticISO15118VASProvider: {
    config: {
      service_file: {
        description: computed(() => String(t("StaticISO15118VASProvider.config.service_file.description"))) as LocalizedString,
        type: 'string'
      }
    },
    description: computed(() => String(t("StaticISO15118VASProvider.description"))) as LocalizedString,
    metadata: {
      authors: [ 'Mark Oude Elberink' ],
      license: 'https://opensource.org/licenses/Apache-2.0'
    },
    provides: {
      iso15118_vas: {
        description: computed(() => String(t("StaticISO15118VASProvider.provides.iso15118_vas.description"))) as LocalizedString,
        interface: 'ISO15118_vas'
      }
    }
  },
  Store: {
    description: computed(() => String(t("Store.description"))) as LocalizedString,
    metadata: {
      authors: [ 'Kai-Uwe Hermann', 'Thilo Molitor' ],
      license: 'https://opensource.org/licenses/Apache-2.0'
    },
    provides: {
      main: {
        description: computed(() => String(t("Store.provides.main.description"))) as LocalizedString,
        interface: 'kvs'
      }
    }
  },
  System: {
    config: {
      DefaultRetries: {
        default: 1,
        description: computed(() => String(t("System.config.DefaultRetries.description"))) as LocalizedString,
        type: 'number'
      },
      DefaultRetryInterval: {
        default: 1,
        description: computed(() => String(t("System.config.DefaultRetryInterval.description"))) as LocalizedString,
        type: 'number'
      },
      ResetDelay: {
        default: 0,
        description: computed(() => String(t("System.config.ResetDelay.description"))) as LocalizedString,
        minimum: 0,
        type: 'integer'
      }
    },
    description: computed(() => String(t("System.description"))) as LocalizedString,
    enable_external_mqtt: false,
    metadata: {
      authors: [ 'Piet Gömpel' ],
      license: 'https://opensource.org/licenses/Apache-2.0'
    },
    provides: {
      main: {
        description: computed(() => String(t("System.provides.main.description"))) as LocalizedString,
        interface: 'system'
      }
    },
    requires: {
      store: { interface: 'kvs', max_connections: 1, min_connections: 0 }
    }
  },
  TerminalCostAndPriceMessage: {
    description: computed(() => String(t("TerminalCostAndPriceMessage.description"))) as LocalizedString,
    metadata: {
      authors: [ 'Maaike Zijderveld' ],
      license: 'https://opensource.org/licenses/Apache-2.0'
    },
    provides: {
      main: {
        description: computed(() => String(t("TerminalCostAndPriceMessage.provides.main.description"))) as LocalizedString,
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
    description: computed(() => String(t("TerminalDisplayMessage.description"))) as LocalizedString,
    metadata: {
      authors: [ 'Maaike Zijderveld' ],
      license: 'https://opensource.org/licenses/Apache-2.0'
    },
    provides: {
      display_message: {
        description: computed(() => String(t("TerminalDisplayMessage.provides.display_message.description"))) as LocalizedString,
        interface: 'display_message'
      }
    }
  },
  TestErrorHandling: {
    description: computed(() => String(t("TestErrorHandling.description"))) as LocalizedString,
    enable_global_errors: true,
    metadata: {
      authors: [ 'Andreas Heinrich' ],
      license: 'https://opensource.org/licenses/Apache-2.0'
    },
    provides: {
      main: {
        description: computed(() => String(t("TestErrorHandling.provides.main.description"))) as LocalizedString,
        interface: 'test_error_handling'
      }
    },
    requires: { error_raiser: { interface: 'test_error_raiser' } }
  },
  YetiDriver: {
    config: {
      baud_rate: {
        default: 115200,
        description: computed(() => String(t("YetiDriver.config.baud_rate.description"))) as LocalizedString,
        maximum: 230400,
        minimum: 9600,
        type: 'integer'
      },
      caps_max_current_A: {
        default: -1,
        description: computed(() => String(t("YetiDriver.config.caps_max_current_A.description"))) as LocalizedString,
        type: 'integer'
      },
      caps_min_current_A: {
        default: -1,
        description: computed(() => String(t("YetiDriver.config.caps_min_current_A.description"))) as LocalizedString,
        type: 'integer'
      },
      reset_gpio: {
        default: 27,
        description: computed(() => String(t("YetiDriver.config.reset_gpio.description"))) as LocalizedString,
        type: 'integer'
      },
      reset_gpio_chip: {
        default: 'gpiochip0',
        description: computed(() => String(t("YetiDriver.config.reset_gpio_chip.description"))) as LocalizedString,
        type: 'string'
      },
      serial_port: {
        default: '/dev/ttyUSB0',
        description: computed(() => String(t("YetiDriver.config.serial_port.description"))) as LocalizedString,
        type: 'string'
      }
    },
    description: computed(() => String(t("YetiDriver.description"))) as LocalizedString,
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
        description: computed(() => String(t("YetiDriver.provides.board_support.description"))) as LocalizedString,
        interface: 'evse_board_support'
      },
      connector_lock: {
        description: computed(() => String(t("YetiDriver.provides.connector_lock.description"))) as LocalizedString,
        interface: 'connector_lock'
      },
      powermeter: {
        description: computed(() => String(t("YetiDriver.provides.powermeter.description"))) as LocalizedString,
        interface: 'powermeter'
      },
      rcd: {
        description: computed(() => String(t("YetiDriver.provides.rcd.description"))) as LocalizedString,
        interface: 'ac_rcd'
      }
    }
  },
  YetiEvDriver: {
    config: {
      baud_rate: {
        default: 115200,
        description: computed(() => String(t("YetiEvDriver.config.baud_rate.description"))) as LocalizedString,
        maximum: 230400,
        minimum: 9600,
        type: 'integer'
      },
      reset_gpio: {
        default: -1,
        description: computed(() => String(t("YetiEvDriver.config.reset_gpio.description"))) as LocalizedString,
        maximum: 1000,
        minimum: -1,
        type: 'integer'
      },
      serial_port: {
        default: '/dev/ttyUSB0',
        description: computed(() => String(t("YetiEvDriver.config.serial_port.description"))) as LocalizedString,
        type: 'string'
      }
    },
    description: computed(() => String(t("YetiEvDriver.description"))) as LocalizedString,
    enable_external_mqtt: true,
    enable_telemetry: true,
    metadata: {
      authors: [ 'Cornelius Claussen', 'Sebastian Lukas', 'Piet Gömpel' ],
      license: 'https://opensource.org/licenses/Apache-2.0'
    },
    provides: {
      ev_board_support: {
        description: computed(() => String(t("YetiEvDriver.provides.ev_board_support.description"))) as LocalizedString,
        interface: 'ev_board_support'
      }
    }
  },
  YetiSimulator: {
    config: {
      connector_id: {
        description: computed(() => String(t("YetiSimulator.config.connector_id.description"))) as LocalizedString,
        type: 'integer'
      },
      reset_powermeter_on_session_start: {
        default: true,
        description: computed(() => String(t("YetiSimulator.config.reset_powermeter_on_session_start.description"))) as LocalizedString,
        type: 'boolean'
      }
    },
    description: computed(() => String(t("YetiSimulator.description"))) as LocalizedString,
    enable_external_mqtt: true,
    enable_telemetry: true,
    metadata: {
      authors: [ 'Cornelius Claussen', 'Tobias Marzell (Pionix GmbH)' ],
      license: 'https://opensource.org/licenses/Apache-2.0'
    },
    provides: {
      board_support: {
        description: computed(() => String(t("YetiSimulator.provides.board_support.description"))) as LocalizedString,
        interface: 'evse_board_support'
      },
      connector_lock: {
        description: computed(() => String(t("YetiSimulator.provides.connector_lock.description"))) as LocalizedString,
        interface: 'connector_lock'
      },
      ev_board_support: {
        description: computed(() => String(t("YetiSimulator.provides.ev_board_support.description"))) as LocalizedString,
        interface: 'ev_board_support'
      },
      powermeter: {
        description: computed(() => String(t("YetiSimulator.provides.powermeter.description"))) as LocalizedString,
        interface: 'powermeter'
      },
      rcd: {
        description: computed(() => String(t("YetiSimulator.provides.rcd.description"))) as LocalizedString,
        interface: 'ac_rcd'
      }
    }
  }
} as EverestModuleDefinitionList;
