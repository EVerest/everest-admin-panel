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
        connections: {
          security: [ { module_id: 'evse_security', implementation_id: 'main' } ]
        },
        config_module: {
          auth_timeout_eim: 300,
          auth_timeout_pnc: 55,
          device: 'auto',
          enable_sdp_server: true,
          supported_DIN70121: true,
          supported_ISO15118_2: true,
          terminate_connection_on_failed_response: false,
          tls_key_logging: false,
          tls_key_logging_path: '/tmp',
          tls_security: 'allow',
          tls_timeout: 15000,
          verify_contract_cert_chain: false
        }
      },
      iso15118_car: {
        module: 'PyEvJosev',
        connections: {},
        config_module: {
          device: 'auto',
          enable_tls_1_3: false,
          enforce_tls: false,
          is_cert_install_needed: false,
          supported_DIN70121: true,
          supported_ISO15118_2: true,
          supported_ISO15118_20_AC: false,
          supported_ISO15118_20_DC: false,
          tls_active: false
        }
      },
      evse_manager: {
        module: 'EvseManager',
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
        },
        mapping: { module: { evse: 1, connector: 1 } },
        config_module: {
          ac_enforce_hlc: false,
          ac_hlc_enabled: false,
          ac_hlc_use_5percent: false,
          ac_nominal_voltage: 230,
          ac_with_soc: false,
          autocharge_use_slac_instead_of_hlc: false,
          cable_check_enable_imd_self_test: true,
          cable_check_wait_below_60V_before_finish: true,
          cable_check_wait_number_of_imd_measurements: 1,
          central_contract_validation_allowed: false,
          charge_mode: 'DC',
          connector_id: 1,
          connector_type: 'Unknown',
          contract_certificate_installation_enabled: true,
          dbg_hlc_auth_after_tstep: false,
          dc_isolation_voltage_V: 0,
          disable_authentication: false,
          enable_autocharge: false,
          ev_receipt_required: false,
          evse_id: 'DE*PNX*E12345*1',
          evse_id_din: '49A80737A45678',
          external_ready_to_start_charging: false,
          fail_on_powermeter_errors: true,
          hack_allow_bpt_with_iso2: true,
          hack_fix_hlc_integer_current_requests: false,
          hack_pause_imd_during_precharge: false,
          hack_present_current_offset: 0,
          hack_simplified_mode_limit_10A: false,
          hack_skoda_enyaq: false,
          hack_sleep_in_cable_check: 0,
          hack_sleep_in_cable_check_volkswagen: 0,
          has_ventilation: true,
          initial_meter_value_timeout_ms: 5000,
          inoperative_error_use_vendor_id: false,
          lock_connector_in_state_b: true,
          logfile_suffix: 'session_uuid',
          max_current_export_A: 32,
          max_current_import_A: 32,
          payment_enable_contract: true,
          payment_enable_eim: true,
          raise_mrec9: false,
          request_zero_power_in_idle: false,
          sae_j2847_2_bpt_enabled: false,
          sae_j2847_2_bpt_mode: 'V2G',
          session_id_type: 'UUID',
          session_logging: true,
          session_logging_path: '/tmp/everest-logs',
          session_logging_xml: false,
          sleep_before_enabling_pwm_hlc_mode_ms: 500,
          soft_over_current_measurement_noise_A: 0.5,
          soft_over_current_timeout_ms: 7000,
          soft_over_current_tolerance_percent: 10,
          state_F_after_fault_ms: 300,
          switch_3ph1ph_cp_state: 'X1',
          switch_3ph1ph_delay_s: 10,
          uk_smartcharging_random_delay_at_any_change: true,
          uk_smartcharging_random_delay_enable: false,
          uk_smartcharging_random_delay_max_duration: 600
        }
      },
      powersupply_dc: {
        module: 'DCSupplySimulator',
        connections: {},
        config_implementation: {
          main: {
            bidirectional: true,
            max_current: 200,
            max_power: 150000,
            max_voltage: 900,
            min_current: 1,
            min_voltage: 200
          }
        }
      },
      yeti_driver: {
        module: 'YetiSimulator',
        connections: {},
        config_module: { connector_id: 1, reset_powermeter_on_session_start: true }
      },
      slac: { module: 'SlacSimulator', connections: {} },
      imd: {
        module: 'IMDSimulator',
        connections: {},
        config_implementation: {
          main: {
            interval: 1000,
            resistance_F_Ohm: 900000,
            selftest_success: true
          }
        }
      },
      ovm: {
        module: 'OVMSimulator',
        connections: {},
        config_implementation: { main: { simulate_error: false, simulate_error_delay: 5 } }
      },
      ev_manager: {
        module: 'EvManager',
        connections: {
          ev_board_support: [
            {
              module_id: 'yeti_driver',
              implementation_id: 'ev_board_support'
            }
          ],
          ev: [ { module_id: 'iso15118_car', implementation_id: 'ev' } ],
          slac: [ { module_id: 'slac', implementation_id: 'ev' } ]
        },
        config_module: {
          ac_nominal_voltage: 230,
          auto_enable: true,
          auto_exec: false,
          auto_exec_commands: 'sleep 1;iec_wait_pwr_ready;sleep 1;draw_power_regulated 16,3;sleep 30;unplug',
          auto_exec_infinite: false,
          connector_id: 1,
          dc_discharge_max_current_limit: 300,
          dc_discharge_max_power_limit: 150000,
          dc_discharge_target_current: 5,
          dc_discharge_v2g_minimal_soc: 20,
          dc_energy_capacity: 60000,
          dc_max_current_limit: 300,
          dc_max_power_limit: 150000,
          dc_max_voltage_limit: 900,
          dc_target_current: 20,
          dc_target_voltage: 400,
          departure_time: 86400,
          e_amount: 0,
          keep_cross_boot_plugin_state: false,
          max_current: 16,
          soc: 30,
          support_sae_j2847: false,
          three_phases: true
        }
      },
      auth: {
        module: 'Auth',
        connections: {
          token_provider: [
            { module_id: 'token_provider', implementation_id: 'main' }
          ],
          token_validator: [
            { module_id: 'token_validator', implementation_id: 'main' }
          ],
          evse_manager: [ { module_id: 'evse_manager', implementation_id: 'evse' } ]
        },
        config_module: {
          connection_timeout: 10,
          ignore_connector_faults: false,
          master_pass_group_id: '',
          prioritize_authorization_over_stopping_transaction: true,
          selection_algorithm: 'FindFirst'
        }
      },
      token_provider: {
        module: 'DummyTokenProvider',
        connections: {
          evse: [ { module_id: 'evse_manager', implementation_id: 'evse' } ]
        },
        config_implementation: {
          main: {
            connector_id: 0,
            timeout: 10,
            token: 'TOKEN1',
            type: 'RFID'
          }
        }
      },
      token_validator: {
        module: 'DummyTokenValidator',
        connections: {},
        config_implementation: {
          main: {
            sleep: 0.25,
            validation_reason: 'Token seems valid',
            validation_result: 'Accepted'
          }
        }
      },
      evse_security: {
        module: 'EvseSecurity',
        connections: {},
        config_module: {
          csms_ca_bundle: 'ca/csms/CSMS_ROOT_CA.pem',
          csms_leaf_cert_directory: 'client/csms',
          csms_leaf_key_directory: 'client/csms',
          mf_ca_bundle: 'ca/mf/MF_ROOT_CA.pem',
          mo_ca_bundle: 'ca/mo/MO_ROOT_CA.pem',
          private_key_password: '123456',
          secc_leaf_cert_directory: 'client/cso',
          secc_leaf_key_directory: 'client/cso',
          v2g_ca_bundle: 'ca/v2g/V2G_ROOT_CA.pem'
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
        },
        config_module: {
          debug: false,
          nominal_ac_voltage: 230,
          schedule_interval_duration: 60,
          schedule_total_duration: 1,
          slice_ampere: 0.5,
          slice_watt: 500,
          switch_3ph1ph_max_nr_of_switches_per_session: 0,
          switch_3ph1ph_power_hysteresis_W: 200,
          switch_3ph1ph_switch_limit_stickyness: 'DontChange',
          switch_3ph1ph_time_hysteresis_s: 600,
          switch_3ph1ph_while_charging_mode: 'Never',
          update_interval: 1
        }
      },
      grid_connection_point: {
        module: 'EnergyNode',
        connections: {
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
        },
        config_module: { fuse_limit_A: 40, phase_count: 3 }
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
        },
        config_module: {
          charger_information_file: '',
          hw_caps_max_current_export_decimal_places: 2,
          hw_caps_max_current_export_round_to: 0,
          hw_caps_max_current_import_decimal_places: 2,
          hw_caps_max_current_import_round_to: 0,
          hw_caps_max_plug_temperature_C_decimal_places: 2,
          hw_caps_max_plug_temperature_C_round_to: 0,
          hw_caps_min_current_export_decimal_places: 2,
          hw_caps_min_current_export_round_to: 0,
          hw_caps_min_current_import_decimal_places: 2,
          hw_caps_min_current_import_round_to: 0,
          limits_max_current_decimal_places: 2,
          limits_max_current_round_to: 0,
          powermeter_VAR_decimal_places: 2,
          powermeter_VAR_round_to: 0,
          powermeter_current_decimal_places: 2,
          powermeter_current_round_to: 0,
          powermeter_energy_export_decimal_places: 2,
          powermeter_energy_export_round_to: 0,
          powermeter_energy_import_decimal_places: 2,
          powermeter_energy_import_round_to: 0,
          powermeter_frequency_decimal_places: 2,
          powermeter_frequency_round_to: 0,
          powermeter_power_decimal_places: 2,
          powermeter_power_round_to: 0,
          powermeter_voltage_decimal_places: 2,
          powermeter_voltage_round_to: 0,
          telemetry_evse_temperature_C_decimal_places: 2,
          telemetry_evse_temperature_C_round_to: 0,
          telemetry_fan_rpm_decimal_places: 2,
          telemetry_fan_rpm_round_to: 0,
          telemetry_plug_temperature_C_decimal_places: 2,
          telemetry_plug_temperature_C_round_to: 0,
          telemetry_supply_voltage_12V_decimal_places: 2,
          telemetry_supply_voltage_12V_round_to: 0,
          telemetry_supply_voltage_minus_12V_decimal_places: 2,
          telemetry_supply_voltage_minus_12V_round_to: 0
        }
      },
      error_history: {
        module: 'ErrorHistory',
        connections: {},
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
              id: 'extensions',
              interface: 'iso15118_extensions',
              type: 'provide'
            },
            {
              id: 'charger',
              interface: 'ISO15118_charger',
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
          top: [
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
              id: 'over_voltage_monitor',
              interface: 'over_voltage_monitor',
              type: 'requirement'
            },
            {
              id: 'hlc',
              interface: 'ISO15118_charger',
              type: 'requirement'
            },
            { id: 'ac_rcd', interface: 'ac_rcd', type: 'requirement' },
            {
              id: 'connector_lock',
              interface: 'connector_lock',
              type: 'requirement'
            }
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
            },
            { id: 'energy_grid', interface: 'energy', type: 'provide' }
          ],
          bottom: [],
          left: [
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
        connections: {
          security: [ { module_id: 'evse_security', implementation_id: 'main' } ]
        },
        config_module: {
          auth_timeout_eim: 300,
          auth_timeout_pnc: 55,
          device: 'auto',
          enable_sdp_server: true,
          supported_DIN70121: true,
          supported_ISO15118_2: true,
          terminate_connection_on_failed_response: false,
          tls_key_logging: false,
          tls_key_logging_path: '/tmp',
          tls_security: 'allow',
          tls_timeout: 15000,
          verify_contract_cert_chain: false
        }
      },
      iso15118_car: {
        module: 'PyEvJosev',
        connections: {},
        config_module: {
          device: 'auto',
          enable_tls_1_3: false,
          enforce_tls: false,
          is_cert_install_needed: false,
          supported_DIN70121: false,
          supported_ISO15118_2: true,
          supported_ISO15118_20_AC: false,
          supported_ISO15118_20_DC: false,
          tls_active: false
        }
      },
      evse_manager_1: {
        module: 'EvseManager',
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
        },
        mapping: { module: { evse: 1 } },
        config_module: {
          ac_enforce_hlc: false,
          ac_hlc_enabled: false,
          ac_hlc_use_5percent: false,
          ac_nominal_voltage: 230,
          ac_with_soc: false,
          autocharge_use_slac_instead_of_hlc: false,
          cable_check_enable_imd_self_test: true,
          cable_check_wait_below_60V_before_finish: true,
          cable_check_wait_number_of_imd_measurements: 1,
          central_contract_validation_allowed: false,
          charge_mode: 'AC',
          connector_id: 1,
          connector_type: 'cType2',
          contract_certificate_installation_enabled: true,
          dbg_hlc_auth_after_tstep: false,
          dc_isolation_voltage_V: 0,
          disable_authentication: false,
          enable_autocharge: false,
          ev_receipt_required: false,
          evse_id: '1',
          evse_id_din: '49A80737A45678',
          external_ready_to_start_charging: false,
          fail_on_powermeter_errors: true,
          hack_allow_bpt_with_iso2: false,
          hack_fix_hlc_integer_current_requests: false,
          hack_pause_imd_during_precharge: false,
          hack_present_current_offset: 0,
          hack_simplified_mode_limit_10A: false,
          hack_skoda_enyaq: false,
          hack_sleep_in_cable_check: 0,
          hack_sleep_in_cable_check_volkswagen: 0,
          has_ventilation: true,
          initial_meter_value_timeout_ms: 5000,
          inoperative_error_use_vendor_id: false,
          lock_connector_in_state_b: true,
          logfile_suffix: 'session_uuid',
          max_current_export_A: 32,
          max_current_import_A: 32,
          payment_enable_contract: true,
          payment_enable_eim: true,
          raise_mrec9: false,
          request_zero_power_in_idle: true,
          sae_j2847_2_bpt_enabled: false,
          sae_j2847_2_bpt_mode: 'V2G',
          session_id_type: 'UUID',
          session_logging: true,
          session_logging_path: '/tmp',
          session_logging_xml: false,
          sleep_before_enabling_pwm_hlc_mode_ms: 500,
          soft_over_current_measurement_noise_A: 0.5,
          soft_over_current_timeout_ms: 7000,
          soft_over_current_tolerance_percent: 10,
          state_F_after_fault_ms: 300,
          switch_3ph1ph_cp_state: 'X1',
          switch_3ph1ph_delay_s: 10,
          uk_smartcharging_random_delay_at_any_change: true,
          uk_smartcharging_random_delay_enable: false,
          uk_smartcharging_random_delay_max_duration: 600
        }
      },
      evse_manager_2: {
        module: 'EvseManager',
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
        },
        mapping: { module: { evse: 2 } },
        config_module: {
          ac_enforce_hlc: false,
          ac_hlc_enabled: false,
          ac_hlc_use_5percent: false,
          ac_nominal_voltage: 230,
          ac_with_soc: false,
          autocharge_use_slac_instead_of_hlc: false,
          cable_check_enable_imd_self_test: true,
          cable_check_wait_below_60V_before_finish: true,
          cable_check_wait_number_of_imd_measurements: 1,
          central_contract_validation_allowed: false,
          charge_mode: 'AC',
          connector_id: 2,
          connector_type: 'cType2',
          contract_certificate_installation_enabled: true,
          dbg_hlc_auth_after_tstep: false,
          dc_isolation_voltage_V: 0,
          disable_authentication: false,
          enable_autocharge: false,
          ev_receipt_required: false,
          evse_id: '2',
          evse_id_din: '49A80737A45678',
          external_ready_to_start_charging: false,
          fail_on_powermeter_errors: true,
          hack_allow_bpt_with_iso2: false,
          hack_fix_hlc_integer_current_requests: false,
          hack_pause_imd_during_precharge: false,
          hack_present_current_offset: 0,
          hack_simplified_mode_limit_10A: false,
          hack_skoda_enyaq: false,
          hack_sleep_in_cable_check: 0,
          hack_sleep_in_cable_check_volkswagen: 0,
          has_ventilation: true,
          initial_meter_value_timeout_ms: 5000,
          inoperative_error_use_vendor_id: false,
          lock_connector_in_state_b: true,
          logfile_suffix: 'session_uuid',
          max_current_export_A: 32,
          max_current_import_A: 32,
          payment_enable_contract: true,
          payment_enable_eim: true,
          raise_mrec9: false,
          request_zero_power_in_idle: true,
          sae_j2847_2_bpt_enabled: false,
          sae_j2847_2_bpt_mode: 'V2G',
          session_id_type: 'UUID',
          session_logging: true,
          session_logging_path: '/tmp',
          session_logging_xml: false,
          sleep_before_enabling_pwm_hlc_mode_ms: 500,
          soft_over_current_measurement_noise_A: 0.5,
          soft_over_current_timeout_ms: 7000,
          soft_over_current_tolerance_percent: 10,
          state_F_after_fault_ms: 300,
          switch_3ph1ph_cp_state: 'X1',
          switch_3ph1ph_delay_s: 10,
          uk_smartcharging_random_delay_at_any_change: true,
          uk_smartcharging_random_delay_enable: false,
          uk_smartcharging_random_delay_max_duration: 600
        }
      },
      yeti_driver_1: {
        module: 'YetiSimulator',
        connections: {},
        mapping: { module: { evse: 1 } },
        config_module: { connector_id: 1, reset_powermeter_on_session_start: true }
      },
      yeti_driver_2: {
        module: 'YetiSimulator',
        connections: {},
        mapping: { module: { evse: 2 } },
        config_module: { connector_id: 2, reset_powermeter_on_session_start: true }
      },
      slac: {
        module: 'SlacSimulator',
        connections: {},
        mapping: { module: { evse: 0 } }
      },
      ev_manager_1: {
        module: 'EvManager',
        connections: {
          ev_board_support: [
            {
              module_id: 'yeti_driver_1',
              implementation_id: 'ev_board_support'
            }
          ],
          ev: [ { module_id: 'iso15118_car', implementation_id: 'ev' } ],
          slac: [ { module_id: 'slac', implementation_id: 'ev' } ]
        },
        mapping: { module: { evse: 0 } },
        config_module: {
          ac_nominal_voltage: 230,
          auto_enable: true,
          auto_exec: false,
          auto_exec_commands: 'sleep 1;iec_wait_pwr_ready;sleep 1;draw_power_regulated 16,3;sleep 30;unplug',
          auto_exec_infinite: false,
          connector_id: 1,
          dc_discharge_max_current_limit: 300,
          dc_discharge_max_power_limit: 150000,
          dc_discharge_target_current: 5,
          dc_discharge_v2g_minimal_soc: 20,
          dc_energy_capacity: 60000,
          dc_max_current_limit: 300,
          dc_max_power_limit: 150000,
          dc_max_voltage_limit: 900,
          dc_target_current: 5,
          dc_target_voltage: 200,
          departure_time: 86400,
          e_amount: 0,
          keep_cross_boot_plugin_state: false,
          max_current: 16,
          soc: 30,
          support_sae_j2847: false,
          three_phases: true
        }
      },
      ev_manager_2: {
        module: 'EvManager',
        connections: {
          ev_board_support: [
            {
              module_id: 'yeti_driver_2',
              implementation_id: 'ev_board_support'
            }
          ],
          ev: [ { module_id: 'iso15118_car', implementation_id: 'ev' } ],
          slac: [ { module_id: 'slac', implementation_id: 'ev' } ]
        },
        mapping: { module: { evse: 0 } },
        config_module: {
          ac_nominal_voltage: 230,
          auto_enable: true,
          auto_exec: false,
          auto_exec_commands: '',
          auto_exec_infinite: false,
          connector_id: 2,
          dc_discharge_max_current_limit: 300,
          dc_discharge_max_power_limit: 150000,
          dc_discharge_target_current: 5,
          dc_discharge_v2g_minimal_soc: 20,
          dc_energy_capacity: 60000,
          dc_max_current_limit: 300,
          dc_max_power_limit: 150000,
          dc_max_voltage_limit: 900,
          dc_target_current: 5,
          dc_target_voltage: 200,
          departure_time: 86400,
          e_amount: 0,
          keep_cross_boot_plugin_state: false,
          max_current: 16,
          soc: 30,
          support_sae_j2847: false,
          three_phases: true
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
        },
        mapping: { module: { evse: 0 } },
        config_module: {
          CompositeScheduleIntervalS: 30,
          CoreDatabasePath: '/tmp/ocpp201',
          DelayOcppStart: 0,
          DeviceModelConfigPath: 'component_config',
          DeviceModelDatabaseMigrationPath: 'device_model_migrations',
          DeviceModelDatabasePath: 'device_model_storage.db',
          EnableExternalWebsocketControl: false,
          EverestDeviceModelDatabasePath: 'everest_device_model_storage.db',
          MessageLogPath: '/tmp/everest_ocpp_logs',
          MessageQueueResumeDelay: 0,
          RequestCompositeScheduleDurationS: 600,
          RequestCompositeScheduleUnit: 'A'
        }
      },
      persistent_store: {
        module: 'PersistentStore',
        connections: {},
        mapping: { module: { evse: 0 } },
        config_module: { sqlite_db_file_path: 'everest_persistent_store.db' }
      },
      evse_security: {
        module: 'EvseSecurity',
        connections: {},
        mapping: { module: { evse: 0 } },
        config_module: {
          csms_ca_bundle: 'ca/csms/CSMS_ROOT_CA.pem',
          csms_leaf_cert_directory: 'client/csms',
          csms_leaf_key_directory: 'client/csms',
          mf_ca_bundle: 'ca/mf/MF_ROOT_CA.pem',
          mo_ca_bundle: 'ca/mo/MO_ROOT_CA.pem',
          private_key_password: '123456',
          secc_leaf_cert_directory: 'client/cso',
          secc_leaf_key_directory: 'client/cso',
          v2g_ca_bundle: 'ca/v2g/V2G_ROOT_CA.pem'
        }
      },
      token_provider_1: {
        module: 'DummyTokenProviderManual',
        connections: {},
        mapping: { module: { evse: 0 } },
        config_implementation: { main: { timeout: 10, token: 'DEADBEEF', type: 'RFID' } }
      },
      auth: {
        module: 'Auth',
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
        },
        mapping: { module: { evse: 0 } },
        config_module: {
          connection_timeout: 60,
          ignore_connector_faults: false,
          master_pass_group_id: '',
          prioritize_authorization_over_stopping_transaction: true,
          selection_algorithm: 'FindFirst'
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
        },
        mapping: { module: { evse: 0 } },
        config_module: {
          debug: false,
          nominal_ac_voltage: 230,
          schedule_interval_duration: 60,
          schedule_total_duration: 1,
          slice_ampere: 0.5,
          slice_watt: 500,
          switch_3ph1ph_max_nr_of_switches_per_session: 0,
          switch_3ph1ph_power_hysteresis_W: 200,
          switch_3ph1ph_switch_limit_stickyness: 'DontChange',
          switch_3ph1ph_time_hysteresis_s: 600,
          switch_3ph1ph_while_charging_mode: 'Never',
          update_interval: 1
        }
      },
      evse_manager_1_ocpp_sink: {
        module: 'EnergyNode',
        connections: {
          energy_consumer: [
            {
              module_id: 'evse_manager_1',
              implementation_id: 'energy_grid'
            }
          ]
        },
        mapping: { module: { evse: 1 } },
        config_module: { fuse_limit_A: 32, phase_count: 3 }
      },
      evse_manager_2_ocpp_sink: {
        module: 'EnergyNode',
        connections: {
          energy_consumer: [
            {
              module_id: 'evse_manager_2',
              implementation_id: 'energy_grid'
            }
          ]
        },
        mapping: { module: { evse: 2 } },
        config_module: { fuse_limit_A: 32, phase_count: 3 }
      },
      evse_manager_1_api_sink: {
        module: 'EnergyNode',
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
        },
        mapping: { module: { evse: 1 } },
        config_module: { fuse_limit_A: 32, phase_count: 3 }
      },
      evse_manager_2_api_sink: {
        module: 'EnergyNode',
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
        },
        mapping: { module: { evse: 2 } },
        config_module: { fuse_limit_A: 32, phase_count: 3 }
      },
      grid_connection_point: {
        module: 'EnergyNode',
        connections: {
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
        },
        mapping: { module: { evse: 0 } },
        config_module: { fuse_limit_A: 40, phase_count: 3 }
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
        },
        mapping: { module: { evse: 0 } },
        config_module: {
          charger_information_file: '',
          hw_caps_max_current_export_decimal_places: 2,
          hw_caps_max_current_export_round_to: 0,
          hw_caps_max_current_import_decimal_places: 2,
          hw_caps_max_current_import_round_to: 0,
          hw_caps_max_plug_temperature_C_decimal_places: 2,
          hw_caps_max_plug_temperature_C_round_to: 0,
          hw_caps_min_current_export_decimal_places: 2,
          hw_caps_min_current_export_round_to: 0,
          hw_caps_min_current_import_decimal_places: 2,
          hw_caps_min_current_import_round_to: 0,
          limits_max_current_decimal_places: 2,
          limits_max_current_round_to: 0,
          powermeter_VAR_decimal_places: 2,
          powermeter_VAR_round_to: 0,
          powermeter_current_decimal_places: 2,
          powermeter_current_round_to: 0,
          powermeter_energy_export_decimal_places: 2,
          powermeter_energy_export_round_to: 0,
          powermeter_energy_import_decimal_places: 2,
          powermeter_energy_import_round_to: 0,
          powermeter_frequency_decimal_places: 2,
          powermeter_frequency_round_to: 0,
          powermeter_power_decimal_places: 2,
          powermeter_power_round_to: 0,
          powermeter_voltage_decimal_places: 2,
          powermeter_voltage_round_to: 0,
          telemetry_evse_temperature_C_decimal_places: 2,
          telemetry_evse_temperature_C_round_to: 0,
          telemetry_fan_rpm_decimal_places: 2,
          telemetry_fan_rpm_round_to: 0,
          telemetry_plug_temperature_C_decimal_places: 2,
          telemetry_plug_temperature_C_round_to: 0,
          telemetry_supply_voltage_12V_decimal_places: 2,
          telemetry_supply_voltage_12V_round_to: 0,
          telemetry_supply_voltage_minus_12V_decimal_places: 2,
          telemetry_supply_voltage_minus_12V_round_to: 0
        }
      },
      error_history: {
        module: 'ErrorHistory',
        connections: {},
        mapping: { module: { evse: 0 } },
        config_implementation: { error_history: { database_path: '/tmp/error_history.db' } }
      },
      system: {
        module: 'System',
        connections: {},
        mapping: { module: { evse: 0 } },
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
        position: { x: -45, y: -1 },
        terminals: {
          top: [],
          right: [ { id: 'ev', interface: 'ISO15118_ev', type: 'provide' } ],
          bottom: [],
          left: []
        }
      },
      evse_manager_1: {
        position: { x: 2, y: 11 },
        terminals: {
          top: [
            {
              id: 'powersupply_DC',
              interface: 'power_supply_DC',
              type: 'requirement'
            },
            {
              id: 'powermeter_car_side',
              interface: 'powermeter',
              type: 'requirement'
            },
            { id: 'ac_rcd', interface: 'ac_rcd', type: 'requirement' },
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
            }
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
          bottom: [
            { id: 'energy_grid', interface: 'energy', type: 'provide' }
          ],
          left: [
            { id: 'slac', interface: 'slac', type: 'requirement' },
            {
              id: 'bsp',
              interface: 'evse_board_support',
              type: 'requirement'
            },
            {
              id: 'powermeter_grid_side',
              interface: 'powermeter',
              type: 'requirement'
            },
            {
              id: 'hlc',
              interface: 'ISO15118_charger',
              type: 'requirement'
            },
            { id: 'store', interface: 'kvs', type: 'requirement' }
          ]
        }
      },
      evse_manager_2: {
        position: { x: 2, y: -16 },
        terminals: {
          top: [
            {
              id: 'powersupply_DC',
              interface: 'power_supply_DC',
              type: 'requirement'
            },
            { id: 'ac_rcd', interface: 'ac_rcd', type: 'requirement' },
            {
              id: 'imd',
              interface: 'isolation_monitor',
              type: 'requirement'
            },
            { id: 'energy_grid', interface: 'energy', type: 'provide' },
            {
              id: 'over_voltage_monitor',
              interface: 'over_voltage_monitor',
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
            }
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
            {
              id: 'powermeter_grid_side',
              interface: 'powermeter',
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
        position: { x: -45, y: 7 },
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
        position: { x: -45, y: -16 },
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
        position: { x: -49, y: -9 },
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
        position: { x: 56, y: 15 },
        terminals: {
          top: [
            {
              id: 'evse_manager',
              interface: 'evse_manager',
              type: 'requirement'
            },
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
              type: 'requirement'
            },
            {
              id: 'display_message',
              interface: 'display_message',
              type: 'requirement'
            },
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
        position: { x: 75, y: 2 },
        terminals: {
          top: [],
          right: [],
          bottom: [],
          left: [ { id: 'main', interface: 'kvs', type: 'provide' } ]
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
        position: { x: 75, y: 9 },
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
        position: { x: 59, y: -6 },
        terminals: {
          top: [],
          right: [],
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
            },
            {
              id: 'token_provider',
              interface: 'auth_token_provider',
              type: 'requirement'
            },
            { id: 'kvs', interface: 'kvs', type: 'requirement' }
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
        position: { x: 31, y: -25 },
        terminals: {
          top: [
            {
              id: 'energy_trunk',
              interface: 'energy',
              type: 'requirement'
            }
          ],
          right: [
            {
              id: 'main',
              interface: 'energy_manager',
              type: 'provide'
            }
          ],
          bottom: [],
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
        position: { x: 2, y: -25 },
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
        position: { x: 2, y: 29 },
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
        position: { x: 2, y: -34 },
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
        position: { x: 31, y: -34 },
        terminals: {
          top: [],
          right: [
            {
              id: 'price_information',
              interface: 'energy_price_information',
              type: 'requirement'
            },
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
              id: 'energy_consumer',
              interface: 'energy',
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
      api: {
        position: { x: 37, y: 26 },
        terminals: {
          top: [
            { id: 'main', interface: 'empty', type: 'provide' },
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
              id: 'random_delay',
              interface: 'uk_random_delay',
              type: 'requirement'
            }
          ]
        }
      },
      error_history: {
        position: { x: 56, y: 26 },
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
        position: { x: 2, y: 38 },
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
    active_modules: {
      error_history: {
        module: 'ErrorHistory',
        connections: {},
        config_implementation: { error_history: { database_path: '/tmp/error_history.db' } }
      },
      auth: {
        module: 'Auth',
        connections: {
          token_provider: [
            { module_id: 'token_provider', implementation_id: 'main' }
          ],
          token_validator: [
            { module_id: 'token_validator', implementation_id: 'main' }
          ],
          evse_manager: [ { module_id: 'connector_1', implementation_id: 'evse' } ]
        },
        config_module: {
          connection_timeout: 10,
          ignore_connector_faults: true,
          master_pass_group_id: '',
          prioritize_authorization_over_stopping_transaction: true,
          selection_algorithm: 'FindFirst'
        }
      },
      ev_manager: {
        module: 'EvManager',
        connections: {
          ev: [ { module_id: 'iso15118_car', implementation_id: 'ev' } ],
          slac: [ { module_id: 'slac', implementation_id: 'ev' } ]
        },
        config_module: {
          ac_nominal_voltage: 230,
          auto_enable: true,
          auto_exec: false,
          auto_exec_commands: 'sleep 1;iec_wait_pwr_ready;sleep 1;draw_power_regulated 16,3;sleep 30;unplug',
          auto_exec_infinite: false,
          connector_id: 1,
          dc_discharge_max_current_limit: 300,
          dc_discharge_max_power_limit: 150000,
          dc_discharge_target_current: 5,
          dc_discharge_v2g_minimal_soc: 20,
          dc_energy_capacity: 60000,
          dc_max_current_limit: 300,
          dc_max_power_limit: 150000,
          dc_max_voltage_limit: 900,
          dc_target_current: 5,
          dc_target_voltage: 200,
          departure_time: 86400,
          e_amount: 0,
          keep_cross_boot_plugin_state: false,
          max_current: 16,
          soc: 30,
          support_sae_j2847: false,
          three_phases: true
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
        },
        config_module: {
          debug: false,
          nominal_ac_voltage: 230,
          schedule_interval_duration: 60,
          schedule_total_duration: 10,
          slice_ampere: 0.5,
          slice_watt: 500,
          switch_3ph1ph_max_nr_of_switches_per_session: 5,
          switch_3ph1ph_power_hysteresis_W: 1000,
          switch_3ph1ph_switch_limit_stickyness: 'SinglePhase',
          switch_3ph1ph_time_hysteresis_s: 20,
          switch_3ph1ph_while_charging_mode: 'Both',
          update_interval: 1
        }
      },
      grid_connection_point: {
        module: 'EnergyNode',
        connections: {
          energy_consumer: [
            {
              module_id: 'connector_1',
              implementation_id: 'energy_grid'
            }
          ]
        },
        config_module: { fuse_limit_A: 40, phase_count: 3 }
      },
      iso15118_car: {
        module: 'PyEvJosev',
        connections: {},
        config_module: {
          device: 'auto',
          enable_tls_1_3: false,
          enforce_tls: false,
          is_cert_install_needed: false,
          supported_DIN70121: false,
          supported_ISO15118_2: true,
          supported_ISO15118_20_AC: false,
          supported_ISO15118_20_DC: false,
          tls_active: false
        }
      },
      evse_security: {
        module: 'EvseSecurity',
        connections: {},
        config_module: {
          csms_ca_bundle: 'ca/csms/CSMS_ROOT_CA.pem',
          csms_leaf_cert_directory: 'client/csms',
          csms_leaf_key_directory: 'client/csms',
          mf_ca_bundle: 'ca/mf/MF_ROOT_CA.pem',
          mo_ca_bundle: 'ca/mo/MO_ROOT_CA.pem',
          private_key_password: '123456',
          secc_leaf_cert_directory: 'client/cso',
          secc_leaf_key_directory: 'client/cso',
          v2g_ca_bundle: 'ca/v2g/V2G_ROOT_CA.pem'
        }
      },
      persistent_store: {
        module: 'PersistentStore',
        connections: {},
        config_module: { sqlite_db_file_path: 'everest_persistent_store.db' }
      },
      setup: {
        module: 'Setup',
        connections: {
          store: [
            {
              module_id: 'persistent_store',
              implementation_id: 'main'
            }
          ]
        },
        config_module: {
          ap_interface: 'wlan0',
          ap_ipv4: '192.168.1.1/24',
          initialized_by_default: true,
          localization: true,
          online_check_host: 'lfenergy.org',
          release_metadata_file: 'release.json',
          setup_simulation: true,
          setup_wifi: false
        }
      },
      slac: { module: 'SlacSimulator', connections: {} },
      token_provider: {
        module: 'DummyTokenProvider',
        connections: {
          evse: [ { module_id: 'connector_1', implementation_id: 'evse' } ]
        },
        config_implementation: {
          main: {
            connector_id: 0,
            timeout: 10,
            token: 'DEADBEEF',
            type: 'RFID'
          }
        }
      },
      token_validator: {
        module: 'DummyTokenValidator',
        connections: {},
        config_implementation: {
          main: {
            sleep: 0.25,
            validation_reason: 'Token seems valid',
            validation_result: 'Accepted'
          }
        }
      },
      api: {
        module: 'API',
        connections: {
          error_history: [
            {
              module_id: 'error_history',
              implementation_id: 'error_history'
            }
          ],
          evse_manager: [ { module_id: 'connector_1', implementation_id: 'evse' } ]
        },
        config_module: {
          charger_information_file: '',
          hw_caps_max_current_export_decimal_places: 2,
          hw_caps_max_current_export_round_to: 0,
          hw_caps_max_current_import_decimal_places: 2,
          hw_caps_max_current_import_round_to: 0,
          hw_caps_max_plug_temperature_C_decimal_places: 2,
          hw_caps_max_plug_temperature_C_round_to: 0,
          hw_caps_min_current_export_decimal_places: 2,
          hw_caps_min_current_export_round_to: 0,
          hw_caps_min_current_import_decimal_places: 2,
          hw_caps_min_current_import_round_to: 0,
          limits_max_current_decimal_places: 2,
          limits_max_current_round_to: 0,
          powermeter_VAR_decimal_places: 2,
          powermeter_VAR_round_to: 0,
          powermeter_current_decimal_places: 2,
          powermeter_current_round_to: 0,
          powermeter_energy_export_decimal_places: 2,
          powermeter_energy_export_round_to: 0,
          powermeter_energy_import_decimal_places: 2,
          powermeter_energy_import_round_to: 0,
          powermeter_frequency_decimal_places: 2,
          powermeter_frequency_round_to: 0,
          powermeter_power_decimal_places: 2,
          powermeter_power_round_to: 0,
          powermeter_voltage_decimal_places: 2,
          powermeter_voltage_round_to: 0,
          telemetry_evse_temperature_C_decimal_places: 2,
          telemetry_evse_temperature_C_round_to: 0,
          telemetry_fan_rpm_decimal_places: 2,
          telemetry_fan_rpm_round_to: 0,
          telemetry_plug_temperature_C_decimal_places: 2,
          telemetry_plug_temperature_C_round_to: 0,
          telemetry_supply_voltage_12V_decimal_places: 2,
          telemetry_supply_voltage_12V_round_to: 0,
          telemetry_supply_voltage_minus_12V_decimal_places: 2,
          telemetry_supply_voltage_minus_12V_round_to: 0
        }
      },
      connector_1_powerpath: {
        module: 'YetiSimulator',
        connections: {},
        config_module: { connector_id: 1, reset_powermeter_on_session_start: true }
      },
      connector_1: {
        module: 'EvseManager',
        connections: {
          powermeter_grid_side: [
            {
              module_id: 'connector_1_powerpath',
              implementation_id: 'powermeter'
            }
          ],
          bsp: [
            {
              module_id: 'connector_1_powerpath',
              implementation_id: 'board_support'
            }
          ],
          slac: [ { module_id: 'slac', implementation_id: 'evse' } ],
          ac_rcd: [
            {
              module_id: 'connector_1_powerpath',
              implementation_id: 'rcd'
            }
          ],
          connector_lock: [
            {
              module_id: 'connector_1_powerpath',
              implementation_id: 'connector_lock'
            }
          ],
          hlc: [
            {
              module_id: 'iso15118_charger',
              implementation_id: 'charger'
            }
          ]
        },
        mapping: { module: { evse: 2, connector: 1 } },
        config_module: {
          ac_enforce_hlc: false,
          ac_hlc_enabled: false,
          ac_hlc_use_5percent: false,
          ac_nominal_voltage: 230,
          ac_with_soc: false,
          autocharge_use_slac_instead_of_hlc: false,
          cable_check_enable_imd_self_test: true,
          cable_check_wait_below_60V_before_finish: true,
          cable_check_wait_number_of_imd_measurements: 1,
          central_contract_validation_allowed: false,
          charge_mode: 'AC',
          connector_id: 1,
          connector_type: 'Unknown',
          contract_certificate_installation_enabled: true,
          dbg_hlc_auth_after_tstep: false,
          dc_isolation_voltage_V: 0,
          disable_authentication: false,
          enable_autocharge: false,
          ev_receipt_required: false,
          evse_id: 'DE*PNX*E1234567*1',
          evse_id_din: '49A80737A45678',
          external_ready_to_start_charging: false,
          fail_on_powermeter_errors: true,
          hack_allow_bpt_with_iso2: false,
          hack_fix_hlc_integer_current_requests: false,
          hack_pause_imd_during_precharge: false,
          hack_present_current_offset: 0,
          hack_simplified_mode_limit_10A: false,
          hack_skoda_enyaq: false,
          hack_sleep_in_cable_check: 0,
          hack_sleep_in_cable_check_volkswagen: 0,
          has_ventilation: true,
          initial_meter_value_timeout_ms: 5000,
          inoperative_error_use_vendor_id: false,
          lock_connector_in_state_b: true,
          logfile_suffix: 'session_uuid',
          max_current_export_A: 32,
          max_current_import_A: 32,
          payment_enable_contract: true,
          payment_enable_eim: true,
          raise_mrec9: false,
          request_zero_power_in_idle: false,
          sae_j2847_2_bpt_enabled: false,
          sae_j2847_2_bpt_mode: 'V2G',
          session_id_type: 'UUID',
          session_logging: false,
          session_logging_path: '/tmp',
          session_logging_xml: true,
          sleep_before_enabling_pwm_hlc_mode_ms: 500,
          soft_over_current_measurement_noise_A: 0.5,
          soft_over_current_timeout_ms: 7000,
          soft_over_current_tolerance_percent: 10,
          state_F_after_fault_ms: 300,
          switch_3ph1ph_cp_state: 'X1',
          switch_3ph1ph_delay_s: 5,
          uk_smartcharging_random_delay_at_any_change: true,
          uk_smartcharging_random_delay_enable: false,
          uk_smartcharging_random_delay_max_duration: 600
        }
      },
      iso15118_charger: {
        module: 'EvseV2G',
        connections: {
          security: [ { module_id: 'evse_security', implementation_id: 'main' } ]
        },
        config_module: {
          auth_timeout_eim: 300,
          auth_timeout_pnc: 55,
          device: 'auto',
          enable_sdp_server: true,
          supported_DIN70121: false,
          supported_ISO15118_2: true,
          terminate_connection_on_failed_response: false,
          tls_key_logging: false,
          tls_key_logging_path: '/tmp',
          tls_security: 'allow',
          tls_timeout: 15000,
          verify_contract_cert_chain: false
        }
      }
    },
    'x-module-layout': {
      error_history: {
        position: { x: 53, y: 13 },
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
      auth: {
        position: { x: 33, y: 3 },
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
          bottom: [
            {
              id: 'simulation_control',
              interface: 'yeti_simulation_control',
              type: 'requirement'
            }
          ],
          left: [ { id: 'slac', interface: 'slac', type: 'requirement' } ],
          right: [ { id: 'main', interface: 'ev_manager', type: 'provide' } ],
          top: [
            { id: 'ev', interface: 'ISO15118_ev', type: 'requirement' }
          ]
        }
      },
      energy_manager: {
        position: { x: 4, y: -1 },
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
        position: { x: 4, y: 9 },
        terminals: {
          bottom: [
            {
              id: 'energy_consumer',
              interface: 'energy',
              type: 'requirement'
            }
          ],
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
      evse_security: {
        position: { x: -20, y: 23 },
        terminals: {
          top: [],
          right: [
            { id: 'main', interface: 'evse_security', type: 'provide' }
          ],
          bottom: [],
          left: []
        }
      },
      persistent_store: {
        position: { x: -12, y: 33 },
        terminals: {
          bottom: [],
          left: [],
          right: [ { id: 'main', interface: 'kvs', type: 'provide' } ],
          top: []
        }
      },
      setup: {
        position: { x: 4, y: 33 },
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
        position: { x: 33, y: -7 },
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
        position: { x: 53, y: 3 },
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
      },
      api: {
        position: { x: 33, y: 13 },
        terminals: {
          top: [],
          right: [
            {
              id: 'random_delay',
              interface: 'uk_random_delay',
              type: 'requirement'
            },
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
              id: 'evse_manager',
              interface: 'evse_manager',
              type: 'requirement'
            },
            { id: 'ocpp', interface: 'ocpp', type: 'requirement' }
          ]
        }
      },
      connector_1_powerpath: {
        position: { x: 33, y: 23 },
        terminals: {
          top: [],
          right: [
            {
              id: 'ev_board_support',
              interface: 'ev_board_support',
              type: 'provide'
            }
          ],
          bottom: [],
          left: [
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
            { id: 'rcd', interface: 'ac_rcd', type: 'provide' },
            {
              id: 'powermeter',
              interface: 'powermeter',
              type: 'provide'
            }
          ]
        }
      },
      connector_1: {
        position: { x: 15, y: 23 },
        terminals: {
          top: [
            {
              id: 'imd',
              interface: 'isolation_monitor',
              type: 'requirement'
            },
            { id: 'energy_grid', interface: 'energy', type: 'provide' },
            { id: 'evse', interface: 'evse_manager', type: 'provide' },
            {
              id: 'powermeter_car_side',
              interface: 'powermeter',
              type: 'requirement'
            },
            {
              id: 'over_voltage_monitor',
              interface: 'over_voltage_monitor',
              type: 'requirement'
            }
          ],
          right: [
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
            { id: 'ac_rcd', interface: 'ac_rcd', type: 'requirement' },
            {
              id: 'powermeter_grid_side',
              interface: 'powermeter',
              type: 'requirement'
            }
          ],
          bottom: [
            {
              id: 'token_provider',
              interface: 'auth_token_provider',
              type: 'provide'
            },
            { id: 'slac', interface: 'slac', type: 'requirement' },
            {
              id: 'random_delay',
              interface: 'uk_random_delay',
              type: 'provide'
            }
          ],
          left: [
            {
              id: 'powersupply_DC',
              interface: 'power_supply_DC',
              type: 'requirement'
            },
            {
              id: 'hlc',
              interface: 'ISO15118_charger',
              type: 'requirement'
            },
            { id: 'store', interface: 'kvs', type: 'requirement' }
          ]
        }
      },
      iso15118_charger: {
        position: { x: -4, y: 23 },
        terminals: {
          top: [],
          right: [
            {
              id: 'charger',
              interface: 'ISO15118_charger',
              type: 'provide'
            }
          ],
          bottom: [
            {
              id: 'extensions',
              interface: 'iso15118_extensions',
              type: 'provide'
            }
          ],
          left: [
            {
              id: 'security',
              interface: 'evse_security',
              type: 'requirement'
            }
          ]
        }
      }
    }
  }
} as EverestConfigList;
