// SPDX-License-Identifier: Apache-2.0
// Copyright 2020 - 2024 Pionix GmbH and Contributors to EVerest

import {EverestConfigList} from "../index";

export default {
  "config-sil-dc": {
    "active_modules": {
      "api": {
        "module": "API",
        "connections": {
          "evse_manager": [
            {
              "module_id": "evse_manager",
              "implementation_id": "evse"
            }
          ]
        },
        "config_module": {
          "charger_information_file": "",
          "hw_caps_max_current_export_decimal_places": 2,
          "hw_caps_max_current_export_round_to": 0,
          "hw_caps_max_current_import_decimal_places": 2,
          "hw_caps_max_current_import_round_to": 0,
          "hw_caps_max_plug_temperature_C_decimal_places": 2,
          "hw_caps_max_plug_temperature_C_round_to": 0,
          "hw_caps_min_current_export_decimal_places": 2,
          "hw_caps_min_current_export_round_to": 0,
          "hw_caps_min_current_import_decimal_places": 2,
          "hw_caps_min_current_import_round_to": 0,
          "limits_max_current_decimal_places": 2,
          "limits_max_current_round_to": 0,
          "powermeter_VAR_decimal_places": 2,
          "powermeter_VAR_round_to": 0,
          "powermeter_current_decimal_places": 2,
          "powermeter_current_round_to": 0,
          "powermeter_energy_export_decimal_places": 2,
          "powermeter_energy_export_round_to": 0,
          "powermeter_energy_import_decimal_places": 2,
          "powermeter_energy_import_round_to": 0,
          "powermeter_frequency_decimal_places": 2,
          "powermeter_frequency_round_to": 0,
          "powermeter_power_decimal_places": 2,
          "powermeter_power_round_to": 0,
          "powermeter_voltage_decimal_places": 2,
          "powermeter_voltage_round_to": 0,
          "telemetry_evse_temperature_C_decimal_places": 2,
          "telemetry_evse_temperature_C_round_to": 0,
          "telemetry_fan_rpm_decimal_places": 2,
          "telemetry_fan_rpm_round_to": 0,
          "telemetry_plug_temperature_C_decimal_places": 2,
          "telemetry_plug_temperature_C_round_to": 0,
          "telemetry_supply_voltage_12V_decimal_places": 2,
          "telemetry_supply_voltage_12V_round_to": 0,
          "telemetry_supply_voltage_minus_12V_decimal_places": 2,
          "telemetry_supply_voltage_minus_12V_round_to": 0
        }
      },
      "auth": {
        "module": "Auth",
        "connections": {
          "evse_manager": [
            {
              "module_id": "evse_manager",
              "implementation_id": "evse"
            }
          ],
          "token_provider": [
            {
              "module_id": "token_provider",
              "implementation_id": "main"
            }
          ],
          "token_validator": [
            {
              "module_id": "token_validator",
              "implementation_id": "main"
            }
          ]
        },
        "config_module": {
          "connection_timeout": 10,
          "ignore_connector_faults": false,
          "master_pass_group_id": "",
          "prioritize_authorization_over_stopping_transaction": true,
          "selection_algorithm": "FindFirst"
        }
      },
      "car_simulator": {
        "module": "JsCarSimulator",
        "connections": {
          "ev": [
            {
              "module_id": "iso15118_car",
              "implementation_id": "ev"
            }
          ],
          "simulation_control": [
            {
              "module_id": "yeti_driver",
              "implementation_id": "yeti_simulation_control"
            }
          ],
          "slac": [
            {
              "module_id": "slac",
              "implementation_id": "ev"
            }
          ]
        },
        "config_module": {
          "auto_enable": true,
          "auto_exec": false,
          "auto_exec_commands": "sleep 1;iec_wait_pwr_ready;sleep 1;draw_power_regulated 16,3;sleep 30;unplug",
          "connector_id": 1,
          "dc_discharge_max_current_limit": 300,
          "dc_discharge_max_power_limit": 150000,
          "dc_discharge_target_current": 5,
          "dc_discharge_v2g_minimal_soc": 20,
          "dc_energy_capacity": 60000,
          "dc_max_current_limit": 300,
          "dc_max_power_limit": 150000,
          "dc_max_voltage_limit": 900,
          "dc_target_current": 20,
          "dc_target_voltage": 400,
          "support_sae_j2847": false
        }
      },
      "energy_manager": {
        "module": "EnergyManager",
        "connections": {
          "energy_trunk": [
            {
              "module_id": "grid_connection_point",
              "implementation_id": "energy_grid"
            }
          ]
        },
        "config_module": {
          "debug": false,
          "nominal_ac_voltage": 230,
          "schedule_interval_duration": 60,
          "schedule_total_duration": 1,
          "slice_ampere": 0.5,
          "slice_watt": 500,
          "update_interval": 1
        }
      },
      "evse_manager": {
        "module": "EvseManager",
        "connections": {
          "bsp": [
            {
              "module_id": "yeti_driver",
              "implementation_id": "board_support"
            }
          ],
          "hlc": [
            {
              "module_id": "iso15118_charger",
              "implementation_id": "charger"
            }
          ],
          "imd": [
            {
              "module_id": "imd",
              "implementation_id": "main"
            }
          ],
          "powermeter_car_side": [
            {
              "module_id": "powersupply_dc",
              "implementation_id": "powermeter"
            }
          ],
          "powersupply_DC": [
            {
              "module_id": "powersupply_dc",
              "implementation_id": "main"
            }
          ],
          "slac": [
            {
              "module_id": "slac",
              "implementation_id": "evse"
            }
          ]
        },
        "config_module": {
          "ac_enforce_hlc": false,
          "ac_hlc_enabled": false,
          "ac_hlc_use_5percent": false,
          "ac_nominal_voltage": 230,
          "ac_with_soc": false,
          "autocharge_use_slac_instead_of_hlc": false,
          "charge_mode": "DC",
          "connector_id": 1,
          "country_code": "DE",
          "dbg_hlc_auth_after_tstep": false,
          "dc_isolation_voltage_V": 500,
          "disable_authentication": false,
          "ev_receipt_required": false,
          "evse_id": "DE*PNX*E12345*1",
          "evse_id_din": "49A80737A45678",
          "external_ready_to_start_charging": false,
          "hack_allow_bpt_with_iso2": true,
          "hack_fix_hlc_integer_current_requests": false,
          "hack_pause_imd_during_precharge": false,
          "hack_present_current_offset": 0,
          "hack_skoda_enyaq": false,
          "hack_sleep_in_cable_check": 0,
          "hack_sleep_in_cable_check_volkswagen": 0,
          "has_ventilation": true,
          "logfile_suffix": "session_uuid",
          "max_current_export_A": 32,
          "max_current_import_A": 32,
          "payment_enable_contract": true,
          "payment_enable_eim": true,
          "request_zero_power_in_idle": false,
          "sae_j2847_2_bpt_enabled": false,
          "sae_j2847_2_bpt_mode": "V2G",
          "session_logging": true,
          "session_logging_path": "/tmp/everest-logs",
          "session_logging_xml": false,
          "soft_over_current_measurement_noise_A": 0.5,
          "soft_over_current_tolerance_percent": 10,
          "switch_to_minimum_voltage_after_cable_check": false,
          "three_phases": true,
          "uk_smartcharging_random_delay_at_any_change": true,
          "uk_smartcharging_random_delay_enable": false,
          "uk_smartcharging_random_delay_max_duration": 600
        }
      },
      "evse_security": {
        "module": "EvseSecurity",
        "connections": {},
        "config_module": {
          "csms_ca_bundle": "ca/v2g/V2G_ROOT_CA.pem",
          "csms_leaf_cert_directory": "client/csms",
          "csms_leaf_key_directory": "client/csms",
          "mf_ca_bundle": "ca/mf/MF_ROOT_CA.pem",
          "mo_ca_bundle": "ca/mo/MO_ROOT_CA.pem",
          "private_key_password": "123456",
          "secc_leaf_cert_directory": "client/cso",
          "secc_leaf_key_directory": "client/cso",
          "v2g_ca_bundle": "ca/v2g/V2G_ROOT_CA.pem"
        }
      },
      "grid_connection_point": {
        "module": "EnergyNode",
        "connections": {
          "energy_consumer": [
            {
              "module_id": "evse_manager",
              "implementation_id": "energy_grid"
            }
          ],
          "powermeter": [
            {
              "module_id": "yeti_driver",
              "implementation_id": "powermeter"
            }
          ]
        },
        "config_module": {
          "fuse_limit_A": 40,
          "phase_count": 3
        }
      },
      "imd": {
        "module": "IMDSimulator",
        "connections": {},
        "config_implementation": {
          "main": {
            "interval": 1000,
            "resistance_F_Ohm": 900000
          }
        }
      },
      "iso15118_car": {
        "module": "PyEvJosev",
        "connections": {},
        "config_module": {
          "device": "auto",
          "enforce_tls": false,
          "is_cert_install_needed": false,
          "supported_DIN70121": true,
          "supported_ISO15118_2": true,
          "supported_ISO15118_20_AC": false,
          "supported_ISO15118_20_DC": false,
          "tls_active": false
        }
      },
      "iso15118_charger": {
        "module": "EvseV2G",
        "connections": {
          "security": [
            {
              "module_id": "evse_security",
              "implementation_id": "main"
            }
          ]
        },
        "config_module": {
          "auth_timeout_eim": 300,
          "auth_timeout_pnc": 55,
          "device": "auto",
          "supported_DIN70121": false,
          "supported_ISO15118_2": true,
          "terminate_connection_on_failed_response": false,
          "tls_key_logging": false,
          "tls_key_logging_path": "/tmp",
          "tls_security": "allow",
          "tls_timeout": 15000,
          "verify_contract_cert_chain": false
        }
      },
      "powersupply_dc": {
        "module": "JsDCSupplySimulator",
        "connections": {},
        "config_implementation": {
          "main": {
            "bidirectional": true,
            "max_current": 200,
            "max_power": 150000,
            "max_voltage": 900,
            "min_current": 1,
            "min_voltage": 200
          }
        }
      },
      "slac": {
        "module": "JsSlacSimulator",
        "connections": {},
        "config_implementation": {
          "ev": {
            "ev_id": "PIONIX_SAYS_HELLO"
          },
          "evse": {
            "evse_id": "PIONIX_SAYS_HELLO",
            "nid": "pionix!",
            "number_of_sounds": 10
          }
        }
      },
      "token_provider": {
        "module": "DummyTokenProvider",
        "connections": {
          "evse": [
            {
              "module_id": "evse_manager",
              "implementation_id": "evse"
            }
          ]
        },
        "config_implementation": {
          "main": {
            "connector_id": 0,
            "timeout": 10,
            "token": "TOKEN1",
            "type": "RFID"
          }
        }
      },
      "token_validator": {
        "module": "DummyTokenValidator",
        "connections": {},
        "config_implementation": {
          "main": {
            "sleep": 0.25,
            "validation_reason": "Token seems valid",
            "validation_result": "Accepted"
          }
        }
      },
      "yeti_driver": {
        "module": "JsYetiSimulator",
        "connections": {},
        "config_module": {
          "connector_id": 1
        }
      }
    },
    "x-module-layout": {
      "api": {
        "position": {
          "x": 37,
          "y": 41
        },
        "terminals": {
          "top": [],
          "right": [
            {
              "id": "main",
              "interface": "empty",
              "type": "provide"
            }
          ],
          "bottom": [],
          "left": [
            {
              "id": "evse_manager",
              "interface": "evse_manager",
              "type": "requirement"
            },
            {
              "id": "ocpp",
              "interface": "ocpp",
              "type": "requirement"
            },
            {
              "id": "random_delay",
              "interface": "uk_random_delay",
              "type": "requirement"
            }
          ]
        }
      },
      "auth": {
        "position": {
          "x": 37,
          "y": 22
        },
        "terminals": {
          "top": [],
          "right": [
            {
              "id": "main",
              "interface": "auth",
              "type": "provide"
            },
            {
              "id": "token_validator",
              "interface": "auth_token_validator",
              "type": "requirement"
            },
            {
              "id": "reservation",
              "interface": "reservation",
              "type": "provide"
            }
          ],
          "bottom": [
            {
              "id": "token_provider",
              "interface": "auth_token_provider",
              "type": "requirement"
            }
          ],
          "left": [
            {
              "id": "evse_manager",
              "interface": "evse_manager",
              "type": "requirement"
            }
          ]
        }
      },
      "car_simulator": {
        "position": {
          "x": 18,
          "y": 5
        },
        "terminals": {
          "top": [
            {
              "id": "ev",
              "interface": "ISO15118_ev",
              "type": "requirement"
            }
          ],
          "right": [
            {
              "id": "main",
              "interface": "car_simulator",
              "type": "provide"
            }
          ],
          "bottom": [],
          "left": [
            {
              "id": "slac",
              "interface": "slac",
              "type": "requirement"
            },
            {
              "id": "simulation_control",
              "interface": "yeti_simulation_control",
              "type": "requirement"
            }
          ]
        }
      },
      "energy_manager": {
        "position": {
          "x": 50,
          "y": 10
        },
        "terminals": {
          "top": [],
          "right": [
            {
              "id": "main",
              "interface": "energy_manager",
              "type": "provide"
            }
          ],
          "bottom": [],
          "left": [
            {
              "id": "energy_trunk",
              "interface": "energy",
              "type": "requirement"
            }
          ]
        }
      },
      "evse_manager": {
        "position": {
          "x": 18,
          "y": 25
        },
        "terminals": {
          "top": [
            {
              "id": "energy_grid",
              "interface": "energy",
              "type": "provide"
            }
          ],
          "right": [
            {
              "id": "evse",
              "interface": "evse_manager",
              "type": "provide"
            },
            {
              "id": "random_delay",
              "interface": "uk_random_delay",
              "type": "provide"
            },
            {
              "id": "token_provider",
              "interface": "auth_token_provider",
              "type": "provide"
            }
          ],
          "bottom": [
            {
              "id": "hlc",
              "interface": "ISO15118_charger",
              "type": "requirement"
            }
          ],
          "left": [
            {
              "id": "slac",
              "interface": "slac",
              "type": "requirement"
            },
            {
              "id": "ac_rcd",
              "interface": "ac_rcd",
              "type": "requirement"
            },
            {
              "id": "bsp",
              "interface": "evse_board_support",
              "type": "requirement"
            },
            {
              "id": "connector_lock",
              "interface": "connector_lock",
              "type": "requirement"
            },
            {
              "id": "imd",
              "interface": "isolation_monitor",
              "type": "requirement"
            },
            {
              "id": "powermeter_car_side",
              "interface": "powermeter",
              "type": "requirement"
            },
            {
              "id": "powermeter_grid_side",
              "interface": "powermeter",
              "type": "requirement"
            },
            {
              "id": "powersupply_DC",
              "interface": "power_supply_DC",
              "type": "requirement"
            }
          ]
        }
      },
      "evse_security": {
        "position": {
          "x": 2,
          "y": 37
        },
        "terminals": {
          "top": [],
          "right": [
            {
              "id": "main",
              "interface": "evse_security",
              "type": "provide"
            }
          ],
          "bottom": [],
          "left": []
        }
      },
      "grid_connection_point": {
        "position": {
          "x": 18,
          "y": 16
        },
        "terminals": {
          "top": [],
          "right": [
            {
              "id": "energy_grid",
              "interface": "energy",
              "type": "provide"
            },
            {
              "id": "external_limits",
              "interface": "external_energy_limits",
              "type": "provide"
            }
          ],
          "bottom": [
            {
              "id": "energy_consumer",
              "interface": "energy",
              "type": "requirement"
            }
          ],
          "left": [
            {
              "id": "price_information",
              "interface": "energy_price_information",
              "type": "requirement"
            },
            {
              "id": "powermeter",
              "interface": "powermeter",
              "type": "requirement"
            }
          ]
        }
      },
      "imd": {
        "position": {
          "x": -12,
          "y": 23
        },
        "terminals": {
          "top": [],
          "right": [
            {
              "id": "main",
              "interface": "isolation_monitor",
              "type": "provide"
            }
          ],
          "bottom": [],
          "left": []
        }
      },
      "iso15118_car": {
        "position": {
          "x": 18,
          "y": -4
        },
        "terminals": {
          "top": [],
          "right": [],
          "bottom": [
            {
              "id": "ev",
              "interface": "ISO15118_ev",
              "type": "provide"
            }
          ],
          "left": []
        }
      },
      "iso15118_charger": {
        "position": {
          "x": 18,
          "y": 37
        },
        "terminals": {
          "top": [
            {
              "id": "charger",
              "interface": "ISO15118_charger",
              "type": "provide"
            }
          ],
          "right": [],
          "bottom": [],
          "left": [
            {
              "id": "security",
              "interface": "evse_security",
              "type": "requirement"
            }
          ]
        }
      },
      "powersupply_dc": {
        "position": {
          "x": -12,
          "y": 30
        },
        "terminals": {
          "top": [],
          "right": [
            {
              "id": "powermeter",
              "interface": "powermeter",
              "type": "provide"
            },
            {
              "id": "main",
              "interface": "power_supply_DC",
              "type": "provide"
            }
          ],
          "bottom": [],
          "left": []
        }
      },
      "slac": {
        "position": {
          "x": -12,
          "y": 9
        },
        "terminals": {
          "top": [],
          "right": [
            {
              "id": "ev",
              "interface": "slac",
              "type": "provide"
            },
            {
              "id": "evse",
              "interface": "slac",
              "type": "provide"
            }
          ],
          "bottom": [],
          "left": []
        }
      },
      "token_provider": {
        "position": {
          "x": 37,
          "y": 32
        },
        "terminals": {
          "top": [
            {
              "id": "main",
              "interface": "auth_token_provider",
              "type": "provide"
            }
          ],
          "right": [],
          "bottom": [],
          "left": [
            {
              "id": "evse",
              "interface": "evse_manager",
              "type": "requirement"
            }
          ]
        }
      },
      "token_validator": {
        "position": {
          "x": 52,
          "y": 22
        },
        "terminals": {
          "top": [],
          "right": [],
          "bottom": [],
          "left": [
            {
              "id": "main",
              "interface": "auth_token_validator",
              "type": "provide"
            }
          ]
        }
      },
      "yeti_driver": {
        "position": {
          "x": -12,
          "y": 16
        },
        "terminals": {
          "top": [],
          "right": [
            {
              "id": "yeti_simulation_control",
              "interface": "yeti_simulation_control",
              "type": "provide"
            },
            {
              "id": "connector_lock",
              "interface": "connector_lock",
              "type": "provide"
            },
            {
              "id": "powermeter",
              "interface": "powermeter",
              "type": "provide"
            },
            {
              "id": "rcd",
              "interface": "ac_rcd",
              "type": "provide"
            },
            {
              "id": "board_support",
              "interface": "evse_board_support",
              "type": "provide"
            }
          ],
          "bottom": [],
          "left": []
        }
      }
    }
  },
  "config-sil-ocpp201": {
    "active_modules": {
      "api": {
        "module": "API",
        "connections": {
          "evse_manager": [
            {
              "module_id": "evse_manager_1",
              "implementation_id": "evse"
            }
          ]
        },
        "config_module": {
          "charger_information_file": "",
          "hw_caps_max_current_export_decimal_places": 2,
          "hw_caps_max_current_export_round_to": 0,
          "hw_caps_max_current_import_decimal_places": 2,
          "hw_caps_max_current_import_round_to": 0,
          "hw_caps_max_plug_temperature_C_decimal_places": 2,
          "hw_caps_max_plug_temperature_C_round_to": 0,
          "hw_caps_min_current_export_decimal_places": 2,
          "hw_caps_min_current_export_round_to": 0,
          "hw_caps_min_current_import_decimal_places": 2,
          "hw_caps_min_current_import_round_to": 0,
          "limits_max_current_decimal_places": 2,
          "limits_max_current_round_to": 0,
          "powermeter_VAR_decimal_places": 2,
          "powermeter_VAR_round_to": 0,
          "powermeter_current_decimal_places": 2,
          "powermeter_current_round_to": 0,
          "powermeter_energy_export_decimal_places": 2,
          "powermeter_energy_export_round_to": 0,
          "powermeter_energy_import_decimal_places": 2,
          "powermeter_energy_import_round_to": 0,
          "powermeter_frequency_decimal_places": 2,
          "powermeter_frequency_round_to": 0,
          "powermeter_power_decimal_places": 2,
          "powermeter_power_round_to": 0,
          "powermeter_voltage_decimal_places": 2,
          "powermeter_voltage_round_to": 0,
          "telemetry_evse_temperature_C_decimal_places": 2,
          "telemetry_evse_temperature_C_round_to": 0,
          "telemetry_fan_rpm_decimal_places": 2,
          "telemetry_fan_rpm_round_to": 0,
          "telemetry_plug_temperature_C_decimal_places": 2,
          "telemetry_plug_temperature_C_round_to": 0,
          "telemetry_supply_voltage_12V_decimal_places": 2,
          "telemetry_supply_voltage_12V_round_to": 0,
          "telemetry_supply_voltage_minus_12V_decimal_places": 2,
          "telemetry_supply_voltage_minus_12V_round_to": 0
        }
      },
      "auth": {
        "module": "Auth",
        "connections": {
          "evse_manager": [
            {
              "module_id": "evse_manager_1",
              "implementation_id": "evse"
            },
            {
              "module_id": "evse_manager_2",
              "implementation_id": "evse"
            }
          ],
          "token_provider": [
            {
              "module_id": "token_provider_1",
              "implementation_id": "main"
            },
            {
              "module_id": "ocpp",
              "implementation_id": "auth_provider"
            }
          ],
          "token_validator": [
            {
              "module_id": "ocpp",
              "implementation_id": "auth_validator"
            }
          ]
        },
        "config_module": {
          "connection_timeout": 60,
          "ignore_connector_faults": false,
          "master_pass_group_id": "",
          "prioritize_authorization_over_stopping_transaction": true,
          "selection_algorithm": "FindFirst"
        }
      },
      "car_simulator_1": {
        "module": "JsCarSimulator",
        "connections": {
          "ev": [
            {
              "module_id": "iso15118_car",
              "implementation_id": "ev"
            }
          ],
          "simulation_control": [
            {
              "module_id": "yeti_driver_1",
              "implementation_id": "yeti_simulation_control"
            }
          ],
          "slac": [
            {
              "module_id": "slac",
              "implementation_id": "ev"
            }
          ]
        },
        "config_module": {
          "auto_enable": true,
          "auto_exec": false,
          "auto_exec_commands": "sleep 1;iec_wait_pwr_ready;sleep 1;draw_power_regulated 16,3;sleep 30;unplug",
          "connector_id": 1,
          "dc_discharge_max_current_limit": 300,
          "dc_discharge_max_power_limit": 150000,
          "dc_discharge_target_current": 5,
          "dc_discharge_v2g_minimal_soc": 20,
          "dc_energy_capacity": 60000,
          "dc_max_current_limit": 300,
          "dc_max_power_limit": 150000,
          "dc_max_voltage_limit": 900,
          "dc_target_current": 5,
          "dc_target_voltage": 200,
          "support_sae_j2847": false
        }
      },
      "car_simulator_2": {
        "module": "JsCarSimulator",
        "connections": {
          "ev": [
            {
              "module_id": "iso15118_car",
              "implementation_id": "ev"
            }
          ],
          "simulation_control": [
            {
              "module_id": "yeti_driver_2",
              "implementation_id": "yeti_simulation_control"
            }
          ],
          "slac": [
            {
              "module_id": "slac",
              "implementation_id": "ev"
            }
          ]
        },
        "config_module": {
          "auto_enable": true,
          "auto_exec": false,
          "auto_exec_commands": "",
          "connector_id": 2,
          "dc_discharge_max_current_limit": 300,
          "dc_discharge_max_power_limit": 150000,
          "dc_discharge_target_current": 5,
          "dc_discharge_v2g_minimal_soc": 20,
          "dc_energy_capacity": 60000,
          "dc_max_current_limit": 300,
          "dc_max_power_limit": 150000,
          "dc_max_voltage_limit": 900,
          "dc_target_current": 5,
          "dc_target_voltage": 200,
          "support_sae_j2847": false
        }
      },
      "energy_manager": {
        "module": "EnergyManager",
        "connections": {
          "energy_trunk": [
            {
              "module_id": "grid_connection_point",
              "implementation_id": "energy_grid"
            }
          ]
        },
        "config_module": {
          "debug": false,
          "nominal_ac_voltage": 230,
          "schedule_interval_duration": 60,
          "schedule_total_duration": 1,
          "slice_ampere": 0.5,
          "slice_watt": 500,
          "update_interval": 1
        }
      },
      "evse_manager_1": {
        "module": "EvseManager",
        "connections": {
          "bsp": [
            {
              "module_id": "yeti_driver_1",
              "implementation_id": "board_support"
            }
          ],
          "hlc": [
            {
              "module_id": "iso15118_charger",
              "implementation_id": "charger"
            }
          ],
          "powermeter_grid_side": [
            {
              "module_id": "yeti_driver_1",
              "implementation_id": "powermeter"
            }
          ],
          "slac": [
            {
              "module_id": "slac",
              "implementation_id": "evse"
            }
          ]
        },
        "config_module": {
          "ac_enforce_hlc": false,
          "ac_hlc_enabled": false,
          "ac_hlc_use_5percent": false,
          "ac_nominal_voltage": 230,
          "ac_with_soc": false,
          "autocharge_use_slac_instead_of_hlc": false,
          "charge_mode": "AC",
          "connector_id": 1,
          "country_code": "DE",
          "dbg_hlc_auth_after_tstep": false,
          "dc_isolation_voltage_V": 500,
          "disable_authentication": false,
          "ev_receipt_required": false,
          "evse_id": "1",
          "evse_id_din": "49A80737A45678",
          "external_ready_to_start_charging": false,
          "hack_allow_bpt_with_iso2": false,
          "hack_fix_hlc_integer_current_requests": false,
          "hack_pause_imd_during_precharge": false,
          "hack_present_current_offset": 0,
          "hack_skoda_enyaq": false,
          "hack_sleep_in_cable_check": 0,
          "hack_sleep_in_cable_check_volkswagen": 0,
          "has_ventilation": true,
          "logfile_suffix": "session_uuid",
          "max_current_export_A": 32,
          "max_current_import_A": 32,
          "payment_enable_contract": true,
          "payment_enable_eim": true,
          "request_zero_power_in_idle": false,
          "sae_j2847_2_bpt_enabled": false,
          "sae_j2847_2_bpt_mode": "V2G",
          "session_logging": true,
          "session_logging_path": "/tmp",
          "session_logging_xml": false,
          "soft_over_current_measurement_noise_A": 0.5,
          "soft_over_current_tolerance_percent": 10,
          "switch_to_minimum_voltage_after_cable_check": false,
          "three_phases": true,
          "uk_smartcharging_random_delay_at_any_change": true,
          "uk_smartcharging_random_delay_enable": false,
          "uk_smartcharging_random_delay_max_duration": 600
        }
      },
      "evse_manager_2": {
        "module": "EvseManager",
        "connections": {
          "bsp": [
            {
              "module_id": "yeti_driver_2",
              "implementation_id": "board_support"
            }
          ],
          "hlc": [
            {
              "module_id": "iso15118_charger",
              "implementation_id": "charger"
            }
          ],
          "powermeter_grid_side": [
            {
              "module_id": "yeti_driver_2",
              "implementation_id": "powermeter"
            }
          ],
          "slac": [
            {
              "module_id": "slac",
              "implementation_id": "evse"
            }
          ]
        },
        "config_module": {
          "ac_enforce_hlc": false,
          "ac_hlc_enabled": false,
          "ac_hlc_use_5percent": false,
          "ac_nominal_voltage": 230,
          "ac_with_soc": false,
          "autocharge_use_slac_instead_of_hlc": false,
          "charge_mode": "AC",
          "connector_id": 2,
          "country_code": "DE",
          "dbg_hlc_auth_after_tstep": false,
          "dc_isolation_voltage_V": 500,
          "disable_authentication": false,
          "ev_receipt_required": false,
          "evse_id": "2",
          "evse_id_din": "49A80737A45678",
          "external_ready_to_start_charging": false,
          "hack_allow_bpt_with_iso2": false,
          "hack_fix_hlc_integer_current_requests": false,
          "hack_pause_imd_during_precharge": false,
          "hack_present_current_offset": 0,
          "hack_skoda_enyaq": false,
          "hack_sleep_in_cable_check": 0,
          "hack_sleep_in_cable_check_volkswagen": 0,
          "has_ventilation": true,
          "logfile_suffix": "session_uuid",
          "max_current_export_A": 32,
          "max_current_import_A": 32,
          "payment_enable_contract": true,
          "payment_enable_eim": true,
          "request_zero_power_in_idle": false,
          "sae_j2847_2_bpt_enabled": false,
          "sae_j2847_2_bpt_mode": "V2G",
          "session_logging": true,
          "session_logging_path": "/tmp",
          "session_logging_xml": false,
          "soft_over_current_measurement_noise_A": 0.5,
          "soft_over_current_tolerance_percent": 10,
          "switch_to_minimum_voltage_after_cable_check": false,
          "three_phases": true,
          "uk_smartcharging_random_delay_at_any_change": true,
          "uk_smartcharging_random_delay_enable": false,
          "uk_smartcharging_random_delay_max_duration": 600
        }
      },
      "evse_security": {
        "module": "EvseSecurity",
        "connections": {},
        "config_module": {
          "csms_ca_bundle": "ca/v2g/V2G_ROOT_CA.pem",
          "csms_leaf_cert_directory": "client/csms",
          "csms_leaf_key_directory": "client/csms",
          "mf_ca_bundle": "ca/mf/MF_ROOT_CA.pem",
          "mo_ca_bundle": "ca/mo/MO_ROOT_CA.pem",
          "private_key_password": "123456",
          "secc_leaf_cert_directory": "client/cso",
          "secc_leaf_key_directory": "client/cso",
          "v2g_ca_bundle": "ca/v2g/V2G_ROOT_CA.pem"
        }
      },
      "grid_connection_point": {
        "module": "EnergyNode",
        "connections": {
          "energy_consumer": [
            {
              "module_id": "evse_manager_1",
              "implementation_id": "energy_grid"
            },
            {
              "module_id": "evse_manager_2",
              "implementation_id": "energy_grid"
            }
          ],
          "powermeter": [
            {
              "module_id": "yeti_driver_1",
              "implementation_id": "powermeter"
            }
          ]
        },
        "config_module": {
          "fuse_limit_A": 40,
          "phase_count": 3
        }
      },
      "iso15118_car": {
        "module": "PyEvJosev",
        "connections": {},
        "config_module": {
          "device": "auto",
          "enforce_tls": false,
          "is_cert_install_needed": false,
          "supported_DIN70121": false,
          "supported_ISO15118_2": true,
          "supported_ISO15118_20_AC": false,
          "supported_ISO15118_20_DC": false,
          "tls_active": false
        }
      },
      "iso15118_charger": {
        "module": "EvseV2G",
        "connections": {
          "security": [
            {
              "module_id": "evse_security",
              "implementation_id": "main"
            }
          ]
        },
        "config_module": {
          "auth_timeout_eim": 300,
          "auth_timeout_pnc": 55,
          "device": "auto",
          "supported_DIN70121": false,
          "supported_ISO15118_2": true,
          "terminate_connection_on_failed_response": false,
          "tls_key_logging": false,
          "tls_key_logging_path": "/tmp",
          "tls_security": "allow",
          "tls_timeout": 15000,
          "verify_contract_cert_chain": false
        }
      },
      "ocpp": {
        "module": "OCPP201",
        "connections": {
          "auth": [
            {
              "module_id": "auth",
              "implementation_id": "main"
            }
          ],
          "evse_manager": [
            {
              "module_id": "evse_manager_1",
              "implementation_id": "evse"
            },
            {
              "module_id": "evse_manager_2",
              "implementation_id": "evse"
            }
          ],
          "security": [
            {
              "module_id": "evse_security",
              "implementation_id": "main"
            }
          ],
          "system": [
            {
              "module_id": "system",
              "implementation_id": "main"
            }
          ]
        },
        "config_module": {
          "CoreDatabasePath": "/tmp/ocpp201",
          "DeviceModelDatabasePath": "device_model_storage.db",
          "EnableExternalWebsocketControl": false,
          "MessageLogPath": "/tmp/everest_ocpp_logs",
          "MessageQueueResumeDelay": 0
        }
      },
      "slac": {
        "module": "JsSlacSimulator",
        "connections": {},
        "config_implementation": {
          "ev": {
            "ev_id": "PIONIX_SAYS_HELLO"
          },
          "evse": {
            "evse_id": "PIONIX_SAYS_HELLO",
            "nid": "pionix!",
            "number_of_sounds": 10
          }
        }
      },
      "system": {
        "module": "System",
        "connections": {},
        "config_module": {
          "DefaultRetries": 1,
          "DefaultRetryInterval": 1
        }
      },
      "token_provider_1": {
        "module": "DummyTokenProviderManual",
        "connections": {},
        "config_implementation": {
          "main": {
            "timeout": 10,
            "token": "DEADBEEF",
            "type": "RFID"
          }
        }
      },
      "yeti_driver_1": {
        "module": "JsYetiSimulator",
        "connections": {},
        "config_module": {
          "connector_id": 1
        }
      },
      "yeti_driver_2": {
        "module": "JsYetiSimulator",
        "connections": {},
        "config_module": {
          "connector_id": 2
        }
      }
    },
    "x-module-layout": {
      "api": {
        "position": {
          "x": 41,
          "y": 4
        },
        "terminals": {
          "top": [],
          "right": [
            {
              "id": "main",
              "interface": "empty",
              "type": "provide"
            }
          ],
          "bottom": [],
          "left": [
            {
              "id": "evse_manager",
              "interface": "evse_manager",
              "type": "requirement"
            },
            {
              "id": "ocpp",
              "interface": "ocpp",
              "type": "requirement"
            },
            {
              "id": "random_delay",
              "interface": "uk_random_delay",
              "type": "requirement"
            }
          ]
        }
      },
      "auth": {
        "position": {
          "x": 39,
          "y": -17
        },
        "terminals": {
          "top": [],
          "right": [
            {
              "id": "reservation",
              "interface": "reservation",
              "type": "provide"
            }
          ],
          "bottom": [
            {
              "id": "main",
              "interface": "auth",
              "type": "provide"
            }
          ],
          "left": [
            {
              "id": "token_provider",
              "interface": "auth_token_provider",
              "type": "requirement"
            },
            {
              "id": "token_validator",
              "interface": "auth_token_validator",
              "type": "requirement"
            },
            {
              "id": "evse_manager",
              "interface": "evse_manager",
              "type": "requirement"
            }
          ]
        }
      },
      "car_simulator_1": {
        "position": {
          "x": -60,
          "y": 17
        },
        "terminals": {
          "top": [
            {
              "id": "ev",
              "interface": "ISO15118_ev",
              "type": "requirement"
            }
          ],
          "right": [
            {
              "id": "simulation_control",
              "interface": "yeti_simulation_control",
              "type": "requirement"
            },
            {
              "id": "main",
              "interface": "car_simulator",
              "type": "provide"
            }
          ],
          "bottom": [
            {
              "id": "slac",
              "interface": "slac",
              "type": "requirement"
            }
          ],
          "left": []
        }
      },
      "car_simulator_2": {
        "position": {
          "x": -60,
          "y": 42
        },
        "terminals": {
          "top": [],
          "right": [
            {
              "id": "ev",
              "interface": "ISO15118_ev",
              "type": "requirement"
            },
            {
              "id": "simulation_control",
              "interface": "yeti_simulation_control",
              "type": "requirement"
            },
            {
              "id": "slac",
              "interface": "slac",
              "type": "requirement"
            }
          ],
          "bottom": [
            {
              "id": "main",
              "interface": "car_simulator",
              "type": "provide"
            }
          ],
          "left": []
        }
      },
      "energy_manager": {
        "position": {
          "x": 50,
          "y": 21
        },
        "terminals": {
          "top": [],
          "right": [
            {
              "id": "main",
              "interface": "energy_manager",
              "type": "provide"
            }
          ],
          "bottom": [],
          "left": [
            {
              "id": "energy_trunk",
              "interface": "energy",
              "type": "requirement"
            }
          ]
        }
      },
      "evse_manager_1": {
        "position": {
          "x": 2,
          "y": -1
        },
        "terminals": {
          "top": [],
          "right": [
            {
              "id": "energy_grid",
              "interface": "energy",
              "type": "provide"
            },
            {
              "id": "random_delay",
              "interface": "uk_random_delay",
              "type": "provide"
            },
            {
              "id": "token_provider",
              "interface": "auth_token_provider",
              "type": "provide"
            },
            {
              "id": "evse",
              "interface": "evse_manager",
              "type": "provide"
            }
          ],
          "bottom": [],
          "left": [
            {
              "id": "ac_rcd",
              "interface": "ac_rcd",
              "type": "requirement"
            },
            {
              "id": "bsp",
              "interface": "evse_board_support",
              "type": "requirement"
            },
            {
              "id": "connector_lock",
              "interface": "connector_lock",
              "type": "requirement"
            },
            {
              "id": "hlc",
              "interface": "ISO15118_charger",
              "type": "requirement"
            },
            {
              "id": "imd",
              "interface": "isolation_monitor",
              "type": "requirement"
            },
            {
              "id": "powermeter_car_side",
              "interface": "powermeter",
              "type": "requirement"
            },
            {
              "id": "powermeter_grid_side",
              "interface": "powermeter",
              "type": "requirement"
            },
            {
              "id": "powersupply_DC",
              "interface": "power_supply_DC",
              "type": "requirement"
            },
            {
              "id": "slac",
              "interface": "slac",
              "type": "requirement"
            }
          ]
        }
      },
      "evse_manager_2": {
        "position": {
          "x": 13,
          "y": 16
        },
        "terminals": {
          "top": [
            {
              "id": "evse",
              "interface": "evse_manager",
              "type": "provide"
            }
          ],
          "right": [
            {
              "id": "energy_grid",
              "interface": "energy",
              "type": "provide"
            },
            {
              "id": "random_delay",
              "interface": "uk_random_delay",
              "type": "provide"
            },
            {
              "id": "token_provider",
              "interface": "auth_token_provider",
              "type": "provide"
            }
          ],
          "bottom": [],
          "left": [
            {
              "id": "hlc",
              "interface": "ISO15118_charger",
              "type": "requirement"
            },
            {
              "id": "ac_rcd",
              "interface": "ac_rcd",
              "type": "requirement"
            },
            {
              "id": "bsp",
              "interface": "evse_board_support",
              "type": "requirement"
            },
            {
              "id": "connector_lock",
              "interface": "connector_lock",
              "type": "requirement"
            },
            {
              "id": "imd",
              "interface": "isolation_monitor",
              "type": "requirement"
            },
            {
              "id": "powermeter_car_side",
              "interface": "powermeter",
              "type": "requirement"
            },
            {
              "id": "powermeter_grid_side",
              "interface": "powermeter",
              "type": "requirement"
            },
            {
              "id": "powersupply_DC",
              "interface": "power_supply_DC",
              "type": "requirement"
            },
            {
              "id": "slac",
              "interface": "slac",
              "type": "requirement"
            }
          ]
        }
      },
      "evse_security": {
        "position": {
          "x": -40,
          "y": 3
        },
        "terminals": {
          "top": [],
          "right": [
            {
              "id": "main",
              "interface": "evse_security",
              "type": "provide"
            }
          ],
          "bottom": [],
          "left": []
        }
      },
      "grid_connection_point": {
        "position": {
          "x": 32,
          "y": 23
        },
        "terminals": {
          "top": [
            {
              "id": "energy_consumer",
              "interface": "energy",
              "type": "requirement"
            }
          ],
          "right": [
            {
              "id": "energy_grid",
              "interface": "energy",
              "type": "provide"
            },
            {
              "id": "external_limits",
              "interface": "external_energy_limits",
              "type": "provide"
            }
          ],
          "bottom": [],
          "left": [
            {
              "id": "powermeter",
              "interface": "powermeter",
              "type": "requirement"
            },
            {
              "id": "price_information",
              "interface": "energy_price_information",
              "type": "requirement"
            }
          ]
        }
      },
      "iso15118_car": {
        "position": {
          "x": -40,
          "y": 10
        },
        "terminals": {
          "top": [],
          "right": [],
          "bottom": [],
          "left": [
            {
              "id": "ev",
              "interface": "ISO15118_ev",
              "type": "provide"
            }
          ]
        }
      },
      "iso15118_charger": {
        "position": {
          "x": -21,
          "y": -10
        },
        "terminals": {
          "top": [],
          "right": [],
          "bottom": [
            {
              "id": "charger",
              "interface": "ISO15118_charger",
              "type": "provide"
            }
          ],
          "left": [
            {
              "id": "security",
              "interface": "evse_security",
              "type": "requirement"
            }
          ]
        }
      },
      "ocpp": {
        "position": {
          "x": 24,
          "y": 7
        },
        "terminals": {
          "top": [
            {
              "id": "auth_provider",
              "interface": "auth_token_provider",
              "type": "provide"
            },
            {
              "id": "auth_validator",
              "interface": "auth_token_validator",
              "type": "provide"
            },
            {
              "id": "auth",
              "interface": "auth",
              "type": "requirement"
            }
          ],
          "right": [
            {
              "id": "data_transfer",
              "interface": "ocpp_data_transfer",
              "type": "provide"
            },
            {
              "id": "main",
              "interface": "empty",
              "type": "provide"
            },
            {
              "id": "ocpp_generic",
              "interface": "ocpp",
              "type": "provide"
            }
          ],
          "bottom": [],
          "left": [
            {
              "id": "data_transfer",
              "interface": "ocpp_data_transfer",
              "type": "requirement"
            },
            {
              "id": "evse_manager",
              "interface": "evse_manager",
              "type": "requirement"
            },
            {
              "id": "security",
              "interface": "evse_security",
              "type": "requirement"
            },
            {
              "id": "system",
              "interface": "system",
              "type": "requirement"
            }
          ]
        }
      },
      "slac": {
        "position": {
          "x": -40,
          "y": 38
        },
        "terminals": {
          "top": [],
          "right": [
            {
              "id": "evse",
              "interface": "slac",
              "type": "provide"
            }
          ],
          "bottom": [],
          "left": [
            {
              "id": "ev",
              "interface": "slac",
              "type": "provide"
            }
          ]
        }
      },
      "system": {
        "position": {
          "x": -40,
          "y": 31
        },
        "terminals": {
          "top": [],
          "right": [
            {
              "id": "main",
              "interface": "system",
              "type": "provide"
            }
          ],
          "bottom": [],
          "left": []
        }
      },
      "token_provider_1": {
        "position": {
          "x": 12,
          "y": -21
        },
        "terminals": {
          "top": [],
          "right": [
            {
              "id": "main",
              "interface": "auth_token_provider",
              "type": "provide"
            }
          ],
          "bottom": [],
          "left": []
        }
      },
      "yeti_driver_1": {
        "position": {
          "x": -40,
          "y": 17
        },
        "terminals": {
          "top": [],
          "right": [
            {
              "id": "board_support",
              "interface": "evse_board_support",
              "type": "provide"
            },
            {
              "id": "connector_lock",
              "interface": "connector_lock",
              "type": "provide"
            },
            {
              "id": "powermeter",
              "interface": "powermeter",
              "type": "provide"
            },
            {
              "id": "rcd",
              "interface": "ac_rcd",
              "type": "provide"
            }
          ],
          "bottom": [],
          "left": [
            {
              "id": "yeti_simulation_control",
              "interface": "yeti_simulation_control",
              "type": "provide"
            }
          ]
        }
      },
      "yeti_driver_2": {
        "position": {
          "x": -40,
          "y": 24
        },
        "terminals": {
          "top": [],
          "right": [
            {
              "id": "board_support",
              "interface": "evse_board_support",
              "type": "provide"
            },
            {
              "id": "connector_lock",
              "interface": "connector_lock",
              "type": "provide"
            },
            {
              "id": "powermeter",
              "interface": "powermeter",
              "type": "provide"
            },
            {
              "id": "rcd",
              "interface": "ac_rcd",
              "type": "provide"
            }
          ],
          "bottom": [],
          "left": [
            {
              "id": "yeti_simulation_control",
              "interface": "yeti_simulation_control",
              "type": "provide"
            }
          ]
        }
      }
    }
  },
  "config-sil": {
    "active_modules": {
      "MyEvseManager": {
        "module": "EvseManager",
        "connections": {
          "ac_rcd": [
            {
              "module_id": "connector_1_powerpath",
              "implementation_id": "rcd"
            }
          ],
          "bsp": [
            {
              "module_id": "connector_1_powerpath",
              "implementation_id": "board_support"
            }
          ],
          "connector_lock": [
            {
              "module_id": "connector_1_powerpath",
              "implementation_id": "connector_lock"
            }
          ],
          "hlc": [
            {
              "module_id": "iso15118_charger",
              "implementation_id": "charger"
            }
          ],
          "powermeter_grid_side": [
            {
              "module_id": "connector_1_powerpath",
              "implementation_id": "powermeter"
            }
          ],
          "slac": [
            {
              "module_id": "slac",
              "implementation_id": "evse"
            }
          ]
        },
        "config_module": {
          "ac_enforce_hlc": false,
          "ac_hlc_enabled": true,
          "ac_hlc_use_5percent": false,
          "ac_nominal_voltage": 230,
          "ac_with_soc": false,
          "autocharge_use_slac_instead_of_hlc": false,
          "charge_mode": "AC",
          "connector_id": 1,
          "country_code": "DE",
          "dbg_hlc_auth_after_tstep": false,
          "dc_isolation_voltage_V": 500,
          "disable_authentication": false,
          "ev_receipt_required": false,
          "evse_id": "DE*PNX*E12345*1",
          "evse_id_din": "49A80737A45678",
          "external_ready_to_start_charging": false,
          "hack_allow_bpt_with_iso2": false,
          "hack_fix_hlc_integer_current_requests": false,
          "hack_pause_imd_during_precharge": false,
          "hack_present_current_offset": 0,
          "hack_skoda_enyaq": false,
          "hack_sleep_in_cable_check": 0,
          "hack_sleep_in_cable_check_volkswagen": 0,
          "has_ventilation": true,
          "logfile_suffix": "session_uuid",
          "max_current_export_A": 32,
          "max_current_import_A": 32,
          "payment_enable_contract": true,
          "payment_enable_eim": true,
          "request_zero_power_in_idle": false,
          "sae_j2847_2_bpt_enabled": false,
          "sae_j2847_2_bpt_mode": "V2G",
          "session_logging": true,
          "session_logging_path": "/tmp/everest-logs",
          "session_logging_xml": false,
          "soft_over_current_measurement_noise_A": 0.5,
          "soft_over_current_tolerance_percent": 10,
          "switch_to_minimum_voltage_after_cable_check": false,
          "three_phases": true
        }
      },
      "api": {
        "module": "API",
        "connections": {
          "evse_manager": [
            {
              "module_id": "MyEvseManager",
              "implementation_id": "evse"
            }
          ]
        },
        "config_module": {
          "charger_information_file": "",
          "hw_caps_max_current_export_decimal_places": 2,
          "hw_caps_max_current_export_round_to": 0,
          "hw_caps_max_current_import_decimal_places": 2,
          "hw_caps_max_current_import_round_to": 0,
          "hw_caps_max_plug_temperature_C_decimal_places": 2,
          "hw_caps_max_plug_temperature_C_round_to": 0,
          "hw_caps_min_current_export_decimal_places": 2,
          "hw_caps_min_current_export_round_to": 0,
          "hw_caps_min_current_import_decimal_places": 2,
          "hw_caps_min_current_import_round_to": 0,
          "limits_max_current_decimal_places": 2,
          "limits_max_current_round_to": 0,
          "powermeter_VAR_decimal_places": 2,
          "powermeter_VAR_round_to": 0,
          "powermeter_current_decimal_places": 2,
          "powermeter_current_round_to": 0,
          "powermeter_energy_export_decimal_places": 2,
          "powermeter_energy_export_round_to": 0,
          "powermeter_energy_import_decimal_places": 2,
          "powermeter_energy_import_round_to": 0,
          "powermeter_frequency_decimal_places": 2,
          "powermeter_frequency_round_to": 0,
          "powermeter_power_decimal_places": 2,
          "powermeter_power_round_to": 0,
          "powermeter_voltage_decimal_places": 2,
          "powermeter_voltage_round_to": 0,
          "telemetry_evse_temperature_C_decimal_places": 2,
          "telemetry_evse_temperature_C_round_to": 0,
          "telemetry_fan_rpm_decimal_places": 2,
          "telemetry_fan_rpm_round_to": 0,
          "telemetry_plug_temperature_C_decimal_places": 2,
          "telemetry_plug_temperature_C_round_to": 0,
          "telemetry_supply_voltage_12V_decimal_places": 2,
          "telemetry_supply_voltage_12V_round_to": 0,
          "telemetry_supply_voltage_minus_12V_decimal_places": 2,
          "telemetry_supply_voltage_minus_12V_round_to": 0
        }
      },
      "auth": {
        "module": "Auth",
        "connections": {
          "evse_manager": [
            {
              "module_id": "MyEvseManager",
              "implementation_id": "evse"
            }
          ],
          "token_provider": [
            {
              "module_id": "token_provider",
              "implementation_id": "main"
            }
          ],
          "token_validator": [
            {
              "module_id": "token_validator",
              "implementation_id": "main"
            }
          ]
        },
        "config_module": {
          "connection_timeout": 10,
          "ignore_connector_faults": true,
          "master_pass_group_id": "",
          "prioritize_authorization_over_stopping_transaction": true,
          "selection_algorithm": "FindFirst"
        }
      },
      "car_simulator": {
        "module": "JsCarSimulator",
        "connections": {
          "ev": [
            {
              "module_id": "iso15118_car",
              "implementation_id": "ev"
            }
          ],
          "simulation_control": [
            {
              "module_id": "connector_1_powerpath",
              "implementation_id": "yeti_simulation_control"
            }
          ],
          "slac": [
            {
              "module_id": "slac",
              "implementation_id": "ev"
            }
          ]
        },
        "config_module": {
          "auto_enable": true,
          "auto_exec": false,
          "auto_exec_commands": "sleep 1;iec_wait_pwr_ready;sleep 1;draw_power_regulated 16,3;sleep 30;unplug",
          "connector_id": 1,
          "dc_discharge_max_current_limit": 300,
          "dc_discharge_max_power_limit": 150000,
          "dc_discharge_target_current": 5,
          "dc_discharge_v2g_minimal_soc": 20,
          "dc_energy_capacity": 60000,
          "dc_max_current_limit": 300,
          "dc_max_power_limit": 150000,
          "dc_max_voltage_limit": 900,
          "dc_target_current": 5,
          "dc_target_voltage": 200,
          "support_sae_j2847": false
        }
      },
      "connector_1_powerpath": {
        "module": "JsYetiSimulator",
        "connections": {},
        "config_module": {
          "connector_id": 1
        }
      },
      "energy_manager": {
        "module": "EnergyManager",
        "connections": {
          "energy_trunk": [
            {
              "module_id": "grid_connection_point",
              "implementation_id": "energy_grid"
            }
          ]
        },
        "config_module": {
          "debug": false,
          "nominal_ac_voltage": 230,
          "schedule_interval_duration": 60,
          "schedule_total_duration": 1,
          "slice_ampere": 0.5,
          "slice_watt": 500,
          "update_interval": 1
        }
      },
      "evse_security": {
        "module": "EvseSecurity",
        "connections": {},
        "config_module": {
          "csms_ca_bundle": "ca/v2g/V2G_ROOT_CA.pem",
          "csms_leaf_cert_directory": "client/csms",
          "csms_leaf_key_directory": "client/csms",
          "mf_ca_bundle": "ca/mf/MF_ROOT_CA.pem",
          "mo_ca_bundle": "ca/mo/MO_ROOT_CA.pem",
          "private_key_password": 123456,
          "secc_leaf_cert_directory": "client/cso",
          "secc_leaf_key_directory": "client/cso",
          "v2g_ca_bundle": "ca/v2g/V2G_ROOT_CA.pem"
        }
      },
      "grid_connection_point": {
        "module": "EnergyNode",
        "connections": {
          "energy_consumer": [
            {
              "module_id": "MyEvseManager",
              "implementation_id": "energy_grid"
            }
          ]
        },
        "config_module": {
          "fuse_limit_A": 40,
          "phase_count": 3
        }
      },
      "iso15118_car": {
        "module": "PyEvJosev",
        "connections": {},
        "config_module": {
          "device": "auto",
          "enforce_tls": false,
          "is_cert_install_needed": false,
          "supported_DIN70121": false,
          "supported_ISO15118_2": true,
          "supported_ISO15118_20_AC": false,
          "supported_ISO15118_20_DC": false,
          "tls_active": false
        }
      },
      "iso15118_charger": {
        "module": "EvseV2G",
        "connections": {
          "security": [
            {
              "module_id": "evse_security",
              "implementation_id": "main"
            }
          ]
        },
        "config_module": {
          "auth_timeout_eim": 300,
          "auth_timeout_pnc": 55,
          "device": "auto",
          "supported_DIN70121": false,
          "supported_ISO15118_2": true,
          "terminate_connection_on_failed_response": false,
          "tls_key_logging": false,
          "tls_key_logging_path": "/tmp",
          "tls_security": "allow",
          "tls_timeout": 15000,
          "verify_contract_cert_chain": false
        }
      },
      "persistent_store": {
        "module": "PersistentStore",
        "connections": {},
        "config_module": {
          "sqlite_db_file_path": "everest_persistent_store.db"
        }
      },
      "setup": {
        "module": "Setup",
        "connections": {
          "store": [
            {
              "module_id": "persistent_store",
              "implementation_id": "main"
            }
          ]
        },
        "config_module": {
          "ap_interface": "wlan0",
          "ap_ipv4": "192.168.1.1/24",
          "initialized_by_default": true,
          "localization": true,
          "online_check_host": "lfenergy.org",
          "release_metadata_file": "release.json",
          "setup_simulation": true,
          "setup_wifi": false
        }
      },
      "slac": {
        "module": "JsSlacSimulator",
        "connections": {},
        "config_implementation": {
          "ev": {
            "ev_id": "PIONIX_SAYS_HELLO"
          },
          "evse": {
            "evse_id": "PIONIX_SAYS_HELLO",
            "nid": "pionix!",
            "number_of_sounds": 10
          }
        }
      },
      "token_provider": {
        "module": "DummyTokenProvider",
        "connections": {
          "evse": [
            {
              "module_id": "MyEvseManager",
              "implementation_id": "evse"
            }
          ]
        },
        "config_implementation": {
          "main": {
            "timeout": 10,
            "token": "DEADBEEF",
            "type": "RFID"
          }
        }
      },
      "token_validator": {
        "module": "DummyTokenValidator",
        "connections": {},
        "config_implementation": {
          "main": {
            "sleep": 0.25,
            "validation_reason": "Token seems valid",
            "validation_result": "Accepted"
          }
        }
      }
    },
    "x-module-layout": {
      "MyEvseManager": {
        "position": {
          "x": 13,
          "y": 23
        },
        "terminals": {
          "bottom": [
            {
              "id": "powersupply_DC",
              "interface": "power_supply_DC",
              "type": "requirement"
            },
            {
              "id": "imd",
              "interface": "isolation_monitor",
              "type": "requirement"
            },
            {
              "id": "powermeter_car_side",
              "interface": "powermeter",
              "type": "requirement"
            },
            {
              "id": "token_provider",
              "interface": "auth_token_provider",
              "type": "provide"
            },
            {
              "id": "slac",
              "interface": "slac",
              "type": "requirement"
            }
          ],
          "left": [
            {
              "id": "hlc",
              "interface": "ISO15118_charger",
              "type": "requirement"
            }
          ],
          "right": [
            {
              "id": "bsp",
              "interface": "board_support_AC",
              "type": "requirement"
            },
            {
              "id": "powermeter_grid_side",
              "interface": "powermeter",
              "type": "requirement"
            }
          ],
          "top": [
            {
              "id": "energy_grid",
              "interface": "energy",
              "type": "provide"
            },
            {
              "id": "evse",
              "interface": "evse_manager",
              "type": "provide"
            }
          ]
        }
      },
      "api": {
        "position": {
          "x": 33,
          "y": 13
        },
        "terminals": {
          "bottom": [],
          "left": [
            {
              "id": "evse_manager",
              "interface": "evse_manager",
              "type": "requirement"
            }
          ],
          "right": [
            {
              "id": "main",
              "interface": "empty",
              "type": "provide"
            }
          ],
          "top": []
        }
      },
      "auth": {
        "position": {
          "x": 33,
          "y": 2
        },
        "terminals": {
          "bottom": [
            {
              "id": "main",
              "interface": "auth",
              "type": "provide"
            },
            {
              "id": "reservation",
              "interface": "reservation",
              "type": "provide"
            }
          ],
          "left": [
            {
              "id": "evse_manager",
              "interface": "evse_manager",
              "type": "requirement"
            }
          ],
          "right": [
            {
              "id": "token_validator",
              "interface": "auth_token_validator",
              "type": "requirement"
            }
          ],
          "top": [
            {
              "id": "token_provider",
              "interface": "auth_token_provider",
              "type": "requirement"
            }
          ]
        }
      },
      "car_simulator": {
        "position": {
          "x": 53,
          "y": 33
        },
        "terminals": {
          "bottom": [],
          "left": [
            {
              "id": "simulation_control",
              "interface": "yeti_simulation_control",
              "type": "requirement"
            },
            {
              "id": "slac",
              "interface": "slac",
              "type": "requirement"
            }
          ],
          "right": [
            {
              "id": "main",
              "interface": "car_simulator",
              "type": "provide"
            }
          ],
          "top": [
            {
              "id": "ev",
              "interface": "ISO15118_ev",
              "type": "requirement"
            }
          ]
        }
      },
      "connector_1_powerpath": {
        "position": {
          "x": 33,
          "y": 23
        },
        "terminals": {
          "bottom": [
            {
              "id": "debug_keepalive",
              "interface": "debug_json",
              "type": "provide"
            },
            {
              "id": "debug_powermeter",
              "interface": "debug_json",
              "type": "provide"
            },
            {
              "id": "debug_yeti",
              "interface": "debug_json",
              "type": "provide"
            },
            {
              "id": "yeti_extras",
              "interface": "yeti_extras",
              "type": "provide"
            },
            {
              "id": "debug_state",
              "interface": "debug_json",
              "type": "provide"
            }
          ],
          "left": [
            {
              "id": "board_support",
              "interface": "board_support_AC",
              "type": "provide"
            },
            {
              "id": "powermeter",
              "interface": "powermeter",
              "type": "provide"
            }
          ],
          "right": [
            {
              "id": "yeti_simulation_control",
              "interface": "yeti_simulation_control",
              "type": "provide"
            }
          ],
          "top": []
        }
      },
      "energy_manager": {
        "position": {
          "x": -5,
          "y": 2
        },
        "terminals": {
          "bottom": [
            {
              "id": "energy_trunk",
              "interface": "energy",
              "type": "requirement"
            }
          ],
          "left": [],
          "right": [
            {
              "id": "main",
              "interface": "energy_manager",
              "type": "provide"
            }
          ],
          "top": []
        }
      },
      "evse_security": {
        "position": {
          "x": 9,
          "y": 2
        },
        "terminals": {
          "bottom": [],
          "left": [],
          "right": [
            {
              "id": "main",
              "interface": "evse_security",
              "type": "provide"
            }
          ],
          "top": []
        }
      },
      "grid_connection_point": {
        "position": {
          "x": -5,
          "y": 13
        },
        "terminals": {
          "bottom": [],
          "left": [
            {
              "id": "price_information",
              "interface": "energy_price_information",
              "type": "requirement"
            },
            {
              "id": "powermeter",
              "interface": "powermeter",
              "type": "requirement"
            }
          ],
          "right": [
            {
              "id": "external_limits",
              "interface": "external_energy_limits",
              "type": "provide"
            },
            {
              "id": "energy_consumer",
              "interface": "energy",
              "type": "requirement"
            }
          ],
          "top": [
            {
              "id": "energy_grid",
              "interface": "energy",
              "type": "provide"
            }
          ]
        }
      },
      "iso15118_car": {
        "position": {
          "x": 53,
          "y": 23
        },
        "terminals": {
          "bottom": [
            {
              "id": "ev",
              "interface": "ISO15118_ev",
              "type": "provide"
            }
          ],
          "left": [],
          "right": [
            {
              "id": "main",
              "interface": "empty",
              "type": "provide"
            }
          ],
          "top": []
        }
      },
      "iso15118_charger": {
        "position": {
          "x": -5,
          "y": 23
        },
        "terminals": {
          "bottom": [],
          "left": [],
          "right": [
            {
              "id": "charger",
              "interface": "ISO15118_charger",
              "type": "provide"
            }
          ],
          "top": []
        }
      },
      "persistent_store": {
        "position": {
          "x": -5,
          "y": 40
        },
        "terminals": {
          "bottom": [],
          "left": [],
          "right": [
            {
              "id": "main",
              "interface": "kvs",
              "type": "provide"
            }
          ],
          "top": []
        }
      },
      "setup": {
        "position": {
          "x": 13,
          "y": 40
        },
        "terminals": {
          "bottom": [],
          "left": [
            {
              "id": "store",
              "interface": "kvs",
              "type": "requirement"
            }
          ],
          "right": [
            {
              "id": "main",
              "interface": "empty",
              "type": "provide"
            }
          ],
          "top": []
        }
      },
      "slac": {
        "position": {
          "x": 33,
          "y": 33
        },
        "terminals": {
          "bottom": [],
          "left": [
            {
              "id": "evse",
              "interface": "slac",
              "type": "provide"
            }
          ],
          "right": [
            {
              "id": "ev",
              "interface": "slac",
              "type": "provide"
            }
          ],
          "top": []
        }
      },
      "token_provider": {
        "position": {
          "x": 33,
          "y": -9
        },
        "terminals": {
          "bottom": [
            {
              "id": "main",
              "interface": "auth_token_provider",
              "type": "provide"
            }
          ],
          "left": [
            {
              "id": "evse",
              "interface": "evse_manager",
              "type": "requirement"
            }
          ],
          "right": [],
          "top": []
        }
      },
      "token_validator": {
        "position": {
          "x": 51,
          "y": 2
        },
        "terminals": {
          "bottom": [],
          "left": [
            {
              "id": "main",
              "interface": "auth_token_validator",
              "type": "provide"
            }
          ],
          "right": [],
          "top": []
        }
      }
    }
  }
} as EverestConfigList;
