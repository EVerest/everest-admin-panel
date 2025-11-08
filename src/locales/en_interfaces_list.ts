// SPDX-License-Identifier: Apache-2.0
// Copyright 2020 - 2025 Pionix GmbH and Contributors to EVerest

// This file is generated, see README.md for more information.

/* eslint-disable prettier/prettier */
export default {
  ISO15118_charger: {
    cmds: {
      ac_contactor_closed: {
        arguments: {
          status: {
            description: 'Set to true when contactor is closed, false when contactor is open'
          }
        },
        description: 'This message is an async response to a previously published ac_close_contactor or ac_open_contactor.'
      },
      authorization_response: {
        arguments: {
          authorization_status: { description: 'Authorization status of the ID Token' },
          certificate_status: { description: 'Certificate status information' }
        },
        description: 'This message is an async response to a previously published require_auth_eim or require_auth_pnc. The SECC informs the EVCC whether the authorization is accecpted or not.'
      },
      cable_check_finished: {
        arguments: {
          status: { description: 'Set to true when cable check is okay' }
        },
        description: 'Cable check is finished, voltage is under 20V and insulation resistor on the cable is alright'
      },
      dlink_ready: {
        arguments: {
          value: {
            description: 'Set to true when link becomes ready, false when the link is terminated'
          }
        },
        description: 'Signals dlink_ready from SLAC layer according to ISO15118-3'
      },
      pause_charging: {
        arguments: {
          pause: {
            description: 'Set to true when to pause, set to false when to continue'
          }
        },
        description: 'Pause the charging process (only in ISO15118-20)'
      },
      receipt_is_required: {
        arguments: {
          receipt_required: {
            description: 'Set to true when receipt is required, set to false when not'
          }
        },
        description: 'This element is used by the SECC to indicate that the EVCC is required to send a MeteringReceiptReq message for the purpose of signing the meter info record.'
      },
      reset_error: { description: 'Reset all errors' },
      send_error: {
        arguments: { error: { description: 'The EVSE error enum' } },
        description: 'An error has happend. Send this error to inform the EV.'
      },
      session_setup: {
        arguments: {
          central_contract_validation_allowed: {
            description: 'Indicates if the vehicle contract may be forwarded to and validated by a CSMS in case  local validation was not successful'
          },
          payment_options: {
            description: 'Providing a list of payment options to the EVCC',
            items: {
              description: 'These are the payment options a SECC offers to the EVCC'
            }
          },
          supported_certificate_service: {
            description: 'The charger supports the certificate installation/update service and has a connection to an SA for this purpose'
          }
        },
        description: 'At each session start this info should be sent to the module.'
      },
      set_charging_parameters: {
        arguments: {
          physical_values: {
            description: 'Set up initial physical values for a AC or DC charging session'
          }
        },
        description: 'At startup, set the the charging parameters at least once. May be updated later on. If a charging session is currently active, some updated values may only be used for the next charging session.'
      },
      setup: {
        arguments: {
          debug_mode: { description: 'Enable/Disable debug mode' },
          evse_id: {
            description: 'Set an ID that uniquely identifies the EVSE and the power outlet the vehicle is connected to '
          },
          sae_j2847_mode: {
            description: 'Charger is supporting SAE J2847 V2G/V2H version'
          },
          supported_energy_transfer_modes: {
            description: 'Available energy transfer modes supported by the EVSE',
            items: {
              description: 'The different energy modes supported by the SECC'
            }
          }
        },
        description: 'At startup all necessary info should be sent to the module once.'
      },
      stop_charging: {
        arguments: {
          stop: {
            description: 'Set to true when to stop, set to false when to continue'
          }
        },
        description: 'Stops the charging process'
      },
      update_ac_max_current: {
        arguments: { max_current: { description: 'Max current in A' } },
        description: 'Update the maximum allowed line current restriction per phase. Call at least once during start up.'
      },
      update_dc_maximum_limits: {
        arguments: {
          maximum_limits: {
            description: 'Maximum values (current, power and voltage) the EVSE can deliver'
          }
        },
        description: 'Update the maximum limits. Call at least once during start up.'
      },
      update_dc_minimum_limits: {
        arguments: {
          minimum_limits: {
            description: 'Minimum values (current and voltage) the EVSE can deliver'
          }
        },
        description: 'Update the minimum limits. Call at least once during start up.'
      },
      update_dc_present_values: {
        arguments: {
          present_voltage_current: { description: 'Present voltage and current' }
        },
        description: 'Update the present values from the DC powersupply'
      },
      update_isolation_status: {
        arguments: {
          isolation_status: { description: 'Result of the isolation monitoring' }
        },
        description: 'Update the isolation condition'
      },
      update_meter_info: {
        arguments: {
          powermeter: {
            description: 'Includes the meterInfo record containing the latest meter reading and other meter relevant data'
          }
        },
        description: 'Update meter info'
      }
    },
    description: 'This interface defines a ISO15118 charger.',
    vars: {
      ac_close_contactor: { description: 'The contactor should be closed' },
      ac_eamount: {
        description: "[Wh] Amount of energy reflecting the EV's estimate how much energy is needed to fulfill the user configured charging goal for the current charging session"
      },
      ac_ev_max_current: {
        description: '[A] Maximum current supported by the EV per phase'
      },
      ac_ev_max_voltage: {
        description: '[V] The RMS of the maximal nominal voltage the vehicle can accept, measured between one phase and neutral'
      },
      ac_ev_min_current: {
        description: '[A] EVMinCurrent is used to indicate to the SECC that charging below this minimum is not energy/cost efficient for the EV'
      },
      ac_open_contactor: { description: 'The contactor should be opened' },
      current_demand_finished: { description: 'The charging process was finished' },
      current_demand_started: {
        description: 'The charging process has started and the EV wants to be charged'
      },
      d20_dc_dynamic_charge_mode: {
        description: 'The parameters the EVCC offers and sets for dynamic control mode'
      },
      dc_bulk_charging_complete: {
        description: 'Optional: If set to TRUE, the EV indicates that bulk charge (approx. 80% SOC) is complete'
      },
      dc_bulk_soc: {
        description: 'Optional: [%] SOC at which the EV considers a fast charge process to end'
      },
      dc_charging_complete: {
        description: 'Optional: If set to TRUE, the EV indicates that full charge (100% SOC) is complete'
      },
      dc_ev_energy_capacity: { description: 'Optional: [Wh] Energy capacity of the EV' },
      dc_ev_energy_request: {
        description: 'Optional: [Wh] Amount of energy the EV requests from the EVSE'
      },
      dc_ev_maximum_limits: {
        description: 'Maximum Values (current, power and voltage) supported and allowed by the EV'
      },
      dc_ev_present_voltage: { description: 'Present Voltage measured from the EV' },
      dc_ev_remaining_time: {
        description: 'Estimated or calculated time until bulk and full charge is complete'
      },
      dc_ev_status: { description: 'Current status of the EV' },
      dc_ev_target_voltage_current: { description: 'Target voltage and current requested by the EV' },
      dc_full_soc: {
        description: 'Optional: [%] SOC at which the EV considers the battery to be fully charged'
      },
      dc_open_contactor: { description: 'The contactor should be opened' },
      departure_time: {
        description: 'Optional: [RFC3339 UTC] This element is used to indicate when the vehicle intends to finish the charging process'
      },
      display_parameters: {
        description: 'Parameters that may be displayed on the EVSE (Soc, battery capacity)'
      },
      dlink_error: {
        description: 'Terminate the data link and restart the matching process.'
      },
      dlink_pause: {
        description: 'Request power saving mode, while staying MATCHED.'
      },
      dlink_terminate: { description: 'Terminate the data link and become UNMATCHED.' },
      ev_app_protocol: {
        description: 'Debug_Lite - This request message provides a list of charging protocols supported by the EVCC'
      },
      evcc_id: {
        description: 'Specifies the EVs identification in a readable format. It contains the MAC address of the EVCC in uppercase'
      },
      meter_info_requested: { description: 'The EV requested meter infos from the EVSE' },
      requested_energy_transfer_mode: {
        description: 'Selected energy transfer mode for charging that is requested by the EVCC.'
      },
      require_auth_eim: { description: 'An EIM authorization is requiered' },
      require_auth_pnc: {
        description: 'The EVCC provides the payment details for a PnC authorization by sending the signature certificate chain and eMAID.'
      },
      sae_bidi_mode_active: { description: 'The SAE J2847 bidi mode is active' },
      selected_payment_option: {
        description: 'This element is used for indicating the payment type'
      },
      selected_protocol: { description: 'Debug - Contains the selected protocol' },
      start_cable_check: { description: 'The charger should now start a cable check' },
      start_pre_charge: {
        description: 'The charger should now start the pre charge phase'
      },
      v2g_messages: {
        description: 'Debug - This element contains all V2G elements and should be used for debug purposes only'
      },
      v2g_setup_finished: {
        description: 'v2g_setup_finished from ISO15118-3. Trigger when EV sends a PowerDeliveryReq message with ChargeProgess equals Start or Stop'
      }
    }
  },
  ISO15118_ev: {
    cmds: {
      enable_sae_j2847_v2g_v2h: { description: 'Enable the SAE J2847 2 V2H V2G' },
      pause_charging: { description: 'Pause the ev charging communication process' },
      set_bpt_dc_params: {
        arguments: {
          EvBPTParameters: { description: 'BPT parameters for dc charging' }
        },
        description: 'Set the bpt parameters for dc charging'
      },
      set_dc_params: {
        arguments: {
          EvParameters: { description: 'Target parameters for dc charging' }
        },
        description: 'Set the target parameters for a dc charging process'
      },
      set_fault: {
        description: 'TODO_SL: Set the different ev faults to communicate these errors to the charging station'
      },
      start_charging: {
        arguments: {
          DepartureTime: {
            description: 'The time when the EVCC wants to leave the charging station (in seconds)'
          },
          EAmount: {
            description: 'The amount of energy that the EVCC wants to charge (in kWh)'
          },
          EnergyTransferMode: {
            description: 'Selected energy transfer mode for charging that is requested by the EVCC'
          }
        },
        description: 'Start the ev charging process',
        result: { description: 'Returns true if the evcc simulation started' }
      },
      stop_charging: { description: 'Stop the ev charging communication process' }
    },
    description: 'This interface defines a simple ISO15118 ev.',
    vars: {
      AC_EVPowerReady: { description: 'The car is ready for power (HLC)' },
      AC_EVSEMaxCurrent: { description: 'EVSE max current per phase' },
      AC_StopFromCharger: { description: 'The charger wants to stop the charging process' },
      DC_PowerOn: { description: 'The ev wants to close the dc contactors' },
      V2G_Session_Finished: {
        description: 'The v2g session between the charger and the car is finished'
      },
      pause_from_charger: {
        description: 'The charger wants to pause the session (only d20)'
      }
    }
  },
  ISO15118_vas: {
    cmds: {
      get_service_parameters: {
        arguments: { service_id: { description: 'Service ID' } },
        description: 'This command dynamically returns the parameter sets for a single service. It is called upon receiving ServiceDetailReq and returns the payload for ServiceDetailRes.',
        result: { description: 'Parameter Sets for this VAS' }
      },
      selected_services: {
        arguments: {
          selected_services: {
            description: 'List of selected services and their parameter set IDs'
          }
        },
        description: 'Callback to notify the VAS provider which services and parameter sets were selected by the EV. It is called upon receiving ServiceSelectionReq and called only once per Request.'
      }
    },
    description: 'Custom VAS provider for ISO 15118',
    vars: { offered_vas: { description: 'List of offered VAS Service IDs' } }
  },
  ac_rcd: {
    cmds: {
      reset: {
        description: 'Resets the RCD after a trigger. May not be supported by actual hardware.',
        result: {
          description: 'True: Reset successfull, False: Reset failed.'
        }
      },
      self_test: {
        description: 'Executes a self test of the RCD. If it fails, an error of type Selftest should be raised.'
      }
    },
    description: 'This interface provides an AC Residual Current Monitor (RCD). Actual emergency switch off is done in HW directly, but this interface allows some control and telemetry.',
    vars: {
      rcd_current_mA: {
        description: 'Residual current in mA. Note that this does not trigger anything, it is merely for reporting.'
      }
    }
  },
  auth: {
    cmds: {
      set_connection_timeout: {
        arguments: {
          connection_timeout: { description: 'Connection timeout in seconds' }
        },
        description: 'Sets the connection timeout'
      },
      set_master_pass_group_id: {
        arguments: {
          master_pass_group_id: { description: 'The master pass group id' }
        },
        description: 'Sets the master pass group id. IdTokens that have this id as parent_id_token belong to the Master Pass Group.  This means they can stop any ongoing transaction, but cannot start transactions. This can, for example, be used by law enforcement personal to stop any ongoing transaction when an EV has to be towed away. If master_pass_group_id  is an empty string, it is not used.'
      },
      withdraw_authorization: {
        arguments: { request: { description: 'The request' } },
        description: 'Withdraw granted authorization. If only the evse_id is given, the granted authorization for this EVSE will be withdrawn. If only the id_token is given, the granted authorization for every EVSE where this id_token is placed will be\n' +
          '  withdrawn\n' +
          'If both parameters are given, the granted authorization for the given EVSE will be withdrawn, if the placed\n' +
          '  id_token matches the given id_token\n' +
          'If no parameter is given, all granted authorizations for all EVSEs will be removed',
        result: {
          description: 'Accepted in case requested authorization was removed AuthorizationNotFound in case no match for request was found Rejected in case module could not process the request for other reasons'
        }
      }
    },
    description: 'Interface of authentication framework',
    vars: {
      token_validation_status: {
        description: 'Emits all events related to current token validation'
      }
    }
  },
  auth_token_provider: {
    description: 'Interface to provide a token',
    vars: { provided_token: { description: 'The provided token' } }
  },
  auth_token_validator: {
    cmds: {
      validate_token: {
        arguments: {
          provided_token: {
            description: 'Contains information about the authorization request'
          }
        },
        description: 'Validate auth token and return result (with optional reason string)',
        result: { description: 'Result object containing validation result' }
      }
    },
    description: 'Checks provided tokens for validity',
    vars: {
      validate_result_update: {
        description: 'Updated validation result for a given token due to some changes. These can be triggered by TransactionEvent messages or StartTransaction.'
      }
    }
  },
  bank_session_token_provider: {
    cmds: {
      get_bank_session_token: {
        description: 'Returns the token.',
        result: { description: 'token' }
      }
    },
    description: 'Provides the token that can be used to uniquely identify the session in the bank statement.'
  },
  car_simulator: {
    cmds: {
      enable: {
        arguments: { value: { description: 'Enable/Disable simulation mode' } },
        description: 'Enables or disables the simulation.'
      },
      execute_charging_session: {
        arguments: { value: { description: 'Charging simulation string' } },
        description: 'Executes a charging simulation string'
      }
    },
    description: 'This defines a car simulator that can execute a full charging session, from plugging in to plugging out. It uses HIL or SIL simulation controllers from e.g. the Yeti HIL simulator.',
    vars: {
      enabled: {
        description: 'Indicates whether simulation is currently enabled or not'
      }
    }
  },
  connector_lock: {
    cmds: {
      lock: { description: 'Lock connector lock' },
      unlock: {
        description: 'Unlock connector lock (e.g. normal unlock or enforced by OCPP)'
      }
    },
    description: 'This interface defines one connector locking motor (e.g. for AC sockets with no fixed attached cable)'
  },
  debug_json: {
    description: 'This interface defines a generic JSON object debug variable publisher for use in any module. Can be used to display debug variables e.g. in web interface.',
    vars: {
      debug_json: { description: 'Provides the debug object as a json object' },
      title: { description: 'Title of the Debug object' }
    }
  },
  display_message: {
    cmds: {
      clear_display_message: {
        arguments: { request: { description: 'The request to clear a message' } },
        description: 'Command to remove a display message',
        result: { description: 'Response on the clear message request' }
      },
      get_display_messages: {
        arguments: {
          request: { description: 'The request for display messages' }
        },
        description: 'Command to get one or more display messages.',
        result: {
          description: 'The display messages or an empty array if there are none'
        }
      },
      set_display_message: {
        arguments: {
          request: {
            description: 'Request to set a display message',
            items: { description: 'The display messages to set' }
          }
        },
        description: 'Command to set or replace a display message.',
        result: { description: 'Response to the set display message request.' }
      }
    },
    description: 'A module that implements this interface should be able to: - store (add, remove, change) and retrieve predefined messages - show messages on a display\n' +
      'When a display message contains a session id, the display message must be removed once the session has ended.'
  },
  empty: {
    description: 'This interface is empty and can be used for a config-only (main) implementation'
  },
  energy: {
    cmds: {
      enforce_limits: {
        arguments: {
          value: {
            description: 'Limit object that will be routed through the tree.'
          }
        },
        description: 'The EnergyManager enforces a limit using this command.'
      }
    },
    description: 'This interface is the internal energy management inteface between nodes.',
    vars: {
      energy_flow_request: {
        description: 'Request energy flow to supply/limit energy import (direction from grid to car) and/or consume/limit energy export (car to grid).'
      }
    }
  },
  energy_manager: { description: 'This interface defines the global EnergyManager' },
  energy_price_information: {
    description: 'This interface defines the interface for an energy price forecast',
    vars: {
      energy_pricing: {
        description: 'Forecast JSON Object containing timestamps and the price forecast for both import and export.'
      }
    }
  },
  error_history: {
    cmds: {
      get_errors: {
        arguments: {
          filters: { description: 'Filters to apply to the list of errors' }
        },
        description: 'Takes a list of filters and returns a list of errors',
        result: { description: 'List of filtered errors' }
      }
    },
    description: 'This interface provides access to the error history of the EVerest framework'
  },
  ev_board_support: {
    cmds: {
      allow_power_on: {
        arguments: {
          value: {
            description: 'True: allow power on, false: do not allow power on.'
          }
        },
        description: 'Sets allow_power_on flag. If false, contactor must never be switched on.'
      },
      diode_fail: {
        arguments: { value: { description: 'True: diode failure' } },
        description: 'Setting a diode failure'
      },
      enable: {
        arguments: { value: { description: 'true to enable, false to disable' } },
        description: 'Enable/disable the simulation'
      },
      set_ac_max_current: {
        arguments: {
          current: { description: 'Max current requested from the ev' }
        },
        description: 'Setting the max current requested from the ev'
      },
      set_cp_state: {
        arguments: { cp_state: { description: 'The CP State' } },
        description: 'Sets the CP State that should be set by the EV board support driver (controlled by S2)'
      },
      set_rcd_error: {
        arguments: { rcd_current_mA: { description: 'RCD current in mA' } },
        description: 'Setting a rcd error. Only for simulation purpose.'
      },
      set_three_phases: {
        arguments: {
          three_phases: {
            description: 'True: Three phase support, False: One phase support'
          }
        },
        description: 'Setting three or one phase support'
      }
    },
    description: 'This defines the board support package for the EV side',
    vars: {
      bsp_event: { description: 'Events from CP/Relais' },
      bsp_measurement: { description: 'BSP Measurements' },
      ev_info: { description: 'More details about the EV if available' }
    }
  },
  ev_manager: {
    description: 'This interface defines the ev manager. An ev manager represents the charging logic of the ev side',
    vars: {
      bsp_event: { description: 'Events from CP/Relais' },
      ev_info: { description: 'More details about the EV if available' }
    }
  },
  ev_slac: {
    cmds: {
      reset: { description: 'Reset SLAC' },
      trigger_matching: {
        description: 'Trigger start of matching process',
        result: {
          description: 'True on success, returns False if transition was unexpected and cannot be handled by SLAC state machine.'
        }
      }
    },
    description: 'ISO15118-3 SLAC interface for EV side',
    vars: {
      dlink_ready: {
        description: 'Inform higher layers about a change in data link status. Emits true if link was set up and false when the link is shut down.'
      },
      ev_mac_address: {
        description: 'Inform higher layers about the MAC address of the charging connector'
      },
      state: { description: 'Provides the state enum.' }
    }
  },
  evse_board_support: {
    cmds: {
      ac_read_pp_ampacity: {
        description: 'Read the current carrying capacity of the connected cable in ampere for AC charging with a socket. This function will be used by EvseManager to get the PP value at  a distinct time. You should also publish the var pp_ampacity whenever the PP ampacity reading changes to signal changes e.g. during the charging time. This has no meaning for DC or AC charging with a fixed attached cable, it does not  need to be implemented and the returned value is not used in those cases.',
        result: {
          description: 'Returns the current carrying capacity of the connected cable'
        }
      },
      ac_set_overcurrent_limit_A: {
        arguments: { value: { description: 'Ampere current limit value' } },
        description: 'Many chargers implement a fast over current shutdown directly in the hardware that triggers if the EV draws more current than the PWM allows. If the hardware does not have this functionality, just ignore this command. Do not use it to set the PWM duty cycle. Otherwise this command reports a value that should be used for the overcurrent detection.  A margin needs to be added to avoid false triggers. Do not use the PWM duty cycle to infer the current limit in the BSP, as this will not work with HLC.'
      },
      ac_switch_three_phases_while_charging: {
        arguments: {
          value: { description: 'True: switch to 3ph, False: switch to 1ph' }
        },
        description: 'Optional, in case of doubt do not implement. Report in hardware_capabilites if this command is supported. This command switches between one and three phase operation during an active charging session. Some cars can be permanently destroyed by that, so the bsp needs to implement a special sequence for the switching. The exact sequence can be defined by the BSP, but one example would be a C2->C1->B1->F->B1->B2->C2 or similar. Use with caution.'
      },
      allow_power_on: {
        arguments: { value: { description: 'Flag and context' } },
        description: 'Sets allow_power_on flag. If false, Relais must never be switched on.'
      },
      enable: {
        arguments: { value: { description: 'True: enabled, false: disabled.' } },
        description: 'Enables or disables the charging port. Typically disabled results in control pilot state F. It must not accept cars for new charging sessions if disabled.'
      },
      evse_replug: {
        arguments: {
          value: {
            description: 'Time in ms for the duration of the replug sequence'
          }
        },
        description: "Optional, in case of doubt do not implement. Special command initiate a virtual replug sequence without restarting session. Emits a EvseReplugStarted event if supported and started. BSP will take care to not emit other events such as CarPluggedIn/Out during that time. Once finished it will emit a EvseReplugFinished. This is mainly for testing purposes, don't implement for production use."
      },
      pwm_F: {
        description: 'Turns PWM off with Error F (constant negative voltage)'
      },
      pwm_off: { description: 'Turns PWM off (constant high voltage)' },
      pwm_on: {
        arguments: { value: { description: 'PWM duty cycle (>0, <100)' } },
        description: 'Turns PWM on with duty cycle (in percent)'
      }
    },
    description: 'This interface defines the board support driver for AC or DC minimal power path: ControlPilot, output contactors.  Other components of the power path such as IMD(DC)/RCD(AC)/Connector Lock etc have their own interfaces.',
    vars: {
      ac_nr_of_phases_available: { description: 'Instantaneous phase count available to car' },
      ac_pp_ampacity: {
        description: 'Current carrying capacity of the connected cable in ampere for AC charging with a socket. Publish whenever it changes. This has no meaning for DC or AC charging with a fixed attached cable, it does not  need to be implemented and the returned value is not used in those cases.'
      },
      capabilities: {
        description: 'Hardware capabilities/limits. The BSP must publish this variable at least once during start up. For AC, the capabilities are the limits of the AC hardware power path. For DC, this are the limits for the AC input for the AC/DC converter. The BSP may publish this variable to update limits in case they change during runtime, e.g. if the maximum current changes because the hardware gets too hot.'
      },
      event: { description: 'Event from ControlPilot signal/output relais' },
      request_stop_transaction: {
        description: 'Publish to stop the transaction gracefully (e.g. user pressed the stop button)'
      },
      telemetry: { description: 'Other telemetry' }
    }
  },
  evse_manager: {
    cmds: {
      authorize_response: {
        arguments: {
          provided_token: {
            description: 'The token for which authorization was requested'
          },
          validation_result: { description: 'The validation result' }
        },
        description: 'Reports the result of an authorization request to the EvseManager. Contains the provided_token for which authorization was requested and the validation_result'
      },
      cancel_reservation: {
        description: 'Call to signal that EVSE is not reserved anymore'
      },
      enable_disable: {
        arguments: {
          cmd_source: { description: 'Source of the enable command' },
          connector_id: {
            description: 'Specifies the ID of the connector to enable. If 0, the whole EVSE should be enabled'
          }
        },
        description: 'Enables or disables the evse. Turns off PWM with error F. Charging is only possible if an EVSE is enabled.',
        result: {
          description: 'Returns true if evse is enabled after the command, false if it is disabled. This may not be the same value as the request, since there may be a higher priority request from another source that is actually deciding whether it is enabled or disabled.'
        }
      },
      external_ready_to_start_charging: {
        description: 'There are situations where another module needs to do some initialization after evse manager is in principle ready to start charging. This command can be used (optimally in combination with a configuration option) to delay charging ready until the external module is done with its initialization',
        result: {
          description: 'Returns true if the signal was used by the evse manager implementation'
        }
      },
      force_unlock: {
        arguments: {
          connector_id: {
            description: 'Specifies the ID of the connector that should be unlocked'
          }
        },
        description: 'Forces connector to unlock connector now. During normal operation, connector will be locked/unlocked in the correct sequence. Do not use this function except if explicitly requested by e.g. management cloud.',
        result: {
          description: 'Returns true if unlocking command was accepted, or false if it is not supported. It does not reflect the success/failure of the actual unlocking. If unlocking fails, the connector_lock interface shall raise an error asynchronously.'
        }
      },
      get_evse: {
        description: 'Call to get information about the EVSE including its connectors',
        result: {
          description: 'Object that contains information of the EVSE including its connectors'
        }
      },
      pause_charging: {
        description: 'Call to signal EVSE to pause charging',
        result: {
          description: 'Returns true if successfully paused or was already in paused_by_evse mode'
        }
      },
      reserve: {
        arguments: {
          reservation_id: {
            description: 'The reservation id (should be added to the TransactionStarted event). Set this to a negative value if there is no specific reservation id for this evse but the evse should still move to a Reserved state because of total global reservations.'
          }
        },
        description: 'Call to signal that EVSE is reserved. This can be used to e.g. change the color of the HMI LEDs to indicate reservation.',
        result: {
          description: 'Returns true if the EVSE accepted the reservation, else false.'
        }
      },
      resume_charging: {
        description: 'Call to signal EVSE to resume charging',
        result: {
          description: "Returns true if resume was successful, false otherwise (e.g. resuming a car pause won't work)"
        }
      },
      set_faulted: {
        description: 'Sets the evse manager to faulted externally. It may also switch to faulted itself if it detects an internal error.'
      },
      set_plug_and_charge_configuration: {
        arguments: {
          plug_and_charge_configuration: { description: 'The plug and charge configuration object' }
        },
        description: 'Sets the configuration required for ISO15118 to handle contract authorization.'
      },
      stop_transaction: {
        arguments: {
          request: { description: 'Request to stop the transaction.' }
        },
        description: 'Stops transaction and cancels charging externally, charging can only be resumed by replugging car. EVSE will also stop transaction automatically e.g. on disconnect, so this only needs to be called if the transaction should end before.',
        result: { description: 'Returns true if successful' }
      },
      withdraw_authorization: {
        description: 'Call to signals that EVSE is not further authorized to start a transaction (e.g. on a connection_timeout)'
      }
    },
    description: 'This interface defines the evse manager. An evse manager represents the charging kernel of one physical connector.',
    vars: {
      car_manufacturer: { description: 'Car manufacturer (if known)' },
      enforced_limits: {
        description: 'Enforced limits for this node (coming from the EnergyManager)'
      },
      ev_info: { description: 'More details about the EV if available' },
      evse_id: {
        description: 'EVSE ID including the connector number, e.g. DE*PNX*E123456*1'
      },
      hw_capabilities: { description: 'Hardware capability/limits' },
      limits: { description: 'Limits of this evse, published on change' },
      powermeter: { description: 'Measured dataset' },
      powermeter_public_key_ocmf: { description: 'Powermeter public key' },
      ready: {
        description: 'Signals that the EVSE Manager is ready to start charging'
      },
      selected_protocol: {
        description: 'Contains the selected protocol used for charging for informative purposes'
      },
      session_event: { description: 'Emits all events related to sessions' },
      telemetry: { description: 'Other telemetry' },
      waiting_for_external_ready: {
        description: 'Signals that the EVSE Manager is in principle ready to start charging, but delays sending its ready signal waiting for the external_ready_to_start_charging command.'
      }
    }
  },
  evse_security: {
    cmds: {
      delete_certificate: {
        arguments: {
          certificate_hash_data: {
            description: 'Indicates the certificate that should be deleted'
          }
        },
        description: 'Command to delete a certificate',
        result: {
          description: 'Result of the attempt to delete a certificate'
        }
      },
      generate_certificate_signing_request: {
        arguments: {
          certificate_type: { description: 'Specifies the leaf certificate type' },
          common: {
            description: 'Specifies the common name (CN) of the certificate'
          },
          country: {
            description: 'Specifies the country name (C) of the certificate'
          },
          organization: {
            description: 'Specifies the organization name (O) of the certificate'
          },
          use_tpm: {
            description: 'Specifies if the CSR should store the private key on the TPM'
          }
        },
        description: 'Command to generate a certificate signing request for the given use',
        result: {
          description: 'The certificate signing request in PEM format'
        }
      },
      get_all_valid_certificates_info: {
        arguments: {
          certificate_type: { description: 'Specifies the leaf certificate type' },
          encoding: { description: 'Specifies the encoding of the key' },
          include_ocsp: {
            description: 'Specifies whether per-certificate OCSP data is also requested'
          }
        },
        description: 'Finds the latest valid leafs, for each root certificate that is present on the filesystem, and returns all the newest valid leafs that are present for different roots',
        result: { description: 'The response to the requested command' }
      },
      get_installed_certificates: {
        arguments: {
          certificate_types: { description: 'Types of certificates to be retrieved' }
        },
        description: 'Command to retrieve installed certificates of the EVSE',
        result: {
          description: 'Indicates the result of the command and optional certificate hash data'
        }
      },
      get_leaf_certificate_info: {
        arguments: {
          certificate_type: { description: 'Specifies the leaf certificate type' },
          encoding: { description: 'Specifies the encoding of the key' },
          include_ocsp: {
            description: 'Specifies whether per-certificate OCSP data is also requested'
          }
        },
        description: 'Command to get the paths of the certificate and the respective key',
        result: { description: 'The response to the requested command' }
      },
      get_leaf_expiry_days_count: {
        arguments: {
          certificate_type: { description: 'Indicates the type of the certificate' }
        },
        description: 'Command to get the days count until the given leaf certificate expires.  If no leaf certificate is installed this command will return 0',
        result: {
          description: 'days count until given leaf certificate expires'
        }
      },
      get_mo_ocsp_request_data: {
        arguments: {
          certificate_chain: {
            description: 'Certificate chain for which the OCSP data is retrieved'
          }
        },
        description: 'Command to retrieve the OCSP request data of the given MO certificate chain. Contains OCSP data for each certificate that is present in the chain (excluding the root)',
        result: {
          description: 'The OCSP request data of the given certificate chain. Contains OCSP data for each certificate in the given chain. '
        }
      },
      get_v2g_ocsp_request_data: {
        description: 'Command to retrieve the OCSP request data of the V2G certificates. Contains OCSP data for each certificate that is present in the chain (excluding the root). ',
        result: {
          description: 'The OCSP request data of all V2G CA certificates including the Sub CAs (exluding the root)'
        }
      },
      get_verify_file: {
        arguments: {
          certificate_type: { description: 'Specifies that CA certificate type' }
        },
        description: 'Command to get the file path of a CA bundle that can be used for verification',
        result: { description: 'The path of the CA bundle file' }
      },
      get_verify_location: {
        arguments: {
          certificate_type: { description: 'Specifies that CA certificate type' }
        },
        description: 'Command to get the file path of the CA root directory that can be used for verification. Will also invoke c_rehash for that directory',
        result: { description: 'The path of the CA certificates directory' }
      },
      install_ca_certificate: {
        arguments: {
          certificate: { description: 'A PEM encoded X.509 certificate.' },
          certificate_type: { description: 'Indicates the type of the certificate' }
        },
        description: 'Command to install a new CA certificate',
        result: {
          description: 'Result of the attempt to install a CA certificate'
        }
      },
      is_ca_certificate_installed: {
        arguments: {
          certificate_type: { description: 'Specifies that CA certificate type' }
        },
        description: 'Command that indicates of the given CA certificate type is installed',
        result: {
          description: 'True if CA certificate is installed, else false'
        }
      },
      update_leaf_certificate: {
        arguments: {
          certificate_chain: {
            description: 'Leaf certificate or certificate chain that should be installed'
          },
          certificate_type: { description: 'Indicates the type of the certificate' }
        },
        description: 'Command to install or update SECC or CSMS leaf certificate',
        result: {
          description: 'Result of the attempt to install or update a leaf certificate'
        }
      },
      update_ocsp_cache: {
        arguments: {
          certificate_hash_data: {
            description: 'Certificate hash data that identifies the certificate for which the cache should be updated'
          },
          ocsp_response: {
            description: 'OCSPResponse class as defined in IETF RFC 6960. DER and then base64 encoded'
          }
        },
        description: 'Command to update the OCSP cache with the given data'
      },
      verify_certificate: {
        arguments: {
          certificate_chain: {
            description: 'Leaf certificate or certificate chain that is to be verified'
          },
          certificate_types: { description: 'Indicates the type of the certificate' }
        },
        description: 'Command to verify the given certificate',
        result: { description: 'Result of the verification' }
      },
      verify_file_signature: {
        arguments: {
          file_path: { description: 'Path to the file that should be verified' },
          signature: { description: 'Base64 encoded file signature' },
          signing_certificate: {
            description: 'Certificate with which the file was signed. PEM encoded X.509 certificate'
          }
        },
        description: 'Verify the file at the given path using the provided certificate and signature',
        result: { description: 'True if verification succeeded, false if not' }
      }
    },
    description: 'This interface provides security related functions and access to secure storage that an EVSE needs to provide. This includes the handling of all security related functions specified within OCPP and ISO15118. The modules that implement this interface are responsible for checking the validity period of the leaf certificates and initiate certificate signing request if leaf certificates are about to expire.',
    vars: {
      certificate_store_update: {
        description: 'Variable that indicates that the certificate store has been updated, i.e. either a certificate has been installed or deleted.  This is used to notify other modules that the certificate store has changed.'
      }
    }
  },
  example: {
    cmds: {
      uses_something: {
        arguments: { key: { description: 'Key to check the existence for' } },
        description: 'This command checks if something is stored under a given key',
        result: {
          description: "Returns 'True' if something was stored for this key"
        }
      }
    },
    description: 'This interface defines an example interface that uses multiple framework features',
    vars: {
      max_current: {
        description: 'Provides maximum current of this supply in ampere'
      }
    }
  },
  example_error_framework: {
    description: 'This is an example interface used for the error framework example modules.'
  },
  example_user: {
    description: 'This interface defines an example_user interface that uses the example interface'
  },
  external_energy_limits: {
    cmds: {
      set_external_limits: {
        arguments: { value: { description: 'External limits object' } },
        description: 'Set additional external energy flow limits at this node.'
      }
    },
    description: 'This interface allows to limit energy flow at a specific node of the energy tree from the outside (e.g. from ocpp).',
    vars: {
      enforced_limits: {
        description: 'Enforced limits for this node (coming from the EnergyManager)'
      }
    }
  },
  generic_array: {
    description: 'This interface publishes just generic data blobs.',
    vars: { vector_of_ints: { description: 'data blob.' } }
  },
  generic_error: { description: 'Interface providing access to generic errors' },
  iso15118_extensions: {
    cmds: {
      set_get_certificate_response: {
        arguments: {
          certificate_response: {
            description: 'The response raw exi stream and the status from the CSMS system'
          }
        },
        description: 'CertificateInstallationRes/CertificateUpdateRes - Set the new/updated Contract Certificate (including the certificate chain) and the corresponding encrypted private key. Should be forwared to EVCC. This is an async response to a previously published iso15118_certificate_request'
      }
    },
    description: 'This interface is used to share data between ISO15118 and OCPP modules to support the requirements of the OCPP protocol',
    vars: {
      charging_needs: {
        description: "The ISO15118-20 bidirectional charging is required to send this message for OCPP 2.1 during the 'ScheduleExchangeReq' state machine. For ISO15118-2 and OCPP 2.1 this message has to be sent during the 'ChargeParameterDiscoveryReq' state machine"
      },
      iso15118_certificate_request: {
        description: 'The vehicle requests the SECC to deliver the certificate that belong to the currently valid contract of the vehicle. Response will be reported async via set_get_certificate_response'
      }
    }
  },
  isolation_monitor: {
    cmds: {
      start: {
        description: 'Start recurring isolation measurements. The device should monitor the isolation status until stopped and publish the resistance data in regular intervals. The actual interval is device dependent.'
      },
      start_self_test: {
        arguments: {
          test_voltage_V: {
            description: 'Specifies the test voltage [V] that is applied on the DC pins during self test. This can be used to verify the internal voltage measurement of the IMD.'
          }
        },
        description: 'Start self test. This will be done during the CableCheck phase, so a DC voltage will be present according to IEC 61851-23 (2023). The command should return immediately. The "self_test_result" variable must be published once the self testing is done. Note that on many hardware devices this can take a long time (e.g. 20 seconds).'
      },
      stop: {
        description: 'Stop recurring measurements. The device should stop to monitor the isolation resistance and stop publishing the data.'
      }
    },
    description: 'This interface defines an isolation monitoring device (IMD) according to IEC 61557-8 for DC charging. This is used to verify isolation of the DC lines before starting high voltage charging and during charging.',
    vars: {
      isolation_measurement: { description: 'Isolation monitoring measurement results' },
      self_test_result: {
        description: 'Indicates the self test is done and publishes the result. Set "true" for success, "false" for failure.'
      }
    }
  },
  kvs: {
    cmds: {
      delete: {
        arguments: { key: { description: 'Key to delete the value for' } },
        description: 'This command removes the value stored under a given key'
      },
      exists: {
        arguments: { key: { description: 'Key to check the existence for' } },
        description: 'This command checks if something is stored under a given key',
        result: {
          description: "Returns 'True' if something was stored for this key"
        }
      },
      load: {
        arguments: { key: { description: 'Key to load the value for' } },
        description: 'This command loads the previously stored value for a given key (it will return null if the key does not exist)',
        result: { description: 'The previously stored value' }
      },
      store: {
        arguments: {
          key: { description: 'Key to store the value for' },
          value: { description: 'Value to store' }
        },
        description: 'This command stores a value under a given key'
      }
    },
    description: 'This interface defines a simple key-value-store interface'
  },
  ocpp: {
    cmds: {
      change_availability: {
        arguments: {
          request: {
            description: 'The ChangeAvailabilityRequest as specified in OCPP2.0.1. For OCPP 1.6:'
          }
        },
        description: 'Allows to send a ChangeAvailabilityRequest internally (as can be done by the CSMS).',
        result: {
          description: 'Response to ChangeAvailabilityRequest as specified in OCPP 2.0.1'
        }
      },
      get_variables: {
        arguments: { requests: { description: 'List of GetVariableRequest' } },
        description: 'Command to get a variable from OCPP. With OCPP1.6: Retrieves a configuration key. With OCPP2.0.1: Retrieves a variable with value from the device model storage',
        result: {
          description: 'List of GetVariableResult containing the result for every requested value. Preserves the order of the input requests.'
        }
      },
      monitor_variables: {
        arguments: {
          component_variables: { description: 'List of ComponentVariable(s) to monitor' }
        },
        description: 'Command to start monitoring the given ComponentVariable(s). Any of the provided configuration keys will be published on change by the CSMS. Consecutive calls of this operation will not override but extend the existing monitors. With OCPP1.6: This command can be used to monitor configuration keys With OCPP2.0.1: This command can be used to monitor any kind of variable in the device model storage'
      },
      restart: {
        description: 'Connects the websocket and enables OCPP communication after a previous stop call.',
        result: {
          description: 'Returns true if the service could be restarted successfully, else false'
        }
      },
      security_event: {
        arguments: { event: { description: 'A security event' } },
        description: 'Triggers a SecurityEventNotification.req at the CSMS if it is deemed critical, either by setting the flag in this event or if absent automatically by libocpp'
      },
      set_variables: {
        arguments: {
          requests: { description: 'List of SetVariableRequests' },
          source: { description: 'Source of variable values' }
        },
        description: 'Command to set a variable at OCPP. With OCPP1.6: This command can be used to set custom configuration keys (others will be rejected) With OCPP2.0.1: This command can be used to set variables in the device model storage',
        result: {
          description: 'List of SetVariableResult containing the result for every requested set operation'
        }
      },
      stop: {
        description: 'Disconnects the websocket connection and stops the OCPP communication. No OCPP messages will be stored and sent after a restart.',
        result: {
          description: 'Returns true if the service could be stopped successfully, else false'
        }
      }
    },
    description: 'This interface allows to control an OCPP service and set and get data from the OCPP service. It is designed to be used for both OCPP1.6 and OCPP2.0.1 module implementations. Therefore, the vars, commands and types are based more on the definitions of OCPP2.0.1, as this offers more flexibility and it is easier to transfer to the capabilities of OCPP1.6 than vice versa.',
    vars: {
      boot_notification_response: {
        description: 'Published any time a BootNotificationResponse message is received from the CSMS'
      },
      charging_schedules: {
        description: 'Object that contains OCPP charging schedules of all connectors. The object contains one composite charging schedule for each connector id starting from connector 0. Connector 0 contains a schedule for the whole charging station.'
      },
      event_data: {
        description: 'Published for a component variable combination when a variable with a monitor has been changed For OCPP1.6: The object may only contain the required properties of the EventData type because in OCPP1.6\n' +
          '  there is not more information available or required.\n' +
          'For OCPP2.0.1: The object may contain all available properties'
      },
      is_connected: { description: 'Indicates if chargepoint is connected to CSMS' },
      ocpp_transaction_event: { description: 'Emits events related to OCPP transactions' },
      ocpp_transaction_event_response: { description: 'Emits OCPP transaction responses' },
      security_event: {
        description: 'Published when an internal security event occurred'
      }
    }
  },
  ocpp_1_6_charge_point: {
    cmds: {
      get_configuration_key: {
        arguments: {
          keys: {
            description: 'List of keys for which the values are requested. If empty, all keys and values are returned',
            items: { description: 'A key' }
          }
        },
        description: 'Gets the response to the requested configuration key containing a list of the values of the requested keys and a list of the keys that are unknown',
        result: { description: 'Response to the requested operation' }
      },
      monitor_configuration_keys: {
        arguments: {
          keys: {
            description: 'Keys that should be monitored',
            items: { description: 'Key that should be montired' }
          }
        },
        description: 'Monitors the given configuration key. In case this configuration keys is changed by the CSMS the configuration key the changed configuration key will be published. Consecutive calls of this operation will not override but extend the existing monitors'
      },
      restart: {
        description: 'Connects the websocket and enables OCPP communication after a previous stop call.',
        result: {
          description: 'Returns true if the service could be restarted successfully, else false'
        }
      },
      security_event: {
        arguments: {
          info: {
            description: 'Additional information about the occurred security event'
          },
          type: { description: 'type of the security event' }
        },
        description: 'Triggers a SecurityEventNotification.req at the CSMS. This event is queued with a guaranteed delivery to the CSMS.'
      },
      set_custom_configuration_key: {
        arguments: {
          key: { description: 'Key that should be set' },
          value: { description: 'Value that should be set for the given key' }
        },
        description: 'Command to set a custom configuration key. Its not possible to set standardized configuration keys externally',
        result: {
          description: 'Indicates the result of the requested operation'
        }
      },
      stop: {
        description: 'Disconnects the websocket connection and stops the OCPP communication. No OCPP messages will be stored and sent after a restart.',
        result: {
          description: 'Returns true if the service could be stopped successfully, else false'
        }
      }
    },
    description: 'This interface defines a OCPP 1.6 charge point',
    vars: {
      configuration_key: {
        description: 'Published when a configuration key has been changed by the CSMS and a monitor has been registered using the command monitor_configuration_keys'
      },
      is_connected: { description: 'Indicates if chargepoint is connected to CSMS' },
      security_event: {
        description: 'Published when an internal security event occurred'
      }
    }
  },
  ocpp_data_transfer: {
    cmds: {
      data_transfer: {
        arguments: {
          request: {
            description: 'Request object containing data transfer request'
          }
        },
        description: 'Performs a OCPP data transfer request and returns the response',
        result: {
          description: 'Result object containing data transfer response'
        }
      }
    },
    description: 'This interface defines a OCPP data transfer'
  },
  over_voltage_monitor: {
    cmds: {
      reset_over_voltage_error: {
        description: 'Resets the detection logic to allow for new charging session after an over voltage error occurred. This should clear the over voltage error. If monitoring is still active, it should be stopped.'
      },
      start: {
        arguments: {
          over_voltage_limit_V: {
            description: 'Specifies the over voltage threshold [V] (based on IEC61851-23:2023 Table 103) An emergency shutdown should be triggered if the DC output voltage is higher  than this value.'
          }
        },
        description: 'Start over voltage monitoring'
      },
      stop: {
        description: 'Stop over voltage monitoring at the end of the power transfer.'
      }
    },
    description: 'This interface defines a fast over voltage monitoring device according to IEC61851-23:2023 6.3.1.106.2 for DC charging. An emergency shutdown needs to be triggered if the DC output voltage is above the limit of Table 103 for 9ms. The actual shutdown needs to be handled in a lower layer outside of EVerest, but this interface sets the  correct voltage limit at the start of the session and stops monitoring at the  end of the session. The over voltage error should be reported after the actual shutdown was already performed. Once an over voltage error was raised, it should only be cleared when the reset_over_voltage_error command is called. All other errors should be raised/cleared when they occur/are no longer active immediately. The var voltage_measurement_V should be published in regular intervals, e.g. 1 second. It is not used to compare it with the overvoltage threshold setting in EVerest, that has to be done in the OVM device itself. It will only be used to validate that the OVM and the IMD see the same voltage to ensure they are correctly wired to the same charging port. If it is not available in hardware, do not publish the voltage_measurement_V at all.',
    vars: { voltage_measurement_V: { description: 'Measured voltage in V' } }
  },
  payment_terminal: {
    cmds: {
      allow_all_cards_for_every_connector: {
        description: 'Enable all card types on each connector. This is default behavior on the startup'
      },
      enable_card_reading: {
        arguments: {
          connector_id: { description: 'Which connector' },
          supported_cards: { description: 'Supported card types array' }
        },
        description: 'Enables or disables card reading for given connector'
      }
    },
    description: 'Interface that provides functionality for a Payment Terminal',
    vars: {
      bank_transaction_summary: {
        description: "Provides information of the session that was committed to the bank. This data may be needed for accounting purposes. Summary of a bank transaction. Depends on bank and the backend. Therefore it's mostly opaque data at the moment."
      },
      rejection_reason: {
        description: 'Provides a rejection reason for the rejected credit card read.'
      }
    }
  },
  phyverso_mcu_temperature: {
    description: 'Temperatures from MCU',
    vars: { MCUTemperatures: { description: 'Temperatures' } }
  },
  power: {
    description: 'This interface defines the interface of a power supply',
    vars: {
      max_current: {
        description: 'This is the maximum current of the power supply'
      }
    }
  },
  power_supply_DC: {
    cmds: {
      setExportVoltageCurrent: {
        arguments: {
          current: { description: 'Output current limit in Ampere' },
          voltage: { description: 'Output voltage in Volt' }
        },
        description: 'Set output target voltage limit. Must be within reported limits.'
      },
      setImportVoltageCurrent: {
        arguments: {
          current: { description: 'Input current limit in Ampere' },
          voltage: {
            description: 'Current will be drawn if input is above this voltage (in Volt)'
          }
        },
        description: 'Set minimal import voltage and current limit.  Must be within reported limits.'
      },
      setMode: {
        arguments: {
          mode: { description: 'Operation mode of power supply' },
          phase: {
            description: 'Charging phase for this mode change. This information should normally not be needed by the power supply, as it should always just operate in CCCV mode. Some special setups however are handling CableCheck/PreCharge/Charge a little bit different internally.'
          }
        },
        description: 'Set operation mode of the bidirectional DC power supply'
      }
    },
    description: 'Interface for power supplies used for DC charging\n' +
      'Implementation guidelines for this interface: 1) During start up of the driver, publish capabilities as soon as they are available, ideally in ready() function.\n' +
      '   The charging logic in EvseManager will not allow any charging until it receives the capabilities at least once.\n' +
      '   Capabilities may be published at any later point in time to update the values. This may happen if they e.g. change due\n' +
      '   to thermal derating etc. If a charging session is active when the update is received,\n' +
      '   only power/current limits will be applied immediately. All other values will become active at the next charging session.\n' +
      '\n' +
      '2) setMode/setVoltageCurrent commands should be executed on the hardware immediately. If this is not possible because an error is currently active\n' +
      '   (e.g. communication to the hardware is lost), the driver module shall cache the last mode and voltage/current settings.\n' +
      '   Once the PSU is back on-line (e.g. after a CommunicationFault), set the last mode and voltage/current value received and only after that clear the error.\n' +
      '\n' +
      '3) setMode to Off requires special attention. To avoid switching the output relays of the charger off under full load, make sure to return\n' +
      '   from the setMode function(Off) only when the current is below a safe threshold for switching off the relays (exact value is hardware dependent).\n' +
      '   If communication is lost with the power supply, make sure to still return, the call must not block for a longer period of time.\n' +
      '   EVerest will ensure the order of the calls is correct during shutdown, but will not wait for the power supply to actually turn off:\n' +
      '    1. call setMode(Off) on power_supply_DC\n' +
      '    2. call allow_power_on(false) on evse_board_support\n' +
      '  If the setMode(Off) returns immediately, it may happen that the bsp implementation opens the relays before the power supply is shutdown.\n' +
      '\n' +
      '4) var voltage_current shall be published on regular intervals. The interval depends on the hardware, but it shall be at least once per second. If possible,\n' +
      '   update at e.g. 4 Hertz is recommended.',
    vars: {
      capabilities: { description: 'Publish capabilities of this PSU.' },
      mode: { description: 'Current mode. Published on change.' },
      voltage_current: { description: 'Voltage/Current at the input/output' }
    }
  },
  powermeter: {
    cmds: {
      start_transaction: {
        arguments: {
          value: {
            description: 'All information that should be included in the signed OCMF packet'
          }
        },
        description: 'Starts a transaction on the power meter (for signed metering according to German Eichrecht)',
        result: {
          description: 'True on success, False if transaction could not be started in the power meter'
        }
      },
      stop_transaction: {
        arguments: { transaction_id: { description: 'Transaction id' } },
        description: 'Stop the transaction on the power meter and return the signed metering information. If the transaction id is an empty string, all ongoing transaction should be cancelled. This is used on start up to clear dangling transactions that might still be ongoing in the power meter but are not known to the EvseManager.',
        result: {
          description: 'Response to transaction stop request including OCMF string.'
        }
      }
    },
    description: 'This interface defines a generic powermeter for 5 wire TN networks.',
    vars: {
      powermeter: { description: 'Measured dataset' },
      public_key_ocmf: { description: 'The public key for OCMF' }
    }
  },
  reservation: {
    cmds: {
      cancel_reservation: {
        arguments: { reservation_id: { description: 'Id of the reservation' } },
        description: 'Cancels the reservation with the given reservation_id',
        result: {
          description: 'Returns true if reservation was cancelled. Returns false if there was no reservation to cancel.'
        }
      },
      exists_reservation: {
        arguments: {
          request: {
            description: 'The information to send for the check if there is a reservation on the given connector for the given token.'
          }
        },
        description: 'Checks if there is a reservation made for the given connector and token. Will also return true if there is a reservation with this token for evse id 0.',
        result: {
          description: 'Returns an enum which indicates the reservation status of the given id / id token / group id token combination.'
        }
      },
      reserve_now: {
        arguments: { request: { description: 'Requests to make a reservation' } },
        description: 'Reserves an evse.',
        result: {
          description: 'Returns Accepted if reservation was succesful or specifies error code.'
        }
      }
    },
    description: 'Interface for reservations',
    vars: {
      reservation_update: { description: 'Update of the reservation.' }
    }
  },
  serial_communication_hub: {
    cmds: {
      modbus_read_holding_registers: {
        arguments: {
          first_register_address: {
            description: 'Start address for read operation (16 bit address)'
          },
          num_registers_to_read: { description: 'Number of registers to read (16 bit each)' },
          target_device_id: {
            description: 'ID (1 byte) of the device to send the commands to'
          }
        },
        description: "Send a Modbus RTU 'read holding registers' command via serial interface to the target hardware. (return value: response)",
        result: { description: 'Result of the transfer' }
      },
      modbus_read_input_registers: {
        arguments: {
          first_register_address: {
            description: 'Start address for read operation (16 bit address)'
          },
          num_registers_to_read: { description: 'Number of registers to read (16 bit each)' },
          target_device_id: {
            description: 'ID (1 byte) of the device to send the commands to'
          }
        },
        description: "Send a Modbus RTU 'read input registers' command via serial interface to the target hardware. (return value: response)",
        result: { description: 'Result of the transfer' }
      },
      modbus_write_multiple_registers: {
        arguments: {
          data_raw: {
            description: 'Data content to be written to the above selected registers (in 16 bit words)'
          },
          first_register_address: {
            description: 'Start address for write operation (16 bit address)'
          },
          target_device_id: {
            description: 'ID (1 byte) of the device to send the commands to'
          }
        },
        description: "Send a Modbus RTU 'write multiple registers' command via serial interface to the target hardware. (return value: response)",
        result: { description: 'Status code of the transfer' }
      },
      modbus_write_single_register: {
        arguments: {
          data: {
            description: 'Data content to be written to the above selected register'
          },
          register_address: {
            description: 'Address of the register to write to (16 bit address)'
          },
          target_device_id: {
            description: 'ID (1 byte) of the device to send the commands to'
          }
        },
        description: "Send a Modbus RTU 'write single register' command via serial interface to the target hardware. (return value: response)",
        result: { description: 'Status code of the transfer' }
      },
      nonstd_read: {
        arguments: {
          first_register_address: {
            description: 'Start address for write operation (16 bit address)'
          },
          num_registers_to_read: { description: 'Number of registers to read (16 bit each)' },
          target_device_id: {
            description: 'ID (1 byte) of the device to send the commands to'
          }
        },
        description: 'Non standard mode to read registers in read coils mode, but getting a malformed reply. Used e.g. by GYDCG-UBC1 isolation monitor.',
        result: { description: 'Result of the transfer' }
      },
      nonstd_write: {
        arguments: {
          first_register_address: {
            description: 'Start address for read operation (16 bit address)'
          },
          num_registers_to_read: { description: 'Number of registers to read (16 bit each)' },
          target_device_id: {
            description: 'ID (1 byte) of the device to send the commands to'
          }
        },
        description: 'Non standard mode to write registers in read discrete input mode without waiting for reply. Used e.g. by GYDCG-UBC1 isolation monitor.'
      }
    },
    description: 'This interface provides multiplexed access to one serial port (e.g. RS485) for multiple clients.'
  },
  session_cost: {
    description: 'This interface publishes the running or finished session costs. This interface provides cost of one session. If we have more than one EVESEID, we need to  instantiate this interface for each EVSE.',
    vars: {
      session_cost: {
        description: 'Session cost object containing the total cost of the session and a list of chunks'
      },
      tariff_message: {
        description: 'Message to show to the user with information about the tariff.'
      }
    }
  },
  slac: {
    cmds: {
      dlink_error: {
        description: 'Terminate the data link and restart the matching process.',
        result: { description: 'True on success.' }
      },
      dlink_pause: {
        description: 'Request power saving mode, while staying MATCHED.',
        result: { description: 'True on success.' }
      },
      dlink_terminate: {
        description: 'Terminate the data link and become UNMATCHED.',
        result: { description: 'True on success.' }
      },
      enter_bcd: {
        description: 'Signal pilot state change to B/C/D from A/E/F.',
        result: {
          description: 'True on success, returns False if transition was unexpected and cannot be handled by SLAC state machine.'
        }
      },
      leave_bcd: {
        description: 'Signal pilot state change to A/E/F from B/C/D.',
        result: {
          description: 'True on success, returns False if transition was unexpected and cannot be handled by SLAC state machine.'
        }
      },
      reset: {
        arguments: {
          enable: {
            description: 'true: start SLAC after reset, false: stop SLAC'
          }
        },
        description: 'Reset SLAC'
      }
    },
    description: 'ISO15118-3 SLAC interface for EVSE side',
    vars: {
      dlink_ready: {
        description: 'Inform higher layers about a change in data link status. Emits true if link was set up and false when the link is shut down.'
      },
      ev_mac_address: {
        description: 'Inform higher layers about the MAC address of the vehicle (upper case)'
      },
      request_error_routine: {
        description: 'Inform the higher layer to execute the error routine for a SLAC connection retry'
      },
      state: { description: 'Provides the state enum.' }
    }
  },
  solar_forecast: {
    description: 'This interface defines the interface for an solar energy production forecast',
    vars: {
      forecast: {
        description: 'Forecast JSON Object containing a timestamp and the energy forecast in watthours.'
      }
    }
  },
  sunspec_ac_meter: {
    cmds: {
      get_sunspec_ac_meter_value: {
        arguments: { auth_token: { description: 'Auth token' } },
        description: 'Returns a sunspec ac meter model',
        result: { description: 'Sunspec ac meter model' }
      }
    },
    description: 'Get sunspec ac meter measurement'
  },
  sunspec_reader: {
    description: 'This interface defines a generic Sunspec reader, which can be used to fetch values from Sunspec devices when an implementation is given.',
    vars: {
      measurement: {
        description: 'Measured dataset',
        properties: {
          timestamp: { description: 'Timestamp of measurement' },
          value: { description: 'Measurement value' }
        }
      }
    }
  },
  sunspec_scanner: {
    cmds: {
      scan_device: {
        arguments: {
          ip_address: { description: 'local IP-address of the Sunspec device' }
        },
        description: 'Scans complete device',
        result: { description: 'Returns a json overview of the scan' }
      },
      scan_network: {
        description: 'Scans local network',
        result: { description: 'Returns a json overview of the scan' }
      },
      scan_port: {
        arguments: {
          ip_address: { description: 'local IP-address of the Sunspec device' },
          port: { description: 'Modbus port' }
        },
        description: "Scans all units at a device's port",
        result: { description: 'Returns a json overview of the scan' }
      },
      scan_unit: {
        arguments: {
          ip_address: { description: 'local IP-address of the Sunspec device' },
          port: { description: 'Modbus port' },
          unit: { description: 'Modbus unit id' }
        },
        description: "Scans specific unit at a device's port",
        result: { description: 'Returns a json overview of the scan' }
      }
    },
    description: 'This class defines the global Sunspec scanner'
  },
  system: {
    cmds: {
      allow_firmware_installation: {
        description: 'Call to allow a firmware installation to proceed'
      },
      get_boot_reason: {
        description: 'Call to get the boot reason of the system',
        result: { description: 'Returns the boot reason of the system' }
      },
      is_reset_allowed: {
        arguments: { type: { description: 'Type of the reset (Soft or Hard)' } },
        description: 'Call to determine if a reset of the system is allowed',
        result: { description: 'Indicates if the system can be reset' }
      },
      reset: {
        arguments: {
          scheduled: {
            description: 'Indicates if this reset command was scheduled or immediately executed. A scheduled reset means that the system was waiting for all transactions to finish before this command was executed. This value is only informational.'
          },
          type: { description: 'Type of the reset (Soft or Hard)' }
        },
        description: 'Call to reset the system immediately'
      },
      set_system_time: {
        arguments: {
          timestamp: { description: 'The new system time in RFC3339 format' }
        },
        description: 'Call to set the system time of EVerest',
        result: {
          description: 'Returns true if the system time could be set successfully, else false'
        }
      },
      update_firmware: {
        arguments: {
          firmware_update_request: {
            description: 'Meta data containing information about the firmware request'
          }
        },
        description: 'Call to start a firmware update',
        result: {
          description: 'Returns the result of the attempt to update the firmware'
        }
      },
      upload_logs: {
        arguments: {
          upload_logs_request: {
            description: 'Meta data containing information about the log request request'
          }
        },
        description: 'Call to start a log upload',
        result: {
          description: 'Returns the result of the attempt to upload the logs'
        }
      }
    },
    description: 'Interface for system wide operations of EVerest',
    vars: {
      firmware_update_status: {
        description: 'Describes the current status of a firmware update of the system'
      },
      log_status: {
        description: 'Describes the current status of log upload of the system'
      }
    }
  },
  test_control: {
    cmds: {
      start_charging: {
        arguments: {
          mode: { description: 'Sets charging mode (e.g. raw, iso15118)' }
        },
        description: 'Enables the EvManager to begin charging',
        result: { description: 'Charging state of the EvManager' }
      }
    },
    description: 'This interface defines the everest-testing control functions on everest-core',
    vars: { state: { description: 'State of the test control instance' } }
  },
  test_error_handling: {
    cmds: {
      clear_all_errors: {
        description: 'This command clears all errors that are raised by this implementation'
      },
      clear_error: {
        arguments: {
          sub_type: {
            description: 'This argument allows to specify the sub type'
          },
          type: {
            description: 'This argument allows to specify the type cleared'
          }
        },
        description: 'This command clears all errors of a specific type'
      },
      raise_error: {
        arguments: {
          message: {
            description: 'This argument allows to specify the message'
          },
          severity: {
            description: 'This argument allows to specify the severity'
          },
          sub_type: {
            description: 'This argument allows to specify the sub type'
          },
          type: {
            description: 'This argument allows to specify the type raised'
          }
        },
        description: 'This command raises an error'
      }
    },
    description: 'This interface defines an testing interface that allows to control the usage of error handling features',
    vars: {
      errors_cleared_subscribe_TestErrorA: {
        description: 'This variable publishes the errors that are cleared by error_raiser'
      },
      errors_cleared_subscribe_TestErrorB: {
        description: 'This variable publishes the errors that are cleared by error_raiser'
      },
      errors_cleared_subscribe_all: {
        description: 'This variable publishes the errors that are cleared by error_raiser'
      },
      errors_cleared_subscribe_global_all: {
        description: 'This variable publishes the errors that are cleared by any module/implementation'
      },
      errors_subscribe_TestErrorA: {
        description: 'This variable publishes the errors raised by error_raiser'
      },
      errors_subscribe_TestErrorB: {
        description: 'This variable publishes the errors raised by error_raiser'
      },
      errors_subscribe_all: {
        description: 'This variable publishes the errors raised by error_raiser'
      },
      errors_subscribe_global_all: {
        description: 'This variable publishes the errors raised by any module/implementation'
      }
    }
  },
  test_error_raiser: {
    description: 'This interface defines a test interface that allows to raise errors'
  },
  tibber_price_forecast: {
    description: 'This interface defines the interface for an energy price forecast',
    vars: {
      forecast: {
        description: 'Forecast JSON Object containing a timestamp and the price forecast'
      }
    }
  },
  uk_random_delay: {
    cmds: {
      cancel: {
        description: 'Cancels a running random delay. The effect is the same as if the time expired just now.'
      },
      disable: { description: 'Call to disable the random delay feature' },
      enable: { description: 'Call to enable the random delay feature' },
      set_duration_s: {
        arguments: { value: { description: 'Maximum duration in seconds' } },
        description: 'Set the maximum duration of the random delay. Default is 600 seconds.'
      }
    },
    description: 'This interface provides functions for a random delay feature as required by the UK smart charging regulations The logic whether to use a random delay or not is not included in EvseManager, a different module can use this interface to enable/disable the feature during runtime and cancel a running random delay. This always applies to all connectors of this EVSE. By default, on start up, random delays are disabled.',
    vars: {
      countdown: {
        description: 'Countdown of the currently running random delay'
      }
    }
  }
} as const;
