// SPDX-License-Identifier: Apache-2.0
// Copyright 2020 - 2024 Pionix GmbH and Contributors to EVerest

import {EverestInterfaceDefinitionList} from "../index";

export default {
  ISO15118_ac_charger: {
    cmds: {
      set_max_current: {
        arguments: {
          max_current: {
            description: "EVSE maximum current in ampere",
            maximum: 4000,
            minimum: 0,
            type: "number",
          },
        },
        description: "Sets the maximum current of EVSE",
      },
      set_nominal_voltage: {
        arguments: {
          voltage: {
            description: "Nominal voltage in volt",
            maximum: 10000,
            minimum: 0,
            type: "number",
          },
        },
        description: "Sets nominal voltage of the EVSE",
      },
      set_rcd: {
        arguments: {
          rcd_err: {
            description: "True if the RCD has detected an error.",
            type: "boolean",
          },
        },
        description:
          "Sets the status of the Residual Current Device (RCD). If rcd_err is equal to true, the RCD has detected an error.",
      },
    },
    description: "This interface defines an ISO15118 AC Charger",
    parent: "ISO15118_charger",
    vars: {
      e_amount: {
        description:
          "Amount of energy (unit: Wh) reflecting the EV's estimate how much energy is needed to fulfill the user configured charging goal for the current charging session. This might include energy for other purposes than solely charging the HV battery of an EV.",
        maximum: 200000,
        minimum: 0,
        type: "number",
      },
      ev_max_current: {
        description: "Maximum current (unit: A) supported by the EV per phase.",
        maximum: 4000,
        minimum: 0,
        type: "number",
      },
      ev_max_voltage: {
        description:
          "The RMS of the maximal nominal voltage (unit: V) the vehicle can accept, measured between one phase and neutral.",
        maximum: 10000,
        minimum: 0,
        type: "number",
      },
      ev_min_current: {
        description:
          "EVMinCurrent (unit: A) is used to indicate to the SECC that charging below this minimum is not energy/cost efficient for the EV. It is recommended that the SECC considers this value during the target setting process (e.g. sale tariff table should account for this value).",
        maximum: 4000,
        minimum: 0,
        type: "number",
      },
    },
  },
  ISO15118_charger: {
    cmds: {
      set_evse_notification: {
        arguments: {
          max_delay: {
            description:
              "Indicates the time in seconds until it expects the EVCC to react on the action request indicated in the coresponding EVSENotification",
            type: "integer",
          },
          notification: {
            description: "EVSE notification",
            enum: ["None", "StopCharging", "ReNegotiation"],
            type: "string",
          },
        },
        description:
          "Sets a notification value used by the SECC to influence the behaviour of the EVCC. The EVSENotification contains an action that the SECC wants the EVCC to perform",
      },
      set_evseid: {
        arguments: {
          id: {
            description: "EVSE ID",
            pattern: "^[A-Z]{2}\\*[A-Z0-9]{3}\\*E[A-Z0-9][A-Z0-9\\*]{30}$",
            type: "string",
          },
        },
        description:
          "Sets the ID that uniquely identifies the EVSE. The EVSEID shall match the following structure: <EVSEID> = <Country Code> <S> <EVSE Operator ID> <S> <ID Type> <Power Outlet ID>",
      },
      set_meter_reading: {
        arguments: {
          id: {
            description: "Meter ID",
            pattern: "/^[A-Za-z0-9]{1,32}$/",
            type: "string",
          },
          timestamp: {
            description: "Timestamp (unix epoch time)",
            type: "integer",
          },
          value: {
            description: "Current meter reading",
            type: "number",
          },
        },
        description: "Sets the current meter reading in Watthours from the EVSE.",
      },
      set_receipt_required: {
        arguments: {
          receipt_required: {
            description: "Receipt required",
            type: "boolean",
          },
        },
        description:
          "Optional: Indicate that the EVCC is required to send a MeteringReceiptReq message for the purpose of signing the meter info record. If ReceiptRequired is equal to True, the EVCC is required to send a MeteringReceiptReq message including the signature.",
      },
    },
    description: "This base interface defines an abstract ISO15118 Charger",
    vars: {
      MISSING_charge_progress: {
        description:
          "This message element is used to request the EVSE to fulfill all conditions that the energy transfer can start as soon as the EV onboard system begins to retrieve energy. If ChargeProgress is equal to ‘Start’ the EVSE is requested to prepare the energy flow for an immediate start, if ChargeProgress is equal to ‘Stop’ the EVSE is requested to stop the energy flow, if ChargeProgress is equal to ‘Renegotiate’ the energy flow is neither stopped nor started, instead the renegotiation mechanisms defined in this standard apply.",
        enum: ["Start", "Stop", "Renegotiate"],
        type: "string",
      },
      MISSING_emaid: {
        description: "The e-Mobility Account Identifier (EMAID) identifies the charging contract.",
        pattern: "^[A-Za-z]{2}\\*[A-Za-z0-9]{3}\\*[A-Za-z0-9]{9}\\*[A-Za-z0-9]{0,1}$",
        type: "string",
      },
      MISSING_evccid: {
        description: "Contains the MAC adress of the EVCC in a human readable format (six hexadecimal encoded bytes)",
        pattern: "^[A-Fa-f0-9]{2}(:[A-Fa-f0-9]{2}){5}$",
        type: "string",
      },
      MISSING_selected_service: {
        description: "Used for indicating a service selected by the EVCC",
        type: "object",
      },
      departure_time: {
        description:
          "Optional: Is used to indicate when the vehicle intends to finish the charging process. Format: hh:mm:ss",
        type: "integer",
      },
      requested_energy_tranfer_mode: {
        description: "Energy transfer mode requested by the EVCC.",
        enum: ["AC_single_phase_core", "AC_three_phase_core", "DC_core", "DC_extended", "DC_combo_core", "DC_unique"],
        type: "string",
      },
      selected_payment_option: {
        description: "Used for indicating the selected payment type for services invoked by the EVCC",
        enum: ["Contract", "ExternalPayment"],
        type: "string",
      },
    },
  },
  ISO15118_dc_charger: {
    cmds: {
      MISSING_set_evse_current_regulation_tolerance: {
        arguments: {
          current: {
            description: "Current in Ampere",
            maximum: 400,
            minimum: 0,
            type: "number",
          },
        },
        description: "Optional: Sets the absolute magnitude of the current regulation tolerance of the EVSE",
      },
      MISSING_set_evse_energy_to_be_delivered: {
        arguments: {
          energy: {
            description: "Energy in Watthours",
            maximum: 200000,
            minimum: 0,
            type: "number",
          },
        },
        description: "Optional: Amount of energy to be delivered by the EVSE.",
      },
      set_evse_current_limit_achieved: {
        arguments: {
          current_limit_achieved: {
            description: "True, if the EVSE has reached its current limit, false otherwise",
            type: "boolean",
          },
        },
        description:
          "Sets the EVSECurrentLimitAchieved flag that indicates whether the EVSE has reached its current limit.",
      },
      set_evse_maximum_current_limit: {
        arguments: {
          max_current: {
            description: "Maximum current in Ampere",
            maximum: 400,
            minimum: 0,
            type: "number",
          },
        },
        description: "Optional: Sets the maximum current the EVSE can deliver.",
      },
      set_evse_maximum_power_limit: {
        arguments: {
          max_power: {
            description: "Maximum power in Watt",
            maximum: 200000,
            minimum: 0,
            type: "number",
          },
        },
        description: "Optional: Sets the maximum power the EVSE can deliver.",
      },
      set_evse_maximum_voltage_limit: {
        arguments: {
          max_voltage: {
            description: "Maximum voltage in Volt",
            maximum: 1000,
            minimum: 0,
            type: "number",
          },
        },
        description: "Optional: Sets the maximum voltage the EVSE can deliver.",
      },
      set_evse_minimum_current_limit: {
        arguments: {
          min_current: {
            description: "Minimum current in Ampere",
            maximum: 400,
            minimum: 0,
            type: "number",
          },
        },
        description: "Sets the minimum current the EVSE can deliver with the expected accuracy.",
      },
      set_evse_minimum_voltage_limit: {
        arguments: {
          min_voltage: {
            description: "Minimum voltage in Volt",
            maximum: 1000,
            minimum: 0,
            type: "number",
          },
        },
        description: "Sets the minimum voltage the EVSE can deliver with the expected accuracy",
      },
      set_evse_peak_current_ripple: {
        arguments: {
          current: {
            description: "Current in Ampere",
            maximum: 400,
            minimum: 0,
            type: "number",
          },
        },
        description: "Peak-to-peak magnitude of the current ripple of the EVSE",
      },
      set_evse_power_limit_achieved: {
        arguments: {
          power_limit_achieved: {
            description: "True, if the EVSE has reached its power limit, false otherwise",
            type: "boolean",
          },
        },
        description:
          "Sets the EVSEPowerLimitAchieved flag that indicates whether the EVSE has reached its power limit.",
      },
      set_evse_present_current: {
        arguments: {
          current: {
            description: "Output current in Ampere",
            maximum: 400,
            minimum: 0,
            type: "number",
          },
        },
        description: "Sets the output current of the EVSE",
      },
      set_evse_present_voltage: {
        arguments: {
          voltage: {
            description: "Output voltage in Volt",
            maximum: 1000,
            minimum: 0,
            type: "number",
          },
        },
        description: "Sets the output voltage of the EVSE.",
      },
      set_evse_voltage_limit_achieved: {
        arguments: {
          voltage_limit_achieved: {
            description: "True, if the EVSE has reached its voltage limit, false otherwise",
            type: "boolean",
          },
        },
        description:
          "Sets the EVSEVoltageLimitAchieved flag that indicates whether the EVSE has reached its voltage limit.",
      },
    },
    description: "This interface defines an ISO15118 DC Charger",
    parent: "ISO15118_charger",
    vars: {
      MISSING_bulk_charging_complete: {
        description: "If set to true, the EV indicates that bulk charge (approx. 80% SOC) is complete.",
        type: "boolean",
      },
      MISSING_charging_complete: {
        description: "If set to true, the EV indicates that full charge (100% SOC)is complete.",
        type: "boolean",
      },
      MISSING_ev_dc_error_code: {
        description: "Indicates the EV internal status.",
        enum: [
          "NO_ERROR",
          "FAILED_RESSTemperatureInhibit",
          "FAILED_EV_ShiftPosition",
          "FAILED_ChargerConnerctorLockFault",
          "FAILED_EVRESSMalfunction",
          "FAILED_ChargingCurrentdifferential",
          "FAILED_ChargingVoltageOutOfRange",
          "Reserved A-C",
          "FAILED_ChargingSystemIncompatibility",
          "NoData",
        ],
        type: "string",
      },
      MISSING_ev_ready_for_charging: {
        description: "If set to TRUE, the EV is ready to charge.",
        type: "boolean",
      },
      MISSING_ev_soc: {
        description: "State of charge (soc) of the EV's battery.",
        maximum: 100,
        minimum: 0,
        type: "integer",
      },
      dc_evse_status: {
        description: "Current status of the EVSE",
        type: "object",
      },
      ev_energy_capacity: {
        description: "Optional: Energy capacity (unit: Wh) of the EV",
        maximum: 200000,
        minimum: 0,
        type: "number",
      },
      ev_energy_request: {
        description: "Optional: Amount of energy (unit: Wh) the EV requests from the EVSE",
        maximum: 200000,
        minimum: 0,
        type: "number",
      },
      ev_maximum_current_limit: {
        description: "Maximum EV current (unit: A) limit",
        maximum: 400,
        minimum: 0,
        type: "number",
      },
      ev_maximum_power_limit: {
        description: "Maximum EV power (unit: W) limit",
        maximum: 200000,
        minimum: 0,
        type: "number",
      },
      ev_maximum_voltage_limit: {
        description: "Maximum EV voltage (unit: V) limit",
        maximum: 1000,
        minimum: 0,
        type: "number",
      },
      ev_target_current: {
        description: "Instantaneous current (unit: A) requested by the EV",
        maximum: 400,
        minimum: 0,
        type: "number",
      },
      ev_target_voltage: {
        description: "Target voltage (unit: V) requested by the EV",
        maximum: 1000,
        minimum: 0,
        type: "number",
      },
      remaining_time_to_bulk_soc: {
        description: "Optional: Estimated or calculated time (unit: s) until bulk charge (80% SOC) is complete.",
        maximum: 172800,
        minimum: 0,
        type: "integer",
      },
      remaining_time_to_full_soc: {
        description: "Optional: Estimated or calculated time (unit: s) until full charge (100% SOC) is complete.",
        maximum: 172800,
        minimum: 0,
        type: "integer",
      },
    },
  },
  auth: {
    cmds: {
      get_authorization: {
        description:
          "This returns a validated auth token or null if none could be validated. If a validated token is returned, ownership is transferred to the caller and it is removed from this module.",
        result: {
          description:
            "The auth token that can be used for signing etc. This will return null if no token could be validated.",
          maxLength: 20,
          minLength: 1,
          type: ["null", "string"],
        },
      },
    },
    description: "Interface of authentication framework",
    vars: {
      authorization_available: {
        description:
          "True: Validated auth token available, use get_authorization to consume it. False: no token available.",
        type: "boolean",
      },
    },
  },
  auth_token_provider: {
    description: "Provide some authentication token",
    vars: {
      token: {
        additionalProperties: false,
        description: "Arbitrary auth token string and type of token provider (string provided in UI)",
        properties: {
          timeout: {
            description: "Time (in s) the token can be considered valid by the auth framework",
            maximum: 120,
            minimum: 1,
            type: "number",
          },
          token: {
            description:
              "Arbitrary token string: this has to be printable case insensitive ascii: !!!FIXME!!! write a regex to allow only printable ascii",
            maxLength: 20,
            minLength: 1,
            type: "string",
          },
          type: {
            description: "Type of token provider",
            maxLength: 32,
            minLength: 2,
            type: "string",
          },
        },
        required: ["token", "type"],
        type: "object",
      },
    },
  },
  auth_token_validator: {
    cmds: {
      validate_token: {
        arguments: {
          token: {
            description:
              "Arbitrary token string: this has to be printable case insensitive ascii: !!!FIXME!!! write a regex to allow only printable ascii",
            maxLength: 20,
            minLength: 1,
            type: "string",
          },
        },
        description: "Validate auth token and return result (with optional reason string)",
        result: {
          additionalProperties: false,
          description:
            "Result object containing validation result enum value (key: result) and optional reason string (key: reason)",
          properties: {
            reason: {
              minLength: 5,
              type: "string",
            },
            result: {
              enum: ["Accepted", "Blocked", "Expired", "Invalid"],
              type: "string",
            },
          },
          required: ["result"],
          type: "object",
        },
      },
    },
    description: "Checks provided tokens for validity",
  },
  board_support_AC: {
    cmds: {
      allow_power_on: {
        arguments: {
          value: {
            description: "True: allow power on, false: do not allow power on.",
            type: "boolean",
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
          "Enables or disables the EVSE. Typically disabled results in control pilot state F. It must not accept cars for new charging sessions if disabled.",
      },
      force_unlock: {
        description: "Force unlock motor lock",
        result: {
          description: "Returns true if unlocking sequence was successfully executed",
          type: "boolean",
        },
      },
      get_hw_capabilities: {
        description: "Get Hardware capability/limits",
        result: {
          description: "Hardware capability/limits",
          max_current_A: {
            description: "Maximum current (ampere) the hardware can handle",
            type: "number",
          },
          max_phase_count: {
            description: "Max nr of phases the hardware can use",
            maximum: 3,
            minimum: 1,
            type: "integer",
          },
          min_current_A: {
            description:
              "Minimum current (ampere) the hardware can use to charge. Values below may be set but may result in pause instead.",
            type: "number",
          },
          min_phase_count: {
            description: "Minimum nr of phases the hardware can use",
            maximum: 3,
            minimum: 1,
            type: "integer",
          },
          supports_changing_phases_during_charging: {
            description:
              "Indicates whether changing number of phases is supported during charging (true) or not (false)",
            type: "boolean",
          },
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
            description: "PWM duty cycle (>0, <1)",
            maximum: 1,
            minimum: 0,
            type: "number",
          },
        },
        description: "Turns PWM on with duty cycle",
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
          rcd_enabled: {
            description: "true: enable RCD, false: disable RCD",
            type: "boolean",
          },
          three_phases: {
            description: "true: Three phases enabled, false: only single phase",
            type: "boolean",
          },
        },
        description: "Setup config options",
      },
      switch_three_phases_while_charging: {
        arguments: {
          value: {
            description: "True: switch to 3ph, False: switch to 1ph",
            type: "boolean",
          },
        },
        description:
          "Special command to force switching between one and three phases while charging is active. HW must go through some special sequence to ensure safe operation.",
      },
    },
    description:
      "This interface defines the board support driver for AC power path: ControlPilot, Relais, RCD and motor lock",
    vars: {
      event: {
        description: "Event from ControlPilot signal/Relais/RCD",
        enum: [
          "CarPluggedIn",
          "CarRequestedPower",
          "PowerOn",
          "PowerOff",
          "CarRequestedStopPower",
          "CarUnplugged",
          "ErrorE",
          "ErrorDF",
          "ErrorRelais",
          "ErrorRCD",
          "ErrorVentilationNotAvailable",
          "ErrorOverCurrent",
          "RestartMatching",
          "PermanentFault",
        ],
        type: "string",
      },
      nr_of_phases_available: {
        description: "Instantaneous phase count available to car",
        maximum: 3,
        minimum: 1,
        type: "integer",
      },
      telemetry: {
        additionalProperties: false,
        description: "Other telemetry",
        properties: {
          fan_rpm: {
            description: "RPM of the fan. 0 if off or no fan available.",
            type: "number",
          },
          rcd_current: {
            description: "Residual current in mA",
            type: "number",
          },
          relais_on: {
            description: "true if power to the car is currently on, false if off",
            type: "boolean",
          },
          supply_voltage_12V: {
            description: "Internal 12V supply voltage",
            type: "number",
          },
          supply_voltage_minus_12V: {
            description: "Internal -12V supply voltage",
            type: "number",
          },
          temperature: {
            description: "Current temperature of the EVSE in degree celsius",
            type: "number",
          },
        },
        type: "object",
      },
    },
  },
  board_support_AC_debug: {
    description: "This interface defines the board support debug information that is not used for actual control",
    vars: {
      cp_hi_voltage: {
        description: "Voltage of high part of PWM",
        type: "number",
      },
      cp_lo_voltage: {
        description: "Voltage of low part of PWM",
        type: "number",
      },
      has_ventilation: {
        description: "True if ventilated charging is allowed",
        type: "boolean",
      },
      is_power_on: {
        description: "True if Relais are currently closed (power on)",
        type: "boolean",
      },
      pwm_running: {
        description: "True if ventilated charging is allowed",
        type: "boolean",
      },
      rcd_current: {
        description: "Residual current measurement",
        type: "number",
      },
      rcd_reclosing_allowed: {
        description: "True if RCD may reclose after fault according to local regulations",
        type: "boolean",
      },
      simplified_mode: {
        description: "True if car uses simplified mode of IEC61851",
        type: "boolean",
      },
      supply_12V_voltage: {
        description: "Voltage of +12V supply",
        type: "number",
      },
      supply_N12V_voltage: {
        description: "Voltage of -12V supply",
        type: "number",
      },
      three_phases: {
        description: "config option for three phase/single phase operation",
        type: "boolean",
      },
      three_phases_active: {
        description: "True if three phases is enabled for current charging session",
        type: "boolean",
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
  dummy: {
    description: "Dummy interface for testing",
    vars: {
      token: {
        additionalProperties: false,
        description: "Arbitrary auth token string and type of token provider (string provided in UI)",
        properties: {
          heart: {
            description: "Type of token provider",
            maxLength: 32,
            minLength: 2,
            type: "string",
          },
          token: {
            description:
              "Arbitrary token string: this has to be printable case insensitive ascii: !!!FIXME!!! write a regex to allow only printable ascii",
            maxLength: 20,
            minLength: 1,
            type: "string",
          },
        },
        required: ["token", "heart"],
        type: "object",
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
          limits_export: {
            additionalProperties: false,
            description: "Enforced limits that must be respected.",
            properties: {
              limit: {
                ac_current_A: {
                  additionalProperties: false,
                  description: "AC current limit object",
                  properties: {
                    current_A: {
                      description: "AC current limit per phase in Ampere",
                      maximum: 0,
                      type: "number",
                    },
                    phase_count: {
                      description: "Limit to number of phases. Omit if number of phases are not limited.",
                      maximum: 3,
                      minimum: 1,
                      type: "integer",
                    },
                  },
                  required: ["current_A"],
                  type: "object",
                },
                description: "Enforced limits",
                total_power_W: {
                  description: "Total power limit in Watt. Can be used for DC or as additional limit for AC.",
                  maximum: 0,
                  type: "number",
                },
                type: "object",
              },
              valid_until: {
                description:
                  "Limits are valid until this timepoint in RFC3339 UTC. If no new update is received, power consumption must be stopped afer that timepoint.",
                format: "date-time",
                type: "string",
              },
            },
            type: "object",
          },
          limits_import: {
            additionalProperties: false,
            description: "Enforced limits that must be respected.",
            properties: {
              limit: {
                ac_current_A: {
                  additionalProperties: false,
                  description: "AC current limit object",
                  properties: {
                    current_A: {
                      description: "AC current limit per phase in Ampere",
                      minimum: 0,
                      type: "number",
                    },
                    phase_count: {
                      description: "Limit to number of phases. Omit if number of phases are not limited.",
                      maximum: 3,
                      minimum: 1,
                      type: "integer",
                    },
                  },
                  required: ["current_A"],
                  type: "object",
                },
                description: "Enforced limits",
                total_power_W: {
                  description: "Total power limit in Watt. Can be used for DC or as additional limit for AC.",
                  minimum: 0,
                  type: "number",
                },
                type: "object",
              },
              valid_until: {
                description:
                  "Limits are valid until this timepoint in RFC3339 UTC. If no new update is received, power consumption must be stopped afer that timepoint.",
                format: "date-time",
                type: "string",
              },
            },
            type: "object",
          },
          schedule_export: {
            description:
              "Informative only. Do not use for actual limiting. Energy export/limits time series. The first entry is special as it will be active already now even if the timestamp is in the future, so it is good practice to set the first entry to current time. The time series can have arbitrary time difference between entries and all timestamps are absolute UTC time.",
            items: {
              additionalProperties: false,
              description: "One entry for the time series",
              properties: {
                limit: {
                  ac_current_A: {
                    additionalProperties: false,
                    description: "AC current limit object",
                    properties: {
                      current_A: {
                        description: "AC current limit per phase in Ampere",
                        maximum: 0,
                        type: "number",
                      },
                      phase_count: {
                        description: "Limit to number of phases. Omit if number of phases are not limited.",
                        maximum: 3,
                        minimum: 1,
                        type: "integer",
                      },
                    },
                    required: ["current_A"],
                    type: "object",
                  },
                  description: "Limit for this timestamp",
                  required: ["limit_type"],
                  total_power_W: {
                    description: "Total power limit in Watt. Can be used for DC or as additional limit for AC.",
                    maximum: 0,
                    type: "number",
                  },
                  type: "object",
                },
                timestamp: {
                  description:
                    "Absolute timestamp for this sample in RFC3339 UTC format https://datatracker.ietf.org/doc/html/rfc3339#section-5.6",
                  format: "date-time",
                  type: "string",
                },
              },
              required: ["timestamp", "limit"],
              type: "object",
            },
            type: "array",
          },
          schedule_import: {
            description:
              "Informative only. Do not use for actual limiting. Energy import/limits time series. The first entry is special as it will be active already now even if the timestamp is in the future, so it is good practice to set the first entry to current time. The time series can have arbitrary time difference between entries and all timestamps are absolute UTC time.",
            items: {
              additionalProperties: false,
              description: "One entry for the time series",
              properties: {
                limit: {
                  ac_current_A: {
                    additionalProperties: false,
                    description: "AC current limit object",
                    properties: {
                      current_A: {
                        description: "AC current limit per phase in Ampere",
                        minimum: 0,
                        type: "number",
                      },
                      phase_count: {
                        description: "Limit to number of phases. Omit if number of phases are not limited.",
                        maximum: 3,
                        minimum: 1,
                        type: "integer",
                      },
                    },
                    required: ["current_A"],
                    type: "object",
                  },
                  description: "Limit for this timestamp",
                  required: ["limit_type"],
                  total_power_W: {
                    description: "Total power limit in Watt. Can be used for DC or as additional limit for AC.",
                    minimum: 0,
                    type: "number",
                  },
                  type: "object",
                },
                timestamp: {
                  description:
                    "Absolute timestamp for this sample in RFC3339 UTC format https://datatracker.ietf.org/doc/html/rfc3339#section-5.6",
                  format: "date-time",
                  type: "string",
                },
              },
              required: ["timestamp", "limit"],
              type: "object",
            },
            type: "array",
          },
          uuid: {
            description: "UUID of node that this limit applies to",
            type: "string",
          },
        },
        description: "The EnergyManager enforces a limit using this command.",
      },
    },
    description:
      "This interface defines a forecast schedule of energy import/export capability/limits, pricing and current energy usage.",
    vars: {
      energy: {
        description:
          "Energy object to supply/limit energy import (direction from grid to car) and/or consume/limit energy export (car to grid).",
        properties: {
          children: {
            description: "Array of child nodes (in the direction to consumer/car",
            type: "array",
          },
          energy_usage: {
            description: "Energy usage of this node (powermeter struct)",
            type: "object",
          },
          node_type: {
            description:
              "Type of energy source/sink. Use Limit if this purely enforces limits but is not a physical energy source/sink.",
            enum: ["Grid", "GridConnection", "Solar", "Battery", "Fuse", "Evse"],
            type: "string",
          },
          optimizer_target: {
            additionalProperties: false,
            description: "User defined optimizer targets for this evse",
            properties: {
              car_battery_soc: {
                description: "Car battery State Of Charge in percent",
                type: "number",
              },
              charge_to_max_percent: {
                description: "Charge car battery to max NN percent",
                type: "number",
              },
              energy_amount_needed: {
                description: "Amount of kwh the car needs to fulfill its charging target",
                type: "number",
              },
              full_autonomy: {
                description: "Only charge from locally generated energy. Do not draw power from grid for charging.",
                type: "boolean",
              },
              leave_time: {
                description:
                  "RFC3339 UTC format time when the car needs to drive away with charging targets fullfilled. Will charge cheapest within this timeframe.",
                type: "string",
              },
              price_limit: {
                description:
                  "Always charge if price below this limit. This includes solar charging and price for solar energy if price levels set correctly.",
                type: "number",
              },
            },
            type: "object",
          },
          schedule_export: {
            description:
              "Energy export/limits time series. The first entry is special as it will be active already now even if the timestamp is in the future, so it is good practice to set the first entry to current time. The time series can have arbitrary time difference between entries and all timestamps are absolute UTC time.",
            items: {
              additionalProperties: false,
              description: "One entry for the time series",
              properties: {
                limit: {
                  ac_current_A: {
                    additionalProperties: false,
                    description: "AC current limit object",
                    properties: {
                      max_current_A: {
                        description: "Max AC current limit per phase in Ampere",
                        minimum: 0,
                        type: "number",
                      },
                      max_phase_count: {
                        description: "Max Limit of number of phases. Omit if number of phases are not limited.",
                        maximum: 3,
                        minimum: 1,
                        type: "integer",
                      },
                      min_current_A: {
                        description: "Minimal AC current limit per phase in Ampere to be able to discharge",
                        minimum: 0,
                        type: "number",
                      },
                      min_phase_count: {
                        description: "Minimum number of phases that can be used for proper operation.",
                        maximum: 3,
                        minimum: 1,
                        type: "integer",
                      },
                      supports_changing_phases_during_charging: {
                        description: "Indicate whether phase switching is allowed during charging or not",
                        type: "boolean",
                      },
                    },
                    required: ["max_current_A"],
                    type: "object",
                  },
                  description: "Limit for this timestamp",
                  limit_type: {
                    description: "Hard limits need to be enforced by EnergyManager, Soft limits may be ignored.",
                    enum: ["Hard", "Soft"],
                    type: "string",
                  },
                  required: ["limit_type"],
                  total_power_W: {
                    description: "Total power limit in Watt. Can be used for DC or as additional limit for AC.",
                    maximum: 0,
                    type: "number",
                  },
                  type: "object",
                },
                price_per_kwh: {
                  additionalProperties: false,
                  description: "Price information for this timepoint",
                  properties: {
                    currency: {
                      description: "Currency in 3 digit ISO 4217",
                      maxLength: 3,
                      minLength: 3,
                      type: "string",
                    },
                    value: {
                      description: "Price per kWh (earning)",
                      type: "number",
                    },
                  },
                  required: ["value", "currency"],
                  type: "object",
                },
                timestamp: {
                  description:
                    "Absolute timestamp for this sample in RFC3339 UTC format https://datatracker.ietf.org/doc/html/rfc3339#section-5.6",
                  format: "date-time",
                  type: "string",
                },
              },
              required: ["timestamp", "limit"],
              type: "object",
            },
            type: "array",
          },
          schedule_import: {
            description:
              "Energy import/limits time series. The first entry is special as it will be active already now even if the timestamp is in the future, so it is good practice to set the first entry to current time. The time series can have arbitrary time difference between entries and all timestamps are absolute UTC time.",
            items: {
              additionalProperties: false,
              description: "One entry for the time series",
              properties: {
                capabilities: {
                  ac_current_A: {
                    additionalProperties: false,
                    description: "AC current limit object",
                    properties: {
                      max_current_A: {
                        description: "Max AC current limit per phase in Ampere",
                        minimum: 0,
                        type: "number",
                      },
                      max_phase_count: {
                        description: "Max Limit of number of phases. Omit if number of phases are not limited.",
                        maximum: 3,
                        minimum: 1,
                        type: "integer",
                      },
                      min_current_A: {
                        description: "Minimal AC current limit per phase in Ampere to be able to charge",
                        minimum: 0,
                        type: "number",
                      },
                      min_phase_count: {
                        description: "Minimum number of phases that can be used for proper operation.",
                        maximum: 3,
                        minimum: 1,
                        type: "integer",
                      },
                      supports_changing_phases_during_charging: {
                        description: "Indicate whether phase switching is allowed during charging or not",
                        type: "boolean",
                      },
                    },
                    required: ["max_current_A"],
                    type: "object",
                  },
                  description: "Limit for this timestamp",
                  limit_type: {
                    description: "Hard limits need to be enforced by EnergyManager, Soft limits may be ignored.",
                    enum: ["Hard", "Soft"],
                    type: "string",
                  },
                  required: ["limit_type"],
                  total_power_W: {
                    description: "Total power limit in Watt. Can be used for DC or as additional limit for AC.",
                    minimum: 0,
                    type: "number",
                  },
                  type: "object",
                },
                price_per_kwh: {
                  additionalProperties: false,
                  description: "Price information for this timepoint",
                  properties: {
                    currency: {
                      description: "Currency in 3 digit ISO 4217",
                      maxLength: 3,
                      minLength: 3,
                      type: "string",
                    },
                    value: {
                      description: "Price per kWh (cost)",
                      type: "number",
                    },
                  },
                  required: ["value", "currency"],
                  type: "object",
                },
                timestamp: {
                  description:
                    "Absolute timestamp for this sample in RFC3339 UTC format https://datatracker.ietf.org/doc/html/rfc3339#section-5.6",
                  format: "date-time",
                  type: "string",
                },
              },
              required: ["timestamp", "capabilities"],
              type: "object",
            },
            type: "array",
          },
          uuid: {
            description:
              "UUID for this node. This UUID will be used again when enforce_limits() command propagates through the tree.",
            type: "string",
          },
        },
        required: ["node_type", "uuid"],
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
      energy_price_schedule: {
        additionalProperties: false,
        description: "Forecast JSON Object containing timestamps and the price forecast for both import and export.",
        properties: {
          schedule_export: {
            description:
              "Pricing time series. The first entry is special as it will be active already now even if the timestamp is in the future, so it is good practice to set the first entry to current time. The time series can have arbitrary time difference between entries and all timestamps are absolute UTC time.",
            items: {
              additionalProperties: false,
              description: "One entry for the time series",
              properties: {
                price_per_kwh: {
                  additionalProperties: false,
                  description: "Price information for this timepoint",
                  properties: {
                    currency: {
                      description: "Currency in 3 digit ISO 4217",
                      maxLength: 3,
                      minLength: 3,
                      type: "string",
                    },
                    value: {
                      description: "Price per kWh (earning)",
                      type: "number",
                    },
                  },
                  required: ["value", "currency"],
                  type: "object",
                },
                timestamp: {
                  description:
                    "Absolute timestamp for this sample in RFC3339 UTC format https://datatracker.ietf.org/doc/html/rfc3339#section-5.6",
                  format: "date-time",
                  type: "string",
                },
              },
              required: ["timestamp", "price_per_kwh"],
              type: "object",
            },
            type: "array",
          },
          schedule_import: {
            description:
              "Pricing time series. The first entry is special as it will be active already now even if the timestamp is in the future, so it is good practice to set the first entry to current time. The time series can have arbitrary time difference between entries and all timestamps are absolute UTC time.",
            items: {
              additionalProperties: false,
              description: "One entry for the time series",
              properties: {
                price_per_kwh: {
                  additionalProperties: false,
                  description: "Price information for this timepoint",
                  properties: {
                    currency: {
                      description: "Currency in 3 digit ISO 4217",
                      maxLength: 3,
                      minLength: 3,
                      type: "string",
                    },
                    value: {
                      description: "Price per kWh (cost)",
                      type: "number",
                    },
                  },
                  required: ["value", "currency"],
                  type: "object",
                },
                timestamp: {
                  description:
                    "Absolute timestamp for this sample in RFC3339 UTC format https://datatracker.ietf.org/doc/html/rfc3339#section-5.6",
                  format: "date-time",
                  type: "string",
                },
              },
              required: ["timestamp", "price_per_kwh"],
              type: "object",
            },
            type: "array",
          },
        },
        type: "object",
      },
    },
  },
  evse_manager: {
    cmds: {
      accept_new_session: {
        description:
          "Call when cleanup is done and new cars are allowed to plugin. Do not use multiple cleanup handlers, call from only one module!",
        result: {
          description: "Returns true if successful",
          type: "boolean",
        },
      },
      cancel_charging: {
        description: "Cancels charging, can only be resumed by replugging car",
        result: {
          description: "Returns true if successful",
          type: "boolean",
        },
      },
      cancel_reservation: {
        description: "Cancels current reservation",
        result: {
          description: "Indicates if cancelling reservation was successful or not",
          type: "boolean",
        },
      },
      disable: {
        description: "Disables the evse",
        result: {
          description:
            "Returns true if evse was disabled (or was disabled before), returns false if it could not be disabled (i.e. due to communication error with hardware)",
          type: "boolean",
        },
      },
      enable: {
        description: "Enables the evse",
        result: {
          description:
            "Returns true if evse was enabled (or was enabled before), returns false if enable failed e.g. due to permanent fault.",
          type: "boolean",
        },
      },
      force_unlock: {
        description:
          "Force unlock connector now. During normal operation, connector will be locked/unlocked in the correct sequence. Do not use this function except if explicitly requested by e.g. management cloud.",
        result: {
          description: "Returns true if unlocking sequence was successfully executed",
          type: "boolean",
        },
      },
      get_signed_meter_value: {
        description: "Returns a signed meter value. Includes current auth token if session is running.",
        result: {
          description: "Signed meter value",
          type: "string",
        },
      },
      pause_charging: {
        description: "Pauses charging",
        result: {
          description: "Returns true if successfully paused or was already in paused_by_evse mode",
          type: "boolean",
        },
      },
      reserve_now: {
        arguments: {
          auth_token: {
            description: "The authentication token that this evse is reserved for",
            type: "string",
          },
          timeout: {
            description: "timeout [s] until this reservation expires",
            type: "number",
          },
        },
        description: "Reserves this evse for a given auth token",
        result: {
          description: "Indicates if reservation was successful or not",
          type: "boolean",
        },
      },
      resume_charging: {
        description: "Resumes charging",
        result: {
          description: "Returns true if resume was successful, false otherwise (e.g. resuming a car pause won't work)",
          type: "boolean",
        },
      },
      set_local_max_current: {
        arguments: {
          max_current: {
            description: "maximum current",
            type: "number",
          },
        },
        description: "Sets the local maximum current limit for any phase.",
        result: {
          description: "Returns success or error code",
          enum: ["Success", "Error_OutOfRange", "Error_Hardware"],
          type: "string",
        },
      },
      switch_three_phases_while_charging: {
        arguments: {
          three_phases: {
            description: "True if switching three phases whilst charging, false if not",
            type: "boolean",
          },
        },
        description: "Switch three phases while charging",
        result: {
          description: "Returns success or error code",
          enum: ["Success", "Error_NotSupported", "Error_NotCharging", "Error_Hardware"],
          type: "string",
        },
      },
    },
    description: "This interface defines the main evse manager",
    vars: {
      limits: {
        additionalProperties: false,
        description: "Limits of this evse, published on change",
        properties: {
          max_current: {
            description: "Instantaneous maximum current available to car",
            type: "number",
          },
          nr_of_phases_available: {
            description: "Instantaneous phase count available to car",
            maximum: 3,
            minimum: 1,
            type: "integer",
          },
        },
        required: ["max_current", "nr_of_phases_available"],
        type: "object",
      },
      powermeter: {
        description: "FIXME: use powermeter type here",
        type: "object",
      },
      reservation: {
        additionalProperties: false,
        description: "Current reservation status, published on change",
        properties: {
          auth_token: {
            description: "token for which evse is reserved for",
            maxLength: 20,
            minLength: 1,
            type: "string",
          },
          reserved: {
            description: "true if currently reserved",
            type: "boolean",
          },
          valid_until: {
            description: "timestamp (abs time) when reservation expires",
            type: "number",
          },
        },
        required: ["reserved", "auth_token", "valid_until"],
        type: "object",
      },
      session_events: {
        additionalProperties: false,
        description: "Emits all events related to sessions",
        properties: {
          error: {
            description: "Details on error type",
            enum: ["Car", "CarDiodeFault", "Relais", "RCD", "VentilationNotAvailable", "OverCurrent"],
            type: "string",
          },
          event: {
            description: "Event enum. For some events an additional object is set, see below.",
            enum: [
              "Enabled",
              "Disabled",
              "SessionStarted",
              "AuthRequired",
              "ChargingStarted",
              "ChargingPausedEV",
              "ChargingPausedEVSE",
              "ChargingResumed",
              "SessionFinished",
              "Error",
              "PermanentFault",
            ],
            type: "string",
          },
          session_finished: {
            additionalProperties: false,
            description: "data for SessionFinished event",
            properties: {
              energy_Wh_export: {
                description: "Session end Wh",
                type: "number",
              },
              energy_Wh_import: {
                description: "Session end Wh",
                type: "number",
              },
              signed_meter_value: {
                description: "Signed meter value",
                type: "string",
              },
              timestamp: {
                description: "Session end timestamp",
                type: "number",
              },
            },
            required: ["timestamp", "energy_Wh_import"],
            type: "object",
          },
          session_started: {
            additionalProperties: false,
            description: "data for SessionStarted event",
            properties: {
              energy_Wh_export: {
                description: "Session start Wh",
                type: "number",
              },
              energy_Wh_import: {
                description: "Session start Wh",
                type: "number",
              },
              signed_meter_value: {
                description: "Signed meter value",
                type: "string",
              },
              timestamp: {
                description: "Session start timestamp",
                type: "number",
              },
            },
            required: ["timestamp", "energy_Wh_import"],
            type: "object",
          },
          uuid: {
            description: "An EVSE generated UUID for this session, can be used e.g. for database storage.",
            type: "string",
          },
        },
        required: ["uuid", "event"],
        type: "object",
      },
      telemetry: {
        additionalProperties: false,
        description: "Other telemetry",
        properties: {
          fan_rpm: {
            description: "RPM of the fan. 0 if off or no fan available.",
            type: "number",
          },
          rcd_current: {
            description: "Residual current in mA",
            type: "number",
          },
          relais_on: {
            description: "true if power to the car is currently on, false if off",
            type: "boolean",
          },
          supply_voltage_12V: {
            description: "Internal 12V supply voltage",
            type: "number",
          },
          supply_voltage_minus_12V: {
            description: "Internal -12V supply voltage",
            type: "number",
          },
          temperature: {
            description: "Current temperature of the EVSE in degree celsius",
            type: "number",
          },
        },
        type: "object",
      },
    },
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
  example_child: {
    description:
      "This interface defines an inherited example interface that uses multiple framework features (all inherited from base interface)",
    parent: "example",
  },
  example_user: {
    description: "This interface defines an example_user interface that uses the example interface",
  },
  iso15118_evcc_emu: {
    cmds: {
      start: {
        arguments: {
          arg1: {
            additionalProperties: false,
            description: "Arg1 desc",
            properties: {
              bar: {
                type: "number",
              },
              foo: {
                type: "string",
              },
            },
            required: ["foo", "bar"],
            type: "object",
          },
        },
        description: "Start a charging session",
      },
      stop: {
        description: "Stop current charging session",
      },
    },
    description: "This unit type should emulate an ISO15118 EVCC",
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
  ocpp_1_6_charge_point: {
    description: "This interface defines a OCPP 1.6 charge point",
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
  power_in: {
    description: "This interface defines the interface of a physical power supply",
    parent: "power",
    vars: {
      phase_count: {
        description: "This is the phase count of the physical power supply",
        maximum: 3,
        minimum: 1,
        type: "integer",
      },
    },
  },
  power_result: {
    description:
      "This interface defines the interface of an augmented power supply (currently solely conforming to the power_in interface)",
    parent: "power_in",
  },
  powermeter: {
    cmds: {
      get_signed_meter_value: {
        arguments: {
          auth_token: {
            description: "Auth token",
            maxLength: 20,
            minLength: 1,
            type: "string",
          },
        },
        description: "Returns a signed meter value with the given auth token",
        result: {
          description: "Signed meter value",
          type: "string",
        },
      },
    },
    description: "This interface defines a generic powermeter for 5 wire TN networks.",
    vars: {
      powermeter: {
        additionalProperties: false,
        description: "Measured dataset",
        properties: {
          current_A: {
            additionalProperties: false,
            description: "Current in ampere",
            properties: {
              L1: {
                description: "L1 value only",
                type: "number",
              },
              L2: {
                description: "L2 value only",
                type: "number",
              },
              L3: {
                description: "L3 value only",
                type: "number",
              },
              N: {
                description: "Neutral value only",
                type: "number",
              },
            },
            required: ["L1"],
            type: "object",
          },
          energy_Wh_export: {
            additionalProperties: false,
            description: "Exported energy in Wh (to grid)",
            properties: {
              L1: {
                description: "L1 value only",
                type: "number",
              },
              L2: {
                description: "L2 value only",
                type: "number",
              },
              L3: {
                description: "L3 value only",
                type: "number",
              },
              total: {
                description: "Sum value (which is relevant for billing)",
                type: "number",
              },
            },
            required: ["total"],
            type: "object",
          },
          energy_Wh_import: {
            additionalProperties: false,
            description: "Imported energy in Wh (from grid)",
            properties: {
              L1: {
                description: "L1 value only",
                type: "number",
              },
              L2: {
                description: "L2 value only",
                type: "number",
              },
              L3: {
                description: "L3 value only",
                type: "number",
              },
              total: {
                description: "Sum value (which is relevant for billing)",
                type: "number",
              },
            },
            required: ["total"],
            type: "object",
          },
          frequency_Hz: {
            additionalProperties: false,
            description: "Grid frequency in Hertz",
            properties: {
              L1: {
                description: "L1 value",
                type: "number",
              },
              L2: {
                description: "L2 value",
                type: "number",
              },
              L3: {
                description: "L3 value",
                type: "number",
              },
            },
            required: ["L1"],
            type: "object",
          },
          meter_id: {
            description: "A (user defined) meter if (e.g. id printed on the case)",
            type: "string",
          },
          phase_seq_error: {
            description: "true for 3 phase rotation error (ccw)",
            type: "boolean",
          },
          power_W: {
            additionalProperties: false,
            description: "Instantaneous power in Watt. Negative values are exported, positive values imported Energy.",
            properties: {
              L1: {
                description: "L1 value only",
                type: "number",
              },
              L2: {
                description: "L2 value only",
                type: "number",
              },
              L3: {
                description: "L3 value only",
                type: "number",
              },
              total: {
                description: "Sum value",
                type: "number",
              },
            },
            required: ["total"],
            type: "object",
          },
          timestamp: {
            description: "Timestamp of measurement",
            type: "number",
          },
          voltage_V: {
            additionalProperties: false,
            description: "Voltage in Volts",
            properties: {
              L1: {
                description: "L1 value only",
                type: "number",
              },
              L2: {
                description: "L2 value only",
                type: "number",
              },
              L3: {
                description: "L3 value only",
                type: "number",
              },
            },
            required: ["L1"],
            type: "object",
          },
        },
        required: ["timestamp"],
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
          description: "True on success.",
          type: "boolean",
        },
      },
      error_sequence_reset: {
        arguments: {
          successful: {
            description: "Whether the error sequence could be done and was successful",
            type: "boolean",
          },
        },
        description: "Signal that the error sequence has finished.",
        result: {
          description: "True on success.",
          type: "boolean",
        },
      },
      leave_bcd: {
        description: "Signal pilot state change to A/E/F from B/C/D.",
        result: {
          description: "True on success.",
          type: "boolean",
        },
      },
      reset: {
        description: "Reset SLAC. Not implemented yet.",
      },
    },
    description: "ISO15118-3 SLAC interface",
    vars: {
      dlink_ready: {
        description:
          "Inform higher layers about a change in data link status. Emits true if link was set up and false when the link is shut down.",
        type: "boolean",
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
  solar: {
    description: "This interface defines the interface of a solar module",
    parent: "power",
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
  tibber_price_forecast: {
    description: "This interface defines the interface for an energy price forecast",
    vars: {
      forecast: {
        description: "Forecast JSON Object containing a timestamp and the price forecast",
        type: "object",
      },
    },
  },
  yeti_extras: {
    cmds: {
      firmware_update: {
        arguments: {
          firmware_binary: {
            description: "Path to firmware binary file that should be sent to Yeti Controller",
            type: "string",
          },
        },
        description: "This command reboots Yeti in firmware upgrade mode",
      },
    },
    description: "This interface defines Yeti extra funtionality not found in the generic interfaces",
    vars: {
      hw_revision: {
        description: "Provides the hw_revision",
        type: "integer",
      },
      hw_type: {
        description: "Provides the hw_type",
        type: "integer",
      },
      protocol_version_major: {
        description: "Provides the protocol_version_major",
        type: "integer",
      },
      protocol_version_minor: {
        description: "Provides the protocol_version_minor",
        type: "integer",
      },
      sw_version_string: {
        description: "Provides the sw_version_string",
        type: "string",
      },
      time_stamp: {
        description: "Provides the current time stamp",
        type: "integer",
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
            additionalProperties: false,
            description: "simulation data",
            minProperties: 8,
            properties: {
              cp_voltage: {
                description: "CP Voltage level [V]",
                type: "number",
              },
              currents: {
                additionalProperties: false,
                description: "Currents in Ampere",
                minProperties: 4,
                properties: {
                  L1: {
                    type: "number",
                  },
                  L2: {
                    type: "number",
                  },
                  L3: {
                    type: "number",
                  },
                  N: {
                    type: "number",
                  },
                },
                type: "object",
              },
              diode_fail: {
                description: "Set to true to simulate a diode failure",
                type: "boolean",
              },
              error_e: {
                description: "Set to true to simulate Error E (CP-PE short)",
                type: "boolean",
              },
              frequencies: {
                additionalProperties: false,
                description: "Frequencies in Hertz",
                minProperties: 3,
                properties: {
                  L1: {
                    type: "number",
                  },
                  L2: {
                    type: "number",
                  },
                  L3: {
                    type: "number",
                  },
                },
                type: "object",
              },
              pp_resistor: {
                description: "PP resistor value [Ohm]",
                type: "number",
              },
              rcd_current: {
                description: "RCD current in mA",
                type: "number",
              },
              voltages: {
                additionalProperties: false,
                description: "Voltages in Volt",
                minProperties: 3,
                properties: {
                  L1: {
                    type: "number",
                  },
                  L2: {
                    type: "number",
                  },
                  L3: {
                    type: "number",
                  },
                },
                type: "object",
              },
            },
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
