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
          "This message is an async response to a previously published ac_close_contactor or ac_open_contactor.",
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
          "This message is an async response to a previously published require_auth_eim or require_auth_pnc. The SECC informs the EVCC whether the authorization is accecpted or not.",
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
            $ref: "/iso15118#/EvseError",
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
              $ref: "/iso15118#/PaymentOption",
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
      set_charging_parameters: {
        arguments: {
          physical_values: {
            $ref: "/iso15118#/SetupPhysicalValues",
            description: "Set up initial physical values for a AC or DC charging session",
            type: "object",
          },
        },
        description:
          "At startup, set the the charging parameters at least once. May be updated later on. If a charging session is currently active, some updated values may only be used for the next charging session.",
      },
      setup: {
        arguments: {
          debug_mode: {
            description: "Enable/Disable debug mode",
            type: "boolean",
          },
          evse_id: {
            $ref: "/iso15118#/EVSEID",
            description:
              "Set an ID that uniquely identifies the EVSE and the power outlet the vehicle is connected to ",
            type: "object",
          },
          sae_j2847_mode: {
            $ref: "/iso15118#/SaeJ2847BidiMode",
            description: "Charger is supporting SAE J2847 V2G/V2H version",
            type: "string",
          },
          supported_energy_transfer_modes: {
            description: "Available energy transfer modes supported by the EVSE",
            items: {
              $ref: "/iso15118#/SupportedEnergyMode",
              description: "The different energy modes supported by the SECC",
              type: "object",
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
        description:
          "Update the maximum allowed line current restriction per phase. Call at least once during start up.",
      },
      update_dc_maximum_limits: {
        arguments: {
          maximum_limits: {
            $ref: "/iso15118#/DcEvseMaximumLimits",
            description: "Maximum values (current, power and voltage) the EVSE can deliver",
            type: "object",
          },
        },
        description: "Update the maximum limits. Call at least once during start up.",
      },
      update_dc_minimum_limits: {
        arguments: {
          minimum_limits: {
            $ref: "/iso15118#/DcEvseMinimumLimits",
            description: "Minimum values (current and voltage) the EVSE can deliver",
            type: "object",
          },
        },
        description: "Update the minimum limits. Call at least once during start up.",
      },
      update_dc_present_values: {
        arguments: {
          present_voltage_current: {
            $ref: "/iso15118#/DcEvsePresentVoltageCurrent",
            description: "Present voltage and current",
            type: "object",
          },
        },
        description: "Update the present values from the DC powersupply",
      },
      update_isolation_status: {
        arguments: {
          isolation_status: {
            $ref: "/iso15118#/IsolationStatus",
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
      ac_close_contactor: {
        description: "The contactor should be closed",
        type: "null",
      },
      ac_eamount: {
        description:
          "[Wh] Amount of energy reflecting the EV's estimate how much energy is needed to fulfill the user configured charging goal for the current charging session",
        maximum: 200000,
        minimum: 0,
        type: "number",
      },
      ac_ev_max_current: {
        description: "[A] Maximum current supported by the EV per phase",
        maximum: 400,
        minimum: 0,
        type: "number",
      },
      ac_ev_max_voltage: {
        description:
          "[V] The RMS of the maximal nominal voltage the vehicle can accept, measured between one phase and neutral",
        maximum: 1000,
        minimum: 0,
        type: "number",
      },
      ac_ev_min_current: {
        description:
          "[A] EVMinCurrent is used to indicate to the SECC that charging below this minimum is not energy/cost efficient for the EV",
        maximum: 400,
        minimum: 0,
        type: "number",
      },
      ac_open_contactor: {
        description: "The contactor should be opened",
        type: "null",
      },
      current_demand_finished: {
        description: "The charging process was finished",
        type: "null",
      },
      current_demand_started: {
        description: "The charging process has started and the EV wants to be charged",
        type: "null",
      },
      d20_dc_dynamic_charge_mode: {
        $ref: "/iso15118#/DcChargeDynamicModeValues",
        description: "The parameters the EVCC offers and sets for dynamic control mode",
        type: "object",
      },
      dc_bulk_charging_complete: {
        description: "Optional: If set to TRUE, the EV indicates that bulk charge (approx. 80% SOC) is complete",
        type: "boolean",
      },
      dc_bulk_soc: {
        description: "Optional: [%] SOC at which the EV considers a fast charge process to end",
        maximum: 100,
        minimum: 0,
        type: "number",
      },
      dc_charging_complete: {
        description: "Optional: If set to TRUE, the EV indicates that full charge (100% SOC) is complete",
        type: "boolean",
      },
      dc_ev_energy_capacity: {
        description: "Optional: [Wh] Energy capacity of the EV",
        maximum: 200000,
        minimum: 0,
        type: "number",
      },
      dc_ev_energy_request: {
        description: "Optional: [Wh] Amount of energy the EV requests from the EVSE",
        maximum: 200000,
        minimum: 0,
        type: "number",
      },
      dc_ev_maximum_limits: {
        $ref: "/iso15118#/DcEvMaximumLimits",
        description: "Maximum Values (current, power and voltage) supported and allowed by the EV",
        type: "object",
      },
      dc_ev_present_voltage: {
        description: "Present Voltage measured from the EV",
        type: "number",
      },
      dc_ev_remaining_time: {
        $ref: "/iso15118#/DcEvRemainingTime",
        description: "Estimated or calculated time until bulk and full charge is complete",
        type: "object",
      },
      dc_ev_status: {
        $ref: "/iso15118#/DcEvStatus",
        description: "Current status of the EV",
        type: "object",
      },
      dc_ev_target_voltage_current: {
        $ref: "/iso15118#/DcEvTargetValues",
        description: "Target voltage and current requested by the EV",
        type: "object",
      },
      dc_full_soc: {
        description: "Optional: [%] SOC at which the EV considers the battery to be fully charged",
        maximum: 100,
        minimum: 0,
        type: "number",
      },
      dc_open_contactor: {
        description: "The contactor should be opened",
        type: "null",
      },
      departure_time: {
        description:
          "Optional: [RFC3339 UTC] This element is used to indicate when the vehicle intends to finish the charging process",
        format: "date-time",
        type: "string",
      },
      display_parameters: {
        $ref: "/iso15118#/DisplayParameters",
        description: "Parameters that may be displayed on the EVSE (Soc, battery capacity)",
        type: "object",
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
      ev_app_protocol: {
        $ref: "/iso15118#/AppProtocols",
        description: "Debug_Lite - This request message provides a list of charging protocols supported by the EVCC",
        type: "object",
      },
      evcc_id: {
        description:
          "Specifies the EVs identification in a readable format. It contains the MAC address of the EVCC in uppercase",
        pattern: "^[A-F0-9]{2}(:[A-F0-9]{2}){5}$",
        type: "string",
      },
      meter_info_requested: {
        description: "The EV requested meter infos from the EVSE",
        type: "null",
      },
      requested_energy_transfer_mode: {
        $ref: "/iso15118#/EnergyTransferMode",
        description: "Selected energy transfer mode for charging that is requested by the EVCC.",
        type: "string",
      },
      require_auth_eim: {
        description: "An EIM authorization is requiered",
        type: "null",
      },
      require_auth_pnc: {
        $ref: "/authorization#/ProvidedIdToken",
        description:
          "The EVCC provides the payment details for a PnC authorization by sending the signature certificate chain and eMAID.",
        type: "object",
      },
      sae_bidi_mode_active: {
        description: "The SAE J2847 bidi mode is active",
        type: "null",
      },
      selected_payment_option: {
        $ref: "/iso15118#/PaymentOption",
        description: "This element is used for indicating the payment type",
        type: "string",
      },
      selected_protocol: {
        description: "Debug - Contains the selected protocol",
        type: "string",
      },
      start_cable_check: {
        description: "The charger should now start a cable check",
        type: "null",
      },
      start_pre_charge: {
        description: "The charger should now start the pre charge phase",
        type: "null",
      },
      v2g_messages: {
        $ref: "/iso15118#/V2gMessages",
        description: "Debug - This element contains all V2G elements and should be used for debug purposes only",
        type: "object",
      },
      v2g_setup_finished: {
        description:
          "v2g_setup_finished from ISO15118-3. Trigger when EV sends a PowerDeliveryReq message with ChargeProgess equals Start or Stop",
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
          EvBPTParameters: {
            $ref: "/iso15118#/DcEvBPTParameters",
            description: "BPT parameters for dc charging",
            type: "object",
          },
        },
        description: "Set the bpt parameters for dc charging",
      },
      set_dc_params: {
        arguments: {
          EvParameters: {
            $ref: "/iso15118#/DcEvParameters",
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
            $ref: "/iso15118#/EnergyTransferMode",
            description: "Selected energy transfer mode for charging that is requested by the EVCC",
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
      withdraw_authorization: {
        arguments: {
          request: {
            $ref: "/authorization#/WithdrawAuthorizationRequest",
            description: "The request",
            type: "object",
          },
        },
        description:
          "Withdraw granted authorization. If only the evse_id is given, the granted authorization for this EVSE will be withdrawn. If only the id_token is given, the granted authorization for every EVSE where this id_token is placed will be\n  withdrawn\nIf both parameters are given, the granted authorization for the given EVSE will be withdrawn, if the placed\n  id_token matches the given id_token\nIf no parameter is given, all granted authorizations for all EVSEs will be removed",
        result: {
          $ref: "/authorization#/WithdrawAuthorizationResponse",
          description:
            "Accepted in case requested authorization was removed AuthorizationNotFound in case no match for request was found Rejected in case module could not process the request for other reasons",
          type: "string",
        },
      },
    },
    description: "Interface of authentication framework",
    errors: [
      {
        reference: "/errors/generic",
      },
    ],
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
    errors: [
      {
        reference: "/errors/generic",
      },
    ],
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
    errors: [
      {
        reference: "/errors/generic",
      },
    ],
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
        description: "Enables or disables the simulation.",
      },
      execute_charging_session: {
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
  display_message: {
    cmds: {
      clear_display_message: {
        arguments: {
          request: {
            $ref: "/display_message#/ClearDisplayMessageRequest",
            description: "The request to clear a message",
            type: "object",
          },
        },
        description: "Command to remove a display message",
        result: {
          $ref: "/display_message#/ClearDisplayMessageResponse",
          description: "Response on the clear message request",
          type: "object",
        },
      },
      get_display_messages: {
        arguments: {
          request: {
            $ref: "/display_message#/GetDisplayMessageRequest",
            description: "The request for display messages",
            type: "object",
          },
        },
        description: "Command to get one or more display messages.",
        result: {
          $ref: "/display_message#/GetDisplayMessageResponse",
          description: "The display messages or an empty array if there are none",
          type: "object",
        },
      },
      set_display_message: {
        arguments: {
          request: {
            description: "Request to set a display message",
            items: {
              $ref: "/display_message#/DisplayMessage",
              description: "The display messages to set",
              type: "object",
            },
            type: "array",
          },
        },
        description: "Command to set or replace a display message.",
        result: {
          $ref: "/display_message#/SetDisplayMessageResponse",
          description: "Response to the set display message request.",
          type: "object",
        },
      },
    },
    description:
      "A module that implements this interface should be able to: - store (add, remove, change) and retrieve predefined messages - show messages on a display\nWhen a display message contains a session id, the display message must be removed once the session has ended.",
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
  error_history: {
    cmds: {
      get_errors: {
        arguments: {
          filters: {
            $ref: "/error_history#/FilterArguments",
            description: "Filters to apply to the list of errors",
            type: "object",
          },
        },
        description: "Takes a list of filters and returns a list of errors",
        result: {
          description: "List of filtered errors",
          items: {
            $ref: "/error_history#/ErrorObject",
          },
          type: "array",
        },
      },
    },
    description: "This interface provides access to the error history of the EVerest framework",
  },
  ev_board_support: {
    cmds: {
      allow_power_on: {
        arguments: {
          value: {
            description: "True: allow power on, false: do not allow power on.",
            type: "boolean",
          },
        },
        description: "Sets allow_power_on flag. If false, contactor must never be switched on.",
      },
      diode_fail: {
        arguments: {
          value: {
            description: "True: diode failure",
            type: "boolean",
          },
        },
        description: "Setting a diode failure",
      },
      enable: {
        arguments: {
          value: {
            description: "true to enable, false to disable",
            type: "boolean",
          },
        },
        description: "Enable/disable the simulation",
      },
      set_ac_max_current: {
        arguments: {
          current: {
            description: "Max current requested from the ev",
            type: "number",
          },
        },
        description: "Setting the max current requested from the ev",
      },
      set_cp_state: {
        arguments: {
          cp_state: {
            $ref: "/ev_board_support#/EvCpState",
            description: "The CP State",
            type: "string",
          },
        },
        description: "Sets the CP State that should be set by the EV board support driver (controlled by S2)",
      },
      set_rcd_error: {
        arguments: {
          rcd_current_mA: {
            description: "RCD current in mA",
            type: "number",
          },
        },
        description: "Setting a rcd error. Only for simulation purpose.",
      },
      set_three_phases: {
        arguments: {
          three_phases: {
            description: "True: Three phase support, False: One phase support",
            type: "boolean",
          },
        },
        description: "Setting three or one phase support",
      },
    },
    description: "This defines the board support package for the EV side",
    errors: [
      {
        reference: "/errors/generic",
      },
    ],
    vars: {
      bsp_event: {
        $ref: "/board_support_common#/BspEvent",
        description: "Events from CP/Relais",
        type: "object",
      },
      bsp_measurement: {
        $ref: "/board_support_common#/BspMeasurement",
        description: "BSP Measurements",
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
    errors: [
      {
        reference: "/errors/generic",
      },
    ],
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
    },
    description:
      "This interface defines the board support driver for AC or DC minimal power path: ControlPilot, output contactors.  Other components of the power path such as IMD(DC)/RCD(AC)/Connector Lock etc have their own interfaces.",
    errors: [
      {
        reference: "/errors/evse_board_support",
      },
      {
        reference: "/errors/ac_rcd",
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
          "Hardware capabilities/limits. The BSP must publish this variable at least once during start up. For AC, the capabilities are the limits of the AC hardware power path. For DC, this are the limits for the AC input for the AC/DC converter. The BSP may publish this variable to update limits in case they change during runtime, e.g. if the maximum current changes because the hardware gets too hot.",
        type: "object",
      },
      event: {
        $ref: "/board_support_common#/BspEvent",
        description: "Event from ControlPilot signal/output relais",
        type: "object",
      },
      request_stop_transaction: {
        $ref: "/evse_manager#/StopTransactionRequest",
        description: "Publish to stop the transaction gracefully (e.g. user pressed the stop button)",
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
          "Reports the result of an authorization request to the EvseManager. Contains the provided_token for which authorization was requested and the validation_result",
      },
      cancel_reservation: {
        description: "Call to signal that EVSE is not reserved anymore",
      },
      enable_disable: {
        arguments: {
          cmd_source: {
            $ref: "/evse_manager#/EnableDisableSource",
            description: "Source of the enable command",
            type: "object",
          },
          connector_id: {
            description: "Specifies the ID of the connector to enable. If 0, the whole EVSE should be enabled",
            type: "integer",
          },
        },
        description:
          "Enables or disables the evse. Turns off PWM with error F. Charging is only possible if an EVSE is enabled.",
        result: {
          description:
            "Returns true if evse is enabled after the command, false if it is disabled. This may not be the same value as the request, since there may be a higher priority request from another source that is actually deciding whether it is enabled or disabled.",
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
          description:
            "Returns true if unlocking command was accepted, or false if it is not supported. It does not reflect the success/failure of the actual unlocking. If unlocking fails, the connector_lock interface shall raise an error asynchronously.",
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
            description:
              "The reservation id (should be added to the TransactionStarted event). Set this to a negative value if there is no specific reservation id for this evse but the evse should still move to a Reserved state because of total global reservations.",
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
      set_faulted: {
        description:
          "Sets the evse manager to faulted externally. It may also switch to faulted itself if it detects an internal error.",
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
      powermeter_public_key_ocmf: {
        description: "Powermeter public key",
        type: "string",
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
          $ref: "/evse_security#/GetCertificateSignRequestResult",
          description: "The certificate signing request in PEM format",
          type: "object",
        },
      },
      get_all_valid_certificates_info: {
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
          include_ocsp: {
            description: "Specifies whether per-certificate OCSP data is also requested",
            type: "boolean",
          },
        },
        description:
          "Finds the latest valid leafs, for each root certificate that is present on the filesystem, and returns all the newest valid leafs that are present for different roots",
        result: {
          $ref: "/evse_security#/GetCertificateFullInfoResult",
          description: "The response to the requested command",
          type: "object",
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
      get_leaf_certificate_info: {
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
          include_ocsp: {
            description: "Specifies whether per-certificate OCSP data is also requested",
            type: "boolean",
          },
        },
        description: "Command to get the paths of the certificate and the respective key",
        result: {
          $ref: "/evse_security#/GetCertificateInfoResult",
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
      get_verify_location: {
        arguments: {
          certificate_type: {
            $ref: "/evse_security#/CaCertificateType",
            description: "Specifies that CA certificate type",
            type: "string",
          },
        },
        description:
          "Command to get the file path of the CA root directory that can be used for verification. Will also invoke c_rehash for that directory",
        result: {
          description: "The path of the CA certificates directory",
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
    vars: {
      max_current: {
        description: "Provides maximum current of this supply in ampere",
        type: "number",
      },
    },
  },
  example_error_framework: {
    description: "This is an example interface used for the error framework example modules.",
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
  example_user: {
    description: "This interface defines an example_user interface that uses the example interface",
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
  generic_array: {
    description: "This interface publishes just generic data blobs.",
    vars: {
      vector_of_ints: {
        $ref: "/generic_array#/VectorOfInts",
        description: "data blob.",
        type: "object",
      },
    },
  },
  generic_error: {
    description: "Interface providing access to generic errors",
    errors: [
      {
        reference: "/errors/generic",
      },
    ],
  },
  iso15118_extensions: {
    cmds: {
      set_get_certificate_response: {
        arguments: {
          certificate_response: {
            $ref: "/iso15118#/ResponseExiStreamStatus",
            description: "The response raw exi stream and the status from the CSMS system",
            type: "object",
          },
        },
        description:
          "CertificateInstallationRes/CertificateUpdateRes - Set the new/updated Contract Certificate (including the certificate chain) and the corresponding encrypted private key. Should be forwared to EVCC. This is an async response to a previously published iso15118_certificate_request",
      },
    },
    description:
      "This interface is used to share data between ISO15118 and OCPP modules to support the requirements of the OCPP protocol",
    vars: {
      charging_needs: {
        $ref: "/iso15118#/ChargingNeeds",
        description:
          "The ISO15118-20 bidirectional charging is required to send this message for OCPP 2.1 during the 'ScheduleExchangeReq' state machine. For ISO15118-2 and OCPP 2.1 this message has to be sent during the 'ChargeParameterDiscoveryReq' state machine",
        type: "object",
      },
      iso15118_certificate_request: {
        $ref: "/iso15118#/RequestExiStreamSchema",
        description:
          "The vehicle requests the SECC to deliver the certificate that belong to the currently valid contract of the vehicle. Response will be reported async via set_get_certificate_response",
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
      start_self_test: {
        arguments: {
          test_voltage_V: {
            description:
              "Specifies the test voltage [V] that is applied on the DC pins during self test. This can be used to verify the internal voltage measurement of the IMD.",
            type: "number",
          },
        },
        description:
          'Start self test. This will be done during the CableCheck phase, so a DC voltage will be present according to IEC 61851-23 (2023). The command should return immediately. The "self_test_result" variable must be published once the self testing is done. Note that on many hardware devices this can take a long time (e.g. 20 seconds).',
      },
      stop: {
        description:
          "Stop recurring measurements. The device should stop to monitor the isolation resistance and stop publishing the data.",
      },
    },
    description:
      "This interface defines an isolation monitoring device (IMD) according to IEC 61557-8 for DC charging. This is used to verify isolation of the DC lines before starting high voltage charging and during charging.",
    errors: [
      {
        reference: "/errors/isolation_monitor",
      },
    ],
    vars: {
      isolation_measurement: {
        $ref: "/isolation_monitor#/IsolationMeasurement",
        description: "Isolation monitoring measurement results",
        type: "object",
      },
      self_test_result: {
        description:
          'Indicates the self test is done and publishes the result. Set "true" for success, "false" for failure.',
        type: "boolean",
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
          event: {
            $ref: "/ocpp#/SecurityEvent",
            description: "A security event",
            type: "object",
          },
        },
        description:
          "Triggers a SecurityEventNotification.req at the CSMS if it is deemed critical, either by setting the flag in this event or if absent automatically by libocpp",
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
          source: {
            description: "Source of variable values",
            type: "string",
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
      boot_notification_response: {
        $ref: "/ocpp#/BootNotificationResponse",
        description: "Published any time a BootNotificationResponse message is received from the CSMS",
        type: "object",
      },
      charging_schedules: {
        $ref: "/ocpp#/ChargingSchedules",
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
      ocpp_transaction_event_response: {
        $ref: "/ocpp#/OcppTransactionEventResponse",
        description: "Emits OCPP transaction responses",
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
          "Gets the response to the requested configuration key containing a list of the values of the requested keys and a list of the keys that are unknown",
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
        description: "Published when an internal security event occurred",
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
  over_voltage_monitor: {
    cmds: {
      reset_over_voltage_error: {
        description:
          "Resets the detection logic to allow for new charging session after an over voltage error occurred. This should clear the over voltage error. If monitoring is still active, it should be stopped.",
      },
      start: {
        arguments: {
          over_voltage_limit_V: {
            description:
              "Specifies the over voltage threshold [V] (based on IEC61851-23:2023 Table 103) An emergency shutdown should be triggered if the DC output voltage is higher  than this value.",
            type: "number",
          },
        },
        description: "Start over voltage monitoring",
      },
      stop: {
        description: "Stop over voltage monitoring at the end of the power transfer.",
      },
    },
    description:
      "This interface defines a fast over voltage monitoring device according to IEC61851-23:2023 6.3.1.106.2 for DC charging. An emergency shutdown needs to be triggered if the DC output voltage is above the limit of Table 103 for 9ms. The actual shutdown needs to be handled in a lower layer outside of EVerest, but this interface sets the  correct voltage limit at the start of the session and stops monitoring at the  end of the session. The over voltage error should be reported after the actual shutdown was already performed. Once an over voltage error was raised, it should only be cleared when the reset_over_voltage_error command is called. All other errors should be raised/cleared when they occur/are no longer active immediately. The var voltage_measurement_V should be published in regular intervals, e.g. 1 second. It is not used to compare it with the overvoltage threshold setting in EVerest, that has to be done in the OVM device itself. It will only be used to validate that the OVM and the IMD see the same voltage to ensure they are correctly wired to the same charging port. If it is not available in hardware, do not publish the voltage_measurement_V at all.",
    errors: [
      {
        reference: "/errors/over_voltage_monitor",
      },
    ],
    vars: {
      voltage_measurement_V: {
        description: "Measured voltage in V",
        type: "number",
      },
    },
  },
  phyverso_mcu_temperature: {
    description: "Temperatures from MCU",
    vars: {
      MCUTemperatures: {
        $ref: "/phyverso_mcu_temperature#/MCUTemperatures",
        description: "Temperatures",
        type: "object",
      },
    },
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
          mode: {
            $ref: "/power_supply_DC#/Mode",
            description: "Operation mode of power supply",
            type: "string",
          },
          phase: {
            $ref: "/power_supply_DC#/ChargingPhase",
            description:
              "Charging phase for this mode change. This information should normally not be needed by the power supply, as it should always just operate in CCCV mode. Some special setups however are handling CableCheck/PreCharge/Charge a little bit different internally.",
            type: "string",
          },
        },
        description: "Set operation mode of the bidirectional DC power supply",
      },
    },
    description:
      "Interface for power supplies used for DC charging\nImplementation guidelines for this interface: 1) During start up of the driver, publish capabilities as soon as they are available, ideally in ready() function.\n   The charging logic in EvseManager will not allow any charging until it receives the capabilities at least once.\n   Capabilities may be published at any later point in time to update the values. This may happen if they e.g. change due\n   to thermal derating etc. If a charging session is active when the update is received,\n   only power/current limits will be applied immediately. All other values will become active at the next charging session.\n\n2) setMode/setVoltageCurrent commands should be executed on the hardware immediately. If this is not possible because an error is currently active\n   (e.g. communication to the hardware is lost), the driver module shall cache the last mode and voltage/current settings.\n   Once the PSU is back on-line (e.g. after a CommunicationFault), set the last mode and voltage/current value received and only after that clear the error.\n\n3) setMode to Off requires special attention. To avoid switching the output relays of the charger off under full load, make sure to return\n   from the setMode function(Off) only when the current is below a safe threshold for switching off the relays (exact value is hardware dependent).\n   If communication is lost with the power supply, make sure to still return, the call must not block for a longer period of time.\n   EVerest will ensure the order of the calls is correct during shutdown, but will not wait for the power supply to actually turn off:\n    1. call setMode(Off) on power_supply_DC\n    2. call allow_power_on(false) on evse_board_support\n  If the setMode(Off) returns immediately, it may happen that the bsp implementation opens the relays before the power supply is shutdown.\n\n4) var voltage_current shall be published on regular intervals. The interval depends on the hardware, but it shall be at least once per second. If possible,\n   update at e.g. 4 Hertz is recommended.",
    errors: [
      {
        reference: "/errors/power_supply_DC",
      },
    ],
    vars: {
      capabilities: {
        $ref: "/power_supply_DC#/Capabilities",
        description: "Publish capabilities of this PSU.",
        type: "object",
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
        description:
          "Stop the transaction on the power meter and return the signed metering information. If the transaction id is an empty string, all ongoing transaction should be cancelled. This is used on start up to clear dangling transactions that might still be ongoing in the power meter but are not known to the EvseManager.",
        result: {
          $ref: "/powermeter#/TransactionStopResponse",
          description: "Response to transaction stop request including OCMF string.",
          type: "object",
        },
      },
    },
    description: "This interface defines a generic powermeter for 5 wire TN networks.",
    errors: [
      {
        reference: "/errors/powermeter",
      },
    ],
    vars: {
      powermeter: {
        $ref: "/powermeter#/Powermeter",
        description: "Measured dataset",
        type: "object",
      },
      public_key_ocmf: {
        description: "The public key for OCMF",
        type: "string",
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
      exists_reservation: {
        arguments: {
          request: {
            $ref: "/reservation#/ReservationCheck",
            description:
              "The information to send for the check if there is a reservation on the given connector for the given token.",
            type: "object",
          },
        },
        description:
          "Checks if there is a reservation made for the given connector and token. Will also return true if there is a reservation with this token for evse id 0.",
        result: {
          $ref: "/reservation#/ReservationCheckStatus",
          description:
            "Returns an enum which indicates the reservation status of the given id / id token / group id token combination.",
          type: "string",
        },
      },
      reserve_now: {
        arguments: {
          request: {
            $ref: "/reservation#/Reservation",
            description: "Requests to make a reservation",
            type: "object",
          },
        },
        description: "Reserves an evse.",
        result: {
          $ref: "/reservation#/ReservationResult",
          description: "Returns Accepted if reservation was succesful or specifies error code.",
          type: "string",
        },
      },
    },
    description: "Interface for reservations",
    vars: {
      reservation_update: {
        $ref: "/reservation#/ReservationUpdateStatus",
        description: "Update of the reservation.",
        type: "object",
      },
    },
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
    errors: [
      {
        reference: "/errors/generic",
      },
    ],
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
    errors: [
      {
        reference: "/errors/system",
      },
    ],
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
        description: "Enables the EvManager to begin charging",
        result: {
          description: "Charging state of the EvManager",
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
} as EverestInterfaceDefinitionList;
