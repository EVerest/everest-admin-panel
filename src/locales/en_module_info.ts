// SPDX-License-Identifier: Apache-2.0
// Copyright 2020 - 2026 Pionix GmbH and Contributors to EVerest

// This file is generated, see README.md for more information.

/* eslint-disable prettier/prettier */
export default {
  API: {
    config: {
      charger_information_file: {
        description: 'Path to a file containing information about the charger like its serial number'
      },
      hw_caps_max_current_export_decimal_places: {
        description: 'Maximum number of decimal places for maximum export current in the hardware capabilities'
      },
      hw_caps_max_current_export_round_to: {
        description: 'Round maximum export current in hardware limits to the nearest step. Ignored if value is 0'
      },
      hw_caps_max_current_import_decimal_places: {
        description: 'Maximum number of decimal places for maximum import current in the hardware capabilities'
      },
      hw_caps_max_current_import_round_to: {
        description: 'Round maximum import current in hardware limits to the nearest step. Ignored if value is 0'
      },
      hw_caps_max_plug_temperature_C_decimal_places: {
        description: 'Maximum number of decimal places for max_plug_temperature_C in the hardware capabilities'
      },
      hw_caps_max_plug_temperature_C_round_to: {
        description: 'Round max_plug_temperature_C in hardware limits to the nearest step. Ignored if value is 0'
      },
      hw_caps_min_current_export_decimal_places: {
        description: 'Maximum number of decimal places for minimum export current in the hardware capabilities'
      },
      hw_caps_min_current_export_round_to: {
        description: 'Round minimum export current in hardware limits to the nearest step. Ignored if value is 0'
      },
      hw_caps_min_current_import_decimal_places: {
        description: 'Maximum number of decimal places for minimum import current in the hardware capabilities'
      },
      hw_caps_min_current_import_round_to: {
        description: 'Round minimum import current in hardware limits to the nearest step. Ignored if value is 0'
      },
      limits_max_current_decimal_places: {
        description: 'Maximum number of decimal places for maximum current in the limits'
      },
      limits_max_current_round_to: {
        description: 'Round maximum current in limits to the nearest step. Ignored if value is 0'
      },
      powermeter_VAR_decimal_places: {
        description: 'Maximum number of decimal places for VAR in the power meter'
      },
      powermeter_VAR_round_to: {
        description: 'Round VAR to the nearest step. Ignored if value is 0'
      },
      powermeter_current_decimal_places: {
        description: 'Maximum number of decimal places for current in the power meter'
      },
      powermeter_current_round_to: {
        description: 'Round current to the nearest step. Ignored if value is 0'
      },
      powermeter_energy_export_decimal_places: {
        description: 'Maximum number of decimal places for export energy in the power meter'
      },
      powermeter_energy_export_round_to: {
        description: 'Round export energy to the nearest step. Ignored if value is 0'
      },
      powermeter_energy_import_decimal_places: {
        description: 'Maximum number of decimal places for import energy in the power meter'
      },
      powermeter_energy_import_round_to: {
        description: 'Round import energy to the nearest step. Ignored if value is 0'
      },
      powermeter_frequency_decimal_places: {
        description: 'Maximum number of decimal places for frequency in the power meter'
      },
      powermeter_frequency_round_to: {
        description: 'Round frequency to the nearest step. Ignored if value is 0'
      },
      powermeter_power_decimal_places: {
        description: 'Maximum number of decimal places for power in the power meter'
      },
      powermeter_power_round_to: {
        description: 'Round power to the nearest step. Ignored if value is 0'
      },
      powermeter_voltage_decimal_places: {
        description: 'Maximum number of decimal places for voltage in the power meter'
      },
      powermeter_voltage_round_to: {
        description: 'Round voltage to the nearest step. Ignored if value is 0'
      },
      telemetry_evse_temperature_C_decimal_places: {
        description: 'Maximum number of decimal places for evse_temperature_C in telemetry'
      },
      telemetry_evse_temperature_C_round_to: {
        description: 'Round evse_temperature_C in telemetry to the nearest step. Ignored if value is 0'
      },
      telemetry_fan_rpm_decimal_places: {
        description: 'Maximum number of decimal places for fan RPM in telemetry'
      },
      telemetry_fan_rpm_round_to: {
        description: 'Round fan RPM in telemetry to the nearest step. Ignored if value is 0'
      },
      telemetry_plug_temperature_C_decimal_places: {
        description: 'Maximum number of decimal places for RCD current in telemetry'
      },
      telemetry_plug_temperature_C_round_to: {
        description: 'Round plug_temperature_C in telemetry to the nearest step. Ignored if value is 0'
      },
      telemetry_supply_voltage_12V_decimal_places: {
        description: 'Maximum number of decimal places for supply voltage 12V in telemetry'
      },
      telemetry_supply_voltage_12V_round_to: {
        description: 'Round supply voltage 12V in telemetry to the nearest step. Ignored if value is 0'
      },
      telemetry_supply_voltage_minus_12V_decimal_places: {
        description: 'Maximum number of decimal places for supply voltage -12V in telemetry'
      },
      telemetry_supply_voltage_minus_12V_round_to: {
        description: 'Round supply voltage -12V in telemetry to the nearest step. Ignored if value is 0'
      }
    },
    description: 'The EVerest API module, exposing some internal functionality on an external MQTT connection.',
    provides: { main: { description: 'EVerest API' } }
  },
  AdAcEvse22KwzKitBSP: {
    config: {
      baud_rate: {
        description: 'Serial baud rate to use when communicating with the AD-ACEVSE22KWZ-KIT'
      },
      caps_max_current_A: {
        description: 'Maximum current on AC side. For AC this is typically 16 or 32, but for HLC this can be less. -1 means use limit reported by HW.'
      },
      caps_min_current_A: {
        description: 'Minimal current on AC side. For AC this is typically 6, but for HLC this can be less. -1 means use limit reported by HW.'
      },
      reset_gpio: { description: 'GPIO line to use to reset AD-ACEVSE22KWZ-KIT' },
      reset_gpio_chip: {
        description: 'Reset GPIO chip to use to HW reset the AD-ACEVSE22KWZ-KIT. If set to empty string, it is disabled.'
      },
      serial_port: {
        description: 'Serial port the AD-ACEVSE22KWZ-KIT is connected to'
      }
    },
    description: 'Board support package module for the AD-ACEVSE22KWZ-KIT reference design',
    provides: {
      board_support: {
        description: 'provides the board support Interface to low level control control pilot, relais, motor lock'
      },
      powermeter: {
        description: 'provides the AD-ACEVSE22KWZ-KIT Internal Power Meter'
      }
    }
  },
  Auth: {
    config: {
      connection_timeout: {
        description: 'Defines how many seconds an authorization is valid before it is discarded. Defines how many seconds a user can provide authorization after the plug in of a car'
      },
      ignore_connector_faults: {
        description: 'Boolean value to describe the handling of faults on connectors.\n' +
          'If true, faults reported on connectors are ignored, i.e. they can still be authorized. This should be disabled in most use cases, but e.g. in free charging applications it may be useful to allow a charging session in the following case: A connector e.g. has an overtemperature fault that at some point will clear once it is cooled down. A car is plugged in before  the error is cleared. The user would expect that the charging starts once it is cooled down. When this option is set to false,  it will not be authorized on plug in as the connector is in fault state and it will never recover until the car is replugged. If it is set to true, the authorization happens on the faulty connector and charging will start once the fault is cleared.\n' +
          'If false, faulty connectors are treated as not available and will not be authorized. This is a good setting for e.g. public chargers.'
      },
      master_pass_group_id: {
        description: 'IdTokens that have this id as groupId belong to the Master Pass Group. Meaning they can stop any ongoing transaction, but cannot start transactions. This can, for example, be used by law enforcement personal to stop any ongoing transaction when an EV has to be towed away. If left empty, master_pass_group_id is not used.'
      },
      prioritize_authorization_over_stopping_transaction: {
        description: 'Boolean value to describe the handling of parent id tokens.\n' +
          'If true, a new token will be preferably used for authorization of a new connector if a connector is available. It will not be used to finish a transaction using its parent_id_token. parent_id_token will only be used to finish transaction if no connector is available for authorization anymore.\n' +
          'If false, a new token will be used to finish a transaction if the parent_id_token of a present transaction matches the parent_id_token of the provided_token. Authorization to available connectors will only be provided if no transaction can be stopped using the given parent_id_token'
      },
      selection_algorithm: {
        description: 'The selection algorithm contains the logic to select one connector for an incoming token. In case the charging station has only one connector, the selection of a connector is pretty straight-forward because there is only one that is  available. The selection algorithm becomes relevant in case the Auth  module manages authorization requests  for multiple connectors. The following values can be set: PlugEvents: Selection of connector is based on EV Plug In events FindFirst: Simply selects the first available connector that has no active transaction UserInput: Placeholder, not yet implemented'
      }
    },
    description: 'This module implements the authentication handling for the EVerest. It is responsible for providing authorization to the connected evse managers. In addition to that, it handles the reservation management.',
    provides: {
      main: { description: 'This implements the auth interface for EVerest' },
      reservation: {
        description: 'This implements the reservation interface for EVerest.'
      }
    }
  },
  DCSupplySimulator: {
    description: 'Implementation of a programmable power supply for DC charging',
    provides: {
      main: {
        config: {
          bidirectional: { description: 'Set to true for bidirectional supply' },
          max_current: { description: 'Max supported current' },
          max_power: { description: 'Max supported power in watt' },
          max_voltage: { description: 'Max supported voltage' },
          min_current: { description: 'Min supported current' },
          min_voltage: { description: 'Min supported voltage' }
        },
        description: 'Main interface for the power supply'
      },
      powermeter: { description: 'Power meter interface for simulation' }
    }
  },
  DPM1000: {
    config: {
      current_limit_A: { description: 'Maximum Current Limit in Ampere' },
      debug_print_all_telemetry: {
        description: 'Read and print all telemetry from the power module. Helpful while debugging.'
      },
      device: { description: 'Interface name for can device' },
      device_address: {
        description: 'Device address (as selected on front LED panel)'
      },
      discharge_gpio_chip: {
        description: 'GPIO chip to use to switch external discharge load on and off. An empty string disables discharging. Note that the hardware load must be designed to allow permanent discharge from the highest voltage (e.g. 1000V)'
      },
      discharge_gpio_line: { description: 'GPIO line to use to switch discharge load' },
      discharge_gpio_polarity: {
        description: 'GPIO polarity, false means active low, true means active high'
      },
      power_limit_W: { description: 'Maximum Power Limit in Watt' },
      series_parallel_mode: {
        description: 'Select series (300-1000V), parallel (50-500) or automatic switching mode (50-1000). This switches the internal configuration of one module and should not be confused with parallel operation of multiple modules.'
      },
      voltage_limit_V: {
        description: 'Maximum Voltage Limit in Volt. Will be limited by series parallel setting as well.'
      }
    },
    description: 'DC Power Supply Driver',
    provides: {
      main: {
        description: 'Power supply driver for DPM 1000-30 from SCU Power. Currently supports only one module.'
      }
    }
  },
  DummyBankSessionTokenProvider: {
    description: 'Dummy bank session token provider',
    provides: {
      main: {
        config: {
          randomize: { description: 'Randomize token string to return' },
          token: { description: 'Dummy token string to return' }
        },
        description: 'Main implementation of bank session dummy token provider either always returning one configured token or each time a real UUID'
      }
    }
  },
  DummyTokenProvider: {
    description: 'Dummy token provider that listens to AuthRequired event from evse_manager and then publishes one token',
    provides: {
      main: {
        config: {
          connector_id: {
            description: 'If >0, the generated token is only valid for this connector_id'
          },
          timeout: { description: 'Time our dummy token is valid (in s)' },
          token: { description: 'Dummy token string to return' },
          type: { description: 'Type to report for our dummy token' }
        },
        description: 'Main implementation of dummy token provider always returning one configured token'
      }
    }
  },
  DummyTokenProviderManual: {
    description: 'Dummy token provider that manually publishes one token',
    provides: {
      main: {
        config: {
          timeout: { description: 'Time our dummy token is valid (in s)' },
          token: { description: 'Dummy token string to return' },
          type: { description: 'Type to report for our dummy token' }
        },
        description: 'Main implementation of dummy token provider always returning one configured token'
      }
    }
  },
  DummyTokenValidator: {
    description: 'Dummy token validator always returning the same configured token validation result for every token',
    provides: {
      main: {
        config: {
          sleep: {
            description: 'Time to wait before returning the dummy validation result (in s)'
          },
          validation_reason: { description: 'Dummy validation reason to return' },
          validation_result: { description: 'Dummy validation result to return' }
        },
        description: 'Main implementation of dummy token validator always returning the same configured token validation result for every token'
      }
    }
  },
  DummyV2G: {
    description: 'This module implements an empty dummy for HLC. It does not actually communicate with the car.',
    provides: {
      main: {
        description: 'This module implements the ISO15118-2 implementation of an AC or DC charger'
      }
    }
  },
  EnergyManager: {
    config: {
      debug: { description: 'Show debug output on command line.' },
      nominal_ac_voltage: {
        description: 'Nominal AC voltage to use to convert Ampere to Watt on AC'
      },
      schedule_interval_duration: {
        description: 'Duration of the schedule interval for forecast [min]'
      },
      schedule_total_duration: { description: 'Total duration of schedule forcast [h]' },
      slice_ampere: {
        description: 'Ampere slice for trading. Lower values will give more even distribution but increase processing time [A].'
      },
      slice_watt: {
        description: 'Watt slice for trading. Lower values will give more even distribution but increase processing time [W].'
      },
      switch_3ph1ph_max_nr_of_switches_per_session: {
        description: 'Limit the maximum number of switches between 1ph and 3ph per charging session. Set to 0 for no limit.'
      },
      switch_3ph1ph_power_hysteresis_W: {
        description: 'Power based hysteresis in Watt. If set to 200W for example, the hysteresis for PWM based charging will be 4.2kW to 4.4kW. Actual values will depend on configured nominal AC voltage, and they may be different for PWM vs ISO based charging in the future.'
      },
      switch_3ph1ph_switch_limit_stickyness: {
        description: 'If the maximum number of switches between 1ph and 3ph is reached, select what should happen:\n' +
          '  - SinglePhase: Switch to 1ph mode\n' +
          '  - ThreePhase: Switch to 3ph mode\n' +
          '  - DontChange: Stay in the mode it is currently in'
      },
      switch_3ph1ph_time_hysteresis_s: {
        description: 'Time based hysteresis. It will only switch to 3 phases if the condition to select 3 phases is stable for the configured number of seconds. It will always switch to 1ph mode without waiting for this delay. Set to 0 to disable time based hysteresis.'
      },
      switch_3ph1ph_while_charging_mode: {
        description: 'If supported by BSP in capabilities to switch between three phases and one phase and config option three_phases is set to true, this controls the algorithm:\n' +
          '  - Never: Do not use 1ph/3ph switching even if supported by the BSP\n' +
          '  - Oneway: Only switch from 3ph to 1ph if power is not enough, but never switch back to 3ph for a session.\n' +
          '  - Both: Switch in both directions, i.e. from 3ph to 1ph and back to 3ph if available power changes'
      },
      update_interval: { description: 'Update interval for energy distribution [s]' }
    },
    description: 'This module is the global Energy Manager for all EVSE/Charging stations in this building',
    provides: { main: { description: 'Main interface of the energy manager' } }
  },
  EnergyNode: {
    config: {
      fuse_limit_A: {
        description: 'Fuse limit in ampere for all phases. Note: this always applies in addition to limits set by external_limits interface.'
      },
      phase_count: {
        description: 'phase count limit. Omit if not limited in this fuse.'
      }
    },
    description: 'This module is part of the Energy Tree and represents a simple current fuse.',
    provides: {
      energy_grid: {
        description: 'This is the chain interface to build the energy supply tree'
      },
      external_limits: {
        description: 'Additional external limits can be set via this interface.'
      }
    }
  },
  ErrorHistory: {
    description: 'This module provides a persistent error history',
    provides: {
      error_history: {
        config: {
          database_path: { description: 'Absolute path to the database file' }
        },
        description: 'Error history'
      }
    }
  },
  EvAPI: {
    description: 'The EVerest EV API module, exposing some internal functionality on an external MQTT connection.',
    provides: { main: { description: 'EVerest EV API' } }
  },
  EvManager: {
    config: {
      ac_nominal_voltage: {
        description: 'Nominal AC voltage between phase and neutral in Volt'
      },
      auto_enable: {
        description: 'Enable this simulation directly at start. Set to true for pure SIL configs, set to false for HIL.'
      },
      auto_exec: {
        description: 'Enable automatic execution of simulation commands at startup from auto_exec_commands config option.'
      },
      auto_exec_commands: {
        description: 'Simulation commands, e.g. sleep 1;iec_wait_pwr_ready;sleep 1;draw_power_regulated 16,3;sleep 30;unplug'
      },
      auto_exec_infinite: {
        description: 'If enabled the simulation commands executes infinitely.'
      },
      connector_id: {
        description: 'Connector id of the evse manager to which this simulator is connected to'
      },
      dc_discharge_max_current_limit: { description: 'Maximum discharge current allowed by the EV' },
      dc_discharge_max_power_limit: { description: 'Maximum discharge power allowed by the EV' },
      dc_discharge_target_current: { description: 'Discharge target current requested by the EV' },
      dc_discharge_v2g_minimal_soc: {
        description: 'Discharge minimal soc at which the evse should shutdown'
      },
      dc_energy_capacity: { description: 'Energy capacity of the EV' },
      dc_max_current_limit: { description: 'Maximum current allowed by the EV' },
      dc_max_power_limit: { description: 'Maximum power allowed by the EV' },
      dc_max_voltage_limit: { description: 'Maximum voltage allowed by the EV' },
      dc_target_current: { description: 'Target current requested by the EV' },
      dc_target_voltage: { description: 'Target voltage requested by the EV' },
      departure_time: {
        description: 'Departure time in seconds after the session starts'
      },
      e_amount: {
        description: 'Energy amount in Wh that should be charged during the session'
      },
      keep_cross_boot_plugin_state: {
        description: 'Keep plugin state across boot (use for simulation only).'
      },
      max_current: { description: 'Ac max current in Ampere' },
      soc: { description: 'SoC at start of a simulated charging process' },
      support_sae_j2847: { description: 'Supporting SAE J2847 ISO 2 bidi version' },
      three_phases: { description: 'Support three phase' }
    },
    description: 'This module implements a Car simulator that can execute charging sessions using the car_simulator interface.',
    provides: {
      ev_manager: {
        description: 'Implementation of the ev manager to provide additional information such as detailed EV info'
      },
      main: { description: 'This implements the car simulator' }
    }
  },
  EvSlac: {
    description: 'Implementation of EV SLAC data link negotiation according to ISO15118-3.',
    provides: {
      main: {
        config: {
          device: { description: 'Ethernet device used for PLC.' },
          set_key_timeout_ms: {
            description: 'Timeout for CM_SET_KEY.REQ. Default works for QCA7000/QCA7005/CG5317.'
          }
        },
        description: 'SLAC interface implementation.'
      }
    }
  },
  Evse15118D20: {
    config: {
      custom_protocol_namespace: { description: 'Providing a custom protocol namespace.' },
      device: {
        description: 'Ethernet device used for HLC. Any local interface that has an ipv6 link-local and a MAC addr will work'
      },
      enable_sdp_server: { description: 'Enable the built-in SDP server' },
      enable_ssl_logging: { description: 'Verbosely log the ssl/tls connection' },
      enable_tls_key_logging: {
        description: 'Enable/Disable the export of TLS session keys (pre-master-secret) during a TLS handshake. Note that this option is for testing and simulation purpose only'
      },
      enforce_tls_1_3: {
        description: 'Enforcing tls version 1.3. Only applies if tls_negotiation_strategy is ENFORCE_TLS.'
      },
      logging_path: {
        description: 'Path to logging directory (will be created if non existent)'
      },
      supported_dynamic_mode: { description: 'The EVSE should support dynamic mode' },
      supported_mobility_needs_mode_provided_by_secc: {
        description: 'The EVSE should support the mobility needs mode provided by the SECC. Mobility needs mode provided by the EVCC is always provided.'
      },
      supported_scheduled_mode: { description: 'The EVSE should support scheduled mode' },
      tls_key_logging_path: { description: 'Output directory for the TLS key log file' },
      tls_negotiation_strategy: {
        description: 'Select strategy on how to negotiate connection encryption'
      }
    },
    description: 'This module is a draft implementation of iso15118-20 for the EVSE side',
    provides: {
      charger: {
        description: 'This interface provides limited access to iso15118-20'
      },
      extensions: {
        description: 'This interface is used to share data between ISO15118 and OCPP modules to support the requirements of the OCPP protocol'
      }
    }
  },
  EvseManager: {
    config: {
      ac_enforce_hlc: {
        description: 'Combine with 5percent option to really enforce HLC even with EIM. It is not ISO15118-2/-3 compliant as it waits for matching even if EIM is available before SLAC reaches matched state. On cars that do not support ISO15118 on AC this will take a very long time to timeout and fall back to basic nominal PWM charging, but it will eventually.'
      },
      ac_hlc_enabled: {
        description: 'Enable or disable HLC (aka ISO15118) for AC mode'
      },
      ac_hlc_use_5percent: {
        description: 'Use 5 percent PWM signalling to try to enforce HLC on AC. Note that if EIM arrives before SLAC matching, we will fall back to nominal PWM charging. So most cars will never use HLC in this mode, especially on a free service where EIM is always available, but that is what ISO15118-2/-3 requires to be compliant - it wants to use HLC only for PnC and not for EIM.'
      },
      ac_nominal_voltage: {
        description: 'Nominal AC voltage between phase and neutral in Volt'
      },
      ac_with_soc: {
        description: 'Special mode that switches between AC and DC charging to get SoC percentage with AC charging'
      },
      autocharge_use_slac_instead_of_hlc: {
        description: 'Use slac ev mac address for autocharge instead of EVCCID from HLC'
      },
      cable_check_enable_imd_self_test: {
        description: 'Enable self testing of IMD in cable check. This is required for IEC 61851-23 (2023) compliance.'
      },
      cable_check_wait_below_60V_before_finish: {
        description: 'Switch off power supply and wait until output voltage drops below 60V before cable check is finished. Note: There are different versions of IEC 61851-23:2023 in the wild with the same version number but slightly different content. The IEC was correcting mistakes _after_ releasing the document initially without tagging a new version number. Some early versions require to wait for the output voltage to drop below 60V in CC.4.1.2 (last sentence). Later versions do not have that requirement. The later versions are correct and should be used according to IEC. Both settings (true and false) are compliant with the correct version of IEC 61851-23:2023. Set to true when:\n' +
          '  - the power supply has no active discharge, and lowering the voltage with no load takes a very long time. In this case\n' +
          '    this option usually helps to ramp the voltage down quickly by switching it off. It will be switched on again in precharge.\n' +
          '    Also, some EVs switch their internal relay on at a too high voltage when the voltage is ramped down directly from cablecheck voltage to precharge voltage,\n' +
          '    so true is the recommended default.\n' +
          'Set to false when:\n' +
          '  - the power supply has active discharge and can ramp down quickly without a switch off (by just setting a lower target voltage).\n' +
          '    This may save a few seconds as it avoids unnecessary voltage down and up ramping.'
      },
      cable_check_wait_number_of_imd_measurements: {
        description: 'Amount of isolation measurement samples to collect before the value can be trusted. This does not average, it will evaluate the last measurement. Some IMDs (e.g. from Bender) need to measure for 10s to really get a trustable result. In this case, at 1 Hz sample rate, specify 10 samples here.'
      },
      central_contract_validation_allowed: {
        description: 'Used for ISO15118 plug and charge: If false, contract shall not be present in PaymentOptionList. If true, contract may be present in PaymentOptionList if TLS is used.'
      },
      charge_mode: { description: 'Select charging mode' },
      connector_id: { description: 'Connector id of this evse manager' },
      connector_type: {
        description: 'The connector type of this evse manager (/evse_manager#/ConnectorTypeEnum)'
      },
      contract_certificate_installation_enabled: {
        description: 'Used for ISO15118 plug and charge: Indicates if the charger supports contract CertificateInstall and CertificateUpdate'
      },
      dbg_hlc_auth_after_tstep: {
        description: 'Special mode: send HLC auth ok only after t_step_XX is finished (true) or directly when available (false)'
      },
      dc_isolation_voltage_V: {
        description: 'Override DC voltage used to test isolation in CableCheck. Default is 0, which means the voltage will be determined according to IEC 61851-23 (2023) CC.4.1.2'
      },
      disable_authentication: {
        description: 'Do not wait for authorization from Auth module, offer a free service. Start charging immediately after plug in. Do not use with Auth manager or OCPP, this option is only to allow charging with a standalone EvseManager that is not connected to an Auth manager. Use DummyTokenProvider/Validator when testing with Auth module and/or OCPP.'
      },
      enable_autocharge: {
        description: 'Enables Autocharge (i.e. Mac address for authorization). Disabled by default as PnC should be used instead.'
      },
      ev_receipt_required: { description: 'Unsupported: request receipt from EV with HLC' },
      evse_id: { description: 'EVSE ID' },
      evse_id_din: { description: 'EVSE ID DIN after DIN SPEC 91286' },
      external_ready_to_start_charging: {
        description: 'Enable the external ready to start charging signal that delays charging ready until it has been received'
      },
      fail_on_powermeter_errors: {
        description: 'Set the EVSE Manager to an inoperative state if the powermeter requirement is configured and has reported errors'
      },
      hack_allow_bpt_with_iso2: {
        description: 'Hack. Allow bidirectional power transfer with DIN spec and ISO-2. Currents communicated on HLC will always be positive but power supply may actually discharge the car.'
      },
      hack_fix_hlc_integer_current_requests: {
        description: 'Some cars request only integer ampere values during DC charging. For low power DC charging that means that they charge a few hundred watts slower then needed. If enabled, this will charge at full power if the difference between EV requested current (integer) and HLC current limit is less then 1.0'
      },
      hack_pause_imd_during_precharge: {
        description: 'Disable IMD at the end of CableCheck and re-enable when current is flowing in CurrentDemand. Some DCDC power supplies do not start current flow when insulation measurement is active. Set to true to enable dirty workaround for some IMD hardware.'
      },
      hack_present_current_offset: {
        description: 'Adds an offset [A] to the present current reported to the car on HLC. Set to 0 unless you really know what you are doing.'
      },
      hack_simplified_mode_limit_10A: {
        description: 'Limit PWM to 10A if EV uses simplified charging mode. Set to false to be compliant with IEC61851-1:2019 section A.2.3. It is the responsibility of the EV to limit to 10A according to the norm. Enable this option to deviate from the norm and limit from the EVSE side.'
      },
      hack_skoda_enyaq: {
        description: 'Skoda Enyaq requests DC charging voltages below its battery level or even below 0 initially. Set to true to enable dirty workaround.'
      },
      hack_sleep_in_cable_check: {
        description: 'Hack: Sleep for n seconds at the end of cable check.'
      },
      hack_sleep_in_cable_check_volkswagen: {
        description: 'Hack: Additional sleep for Volkswagen cars for n seconds at the end of cable check'
      },
      has_ventilation: { description: 'Allow ventilated charging or not' },
      initial_meter_value_timeout_ms: {
        description: 'This timeout in ms defines for how long the EvseManager waits for an initial meter value from a powermeter before it becomes ready to start charging. If configured to 0, the EvseManager will not wait for an initial meter value before it becomes ready to start charging.'
      },
      inoperative_error_use_vendor_id: {
        description: 'When raising evse_manager/Inoperative use the vendor ID from the original cause'
      },
      lock_connector_in_state_b: {
        description: 'Indicates if the connector lock should be locked in state B. If set to false, connector will remain unlocked in CP state B and this violates IEC61851-1:2019 D.6.5 Table D.9 line 4 and should not be used in public environments!'
      },
      logfile_suffix: {
        description: 'Use the string given for the log folder name. Special string session_uuid will be replaced with session uuid.'
      },
      max_current_export_A: {
        description: 'User configurable current limit for this EVSE in Ampere'
      },
      max_current_import_A: {
        description: 'User configurable current limit for this EVSE in Ampere'
      },
      payment_enable_contract: {
        description: 'Set to true to enable contract (aka plug and charge) authorization'
      },
      payment_enable_eim: {
        description: 'Set to true to enable EIM (e.g. RFID card or mobile app) authorization'
      },
      raise_mrec9: {
        description: 'Allows to configure if an MREC9 authorization timeout error shall be raised by this module in case an authorization timeout occurs. It is recommended to disable it if OCPP1.6 is used.'
      },
      request_zero_power_in_idle: {
        description: '"true: In Idle mode (no car connected), request 0A from energy management. In installations with many charging stations this should be set" "to allow the power to be distributed to the chargers that are connected to a car." "false: Request the normal current even if no car is connected. This speeds up the start of charging on AC BASIC charging as" "EvseManager does not need to wait for energy from the energy manager after plug in."'
      },
      sae_j2847_2_bpt_enabled: { description: 'Enable SAE J2847 2 V2G or V2H mode' },
      sae_j2847_2_bpt_mode: { description: 'SAE J2847 2 BPT mode' },
      session_id_type: {
        description: 'Type to use for generation of session ids. UUID: 36 characters UUIDs UUID_BASE64: 22 characters base64 encoded uuids SHORT_BASE64: 16 characters base64 encoded ids'
      },
      session_logging: { description: 'Enable/Disable session log file output' },
      session_logging_path: { description: 'Output directory for session log files' },
      session_logging_xml: { description: 'Log full XML messages for HLC' },
      sleep_before_enabling_pwm_hlc_mode_ms: {
        description: 'Sleep before the PWM signal is updated in HLC mode. Teslas are really fast with sending the first slac packet after enabling PWM, so the sleep allows SLAC to be ready for it. Some EV testers have issues with a value >= 1000ms, although ISO15118 or IEC61851 does not specify a timeout.'
      },
      soft_over_current_measurement_noise_A: {
        description: 'Set current measurement noise. Added to limit as an offset to avoid false triggers.'
      },
      soft_over_current_timeout_ms: {
        description: 'Allow for over current to be present for N ms in soft over current checking during AC charging.'
      },
      soft_over_current_tolerance_percent: {
        description: 'Allow for N percent over current in soft over current checking during AC charging.'
      },
      state_F_after_fault_ms: {
        description: 'Set state F after any fault that stops charging for the specified time in ms while in Charging mode (CX->F(300ms)->C1/B1). When a fault occurs in state B2, no state F is added (B2->B1 on fault). Some (especially older hybrid vehicles) may go into a permanent fault mode once they detect state F, in this case EVerest cannot recover the charging session if the fault is cleared. In this case you can set this parameter to 0, which will avoid to use state F in case of a fault and only disables PWM (C2->C1) while switching off power. This will violate IEC 61851-1:2017 however. The default is 300ms as the minimum suggested by IEC 61851-1:2017 Table A.5 (description) to be compliant. This setting is only active in BASIC charging mode.'
      },
      switch_3ph1ph_cp_state: {
        description: 'CP state to use for switching. WARNING: Some EVs may be permanently destroyed when switching from 1ph to 3ph. It is the responsibiltiy of the evse_board_support implementation to ensure the EV is capable of performing the switch. If it is not, the capabilities must set the supports_changing_phases_during_charging to false. Phase switching is only possible in basic charging mode.'
      },
      switch_3ph1ph_delay_s: {
        description: 'Wait for n seconds when switching between 3ph/1ph mode.'
      },
      uk_smartcharging_random_delay_at_any_change: {
        description: '"True: use random delays on any current change during charging. False: Only use if current is reduced to zero or increased from zero."'
      },
      uk_smartcharging_random_delay_enable: {
        description: '"true: enable random_delays on start up, false: disable random delays on startup." "They can also be enabled/disabled during runtime on the random_delay implementation."'
      },
      uk_smartcharging_random_delay_max_duration: {
        description: '"Start up value for the maximum duration of a random delay." "Can be modified during runtime on the random_delay implementation."'
      }
    },
    description: 'EVSE Manager. Grid side power meter: Will be used for energy management. Will also be used for billing if no car side power meter connected. Car side powermeter: Will be used for billing if present.',
    provides: {
      energy_grid: {
        description: 'This is the tree leaf interface to build the energy supply tree'
      },
      evse: { description: 'This is the main evsemanager interface' },
      random_delay: {
        description: 'Provides control over UK smart charging regulation random delay feature'
      },
      token_provider: {
        description: 'Provides authtokens for autocharge or plug and charge'
      }
    }
  },
  EvseSecurity: {
    config: {
      csms_ca_bundle: {
        description: 'Path to csms_ca_bundle file. If relative will be prefixed with everest prefix + etc/everest/certs. Otherwise absolute file path is used.'
      },
      csms_leaf_cert_directory: {
        description: 'Directory where CSMS leaf certificates are stored. If relative will be prefixed with everest prefix + etc/everest/certs. Otherwise absolute file path is used.'
      },
      csms_leaf_key_directory: {
        description: 'Directory where CSMS private keys are stored. If relative will be prefixed with everest prefix + etc/everest/certs. Otherwise absolute file path is used.'
      },
      mf_ca_bundle: {
        description: 'Path to mf_ca_bundle file. If relative will be prefixed with everest prefix + etc/everest/certs. Otherwise absolute file path is used.'
      },
      mo_ca_bundle: {
        description: 'Path to mo_ca_bundle file. If relative will be prefixed with everest prefix + etc/everest/certs. Otherwise absolute file path is used.'
      },
      private_key_password: { description: 'Password for encrypted private keys.' },
      secc_leaf_cert_directory: {
        description: 'Directory where SECC leaf certificates are stored. If relative will be prefixed with everest prefix + etc/everest/certs. Otherwise absolute file path is used.'
      },
      secc_leaf_key_directory: {
        description: 'Directory where SECC private keys are stored. If relative will be prefixed with everest prefix + etc/everest/certs. Otherwise absolute file path is used.'
      },
      v2g_ca_bundle: {
        description: 'Path to v2g_ca_bundle file. If relative will be prefixed with everest prefix + etc/everest/certs. Otherwise absolute file path is used.'
      }
    },
    description: 'This module implements the evse_security interface. It uses the filesystem to store certificates and keys',
    provides: {
      main: { description: 'Implementation of the evse_security interface' }
    }
  },
  EvseSlac: {
    description: 'Implementation of SLAC data link negotiation according to ISO15118-3.',
    provides: {
      main: {
        config: {
          ac_mode_five_percent: {
            description: 'Use AC 5% mode according to ISO15118-3. This restarts SLAC sessions if they fail according to the standard. The standard only allows the retries for AC, not for DC. However, it is strongly recommended to always set this option to true, also for DC, otherwise some EVs in the field will fail to do SLAC frequently.'
          },
          chip_reset_delay_ms: { description: 'Delay between SET_KEY.CNF and RS_DEV.REQ' },
          chip_reset_timeout_ms: {
            description: 'Timeout for RS_DEV.REQ (waiting for RS_DEV.CNF)'
          },
          debug_simulate_failed_matching: {
            description: 'Only for debugging. Simulate failed matching by sending a wrong NMK to the EV.'
          },
          device: { description: 'Ethernet device used for PLC.' },
          do_chip_reset: {
            description: 'Perform a chip reset after setting NMK using the RS_DEV.REQ Vendor MME Extension (Only works on Qualcomm chips)'
          },
          link_status_detection: {
            description: 'After matching.cnf, wait for link to come up before sending out d_link_ready=connected using LINK_STATUS Vendor MME Extension (Works on Qualcomm and Lumissil chips)'
          },
          link_status_retry_ms: {
            description: 'Delay between retries of LINK_STATUS requests after matching request'
          },
          link_status_timeout_ms: {
            description: 'Timeout for Link to come up after matching request'
          },
          number_of_sounds: { description: 'SLAC number of sounds.' },
          publish_mac_on_first_parm_req: {
            description: 'Publish the EV MAC address when the first CM_SLAC_PARM.REQ. This should not be used as it is quite error prone: The MAC address might be from another car via cross talk. It is better to wait for the matching to be done.'
          },
          publish_mac_on_match_cnf: {
            description: 'Publish the EV MAC address on the token_provider interface when matching is confirmed (CM_SLAC_MATCH.CNF). This can be used for autocharge as an alternative to the EVCCID derived from HLC and published by EvseManager.  This can be used for AC autocharge on cars that do not support actual HLC on AC.'
          },
          reset_instead_of_fail: {
            description: 'Go to reset state instead of failed state. This is against the ISO15118-3. But some cars directly send a CM_SLAC_PARAM.req message when the SLAC process aborts. To react to this message and restart the SLAC process, the EVSE go to the reset state here.'
          },
          set_key_timeout_ms: {
            description: 'Timeout for CM_SET_KEY.REQ. Default works for QCA7000/QCA7005/CG5317.'
          },
          sounding_attenuation_adjustment: {
            description: 'Offset in dB that should be added to the calculated sounding attenuation'
          }
        },
        description: 'SLAC interface implementation.'
      }
    }
  },
  EvseV2G: {
    config: {
      auth_timeout_eim: {
        description: 'Defines how many seconds the EVSE should wait for authorization in EIM case, before the charging session is aborted. Write 0 if the EVSE should wait indefinitely for EIM authorization.'
      },
      auth_timeout_pnc: {
        description: 'Defines how many seconds the EVSE should wait for authorization in PnC case, before the charging session is aborted. Write 0 if the EVSE should wait indefinitely for PnC authorization.'
      },
      device: {
        description: 'Ethernet device used for HLC. Any local interface that has an ipv6 link-local and a MAC addr will work'
      },
      enable_sdp_server: { description: 'Enable the built-in SDP server' },
      supported_DIN70121: { description: 'The EVSE supports the DIN SPEC' },
      supported_ISO15118_2: { description: 'The EVSE supports ISO15118-2' },
      terminate_connection_on_failed_response: {
        description: 'Controls how to handle a failed response code of the EVSE. If true the V2G connection is terminated immediately on a failed response code, otherwise the EV is responsible for closing of the V2G communication session with SessionStop.'
      },
      tls_key_logging: {
        description: 'Enable/Disable the export of TLS session keys (pre-master-secret) during a TLS handshake. This log file can be used to decrypt TLS sessions. Note that this option is for testing and simulation purpose only'
      },
      tls_key_logging_path: { description: 'Output directory for the TLS key log file' },
      tls_security: { description: 'Controls how to handle encrypted communication' },
      tls_timeout: {
        description: 'Set the TLS timeout in ms when establishing a tls connection '
      },
      verify_contract_cert_chain: {
        description: 'Specifies if the EVSE should verify the contract certificate chain locally.'
      }
    },
    description: 'This module includes a DIN70121 and ISO15118-2 implementation provided by chargebyte GmbH',
    provides: {
      charger: {
        description: 'This module implements the ISO15118-2 implementation of an AC or DC charger'
      },
      extensions: {
        description: 'This interface is used to share data between ISO15118 and OCPP modules to support the requirements of the OCPP protocol'
      }
    }
  },
  Example: {
    description: 'Simple example module written in C++',
    provides: {
      example: {
        config: {
          current: {
            description: 'The current the physical connector can supply'
          },
          enum_test: { description: 'A config value that tests the enum type' },
          enum_test2: {
            description: 'Another config value that tests the enum type'
          }
        },
        description: 'This implements an example interface that uses multiple framework features'
      },
      store: {
        description: 'This implements the kvs interface, mostly for testing multiple interfaces in one manifest'
      }
    }
  },
  ExampleErrorGlobalSubscriber: {
    description: 'Simple example module written in C++ to demonstrate error framework on global subscriber side',
    provides: {
      example_global_subscriber: { description: 'This implements the example interface' }
    }
  },
  ExampleErrorRaiser: {
    description: 'Simple example module written in C++ to demonstrate error handling on raiser side',
    provides: {
      example_raiser: { description: 'This implements an example interface' }
    }
  },
  ExampleErrorSubscriber: {
    description: 'Simple example module written in C++ to demonstrate error framework on subscriber side',
    provides: {
      example_subscriber: { description: 'This implements the example interface' }
    }
  },
  ExampleUser: {
    description: 'Simple example module written in C++ and using the other example module',
    provides: {
      example_user: { description: 'This implements the example_user interface' }
    }
  },
  GenericPowermeter: {
    description: 'Powermeter driver for various powermeter hardware',
    provides: {
      main: {
        config: {
          modbus_base_address: { description: 'The base address for register access' },
          model: {
            description: 'Selector for the powermeter configuration file to be used'
          },
          powermeter_device_id: { description: "The powermeter's address on the serial bus" }
        },
        description: 'Implementation of the driver functionality'
      }
    }
  },
  IMDSimulator: {
    description: 'SIL Implementation of an Isolation Monitoring Device (IMD) for DC charging',
    provides: {
      main: {
        config: {
          interval: {
            description: 'Measurement update interval in milliseconds'
          },
          resistance_F_Ohm: {
            description: 'Resistance to return for the simulated measurements in Ohm'
          },
          selftest_success: {
            description: 'Set to true for successful self testing, false for fault'
          }
        },
        description: 'Main interface for the IMD'
      }
    }
  },
  IsabellenhuetteIemDcr: {
    config: {
      CI: {
        description: 'Charge point identification (part of the signed OCMF data tuple).'
      },
      CT: {
        description: 'Charge point identification type (part of the signed OCMF data tuple).'
      },
      TT_initial: {
        description: 'Initial tariff text. (Its current value is part of signed OCMF data tuple).'
      },
      US: {
        description: 'Controls whether UserID is shown on display or not.'
      },
      datetime_resync_interval: { description: 'Interval for cyclic time resync in hours.' },
      ip_address: { description: 'IPv4 Address of the power meter API.' },
      port_http: { description: 'HTTP-Port of the power meter API.' },
      resilience_initial_connection_retry_delay: {
        description: 'For the controller resilience, the delay in milliseconds before a retry attempt at module initialization.'
      },
      resilience_transaction_request_retries: {
        description: 'For the controller resilience, the number of retries to connect to the powermeter at a transaction start or stop request.'
      },
      resilience_transaction_request_retry_delay: {
        description: 'For the controller resilience, the delay in milliseconds before a retry attempt  at a transaction start or stop request.'
      },
      timezone: {
        description: 'The timezone offset information according to ISO8601 (version without colon) for normal time.'
      },
      timezone_handle_DST: {
        description: 'Controls whether daylight saving time (DST) is handled or normal time is used continuously.'
      }
    },
    description: 'Module implements Isabellenhuette IEM-DCR power meter driver, connecting via HTTP/REST',
    provides: { main: { description: 'This is the main unit of the module' } }
  },
  IsoMux: {
    config: {
      device: {
        description: 'Ethernet device used for HLC. Any local interface that has an ipv6 link-local and a MAC addr will work'
      },
      proxy_port_iso2: { description: 'TCP port of the local ISO2 instance' },
      proxy_port_iso20: { description: 'TCP port of the local ISO20 instance' },
      tls_key_logging: {
        description: 'Enable/Disable the export of TLS session keys (pre-master-secret) during a TLS handshake. This log file can be used to decrypt TLS sessions. Note that this option is for testing and simulation purpose only'
      },
      tls_security: { description: 'Controls how to handle encrypted communication' },
      tls_timeout: {
        description: 'Set the TLS timeout in ms when establishing a tls connection '
      }
    },
    description: 'This module is a multiplexer to support switching over between different ISO module implementations',
    provides: {
      charger: {
        description: 'This module implements the ISO15118-2 implementation of an AC or DC charger'
      },
      extensions: {
        description: 'This interface is used to share data between ISO15118 and OCPP modules to support the requirements of the OCPP protocol'
      }
    }
  },
  LemDCBM400600: {
    config: {
      SC: { description: 'SC (OCMF/transaction fields)' },
      UD: { description: 'UD (OCMF/transaction fields)' },
      UV: { description: 'User SW Version (OCMF/transaction fields)' },
      cable_id: {
        description: 'The cable loss compensation level to use. This allows compensating the measurements of the DCBM with a resistance.'
      },
      command_timeout_ms: {
        description: 'The timeout in milliseconds for a HTTP command to the LEM power meter.'
      },
      ip_address: { description: 'IP Address of the power meter API.' },
      meter_dst: {
        description: 'The Daylight Saving Time (DST) settings (ignored if NTP is set)'
      },
      meter_timezone: {
        description: 'The timezone offset (ignored if NTP servers are set) - it can go from -11 to +14 for hours and 00, 15, 30, 45 for minutes'
      },
      meter_tls_certificate: {
        description: "The DCBM's HTTPS certificate, in PEM format. If provided, HTTPS will be used. If left empty, regular HTTP will be used. Note that this does not affect the default port - specify a port explicitly if you wish to use a port other than 80."
      },
      ntp_server_1_ip_addr: {
        description: "The IPv4 address (in 4-octet form W.X.Y.Z) of the first NTP server to use for time sync. If this is left empty, NTP will not be configured on the DCBM - its time will be synced with EVerest's system time instead."
      },
      ntp_server_1_port: { description: 'The port (1-65535) of the first NTP server.' },
      ntp_server_2_ip_addr: {
        description: 'The IPv4 address (in 4-octet form W.X.Y.Z) of the second NTP server to use for time sync. This is ignored if ntp_server_1_ip_addr is empty.'
      },
      ntp_server_2_port: { description: 'The port (1-65535) fof the second NTP server.' },
      port: { description: 'Port of the power meter API.' },
      resilience_initial_connection_retries: {
        description: 'For the controller resilience, the number of retries to connect to the powermeter at module initialization.'
      },
      resilience_initial_connection_retry_delay: {
        description: 'For the controller resilience, the delay in milliseconds before a retry attempt at module initialization..'
      },
      resilience_transaction_request_retries: {
        description: 'For the controller resilience, the number of retries to connect to the powermeter at a transaction start or stop request.'
      },
      resilience_transaction_request_retry_delay: {
        description: 'For the controller resilience, the delay in milliseconds before a retry attempt  at a transaction start or stop request.'
      },
      tariff_id: {
        description: 'Used for a unique transaction tariff designation'
      }
    },
    description: 'Module implementing the LEM DCBM 400/600 power meter driver adapter via HTTP.',
    provides: { main: { description: 'This is the main unit of the module' } }
  },
  MicroMegaWattBSP: {
    config: {
      baud_rate: {
        description: 'Serial baud rate to use when communicating with uMWC hardware'
      },
      connector_id: { description: 'Connector id' },
      dc_max_voltage: { description: 'Maximum voltage to support' },
      reset_gpio: { description: 'GPIO line to use to reset uMWC' },
      reset_gpio_chip: {
        description: 'Reset GPIO chip to use to HW reset uMWC. If set to empty string, it is disabled.'
      },
      serial_port: { description: 'Serial port the uMWC hardware is connected to' }
    },
    description: 'Driver module for the Micro Mega Watt DC Charging Tester v1.0',
    provides: {
      board_support: {
        description: 'provides the board support Interface to low level control control pilot, relais, rcd, motor lock'
      },
      dc_supply: { description: 'Interface for the DC/DC output supply' },
      powermeter: { description: 'Interface for the powermeter' }
    }
  },
  OCPP: {
    config: {
      ChargePointConfigPath: {
        description: 'Path to the ocpp configuration file. Libocpp defines a JSON schema for this file. Please refer to the documentation of libocpp for more information about the configuration options.'
      },
      DatabasePath: {
        description: 'Path to the persistent SQLite database directory. Please refer to the libocpp documentation for more information about the database and its structure.'
      },
      DelayOcppStart: {
        description: 'Small delay in time (milliseconds) to start the ocpp chargepoint to allow time for the rest of everest to update the connector status. This is only used to prevent issues from passing by availlable before preparing on a restart.'
      },
      EnableExternalWebsocketControl: {
        description: 'If true websocket can be disconnected and connected externally. This parameter is for debug and testing purposes.'
      },
      MessageLogPath: {
        description: 'Path to directory where logs of all OCPP messages are written to'
      },
      MessageQueueResumeDelay: {
        description: 'Time (seconds) to delay resuming the message queue after reconnecting. This parameter was introduced because some OCTT test cases require that the first message after a reconnect is sent by the CSMS.'
      },
      PublishChargingScheduleDurationS: {
        description: 'Duration in seconds that defines the duration of the requested charging schedules starting from now'
      },
      PublishChargingScheduleIntervalS: {
        description: 'Interval in seconds in which charging schedules received from OCPP are be published over MQTT and signalled to connected modules. If the value is set to 0, charging schedules are only published when changed by CSMS'
      },
      RequestCompositeScheduleUnit: {
        description: 'Unit in which composite schedules are requested and shared within EVerest. It is recommended to use Amps for AC and Watts for DC charging stations. Allowed values:\n' +
          "  - 'A' for Amps\n" +
          "  - 'W' for Watts"
      },
      ResetStopDelay: {
        description: "Time (seconds) to delay the stopping of the charge point so that the CSMS has enough time to respond to the charge point's last messages before resetting."
      },
      UserConfigPath: {
        description: 'Path to the file of the OCPP user config. The user config is used as an overlay for the original config defined by the ChargePointConfigPath. Any changes to configuration keys turned out internally or by the CSMS will be written to the user config file.'
      }
    },
    description: 'A OCPP charge point / charging station module, currently targeting OCPP-J 1.6',
    provides: {
      auth_provider: { description: 'Provides auth tokens from OCPP' },
      auth_validator: { description: 'Validates the provided auth token with OCPP' },
      data_transfer: { description: 'OCPP data transfer towards the CSMS' },
      main: { description: 'This is a OCPP 1.6 charge point' },
      ocpp_generic: { description: 'Generic OCPP interface.' },
      session_cost: { description: 'Send session cost' }
    }
  },
  OCPP201: {
    config: {
      CompositeScheduleIntervalS: {
        description: 'Interval in seconds in which composite schedules are received from libocpp are be published over MQTT and signalled to connected modules. If the value is set to 0, composite schedules are only published when changed by CSMS'
      },
      CoreDatabasePath: {
        description: 'Path to the persistent SQLite database directory. Please refer to the libocpp documentation for more information about the database and its structure.'
      },
      DelayOcppStart: {
        description: 'Small delay in time (milliseconds) to start the ocpp chargepoint to allow time for the rest of everest to update the connector status. This is only used to prevent issues from passing by availlable before preparing on a restart.'
      },
      DeviceModelConfigPath: {
        description: 'Path to the device model component config directory. Libocpp defines a certain schema for these files. Please refer to the documentation of libocpp for more information about the configuration options.'
      },
      DeviceModelDatabaseMigrationPath: {
        description: 'Path to the migration files for both device models'
      },
      DeviceModelDatabasePath: {
        description: 'Path to the SQLite database for the device model'
      },
      EnableExternalWebsocketControl: {
        description: 'If true websocket can be disconnected and connected externally. This parameter is for debug and testing purposes.'
      },
      EverestDeviceModelDatabasePath: {
        description: 'Path to the SQLite databse for the EVerest device model. This database stores components and variables like EVSE and Connector that are closely related to everest-core and therefore not owned and managed by libocpp.'
      },
      MessageLogPath: {
        description: 'Path to directory where logs of all OCPP messages are written to'
      },
      MessageQueueResumeDelay: {
        description: 'Time (seconds) to delay resuming the message queue after reconnecting. This parameter was introduced because some OCTT test cases require that the first message after a reconnect is sent by the CSMS.'
      },
      RequestCompositeScheduleDurationS: {
        description: 'Time (seconds) for which composite schedules are requested. Schedules are requested from now until now + RequestCompositeScheduleDurationS'
      },
      RequestCompositeScheduleUnit: {
        description: 'Unit in which composite schedules are requested and shared within EVerest. It is recommended to use Amps for AC and Watts for DC charging stations. Allowed values:\n' +
          "  - 'A' for Amps\n" +
          "  . 'W' for Watts"
      }
    },
    description: 'A OCPP charge point / charging station module for OCPP 2.0.1',
    provides: {
      auth_provider: { description: 'Provides authorization requests by CSMS' },
      auth_validator: {
        description: 'Validates the provided token using CSMS, AuthorizationList or AuthorizationCache'
      },
      data_transfer: { description: 'OCPP data transfer towards the CSMS' },
      ocpp_generic: { description: 'Generic OCPP interface.' },
      session_cost: { description: 'Send session cost' }
    }
  },
  OCPPExtensionExample: {
    config: {
      keys_to_monitor: {
        description: 'Commad seperated list of keys that should be monitored'
      }
    },
    description: 'This is an example module that shows how the OCPP module of EVerest could be extended using the DataTransfer functionality and custom configuration keys',
    provides: { data_transfer: { description: 'OCPP data transfer' } }
  },
  OVMSimulator: {
    description: 'SIL Implementation of an Over voltage monitor for DC charging',
    provides: {
      main: {
        config: {
          simulate_error: {
            description: 'Set to true to throw an over voltage error during charging'
          },
          simulate_error_delay: {
            description: 'Simulate over voltage error N seconds after start of charging'
          }
        },
        description: 'Main interface for the OVM'
      }
    }
  },
  PN532TokenProvider: {
    description: 'PN532 RFID/NFC token provider returning the token as soon as the tag can be read by the reader',
    provides: {
      main: {
        config: {
          baud_rate: {
            description: 'Serial baud rate to use when communicating with PN532 hardware'
          },
          debug: { description: 'Show debug output on command line.' },
          read_timeout: { description: 'Time between subsequent card reads (in s)' },
          serial_port: {
            description: 'Serial port the PN532 hardware is connected to'
          }
        },
        description: 'Implementation of PN532 RFID/NFC token provider'
      }
    }
  },
  PN7160TokenProvider: {
    description: 'PN7160 RFID/NFC token provider returning the token as soon as the tag can be read by the reader',
    provides: {
      main: {
        config: {
          debug: { description: 'Show debug output on command line.' },
          disable_nfc_rfid: { description: 'Disable NFC RFID reader' },
          token_debounce_interval_ms: {
            description: 'Minimal wait time in ms until next token will be published (debounce interval).'
          }
        },
        description: 'Implementation of PN7160 RFID/NFC token provider'
      }
    }
  },
  PacketSniffer: {
    config: {
      device: {
        description: 'The ethernet device on which the messages are to be captured'
      },
      session_logging_path: {
        description: 'Output directory for session capture dump files'
      }
    },
    description: 'Using the "PacketSniffer" EVerest module it is possible to capture and store the different packets on the PLC interface.',
    provides: { main: { description: 'EVerest API' } }
  },
  PersistentStore: {
    config: {
      sqlite_db_file_path: { description: 'Path to the SQLite db file.' }
    },
    description: 'Simple implementation of a SQLite backed persistent key-value store',
    provides: {
      main: { description: 'This implements a persistent key-value store' }
    }
  },
  PhyVersoBSP: {
    config: {
      baud_rate: {
        description: 'Serial baud rate to use when communicating with the hardware'
      },
      conn1_dc: { description: 'Set to true if it is for DC, false if it is AC' },
      conn1_gpio_stop_button_bank: {
        description: 'GPIO peripheral bank for connector 1 stop button'
      },
      conn1_gpio_stop_button_enabled: {
        description: 'Set to true to enable external charging stop button for connector 1 on a GPIO connected to the SOM'
      },
      conn1_gpio_stop_button_invert: { description: 'Set to true to invert pin logic' },
      conn1_gpio_stop_button_pin: {
        description: 'GPIO peripheral pin for connector 1 stop button'
      },
      conn1_has_socket: {
        description: 'Set to true if it has a socket, false if it has a permanently attached cable'
      },
      conn1_max_current_A_export: { description: 'Maximum export current in amps' },
      conn1_max_current_A_import: { description: 'Maximum import current in amps' },
      conn1_max_phase_count_export: { description: 'Maximum phase count for export' },
      conn1_max_phase_count_import: { description: 'Maximum phase count for import' },
      conn1_min_current_A_export: { description: 'Minimum export current in amps' },
      conn1_min_current_A_import: { description: 'Minimum import current in amps' },
      conn1_min_phase_count_export: { description: 'Minimum phase count for export' },
      conn1_min_phase_count_import: { description: 'Minimum phase count for import' },
      conn1_motor_lock_type: {
        description: 'Connector 1 motor lock type; 1 == Hella Style time-based lock, 2 == Valeo potentiometer feedback based'
      },
      conn2_dc: { description: 'Set to true if it is for DC, false if it is AC' },
      conn2_gpio_stop_button_bank: {
        description: 'GPIO peripheral bank for connector 2 stop button'
      },
      conn2_gpio_stop_button_enabled: {
        description: 'Set to true to enable external charging stop button for connector 2 on a GPIO connected to the SOM'
      },
      conn2_gpio_stop_button_invert: { description: 'Set to true to invert pin logic' },
      conn2_gpio_stop_button_pin: {
        description: 'GPIO peripheral pin for connector 2 stop button'
      },
      conn2_has_socket: {
        description: 'Set to true if it has a socket, false if it has a permanently attached cable'
      },
      conn2_max_current_A_export: { description: 'Maximum export current in amps' },
      conn2_max_current_A_import: { description: 'Maximum import current in amps' },
      conn2_max_phase_count_export: { description: 'Maximum phase count for export' },
      conn2_max_phase_count_import: { description: 'Maximum phase count for import' },
      conn2_min_current_A_export: { description: 'Minimum export current in amps' },
      conn2_min_current_A_import: { description: 'Minimum import current in amps' },
      conn2_min_phase_count_export: { description: 'Minimum phase count for export' },
      conn2_min_phase_count_import: { description: 'Minimum phase count for import' },
      conn2_motor_lock_type: {
        description: 'Connector 2 motor lock type; 1 == Hella Style time-based lock, 2 == Valeo potentiometer feedback based'
      },
      reset_gpio: {
        description: 'If set <0 it is disabled. If > 0, configured reset_gpio_bank and reset_gpio_pin configuration is used for hard reset of MCU'
      },
      reset_gpio_bank: {
        description: 'GPIO peripheral bank the nRST pin of the MCU is mapped to'
      },
      reset_gpio_pin: {
        description: 'GPIO peripheral pin the nRST pin of the MCU is mapped to'
      },
      serial_port: { description: 'Serial port the hardware is connected to' }
    },
    description: 'Driver module for Phytec PhyVerso EV Charging controller with Pionix MCU firmware',
    provides: {
      connector_1: {
        description: 'provides the board support interface to low level control the proximity and control pilots, relais and motor lock'
      },
      connector_2: {
        description: 'provides the board support interface to low level control the proximity and control pilots, relais and motor lock'
      },
      connector_lock_1: { description: 'Lock interface' },
      connector_lock_2: { description: 'Lock interface' },
      phyverso_mcu_temperature: { description: 'Temperatures from MCU' },
      rcd_1: { description: 'RCD interface of the onboard RCD' },
      rcd_2: { description: 'RCD interface of the onboard RCD' },
      system_specific_data_1: { description: 'Opaque data blobs coming from connector 1' },
      system_specific_data_2: { description: 'Opaque data blobs coming from connector 2' }
    }
  },
  PyEvJosev: {
    config: {
      device: {
        description: 'Ethernet device used for HLC. Any local interface that has an ipv6 link-local and a MAC addr will work.'
      },
      enable_tls_1_3: { description: 'The EVCC will enable TLS version 1.3' },
      enforce_tls: { description: 'The EVCC will enforce a TLS connection' },
      is_cert_install_needed: {
        description: 'If true, the contract certificate will be installed via the evse. And any existing contract certificate will also be overwritten.'
      },
      supported_DIN70121: { description: 'The EVSE supports the DIN SPEC' },
      supported_ISO15118_2: { description: 'The EVSE supports ISO15118-2' },
      supported_ISO15118_20_AC: { description: 'The EVSE supports ISO15118-20 AC' },
      supported_ISO15118_20_DC: { description: 'The EVSE supports ISO15118-20 DC' },
      tls_active: { description: 'If true, EVCC connects to SECC as TLS client' }
    },
    description: 'This module implements an DIN70121, ISO15118-2 and ISO15118-20 EV using the Josev project.',
    provides: {
      ev: {
        description: 'This module implements the ISO15118-2 implementation of an EV'
      }
    }
  },
  PyExampleErrorRaiser: {
    description: 'Simple example module written in Python to demonstrate error handling on raiser side',
    provides: {
      example_raiser: { description: 'This implements an example interface' }
    }
  },
  PyExampleErrorSubscriber: {
    description: 'Simple example module written in Python to demonstrate error framework on subscriber side',
    provides: {
      example_subscriber: { description: 'This implements the example interface' }
    }
  },
  SerialCommHub: {
    description: 'Hub to communicate with attached serial devices',
    provides: {
      main: {
        config: {
          baudrate: { description: 'Baudrate' },
          ignore_echo: {
            description: 'On some hardware every message that is sent is read back, this setting filters the sent message in the reply.'
          },
          initial_timeout_ms: { description: 'Timeout in ms for the first packet.' },
          max_packet_size: {
            description: 'Maximum size of a packet to read/write in bytes. Payload exceeding the size will be chunked. The APU size according to [wikipedia](https://en.wikipedia.org/wiki/Modbus) is 256 bytes, which is used as default here.'
          },
          parity: { description: 'Parity bit: 0: None, 1: Odd, 2: Even' },
          retries: {
            description: 'Count of retries in case of error in Modbus query.'
          },
          rtscts: { description: 'Use RTS/CTS hardware flow control' },
          rxtx_gpio_chip: {
            description: 'GPIO chip to use to switch between RX/TX. An empty string disables GPIO usage.'
          },
          rxtx_gpio_line: { description: 'GPIO line to use to switch between RX/TX' },
          rxtx_gpio_tx_high: {
            description: 'GPIO direction, false means low for TX, true means high for TX'
          },
          serial_port: { description: 'Serial port the hardware is connected to' },
          within_message_timeout_ms: { description: 'Timeout in ms for subsequent packets.' }
        },
        description: 'Implementation of serial communication hub'
      }
    }
  },
  Setup: {
    config: {
      ap_interface: { description: 'Wifi interface for AP mode' },
      ap_ipv4: { description: 'IPv4 address of the AP' },
      initialized_by_default: {
        description: 'Always report as if the charger was initialized'
      },
      localization: { description: 'Enable localization support' },
      online_check_host: {
        description: 'Hostname or IP to use to check for internet connectivity'
      },
      release_metadata_file: {
        description: 'Location of the release metadata file relative to the EVerest prefix'
      },
      setup_simulation: { description: 'Allow simulation setup' },
      setup_wifi: { description: 'Allow wifi setup' }
    },
    description: 'The EVerest Setup module for setting up a LAN or WIFI network connection. This module needs privileged access and should not run during normal operations',
    provides: { main: { description: 'EVerest Setup' } }
  },
  SlacSimulator: {
    description: 'SIL Implementation of SLAC data link negotiation according to ISO15118-3.',
    provides: {
      ev: { description: 'SLAC interface implementation for EV side' },
      evse: { description: 'SLAC interface implementation for EVSE side' }
    }
  },
  StaticISO15118VASProvider: {
    config: {
      service_file: { description: 'The path to the service yaml file' }
    },
    description: 'This module provides static ISO15118 value-added services (VAS) defined in a yaml file',
    provides: {
      iso15118_vas: { description: 'The custom VAS parsed from the yaml file' }
    }
  },
  Store: {
    description: 'Simple implementation of a memory-backed key-value store',
    provides: { main: { description: 'This implements a key-value store' } }
  },
  System: {
    config: {
      DefaultRetries: {
        description: 'Specifies how many times Charge Point tries to upload or download files on previous failure.'
      },
      DefaultRetryInterval: {
        description: 'Specifies in seconds after which time a retry of an upload or download on previous failure may be attempted.'
      },
      ResetDelay: {
        description: 'When receiving a reset request, then the actual execution can be delayed by this amount of time (given in seconds). This might be necessary, for example, when the reset request arrives via the network and the call acknowledgement should be given some time to travel the return path to the caller. Defaults to zero, which means that the reset is executed directly without delay.'
      }
    },
    description: 'This module implements system wide operations',
    provides: { main: { description: 'Implements the system interface' } }
  },
  TerminalCostAndPriceMessage: {
    description: 'Example cost and price message module',
    provides: { main: { description: 'EVerest API' } }
  },
  TerminalDisplayMessage: {
    description: 'Example display message module',
    provides: { display_message: { description: 'module to show a message' } }
  },
  TestErrorHandling: {
    description: 'Defines a module that uses error handling features on command',
    provides: {
      main: {
        description: 'This implements an interface that provides control over error handling features'
      }
    }
  },
  YetiDriver: {
    config: {
      baud_rate: {
        description: 'Serial baud rate to use when communicating with Yeti hardware'
      },
      caps_max_current_A: {
        description: 'Maximum current on AC side. For AC this is typically 16 or 32, but for HLC this can be less. -1 means use limit reported by HW.'
      },
      caps_min_current_A: {
        description: 'Minimal current on AC side. For AC this is typically 6, but for HLC this can be less. -1 means use limit reported by HW.'
      },
      reset_gpio: { description: 'GPIO line to use to reset Yeti' },
      reset_gpio_chip: {
        description: 'Reset GPIO chip to use to HW reset Yeti. If set to empty string, it is disabled.'
      },
      serial_port: { description: 'Serial port the Yeti hardware is connected to' }
    },
    description: 'Driver module for the YETI hardware v1.0',
    provides: {
      board_support: {
        description: 'provides the board support Interface to low level control control pilot, relais, motor lock'
      },
      connector_lock: { description: 'Interface for the motor lock' },
      powermeter: { description: 'provides the Yeti Internal Power Meter' },
      rcd: { description: 'RCD interface of the onboard RCD' }
    }
  },
  YetiEvDriver: {
    config: {
      baud_rate: {
        description: 'Serial baud rate to use when communicating with Yeti hardware'
      },
      reset_gpio: {
        description: 'Reset GPIO number to use to HW reset Yeti. If set <0 it is disabled.'
      },
      serial_port: { description: 'Serial port the Yeti hardware is connected to' }
    },
    description: 'Driver module for EV side for the YETI hardware',
    provides: {
      ev_board_support: {
        description: 'provides the board support Interface to low level control control pilot, relais, rcd'
      }
    }
  },
  YetiSimulator: {
    config: {
      connector_id: {
        description: 'Connector id of the evse manager to which this simulator is connected to'
      },
      reset_powermeter_on_session_start: {
        description: 'Reset absolute powermeter readings to zero when CP changes from state A to B'
      }
    },
    description: 'SIL simulator for YETI hardware v1.0',
    provides: {
      board_support: {
        description: 'provides the EVSE board support Interface to low level control pilot, relais, rcd, motor lock'
      },
      connector_lock: { description: 'Interface for the simulated Connector lock' },
      ev_board_support: {
        description: 'provides the EV board support Interface to low level control pilot, relais, rcd'
      },
      powermeter: { description: 'provides the Yeti Internal Power Meter' },
      rcd: { description: 'Interface for the simulated AC RCD' }
    }
  }
} as const;
