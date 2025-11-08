// SPDX-License-Identifier: Apache-2.0
// Copyright 2020 - 2025 Pionix GmbH and Contributors to EVerest

/* eslint-disable prettier/prettier */
export default {
  ISO15118_charger: {
    cmds: {
      ac_contactor_closed: {
        arguments: {
          status: {
            description: '接触器闭合时设为 true，接触器打开时设为 false'
          }
        },
        description: '此消息是之前发布的 ac_close_contactor 或 ac_open_contactor 的异步响应。'
      },
      authorization_response: {
        arguments: {
          authorization_status: { description: 'ID Token 的授权状态' },
          certificate_status: { description: '证书状态信息' }
        },
        description: '此消息是之前发布的 require_auth_eim 或 require_auth_pnc 的异步响应。SECC 告知 EVCC 授权是否被接受。'
      },
      cable_check_finished: {
        arguments: {
          status: { description: '当电缆检查正常时设为 true' }
        },
        description: '电缆检查已完成，电压低于 20V 且电缆上的绝缘电阻正常'
      },
      dlink_ready: {
        arguments: {
          value: {
            description: '当链接变为就绪时设为 true，当链接终止时设为 false'
          }
        },
        description: '根据 ISO15118-3 从 SLAC 层发出的 dlink_ready 信号'
      },
      pause_charging: {
        arguments: {
          pause: {
            description: '设为 true 时暂停，设为 false 时继续'
          }
        },
        description: '暂停充电过程（仅在 ISO15118-20 中）'
      },
      receipt_is_required: {
        arguments: {
          receipt_required: {
            description: '当需要收据时设为 true，当不需要时设为 false'
          }
        },
        description: '此元素由 SECC 使用，以指示 EVCC 必须发送 MeteringReceiptReq 消息，用于签署计量信息记录。'
      },
      reset_error: { description: '重置所有错误' },
      send_error: {
        arguments: { error: { description: 'EVSE 错误枚举' } },
        description: '发生错误。发送此错误以通知 EV。'
      },
      session_setup: {
        arguments: {
          central_contract_validation_allowed: {
            description: '指示车辆合同是否可以在本地验证不成功时转发并由 CSMS 验证'
          },
          payment_options: {
            description: '向 EVCC 提供支付选项列表',
            items: {
              description: '这些是 SECC 提供给 EVCC 的支付选项'
            }
          },
          supported_certificate_service: {
            description: '充电器支持证书安装/更新服务，并且与 SA 有连接'
          }
        },
        description: '每次会话开始时应向模块发送此信息。'
      },
      set_charging_parameters: {
        arguments: {
          physical_values: {
            description: '设置 AC 或 DC 充电会话的初始物理值'
          }
        },
        description: '启动时至少设置一次充电参数。稍后可以更新。如果当前正在进行充电会话，则某些更新的值可能仅在下次充电会话中使用。'
      },
      setup: {
        arguments: {
          debug_mode: { description: '启用/禁用调试模式' },
          evse_id: {
            description: '设置一个唯一标识 EVSE 和车辆连接的电源插座的 ID '
          },
          sae_j2847_mode: {
            description: '充电器支持 SAE J2847 V2G/V2H 版本'
          },
          supported_energy_transfer_modes: {
            description: 'EVSE 支持的可用能量传输模式',
            items: {
              description: 'SECC 支持的不同能量模式'
            }
          }
        },
        description: '启动时应将所有必要信息一次性发送给模块。'
      },
      stop_charging: {
        arguments: {
          stop: {
            description: '设为 true 时停止，设为 false 时继续'
          }
        },
        description: '停止充电过程'
      },
      update_ac_max_current: {
        arguments: { max_current: { description: '最大电流（单位：安培）' } },
        description: '更新每相允许的最大线路电流限制。启动时至少调用一次。'
      },
      update_dc_maximum_limits: {
        arguments: {
          maximum_limits: {
            description: 'EVSE 可提供的最大值（电流、功率和电压）'
          }
        },
        description: '更新最大限制。启动时至少调用一次。'
      },
      update_dc_minimum_limits: {
        arguments: {
          minimum_limits: {
            description: 'EVSE 可提供的最小值（电流和电压）'
          }
        },
        description: '更新最小限制。启动时至少调用一次。'
      },
      update_dc_present_values: {
        arguments: {
          present_voltage_current: { description: '当前电压和电流' }
        },
        description: '更新 DC 电源的当前值'
      },
      update_isolation_status: {
        arguments: {
          isolation_status: { description: '绝缘监测的结果' }
        },
        description: '更新绝缘条件'
      },
      update_meter_info: {
        arguments: {
          powermeter: {
            description: '包括包含最新计量读数和其他计量相关数据的 meterInfo 记录'
          }
        },
        description: '更新计量信息'
      }
    },
    description: '此接口定义了 ISO15118 充电器。',
    vars: {
      ac_close_contactor: { description: '应闭合接触器' },
      ac_eamount: {
        description: "[Wh] EV 估计需要多少能量来完成用户配置的充电目标，反映当前充电会话的能量需求"
      },
      ac_ev_max_current: {
        description: '[A] EV 每相支持的最大电流'
      },
      ac_ev_max_voltage: {
        description: '[V] 车辆可接受的最大额定电压，测量为一相与中性线之间的 RMS'
      },
      ac_ev_min_current: {
        description: '[A] EVMinCurrent 用于向 SECC 指示低于此最小值的充电在能量/成本上不高效'
      },
      ac_open_contactor: { description: '应打开接触器' },
      current_demand_finished: { description: '充电过程已完成' },
      current_demand_started: {
        description: '充电过程已开始，EV 希望被充电'
      },
      d20_dc_dynamic_charge_mode: {
        description: 'EVCC 提供并设置的动态控制模式参数'
      },
      dc_bulk_charging_complete: {
        description: '可选：如果设为 TRUE，EV 表示批量充电（约 80% SOC）已完成'
      },
      dc_bulk_soc: {
        description: '可选：[%] EV 认为快速充电过程结束时的 SOC'
      },
      dc_charging_complete: {
        description: '可选：如果设为 TRUE，EV 表示充满电（100% SOC）已完成'
      },
      dc_ev_energy_capacity: { description: '可选：[Wh] EV 的能量容量' },
      dc_ev_energy_request: {
        description: '可选：[Wh] EV 向 EVSE 请求的能量量'
      },
      dc_ev_maximum_limits: {
        description: 'EV 支持并允许的最大值（电流、功率和电压）'
      },
      dc_ev_present_voltage: { description: '从 EV 测量的当前电压' },
      dc_ev_remaining_time: {
        description: '批量和充满电完成的估计或计算时间'
      },
      dc_ev_status: { description: 'EV 的当前状态' },
      dc_ev_target_voltage_current: { description: 'EV 请求的目标电压和电流' },
      dc_full_soc: {
        description: '可选：[%] EV 认为电池充满电时的 SOC'
      },
      dc_open_contactor: { description: '应打开接触器' },
      departure_time: {
        description: '可选：[RFC3339 UTC] 此元素用于指示车辆打算完成充电过程的时间'
      },
      display_parameters: {
        description: '可在 EVSE 上显示的参数（SOC、电池容量）'
      },
      dlink_error: {
        description: '终止数据链路并重新启动匹配过程。'
      },
      dlink_pause: {
        description: '请求节能模式，同时保持 MATCHED 状态。'
      },
      dlink_terminate: { description: '终止数据链路并变为 UNMATCHED 状态。' },
      ev_app_protocol: {
        description: 'Debug_Lite - 此请求消息提供 EVCC 支持的充电协议列表'
      },
      evcc_id: {
        description: '以可读格式指定 EV 的标识。包含 EVCC 的 MAC 地址（大写）'
      },
      meter_info_requested: { description: 'EV 从 EVSE 请求计量信息' },
      requested_energy_transfer_mode: {
        description: 'EVCC 请求的充电能量传输模式。'
      },
      require_auth_eim: { description: '需要 EIM 授权' },
      require_auth_pnc: {
        description: 'EVCC 通过发送签名证书链和 eMAID 提供支付详情以进行 PnC 授权。'
      },
      sae_bidi_mode_active: { description: 'SAE J2847 双向模式处于活动状态' },
      selected_payment_option: {
        description: '此元素用于指示支付类型'
      },
      selected_protocol: { description: '调试 - 包含所选协议' },
      start_cable_check: { description: '充电器现在应开始电缆检查' },
      start_pre_charge: {
        description: '充电器现在应开始预充电阶段'
      },
      v2g_messages: {
        description: '调试 - 此元素包含所有 V2G 元素，仅用于调试目的'
      },
      v2g_setup_finished: {
        description: '来自 ISO15118-3 的 v2g_setup_finished。当 EV 发送一个 PowerDeliveryReq 消息且 ChargeProgess 等于 Start 或 Stop 时触发'
      }
    }
  },
  ISO15118_ev: {
    cmds: {
      enable_sae_j2847_v2g_v2h: { description: '启用 SAE J2847 2 V2H V2G' },
      pause_charging: { description: '暂停 EV 充电通信过程' },
      set_bpt_dc_params: {
        arguments: {
          EvBPTParameters: { description: 'DC 充电的 BPT 参数' }
        },
        description: '设置 DC 充电的 BPT 参数'
      },
      set_dc_params: {
        arguments: {
          EvParameters: { description: 'DC 充电的目标参数' }
        },
        description: '设置 DC 充电过程的目标参数'
      },
      set_fault: {
        description: 'TODO_SL: 设置不同的 EV 故障以将这些错误传达给充电站'
      },
      start_charging: {
        arguments: {
          DepartureTime: {
            description: 'EVCC 希望离开充电站的时间（以秒为单位）'
          },
          EAmount: {
            description: 'EVCC 希望充电的能量量（以 kWh 为单位）'
          },
          EnergyTransferMode: {
            description: 'EVCC 请求的充电能量传输模式'
          }
        },
        description: '启动 EV 充电过程',
        result: { description: '如果 EVCC 模拟启动则返回 true' }
      },
      stop_charging: { description: '停止 EV 充电通信过程' }
    },
    description: '此接口定义了一个简单的 ISO15118 EV。',
    vars: {
      AC_EVPowerReady: { description: '车辆已准备好供电（HLC）' },
      AC_EVSEMaxCurrent: { description: 'EVSE 每相最大电流' },
      AC_StopFromCharger: { description: '充电器希望停止充电过程' },
      DC_PowerOn: { description: 'EV 希望闭合 DC 接触器' },
      V2G_Session_Finished: {
        description: '充电器和车辆之间的 V2G 会话已完成'
      },
      pause_from_charger: {
        description: '充电器希望暂停会话（仅限 d20）'
      }
    }
  },
  ISO15118_vas: {
    cmds: {
      get_service_parameters: {
        arguments: { service_id: { description: '服务 ID' } },
        description: '此命令动态返回单个服务的参数集。在收到 ServiceDetailReq 后调用，并返回 ServiceDetailRes 的有效载荷。',
        result: { description: '此 VAS 的参数集' }
      },
      selected_services: {
        arguments: {
          selected_services: {
            description: '所选服务及其参数集 ID 列表'
          }
        },
        description: '回调通知 VAS 提供者 EV 选择的服务和参数集。在收到 ServiceSelectionReq 后调用，每个请求仅调用一次。'
      }
    },
    description: 'ISO 15118 的自定义 VAS 提供者',
    vars: { offered_vas: { description: '提供的 VAS 服务 ID 列表' } }
  },
  ac_rcd: {
    cmds: {
      reset: {
        description: '在触发后重置 RCD。实际硬件可能不支持。',
        result: {
          description: 'True: 重置成功，False: 重置失败。'
        }
      },
      self_test: {
        description: '执行 RCD 自检。如果失败，应引发 Selftest 类型的错误。'
      }
    },
    description: '此接口提供交流剩余电流监测器（RCD）。实际紧急断电在硬件中直接完成，但此接口允许一些控制和遥测。',
    vars: {
      rcd_current_mA: {
        description: '剩余电流（单位：毫安）。注意这不会触发任何操作，仅为报告用途。'
      }
    }
  },
  auth: {
    cmds: {
      set_connection_timeout: {
        arguments: {
          connection_timeout: { description: '连接超时时间（单位：秒）' }
        },
        description: '设置连接超时时间'
      },
      set_master_pass_group_id: {
        arguments: {
          master_pass_group_id: { description: '主通行组 ID' }
        },
        description: '设置主通行组 ID。具有此 ID 作为 parent_id_token 的 IdTokens 属于主通行组。这意味着它们可以停止任何正在进行的交易，但不能开始交易。例如，执法部门人员可以使用此功能在 EV 被拖走时停止任何正在进行的交易。如果 master_pass_group_id 是空字符串，则不使用。'
      },
      withdraw_authorization: {
        arguments: { request: { description: '请求' } },
        description: '撤销已授予的授权。如果仅给出 evse_id，则撤销该 EVSE 的已授予授权。如果仅给出 id_token，则撤销每个放置此 id_token 的 EVSE 的已授予授权\n' +
          '如果同时给出两个参数，则撤销给定 EVSE 的已授予授权，如果放置的\n' +
          ' id_token 与给定的 id_token 匹配\n' +
          '如果没有给出参数，则撤销所有 EVSE 的所有已授予授权',
        result: {
          description: '如果请求的授权被移除则返回 Accepted，如果未找到匹配请求则返回 AuthorizationNotFound，如果模块无法处理请求则返回 Rejected'
        }
      }
    },
    description: '认证框架接口',
    vars: {
      token_validation_status: {
        description: '发出与当前令牌验证相关的所有事件'
      }
    }
  },
  auth_token_provider: {
    description: '提供令牌的接口',
    vars: { provided_token: { description: '提供的令牌' } }
  },
  auth_token_validator: {
    cmds: {
      validate_token: {
        arguments: {
          provided_token: {
            description: '包含授权请求信息'
          }
        },
        description: '验证授权令牌并返回结果（可选原因字符串）',
        result: { description: '包含验证结果的结果对象' }
      }
    },
    description: '检查提供的令牌是否有效',
    vars: {
      validate_result_update: {
        description: '由于某些更改而更新的给定令牌的验证结果。这些可以由 TransactionEvent 消息或 StartTransaction 触发。'
      }
    }
  },
  bank_session_token_provider: {
    cmds: {
      get_bank_session_token: {
        description: '返回令牌。',
        result: { description: '令牌' }
      }
    },
    description: '提供可用于在银行对账单中唯一标识会话的令牌。'
  },
  car_simulator: {
    cmds: {
      enable: {
        arguments: { value: { description: '启用/禁用模拟模式' } },
        description: '启用或禁用模拟。'
      },
      execute_charging_session: {
        arguments: { value: { description: '充电模拟字符串' } },
        description: '执行充电模拟字符串'
      }
    },
    description: '此定义了一个汽车模拟器，可以执行从插拔到拔出的完整充电会话。它使用来自 Yeti HIL 模拟器等的 HIL 或 SIL 模拟控制器。',
    vars: {
      enabled: {
        description: '指示当前是否启用模拟'
      }
    }
  },
  connector_lock: {
    cmds: {
      lock: { description: '锁定连接器锁' },
      unlock: {
        description: '解锁连接器锁（例如正常解锁或由 OCPP 强制解锁）'
      }
    },
    description: '此接口定义了一个连接器锁定电机（例如用于没有固定连接电缆的 AC 插座）'
  },
  debug_json: {
    description: '此接口定义了一个通用 JSON 对象调试变量发布器，可在任何模块中使用。可用于在 Web 界面中显示调试变量。',
    vars: {
      debug_json: { description: '以 JSON 对象形式提供调试对象' },
      title: { description: '调试对象的标题' }
    }
  },
  display_message: {
    cmds: {
      clear_display_message: {
        arguments: { request: { description: '清除消息的请求' } },
        description: '命令以移除显示消息',
        result: { description: '清除消息请求的响应' }
      },
      get_display_messages: {
        arguments: {
          request: { description: '显示消息的请求' }
        },
        description: '命令以获取一个或多个显示消息。',
        result: {
          description: '显示消息或如果不存在则返回空数组'
        }
      },
      set_display_message: {
        arguments: {
          request: {
            description: '设置显示消息的请求',
            items: { description: '要设置的显示消息' }
          }
        },
        description: '命令以设置或替换显示消息。',
        result: { description: '设置显示消息请求的响应。' }
      }
    },
    description: '实现此接口的模块应能够：- 存储（添加、删除、更改）和检索预定义消息 - 在显示上显示消息\n' +
      '当显示消息包含会话 ID 时，会话结束后必须移除显示消息。'
  },
  empty: {
    description: '此接口为空，可用于仅配置（主）实现'
  },
  energy: {
    cmds: {
      enforce_limits: {
        arguments: {
          value: {
            description: '将通过树路由的限制对象。'
          }
        },
        description: '能源管理器使用此命令强制执行限制。'
      }
    },
    description: '此接口是节点之间的内部能源管理接口。',
    vars: {
      energy_flow_request: {
        description: '请求能源流动以供应/限制能源输入（从电网到汽车）和/或消耗/限制能源输出（从汽车到电网）。'
      }
    }
  },
  energy_manager: { description: '此接口定义了全局能源管理器' },
  energy_price_information: {
    description: '此接口定义了能源价格预测接口',
    vars: {
      energy_pricing: {
        description: '包含时间戳和输入和输出价格预测的预测 JSON 对象。'
      }
    }
  },
  error_history: {
    cmds: {
      get_errors: {
        arguments: {
          filters: { description: '应用于错误列表的过滤器' }
        },
        description: '获取过滤器列表并返回错误列表',
        result: { description: '过滤后的错误列表' }
      }
    },
    description: '此接口提供 EVerest 框架的错误历史记录访问'
  },
  ev_board_support: {
    cmds: {
      allow_power_on: {
        arguments: {
          value: {
            description: 'True: 允许供电，false: 不允许供电。'
          }
        },
        description: '设置 allow_power_on 标志。如果为 false，则接触器不得被打开。'
      },
      diode_fail: {
        arguments: { value: { description: 'True: 二极管故障' } },
        description: '设置二极管故障'
      },
      enable: {
        arguments: { value: { description: 'true 为启用，false 为禁用' } },
        description: '启用/禁用模拟'
      },
      set_ac_max_current: {
        arguments: {
          current: { description: '从 EV 请求的最大电流' }
        },
        description: '设置从 EV 请求的最大电流'
      },
      set_cp_state: {
        arguments: { cp_state: { description: 'CP 状态' } },
        description: '设置 EV 板支持驱动程序应设置的 CP 状态（由 S2 控制）'
      },
      set_rcd_error: {
        arguments: { rcd_current_mA: { description: 'RCD 电流（单位：毫安）' } },
        description: '设置 RCD 错误。仅用于模拟目的。'
      },
      set_three_phases: {
        arguments: {
          three_phases: {
            description: 'True: 三相支持，False: 一相支持'
          }
        },
        description: '设置三相或一相支持'
      }
    },
    description: '此定义了 EV 侧的板支持包',
    vars: {
      bsp_event: { description: 'CP/继电器的事件' },
      bsp_measurement: { description: 'BSP 测量值' },
      ev_info: { description: '如果可用，关于 EV 的更多详细信息' }
    }
  },
  ev_manager: {
    description: '此接口定义了 EV 管理器。EV 管理器代表 EV 侧的充电逻辑',
    vars: {
      bsp_event: { description: 'CP/继电器的事件' },
      ev_info: { description: '如果可用，关于 EV 的更多详细信息' }
    }
  },
  ev_slac: {
    cmds: {
      reset: { description: '重置 SLAC' },
      trigger_matching: {
        description: '触发匹配过程的开始',
        result: {
          description: '成功时返回 True，如果转换意外且无法被 SLAC 状态机处理则返回 False。'
        }
      }
    },
    description: 'EV 侧的 ISO15118-3 SLAC 接口',
    vars: {
      dlink_ready: {
        description: '通知上层关于数据链路状态的变化。链路建立时发出 true，链路关闭时发出 false。'
      },
      ev_mac_address: {
        description: '通知上层关于充电连接器的 MAC 地址'
      },
      state: { description: '提供状态枚举。' }
    }
  },
  evse_board_support: {
    cmds: {
      ac_read_pp_ampacity: {
        description: '读取连接电缆在 AC 充电时的电流承载能力（单位：安培）用于插座。此函数将由 EvseManager 在特定时间获取 PP 值。您还应在 PP 读数更改时发布 pp_ampacity 变量以指示更改，例如在充电期间。对于 DC 或固定连接电缆的 AC 充电没有意义，不需要实现，返回的值在此情况下不使用。',
        result: {
          description: '返回连接电缆的电流承载能力'
        }
      },
      ac_set_overcurrent_limit_A: {
        arguments: { value: { description: '安培电流限制值' } },
        description: '许多充电器在硬件中实现快速过流关闭，如果 EV 拉取的电流超过 PWM 允许的值则触发。如果硬件没有此功能，只需忽略此命令。不要用于设置 PWM 占空比。否则此命令报告应用于过流检测的值。需要添加余量以避免误触发。不要使用 PWM 占空比来推断 BSP 中的电流限制，因为这在 HLC 中不起作用。'
      },
      ac_switch_three_phases_while_charging: {
        arguments: {
          value: { description: 'True: 切换到 3 相，False: 切换到 1 相' }
        },
        description: '可选，如有疑问请勿实现。在硬件能力中报告是否支持此命令。此命令在活动充电会话期间在单相和三相操作之间切换。某些汽车可能因此被永久损坏，因此 BSP 需要实现特殊的切换序列。确切的序列可以由 BSP 定义，但一个示例是 C2->C1->B1->F->B1->B2->C2 或类似。谨慎使用。'
      },
      allow_power_on: {
        arguments: { value: { description: '标志和上下文' } },
        description: '设置 allow_power_on 标志。如果为 false，则继电器不得被打开。'
      },
      enable: {
        arguments: { value: { description: 'True: 启用，false: 禁用。' } },
        description: '启用或禁用充电端口。通常禁用会导致控制信号状态为 F。如果禁用，不得接受新充电会话。'
      },
      evse_replug: {
        arguments: {
          value: {
            description: '虚拟重新插拔序列的持续时间（单位：毫秒）'
          }
        },
        description: "可选，如有疑问请勿实现。特殊命令启动虚拟重新插拔序列而无需重启会话。如果支持并启动，将发出 EvseReplugStarted 事件。BSP 将负责在该期间不发出其他事件如 CarPluggedIn/Out。完成后将发出 EvseReplugFinished。这主要是为了测试目的，不要在生产中实现。"
      },
      pwm_F: {
        description: '关闭 PWM 并使用错误 F（恒定负电压）'
      },
      pwm_off: { description: '关闭 PWM（恒定高电压）' },
      pwm_on: {
        arguments: { value: { description: 'PWM 占空比（>0，<100）' } },
        description: '以占空比（百分比）打开 PWM'
      }
    },
    description: '此接口定义了 AC 或 DC 最小功率路径的板支持驱动程序：ControlPilot、输出接触器。功率路径的其他组件如 IMD(DC)/RCD(AC)/连接器锁等具有各自的接口。',
    vars: {
      ac_nr_of_phases_available: { description: '瞬时可用的相数' },
      ac_pp_ampacity: {
        description: '连接电缆在 AC 充电时的电流承载能力（单位：安培）用于插座。更改时发布。对于 DC 或固定连接电缆的 AC 充电没有意义，不需要实现，返回的值在此情况下不使用。'
      },
      capabilities: {
        description: '硬件能力/限制。BSP 必须至少在启动时发布此变量。对于 AC，能力是 AC 硬件功率路径的限制。对于 DC，这是 AC 输入到 AC/DC 转换器的限制。BSP 可以在运行时发布此变量以更新限制，例如如果最大电流因硬件过热而改变。'
      },
      event: { description: '来自 ControlPilot 信号/输出继电器的事件' },
      request_stop_transaction: {
        description: '发布以优雅地停止交易（例如用户按下停止按钮）'
      },
      telemetry: { description: '其他遥测数据' }
    }
  },
  evse_manager: {
    cmds: {
      authorize_response: {
        arguments: {
          provided_token: {
            description: '请求授权的令牌'
          },
          validation_result: { description: '验证结果' }
        },
        description: '向 EvseManager 报告授权请求的结果。包含请求授权的 provided_token 和 validation_result'
      },
      cancel_reservation: {
        description: '调用以信号 EVSE 不再被预订'
      },
      enable_disable: {
        arguments: {
          cmd_source: { description: '启用命令的来源' },
          connector_id: {
            description: '指定要启用的连接器 ID。如果为 0，则应启用整个 EVSE'
          }
        },
        description: '启用或禁用 EVSE。关闭 PWM 并使用错误 F。只有 EVSE 被启用时才能充电。',
        result: {
          description: '返回 EVSE 在命令后是否启用，如果禁用则返回 false。这可能与请求值不同，因为可能有来自其他来源的更高优先级请求实际决定是否启用或禁用。'
        }
      },
      external_ready_to_start_charging: {
        description: '在某些情况下，其他模块需要在 EVSE 管理器原则上准备开始充电后进行一些初始化。此命令可用于（最佳地与配置选项结合使用）延迟充电准备，直到外部模块完成其初始化',
        result: {
          description: '如果 EVSE 管理器实现使用了该信号则返回 true'
        }
      },
      force_unlock: {
        arguments: {
          connector_id: {
            description: '指定应解锁的连接器 ID'
          }
        },
        description: '强制连接器立即解锁。在正常操作期间，连接器将在正确序列中锁定/解锁。除非明确请求，否则不要使用此功能，例如来自管理云。',
        result: {
          description: '如果接受解锁命令则返回 true，否则返回 false。它不反映实际解锁的成功/失败。如果解锁失败，connector_lock 接口应异步引发错误。'
        }
      },
      get_evse: {
        description: '调用以获取有关 EVSE 的信息，包括其连接器',
        result: {
          description: '包含 EVSE 信息及其连接器的对象'
        }
      },
      pause_charging: {
        description: '调用以信号 EVSE 暂停充电',
        result: {
          description: '返回是否成功暂停或已在 paused_by_evse 模式中'
        }
      },
      reserve: {
        arguments: {
          reservation_id: {
            description: '预订 ID（应添加到 TransactionStarted 事件中）。如果此 EVSE 没有特定预订 ID 但仍应移动到 Reserved 状态，设置为负值。'
          }
        },
        description: '调用以信号 EVSE 被预订。这可用于例如更改 HMI LED 颜色以指示预订。',
        result: {
          description: '返回 EVSE 是否接受预订，否则返回 false。'
        }
      },
      resume_charging: {
        description: '调用以信号 EVSE 恢复充电',
        result: {
          description: "返回恢复是否成功，否则返回 false（例如恢复车辆暂停不起作用）"
        }
      },
      set_faulted: {
        description: '外部设置 EVSE 管理器为故障。它也可能在检测到内部错误时自行切换到故障状态。'
      },
      set_plug_and_charge_configuration: {
        arguments: {
          plug_and_charge_configuration: { description: 'ISO15118 处理合同授权所需的配置对象' }
        },
        description: '设置 ISO15118 处理合同授权所需的配置。'
      },
      stop_transaction: {
        arguments: {
          request: { description: '停止交易的请求。' }
        },
        description: '停止交易并取消充电，只能通过重新插拔汽车恢复充电。EVSE 也会在断开连接时自动停止交易，因此仅在交易应提前结束时才需要调用。',
        result: { description: '返回是否成功' }
      },
      withdraw_authorization: {
        description: '调用以信号 EVSE 不再被授权开始交易（例如在 connection_timeout 时）'
      }
    },
    description: '此接口定义了 EVSE 管理器。EVSE 管理器代表一个物理连接器的充电核心。',
    vars: {
      car_manufacturer: { description: '汽车制造商（如果已知）' },
      enforced_limits: {
        description: '此节点的强制限制（来自 EnergyManager）'
      },
      ev_info: { description: '如果可用，关于 EV 的更多详细信息' },
      evse_id: {
        description: '包括连接器编号的 EVSE ID，例如 DE*PNX*E123456*1'
      },
      hw_capabilities: { description: '硬件能力/限制' },
      limits: { description: '此 EVSE 的限制，在更改时发布' },
      powermeter: { description: '测量数据集' },
      powermeter_public_key_ocmf: { description: '功率计公钥' },
      ready: {
        description: '信号 EVSE 管理器准备开始充电'
      },
      selected_protocol: {
        description: '包含用于充电的选定协议，用于信息目的'
      },
      session_event: { description: '发出与会话相关的所有事件' },
      telemetry: { description: '其他遥测数据' },
      waiting_for_external_ready: {
        description: '信号 EVSE 管理器原则上准备开始充电，但延迟发送其准备信号，等待 external_ready_to_start_charging 命令。'
      }
    }
  },
  evse_security: {
    cmds: {
      delete_certificate: {
        arguments: {
          certificate_hash_data: {
            description: '指示应删除的证书'
          }
        },
        description: '删除证书的命令',
        result: {
          description: '尝试删除证书的结果'
        }
      },
      generate_certificate_signing_request: {
        arguments: {
          certificate_type: { description: '指定叶子证书类型' },
          common: {
            description: '指定证书的通用名称（CN）'
          },
          country: {
            description: '指定证书的国家名称（C）'
          },
          organization: {
            description: '指定证书的组织名称（O）'
          },
          use_tpm: {
            description: '指定 CSR 是否应将私钥存储在 TPM 上'
          }
        },
        description: '为给定用途生成证书签名请求的命令',
        result: {
          description: '以 PEM 格式返回的证书签名请求'
        }
      },
      get_all_valid_certificates_info: {
        arguments: {
          certificate_type: { description: '指定叶子证书类型' },
          encoding: { description: '指定密钥的编码' },
          include_ocsp: {
            description: '指定是否请求每证书 OCSP 数据'
          }
        },
        description: '查找每个根证书上存在的最新有效叶子证书，并返回针对不同根证书存在的所有最新有效叶子证书',
        result: { description: '请求命令的响应' }
      },
      get_installed_certificates: {
        arguments: {
          certificate_types: { description: '要检索的证书类型' }
        },
        description: '检索 EVSE 上安装的证书的命令',
        result: {
          description: '指示命令结果和可选的证书哈希数据'
        }
      },
      get_leaf_certificate_info: {
        arguments: {
          certificate_type: { description: '指定叶子证书类型' },
          encoding: { description: '指定密钥的编码' },
          include_ocsp: {
            description: '指定是否请求每证书 OCSP 数据'
          }
        },
        description: '获取证书路径和相应密钥的命令',
        result: { description: '请求命令的响应' }
      },
      get_leaf_expiry_days_count: {
        arguments: {
          certificate_type: { description: '指示证书类型' }
        },
        description: '获取给定叶子证书到期前的天数计数。如果没有安装叶子证书，此命令将返回 0',
        result: {
          description: '给定叶子证书到期前的天数'
        }
      },
      get_mo_ocsp_request_data: {
        arguments: {
          certificate_chain: {
            description: '获取 OCSP 数据的证书链'
          }
        },
        description: '检索给定 MO 证书链的 OCSP 请求数据。包含链中每个证书（不包括根证书）的 OCSP 数据',
        result: {
          description: '给定证书链的 OCSP 请求数据。包含给定链中每个证书的 OCSP 数据。 '
        }
      },
      get_v2g_ocsp_request_data: {
        description: '检索 V2G 证书的 OCSP 请求数据。包含链中每个证书（不包括根证书）的 OCSP 数据。 ',
        result: {
          description: '所有 V2G CA 证书包括子 CA（不包括根证书）的 OCSP 请求数据'
        }
      },
      get_verify_file: {
        arguments: {
          certificate_type: { description: '指定 CA 证书类型' }
        },
        description: '获取可用于验证的 CA 包文件路径的命令',
        result: { description: 'CA 包文件的路径' }
      },
      get_verify_location: {
        arguments: {
          certificate_type: { description: '指定 CA 证书类型' }
        },
        description: '获取可用于验证的 CA 根目录路径的命令。还将为该目录调用 c_rehash',
        result: { description: 'CA 证书目录的路径' }
      },
      install_ca_certificate: {
        arguments: {
          certificate: { description: 'PEM 编码的 X.509 证书。' },
          certificate_type: { description: '指示证书类型' }
        },
        description: '安装新 CA 证书的命令',
        result: {
          description: '尝试安装 CA 证书的结果'
        }
      },
      is_ca_certificate_installed: {
        arguments: {
          certificate_type: { description: '指定 CA 证书类型' }
        },
        description: '指示给定 CA 证书类型是否已安装的命令',
        result: {
          description: '如果 CA 证书已安装则返回 true，否则返回 false'
        }
      },
      update_leaf_certificate: {
        arguments: {
          certificate_chain: {
            description: '应安装的叶子证书或证书链'
          },
          certificate_type: { description: '指示证书类型' }
        },
        description: '安装或更新 SECC 或 CSMS 叶子证书的命令',
        result: {
          description: '尝试安装或更新叶子证书的结果'
        }
      },
      update_ocsp_cache: {
        arguments: {
          certificate_hash_data: {
            description: '标识应更新缓存的证书的证书哈希数据'
          },
          ocsp_response: {
            description: 'IETF RFC 6960 中定义的 OCSPResponse 类。DER 编码后进行 base64 编码'
          }
        },
        description: '使用给定数据更新 OCSP 缓存的命令'
      },
      verify_certificate: {
        arguments: {
          certificate_chain: {
            description: '要验证的叶子证书或证书链'
          },
          certificate_types: { description: '指示证书类型' }
        },
        description: '验证给定证书的命令',
        result: { description: '验证结果' }
      },
      verify_file_signature: {
        arguments: {
          file_path: { description: '应验证的文件路径' },
          signature: { description: '文件签名的 base64 编码' },
          signing_certificate: {
            description: '文件签名的证书。PEM 编码的 X.509 证书'
          }
        },
        description: '使用提供的证书和签名验证给定路径的文件',
        result: { description: '如果验证成功返回 true，否则返回 false' }
      }
    },
    description: '此接口提供安全相关功能和 EVSE 需要提供的安全存储访问。这包括 ISO15118 和 OCPP 中指定的所有安全相关功能。实现此接口的模块负责检查叶子证书的有效期并启动证书签名请求，如果叶子证书即将到期。',
    vars: {
      certificate_store_update: {
        description: '指示证书存储已更新的变量，即安装或删除了证书。用于通知其他模块证书存储已更改。'
      }
    }
  },
  example: {
    cmds: {
      uses_something: {
        arguments: { key: { description: '检查存在的键' } },
        description: '此命令检查在给定键下是否存储了某些内容',
        result: {
          description: "如果为此键存储了某些内容则返回 'True'"
        }
      }
    },
    description: '此接口定义了一个使用多个框架功能的示例接口',
    vars: {
      max_current: {
        description: '提供此供电的最大电流（单位：安培）'
      }
    }
  },
  example_error_framework: {
    description: '这是一个用于错误框架示例模块的示例接口。'
  },
  example_user: {
    description: '此接口定义了一个使用示例接口的示例用户接口'
  },
  external_energy_limits: {
    cmds: {
      set_external_limits: {
        arguments: { value: { description: '外部限制对象' } },
        description: '在此节点设置额外的外部能量流限制。'
      }
    },
    description: '此接口允许从外部（例如 ocpp）限制能量树中特定节点的能量流。',
    vars: {
      enforced_limits: {
        description: '此节点的强制限制（来自 EnergyManager）'
      }
    }
  },
  generic_array: {
    description: '此接口仅发布通用数据块。',
    vars: { vector_of_ints: { description: '数据块。' } }
  },
  generic_error: { description: '提供访问通用错误的接口' },
  iso15118_extensions: {
    cmds: {
      set_get_certificate_response: {
        arguments: {
          certificate_response: {
            description: '来自 CSMS 系统的响应原始 exi 流和状态'
          }
        },
        description: 'CertificateInstallationRes/CertificateUpdateRes - 设置新的/更新的合同证书（包括证书链）和相应的加密私钥。应转发给 EVCC。这是对之前发布的 iso15118_certificate_request 的异步响应'
      }
    },
    description: '此接口用于在 ISO15118 和 OCPP 模块之间共享数据，以支持 OCPP 协议的要求',
    vars: {
      charging_needs: {
        description: "ISO15118-20 双向充电需要在此消息中发送，用于 OCPP 2.1 的 'ScheduleExchangeReq' 状态机。对于 ISO15118-2 和 OCPP 2.1，此消息必须在 'ChargeParameterDiscoveryReq' 状态机期间发送"
      },
      iso15118_certificate_request: {
        description: '车辆请求 SECC 提供属于车辆当前有效合同的证书。响应将通过 set_get_certificate_response 异步报告'
      }
    }
  },
  isolation_monitor: {
    cmds: {
      start: {
        description: '启动重复的绝缘测量。设备应监控绝缘状态直到停止，并以定期间隔发布电阻数据。实际间隔取决于设备。'
      },
      start_self_test: {
        arguments: {
          test_voltage_V: {
            description: '指定测试电压 [V]，在自检期间施加在 DC 引脚上。可用于验证 IMD 的内部电压测量。'
          }
        },
        description: '启动自检。这将在电缆检查阶段进行，因此根据 IEC 61851-23 (2023) 将存在 DC 电压。该命令应立即返回。自检完成后必须发布 "self_test_result" 变量。请注意，许多硬件设备上这可能需要很长时间（例如 20 秒）。'
      },
      stop: {
        description: '停止重复测量。设备应停止监控绝缘电阻并停止发布数据。'
      }
    },
    description: '此接口根据 IEC 61557-8 定义了用于直流充电的绝缘监控设备 (IMD)。用于在开始高压充电之前和充电期间验证直流线路的绝缘。',
    vars: {
      isolation_measurement: { description: '绝缘监控测量结果' },
      self_test_result: {
        description: '表示自检完成并发布结果。成功时设为 "true"，失败时设为 "false"。'
      }
    }
  },
  kvs: {
    cmds: {
      delete: {
        arguments: { key: { description: '要删除值的键' } },
        description: '此命令删除存储在给定键下的值'
      },
      exists: {
        arguments: { key: { description: '要检查存在的键' } },
        description: '此命令检查在给定键下是否存储了内容',
        result: {
          description: "如果为此键存储了内容则返回 'True'"
        }
      },
      load: {
        arguments: { key: { description: '要加载值的键' } },
        description: '此命令加载给定键下先前存储的值（如果键不存在则返回 null）',
        result: { description: '先前存储的值' }
      },
      store: {
        arguments: {
          key: { description: '要存储值的键' },
          value: { description: '要存储的值' }
        },
        description: '此命令在给定键下存储值'
      }
    },
    description: '此接口定义了一个简单的键值存储接口'
  },
  ocpp: {
    cmds: {
      change_availability: {
        arguments: {
          request: {
            description: 'OCPP2.0.1 中指定的 ChangeAvailabilityRequest。对于 OCPP 1.6：'
          }
        },
        description: '允许内部发送 ChangeAvailabilityRequest（如 CSMS 所做）。',
        result: {
          description: 'OCPP 2.0.1 中指定的 ChangeAvailabilityRequest 响应'
        }
      },
      get_variables: {
        arguments: { requests: { description: 'GetVariableRequest 列表' } },
        description: '命令从 OCPP 获取变量。对于 OCPP1.6：检索配置键。对于 OCPP2.0.1：从设备模型存储中检索变量和值',
        result: {
          description: '包含每个请求值结果的 GetVariableResult 列表。保留输入请求的顺序。'
        }
      },
      monitor_variables: {
        arguments: {
          component_variables: { description: '要监控的 ComponentVariable 列表' }
        },
        description: '命令启动对给定 ComponentVariable 的监控。任何提供的配置键将在更改时由 CSMS 发布。连续调用此操作不会覆盖，而是扩展现有的监控。对于 OCPP1.6：此命令可用于监控配置键。对于 OCPP2.0.1：此命令可用于监控设备模型存储中的任何类型的变量'
      },
      restart: {
        description: '连接 websocket 并在之前的停止调用后启用 OCPP 通信。',
        result: {
          description: '如果服务能成功重启则返回 true，否则返回 false'
        }
      },
      security_event: {
        arguments: { event: { description: '安全事件' } },
        description: '如果该事件被认为关键，无论是通过在此事件中设置标志还是自动由 libocpp 判断，都会在 CSMS 触发 SecurityEventNotification.req'
      },
      set_variables: {
        arguments: {
          requests: { description: 'SetVariableRequests 列表' },
          source: { description: '变量值的来源' }
        },
        description: '命令在 OCPP 设置变量。对于 OCPP1.6：此命令可用于设置自定义配置键（其他将被拒绝）。对于 OCPP2.0.1：此命令可用于设置设备模型存储中的变量',
        result: {
          description: '包含每个请求设置操作结果的 SetVariableResult 列表'
        }
      },
      stop: {
        description: '断开 websocket 连接并停止 OCPP 通信。重启后不会存储和发送 OCPP 消息。',
        result: {
          description: '如果服务能成功停止则返回 true，否则返回 false'
        }
      }
    },
    description: '此接口允许控制 OCPP 服务并从 OCPP 服务中设置和获取数据。它设计用于 OCPP1.6 和 OCPP2.0.1 模块实现。因此，变量、命令和类型基于 OCPP2.0.1 的定义，因为这提供了更多灵活性，并且更容易转移到 OCPP1.6 的能力，反之则不然。',
    vars: {
      boot_notification_response: {
        description: '任何时间收到 CSMS 的 BootNotificationResponse 消息时都会发布'
      },
      charging_schedules: {
        description: '包含所有连接器的 OCPP 充电计划的对象。该对象包含每个连接器 ID 的复合充电计划，从连接器 0 开始。连接器 0 包含整个充电站的计划。'
      },
      event_data: {
        description: '当变量监控更改时，为组件变量组合发布。对于 OCPP1.6：该对象可能只包含 EventData 类型所需属性，因为在 OCPP1.6 中没有更多可用信息或需要。\n' +
          '对于 OCPP2.0.1：该对象可能包含所有可用属性'
      },
      is_connected: { description: '指示充电点是否连接到 CSMS' },
      ocpp_transaction_event: { description: '发出与 OCPP 交易相关的事件' },
      ocpp_transaction_event_response: { description: '发出 OCPP 交易响应' },
      security_event: {
        description: '当内部安全事件发生时发布'
      }
    }
  },
  ocpp_1_6_charge_point: {
    cmds: {
      get_configuration_key: {
        arguments: {
          keys: {
            description: '请求值的键列表。如果为空，则返回所有键和值',
            items: { description: '一个键' }
          }
        },
        description: '获取请求配置键的响应，包含请求键的值列表和未知键的列表',
        result: { description: '请求操作的响应' }
      },
      monitor_configuration_keys: {
        arguments: {
          keys: {
            description: '应监控的键',
            items: { description: '应监控的键' }
          }
        },
        description: '监控给定配置键。如果此配置键由 CSMS 更改，则将发布更改的配置键。连续调用此操作不会覆盖，而是扩展现有的监控'
      },
      restart: {
        description: '连接 websocket 并在之前的停止调用后启用 OCPP 通信。',
        result: {
          description: '如果服务能成功重启则返回 true，否则返回 false'
        }
      },
      security_event: {
        arguments: {
          info: {
            description: '有关发生的安全事件的附加信息'
          },
          type: { description: '安全事件类型' }
        },
        description: '在 CSMS 触发 SecurityEventNotification.req。此事件会排队并保证发送到 CSMS。'
      },
      set_custom_configuration_key: {
        arguments: {
          key: { description: '应设置的键' },
          value: { description: '应为给定键设置的值' }
        },
        description: '命令设置自定义配置键。无法从外部设置标准化配置键',
        result: {
          description: '指示请求操作的结果'
        }
      },
      stop: {
        description: '断开 websocket 连接并停止 OCPP 通信。重启后不会存储和发送 OCPP 消息。',
        result: {
          description: '如果服务能成功停止则返回 true，否则返回 false'
        }
      }
    },
    description: '此接口定义了 OCPP 1.6 充电点',
    vars: {
      configuration_key: {
        description: '当配置键由 CSMS 更改且使用命令 monitor_configuration_keys 注册了监控时发布'
      },
      is_connected: { description: '指示充电点是否连接到 CSMS' },
      security_event: {
        description: '当内部安全事件发生时发布'
      }
    }
  },
  ocpp_data_transfer: {
    cmds: {
      data_transfer: {
        arguments: {
          request: {
            description: '包含数据传输请求的请求对象'
          }
        },
        description: '执行 OCPP 数据传输请求并返回响应',
        result: {
          description: '包含数据传输响应的结果对象'
        }
      }
    },
    description: '此接口定义了 OCPP 数据传输'
  },
  over_voltage_monitor: {
    cmds: {
      reset_over_voltage_error: {
        description: '重置检测逻辑，以便在发生过电压错误后允许新的充电会话。这应清除过电压错误。如果监控仍在活动，应停止监控。'
      },
      start: {
        arguments: {
          over_voltage_limit_V: {
            description: '指定过电压阈值 [V]（基于 IEC61851-23:2023 表 103）如果 DC 输出电压高于此值，则应触发紧急关闭。'
          }
        },
        description: '启动过电压监控'
      },
      stop: {
        description: '在功率传输结束时停止过电压监控。'
      }
    },
    description: '此接口根据 IEC61851-23:2023 6.3.1.106.2 定义了用于直流充电的快速过电压监控设备。如果 DC 输出电压超过表 103 的限制 9ms，则需要触发紧急关闭。实际关闭需要在 EVerest 之外的较低层处理，但此接口在会话开始时设置正确的电压限制并在会话结束时停止监控。过电压错误应在实际关闭执行后报告。一旦触发过电压错误，只有在调用 reset_over_voltage_error 命令时才能清除。所有其他错误应在发生/不再活跃时立即触发/清除。应以定期间隔（例如 1 秒）发布 var voltage_measurement_V。它不用于与 EVerest 中的过电压阈值设置进行比较，这必须在 OVM 设备本身中完成。它仅用于验证 OVM 和 IMD 是否看到相同的电压，以确保它们正确连接到同一充电端口。如果硬件中不可用，则不要发布 voltage_measurement_V。',
    vars: { voltage_measurement_V: { description: '测量电压（伏特）' } }
  },
  payment_terminal: {
    cmds: {
      allow_all_cards_for_every_connector: {
        description: '在每个连接器上启用所有卡片类型。这是启动时的默认行为'
      },
      enable_card_reading: {
        arguments: {
          connector_id: { description: '哪个连接器' },
          supported_cards: { description: '支持的卡片类型数组' }
        },
        description: '启用或禁用给定连接器的卡片读取'
      }
    },
    description: '提供支付终端功能的接口',
    vars: {
      bank_transaction_summary: {
        description: "提供已提交到银行的会话信息。此数据可能需要用于会计目的。银行交易摘要。取决于银行和后端。因此目前主要是不透明数据。"
      },
      rejection_reason: {
        description: '提供被拒绝的信用卡读取的拒绝原因。'
      }
    }
  },
  phyverso_mcu_temperature: {
    description: 'MCU 温度',
    vars: { MCUTemperatures: { description: '温度' } }
  },
  power: {
    description: '此接口定义了电源接口',
    vars: {
      max_current: {
        description: '这是电源的最大电流'
      }
    }
  },
  power_supply_DC: {
    cmds: {
      setExportVoltageCurrent: {
        arguments: {
          current: { description: '输出电流限制（安培）' },
          voltage: { description: '输出电压（伏特）' }
        },
        description: '设置输出目标电压限制。必须在报告的限制内。'
      },
      setImportVoltageCurrent: {
        arguments: {
          current: { description: '输入电流限制（安培）' },
          voltage: {
            description: '如果输入电压高于此电压（伏特），则会吸取电流'
          }
        },
        description: '设置最小输入电压和电流限制。必须在报告的限制内。'
      },
      setMode: {
        arguments: {
          mode: { description: '电源的运行模式' },
          phase: {
            description: '此模式更改的充电阶段。此信息通常不需要电源，因为它应始终在 CCCV 模式下运行。然而，一些特殊设置在内部处理电缆检查/预充电/充电略有不同。'
          }
        },
        description: '设置双向直流电源的运行模式'
      }
    },
    description: '用于直流充电的电源接口\n' +
      '此接口的实现指南：1) 在驱动程序启动时，一旦可用就尽快发布能力，理想情况下在 ready() 函数中。\n' +
      '   EvseManager 中的充电逻辑不会允许任何充电，直到至少接收一次能力。\n' +
      '   可以在任何时候发布能力以更新值。例如，如果它们由于热降额等原因而改变。\n' +
      '   如果在更新接收时有充电会话活动，\n' +
      '   只有功率/电流限制会立即应用。所有其他值将在下一个充电会话中生效。\n' +
      '\n' +
      '2) setMode/setVoltageCurrent 命令应立即在硬件上执行。如果由于当前有错误\n' +
      '   （例如与硬件的通信丢失），驱动模块应缓存最后的模式和电压/电流设置。\n' +
      '   一旦 PSU 恢复在线（例如，在通信故障后），设置最后接收到的模式和电压/电流值，然后清除错误。\n' +
      '\n' +
      '3) setMode 到 Off 需要特别注意。为了避免在满载下切换充电器的输出继电器，确保在电流低于安全阈值时才从 setMode 函数（Off）返回（确切值取决于硬件）。\n' +
      '   如果与电源的通信丢失，确保仍然返回，该调用不应长时间阻塞。\n' +
      '   EVerest 将确保在关闭期间调用顺序正确，但不会等待电源实际关闭：\n' +
      '    1. 在 power_supply_DC 上调用 setMode(Off)\n' +
      '    2. 在 evse_board_support 上调用 allow_power_on(false)\n' +
      '  如果 setMode(Off) 立即返回，可能会发生 bsp 实现在电源关闭之前打开继电器。\n' +
      '\n' +
      '4) var voltage_current 应定期发布。间隔取决于硬件，但至少应每秒一次。如果可能，\n' +
      '   建议以 4 Hz 更新。',
    vars: {
      capabilities: { description: '发布此 PSU 的能力。' },
      mode: { description: '当前模式。在更改时发布。' },
      voltage_current: { description: '输入/输出的电压/电流' }
    }
  },
  powermeter: {
    cmds: {
      start_transaction: {
        arguments: {
          value: {
            description: '应包含在签名 OCMF 数据包中的所有信息'
          }
        },
        description: '在电表上启动交易（根据德国度量法签署计量）',
        result: {
          description: '成功时返回 true，如果交易无法在电表上启动则返回 false'
        }
      },
      stop_transaction: {
        arguments: { transaction_id: { description: '交易 ID' } },
        description: '停止电表上的交易并返回签名的计量信息。如果交易 ID 为空字符串，则应取消所有正在进行的交易。这在启动时用于清除电表中可能仍在进行但 EvseManager 不知道的挂起交易。',
        result: {
          description: '包括 OCMF 字符串的交易停止请求响应。'
        }
      }
    },
    description: '此接口定义了用于 5 线 TN 网络的通用电表。',
    vars: {
      powermeter: { description: '测量数据集' },
      public_key_ocmf: { description: 'OCMF 的公钥' }
    }
  },
  reservation: {
    cmds: {
      cancel_reservation: {
        arguments: { reservation_id: { description: '预订的 ID' } },
        description: '取消给定 reservation_id 的预订',
        result: {
          description: '如果预订已取消则返回 true。如果没有预订可取消则返回 false。'
        }
      },
      exists_reservation: {
        arguments: {
          request: {
            description: '用于检查给定连接器和令牌上是否有预订的信息。'
          }
        },
        description: '检查给定连接器和令牌是否有预订。如果有此令牌的预订（适用于 evse id 0），也会返回 true。',
        result: {
          description: '返回一个枚举，指示给定 ID / ID 令牌 / 组 ID 令牌组合的预订状态。'
        }
      },
      reserve_now: {
        arguments: { request: { description: '预订请求' } },
        description: '预订 EVSE。',
        result: {
          description: '如果预订成功则返回 Accepted，或指定错误代码。'
        }
      }
    },
    description: '预订接口',
    vars: {
      reservation_update: { description: '预订更新。' }
    }
  },
  serial_communication_hub: {
    cmds: {
      modbus_read_holding_registers: {
        arguments: {
          first_register_address: {
            description: '读取操作的起始地址（16 位地址）'
          },
          num_registers_to_read: { description: '要读取的寄存器数（每个 16 位）' },
          target_device_id: {
            description: '要发送命令的目标设备的 ID（1 字节）'
          }
        },
        description: "通过串行接口向目标硬件发送 Modbus RTU '读取保持寄存器' 命令。（返回值：响应）",
        result: { description: '传输的结果' }
      },
      modbus_read_input_registers: {
        arguments: {
          first_register_address: {
            description: '读取操作的起始地址（16 位地址）'
          },
          num_registers_to_read: { description: '要读取的寄存器数（每个 16 位）' },
          target_device_id: {
            description: '要发送命令的目标设备的 ID（1 字节）'
          }
        },
        description: "通过串行接口向目标硬件发送 Modbus RTU '读取输入寄存器' 命令。（返回值：响应）",
        result: { description: '传输的结果' }
      },
      modbus_write_multiple_registers: {
        arguments: {
          data_raw: {
            description: '要写入上述选定寄存器的数据内容（以 16 位字为单位）'
          },
          first_register_address: {
            description: '写入操作的起始地址（16 位地址）'
          },
          target_device_id: {
            description: '要发送命令的目标设备的 ID（1 字节）'
          }
        },
        description: "通过串行接口向目标硬件发送 Modbus RTU '写入多个寄存器' 命令。（返回值：响应）",
        result: { description: '传输的状态码' }
      },
      modbus_write_single_register: {
        arguments: {
          data: {
            description: '要写入上述选定寄存器的数据内容'
          },
          register_address: {
            description: '要写入的寄存器地址（16 位地址）'
          },
          target_device_id: {
            description: '要发送命令的目标设备的 ID（1 字节）'
          }
        },
        description: "通过串行接口向目标硬件发送 Modbus RTU '写入单个寄存器' 命令。（返回值：响应）",
        result: { description: '传输的状态码' }
      },
      nonstd_read: {
        arguments: {
          first_register_address: {
            description: '写入操作的起始地址（16 位地址）'
          },
          num_registers_to_read: { description: '要读取的寄存器数（每个 16 位）' },
          target_device_id: {
            description: '要发送命令的目标设备的 ID（1 字节）'
          }
        },
        description: '非标准模式读取寄存器，但在读取线圈模式下获取格式错误的回复。例如由 GYDCG-UBC1 绝缘监控器使用。',
        result: { description: '传输的结果' }
      },
      nonstd_write: {
        arguments: {
          first_register_address: {
            description: '读取操作的起始地址（16 位地址）'
          },
          num_registers_to_read: { description: '要读取的寄存器数（每个 16 位）' },
          target_device_id: {
            description: '要发送命令的目标设备的 ID（1 字节）'
          }
        },
        description: '非标准模式以读取离散输入模式写入寄存器而不等待回复。例如由 GYDCG-UBC1 绝缘监控器使用。'
      }
    },
    description: '此接口提供对一个串行端口（例如 RS485）的多路访问，供多个客户端使用。'
  },
  session_cost: {
    description: '此接口发布运行或完成的会话费用。此接口提供一个会话的成本。如果有多个 EVESEID，我们需要为每个 EVSE 实例化此接口。',
    vars: {
      session_cost: {
        description: '包含会话总成本和块列表的会话成本对象'
      },
      tariff_message: {
        description: '显示给用户的信息关于费率的消息。'
      }
    }
  },
  slac: {
    cmds: {
      dlink_error: {
        description: '终止数据链并重新启动匹配过程。',
        result: { description: '成功时返回 true。' }
      },
      dlink_pause: {
        description: '请求节能模式，同时保持 MATCHED。',
        result: { description: '成功时返回 true。' }
      },
      dlink_terminate: {
        description: '终止数据链并成为 UNMATCHED。',
        result: { description: '成功时返回 true。' }
      },
      enter_bcd: {
        description: '信号从 A/E/F 到 B/C/D 的 pilot 状态变化。',
        result: {
          description: '成功时返回 true，如果转换是意外且不能由 SLAC 状态机处理，则返回 False。'
        }
      },
      leave_bcd: {
        description: '信号从 B/C/D 到 A/E/F 的 pilot 状态变化。',
        result: {
          description: '成功时返回 true，如果转换是意外且不能由 SLAC 状态机处理，则返回 False。'
        }
      },
      reset: {
        arguments: {
          enable: {
            description: 'true：重置后启动 SLAC，false：停止 SLAC'
          }
        },
        description: '重置 SLAC'
      }
    },
    description: 'EVSE 侧的 ISO15118-3 SLAC 接口',
    vars: {
      dlink_ready: {
        description: '通知上层数据链状态的变化。当链路建立时发出 true，链路关闭时发出 false。'
      },
      ev_mac_address: {
        description: '通知上层车辆的 MAC 地址（大写）'
      },
      request_error_routine: {
        description: '通知上层执行 SLAC 连接重试的错误例程'
      },
      state: { description: '提供状态枚举。' }
    }
  },
  solar_forecast: {
    description: '此接口定义了太阳能发电预测接口',
    vars: {
      forecast: {
        description: '包含时间戳和瓦时能量预测的预测 JSON 对象。'
      }
    }
  },
  sunspec_ac_meter: {
    cmds: {
      get_sunspec_ac_meter_value: {
        arguments: { auth_token: { description: '认证令牌' } },
        description: '返回 sunspec ac 电表模型',
        result: { description: 'Sunspec ac 电表模型' }
      }
    },
    description: '获取 sunspec ac 电表测量值'
  },
  sunspec_reader: {
    description: '此接口定义了通用 Sunspec 读取器，当给出实现时可用于从 Sunspec 设备获取值。',
    vars: {
      measurement: {
        description: '测量数据集',
        properties: {
          timestamp: { description: '测量时间戳' },
          value: { description: '测量值' }
        }
      }
    }
  },
  sunspec_scanner: {
    cmds: {
      scan_device: {
        arguments: {
          ip_address: { description: 'Sunspec 设备的本地 IP 地址' }
        },
        description: '扫描完整设备',
        result: { description: '返回扫描的 json 概述' }
      },
      scan_network: {
        description: '扫描本地网络',
        result: { description: '返回扫描的 json 概述' }
      },
      scan_port: {
        arguments: {
          ip_address: { description: 'Sunspec 设备的本地 IP 地址' },
          port: { description: 'Modbus 端口' }
        },
        description: "扫描设备端口的所有单元",
        result: { description: '返回扫描的 json 概述' }
      },
      scan_unit: {
        arguments: {
          ip_address: { description: 'Sunspec 设备的本地 IP 地址' },
          port: { description: 'Modbus 端口' },
          unit: { description: 'Modbus 单元 ID' }
        },
        description: "扫描设备端口的特定单元",
        result: { description: '返回扫描的 json 概述' }
      }
    },
    description: '此类定义了全局 Sunspec 扫描器'
  },
  system: {
    cmds: {
      allow_firmware_installation: {
        description: '调用以允许固件安装继续'
      },
      get_boot_reason: {
        description: '调用以获取系统的启动原因',
        result: { description: '返回系统的启动原因' }
      },
      is_reset_allowed: {
        arguments: { type: { description: '重置类型（软重置或硬重置）' } },
        description: '调用以确定是否允许系统重置',
        result: { description: '指示系统是否可以重置' }
      },
      reset: {
        arguments: {
          scheduled: {
            description: '指示此重置命令是计划执行还是立即执行。计划重置意味着系统在执行此命令前等待所有交易完成。此值仅为信息性。'
          },
          type: { description: '重置类型（软重置或硬重置）' }
        },
        description: '调用以立即重置系统'
      },
      set_system_time: {
        arguments: {
          timestamp: { description: '以 RFC3339 格式的新系统时间' }
        },
        description: '调用以设置 EVerest 的系统时间',
        result: {
          description: '如果成功设置系统时间则返回 true，否则返回 false'
        }
      },
      update_firmware: {
        arguments: {
          firmware_update_request: {
            description: '包含固件请求信息的元数据'
          }
        },
        description: '调用以启动固件更新',
        result: {
          description: '返回尝试更新固件的结果'
        }
      },
      upload_logs: {
        arguments: {
          upload_logs_request: {
            description: '包含日志请求信息的元数据'
          }
        },
        description: '调用以启动日志上传',
        result: {
          description: '返回尝试上传日志的结果'
        }
      }
    },
    description: 'EVerest 系统范围操作的接口',
    vars: {
      firmware_update_status: {
        description: '描述系统固件更新的当前状态'
      },
      log_status: {
        description: '描述系统日志上传的当前状态'
      }
    }
  },
  test_control: {
    cmds: {
      start_charging: {
        arguments: {
          mode: { description: '设置充电模式（例如 raw，iso15118）' }
        },
        description: '启用 EvManager 开始充电',
        result: { description: 'EvManager 的充电状态' }
      }
    },
    description: '此接口定义了 everest 测试控制功能在 everest-core 上',
    vars: { state: { description: '测试控制实例的状态' } }
  },
  test_error_handling: {
    cmds: {
      clear_all_errors: {
        description: '此命令清除此实现引发的所有错误'
      },
      clear_error: {
        arguments: {
          sub_type: {
            description: '此参数允许指定子类型'
          },
          type: {
            description: '此参数允许指定清除的类型'
          }
        },
        description: '此命令清除特定类型的错误'
      },
      raise_error: {
        arguments: {
          message: {
            description: '此参数允许指定消息'
          },
          severity: {
            description: '此参数允许指定严重性'
          },
          sub_type: {
            description: '此参数允许指定子类型'
          },
          type: {
            description: '此参数允许指定引发的类型'
          }
        },
        description: '此命令引发错误'
      }
    },
    description: '此接口定义了一个测试接口，允许控制错误处理功能的使用',
    vars: {
      errors_cleared_subscribe_TestErrorA: {
        description: '此变量发布由 error_raiser 清除的错误'
      },
      errors_cleared_subscribe_TestErrorB: {
        description: '此变量发布由 error_raiser 清除的错误'
      },
      errors_cleared_subscribe_all: {
        description: '此变量发布由 error_raiser 清除的错误'
      },
      errors_cleared_subscribe_global_all: {
        description: '此变量发布由任何模块/实现清除的错误'
      },
      errors_subscribe_TestErrorA: {
        description: '此变量发布由 error_raiser 引发的错误'
      },
      errors_subscribe_TestErrorB: {
        description: '此变量发布由 error_raiser 引发的错误'
      },
      errors_subscribe_all: {
        description: '此变量发布由 error_raiser 引发的错误'
      },
      errors_subscribe_global_all: {
        description: '此变量发布由任何模块/实现引发的错误'
      }
    }
  },
  test_error_raiser: {
    description: '此接口定义了一个允许引发错误的测试接口'
  },
  tibber_price_forecast: {
    description: '此接口定义了能源价格预测接口',
    vars: {
      forecast: {
        description: '包含时间戳和价格预测的预测 JSON 对象'
      }
    }
  },
  uk_random_delay: {
    cmds: {
      cancel: {
        description: '取消运行的随机延迟。效果与时间到期相同。'
      },
      disable: { description: '调用以禁用随机延迟功能' },
      enable: { description: '调用以启用随机延迟功能' },
      set_duration_s: {
        arguments: { value: { description: '最大持续时间（秒）' } },
        description: '设置随机延迟的最大持续时间。默认为 600 秒。'
      }
    },
    description: '此接口提供符合英国智能充电法规的随机延迟功能。是否使用随机延迟的逻辑不包含在 EvseManager 中，不同的模块可以使用此接口在运行时启用/禁用功能并取消运行的随机延迟。这始终适用于该 EVSE 的所有连接器。默认情况下，启动时随机延迟被禁用。',
    vars: {
      countdown: {
        description: '当前运行的随机延迟的倒计时'
      }
    }
  }
} as const;

