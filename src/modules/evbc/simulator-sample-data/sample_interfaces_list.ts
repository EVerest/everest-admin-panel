// SPDX-License-Identifier: Apache-2.0
// Copyright 2020 - 2025 Pionix GmbH and Contributors to EVerest

// This file is generated, see README.md for more information.

import { EverestInterfaceDefinitionList, LocalizedString } from "../index";
import { tc } from "@/plugins/i18n";

/* eslint-disable prettier/prettier */
export default {
  ISO15118_charger: {
    cmds: {
      ac_contactor_closed: {
        arguments: {
          status: {
            description: tc('ISO15118_charger.cmds.ac_contactor_closed.arguments.status.description') as LocalizedString,
            type: 'boolean'
          }
        },
        description: tc('ISO15118_charger.cmds.ac_contactor_closed.description') as LocalizedString
      },
      authorization_response: {
        arguments: {
          authorization_status: {
            '$ref': '/authorization#/AuthorizationStatus',
            description: tc('ISO15118_charger.cmds.authorization_response.arguments.authorization_status.description') as LocalizedString,
            type: 'string'
          },
          certificate_status: {
            '$ref': '/authorization#/CertificateStatus',
            description: tc('ISO15118_charger.cmds.authorization_response.arguments.certificate_status.description') as LocalizedString,
            type: 'string'
          }
        },
        description: tc('ISO15118_charger.cmds.authorization_response.description') as LocalizedString
      },
      cable_check_finished: {
        arguments: {
          status: {
            description: tc('ISO15118_charger.cmds.cable_check_finished.arguments.status.description') as LocalizedString,
            type: 'boolean'
          }
        },
        description: tc('ISO15118_charger.cmds.cable_check_finished.description') as LocalizedString
      },
      dlink_ready: {
        arguments: {
          value: {
            description: tc('ISO15118_charger.cmds.dlink_ready.arguments.value.description') as LocalizedString,
            type: 'boolean'
          }
        },
        description: tc('ISO15118_charger.cmds.dlink_ready.description') as LocalizedString
      },
      pause_charging: {
        arguments: {
          pause: {
            description: tc('ISO15118_charger.cmds.pause_charging.arguments.pause.description') as LocalizedString,
            type: 'boolean'
          }
        },
        description: tc('ISO15118_charger.cmds.pause_charging.description') as LocalizedString
      },
      receipt_is_required: {
        arguments: {
          receipt_required: {
            description: tc('ISO15118_charger.cmds.receipt_is_required.arguments.receipt_required.description') as LocalizedString,
            type: 'boolean'
          }
        },
        description: tc('ISO15118_charger.cmds.receipt_is_required.description') as LocalizedString
      },
      reset_error: {
        description: tc('ISO15118_charger.cmds.reset_error.description') as LocalizedString
      },
      send_error: {
        arguments: {
          error: {
            '$ref': '/iso15118#/EvseError',
            description: tc('ISO15118_charger.cmds.send_error.arguments.error.description') as LocalizedString,
            type: 'string'
          }
        },
        description: tc('ISO15118_charger.cmds.send_error.description') as LocalizedString
      },
      session_setup: {
        arguments: {
          central_contract_validation_allowed: {
            description: tc('ISO15118_charger.cmds.session_setup.arguments.central_contract_validation_allowed.description') as LocalizedString,
            type: 'boolean'
          },
          payment_options: {
            description: tc('ISO15118_charger.cmds.session_setup.arguments.payment_options.description') as LocalizedString,
            items: {
              '$ref': '/iso15118#/PaymentOption',
              description: tc('ISO15118_charger.cmds.session_setup.arguments.payment_options.items.description') as LocalizedString,
              type: 'string'
            },
            maxItems: 2,
            minItems: 1,
            type: 'array'
          },
          supported_certificate_service: {
            description: tc('ISO15118_charger.cmds.session_setup.arguments.supported_certificate_service.description') as LocalizedString,
            type: 'boolean'
          }
        },
        description: tc('ISO15118_charger.cmds.session_setup.description') as LocalizedString
      },
      set_charging_parameters: {
        arguments: {
          physical_values: {
            '$ref': '/iso15118#/SetupPhysicalValues',
            description: tc('ISO15118_charger.cmds.set_charging_parameters.arguments.physical_values.description') as LocalizedString,
            type: 'object'
          }
        },
        description: tc('ISO15118_charger.cmds.set_charging_parameters.description') as LocalizedString
      },
      setup: {
        arguments: {
          debug_mode: {
            description: tc('ISO15118_charger.cmds.setup.arguments.debug_mode.description') as LocalizedString,
            type: 'boolean'
          },
          evse_id: {
            '$ref': '/iso15118#/EVSEID',
            description: tc('ISO15118_charger.cmds.setup.arguments.evse_id.description') as LocalizedString,
            type: 'object'
          },
          sae_j2847_mode: {
            '$ref': '/iso15118#/SaeJ2847BidiMode',
            description: tc('ISO15118_charger.cmds.setup.arguments.sae_j2847_mode.description') as LocalizedString,
            type: 'string'
          },
          supported_energy_transfer_modes: {
            description: tc('ISO15118_charger.cmds.setup.arguments.supported_energy_transfer_modes.description') as LocalizedString,
            items: {
              '$ref': '/iso15118#/SupportedEnergyMode',
              description: tc('ISO15118_charger.cmds.setup.arguments.supported_energy_transfer_modes.items.description') as LocalizedString,
              type: 'object'
            },
            maxItems: 6,
            minItems: 1,
            type: 'array'
          }
        },
        description: tc('ISO15118_charger.cmds.setup.description') as LocalizedString
      },
      stop_charging: {
        arguments: {
          stop: {
            description: tc('ISO15118_charger.cmds.stop_charging.arguments.stop.description') as LocalizedString,
            type: 'boolean'
          }
        },
        description: tc('ISO15118_charger.cmds.stop_charging.description') as LocalizedString
      },
      update_ac_max_current: {
        arguments: {
          max_current: {
            description: tc('ISO15118_charger.cmds.update_ac_max_current.arguments.max_current.description') as LocalizedString,
            maximum: 400,
            minimum: 0,
            type: 'number'
          }
        },
        description: tc('ISO15118_charger.cmds.update_ac_max_current.description') as LocalizedString
      },
      update_dc_maximum_limits: {
        arguments: {
          maximum_limits: {
            '$ref': '/iso15118#/DcEvseMaximumLimits',
            description: tc('ISO15118_charger.cmds.update_dc_maximum_limits.arguments.maximum_limits.description') as LocalizedString,
            type: 'object'
          }
        },
        description: tc('ISO15118_charger.cmds.update_dc_maximum_limits.description') as LocalizedString
      },
      update_dc_minimum_limits: {
        arguments: {
          minimum_limits: {
            '$ref': '/iso15118#/DcEvseMinimumLimits',
            description: tc('ISO15118_charger.cmds.update_dc_minimum_limits.arguments.minimum_limits.description') as LocalizedString,
            type: 'object'
          }
        },
        description: tc('ISO15118_charger.cmds.update_dc_minimum_limits.description') as LocalizedString
      },
      update_dc_present_values: {
        arguments: {
          present_voltage_current: {
            '$ref': '/iso15118#/DcEvsePresentVoltageCurrent',
            description: tc('ISO15118_charger.cmds.update_dc_present_values.arguments.present_voltage_current.description') as LocalizedString,
            type: 'object'
          }
        },
        description: tc('ISO15118_charger.cmds.update_dc_present_values.description') as LocalizedString
      },
      update_isolation_status: {
        arguments: {
          isolation_status: {
            '$ref': '/iso15118#/IsolationStatus',
            description: tc('ISO15118_charger.cmds.update_isolation_status.arguments.isolation_status.description') as LocalizedString,
            type: 'string'
          }
        },
        description: tc('ISO15118_charger.cmds.update_isolation_status.description') as LocalizedString
      },
      update_meter_info: {
        arguments: {
          powermeter: {
            '$ref': '/powermeter#/Powermeter',
            description: tc('ISO15118_charger.cmds.update_meter_info.arguments.powermeter.description') as LocalizedString,
            type: 'object'
          }
        },
        description: tc('ISO15118_charger.cmds.update_meter_info.description') as LocalizedString
      }
    },
    description: tc('ISO15118_charger.description') as LocalizedString,
    vars: {
      ac_close_contactor: {
        description: tc('ISO15118_charger.vars.ac_close_contactor.description') as LocalizedString,
        type: 'null'
      },
      ac_eamount: {
        description: tc('ISO15118_charger.vars.ac_eamount.description') as LocalizedString,
        maximum: 200000,
        minimum: 0,
        type: 'number'
      },
      ac_ev_max_current: {
        description: tc('ISO15118_charger.vars.ac_ev_max_current.description') as LocalizedString,
        maximum: 400,
        minimum: 0,
        type: 'number'
      },
      ac_ev_max_voltage: {
        description: tc('ISO15118_charger.vars.ac_ev_max_voltage.description') as LocalizedString,
        maximum: 1000,
        minimum: 0,
        type: 'number'
      },
      ac_ev_min_current: {
        description: tc('ISO15118_charger.vars.ac_ev_min_current.description') as LocalizedString,
        maximum: 400,
        minimum: 0,
        type: 'number'
      },
      ac_open_contactor: {
        description: tc('ISO15118_charger.vars.ac_open_contactor.description') as LocalizedString,
        type: 'null'
      },
      current_demand_finished: {
        description: tc('ISO15118_charger.vars.current_demand_finished.description') as LocalizedString,
        type: 'null'
      },
      current_demand_started: {
        description: tc('ISO15118_charger.vars.current_demand_started.description') as LocalizedString,
        type: 'null'
      },
      d20_dc_dynamic_charge_mode: {
        '$ref': '/iso15118#/DcChargeDynamicModeValues',
        description: tc('ISO15118_charger.vars.d20_dc_dynamic_charge_mode.description') as LocalizedString,
        type: 'object'
      },
      dc_bulk_charging_complete: {
        description: tc('ISO15118_charger.vars.dc_bulk_charging_complete.description') as LocalizedString,
        type: 'boolean'
      },
      dc_bulk_soc: {
        description: tc('ISO15118_charger.vars.dc_bulk_soc.description') as LocalizedString,
        maximum: 100,
        minimum: 0,
        type: 'number'
      },
      dc_charging_complete: {
        description: tc('ISO15118_charger.vars.dc_charging_complete.description') as LocalizedString,
        type: 'boolean'
      },
      dc_ev_energy_capacity: {
        description: tc('ISO15118_charger.vars.dc_ev_energy_capacity.description') as LocalizedString,
        maximum: 200000,
        minimum: 0,
        type: 'number'
      },
      dc_ev_energy_request: {
        description: tc('ISO15118_charger.vars.dc_ev_energy_request.description') as LocalizedString,
        maximum: 200000,
        minimum: 0,
        type: 'number'
      },
      dc_ev_maximum_limits: {
        '$ref': '/iso15118#/DcEvMaximumLimits',
        description: tc('ISO15118_charger.vars.dc_ev_maximum_limits.description') as LocalizedString,
        type: 'object'
      },
      dc_ev_present_voltage: {
        description: tc('ISO15118_charger.vars.dc_ev_present_voltage.description') as LocalizedString,
        type: 'number'
      },
      dc_ev_remaining_time: {
        '$ref': '/iso15118#/DcEvRemainingTime',
        description: tc('ISO15118_charger.vars.dc_ev_remaining_time.description') as LocalizedString,
        type: 'object'
      },
      dc_ev_status: {
        '$ref': '/iso15118#/DcEvStatus',
        description: tc('ISO15118_charger.vars.dc_ev_status.description') as LocalizedString,
        type: 'object'
      },
      dc_ev_target_voltage_current: {
        '$ref': '/iso15118#/DcEvTargetValues',
        description: tc('ISO15118_charger.vars.dc_ev_target_voltage_current.description') as LocalizedString,
        type: 'object'
      },
      dc_full_soc: {
        description: tc('ISO15118_charger.vars.dc_full_soc.description') as LocalizedString,
        maximum: 100,
        minimum: 0,
        type: 'number'
      },
      dc_open_contactor: {
        description: tc('ISO15118_charger.vars.dc_open_contactor.description') as LocalizedString,
        type: 'null'
      },
      departure_time: {
        description: tc('ISO15118_charger.vars.departure_time.description') as LocalizedString,
        format: 'date-time',
        type: 'string'
      },
      display_parameters: {
        '$ref': '/iso15118#/DisplayParameters',
        description: tc('ISO15118_charger.vars.display_parameters.description') as LocalizedString,
        type: 'object'
      },
      dlink_error: {
        description: tc('ISO15118_charger.vars.dlink_error.description') as LocalizedString,
        type: 'null'
      },
      dlink_pause: {
        description: tc('ISO15118_charger.vars.dlink_pause.description') as LocalizedString,
        type: 'null'
      },
      dlink_terminate: {
        description: tc('ISO15118_charger.vars.dlink_terminate.description') as LocalizedString,
        type: 'null'
      },
      ev_app_protocol: {
        '$ref': '/iso15118#/AppProtocols',
        description: tc('ISO15118_charger.vars.ev_app_protocol.description') as LocalizedString,
        type: 'object'
      },
      evcc_id: {
        description: tc('ISO15118_charger.vars.evcc_id.description') as LocalizedString,
        pattern: '^[A-F0-9]{2}(:[A-F0-9]{2}){5}$',
        type: 'string'
      },
      meter_info_requested: {
        description: tc('ISO15118_charger.vars.meter_info_requested.description') as LocalizedString,
        type: 'null'
      },
      requested_energy_transfer_mode: {
        '$ref': '/iso15118#/EnergyTransferMode',
        description: tc('ISO15118_charger.vars.requested_energy_transfer_mode.description') as LocalizedString,
        type: 'string'
      },
      require_auth_eim: {
        description: tc('ISO15118_charger.vars.require_auth_eim.description') as LocalizedString,
        type: 'null'
      },
      require_auth_pnc: {
        '$ref': '/authorization#/ProvidedIdToken',
        description: tc('ISO15118_charger.vars.require_auth_pnc.description') as LocalizedString,
        type: 'object'
      },
      sae_bidi_mode_active: {
        description: tc('ISO15118_charger.vars.sae_bidi_mode_active.description') as LocalizedString,
        type: 'null'
      },
      selected_payment_option: {
        '$ref': '/iso15118#/PaymentOption',
        description: tc('ISO15118_charger.vars.selected_payment_option.description') as LocalizedString,
        type: 'string'
      },
      selected_protocol: {
        description: tc('ISO15118_charger.vars.selected_protocol.description') as LocalizedString,
        type: 'string'
      },
      start_cable_check: {
        description: tc('ISO15118_charger.vars.start_cable_check.description') as LocalizedString,
        type: 'null'
      },
      start_pre_charge: {
        description: tc('ISO15118_charger.vars.start_pre_charge.description') as LocalizedString,
        type: 'null'
      },
      v2g_messages: {
        '$ref': '/iso15118#/V2gMessages',
        description: tc('ISO15118_charger.vars.v2g_messages.description') as LocalizedString,
        type: 'object'
      },
      v2g_setup_finished: {
        description: tc('ISO15118_charger.vars.v2g_setup_finished.description') as LocalizedString,
        type: 'null'
      }
    }
  },
  ISO15118_ev: {
    cmds: {
      enable_sae_j2847_v2g_v2h: {
        description: tc('ISO15118_ev.cmds.enable_sae_j2847_v2g_v2h.description') as LocalizedString
      },
      pause_charging: {
        description: tc('ISO15118_ev.cmds.pause_charging.description') as LocalizedString
      },
      set_bpt_dc_params: {
        arguments: {
          EvBPTParameters: {
            '$ref': '/iso15118#/DcEvBPTParameters',
            description: tc('ISO15118_ev.cmds.set_bpt_dc_params.arguments.EvBPTParameters.description') as LocalizedString,
            type: 'object'
          }
        },
        description: tc('ISO15118_ev.cmds.set_bpt_dc_params.description') as LocalizedString
      },
      set_dc_params: {
        arguments: {
          EvParameters: {
            '$ref': '/iso15118#/DcEvParameters',
            description: tc('ISO15118_ev.cmds.set_dc_params.arguments.EvParameters.description') as LocalizedString,
            type: 'object'
          }
        },
        description: tc('ISO15118_ev.cmds.set_dc_params.description') as LocalizedString
      },
      set_fault: {
        description: tc('ISO15118_ev.cmds.set_fault.description') as LocalizedString
      },
      start_charging: {
        arguments: {
          DepartureTime: {
            description: tc('ISO15118_ev.cmds.start_charging.arguments.DepartureTime.description') as LocalizedString,
            type: 'number'
          },
          EAmount: {
            description: tc('ISO15118_ev.cmds.start_charging.arguments.EAmount.description') as LocalizedString,
            type: 'number'
          },
          EnergyTransferMode: {
            '$ref': '/iso15118#/EnergyTransferMode',
            description: tc('ISO15118_ev.cmds.start_charging.arguments.EnergyTransferMode.description') as LocalizedString,
            type: 'string'
          }
        },
        description: tc('ISO15118_ev.cmds.start_charging.description') as LocalizedString,
        result: {
          description: tc('ISO15118_ev.cmds.start_charging.result.description') as LocalizedString,
          type: 'boolean'
        }
      },
      stop_charging: {
        description: tc('ISO15118_ev.cmds.stop_charging.description') as LocalizedString
      }
    },
    description: tc('ISO15118_ev.description') as LocalizedString,
    vars: {
      AC_EVPowerReady: {
        description: tc('ISO15118_ev.vars.AC_EVPowerReady.description') as LocalizedString,
        type: 'boolean'
      },
      AC_EVSEMaxCurrent: {
        description: tc('ISO15118_ev.vars.AC_EVSEMaxCurrent.description') as LocalizedString,
        maximum: 400,
        minimum: 0,
        type: 'number'
      },
      AC_StopFromCharger: {
        description: tc('ISO15118_ev.vars.AC_StopFromCharger.description') as LocalizedString,
        type: 'null'
      },
      DC_PowerOn: {
        description: tc('ISO15118_ev.vars.DC_PowerOn.description') as LocalizedString,
        type: 'null'
      },
      V2G_Session_Finished: {
        description: tc('ISO15118_ev.vars.V2G_Session_Finished.description') as LocalizedString,
        type: 'null'
      },
      pause_from_charger: {
        description: tc('ISO15118_ev.vars.pause_from_charger.description') as LocalizedString,
        type: 'null'
      }
    }
  },
  ISO15118_vas: {
    cmds: {
      get_service_parameters: {
        arguments: {
          service_id: {
            description: tc('ISO15118_vas.cmds.get_service_parameters.arguments.service_id.description') as LocalizedString,
            type: 'integer'
          }
        },
        description: tc('ISO15118_vas.cmds.get_service_parameters.description') as LocalizedString,
        result: {
          description: tc('ISO15118_vas.cmds.get_service_parameters.result.description') as LocalizedString,
          items: { '$ref': '/iso15118_vas#/ParameterSet', type: 'object' },
          type: 'array'
        }
      },
      selected_services: {
        arguments: {
          selected_services: {
            description: tc('ISO15118_vas.cmds.selected_services.arguments.selected_services.description') as LocalizedString,
            items: {
              '$ref': '/iso15118_vas#/SelectedService',
              type: 'object'
            },
            type: 'array'
          }
        },
        description: tc('ISO15118_vas.cmds.selected_services.description') as LocalizedString
      }
    },
    description: tc('ISO15118_vas.description') as LocalizedString,
    vars: {
      offered_vas: {
        '$ref': '/iso15118_vas#/OfferedServices',
        description: tc('ISO15118_vas.vars.offered_vas.description') as LocalizedString,
        type: 'object'
      }
    }
  },
  ac_rcd: {
    cmds: {
      reset: {
        description: tc('ac_rcd.cmds.reset.description') as LocalizedString,
        result: {
          description: tc('ac_rcd.cmds.reset.result.description') as LocalizedString,
          type: 'boolean'
        }
      },
      self_test: {
        description: tc('ac_rcd.cmds.self_test.description') as LocalizedString
      }
    },
    description: tc('ac_rcd.description') as LocalizedString,
    errors: [ { reference: '/errors/ac_rcd' } ],
    vars: {
      rcd_current_mA: {
        description: tc('ac_rcd.vars.rcd_current_mA.description') as LocalizedString,
        type: 'number'
      }
    }
  },
  auth: {
    cmds: {
      set_connection_timeout: {
        arguments: {
          connection_timeout: {
            description: tc('auth.cmds.set_connection_timeout.arguments.connection_timeout.description') as LocalizedString,
            maximum: 300,
            minimum: 10,
            type: 'integer'
          }
        },
        description: tc('auth.cmds.set_connection_timeout.description') as LocalizedString
      },
      set_master_pass_group_id: {
        arguments: {
          master_pass_group_id: {
            description: tc('auth.cmds.set_master_pass_group_id.arguments.master_pass_group_id.description') as LocalizedString,
            maxLength: 36,
            type: 'string'
          }
        },
        description: tc('auth.cmds.set_master_pass_group_id.description') as LocalizedString
      },
      withdraw_authorization: {
        arguments: {
          request: {
            '$ref': '/authorization#/WithdrawAuthorizationRequest',
            description: tc('auth.cmds.withdraw_authorization.arguments.request.description') as LocalizedString,
            type: 'object'
          }
        },
        description: tc('auth.cmds.withdraw_authorization.description') as LocalizedString,
        result: {
          '$ref': '/authorization#/WithdrawAuthorizationResult',
          description: tc('auth.cmds.withdraw_authorization.result.description') as LocalizedString,
          type: 'string'
        }
      }
    },
    description: tc('auth.description') as LocalizedString,
    errors: [ { reference: '/errors/generic' } ],
    vars: {
      token_validation_status: {
        '$ref': '/authorization#/TokenValidationStatusMessage',
        description: tc('auth.vars.token_validation_status.description') as LocalizedString,
        type: 'object'
      }
    }
  },
  auth_token_provider: {
    description: tc('auth_token_provider.description') as LocalizedString,
    errors: [ { reference: '/errors/generic' } ],
    vars: {
      provided_token: {
        '$ref': '/authorization#/ProvidedIdToken',
        description: tc('auth_token_provider.vars.provided_token.description') as LocalizedString,
        type: 'object'
      }
    }
  },
  auth_token_validator: {
    cmds: {
      validate_token: {
        arguments: {
          provided_token: {
            '$ref': '/authorization#/ProvidedIdToken',
            description: tc('auth_token_validator.cmds.validate_token.arguments.provided_token.description') as LocalizedString,
            type: 'object'
          }
        },
        description: tc('auth_token_validator.cmds.validate_token.description') as LocalizedString,
        result: {
          '$ref': '/authorization#/ValidationResult',
          description: tc('auth_token_validator.cmds.validate_token.result.description') as LocalizedString,
          type: 'object'
        }
      }
    },
    description: tc('auth_token_validator.description') as LocalizedString,
    errors: [ { reference: '/errors/generic' } ],
    vars: {
      validate_result_update: {
        '$ref': '/authorization#/ValidationResultUpdate',
        description: tc('auth_token_validator.vars.validate_result_update.description') as LocalizedString,
        type: 'object'
      }
    }
  },
  bank_session_token_provider: {
    cmds: {
      get_bank_session_token: {
        description: tc('bank_session_token_provider.cmds.get_bank_session_token.description') as LocalizedString,
        result: {
          '$ref': '/payment_terminal#/BankSessionToken',
          description: tc('bank_session_token_provider.cmds.get_bank_session_token.result.description') as LocalizedString,
          type: 'object'
        }
      }
    },
    description: tc('bank_session_token_provider.description') as LocalizedString
  },
  car_simulator: {
    cmds: {
      enable: {
        arguments: {
          value: {
            description: tc('car_simulator.cmds.enable.arguments.value.description') as LocalizedString,
            type: 'boolean'
          }
        },
        description: tc('car_simulator.cmds.enable.description') as LocalizedString
      },
      execute_charging_session: {
        arguments: {
          value: {
            description: tc('car_simulator.cmds.execute_charging_session.arguments.value.description') as LocalizedString,
            type: 'string'
          }
        },
        description: tc('car_simulator.cmds.execute_charging_session.description') as LocalizedString
      }
    },
    description: tc('car_simulator.description') as LocalizedString,
    vars: {
      enabled: {
        description: tc('car_simulator.vars.enabled.description') as LocalizedString,
        type: 'boolean'
      }
    }
  },
  connector_lock: {
    cmds: {
      lock: {
        description: tc('connector_lock.cmds.lock.description') as LocalizedString
      },
      unlock: {
        description: tc('connector_lock.cmds.unlock.description') as LocalizedString
      }
    },
    description: tc('connector_lock.description') as LocalizedString,
    errors: [ { reference: '/errors/connector_lock' } ]
  },
  debug_json: {
    description: tc('debug_json.description') as LocalizedString,
    vars: {
      debug_json: {
        description: tc('debug_json.vars.debug_json.description') as LocalizedString,
        type: 'object'
      },
      title: {
        description: tc('debug_json.vars.title.description') as LocalizedString,
        type: 'string'
      }
    }
  },
  display_message: {
    cmds: {
      clear_display_message: {
        arguments: {
          request: {
            '$ref': '/display_message#/ClearDisplayMessageRequest',
            description: tc('display_message.cmds.clear_display_message.arguments.request.description') as LocalizedString,
            type: 'object'
          }
        },
        description: tc('display_message.cmds.clear_display_message.description') as LocalizedString,
        result: {
          '$ref': '/display_message#/ClearDisplayMessageResponse',
          description: tc('display_message.cmds.clear_display_message.result.description') as LocalizedString,
          type: 'object'
        }
      },
      get_display_messages: {
        arguments: {
          request: {
            '$ref': '/display_message#/GetDisplayMessageRequest',
            description: tc('display_message.cmds.get_display_messages.arguments.request.description') as LocalizedString,
            type: 'object'
          }
        },
        description: tc('display_message.cmds.get_display_messages.description') as LocalizedString,
        result: {
          '$ref': '/display_message#/GetDisplayMessageResponse',
          description: tc('display_message.cmds.get_display_messages.result.description') as LocalizedString,
          type: 'object'
        }
      },
      set_display_message: {
        arguments: {
          request: {
            description: tc('display_message.cmds.set_display_message.arguments.request.description') as LocalizedString,
            items: {
              '$ref': '/display_message#/DisplayMessage',
              description: tc('display_message.cmds.set_display_message.arguments.request.items.description') as LocalizedString,
              type: 'object'
            },
            type: 'array'
          }
        },
        description: tc('display_message.cmds.set_display_message.description') as LocalizedString,
        result: {
          '$ref': '/display_message#/SetDisplayMessageResponse',
          description: tc('display_message.cmds.set_display_message.result.description') as LocalizedString,
          type: 'object'
        }
      }
    },
    description: tc('display_message.description') as LocalizedString
  },
  empty: { description: tc('empty.description') as LocalizedString },
  energy: {
    cmds: {
      enforce_limits: {
        arguments: {
          value: {
            '$ref': '/energy#/EnforcedLimits',
            description: tc('energy.cmds.enforce_limits.arguments.value.description') as LocalizedString,
            type: 'object'
          }
        },
        description: tc('energy.cmds.enforce_limits.description') as LocalizedString
      }
    },
    description: tc('energy.description') as LocalizedString,
    vars: {
      energy_flow_request: {
        '$ref': '/energy#/EnergyFlowRequest',
        description: tc('energy.vars.energy_flow_request.description') as LocalizedString,
        type: 'object'
      }
    }
  },
  energy_manager: {
    description: tc('energy_manager.description') as LocalizedString,
    vars: {}
  },
  energy_price_information: {
    description: tc('energy_price_information.description') as LocalizedString,
    vars: {
      energy_pricing: {
        '$ref': '/energy_price_information#/EnergyPriceSchedule',
        description: tc('energy_price_information.vars.energy_pricing.description') as LocalizedString,
        type: 'object'
      }
    }
  },
  error_history: {
    cmds: {
      get_errors: {
        arguments: {
          filters: {
            '$ref': '/error_history#/FilterArguments',
            description: tc('error_history.cmds.get_errors.arguments.filters.description') as LocalizedString,
            type: 'object'
          }
        },
        description: tc('error_history.cmds.get_errors.description') as LocalizedString,
        result: {
          description: tc('error_history.cmds.get_errors.result.description') as LocalizedString,
          items: { '$ref': '/error_history#/ErrorObject' },
          type: 'array'
        }
      }
    },
    description: tc('error_history.description') as LocalizedString
  },
  ev_board_support: {
    cmds: {
      allow_power_on: {
        arguments: {
          value: {
            description: tc('ev_board_support.cmds.allow_power_on.arguments.value.description') as LocalizedString,
            type: 'boolean'
          }
        },
        description: tc('ev_board_support.cmds.allow_power_on.description') as LocalizedString
      },
      diode_fail: {
        arguments: {
          value: {
            description: tc('ev_board_support.cmds.diode_fail.arguments.value.description') as LocalizedString,
            type: 'boolean'
          }
        },
        description: tc('ev_board_support.cmds.diode_fail.description') as LocalizedString
      },
      enable: {
        arguments: {
          value: {
            description: tc('ev_board_support.cmds.enable.arguments.value.description') as LocalizedString,
            type: 'boolean'
          }
        },
        description: tc('ev_board_support.cmds.enable.description') as LocalizedString
      },
      set_ac_max_current: {
        arguments: {
          current: {
            description: tc('ev_board_support.cmds.set_ac_max_current.arguments.current.description') as LocalizedString,
            type: 'number'
          }
        },
        description: tc('ev_board_support.cmds.set_ac_max_current.description') as LocalizedString
      },
      set_cp_state: {
        arguments: {
          cp_state: {
            '$ref': '/ev_board_support#/EvCpState',
            description: tc('ev_board_support.cmds.set_cp_state.arguments.cp_state.description') as LocalizedString,
            type: 'string'
          }
        },
        description: tc('ev_board_support.cmds.set_cp_state.description') as LocalizedString
      },
      set_rcd_error: {
        arguments: {
          rcd_current_mA: {
            description: tc('ev_board_support.cmds.set_rcd_error.arguments.rcd_current_mA.description') as LocalizedString,
            type: 'number'
          }
        },
        description: tc('ev_board_support.cmds.set_rcd_error.description') as LocalizedString
      },
      set_three_phases: {
        arguments: {
          three_phases: {
            description: tc('ev_board_support.cmds.set_three_phases.arguments.three_phases.description') as LocalizedString,
            type: 'boolean'
          }
        },
        description: tc('ev_board_support.cmds.set_three_phases.description') as LocalizedString
      }
    },
    description: tc('ev_board_support.description') as LocalizedString,
    errors: [ { reference: '/errors/generic' } ],
    vars: {
      bsp_event: {
        '$ref': '/board_support_common#/BspEvent',
        description: tc('ev_board_support.vars.bsp_event.description') as LocalizedString,
        type: 'object'
      },
      bsp_measurement: {
        '$ref': '/board_support_common#/BspMeasurement',
        description: tc('ev_board_support.vars.bsp_measurement.description') as LocalizedString,
        type: 'object'
      },
      ev_info: {
        '$ref': '/evse_manager#/EVInfo',
        description: tc('ev_board_support.vars.ev_info.description') as LocalizedString,
        type: 'object'
      }
    }
  },
  ev_manager: {
    cmds: {},
    description: tc('ev_manager.description') as LocalizedString,
    errors: [ { reference: '/errors/evse_manager' } ],
    vars: {
      bsp_event: {
        '$ref': '/board_support_common#/BspEvent',
        description: tc('ev_manager.vars.bsp_event.description') as LocalizedString,
        type: 'object'
      },
      ev_info: {
        '$ref': '/evse_manager#/EVInfo',
        description: tc('ev_manager.vars.ev_info.description') as LocalizedString,
        type: 'object'
      }
    }
  },
  ev_slac: {
    cmds: {
      reset: {
        description: tc('ev_slac.cmds.reset.description') as LocalizedString
      },
      trigger_matching: {
        description: tc('ev_slac.cmds.trigger_matching.description') as LocalizedString,
        result: {
          description: tc('ev_slac.cmds.trigger_matching.result.description') as LocalizedString,
          type: 'boolean'
        }
      }
    },
    description: tc('ev_slac.description') as LocalizedString,
    errors: [ { reference: '/errors/generic' } ],
    vars: {
      dlink_ready: {
        description: tc('ev_slac.vars.dlink_ready.description') as LocalizedString,
        type: 'boolean'
      },
      ev_mac_address: {
        description: tc('ev_slac.vars.ev_mac_address.description') as LocalizedString,
        pattern: '^[A-F0-9]{2}(:[A-F0-9]{2}){5}$',
        type: 'string'
      },
      state: {
        description: tc('ev_slac.vars.state.description') as LocalizedString,
        enum: [ 'UNMATCHED', 'MATCHING', 'MATCHED' ],
        type: 'string'
      }
    }
  },
  evse_board_support: {
    cmds: {
      ac_read_pp_ampacity: {
        description: tc('evse_board_support.cmds.ac_read_pp_ampacity.description') as LocalizedString,
        result: {
          '$ref': '/board_support_common#/ProximityPilot',
          description: tc('evse_board_support.cmds.ac_read_pp_ampacity.result.description') as LocalizedString,
          type: 'object'
        }
      },
      ac_set_overcurrent_limit_A: {
        arguments: {
          value: {
            description: tc('evse_board_support.cmds.ac_set_overcurrent_limit_A.arguments.value.description') as LocalizedString,
            type: 'number'
          }
        },
        description: tc('evse_board_support.cmds.ac_set_overcurrent_limit_A.description') as LocalizedString
      },
      ac_switch_three_phases_while_charging: {
        arguments: {
          value: {
            description: tc('evse_board_support.cmds.ac_switch_three_phases_while_charging.arguments.value.description') as LocalizedString,
            type: 'boolean'
          }
        },
        description: tc('evse_board_support.cmds.ac_switch_three_phases_while_charging.description') as LocalizedString
      },
      allow_power_on: {
        arguments: {
          value: {
            '$ref': '/evse_board_support#/PowerOnOff',
            description: tc('evse_board_support.cmds.allow_power_on.arguments.value.description') as LocalizedString,
            type: 'object'
          }
        },
        description: tc('evse_board_support.cmds.allow_power_on.description') as LocalizedString
      },
      enable: {
        arguments: {
          value: {
            description: tc('evse_board_support.cmds.enable.arguments.value.description') as LocalizedString,
            type: 'boolean'
          }
        },
        description: tc('evse_board_support.cmds.enable.description') as LocalizedString
      },
      evse_replug: {
        arguments: {
          value: {
            description: tc('evse_board_support.cmds.evse_replug.arguments.value.description') as LocalizedString,
            type: 'integer'
          }
        },
        description: tc('evse_board_support.cmds.evse_replug.description') as LocalizedString
      },
      pwm_F: {
        description: tc('evse_board_support.cmds.pwm_F.description') as LocalizedString
      },
      pwm_off: {
        description: tc('evse_board_support.cmds.pwm_off.description') as LocalizedString
      },
      pwm_on: {
        arguments: {
          value: {
            description: tc('evse_board_support.cmds.pwm_on.arguments.value.description') as LocalizedString,
            maximum: 100,
            minimum: 0,
            type: 'number'
          }
        },
        description: tc('evse_board_support.cmds.pwm_on.description') as LocalizedString
      }
    },
    description: tc('evse_board_support.description') as LocalizedString,
    errors: [
      { reference: '/errors/evse_board_support' },
      { reference: '/errors/ac_rcd' }
    ],
    vars: {
      ac_nr_of_phases_available: {
        description: tc('evse_board_support.vars.ac_nr_of_phases_available.description') as LocalizedString,
        maximum: 3,
        minimum: 1,
        type: 'integer'
      },
      ac_pp_ampacity: {
        '$ref': '/board_support_common#/ProximityPilot',
        description: tc('evse_board_support.vars.ac_pp_ampacity.description') as LocalizedString,
        type: 'object'
      },
      capabilities: {
        '$ref': '/evse_board_support#/HardwareCapabilities',
        description: tc('evse_board_support.vars.capabilities.description') as LocalizedString,
        type: 'object'
      },
      event: {
        '$ref': '/board_support_common#/BspEvent',
        description: tc('evse_board_support.vars.event.description') as LocalizedString,
        type: 'object'
      },
      request_stop_transaction: {
        '$ref': '/evse_manager#/StopTransactionRequest',
        description: tc('evse_board_support.vars.request_stop_transaction.description') as LocalizedString,
        type: 'object'
      },
      telemetry: {
        '$ref': '/evse_board_support#/Telemetry',
        description: tc('evse_board_support.vars.telemetry.description') as LocalizedString,
        type: 'object'
      }
    }
  },
  evse_manager: {
    cmds: {
      authorize_response: {
        arguments: {
          provided_token: {
            '$ref': '/authorization#/ProvidedIdToken',
            description: tc('evse_manager.cmds.authorize_response.arguments.provided_token.description') as LocalizedString,
            type: 'object'
          },
          validation_result: {
            '$ref': '/authorization#/ValidationResult',
            description: tc('evse_manager.cmds.authorize_response.arguments.validation_result.description') as LocalizedString,
            type: 'object'
          }
        },
        description: tc('evse_manager.cmds.authorize_response.description') as LocalizedString
      },
      cancel_reservation: {
        description: tc('evse_manager.cmds.cancel_reservation.description') as LocalizedString
      },
      enable_disable: {
        arguments: {
          cmd_source: {
            '$ref': '/evse_manager#/EnableDisableSource',
            description: tc('evse_manager.cmds.enable_disable.arguments.cmd_source.description') as LocalizedString,
            type: 'object'
          },
          connector_id: {
            description: tc('evse_manager.cmds.enable_disable.arguments.connector_id.description') as LocalizedString,
            type: 'integer'
          }
        },
        description: tc('evse_manager.cmds.enable_disable.description') as LocalizedString,
        result: {
          description: tc('evse_manager.cmds.enable_disable.result.description') as LocalizedString,
          type: 'boolean'
        }
      },
      external_ready_to_start_charging: {
        description: tc('evse_manager.cmds.external_ready_to_start_charging.description') as LocalizedString,
        result: {
          description: tc('evse_manager.cmds.external_ready_to_start_charging.result.description') as LocalizedString,
          type: 'boolean'
        }
      },
      force_unlock: {
        arguments: {
          connector_id: {
            description: tc('evse_manager.cmds.force_unlock.arguments.connector_id.description') as LocalizedString,
            type: 'integer'
          }
        },
        description: tc('evse_manager.cmds.force_unlock.description') as LocalizedString,
        result: {
          description: tc('evse_manager.cmds.force_unlock.result.description') as LocalizedString,
          type: 'boolean'
        }
      },
      get_evse: {
        description: tc('evse_manager.cmds.get_evse.description') as LocalizedString,
        result: {
          '$ref': '/evse_manager#/Evse',
          description: tc('evse_manager.cmds.get_evse.result.description') as LocalizedString,
          type: 'object'
        }
      },
      pause_charging: {
        description: tc('evse_manager.cmds.pause_charging.description') as LocalizedString,
        result: {
          description: tc('evse_manager.cmds.pause_charging.result.description') as LocalizedString,
          type: 'boolean'
        }
      },
      reserve: {
        arguments: {
          reservation_id: {
            description: tc('evse_manager.cmds.reserve.arguments.reservation_id.description') as LocalizedString,
            type: 'integer'
          }
        },
        description: tc('evse_manager.cmds.reserve.description') as LocalizedString,
        result: {
          description: tc('evse_manager.cmds.reserve.result.description') as LocalizedString,
          type: 'boolean'
        }
      },
      resume_charging: {
        description: tc('evse_manager.cmds.resume_charging.description') as LocalizedString,
        result: {
          description: tc('evse_manager.cmds.resume_charging.result.description') as LocalizedString,
          type: 'boolean'
        }
      },
      set_faulted: {
        description: tc('evse_manager.cmds.set_faulted.description') as LocalizedString
      },
      set_plug_and_charge_configuration: {
        arguments: {
          plug_and_charge_configuration: {
            '$ref': '/evse_manager#/PlugAndChargeConfiguration',
            description: tc('evse_manager.cmds.set_plug_and_charge_configuration.arguments.plug_and_charge_configuration.description') as LocalizedString,
            type: 'object'
          }
        },
        description: tc('evse_manager.cmds.set_plug_and_charge_configuration.description') as LocalizedString
      },
      stop_transaction: {
        arguments: {
          request: {
            '$ref': '/evse_manager#/StopTransactionRequest',
            description: tc('evse_manager.cmds.stop_transaction.arguments.request.description') as LocalizedString,
            type: 'object'
          }
        },
        description: tc('evse_manager.cmds.stop_transaction.description') as LocalizedString,
        result: {
          description: tc('evse_manager.cmds.stop_transaction.result.description') as LocalizedString,
          type: 'boolean'
        }
      },
      withdraw_authorization: {
        description: tc('evse_manager.cmds.withdraw_authorization.description') as LocalizedString
      }
    },
    description: tc('evse_manager.description') as LocalizedString,
    errors: [ { reference: '/errors/evse_manager' } ],
    vars: {
      car_manufacturer: {
        '$ref': '/evse_manager#/CarManufacturer',
        description: tc('evse_manager.vars.car_manufacturer.description') as LocalizedString,
        type: 'string'
      },
      enforced_limits: {
        '$ref': '/energy#/EnforcedLimits',
        description: tc('evse_manager.vars.enforced_limits.description') as LocalizedString,
        type: 'object'
      },
      ev_info: {
        '$ref': '/evse_manager#/EVInfo',
        description: tc('evse_manager.vars.ev_info.description') as LocalizedString,
        type: 'object'
      },
      evse_id: {
        description: tc('evse_manager.vars.evse_id.description') as LocalizedString,
        type: 'string'
      },
      hw_capabilities: {
        '$ref': '/evse_board_support#/HardwareCapabilities',
        description: tc('evse_manager.vars.hw_capabilities.description') as LocalizedString,
        type: 'object'
      },
      limits: {
        '$ref': '/evse_manager#/Limits',
        description: tc('evse_manager.vars.limits.description') as LocalizedString,
        type: 'object'
      },
      powermeter: {
        '$ref': '/powermeter#/Powermeter',
        description: tc('evse_manager.vars.powermeter.description') as LocalizedString,
        type: 'object'
      },
      powermeter_public_key_ocmf: {
        description: tc('evse_manager.vars.powermeter_public_key_ocmf.description') as LocalizedString,
        type: 'string'
      },
      ready: {
        description: tc('evse_manager.vars.ready.description') as LocalizedString,
        type: 'boolean'
      },
      selected_protocol: {
        description: tc('evse_manager.vars.selected_protocol.description') as LocalizedString,
        type: 'string'
      },
      session_event: {
        '$ref': '/evse_manager#/SessionEvent',
        description: tc('evse_manager.vars.session_event.description') as LocalizedString,
        type: 'object'
      },
      telemetry: {
        '$ref': '/evse_board_support#/Telemetry',
        description: tc('evse_manager.vars.telemetry.description') as LocalizedString,
        type: 'object'
      },
      waiting_for_external_ready: {
        description: tc('evse_manager.vars.waiting_for_external_ready.description') as LocalizedString,
        type: 'boolean'
      }
    }
  },
  evse_security: {
    cmds: {
      delete_certificate: {
        arguments: {
          certificate_hash_data: {
            '$ref': '/evse_security#/CertificateHashData',
            description: tc('evse_security.cmds.delete_certificate.arguments.certificate_hash_data.description') as LocalizedString,
            type: 'object'
          }
        },
        description: tc('evse_security.cmds.delete_certificate.description') as LocalizedString,
        result: {
          '$ref': '/evse_security#/DeleteCertificateResult',
          description: tc('evse_security.cmds.delete_certificate.result.description') as LocalizedString,
          type: 'string'
        }
      },
      generate_certificate_signing_request: {
        arguments: {
          certificate_type: {
            '$ref': '/evse_security#/LeafCertificateType',
            description: tc('evse_security.cmds.generate_certificate_signing_request.arguments.certificate_type.description') as LocalizedString,
            type: 'string'
          },
          common: {
            description: tc('evse_security.cmds.generate_certificate_signing_request.arguments.common.description') as LocalizedString,
            type: 'string'
          },
          country: {
            description: tc('evse_security.cmds.generate_certificate_signing_request.arguments.country.description') as LocalizedString,
            type: 'string'
          },
          organization: {
            description: tc('evse_security.cmds.generate_certificate_signing_request.arguments.organization.description') as LocalizedString,
            type: 'string'
          },
          use_tpm: {
            description: tc('evse_security.cmds.generate_certificate_signing_request.arguments.use_tpm.description') as LocalizedString,
            type: 'boolean'
          }
        },
        description: tc('evse_security.cmds.generate_certificate_signing_request.description') as LocalizedString,
        result: {
          '$ref': '/evse_security#/GetCertificateSignRequestResult',
          description: tc('evse_security.cmds.generate_certificate_signing_request.result.description') as LocalizedString,
          type: 'object'
        }
      },
      get_all_valid_certificates_info: {
        arguments: {
          certificate_type: {
            '$ref': '/evse_security#/LeafCertificateType',
            description: tc('evse_security.cmds.get_all_valid_certificates_info.arguments.certificate_type.description') as LocalizedString,
            type: 'string'
          },
          encoding: {
            '$ref': '/evse_security#/EncodingFormat',
            description: tc('evse_security.cmds.get_all_valid_certificates_info.arguments.encoding.description') as LocalizedString,
            type: 'string'
          },
          include_ocsp: {
            description: tc('evse_security.cmds.get_all_valid_certificates_info.arguments.include_ocsp.description') as LocalizedString,
            type: 'boolean'
          }
        },
        description: tc('evse_security.cmds.get_all_valid_certificates_info.description') as LocalizedString,
        result: {
          '$ref': '/evse_security#/GetCertificateFullInfoResult',
          description: tc('evse_security.cmds.get_all_valid_certificates_info.result.description') as LocalizedString,
          type: 'object'
        }
      },
      get_installed_certificates: {
        arguments: {
          certificate_types: {
            description: tc('evse_security.cmds.get_installed_certificates.arguments.certificate_types.description') as LocalizedString,
            items: {
              '$ref': '/evse_security#/CertificateType',
              minimum: 0,
              type: 'string'
            },
            type: 'array'
          }
        },
        description: tc('evse_security.cmds.get_installed_certificates.description') as LocalizedString,
        result: {
          '$ref': '/evse_security#/GetInstalledCertificatesResult',
          description: tc('evse_security.cmds.get_installed_certificates.result.description') as LocalizedString,
          type: 'object'
        }
      },
      get_leaf_certificate_info: {
        arguments: {
          certificate_type: {
            '$ref': '/evse_security#/LeafCertificateType',
            description: tc('evse_security.cmds.get_leaf_certificate_info.arguments.certificate_type.description') as LocalizedString,
            type: 'string'
          },
          encoding: {
            '$ref': '/evse_security#/EncodingFormat',
            description: tc('evse_security.cmds.get_leaf_certificate_info.arguments.encoding.description') as LocalizedString,
            type: 'string'
          },
          include_ocsp: {
            description: tc('evse_security.cmds.get_leaf_certificate_info.arguments.include_ocsp.description') as LocalizedString,
            type: 'boolean'
          }
        },
        description: tc('evse_security.cmds.get_leaf_certificate_info.description') as LocalizedString,
        result: {
          '$ref': '/evse_security#/GetCertificateInfoResult',
          description: tc('evse_security.cmds.get_leaf_certificate_info.result.description') as LocalizedString,
          type: 'object'
        }
      },
      get_leaf_expiry_days_count: {
        arguments: {
          certificate_type: {
            '$ref': '/evse_security#/LeafCertificateType',
            description: tc('evse_security.cmds.get_leaf_expiry_days_count.arguments.certificate_type.description') as LocalizedString,
            type: 'string'
          }
        },
        description: tc('evse_security.cmds.get_leaf_expiry_days_count.description') as LocalizedString,
        result: {
          description: tc('evse_security.cmds.get_leaf_expiry_days_count.result.description') as LocalizedString,
          type: 'integer'
        }
      },
      get_mo_ocsp_request_data: {
        arguments: {
          certificate_chain: {
            description: tc('evse_security.cmds.get_mo_ocsp_request_data.arguments.certificate_chain.description') as LocalizedString,
            type: 'string'
          }
        },
        description: tc('evse_security.cmds.get_mo_ocsp_request_data.description') as LocalizedString,
        result: {
          '$ref': '/evse_security#/OCSPRequestDataList',
          description: tc('evse_security.cmds.get_mo_ocsp_request_data.result.description') as LocalizedString,
          type: 'object'
        }
      },
      get_v2g_ocsp_request_data: {
        description: tc('evse_security.cmds.get_v2g_ocsp_request_data.description') as LocalizedString,
        result: {
          '$ref': '/evse_security#/OCSPRequestDataList',
          description: tc('evse_security.cmds.get_v2g_ocsp_request_data.result.description') as LocalizedString,
          type: 'object'
        }
      },
      get_verify_file: {
        arguments: {
          certificate_type: {
            '$ref': '/evse_security#/CaCertificateType',
            description: tc('evse_security.cmds.get_verify_file.arguments.certificate_type.description') as LocalizedString,
            type: 'string'
          }
        },
        description: tc('evse_security.cmds.get_verify_file.description') as LocalizedString,
        result: {
          description: tc('evse_security.cmds.get_verify_file.result.description') as LocalizedString,
          type: 'string'
        }
      },
      get_verify_location: {
        arguments: {
          certificate_type: {
            '$ref': '/evse_security#/CaCertificateType',
            description: tc('evse_security.cmds.get_verify_location.arguments.certificate_type.description') as LocalizedString,
            type: 'string'
          }
        },
        description: tc('evse_security.cmds.get_verify_location.description') as LocalizedString,
        result: {
          description: tc('evse_security.cmds.get_verify_location.result.description') as LocalizedString,
          type: 'string'
        }
      },
      install_ca_certificate: {
        arguments: {
          certificate: {
            description: tc('evse_security.cmds.install_ca_certificate.arguments.certificate.description') as LocalizedString,
            type: 'string'
          },
          certificate_type: {
            '$ref': '/evse_security#/CaCertificateType',
            description: tc('evse_security.cmds.install_ca_certificate.arguments.certificate_type.description') as LocalizedString,
            type: 'string'
          }
        },
        description: tc('evse_security.cmds.install_ca_certificate.description') as LocalizedString,
        result: {
          '$ref': '/evse_security#/InstallCertificateResult',
          description: tc('evse_security.cmds.install_ca_certificate.result.description') as LocalizedString,
          type: 'string'
        }
      },
      is_ca_certificate_installed: {
        arguments: {
          certificate_type: {
            '$ref': '/evse_security#/CaCertificateType',
            description: tc('evse_security.cmds.is_ca_certificate_installed.arguments.certificate_type.description') as LocalizedString,
            type: 'string'
          }
        },
        description: tc('evse_security.cmds.is_ca_certificate_installed.description') as LocalizedString,
        result: {
          description: tc('evse_security.cmds.is_ca_certificate_installed.result.description') as LocalizedString,
          type: 'boolean'
        }
      },
      update_leaf_certificate: {
        arguments: {
          certificate_chain: {
            description: tc('evse_security.cmds.update_leaf_certificate.arguments.certificate_chain.description') as LocalizedString,
            type: 'string'
          },
          certificate_type: {
            '$ref': '/evse_security#/LeafCertificateType',
            description: tc('evse_security.cmds.update_leaf_certificate.arguments.certificate_type.description') as LocalizedString,
            type: 'string'
          }
        },
        description: tc('evse_security.cmds.update_leaf_certificate.description') as LocalizedString,
        result: {
          '$ref': '/evse_security#/InstallCertificateResult',
          description: tc('evse_security.cmds.update_leaf_certificate.result.description') as LocalizedString,
          type: 'string'
        }
      },
      update_ocsp_cache: {
        arguments: {
          certificate_hash_data: {
            '$ref': '/evse_security#/CertificateHashData',
            description: tc('evse_security.cmds.update_ocsp_cache.arguments.certificate_hash_data.description') as LocalizedString,
            type: 'object'
          },
          ocsp_response: {
            description: tc('evse_security.cmds.update_ocsp_cache.arguments.ocsp_response.description') as LocalizedString,
            type: 'string'
          }
        },
        description: tc('evse_security.cmds.update_ocsp_cache.description') as LocalizedString
      },
      verify_certificate: {
        arguments: {
          certificate_chain: {
            description: tc('evse_security.cmds.verify_certificate.arguments.certificate_chain.description') as LocalizedString,
            type: 'string'
          },
          certificate_types: {
            description: tc('evse_security.cmds.verify_certificate.arguments.certificate_types.description') as LocalizedString,
            items: {
              '$ref': '/evse_security#/LeafCertificateType',
              minimum: 1,
              type: 'string'
            },
            type: 'array'
          }
        },
        description: tc('evse_security.cmds.verify_certificate.description') as LocalizedString,
        result: {
          '$ref': '/evse_security#/CertificateValidationResult',
          description: tc('evse_security.cmds.verify_certificate.result.description') as LocalizedString,
          type: 'string'
        }
      },
      verify_file_signature: {
        arguments: {
          file_path: {
            description: tc('evse_security.cmds.verify_file_signature.arguments.file_path.description') as LocalizedString,
            type: 'string'
          },
          signature: {
            description: tc('evse_security.cmds.verify_file_signature.arguments.signature.description') as LocalizedString,
            type: 'string'
          },
          signing_certificate: {
            description: tc('evse_security.cmds.verify_file_signature.arguments.signing_certificate.description') as LocalizedString,
            type: 'string'
          }
        },
        description: tc('evse_security.cmds.verify_file_signature.description') as LocalizedString,
        result: {
          description: tc('evse_security.cmds.verify_file_signature.result.description') as LocalizedString,
          type: 'boolean'
        }
      }
    },
    description: tc('evse_security.description') as LocalizedString,
    vars: {
      certificate_store_update: {
        '$ref': '/evse_security#/CertificateStoreUpdate',
        description: tc('evse_security.vars.certificate_store_update.description') as LocalizedString,
        type: 'object'
      }
    }
  },
  example: {
    cmds: {
      uses_something: {
        arguments: {
          key: {
            description: tc('example.cmds.uses_something.arguments.key.description') as LocalizedString,
            pattern: '^[A-Za-z0-9_.]+$',
            type: 'string'
          }
        },
        description: tc('example.cmds.uses_something.description') as LocalizedString,
        result: {
          description: tc('example.cmds.uses_something.result.description') as LocalizedString,
          type: 'boolean'
        }
      }
    },
    description: tc('example.description') as LocalizedString,
    vars: {
      max_current: {
        description: tc('example.vars.max_current.description') as LocalizedString,
        type: 'number'
      }
    }
  },
  example_error_framework: {
    description: tc('example_error_framework.description') as LocalizedString,
    errors: [
      { reference: '/errors/example#/ExampleErrorA' },
      { reference: '/errors/example#/ExampleErrorB' },
      { reference: '/errors/example#/ExampleErrorC' },
      { reference: '/errors/example#/ExampleErrorD' }
    ]
  },
  example_user: { description: tc('example_user.description') as LocalizedString },
  external_energy_limits: {
    cmds: {
      set_external_limits: {
        arguments: {
          value: {
            '$ref': '/energy#/ExternalLimits',
            description: tc('external_energy_limits.cmds.set_external_limits.arguments.value.description') as LocalizedString,
            type: 'object'
          }
        },
        description: tc('external_energy_limits.cmds.set_external_limits.description') as LocalizedString
      }
    },
    description: tc('external_energy_limits.description') as LocalizedString,
    vars: {
      enforced_limits: {
        '$ref': '/energy#/EnforcedLimits',
        description: tc('external_energy_limits.vars.enforced_limits.description') as LocalizedString,
        type: 'object'
      }
    }
  },
  generic_array: {
    description: tc('generic_array.description') as LocalizedString,
    vars: {
      vector_of_ints: {
        '$ref': '/generic_array#/VectorOfInts',
        description: tc('generic_array.vars.vector_of_ints.description') as LocalizedString,
        type: 'object'
      }
    }
  },
  generic_error: {
    description: tc('generic_error.description') as LocalizedString,
    errors: [ { reference: '/errors/generic' } ]
  },
  iso15118_extensions: {
    cmds: {
      set_get_certificate_response: {
        arguments: {
          certificate_response: {
            '$ref': '/iso15118#/ResponseExiStreamStatus',
            description: tc('iso15118_extensions.cmds.set_get_certificate_response.arguments.certificate_response.description') as LocalizedString,
            type: 'object'
          }
        },
        description: tc('iso15118_extensions.cmds.set_get_certificate_response.description') as LocalizedString
      }
    },
    description: tc('iso15118_extensions.description') as LocalizedString,
    vars: {
      charging_needs: {
        '$ref': '/iso15118#/ChargingNeeds',
        description: tc('iso15118_extensions.vars.charging_needs.description') as LocalizedString,
        type: 'object'
      },
      iso15118_certificate_request: {
        '$ref': '/iso15118#/RequestExiStreamSchema',
        description: tc('iso15118_extensions.vars.iso15118_certificate_request.description') as LocalizedString,
        type: 'object'
      }
    }
  },
  isolation_monitor: {
    cmds: {
      start: {
        description: tc('isolation_monitor.cmds.start.description') as LocalizedString
      },
      start_self_test: {
        arguments: {
          test_voltage_V: {
            description: tc('isolation_monitor.cmds.start_self_test.arguments.test_voltage_V.description') as LocalizedString,
            type: 'number'
          }
        },
        description: tc('isolation_monitor.cmds.start_self_test.description') as LocalizedString
      },
      stop: {
        description: tc('isolation_monitor.cmds.stop.description') as LocalizedString
      }
    },
    description: tc('isolation_monitor.description') as LocalizedString,
    errors: [ { reference: '/errors/isolation_monitor' } ],
    vars: {
      isolation_measurement: {
        '$ref': '/isolation_monitor#/IsolationMeasurement',
        description: tc('isolation_monitor.vars.isolation_measurement.description') as LocalizedString,
        type: 'object'
      },
      self_test_result: {
        description: tc('isolation_monitor.vars.self_test_result.description') as LocalizedString,
        type: 'boolean'
      }
    }
  },
  kvs: {
    cmds: {
      delete: {
        arguments: {
          key: {
            description: tc('kvs.cmds.delete.arguments.key.description') as LocalizedString,
            pattern: '^[A-Za-z0-9_.]+$',
            type: 'string'
          }
        },
        description: tc('kvs.cmds.delete.description') as LocalizedString
      },
      exists: {
        arguments: {
          key: {
            description: tc('kvs.cmds.exists.arguments.key.description') as LocalizedString,
            pattern: '^[A-Za-z0-9_.]+$',
            type: 'string'
          }
        },
        description: tc('kvs.cmds.exists.description') as LocalizedString,
        result: {
          description: tc('kvs.cmds.exists.result.description') as LocalizedString,
          type: 'boolean'
        }
      },
      load: {
        arguments: {
          key: {
            description: tc('kvs.cmds.load.arguments.key.description') as LocalizedString,
            pattern: '^[A-Za-z0-9_.]+$',
            type: 'string'
          }
        },
        description: tc('kvs.cmds.load.description') as LocalizedString,
        result: {
          description: tc('kvs.cmds.load.result.description') as LocalizedString,
          type: [
            'null',    'string',
            'number',  'integer',
            'boolean', 'array',
            'object'
          ]
        }
      },
      store: {
        arguments: {
          key: {
            description: tc('kvs.cmds.store.arguments.key.description') as LocalizedString,
            pattern: '^[A-Za-z0-9_.]*$',
            type: 'string'
          },
          value: {
            description: tc('kvs.cmds.store.arguments.value.description') as LocalizedString,
            type: [
              'null',    'string',
              'number',  'integer',
              'boolean', 'array',
              'object'
            ]
          }
        },
        description: tc('kvs.cmds.store.description') as LocalizedString
      }
    },
    description: tc('kvs.description') as LocalizedString
  },
  ocpp: {
    cmds: {
      change_availability: {
        arguments: {
          request: {
            '$ref': '/ocpp#/ChangeAvailabilityRequest',
            description: tc('ocpp.cmds.change_availability.arguments.request.description') as LocalizedString,
            type: 'object'
          }
        },
        description: tc('ocpp.cmds.change_availability.description') as LocalizedString,
        result: {
          '$ref': '/ocpp#/ChangeAvailabilityResponse',
          description: tc('ocpp.cmds.change_availability.result.description') as LocalizedString,
          type: 'object'
        }
      },
      get_variables: {
        arguments: {
          requests: {
            description: tc('ocpp.cmds.get_variables.arguments.requests.description') as LocalizedString,
            items: {
              '$ref': '/ocpp#/GetVariableRequest',
              minimum: 0,
              type: 'object'
            },
            type: 'array'
          }
        },
        description: tc('ocpp.cmds.get_variables.description') as LocalizedString,
        result: {
          description: tc('ocpp.cmds.get_variables.result.description') as LocalizedString,
          items: { '$ref': '/ocpp#/GetVariableResult', type: 'object' },
          type: 'array'
        }
      },
      monitor_variables: {
        arguments: {
          component_variables: {
            description: tc('ocpp.cmds.monitor_variables.arguments.component_variables.description') as LocalizedString,
            items: { '$ref': '/ocpp#/ComponentVariable', type: 'object' },
            type: 'array'
          }
        },
        description: tc('ocpp.cmds.monitor_variables.description') as LocalizedString
      },
      restart: {
        description: tc('ocpp.cmds.restart.description') as LocalizedString,
        result: {
          description: tc('ocpp.cmds.restart.result.description') as LocalizedString,
          type: 'boolean'
        }
      },
      security_event: {
        arguments: {
          event: {
            '$ref': '/ocpp#/SecurityEvent',
            description: tc('ocpp.cmds.security_event.arguments.event.description') as LocalizedString,
            type: 'object'
          }
        },
        description: tc('ocpp.cmds.security_event.description') as LocalizedString
      },
      set_variables: {
        arguments: {
          requests: {
            description: tc('ocpp.cmds.set_variables.arguments.requests.description') as LocalizedString,
            items: {
              '$ref': '/ocpp#/SetVariableRequest',
              minimum: 0,
              type: 'object'
            },
            type: 'array'
          },
          source: {
            description: tc('ocpp.cmds.set_variables.arguments.source.description') as LocalizedString,
            type: 'string'
          }
        },
        description: tc('ocpp.cmds.set_variables.description') as LocalizedString,
        result: {
          description: tc('ocpp.cmds.set_variables.result.description') as LocalizedString,
          items: { '$ref': '/ocpp#/SetVariableResult', type: 'object' },
          type: 'array'
        }
      },
      stop: {
        description: tc('ocpp.cmds.stop.description') as LocalizedString,
        result: {
          description: tc('ocpp.cmds.stop.result.description') as LocalizedString,
          type: 'boolean'
        }
      }
    },
    description: tc('ocpp.description') as LocalizedString,
    vars: {
      boot_notification_response: {
        '$ref': '/ocpp#/BootNotificationResponse',
        description: tc('ocpp.vars.boot_notification_response.description') as LocalizedString,
        type: 'object'
      },
      charging_schedules: {
        '$ref': '/ocpp#/ChargingSchedules',
        description: tc('ocpp.vars.charging_schedules.description') as LocalizedString,
        type: 'object'
      },
      event_data: {
        '$ref': '/ocpp#/EventData',
        description: tc('ocpp.vars.event_data.description') as LocalizedString,
        type: 'object'
      },
      is_connected: {
        description: tc('ocpp.vars.is_connected.description') as LocalizedString,
        type: 'boolean'
      },
      ocpp_transaction_event: {
        '$ref': '/ocpp#/OcppTransactionEvent',
        description: tc('ocpp.vars.ocpp_transaction_event.description') as LocalizedString,
        type: 'object'
      },
      ocpp_transaction_event_response: {
        '$ref': '/ocpp#/OcppTransactionEventResponse',
        description: tc('ocpp.vars.ocpp_transaction_event_response.description') as LocalizedString,
        type: 'object'
      },
      security_event: {
        '$ref': '/ocpp#/SecurityEvent',
        description: tc('ocpp.vars.security_event.description') as LocalizedString,
        type: 'object'
      }
    }
  },
  ocpp_1_6_charge_point: {
    cmds: {
      get_configuration_key: {
        arguments: {
          keys: {
            description: tc('ocpp_1_6_charge_point.cmds.get_configuration_key.arguments.keys.description') as LocalizedString,
            items: {
              description: tc('ocpp_1_6_charge_point.cmds.get_configuration_key.arguments.keys.items.description') as LocalizedString,
              type: 'string'
            },
            type: 'array'
          }
        },
        description: tc('ocpp_1_6_charge_point.cmds.get_configuration_key.description') as LocalizedString,
        result: {
          '$ref': '/ocpp#/GetConfigurationResponse',
          description: tc('ocpp_1_6_charge_point.cmds.get_configuration_key.result.description') as LocalizedString,
          type: 'object'
        }
      },
      monitor_configuration_keys: {
        arguments: {
          keys: {
            description: tc('ocpp_1_6_charge_point.cmds.monitor_configuration_keys.arguments.keys.description') as LocalizedString,
            items: {
              description: tc('ocpp_1_6_charge_point.cmds.monitor_configuration_keys.arguments.keys.items.description') as LocalizedString,
              maximum: 50,
              type: 'string'
            },
            type: 'array'
          }
        },
        description: tc('ocpp_1_6_charge_point.cmds.monitor_configuration_keys.description') as LocalizedString
      },
      restart: {
        description: tc('ocpp_1_6_charge_point.cmds.restart.description') as LocalizedString,
        result: {
          description: tc('ocpp_1_6_charge_point.cmds.restart.result.description') as LocalizedString,
          type: 'boolean'
        }
      },
      security_event: {
        arguments: {
          info: {
            description: tc('ocpp_1_6_charge_point.cmds.security_event.arguments.info.description') as LocalizedString,
            type: 'string'
          },
          type: {
            description: tc('ocpp_1_6_charge_point.cmds.security_event.arguments.type.description') as LocalizedString,
            type: 'string'
          }
        },
        description: tc('ocpp_1_6_charge_point.cmds.security_event.description') as LocalizedString
      },
      set_custom_configuration_key: {
        arguments: {
          key: {
            description: tc('ocpp_1_6_charge_point.cmds.set_custom_configuration_key.arguments.key.description') as LocalizedString,
            maximum: 50,
            type: 'string'
          },
          value: {
            description: tc('ocpp_1_6_charge_point.cmds.set_custom_configuration_key.arguments.value.description') as LocalizedString,
            maximum: 500,
            type: 'string'
          }
        },
        description: tc('ocpp_1_6_charge_point.cmds.set_custom_configuration_key.description') as LocalizedString,
        result: {
          '$ref': '/ocpp#/ConfigurationStatus',
          description: tc('ocpp_1_6_charge_point.cmds.set_custom_configuration_key.result.description') as LocalizedString,
          type: 'string'
        }
      },
      stop: {
        description: tc('ocpp_1_6_charge_point.cmds.stop.description') as LocalizedString,
        result: {
          description: tc('ocpp_1_6_charge_point.cmds.stop.result.description') as LocalizedString,
          type: 'boolean'
        }
      }
    },
    description: tc('ocpp_1_6_charge_point.description') as LocalizedString,
    vars: {
      configuration_key: {
        '$ref': '/ocpp#/KeyValue',
        description: tc('ocpp_1_6_charge_point.vars.configuration_key.description') as LocalizedString,
        type: 'object'
      },
      is_connected: {
        description: tc('ocpp_1_6_charge_point.vars.is_connected.description') as LocalizedString,
        type: 'boolean'
      },
      security_event: {
        '$ref': '/ocpp#/SecurityEvent',
        description: tc('ocpp_1_6_charge_point.vars.security_event.description') as LocalizedString,
        type: 'object'
      }
    }
  },
  ocpp_data_transfer: {
    cmds: {
      data_transfer: {
        arguments: {
          request: {
            '$ref': '/ocpp#/DataTransferRequest',
            description: tc('ocpp_data_transfer.cmds.data_transfer.arguments.request.description') as LocalizedString,
            type: 'object'
          }
        },
        description: tc('ocpp_data_transfer.cmds.data_transfer.description') as LocalizedString,
        result: {
          '$ref': '/ocpp#/DataTransferResponse',
          description: tc('ocpp_data_transfer.cmds.data_transfer.result.description') as LocalizedString,
          type: 'object'
        }
      }
    },
    description: tc('ocpp_data_transfer.description') as LocalizedString
  },
  over_voltage_monitor: {
    cmds: {
      reset_over_voltage_error: {
        description: tc('over_voltage_monitor.cmds.reset_over_voltage_error.description') as LocalizedString
      },
      start: {
        arguments: {
          over_voltage_limit_V: {
            description: tc('over_voltage_monitor.cmds.start.arguments.over_voltage_limit_V.description') as LocalizedString,
            type: 'number'
          }
        },
        description: tc('over_voltage_monitor.cmds.start.description') as LocalizedString
      },
      stop: {
        description: tc('over_voltage_monitor.cmds.stop.description') as LocalizedString
      }
    },
    description: tc('over_voltage_monitor.description') as LocalizedString,
    errors: [ { reference: '/errors/over_voltage_monitor' } ],
    vars: {
      voltage_measurement_V: {
        description: tc('over_voltage_monitor.vars.voltage_measurement_V.description') as LocalizedString,
        type: 'number'
      }
    }
  },
  payment_terminal: {
    cmds: {
      allow_all_cards_for_every_connector: {
        description: tc('payment_terminal.cmds.allow_all_cards_for_every_connector.description') as LocalizedString
      },
      enable_card_reading: {
        arguments: {
          connector_id: {
            description: tc('payment_terminal.cmds.enable_card_reading.arguments.connector_id.description') as LocalizedString,
            type: 'integer'
          },
          supported_cards: {
            description: tc('payment_terminal.cmds.enable_card_reading.arguments.supported_cards.description') as LocalizedString,
            items: { '$ref': '/payment_terminal#/CardType', type: 'string' },
            type: 'array'
          }
        },
        description: tc('payment_terminal.cmds.enable_card_reading.description') as LocalizedString
      }
    },
    description: tc('payment_terminal.description') as LocalizedString,
    vars: {
      bank_transaction_summary: {
        '$ref': '/payment_terminal#/BankTransactionSummary',
        description: tc('payment_terminal.vars.bank_transaction_summary.description') as LocalizedString,
        type: 'object'
      },
      rejection_reason: {
        '$ref': '/payment_terminal#/RejectionReason',
        description: tc('payment_terminal.vars.rejection_reason.description') as LocalizedString,
        type: 'string'
      }
    }
  },
  phyverso_mcu_temperature: {
    description: tc('phyverso_mcu_temperature.description') as LocalizedString,
    vars: {
      MCUTemperatures: {
        '$ref': '/phyverso_mcu_temperature#/MCUTemperatures',
        description: tc('phyverso_mcu_temperature.vars.MCUTemperatures.description') as LocalizedString,
        type: 'object'
      }
    }
  },
  power: {
    description: tc('power.description') as LocalizedString,
    vars: {
      max_current: {
        description: tc('power.vars.max_current.description') as LocalizedString,
        maximum: 60,
        minimum: 1,
        type: 'number'
      }
    }
  },
  power_supply_DC: {
    cmds: {
      setExportVoltageCurrent: {
        arguments: {
          current: {
            description: tc('power_supply_DC.cmds.setExportVoltageCurrent.arguments.current.description') as LocalizedString,
            type: 'number'
          },
          voltage: {
            description: tc('power_supply_DC.cmds.setExportVoltageCurrent.arguments.voltage.description') as LocalizedString,
            type: 'number'
          }
        },
        description: tc('power_supply_DC.cmds.setExportVoltageCurrent.description') as LocalizedString
      },
      setImportVoltageCurrent: {
        arguments: {
          current: {
            description: tc('power_supply_DC.cmds.setImportVoltageCurrent.arguments.current.description') as LocalizedString,
            type: 'number'
          },
          voltage: {
            description: tc('power_supply_DC.cmds.setImportVoltageCurrent.arguments.voltage.description') as LocalizedString,
            type: 'number'
          }
        },
        description: tc('power_supply_DC.cmds.setImportVoltageCurrent.description') as LocalizedString
      },
      setMode: {
        arguments: {
          mode: {
            '$ref': '/power_supply_DC#/Mode',
            description: tc('power_supply_DC.cmds.setMode.arguments.mode.description') as LocalizedString,
            type: 'string'
          },
          phase: {
            '$ref': '/power_supply_DC#/ChargingPhase',
            description: tc('power_supply_DC.cmds.setMode.arguments.phase.description') as LocalizedString,
            type: 'string'
          }
        },
        description: tc('power_supply_DC.cmds.setMode.description') as LocalizedString
      }
    },
    description: tc('power_supply_DC.description') as LocalizedString,
    errors: [ { reference: '/errors/power_supply_DC' } ],
    vars: {
      capabilities: {
        '$ref': '/power_supply_DC#/Capabilities',
        description: tc('power_supply_DC.vars.capabilities.description') as LocalizedString,
        type: 'object'
      },
      mode: {
        '$ref': '/power_supply_DC#/Mode',
        description: tc('power_supply_DC.vars.mode.description') as LocalizedString,
        type: 'string'
      },
      voltage_current: {
        '$ref': '/power_supply_DC#/VoltageCurrent',
        description: tc('power_supply_DC.vars.voltage_current.description') as LocalizedString,
        type: 'object'
      }
    }
  },
  powermeter: {
    cmds: {
      start_transaction: {
        arguments: {
          value: {
            '$ref': '/powermeter#/TransactionReq',
            description: tc('powermeter.cmds.start_transaction.arguments.value.description') as LocalizedString,
            type: 'object'
          }
        },
        description: tc('powermeter.cmds.start_transaction.description') as LocalizedString,
        result: {
          '$ref': '/powermeter#/TransactionStartResponse',
          description: tc('powermeter.cmds.start_transaction.result.description') as LocalizedString,
          type: 'object'
        }
      },
      stop_transaction: {
        arguments: {
          transaction_id: {
            description: tc('powermeter.cmds.stop_transaction.arguments.transaction_id.description') as LocalizedString,
            type: 'string'
          }
        },
        description: tc('powermeter.cmds.stop_transaction.description') as LocalizedString,
        result: {
          '$ref': '/powermeter#/TransactionStopResponse',
          description: tc('powermeter.cmds.stop_transaction.result.description') as LocalizedString,
          type: 'object'
        }
      }
    },
    description: tc('powermeter.description') as LocalizedString,
    errors: [ { reference: '/errors/powermeter' } ],
    vars: {
      powermeter: {
        '$ref': '/powermeter#/Powermeter',
        description: tc('powermeter.vars.powermeter.description') as LocalizedString,
        type: 'object'
      },
      public_key_ocmf: {
        description: tc('powermeter.vars.public_key_ocmf.description') as LocalizedString,
        type: 'string'
      }
    }
  },
  reservation: {
    cmds: {
      cancel_reservation: {
        arguments: {
          reservation_id: {
            description: tc('reservation.cmds.cancel_reservation.arguments.reservation_id.description') as LocalizedString,
            type: 'integer'
          }
        },
        description: tc('reservation.cmds.cancel_reservation.description') as LocalizedString,
        result: {
          description: tc('reservation.cmds.cancel_reservation.result.description') as LocalizedString,
          type: 'boolean'
        }
      },
      exists_reservation: {
        arguments: {
          request: {
            '$ref': '/reservation#/ReservationCheck',
            description: tc('reservation.cmds.exists_reservation.arguments.request.description') as LocalizedString,
            type: 'object'
          }
        },
        description: tc('reservation.cmds.exists_reservation.description') as LocalizedString,
        result: {
          '$ref': '/reservation#/ReservationCheckStatus',
          description: tc('reservation.cmds.exists_reservation.result.description') as LocalizedString,
          type: 'string'
        }
      },
      reserve_now: {
        arguments: {
          request: {
            '$ref': '/reservation#/Reservation',
            description: tc('reservation.cmds.reserve_now.arguments.request.description') as LocalizedString,
            type: 'object'
          }
        },
        description: tc('reservation.cmds.reserve_now.description') as LocalizedString,
        result: {
          '$ref': '/reservation#/ReservationResult',
          description: tc('reservation.cmds.reserve_now.result.description') as LocalizedString,
          type: 'string'
        }
      }
    },
    description: tc('reservation.description') as LocalizedString,
    vars: {
      reservation_update: {
        '$ref': '/reservation#/ReservationUpdateStatus',
        description: tc('reservation.vars.reservation_update.description') as LocalizedString,
        type: 'object'
      }
    }
  },
  serial_communication_hub: {
    cmds: {
      modbus_read_holding_registers: {
        arguments: {
          first_register_address: {
            description: tc('serial_communication_hub.cmds.modbus_read_holding_registers.arguments.first_register_address.description') as LocalizedString,
            maximum: 65535,
            minimum: 0,
            type: 'integer'
          },
          num_registers_to_read: {
            description: tc('serial_communication_hub.cmds.modbus_read_holding_registers.arguments.num_registers_to_read.description') as LocalizedString,
            minimum: 1,
            type: 'integer'
          },
          target_device_id: {
            description: tc('serial_communication_hub.cmds.modbus_read_holding_registers.arguments.target_device_id.description') as LocalizedString,
            maximum: 255,
            minimum: 0,
            type: 'integer'
          }
        },
        description: tc('serial_communication_hub.cmds.modbus_read_holding_registers.description') as LocalizedString,
        result: {
          '$ref': '/serial_comm_hub_requests#/Result',
          description: tc('serial_communication_hub.cmds.modbus_read_holding_registers.result.description') as LocalizedString,
          type: 'object'
        }
      },
      modbus_read_input_registers: {
        arguments: {
          first_register_address: {
            description: tc('serial_communication_hub.cmds.modbus_read_input_registers.arguments.first_register_address.description') as LocalizedString,
            maximum: 65535,
            minimum: 0,
            type: 'integer'
          },
          num_registers_to_read: {
            description: tc('serial_communication_hub.cmds.modbus_read_input_registers.arguments.num_registers_to_read.description') as LocalizedString,
            minimum: 1,
            type: 'integer'
          },
          target_device_id: {
            description: tc('serial_communication_hub.cmds.modbus_read_input_registers.arguments.target_device_id.description') as LocalizedString,
            maximum: 255,
            minimum: 0,
            type: 'integer'
          }
        },
        description: tc('serial_communication_hub.cmds.modbus_read_input_registers.description') as LocalizedString,
        result: {
          '$ref': '/serial_comm_hub_requests#/Result',
          description: tc('serial_communication_hub.cmds.modbus_read_input_registers.result.description') as LocalizedString,
          type: 'object'
        }
      },
      modbus_write_multiple_registers: {
        arguments: {
          data_raw: {
            '$ref': '/serial_comm_hub_requests#/VectorUint16',
            description: tc('serial_communication_hub.cmds.modbus_write_multiple_registers.arguments.data_raw.description') as LocalizedString,
            type: 'object'
          },
          first_register_address: {
            description: tc('serial_communication_hub.cmds.modbus_write_multiple_registers.arguments.first_register_address.description') as LocalizedString,
            maximum: 65535,
            minimum: 0,
            type: 'integer'
          },
          target_device_id: {
            description: tc('serial_communication_hub.cmds.modbus_write_multiple_registers.arguments.target_device_id.description') as LocalizedString,
            maximum: 255,
            minimum: 0,
            type: 'integer'
          }
        },
        description: tc('serial_communication_hub.cmds.modbus_write_multiple_registers.description') as LocalizedString,
        result: {
          '$ref': '/serial_comm_hub_requests#/StatusCodeEnum',
          description: tc('serial_communication_hub.cmds.modbus_write_multiple_registers.result.description') as LocalizedString,
          type: 'string'
        }
      },
      modbus_write_single_register: {
        arguments: {
          data: {
            description: tc('serial_communication_hub.cmds.modbus_write_single_register.arguments.data.description') as LocalizedString,
            maximum: 65535,
            minimum: 0,
            type: 'integer'
          },
          register_address: {
            description: tc('serial_communication_hub.cmds.modbus_write_single_register.arguments.register_address.description') as LocalizedString,
            maximum: 65535,
            minimum: 0,
            type: 'integer'
          },
          target_device_id: {
            description: tc('serial_communication_hub.cmds.modbus_write_single_register.arguments.target_device_id.description') as LocalizedString,
            maximum: 255,
            minimum: 0,
            type: 'integer'
          }
        },
        description: tc('serial_communication_hub.cmds.modbus_write_single_register.description') as LocalizedString,
        result: {
          '$ref': '/serial_comm_hub_requests#/StatusCodeEnum',
          description: tc('serial_communication_hub.cmds.modbus_write_single_register.result.description') as LocalizedString,
          type: 'string'
        }
      },
      nonstd_read: {
        arguments: {
          first_register_address: {
            description: tc('serial_communication_hub.cmds.nonstd_read.arguments.first_register_address.description') as LocalizedString,
            maximum: 65535,
            minimum: 0,
            type: 'integer'
          },
          num_registers_to_read: {
            description: tc('serial_communication_hub.cmds.nonstd_read.arguments.num_registers_to_read.description') as LocalizedString,
            maximum: 65535,
            minimum: 0,
            type: 'integer'
          },
          target_device_id: {
            description: tc('serial_communication_hub.cmds.nonstd_read.arguments.target_device_id.description') as LocalizedString,
            maximum: 255,
            minimum: 0,
            type: 'integer'
          }
        },
        description: tc('serial_communication_hub.cmds.nonstd_read.description') as LocalizedString,
        result: {
          '$ref': '/serial_comm_hub_requests#/Result',
          description: tc('serial_communication_hub.cmds.nonstd_read.result.description') as LocalizedString,
          type: 'object'
        }
      },
      nonstd_write: {
        arguments: {
          first_register_address: {
            description: tc('serial_communication_hub.cmds.nonstd_write.arguments.first_register_address.description') as LocalizedString,
            maximum: 65535,
            minimum: 0,
            type: 'integer'
          },
          num_registers_to_read: {
            description: tc('serial_communication_hub.cmds.nonstd_write.arguments.num_registers_to_read.description') as LocalizedString,
            minimum: 1,
            type: 'integer'
          },
          target_device_id: {
            description: tc('serial_communication_hub.cmds.nonstd_write.arguments.target_device_id.description') as LocalizedString,
            maximum: 255,
            minimum: 0,
            type: 'integer'
          }
        },
        description: tc('serial_communication_hub.cmds.nonstd_write.description') as LocalizedString
      }
    },
    description: tc('serial_communication_hub.description') as LocalizedString
  },
  session_cost: {
    description: tc('session_cost.description') as LocalizedString,
    vars: {
      session_cost: {
        '$ref': '/session_cost#/SessionCost',
        description: tc('session_cost.vars.session_cost.description') as LocalizedString,
        type: 'object'
      },
      tariff_message: {
        '$ref': '/session_cost#/TariffMessage',
        description: tc('session_cost.vars.tariff_message.description') as LocalizedString,
        type: 'object'
      }
    }
  },
  slac: {
    cmds: {
      dlink_error: {
        description: tc('slac.cmds.dlink_error.description') as LocalizedString,
        result: {
          description: tc('slac.cmds.dlink_error.result.description') as LocalizedString,
          type: 'boolean'
        }
      },
      dlink_pause: {
        description: tc('slac.cmds.dlink_pause.description') as LocalizedString,
        result: {
          description: tc('slac.cmds.dlink_pause.result.description') as LocalizedString,
          type: 'boolean'
        }
      },
      dlink_terminate: {
        description: tc('slac.cmds.dlink_terminate.description') as LocalizedString,
        result: {
          description: tc('slac.cmds.dlink_terminate.result.description') as LocalizedString,
          type: 'boolean'
        }
      },
      enter_bcd: {
        description: tc('slac.cmds.enter_bcd.description') as LocalizedString,
        result: {
          description: tc('slac.cmds.enter_bcd.result.description') as LocalizedString,
          type: 'boolean'
        }
      },
      leave_bcd: {
        description: tc('slac.cmds.leave_bcd.description') as LocalizedString,
        result: {
          description: tc('slac.cmds.leave_bcd.result.description') as LocalizedString,
          type: 'boolean'
        }
      },
      reset: {
        arguments: {
          enable: {
            description: tc('slac.cmds.reset.arguments.enable.description') as LocalizedString,
            type: 'boolean'
          }
        },
        description: tc('slac.cmds.reset.description') as LocalizedString
      }
    },
    description: tc('slac.description') as LocalizedString,
    errors: [ { reference: '/errors/generic' } ],
    vars: {
      dlink_ready: {
        description: tc('slac.vars.dlink_ready.description') as LocalizedString,
        type: 'boolean'
      },
      ev_mac_address: {
        description: tc('slac.vars.ev_mac_address.description') as LocalizedString,
        pattern: '^[A-F0-9]{2}(:[A-F0-9]{2}){5}$',
        type: 'string'
      },
      request_error_routine: {
        description: tc('slac.vars.request_error_routine.description') as LocalizedString,
        type: 'null'
      },
      state: {
        description: tc('slac.vars.state.description') as LocalizedString,
        enum: [ 'UNMATCHED', 'MATCHING', 'MATCHED' ],
        type: 'string'
      }
    }
  },
  solar_forecast: {
    description: tc('solar_forecast.description') as LocalizedString,
    vars: {
      forecast: {
        description: tc('solar_forecast.vars.forecast.description') as LocalizedString,
        type: 'object'
      }
    }
  },
  sunspec_ac_meter: {
    cmds: {
      get_sunspec_ac_meter_value: {
        arguments: {
          auth_token: {
            description: tc('sunspec_ac_meter.cmds.get_sunspec_ac_meter_value.arguments.auth_token.description') as LocalizedString,
            maxLength: 20,
            minLength: 1,
            type: 'string'
          }
        },
        description: tc('sunspec_ac_meter.cmds.get_sunspec_ac_meter_value.description') as LocalizedString,
        result: {
          '$ref': '/sunspec_ac_meter#/Result',
          description: tc('sunspec_ac_meter.cmds.get_sunspec_ac_meter_value.result.description') as LocalizedString,
          type: 'object'
        }
      }
    },
    description: tc('sunspec_ac_meter.description') as LocalizedString
  },
  sunspec_reader: {
    description: tc('sunspec_reader.description') as LocalizedString,
    vars: {
      measurement: {
        additionalProperties: true,
        description: tc('sunspec_reader.vars.measurement.description') as LocalizedString,
        properties: {
          timestamp: {
            description: tc('sunspec_reader.vars.measurement.properties.timestamp.description') as LocalizedString,
            type: 'number'
          },
          value: {
            description: tc('sunspec_reader.vars.measurement.properties.value.description') as LocalizedString,
            type: 'number'
          }
        },
        required: [ 'timestamp' ],
        type: 'object'
      }
    }
  },
  sunspec_scanner: {
    cmds: {
      scan_device: {
        arguments: {
          ip_address: {
            description: tc('sunspec_scanner.cmds.scan_device.arguments.ip_address.description') as LocalizedString,
            pattern: '^(?:[0-9]{1,3}\\.){3}[0-9]{1,3}$',
            type: 'string'
          }
        },
        description: tc('sunspec_scanner.cmds.scan_device.description') as LocalizedString,
        result: {
          description: tc('sunspec_scanner.cmds.scan_device.result.description') as LocalizedString,
          type: 'object'
        }
      },
      scan_network: {
        description: tc('sunspec_scanner.cmds.scan_network.description') as LocalizedString,
        result: {
          description: tc('sunspec_scanner.cmds.scan_network.result.description') as LocalizedString,
          type: 'object'
        }
      },
      scan_port: {
        arguments: {
          ip_address: {
            description: tc('sunspec_scanner.cmds.scan_port.arguments.ip_address.description') as LocalizedString,
            pattern: '^(?:[0-9]{1,3}\\.){3}[0-9]{1,3}$',
            type: 'string'
          },
          port: {
            description: tc('sunspec_scanner.cmds.scan_port.arguments.port.description') as LocalizedString,
            minimum: 0,
            type: 'integer'
          }
        },
        description: tc('sunspec_scanner.cmds.scan_port.description') as LocalizedString,
        result: {
          description: tc('sunspec_scanner.cmds.scan_port.result.description') as LocalizedString,
          type: 'object'
        }
      },
      scan_unit: {
        arguments: {
          ip_address: {
            description: tc('sunspec_scanner.cmds.scan_unit.arguments.ip_address.description') as LocalizedString,
            pattern: '^(?:[0-9]{1,3}\\.){3}[0-9]{1,3}$',
            type: 'string'
          },
          port: {
            description: tc('sunspec_scanner.cmds.scan_unit.arguments.port.description') as LocalizedString,
            minimum: 0,
            type: 'integer'
          },
          unit: {
            description: tc('sunspec_scanner.cmds.scan_unit.arguments.unit.description') as LocalizedString,
            minimum: 0,
            type: 'integer'
          }
        },
        description: tc('sunspec_scanner.cmds.scan_unit.description') as LocalizedString,
        result: {
          description: tc('sunspec_scanner.cmds.scan_unit.result.description') as LocalizedString,
          type: 'object'
        }
      }
    },
    description: tc('sunspec_scanner.description') as LocalizedString
  },
  system: {
    cmds: {
      allow_firmware_installation: {
        description: tc('system.cmds.allow_firmware_installation.description') as LocalizedString
      },
      get_boot_reason: {
        description: tc('system.cmds.get_boot_reason.description') as LocalizedString,
        result: {
          '$ref': '/system#/BootReason',
          description: tc('system.cmds.get_boot_reason.result.description') as LocalizedString,
          type: 'string'
        }
      },
      is_reset_allowed: {
        arguments: {
          type: {
            '$ref': '/system#/ResetType',
            description: tc('system.cmds.is_reset_allowed.arguments.type.description') as LocalizedString,
            type: 'string'
          }
        },
        description: tc('system.cmds.is_reset_allowed.description') as LocalizedString,
        result: {
          description: tc('system.cmds.is_reset_allowed.result.description') as LocalizedString,
          type: 'boolean'
        }
      },
      reset: {
        arguments: {
          scheduled: {
            description: tc('system.cmds.reset.arguments.scheduled.description') as LocalizedString,
            type: 'boolean'
          },
          type: {
            '$ref': '/system#/ResetType',
            description: tc('system.cmds.reset.arguments.type.description') as LocalizedString,
            type: 'string'
          }
        },
        description: tc('system.cmds.reset.description') as LocalizedString
      },
      set_system_time: {
        arguments: {
          timestamp: {
            description: tc('system.cmds.set_system_time.arguments.timestamp.description') as LocalizedString,
            format: 'date-time',
            type: 'string'
          }
        },
        description: tc('system.cmds.set_system_time.description') as LocalizedString,
        result: {
          description: tc('system.cmds.set_system_time.result.description') as LocalizedString,
          type: 'boolean'
        }
      },
      update_firmware: {
        arguments: {
          firmware_update_request: {
            '$ref': '/system#/FirmwareUpdateRequest',
            description: tc('system.cmds.update_firmware.arguments.firmware_update_request.description') as LocalizedString,
            type: 'object'
          }
        },
        description: tc('system.cmds.update_firmware.description') as LocalizedString,
        result: {
          '$ref': '/system#/UpdateFirmwareResponse',
          description: tc('system.cmds.update_firmware.result.description') as LocalizedString,
          type: 'string'
        }
      },
      upload_logs: {
        arguments: {
          upload_logs_request: {
            '$ref': '/system#/UploadLogsRequest',
            description: tc('system.cmds.upload_logs.arguments.upload_logs_request.description') as LocalizedString,
            type: 'object'
          }
        },
        description: tc('system.cmds.upload_logs.description') as LocalizedString,
        result: {
          '$ref': '/system#/UploadLogsResponse',
          description: tc('system.cmds.upload_logs.result.description') as LocalizedString,
          type: 'object'
        }
      }
    },
    description: tc('system.description') as LocalizedString,
    errors: [ { reference: '/errors/system' } ],
    vars: {
      firmware_update_status: {
        '$ref': '/system#/FirmwareUpdateStatus',
        description: tc('system.vars.firmware_update_status.description') as LocalizedString,
        type: 'object'
      },
      log_status: {
        '$ref': '/system#/LogStatus',
        description: tc('system.vars.log_status.description') as LocalizedString,
        type: 'object'
      }
    }
  },
  test_control: {
    cmds: {
      start_charging: {
        arguments: {
          mode: {
            description: tc('test_control.cmds.start_charging.arguments.mode.description') as LocalizedString,
            maxLength: 20,
            minLength: 1,
            type: 'string'
          }
        },
        description: tc('test_control.cmds.start_charging.description') as LocalizedString,
        result: {
          description: tc('test_control.cmds.start_charging.result.description') as LocalizedString,
          type: 'string'
        }
      }
    },
    description: tc('test_control.description') as LocalizedString,
    vars: {
      state: {
        description: tc('test_control.vars.state.description') as LocalizedString,
        type: 'string'
      }
    }
  },
  test_error_handling: {
    cmds: {
      clear_all_errors: {
        description: tc('test_error_handling.cmds.clear_all_errors.description') as LocalizedString
      },
      clear_error: {
        arguments: {
          sub_type: {
            description: tc('test_error_handling.cmds.clear_error.arguments.sub_type.description') as LocalizedString,
            type: 'string'
          },
          type: {
            description: tc('test_error_handling.cmds.clear_error.arguments.type.description') as LocalizedString,
            enum: [
              'test_errors/TestErrorA',
              'test_errors/TestErrorB',
              'test_errors/TestErrorC',
              'test_errors/TestErrorD'
            ],
            type: 'string'
          }
        },
        description: tc('test_error_handling.cmds.clear_error.description') as LocalizedString
      },
      raise_error: {
        arguments: {
          message: {
            description: tc('test_error_handling.cmds.raise_error.arguments.message.description') as LocalizedString,
            type: 'string'
          },
          severity: {
            description: tc('test_error_handling.cmds.raise_error.arguments.severity.description') as LocalizedString,
            enum: [ 'Low', 'Medium', 'High' ],
            type: 'string'
          },
          sub_type: {
            description: tc('test_error_handling.cmds.raise_error.arguments.sub_type.description') as LocalizedString,
            type: 'string'
          },
          type: {
            description: tc('test_error_handling.cmds.raise_error.arguments.type.description') as LocalizedString,
            enum: [
              'test_errors/TestErrorA',
              'test_errors/TestErrorB',
              'test_errors/TestErrorC',
              'test_errors/TestErrorD'
            ],
            type: 'string'
          }
        },
        description: tc('test_error_handling.cmds.raise_error.description') as LocalizedString
      }
    },
    description: tc('test_error_handling.description') as LocalizedString,
    errors: [
      { reference: '/errors/test_errors#/TestErrorA' },
      { reference: '/errors/test_errors#/TestErrorB' },
      { reference: '/errors/test_errors#/TestErrorC' },
      { reference: '/errors/test_errors#/TestErrorD' }
    ],
    vars: {
      errors_cleared_subscribe_TestErrorA: {
        description: tc('test_error_handling.vars.errors_cleared_subscribe_TestErrorA.description') as LocalizedString,
        type: 'object'
      },
      errors_cleared_subscribe_TestErrorB: {
        description: tc('test_error_handling.vars.errors_cleared_subscribe_TestErrorB.description') as LocalizedString,
        type: 'object'
      },
      errors_cleared_subscribe_all: {
        description: tc('test_error_handling.vars.errors_cleared_subscribe_all.description') as LocalizedString,
        type: 'object'
      },
      errors_cleared_subscribe_global_all: {
        description: tc('test_error_handling.vars.errors_cleared_subscribe_global_all.description') as LocalizedString,
        type: 'object'
      },
      errors_subscribe_TestErrorA: {
        description: tc('test_error_handling.vars.errors_subscribe_TestErrorA.description') as LocalizedString,
        type: 'object'
      },
      errors_subscribe_TestErrorB: {
        description: tc('test_error_handling.vars.errors_subscribe_TestErrorB.description') as LocalizedString,
        type: 'object'
      },
      errors_subscribe_all: {
        description: tc('test_error_handling.vars.errors_subscribe_all.description') as LocalizedString,
        type: 'object'
      },
      errors_subscribe_global_all: {
        description: tc('test_error_handling.vars.errors_subscribe_global_all.description') as LocalizedString,
        type: 'object'
      }
    }
  },
  test_error_raiser: {
    description: tc('test_error_raiser.description') as LocalizedString,
    errors: [ { reference: '/errors/test_errors' } ]
  },
  tibber_price_forecast: {
    description: tc('tibber_price_forecast.description') as LocalizedString,
    vars: {
      forecast: {
        description: tc('tibber_price_forecast.vars.forecast.description') as LocalizedString,
        type: 'object'
      }
    }
  },
  uk_random_delay: {
    cmds: {
      cancel: {
        description: tc('uk_random_delay.cmds.cancel.description') as LocalizedString
      },
      disable: {
        description: tc('uk_random_delay.cmds.disable.description') as LocalizedString
      },
      enable: {
        description: tc('uk_random_delay.cmds.enable.description') as LocalizedString
      },
      set_duration_s: {
        arguments: {
          value: {
            description: tc('uk_random_delay.cmds.set_duration_s.arguments.value.description') as LocalizedString,
            type: 'integer'
          }
        },
        description: tc('uk_random_delay.cmds.set_duration_s.description') as LocalizedString
      }
    },
    description: tc('uk_random_delay.description') as LocalizedString,
    vars: {
      countdown: {
        '$ref': '/uk_random_delay#/CountDown',
        description: tc('uk_random_delay.vars.countdown.description') as LocalizedString,
        type: 'object'
      }
    }
  }
} as EverestInterfaceDefinitionList;
