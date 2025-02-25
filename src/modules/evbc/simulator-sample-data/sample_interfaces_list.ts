// SPDX-License-Identifier: Apache-2.0
// Copyright 2020 - 2025 Pionix GmbH and Contributors to EVerest

import { EverestInterfaceDefinitionList } from "../index";

export default {
  ISO15118_charger: {
    cmds: {
      ac_contactor_closed: {
        arguments: {
          status: {
            description: "Set to true when contactor is closed, false when contactor is open",
            type: "boolean",
          },
        },
        description:
          "This message is an async response to a previously published AC_Close_Contactor or AC_Open_Contactor.",
      },
      authorization_response: {
        arguments: {
          authorization_status: {
            $ref: "/authorization#/AuthorizationStatus",
            description: "Authorization status of the ID Token",
            type: "string",
          },
          certificate_status: {
            $ref: "/authorization#/CertificateStatus",
            description: "Certificate status information",
            type: "string",
          },
        },
        description:
          "This message is an async response to a previously published Require_Auth_EIM or Require_Auth_PnC. The SECC informs the EVCC whether the authorization is accecpted or not.",
      },
      cable_check_finished: {
        arguments: {
          status: {
            description: "Set to true when cable check is okay",
            type: "boolean",
          },
        },
        description: "Cable check is finished, voltage is under 20V and insulation resistor on the cable is alright",
      },
      certificate_response: {
        arguments: {
          exi_stream_status: {
            $ref: "/iso15118_charger#/Response_Exi_Stream_Status",
            description: "The response raw EXI stream and the status from the CSMS",
            type: "object",
          },
        },
        description:
          "This message is an async response to a previously published Certificate_Request. The new/updated Contract Certificate (including the certificate chain) and the corresponding encrypted private key are sent via the SECC to the EVCC.",
      },
      dlink_ready: {
        arguments: {
          value: {
            description: "Set to true when link becomes ready, false when the link is terminated",
            type: "boolean",
          },
        },
        description: "Signals dlink_ready from SLAC layer according to ISO15118-3",
      },
      receipt_is_required: {
        arguments: {
          receipt_required: {
            description: "Set to true when receipt is required, set to false when not",
            type: "boolean",
          },
        },
        description:
          "This element is used by the SECC to indicate that the EVCC is required to send a MeteringReceiptReq message for the purpose of signing the meter info record.",
      },
      reset_error: {
        description: "Reset all errors",
      },
      send_error: {
        arguments: {
          error: {
            $ref: "/iso15118_charger#/EvseError",
            description: "The EVSE error enum",
            type: "string",
          },
        },
        description: "An error has happend. Send this error to inform the EV.",
      },
      session_setup: {
        arguments: {
          payment_options: {
            description: "Providing a list of payment options to the EVCC",
            items: {
              $ref: "/iso15118_charger#/PaymentOption",
              description: "These are the payment options a SECC offers to the EVCC",
              type: "string",
            },
            maxItems: 2,
            minItems: 1,
            type: "array",
          },
          supported_certificate_service: {
            description:
              "The charger supports the certificate installation/update service and has a connection to an SA for this purpose",
            type: "boolean",
          },
        },
        description: "At each session start this info should be sent to the module.",
      },
      setup: {
        arguments: {
          debug_mode: {
            description: "Enable/Disable debug mode",
            type: "boolean",
          },
          evse_id: {
            $ref: "/iso15118_charger#/EVSEID",
            description:
              "Set an ID that uniquely identifies the EVSE and the power outlet the vehicle is connected to ",
            type: "object",
          },
          physical_values: {
            $ref: "/iso15118_charger#/SetupPhysicalValues",
            description: "Set up initial physical values for a AC or DC charging session",
            type: "object",
          },
          sae_j2847_mode: {
            $ref: "/iso15118_charger#/SAE_J2847_Bidi_Mode",
            description: "Charger is supporting SAE J2847 V2G/V2H version",
            type: "string",
          },
          supported_energy_transfer_modes: {
            description: "Available energy transfer modes supported by the EVSE",
            items: {
              $ref: "/iso15118_charger#/EnergyTransferMode",
              description: "The different energy modes supported by the SECC",
              type: "string",
            },
            maxItems: 6,
            minItems: 1,
            type: "array",
          },
        },
        description: "At startup all necessary info should be sent to the module once.",
      },
      stop_charging: {
        arguments: {
          stop: {
            description: "Set to true when to stop, set to false when to continue",
            type: "boolean",
          },
        },
        description: "Stops the charging process",
      },
      update_ac_max_current: {
        arguments: {
          max_current: {
            description: "Max current in A",
            maximum: 400,
            minimum: 0,
            type: "number",
          },
        },
        description: "Update the maximum allowed line current restriction per phase",
      },
      update_dc_maximum_limits: {
        arguments: {
          maximum_limits: {
            $ref: "/iso15118_charger#/DC_EVSEMaximumLimits",
            description: "Maximum values (current, power and voltage) the EVSE can deliver",
            type: "object",
          },
        },
        description: "Update the maximum limits",
      },
      update_dc_minimum_limits: {
        arguments: {
          minimum_limits: {
            $ref: "/iso15118_charger#/DC_EVSEMinimumLimits",
            description: "Minimum values (current and voltage) the EVSE can deliver",
            type: "object",
          },
        },
        description: "Update the minimum limits",
      },
      update_dc_present_values: {
        arguments: {
          present_voltage_current: {
            $ref: "/iso15118_charger#/DC_EVSEPresentVoltage_Current",
            description: "Present voltage and current",
            type: "object",
          },
        },
        description: "Update the present values from the DC powersupply",
      },
      update_isolation_status: {
        arguments: {
          isolation_status: {
            $ref: "/iso15118_charger#/IsolationStatus",
            description: "Result of the isolation monitoring",
            type: "string",
          },
        },
        description: "Update the isolation condition",
      },
      update_meter_info: {
        arguments: {
          powermeter: {
            $ref: "/powermeter#/Powermeter",
            description:
              "Includes the meterInfo record containing the latest meter reading and other meter relevant data",
            type: "object",
          },
        },
        description: "Update meter info",
      },
    },
    description: "This interface defines a ISO15118 charger.",
    vars: {
      AC_Close_Contactor: {
        description: "The contactor should be closed",
        type: "null",
      },
      AC_EAmount: {
        description:
          "[Wh] Amount of energy reflecting the EV's estimate how much energy is needed to fulfill the user configured charging goal for the current charging session",
        maximum: 200000,
        minimum: 0,
        type: "number",
      },
      AC_EVMaxCurrent: {
        description: "[A] Maximum current supported by the EV per phase",
        maximum: 400,
        minimum: 0,
        type: "number",
      },
      AC_EVMaxVoltage: {
        description:
          "[V] The RMS of the maximal nominal voltage the vehicle can accept, measured between one phase and neutral",
        maximum: 1000,
        minimum: 0,
        type: "number",
      },
      AC_EVMinCurrent: {
        description:
          "[A] EVMinCurrent is used to indicate to the SECC that charging below this minimum is not energy/cost efficient for the EV",
        maximum: 400,
        minimum: 0,
        type: "number",
      },
      AC_Open_Contactor: {
        description: "The contactor should be opened",
        type: "null",
      },
      Certificate_Request: {
        $ref: "/iso15118_charger#/Request_Exi_Stream_Schema",
        description:
          "The vehicle requests the SECC to deliver the certificate that belong  to the currently valid contract of the vehicle. Response will be reported async via  set_Get_Certificate_Response",
        type: "object",
      },
      DC_BulkChargingComplete: {
        description: "Optional: If set to TRUE, the EV indicates that bulk charge (approx. 80% SOC) is complete",
        type: "boolean",
      },
      DC_BulkSOC: {
        description: "Optional: [%] SOC at which the EV considers a fast charge process to end",
        maximum: 100,
        minimum: 0,
        type: "number",
      },
      DC_ChargingComplete: {
        description: "Optional: If set to TRUE, the EV indicates that full charge (100% SOC) is complete",
        type: "boolean",
      },
      DC_EVEnergyCapacity: {
        description: "Optional: [Wh] Energy capacity of the EV",
        maximum: 200000,
        minimum: 0,
        type: "number",
      },
      DC_EVEnergyRequest: {
        description: "Optional: [Wh] Amount of energy the EV requests from the EVSE",
        maximum: 200000,
        minimum: 0,
        type: "number",
      },
      DC_EVMaximumLimits: {
        $ref: "/iso15118_charger#/DC_EVMaximumLimits",
        description: "Maximum Values (current, power and voltage) supported and allowed by the EV",
        type: "object",
      },
      DC_EVRemainingTime: {
        $ref: "/iso15118_charger#/DC_EVRemainingTime",
        description: "Estimated or calculated time until bulk and full charge is complete",
        type: "object",
      },
      DC_EVStatus: {
        $ref: "/iso15118_charger#/DC_EVStatusType",
        description: "Current status of the EV",
        type: "object",
      },
      DC_EVTargetVoltageCurrent: {
        $ref: "/iso15118_charger#/DC_EVTargetValues",
        description: "Target voltage and current requested by the EV",
        type: "object",
      },
      DC_FullSOC: {
        description: "Optional: [%] SOC at which the EV considers the battery to be fully charged",
        maximum: 100,
        minimum: 0,
        type: "number",
      },
      DC_Open_Contactor: {
        description: "The contactor should be opened",
        type: "null",
      },
      DepartureTime: {
        description:
          "Optional: [RFC3339 UTC] This element is used to indicate when the vehicle intends to finish the charging process",
        format: "date-time",
        type: "string",
      },
      EVCCIDD: {
        description:
          "Specifies the EVs identification in a readable format. It contains the MAC address of the EVCC in uppercase",
        pattern: "^[A-F0-9]{2}(:[A-F0-9]{2}){5}$",
        type: "string",
      },
      EV_AppProtocol: {
        description: "Debug_Lite - This request message provides a list of charging protocols supported by the EVCC",
        items: {
          additionalProperties: false,
          description: "This message element is used by the EVCC for transmitting the list of supported protocols",
          properties: {
            Priority: {
              description:
                "This message element is used by the EVCC for indicating the protocol priority of a specific protocol allowing the SECC to select a protocol based on priorities",
              maximum: 20,
              minimum: 1,
              type: "integer",
            },
            ProtocolNamespace: {
              description:
                "This message element is used by the EVCC to uniquely identify the Namespace URI of a specific protocol supported by the EVCC",
              maxLength: 100,
              minLength: 1,
              type: "string",
            },
            SchemaID: {
              description:
                "This message element is used by the EVCC to indicate the SchemaID assigned by the EVCC to the protocol",
              maximum: 255,
              minimum: 0,
              type: "integer",
            },
            VersionNumberMajor: {
              description:
                "This message element is used by the EVCC to indicate the major version number of the protocol",
              minimum: 0,
              type: "integer",
            },
            VersionNumberMinor: {
              description:
                "This message element is used by the EVCC to indicate the minor version number of the protocol",
              minimum: 0,
              type: "integer",
            },
          },
          type: "object",
        },
        maxItems: 20,
        minItems: 1,
        type: "array",
      },
      RequestedEnergyTransferMode: {
        $ref: "/iso15118_charger#/EnergyTransferMode",
        description: "Selected energy transfer mode for charging that is requested by the EVCC.",
        type: "string",
      },
      Require_Auth_EIM: {
        description: "An EIM authorization is requiered",
        type: "null",
      },
      Require_Auth_PnC: {
        $ref: "/authorization#/ProvidedIdToken",
        description:
          "The EVCC provides the payment details for a PnC authorization by sending the signature certificate chain and eMAID.",
        type: "object",
      },
      SelectedPaymentOption: {
        $ref: "/iso15118_charger#/PaymentOption",
        description: "This element is used for indicating the payment type",
        type: "string",
      },
      Selected_Protocol: {
        description: "Debug - Contains the selected protocol",
        type: "string",
      },
      Start_CableCheck: {
        description: "The charger should now start a cable check",
        type: "null",
      },
      V2G_Messages: {
        $ref: "/iso15118_charger#/V2G_Messages",
        description: "Debug - This element contains all V2G elements and should be used for debug purposes only",
        type: "object",
      },
      V2G_Setup_Finished: {
        description:
          "V2G_Setup_Finished from ISO15118-3. Trigger when EV sends a PowerDeliveryReq message with ChargeProgess equals Start or Stop",
        type: "null",
      },
      currentDemand_Finished: {
        description: "The charging process was finished",
        type: "null",
      },
      currentDemand_Started: {
        description: "The charging process has started and the EV wants to be charged",
        type: "null",
      },
      dlink_error: {
        description: "Terminate the data link and restart the matching process.",
        type: "null",
      },
      dlink_pause: {
        description: "Request power saving mode, while staying MATCHED.",
        type: "null",
      },
      dlink_terminate: {
        description: "Terminate the data link and become UNMATCHED.",
        type: "null",
      },
      sae_bidi_mode_active: {
        description: "The SAE J2847 bidi mode is active",
        type: "null",
      },
    },
  },
  ISO15118_ev: {
    cmds: {
      enable_sae_j2847_v2g_v2h: {
        description: "Enable the SAE J2847 2 V2H V2G",
      },
      pause_charging: {
        description: "Pause the ev charging communication process",
      },
      set_bpt_dc_params: {
        arguments: {
          EV_BPT_Parameters: {
            $ref: "/iso15118_ev#/DC_EV_BPT_Parameters",
            description: "BPT parameters for dc charging",
            type: "object",
          },
        },
        description: "Set the bpt parameters for dc charging",
      },
      set_dc_params: {
        arguments: {
          EV_Parameters: {
            $ref: "/iso15118_ev#/DC_EVParameters",
            description: "Target parameters for dc charging",
            type: "object",
          },
        },
        description: "Set the target parameters for a dc charging process",
      },
      set_fault: {
        description: "TODO_SL: Set the different ev faults to communicate these errors to the charging station",
      },
      start_charging: {
        arguments: {
          EnergyTransferMode: {
            description: "Selected energy transfer mode for charging that is requested by the EVCC",
            enum: [
              "AC_single_phase_core",
              "AC_three_phase_core",
              "DC_core",
              "DC_extended",
              "DC_combo_core",
              "DC_unique",
            ],
            type: "string",
          },
          PaymentOption: {
            description: "This element is used for indicating the payment type",
            enum: ["Contract", "ExternalPayment"],
            type: "string",
          },
        },
        description: "Start the ev charging process",
        result: {
          description: "Returns true if the evcc simulation started",
          type: "boolean",
        },
      },
      stop_charging: {
        description: "Stop the ev charging communication process",
      },
    },
    description: "This interface defines a simple ISO15118 ev.",
    vars: {
      AC_EVPowerReady: {
        description: "The car is ready for power (HLC)",
        type: "boolean",
      },
      AC_EVSEMaxCurrent: {
        description: "EVSE max current per phase",
        maximum: 400,
        minimum: 0,
        type: "number",
      },
      AC_StopFromCharger: {
        description: "The charger wants to stop the charging process",
        type: "null",
      },
      DC_PowerOn: {
        description: "The ev wants to close the dc contactors",
        type: "null",
      },
      V2G_Session_Finished: {
        description: "The v2g session between the charger and the car is finished",
        type: "null",
      },
    },
  },
  ac_rcd: {
    cmds: {
      reset: {
        description: "Resets the RCD after a trigger. May not be supported by actual hardware.",
        result: {
          description: "True: Reset successfull, False: Reset failed.",
          type: "boolean",
        },
      },
      self_test: {
        description: "Executes a self test of the RCD. If it fails, an error of type Selftest should be raised.",
      },
    },
    description:
      "This interface provides an AC Residual Current Monitor (RCD). Actual emergency switch off is done in HW directly, but this interface allows some control and telemetry.",
    errors: [
      {
        reference: "/errors/ac_rcd",
      },
    ],
    vars: {
      rcd_current_mA: {
        description: "Residual current in mA. Note that this does not trigger anything, it is merely for reporting.",
        type: "number",
      },
    },
  },
  auth: {
    cmds: {
      set_connection_timeout: {
        arguments: {
          connection_timeout: {
            description: "Connection timeout in seconds",
            maximum: 300,
            minimum: 10,
            type: "integer",
          },
        },
        description: "Sets the connection timeout",
      },
      set_master_pass_group_id: {
        arguments: {
          master_pass_group_id: {
            description: "The master pass group id",
            maxLength: 36,
            type: "string",
          },
        },
        description:
          "Sets the master pass group id. IdTokens that have this id as parent_id_token belong to the Master Pass Group.  This means they can stop any ongoing transaction, but cannot start transactions. This can, for example, be used by law enforcement personal to stop any ongoing transaction when an EV has to be towed away. If master_pass_group_id  is an empty string, it is not used.",
      },
    },
    description: "Interface of authentication framework",
    vars: {
      token_validation_status: {
        $ref: "/authorization#/TokenValidationStatusMessage",
        description: "Emits all events related to current token validation",
        type: "object",
      },
    },
  },
  auth_token_provider: {
    description: "Interface to provide a token",
    vars: {
      provided_token: {
        $ref: "/authorization#/ProvidedIdToken",
        description: "The provided token",
        type: "object",
      },
    },
  },
  auth_token_validator: {
    cmds: {
      validate_token: {
        arguments: {
          provided_token: {
            $ref: "/authorization#/ProvidedIdToken",
            description: "Contains information about the authorization request",
            type: "object",
          },
        },
        description: "Validate auth token and return result (with optional reason string)",
        result: {
          $ref: "/authorization#/ValidationResult",
          description: "Result object containing validation result",
          type: "object",
        },
      },
    },
    description: "Checks provided tokens for validity",
  },
  bank_session_token_provider: {
    cmds: {
      get_bank_session_token: {
        description: "Returns the token.",
        result: {
          $ref: "/bank_transaction#/BankSessionToken",
          description: "token",
          type: "object",
        },
      },
    },
    description: "Provides the token that can be used to uniquely identify the session in the bank statement.",
  },
  bank_transaction_summary_provider: {
    description:
      "Provides information of the session that was committed to the bank. This data may be needed for accounting purposes.",
    vars: {
      bank_transaction_summary: {
        $ref: "/bank_transaction#/BankTransactionSummary",
        description:
          "Summary of a bank transaction. Depends on bank and the backend. Therefore it's mostly opaque data at the moment.",
        type: "object",
      },
    },
  },
  car_simulator: {
    cmds: {
      enable: {
        arguments: {
          value: {
            description: "Enable/Disable simulation mode",
            type: "boolean",
          },
        },
        description:
          "Sets the ID that uniquely identifies the EVSE. The EVSEID shall match the following structure: <EVSEID> = <Country Code> <S> <EVSE Operator ID> <S> <ID Type> <Power Outlet ID>",
      },
      executeChargingSession: {
        arguments: {
          value: {
            description: "Charging simulation string",
            type: "string",
          },
        },
        description: "Executes a charging simulation string",
      },
    },
    description:
      "This defines a car simulator that can execute a full charging session, from plugging in to plugging out. It uses HIL or SIL simulation controllers from e.g. the Yeti HIL simulator.",
    vars: {
      enabled: {
        description: "Indicates whether simulation is currently enabled or not",
        type: "boolean",
      },
    },
  },
  connector_lock: {
    cmds: {
      lock: {
        description: "Lock connector lock",
      },
      unlock: {
        description: "Unlock connector lock (e.g. normal unlock or enforced by OCPP)",
      },
    },
    description:
      "This interface defines one connector locking motor (e.g. for AC sockets with no fixed attached cable)",
    errors: [
      {
        reference: "/errors/connector_lock",
      },
    ],
  },
  debug_json: {
    description:
      "This interface defines a generic JSON object debug variable publisher for use in any module. Can be used to display debug variables e.g. in web interface.",
    vars: {
      debug_json: {
        description: "Provides the debug object as a json object",
        type: "object",
      },
      title: {
        description: "Title of the Debug object",
        type: "string",
      },
    },
  },
  empty: {
    description: "This interface is empty and can be used for a config-only (main) implementation",
  },
  energy: {
    cmds: {
      enforce_limits: {
        arguments: {
          value: {
            $ref: "/energy#/EnforcedLimits",
            description: "Limit object that will be routed through the tree.",
            type: "object",
          },
        },
        description: "The EnergyManager enforces a limit using this command.",
      },
    },
    description: "This interface is the internal energy management inteface between nodes.",
    vars: {
      energy_flow_request: {
        $ref: "/energy#/EnergyFlowRequest",
        description:
          "Request energy flow to supply/limit energy import (direction from grid to car) and/or consume/limit energy export (car to grid).",
        type: "object",
      },
    },
  },
  energy_manager: {
    description: "This interface defines the global EnergyManager",
    vars: {},
  },
  energy_price_information: {
    description: "This interface defines the interface for an energy price forecast",
    vars: {
      energy_pricing: {
        $ref: "/energy_price_information#/EnergyPriceSchedule",
        description: "Forecast JSON Object containing timestamps and the price forecast for both import and export.",
        type: "object",
      },
    },
  },
  ev_slac: {
    cmds: {
      reset: {
        description: "Reset SLAC",
      },
      trigger_matching: {
        description: "Trigger start of matching process",
        result: {
          description:
            "True on success, returns False if transition was unexpected and cannot be handled by SLAC state machine.",
          type: "boolean",
        },
      },
    },
    description: "ISO15118-3 SLAC interface for EV side",
    vars: {
      dlink_ready: {
        description:
          "Inform higher layers about a change in data link status. Emits true if link was set up and false when the link is shut down.",
        type: "boolean",
      },
      ev_mac_address: {
        description: "Inform higher layers about the MAC address of the charging connector",
        pattern: "^[A-F0-9]{2}(:[A-F0-9]{2}){5}$",
        type: "string",
      },
      state: {
        description: "Provides the state enum.",
        enum: ["UNMATCHED", "MATCHING", "MATCHED"],
        type: "string",
      },
    },
  },
  evse_board_support: {
    cmds: {
      ac_read_pp_ampacity: {
        description:
          "Read the current carrying capacity of the connected cable in ampere for AC charging with a socket. This function will be used by EvseManager to get the PP value at  a distinct time. You should also publish the var pp_ampacity whenever the PP ampacity reading changes to signal changes e.g. during the charging time. This has no meaning for DC or AC charging with a fixed attached cable, it does not  need to be implemented and the returned value is not used in those cases.",
        result: {
          $ref: "/board_support_common#/ProximityPilot",
          description: "Returns the current carrying capacity of the connected cable",
          type: "object",
        },
      },
      ac_set_overcurrent_limit_A: {
        arguments: {
          value: {
            description: "Ampere current limit value",
            type: "number",
          },
        },
        description:
          "Many chargers implement a fast over current shutdown directly in the hardware that triggers if the EV draws more current than the PWM allows. If the hardware does not have this functionality, just ignore this command. Do not use it to set the PWM duty cycle. Otherwise this command reports a value that should be used for the overcurrent detection.  A margin needs to be added to avoid false triggers. Do not use the PWM duty cycle to infer the current limit in the BSP, as this will not work with HLC.",
      },
      ac_switch_three_phases_while_charging: {
        arguments: {
          value: {
            description: "True: switch to 3ph, False: switch to 1ph",
            type: "boolean",
          },
        },
        description:
          "Optional, in case of doubt do not implement. Report in hardware_capabilites if this command is supported. This command switches between one and three phase operation during an active charging session. Some cars can be permanently destroyed by that, so the bsp needs to implement a special sequence for the switching. The exact sequence can be defined by the BSP, but one example would be a C2->C1->B1->F->B1->B2->C2 or similar. Use with caution.",
      },
      allow_power_on: {
        arguments: {
          value: {
            $ref: "/evse_board_support#/PowerOnOff",
            description: "Flag and context",
            type: "object",
          },
        },
        description: "Sets allow_power_on flag. If false, Relais must never be switched on.",
      },
      enable: {
        arguments: {
          value: {
            description: "True: enabled, false: disabled.",
            type: "boolean",
          },
        },
        description:
          "Enables or disables the charging port. Typically disabled results in control pilot state F. It must not accept cars for new charging sessions if disabled.",
      },
      evse_replug: {
        arguments: {
          value: {
            description: "Time in ms for the duration of the replug sequence",
            type: "integer",
          },
        },
        description:
          "Optional, in case of doubt do not implement. Special command initiate a virtual replug sequence without restarting session. Emits a EvseReplugStarted event if supported and started. BSP will take care to not emit other events such as CarPluggedIn/Out during that time. Once finished it will emit a EvseReplugFinished. This is mainly for testing purposes, don't implement for production use.",
      },
      get_hw_capabilities: {
        description:
          "Get Hardware capability/limits. For AC these are the limits of the power path (e.g. relais etc).  For DC, these are the limits for the AC input of the ACDC converter stack, i.e. the complete AC input. Note that DC output limits are reported by the DC power supply itself.",
        result: {
          $ref: "/evse_board_support#/HardwareCapabilities",
          description: "Hardware capability/limits",
          type: "object",
        },
      },
      pwm_F: {
        description: "Turns PWM off with Error F (constant negative voltage)",
      },
      pwm_off: {
        description: "Turns PWM off (constant high voltage)",
      },
      pwm_on: {
        arguments: {
          value: {
            description: "PWM duty cycle (>0, <100)",
            maximum: 100,
            minimum: 0,
            type: "number",
          },
        },
        description: "Turns PWM on with duty cycle (in percent)",
      },
      setup: {
        arguments: {
          country_code: {
            description: "A two-letter country code in ISO 3166-1 alpha-2 format",
            type: "string",
          },
          has_ventilation: {
            description: "true: Allow mode D charging, false: do not allow mode D charging",
            type: "boolean",
          },
          three_phases: {
            description: "true: Three phases enabled, false: only single phase",
            type: "boolean",
          },
        },
        description: "Setup config options",
      },
    },
    description:
      "This interface defines the board support driver for AC or DC minimal power path: ControlPilot, output contactors.  Other components of the power path such as IMD(DC)/RCD(AC)/Connector Lock etc have their own interfaces.",
    errors: [
      {
        reference: "/errors/evse_board_support",
      },
    ],
    vars: {
      ac_nr_of_phases_available: {
        description: "Instantaneous phase count available to car",
        maximum: 3,
        minimum: 1,
        type: "integer",
      },
      ac_pp_ampacity: {
        $ref: "/board_support_common#/ProximityPilot",
        description:
          "Current carrying capacity of the connected cable in ampere for AC charging with a socket. Publish whenever it changes. This has no meaning for DC or AC charging with a fixed attached cable, it does not  need to be implemented and the returned value is not used in those cases.",
        type: "object",
      },
      capabilities: {
        $ref: "/evse_board_support#/HardwareCapabilities",
        description:
          "Hardware capabilities/limits. Initially EvseManager will call get_hw_capabilities once to fetch the limits and caches the limits internally. The BSP module does not have to publish this variable at all, then the initially fetched capabilities will be used. The BSP may publish this variable to update limits in case they change during runtime, e.g. if the maximum current changes because the hardware gets too hot.",
        type: "object",
      },
      event: {
        $ref: "/board_support_common#/BspEvent",
        description: "Event from ControlPilot signal/output relais",
        type: "object",
      },
      telemetry: {
        $ref: "/evse_board_support#/Telemetry",
        description: "Other telemetry",
        type: "object",
      },
    },
  },
  evse_manager: {
    cmds: {
      authorize_response: {
        arguments: {
          provided_token: {
            $ref: "/authorization#/ProvidedIdToken",
            description: "The token for which authorization was requested",
            type: "object",
          },
          validation_result: {
            $ref: "/authorization#/ValidationResult",
            description: "The validation result",
            type: "object",
          },
        },
        description:
          "Reports the result of an authorization request to the EvseManager.  Contains the provided_token for which authorization was requested and the validation_result",
      },
      cancel_reservation: {
        description: "Call to signal that EVSE is not reserved anymore",
      },
      disable: {
        arguments: {
          connector_id: {
            description: "Specifies the ID of the connector. If 0, the whole EVSE should be disabled",
            type: "integer",
          },
        },
        description: "Disables the evse. EVSE is not available for charging after this operation",
        result: {
          description:
            "Returns true if evse was disabled (or was disabled before), returns false if it could not be disabled (i.e. due to communication error with hardware)",
          type: "boolean",
        },
      },
      enable: {
        arguments: {
          connector_id: {
            description: "Specifies the ID of the connector to enable. If 0, the whole EVSE should be enabled",
            type: "integer",
          },
        },
        description: "Enables the evse. EVSE is available for charging after this operation",
        result: {
          description:
            "Returns true if evse was enabled (or was enabled before), returns false if enable failed e.g. due to permanent fault.",
          type: "boolean",
        },
      },
      external_ready_to_start_charging: {
        description:
          "There are situations where another module needs to do some initialization after evse manager is in principle ready to start charging. This command can be used (optimally in combination with a configuration option) to delay charging ready until the external module is done with its initialization",
        result: {
          description: "Returns true if the signal was used by the evse manager implementation",
          type: "boolean",
        },
      },
      force_unlock: {
        arguments: {
          connector_id: {
            description: "Specifies the ID of the connector that should be unlocked",
            type: "integer",
          },
        },
        description:
          "Forces connector to unlock connector now. During normal operation, connector will be locked/unlocked in the correct sequence. Do not use this function except if explicitly requested by e.g. management cloud.",
        result: {
          description: "Returns true if unlocking sequence was successfully executed",
          type: "boolean",
        },
      },
      get_evse: {
        description: "Call to get information about the EVSE including its connectors",
        result: {
          $ref: "/evse_manager#/Evse",
          description: "Object that contains information of the EVSE including its connectors",
          type: "object",
        },
      },
      pause_charging: {
        description: "Call to signal EVSE to pause charging",
        result: {
          description: "Returns true if successfully paused or was already in paused_by_evse mode",
          type: "boolean",
        },
      },
      reserve: {
        arguments: {
          reservation_id: {
            description: "The reservation id (should be added to the TransactionStarted event)",
            type: "integer",
          },
        },
        description:
          "Call to signal that EVSE is reserved. This can be used to e.g. change the color of the HMI LEDs to indicate reservation.",
        result: {
          description: "Returns true if the EVSE accepted the reservation, else false.",
          type: "boolean",
        },
      },
      resume_charging: {
        description: "Call to signal EVSE to resume charging",
        result: {
          description: "Returns true if resume was successful, false otherwise (e.g. resuming a car pause won't work)",
          type: "boolean",
        },
      },
      set_external_limits: {
        arguments: {
          value: {
            $ref: "/energy#/ExternalLimits",
            description: "UUID of node that this limit applies to",
            type: "object",
          },
        },
        description: "Set additional external energy flow limits at this node.",
      },
      set_faulted: {
        description:
          "Sets the evse manager to faulted externally. It may also switch to faulted itself if it detects an internal error.",
      },
      set_get_certificate_response: {
        arguments: {
          certificate_response: {
            $ref: "/iso15118_charger#/Response_Exi_Stream_Status",
            description: "The response raw exi stream and the status from the CSMS system",
            type: "object",
          },
        },
        description:
          "CertificateInstallationRes/CertificateUpdateRes - Set the new/updated Contract Certificate (including the certificate chain) and the corresponding encrypted private key. Should be forwared to EVCC. This is an async response to a previously published iso15118_certificate_request",
      },
      stop_transaction: {
        arguments: {
          request: {
            $ref: "/evse_manager#/StopTransactionRequest",
            description: "Request to stop the transaction.",
            type: "object",
          },
        },
        description:
          "Stops transaction and cancels charging externally, charging can only be resumed by replugging car. EVSE will also stop transaction automatically e.g. on disconnect, so this only needs to be called if the transaction should end before.",
        result: {
          description: "Returns true if successful",
          type: "boolean",
        },
      },
      switch_three_phases_while_charging: {
        arguments: {
          three_phases: {
            description: "True: switch to three phases, false: switch to single phase",
            type: "boolean",
          },
        },
        description: "Switch three phases while charging",
        result: {
          $ref: "/evse_manager#/SwitchThreePhasesWhileChargingResult",
          description: "Returns success or error code",
          type: "string",
        },
      },
      withdraw_authorization: {
        description:
          "Call to signals that EVSE is not further authorized to start a transaction (e.g. on a connection_timeout)",
      },
    },
    description:
      "This interface defines the evse manager. An evse manager represents the charging kernel of one physical connector.",
    errors: [
      {
        reference: "/errors/evse_manager",
      },
    ],
    vars: {
      car_manufacturer: {
        $ref: "/evse_manager#/CarManufacturer",
        description: "Car manufacturer (if known)",
        type: "string",
      },
      enforced_limits: {
        $ref: "/energy#/EnforcedLimits",
        description: "Enforced limits for this node (coming from the EnergyManager)",
        type: "object",
      },
      ev_info: {
        $ref: "/evse_manager#/EVInfo",
        description: "More details about the EV if available",
        type: "object",
      },
      evse_id: {
        description: "EVSE ID including the connector number, e.g. DE*PNX*E123456*1",
        type: "string",
      },
      hw_capabilities: {
        $ref: "/evse_board_support#/HardwareCapabilities",
        description: "Hardware capability/limits",
        type: "object",
      },
      iso15118_certificate_request: {
        $ref: "/iso15118_charger#/Request_Exi_Stream_Schema",
        description:
          "The vehicle requests the SECC to deliver the certificate that belong  to the currently valid contract of the vehicle. Response will be reported async via  set_get_certificate_response",
        type: "object",
      },
      limits: {
        $ref: "/evse_manager#/Limits",
        description: "Limits of this evse, published on change",
        type: "object",
      },
      powermeter: {
        $ref: "/powermeter#/Powermeter",
        description: "Measured dataset",
        type: "object",
      },
      ready: {
        description: "Signals that the EVSE Manager is ready to start charging",
        type: "boolean",
      },
      selected_protocol: {
        description: "Contains the selected protocol used for charging for informative purposes",
        type: "string",
      },
      session_event: {
        $ref: "/evse_manager#/SessionEvent",
        description: "Emits all events related to sessions",
        type: "object",
      },
      telemetry: {
        $ref: "/evse_board_support#/Telemetry",
        description: "Other telemetry",
        type: "object",
      },
      waiting_for_external_ready: {
        description:
          "Signals that the EVSE Manager is in principle ready to start charging, but delays sending its ready signal waiting for the external_ready_to_start_charging command.",
        type: "boolean",
      },
    },
  },
  evse_security: {
    cmds: {
      delete_certificate: {
        arguments: {
          certificate_hash_data: {
            $ref: "/evse_security#/CertificateHashData",
            description: "Indicates the certificate that should be deleted",
            type: "object",
          },
        },
        description: "Command to delete a certificate",
        result: {
          $ref: "/evse_security#/DeleteCertificateResult",
          description: "Result of the attempt to delete a certificate",
          type: "string",
        },
      },
      generate_certificate_signing_request: {
        arguments: {
          certificate_type: {
            $ref: "/evse_security#/LeafCertificateType",
            description: "Specifies the leaf certificate type",
            type: "string",
          },
          common: {
            description: "Specifies the common name (CN) of the certificate",
            type: "string",
          },
          country: {
            description: "Specifies the country name (C) of the certificate",
            type: "string",
          },
          organization: {
            description: "Specifies the organization name (O) of the certificate",
            type: "string",
          },
          use_tpm: {
            description: "Specifies if the CSR should store the private key on the TPM",
            type: "boolean",
          },
        },
        description: "Command to generate a certificate signing request for the given use",
        result: {
          description: "The certificate signing request in PEM format",
          type: "string",
        },
      },
      get_installed_certificates: {
        arguments: {
          certificate_types: {
            description: "Types of certificates to be retrieved",
            items: {
              $ref: "/evse_security#/CertificateType",
              minimum: 0,
              type: "string",
            },
            type: "array",
          },
        },
        description: "Command to retrieve installed certificates of the EVSE",
        result: {
          $ref: "/evse_security#/GetInstalledCertificatesResult",
          description: "Indicates the result of the command and optional certificate hash data",
          type: "object",
        },
      },
      get_key_pair: {
        arguments: {
          certificate_type: {
            $ref: "/evse_security#/LeafCertificateType",
            description: "Specifies the leaf certificate type",
            type: "string",
          },
          encoding: {
            $ref: "/evse_security#/EncodingFormat",
            description: "Specifies the encoding of the key",
            type: "string",
          },
        },
        description: "Command to get the paths of the certificate and the respective key",
        result: {
          $ref: "/evse_security#/GetKeyPairResult",
          description: "The response to the requested command",
          type: "object",
        },
      },
      get_leaf_expiry_days_count: {
        arguments: {
          certificate_type: {
            $ref: "/evse_security#/LeafCertificateType",
            description: "Indicates the type of the certificate",
            type: "string",
          },
        },
        description:
          "Command to get the days count until the given leaf certificate expires.  If no leaf certificate is installed this command will return 0",
        result: {
          description: "days count until given leaf certificate expires",
          type: "integer",
        },
      },
      get_mo_ocsp_request_data: {
        arguments: {
          certificate_chain: {
            description: "Certificate chain for which the OCSP data is retrieved",
            type: "string",
          },
        },
        description:
          "Command to retrieve the OCSP request data of the given MO certificate chain. Contains OCSP data for each certificate that is present in the chain (excluding the root)",
        result: {
          $ref: "/evse_security#/OCSPRequestDataList",
          description:
            "The OCSP request data of the given certificate chain. Contains OCSP data for each certificate in the given chain. ",
          type: "object",
        },
      },
      get_v2g_ocsp_request_data: {
        description:
          "Command to retrieve the OCSP request data of the V2G certificates. Contains OCSP data for each certificate that is present in the chain (excluding the root). ",
        result: {
          $ref: "/evse_security#/OCSPRequestDataList",
          description: "The OCSP request data of all V2G CA certificates including the Sub CAs (exluding the root)",
          type: "object",
        },
      },
      get_verify_file: {
        arguments: {
          certificate_type: {
            $ref: "/evse_security#/CaCertificateType",
            description: "Specifies that CA certificate type",
            type: "string",
          },
        },
        description: "Command to get the file path of a CA bundle that can be used for verification",
        result: {
          description: "The path of the CA bundle file",
          type: "string",
        },
      },
      install_ca_certificate: {
        arguments: {
          certificate: {
            description: "A PEM encoded X.509 certificate.",
            type: "string",
          },
          certificate_type: {
            $ref: "/evse_security#/CaCertificateType",
            description: "Indicates the type of the certificate",
            type: "string",
          },
        },
        description: "Command to install a new CA certificate",
        result: {
          $ref: "/evse_security#/InstallCertificateResult",
          description: "Result of the attempt to install a CA certificate",
          type: "string",
        },
      },
      is_ca_certificate_installed: {
        arguments: {
          certificate_type: {
            $ref: "/evse_security#/CaCertificateType",
            description: "Specifies that CA certificate type",
            type: "string",
          },
        },
        description: "Command that indicates of the given CA certificate type is installed",
        result: {
          description: "True if CA certificate is installed, else false",
          type: "boolean",
        },
      },
      update_leaf_certificate: {
        arguments: {
          certificate_chain: {
            description: "Leaf certificate or certificate chain that should be installed",
            type: "string",
          },
          certificate_type: {
            $ref: "/evse_security#/LeafCertificateType",
            description: "Indicates the type of the certificate",
            type: "string",
          },
        },
        description: "Command to install or update SECC or CSMS leaf certificate",
        result: {
          $ref: "/evse_security#/InstallCertificateResult",
          description: "Result of the attempt to install or update a leaf certificate",
          type: "string",
        },
      },
      update_ocsp_cache: {
        arguments: {
          certificate_hash_data: {
            $ref: "/evse_security#/CertificateHashData",
            description: "Certificate hash data that identifies the certificate for which the cache should be updated",
            type: "object",
          },
          ocsp_response: {
            description: "OCSPResponse class as defined in IETF RFC 6960. DER and then base64 encoded",
            type: "string",
          },
        },
        description: "Command to update the OCSP cache with the given data",
      },
      verify_certificate: {
        arguments: {
          certificate_chain: {
            description: "Leaf certificate or certificate chain that is to be verified",
            type: "string",
          },
          certificate_type: {
            $ref: "/evse_security#/LeafCertificateType",
            description: "Indicates the type of the certificate",
            type: "string",
          },
        },
        description: "Command to verify the given certificate",
        result: {
          $ref: "/evse_security#/CertificateValidationResult",
          description: "Result of the verification",
          type: "string",
        },
      },
      verify_file_signature: {
        arguments: {
          file_path: {
            description: "Path to the file that should be verified",
            type: "string",
          },
          signature: {
            description: "Base64 encoded file signature",
            type: "string",
          },
          signing_certificate: {
            description: "Certificate with which the file was signed. PEM encoded X.509 certificate",
            type: "string",
          },
        },
        description: "Verify the file at the given path using the provided certificate and signature",
        result: {
          description: "True if verification succeeded, false if not",
          type: "boolean",
        },
      },
    },
    description:
      "This interface provides security related functions and access to secure storage that an EVSE needs to provide. This includes the handling of all security related functions specified within OCPP and ISO15118. The modules that implement this interface are responsible for checking the validity period of the leaf certificates and initiate certificate signing request if leaf certificates are about to expire.",
  },
  example: {
    cmds: {
      uses_something: {
        arguments: {
          key: {
            description: "Key to check the existence for",
            pattern: "^[A-Za-z0-9_.]+$",
            type: "string",
          },
        },
        description: "This command checks if something is stored under a given key",
        result: {
          description: "Returns 'True' if something was stored for this key",
          type: "boolean",
        },
      },
    },
    description: "This interface defines an example interface that uses multiple framework features",
    errors: [
      {
        reference: "/errors/example",
      },
    ],
    vars: {
      max_current: {
        description: "Provides maximum current of this supply in ampere",
        type: "number",
      },
    },
  },
  example_user: {
    description: "This interface defines an example_user interface that uses the example interface",
    errors: [
      {
        reference: "/errors/example#/ExampleErrorA",
      },
      {
        reference: "/errors/example#/ExampleErrorB",
      },
      {
        reference: "/errors/example#/ExampleErrorC",
      },
      {
        reference: "/errors/example#/ExampleErrorD",
      },
    ],
  },
  external_energy_limits: {
    cmds: {
      set_external_limits: {
        arguments: {
          value: {
            $ref: "/energy#/ExternalLimits",
            description: "External limits object",
            type: "object",
          },
        },
        description: "Set additional external energy flow limits at this node.",
      },
    },
    description:
      "This interface allows to limit energy flow at a specific node of the energy tree from the outside (e.g. from ocpp).",
    vars: {
      enforced_limits: {
        $ref: "/energy#/EnforcedLimits",
        description: "Enforced limits for this node (coming from the EnergyManager)",
        type: "object",
      },
    },
  },
  isolation_monitor: {
    cmds: {
      start: {
        description:
          "Start recurring isolation measurements. The device should monitor the isolation status until stopped and publish the resistance data in regular intervals. The actual interval is device dependent.",
      },
      stop: {
        description:
          "Stop recurring measurements. The device should stop to monitor the isolation resistance and stop publishing the data.",
      },
    },
    description:
      "This interface defines an isolation monitoring device (IMD) according to IEC 61557-8 for DC charging. This is used to verify isolation of the DC lines before starting high voltage charging and during charging.",
    vars: {
      IsolationMeasurement: {
        $ref: "/isolation_monitor#/IsolationMeasurement",
        description: "Isolation monitoring measurement results",
        type: "object",
      },
    },
  },
  kvs: {
    cmds: {
      delete: {
        arguments: {
          key: {
            description: "Key to delete the value for",
            pattern: "^[A-Za-z0-9_.]+$",
            type: "string",
          },
        },
        description: "This command removes the value stored under a given key",
      },
      exists: {
        arguments: {
          key: {
            description: "Key to check the existence for",
            pattern: "^[A-Za-z0-9_.]+$",
            type: "string",
          },
        },
        description: "This command checks if something is stored under a given key",
        result: {
          description: "Returns 'True' if something was stored for this key",
          type: "boolean",
        },
      },
      load: {
        arguments: {
          key: {
            description: "Key to load the value for",
            pattern: "^[A-Za-z0-9_.]+$",
            type: "string",
          },
        },
        description:
          "This command loads the previously stored value for a given key (it will return null if the key does not exist)",
        result: {
          description: "The previously stored value",
          type: ["null", "string", "number", "integer", "boolean", "array", "object"],
        },
      },
      store: {
        arguments: {
          key: {
            description: "Key to store the value for",
            pattern: "^[A-Za-z0-9_.]*$",
            type: "string",
          },
          value: {
            description: "Value to store",
            type: ["null", "string", "number", "integer", "boolean", "array", "object"],
          },
        },
        description: "This command stores a value under a given key",
      },
    },
    description: "This interface defines a simple key-value-store interface",
  },
  ocpp: {
    cmds: {
      change_availability: {
        arguments: {
          request: {
            $ref: "/ocpp#/ChangeAvailabilityRequest",
            description: "The ChangeAvailabilityRequest as specified in OCPP2.0.1. For OCPP 1.6:",
            type: "object",
          },
        },
        description: "Allows to send a ChangeAvailabilityRequest internally (as can be done by the CSMS).",
        result: {
          $ref: "/ocpp#/ChangeAvailabilityResponse",
          description: "Response to ChangeAvailabilityRequest as specified in OCPP 2.0.1",
          type: "object",
        },
      },
      get_variables: {
        arguments: {
          requests: {
            description: "List of GetVariableRequest",
            items: {
              $ref: "/ocpp#/GetVariableRequest",
              minimum: 0,
              type: "object",
            },
            type: "array",
          },
        },
        description:
          "Command to get a variable from OCPP. With OCPP1.6: Retrieves a configuration key. With OCPP2.0.1: Retrieves a variable with value from the device model storage",
        result: {
          description:
            "List of GetVariableResult containing the result for every requested value. Preserves the order of the input requests.",
          items: {
            $ref: "/ocpp#/GetVariableResult",
            type: "object",
          },
          type: "array",
        },
      },
      monitor_variables: {
        arguments: {
          component_variables: {
            description: "List of ComponentVariable(s) to monitor",
            items: {
              $ref: "/ocpp#/ComponentVariable",
              type: "object",
            },
            type: "array",
          },
        },
        description:
          "Command to start monitoring the given ComponentVariable(s). Any of the provided configuration keys will be published on change by the CSMS. Consecutive calls of this operation will not override but extend the existing monitors. With OCPP1.6: This command can be used to monitor configuration keys With OCPP2.0.1: This command can be used to monitor any kind of variable in the device model storage",
      },
      restart: {
        description: "Connects the websocket and enables OCPP communication after a previous stop call.",
        result: {
          description: "Returns true if the service could be restarted successfully, else false",
          type: "boolean",
        },
      },
      security_event: {
        arguments: {
          info: {
            description: "Additional information about the occurred security event",
            type: "string",
          },
          type: {
            description: "type of the security event",
            type: "string",
          },
        },
        description:
          "Triggers a SecurityEventNotification.req at the CSMS. This event is queued with a guaranteed delivery to the CSMS.",
      },
      set_variables: {
        arguments: {
          requests: {
            description: "List of SetVariableRequests",
            items: {
              $ref: "/ocpp#/SetVariableRequest",
              minimum: 0,
              type: "object",
            },
            type: "array",
          },
        },
        description:
          "Command to set a variable at OCPP. With OCPP1.6: This command can be used to set custom configuration keys (others will be rejected) With OCPP2.0.1: This command can be used to set variables in the device model storage",
        result: {
          description: "List of SetVariableResult containing the result for every requested set operation",
          items: {
            $ref: "/ocpp#/SetVariableResult",
            type: "object",
          },
          type: "array",
        },
      },
      stop: {
        description:
          "Disconnects the websocket connection and stops the OCPP communication. No OCPP messages will be stored and sent after a restart.",
        result: {
          description: "Returns true if the service could be stopped successfully, else false",
          type: "boolean",
        },
      },
    },
    description:
      "This interface allows to control an OCPP service and set and get data from the OCPP service. It is designed to be used for both OCPP1.6 and OCPP2.0.1 module implementations. Therefore, the vars, commands and types are based more on the definitions of OCPP2.0.1, as this offers more flexibility and it is easier to transfer to the capabilities of OCPP1.6 than vice versa.",
    vars: {
      charging_schedules: {
        description:
          "Object that contains OCPP charging schedules of all connectors. The object contains one composite charging schedule for each connector id starting from connector 0. Connector 0 contains a schedule for the whole charging station.",
        type: "object",
      },
      event_data: {
        $ref: "/ocpp#/EventData",
        description:
          "Published for a component variable combination when a variable with a monitor has been changed For OCPP1.6: The object may only contain the required properties of the EventData type because in OCPP1.6\n  there is not more information available or required.\nFor OCPP2.0.1: The object may contain all available properties",
        type: "object",
      },
      is_connected: {
        description: "Indicates if chargepoint is connected to CSMS",
        type: "boolean",
      },
      ocpp_transaction_event: {
        $ref: "/ocpp#/OcppTransactionEvent",
        description: "Emits events related to OCPP transactions",
        type: "object",
      },
      security_event: {
        $ref: "/ocpp#/SecurityEvent",
        description: "Published when an internal security event occurred",
        type: "object",
      },
    },
  },
  ocpp_1_6_charge_point: {
    cmds: {
      get_configuration_key: {
        arguments: {
          keys: {
            description: "List of keys for which the values are requested. If empty, all keys and values are returned",
            items: {
              description: "A key",
              type: "string",
            },
            type: "array",
          },
        },
        description:
          "Gets the response to the requested configuration key containing a list of the values of the requested keys  and a list of the keys that are unknown",
        result: {
          $ref: "/ocpp#/GetConfigurationResponse",
          description: "Response to the requested operation",
          type: "object",
        },
      },
      monitor_configuration_keys: {
        arguments: {
          keys: {
            description: "Keys that should be monitored",
            items: {
              description: "Key that should be montired",
              maximum: 50,
              type: "string",
            },
            type: "array",
          },
        },
        description:
          "Monitors the given configuration key. In case this configuration keys is changed by the CSMS the configuration key the changed configuration key will be published. Consecutive calls of this operation will not override but extend the existing monitors",
      },
      restart: {
        description: "Connects the websocket and enables OCPP communication after a previous stop call.",
        result: {
          description: "Returns true if the service could be restarted successfully, else false",
          type: "boolean",
        },
      },
      security_event: {
        arguments: {
          info: {
            description: "Additional information about the occurred security event",
            type: "string",
          },
          type: {
            description: "type of the security event",
            type: "string",
          },
        },
        description:
          "Triggers a SecurityEventNotification.req at the CSMS. This event is queued with a guaranteed delivery to the CSMS.",
      },
      set_custom_configuration_key: {
        arguments: {
          key: {
            description: "Key that should be set",
            maximum: 50,
            type: "string",
          },
          value: {
            description: "Value that should be set for the given key",
            maximum: 500,
            type: "string",
          },
        },
        description:
          "Command to set a custom configuration key. Its not possible to set standardized configuration keys externally",
        result: {
          $ref: "/ocpp#/ConfigurationStatus",
          description: "Indicates the result of the requested operation",
          type: "string",
        },
      },
      stop: {
        description:
          "Disconnects the websocket connection and stops the OCPP communication. No OCPP messages will be stored and sent after a restart.",
        result: {
          description: "Returns true if the service could be stopped successfully, else false",
          type: "boolean",
        },
      },
    },
    description: "This interface defines a OCPP 1.6 charge point",
    vars: {
      charging_schedules: {
        description:
          "Object that contains OCPP charging schedules of all connectors. The object contains one composite charging schedule for each connector id starting from connector 0. Connector 0 contains a schedule for the whole charging station.",
        type: "object",
      },
      configuration_key: {
        $ref: "/ocpp#/KeyValue",
        description:
          "Published when a configuration key has been changed by the CSMS and a monitor has been registered using the command monitor_configuration_keys",
        type: "object",
      },
      is_connected: {
        description: "Indicates if chargepoint is connected to CSMS",
        type: "boolean",
      },
      security_event: {
        $ref: "/ocpp#/SecurityEvent",
        description: "Published when an internal security event occured",
        type: "object",
      },
    },
  },
  ocpp_data_transfer: {
    cmds: {
      data_transfer: {
        arguments: {
          request: {
            $ref: "/ocpp#/DataTransferRequest",
            description: "Request object containing data transfer request",
            type: "object",
          },
        },
        description: "Performs a OCPP data transfer request and returns the response",
        result: {
          $ref: "/ocpp#/DataTransferResponse",
          description: "Result object containing data transfer response",
          type: "object",
        },
      },
    },
    description: "This interface defines a OCPP data transfer",
  },
  power: {
    description: "This interface defines the interface of a power supply",
    vars: {
      max_current: {
        description: "This is the maximum current of the power supply",
        maximum: 60,
        minimum: 1,
        type: "number",
      },
    },
  },
  power_supply_DC: {
    cmds: {
      getCapabilities: {
        description: "Get capabilities of power supply",
        result: {
          $ref: "/power_supply_DC#/Capabilities",
          description: "Capabilities",
          type: "object",
        },
      },
      setExportVoltageCurrent: {
        arguments: {
          current: {
            description: "Output current limit in Ampere",
            type: "number",
          },
          voltage: {
            description: "Output voltage in Volt",
            type: "number",
          },
        },
        description: "Set output target voltage limit. Must be within reported limits.",
      },
      setImportVoltageCurrent: {
        arguments: {
          current: {
            description: "Input current limit in Ampere",
            type: "number",
          },
          voltage: {
            description: "Current will be drawn if input is above this voltage (in Volt)",
            type: "number",
          },
        },
        description: "Set minimal import voltage and current limit.  Must be within reported limits.",
      },
      setMode: {
        arguments: {
          value: {
            $ref: "/power_supply_DC#/Mode",
            description: "Operation mode of power supply",
            type: "string",
          },
        },
        description: "Set operation mode of the bidirectional DC power supply",
      },
    },
    description: "Interface for power supplies used for DC charging",
    vars: {
      fault_code: {
        $ref: "/power_supply_DC#/FaultCode",
        description: "Fault code. Published when fault happens.",
        type: "string",
      },
      mode: {
        $ref: "/power_supply_DC#/Mode",
        description: "Current mode. Published on change.",
        type: "string",
      },
      voltage_current: {
        $ref: "/power_supply_DC#/VoltageCurrent",
        description: "Voltage/Current at the input/output",
        type: "object",
      },
    },
  },
  powermeter: {
    cmds: {
      start_transaction: {
        arguments: {
          value: {
            $ref: "/powermeter#/TransactionReq",
            description: "All information that should be included in the signed OCMF packet",
            type: "object",
          },
        },
        description: "Starts a transaction on the power meter (for signed metering according to German Eichrecht)",
        result: {
          $ref: "/powermeter#/TransactionStartResponse",
          description: "True on success, False if transaction could not be started in the power meter",
          type: "object",
        },
      },
      stop_transaction: {
        arguments: {
          transaction_id: {
            description: "Transaction id",
            type: "string",
          },
        },
        description: "Stop the transaction on the power meter and return the signed metering information",
        result: {
          $ref: "/powermeter#/TransactionStopResponse",
          description: "Response to transaction stop request including OCMF string.",
          type: "object",
        },
      },
    },
    description: "This interface defines a generic powermeter for 5 wire TN networks.",
    vars: {
      powermeter: {
        $ref: "/powermeter#/Powermeter",
        description: "Measured dataset",
        type: "object",
      },
    },
  },
  reservation: {
    cmds: {
      cancel_reservation: {
        arguments: {
          reservation_id: {
            description: "Id of the reservation",
            type: "integer",
          },
        },
        description: "Cancels the reservation with the given reservation_id",
        result: {
          description:
            "Returns true if reservation was cancelled. Returns false if there was no reservation to cancel.",
          type: "boolean",
        },
      },
      reserve_now: {
        arguments: {
          connector_id: {
            description:
              "The id of the connector to be reserved. A value of 0 means that the reservation is not for a specific connector",
            type: "integer",
          },
          reservation: {
            $ref: "/reservation#/Reservation",
            description: "The information about the Reservation to be placed",
            type: "object",
          },
        },
        description: "Reserves this evse.",
        result: {
          $ref: "/reservation#/ReservationResult",
          description: "Returns Accepted if reservation was succesfull or specifies error code.",
          type: "string",
        },
      },
    },
    description: "Interface for reservations",
    vars: {},
  },
  serial_communication_hub: {
    cmds: {
      modbus_read_holding_registers: {
        arguments: {
          first_register_address: {
            description: "Start address for read operation (16 bit address)",
            maximum: 65535,
            minimum: 0,
            type: "integer",
          },
          num_registers_to_read: {
            description: "Number of registers to read (16 bit each)",
            minimum: 1,
            type: "integer",
          },
          target_device_id: {
            description: "ID (1 byte) of the device to send the commands to",
            maximum: 255,
            minimum: 0,
            type: "integer",
          },
        },
        description:
          "Send a Modbus RTU 'read holding registers' command via serial interface to the target hardware. (return value: response)",
        result: {
          $ref: "/serial_comm_hub_requests#/Result",
          description: "Result of the transfer",
          type: "object",
        },
      },
      modbus_read_input_registers: {
        arguments: {
          first_register_address: {
            description: "Start address for read operation (16 bit address)",
            maximum: 65535,
            minimum: 0,
            type: "integer",
          },
          num_registers_to_read: {
            description: "Number of registers to read (16 bit each)",
            minimum: 1,
            type: "integer",
          },
          target_device_id: {
            description: "ID (1 byte) of the device to send the commands to",
            maximum: 255,
            minimum: 0,
            type: "integer",
          },
        },
        description:
          "Send a Modbus RTU 'read input registers' command via serial interface to the target hardware. (return value: response)",
        result: {
          $ref: "/serial_comm_hub_requests#/Result",
          description: "Result of the transfer",
          type: "object",
        },
      },
      modbus_write_multiple_registers: {
        arguments: {
          data_raw: {
            $ref: "/serial_comm_hub_requests#/VectorUint16",
            description: "Data content to be written to the above selected registers (in 16 bit words)",
            type: "object",
          },
          first_register_address: {
            description: "Start address for write operation (16 bit address)",
            maximum: 65535,
            minimum: 0,
            type: "integer",
          },
          target_device_id: {
            description: "ID (1 byte) of the device to send the commands to",
            maximum: 255,
            minimum: 0,
            type: "integer",
          },
        },
        description:
          "Send a Modbus RTU 'write multiple registers' command via serial interface to the target hardware. (return value: response)",
        result: {
          $ref: "/serial_comm_hub_requests#/StatusCodeEnum",
          description: "Status code of the transfer",
          type: "string",
        },
      },
      modbus_write_single_register: {
        arguments: {
          data: {
            description: "Data content to be written to the above selected register",
            maximum: 65535,
            minimum: 0,
            type: "integer",
          },
          register_address: {
            description: "Address of the register to write to (16 bit address)",
            maximum: 65535,
            minimum: 0,
            type: "integer",
          },
          target_device_id: {
            description: "ID (1 byte) of the device to send the commands to",
            maximum: 255,
            minimum: 0,
            type: "integer",
          },
        },
        description:
          "Send a Modbus RTU 'write single register' command via serial interface to the target hardware. (return value: response)",
        result: {
          $ref: "/serial_comm_hub_requests#/StatusCodeEnum",
          description: "Status code of the transfer",
          type: "string",
        },
      },
      nonstd_read: {
        arguments: {
          first_register_address: {
            description: "Start address for write operation (16 bit address)",
            maximum: 65535,
            minimum: 0,
            type: "integer",
          },
          num_registers_to_read: {
            description: "Number of registers to read (16 bit each)",
            maximum: 65535,
            minimum: 0,
            type: "integer",
          },
          target_device_id: {
            description: "ID (1 byte) of the device to send the commands to",
            maximum: 255,
            minimum: 0,
            type: "integer",
          },
        },
        description:
          "Non standard mode to read registers in read coils mode, but getting a malformed reply. Used e.g. by GYDCG-UBC1 isolation monitor.",
        result: {
          $ref: "/serial_comm_hub_requests#/Result",
          description: "Result of the transfer",
          type: "object",
        },
      },
      nonstd_write: {
        arguments: {
          first_register_address: {
            description: "Start address for read operation (16 bit address)",
            maximum: 65535,
            minimum: 0,
            type: "integer",
          },
          num_registers_to_read: {
            description: "Number of registers to read (16 bit each)",
            minimum: 1,
            type: "integer",
          },
          target_device_id: {
            description: "ID (1 byte) of the device to send the commands to",
            maximum: 255,
            minimum: 0,
            type: "integer",
          },
        },
        description:
          "Non standard mode to write registers in read discrete input mode without waiting for reply. Used e.g. by GYDCG-UBC1 isolation monitor.",
      },
    },
    description: "This interface provides multiplexed access to one serial port (e.g. RS485) for multiple clients.",
  },
  session_cost: {
    description:
      "This interface publishes the running or finished session costs. This interface provides cost of one session. If we have more than one EVESEID, we need to  instantiate this interface for each EVSE.",
    vars: {
      session_cost: {
        $ref: "/session_cost#/SessionCost",
        description: "Session cost object containing the total cost of the session and a list of chunks",
        type: "object",
      },
    },
  },
  slac: {
    cmds: {
      dlink_error: {
        description: "Terminate the data link and restart the matching process.",
        result: {
          description: "True on success.",
          type: "boolean",
        },
      },
      dlink_pause: {
        description: "Request power saving mode, while staying MATCHED.",
        result: {
          description: "True on success.",
          type: "boolean",
        },
      },
      dlink_terminate: {
        description: "Terminate the data link and become UNMATCHED.",
        result: {
          description: "True on success.",
          type: "boolean",
        },
      },
      enter_bcd: {
        description: "Signal pilot state change to B/C/D from A/E/F.",
        result: {
          description:
            "True on success, returns False if transition was unexpected and cannot be handled by SLAC state machine.",
          type: "boolean",
        },
      },
      leave_bcd: {
        description: "Signal pilot state change to A/E/F from B/C/D.",
        result: {
          description:
            "True on success, returns False if transition was unexpected and cannot be handled by SLAC state machine.",
          type: "boolean",
        },
      },
      reset: {
        arguments: {
          enable: {
            description: "true: start SLAC after reset, false: stop SLAC",
            type: "boolean",
          },
        },
        description: "Reset SLAC",
      },
    },
    description: "ISO15118-3 SLAC interface for EVSE side",
    vars: {
      dlink_ready: {
        description:
          "Inform higher layers about a change in data link status. Emits true if link was set up and false when the link is shut down.",
        type: "boolean",
      },
      ev_mac_address: {
        description: "Inform higher layers about the MAC address of the vehicle (upper case)",
        pattern: "^[A-F0-9]{2}(:[A-F0-9]{2}){5}$",
        type: "string",
      },
      request_error_routine: {
        description: "Inform the higher layer to execute the error routine for a SLAC connection retry",
        type: "null",
      },
      state: {
        description: "Provides the state enum.",
        enum: ["UNMATCHED", "MATCHING", "MATCHED"],
        type: "string",
      },
    },
  },
  solar_forecast: {
    description: "This interface defines the interface for an solar energy production forecast",
    vars: {
      forecast: {
        description: "Forecast JSON Object containing a timestamp and the energy forecast in watthours.",
        type: "object",
      },
    },
  },
  sunspec_ac_meter: {
    cmds: {
      get_sunspec_ac_meter_value: {
        arguments: {
          auth_token: {
            description: "Auth token",
            maxLength: 20,
            minLength: 1,
            type: "string",
          },
        },
        description: "Returns a sunspec ac meter model",
        result: {
          $ref: "/sunspec_ac_meter#/Result",
          description: "Sunspec ac meter model",
          type: "object",
        },
      },
    },
    description: "Get sunspec ac meter measurement",
  },
  sunspec_reader: {
    description:
      "This interface defines a generic Sunspec reader, which can be used to fetch values from Sunspec devices when an implementation is given.",
    vars: {
      measurement: {
        additionalProperties: true,
        description: "Measured dataset",
        properties: {
          timestamp: {
            description: "Timestamp of measurement",
            type: "number",
          },
          value: {
            description: "Measurement value",
            type: "number",
          },
        },
        required: ["timestamp"],
        type: "object",
      },
    },
  },
  sunspec_scanner: {
    cmds: {
      scan_device: {
        arguments: {
          ip_address: {
            description: "local IP-address of the Sunspec device",
            pattern: "^(?:[0-9]{1,3}\\.){3}[0-9]{1,3}$",
            type: "string",
          },
        },
        description: "Scans complete device",
        result: {
          description: "Returns a json overview of the scan",
          type: "object",
        },
      },
      scan_network: {
        description: "Scans local network",
        result: {
          description: "Returns a json overview of the scan",
          type: "object",
        },
      },
      scan_port: {
        arguments: {
          ip_address: {
            description: "local IP-address of the Sunspec device",
            pattern: "^(?:[0-9]{1,3}\\.){3}[0-9]{1,3}$",
            type: "string",
          },
          port: {
            description: "Modbus port",
            minimum: 0,
            type: "integer",
          },
        },
        description: "Scans all units at a device's port",
        result: {
          description: "Returns a json overview of the scan",
          type: "object",
        },
      },
      scan_unit: {
        arguments: {
          ip_address: {
            description: "local IP-address of the Sunspec device",
            pattern: "^(?:[0-9]{1,3}\\.){3}[0-9]{1,3}$",
            type: "string",
          },
          port: {
            description: "Modbus port",
            minimum: 0,
            type: "integer",
          },
          unit: {
            description: "Modbus unit id",
            minimum: 0,
            type: "integer",
          },
        },
        description: "Scans specific unit at a device's port",
        result: {
          description: "Returns a json overview of the scan",
          type: "object",
        },
      },
    },
    description: "This class defines the global Sunspec scanner",
  },
  system: {
    cmds: {
      allow_firmware_installation: {
        description: "Call to allow a firmware installation to proceed",
      },
      get_boot_reason: {
        description: "Call to get the boot reason of the system",
        result: {
          $ref: "/system#/BootReason",
          description: "Returns the boot reason of the system",
          type: "string",
        },
      },
      is_reset_allowed: {
        arguments: {
          type: {
            $ref: "/system#/ResetType",
            description: "Type of the reset (Soft or Hard)",
            type: "string",
          },
        },
        description: "Call to determine if a reset of the system is allowed",
        result: {
          description: "Indicates if the system can be reset",
          type: "boolean",
        },
      },
      reset: {
        arguments: {
          scheduled: {
            description:
              "Indicates if this reset command was scheduled or immediately executed. A scheduled reset means that the system was waiting for all transactions to finish before this command was executed. This value is only informational.",
            type: "boolean",
          },
          type: {
            $ref: "/system#/ResetType",
            description: "Type of the reset (Soft or Hard)",
            type: "string",
          },
        },
        description: "Call to reset the system immediately",
      },
      set_system_time: {
        arguments: {
          timestamp: {
            description: "The new system time in RFC3339 format",
            format: "date-time",
            type: "string",
          },
        },
        description: "Call to set the system time of EVerest",
        result: {
          description: "Returns true if the system time could be set successfully, else false",
          type: "boolean",
        },
      },
      update_firmware: {
        arguments: {
          firmware_update_request: {
            $ref: "/system#/FirmwareUpdateRequest",
            description: "Meta data containing information about the firmware request",
            type: "object",
          },
        },
        description: "Call to start a firmware update",
        result: {
          $ref: "/system#/UpdateFirmwareResponse",
          description: "Returns the result of the attempt to update the firmware",
          type: "string",
        },
      },
      upload_logs: {
        arguments: {
          upload_logs_request: {
            $ref: "/system#/UploadLogsRequest",
            description: "Meta data containing information about the log request request",
            type: "object",
          },
        },
        description: "Call to start a log upload",
        result: {
          $ref: "/system#/UploadLogsResponse",
          description: "Returns the result of the attempt to upload the logs",
          type: "object",
        },
      },
    },
    description: "Interface for system wide operations of EVerest",
    vars: {
      firmware_update_status: {
        $ref: "/system#/FirmwareUpdateStatus",
        description: "Describes the current status of a firmware update of the system",
        type: "object",
      },
      log_status: {
        $ref: "/system#/LogStatus",
        description: "Describes the current status of log upload of the system",
        type: "object",
      },
    },
  },
  test_control: {
    cmds: {
      start_charging: {
        arguments: {
          mode: {
            description: "Sets charging mode (e.g. raw, iso15118)",
            maxLength: 20,
            minLength: 1,
            type: "string",
          },
        },
        description: "Enables the CarSimulator to begin charging",
        result: {
          description: "Charging state of the CarSimulator",
          type: "string",
        },
      },
    },
    description: "This interface defines the everest-testing control functions on everest-core",
    vars: {
      state: {
        description: "State of the test control instance",
        type: "string",
      },
    },
  },
  tibber_price_forecast: {
    description: "This interface defines the interface for an energy price forecast",
    vars: {
      forecast: {
        description: "Forecast JSON Object containing a timestamp and the price forecast",
        type: "object",
      },
    },
  },
  uk_random_delay: {
    cmds: {
      cancel: {
        description: "Cancels a running random delay. The effect is the same as if the time expired just now.",
      },
      disable: {
        description: "Call to disable the random delay feature",
      },
      enable: {
        description: "Call to enable the random delay feature",
      },
      set_duration_s: {
        arguments: {
          value: {
            description: "Maximum duration in seconds",
            type: "integer",
          },
        },
        description: "Set the maximum duration of the random delay. Default is 600 seconds.",
      },
    },
    description:
      "This interface provides functions for a random delay feature as required by the UK smart charging regulations The logic whether to use a random delay or not is not included in EvseManager, a different module can use this interface to enable/disable the feature during runtime and cancel a running random delay. This always applies to all connectors of this EVSE. By default, on start up, random delays are disabled.",
    vars: {
      countdown: {
        $ref: "/uk_random_delay#/CountDown",
        description: "Countdown of the currently running random delay",
        type: "object",
      },
    },
  },
  yeti_simulation_control: {
    cmds: {
      enable: {
        arguments: {
          value: {
            description: "true to enable, false to disable",
            type: "boolean",
          },
        },
        description: "Enable/disable the simulation",
      },
      setSimulationData: {
        arguments: {
          value: {
            $ref: "/yeti#/SimulationData",
            description: "simulation data",
            type: "object",
          },
        },
        description: "Sends a new simulation data object",
      },
    },
    description: "This defines a HIL simulation interface",
    vars: {
      enabled: {
        description: "Indicates whether simulation interface is currently active or not",
        type: "boolean",
      },
      simulation_feedback: {
        description:
          "Feedback from simulation (everything that a car can measure on the CP signal plus the indication whether relais are on or off)",
        type: "object",
      },
    },
  },
} as EverestInterfaceDefinitionList;
