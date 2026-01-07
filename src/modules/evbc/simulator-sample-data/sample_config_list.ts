// SPDX-License-Identifier: Apache-2.0
// Copyright 2020 - 2026 Pionix GmbH and Contributors to EVerest

// This file is generated, see README.md for more information.

import { EverestConfigList } from "../index";

/* eslint-disable prettier/prettier */
export default {
  'config-sil-dc': {
    active_modules: {
      iso15118_charger: {
        module: 'EvseV2G',
        config_module: { device: 'auto', tls_security: 'allow' },
        connections: {
          security: [ { module_id: 'evse_security', implementation_id: 'main' } ]
        }
      },
      iso15118_car: {
        module: 'PyEvJosev',
        config_module: {
          device: 'auto',
          supported_DIN70121: true,
          supported_ISO15118_2: true
        }
      },
      evse_manager: {
        module: 'EvseManager',
        config_module: {
          connector_id: 1,
          evse_id: 'DE*PNX*E12345*1',
          evse_id_din: '49A80737A45678',
          session_logging: true,
          session_logging_xml: false,
          session_logging_path: '/tmp/everest-logs',
          charge_mode: 'DC',
          hack_allow_bpt_with_iso2: true
        },
        connections: {
          bsp: [
            {
              module_id: 'yeti_driver',
              implementation_id: 'board_support'
            }
          ],
          powermeter_car_side: [
            {
              module_id: 'powersupply_dc',
              implementation_id: 'powermeter'
            }
          ],
          slac: [ { module_id: 'slac', implementation_id: 'evse' } ],
          hlc: [
            {
              module_id: 'iso15118_charger',
              implementation_id: 'charger'
            }
          ],
          powersupply_DC: [
            { module_id: 'powersupply_dc', implementation_id: 'main' }
          ],
          imd: [ { module_id: 'imd', implementation_id: 'main' } ],
          over_voltage_monitor: [ { module_id: 'ovm', implementation_id: 'main' } ]
        }
      },
      powersupply_dc: { module: 'DCSupplySimulator' },
      yeti_driver: { module: 'YetiSimulator', config_module: { connector_id: 1 } },
      slac: { module: 'SlacSimulator' },
      imd: {
        config_implementation: { main: { selftest_success: true } },
        module: 'IMDSimulator'
      },
      ovm: {
        module: 'OVMSimulator',
        config_implementation: { main: { simulate_error: false, simulate_error_delay: 5 } }
      },
      ev_manager: {
        module: 'EvManager',
        config_module: {
          connector_id: 1,
          auto_enable: true,
          auto_exec: false,
          auto_exec_commands: 'sleep 1;iec_wait_pwr_ready;sleep 1;draw_power_regulated 16,3;sleep 30;unplug',
          dc_target_current: 20,
          dc_target_voltage: 400
        },
        connections: {
          ev_board_support: [
            {
              module_id: 'yeti_driver',
              implementation_id: 'ev_board_support'
            }
          ],
          ev: [ { module_id: 'iso15118_car', implementation_id: 'ev' } ],
          slac: [ { module_id: 'slac', implementation_id: 'ev' } ]
        }
      },
      auth: {
        module: 'Auth',
        config_module: { connection_timeout: 10, selection_algorithm: 'FindFirst' },
        connections: {
          token_provider: [
            { module_id: 'token_provider', implementation_id: 'main' }
          ],
          token_validator: [
            { module_id: 'token_validator', implementation_id: 'main' }
          ],
          evse_manager: [ { module_id: 'evse_manager', implementation_id: 'evse' } ]
        }
      },
      token_provider: {
        module: 'DummyTokenProvider',
        config_implementation: { main: { token: 'TOKEN1' } },
        connections: {
          evse: [ { module_id: 'evse_manager', implementation_id: 'evse' } ]
        }
      },
      token_validator: {
        module: 'DummyTokenValidator',
        config_implementation: {
          main: {
            validation_result: 'Accepted',
            validation_reason: 'Token seems valid',
            sleep: 0.25
          }
        }
      },
      evse_security: {
        module: 'EvseSecurity',
        config_module: { private_key_password: '123456' }
      },
      energy_manager: {
        module: 'EnergyManager',
        config_module: {
          schedule_total_duration: 1,
          schedule_interval_duration: 60,
          debug: false
        },
        connections: {
          energy_trunk: [
            {
              module_id: 'grid_connection_point',
              implementation_id: 'energy_grid'
            }
          ]
        }
      },
      grid_connection_point: {
        module: 'EnergyNode',
        config_module: { fuse_limit_A: 40, phase_count: 3 },
        connections: {
          price_information: [],
          energy_consumer: [
            {
              module_id: 'evse_manager',
              implementation_id: 'energy_grid'
            }
          ],
          powermeter: [
            {
              module_id: 'yeti_driver',
              implementation_id: 'powermeter'
            }
          ]
        }
      },
      api: {
        module: 'API',
        connections: {
          evse_manager: [ { module_id: 'evse_manager', implementation_id: 'evse' } ],
          error_history: [
            {
              module_id: 'error_history',
              implementation_id: 'error_history'
            }
          ]
        }
      },
      error_history: {
        module: 'ErrorHistory',
        config_implementation: { error_history: { database_path: '/tmp/error_history.db' } }
      }
    },
    'x-module-layout': {
      iso15118_charger: {
        position: { x: 12, y: -7 },
        terminals: {
          top: [],
          right: [
            {
              id: 'charger',
              interface: 'ISO15118_charger',
              type: 'provide'
            },
            {
              id: 'extensions',
              interface: 'iso15118_extensions',
              type: 'provide'
            }
          ],
          bottom: [],
          left: [
            {
              id: 'security',
              interface: 'evse_security',
              type: 'requirement'
            }
          ]
        }
      },
      iso15118_car: {
        position: { x: -8, y: 35 },
        terminals: {
          top: [],
          right: [ { id: 'ev', interface: 'ISO15118_ev', type: 'provide' } ],
          bottom: [],
          left: []
        }
      },
      evse_manager: {
        position: { x: 33, y: 14 },
        terminals: {
          top: [],
          right: [
            { id: 'evse', interface: 'evse_manager', type: 'provide' },
            { id: 'energy_grid', interface: 'energy', type: 'provide' },
            {
              id: 'random_delay',
              interface: 'uk_random_delay',
              type: 'provide'
            },
            {
              id: 'token_provider',
              interface: 'auth_token_provider',
              type: 'provide'
            }
          ],
          bottom: [],
          left: [
            {
              id: 'hlc',
              interface: 'ISO15118_charger',
              type: 'requirement'
            },
            {
              id: 'over_voltage_monitor',
              interface: 'over_voltage_monitor',
              type: 'requirement'
            },
            {
              id: 'imd',
              interface: 'isolation_monitor',
              type: 'requirement'
            },
            {
              id: 'powersupply_DC',
              interface: 'power_supply_DC',
              type: 'requirement'
            },
            { id: 'ac_rcd', interface: 'ac_rcd', type: 'requirement' },
            {
              id: 'connector_lock',
              interface: 'connector_lock',
              type: 'requirement'
            },
            {
              id: 'powermeter_grid_side',
              interface: 'powermeter',
              type: 'requirement'
            },
            { id: 'store', interface: 'kvs', type: 'requirement' },
            {
              id: 'powermeter_car_side',
              interface: 'powermeter',
              type: 'requirement'
            },
            { id: 'slac', interface: 'slac', type: 'requirement' },
            {
              id: 'bsp',
              interface: 'evse_board_support',
              type: 'requirement'
            }
          ]
        }
      },
      powersupply_dc: {
        position: { x: -8, y: 14 },
        terminals: {
          top: [],
          right: [
            {
              id: 'main',
              interface: 'power_supply_DC',
              type: 'provide'
            },
            {
              id: 'powermeter',
              interface: 'powermeter',
              type: 'provide'
            }
          ],
          bottom: [],
          left: []
        }
      },
      yeti_driver: {
        position: { x: -8, y: 28 },
        terminals: {
          top: [],
          right: [
            {
              id: 'board_support',
              interface: 'evse_board_support',
              type: 'provide'
            },
            {
              id: 'connector_lock',
              interface: 'connector_lock',
              type: 'provide'
            },
            {
              id: 'ev_board_support',
              interface: 'ev_board_support',
              type: 'provide'
            },
            {
              id: 'powermeter',
              interface: 'powermeter',
              type: 'provide'
            },
            { id: 'rcd', interface: 'ac_rcd', type: 'provide' }
          ],
          bottom: [],
          left: []
        }
      },
      slac: {
        position: { x: -8, y: 21 },
        terminals: {
          top: [],
          right: [
            { id: 'evse', interface: 'slac', type: 'provide' },
            { id: 'ev', interface: 'ev_slac', type: 'provide' }
          ],
          bottom: [],
          left: []
        }
      },
      imd: {
        position: { x: -8, y: 7 },
        terminals: {
          top: [],
          right: [
            {
              id: 'main',
              interface: 'isolation_monitor',
              type: 'provide'
            }
          ],
          bottom: [],
          left: []
        }
      },
      ovm: {
        position: { x: -8, y: -0 },
        terminals: {
          top: [],
          right: [
            {
              id: 'main',
              interface: 'over_voltage_monitor',
              type: 'provide'
            }
          ],
          bottom: [],
          left: []
        }
      },
      ev_manager: {
        position: { x: 33, y: 23 },
        terminals: {
          top: [],
          right: [
            { id: 'main', interface: 'car_simulator', type: 'provide' }
          ],
          bottom: [],
          left: [
            {
              id: 'powermeter',
              interface: 'powermeter',
              type: 'requirement'
            },
            { id: 'slac', interface: 'ev_slac', type: 'requirement' },
            {
              id: 'ev_board_support',
              interface: 'ev_board_support',
              type: 'requirement'
            },
            { id: 'ev', interface: 'ISO15118_ev', type: 'requirement' }
          ]
        }
      },
      auth: {
        position: { x: 77, y: 6 },
        terminals: {
          top: [],
          right: [
            { id: 'main', interface: 'auth', type: 'provide' },
            {
              id: 'reservation',
              interface: 'reservation',
              type: 'provide'
            }
          ],
          bottom: [],
          left: [
            {
              id: 'token_validator',
              interface: 'auth_token_validator',
              type: 'requirement'
            },
            { id: 'kvs', interface: 'kvs', type: 'requirement' },
            {
              id: 'token_provider',
              interface: 'auth_token_provider',
              type: 'requirement'
            },
            {
              id: 'evse_manager',
              interface: 'evse_manager',
              type: 'requirement'
            }
          ]
        }
      },
      token_provider: {
        position: { x: 54, y: 4 },
        terminals: {
          top: [],
          right: [
            {
              id: 'main',
              interface: 'auth_token_provider',
              type: 'provide'
            }
          ],
          bottom: [],
          left: [
            {
              id: 'evse',
              interface: 'evse_manager',
              type: 'requirement'
            }
          ]
        }
      },
      token_validator: {
        position: { x: 54, y: -4 },
        terminals: {
          top: [],
          right: [
            {
              id: 'main',
              interface: 'auth_token_validator',
              type: 'provide'
            }
          ],
          bottom: [],
          left: []
        }
      },
      evse_security: {
        position: { x: -8, y: -7 },
        terminals: {
          top: [],
          right: [
            { id: 'main', interface: 'evse_security', type: 'provide' }
          ],
          bottom: [],
          left: []
        }
      },
      energy_manager: {
        position: { x: 77, y: 21 },
        terminals: {
          top: [],
          right: [
            {
              id: 'main',
              interface: 'energy_manager',
              type: 'provide'
            }
          ],
          bottom: [],
          left: [
            {
              id: 'energy_trunk',
              interface: 'energy',
              type: 'requirement'
            }
          ]
        }
      },
      grid_connection_point: {
        position: { x: 54, y: 29 },
        terminals: {
          top: [],
          right: [
            { id: 'energy_grid', interface: 'energy', type: 'provide' },
            {
              id: 'external_limits',
              interface: 'external_energy_limits',
              type: 'provide'
            }
          ],
          bottom: [],
          left: [
            {
              id: 'energy_consumer',
              interface: 'energy',
              type: 'requirement'
            },
            {
              id: 'powermeter',
              interface: 'powermeter',
              type: 'requirement'
            },
            {
              id: 'price_information',
              interface: 'energy_price_information',
              type: 'requirement'
            }
          ]
        }
      },
      api: {
        position: { x: 77, y: 13 },
        terminals: {
          top: [],
          right: [ { id: 'main', interface: 'empty', type: 'provide' } ],
          bottom: [],
          left: [
            {
              id: 'evse_energy_sink',
              interface: 'external_energy_limits',
              type: 'requirement'
            },
            {
              id: 'evse_manager',
              interface: 'evse_manager',
              type: 'requirement'
            },
            { id: 'ocpp', interface: 'ocpp', type: 'requirement' },
            {
              id: 'random_delay',
              interface: 'uk_random_delay',
              type: 'requirement'
            },
            {
              id: 'error_history',
              interface: 'error_history',
              type: 'requirement'
            }
          ]
        }
      },
      error_history: {
        position: { x: 54, y: 17 },
        terminals: {
          top: [],
          right: [
            {
              id: 'error_history',
              interface: 'error_history',
              type: 'provide'
            }
          ],
          bottom: [],
          left: []
        }
      }
    }
  },
  'config-sil-ocpp201': {
    active_modules: {
      iso15118_charger: {
        module: 'EvseV2G',
        config_module: { device: 'auto', tls_security: 'allow' },
        connections: {
          security: [ { module_id: 'evse_security', implementation_id: 'main' } ]
        }
      },
      iso15118_car: {
        module: 'PyEvJosev',
        config_module: { device: 'auto', supported_ISO15118_2: true }
      },
      evse_manager_1: {
        module: 'EvseManager',
        mapping: { module: { evse: 1 } },
        config_module: {
          connector_id: 1,
          evse_id: '1',
          connector_type: 'cType2',
          session_logging: true,
          session_logging_xml: false,
          session_logging_path: '/tmp',
          ac_hlc_enabled: false,
          ac_hlc_use_5percent: false,
          ac_enforce_hlc: false,
          request_zero_power_in_idle: true
        },
        connections: {
          bsp: [
            {
              module_id: 'yeti_driver_1',
              implementation_id: 'board_support'
            }
          ],
          powermeter_grid_side: [
            {
              module_id: 'yeti_driver_1',
              implementation_id: 'powermeter'
            }
          ],
          slac: [ { module_id: 'slac', implementation_id: 'evse' } ],
          hlc: [
            {
              module_id: 'iso15118_charger',
              implementation_id: 'charger'
            }
          ]
        }
      },
      evse_manager_2: {
        module: 'EvseManager',
        mapping: { module: { evse: 2 } },
        config_module: {
          connector_id: 2,
          evse_id: '2',
          connector_type: 'cType2',
          session_logging: true,
          session_logging_xml: false,
          session_logging_path: '/tmp',
          ac_hlc_enabled: false,
          ac_hlc_use_5percent: false,
          ac_enforce_hlc: false,
          request_zero_power_in_idle: true
        },
        connections: {
          bsp: [
            {
              module_id: 'yeti_driver_2',
              implementation_id: 'board_support'
            }
          ],
          powermeter_grid_side: [
            {
              module_id: 'yeti_driver_2',
              implementation_id: 'powermeter'
            }
          ],
          slac: [ { module_id: 'slac', implementation_id: 'evse' } ],
          hlc: [
            {
              module_id: 'iso15118_charger',
              implementation_id: 'charger'
            }
          ]
        }
      },
      yeti_driver_1: {
        module: 'YetiSimulator',
        mapping: { module: { evse: 1 } },
        config_module: { connector_id: 1 }
      },
      yeti_driver_2: {
        module: 'YetiSimulator',
        mapping: { module: { evse: 2 } },
        config_module: { connector_id: 2 }
      },
      slac: { module: 'SlacSimulator' },
      ev_manager_1: {
        module: 'EvManager',
        config_module: {
          connector_id: 1,
          auto_enable: true,
          auto_exec: false,
          auto_exec_commands: 'sleep 1;iec_wait_pwr_ready;sleep 1;draw_power_regulated 16,3;sleep 30;unplug'
        },
        connections: {
          ev_board_support: [
            {
              module_id: 'yeti_driver_1',
              implementation_id: 'ev_board_support'
            }
          ],
          ev: [ { module_id: 'iso15118_car', implementation_id: 'ev' } ],
          slac: [ { module_id: 'slac', implementation_id: 'ev' } ]
        }
      },
      ev_manager_2: {
        module: 'EvManager',
        config_module: { connector_id: 2, auto_enable: true, auto_exec: false },
        connections: {
          ev_board_support: [
            {
              module_id: 'yeti_driver_2',
              implementation_id: 'ev_board_support'
            }
          ],
          ev: [ { module_id: 'iso15118_car', implementation_id: 'ev' } ],
          slac: [ { module_id: 'slac', implementation_id: 'ev' } ]
        }
      },
      ocpp: {
        module: 'OCPP201',
        connections: {
          evse_manager: [
            { module_id: 'evse_manager_1', implementation_id: 'evse' },
            { module_id: 'evse_manager_2', implementation_id: 'evse' }
          ],
          auth: [ { module_id: 'auth', implementation_id: 'main' } ],
          system: [ { module_id: 'system', implementation_id: 'main' } ],
          security: [ { module_id: 'evse_security', implementation_id: 'main' } ],
          evse_energy_sink: [
            {
              module_id: 'grid_connection_point',
              implementation_id: 'external_limits'
            },
            {
              module_id: 'evse_manager_1_ocpp_sink',
              implementation_id: 'external_limits'
            },
            {
              module_id: 'evse_manager_2_ocpp_sink',
              implementation_id: 'external_limits'
            }
          ],
          reservation: [ { module_id: 'auth', implementation_id: 'reservation' } ]
        }
      },
      persistent_store: { module: 'PersistentStore' },
      evse_security: {
        module: 'EvseSecurity',
        config_module: { private_key_password: '123456' }
      },
      token_provider_1: { module: 'DummyTokenProviderManual' },
      auth: {
        module: 'Auth',
        config_module: { connection_timeout: 60, selection_algorithm: 'FindFirst' },
        connections: {
          token_provider: [
            {
              module_id: 'token_provider_1',
              implementation_id: 'main'
            },
            { module_id: 'ocpp', implementation_id: 'auth_provider' }
          ],
          token_validator: [
            { module_id: 'ocpp', implementation_id: 'auth_validator' }
          ],
          evse_manager: [
            { module_id: 'evse_manager_1', implementation_id: 'evse' },
            { module_id: 'evse_manager_2', implementation_id: 'evse' }
          ],
          kvs: [
            {
              module_id: 'persistent_store',
              implementation_id: 'main'
            }
          ]
        }
      },
      energy_manager: {
        module: 'EnergyManager',
        connections: {
          energy_trunk: [
            {
              module_id: 'grid_connection_point',
              implementation_id: 'energy_grid'
            }
          ]
        }
      },
      evse_manager_1_ocpp_sink: {
        module: 'EnergyNode',
        mapping: { module: { evse: 1 } },
        config_module: { fuse_limit_A: 32, phase_count: 3 },
        connections: {
          energy_consumer: [
            {
              module_id: 'evse_manager_1',
              implementation_id: 'energy_grid'
            }
          ]
        }
      },
      evse_manager_2_ocpp_sink: {
        module: 'EnergyNode',
        mapping: { module: { evse: 2 } },
        config_module: { fuse_limit_A: 32, phase_count: 3 },
        connections: {
          energy_consumer: [
            {
              module_id: 'evse_manager_2',
              implementation_id: 'energy_grid'
            }
          ]
        }
      },
      evse_manager_1_api_sink: {
        module: 'EnergyNode',
        mapping: { module: { evse: 1 } },
        config_module: { fuse_limit_A: 32, phase_count: 3 },
        connections: {
          energy_consumer: [
            {
              module_id: 'evse_manager_1_ocpp_sink',
              implementation_id: 'energy_grid'
            }
          ],
          powermeter: [
            {
              module_id: 'yeti_driver_1',
              implementation_id: 'powermeter'
            }
          ]
        }
      },
      evse_manager_2_api_sink: {
        module: 'EnergyNode',
        mapping: { module: { evse: 2 } },
        config_module: { fuse_limit_A: 32, phase_count: 3 },
        connections: {
          energy_consumer: [
            {
              module_id: 'evse_manager_2_ocpp_sink',
              implementation_id: 'energy_grid'
            }
          ],
          powermeter: [
            {
              module_id: 'yeti_driver_2',
              implementation_id: 'powermeter'
            }
          ]
        }
      },
      grid_connection_point: {
        module: 'EnergyNode',
        mapping: { module: { evse: 0 } },
        config_module: { fuse_limit_A: 40, phase_count: 3 },
        connections: {
          price_information: [],
          energy_consumer: [
            {
              module_id: 'evse_manager_1_api_sink',
              implementation_id: 'energy_grid'
            },
            {
              module_id: 'evse_manager_2_api_sink',
              implementation_id: 'energy_grid'
            }
          ]
        }
      },
      api: {
        module: 'API',
        connections: {
          evse_manager: [
            { module_id: 'evse_manager_1', implementation_id: 'evse' },
            { module_id: 'evse_manager_2', implementation_id: 'evse' }
          ],
          ocpp: [ { module_id: 'ocpp', implementation_id: 'ocpp_generic' } ],
          error_history: [
            {
              module_id: 'error_history',
              implementation_id: 'error_history'
            }
          ],
          evse_energy_sink: [
            {
              module_id: 'evse_manager_1_api_sink',
              implementation_id: 'external_limits'
            },
            {
              module_id: 'evse_manager_2_api_sink',
              implementation_id: 'external_limits'
            }
          ]
        }
      },
      error_history: {
        module: 'ErrorHistory',
        config_implementation: { error_history: { database_path: '/tmp/error_history.db' } }
      },
      system: {
        module: 'System',
        connections: {},
        config_module: { DefaultRetries: 1, DefaultRetryInterval: 1, ResetDelay: 0 }
      }
    },
    'x-module-layout': {
      iso15118_charger: {
        position: { x: -29, y: 21 },
        terminals: {
          top: [],
          right: [
            {
              id: 'charger',
              interface: 'ISO15118_charger',
              type: 'provide'
            },
            {
              id: 'extensions',
              interface: 'iso15118_extensions',
              type: 'provide'
            }
          ],
          bottom: [],
          left: [
            {
              id: 'security',
              interface: 'evse_security',
              type: 'requirement'
            }
          ]
        }
      },
      iso15118_car: {
        position: { x: -42, y: 1 },
        terminals: {
          top: [],
          right: [ { id: 'ev', interface: 'ISO15118_ev', type: 'provide' } ],
          bottom: [],
          left: []
        }
      },
      evse_manager_1: {
        position: { x: 2, y: 10 },
        terminals: {
          top: [],
          right: [
            { id: 'evse', interface: 'evse_manager', type: 'provide' },
            {
              id: 'random_delay',
              interface: 'uk_random_delay',
              type: 'provide'
            },
            {
              id: 'token_provider',
              interface: 'auth_token_provider',
              type: 'provide'
            }
          ],
          bottom: [
            { id: 'energy_grid', interface: 'energy', type: 'provide' }
          ],
          left: [
            { id: 'slac', interface: 'slac', type: 'requirement' },
            { id: 'ac_rcd', interface: 'ac_rcd', type: 'requirement' },
            {
              id: 'bsp',
              interface: 'evse_board_support',
              type: 'requirement'
            },
            {
              id: 'connector_lock',
              interface: 'connector_lock',
              type: 'requirement'
            },
            {
              id: 'imd',
              interface: 'isolation_monitor',
              type: 'requirement'
            },
            {
              id: 'over_voltage_monitor',
              interface: 'over_voltage_monitor',
              type: 'requirement'
            },
            {
              id: 'powermeter_car_side',
              interface: 'powermeter',
              type: 'requirement'
            },
            {
              id: 'powermeter_grid_side',
              interface: 'powermeter',
              type: 'requirement'
            },
            {
              id: 'powersupply_DC',
              interface: 'power_supply_DC',
              type: 'requirement'
            },
            { id: 'store', interface: 'kvs', type: 'requirement' },
            {
              id: 'hlc',
              interface: 'ISO15118_charger',
              type: 'requirement'
            }
          ]
        }
      },
      evse_manager_2: {
        position: { x: 2, y: -16 },
        terminals: {
          top: [
            { id: 'energy_grid', interface: 'energy', type: 'provide' }
          ],
          right: [
            { id: 'evse', interface: 'evse_manager', type: 'provide' },
            {
              id: 'random_delay',
              interface: 'uk_random_delay',
              type: 'provide'
            },
            {
              id: 'token_provider',
              interface: 'auth_token_provider',
              type: 'provide'
            }
          ],
          bottom: [],
          left: [
            { id: 'ac_rcd', interface: 'ac_rcd', type: 'requirement' },
            {
              id: 'imd',
              interface: 'isolation_monitor',
              type: 'requirement'
            },
            {
              id: 'over_voltage_monitor',
              interface: 'over_voltage_monitor',
              type: 'requirement'
            },
            {
              id: 'powermeter_grid_side',
              interface: 'powermeter',
              type: 'requirement'
            },
            {
              id: 'connector_lock',
              interface: 'connector_lock',
              type: 'requirement'
            },
            {
              id: 'powermeter_car_side',
              interface: 'powermeter',
              type: 'requirement'
            },
            {
              id: 'powersupply_DC',
              interface: 'power_supply_DC',
              type: 'requirement'
            },
            {
              id: 'bsp',
              interface: 'evse_board_support',
              type: 'requirement'
            },
            { id: 'slac', interface: 'slac', type: 'requirement' },
            { id: 'store', interface: 'kvs', type: 'requirement' },
            {
              id: 'hlc',
              interface: 'ISO15118_charger',
              type: 'requirement'
            }
          ]
        }
      },
      yeti_driver_1: {
        position: { x: -42, y: 8 },
        terminals: {
          top: [],
          right: [
            {
              id: 'ev_board_support',
              interface: 'ev_board_support',
              type: 'provide'
            },
            {
              id: 'board_support',
              interface: 'evse_board_support',
              type: 'provide'
            },
            {
              id: 'connector_lock',
              interface: 'connector_lock',
              type: 'provide'
            },
            {
              id: 'powermeter',
              interface: 'powermeter',
              type: 'provide'
            },
            { id: 'rcd', interface: 'ac_rcd', type: 'provide' }
          ],
          bottom: [],
          left: []
        }
      },
      yeti_driver_2: {
        position: { x: -42, y: -13 },
        terminals: {
          top: [],
          right: [
            {
              id: 'powermeter',
              interface: 'powermeter',
              type: 'provide'
            },
            {
              id: 'board_support',
              interface: 'evse_board_support',
              type: 'provide'
            },
            {
              id: 'connector_lock',
              interface: 'connector_lock',
              type: 'provide'
            },
            {
              id: 'ev_board_support',
              interface: 'ev_board_support',
              type: 'provide'
            },
            { id: 'rcd', interface: 'ac_rcd', type: 'provide' }
          ],
          bottom: [],
          left: []
        }
      },
      slac: {
        position: { x: -42, y: -6 },
        terminals: {
          top: [],
          right: [
            { id: 'ev', interface: 'ev_slac', type: 'provide' },
            { id: 'evse', interface: 'slac', type: 'provide' }
          ],
          bottom: [],
          left: []
        }
      },
      ev_manager_1: {
        position: { x: 2, y: 2 },
        terminals: {
          top: [],
          right: [
            { id: 'main', interface: 'car_simulator', type: 'provide' }
          ],
          bottom: [],
          left: [
            { id: 'slac', interface: 'ev_slac', type: 'requirement' },
            { id: 'ev', interface: 'ISO15118_ev', type: 'requirement' },
            {
              id: 'ev_board_support',
              interface: 'ev_board_support',
              type: 'requirement'
            },
            {
              id: 'powermeter',
              interface: 'powermeter',
              type: 'requirement'
            }
          ]
        }
      },
      ev_manager_2: {
        position: { x: 2, y: -7 },
        terminals: {
          top: [],
          right: [
            { id: 'main', interface: 'car_simulator', type: 'provide' }
          ],
          bottom: [],
          left: [
            {
              id: 'ev_board_support',
              interface: 'ev_board_support',
              type: 'requirement'
            },
            { id: 'slac', interface: 'ev_slac', type: 'requirement' },
            {
              id: 'powermeter',
              interface: 'powermeter',
              type: 'requirement'
            },
            { id: 'ev', interface: 'ISO15118_ev', type: 'requirement' }
          ]
        }
      },
      ocpp: {
        position: { x: 56, y: 14 },
        terminals: {
          top: [
            { id: 'auth', interface: 'auth', type: 'requirement' },
            {
              id: 'reservation',
              interface: 'reservation',
              type: 'requirement'
            },
            {
              id: 'auth_validator',
              interface: 'auth_token_validator',
              type: 'provide'
            },
            {
              id: 'auth_provider',
              interface: 'auth_token_provider',
              type: 'provide'
            }
          ],
          right: [
            {
              id: 'data_transfer',
              interface: 'ocpp_data_transfer',
              type: 'provide'
            },
            {
              id: 'session_cost',
              interface: 'session_cost',
              type: 'provide'
            }
          ],
          bottom: [],
          left: [
            {
              id: 'evse_energy_sink',
              interface: 'external_energy_limits',
              type: 'requirement'
            },
            {
              id: 'data_transfer',
              interface: 'ocpp_data_transfer',
              type: 'requirement'
            },
            {
              id: 'evse_manager',
              interface: 'evse_manager',
              type: 'requirement'
            },
            {
              id: 'display_message',
              interface: 'display_message',
              type: 'requirement'
            },
            {
              id: 'extensions_15118',
              interface: 'iso15118_extensions',
              type: 'requirement'
            },
            {
              id: 'security',
              interface: 'evse_security',
              type: 'requirement'
            },
            { id: 'system', interface: 'system', type: 'requirement' },
            { id: 'ocpp_generic', interface: 'ocpp', type: 'provide' }
          ]
        }
      },
      persistent_store: {
        position: { x: 48, y: -11 },
        terminals: {
          top: [],
          right: [],
          bottom: [ { id: 'main', interface: 'kvs', type: 'provide' } ],
          left: []
        }
      },
      evse_security: {
        position: { x: -48, y: 15 },
        terminals: {
          top: [],
          right: [
            { id: 'main', interface: 'evse_security', type: 'provide' }
          ],
          bottom: [],
          left: []
        }
      },
      token_provider_1: {
        position: { x: 71, y: -1 },
        terminals: {
          top: [],
          right: [],
          bottom: [],
          left: [
            {
              id: 'main',
              interface: 'auth_token_provider',
              type: 'provide'
            }
          ]
        }
      },
      auth: {
        position: { x: 48, y: -1 },
        terminals: {
          top: [ { id: 'kvs', interface: 'kvs', type: 'requirement' } ],
          right: [
            {
              id: 'token_provider',
              interface: 'auth_token_provider',
              type: 'requirement'
            }
          ],
          bottom: [
            { id: 'main', interface: 'auth', type: 'provide' },
            {
              id: 'reservation',
              interface: 'reservation',
              type: 'provide'
            },
            {
              id: 'token_validator',
              interface: 'auth_token_validator',
              type: 'requirement'
            }
          ],
          left: [
            {
              id: 'evse_manager',
              interface: 'evse_manager',
              type: 'requirement'
            }
          ]
        }
      },
      energy_manager: {
        position: { x: 22, y: -49 },
        terminals: {
          top: [],
          right: [
            {
              id: 'main',
              interface: 'energy_manager',
              type: 'provide'
            }
          ],
          bottom: [
            {
              id: 'energy_trunk',
              interface: 'energy',
              type: 'requirement'
            }
          ],
          left: []
        }
      },
      evse_manager_1_ocpp_sink: {
        position: { x: 2, y: 20 },
        terminals: {
          top: [
            {
              id: 'energy_consumer',
              interface: 'energy',
              type: 'requirement'
            }
          ],
          right: [
            {
              id: 'external_limits',
              interface: 'external_energy_limits',
              type: 'provide'
            }
          ],
          bottom: [
            { id: 'energy_grid', interface: 'energy', type: 'provide' }
          ],
          left: [
            {
              id: 'powermeter',
              interface: 'powermeter',
              type: 'requirement'
            },
            {
              id: 'price_information',
              interface: 'energy_price_information',
              type: 'requirement'
            }
          ]
        }
      },
      evse_manager_2_ocpp_sink: {
        position: { x: 2, y: -24 },
        terminals: {
          top: [
            { id: 'energy_grid', interface: 'energy', type: 'provide' }
          ],
          right: [
            {
              id: 'external_limits',
              interface: 'external_energy_limits',
              type: 'provide'
            }
          ],
          bottom: [
            {
              id: 'energy_consumer',
              interface: 'energy',
              type: 'requirement'
            }
          ],
          left: [
            {
              id: 'powermeter',
              interface: 'powermeter',
              type: 'requirement'
            },
            {
              id: 'price_information',
              interface: 'energy_price_information',
              type: 'requirement'
            }
          ]
        }
      },
      evse_manager_1_api_sink: {
        position: { x: 2, y: 28 },
        terminals: {
          top: [
            {
              id: 'energy_consumer',
              interface: 'energy',
              type: 'requirement'
            }
          ],
          right: [
            { id: 'energy_grid', interface: 'energy', type: 'provide' },
            {
              id: 'external_limits',
              interface: 'external_energy_limits',
              type: 'provide'
            }
          ],
          bottom: [],
          left: [
            {
              id: 'powermeter',
              interface: 'powermeter',
              type: 'requirement'
            },
            {
              id: 'price_information',
              interface: 'energy_price_information',
              type: 'requirement'
            }
          ]
        }
      },
      evse_manager_2_api_sink: {
        position: { x: 2, y: -32 },
        terminals: {
          top: [],
          right: [
            { id: 'energy_grid', interface: 'energy', type: 'provide' },
            {
              id: 'external_limits',
              interface: 'external_energy_limits',
              type: 'provide'
            }
          ],
          bottom: [
            {
              id: 'energy_consumer',
              interface: 'energy',
              type: 'requirement'
            }
          ],
          left: [
            {
              id: 'powermeter',
              interface: 'powermeter',
              type: 'requirement'
            },
            {
              id: 'price_information',
              interface: 'energy_price_information',
              type: 'requirement'
            }
          ]
        }
      },
      grid_connection_point: {
        position: { x: 22, y: -41 },
        terminals: {
          top: [
            { id: 'energy_grid', interface: 'energy', type: 'provide' }
          ],
          right: [
            {
              id: 'external_limits',
              interface: 'external_energy_limits',
              type: 'provide'
            }
          ],
          bottom: [
            {
              id: 'energy_consumer',
              interface: 'energy',
              type: 'requirement'
            }
          ],
          left: [
            {
              id: 'powermeter',
              interface: 'powermeter',
              type: 'requirement'
            },
            {
              id: 'price_information',
              interface: 'energy_price_information',
              type: 'requirement'
            }
          ]
        }
      },
      api: {
        position: { x: 36, y: 26 },
        terminals: {
          top: [
            {
              id: 'evse_manager',
              interface: 'evse_manager',
              type: 'requirement'
            },
            { id: 'ocpp', interface: 'ocpp', type: 'requirement' }
          ],
          right: [
            {
              id: 'error_history',
              interface: 'error_history',
              type: 'requirement'
            },
            { id: 'main', interface: 'empty', type: 'provide' }
          ],
          bottom: [],
          left: [
            {
              id: 'evse_energy_sink',
              interface: 'external_energy_limits',
              type: 'requirement'
            },
            {
              id: 'random_delay',
              interface: 'uk_random_delay',
              type: 'requirement'
            }
          ]
        }
      },
      error_history: {
        position: { x: 56, y: 21 },
        terminals: {
          top: [],
          right: [],
          bottom: [],
          left: [
            {
              id: 'error_history',
              interface: 'error_history',
              type: 'provide'
            }
          ]
        }
      },
      system: {
        position: { x: 2, y: 35 },
        terminals: {
          top: [],
          right: [ { id: 'main', interface: 'system', type: 'provide' } ],
          bottom: [],
          left: []
        }
      }
    }
  },
  'config-sil': {
    settings: { telemetry_enabled: true },
    active_modules: {
      api: {
        connections: {
          evse_manager: [ { implementation_id: 'evse', module_id: 'connector_1' } ],
          error_history: [
            {
              module_id: 'error_history',
              implementation_id: 'error_history'
            }
          ]
        },
        module: 'API'
      },
      error_history: {
        module: 'ErrorHistory',
        config_implementation: { error_history: { database_path: '/tmp/error_history.db' } }
      },
      auth: {
        config_module: {
          connection_timeout: 10,
          prioritize_authorization_over_stopping_transaction: true,
          selection_algorithm: 'FindFirst',
          ignore_connector_faults: true
        },
        connections: {
          evse_manager: [ { implementation_id: 'evse', module_id: 'connector_1' } ],
          token_provider: [
            { implementation_id: 'main', module_id: 'token_provider' }
          ],
          token_validator: [
            { implementation_id: 'main', module_id: 'token_validator' }
          ]
        },
        module: 'Auth'
      },
      ev_manager: {
        config_module: {
          auto_enable: true,
          auto_exec: false,
          auto_exec_commands: 'sleep 1;iec_wait_pwr_ready;sleep 1;draw_power_regulated 16,3;sleep 30;unplug',
          connector_id: 1
        },
        connections: {
          ev: [ { implementation_id: 'ev', module_id: 'iso15118_car' } ],
          ev_board_support: [
            {
              implementation_id: 'ev_board_support',
              module_id: 'connector_1_powerpath'
            }
          ],
          slac: [ { implementation_id: 'ev', module_id: 'slac' } ]
        },
        module: 'EvManager'
      },
      energy_manager: {
        config_module: {
          switch_3ph1ph_while_charging_mode: 'Both',
          switch_3ph1ph_max_nr_of_switches_per_session: 5,
          switch_3ph1ph_time_hysteresis_s: 20,
          switch_3ph1ph_power_hysteresis_W: 1000,
          switch_3ph1ph_switch_limit_stickyness: 'SinglePhase',
          schedule_interval_duration: 60,
          schedule_total_duration: 10,
          debug: false
        },
        connections: {
          energy_trunk: [
            {
              implementation_id: 'energy_grid',
              module_id: 'grid_connection_point'
            }
          ]
        },
        module: 'EnergyManager'
      },
      connector_1: {
        config_module: {
          ac_enforce_hlc: false,
          ac_hlc_enabled: true,
          ac_hlc_use_5percent: false,
          ac_nominal_voltage: 230,
          charge_mode: 'AC',
          connector_id: 1,
          ev_receipt_required: false,
          evse_id: 'DE*PNX*E12345*1',
          has_ventilation: true,
          max_current_import_A: 32,
          max_current_export_A: 32,
          payment_enable_contract: true,
          payment_enable_eim: true,
          session_logging: true,
          session_logging_path: '/tmp/everest-logs',
          session_logging_xml: false,
          switch_3ph1ph_delay_s: 5,
          switch_3ph1ph_cp_state: 'X1'
        },
        connections: {
          bsp: [
            {
              implementation_id: 'board_support',
              module_id: 'connector_1_powerpath'
            }
          ],
          hlc: [
            {
              implementation_id: 'charger',
              module_id: 'iso15118_charger'
            }
          ],
          powermeter_grid_side: [
            {
              implementation_id: 'powermeter',
              module_id: 'connector_1_powerpath'
            }
          ],
          slac: [ { implementation_id: 'evse', module_id: 'slac' } ],
          ac_rcd: [
            {
              implementation_id: 'rcd',
              module_id: 'connector_1_powerpath'
            }
          ],
          connector_lock: [
            {
              implementation_id: 'connector_lock',
              module_id: 'connector_1_powerpath'
            }
          ]
        },
        module: 'EvseManager',
        telemetry: { id: 1 }
      },
      grid_connection_point: {
        config_module: { fuse_limit_A: 40, phase_count: 3 },
        connections: {
          energy_consumer: [
            {
              implementation_id: 'energy_grid',
              module_id: 'connector_1'
            }
          ]
        },
        module: 'EnergyNode'
      },
      iso15118_car: {
        config_module: { device: 'auto', supported_ISO15118_2: true },
        connections: {},
        module: 'PyEvJosev'
      },
      iso15118_charger: {
        config_module: {
          device: 'auto',
          tls_security: 'allow',
          supported_DIN70121: false
        },
        module: 'EvseV2G',
        connections: {
          security: [ { module_id: 'evse_security', implementation_id: 'main' } ]
        }
      },
      evse_security: {
        module: 'EvseSecurity',
        config_module: { private_key_password: '123456' }
      },
      persistent_store: {
        config_module: { sqlite_db_file_path: 'everest_persistent_store.db' },
        connections: {},
        module: 'PersistentStore'
      },
      setup: {
        config_module: {
          initialized_by_default: true,
          localization: true,
          online_check_host: 'lfenergy.org',
          setup_simulation: true,
          setup_wifi: false
        },
        connections: {
          store: [
            {
              implementation_id: 'main',
              module_id: 'persistent_store'
            }
          ]
        },
        module: 'Setup'
      },
      slac: { module: 'SlacSimulator' },
      token_provider: {
        config_implementation: { main: { timeout: 10, token: 'DEADBEEF' } },
        connections: {
          evse: [ { implementation_id: 'evse', module_id: 'connector_1' } ]
        },
        module: 'DummyTokenProvider'
      },
      token_validator: {
        config_implementation: {
          main: {
            sleep: 0.25,
            validation_reason: 'Token seems valid',
            validation_result: 'Accepted'
          }
        },
        connections: {},
        module: 'DummyTokenValidator'
      },
      connector_1_powerpath: {
        config_module: { connector_id: 1 },
        connections: {},
        module: 'YetiSimulator',
        telemetry: { id: 1 }
      }
    },
    'x-module-layout': {
      api: {
        position: { x: 33, y: 13 },
        terminals: {
          bottom: [],
          left: [
            {
              id: 'evse_manager',
              interface: 'evse_manager',
              type: 'requirement'
            }
          ],
          right: [ { id: 'main', interface: 'empty', type: 'provide' } ],
          top: []
        }
      },
      auth: {
        position: { x: 33, y: 2 },
        terminals: {
          bottom: [
            { id: 'main', interface: 'auth', type: 'provide' },
            {
              id: 'reservation',
              interface: 'reservation',
              type: 'provide'
            }
          ],
          left: [
            {
              id: 'evse_manager',
              interface: 'evse_manager',
              type: 'requirement'
            }
          ],
          right: [
            {
              id: 'token_validator',
              interface: 'auth_token_validator',
              type: 'requirement'
            }
          ],
          top: [
            {
              id: 'token_provider',
              interface: 'auth_token_provider',
              type: 'requirement'
            }
          ]
        }
      },
      ev_manager: {
        position: { x: 53, y: 33 },
        terminals: {
          bottom: [],
          left: [
            {
              id: 'simulation_control',
              interface: 'yeti_simulation_control',
              type: 'requirement'
            },
            { id: 'slac', interface: 'slac', type: 'requirement' }
          ],
          right: [ { id: 'main', interface: 'ev_manager', type: 'provide' } ],
          top: [
            { id: 'ev', interface: 'ISO15118_ev', type: 'requirement' }
          ]
        }
      },
      connector_1: {
        position: { x: 13, y: 23 },
        terminals: {
          bottom: [
            {
              id: 'powersupply_DC',
              interface: 'power_supply_DC',
              type: 'requirement'
            },
            {
              id: 'imd',
              interface: 'isolation_monitor',
              type: 'requirement'
            },
            {
              id: 'powermeter_car_side',
              interface: 'powermeter',
              type: 'requirement'
            },
            {
              id: 'token_provider',
              interface: 'auth_token_provider',
              type: 'provide'
            },
            { id: 'slac', interface: 'slac', type: 'requirement' }
          ],
          left: [
            {
              id: 'hlc',
              interface: 'ISO15118_charger',
              type: 'requirement'
            }
          ],
          right: [
            {
              id: 'bsp',
              interface: 'board_support_AC',
              type: 'requirement'
            },
            {
              id: 'powermeter_grid_side',
              interface: 'powermeter',
              type: 'requirement'
            }
          ],
          top: [
            { id: 'energy_grid', interface: 'energy', type: 'provide' },
            { id: 'evse', interface: 'evse_manager', type: 'provide' }
          ]
        }
      },
      connector_1_powerpath: {
        position: { x: 33, y: 23 },
        terminals: {
          bottom: [
            {
              id: 'debug_keepalive',
              interface: 'debug_json',
              type: 'provide'
            },
            {
              id: 'debug_powermeter',
              interface: 'debug_json',
              type: 'provide'
            },
            {
              id: 'debug_yeti',
              interface: 'debug_json',
              type: 'provide'
            },
            {
              id: 'yeti_extras',
              interface: 'yeti_extras',
              type: 'provide'
            },
            {
              id: 'debug_state',
              interface: 'debug_json',
              type: 'provide'
            }
          ],
          left: [
            {
              id: 'board_support',
              interface: 'board_support_AC',
              type: 'provide'
            },
            {
              id: 'powermeter',
              interface: 'powermeter',
              type: 'provide'
            }
          ],
          right: [
            {
              id: 'yeti_simulation_control',
              interface: 'yeti_simulation_control',
              type: 'provide'
            }
          ],
          top: []
        }
      },
      energy_manager: {
        position: { x: -5, y: 2 },
        terminals: {
          bottom: [
            {
              id: 'energy_trunk',
              interface: 'energy',
              type: 'requirement'
            }
          ],
          left: [],
          right: [
            {
              id: 'main',
              interface: 'energy_manager',
              type: 'provide'
            }
          ],
          top: []
        }
      },
      grid_connection_point: {
        position: { x: -5, y: 13 },
        terminals: {
          bottom: [],
          left: [
            {
              id: 'price_information',
              interface: 'energy_price_information',
              type: 'requirement'
            },
            {
              id: 'powermeter',
              interface: 'powermeter',
              type: 'requirement'
            }
          ],
          right: [
            {
              id: 'external_limits',
              interface: 'external_energy_limits',
              type: 'provide'
            },
            {
              id: 'energy_consumer',
              interface: 'energy',
              type: 'requirement'
            }
          ],
          top: [
            { id: 'energy_grid', interface: 'energy', type: 'provide' }
          ]
        }
      },
      iso15118_car: {
        position: { x: 53, y: 23 },
        terminals: {
          bottom: [ { id: 'ev', interface: 'ISO15118_ev', type: 'provide' } ],
          left: [],
          right: [ { id: 'main', interface: 'empty', type: 'provide' } ],
          top: []
        }
      },
      iso15118_charger: {
        position: { x: -5, y: 23 },
        terminals: {
          bottom: [],
          left: [],
          right: [
            {
              id: 'charger',
              interface: 'ISO15118_charger',
              type: 'provide'
            }
          ],
          top: []
        }
      },
      persistent_store: {
        position: { x: -5, y: 40 },
        terminals: {
          bottom: [],
          left: [],
          right: [ { id: 'main', interface: 'kvs', type: 'provide' } ],
          top: []
        }
      },
      setup: {
        position: { x: 13, y: 40 },
        terminals: {
          bottom: [],
          left: [ { id: 'store', interface: 'kvs', type: 'requirement' } ],
          right: [ { id: 'main', interface: 'empty', type: 'provide' } ],
          top: []
        }
      },
      slac: {
        position: { x: 33, y: 33 },
        terminals: {
          bottom: [],
          left: [ { id: 'evse', interface: 'slac', type: 'provide' } ],
          right: [ { id: 'ev', interface: 'slac', type: 'provide' } ],
          top: []
        }
      },
      token_provider: {
        position: { x: 33, y: -9 },
        terminals: {
          bottom: [
            {
              id: 'main',
              interface: 'auth_token_provider',
              type: 'provide'
            }
          ],
          left: [
            {
              id: 'evse',
              interface: 'evse_manager',
              type: 'requirement'
            }
          ],
          right: [],
          top: []
        }
      },
      token_validator: {
        position: { x: 51, y: 2 },
        terminals: {
          bottom: [],
          left: [
            {
              id: 'main',
              interface: 'auth_token_validator',
              type: 'provide'
            }
          ],
          right: [],
          top: []
        }
      }
    }
  }
} as EverestConfigList;
