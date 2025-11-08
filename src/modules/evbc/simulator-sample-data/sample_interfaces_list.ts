// SPDX-License-Identifier: Apache-2.0
// Copyright 2020 - 2025 Pionix GmbH and Contributors to EVerest

// This file is generated, see README.md for more information.

import { EverestInterfaceDefinitionList } from "../index";
import { tc } from "@/plugins/i18n";

/* eslint-disable prettier/prettier */
export default {
  ISO15118_charger: {
    cmds: {
      ac_contactor_closed: {
        arguments: {
          status: {
            description: tc('ISO15118_charger.cmds.ac_contactor_closed.arguments.status.description'),
            type: 'boolean'
          }
        },
        description: tc('ISO15118_charger.cmds.ac_contactor_closed.description')
      },
      authorization_response: {
        arguments: {
          authorization_status: {
            '$ref': '/authorization#/AuthorizationStatus',
            description: tc('ISO15118_charger.cmds.authorization_response.arguments.authorization_status.description'),
            type: 'string'
          },
          certificate_status: {
            '$ref': '/authorization#/CertificateStatus',
            description: tc('ISO15118_charger.cmds.authorization_response.arguments.certificate_status.description'),
            type: 'string'
          }
        },
        description: tc('ISO15118_charger.cmds.authorization_response.description')
      },
      cable_check_finished: {
        arguments: {
          status: {
            description: tc('ISO15118_charger.cmds.cable_check_finished.arguments.status.description'),
            type: 'boolean'
          }
        },
        description: tc('ISO15118_charger.cmds.cable_check_finished.description')
      },
      dlink_ready: {
        arguments: {
          value: {
            description: tc('ISO15118_charger.cmds.dlink_ready.arguments.value.description'),
            type: 'boolean'
          }
        },
        description: tc('ISO15118_charger.cmds.dlink_ready.description')
      },
      pause_charging: {
        arguments: {
          pause: {
            description: tc('ISO15118_charger.cmds.pause_charging.arguments.pause.description'),
            type: 'boolean'
          }
        },
        description: tc('ISO15118_charger.cmds.pause_charging.description')
      },
      receipt_is_required: {
        arguments: {
          receipt_required: {
            description: tc('ISO15118_charger.cmds.receipt_is_required.arguments.receipt_required.description'),
            type: 'boolean'
          }
        },
        description: tc('ISO15118_charger.cmds.receipt_is_required.description')
      },
      reset_error: {
        description: tc('ISO15118_charger.cmds.reset_error.description')
      },
      send_error: {
        arguments: {
          error: {
            '$ref': '/iso15118#/EvseError',
            description: tc('ISO15118_charger.cmds.send_error.arguments.error.description'),
            type: 'string'
          }
        },
        description: tc('ISO15118_charger.cmds.send_error.description')
      },
      session_setup: {
        arguments: {
          central_contract_validation_allowed: {
            description: tc('ISO15118_charger.cmds.session_setup.arguments.central_contract_validation_allowed.description'),
            type: 'boolean'
          },
          payment_options: {
            description: tc('ISO15118_charger.cmds.session_setup.arguments.payment_options.description'),
            items: {
              '$ref': '/iso15118#/PaymentOption',
              description: tc('ISO15118_charger.cmds.session_setup.arguments.payment_options.items.description'),
              type: 'string'
            },
            maxItems: 2,
            minItems: 1,
            type: 'array'
          },
          supported_certificate_service: {
            description: tc('ISO15118_charger.cmds.session_setup.arguments.supported_certificate_service.description'),
            type: 'boolean'
          }
        },
        description: tc('ISO15118_charger.cmds.session_setup.description')
      },
      set_charging_parameters: {
        arguments: {
          physical_values: {
            '$ref': '/iso15118#/SetupPhysicalValues',
            description: tc('ISO15118_charger.cmds.set_charging_parameters.arguments.physical_values.description'),
            type: 'object'
          }
        },
        description: tc('ISO15118_charger.cmds.set_charging_parameters.description')
      },
      setup: {
        arguments: {
          debug_mode: {
            description: tc('ISO15118_charger.cmds.setup.arguments.debug_mode.description'),
            type: 'boolean'
          },
          evse_id: {
            '$ref': '/iso15118#/EVSEID',
            description: tc('ISO15118_charger.cmds.setup.arguments.evse_id.description'),
            type: 'object'
          },
          sae_j2847_mode: {
            '$ref': '/iso15118#/SaeJ2847BidiMode',
            description: tc('ISO15118_charger.cmds.setup.arguments.sae_j2847_mode.description'),
            type: 'string'
          },
          supported_energy_transfer_modes: {
            description: tc('ISO15118_charger.cmds.setup.arguments.supported_energy_transfer_modes.description'),
            items: {
              '$ref': '/iso15118#/SupportedEnergyMode',
              description: tc('ISO15118_charger.cmds.setup.arguments.supported_energy_transfer_modes.items.description'),
              type: 'object'
            },
            maxItems: 6,
            minItems: 1,
            type: 'array'
          }
        },
        description: tc('ISO15118_charger.cmds.setup.description')
      },
      stop_charging: {
        arguments: {
          stop: {
            description: tc('ISO15118_charger.cmds.stop_charging.arguments.stop.description'),
            type: 'boolean'
          }
        },
        description: tc('ISO15118_charger.cmds.stop_charging.description')
      },
      update_ac_max_current: {
        arguments: {
          max_current: {
            description: tc('ISO15118_charger.cmds.update_ac_max_current.arguments.max_current.description'),
            maximum: 400,
            minimum: 0,
            type: 'number'
          }
        },
        description: tc('ISO15118_charger.cmds.update_ac_max_current.description')
      },
      update_dc_maximum_limits: {
        arguments: {
          maximum_limits: {
            '$ref': '/iso15118#/DcEvseMaximumLimits',
            description: tc('ISO15118_charger.cmds.update_dc_maximum_limits.arguments.maximum_limits.description'),
            type: 'object'
          }
        },
        description: tc('ISO15118_charger.cmds.update_dc_maximum_limits.description')
      },
      update_dc_minimum_limits: {
        arguments: {
          minimum_limits: {
            '$ref': '/iso15118#/DcEvseMinimumLimits',
            description: tc('ISO15118_charger.cmds.update_dc_minimum_limits.arguments.minimum_limits.description'),
            type: 'object'
          }
        },
        description: tc('ISO15118_charger.cmds.update_dc_minimum_limits.description')
      },
      update_dc_present_values: {
        arguments: {
          present_voltage_current: {
            '$ref': '/iso15118#/DcEvsePresentVoltageCurrent',
            description: tc('ISO15118_charger.cmds.update_dc_present_values.arguments.present_voltage_current.description'),
            type: 'object'
          }
        },
        description: tc('ISO15118_charger.cmds.update_dc_present_values.description')
      },
      update_isolation_status: {
        arguments: {
          isolation_status: {
            '$ref': '/iso15118#/IsolationStatus',
            description: tc('ISO15118_charger.cmds.update_isolation_status.arguments.isolation_status.description'),
            type: 'string'
          }
        },
        description: tc('ISO15118_charger.cmds.update_isolation_status.description')
      },
      update_meter_info: {
        arguments: {
          powermeter: {
            '$ref': '/powermeter#/Powermeter',
            description: tc('ISO15118_charger.cmds.update_meter_info.arguments.powermeter.description'),
            type: 'object'
          }
        },
        description: tc('ISO15118_charger.cmds.update_meter_info.description')
      }
    },
    description: tc('ISO15118_charger.description'),
    vars: {
      ac_close_contactor: {
        description: tc('ISO15118_charger.vars.ac_close_contactor.description'),
        type: 'null'
      },
      ac_eamount: {
        description: tc('ISO15118_charger.vars.ac_eamount.description'),
        maximum: 200000,
        minimum: 0,
        type: 'number'
      },
      ac_ev_max_current: {
        description: tc('ISO15118_charger.vars.ac_ev_max_current.description'),
        maximum: 400,
        minimum: 0,
        type: 'number'
      },
      ac_ev_max_voltage: {
        description: tc('ISO15118_charger.vars.ac_ev_max_voltage.description'),
        maximum: 1000,
        minimum: 0,
        type: 'number'
      },
      ac_ev_min_current: {
        description: tc('ISO15118_charger.vars.ac_ev_min_current.description'),
        maximum: 400,
        minimum: 0,
        type: 'number'
      },
      ac_open_contactor: {
        description: tc('ISO15118_charger.vars.ac_open_contactor.description'),
        type: 'null'
      },
      current_demand_finished: {
        description: tc('ISO15118_charger.vars.current_demand_finished.description'),
        type: 'null'
      },
      current_demand_started: {
        description: tc('ISO15118_charger.vars.current_demand_started.description'),
        type: 'null'
      },
      d20_dc_dynamic_charge_mode: {
        '$ref': '/iso15118#/DcChargeDynamicModeValues',
        description: tc('ISO15118_charger.vars.d20_dc_dynamic_charge_mode.description'),
        type: 'object'
      },
      dc_bulk_charging_complete: {
        description: tc('ISO15118_charger.vars.dc_bulk_charging_complete.description'),
        type: 'boolean'
      },
      dc_bulk_soc: {
        description: tc('ISO15118_charger.vars.dc_bulk_soc.description'),
        maximum: 100,
        minimum: 0,
        type: 'number'
      },
      dc_charging_complete: {
        description: tc('ISO15118_charger.vars.dc_charging_complete.description'),
        type: 'boolean'
      },
      dc_ev_energy_capacity: {
        description: tc('ISO15118_charger.vars.dc_ev_energy_capacity.description'),
        maximum: 200000,
        minimum: 0,
        type: 'number'
      },
      dc_ev_energy_request: {
        description: tc('ISO15118_charger.vars.dc_ev_energy_request.description'),
        maximum: 200000,
        minimum: 0,
        type: 'number'
      },
      dc_ev_maximum_limits: {
        '$ref': '/iso15118#/DcEvMaximumLimits',
        description: tc('ISO15118_charger.vars.dc_ev_maximum_limits.description'),
        type: 'object'
      },
      dc_ev_present_voltage: {
        description: tc('ISO15118_charger.vars.dc_ev_present_voltage.description'),
        type: 'number'
      },
      dc_ev_remaining_time: {
        '$ref': '/iso15118#/DcEvRemainingTime',
        description: tc('ISO15118_charger.vars.dc_ev_remaining_time.description'),
        type: 'object'
      },
      dc_ev_status: {
        '$ref': '/iso15118#/DcEvStatus',
        description: tc('ISO15118_charger.vars.dc_ev_status.description'),
        type: 'object'
      },
      dc_ev_target_voltage_current: {
        '$ref': '/iso15118#/DcEvTargetValues',
        description: tc('ISO15118_charger.vars.dc_ev_target_voltage_current.description'),
        type: 'object'
      },
      dc_full_soc: {
        description: tc('ISO15118_charger.vars.dc_full_soc.description'),
        maximum: 100,
        minimum: 0,
        type: 'number'
      },
      dc_open_contactor: {
        description: tc('ISO15118_charger.vars.dc_open_contactor.description'),
        type: 'null'
      },
      departure_time: {
        description: tc('ISO15118_charger.vars.departure_time.description'),
        format: 'date-time',
        type: 'string'
      },
      display_parameters: {
        '$ref': '/iso15118#/DisplayParameters',
        description: tc('ISO15118_charger.vars.display_parameters.description'),
        type: 'object'
      },
      dlink_error: {
        description: tc('ISO15118_charger.vars.dlink_error.description'),
        type: 'null'
      },
      dlink_pause: {
        description: tc('ISO15118_charger.vars.dlink_pause.description'),
        type: 'null'
      },
      dlink_terminate: {
        description: tc('ISO15118_charger.vars.dlink_terminate.description'),
        type: 'null'
      },
      ev_app_protocol: {
        '$ref': '/iso15118#/AppProtocols',
        description: tc('ISO15118_charger.vars.ev_app_protocol.description'),
        type: 'object'
      },
      evcc_id: {
        description: tc('ISO15118_charger.vars.evcc_id.description'),
        pattern: '^[A-F0-9]{2}(:[A-F0-9]{2}){5}$',
        type: 'string'
      },
      meter_info_requested: {
        description: tc('ISO15118_charger.vars.meter_info_requested.description'),
        type: 'null'
      },
      requested_energy_transfer_mode: {
        '$ref': '/iso15118#/EnergyTransferMode',
        description: tc('ISO15118_charger.vars.requested_energy_transfer_mode.description'),
        type: 'string'
      },
      require_auth_eim: {
        description: tc('ISO15118_charger.vars.require_auth_eim.description'),
        type: 'null'
      },
      require_auth_pnc: {
        '$ref': '/authorization#/ProvidedIdToken',
        description: tc('ISO15118_charger.vars.require_auth_pnc.description'),
        type: 'object'
      },
      sae_bidi_mode_active: {
        description: tc('ISO15118_charger.vars.sae_bidi_mode_active.description'),
        type: 'null'
      },
      selected_payment_option: {
        '$ref': '/iso15118#/PaymentOption',
        description: tc('ISO15118_charger.vars.selected_payment_option.description'),
        type: 'string'
      },
      selected_protocol: {
        description: tc('ISO15118_charger.vars.selected_protocol.description'),
        type: 'string'
      },
      start_cable_check: {
        description: tc('ISO15118_charger.vars.start_cable_check.description'),
        type: 'null'
      },
      start_pre_charge: {
        description: tc('ISO15118_charger.vars.start_pre_charge.description'),
        type: 'null'
      },
      v2g_messages: {
        '$ref': '/iso15118#/V2gMessages',
        description: tc('ISO15118_charger.vars.v2g_messages.description'),
        type: 'object'
      },
      v2g_setup_finished: {
        description: tc('ISO15118_charger.vars.v2g_setup_finished.description'),
        type: 'null'
      }
    }
  },
  ISO15118_ev: {
    cmds: {
      enable_sae_j2847_v2g_v2h: {
        description: tc('ISO15118_ev.cmds.enable_sae_j2847_v2g_v2h.description')
      },
      pause_charging: {
        description: tc('ISO15118_ev.cmds.pause_charging.description')
      },
      set_bpt_dc_params: {
        arguments: {
          EvBPTParameters: {
            '$ref': '/iso15118#/DcEvBPTParameters',
            description: tc('ISO15118_ev.cmds.set_bpt_dc_params.arguments.EvBPTParameters.description'),
            type: 'object'
          }
        },
        description: tc('ISO15118_ev.cmds.set_bpt_dc_params.description')
      },
      set_dc_params: {
        arguments: {
          EvParameters: {
            '$ref': '/iso15118#/DcEvParameters',
            description: tc('ISO15118_ev.cmds.set_dc_params.arguments.EvParameters.description'),
            type: 'object'
          }
        },
        description: tc('ISO15118_ev.cmds.set_dc_params.description')
      },
      set_fault: { description: tc('ISO15118_ev.cmds.set_fault.description') },
      start_charging: {
        arguments: {
          DepartureTime: {
            description: tc('ISO15118_ev.cmds.start_charging.arguments.DepartureTime.description'),
            type: 'number'
          },
          EAmount: {
            description: tc('ISO15118_ev.cmds.start_charging.arguments.EAmount.description'),
            type: 'number'
          },
          EnergyTransferMode: {
            '$ref': '/iso15118#/EnergyTransferMode',
            description: tc('ISO15118_ev.cmds.start_charging.arguments.EnergyTransferMode.description'),
            type: 'string'
          }
        },
        description: tc('ISO15118_ev.cmds.start_charging.description'),
        result: {
          description: tc('ISO15118_ev.cmds.start_charging.result.description'),
          type: 'boolean'
        }
      },
      stop_charging: {
        description: tc('ISO15118_ev.cmds.stop_charging.description')
      }
    },
    description: tc('ISO15118_ev.description'),
    vars: {
      AC_EVPowerReady: {
        description: tc('ISO15118_ev.vars.AC_EVPowerReady.description'),
        type: 'boolean'
      },
      AC_EVSEMaxCurrent: {
        description: tc('ISO15118_ev.vars.AC_EVSEMaxCurrent.description'),
        maximum: 400,
        minimum: 0,
        type: 'number'
      },
      AC_StopFromCharger: {
        description: tc('ISO15118_ev.vars.AC_StopFromCharger.description'),
        type: 'null'
      },
      DC_PowerOn: {
        description: tc('ISO15118_ev.vars.DC_PowerOn.description'),
        type: 'null'
      },
      V2G_Session_Finished: {
        description: tc('ISO15118_ev.vars.V2G_Session_Finished.description'),
        type: 'null'
      },
      pause_from_charger: {
        description: tc('ISO15118_ev.vars.pause_from_charger.description'),
        type: 'null'
      }
    }
  },
  ISO15118_vas: {
    cmds: {
      get_service_parameters: {
        arguments: {
          service_id: {
            description: tc('ISO15118_vas.cmds.get_service_parameters.arguments.service_id.description'),
            type: 'integer'
          }
        },
        description: tc('ISO15118_vas.cmds.get_service_parameters.description'),
        result: {
          description: tc('ISO15118_vas.cmds.get_service_parameters.result.description'),
          items: { '$ref': '/iso15118_vas#/ParameterSet', type: 'object' },
          type: 'array'
        }
      },
      selected_services: {
        arguments: {
          selected_services: {
            description: tc('ISO15118_vas.cmds.selected_services.arguments.selected_services.description'),
            items: {
              '$ref': '/iso15118_vas#/SelectedService',
              type: 'object'
            },
            type: 'array'
          }
        },
        description: tc('ISO15118_vas.cmds.selected_services.description')
      }
    },
    description: tc('ISO15118_vas.description'),
    vars: {
      offered_vas: {
        '$ref': '/iso15118_vas#/OfferedServices',
        description: tc('ISO15118_vas.vars.offered_vas.description'),
        type: 'object'
      }
    }
  },
  ac_rcd: {
    cmds: {
      reset: {
        description: tc('ac_rcd.cmds.reset.description'),
        result: {
          description: tc('ac_rcd.cmds.reset.result.description'),
          type: 'boolean'
        }
      },
      self_test: { description: tc('ac_rcd.cmds.self_test.description') }
    },
    description: tc('ac_rcd.description'),
    errors: [ { reference: '/errors/ac_rcd' } ],
    vars: {
      rcd_current_mA: {
        description: tc('ac_rcd.vars.rcd_current_mA.description'),
        type: 'number'
      }
    }
  },
  auth: {
    cmds: {
      set_connection_timeout: {
        arguments: {
          connection_timeout: {
            description: tc('auth.cmds.set_connection_timeout.arguments.connection_timeout.description'),
            maximum: 300,
            minimum: 10,
            type: 'integer'
          }
        },
        description: tc('auth.cmds.set_connection_timeout.description')
      },
      set_master_pass_group_id: {
        arguments: {
          master_pass_group_id: {
            description: tc('auth.cmds.set_master_pass_group_id.arguments.master_pass_group_id.description'),
            maxLength: 36,
            type: 'string'
          }
        },
        description: tc('auth.cmds.set_master_pass_group_id.description')
      },
      withdraw_authorization: {
        arguments: {
          request: {
            '$ref': '/authorization#/WithdrawAuthorizationRequest',
            description: tc('auth.cmds.withdraw_authorization.arguments.request.description'),
            type: 'object'
          }
        },
        description: tc('auth.cmds.withdraw_authorization.description'),
        result: {
          '$ref': '/authorization#/WithdrawAuthorizationResult',
          description: tc('auth.cmds.withdraw_authorization.result.description'),
          type: 'string'
        }
      }
    },
    description: tc('auth.description'),
    errors: [ { reference: '/errors/generic' } ],
    vars: {
      token_validation_status: {
        '$ref': '/authorization#/TokenValidationStatusMessage',
        description: tc('auth.vars.token_validation_status.description'),
        type: 'object'
      }
    }
  },
  auth_token_provider: {
    description: tc('auth_token_provider.description'),
    errors: [ { reference: '/errors/generic' } ],
    vars: {
      provided_token: {
        '$ref': '/authorization#/ProvidedIdToken',
        description: tc('auth_token_provider.vars.provided_token.description'),
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
            description: tc('auth_token_validator.cmds.validate_token.arguments.provided_token.description'),
            type: 'object'
          }
        },
        description: tc('auth_token_validator.cmds.validate_token.description'),
        result: {
          '$ref': '/authorization#/ValidationResult',
          description: tc('auth_token_validator.cmds.validate_token.result.description'),
          type: 'object'
        }
      }
    },
    description: tc('auth_token_validator.description'),
    errors: [ { reference: '/errors/generic' } ],
    vars: {
      validate_result_update: {
        '$ref': '/authorization#/ValidationResultUpdate',
        description: tc('auth_token_validator.vars.validate_result_update.description'),
        type: 'object'
      }
    }
  },
  bank_session_token_provider: {
    cmds: {
      get_bank_session_token: {
        description: tc('bank_session_token_provider.cmds.get_bank_session_token.description'),
        result: {
          '$ref': '/payment_terminal#/BankSessionToken',
          description: tc('bank_session_token_provider.cmds.get_bank_session_token.result.description'),
          type: 'object'
        }
      }
    },
    description: tc('bank_session_token_provider.description')
  },
  car_simulator: {
    cmds: {
      enable: {
        arguments: {
          value: {
            description: tc('car_simulator.cmds.enable.arguments.value.description'),
            type: 'boolean'
          }
        },
        description: tc('car_simulator.cmds.enable.description')
      },
      execute_charging_session: {
        arguments: {
          value: {
            description: tc('car_simulator.cmds.execute_charging_session.arguments.value.description'),
            type: 'string'
          }
        },
        description: tc('car_simulator.cmds.execute_charging_session.description')
      }
    },
    description: tc('car_simulator.description'),
    vars: {
      enabled: {
        description: tc('car_simulator.vars.enabled.description'),
        type: 'boolean'
      }
    }
  },
  connector_lock: {
    cmds: {
      lock: { description: tc('connector_lock.cmds.lock.description') },
      unlock: { description: tc('connector_lock.cmds.unlock.description') }
    },
    description: tc('connector_lock.description'),
    errors: [ { reference: '/errors/connector_lock' } ]
  },
  debug_json: {
    description: tc('debug_json.description'),
    vars: {
      debug_json: {
        description: tc('debug_json.vars.debug_json.description'),
        type: 'object'
      },
      title: {
        description: tc('debug_json.vars.title.description'),
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
            description: tc('display_message.cmds.clear_display_message.arguments.request.description'),
            type: 'object'
          }
        },
        description: tc('display_message.cmds.clear_display_message.description'),
        result: {
          '$ref': '/display_message#/ClearDisplayMessageResponse',
          description: tc('display_message.cmds.clear_display_message.result.description'),
          type: 'object'
        }
      },
      get_display_messages: {
        arguments: {
          request: {
            '$ref': '/display_message#/GetDisplayMessageRequest',
            description: tc('display_message.cmds.get_display_messages.arguments.request.description'),
            type: 'object'
          }
        },
        description: tc('display_message.cmds.get_display_messages.description'),
        result: {
          '$ref': '/display_message#/GetDisplayMessageResponse',
          description: tc('display_message.cmds.get_display_messages.result.description'),
          type: 'object'
        }
      },
      set_display_message: {
        arguments: {
          request: {
            description: tc('display_message.cmds.set_display_message.arguments.request.description'),
            items: {
              '$ref': '/display_message#/DisplayMessage',
              description: tc('display_message.cmds.set_display_message.arguments.request.items.description'),
              type: 'object'
            },
            type: 'array'
          }
        },
        description: tc('display_message.cmds.set_display_message.description'),
        result: {
          '$ref': '/display_message#/SetDisplayMessageResponse',
          description: tc('display_message.cmds.set_display_message.result.description'),
          type: 'object'
        }
      }
    },
    description: tc('display_message.description')
  },
  empty: { description: tc('empty.description') },
  energy: {
    cmds: {
      enforce_limits: {
        arguments: {
          value: {
            '$ref': '/energy#/EnforcedLimits',
            description: tc('energy.cmds.enforce_limits.arguments.value.description'),
            type: 'object'
          }
        },
        description: tc('energy.cmds.enforce_limits.description')
      }
    },
    description: tc('energy.description'),
    vars: {
      energy_flow_request: {
        '$ref': '/energy#/EnergyFlowRequest',
        description: tc('energy.vars.energy_flow_request.description'),
        type: 'object'
      }
    }
  },
  energy_manager: { description: tc('energy_manager.description'), vars: {} },
  energy_price_information: {
    description: tc('energy_price_information.description'),
    vars: {
      energy_pricing: {
        '$ref': '/energy_price_information#/EnergyPriceSchedule',
        description: tc('energy_price_information.vars.energy_pricing.description'),
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
            description: tc('error_history.cmds.get_errors.arguments.filters.description'),
            type: 'object'
          }
        },
        description: tc('error_history.cmds.get_errors.description'),
        result: {
          description: tc('error_history.cmds.get_errors.result.description'),
          items: { '$ref': '/error_history#/ErrorObject' },
          type: 'array'
        }
      }
    },
    description: tc('error_history.description')
  },
  ev_board_support: {
    cmds: {
      allow_power_on: {
        arguments: {
          value: {
            description: tc('ev_board_support.cmds.allow_power_on.arguments.value.description'),
            type: 'boolean'
          }
        },
        description: tc('ev_board_support.cmds.allow_power_on.description')
      },
      diode_fail: {
        arguments: {
          value: {
            description: tc('ev_board_support.cmds.diode_fail.arguments.value.description'),
            type: 'boolean'
          }
        },
        description: tc('ev_board_support.cmds.diode_fail.description')
      },
      enable: {
        arguments: {
          value: {
            description: tc('ev_board_support.cmds.enable.arguments.value.description'),
            type: 'boolean'
          }
        },
        description: tc('ev_board_support.cmds.enable.description')
      },
      set_ac_max_current: {
        arguments: {
          current: {
            description: tc('ev_board_support.cmds.set_ac_max_current.arguments.current.description'),
            type: 'number'
          }
        },
        description: tc('ev_board_support.cmds.set_ac_max_current.description')
      },
      set_cp_state: {
        arguments: {
          cp_state: {
            '$ref': '/ev_board_support#/EvCpState',
            description: tc('ev_board_support.cmds.set_cp_state.arguments.cp_state.description'),
            type: 'string'
          }
        },
        description: tc('ev_board_support.cmds.set_cp_state.description')
      },
      set_rcd_error: {
        arguments: {
          rcd_current_mA: {
            description: tc('ev_board_support.cmds.set_rcd_error.arguments.rcd_current_mA.description'),
            type: 'number'
          }
        },
        description: tc('ev_board_support.cmds.set_rcd_error.description')
      },
      set_three_phases: {
        arguments: {
          three_phases: {
            description: tc('ev_board_support.cmds.set_three_phases.arguments.three_phases.description'),
            type: 'boolean'
          }
        },
        description: tc('ev_board_support.cmds.set_three_phases.description')
      }
    },
    description: tc('ev_board_support.description'),
    errors: [ { reference: '/errors/generic' } ],
    vars: {
      bsp_event: {
        '$ref': '/board_support_common#/BspEvent',
        description: tc('ev_board_support.vars.bsp_event.description'),
        type: 'object'
      },
      bsp_measurement: {
        '$ref': '/board_support_common#/BspMeasurement',
        description: tc('ev_board_support.vars.bsp_measurement.description'),
        type: 'object'
      },
      ev_info: {
        '$ref': '/evse_manager#/EVInfo',
        description: tc('ev_board_support.vars.ev_info.description'),
        type: 'object'
      }
    }
  },
  ev_manager: {
    cmds: {},
    description: tc('ev_manager.description'),
    errors: [ { reference: '/errors/evse_manager' } ],
    vars: {
      bsp_event: {
        '$ref': '/board_support_common#/BspEvent',
        description: tc('ev_manager.vars.bsp_event.description'),
        type: 'object'
      },
      ev_info: {
        '$ref': '/evse_manager#/EVInfo',
        description: tc('ev_manager.vars.ev_info.description'),
        type: 'object'
      }
    }
  },
  ev_slac: {
    cmds: {
      reset: { description: tc('ev_slac.cmds.reset.description') },
      trigger_matching: {
        description: tc('ev_slac.cmds.trigger_matching.description'),
        result: {
          description: tc('ev_slac.cmds.trigger_matching.result.description'),
          type: 'boolean'
        }
      }
    },
    description: tc('ev_slac.description'),
    errors: [ { reference: '/errors/generic' } ],
    vars: {
      dlink_ready: {
        description: tc('ev_slac.vars.dlink_ready.description'),
        type: 'boolean'
      },
      ev_mac_address: {
        description: tc('ev_slac.vars.ev_mac_address.description'),
        pattern: '^[A-F0-9]{2}(:[A-F0-9]{2}){5}$',
        type: 'string'
      },
      state: {
        description: tc('ev_slac.vars.state.description'),
        enum: [ 'UNMATCHED', 'MATCHING', 'MATCHED' ],
        type: 'string'
      }
    }
  },
  evse_board_support: {
    cmds: {
      ac_read_pp_ampacity: {
        description: tc('evse_board_support.cmds.ac_read_pp_ampacity.description'),
        result: {
          '$ref': '/board_support_common#/ProximityPilot',
          description: tc('evse_board_support.cmds.ac_read_pp_ampacity.result.description'),
          type: 'object'
        }
      },
      ac_set_overcurrent_limit_A: {
        arguments: {
          value: {
            description: tc('evse_board_support.cmds.ac_set_overcurrent_limit_A.arguments.value.description'),
            type: 'number'
          }
        },
        description: tc('evse_board_support.cmds.ac_set_overcurrent_limit_A.description')
      },
      ac_switch_three_phases_while_charging: {
        arguments: {
          value: {
            description: tc('evse_board_support.cmds.ac_switch_three_phases_while_charging.arguments.value.description'),
            type: 'boolean'
          }
        },
        description: tc('evse_board_support.cmds.ac_switch_three_phases_while_charging.description')
      },
      allow_power_on: {
        arguments: {
          value: {
            '$ref': '/evse_board_support#/PowerOnOff',
            description: tc('evse_board_support.cmds.allow_power_on.arguments.value.description'),
            type: 'object'
          }
        },
        description: tc('evse_board_support.cmds.allow_power_on.description')
      },
      enable: {
        arguments: {
          value: {
            description: tc('evse_board_support.cmds.enable.arguments.value.description'),
            type: 'boolean'
          }
        },
        description: tc('evse_board_support.cmds.enable.description')
      },
      evse_replug: {
        arguments: {
          value: {
            description: tc('evse_board_support.cmds.evse_replug.arguments.value.description'),
            type: 'integer'
          }
        },
        description: tc('evse_board_support.cmds.evse_replug.description')
      },
      pwm_F: {
        description: tc('evse_board_support.cmds.pwm_F.description')
      },
      pwm_off: {
        description: tc('evse_board_support.cmds.pwm_off.description')
      },
      pwm_on: {
        arguments: {
          value: {
            description: tc('evse_board_support.cmds.pwm_on.arguments.value.description'),
            maximum: 100,
            minimum: 0,
            type: 'number'
          }
        },
        description: tc('evse_board_support.cmds.pwm_on.description')
      }
    },
    description: tc('evse_board_support.description'),
    errors: [
      { reference: '/errors/evse_board_support' },
      { reference: '/errors/ac_rcd' }
    ],
    vars: {
      ac_nr_of_phases_available: {
        description: tc('evse_board_support.vars.ac_nr_of_phases_available.description'),
        maximum: 3,
        minimum: 1,
        type: 'integer'
      },
      ac_pp_ampacity: {
        '$ref': '/board_support_common#/ProximityPilot',
        description: tc('evse_board_support.vars.ac_pp_ampacity.description'),
        type: 'object'
      },
      capabilities: {
        '$ref': '/evse_board_support#/HardwareCapabilities',
        description: tc('evse_board_support.vars.capabilities.description'),
        type: 'object'
      },
      event: {
        '$ref': '/board_support_common#/BspEvent',
        description: tc('evse_board_support.vars.event.description'),
        type: 'object'
      },
      request_stop_transaction: {
        '$ref': '/evse_manager#/StopTransactionRequest',
        description: tc('evse_board_support.vars.request_stop_transaction.description'),
        type: 'object'
      },
      telemetry: {
        '$ref': '/evse_board_support#/Telemetry',
        description: tc('evse_board_support.vars.telemetry.description'),
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
            description: tc('evse_manager.cmds.authorize_response.arguments.provided_token.description'),
            type: 'object'
          },
          validation_result: {
            '$ref': '/authorization#/ValidationResult',
            description: tc('evse_manager.cmds.authorize_response.arguments.validation_result.description'),
            type: 'object'
          }
        },
        description: tc('evse_manager.cmds.authorize_response.description')
      },
      cancel_reservation: {
        description: tc('evse_manager.cmds.cancel_reservation.description')
      },
      enable_disable: {
        arguments: {
          cmd_source: {
            '$ref': '/evse_manager#/EnableDisableSource',
            description: tc('evse_manager.cmds.enable_disable.arguments.cmd_source.description'),
            type: 'object'
          },
          connector_id: {
            description: tc('evse_manager.cmds.enable_disable.arguments.connector_id.description'),
            type: 'integer'
          }
        },
        description: tc('evse_manager.cmds.enable_disable.description'),
        result: {
          description: tc('evse_manager.cmds.enable_disable.result.description'),
          type: 'boolean'
        }
      },
      external_ready_to_start_charging: {
        description: tc('evse_manager.cmds.external_ready_to_start_charging.description'),
        result: {
          description: tc('evse_manager.cmds.external_ready_to_start_charging.result.description'),
          type: 'boolean'
        }
      },
      force_unlock: {
        arguments: {
          connector_id: {
            description: tc('evse_manager.cmds.force_unlock.arguments.connector_id.description'),
            type: 'integer'
          }
        },
        description: tc('evse_manager.cmds.force_unlock.description'),
        result: {
          description: tc('evse_manager.cmds.force_unlock.result.description'),
          type: 'boolean'
        }
      },
      get_evse: {
        description: tc('evse_manager.cmds.get_evse.description'),
        result: {
          '$ref': '/evse_manager#/Evse',
          description: tc('evse_manager.cmds.get_evse.result.description'),
          type: 'object'
        }
      },
      pause_charging: {
        description: tc('evse_manager.cmds.pause_charging.description'),
        result: {
          description: tc('evse_manager.cmds.pause_charging.result.description'),
          type: 'boolean'
        }
      },
      reserve: {
        arguments: {
          reservation_id: {
            description: tc('evse_manager.cmds.reserve.arguments.reservation_id.description'),
            type: 'integer'
          }
        },
        description: tc('evse_manager.cmds.reserve.description'),
        result: {
          description: tc('evse_manager.cmds.reserve.result.description'),
          type: 'boolean'
        }
      },
      resume_charging: {
        description: tc('evse_manager.cmds.resume_charging.description'),
        result: {
          description: tc('evse_manager.cmds.resume_charging.result.description'),
          type: 'boolean'
        }
      },
      set_faulted: {
        description: tc('evse_manager.cmds.set_faulted.description')
      },
      set_plug_and_charge_configuration: {
        arguments: {
          plug_and_charge_configuration: {
            '$ref': '/evse_manager#/PlugAndChargeConfiguration',
            description: tc('evse_manager.cmds.set_plug_and_charge_configuration.arguments.plug_and_charge_configuration.description'),
            type: 'object'
          }
        },
        description: tc('evse_manager.cmds.set_plug_and_charge_configuration.description')
      },
      stop_transaction: {
        arguments: {
          request: {
            '$ref': '/evse_manager#/StopTransactionRequest',
            description: tc('evse_manager.cmds.stop_transaction.arguments.request.description'),
            type: 'object'
          }
        },
        description: tc('evse_manager.cmds.stop_transaction.description'),
        result: {
          description: tc('evse_manager.cmds.stop_transaction.result.description'),
          type: 'boolean'
        }
      },
      withdraw_authorization: {
        description: tc('evse_manager.cmds.withdraw_authorization.description')
      }
    },
    description: tc('evse_manager.description'),
    errors: [ { reference: '/errors/evse_manager' } ],
    vars: {
      car_manufacturer: {
        '$ref': '/evse_manager#/CarManufacturer',
        description: tc('evse_manager.vars.car_manufacturer.description'),
        type: 'string'
      },
      enforced_limits: {
        '$ref': '/energy#/EnforcedLimits',
        description: tc('evse_manager.vars.enforced_limits.description'),
        type: 'object'
      },
      ev_info: {
        '$ref': '/evse_manager#/EVInfo',
        description: tc('evse_manager.vars.ev_info.description'),
        type: 'object'
      },
      evse_id: {
        description: tc('evse_manager.vars.evse_id.description'),
        type: 'string'
      },
      hw_capabilities: {
        '$ref': '/evse_board_support#/HardwareCapabilities',
        description: tc('evse_manager.vars.hw_capabilities.description'),
        type: 'object'
      },
      limits: {
        '$ref': '/evse_manager#/Limits',
        description: tc('evse_manager.vars.limits.description'),
        type: 'object'
      },
      powermeter: {
        '$ref': '/powermeter#/Powermeter',
        description: tc('evse_manager.vars.powermeter.description'),
        type: 'object'
      },
      powermeter_public_key_ocmf: {
        description: tc('evse_manager.vars.powermeter_public_key_ocmf.description'),
        type: 'string'
      },
      ready: {
        description: tc('evse_manager.vars.ready.description'),
        type: 'boolean'
      },
      selected_protocol: {
        description: tc('evse_manager.vars.selected_protocol.description'),
        type: 'string'
      },
      session_event: {
        '$ref': '/evse_manager#/SessionEvent',
        description: tc('evse_manager.vars.session_event.description'),
        type: 'object'
      },
      telemetry: {
        '$ref': '/evse_board_support#/Telemetry',
        description: tc('evse_manager.vars.telemetry.description'),
        type: 'object'
      },
      waiting_for_external_ready: {
        description: tc('evse_manager.vars.waiting_for_external_ready.description'),
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
            description: tc('evse_security.cmds.delete_certificate.arguments.certificate_hash_data.description'),
            type: 'object'
          }
        },
        description: tc('evse_security.cmds.delete_certificate.description'),
        result: {
          '$ref': '/evse_security#/DeleteCertificateResult',
          description: tc('evse_security.cmds.delete_certificate.result.description'),
          type: 'string'
        }
      },
      generate_certificate_signing_request: {
        arguments: {
          certificate_type: {
            '$ref': '/evse_security#/LeafCertificateType',
            description: tc('evse_security.cmds.generate_certificate_signing_request.arguments.certificate_type.description'),
            type: 'string'
          },
          common: {
            description: tc('evse_security.cmds.generate_certificate_signing_request.arguments.common.description'),
            type: 'string'
          },
          country: {
            description: tc('evse_security.cmds.generate_certificate_signing_request.arguments.country.description'),
            type: 'string'
          },
          organization: {
            description: tc('evse_security.cmds.generate_certificate_signing_request.arguments.organization.description'),
            type: 'string'
          },
          use_tpm: {
            description: tc('evse_security.cmds.generate_certificate_signing_request.arguments.use_tpm.description'),
            type: 'boolean'
          }
        },
        description: tc('evse_security.cmds.generate_certificate_signing_request.description'),
        result: {
          '$ref': '/evse_security#/GetCertificateSignRequestResult',
          description: tc('evse_security.cmds.generate_certificate_signing_request.result.description'),
          type: 'object'
        }
      },
      get_all_valid_certificates_info: {
        arguments: {
          certificate_type: {
            '$ref': '/evse_security#/LeafCertificateType',
            description: tc('evse_security.cmds.get_all_valid_certificates_info.arguments.certificate_type.description'),
            type: 'string'
          },
          encoding: {
            '$ref': '/evse_security#/EncodingFormat',
            description: tc('evse_security.cmds.get_all_valid_certificates_info.arguments.encoding.description'),
            type: 'string'
          },
          include_ocsp: {
            description: tc('evse_security.cmds.get_all_valid_certificates_info.arguments.include_ocsp.description'),
            type: 'boolean'
          }
        },
        description: tc('evse_security.cmds.get_all_valid_certificates_info.description'),
        result: {
          '$ref': '/evse_security#/GetCertificateFullInfoResult',
          description: tc('evse_security.cmds.get_all_valid_certificates_info.result.description'),
          type: 'object'
        }
      },
      get_installed_certificates: {
        arguments: {
          certificate_types: {
            description: tc('evse_security.cmds.get_installed_certificates.arguments.certificate_types.description'),
            items: {
              '$ref': '/evse_security#/CertificateType',
              minimum: 0,
              type: 'string'
            },
            type: 'array'
          }
        },
        description: tc('evse_security.cmds.get_installed_certificates.description'),
        result: {
          '$ref': '/evse_security#/GetInstalledCertificatesResult',
          description: tc('evse_security.cmds.get_installed_certificates.result.description'),
          type: 'object'
        }
      },
      get_leaf_certificate_info: {
        arguments: {
          certificate_type: {
            '$ref': '/evse_security#/LeafCertificateType',
            description: tc('evse_security.cmds.get_leaf_certificate_info.arguments.certificate_type.description'),
            type: 'string'
          },
          encoding: {
            '$ref': '/evse_security#/EncodingFormat',
            description: tc('evse_security.cmds.get_leaf_certificate_info.arguments.encoding.description'),
            type: 'string'
          },
          include_ocsp: {
            description: tc('evse_security.cmds.get_leaf_certificate_info.arguments.include_ocsp.description'),
            type: 'boolean'
          }
        },
        description: tc('evse_security.cmds.get_leaf_certificate_info.description'),
        result: {
          '$ref': '/evse_security#/GetCertificateInfoResult',
          description: tc('evse_security.cmds.get_leaf_certificate_info.result.description'),
          type: 'object'
        }
      },
      get_leaf_expiry_days_count: {
        arguments: {
          certificate_type: {
            '$ref': '/evse_security#/LeafCertificateType',
            description: tc('evse_security.cmds.get_leaf_expiry_days_count.arguments.certificate_type.description'),
            type: 'string'
          }
        },
        description: tc('evse_security.cmds.get_leaf_expiry_days_count.description'),
        result: {
          description: tc('evse_security.cmds.get_leaf_expiry_days_count.result.description'),
          type: 'integer'
        }
      },
      get_mo_ocsp_request_data: {
        arguments: {
          certificate_chain: {
            description: tc('evse_security.cmds.get_mo_ocsp_request_data.arguments.certificate_chain.description'),
            type: 'string'
          }
        },
        description: tc('evse_security.cmds.get_mo_ocsp_request_data.description'),
        result: {
          '$ref': '/evse_security#/OCSPRequestDataList',
          description: tc('evse_security.cmds.get_mo_ocsp_request_data.result.description'),
          type: 'object'
        }
      },
      get_v2g_ocsp_request_data: {
        description: tc('evse_security.cmds.get_v2g_ocsp_request_data.description'),
        result: {
          '$ref': '/evse_security#/OCSPRequestDataList',
          description: tc('evse_security.cmds.get_v2g_ocsp_request_data.result.description'),
          type: 'object'
        }
      },
      get_verify_file: {
        arguments: {
          certificate_type: {
            '$ref': '/evse_security#/CaCertificateType',
            description: tc('evse_security.cmds.get_verify_file.arguments.certificate_type.description'),
            type: 'string'
          }
        },
        description: tc('evse_security.cmds.get_verify_file.description'),
        result: {
          description: tc('evse_security.cmds.get_verify_file.result.description'),
          type: 'string'
        }
      },
      get_verify_location: {
        arguments: {
          certificate_type: {
            '$ref': '/evse_security#/CaCertificateType',
            description: tc('evse_security.cmds.get_verify_location.arguments.certificate_type.description'),
            type: 'string'
          }
        },
        description: tc('evse_security.cmds.get_verify_location.description'),
        result: {
          description: tc('evse_security.cmds.get_verify_location.result.description'),
          type: 'string'
        }
      },
      install_ca_certificate: {
        arguments: {
          certificate: {
            description: tc('evse_security.cmds.install_ca_certificate.arguments.certificate.description'),
            type: 'string'
          },
          certificate_type: {
            '$ref': '/evse_security#/CaCertificateType',
            description: tc('evse_security.cmds.install_ca_certificate.arguments.certificate_type.description'),
            type: 'string'
          }
        },
        description: tc('evse_security.cmds.install_ca_certificate.description'),
        result: {
          '$ref': '/evse_security#/InstallCertificateResult',
          description: tc('evse_security.cmds.install_ca_certificate.result.description'),
          type: 'string'
        }
      },
      is_ca_certificate_installed: {
        arguments: {
          certificate_type: {
            '$ref': '/evse_security#/CaCertificateType',
            description: tc('evse_security.cmds.is_ca_certificate_installed.arguments.certificate_type.description'),
            type: 'string'
          }
        },
        description: tc('evse_security.cmds.is_ca_certificate_installed.description'),
        result: {
          description: tc('evse_security.cmds.is_ca_certificate_installed.result.description'),
          type: 'boolean'
        }
      },
      update_leaf_certificate: {
        arguments: {
          certificate_chain: {
            description: tc('evse_security.cmds.update_leaf_certificate.arguments.certificate_chain.description'),
            type: 'string'
          },
          certificate_type: {
            '$ref': '/evse_security#/LeafCertificateType',
            description: tc('evse_security.cmds.update_leaf_certificate.arguments.certificate_type.description'),
            type: 'string'
          }
        },
        description: tc('evse_security.cmds.update_leaf_certificate.description'),
        result: {
          '$ref': '/evse_security#/InstallCertificateResult',
          description: tc('evse_security.cmds.update_leaf_certificate.result.description'),
          type: 'string'
        }
      },
      update_ocsp_cache: {
        arguments: {
          certificate_hash_data: {
            '$ref': '/evse_security#/CertificateHashData',
            description: tc('evse_security.cmds.update_ocsp_cache.arguments.certificate_hash_data.description'),
            type: 'object'
          },
          ocsp_response: {
            description: tc('evse_security.cmds.update_ocsp_cache.arguments.ocsp_response.description'),
            type: 'string'
          }
        },
        description: tc('evse_security.cmds.update_ocsp_cache.description')
      },
      verify_certificate: {
        arguments: {
          certificate_chain: {
            description: tc('evse_security.cmds.verify_certificate.arguments.certificate_chain.description'),
            type: 'string'
          },
          certificate_types: {
            description: tc('evse_security.cmds.verify_certificate.arguments.certificate_types.description'),
            items: {
              '$ref': '/evse_security#/LeafCertificateType',
              minimum: 1,
              type: 'string'
            },
            type: 'array'
          }
        },
        description: tc('evse_security.cmds.verify_certificate.description'),
        result: {
          '$ref': '/evse_security#/CertificateValidationResult',
          description: tc('evse_security.cmds.verify_certificate.result.description'),
          type: 'string'
        }
      },
      verify_file_signature: {
        arguments: {
          file_path: {
            description: tc('evse_security.cmds.verify_file_signature.arguments.file_path.description'),
            type: 'string'
          },
          signature: {
            description: tc('evse_security.cmds.verify_file_signature.arguments.signature.description'),
            type: 'string'
          },
          signing_certificate: {
            description: tc('evse_security.cmds.verify_file_signature.arguments.signing_certificate.description'),
            type: 'string'
          }
        },
        description: tc('evse_security.cmds.verify_file_signature.description'),
        result: {
          description: tc('evse_security.cmds.verify_file_signature.result.description'),
          type: 'boolean'
        }
      }
    },
    description: tc('evse_security.description'),
    vars: {
      certificate_store_update: {
        '$ref': '/evse_security#/CertificateStoreUpdate',
        description: tc('evse_security.vars.certificate_store_update.description'),
        type: 'object'
      }
    }
  },
  example: {
    cmds: {
      uses_something: {
        arguments: {
          key: {
            description: tc('example.cmds.uses_something.arguments.key.description'),
            pattern: '^[A-Za-z0-9_.]+$',
            type: 'string'
          }
        },
        description: tc('example.cmds.uses_something.description'),
        result: {
          description: tc('example.cmds.uses_something.result.description'),
          type: 'boolean'
        }
      }
    },
    description: tc('example.description'),
    vars: {
      max_current: {
        description: tc('example.vars.max_current.description'),
        type: 'number'
      }
    }
  },
  example_error_framework: {
    description: tc('example_error_framework.description'),
    errors: [
      { reference: '/errors/example#/ExampleErrorA' },
      { reference: '/errors/example#/ExampleErrorB' },
      { reference: '/errors/example#/ExampleErrorC' },
      { reference: '/errors/example#/ExampleErrorD' }
    ]
  },
  example_user: { description: tc('example_user.description') },
  external_energy_limits: {
    cmds: {
      set_external_limits: {
        arguments: {
          value: {
            '$ref': '/energy#/ExternalLimits',
            description: tc('external_energy_limits.cmds.set_external_limits.arguments.value.description'),
            type: 'object'
          }
        },
        description: tc('external_energy_limits.cmds.set_external_limits.description')
      }
    },
    description: tc('external_energy_limits.description'),
    vars: {
      enforced_limits: {
        '$ref': '/energy#/EnforcedLimits',
        description: tc('external_energy_limits.vars.enforced_limits.description'),
        type: 'object'
      }
    }
  },
  generic_array: {
    description: tc('generic_array.description'),
    vars: {
      vector_of_ints: {
        '$ref': '/generic_array#/VectorOfInts',
        description: tc('generic_array.vars.vector_of_ints.description'),
        type: 'object'
      }
    }
  },
  generic_error: {
    description: tc('generic_error.description'),
    errors: [ { reference: '/errors/generic' } ]
  },
  iso15118_extensions: {
    cmds: {
      set_get_certificate_response: {
        arguments: {
          certificate_response: {
            '$ref': '/iso15118#/ResponseExiStreamStatus',
            description: tc('iso15118_extensions.cmds.set_get_certificate_response.arguments.certificate_response.description'),
            type: 'object'
          }
        },
        description: tc('iso15118_extensions.cmds.set_get_certificate_response.description')
      }
    },
    description: tc('iso15118_extensions.description'),
    vars: {
      charging_needs: {
        '$ref': '/iso15118#/ChargingNeeds',
        description: tc('iso15118_extensions.vars.charging_needs.description'),
        type: 'object'
      },
      iso15118_certificate_request: {
        '$ref': '/iso15118#/RequestExiStreamSchema',
        description: tc('iso15118_extensions.vars.iso15118_certificate_request.description'),
        type: 'object'
      }
    }
  },
  isolation_monitor: {
    cmds: {
      start: { description: tc('isolation_monitor.cmds.start.description') },
      start_self_test: {
        arguments: {
          test_voltage_V: {
            description: tc('isolation_monitor.cmds.start_self_test.arguments.test_voltage_V.description'),
            type: 'number'
          }
        },
        description: tc('isolation_monitor.cmds.start_self_test.description')
      },
      stop: { description: tc('isolation_monitor.cmds.stop.description') }
    },
    description: tc('isolation_monitor.description'),
    errors: [ { reference: '/errors/isolation_monitor' } ],
    vars: {
      isolation_measurement: {
        '$ref': '/isolation_monitor#/IsolationMeasurement',
        description: tc('isolation_monitor.vars.isolation_measurement.description'),
        type: 'object'
      },
      self_test_result: {
        description: tc('isolation_monitor.vars.self_test_result.description'),
        type: 'boolean'
      }
    }
  },
  kvs: {
    cmds: {
      delete: {
        arguments: {
          key: {
            description: tc('kvs.cmds.delete.arguments.key.description'),
            pattern: '^[A-Za-z0-9_.]+$',
            type: 'string'
          }
        },
        description: tc('kvs.cmds.delete.description')
      },
      exists: {
        arguments: {
          key: {
            description: tc('kvs.cmds.exists.arguments.key.description'),
            pattern: '^[A-Za-z0-9_.]+$',
            type: 'string'
          }
        },
        description: tc('kvs.cmds.exists.description'),
        result: {
          description: tc('kvs.cmds.exists.result.description'),
          type: 'boolean'
        }
      },
      load: {
        arguments: {
          key: {
            description: tc('kvs.cmds.load.arguments.key.description'),
            pattern: '^[A-Za-z0-9_.]+$',
            type: 'string'
          }
        },
        description: tc('kvs.cmds.load.description'),
        result: {
          description: tc('kvs.cmds.load.result.description'),
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
            description: tc('kvs.cmds.store.arguments.key.description'),
            pattern: '^[A-Za-z0-9_.]*$',
            type: 'string'
          },
          value: {
            description: tc('kvs.cmds.store.arguments.value.description'),
            type: [
              'null',    'string',
              'number',  'integer',
              'boolean', 'array',
              'object'
            ]
          }
        },
        description: tc('kvs.cmds.store.description')
      }
    },
    description: tc('kvs.description')
  },
  ocpp: {
    cmds: {
      change_availability: {
        arguments: {
          request: {
            '$ref': '/ocpp#/ChangeAvailabilityRequest',
            description: tc('ocpp.cmds.change_availability.arguments.request.description'),
            type: 'object'
          }
        },
        description: tc('ocpp.cmds.change_availability.description'),
        result: {
          '$ref': '/ocpp#/ChangeAvailabilityResponse',
          description: tc('ocpp.cmds.change_availability.result.description'),
          type: 'object'
        }
      },
      get_variables: {
        arguments: {
          requests: {
            description: tc('ocpp.cmds.get_variables.arguments.requests.description'),
            items: {
              '$ref': '/ocpp#/GetVariableRequest',
              minimum: 0,
              type: 'object'
            },
            type: 'array'
          }
        },
        description: tc('ocpp.cmds.get_variables.description'),
        result: {
          description: tc('ocpp.cmds.get_variables.result.description'),
          items: { '$ref': '/ocpp#/GetVariableResult', type: 'object' },
          type: 'array'
        }
      },
      monitor_variables: {
        arguments: {
          component_variables: {
            description: tc('ocpp.cmds.monitor_variables.arguments.component_variables.description'),
            items: { '$ref': '/ocpp#/ComponentVariable', type: 'object' },
            type: 'array'
          }
        },
        description: tc('ocpp.cmds.monitor_variables.description')
      },
      restart: {
        description: tc('ocpp.cmds.restart.description'),
        result: {
          description: tc('ocpp.cmds.restart.result.description'),
          type: 'boolean'
        }
      },
      security_event: {
        arguments: {
          event: {
            '$ref': '/ocpp#/SecurityEvent',
            description: tc('ocpp.cmds.security_event.arguments.event.description'),
            type: 'object'
          }
        },
        description: tc('ocpp.cmds.security_event.description')
      },
      set_variables: {
        arguments: {
          requests: {
            description: tc('ocpp.cmds.set_variables.arguments.requests.description'),
            items: {
              '$ref': '/ocpp#/SetVariableRequest',
              minimum: 0,
              type: 'object'
            },
            type: 'array'
          },
          source: {
            description: tc('ocpp.cmds.set_variables.arguments.source.description'),
            type: 'string'
          }
        },
        description: tc('ocpp.cmds.set_variables.description'),
        result: {
          description: tc('ocpp.cmds.set_variables.result.description'),
          items: { '$ref': '/ocpp#/SetVariableResult', type: 'object' },
          type: 'array'
        }
      },
      stop: {
        description: tc('ocpp.cmds.stop.description'),
        result: {
          description: tc('ocpp.cmds.stop.result.description'),
          type: 'boolean'
        }
      }
    },
    description: tc('ocpp.description'),
    vars: {
      boot_notification_response: {
        '$ref': '/ocpp#/BootNotificationResponse',
        description: tc('ocpp.vars.boot_notification_response.description'),
        type: 'object'
      },
      charging_schedules: {
        '$ref': '/ocpp#/ChargingSchedules',
        description: tc('ocpp.vars.charging_schedules.description'),
        type: 'object'
      },
      event_data: {
        '$ref': '/ocpp#/EventData',
        description: tc('ocpp.vars.event_data.description'),
        type: 'object'
      },
      is_connected: {
        description: tc('ocpp.vars.is_connected.description'),
        type: 'boolean'
      },
      ocpp_transaction_event: {
        '$ref': '/ocpp#/OcppTransactionEvent',
        description: tc('ocpp.vars.ocpp_transaction_event.description'),
        type: 'object'
      },
      ocpp_transaction_event_response: {
        '$ref': '/ocpp#/OcppTransactionEventResponse',
        description: tc('ocpp.vars.ocpp_transaction_event_response.description'),
        type: 'object'
      },
      security_event: {
        '$ref': '/ocpp#/SecurityEvent',
        description: tc('ocpp.vars.security_event.description'),
        type: 'object'
      }
    }
  },
  ocpp_1_6_charge_point: {
    cmds: {
      get_configuration_key: {
        arguments: {
          keys: {
            description: tc('ocpp_1_6_charge_point.cmds.get_configuration_key.arguments.keys.description'),
            items: {
              description: tc('ocpp_1_6_charge_point.cmds.get_configuration_key.arguments.keys.items.description'),
              type: 'string'
            },
            type: 'array'
          }
        },
        description: tc('ocpp_1_6_charge_point.cmds.get_configuration_key.description'),
        result: {
          '$ref': '/ocpp#/GetConfigurationResponse',
          description: tc('ocpp_1_6_charge_point.cmds.get_configuration_key.result.description'),
          type: 'object'
        }
      },
      monitor_configuration_keys: {
        arguments: {
          keys: {
            description: tc('ocpp_1_6_charge_point.cmds.monitor_configuration_keys.arguments.keys.description'),
            items: {
              description: tc('ocpp_1_6_charge_point.cmds.monitor_configuration_keys.arguments.keys.items.description'),
              maximum: 50,
              type: 'string'
            },
            type: 'array'
          }
        },
        description: tc('ocpp_1_6_charge_point.cmds.monitor_configuration_keys.description')
      },
      restart: {
        description: tc('ocpp_1_6_charge_point.cmds.restart.description'),
        result: {
          description: tc('ocpp_1_6_charge_point.cmds.restart.result.description'),
          type: 'boolean'
        }
      },
      security_event: {
        arguments: {
          info: {
            description: tc('ocpp_1_6_charge_point.cmds.security_event.arguments.info.description'),
            type: 'string'
          },
          type: {
            description: tc('ocpp_1_6_charge_point.cmds.security_event.arguments.type.description'),
            type: 'string'
          }
        },
        description: tc('ocpp_1_6_charge_point.cmds.security_event.description')
      },
      set_custom_configuration_key: {
        arguments: {
          key: {
            description: tc('ocpp_1_6_charge_point.cmds.set_custom_configuration_key.arguments.key.description'),
            maximum: 50,
            type: 'string'
          },
          value: {
            description: tc('ocpp_1_6_charge_point.cmds.set_custom_configuration_key.arguments.value.description'),
            maximum: 500,
            type: 'string'
          }
        },
        description: tc('ocpp_1_6_charge_point.cmds.set_custom_configuration_key.description'),
        result: {
          '$ref': '/ocpp#/ConfigurationStatus',
          description: tc('ocpp_1_6_charge_point.cmds.set_custom_configuration_key.result.description'),
          type: 'string'
        }
      },
      stop: {
        description: tc('ocpp_1_6_charge_point.cmds.stop.description'),
        result: {
          description: tc('ocpp_1_6_charge_point.cmds.stop.result.description'),
          type: 'boolean'
        }
      }
    },
    description: tc('ocpp_1_6_charge_point.description'),
    vars: {
      configuration_key: {
        '$ref': '/ocpp#/KeyValue',
        description: tc('ocpp_1_6_charge_point.vars.configuration_key.description'),
        type: 'object'
      },
      is_connected: {
        description: tc('ocpp_1_6_charge_point.vars.is_connected.description'),
        type: 'boolean'
      },
      security_event: {
        '$ref': '/ocpp#/SecurityEvent',
        description: tc('ocpp_1_6_charge_point.vars.security_event.description'),
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
            description: tc('ocpp_data_transfer.cmds.data_transfer.arguments.request.description'),
            type: 'object'
          }
        },
        description: tc('ocpp_data_transfer.cmds.data_transfer.description'),
        result: {
          '$ref': '/ocpp#/DataTransferResponse',
          description: tc('ocpp_data_transfer.cmds.data_transfer.result.description'),
          type: 'object'
        }
      }
    },
    description: tc('ocpp_data_transfer.description')
  },
  over_voltage_monitor: {
    cmds: {
      reset_over_voltage_error: {
        description: tc('over_voltage_monitor.cmds.reset_over_voltage_error.description')
      },
      start: {
        arguments: {
          over_voltage_limit_V: {
            description: tc('over_voltage_monitor.cmds.start.arguments.over_voltage_limit_V.description'),
            type: 'number'
          }
        },
        description: tc('over_voltage_monitor.cmds.start.description')
      },
      stop: {
        description: tc('over_voltage_monitor.cmds.stop.description')
      }
    },
    description: tc('over_voltage_monitor.description'),
    errors: [ { reference: '/errors/over_voltage_monitor' } ],
    vars: {
      voltage_measurement_V: {
        description: tc('over_voltage_monitor.vars.voltage_measurement_V.description'),
        type: 'number'
      }
    }
  },
  payment_terminal: {
    cmds: {
      allow_all_cards_for_every_connector: {
        description: tc('payment_terminal.cmds.allow_all_cards_for_every_connector.description')
      },
      enable_card_reading: {
        arguments: {
          connector_id: {
            description: tc('payment_terminal.cmds.enable_card_reading.arguments.connector_id.description'),
            type: 'integer'
          },
          supported_cards: {
            description: tc('payment_terminal.cmds.enable_card_reading.arguments.supported_cards.description'),
            items: { '$ref': '/payment_terminal#/CardType', type: 'string' },
            type: 'array'
          }
        },
        description: tc('payment_terminal.cmds.enable_card_reading.description')
      }
    },
    description: tc('payment_terminal.description'),
    vars: {
      bank_transaction_summary: {
        '$ref': '/payment_terminal#/BankTransactionSummary',
        description: tc('payment_terminal.vars.bank_transaction_summary.description'),
        type: 'object'
      },
      rejection_reason: {
        '$ref': '/payment_terminal#/RejectionReason',
        description: tc('payment_terminal.vars.rejection_reason.description'),
        type: 'string'
      }
    }
  },
  phyverso_mcu_temperature: {
    description: tc('phyverso_mcu_temperature.description'),
    vars: {
      MCUTemperatures: {
        '$ref': '/phyverso_mcu_temperature#/MCUTemperatures',
        description: tc('phyverso_mcu_temperature.vars.MCUTemperatures.description'),
        type: 'object'
      }
    }
  },
  power: {
    description: tc('power.description'),
    vars: {
      max_current: {
        description: tc('power.vars.max_current.description'),
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
            description: tc('power_supply_DC.cmds.setExportVoltageCurrent.arguments.current.description'),
            type: 'number'
          },
          voltage: {
            description: tc('power_supply_DC.cmds.setExportVoltageCurrent.arguments.voltage.description'),
            type: 'number'
          }
        },
        description: tc('power_supply_DC.cmds.setExportVoltageCurrent.description')
      },
      setImportVoltageCurrent: {
        arguments: {
          current: {
            description: tc('power_supply_DC.cmds.setImportVoltageCurrent.arguments.current.description'),
            type: 'number'
          },
          voltage: {
            description: tc('power_supply_DC.cmds.setImportVoltageCurrent.arguments.voltage.description'),
            type: 'number'
          }
        },
        description: tc('power_supply_DC.cmds.setImportVoltageCurrent.description')
      },
      setMode: {
        arguments: {
          mode: {
            '$ref': '/power_supply_DC#/Mode',
            description: tc('power_supply_DC.cmds.setMode.arguments.mode.description'),
            type: 'string'
          },
          phase: {
            '$ref': '/power_supply_DC#/ChargingPhase',
            description: tc('power_supply_DC.cmds.setMode.arguments.phase.description'),
            type: 'string'
          }
        },
        description: tc('power_supply_DC.cmds.setMode.description')
      }
    },
    description: tc('power_supply_DC.description'),
    errors: [ { reference: '/errors/power_supply_DC' } ],
    vars: {
      capabilities: {
        '$ref': '/power_supply_DC#/Capabilities',
        description: tc('power_supply_DC.vars.capabilities.description'),
        type: 'object'
      },
      mode: {
        '$ref': '/power_supply_DC#/Mode',
        description: tc('power_supply_DC.vars.mode.description'),
        type: 'string'
      },
      voltage_current: {
        '$ref': '/power_supply_DC#/VoltageCurrent',
        description: tc('power_supply_DC.vars.voltage_current.description'),
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
            description: tc('powermeter.cmds.start_transaction.arguments.value.description'),
            type: 'object'
          }
        },
        description: tc('powermeter.cmds.start_transaction.description'),
        result: {
          '$ref': '/powermeter#/TransactionStartResponse',
          description: tc('powermeter.cmds.start_transaction.result.description'),
          type: 'object'
        }
      },
      stop_transaction: {
        arguments: {
          transaction_id: {
            description: tc('powermeter.cmds.stop_transaction.arguments.transaction_id.description'),
            type: 'string'
          }
        },
        description: tc('powermeter.cmds.stop_transaction.description'),
        result: {
          '$ref': '/powermeter#/TransactionStopResponse',
          description: tc('powermeter.cmds.stop_transaction.result.description'),
          type: 'object'
        }
      }
    },
    description: tc('powermeter.description'),
    errors: [ { reference: '/errors/powermeter' } ],
    vars: {
      powermeter: {
        '$ref': '/powermeter#/Powermeter',
        description: tc('powermeter.vars.powermeter.description'),
        type: 'object'
      },
      public_key_ocmf: {
        description: tc('powermeter.vars.public_key_ocmf.description'),
        type: 'string'
      }
    }
  },
  reservation: {
    cmds: {
      cancel_reservation: {
        arguments: {
          reservation_id: {
            description: tc('reservation.cmds.cancel_reservation.arguments.reservation_id.description'),
            type: 'integer'
          }
        },
        description: tc('reservation.cmds.cancel_reservation.description'),
        result: {
          description: tc('reservation.cmds.cancel_reservation.result.description'),
          type: 'boolean'
        }
      },
      exists_reservation: {
        arguments: {
          request: {
            '$ref': '/reservation#/ReservationCheck',
            description: tc('reservation.cmds.exists_reservation.arguments.request.description'),
            type: 'object'
          }
        },
        description: tc('reservation.cmds.exists_reservation.description'),
        result: {
          '$ref': '/reservation#/ReservationCheckStatus',
          description: tc('reservation.cmds.exists_reservation.result.description'),
          type: 'string'
        }
      },
      reserve_now: {
        arguments: {
          request: {
            '$ref': '/reservation#/Reservation',
            description: tc('reservation.cmds.reserve_now.arguments.request.description'),
            type: 'object'
          }
        },
        description: tc('reservation.cmds.reserve_now.description'),
        result: {
          '$ref': '/reservation#/ReservationResult',
          description: tc('reservation.cmds.reserve_now.result.description'),
          type: 'string'
        }
      }
    },
    description: tc('reservation.description'),
    vars: {
      reservation_update: {
        '$ref': '/reservation#/ReservationUpdateStatus',
        description: tc('reservation.vars.reservation_update.description'),
        type: 'object'
      }
    }
  },
  serial_communication_hub: {
    cmds: {
      modbus_read_holding_registers: {
        arguments: {
          first_register_address: {
            description: tc('serial_communication_hub.cmds.modbus_read_holding_registers.arguments.first_register_address.description'),
            maximum: 65535,
            minimum: 0,
            type: 'integer'
          },
          num_registers_to_read: {
            description: tc('serial_communication_hub.cmds.modbus_read_holding_registers.arguments.num_registers_to_read.description'),
            minimum: 1,
            type: 'integer'
          },
          target_device_id: {
            description: tc('serial_communication_hub.cmds.modbus_read_holding_registers.arguments.target_device_id.description'),
            maximum: 255,
            minimum: 0,
            type: 'integer'
          }
        },
        description: tc('serial_communication_hub.cmds.modbus_read_holding_registers.description'),
        result: {
          '$ref': '/serial_comm_hub_requests#/Result',
          description: tc('serial_communication_hub.cmds.modbus_read_holding_registers.result.description'),
          type: 'object'
        }
      },
      modbus_read_input_registers: {
        arguments: {
          first_register_address: {
            description: tc('serial_communication_hub.cmds.modbus_read_input_registers.arguments.first_register_address.description'),
            maximum: 65535,
            minimum: 0,
            type: 'integer'
          },
          num_registers_to_read: {
            description: tc('serial_communication_hub.cmds.modbus_read_input_registers.arguments.num_registers_to_read.description'),
            minimum: 1,
            type: 'integer'
          },
          target_device_id: {
            description: tc('serial_communication_hub.cmds.modbus_read_input_registers.arguments.target_device_id.description'),
            maximum: 255,
            minimum: 0,
            type: 'integer'
          }
        },
        description: tc('serial_communication_hub.cmds.modbus_read_input_registers.description'),
        result: {
          '$ref': '/serial_comm_hub_requests#/Result',
          description: tc('serial_communication_hub.cmds.modbus_read_input_registers.result.description'),
          type: 'object'
        }
      },
      modbus_write_multiple_registers: {
        arguments: {
          data_raw: {
            '$ref': '/serial_comm_hub_requests#/VectorUint16',
            description: tc('serial_communication_hub.cmds.modbus_write_multiple_registers.arguments.data_raw.description'),
            type: 'object'
          },
          first_register_address: {
            description: tc('serial_communication_hub.cmds.modbus_write_multiple_registers.arguments.first_register_address.description'),
            maximum: 65535,
            minimum: 0,
            type: 'integer'
          },
          target_device_id: {
            description: tc('serial_communication_hub.cmds.modbus_write_multiple_registers.arguments.target_device_id.description'),
            maximum: 255,
            minimum: 0,
            type: 'integer'
          }
        },
        description: tc('serial_communication_hub.cmds.modbus_write_multiple_registers.description'),
        result: {
          '$ref': '/serial_comm_hub_requests#/StatusCodeEnum',
          description: tc('serial_communication_hub.cmds.modbus_write_multiple_registers.result.description'),
          type: 'string'
        }
      },
      modbus_write_single_register: {
        arguments: {
          data: {
            description: tc('serial_communication_hub.cmds.modbus_write_single_register.arguments.data.description'),
            maximum: 65535,
            minimum: 0,
            type: 'integer'
          },
          register_address: {
            description: tc('serial_communication_hub.cmds.modbus_write_single_register.arguments.register_address.description'),
            maximum: 65535,
            minimum: 0,
            type: 'integer'
          },
          target_device_id: {
            description: tc('serial_communication_hub.cmds.modbus_write_single_register.arguments.target_device_id.description'),
            maximum: 255,
            minimum: 0,
            type: 'integer'
          }
        },
        description: tc('serial_communication_hub.cmds.modbus_write_single_register.description'),
        result: {
          '$ref': '/serial_comm_hub_requests#/StatusCodeEnum',
          description: tc('serial_communication_hub.cmds.modbus_write_single_register.result.description'),
          type: 'string'
        }
      },
      nonstd_read: {
        arguments: {
          first_register_address: {
            description: tc('serial_communication_hub.cmds.nonstd_read.arguments.first_register_address.description'),
            maximum: 65535,
            minimum: 0,
            type: 'integer'
          },
          num_registers_to_read: {
            description: tc('serial_communication_hub.cmds.nonstd_read.arguments.num_registers_to_read.description'),
            maximum: 65535,
            minimum: 0,
            type: 'integer'
          },
          target_device_id: {
            description: tc('serial_communication_hub.cmds.nonstd_read.arguments.target_device_id.description'),
            maximum: 255,
            minimum: 0,
            type: 'integer'
          }
        },
        description: tc('serial_communication_hub.cmds.nonstd_read.description'),
        result: {
          '$ref': '/serial_comm_hub_requests#/Result',
          description: tc('serial_communication_hub.cmds.nonstd_read.result.description'),
          type: 'object'
        }
      },
      nonstd_write: {
        arguments: {
          first_register_address: {
            description: tc('serial_communication_hub.cmds.nonstd_write.arguments.first_register_address.description'),
            maximum: 65535,
            minimum: 0,
            type: 'integer'
          },
          num_registers_to_read: {
            description: tc('serial_communication_hub.cmds.nonstd_write.arguments.num_registers_to_read.description'),
            minimum: 1,
            type: 'integer'
          },
          target_device_id: {
            description: tc('serial_communication_hub.cmds.nonstd_write.arguments.target_device_id.description'),
            maximum: 255,
            minimum: 0,
            type: 'integer'
          }
        },
        description: tc('serial_communication_hub.cmds.nonstd_write.description')
      }
    },
    description: tc('serial_communication_hub.description')
  },
  session_cost: {
    description: tc('session_cost.description'),
    vars: {
      session_cost: {
        '$ref': '/session_cost#/SessionCost',
        description: tc('session_cost.vars.session_cost.description'),
        type: 'object'
      },
      tariff_message: {
        '$ref': '/session_cost#/TariffMessage',
        description: tc('session_cost.vars.tariff_message.description'),
        type: 'object'
      }
    }
  },
  slac: {
    cmds: {
      dlink_error: {
        description: tc('slac.cmds.dlink_error.description'),
        result: {
          description: tc('slac.cmds.dlink_error.result.description'),
          type: 'boolean'
        }
      },
      dlink_pause: {
        description: tc('slac.cmds.dlink_pause.description'),
        result: {
          description: tc('slac.cmds.dlink_pause.result.description'),
          type: 'boolean'
        }
      },
      dlink_terminate: {
        description: tc('slac.cmds.dlink_terminate.description'),
        result: {
          description: tc('slac.cmds.dlink_terminate.result.description'),
          type: 'boolean'
        }
      },
      enter_bcd: {
        description: tc('slac.cmds.enter_bcd.description'),
        result: {
          description: tc('slac.cmds.enter_bcd.result.description'),
          type: 'boolean'
        }
      },
      leave_bcd: {
        description: tc('slac.cmds.leave_bcd.description'),
        result: {
          description: tc('slac.cmds.leave_bcd.result.description'),
          type: 'boolean'
        }
      },
      reset: {
        arguments: {
          enable: {
            description: tc('slac.cmds.reset.arguments.enable.description'),
            type: 'boolean'
          }
        },
        description: tc('slac.cmds.reset.description')
      }
    },
    description: tc('slac.description'),
    errors: [ { reference: '/errors/generic' } ],
    vars: {
      dlink_ready: {
        description: tc('slac.vars.dlink_ready.description'),
        type: 'boolean'
      },
      ev_mac_address: {
        description: tc('slac.vars.ev_mac_address.description'),
        pattern: '^[A-F0-9]{2}(:[A-F0-9]{2}){5}$',
        type: 'string'
      },
      request_error_routine: {
        description: tc('slac.vars.request_error_routine.description'),
        type: 'null'
      },
      state: {
        description: tc('slac.vars.state.description'),
        enum: [ 'UNMATCHED', 'MATCHING', 'MATCHED' ],
        type: 'string'
      }
    }
  },
  solar_forecast: {
    description: tc('solar_forecast.description'),
    vars: {
      forecast: {
        description: tc('solar_forecast.vars.forecast.description'),
        type: 'object'
      }
    }
  },
  sunspec_ac_meter: {
    cmds: {
      get_sunspec_ac_meter_value: {
        arguments: {
          auth_token: {
            description: tc('sunspec_ac_meter.cmds.get_sunspec_ac_meter_value.arguments.auth_token.description'),
            maxLength: 20,
            minLength: 1,
            type: 'string'
          }
        },
        description: tc('sunspec_ac_meter.cmds.get_sunspec_ac_meter_value.description'),
        result: {
          '$ref': '/sunspec_ac_meter#/Result',
          description: tc('sunspec_ac_meter.cmds.get_sunspec_ac_meter_value.result.description'),
          type: 'object'
        }
      }
    },
    description: tc('sunspec_ac_meter.description')
  },
  sunspec_reader: {
    description: tc('sunspec_reader.description'),
    vars: {
      measurement: {
        additionalProperties: true,
        description: tc('sunspec_reader.vars.measurement.description'),
        properties: {
          timestamp: {
            description: tc('sunspec_reader.vars.measurement.properties.timestamp.description'),
            type: 'number'
          },
          value: {
            description: tc('sunspec_reader.vars.measurement.properties.value.description'),
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
            description: tc('sunspec_scanner.cmds.scan_device.arguments.ip_address.description'),
            pattern: '^(?:[0-9]{1,3}\\.){3}[0-9]{1,3}$',
            type: 'string'
          }
        },
        description: tc('sunspec_scanner.cmds.scan_device.description'),
        result: {
          description: tc('sunspec_scanner.cmds.scan_device.result.description'),
          type: 'object'
        }
      },
      scan_network: {
        description: tc('sunspec_scanner.cmds.scan_network.description'),
        result: {
          description: tc('sunspec_scanner.cmds.scan_network.result.description'),
          type: 'object'
        }
      },
      scan_port: {
        arguments: {
          ip_address: {
            description: tc('sunspec_scanner.cmds.scan_port.arguments.ip_address.description'),
            pattern: '^(?:[0-9]{1,3}\\.){3}[0-9]{1,3}$',
            type: 'string'
          },
          port: {
            description: tc('sunspec_scanner.cmds.scan_port.arguments.port.description'),
            minimum: 0,
            type: 'integer'
          }
        },
        description: tc('sunspec_scanner.cmds.scan_port.description'),
        result: {
          description: tc('sunspec_scanner.cmds.scan_port.result.description'),
          type: 'object'
        }
      },
      scan_unit: {
        arguments: {
          ip_address: {
            description: tc('sunspec_scanner.cmds.scan_unit.arguments.ip_address.description'),
            pattern: '^(?:[0-9]{1,3}\\.){3}[0-9]{1,3}$',
            type: 'string'
          },
          port: {
            description: tc('sunspec_scanner.cmds.scan_unit.arguments.port.description'),
            minimum: 0,
            type: 'integer'
          },
          unit: {
            description: tc('sunspec_scanner.cmds.scan_unit.arguments.unit.description'),
            minimum: 0,
            type: 'integer'
          }
        },
        description: tc('sunspec_scanner.cmds.scan_unit.description'),
        result: {
          description: tc('sunspec_scanner.cmds.scan_unit.result.description'),
          type: 'object'
        }
      }
    },
    description: tc('sunspec_scanner.description')
  },
  system: {
    cmds: {
      allow_firmware_installation: {
        description: tc('system.cmds.allow_firmware_installation.description')
      },
      get_boot_reason: {
        description: tc('system.cmds.get_boot_reason.description'),
        result: {
          '$ref': '/system#/BootReason',
          description: tc('system.cmds.get_boot_reason.result.description'),
          type: 'string'
        }
      },
      is_reset_allowed: {
        arguments: {
          type: {
            '$ref': '/system#/ResetType',
            description: tc('system.cmds.is_reset_allowed.arguments.type.description'),
            type: 'string'
          }
        },
        description: tc('system.cmds.is_reset_allowed.description'),
        result: {
          description: tc('system.cmds.is_reset_allowed.result.description'),
          type: 'boolean'
        }
      },
      reset: {
        arguments: {
          scheduled: {
            description: tc('system.cmds.reset.arguments.scheduled.description'),
            type: 'boolean'
          },
          type: {
            '$ref': '/system#/ResetType',
            description: tc('system.cmds.reset.arguments.type.description'),
            type: 'string'
          }
        },
        description: tc('system.cmds.reset.description')
      },
      set_system_time: {
        arguments: {
          timestamp: {
            description: tc('system.cmds.set_system_time.arguments.timestamp.description'),
            format: 'date-time',
            type: 'string'
          }
        },
        description: tc('system.cmds.set_system_time.description'),
        result: {
          description: tc('system.cmds.set_system_time.result.description'),
          type: 'boolean'
        }
      },
      update_firmware: {
        arguments: {
          firmware_update_request: {
            '$ref': '/system#/FirmwareUpdateRequest',
            description: tc('system.cmds.update_firmware.arguments.firmware_update_request.description'),
            type: 'object'
          }
        },
        description: tc('system.cmds.update_firmware.description'),
        result: {
          '$ref': '/system#/UpdateFirmwareResponse',
          description: tc('system.cmds.update_firmware.result.description'),
          type: 'string'
        }
      },
      upload_logs: {
        arguments: {
          upload_logs_request: {
            '$ref': '/system#/UploadLogsRequest',
            description: tc('system.cmds.upload_logs.arguments.upload_logs_request.description'),
            type: 'object'
          }
        },
        description: tc('system.cmds.upload_logs.description'),
        result: {
          '$ref': '/system#/UploadLogsResponse',
          description: tc('system.cmds.upload_logs.result.description'),
          type: 'object'
        }
      }
    },
    description: tc('system.description'),
    errors: [ { reference: '/errors/system' } ],
    vars: {
      firmware_update_status: {
        '$ref': '/system#/FirmwareUpdateStatus',
        description: tc('system.vars.firmware_update_status.description'),
        type: 'object'
      },
      log_status: {
        '$ref': '/system#/LogStatus',
        description: tc('system.vars.log_status.description'),
        type: 'object'
      }
    }
  },
  test_control: {
    cmds: {
      start_charging: {
        arguments: {
          mode: {
            description: tc('test_control.cmds.start_charging.arguments.mode.description'),
            maxLength: 20,
            minLength: 1,
            type: 'string'
          }
        },
        description: tc('test_control.cmds.start_charging.description'),
        result: {
          description: tc('test_control.cmds.start_charging.result.description'),
          type: 'string'
        }
      }
    },
    description: tc('test_control.description'),
    vars: {
      state: {
        description: tc('test_control.vars.state.description'),
        type: 'string'
      }
    }
  },
  test_error_handling: {
    cmds: {
      clear_all_errors: {
        description: tc('test_error_handling.cmds.clear_all_errors.description')
      },
      clear_error: {
        arguments: {
          sub_type: {
            description: tc('test_error_handling.cmds.clear_error.arguments.sub_type.description'),
            type: 'string'
          },
          type: {
            description: tc('test_error_handling.cmds.clear_error.arguments.type.description'),
            enum: [
              'test_errors/TestErrorA',
              'test_errors/TestErrorB',
              'test_errors/TestErrorC',
              'test_errors/TestErrorD'
            ],
            type: 'string'
          }
        },
        description: tc('test_error_handling.cmds.clear_error.description')
      },
      raise_error: {
        arguments: {
          message: {
            description: tc('test_error_handling.cmds.raise_error.arguments.message.description'),
            type: 'string'
          },
          severity: {
            description: tc('test_error_handling.cmds.raise_error.arguments.severity.description'),
            enum: [ 'Low', 'Medium', 'High' ],
            type: 'string'
          },
          sub_type: {
            description: tc('test_error_handling.cmds.raise_error.arguments.sub_type.description'),
            type: 'string'
          },
          type: {
            description: tc('test_error_handling.cmds.raise_error.arguments.type.description'),
            enum: [
              'test_errors/TestErrorA',
              'test_errors/TestErrorB',
              'test_errors/TestErrorC',
              'test_errors/TestErrorD'
            ],
            type: 'string'
          }
        },
        description: tc('test_error_handling.cmds.raise_error.description')
      }
    },
    description: tc('test_error_handling.description'),
    errors: [
      { reference: '/errors/test_errors#/TestErrorA' },
      { reference: '/errors/test_errors#/TestErrorB' },
      { reference: '/errors/test_errors#/TestErrorC' },
      { reference: '/errors/test_errors#/TestErrorD' }
    ],
    vars: {
      errors_cleared_subscribe_TestErrorA: {
        description: tc('test_error_handling.vars.errors_cleared_subscribe_TestErrorA.description'),
        type: 'object'
      },
      errors_cleared_subscribe_TestErrorB: {
        description: tc('test_error_handling.vars.errors_cleared_subscribe_TestErrorB.description'),
        type: 'object'
      },
      errors_cleared_subscribe_all: {
        description: tc('test_error_handling.vars.errors_cleared_subscribe_all.description'),
        type: 'object'
      },
      errors_cleared_subscribe_global_all: {
        description: tc('test_error_handling.vars.errors_cleared_subscribe_global_all.description'),
        type: 'object'
      },
      errors_subscribe_TestErrorA: {
        description: tc('test_error_handling.vars.errors_subscribe_TestErrorA.description'),
        type: 'object'
      },
      errors_subscribe_TestErrorB: {
        description: tc('test_error_handling.vars.errors_subscribe_TestErrorB.description'),
        type: 'object'
      },
      errors_subscribe_all: {
        description: tc('test_error_handling.vars.errors_subscribe_all.description'),
        type: 'object'
      },
      errors_subscribe_global_all: {
        description: tc('test_error_handling.vars.errors_subscribe_global_all.description'),
        type: 'object'
      }
    }
  },
  test_error_raiser: {
    description: tc('test_error_raiser.description'),
    errors: [ { reference: '/errors/test_errors' } ]
  },
  tibber_price_forecast: {
    description: tc('tibber_price_forecast.description'),
    vars: {
      forecast: {
        description: tc('tibber_price_forecast.vars.forecast.description'),
        type: 'object'
      }
    }
  },
  uk_random_delay: {
    cmds: {
      cancel: { description: tc('uk_random_delay.cmds.cancel.description') },
      disable: { description: tc('uk_random_delay.cmds.disable.description') },
      enable: { description: tc('uk_random_delay.cmds.enable.description') },
      set_duration_s: {
        arguments: {
          value: {
            description: tc('uk_random_delay.cmds.set_duration_s.arguments.value.description'),
            type: 'integer'
          }
        },
        description: tc('uk_random_delay.cmds.set_duration_s.description')
      }
    },
    description: tc('uk_random_delay.description'),
    vars: {
      countdown: {
        '$ref': '/uk_random_delay#/CountDown',
        description: tc('uk_random_delay.vars.countdown.description'),
        type: 'object'
      }
    }
  }
} as EverestInterfaceDefinitionList;
