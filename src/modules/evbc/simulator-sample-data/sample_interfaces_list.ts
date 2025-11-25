// SPDX-License-Identifier: Apache-2.0
// Copyright 2020 - 2025 Pionix GmbH and Contributors to EVerest

// This file is generated, see README.md for more information.

import { EverestInterfaceDefinitionList, LocalizedString } from "../index";
import { computed } from "vue";
import { i18n } from "../../../plugins/i18n";
import { ComposerTranslation } from "vue-i18n";

const t = (i18n as unknown as { global: { t: ComposerTranslation } }).global.t;

/* eslint-disable prettier/prettier */
export default {
  ISO15118_charger: {
    cmds: {
      ac_contactor_closed: {
        arguments: {
          status: {
            description: computed(() => String(t("ISO15118_charger.cmds.ac_contactor_closed.arguments.status.description"))) as LocalizedString,
            type: 'boolean'
          }
        },
        description: computed(() => String(t("ISO15118_charger.cmds.ac_contactor_closed.description"))) as LocalizedString
      },
      authorization_response: {
        arguments: {
          authorization_status: {
            '$ref': '/authorization#/AuthorizationStatus',
            description: computed(() => String(t("ISO15118_charger.cmds.authorization_response.arguments.authorization_status.description"))) as LocalizedString,
            type: 'string'
          },
          certificate_status: {
            '$ref': '/authorization#/CertificateStatus',
            description: computed(() => String(t("ISO15118_charger.cmds.authorization_response.arguments.certificate_status.description"))) as LocalizedString,
            type: 'string'
          }
        },
        description: computed(() => String(t("ISO15118_charger.cmds.authorization_response.description"))) as LocalizedString
      },
      cable_check_finished: {
        arguments: {
          status: {
            description: computed(() => String(t("ISO15118_charger.cmds.cable_check_finished.arguments.status.description"))) as LocalizedString,
            type: 'boolean'
          }
        },
        description: computed(() => String(t("ISO15118_charger.cmds.cable_check_finished.description"))) as LocalizedString
      },
      dlink_ready: {
        arguments: {
          value: {
            description: computed(() => String(t("ISO15118_charger.cmds.dlink_ready.arguments.value.description"))) as LocalizedString,
            type: 'boolean'
          }
        },
        description: computed(() => String(t("ISO15118_charger.cmds.dlink_ready.description"))) as LocalizedString
      },
      pause_charging: {
        arguments: {
          pause: {
            description: computed(() => String(t("ISO15118_charger.cmds.pause_charging.arguments.pause.description"))) as LocalizedString,
            type: 'boolean'
          }
        },
        description: computed(() => String(t("ISO15118_charger.cmds.pause_charging.description"))) as LocalizedString
      },
      receipt_is_required: {
        arguments: {
          receipt_required: {
            description: computed(() => String(t("ISO15118_charger.cmds.receipt_is_required.arguments.receipt_required.description"))) as LocalizedString,
            type: 'boolean'
          }
        },
        description: computed(() => String(t("ISO15118_charger.cmds.receipt_is_required.description"))) as LocalizedString
      },
      reset_error: {
        description: computed(() => String(t("ISO15118_charger.cmds.reset_error.description"))) as LocalizedString
      },
      send_error: {
        arguments: {
          error: {
            '$ref': '/iso15118#/EvseError',
            description: computed(() => String(t("ISO15118_charger.cmds.send_error.arguments.error.description"))) as LocalizedString,
            type: 'string'
          }
        },
        description: computed(() => String(t("ISO15118_charger.cmds.send_error.description"))) as LocalizedString
      },
      session_setup: {
        arguments: {
          central_contract_validation_allowed: {
            description: computed(() => String(t("ISO15118_charger.cmds.session_setup.arguments.central_contract_validation_allowed.description"))) as LocalizedString,
            type: 'boolean'
          },
          payment_options: {
            description: computed(() => String(t("ISO15118_charger.cmds.session_setup.arguments.payment_options.description"))) as LocalizedString,
            items: {
              '$ref': '/iso15118#/PaymentOption',
              description: computed(() => String(t("ISO15118_charger.cmds.session_setup.arguments.payment_options.items.description"))) as LocalizedString,
              type: 'string'
            },
            maxItems: 2,
            minItems: 1,
            type: 'array'
          },
          supported_certificate_service: {
            description: computed(() => String(t("ISO15118_charger.cmds.session_setup.arguments.supported_certificate_service.description"))) as LocalizedString,
            type: 'boolean'
          }
        },
        description: computed(() => String(t("ISO15118_charger.cmds.session_setup.description"))) as LocalizedString
      },
      set_charging_parameters: {
        arguments: {
          physical_values: {
            '$ref': '/iso15118#/SetupPhysicalValues',
            description: computed(() => String(t("ISO15118_charger.cmds.set_charging_parameters.arguments.physical_values.description"))) as LocalizedString,
            type: 'object'
          }
        },
        description: computed(() => String(t("ISO15118_charger.cmds.set_charging_parameters.description"))) as LocalizedString
      },
      setup: {
        arguments: {
          debug_mode: {
            description: computed(() => String(t("ISO15118_charger.cmds.setup.arguments.debug_mode.description"))) as LocalizedString,
            type: 'boolean'
          },
          evse_id: {
            '$ref': '/iso15118#/EVSEID',
            description: computed(() => String(t("ISO15118_charger.cmds.setup.arguments.evse_id.description"))) as LocalizedString,
            type: 'object'
          },
          sae_j2847_mode: {
            '$ref': '/iso15118#/SaeJ2847BidiMode',
            description: computed(() => String(t("ISO15118_charger.cmds.setup.arguments.sae_j2847_mode.description"))) as LocalizedString,
            type: 'string'
          },
          supported_energy_transfer_modes: {
            description: computed(() => String(t("ISO15118_charger.cmds.setup.arguments.supported_energy_transfer_modes.description"))) as LocalizedString,
            items: {
              '$ref': '/iso15118#/SupportedEnergyMode',
              description: computed(() => String(t("ISO15118_charger.cmds.setup.arguments.supported_energy_transfer_modes.items.description"))) as LocalizedString,
              type: 'object'
            },
            maxItems: 6,
            minItems: 1,
            type: 'array'
          }
        },
        description: computed(() => String(t("ISO15118_charger.cmds.setup.description"))) as LocalizedString
      },
      stop_charging: {
        arguments: {
          stop: {
            description: computed(() => String(t("ISO15118_charger.cmds.stop_charging.arguments.stop.description"))) as LocalizedString,
            type: 'boolean'
          }
        },
        description: computed(() => String(t("ISO15118_charger.cmds.stop_charging.description"))) as LocalizedString
      },
      update_ac_max_current: {
        arguments: {
          max_current: {
            description: computed(() => String(t("ISO15118_charger.cmds.update_ac_max_current.arguments.max_current.description"))) as LocalizedString,
            maximum: 400,
            minimum: 0,
            type: 'number'
          }
        },
        description: computed(() => String(t("ISO15118_charger.cmds.update_ac_max_current.description"))) as LocalizedString
      },
      update_dc_maximum_limits: {
        arguments: {
          maximum_limits: {
            '$ref': '/iso15118#/DcEvseMaximumLimits',
            description: computed(() => String(t("ISO15118_charger.cmds.update_dc_maximum_limits.arguments.maximum_limits.description"))) as LocalizedString,
            type: 'object'
          }
        },
        description: computed(() => String(t("ISO15118_charger.cmds.update_dc_maximum_limits.description"))) as LocalizedString
      },
      update_dc_minimum_limits: {
        arguments: {
          minimum_limits: {
            '$ref': '/iso15118#/DcEvseMinimumLimits',
            description: computed(() => String(t("ISO15118_charger.cmds.update_dc_minimum_limits.arguments.minimum_limits.description"))) as LocalizedString,
            type: 'object'
          }
        },
        description: computed(() => String(t("ISO15118_charger.cmds.update_dc_minimum_limits.description"))) as LocalizedString
      },
      update_dc_present_values: {
        arguments: {
          present_voltage_current: {
            '$ref': '/iso15118#/DcEvsePresentVoltageCurrent',
            description: computed(() => String(t("ISO15118_charger.cmds.update_dc_present_values.arguments.present_voltage_current.description"))) as LocalizedString,
            type: 'object'
          }
        },
        description: computed(() => String(t("ISO15118_charger.cmds.update_dc_present_values.description"))) as LocalizedString
      },
      update_isolation_status: {
        arguments: {
          isolation_status: {
            '$ref': '/iso15118#/IsolationStatus',
            description: computed(() => String(t("ISO15118_charger.cmds.update_isolation_status.arguments.isolation_status.description"))) as LocalizedString,
            type: 'string'
          }
        },
        description: computed(() => String(t("ISO15118_charger.cmds.update_isolation_status.description"))) as LocalizedString
      },
      update_meter_info: {
        arguments: {
          powermeter: {
            '$ref': '/powermeter#/Powermeter',
            description: computed(() => String(t("ISO15118_charger.cmds.update_meter_info.arguments.powermeter.description"))) as LocalizedString,
            type: 'object'
          }
        },
        description: computed(() => String(t("ISO15118_charger.cmds.update_meter_info.description"))) as LocalizedString
      }
    },
    description: computed(() => String(t("ISO15118_charger.description"))) as LocalizedString,
    vars: {
      ac_close_contactor: {
        description: computed(() => String(t("ISO15118_charger.vars.ac_close_contactor.description"))) as LocalizedString,
        type: 'null'
      },
      ac_eamount: {
        description: computed(() => String(t("ISO15118_charger.vars.ac_eamount.description"))) as LocalizedString,
        maximum: 200000,
        minimum: 0,
        type: 'number'
      },
      ac_ev_max_current: {
        description: computed(() => String(t("ISO15118_charger.vars.ac_ev_max_current.description"))) as LocalizedString,
        maximum: 400,
        minimum: 0,
        type: 'number'
      },
      ac_ev_max_voltage: {
        description: computed(() => String(t("ISO15118_charger.vars.ac_ev_max_voltage.description"))) as LocalizedString,
        maximum: 1000,
        minimum: 0,
        type: 'number'
      },
      ac_ev_min_current: {
        description: computed(() => String(t("ISO15118_charger.vars.ac_ev_min_current.description"))) as LocalizedString,
        maximum: 400,
        minimum: 0,
        type: 'number'
      },
      ac_open_contactor: {
        description: computed(() => String(t("ISO15118_charger.vars.ac_open_contactor.description"))) as LocalizedString,
        type: 'null'
      },
      current_demand_finished: {
        description: computed(() => String(t("ISO15118_charger.vars.current_demand_finished.description"))) as LocalizedString,
        type: 'null'
      },
      current_demand_started: {
        description: computed(() => String(t("ISO15118_charger.vars.current_demand_started.description"))) as LocalizedString,
        type: 'null'
      },
      d20_dc_dynamic_charge_mode: {
        '$ref': '/iso15118#/DcChargeDynamicModeValues',
        description: computed(() => String(t("ISO15118_charger.vars.d20_dc_dynamic_charge_mode.description"))) as LocalizedString,
        type: 'object'
      },
      dc_bulk_charging_complete: {
        description: computed(() => String(t("ISO15118_charger.vars.dc_bulk_charging_complete.description"))) as LocalizedString,
        type: 'boolean'
      },
      dc_bulk_soc: {
        description: computed(() => String(t("ISO15118_charger.vars.dc_bulk_soc.description"))) as LocalizedString,
        maximum: 100,
        minimum: 0,
        type: 'number'
      },
      dc_charging_complete: {
        description: computed(() => String(t("ISO15118_charger.vars.dc_charging_complete.description"))) as LocalizedString,
        type: 'boolean'
      },
      dc_ev_energy_capacity: {
        description: computed(() => String(t("ISO15118_charger.vars.dc_ev_energy_capacity.description"))) as LocalizedString,
        maximum: 200000,
        minimum: 0,
        type: 'number'
      },
      dc_ev_energy_request: {
        description: computed(() => String(t("ISO15118_charger.vars.dc_ev_energy_request.description"))) as LocalizedString,
        maximum: 200000,
        minimum: 0,
        type: 'number'
      },
      dc_ev_maximum_limits: {
        '$ref': '/iso15118#/DcEvMaximumLimits',
        description: computed(() => String(t("ISO15118_charger.vars.dc_ev_maximum_limits.description"))) as LocalizedString,
        type: 'object'
      },
      dc_ev_present_voltage: {
        description: computed(() => String(t("ISO15118_charger.vars.dc_ev_present_voltage.description"))) as LocalizedString,
        type: 'number'
      },
      dc_ev_remaining_time: {
        '$ref': '/iso15118#/DcEvRemainingTime',
        description: computed(() => String(t("ISO15118_charger.vars.dc_ev_remaining_time.description"))) as LocalizedString,
        type: 'object'
      },
      dc_ev_status: {
        '$ref': '/iso15118#/DcEvStatus',
        description: computed(() => String(t("ISO15118_charger.vars.dc_ev_status.description"))) as LocalizedString,
        type: 'object'
      },
      dc_ev_target_voltage_current: {
        '$ref': '/iso15118#/DcEvTargetValues',
        description: computed(() => String(t("ISO15118_charger.vars.dc_ev_target_voltage_current.description"))) as LocalizedString,
        type: 'object'
      },
      dc_full_soc: {
        description: computed(() => String(t("ISO15118_charger.vars.dc_full_soc.description"))) as LocalizedString,
        maximum: 100,
        minimum: 0,
        type: 'number'
      },
      dc_open_contactor: {
        description: computed(() => String(t("ISO15118_charger.vars.dc_open_contactor.description"))) as LocalizedString,
        type: 'null'
      },
      departure_time: {
        description: computed(() => String(t("ISO15118_charger.vars.departure_time.description"))) as LocalizedString,
        format: 'date-time',
        type: 'string'
      },
      display_parameters: {
        '$ref': '/iso15118#/DisplayParameters',
        description: computed(() => String(t("ISO15118_charger.vars.display_parameters.description"))) as LocalizedString,
        type: 'object'
      },
      dlink_error: {
        description: computed(() => String(t("ISO15118_charger.vars.dlink_error.description"))) as LocalizedString,
        type: 'null'
      },
      dlink_pause: {
        description: computed(() => String(t("ISO15118_charger.vars.dlink_pause.description"))) as LocalizedString,
        type: 'null'
      },
      dlink_terminate: {
        description: computed(() => String(t("ISO15118_charger.vars.dlink_terminate.description"))) as LocalizedString,
        type: 'null'
      },
      ev_app_protocol: {
        '$ref': '/iso15118#/AppProtocols',
        description: computed(() => String(t("ISO15118_charger.vars.ev_app_protocol.description"))) as LocalizedString,
        type: 'object'
      },
      evcc_id: {
        description: computed(() => String(t("ISO15118_charger.vars.evcc_id.description"))) as LocalizedString,
        pattern: '^[A-F0-9]{2}(:[A-F0-9]{2}){5}$',
        type: 'string'
      },
      meter_info_requested: {
        description: computed(() => String(t("ISO15118_charger.vars.meter_info_requested.description"))) as LocalizedString,
        type: 'null'
      },
      requested_energy_transfer_mode: {
        '$ref': '/iso15118#/EnergyTransferMode',
        description: computed(() => String(t("ISO15118_charger.vars.requested_energy_transfer_mode.description"))) as LocalizedString,
        type: 'string'
      },
      require_auth_eim: {
        description: computed(() => String(t("ISO15118_charger.vars.require_auth_eim.description"))) as LocalizedString,
        type: 'null'
      },
      require_auth_pnc: {
        '$ref': '/authorization#/ProvidedIdToken',
        description: computed(() => String(t("ISO15118_charger.vars.require_auth_pnc.description"))) as LocalizedString,
        type: 'object'
      },
      sae_bidi_mode_active: {
        description: computed(() => String(t("ISO15118_charger.vars.sae_bidi_mode_active.description"))) as LocalizedString,
        type: 'null'
      },
      selected_payment_option: {
        '$ref': '/iso15118#/PaymentOption',
        description: computed(() => String(t("ISO15118_charger.vars.selected_payment_option.description"))) as LocalizedString,
        type: 'string'
      },
      selected_protocol: {
        description: computed(() => String(t("ISO15118_charger.vars.selected_protocol.description"))) as LocalizedString,
        type: 'string'
      },
      start_cable_check: {
        description: computed(() => String(t("ISO15118_charger.vars.start_cable_check.description"))) as LocalizedString,
        type: 'null'
      },
      start_pre_charge: {
        description: computed(() => String(t("ISO15118_charger.vars.start_pre_charge.description"))) as LocalizedString,
        type: 'null'
      },
      v2g_messages: {
        '$ref': '/iso15118#/V2gMessages',
        description: computed(() => String(t("ISO15118_charger.vars.v2g_messages.description"))) as LocalizedString,
        type: 'object'
      },
      v2g_setup_finished: {
        description: computed(() => String(t("ISO15118_charger.vars.v2g_setup_finished.description"))) as LocalizedString,
        type: 'null'
      }
    }
  },
  ISO15118_ev: {
    cmds: {
      enable_sae_j2847_v2g_v2h: {
        description: computed(() => String(t("ISO15118_ev.cmds.enable_sae_j2847_v2g_v2h.description"))) as LocalizedString
      },
      pause_charging: {
        description: computed(() => String(t("ISO15118_ev.cmds.pause_charging.description"))) as LocalizedString
      },
      set_bpt_dc_params: {
        arguments: {
          EvBPTParameters: {
            '$ref': '/iso15118#/DcEvBPTParameters',
            description: computed(() => String(t("ISO15118_ev.cmds.set_bpt_dc_params.arguments.EvBPTParameters.description"))) as LocalizedString,
            type: 'object'
          }
        },
        description: computed(() => String(t("ISO15118_ev.cmds.set_bpt_dc_params.description"))) as LocalizedString
      },
      set_dc_params: {
        arguments: {
          EvParameters: {
            '$ref': '/iso15118#/DcEvParameters',
            description: computed(() => String(t("ISO15118_ev.cmds.set_dc_params.arguments.EvParameters.description"))) as LocalizedString,
            type: 'object'
          }
        },
        description: computed(() => String(t("ISO15118_ev.cmds.set_dc_params.description"))) as LocalizedString
      },
      set_fault: {
        description: computed(() => String(t("ISO15118_ev.cmds.set_fault.description"))) as LocalizedString
      },
      start_charging: {
        arguments: {
          DepartureTime: {
            description: computed(() => String(t("ISO15118_ev.cmds.start_charging.arguments.DepartureTime.description"))) as LocalizedString,
            type: 'number'
          },
          EAmount: {
            description: computed(() => String(t("ISO15118_ev.cmds.start_charging.arguments.EAmount.description"))) as LocalizedString,
            type: 'number'
          },
          EnergyTransferMode: {
            '$ref': '/iso15118#/EnergyTransferMode',
            description: computed(() => String(t("ISO15118_ev.cmds.start_charging.arguments.EnergyTransferMode.description"))) as LocalizedString,
            type: 'string'
          }
        },
        description: computed(() => String(t("ISO15118_ev.cmds.start_charging.description"))) as LocalizedString,
        result: {
          description: computed(() => String(t("ISO15118_ev.cmds.start_charging.result.description"))) as LocalizedString,
          type: 'boolean'
        }
      },
      stop_charging: {
        description: computed(() => String(t("ISO15118_ev.cmds.stop_charging.description"))) as LocalizedString
      }
    },
    description: computed(() => String(t("ISO15118_ev.description"))) as LocalizedString,
    vars: {
      AC_EVPowerReady: {
        description: computed(() => String(t("ISO15118_ev.vars.AC_EVPowerReady.description"))) as LocalizedString,
        type: 'boolean'
      },
      AC_EVSEMaxCurrent: {
        description: computed(() => String(t("ISO15118_ev.vars.AC_EVSEMaxCurrent.description"))) as LocalizedString,
        maximum: 400,
        minimum: 0,
        type: 'number'
      },
      AC_StopFromCharger: {
        description: computed(() => String(t("ISO15118_ev.vars.AC_StopFromCharger.description"))) as LocalizedString,
        type: 'null'
      },
      DC_PowerOn: {
        description: computed(() => String(t("ISO15118_ev.vars.DC_PowerOn.description"))) as LocalizedString,
        type: 'null'
      },
      V2G_Session_Finished: {
        description: computed(() => String(t("ISO15118_ev.vars.V2G_Session_Finished.description"))) as LocalizedString,
        type: 'null'
      },
      pause_from_charger: {
        description: computed(() => String(t("ISO15118_ev.vars.pause_from_charger.description"))) as LocalizedString,
        type: 'null'
      }
    }
  },
  ISO15118_vas: {
    cmds: {
      get_service_parameters: {
        arguments: {
          service_id: {
            description: computed(() => String(t("ISO15118_vas.cmds.get_service_parameters.arguments.service_id.description"))) as LocalizedString,
            type: 'integer'
          }
        },
        description: computed(() => String(t("ISO15118_vas.cmds.get_service_parameters.description"))) as LocalizedString,
        result: {
          description: computed(() => String(t("ISO15118_vas.cmds.get_service_parameters.result.description"))) as LocalizedString,
          items: { '$ref': '/iso15118_vas#/ParameterSet', type: 'object' },
          type: 'array'
        }
      },
      selected_services: {
        arguments: {
          selected_services: {
            description: computed(() => String(t("ISO15118_vas.cmds.selected_services.arguments.selected_services.description"))) as LocalizedString,
            items: {
              '$ref': '/iso15118_vas#/SelectedService',
              type: 'object'
            },
            type: 'array'
          }
        },
        description: computed(() => String(t("ISO15118_vas.cmds.selected_services.description"))) as LocalizedString
      }
    },
    description: computed(() => String(t("ISO15118_vas.description"))) as LocalizedString,
    vars: {
      offered_vas: {
        '$ref': '/iso15118_vas#/OfferedServices',
        description: computed(() => String(t("ISO15118_vas.vars.offered_vas.description"))) as LocalizedString,
        type: 'object'
      }
    }
  },
  ac_rcd: {
    cmds: {
      reset: {
        description: computed(() => String(t("ac_rcd.cmds.reset.description"))) as LocalizedString,
        result: {
          description: computed(() => String(t("ac_rcd.cmds.reset.result.description"))) as LocalizedString,
          type: 'boolean'
        }
      },
      self_test: {
        description: computed(() => String(t("ac_rcd.cmds.self_test.description"))) as LocalizedString
      }
    },
    description: computed(() => String(t("ac_rcd.description"))) as LocalizedString,
    errors: [ { reference: '/errors/ac_rcd' } ],
    vars: {
      rcd_current_mA: {
        description: computed(() => String(t("ac_rcd.vars.rcd_current_mA.description"))) as LocalizedString,
        type: 'number'
      }
    }
  },
  auth: {
    cmds: {
      set_connection_timeout: {
        arguments: {
          connection_timeout: {
            description: computed(() => String(t("auth.cmds.set_connection_timeout.arguments.connection_timeout.description"))) as LocalizedString,
            maximum: 300,
            minimum: 10,
            type: 'integer'
          }
        },
        description: computed(() => String(t("auth.cmds.set_connection_timeout.description"))) as LocalizedString
      },
      set_master_pass_group_id: {
        arguments: {
          master_pass_group_id: {
            description: computed(() => String(t("auth.cmds.set_master_pass_group_id.arguments.master_pass_group_id.description"))) as LocalizedString,
            maxLength: 36,
            type: 'string'
          }
        },
        description: computed(() => String(t("auth.cmds.set_master_pass_group_id.description"))) as LocalizedString
      },
      withdraw_authorization: {
        arguments: {
          request: {
            '$ref': '/authorization#/WithdrawAuthorizationRequest',
            description: computed(() => String(t("auth.cmds.withdraw_authorization.arguments.request.description"))) as LocalizedString,
            type: 'object'
          }
        },
        description: computed(() => String(t("auth.cmds.withdraw_authorization.description"))) as LocalizedString,
        result: {
          '$ref': '/authorization#/WithdrawAuthorizationResult',
          description: computed(() => String(t("auth.cmds.withdraw_authorization.result.description"))) as LocalizedString,
          type: 'string'
        }
      }
    },
    description: computed(() => String(t("auth.description"))) as LocalizedString,
    errors: [ { reference: '/errors/generic' } ],
    vars: {
      token_validation_status: {
        '$ref': '/authorization#/TokenValidationStatusMessage',
        description: computed(() => String(t("auth.vars.token_validation_status.description"))) as LocalizedString,
        type: 'object'
      }
    }
  },
  auth_token_provider: {
    description: computed(() => String(t("auth_token_provider.description"))) as LocalizedString,
    errors: [ { reference: '/errors/generic' } ],
    vars: {
      provided_token: {
        '$ref': '/authorization#/ProvidedIdToken',
        description: computed(() => String(t("auth_token_provider.vars.provided_token.description"))) as LocalizedString,
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
            description: computed(() => String(t("auth_token_validator.cmds.validate_token.arguments.provided_token.description"))) as LocalizedString,
            type: 'object'
          }
        },
        description: computed(() => String(t("auth_token_validator.cmds.validate_token.description"))) as LocalizedString,
        result: {
          '$ref': '/authorization#/ValidationResult',
          description: computed(() => String(t("auth_token_validator.cmds.validate_token.result.description"))) as LocalizedString,
          type: 'object'
        }
      }
    },
    description: computed(() => String(t("auth_token_validator.description"))) as LocalizedString,
    errors: [ { reference: '/errors/generic' } ],
    vars: {
      validate_result_update: {
        '$ref': '/authorization#/ValidationResultUpdate',
        description: computed(() => String(t("auth_token_validator.vars.validate_result_update.description"))) as LocalizedString,
        type: 'object'
      }
    }
  },
  bank_session_token_provider: {
    cmds: {
      get_bank_session_token: {
        description: computed(() => String(t("bank_session_token_provider.cmds.get_bank_session_token.description"))) as LocalizedString,
        result: {
          '$ref': '/payment_terminal#/BankSessionToken',
          description: computed(() => String(t("bank_session_token_provider.cmds.get_bank_session_token.result.description"))) as LocalizedString,
          type: 'object'
        }
      }
    },
    description: computed(() => String(t("bank_session_token_provider.description"))) as LocalizedString
  },
  car_simulator: {
    cmds: {
      enable: {
        arguments: {
          value: {
            description: computed(() => String(t("car_simulator.cmds.enable.arguments.value.description"))) as LocalizedString,
            type: 'boolean'
          }
        },
        description: computed(() => String(t("car_simulator.cmds.enable.description"))) as LocalizedString
      },
      execute_charging_session: {
        arguments: {
          value: {
            description: computed(() => String(t("car_simulator.cmds.execute_charging_session.arguments.value.description"))) as LocalizedString,
            type: 'string'
          }
        },
        description: computed(() => String(t("car_simulator.cmds.execute_charging_session.description"))) as LocalizedString
      }
    },
    description: computed(() => String(t("car_simulator.description"))) as LocalizedString,
    vars: {
      enabled: {
        description: computed(() => String(t("car_simulator.vars.enabled.description"))) as LocalizedString,
        type: 'boolean'
      }
    }
  },
  connector_lock: {
    cmds: {
      lock: {
        description: computed(() => String(t("connector_lock.cmds.lock.description"))) as LocalizedString
      },
      unlock: {
        description: computed(() => String(t("connector_lock.cmds.unlock.description"))) as LocalizedString
      }
    },
    description: computed(() => String(t("connector_lock.description"))) as LocalizedString,
    errors: [ { reference: '/errors/connector_lock' } ]
  },
  debug_json: {
    description: computed(() => String(t("debug_json.description"))) as LocalizedString,
    vars: {
      debug_json: {
        description: computed(() => String(t("debug_json.vars.debug_json.description"))) as LocalizedString,
        type: 'object'
      },
      title: {
        description: computed(() => String(t("debug_json.vars.title.description"))) as LocalizedString,
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
            description: computed(() => String(t("display_message.cmds.clear_display_message.arguments.request.description"))) as LocalizedString,
            type: 'object'
          }
        },
        description: computed(() => String(t("display_message.cmds.clear_display_message.description"))) as LocalizedString,
        result: {
          '$ref': '/display_message#/ClearDisplayMessageResponse',
          description: computed(() => String(t("display_message.cmds.clear_display_message.result.description"))) as LocalizedString,
          type: 'object'
        }
      },
      get_display_messages: {
        arguments: {
          request: {
            '$ref': '/display_message#/GetDisplayMessageRequest',
            description: computed(() => String(t("display_message.cmds.get_display_messages.arguments.request.description"))) as LocalizedString,
            type: 'object'
          }
        },
        description: computed(() => String(t("display_message.cmds.get_display_messages.description"))) as LocalizedString,
        result: {
          '$ref': '/display_message#/GetDisplayMessageResponse',
          description: computed(() => String(t("display_message.cmds.get_display_messages.result.description"))) as LocalizedString,
          type: 'object'
        }
      },
      set_display_message: {
        arguments: {
          request: {
            description: computed(() => String(t("display_message.cmds.set_display_message.arguments.request.description"))) as LocalizedString,
            items: {
              '$ref': '/display_message#/DisplayMessage',
              description: computed(() => String(t("display_message.cmds.set_display_message.arguments.request.items.description"))) as LocalizedString,
              type: 'object'
            },
            type: 'array'
          }
        },
        description: computed(() => String(t("display_message.cmds.set_display_message.description"))) as LocalizedString,
        result: {
          '$ref': '/display_message#/SetDisplayMessageResponse',
          description: computed(() => String(t("display_message.cmds.set_display_message.result.description"))) as LocalizedString,
          type: 'object'
        }
      }
    },
    description: computed(() => String(t("display_message.description"))) as LocalizedString
  },
  empty: {
    description: computed(() => String(t("empty.description"))) as LocalizedString
  },
  energy: {
    cmds: {
      enforce_limits: {
        arguments: {
          value: {
            '$ref': '/energy#/EnforcedLimits',
            description: computed(() => String(t("energy.cmds.enforce_limits.arguments.value.description"))) as LocalizedString,
            type: 'object'
          }
        },
        description: computed(() => String(t("energy.cmds.enforce_limits.description"))) as LocalizedString
      }
    },
    description: computed(() => String(t("energy.description"))) as LocalizedString,
    vars: {
      energy_flow_request: {
        '$ref': '/energy#/EnergyFlowRequest',
        description: computed(() => String(t("energy.vars.energy_flow_request.description"))) as LocalizedString,
        type: 'object'
      }
    }
  },
  energy_manager: {
    description: computed(() => String(t("energy_manager.description"))) as LocalizedString,
    vars: {}
  },
  energy_price_information: {
    description: computed(() => String(t("energy_price_information.description"))) as LocalizedString,
    vars: {
      energy_pricing: {
        '$ref': '/energy_price_information#/EnergyPriceSchedule',
        description: computed(() => String(t("energy_price_information.vars.energy_pricing.description"))) as LocalizedString,
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
            description: computed(() => String(t("error_history.cmds.get_errors.arguments.filters.description"))) as LocalizedString,
            type: 'object'
          }
        },
        description: computed(() => String(t("error_history.cmds.get_errors.description"))) as LocalizedString,
        result: {
          description: computed(() => String(t("error_history.cmds.get_errors.result.description"))) as LocalizedString,
          items: { '$ref': '/error_history#/ErrorObject' },
          type: 'array'
        }
      }
    },
    description: computed(() => String(t("error_history.description"))) as LocalizedString
  },
  ev_board_support: {
    cmds: {
      allow_power_on: {
        arguments: {
          value: {
            description: computed(() => String(t("ev_board_support.cmds.allow_power_on.arguments.value.description"))) as LocalizedString,
            type: 'boolean'
          }
        },
        description: computed(() => String(t("ev_board_support.cmds.allow_power_on.description"))) as LocalizedString
      },
      diode_fail: {
        arguments: {
          value: {
            description: computed(() => String(t("ev_board_support.cmds.diode_fail.arguments.value.description"))) as LocalizedString,
            type: 'boolean'
          }
        },
        description: computed(() => String(t("ev_board_support.cmds.diode_fail.description"))) as LocalizedString
      },
      enable: {
        arguments: {
          value: {
            description: computed(() => String(t("ev_board_support.cmds.enable.arguments.value.description"))) as LocalizedString,
            type: 'boolean'
          }
        },
        description: computed(() => String(t("ev_board_support.cmds.enable.description"))) as LocalizedString
      },
      set_ac_max_current: {
        arguments: {
          current: {
            description: computed(() => String(t("ev_board_support.cmds.set_ac_max_current.arguments.current.description"))) as LocalizedString,
            type: 'number'
          }
        },
        description: computed(() => String(t("ev_board_support.cmds.set_ac_max_current.description"))) as LocalizedString
      },
      set_cp_state: {
        arguments: {
          cp_state: {
            '$ref': '/ev_board_support#/EvCpState',
            description: computed(() => String(t("ev_board_support.cmds.set_cp_state.arguments.cp_state.description"))) as LocalizedString,
            type: 'string'
          }
        },
        description: computed(() => String(t("ev_board_support.cmds.set_cp_state.description"))) as LocalizedString
      },
      set_rcd_error: {
        arguments: {
          rcd_current_mA: {
            description: computed(() => String(t("ev_board_support.cmds.set_rcd_error.arguments.rcd_current_mA.description"))) as LocalizedString,
            type: 'number'
          }
        },
        description: computed(() => String(t("ev_board_support.cmds.set_rcd_error.description"))) as LocalizedString
      },
      set_three_phases: {
        arguments: {
          three_phases: {
            description: computed(() => String(t("ev_board_support.cmds.set_three_phases.arguments.three_phases.description"))) as LocalizedString,
            type: 'boolean'
          }
        },
        description: computed(() => String(t("ev_board_support.cmds.set_three_phases.description"))) as LocalizedString
      }
    },
    description: computed(() => String(t("ev_board_support.description"))) as LocalizedString,
    errors: [ { reference: '/errors/generic' } ],
    vars: {
      bsp_event: {
        '$ref': '/board_support_common#/BspEvent',
        description: computed(() => String(t("ev_board_support.vars.bsp_event.description"))) as LocalizedString,
        type: 'object'
      },
      bsp_measurement: {
        '$ref': '/board_support_common#/BspMeasurement',
        description: computed(() => String(t("ev_board_support.vars.bsp_measurement.description"))) as LocalizedString,
        type: 'object'
      },
      ev_info: {
        '$ref': '/evse_manager#/EVInfo',
        description: computed(() => String(t("ev_board_support.vars.ev_info.description"))) as LocalizedString,
        type: 'object'
      }
    }
  },
  ev_manager: {
    cmds: {},
    description: computed(() => String(t("ev_manager.description"))) as LocalizedString,
    errors: [ { reference: '/errors/evse_manager' } ],
    vars: {
      bsp_event: {
        '$ref': '/board_support_common#/BspEvent',
        description: computed(() => String(t("ev_manager.vars.bsp_event.description"))) as LocalizedString,
        type: 'object'
      },
      ev_info: {
        '$ref': '/evse_manager#/EVInfo',
        description: computed(() => String(t("ev_manager.vars.ev_info.description"))) as LocalizedString,
        type: 'object'
      }
    }
  },
  ev_slac: {
    cmds: {
      reset: {
        description: computed(() => String(t("ev_slac.cmds.reset.description"))) as LocalizedString
      },
      trigger_matching: {
        description: computed(() => String(t("ev_slac.cmds.trigger_matching.description"))) as LocalizedString,
        result: {
          description: computed(() => String(t("ev_slac.cmds.trigger_matching.result.description"))) as LocalizedString,
          type: 'boolean'
        }
      }
    },
    description: computed(() => String(t("ev_slac.description"))) as LocalizedString,
    errors: [ { reference: '/errors/generic' } ],
    vars: {
      dlink_ready: {
        description: computed(() => String(t("ev_slac.vars.dlink_ready.description"))) as LocalizedString,
        type: 'boolean'
      },
      ev_mac_address: {
        description: computed(() => String(t("ev_slac.vars.ev_mac_address.description"))) as LocalizedString,
        pattern: '^[A-F0-9]{2}(:[A-F0-9]{2}){5}$',
        type: 'string'
      },
      state: {
        description: computed(() => String(t("ev_slac.vars.state.description"))) as LocalizedString,
        enum: [ 'UNMATCHED', 'MATCHING', 'MATCHED' ],
        type: 'string'
      }
    }
  },
  evse_board_support: {
    cmds: {
      ac_read_pp_ampacity: {
        description: computed(() => String(t("evse_board_support.cmds.ac_read_pp_ampacity.description"))) as LocalizedString,
        result: {
          '$ref': '/board_support_common#/ProximityPilot',
          description: computed(() => String(t("evse_board_support.cmds.ac_read_pp_ampacity.result.description"))) as LocalizedString,
          type: 'object'
        }
      },
      ac_set_overcurrent_limit_A: {
        arguments: {
          value: {
            description: computed(() => String(t("evse_board_support.cmds.ac_set_overcurrent_limit_A.arguments.value.description"))) as LocalizedString,
            type: 'number'
          }
        },
        description: computed(() => String(t("evse_board_support.cmds.ac_set_overcurrent_limit_A.description"))) as LocalizedString
      },
      ac_switch_three_phases_while_charging: {
        arguments: {
          value: {
            description: computed(() => String(t("evse_board_support.cmds.ac_switch_three_phases_while_charging.arguments.value.description"))) as LocalizedString,
            type: 'boolean'
          }
        },
        description: computed(() => String(t("evse_board_support.cmds.ac_switch_three_phases_while_charging.description"))) as LocalizedString
      },
      allow_power_on: {
        arguments: {
          value: {
            '$ref': '/evse_board_support#/PowerOnOff',
            description: computed(() => String(t("evse_board_support.cmds.allow_power_on.arguments.value.description"))) as LocalizedString,
            type: 'object'
          }
        },
        description: computed(() => String(t("evse_board_support.cmds.allow_power_on.description"))) as LocalizedString
      },
      enable: {
        arguments: {
          value: {
            description: computed(() => String(t("evse_board_support.cmds.enable.arguments.value.description"))) as LocalizedString,
            type: 'boolean'
          }
        },
        description: computed(() => String(t("evse_board_support.cmds.enable.description"))) as LocalizedString
      },
      evse_replug: {
        arguments: {
          value: {
            description: computed(() => String(t("evse_board_support.cmds.evse_replug.arguments.value.description"))) as LocalizedString,
            type: 'integer'
          }
        },
        description: computed(() => String(t("evse_board_support.cmds.evse_replug.description"))) as LocalizedString
      },
      pwm_F: {
        description: computed(() => String(t("evse_board_support.cmds.pwm_F.description"))) as LocalizedString
      },
      pwm_off: {
        description: computed(() => String(t("evse_board_support.cmds.pwm_off.description"))) as LocalizedString
      },
      pwm_on: {
        arguments: {
          value: {
            description: computed(() => String(t("evse_board_support.cmds.pwm_on.arguments.value.description"))) as LocalizedString,
            maximum: 100,
            minimum: 0,
            type: 'number'
          }
        },
        description: computed(() => String(t("evse_board_support.cmds.pwm_on.description"))) as LocalizedString
      }
    },
    description: computed(() => String(t("evse_board_support.description"))) as LocalizedString,
    errors: [
      { reference: '/errors/evse_board_support' },
      { reference: '/errors/ac_rcd' }
    ],
    vars: {
      ac_nr_of_phases_available: {
        description: computed(() => String(t("evse_board_support.vars.ac_nr_of_phases_available.description"))) as LocalizedString,
        maximum: 3,
        minimum: 1,
        type: 'integer'
      },
      ac_pp_ampacity: {
        '$ref': '/board_support_common#/ProximityPilot',
        description: computed(() => String(t("evse_board_support.vars.ac_pp_ampacity.description"))) as LocalizedString,
        type: 'object'
      },
      capabilities: {
        '$ref': '/evse_board_support#/HardwareCapabilities',
        description: computed(() => String(t("evse_board_support.vars.capabilities.description"))) as LocalizedString,
        type: 'object'
      },
      event: {
        '$ref': '/board_support_common#/BspEvent',
        description: computed(() => String(t("evse_board_support.vars.event.description"))) as LocalizedString,
        type: 'object'
      },
      request_stop_transaction: {
        '$ref': '/evse_manager#/StopTransactionRequest',
        description: computed(() => String(t("evse_board_support.vars.request_stop_transaction.description"))) as LocalizedString,
        type: 'object'
      },
      telemetry: {
        '$ref': '/evse_board_support#/Telemetry',
        description: computed(() => String(t("evse_board_support.vars.telemetry.description"))) as LocalizedString,
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
            description: computed(() => String(t("evse_manager.cmds.authorize_response.arguments.provided_token.description"))) as LocalizedString,
            type: 'object'
          },
          validation_result: {
            '$ref': '/authorization#/ValidationResult',
            description: computed(() => String(t("evse_manager.cmds.authorize_response.arguments.validation_result.description"))) as LocalizedString,
            type: 'object'
          }
        },
        description: computed(() => String(t("evse_manager.cmds.authorize_response.description"))) as LocalizedString
      },
      cancel_reservation: {
        description: computed(() => String(t("evse_manager.cmds.cancel_reservation.description"))) as LocalizedString
      },
      enable_disable: {
        arguments: {
          cmd_source: {
            '$ref': '/evse_manager#/EnableDisableSource',
            description: computed(() => String(t("evse_manager.cmds.enable_disable.arguments.cmd_source.description"))) as LocalizedString,
            type: 'object'
          },
          connector_id: {
            description: computed(() => String(t("evse_manager.cmds.enable_disable.arguments.connector_id.description"))) as LocalizedString,
            type: 'integer'
          }
        },
        description: computed(() => String(t("evse_manager.cmds.enable_disable.description"))) as LocalizedString,
        result: {
          description: computed(() => String(t("evse_manager.cmds.enable_disable.result.description"))) as LocalizedString,
          type: 'boolean'
        }
      },
      external_ready_to_start_charging: {
        description: computed(() => String(t("evse_manager.cmds.external_ready_to_start_charging.description"))) as LocalizedString,
        result: {
          description: computed(() => String(t("evse_manager.cmds.external_ready_to_start_charging.result.description"))) as LocalizedString,
          type: 'boolean'
        }
      },
      force_unlock: {
        arguments: {
          connector_id: {
            description: computed(() => String(t("evse_manager.cmds.force_unlock.arguments.connector_id.description"))) as LocalizedString,
            type: 'integer'
          }
        },
        description: computed(() => String(t("evse_manager.cmds.force_unlock.description"))) as LocalizedString,
        result: {
          description: computed(() => String(t("evse_manager.cmds.force_unlock.result.description"))) as LocalizedString,
          type: 'boolean'
        }
      },
      get_evse: {
        description: computed(() => String(t("evse_manager.cmds.get_evse.description"))) as LocalizedString,
        result: {
          '$ref': '/evse_manager#/Evse',
          description: computed(() => String(t("evse_manager.cmds.get_evse.result.description"))) as LocalizedString,
          type: 'object'
        }
      },
      pause_charging: {
        description: computed(() => String(t("evse_manager.cmds.pause_charging.description"))) as LocalizedString,
        result: {
          description: computed(() => String(t("evse_manager.cmds.pause_charging.result.description"))) as LocalizedString,
          type: 'boolean'
        }
      },
      reserve: {
        arguments: {
          reservation_id: {
            description: computed(() => String(t("evse_manager.cmds.reserve.arguments.reservation_id.description"))) as LocalizedString,
            type: 'integer'
          }
        },
        description: computed(() => String(t("evse_manager.cmds.reserve.description"))) as LocalizedString,
        result: {
          description: computed(() => String(t("evse_manager.cmds.reserve.result.description"))) as LocalizedString,
          type: 'boolean'
        }
      },
      resume_charging: {
        description: computed(() => String(t("evse_manager.cmds.resume_charging.description"))) as LocalizedString,
        result: {
          description: computed(() => String(t("evse_manager.cmds.resume_charging.result.description"))) as LocalizedString,
          type: 'boolean'
        }
      },
      set_faulted: {
        description: computed(() => String(t("evse_manager.cmds.set_faulted.description"))) as LocalizedString
      },
      set_plug_and_charge_configuration: {
        arguments: {
          plug_and_charge_configuration: {
            '$ref': '/evse_manager#/PlugAndChargeConfiguration',
            description: computed(() => String(t("evse_manager.cmds.set_plug_and_charge_configuration.arguments.plug_and_charge_configuration.description"))) as LocalizedString,
            type: 'object'
          }
        },
        description: computed(() => String(t("evse_manager.cmds.set_plug_and_charge_configuration.description"))) as LocalizedString
      },
      stop_transaction: {
        arguments: {
          request: {
            '$ref': '/evse_manager#/StopTransactionRequest',
            description: computed(() => String(t("evse_manager.cmds.stop_transaction.arguments.request.description"))) as LocalizedString,
            type: 'object'
          }
        },
        description: computed(() => String(t("evse_manager.cmds.stop_transaction.description"))) as LocalizedString,
        result: {
          description: computed(() => String(t("evse_manager.cmds.stop_transaction.result.description"))) as LocalizedString,
          type: 'boolean'
        }
      },
      withdraw_authorization: {
        description: computed(() => String(t("evse_manager.cmds.withdraw_authorization.description"))) as LocalizedString
      }
    },
    description: computed(() => String(t("evse_manager.description"))) as LocalizedString,
    errors: [ { reference: '/errors/evse_manager' } ],
    vars: {
      car_manufacturer: {
        '$ref': '/evse_manager#/CarManufacturer',
        description: computed(() => String(t("evse_manager.vars.car_manufacturer.description"))) as LocalizedString,
        type: 'string'
      },
      enforced_limits: {
        '$ref': '/energy#/EnforcedLimits',
        description: computed(() => String(t("evse_manager.vars.enforced_limits.description"))) as LocalizedString,
        type: 'object'
      },
      ev_info: {
        '$ref': '/evse_manager#/EVInfo',
        description: computed(() => String(t("evse_manager.vars.ev_info.description"))) as LocalizedString,
        type: 'object'
      },
      evse_id: {
        description: computed(() => String(t("evse_manager.vars.evse_id.description"))) as LocalizedString,
        type: 'string'
      },
      hw_capabilities: {
        '$ref': '/evse_board_support#/HardwareCapabilities',
        description: computed(() => String(t("evse_manager.vars.hw_capabilities.description"))) as LocalizedString,
        type: 'object'
      },
      limits: {
        '$ref': '/evse_manager#/Limits',
        description: computed(() => String(t("evse_manager.vars.limits.description"))) as LocalizedString,
        type: 'object'
      },
      powermeter: {
        '$ref': '/powermeter#/Powermeter',
        description: computed(() => String(t("evse_manager.vars.powermeter.description"))) as LocalizedString,
        type: 'object'
      },
      powermeter_public_key_ocmf: {
        description: computed(() => String(t("evse_manager.vars.powermeter_public_key_ocmf.description"))) as LocalizedString,
        type: 'string'
      },
      ready: {
        description: computed(() => String(t("evse_manager.vars.ready.description"))) as LocalizedString,
        type: 'boolean'
      },
      selected_protocol: {
        description: computed(() => String(t("evse_manager.vars.selected_protocol.description"))) as LocalizedString,
        type: 'string'
      },
      session_event: {
        '$ref': '/evse_manager#/SessionEvent',
        description: computed(() => String(t("evse_manager.vars.session_event.description"))) as LocalizedString,
        type: 'object'
      },
      telemetry: {
        '$ref': '/evse_board_support#/Telemetry',
        description: computed(() => String(t("evse_manager.vars.telemetry.description"))) as LocalizedString,
        type: 'object'
      },
      waiting_for_external_ready: {
        description: computed(() => String(t("evse_manager.vars.waiting_for_external_ready.description"))) as LocalizedString,
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
            description: computed(() => String(t("evse_security.cmds.delete_certificate.arguments.certificate_hash_data.description"))) as LocalizedString,
            type: 'object'
          }
        },
        description: computed(() => String(t("evse_security.cmds.delete_certificate.description"))) as LocalizedString,
        result: {
          '$ref': '/evse_security#/DeleteCertificateResult',
          description: computed(() => String(t("evse_security.cmds.delete_certificate.result.description"))) as LocalizedString,
          type: 'string'
        }
      },
      generate_certificate_signing_request: {
        arguments: {
          certificate_type: {
            '$ref': '/evse_security#/LeafCertificateType',
            description: computed(() => String(t("evse_security.cmds.generate_certificate_signing_request.arguments.certificate_type.description"))) as LocalizedString,
            type: 'string'
          },
          common: {
            description: computed(() => String(t("evse_security.cmds.generate_certificate_signing_request.arguments.common.description"))) as LocalizedString,
            type: 'string'
          },
          country: {
            description: computed(() => String(t("evse_security.cmds.generate_certificate_signing_request.arguments.country.description"))) as LocalizedString,
            type: 'string'
          },
          organization: {
            description: computed(() => String(t("evse_security.cmds.generate_certificate_signing_request.arguments.organization.description"))) as LocalizedString,
            type: 'string'
          },
          use_tpm: {
            description: computed(() => String(t("evse_security.cmds.generate_certificate_signing_request.arguments.use_tpm.description"))) as LocalizedString,
            type: 'boolean'
          }
        },
        description: computed(() => String(t("evse_security.cmds.generate_certificate_signing_request.description"))) as LocalizedString,
        result: {
          '$ref': '/evse_security#/GetCertificateSignRequestResult',
          description: computed(() => String(t("evse_security.cmds.generate_certificate_signing_request.result.description"))) as LocalizedString,
          type: 'object'
        }
      },
      get_all_valid_certificates_info: {
        arguments: {
          certificate_type: {
            '$ref': '/evse_security#/LeafCertificateType',
            description: computed(() => String(t("evse_security.cmds.get_all_valid_certificates_info.arguments.certificate_type.description"))) as LocalizedString,
            type: 'string'
          },
          encoding: {
            '$ref': '/evse_security#/EncodingFormat',
            description: computed(() => String(t("evse_security.cmds.get_all_valid_certificates_info.arguments.encoding.description"))) as LocalizedString,
            type: 'string'
          },
          include_ocsp: {
            description: computed(() => String(t("evse_security.cmds.get_all_valid_certificates_info.arguments.include_ocsp.description"))) as LocalizedString,
            type: 'boolean'
          }
        },
        description: computed(() => String(t("evse_security.cmds.get_all_valid_certificates_info.description"))) as LocalizedString,
        result: {
          '$ref': '/evse_security#/GetCertificateFullInfoResult',
          description: computed(() => String(t("evse_security.cmds.get_all_valid_certificates_info.result.description"))) as LocalizedString,
          type: 'object'
        }
      },
      get_installed_certificates: {
        arguments: {
          certificate_types: {
            description: computed(() => String(t("evse_security.cmds.get_installed_certificates.arguments.certificate_types.description"))) as LocalizedString,
            items: {
              '$ref': '/evse_security#/CertificateType',
              minimum: 0,
              type: 'string'
            },
            type: 'array'
          }
        },
        description: computed(() => String(t("evse_security.cmds.get_installed_certificates.description"))) as LocalizedString,
        result: {
          '$ref': '/evse_security#/GetInstalledCertificatesResult',
          description: computed(() => String(t("evse_security.cmds.get_installed_certificates.result.description"))) as LocalizedString,
          type: 'object'
        }
      },
      get_leaf_certificate_info: {
        arguments: {
          certificate_type: {
            '$ref': '/evse_security#/LeafCertificateType',
            description: computed(() => String(t("evse_security.cmds.get_leaf_certificate_info.arguments.certificate_type.description"))) as LocalizedString,
            type: 'string'
          },
          encoding: {
            '$ref': '/evse_security#/EncodingFormat',
            description: computed(() => String(t("evse_security.cmds.get_leaf_certificate_info.arguments.encoding.description"))) as LocalizedString,
            type: 'string'
          },
          include_ocsp: {
            description: computed(() => String(t("evse_security.cmds.get_leaf_certificate_info.arguments.include_ocsp.description"))) as LocalizedString,
            type: 'boolean'
          }
        },
        description: computed(() => String(t("evse_security.cmds.get_leaf_certificate_info.description"))) as LocalizedString,
        result: {
          '$ref': '/evse_security#/GetCertificateInfoResult',
          description: computed(() => String(t("evse_security.cmds.get_leaf_certificate_info.result.description"))) as LocalizedString,
          type: 'object'
        }
      },
      get_leaf_expiry_days_count: {
        arguments: {
          certificate_type: {
            '$ref': '/evse_security#/LeafCertificateType',
            description: computed(() => String(t("evse_security.cmds.get_leaf_expiry_days_count.arguments.certificate_type.description"))) as LocalizedString,
            type: 'string'
          }
        },
        description: computed(() => String(t("evse_security.cmds.get_leaf_expiry_days_count.description"))) as LocalizedString,
        result: {
          description: computed(() => String(t("evse_security.cmds.get_leaf_expiry_days_count.result.description"))) as LocalizedString,
          type: 'integer'
        }
      },
      get_mo_ocsp_request_data: {
        arguments: {
          certificate_chain: {
            description: computed(() => String(t("evse_security.cmds.get_mo_ocsp_request_data.arguments.certificate_chain.description"))) as LocalizedString,
            type: 'string'
          }
        },
        description: computed(() => String(t("evse_security.cmds.get_mo_ocsp_request_data.description"))) as LocalizedString,
        result: {
          '$ref': '/evse_security#/OCSPRequestDataList',
          description: computed(() => String(t("evse_security.cmds.get_mo_ocsp_request_data.result.description"))) as LocalizedString,
          type: 'object'
        }
      },
      get_v2g_ocsp_request_data: {
        description: computed(() => String(t("evse_security.cmds.get_v2g_ocsp_request_data.description"))) as LocalizedString,
        result: {
          '$ref': '/evse_security#/OCSPRequestDataList',
          description: computed(() => String(t("evse_security.cmds.get_v2g_ocsp_request_data.result.description"))) as LocalizedString,
          type: 'object'
        }
      },
      get_verify_file: {
        arguments: {
          certificate_type: {
            '$ref': '/evse_security#/CaCertificateType',
            description: computed(() => String(t("evse_security.cmds.get_verify_file.arguments.certificate_type.description"))) as LocalizedString,
            type: 'string'
          }
        },
        description: computed(() => String(t("evse_security.cmds.get_verify_file.description"))) as LocalizedString,
        result: {
          description: computed(() => String(t("evse_security.cmds.get_verify_file.result.description"))) as LocalizedString,
          type: 'string'
        }
      },
      get_verify_location: {
        arguments: {
          certificate_type: {
            '$ref': '/evse_security#/CaCertificateType',
            description: computed(() => String(t("evse_security.cmds.get_verify_location.arguments.certificate_type.description"))) as LocalizedString,
            type: 'string'
          }
        },
        description: computed(() => String(t("evse_security.cmds.get_verify_location.description"))) as LocalizedString,
        result: {
          description: computed(() => String(t("evse_security.cmds.get_verify_location.result.description"))) as LocalizedString,
          type: 'string'
        }
      },
      install_ca_certificate: {
        arguments: {
          certificate: {
            description: computed(() => String(t("evse_security.cmds.install_ca_certificate.arguments.certificate.description"))) as LocalizedString,
            type: 'string'
          },
          certificate_type: {
            '$ref': '/evse_security#/CaCertificateType',
            description: computed(() => String(t("evse_security.cmds.install_ca_certificate.arguments.certificate_type.description"))) as LocalizedString,
            type: 'string'
          }
        },
        description: computed(() => String(t("evse_security.cmds.install_ca_certificate.description"))) as LocalizedString,
        result: {
          '$ref': '/evse_security#/InstallCertificateResult',
          description: computed(() => String(t("evse_security.cmds.install_ca_certificate.result.description"))) as LocalizedString,
          type: 'string'
        }
      },
      is_ca_certificate_installed: {
        arguments: {
          certificate_type: {
            '$ref': '/evse_security#/CaCertificateType',
            description: computed(() => String(t("evse_security.cmds.is_ca_certificate_installed.arguments.certificate_type.description"))) as LocalizedString,
            type: 'string'
          }
        },
        description: computed(() => String(t("evse_security.cmds.is_ca_certificate_installed.description"))) as LocalizedString,
        result: {
          description: computed(() => String(t("evse_security.cmds.is_ca_certificate_installed.result.description"))) as LocalizedString,
          type: 'boolean'
        }
      },
      update_leaf_certificate: {
        arguments: {
          certificate_chain: {
            description: computed(() => String(t("evse_security.cmds.update_leaf_certificate.arguments.certificate_chain.description"))) as LocalizedString,
            type: 'string'
          },
          certificate_type: {
            '$ref': '/evse_security#/LeafCertificateType',
            description: computed(() => String(t("evse_security.cmds.update_leaf_certificate.arguments.certificate_type.description"))) as LocalizedString,
            type: 'string'
          }
        },
        description: computed(() => String(t("evse_security.cmds.update_leaf_certificate.description"))) as LocalizedString,
        result: {
          '$ref': '/evse_security#/InstallCertificateResult',
          description: computed(() => String(t("evse_security.cmds.update_leaf_certificate.result.description"))) as LocalizedString,
          type: 'string'
        }
      },
      update_ocsp_cache: {
        arguments: {
          certificate_hash_data: {
            '$ref': '/evse_security#/CertificateHashData',
            description: computed(() => String(t("evse_security.cmds.update_ocsp_cache.arguments.certificate_hash_data.description"))) as LocalizedString,
            type: 'object'
          },
          ocsp_response: {
            description: computed(() => String(t("evse_security.cmds.update_ocsp_cache.arguments.ocsp_response.description"))) as LocalizedString,
            type: 'string'
          }
        },
        description: computed(() => String(t("evse_security.cmds.update_ocsp_cache.description"))) as LocalizedString
      },
      verify_certificate: {
        arguments: {
          certificate_chain: {
            description: computed(() => String(t("evse_security.cmds.verify_certificate.arguments.certificate_chain.description"))) as LocalizedString,
            type: 'string'
          },
          certificate_types: {
            description: computed(() => String(t("evse_security.cmds.verify_certificate.arguments.certificate_types.description"))) as LocalizedString,
            items: {
              '$ref': '/evse_security#/LeafCertificateType',
              minimum: 1,
              type: 'string'
            },
            type: 'array'
          }
        },
        description: computed(() => String(t("evse_security.cmds.verify_certificate.description"))) as LocalizedString,
        result: {
          '$ref': '/evse_security#/CertificateValidationResult',
          description: computed(() => String(t("evse_security.cmds.verify_certificate.result.description"))) as LocalizedString,
          type: 'string'
        }
      },
      verify_file_signature: {
        arguments: {
          file_path: {
            description: computed(() => String(t("evse_security.cmds.verify_file_signature.arguments.file_path.description"))) as LocalizedString,
            type: 'string'
          },
          signature: {
            description: computed(() => String(t("evse_security.cmds.verify_file_signature.arguments.signature.description"))) as LocalizedString,
            type: 'string'
          },
          signing_certificate: {
            description: computed(() => String(t("evse_security.cmds.verify_file_signature.arguments.signing_certificate.description"))) as LocalizedString,
            type: 'string'
          }
        },
        description: computed(() => String(t("evse_security.cmds.verify_file_signature.description"))) as LocalizedString,
        result: {
          description: computed(() => String(t("evse_security.cmds.verify_file_signature.result.description"))) as LocalizedString,
          type: 'boolean'
        }
      }
    },
    description: computed(() => String(t("evse_security.description"))) as LocalizedString,
    vars: {
      certificate_store_update: {
        '$ref': '/evse_security#/CertificateStoreUpdate',
        description: computed(() => String(t("evse_security.vars.certificate_store_update.description"))) as LocalizedString,
        type: 'object'
      }
    }
  },
  example: {
    cmds: {
      uses_something: {
        arguments: {
          key: {
            description: computed(() => String(t("example.cmds.uses_something.arguments.key.description"))) as LocalizedString,
            pattern: '^[A-Za-z0-9_.]+$',
            type: 'string'
          }
        },
        description: computed(() => String(t("example.cmds.uses_something.description"))) as LocalizedString,
        result: {
          description: computed(() => String(t("example.cmds.uses_something.result.description"))) as LocalizedString,
          type: 'boolean'
        }
      }
    },
    description: computed(() => String(t("example.description"))) as LocalizedString,
    vars: {
      max_current: {
        description: computed(() => String(t("example.vars.max_current.description"))) as LocalizedString,
        type: 'number'
      }
    }
  },
  example_error_framework: {
    description: computed(() => String(t("example_error_framework.description"))) as LocalizedString,
    errors: [
      { reference: '/errors/example#/ExampleErrorA' },
      { reference: '/errors/example#/ExampleErrorB' },
      { reference: '/errors/example#/ExampleErrorC' },
      { reference: '/errors/example#/ExampleErrorD' }
    ]
  },
  example_user: {
    description: computed(() => String(t("example_user.description"))) as LocalizedString
  },
  external_energy_limits: {
    cmds: {
      set_external_limits: {
        arguments: {
          value: {
            '$ref': '/energy#/ExternalLimits',
            description: computed(() => String(t("external_energy_limits.cmds.set_external_limits.arguments.value.description"))) as LocalizedString,
            type: 'object'
          }
        },
        description: computed(() => String(t("external_energy_limits.cmds.set_external_limits.description"))) as LocalizedString
      }
    },
    description: computed(() => String(t("external_energy_limits.description"))) as LocalizedString,
    vars: {
      enforced_limits: {
        '$ref': '/energy#/EnforcedLimits',
        description: computed(() => String(t("external_energy_limits.vars.enforced_limits.description"))) as LocalizedString,
        type: 'object'
      }
    }
  },
  generic_array: {
    description: computed(() => String(t("generic_array.description"))) as LocalizedString,
    vars: {
      vector_of_ints: {
        '$ref': '/generic_array#/VectorOfInts',
        description: computed(() => String(t("generic_array.vars.vector_of_ints.description"))) as LocalizedString,
        type: 'object'
      }
    }
  },
  generic_error: {
    description: computed(() => String(t("generic_error.description"))) as LocalizedString,
    errors: [ { reference: '/errors/generic' } ]
  },
  iso15118_extensions: {
    cmds: {
      set_get_certificate_response: {
        arguments: {
          certificate_response: {
            '$ref': '/iso15118#/ResponseExiStreamStatus',
            description: computed(() => String(t("iso15118_extensions.cmds.set_get_certificate_response.arguments.certificate_response.description"))) as LocalizedString,
            type: 'object'
          }
        },
        description: computed(() => String(t("iso15118_extensions.cmds.set_get_certificate_response.description"))) as LocalizedString
      }
    },
    description: computed(() => String(t("iso15118_extensions.description"))) as LocalizedString,
    vars: {
      charging_needs: {
        '$ref': '/iso15118#/ChargingNeeds',
        description: computed(() => String(t("iso15118_extensions.vars.charging_needs.description"))) as LocalizedString,
        type: 'object'
      },
      iso15118_certificate_request: {
        '$ref': '/iso15118#/RequestExiStreamSchema',
        description: computed(() => String(t("iso15118_extensions.vars.iso15118_certificate_request.description"))) as LocalizedString,
        type: 'object'
      }
    }
  },
  isolation_monitor: {
    cmds: {
      start: {
        description: computed(() => String(t("isolation_monitor.cmds.start.description"))) as LocalizedString
      },
      start_self_test: {
        arguments: {
          test_voltage_V: {
            description: computed(() => String(t("isolation_monitor.cmds.start_self_test.arguments.test_voltage_V.description"))) as LocalizedString,
            type: 'number'
          }
        },
        description: computed(() => String(t("isolation_monitor.cmds.start_self_test.description"))) as LocalizedString
      },
      stop: {
        description: computed(() => String(t("isolation_monitor.cmds.stop.description"))) as LocalizedString
      }
    },
    description: computed(() => String(t("isolation_monitor.description"))) as LocalizedString,
    errors: [ { reference: '/errors/isolation_monitor' } ],
    vars: {
      isolation_measurement: {
        '$ref': '/isolation_monitor#/IsolationMeasurement',
        description: computed(() => String(t("isolation_monitor.vars.isolation_measurement.description"))) as LocalizedString,
        type: 'object'
      },
      self_test_result: {
        description: computed(() => String(t("isolation_monitor.vars.self_test_result.description"))) as LocalizedString,
        type: 'boolean'
      }
    }
  },
  kvs: {
    cmds: {
      delete: {
        arguments: {
          key: {
            description: computed(() => String(t("kvs.cmds.delete.arguments.key.description"))) as LocalizedString,
            pattern: '^[A-Za-z0-9_.]+$',
            type: 'string'
          }
        },
        description: computed(() => String(t("kvs.cmds.delete.description"))) as LocalizedString
      },
      exists: {
        arguments: {
          key: {
            description: computed(() => String(t("kvs.cmds.exists.arguments.key.description"))) as LocalizedString,
            pattern: '^[A-Za-z0-9_.]+$',
            type: 'string'
          }
        },
        description: computed(() => String(t("kvs.cmds.exists.description"))) as LocalizedString,
        result: {
          description: computed(() => String(t("kvs.cmds.exists.result.description"))) as LocalizedString,
          type: 'boolean'
        }
      },
      load: {
        arguments: {
          key: {
            description: computed(() => String(t("kvs.cmds.load.arguments.key.description"))) as LocalizedString,
            pattern: '^[A-Za-z0-9_.]+$',
            type: 'string'
          }
        },
        description: computed(() => String(t("kvs.cmds.load.description"))) as LocalizedString,
        result: {
          description: computed(() => String(t("kvs.cmds.load.result.description"))) as LocalizedString,
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
            description: computed(() => String(t("kvs.cmds.store.arguments.key.description"))) as LocalizedString,
            pattern: '^[A-Za-z0-9_.]*$',
            type: 'string'
          },
          value: {
            description: computed(() => String(t("kvs.cmds.store.arguments.value.description"))) as LocalizedString,
            type: [
              'null',    'string',
              'number',  'integer',
              'boolean', 'array',
              'object'
            ]
          }
        },
        description: computed(() => String(t("kvs.cmds.store.description"))) as LocalizedString
      }
    },
    description: computed(() => String(t("kvs.description"))) as LocalizedString
  },
  ocpp: {
    cmds: {
      change_availability: {
        arguments: {
          request: {
            '$ref': '/ocpp#/ChangeAvailabilityRequest',
            description: computed(() => String(t("ocpp.cmds.change_availability.arguments.request.description"))) as LocalizedString,
            type: 'object'
          }
        },
        description: computed(() => String(t("ocpp.cmds.change_availability.description"))) as LocalizedString,
        result: {
          '$ref': '/ocpp#/ChangeAvailabilityResponse',
          description: computed(() => String(t("ocpp.cmds.change_availability.result.description"))) as LocalizedString,
          type: 'object'
        }
      },
      get_variables: {
        arguments: {
          requests: {
            description: computed(() => String(t("ocpp.cmds.get_variables.arguments.requests.description"))) as LocalizedString,
            items: {
              '$ref': '/ocpp#/GetVariableRequest',
              minimum: 0,
              type: 'object'
            },
            type: 'array'
          }
        },
        description: computed(() => String(t("ocpp.cmds.get_variables.description"))) as LocalizedString,
        result: {
          description: computed(() => String(t("ocpp.cmds.get_variables.result.description"))) as LocalizedString,
          items: { '$ref': '/ocpp#/GetVariableResult', type: 'object' },
          type: 'array'
        }
      },
      monitor_variables: {
        arguments: {
          component_variables: {
            description: computed(() => String(t("ocpp.cmds.monitor_variables.arguments.component_variables.description"))) as LocalizedString,
            items: { '$ref': '/ocpp#/ComponentVariable', type: 'object' },
            type: 'array'
          }
        },
        description: computed(() => String(t("ocpp.cmds.monitor_variables.description"))) as LocalizedString
      },
      restart: {
        description: computed(() => String(t("ocpp.cmds.restart.description"))) as LocalizedString,
        result: {
          description: computed(() => String(t("ocpp.cmds.restart.result.description"))) as LocalizedString,
          type: 'boolean'
        }
      },
      security_event: {
        arguments: {
          event: {
            '$ref': '/ocpp#/SecurityEvent',
            description: computed(() => String(t("ocpp.cmds.security_event.arguments.event.description"))) as LocalizedString,
            type: 'object'
          }
        },
        description: computed(() => String(t("ocpp.cmds.security_event.description"))) as LocalizedString
      },
      set_variables: {
        arguments: {
          requests: {
            description: computed(() => String(t("ocpp.cmds.set_variables.arguments.requests.description"))) as LocalizedString,
            items: {
              '$ref': '/ocpp#/SetVariableRequest',
              minimum: 0,
              type: 'object'
            },
            type: 'array'
          },
          source: {
            description: computed(() => String(t("ocpp.cmds.set_variables.arguments.source.description"))) as LocalizedString,
            type: 'string'
          }
        },
        description: computed(() => String(t("ocpp.cmds.set_variables.description"))) as LocalizedString,
        result: {
          description: computed(() => String(t("ocpp.cmds.set_variables.result.description"))) as LocalizedString,
          items: { '$ref': '/ocpp#/SetVariableResult', type: 'object' },
          type: 'array'
        }
      },
      stop: {
        description: computed(() => String(t("ocpp.cmds.stop.description"))) as LocalizedString,
        result: {
          description: computed(() => String(t("ocpp.cmds.stop.result.description"))) as LocalizedString,
          type: 'boolean'
        }
      }
    },
    description: computed(() => String(t("ocpp.description"))) as LocalizedString,
    vars: {
      boot_notification_response: {
        '$ref': '/ocpp#/BootNotificationResponse',
        description: computed(() => String(t("ocpp.vars.boot_notification_response.description"))) as LocalizedString,
        type: 'object'
      },
      charging_schedules: {
        '$ref': '/ocpp#/ChargingSchedules',
        description: computed(() => String(t("ocpp.vars.charging_schedules.description"))) as LocalizedString,
        type: 'object'
      },
      event_data: {
        '$ref': '/ocpp#/EventData',
        description: computed(() => String(t("ocpp.vars.event_data.description"))) as LocalizedString,
        type: 'object'
      },
      is_connected: {
        description: computed(() => String(t("ocpp.vars.is_connected.description"))) as LocalizedString,
        type: 'boolean'
      },
      ocpp_transaction_event: {
        '$ref': '/ocpp#/OcppTransactionEvent',
        description: computed(() => String(t("ocpp.vars.ocpp_transaction_event.description"))) as LocalizedString,
        type: 'object'
      },
      ocpp_transaction_event_response: {
        '$ref': '/ocpp#/OcppTransactionEventResponse',
        description: computed(() => String(t("ocpp.vars.ocpp_transaction_event_response.description"))) as LocalizedString,
        type: 'object'
      },
      security_event: {
        '$ref': '/ocpp#/SecurityEvent',
        description: computed(() => String(t("ocpp.vars.security_event.description"))) as LocalizedString,
        type: 'object'
      }
    }
  },
  ocpp_1_6_charge_point: {
    cmds: {
      get_configuration_key: {
        arguments: {
          keys: {
            description: computed(() => String(t("ocpp_1_6_charge_point.cmds.get_configuration_key.arguments.keys.description"))) as LocalizedString,
            items: {
              description: computed(() => String(t("ocpp_1_6_charge_point.cmds.get_configuration_key.arguments.keys.items.description"))) as LocalizedString,
              type: 'string'
            },
            type: 'array'
          }
        },
        description: computed(() => String(t("ocpp_1_6_charge_point.cmds.get_configuration_key.description"))) as LocalizedString,
        result: {
          '$ref': '/ocpp#/GetConfigurationResponse',
          description: computed(() => String(t("ocpp_1_6_charge_point.cmds.get_configuration_key.result.description"))) as LocalizedString,
          type: 'object'
        }
      },
      monitor_configuration_keys: {
        arguments: {
          keys: {
            description: computed(() => String(t("ocpp_1_6_charge_point.cmds.monitor_configuration_keys.arguments.keys.description"))) as LocalizedString,
            items: {
              description: computed(() => String(t("ocpp_1_6_charge_point.cmds.monitor_configuration_keys.arguments.keys.items.description"))) as LocalizedString,
              maximum: 50,
              type: 'string'
            },
            type: 'array'
          }
        },
        description: computed(() => String(t("ocpp_1_6_charge_point.cmds.monitor_configuration_keys.description"))) as LocalizedString
      },
      restart: {
        description: computed(() => String(t("ocpp_1_6_charge_point.cmds.restart.description"))) as LocalizedString,
        result: {
          description: computed(() => String(t("ocpp_1_6_charge_point.cmds.restart.result.description"))) as LocalizedString,
          type: 'boolean'
        }
      },
      security_event: {
        arguments: {
          info: {
            description: computed(() => String(t("ocpp_1_6_charge_point.cmds.security_event.arguments.info.description"))) as LocalizedString,
            type: 'string'
          },
          type: {
            description: computed(() => String(t("ocpp_1_6_charge_point.cmds.security_event.arguments.type.description"))) as LocalizedString,
            type: 'string'
          }
        },
        description: computed(() => String(t("ocpp_1_6_charge_point.cmds.security_event.description"))) as LocalizedString
      },
      set_custom_configuration_key: {
        arguments: {
          key: {
            description: computed(() => String(t("ocpp_1_6_charge_point.cmds.set_custom_configuration_key.arguments.key.description"))) as LocalizedString,
            maximum: 50,
            type: 'string'
          },
          value: {
            description: computed(() => String(t("ocpp_1_6_charge_point.cmds.set_custom_configuration_key.arguments.value.description"))) as LocalizedString,
            maximum: 500,
            type: 'string'
          }
        },
        description: computed(() => String(t("ocpp_1_6_charge_point.cmds.set_custom_configuration_key.description"))) as LocalizedString,
        result: {
          '$ref': '/ocpp#/ConfigurationStatus',
          description: computed(() => String(t("ocpp_1_6_charge_point.cmds.set_custom_configuration_key.result.description"))) as LocalizedString,
          type: 'string'
        }
      },
      stop: {
        description: computed(() => String(t("ocpp_1_6_charge_point.cmds.stop.description"))) as LocalizedString,
        result: {
          description: computed(() => String(t("ocpp_1_6_charge_point.cmds.stop.result.description"))) as LocalizedString,
          type: 'boolean'
        }
      }
    },
    description: computed(() => String(t("ocpp_1_6_charge_point.description"))) as LocalizedString,
    vars: {
      configuration_key: {
        '$ref': '/ocpp#/KeyValue',
        description: computed(() => String(t("ocpp_1_6_charge_point.vars.configuration_key.description"))) as LocalizedString,
        type: 'object'
      },
      is_connected: {
        description: computed(() => String(t("ocpp_1_6_charge_point.vars.is_connected.description"))) as LocalizedString,
        type: 'boolean'
      },
      security_event: {
        '$ref': '/ocpp#/SecurityEvent',
        description: computed(() => String(t("ocpp_1_6_charge_point.vars.security_event.description"))) as LocalizedString,
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
            description: computed(() => String(t("ocpp_data_transfer.cmds.data_transfer.arguments.request.description"))) as LocalizedString,
            type: 'object'
          }
        },
        description: computed(() => String(t("ocpp_data_transfer.cmds.data_transfer.description"))) as LocalizedString,
        result: {
          '$ref': '/ocpp#/DataTransferResponse',
          description: computed(() => String(t("ocpp_data_transfer.cmds.data_transfer.result.description"))) as LocalizedString,
          type: 'object'
        }
      }
    },
    description: computed(() => String(t("ocpp_data_transfer.description"))) as LocalizedString
  },
  over_voltage_monitor: {
    cmds: {
      reset_over_voltage_error: {
        description: computed(() => String(t("over_voltage_monitor.cmds.reset_over_voltage_error.description"))) as LocalizedString
      },
      start: {
        arguments: {
          over_voltage_limit_V: {
            description: computed(() => String(t("over_voltage_monitor.cmds.start.arguments.over_voltage_limit_V.description"))) as LocalizedString,
            type: 'number'
          }
        },
        description: computed(() => String(t("over_voltage_monitor.cmds.start.description"))) as LocalizedString
      },
      stop: {
        description: computed(() => String(t("over_voltage_monitor.cmds.stop.description"))) as LocalizedString
      }
    },
    description: computed(() => String(t("over_voltage_monitor.description"))) as LocalizedString,
    errors: [ { reference: '/errors/over_voltage_monitor' } ],
    vars: {
      voltage_measurement_V: {
        description: computed(() => String(t("over_voltage_monitor.vars.voltage_measurement_V.description"))) as LocalizedString,
        type: 'number'
      }
    }
  },
  payment_terminal: {
    cmds: {
      allow_all_cards_for_every_connector: {
        description: computed(() => String(t("payment_terminal.cmds.allow_all_cards_for_every_connector.description"))) as LocalizedString
      },
      enable_card_reading: {
        arguments: {
          connector_id: {
            description: computed(() => String(t("payment_terminal.cmds.enable_card_reading.arguments.connector_id.description"))) as LocalizedString,
            type: 'integer'
          },
          supported_cards: {
            description: computed(() => String(t("payment_terminal.cmds.enable_card_reading.arguments.supported_cards.description"))) as LocalizedString,
            items: { '$ref': '/payment_terminal#/CardType', type: 'string' },
            type: 'array'
          }
        },
        description: computed(() => String(t("payment_terminal.cmds.enable_card_reading.description"))) as LocalizedString
      }
    },
    description: computed(() => String(t("payment_terminal.description"))) as LocalizedString,
    vars: {
      bank_transaction_summary: {
        '$ref': '/payment_terminal#/BankTransactionSummary',
        description: computed(() => String(t("payment_terminal.vars.bank_transaction_summary.description"))) as LocalizedString,
        type: 'object'
      },
      rejection_reason: {
        '$ref': '/payment_terminal#/RejectionReason',
        description: computed(() => String(t("payment_terminal.vars.rejection_reason.description"))) as LocalizedString,
        type: 'string'
      }
    }
  },
  phyverso_mcu_temperature: {
    description: computed(() => String(t("phyverso_mcu_temperature.description"))) as LocalizedString,
    vars: {
      MCUTemperatures: {
        '$ref': '/phyverso_mcu_temperature#/MCUTemperatures',
        description: computed(() => String(t("phyverso_mcu_temperature.vars.MCUTemperatures.description"))) as LocalizedString,
        type: 'object'
      }
    }
  },
  power: {
    description: computed(() => String(t("power.description"))) as LocalizedString,
    vars: {
      max_current: {
        description: computed(() => String(t("power.vars.max_current.description"))) as LocalizedString,
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
            description: computed(() => String(t("power_supply_DC.cmds.setExportVoltageCurrent.arguments.current.description"))) as LocalizedString,
            type: 'number'
          },
          voltage: {
            description: computed(() => String(t("power_supply_DC.cmds.setExportVoltageCurrent.arguments.voltage.description"))) as LocalizedString,
            type: 'number'
          }
        },
        description: computed(() => String(t("power_supply_DC.cmds.setExportVoltageCurrent.description"))) as LocalizedString
      },
      setImportVoltageCurrent: {
        arguments: {
          current: {
            description: computed(() => String(t("power_supply_DC.cmds.setImportVoltageCurrent.arguments.current.description"))) as LocalizedString,
            type: 'number'
          },
          voltage: {
            description: computed(() => String(t("power_supply_DC.cmds.setImportVoltageCurrent.arguments.voltage.description"))) as LocalizedString,
            type: 'number'
          }
        },
        description: computed(() => String(t("power_supply_DC.cmds.setImportVoltageCurrent.description"))) as LocalizedString
      },
      setMode: {
        arguments: {
          mode: {
            '$ref': '/power_supply_DC#/Mode',
            description: computed(() => String(t("power_supply_DC.cmds.setMode.arguments.mode.description"))) as LocalizedString,
            type: 'string'
          },
          phase: {
            '$ref': '/power_supply_DC#/ChargingPhase',
            description: computed(() => String(t("power_supply_DC.cmds.setMode.arguments.phase.description"))) as LocalizedString,
            type: 'string'
          }
        },
        description: computed(() => String(t("power_supply_DC.cmds.setMode.description"))) as LocalizedString
      }
    },
    description: computed(() => String(t("power_supply_DC.description"))) as LocalizedString,
    errors: [ { reference: '/errors/power_supply_DC' } ],
    vars: {
      capabilities: {
        '$ref': '/power_supply_DC#/Capabilities',
        description: computed(() => String(t("power_supply_DC.vars.capabilities.description"))) as LocalizedString,
        type: 'object'
      },
      mode: {
        '$ref': '/power_supply_DC#/Mode',
        description: computed(() => String(t("power_supply_DC.vars.mode.description"))) as LocalizedString,
        type: 'string'
      },
      voltage_current: {
        '$ref': '/power_supply_DC#/VoltageCurrent',
        description: computed(() => String(t("power_supply_DC.vars.voltage_current.description"))) as LocalizedString,
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
            description: computed(() => String(t("powermeter.cmds.start_transaction.arguments.value.description"))) as LocalizedString,
            type: 'object'
          }
        },
        description: computed(() => String(t("powermeter.cmds.start_transaction.description"))) as LocalizedString,
        result: {
          '$ref': '/powermeter#/TransactionStartResponse',
          description: computed(() => String(t("powermeter.cmds.start_transaction.result.description"))) as LocalizedString,
          type: 'object'
        }
      },
      stop_transaction: {
        arguments: {
          transaction_id: {
            description: computed(() => String(t("powermeter.cmds.stop_transaction.arguments.transaction_id.description"))) as LocalizedString,
            type: 'string'
          }
        },
        description: computed(() => String(t("powermeter.cmds.stop_transaction.description"))) as LocalizedString,
        result: {
          '$ref': '/powermeter#/TransactionStopResponse',
          description: computed(() => String(t("powermeter.cmds.stop_transaction.result.description"))) as LocalizedString,
          type: 'object'
        }
      }
    },
    description: computed(() => String(t("powermeter.description"))) as LocalizedString,
    errors: [ { reference: '/errors/powermeter' } ],
    vars: {
      powermeter: {
        '$ref': '/powermeter#/Powermeter',
        description: computed(() => String(t("powermeter.vars.powermeter.description"))) as LocalizedString,
        type: 'object'
      },
      public_key_ocmf: {
        description: computed(() => String(t("powermeter.vars.public_key_ocmf.description"))) as LocalizedString,
        type: 'string'
      }
    }
  },
  reservation: {
    cmds: {
      cancel_reservation: {
        arguments: {
          reservation_id: {
            description: computed(() => String(t("reservation.cmds.cancel_reservation.arguments.reservation_id.description"))) as LocalizedString,
            type: 'integer'
          }
        },
        description: computed(() => String(t("reservation.cmds.cancel_reservation.description"))) as LocalizedString,
        result: {
          description: computed(() => String(t("reservation.cmds.cancel_reservation.result.description"))) as LocalizedString,
          type: 'boolean'
        }
      },
      exists_reservation: {
        arguments: {
          request: {
            '$ref': '/reservation#/ReservationCheck',
            description: computed(() => String(t("reservation.cmds.exists_reservation.arguments.request.description"))) as LocalizedString,
            type: 'object'
          }
        },
        description: computed(() => String(t("reservation.cmds.exists_reservation.description"))) as LocalizedString,
        result: {
          '$ref': '/reservation#/ReservationCheckStatus',
          description: computed(() => String(t("reservation.cmds.exists_reservation.result.description"))) as LocalizedString,
          type: 'string'
        }
      },
      reserve_now: {
        arguments: {
          request: {
            '$ref': '/reservation#/Reservation',
            description: computed(() => String(t("reservation.cmds.reserve_now.arguments.request.description"))) as LocalizedString,
            type: 'object'
          }
        },
        description: computed(() => String(t("reservation.cmds.reserve_now.description"))) as LocalizedString,
        result: {
          '$ref': '/reservation#/ReservationResult',
          description: computed(() => String(t("reservation.cmds.reserve_now.result.description"))) as LocalizedString,
          type: 'string'
        }
      }
    },
    description: computed(() => String(t("reservation.description"))) as LocalizedString,
    vars: {
      reservation_update: {
        '$ref': '/reservation#/ReservationUpdateStatus',
        description: computed(() => String(t("reservation.vars.reservation_update.description"))) as LocalizedString,
        type: 'object'
      }
    }
  },
  serial_communication_hub: {
    cmds: {
      modbus_read_holding_registers: {
        arguments: {
          first_register_address: {
            description: computed(() => String(t("serial_communication_hub.cmds.modbus_read_holding_registers.arguments.first_register_address.description"))) as LocalizedString,
            maximum: 65535,
            minimum: 0,
            type: 'integer'
          },
          num_registers_to_read: {
            description: computed(() => String(t("serial_communication_hub.cmds.modbus_read_holding_registers.arguments.num_registers_to_read.description"))) as LocalizedString,
            minimum: 1,
            type: 'integer'
          },
          target_device_id: {
            description: computed(() => String(t("serial_communication_hub.cmds.modbus_read_holding_registers.arguments.target_device_id.description"))) as LocalizedString,
            maximum: 255,
            minimum: 0,
            type: 'integer'
          }
        },
        description: computed(() => String(t("serial_communication_hub.cmds.modbus_read_holding_registers.description"))) as LocalizedString,
        result: {
          '$ref': '/serial_comm_hub_requests#/Result',
          description: computed(() => String(t("serial_communication_hub.cmds.modbus_read_holding_registers.result.description"))) as LocalizedString,
          type: 'object'
        }
      },
      modbus_read_input_registers: {
        arguments: {
          first_register_address: {
            description: computed(() => String(t("serial_communication_hub.cmds.modbus_read_input_registers.arguments.first_register_address.description"))) as LocalizedString,
            maximum: 65535,
            minimum: 0,
            type: 'integer'
          },
          num_registers_to_read: {
            description: computed(() => String(t("serial_communication_hub.cmds.modbus_read_input_registers.arguments.num_registers_to_read.description"))) as LocalizedString,
            minimum: 1,
            type: 'integer'
          },
          target_device_id: {
            description: computed(() => String(t("serial_communication_hub.cmds.modbus_read_input_registers.arguments.target_device_id.description"))) as LocalizedString,
            maximum: 255,
            minimum: 0,
            type: 'integer'
          }
        },
        description: computed(() => String(t("serial_communication_hub.cmds.modbus_read_input_registers.description"))) as LocalizedString,
        result: {
          '$ref': '/serial_comm_hub_requests#/Result',
          description: computed(() => String(t("serial_communication_hub.cmds.modbus_read_input_registers.result.description"))) as LocalizedString,
          type: 'object'
        }
      },
      modbus_write_multiple_registers: {
        arguments: {
          data_raw: {
            '$ref': '/serial_comm_hub_requests#/VectorUint16',
            description: computed(() => String(t("serial_communication_hub.cmds.modbus_write_multiple_registers.arguments.data_raw.description"))) as LocalizedString,
            type: 'object'
          },
          first_register_address: {
            description: computed(() => String(t("serial_communication_hub.cmds.modbus_write_multiple_registers.arguments.first_register_address.description"))) as LocalizedString,
            maximum: 65535,
            minimum: 0,
            type: 'integer'
          },
          target_device_id: {
            description: computed(() => String(t("serial_communication_hub.cmds.modbus_write_multiple_registers.arguments.target_device_id.description"))) as LocalizedString,
            maximum: 255,
            minimum: 0,
            type: 'integer'
          }
        },
        description: computed(() => String(t("serial_communication_hub.cmds.modbus_write_multiple_registers.description"))) as LocalizedString,
        result: {
          '$ref': '/serial_comm_hub_requests#/StatusCodeEnum',
          description: computed(() => String(t("serial_communication_hub.cmds.modbus_write_multiple_registers.result.description"))) as LocalizedString,
          type: 'string'
        }
      },
      modbus_write_single_register: {
        arguments: {
          data: {
            description: computed(() => String(t("serial_communication_hub.cmds.modbus_write_single_register.arguments.data.description"))) as LocalizedString,
            maximum: 65535,
            minimum: 0,
            type: 'integer'
          },
          register_address: {
            description: computed(() => String(t("serial_communication_hub.cmds.modbus_write_single_register.arguments.register_address.description"))) as LocalizedString,
            maximum: 65535,
            minimum: 0,
            type: 'integer'
          },
          target_device_id: {
            description: computed(() => String(t("serial_communication_hub.cmds.modbus_write_single_register.arguments.target_device_id.description"))) as LocalizedString,
            maximum: 255,
            minimum: 0,
            type: 'integer'
          }
        },
        description: computed(() => String(t("serial_communication_hub.cmds.modbus_write_single_register.description"))) as LocalizedString,
        result: {
          '$ref': '/serial_comm_hub_requests#/StatusCodeEnum',
          description: computed(() => String(t("serial_communication_hub.cmds.modbus_write_single_register.result.description"))) as LocalizedString,
          type: 'string'
        }
      },
      nonstd_read: {
        arguments: {
          first_register_address: {
            description: computed(() => String(t("serial_communication_hub.cmds.nonstd_read.arguments.first_register_address.description"))) as LocalizedString,
            maximum: 65535,
            minimum: 0,
            type: 'integer'
          },
          num_registers_to_read: {
            description: computed(() => String(t("serial_communication_hub.cmds.nonstd_read.arguments.num_registers_to_read.description"))) as LocalizedString,
            maximum: 65535,
            minimum: 0,
            type: 'integer'
          },
          target_device_id: {
            description: computed(() => String(t("serial_communication_hub.cmds.nonstd_read.arguments.target_device_id.description"))) as LocalizedString,
            maximum: 255,
            minimum: 0,
            type: 'integer'
          }
        },
        description: computed(() => String(t("serial_communication_hub.cmds.nonstd_read.description"))) as LocalizedString,
        result: {
          '$ref': '/serial_comm_hub_requests#/Result',
          description: computed(() => String(t("serial_communication_hub.cmds.nonstd_read.result.description"))) as LocalizedString,
          type: 'object'
        }
      },
      nonstd_write: {
        arguments: {
          first_register_address: {
            description: computed(() => String(t("serial_communication_hub.cmds.nonstd_write.arguments.first_register_address.description"))) as LocalizedString,
            maximum: 65535,
            minimum: 0,
            type: 'integer'
          },
          num_registers_to_read: {
            description: computed(() => String(t("serial_communication_hub.cmds.nonstd_write.arguments.num_registers_to_read.description"))) as LocalizedString,
            minimum: 1,
            type: 'integer'
          },
          target_device_id: {
            description: computed(() => String(t("serial_communication_hub.cmds.nonstd_write.arguments.target_device_id.description"))) as LocalizedString,
            maximum: 255,
            minimum: 0,
            type: 'integer'
          }
        },
        description: computed(() => String(t("serial_communication_hub.cmds.nonstd_write.description"))) as LocalizedString
      }
    },
    description: computed(() => String(t("serial_communication_hub.description"))) as LocalizedString
  },
  session_cost: {
    description: computed(() => String(t("session_cost.description"))) as LocalizedString,
    vars: {
      session_cost: {
        '$ref': '/session_cost#/SessionCost',
        description: computed(() => String(t("session_cost.vars.session_cost.description"))) as LocalizedString,
        type: 'object'
      },
      tariff_message: {
        '$ref': '/session_cost#/TariffMessage',
        description: computed(() => String(t("session_cost.vars.tariff_message.description"))) as LocalizedString,
        type: 'object'
      }
    }
  },
  slac: {
    cmds: {
      dlink_error: {
        description: computed(() => String(t("slac.cmds.dlink_error.description"))) as LocalizedString,
        result: {
          description: computed(() => String(t("slac.cmds.dlink_error.result.description"))) as LocalizedString,
          type: 'boolean'
        }
      },
      dlink_pause: {
        description: computed(() => String(t("slac.cmds.dlink_pause.description"))) as LocalizedString,
        result: {
          description: computed(() => String(t("slac.cmds.dlink_pause.result.description"))) as LocalizedString,
          type: 'boolean'
        }
      },
      dlink_terminate: {
        description: computed(() => String(t("slac.cmds.dlink_terminate.description"))) as LocalizedString,
        result: {
          description: computed(() => String(t("slac.cmds.dlink_terminate.result.description"))) as LocalizedString,
          type: 'boolean'
        }
      },
      enter_bcd: {
        description: computed(() => String(t("slac.cmds.enter_bcd.description"))) as LocalizedString,
        result: {
          description: computed(() => String(t("slac.cmds.enter_bcd.result.description"))) as LocalizedString,
          type: 'boolean'
        }
      },
      leave_bcd: {
        description: computed(() => String(t("slac.cmds.leave_bcd.description"))) as LocalizedString,
        result: {
          description: computed(() => String(t("slac.cmds.leave_bcd.result.description"))) as LocalizedString,
          type: 'boolean'
        }
      },
      reset: {
        arguments: {
          enable: {
            description: computed(() => String(t("slac.cmds.reset.arguments.enable.description"))) as LocalizedString,
            type: 'boolean'
          }
        },
        description: computed(() => String(t("slac.cmds.reset.description"))) as LocalizedString
      }
    },
    description: computed(() => String(t("slac.description"))) as LocalizedString,
    errors: [ { reference: '/errors/generic' } ],
    vars: {
      dlink_ready: {
        description: computed(() => String(t("slac.vars.dlink_ready.description"))) as LocalizedString,
        type: 'boolean'
      },
      ev_mac_address: {
        description: computed(() => String(t("slac.vars.ev_mac_address.description"))) as LocalizedString,
        pattern: '^[A-F0-9]{2}(:[A-F0-9]{2}){5}$',
        type: 'string'
      },
      request_error_routine: {
        description: computed(() => String(t("slac.vars.request_error_routine.description"))) as LocalizedString,
        type: 'null'
      },
      state: {
        description: computed(() => String(t("slac.vars.state.description"))) as LocalizedString,
        enum: [ 'UNMATCHED', 'MATCHING', 'MATCHED' ],
        type: 'string'
      }
    }
  },
  solar_forecast: {
    description: computed(() => String(t("solar_forecast.description"))) as LocalizedString,
    vars: {
      forecast: {
        description: computed(() => String(t("solar_forecast.vars.forecast.description"))) as LocalizedString,
        type: 'object'
      }
    }
  },
  sunspec_ac_meter: {
    cmds: {
      get_sunspec_ac_meter_value: {
        arguments: {
          auth_token: {
            description: computed(() => String(t("sunspec_ac_meter.cmds.get_sunspec_ac_meter_value.arguments.auth_token.description"))) as LocalizedString,
            maxLength: 20,
            minLength: 1,
            type: 'string'
          }
        },
        description: computed(() => String(t("sunspec_ac_meter.cmds.get_sunspec_ac_meter_value.description"))) as LocalizedString,
        result: {
          '$ref': '/sunspec_ac_meter#/Result',
          description: computed(() => String(t("sunspec_ac_meter.cmds.get_sunspec_ac_meter_value.result.description"))) as LocalizedString,
          type: 'object'
        }
      }
    },
    description: computed(() => String(t("sunspec_ac_meter.description"))) as LocalizedString
  },
  sunspec_reader: {
    description: computed(() => String(t("sunspec_reader.description"))) as LocalizedString,
    vars: {
      measurement: {
        additionalProperties: true,
        description: computed(() => String(t("sunspec_reader.vars.measurement.description"))) as LocalizedString,
        properties: {
          timestamp: {
            description: computed(() => String(t("sunspec_reader.vars.measurement.properties.timestamp.description"))) as LocalizedString,
            type: 'number'
          },
          value: {
            description: computed(() => String(t("sunspec_reader.vars.measurement.properties.value.description"))) as LocalizedString,
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
            description: computed(() => String(t("sunspec_scanner.cmds.scan_device.arguments.ip_address.description"))) as LocalizedString,
            pattern: '^(?:[0-9]{1,3}\\.){3}[0-9]{1,3}$',
            type: 'string'
          }
        },
        description: computed(() => String(t("sunspec_scanner.cmds.scan_device.description"))) as LocalizedString,
        result: {
          description: computed(() => String(t("sunspec_scanner.cmds.scan_device.result.description"))) as LocalizedString,
          type: 'object'
        }
      },
      scan_network: {
        description: computed(() => String(t("sunspec_scanner.cmds.scan_network.description"))) as LocalizedString,
        result: {
          description: computed(() => String(t("sunspec_scanner.cmds.scan_network.result.description"))) as LocalizedString,
          type: 'object'
        }
      },
      scan_port: {
        arguments: {
          ip_address: {
            description: computed(() => String(t("sunspec_scanner.cmds.scan_port.arguments.ip_address.description"))) as LocalizedString,
            pattern: '^(?:[0-9]{1,3}\\.){3}[0-9]{1,3}$',
            type: 'string'
          },
          port: {
            description: computed(() => String(t("sunspec_scanner.cmds.scan_port.arguments.port.description"))) as LocalizedString,
            minimum: 0,
            type: 'integer'
          }
        },
        description: computed(() => String(t("sunspec_scanner.cmds.scan_port.description"))) as LocalizedString,
        result: {
          description: computed(() => String(t("sunspec_scanner.cmds.scan_port.result.description"))) as LocalizedString,
          type: 'object'
        }
      },
      scan_unit: {
        arguments: {
          ip_address: {
            description: computed(() => String(t("sunspec_scanner.cmds.scan_unit.arguments.ip_address.description"))) as LocalizedString,
            pattern: '^(?:[0-9]{1,3}\\.){3}[0-9]{1,3}$',
            type: 'string'
          },
          port: {
            description: computed(() => String(t("sunspec_scanner.cmds.scan_unit.arguments.port.description"))) as LocalizedString,
            minimum: 0,
            type: 'integer'
          },
          unit: {
            description: computed(() => String(t("sunspec_scanner.cmds.scan_unit.arguments.unit.description"))) as LocalizedString,
            minimum: 0,
            type: 'integer'
          }
        },
        description: computed(() => String(t("sunspec_scanner.cmds.scan_unit.description"))) as LocalizedString,
        result: {
          description: computed(() => String(t("sunspec_scanner.cmds.scan_unit.result.description"))) as LocalizedString,
          type: 'object'
        }
      }
    },
    description: computed(() => String(t("sunspec_scanner.description"))) as LocalizedString
  },
  system: {
    cmds: {
      allow_firmware_installation: {
        description: computed(() => String(t("system.cmds.allow_firmware_installation.description"))) as LocalizedString
      },
      get_boot_reason: {
        description: computed(() => String(t("system.cmds.get_boot_reason.description"))) as LocalizedString,
        result: {
          '$ref': '/system#/BootReason',
          description: computed(() => String(t("system.cmds.get_boot_reason.result.description"))) as LocalizedString,
          type: 'string'
        }
      },
      is_reset_allowed: {
        arguments: {
          type: {
            '$ref': '/system#/ResetType',
            description: computed(() => String(t("system.cmds.is_reset_allowed.arguments.type.description"))) as LocalizedString,
            type: 'string'
          }
        },
        description: computed(() => String(t("system.cmds.is_reset_allowed.description"))) as LocalizedString,
        result: {
          description: computed(() => String(t("system.cmds.is_reset_allowed.result.description"))) as LocalizedString,
          type: 'boolean'
        }
      },
      reset: {
        arguments: {
          scheduled: {
            description: computed(() => String(t("system.cmds.reset.arguments.scheduled.description"))) as LocalizedString,
            type: 'boolean'
          },
          type: {
            '$ref': '/system#/ResetType',
            description: computed(() => String(t("system.cmds.reset.arguments.type.description"))) as LocalizedString,
            type: 'string'
          }
        },
        description: computed(() => String(t("system.cmds.reset.description"))) as LocalizedString
      },
      set_system_time: {
        arguments: {
          timestamp: {
            description: computed(() => String(t("system.cmds.set_system_time.arguments.timestamp.description"))) as LocalizedString,
            format: 'date-time',
            type: 'string'
          }
        },
        description: computed(() => String(t("system.cmds.set_system_time.description"))) as LocalizedString,
        result: {
          description: computed(() => String(t("system.cmds.set_system_time.result.description"))) as LocalizedString,
          type: 'boolean'
        }
      },
      update_firmware: {
        arguments: {
          firmware_update_request: {
            '$ref': '/system#/FirmwareUpdateRequest',
            description: computed(() => String(t("system.cmds.update_firmware.arguments.firmware_update_request.description"))) as LocalizedString,
            type: 'object'
          }
        },
        description: computed(() => String(t("system.cmds.update_firmware.description"))) as LocalizedString,
        result: {
          '$ref': '/system#/UpdateFirmwareResponse',
          description: computed(() => String(t("system.cmds.update_firmware.result.description"))) as LocalizedString,
          type: 'string'
        }
      },
      upload_logs: {
        arguments: {
          upload_logs_request: {
            '$ref': '/system#/UploadLogsRequest',
            description: computed(() => String(t("system.cmds.upload_logs.arguments.upload_logs_request.description"))) as LocalizedString,
            type: 'object'
          }
        },
        description: computed(() => String(t("system.cmds.upload_logs.description"))) as LocalizedString,
        result: {
          '$ref': '/system#/UploadLogsResponse',
          description: computed(() => String(t("system.cmds.upload_logs.result.description"))) as LocalizedString,
          type: 'object'
        }
      }
    },
    description: computed(() => String(t("system.description"))) as LocalizedString,
    errors: [ { reference: '/errors/system' } ],
    vars: {
      firmware_update_status: {
        '$ref': '/system#/FirmwareUpdateStatus',
        description: computed(() => String(t("system.vars.firmware_update_status.description"))) as LocalizedString,
        type: 'object'
      },
      log_status: {
        '$ref': '/system#/LogStatus',
        description: computed(() => String(t("system.vars.log_status.description"))) as LocalizedString,
        type: 'object'
      }
    }
  },
  test_control: {
    cmds: {
      start_charging: {
        arguments: {
          mode: {
            description: computed(() => String(t("test_control.cmds.start_charging.arguments.mode.description"))) as LocalizedString,
            maxLength: 20,
            minLength: 1,
            type: 'string'
          }
        },
        description: computed(() => String(t("test_control.cmds.start_charging.description"))) as LocalizedString,
        result: {
          description: computed(() => String(t("test_control.cmds.start_charging.result.description"))) as LocalizedString,
          type: 'string'
        }
      }
    },
    description: computed(() => String(t("test_control.description"))) as LocalizedString,
    vars: {
      state: {
        description: computed(() => String(t("test_control.vars.state.description"))) as LocalizedString,
        type: 'string'
      }
    }
  },
  test_error_handling: {
    cmds: {
      clear_all_errors: {
        description: computed(() => String(t("test_error_handling.cmds.clear_all_errors.description"))) as LocalizedString
      },
      clear_error: {
        arguments: {
          sub_type: {
            description: computed(() => String(t("test_error_handling.cmds.clear_error.arguments.sub_type.description"))) as LocalizedString,
            type: 'string'
          },
          type: {
            description: computed(() => String(t("test_error_handling.cmds.clear_error.arguments.type.description"))) as LocalizedString,
            enum: [
              'test_errors/TestErrorA',
              'test_errors/TestErrorB',
              'test_errors/TestErrorC',
              'test_errors/TestErrorD'
            ],
            type: 'string'
          }
        },
        description: computed(() => String(t("test_error_handling.cmds.clear_error.description"))) as LocalizedString
      },
      raise_error: {
        arguments: {
          message: {
            description: computed(() => String(t("test_error_handling.cmds.raise_error.arguments.message.description"))) as LocalizedString,
            type: 'string'
          },
          severity: {
            description: computed(() => String(t("test_error_handling.cmds.raise_error.arguments.severity.description"))) as LocalizedString,
            enum: [ 'Low', 'Medium', 'High' ],
            type: 'string'
          },
          sub_type: {
            description: computed(() => String(t("test_error_handling.cmds.raise_error.arguments.sub_type.description"))) as LocalizedString,
            type: 'string'
          },
          type: {
            description: computed(() => String(t("test_error_handling.cmds.raise_error.arguments.type.description"))) as LocalizedString,
            enum: [
              'test_errors/TestErrorA',
              'test_errors/TestErrorB',
              'test_errors/TestErrorC',
              'test_errors/TestErrorD'
            ],
            type: 'string'
          }
        },
        description: computed(() => String(t("test_error_handling.cmds.raise_error.description"))) as LocalizedString
      }
    },
    description: computed(() => String(t("test_error_handling.description"))) as LocalizedString,
    errors: [
      { reference: '/errors/test_errors#/TestErrorA' },
      { reference: '/errors/test_errors#/TestErrorB' },
      { reference: '/errors/test_errors#/TestErrorC' },
      { reference: '/errors/test_errors#/TestErrorD' }
    ],
    vars: {
      errors_cleared_subscribe_TestErrorA: {
        description: computed(() => String(t("test_error_handling.vars.errors_cleared_subscribe_TestErrorA.description"))) as LocalizedString,
        type: 'object'
      },
      errors_cleared_subscribe_TestErrorB: {
        description: computed(() => String(t("test_error_handling.vars.errors_cleared_subscribe_TestErrorB.description"))) as LocalizedString,
        type: 'object'
      },
      errors_cleared_subscribe_all: {
        description: computed(() => String(t("test_error_handling.vars.errors_cleared_subscribe_all.description"))) as LocalizedString,
        type: 'object'
      },
      errors_cleared_subscribe_global_all: {
        description: computed(() => String(t("test_error_handling.vars.errors_cleared_subscribe_global_all.description"))) as LocalizedString,
        type: 'object'
      },
      errors_subscribe_TestErrorA: {
        description: computed(() => String(t("test_error_handling.vars.errors_subscribe_TestErrorA.description"))) as LocalizedString,
        type: 'object'
      },
      errors_subscribe_TestErrorB: {
        description: computed(() => String(t("test_error_handling.vars.errors_subscribe_TestErrorB.description"))) as LocalizedString,
        type: 'object'
      },
      errors_subscribe_all: {
        description: computed(() => String(t("test_error_handling.vars.errors_subscribe_all.description"))) as LocalizedString,
        type: 'object'
      },
      errors_subscribe_global_all: {
        description: computed(() => String(t("test_error_handling.vars.errors_subscribe_global_all.description"))) as LocalizedString,
        type: 'object'
      }
    }
  },
  test_error_raiser: {
    description: computed(() => String(t("test_error_raiser.description"))) as LocalizedString,
    errors: [ { reference: '/errors/test_errors' } ]
  },
  tibber_price_forecast: {
    description: computed(() => String(t("tibber_price_forecast.description"))) as LocalizedString,
    vars: {
      forecast: {
        description: computed(() => String(t("tibber_price_forecast.vars.forecast.description"))) as LocalizedString,
        type: 'object'
      }
    }
  },
  uk_random_delay: {
    cmds: {
      cancel: {
        description: computed(() => String(t("uk_random_delay.cmds.cancel.description"))) as LocalizedString
      },
      disable: {
        description: computed(() => String(t("uk_random_delay.cmds.disable.description"))) as LocalizedString
      },
      enable: {
        description: computed(() => String(t("uk_random_delay.cmds.enable.description"))) as LocalizedString
      },
      set_duration_s: {
        arguments: {
          value: {
            description: computed(() => String(t("uk_random_delay.cmds.set_duration_s.arguments.value.description"))) as LocalizedString,
            type: 'integer'
          }
        },
        description: computed(() => String(t("uk_random_delay.cmds.set_duration_s.description"))) as LocalizedString
      }
    },
    description: computed(() => String(t("uk_random_delay.description"))) as LocalizedString,
    vars: {
      countdown: {
        '$ref': '/uk_random_delay#/CountDown',
        description: computed(() => String(t("uk_random_delay.vars.countdown.description"))) as LocalizedString,
        type: 'object'
      }
    }
  }
} as EverestInterfaceDefinitionList;
