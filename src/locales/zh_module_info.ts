// SPDX-License-Identifier: Apache-2.0
// Copyright 2020 - 2025 Pionix GmbH and Contributors to EVerest

export default {
  API: {
    config: {
      charger_information_file: {
        description: '包含充电器信息（如序列号）的文件路径'
      },
      hw_caps_max_current_export_decimal_places: {
        description: '硬件能力中最大导出电流的最大小数位数'
      },
      hw_caps_max_current_export_round_to: {
        description: '将硬件限制中的最大导出电流四舍五入到最近的步长。如果值为0则忽略'
      },
      hw_caps_max_current_import_decimal_places: {
        description: '硬件能力中最大导入电流的最大小数位数'
      },
      hw_caps_max_current_import_round_to: {
        description: '将硬件限制中的最大导入电流四舍五入到最近的步长。如果值为0则忽略'
      },
      hw_caps_max_plug_temperature_C_decimal_places: {
        description: '硬件能力中 max_plug_temperature_C 的最大小数位数'
      },
      hw_caps_max_plug_temperature_C_round_to: {
        description: '将硬件限制中的 max_plug_temperature_C 四舍五入到最近的步长。如果值为0则忽略'
      },
      hw_caps_min_current_export_decimal_places: {
        description: '硬件能力中最小导出电流的最大小数位数'
      },
      hw_caps_min_current_export_round_to: {
        description: '将硬件限制中的最小导出电流四舍五入到最近的步长。如果值为0则忽略'
      },
      hw_caps_min_current_import_decimal_places: {
        description: '硬件能力中最小导入电流的最大小数位数'
      },
      hw_caps_min_current_import_round_to: {
        description: '将硬件限制中的最小导入电流四舍五入到最近的步长。如果值为0则忽略'
      },
      limits_max_current_decimal_places: {
        description: '限制中最大电流的最大小数位数'
      },
      limits_max_current_round_to: {
        description: '将限制中的最大电流四舍五入到最近的步长。如果值为0则忽略'
      },
      powermeter_VAR_decimal_places: {
        description: '功率计中VAR的最大小数位数'
      },
      powermeter_VAR_round_to: {
        description: '将VAR四舍五入到最近的步长。如果值为0则忽略'
      },
      powermeter_current_decimal_places: {
        description: '功率计中电流的最大小数位数'
      },
      powermeter_current_round_to: {
        description: '将电流四舍五入到最近的步长。如果值为0则忽略'
      },
      powermeter_energy_export_decimal_places: {
        description: '功率计中导出能量的最大小数位数'
      },
      powermeter_energy_export_round_to: {
        description: '将导出能量四舍五入到最近的步长。如果值为0则忽略'
      },
      powermeter_energy_import_decimal_places: {
        description: '功率计中导入能量的最大小数位数'
      },
      powermeter_energy_import_round_to: {
        description: '将导入能量四舍五入到最近的步长。如果值为0则忽略'
      },
      powermeter_frequency_decimal_places: {
        description: '功率计中频率的最大小数位数'
      },
      powermeter_frequency_round_to: {
        description: '将频率四舍五入到最近的步长。如果值为0则忽略'
      },
      powermeter_power_decimal_places: {
        description: '功率计中功率的最大小数位数'
      },
      powermeter_power_round_to: {
        description: '将功率四舍五入到最近的步长。如果值为0则忽略'
      },
      powermeter_voltage_decimal_places: {
        description: '功率计中电压的最大小数位数'
      },
      powermeter_voltage_round_to: {
        description: '将电压四舍五入到最近的步长。如果值为0则忽略'
      },
      telemetry_evse_temperature_C_decimal_places: {
        description: '遥测中 evse_temperature_C 的最大小数位数'
      },
      telemetry_evse_temperature_C_round_to: {
        description: '将遥测中的 evse_temperature_C 四舍五入到最近的步长。如果值为0则忽略'
      },
      telemetry_fan_rpm_decimal_places: {
        description: '遥测中风扇RPM的最大小数位数'
      },
      telemetry_fan_rpm_round_to: {
        description: '将遥测中的风扇RPM四舍五入到最近的步长。如果值为0则忽略'
      },
      telemetry_plug_temperature_C_decimal_places: {
        description: '遥测中RCD电流的最大小数位数'
      },
      telemetry_plug_temperature_C_round_to: {
        description: '将遥测中的 plug_temperature_C 四舍五入到最近的步长。如果值为0则忽略'
      },
      telemetry_supply_voltage_12V_decimal_places: {
        description: '遥测中12V供电电压的最大小数位数'
      },
      telemetry_supply_voltage_12V_round_to: {
        description: '将遥测中的12V供电电压四舍五入到最近的步长。如果值为0则忽略'
      },
      telemetry_supply_voltage_minus_12V_decimal_places: {
        description: '遥测中-12V供电电压的最大小数位数'
      },
      telemetry_supply_voltage_minus_12V_round_to: {
        description: '将遥测中的-12V供电电压四舍五入到最近的步长。如果值为0则忽略'
      }
    },
    description: 'EVerest API模块，通过外部MQTT连接暴露一些内部功能。',
    provides: { main: { description: 'EVerest API' } }
  },
  AdAcEvse22KwzKitBSP: {
    config: {
      baud_rate: {
        description: '与AD-ACEVSE22KWZ-KIT通信时使用的串行波特率'
      },
      caps_max_current_A: {
        description: 'AC侧的最大电流。对于AC，这通常是16或32，但对于HLC可能更少。-1表示使用硬件报告的限制。'
      },
      caps_min_current_A: {
        description: 'AC侧的最小电流。对于AC，这通常是6，但对于HLC可能更少。-1表示使用硬件报告的限制。'
      },
      reset_gpio: { description: '用于重置AD-ACEVSE22KWZ-KIT的GPIO线路' },
      reset_gpio_chip: {
        description: '用于硬件重置AD-ACEVSE22KWZ-KIT的重置GPIO芯片。如果设置为空字符串，则禁用。'
      },
      serial_port: {
        description: 'AD-ACEVSE22KWZ-KIT连接的串行端口'
      }
    },
    description: 'AD-ACEVSE22KWZ-KIT参考设计的板级支持包模块',
    provides: {
      board_support: {
        description: '提供低级控制接口，控制控制 pilot、继电器、电机锁'
      },
      powermeter: {
        description: '提供AD-ACEVSE22KWZ-KIT内部功率计'
      }
    }
  },
  Auth: {
    config: {
      connection_timeout: {
        description: '定义授权在被丢弃前的有效秒数。定义用户在插入汽车后可以提供授权的秒数'
      },
      ignore_connector_faults: {
        description: '描述连接器故障处理的布尔值。\n' +
          '如果为true，则忽略连接器报告的故障，即它们仍可以被授权。在大多数使用案例中应禁用此功能，但在免费充电应用中可能有用，例如：连接器例如有过温故障，当冷却后会清除。汽车在错误清除前插入。用户希望在冷却后开始充电。当此选项设置为false时，故障连接器不会被授权，直到汽车重新插入。如果设置为true，则在故障连接器上进行授权，一旦故障清除就会开始充电。\n' +
          '如果为false，则将故障连接器视为不可用，不会被授权。这适用于例如公共充电器。'
      },
      master_pass_group_id: {
        description: '具有此ID作为组ID的IdTokens属于主通行组。这意味着它们可以停止任何正在进行的交易，但不能启动交易。例如，执法部门可以使用此功能在电动汽车被拖走时停止任何正在进行的交易。如果留空，则不使用master_pass_group_id。'
      },
      prioritize_authorization_over_stopping_transaction: {
        description: '描述父ID令牌处理的布尔值。\n' +
          '如果为true，则新令牌将优先用于授权新的连接器，如果连接器可用。它不会用于结束使用其parent_id_token的交易。parent_id_token仅用于结束交易，如果没有任何连接器可用于授权。\n' +
          '如果为false，则新令牌将用于结束交易，如果现有交易的parent_id_token与提供的令牌的parent_id_token匹配。只有在没有连接器可用于授权时，才会提供对可用连接器的授权。'
      },
      selection_algorithm: {
        description: '选择算法包含选择一个连接器的逻辑。在充电站只有一个连接器的情况下，连接器的选择相当直接，因为只有一个可用。当Auth模块管理多个连接器的授权请求时，选择算法变得相关。可以设置以下值：PlugEvents：基于EV插拔事件选择连接器。FindFirst：简单地选择第一个可用的连接器。UserInput：占位符，尚未实现。'
      }
    },
    description: '此模块实现了EVerest的认证处理。它负责向连接的evse管理器提供授权。此外，它处理预订管理。',
    provides: {
      main: { description: '实现EVerest的认证接口' },
      reservation: {
        description: '实现EVerest的预订接口。'
      }
    }
  },
  DCSupplySimulator: {
    description: 'DC充电的可编程电源实现',
    provides: {
      main: {
        config: {
          bidirectional: { description: '设置为true以实现双向供电' },
          max_current: { description: '最大支持电流' },
          max_power: { description: '最大支持功率（瓦特）' },
          max_voltage: { description: '最大支持电压' },
          min_current: { description: '最小支持电流' },
          min_voltage: { description: '最小支持电压' }
        },
        description: '电源的主要接口'
      },
      powermeter: { description: '模拟的功率计接口' }
    }
  },
  DPM1000: {
    config: {
      current_limit_A: { description: '最大电流限制（安培）' },
      debug_print_all_telemetry: {
        description: '从功率模块读取并打印所有遥测数据。在调试时有帮助。'
      },
      device: { description: 'CAN设备的接口名称' },
      device_address: {
        description: '设备地址（在前面LED面板上选择）'
      },
      discharge_gpio_chip: {
        description: '用于切换外部放电负载开启和关闭的GPIO芯片。空字符串表示禁用放电。注意，硬件负载必须设计为能够永久放电至最高电压（例如1000V）'
      },
      discharge_gpio_line: { description: '用于切换放电负载的GPIO线路' },
      discharge_gpio_polarity: {
        description: 'GPIO极性，false表示低电平有效，true表示高电平有效'
      },
      power_limit_W: { description: '最大功率限制（瓦特）' },
      series_parallel_mode: {
        description: '选择串联（300-1000V）、并联（50-500）或自动切换模式（50-1000）。这会切换一个模块的内部配置，不应与多个模块的并联操作混淆。'
      },
      voltage_limit_V: {
        description: '最大电压限制（伏特）。也将受到串联并联设置的限制。'
      }
    },
    description: 'DC电源供应驱动程序',
    provides: {
      main: {
        description: 'DPM 1000-30从SCU Power的电源供应驱动程序。目前仅支持一个模块。'
      }
    }
  },
  DummyBankSessionTokenProvider: {
    description: '虚拟银行会话令牌提供者',
    provides: {
      main: {
        config: {
          randomize: { description: '随机化返回的令牌字符串' },
          token: { description: '要返回的虚拟令牌字符串' }
        },
        description: '银行会话虚拟令牌提供者的主实现，总是返回一个配置的令牌或每次返回一个真实的UUID'
      }
    }
  },
  DummyTokenProvider: {
    description: '监听来自evse_manager的AuthRequired事件的虚拟令牌提供者，然后发布一个令牌',
    provides: {
      main: {
        config: {
          connector_id: {
            description: '如果>0，则生成的令牌仅对此connector_id有效'
          },
          timeout: { description: '虚拟令牌的有效时间（秒）' },
          token: { description: '要返回的虚拟令牌字符串' },
          type: { description: '报告虚拟令牌的类型' }
        },
        description: '虚拟令牌提供者的主实现，始终返回一个配置的令牌'
      }
    }
  },
  DummyTokenProviderManual: {
    description: '手动发布一个令牌的虚拟令牌提供者',
    provides: {
      main: {
        config: {
          timeout: { description: '虚拟令牌的有效时间（秒）' },
          token: { description: '要返回的虚拟令牌字符串' },
          type: { description: '报告虚拟令牌的类型' }
        },
        description: '虚拟令牌提供者的主实现，始终返回一个配置的令牌'
      }
    }
  },
  DummyTokenValidator: {
    description: '总是返回相同配置的令牌验证结果的虚拟令牌验证器',
    provides: {
      main: {
        config: {
          sleep: {
            description: '在返回虚拟验证结果前等待的时间（秒）'
          },
          validation_reason: { description: '要返回的虚拟验证原因' },
          validation_result: { description: '要返回的虚拟验证结果' }
        },
        description: '虚拟令牌验证器的主实现，始终返回相同配置的令牌验证结果'
      }
    }
  },
  DummyV2G: {
    description: '此模块实现了HLC的空虚拟。它实际上不与汽车通信。',
    provides: {
      main: {
        description: '此模块实现了ISO15118-2的AC或DC充电器实现'
      }
    }
  },
  EnergyManager: {
    config: {
      debug: { description: '在命令行上显示调试输出。' },
      nominal_ac_voltage: {
        description: '用于将安培转换为瓦特的标称AC电压'
      },
      schedule_interval_duration: {
        description: '预测的计划间隔持续时间 [分钟]'
      },
      schedule_total_duration: { description: '计划预测的总持续时间 [小时]' },
      slice_ampere: {
        description: '交易的安培切片。较低的值将提供更均匀的分布，但会增加处理时间 [A]。'
      },
      slice_watt: {
        description: '交易的瓦特切片。较低的值将提供更均匀的分布，但会增加处理时间 [W]。'
      },
      switch_3ph1ph_max_nr_of_switches_per_session: {
        description: '限制每次充电会话中1ph和3ph之间的切换次数。设置为0表示无限制。'
      },
      switch_3ph1ph_power_hysteresis_W: {
        description: '基于功率的滞后（瓦特）。例如，如果设置为200W，则PWM充电的滞后将是4.2kW到4.4kW。实际值将取决于配置的标称AC电压，未来它们可能在PWM和ISO充电之间不同。'
      },
      switch_3ph1ph_switch_limit_stickyness: {
        description: '如果达到1ph和3ph之间的最大切换次数，选择应如何处理：\n' +
          '  - SinglePhase：切换到1ph模式\n' +
          '  - ThreePhase：切换到3ph模式\n' +
          '  - DontChange：保持当前模式'
      },
      switch_3ph1ph_time_hysteresis_s: {
        description: '基于时间的滞后。只有在选择3ph的条件稳定指定的秒数后才会切换到3ph。总是切换到1ph模式而不等待此延迟。设置为0以禁用基于时间的滞后。'
      },
      switch_3ph1ph_while_charging_mode: {
        description: '如果BSP支持在三相和单相之间切换并且配置选项three_phases设置为true，则控制算法：\n' +
          '  - Never：即使BSP支持也不使用1ph/3ph切换\n' +
          '  - Oneway：仅在功率不足时从3ph切换到1ph，但不会在会话期间切换回3ph。\n' +
          '  - Both：在两个方向切换，即从3ph切换到1ph并根据可用功率变化切换回3ph'
      },
      update_interval: { description: '能量分配的更新间隔 [秒]' }
    },
    description: '此模块是此建筑物中所有EVSE/充电站的全局能源管理器',
    provides: { main: { description: '能源管理器的主要接口' } }
  },
  EnergyNode: {
    config: {
      fuse_limit_A: {
        description: '所有相位的熔断器限制（安培）。注意：这总是附加于external_limits接口设置的限制。'
      },
      phase_count: {
        description: '相数限制。如果在此熔断器中未限制则省略。'
      }
    },
    description: '此模块是能源树的一部分，代表一个简单的电流熔断器。',
    provides: {
      energy_grid: {
        description: '这是构建能源供应树的链接口'
      },
      external_limits: {
        description: '可以通过此接口设置额外的外部限制。'
      }
    }
  },
  ErrorHistory: {
    description: '此模块提供持久的错误历史',
    provides: {
      error_history: {
        config: {
          database_path: { description: '数据库文件的绝对路径' }
        },
        description: '错误历史'
      }
    }
  },
  EvAPI: {
    description: 'EVerest EV API模块，通过外部MQTT连接暴露一些内部功能。',
    provides: { main: { description: 'EVerest EV API' } }
  },
  EvManager: {
    config: {
      ac_nominal_voltage: {
        description: '相与中性之间的标称AC电压（伏特）'
      },
      auto_enable: {
        description: '在启动时直接启用此模拟。对于纯SIL配置设置为true，对于HIL设置为false。'
      },
      auto_exec: {
        description: '在启动时自动执行模拟命令，从auto_exec_commands配置选项开始。'
      },
      auto_exec_commands: {
        description: '模拟命令，例如 sleep 1;iec_wait_pwr_ready;sleep 1;draw_power_regulated 16,3;sleep 30;unplug'
      },
      auto_exec_infinite: {
        description: '如果启用，模拟命令将无限执行。'
      },
      connector_id: {
        description: '此模拟器连接到的evse管理器的连接器ID'
      },
      dc_discharge_max_current_limit: { description: 'EV允许的最大放电电流' },
      dc_discharge_max_power_limit: { description: 'EV允许的最大放电功率' },
      dc_discharge_target_current: { description: 'EV请求的放电目标电流' },
      dc_discharge_v2g_minimal_soc: {
        description: 'EVSE应关闭的放电最小SOC'
      },
      dc_energy_capacity: { description: 'EV的能源容量' },
      dc_max_current_limit: { description: 'EV允许的最大电流' },
      dc_max_power_limit: { description: 'EV允许的最大功率' },
      dc_max_voltage_limit: { description: 'EV允许的最大电压' },
      dc_target_current: { description: 'EV请求的目标电流' },
      dc_target_voltage: { description: 'EV请求的目标电压' },
      departure_time: {
        description: '会话开始后离开时间（秒）'
      },
      e_amount: {
        description: '会话期间应充电的能源量（瓦时）'
      },
      keep_cross_boot_plugin_state: {
        description: '跨启动保持插头状态（仅用于模拟）。'
      },
      max_current: { description: 'AC最大电流（安培）' },
      soc: { description: '模拟充电过程开始时的SOC' },
      support_sae_j2847: { description: '支持SAE J2847 ISO 2双向版本' },
      three_phases: { description: '支持三相' }
    },
    description: '此模块实现了一个汽车模拟器，可以使用car_simulator接口执行充电会话。',
    provides: {
      ev_manager: {
        description: '实现ev管理器以提供额外信息，如详细的EV信息'
      },
      main: { description: '实现汽车模拟器' }
    }
  },
  EvSlac: {
    description: '根据ISO15118-3实现EV SLAC数据链路协商。',
    provides: {
      main: {
        config: {
          device: { description: '用于PLC的以太网设备。任何具有IPv6链路本地和MAC地址的本地接口都可以使用' },
          set_key_timeout_ms: {
            description: 'CM_SET_KEY.REQ的超时。默认适用于QCA7000/QCA7005/CG5317。'
          }
        },
        description: 'SLAC接口实现。'
      }
    }
  },
  Evse15118D20: {
    config: {
      custom_protocol_namespace: { description: '提供自定义协议命名空间。' },
      device: {
        description: '用于HLC的以太网设备。任何具有IPv6链路本地和MAC地址的本地接口都可以使用'
      },
      enable_sdp_server: { description: '启用内置SDP服务器' },
      enable_ssl_logging: { description: '详细记录SSL/TLS连接' },
      enable_tls_key_logging: {
        description: '启用/禁用在TLS握手期间导出TLS会话密钥（预主密钥）。注意，此选项仅用于测试和模拟目的'
      },
      enforce_tls_1_3: {
        description: '强制TLS版本1.3。仅在tls_negotiation_strategy设置为ENFORCE_TLS时适用。'
      },
      logging_path: {
        description: '日志目录路径（如果不存在将创建）'
      },
      supported_dynamic_mode: { description: 'EVSE应支持动态模式' },
      supported_mobility_needs_mode_provided_by_secc: {
        description: 'EVSE应支持SECC提供的移动需求模式。EVCC提供的移动需求模式始终提供。'
      },
      supported_scheduled_mode: { description: 'EVSE应支持计划模式' },
      tls_key_logging_path: { description: 'TLS密钥日志文件的输出目录' },
      tls_negotiation_strategy: {
        description: '选择如何协商连接加密的策略'
      }
    },
    description: '此模块是EVSE端的iso15118-20草案实现',
    provides: {
      charger: {
        description: '此接口提供对iso15118-20的有限访问'
      },
      extensions: {
        description: '此接口用于在ISO15118和OCPP模块之间共享数据，以支持OCPP协议的要求'
      }
    }
  },
  EvseManager: {
    config: {
      ac_enforce_hlc: {
        description: '结合5percent选项以真正强制HLC即使在EIM上。它不符合ISO15118-2/-3，因为它在EIM可用但SLAC未达到匹配状态时仍等待匹配。对于不支持ISO15118的汽车，这将需要很长时间才能超时并回退到基本的名义PWM充电，但最终会。'
      },
      ac_hlc_enabled: {
        description: '启用或禁用HLC（即ISO15118）用于AC模式'
      },
      ac_hlc_use_5percent: {
        description: '使用5% PWM信号尝试在AC上强制HLC。请注意，如果EIM在SLAC匹配之前到达，我们将回退到名义PWM充电。因此，大多数汽车在这种模式下永远不会使用HLC，特别是在EIM始终可用的免费服务中，但这是ISO15118-2/-3要求的合规性——它希望仅在PnC中使用HLC而不是EIM。'
      },
      ac_nominal_voltage: {
        description: '相与中性之间的标称AC电压（伏特）'
      },
      ac_with_soc: {
        description: '特殊模式，切换AC和DC充电以获得AC充电的SoC百分比'
      },
      autocharge_use_slac_instead_of_hlc: {
        description: '使用slac ev mac地址进行自动充电而不是HLC中的EVCCID'
      },
      cable_check_enable_imd_self_test: {
        description: '启用电缆检查中的IMD自检。这在IEC 61851-23 (2023)合规性中是必需的。'
      },
      cable_check_wait_below_60V_before_finish: {
        description: '在电缆检查完成前关闭电源供应并等待输出电压降至60V以下。注意：IEC 61851-23:2023的不同版本在内容上略有不同。IEC在最初发布后修正了错误，但未标记新版本号。一些早期版本要求在CC.4.1.2（最后一句）中等待输出电压降至60V以下。后期版本没有此要求。后期版本是正确的，应根据IEC使用。两种设置（true和false）都符合IEC 61851-23:2023的正确版本。设置为true当：\n' +
          '  - 电源没有主动放电，且在无负载情况下降低电压需要很长时间。在这种情况下\n' +
          '    此选项通常通过关闭电压快速降低电压。它将在预充电时重新开启。\n' +
          '    另外，一些EV在电压从电缆检查电压直接降至预充电电压时内部继电器会在电压过高时切换，\n' +
          '    所以true是推荐的默认值。\n' +
          '设置为false当：\n' +
          '  - 电源具有主动放电并能快速降低电压（只需设置较低的目标电压）。\n' +
          '    这可以节省几秒钟，因为它避免了不必要的电压升降。'
      },
      cable_check_wait_number_of_imd_measurements: {
        description: '在值可信之前收集的隔离测量样本数量。这不是平均值，而是评估最后一个测量值。一些IMD（例如来自Bender）需要测量10秒才能真正获得可信的结果。在这种情况下，在1Hz采样率下，指定10个样本。'
      },
      central_contract_validation_allowed: {
        description: '用于ISO15118插拔充电：如果为false，则合同不应在PaymentOptionList中出现。如果为true，则在使用TLS时合同可能在PaymentOptionList中出现。'
      },
      charge_mode: { description: '选择充电模式' },
      connector_id: { description: '此evse管理器的连接器ID' },
      connector_type: {
        description: '此evse管理器的连接器类型（/evse_manager#/ConnectorTypeEnum）'
      },
      contract_certificate_installation_enabled: {
        description: '用于ISO15118插拔充电：指示充电器是否支持合同CertificateInstall和CertificateUpdate'
      },
      dbg_hlc_auth_after_tstep: {
        description: '特殊模式：在t_step_XX完成后发送HLC认证（true）或在可用时直接发送（false）'
      },
      dc_isolation_voltage_V: {
        description: '覆盖在电缆检查中测试隔离的DC电压。默认为0，这意味着电压将根据IEC 61851-23 (2023) CC.4.1.2确定'
      },
      disable_authentication: {
        description: '不等待来自Auth模块的授权，提供免费服务。插拔后立即开始充电。不要与Auth管理器或OCPP一起使用，此选项仅用于不连接到Auth管理器的独立EvseManager。在测试与Auth模块和/或OCPP时使用DummyTokenProvider/Validator。'
      },
      enable_autocharge: {
        description: '启用自动充电（即使用MAC地址进行授权）。默认禁用，因为应使用PnC。'
      },
      ev_receipt_required: { description: '不支持：在HLC中从EV请求收据' },
      evse_id: { description: 'EVSE ID' },
      evse_id_din: { description: 'DIN SPEC 91286后的EVSE ID DIN' },
      external_ready_to_start_charging: {
        description: '启用外部准备开始充电信号，延迟充电准备直到收到该信号'
      },
      fail_on_powermeter_errors: {
        description: '如果配置了功率计需求并报告错误，则将EVSE管理器设置为非操作状态'
      },
      hack_allow_bpt_with_iso2: {
        description: '黑客。允许在DIN规范和ISO-2中进行双向功率传输。在HLC中通信的电流始终为正，但电源可能实际上对汽车放电。'
      },
      hack_fix_hlc_integer_current_requests: {
        description: '一些汽车在DC充电期间仅请求整数安培值。对于低功率DC充电，这意味着它们充电比需要的慢几百瓦。如果启用，当EV请求电流（整数）与HLC电流限制的差异小于1.0时，将全功率充电'
      },
      hack_pause_imd_during_precharge: {
        description: '在电缆检查结束时禁用IMD，并在电流在CurrentDemand中流动时重新启用。一些DCDC电源在绝缘测量激活时不会开始电流流动。设置为true以启用某些IMD硬件的脏 workaround。'
      },
      hack_present_current_offset: {
        description: '在HLC中向汽车报告的当前电流增加一个偏移量[A]。除非您真正知道您在做什么，否则设置为0。'
      },
      hack_simplified_mode_limit_10A: {
        description: '如果EV使用简化充电模式，将PWM限制为10A。设置为false以符合IEC61851-1:2019第A.2.3节。根据规范，EV应限制为10A。启用此选项以偏离规范并在EVSE侧限制。'
      },
      hack_skoda_enyaq: {
        description: 'Skoda Enyaq在DC充电期间请求低于其电池水平甚至低于0的电压。设置为true以启用脏 workaround。'
      },
      hack_sleep_in_cable_check: {
        description: '黑客：在电缆检查结束时睡眠n秒。'
      },
      hack_sleep_in_cable_check_volkswagen: {
        description: '黑客：Volkswagen汽车在电缆检查结束时额外睡眠n秒'
      },
      has_ventilation: { description: '允许通风充电或不允许' },
      initial_meter_value_timeout_ms: {
        description: '此超时以毫秒为单位定义EvseManager等待功率计的初始计量值的时间，直到其准备好开始充电。如果配置为0，EvseManager将在准备好开始充电前不等待初始计量值。'
      },
      inoperative_error_use_vendor_id: {
        description: '当引发evse_manager/Inoperative时使用原始原因的供应商ID'
      },
      lock_connector_in_state_b: {
        description: '指示连接器锁是否应在状态B中锁定。如果设置为false，连接器在CP状态B中将保持解锁，这违反了IEC61851-1:2019 D.6.5表D.9第4行，不应在公共环境中使用！'
      },
      logfile_suffix: {
        description: '使用给定字符串作为日志文件夹名称。特殊字符串session_uuid将被会话uuid替换。'
      },
      max_current_export_A: {
        description: '用户可配置的EVSE电流限制（安培）'
      },
      max_current_import_A: {
        description: '用户可配置的EVSE电流限制（安培）'
      },
      payment_enable_contract: {
        description: '设置为true以启用合同（即插即充）授权'
      },
      payment_enable_eim: {
        description: '设置为true以启用EIM（例如RFID卡或移动应用）授权'
      },
      raise_mrec9: {
        description: '允许配置在发生授权超时错误时是否由该模块引发MREC9。如果使用OCPP1.6，建议禁用。'
      },
      request_zero_power_in_idle: {
        description: '"true: 在空闲模式（无汽车连接），从能源管理器请求0A。在有多个充电站的安装中，应设置为" "允许功率分配给连接汽车的充电器。" "false: 即使没有汽车连接也请求正常电流。这可以加快AC BASIC充电的开始，因为" "EvseManager不需要在插拔后等待能源管理器的能源。"'
      },
      sae_j2847_2_bpt_enabled: { description: '启用SAE J2847 2 V2G或V2H模式' },
      sae_j2847_2_bpt_mode: { description: 'SAE J2847 2 BPT模式' },
      session_id_type: {
        description: '用于生成会话ID的类型。UUID：36个字符的UUID UUID_BASE64：22个字符的base64编码uuids SHORT_BASE64：16个字符的base64编码ID'
      },
      session_logging: { description: '启用/禁用会话日志文件输出' },
      session_logging_path: { description: '会话日志文件的输出目录' },
      session_logging_xml: { description: '记录HLC的完整XML消息' },
      sleep_before_enabling_pwm_hlc_mode_ms: {
        description: '在HLC模式下更新PWM信号前睡眠。特斯拉在启用PWM后很快发送第一个slac包，所以睡眠允许SLAC准备好。一些EV测试者对>=1000ms的值有困难，尽管ISO15118或IEC61851没有指定超时。'
      },
      soft_over_current_measurement_noise_A: {
        description: '设置电流测量噪声。作为限制的偏移量添加以避免误触发。'
      },
      soft_over_current_timeout_ms: {
        description: '在AC充电期间软过流检查中允许过流存在N毫秒。'
      },
      soft_over_current_tolerance_percent: {
        description: '在AC充电期间软过流检查中允许N百分比的过流。'
      },
      state_F_after_fault_ms: {
        description: '在充电模式下（CX->F(300ms)->C1/B1）发生任何停止充电的故障后，设置状态F的时间（毫秒）。当在状态B2中发生故障时，不添加状态F（B2->B1故障）。一些（特别是较老的混合车辆）在检测到状态F后可能进入永久故障模式，如果故障清除，EVerest无法恢复充电会话。在这种情况下，您可以将此参数设置为0，这将避免在故障情况下使用状态F，仅在切换电源时禁用PWM（C2->C1）。这将违反IEC 61851-1:2017，但默认值为300ms，这是IEC 61851-1:2017表A.5（描述）建议的最小值以符合标准。此设置仅在BASIC充电模式下有效。'
      },
      switch_3ph1ph_cp_state: {
        description: '用于切换的CP状态。警告：某些汽车在从1ph切换到3ph时可能会永久损坏。evse_board_support实现有责任确保EV能够执行切换。如果不能，能力必须设置supports_changing_phases_during_charging为false。相位切换仅在基本充电模式下可能。'
      },
      switch_3ph1ph_delay_s: {
        description: '在3ph/1ph模式切换时等待n秒。'
      },
      uk_smartcharging_random_delay_at_any_change: {
        description: '"True: 在充电期间的任何电流变化上使用随机延迟。False: 仅在电流减少到零或从零增加时使用。"'
      },
      uk_smartcharging_random_delay_enable: {
        description: '"true: 启用启动时的随机延迟，false: 禁用启动时的随机延迟。" "它们也可以在运行时在random_delay实现上启用/禁用。"'
      },
      uk_smartcharging_random_delay_max_duration: {
        description: '"启动时随机延迟的最大持续时间的起始值。" "可以在运行时在random_delay实现上修改。"'
      }
    },
    description: 'EVSE管理器。电网侧功率计：将用于能源管理。如果未连接汽车侧功率计，也将用于计费。汽车侧功率计：如果存在，将用于计费。',
    provides: {
      energy_grid: {
        description: '这是构建能源供应树的树叶接口'
      },
      evse: { description: '这是主要的evsemanager接口' },
      random_delay: {
        description: '提供对英国智能充电法规随机延迟功能的控制'
      },
      token_provider: {
        description: '提供用于自动充电或插拔充电的授权令牌'
      }
    }
  },
  EvseSecurity: {
    config: {
      csms_ca_bundle: {
        description: 'csms_ca_bundle文件的路径。如果为相对路径，将前缀为everest前缀+etc/everest/certs。否则使用绝对文件路径。'
      },
      csms_leaf_cert_directory: {
        description: '存储CSMS叶子证书的目录。如果为相对路径，将前缀为everest前缀+etc/everest/certs。否则使用绝对文件路径。'
      },
      csms_leaf_key_directory: {
        description: '存储CSMS私钥的目录。如果为相对路径，将前缀为everest前缀+etc/everest/certs。否则使用绝对文件路径。'
      },
      mf_ca_bundle: {
        description: 'mf_ca_bundle文件的路径。如果为相对路径，将前缀为everest前缀+etc/everest/certs。否则使用绝对文件路径。'
      },
      mo_ca_bundle: {
        description: 'mo_ca_bundle文件的路径。如果为相对路径，将前缀为everest前缀+etc/everest/certs。否则使用绝对文件路径。'
      },
      private_key_password: { description: '加密私钥的密码。' },
      secc_leaf_cert_directory: {
        description: '存储SECC叶子证书的目录。如果为相对路径，将前缀为everest前缀+etc/everest/certs。否则使用绝对文件路径。'
      },
      secc_leaf_key_directory: {
        description: '存储SECC私钥的目录。如果为相对路径，将前缀为everest前缀+etc/everest/certs。否则使用绝对文件路径。'
      },
      v2g_ca_bundle: {
        description: 'v2g_ca_bundle文件的路径。如果为相对路径，将前缀为everest前缀+etc/everest/certs。否则使用绝对文件路径。'
      }
    },
    description: '此模块实现了evse_security接口。它使用文件系统存储证书和密钥',
    provides: {
      main: { description: 'evse_security接口的实现' }
    }
  },
  EvseSlac: {
    description: '根据ISO15118-3实现SLAC数据链路协商。',
    provides: {
      main: {
        config: {
          ac_mode_five_percent: {
            description: '根据ISO15118-3使用AC 5%模式。这会在标准允许的失败后重启SLAC会话。标准仅允许AC的重试，而不是DC。然而，强烈建议始终将此选项设置为true，即使对于DC，否则现场的一些汽车会频繁无法完成SLAC。'
          },
          chip_reset_delay_ms: { description: 'SET_KEY.CNF和RS_DEV.REQ之间的延迟' },
          chip_reset_timeout_ms: {
            description: 'RS_DEV.REQ的超时（等待RS_DEV.CNF）'
          },
          debug_simulate_failed_matching: {
            description: '仅用于调试。通过向EV发送错误的NMK模拟匹配失败。'
          },
          device: { description: '用于PLC的以太网设备。' },
          do_chip_reset: {
            description: '使用RS_DEV.REQ Vendor MME扩展在设置NMK后执行芯片重置（仅适用于高通芯片）'
          },
          link_status_detection: {
            description: '匹配.cnf后，等待链路启动再使用LINK_STATUS Vendor MME扩展发送d_link_ready=connected（适用于高通和Lumissil芯片）'
          },
          link_status_retry_ms: {
            description: '匹配请求后LINK_STATUS请求重试之间的延迟'
          },
          link_status_timeout_ms: {
            description: '匹配请求后链路启动的超时'
          },
          number_of_sounds: { description: 'SLAC声音数量。' },
          publish_mac_on_first_parm_req: {
            description: '在第一个CM_SLAC_PARM.REQ时发布EV MAC地址。不应使用，因为它容易出错：MAC地址可能来自其他汽车的交叉通话。最好等待匹配完成。'
          },
          publish_mac_on_match_cnf: {
            description: '在匹配确认（CM_SLAC_MATCH.CNF）时在token_provider接口上发布EV MAC地址。这可用于自动充电，作为从HLC派生的EVCCID的替代方案，由EvseManager发布。这可用于不支持实际HLC的AC汽车的自动充电。'
          },
          reset_instead_of_fail: {
            description: '转到重置状态而不是失败状态。这违反了ISO15118-3。但一些汽车在SLAC过程中中止时直接发送CM_SLAC_PARAM.req消息。为了响应此消息并重新启动SLAC过程，EVSE在此处转到重置状态。'
          },
          set_key_timeout_ms: {
            description: 'CM_SET_KEY.REQ的超时。默认适用于QCA7000/QCA7005/CG5317。'
          },
          sounding_attenuation_adjustment: {
            description: '应添加到计算声音衰减的dB偏移量'
          }
        },
        description: 'SLAC接口实现。'
      }
    }
  },
  EvseV2G: {
    config: {
      auth_timeout_eim: {
        description: '定义EVSE在EIM情况下等待授权的秒数，超过该时间后充电会话将中止。如果EVSE应无限等待EIM授权，请写0。'
      },
      auth_timeout_pnc: {
        description: '定义EVSE在PnC情况下等待授权的秒数，超过该时间后充电会话将中止。如果EVSE应无限等待PnC授权，请写0。'
      },
      device: {
        description: '用于HLC的以太网设备。任何具有IPv6链路本地和MAC地址的本地接口都可以使用'
      },
      enable_sdp_server: { description: '启用内置SDP服务器' },
      supported_DIN70121: { description: 'EVSE支持DIN SPEC' },
      supported_ISO15118_2: { description: 'EVSE支持ISO15118-2' },
      terminate_connection_on_failed_response: {
        description: '控制如何处理EVSE的失败响应代码。如果为true，则在失败响应代码时立即终止V2G连接，否则EV负责使用SessionStop关闭V2G通信会话。'
      },
      tls_key_logging: {
        description: '启用/禁用在TLS握手期间导出TLS会话密钥（预主密钥）。此日志文件可用于解密TLS会话。注意，此选项仅用于测试和模拟目的'
      },
      tls_key_logging_path: { description: 'TLS密钥日志文件的输出目录' },
      tls_security: { description: '控制如何处理加密通信' },
      tls_timeout: {
        description: '设置建立TLS连接时的TLS超时（毫秒）'
      },
      verify_contract_cert_chain: {
        description: '指定EVSE是否应本地验证合同证书链。'
      }
    },
    description: '此模块包含由chargebyte GmbH提供的DIN70121和ISO15118-2实现',
    provides: {
      charger: {
        description: '此模块实现了ISO15118-2的AC或DC充电器实现'
      },
      extensions: {
        description: '此接口用于在ISO15118和OCPP模块之间共享数据，以支持OCPP协议的要求'
      }
    }
  },
  Example: {
    description: '用C++编写的简单示例模块',
    provides: {
      example: {
        config: {
          current: {
            description: '物理连接器可以提供的电流'
          },
          enum_test: { description: '测试枚举类型的配置值' },
          enum_test2: {
            description: '另一个测试枚举类型的配置值'
          }
        },
        description: '此实现使用多个框架功能的示例接口'
      },
      store: {
        description: '此实现kvs接口，主要用于在一个清单中测试多个接口'
      }
    }
  },
  ExampleErrorGlobalSubscriber: {
    description: '用C++编写的简单示例模块，用于演示全局订阅者侧的错误框架',
    provides: {
      example_global_subscriber: { description: '此实现示例接口' }
    }
  },
  ExampleErrorRaiser: {
    description: '用C++编写的简单示例模块，用于演示引发方的错误处理',
    provides: {
      example_raiser: { description: '此实现示例接口' }
    }
  },
  ExampleErrorSubscriber: {
    description: '用C++编写的简单示例模块，用于演示订阅者侧的错误框架',
    provides: {
      example_subscriber: { description: '此实现示例接口' }
    }
  },
  ExampleUser: {
    description: '用C++编写的简单示例模块，并使用其他示例模块',
    provides: {
      example_user: { description: '此实现example_user接口' }
    }
  },
  GenericPowermeter: {
    description: '各种功率计硬件的功率计驱动程序',
    provides: {
      main: {
        config: {
          modbus_base_address: { description: '寄存器访问的基地址' },
          model: {
            description: '选择要使用的功率计配置文件'
          },
          powermeter_device_id: { description: "功率计在串行总线上的地址" }
        },
        description: '驱动功能的实现'
      }
    }
  },
  IMDSimulator: {
    description: 'DC充电的隔离监控设备（IMD）的SIL实现',
    provides: {
      main: {
        config: {
          interval: {
            description: '测量更新间隔（毫秒）'
          },
          resistance_F_Ohm: {
            description: '模拟测量返回的电阻值（欧姆）'
          },
          selftest_success: {
            description: '设置为true表示自检成功，false表示故障'
          }
        },
        description: 'IMD的主要接口'
      }
    }
  },
  IsabellenhuetteIemDcr: {
    config: {
      CI: {
        description: '充电点标识（签名的OCMF数据元组的一部分）。'
      },
      CT: {
        description: '充电点标识类型（签名的OCMF数据元组的一部分）。'
      },
      TT_initial: {
        description: '初始费率文本。（其当前值是签名的OCMF数据元组的一部分）。'
      },
      US: {
        description: '控制是否在显示屏上显示用户ID。'
      },
      datetime_resync_interval: { description: '循环时间重新同步的间隔（小时）。' },
      ip_address: { description: '功率计API的IPv4地址。' },
      port_http: { description: '功率计API的HTTP端口。' },
      resilience_initial_connection_retry_delay: {
        description: '对于控制器的弹性，模块初始化时重试尝试前的延迟（毫秒）。'
      },
      resilience_transaction_request_retries: {
        description: '对于控制器的弹性，在交易开始或停止请求时连接到功率计的重试次数。'
      },
      resilience_transaction_request_retry_delay: {
        description: '对于控制器的弹性，在交易开始或停止请求时重试尝试前的延迟（毫秒）。'
      },
      timezone: {
        description: '根据ISO8601的时间区偏移信息（无冒号版本）用于正常时间。'
      },
      timezone_handle_DST: {
        description: '控制是否处理夏令时（DST）或持续使用正常时间。'
      }
    },
    description: '模块实现Isabellenhuette IEM-DCR功率计驱动程序，通过HTTP/REST连接',
    provides: { main: { description: '这是模块的主要单元' } }
  },
  IsoMux: {
    config: {
      device: {
        description: '用于HLC的以太网设备。任何具有ipv6链路本地和MAC地址的本地接口都可以使用'
      },
      proxy_port_iso2: { description: '本地ISO2实例的TCP端口' },
      proxy_port_iso20: { description: '本地ISO20实例的TCP端口' },
      tls_key_logging: {
        description: '启用/禁用在TLS握手期间导出TLS会话密钥（预主密钥）。此日志文件可用于解密TLS会话。请注意，此选项仅用于测试和仿真'
      },
      tls_security: { description: '控制如何处理加密通信' },
      tls_timeout: {
        description: '设置建立TLS连接时的超时时间（毫秒）'
      }
    },
    description: '此模块是一个多路复用器，用于在不同的ISO模块实现之间切换',
    provides: {
      charger: {
        description: '此模块实现了ISO15118-2的AC或DC充电器实现'
      },
      extensions: {
        description: '此接口用于在ISO15118和OCPP模块之间共享数据，以支持OCPP协议的要求'
      }
    }
  },
  LemDCBM400600: {
    config: {
      SC: { description: 'SC（OCMF/交易字段）' },
      UD: { description: 'UD（OCMF/交易字段）' },
      UV: { description: '用户软件版本（OCMF/交易字段）' },
      cable_id: {
        description: '要使用的电缆损耗补偿级别。这允许使用电阻来补偿DCBM的测量值。'
      },
      command_timeout_ms: {
        description: '向LEM功率计发送HTTP命令的超时时间（毫秒）。'
      },
      ip_address: { description: '功率计API的IP地址。' },
      meter_dst: {
        description: '夏令时（DST）设置（如果设置了NTP则忽略）'
      },
      meter_timezone: {
        description: '时区偏移（如果设置了NTP服务器则忽略）- 可以从-11到+14小时，分钟可以是00、15、30、45'
      },
      meter_tls_certificate: {
        description: "DCBM的HTTPS证书，以PEM格式。如果提供，则使用HTTPS。如果留空，则使用常规HTTP。请注意，这不会影响默认端口 - 如果希望使用其他端口，请显式指定端口。"
      },
      ntp_server_1_ip_addr: {
        description: "第一个NTP服务器的IPv4地址（以四组数字W.X.Y.Z形式）。如果留空，则不会在DCBM上配置NTP - 其时间将与EVerest的系统时间同步。"
      },
      ntp_server_1_port: { description: '第一个NTP服务器的端口（1-65535）。' },
      ntp_server_2_ip_addr: {
        description: '第二个NTP服务器的IPv4地址（以四组数字W.X.Y.Z形式）。如果ntp_server_1_ip_addr为空则忽略。'
      },
      ntp_server_2_port: { description: '第二个NTP服务器的端口（1-65535）。' },
      port: { description: '功率计API的端口。' },
      resilience_initial_connection_retries: {
        description: '对于控制器的弹性，在模块初始化时连接到功率计的重试次数。'
      },
      resilience_initial_connection_retry_delay: {
        description: '对于控制器的弹性，在模块初始化时重试尝试前的延迟（毫秒）。'
      },
      resilience_transaction_request_retries: {
        description: '对于控制器的弹性，在交易开始或停止请求时连接到功率计的重试次数。'
      },
      resilience_transaction_request_retry_delay: {
        description: '对于控制器的弹性，在交易开始或停止请求时重试尝试前的延迟（毫秒）。'
      },
      tariff_id: {
        description: '用于唯一交易费率标识'
      }
    },
    description: '通过HTTP实现的LEM DCBM 400/600功率计驱动程序适配器模块。',
    provides: { main: { description: '这是模块的主要单元' } }
  },
  MicroMegaWattBSP: {
    config: {
      baud_rate: {
        description: '与uMWC硬件通信时使用的串行波特率'
      },
      connector_id: { description: '连接器ID' },
      dc_max_voltage: { description: '支持的最大电压' },
      reset_gpio: { description: '用于重置uMWC的GPIO线路' },
      reset_gpio_chip: {
        description: '用于硬件重置uMWC的重置GPIO芯片。如果设置为空字符串，则禁用。'
      },
      serial_port: { description: 'uMWC硬件连接的串行端口' }
    },
    description: 'Micro Mega Watt DC充电测试仪v1.0的驱动模块',
    provides: {
      board_support: {
        description: '提供低级控制控制 pilot、继电器、RCB 的板级支持接口'
      },
      dc_supply: { description: 'DC/DC输出电源的接口' },
      powermeter: { description: '功率计的接口' }
    }
  },
  OCPP: {
    config: {
      ChargePointConfigPath: {
        description: 'OCPP配置文件的路径。Libocpp为该文件定义了一个JSON模式。请参考libocpp文档以获取更多配置选项的信息。'
      },
      DatabasePath: {
        description: '持久化SQLite数据库目录的路径。请参考libocpp文档以获取更多数据库及其结构的信息。'
      },
      DelayOcppStart: {
        description: '启动OCPP充电点的小延迟时间（毫秒），以允许EVerest其余部分更新连接器状态。这仅用于防止在重启时出现可用性问题。'
      },
      EnableExternalWebsocketControl: {
        description: '如果为true，websocket可以被外部断开和连接。此参数仅用于调试和测试目的。'
      },
      MessageLogPath: {
        description: '所有OCPP消息日志写入的目录路径'
      },
      MessageQueueResumeDelay: {
        description: '重新连接后延迟恢复消息队列的时间（秒）。引入此参数是因为某些OCTT测试案例要求在重新连接后第一条消息由CSMS发送。'
      },
      PublishChargingScheduleDurationS: {
        description: '定义从现在开始请求的充电计划的持续时间（秒）'
      },
      PublishChargingScheduleIntervalS: {
        description: '从OCPP接收的充电计划通过MQTT发布并通知连接模块的时间间隔（秒）。如果该值设置为0，则仅在CSMS更改时发布充电计划'
      },
      RequestCompositeScheduleUnit: {
        description: '复合计划在EVerest中请求和共享的单位。建议AC使用安培，DC使用瓦特。允许的值：\n' +
          "  - 'A' 表示安培\n" +
          "  - 'W' 表示瓦特"
      },
      ResetStopDelay: {
        description: "停止充电点的延迟时间（秒），以便CSMS有足够的时间在重置前响应充电点的最后消息。"
      },
      UserConfigPath: {
        description: 'OCPP用户配置文件的路径。用户配置用作ChargePointConfigPath定义的原始配置的覆盖。任何内部或由CSMS更改的配置键将被写入用户配置文件。'
      }
    },
    description: '一个OCPP充电点/充电站模块，目前针对OCPP-J 1.6',
    provides: {
      auth_provider: { description: '提供来自OCPP的认证令牌' },
      auth_validator: { description: '使用OCPP验证提供的认证令牌' },
      data_transfer: { description: 'OCPP数据传输到CSMS' },
      main: { description: '这是一个OCPP 1.6充电点' },
      ocpp_generic: { description: '通用OCPP接口。' },
      session_cost: { description: '发送会话费用' }
    }
  },
  OCPP201: {
    config: {
      CompositeScheduleIntervalS: {
        description: '从libocpp接收的复合计划通过MQTT发布并通知连接模块的时间间隔（秒）。如果该值设置为0，则仅在CSMS更改时发布复合计划'
      },
      CoreDatabasePath: {
        description: '持久化SQLite数据库目录的路径。请参考libocpp文档以获取更多数据库及其结构的信息。'
      },
      DelayOcppStart: {
        description: '启动OCPP充电点的小延迟时间（毫秒），以允许EVerest其余部分更新连接器状态。这仅用于防止在重启时出现可用性问题。'
      },
      DeviceModelConfigPath: {
        description: '设备模型组件配置目录的路径。Libocpp为这些文件定义了特定的模式。请参考libocpp文档以获取更多配置选项的信息。'
      },
      DeviceModelDatabaseMigrationPath: {
        description: '设备模型的迁移文件路径'
      },
      DeviceModelDatabasePath: {
        description: '设备模型的SQLite数据库路径'
      },
      EnableExternalWebsocketControl: {
        description: '如果为true，websocket可以被外部断开和连接。此参数仅用于调试和测试目的。'
      },
      EverestDeviceModelDatabasePath: {
        description: 'EVerest设备模型的SQLite数据库路径。该数据库存储与EVerest核心密切相关的组件和变量，因此不由libocpp拥有和管理。'
      },
      MessageLogPath: {
        description: '所有OCPP消息日志写入的目录路径'
      },
      MessageQueueResumeDelay: {
        description: '重新连接后延迟恢复消息队列的时间（秒）。引入此参数是因为某些OCTT测试案例要求在重新连接后第一条消息由CSMS发送。'
      },
      RequestCompositeScheduleDurationS: {
        description: '请求复合计划的时间（秒）。计划从现在开始请求到现在 + RequestCompositeScheduleDurationS'
      },
      RequestCompositeScheduleUnit: {
        description: '复合计划在EVerest中请求和共享的单位。建议AC使用安培，DC使用瓦特。允许的值：\n' +
          "  - 'A' 表示安培\n" +
          "  . 'W' 表示瓦特"
      }
    },
    description: '用于OCPP 2.0.1的OCPP充电点/充电站模块',
    provides: {
      auth_provider: { description: '提供来自CSMS的授权请求' },
      auth_validator: {
        description: '使用CSMS、授权列表或授权缓存验证提供的令牌'
      },
      data_transfer: { description: 'OCPP数据传输到CSMS' },
      ocpp_generic: { description: '通用OCPP接口。' },
      session_cost: { description: '发送会话费用' }
    }
  },
  OCPPExtensionExample: {
    config: {
      keys_to_monitor: {
        description: '应监控的键的逗号分隔列表'
      }
    },
    description: '这是一个示例模块，展示了如何使用DataTransfer功能和自定义配置键扩展EVerest的OCPP模块',
    provides: { data_transfer: { description: 'OCPP数据传输' } }
  },
  OVMSimulator: {
    description: 'DC充电的过电压监视器的SIL实现',
    provides: {
      main: {
        config: {
          simulate_error: {
            description: '设置为true以在充电期间抛出过电压错误'
          },
          simulate_error_delay: {
            description: '在开始充电N秒后模拟过电压错误'
          }
        },
        description: 'OVM的主要接口'
      }
    }
  },
  PN532TokenProvider: {
    description: 'PN532 RFID/NFC令牌提供程序，一旦读卡器能够读取标签就会返回令牌',
    provides: {
      main: {
        config: {
          baud_rate: {
            description: '与PN532硬件通信时使用的串行波特率'
          },
          debug: { description: '在命令行上显示调试输出。' },
          read_timeout: { description: '连续卡片读取之间的时间（以秒为单位）' },
          serial_port: {
            description: 'PN532硬件连接的串行端口'
          }
        },
        description: 'PN532 RFID/NFC令牌提供程序的实现'
      }
    }
  },
  PN7160TokenProvider: {
    description: 'PN7160 RFID/NFC令牌提供程序，一旦读卡器能够读取标签就会返回令牌',
    provides: {
      main: {
        config: {
          debug: { description: '在命令行上显示调试输出。' },
          disable_nfc_rfid: { description: '禁用NFC RFID读卡器' },
          token_debounce_interval_ms: {
            description: '下次令牌发布之间的最小等待时间（毫秒）（去抖动间隔）。'
          }
        },
        description: 'PN7160 RFID/NFC令牌提供程序的实现'
      }
    }
  },
  PacketSniffer: {
    config: {
      device: {
        description: '捕获消息的以太网设备'
      },
      session_logging_path: {
        description: '会话捕获转储文件的输出目录'
      }
    },
    description: '使用“PacketSniffer”EVerest模块可以捕获和存储PLC接口上的不同数据包。',
    provides: { main: { description: 'EVerest API' } }
  },
  PersistentStore: {
    config: {
      sqlite_db_file_path: { description: 'SQLite数据库文件的路径。' }
    },
    description: '简单的SQLite支持的持久键值存储实现',
    provides: {
      main: { description: '这实现了持久键值存储' }
    }
  },
  PhyVersoBSP: {
    config: {
      baud_rate: {
        description: '与硬件通信时使用的串行波特率'
      },
      conn1_dc: { description: '如果为DC则设置为true，如果为AC则设置为false' },
      conn1_gpio_stop_button_bank: {
        description: '连接器1停止按钮的GPIO外设银行'
      },
      conn1_gpio_stop_button_enabled: {
        description: '如果设置为true，则启用外部充电停止按钮，连接器1的GPIO连接到SOM'
      },
      conn1_gpio_stop_button_invert: { description: '如果设置为true，则反转引脚逻辑' },
      conn1_gpio_stop_button_pin: {
        description: '连接器1停止按钮的GPIO外设引脚'
      },
      conn1_has_socket: {
        description: '如果具有插座则设置为true，如果具有永久连接的电缆则设置为false'
      },
      conn1_max_current_A_export: { description: '最大导出电流（安培）' },
      conn1_max_current_A_import: { description: '最大导入电流（安培）' },
      conn1_max_phase_count_export: { description: '导出的最大相数' },
      conn1_max_phase_count_import: { description: '导入的最大相数' },
      conn1_min_current_A_export: { description: '最小导出电流（安培）' },
      conn1_min_current_A_import: { description: '最小导入电流（安培）' },
      conn1_min_phase_count_export: { description: '导出的最小相数' },
      conn1_min_phase_count_import: { description: '导入的最小相数' },
      conn1_motor_lock_type: {
        description: '连接器1电机锁类型；1 == Hella样式基于时间的锁，2 == Valeo电位器反馈式'
      },
      conn2_dc: { description: '如果为DC则设置为true，如果为AC则设置为false' },
      conn2_gpio_stop_button_bank: {
        description: '连接器2停止按钮的GPIO外设银行'
      },
      conn2_gpio_stop_button_enabled: {
        description: '如果设置为true，则启用外部充电停止按钮，连接器2的GPIO连接到SOM'
      },
      conn2_gpio_stop_button_invert: { description: '如果设置为true，则反转引脚逻辑' },
      conn2_gpio_stop_button_pin: {
        description: '连接器2停止按钮的GPIO外设引脚'
      },
      conn2_has_socket: {
        description: '如果具有插座则设置为true，如果具有永久连接的电缆则设置为false'
      },
      conn2_max_current_A_export: { description: '最大导出电流（安培）' },
      conn2_max_current_A_import: { description: '最大导入电流（安培）' },
      conn2_max_phase_count_export: { description: '导出的最大相数' },
      conn2_max_phase_count_import: { description: '导入的最大相数' },
      conn2_min_current_A_export: { description: '最小导出电流（安培）' },
      conn2_min_current_A_import: { description: '最小导入电流（安培）' },
      conn2_min_phase_count_export: { description: '导出的最小相数' },
      conn2_min_phase_count_import: { description: '导入的最小相数' },
      conn2_motor_lock_type: {
        description: '连接器2电机锁类型；1 == Hella样式基于时间的锁，2 == Valeo电位器反馈式'
      },
      reset_gpio: {
        description: '如果设置<0则禁用。如果>0，则使用配置的reset_gpio_bank和reset_gpio_pin配置进行MCU的硬件复位'
      },
      reset_gpio_bank: {
        description: 'MCU的nRST引脚映射到的GPIO外设银行'
      },
      reset_gpio_pin: {
        description: 'MCU的nRST引脚映射到的GPIO外设引脚'
      },
      serial_port: { description: '硬件连接的串行端口' }
    },
    description: '用于Phytec PhyVerso EV充电控制器的驱动模块，使用Pionix MCU固件',
    provides: {
      connector_1: {
        description: '提供板级支持接口，用于低级控制接近和控制pilot、继电器和电机锁'
      },
      connector_2: {
        description: '提供板级支持接口，用于低级控制接近和控制pilot、继电器和电机锁'
      },
      connector_lock_1: { description: '锁接口' },
      connector_lock_2: { description: '锁接口' },
      phyverso_mcu_temperature: { description: 'MCU的温度' },
      rcd_1: { description: '内置RCB的接口' },
      rcd_2: { description: '内置RCB的接口' },
      system_specific_data_1: { description: '来自连接器1的不透明数据块' },
      system_specific_data_2: { description: '来自连接器2的不透明数据块' }
    }
  },
  PyEvJosev: {
    config: {
      device: {
        description: '用于HLC的以太网设备。任何具有ipv6链路本地和MAC地址的本地接口都可以使用。'
      },
      enable_tls_1_3: { description: 'EVCC将启用TLS版本1.3' },
      enforce_tls: { description: 'EVCC将强制TLS连接' },
      is_cert_install_needed: {
        description: '如果为true，则通过EVSE安装合同证书。任何现有的合同证书也将被覆盖。'
      },
      supported_DIN70121: { description: 'EVSE支持DIN SPEC' },
      supported_ISO15118_2: { description: 'EVSE支持ISO15118-2' },
      supported_ISO15118_20_AC: { description: 'EVSE支持ISO15118-20 AC' },
      supported_ISO15118_20_DC: { description: 'EVSE支持ISO15118-20 DC' },
      tls_active: { description: '如果为true，EVCC作为TLS客户端连接到SECC' }
    },
    description: '此模块实现了使用Josev项目DIN70121、ISO15118-2和ISO15118-20 EV。',
    provides: {
      ev: {
        description: '此模块实现了ISO15118-2的EV实现'
      }
    }
  },
  PyExampleErrorRaiser: {
    description: '用Python编写的简单示例模块，用于演示在引发方的错误处理',
    provides: {
      example_raiser: { description: '这实现了示例接口' }
    }
  },
  PyExampleErrorSubscriber: {
    description: '用Python编写的简单示例模块，用于演示在订阅方的错误框架',
    provides: {
      example_subscriber: { description: '这实现了示例接口' }
    }
  },
  SerialCommHub: {
    description: '与连接的串行设备通信的中心',
    provides: {
      main: {
        config: {
          baudrate: { description: '波特率' },
          ignore_echo: {
            description: '在某些硬件上，发送的每条消息都会被读回，此设置会过滤回复中的发送消息。'
          },
          initial_timeout_ms: { description: '第一个数据包的超时时间（毫秒）。' },
          max_packet_size: {
            description: '读/写数据包的最大大小（以字节为单位）。超过大小的负载将被分块。根据[wikipedia](https://en.wikipedia.org/wiki/Modbus)的APU大小为256字节，这里使用默认值。'
          },
          parity: { description: '奇偶校验位：0: 无, 1: 奇数, 2: 偶数' },
          retries: {
            description: '在Modbus查询中出现错误时的重试次数。'
          },
          rtscts: { description: '使用RTS/CTS硬件流控制' },
          rxtx_gpio_chip: {
            description: '用于在RX/TX之间切换的GPIO芯片。空字符串禁用GPIO使用。'
          },
          rxtx_gpio_line: { description: '用于在RX/TX之间切换的GPIO线路' },
          rxtx_gpio_tx_high: {
            description: 'GPIO方向，false表示TX时低电平，true表示TX时高电平'
          },
          serial_port: { description: '硬件连接的串行端口' },
          within_message_timeout_ms: { description: '后续数据包的超时时间（毫秒）。' }
        },
        description: '串行通信中心的实现'
      }
    }
  },
  Setup: {
    config: {
      ap_interface: { description: 'AP模式的WiFi接口' },
      ap_ipv4: { description: 'AP的IPv4地址' },
      initialized_by_default: {
        description: '始终报告为充电器已初始化'
      },
      localization: { description: '启用本地化支持' },
      online_check_host: {
        description: '用于检查互联网连接的主机名或IP'
      },
      release_metadata_file: {
        description: '相对于EVerest前缀的发布元数据文件位置'
      },
      setup_simulation: { description: '允许模拟设置' },
      setup_wifi: { description: '允许WiFi设置' }
    },
    description: '用于设置LAN或WiFi网络连接的EVerest设置模块。此模块需要特权访问，不应在正常运行时运行',
    provides: { main: { description: 'EVerest设置' } }
  },
  SlacSimulator: {
    description: '根据ISO15118-3的SLAC数据链路协商的SIL实现。',
    provides: {
      ev: { description: 'EV侧的SLAC接口实现' },
      evse: { description: 'EVSE侧的SLAC接口实现' }
    }
  },
  StaticISO15118VASProvider: {
    config: {
      service_file: { description: '服务yaml文件的路径' }
    },
    description: '此模块提供在yaml文件中定义的静态ISO15118增值服务（VAS）',
    provides: {
      iso15118_vas: { description: '从yaml文件解析的自定义VAS' }
    }
  },
  Store: {
    description: '简单的内存支持的键值存储实现',
    provides: { main: { description: '这实现了键值存储' } }
  },
  System: {
    config: {
      DefaultRetries: {
        description: '指定充电点在失败后尝试上传或下载文件的次数。'
      },
      DefaultRetryInterval: {
        description: '指定在失败后尝试上传或下载的间隔时间（秒）。'
      },
      ResetDelay: {
        description: '当收到重置请求时，实际执行可以延迟此时间（以秒为单位）。这可能是必要的，例如，当重置请求通过网络到达时，需要给调用方返回路径一些时间来发送调用确认。默认为零，表示立即执行重置，不延迟。'
      }
    },
    description: '此模块实现系统级操作',
    provides: { main: { description: '实现系统接口' } }
  },
  TerminalCostAndPriceMessage: {
    description: '成本和价格消息模块示例',
    provides: { main: { description: 'EVerest API' } }
  },
  TerminalDisplayMessage: {
    description: '显示消息模块示例',
    provides: { display_message: { description: '显示消息的模块' } }
  },
  TestErrorHandling: {
    description: '定义一个使用命令错误处理功能的模块',
    provides: {
      main: {
        description: '这实现了提供错误处理功能控制的接口'
      }
    }
  },
  YetiDriver: {
    config: {
      baud_rate: {
        description: '与Yeti硬件通信时使用的串行波特率'
      },
      caps_max_current_A: {
        description: 'AC侧的最大电流。对于AC这通常是16或32，但对于HLC可能更少。-1表示使用硬件报告的限制。'
      },
      caps_min_current_A: {
        description: 'AC侧的最小电流。对于AC这通常是6，但对于HLC可能更少。-1表示使用硬件报告的限制。'
      },
      reset_gpio: { description: '用于重置Yeti的GPIO线路' },
      reset_gpio_chip: {
        description: '用于硬件重置Yeti的重置GPIO芯片。如果设置为空字符串，则禁用。'
      },
      serial_port: { description: 'Yeti硬件连接的串行端口' }
    },
    description: 'Yeti硬件v1.0的驱动模块',
    provides: {
      board_support: {
        description: '提供低级控制控制pilot、继电器、电机锁的板级支持接口'
      },
      connector_lock: { description: '电机锁的接口' },
      powermeter: { description: '提供Yeti内部功率计' },
      rcd: { description: '内置RCB的接口' }
    }
  },
  YetiEvDriver: {
    config: {
      baud_rate: {
        description: '与Yeti硬件通信时使用的串行波特率'
      },
      reset_gpio: {
        description: '用于硬件重置Yeti的重置GPIO编号。如果设置<0则禁用。'
      },
      serial_port: { description: 'Yeti硬件连接的串行端口' }
    },
    description: 'Yeti硬件EV侧的驱动模块',
    provides: {
      ev_board_support: {
        description: '提供低级控制控制pilot、继电器、RCB的板级支持接口'
      }
    }
  },
  YetiSimulator: {
    config: {
      connector_id: {
        description: '与此模拟器连接的evse管理器的连接器ID'
      },
      reset_powermeter_on_session_start: {
        description: '当CP从状态A变为B时，将绝对功率计读数重置为零'
      }
    },
    description: 'Yeti硬件v1.0的SIL模拟器',
    provides: {
      board_support: {
        description: '提供低级控制pilot、继电器、RCB、电机锁的EVSE板级支持接口'
      },
      connector_lock: { description: '模拟连接器锁的接口' },
      ev_board_support: {
        description: '提供低级控制pilot、继电器、RCB的EV板级支持接口'
      },
      powermeter: { description: '提供Yeti内部功率计' },
      rcd: { description: '模拟AC RCD的接口' }
    }
  }
} as const;
