// SPDX-License-Identifier: Apache-2.0
// Copyright 2020 - 2025 Pionix GmbH and Contributors to EVerest

/* eslint-disable prettier/prettier */
export default {
  API: {
    config: {
      charger_information_file: {
        description: 'Pfad zu einer Datei die Informationen über den Ladepunkt wie seine Seriennummer enthält'
      },
      hw_caps_max_current_export_decimal_places: {
        description: 'Maximale Anzahl an Nachkommastellen für maximale Exportstromstärke in den Hardwarekapazitäten'
      },
      hw_caps_max_current_export_round_to: {
        description: 'Runden Sie den maximalen Exportstrom in Hardware-Limits auf den nächsten Schritt. Ignoriert wenn der Wert 0 ist'
      },
      hw_caps_max_current_import_decimal_places: {
        description: 'Maximale Anzahl an Nachkommastellen für maximale Importstromstärke in den Hardwarekapazitäten'
      },
      hw_caps_max_current_import_round_to: {
        description: 'Runden Sie den maximalen Importstrom in Hardware-Limits auf den nächsten Schritt. Ignoriert wenn der Wert 0 ist'
      },
      hw_caps_max_plug_temperature_C_decimal_places: {
        description: 'Maximale Anzahl an Nachkommastellen für max_plug_temperature_C in den Hardwarekapazitäten'
      },
      hw_caps_max_plug_temperature_C_round_to: {
        description: 'Runden Sie max_plug_temperature_C in Hardware-Limits auf den nächsten Schritt. Ignoriert wenn der Wert 0 ist'
      },
      hw_caps_min_current_export_decimal_places: {
        description: 'Maximale Anzahl an Nachkommastellen für minimalen Exportstrom in den Hardwarekapazitäten'
      },
      hw_caps_min_current_export_round_to: {
        description: 'Runden Sie den minimalen Exportstrom in Hardware-Limits auf den nächsten Schritt. Ignoriert wenn der Wert 0 ist'
      },
      hw_caps_min_current_import_decimal_places: {
        description: 'Maximale Anzahl an Nachkommastellen für minimalen Importstrom in den Hardwarekapazitäten'
      },
      hw_caps_min_current_import_round_to: {
        description: 'Runden Sie den minimalen Importstrom in Hardware-Limits auf den nächsten Schritt. Ignoriert wenn der Wert 0 ist'
      },
      limits_max_current_decimal_places: {
        description: 'Maximale Anzahl an Nachkommastellen für maximale Stromstärke in den Grenzwerten'
      },
      limits_max_current_round_to: {
        description: 'Runden Sie den maximalen Strom in den Grenzwerten auf den nächsten Schritt. Ignoriert wenn der Wert 0 ist'
      },
      powermeter_VAR_decimal_places: {
        description: 'Maximale Anzahl an Nachkommastellen für VAR im Leistungsmesser'
      },
      powermeter_VAR_round_to: {
        description: 'Runden Sie VAR auf den nächsten Schritt. Ignoriert wenn der Wert 0 ist'
      },
      powermeter_current_decimal_places: {
        description: 'Maximale Anzahl an Nachkommastellen für Strom im Leistungsmesser'
      },
      powermeter_current_round_to: {
        description: 'Runden Sie Strom auf den nächsten Schritt. Ignoriert wenn der Wert 0 ist'
      },
      powermeter_energy_export_decimal_places: {
        description: 'Maximale Anzahl an Nachkommastellen für Exportenergie im Leistungsmesser'
      },
      powermeter_energy_export_round_to: {
        description: 'Runden Sie Exportenergie auf den nächsten Schritt. Ignoriert wenn der Wert 0 ist'
      },
      powermeter_energy_import_decimal_places: {
        description: 'Maximale Anzahl an Nachkommastellen für Importenergie im Leistungsmesser'
      },
      powermeter_energy_import_round_to: {
        description: 'Runden Sie Importenergie auf den nächsten Schritt. Ignoriert wenn der Wert 0 ist'
      },
      powermeter_frequency_decimal_places: {
        description: 'Maximale Anzahl an Nachkommastellen für Frequenz im Leistungsmesser'
      },
      powermeter_frequency_round_to: {
        description: 'Runden Sie Frequenz auf den nächsten Schritt. Ignoriert wenn der Wert 0 ist'
      },
      powermeter_power_decimal_places: {
        description: 'Maximale Anzahl an Nachkommastellen für Leistung im Leistungsmesser'
      },
      powermeter_power_round_to: {
        description: 'Runden Sie Leistung auf den nächsten Schritt. Ignoriert wenn der Wert 0 ist'
      },
      powermeter_voltage_decimal_places: {
        description: 'Maximale Anzahl an Nachkommastellen für Spannung im Leistungsmesser'
      },
      powermeter_voltage_round_to: {
        description: 'Runden Sie Spannung auf den nächsten Schritt. Ignoriert wenn der Wert 0 ist'
      },
      telemetry_evse_temperature_C_decimal_places: {
        description: 'Maximale Anzahl an Nachkommastellen für evse_temperature_C in der Telemetrie'
      },
      telemetry_evse_temperature_C_round_to: {
        description: 'Runden Sie evse_temperature_C in der Telemetrie auf den nächsten Schritt. Ignoriert wenn der Wert 0 ist'
      },
      telemetry_fan_rpm_decimal_places: {
        description: 'Maximale Anzahl an Nachkommastellen für Lüfter-RPM in der Telemetrie'
      },
      telemetry_fan_rpm_round_to: {
        description: 'Runden Sie Lüfter-RPM in der Telemetrie auf den nächsten Schritt. Ignoriert wenn der Wert 0 ist'
      },
      telemetry_plug_temperature_C_decimal_places: {
        description: 'Maximale Anzahl an Nachkommastellen für RCD-Strom in der Telemetrie'
      },
      telemetry_plug_temperature_C_round_to: {
        description: 'Runden Sie plug_temperature_C in der Telemetrie auf den nächsten Schritt. Ignoriert wenn der Wert 0 ist'
      },
      telemetry_supply_voltage_12V_decimal_places: {
        description: 'Maximale Anzahl an Nachkommastellen für Versorgungsspannung 12V in der Telemetrie'
      },
      telemetry_supply_voltage_12V_round_to: {
        description: 'Runden Sie Versorgungsspannung 12V in der Telemetrie auf den nächsten Schritt. Ignoriert wenn der Wert 0 ist'
      },
      telemetry_supply_voltage_minus_12V_decimal_places: {
        description: 'Maximale Anzahl an Nachkommastellen für Versorgungsspannung -12V in der Telemetrie'
      },
      telemetry_supply_voltage_minus_12V_round_to: {
        description: 'Runden Sie Versorgungsspannung -12V in der Telemetrie auf den nächsten Schritt. Ignoriert wenn der Wert 0 ist'
      }
    },
    description: 'Das EVerest API-Modul das einige interne Funktionen über eine externe MQTT-Verbindung verfügbar macht.',
    provides: { main: { description: 'EVerest API' } }
  },
  AdAcEvse22KwzKitBSP: {
    config: {
      baud_rate: {
        description: 'Serielle Baudrate zur Kommunikation mit dem AD-ACEVSE22KWZ-KIT'
      },
      caps_max_current_A: {
        description: 'Maximale Stromstärke an der AC-Seite. Für AC ist dies typischerweise 16 oder 32, aber für HLC kann dies weniger sein. -1 bedeutet die vom HW gemeldete Grenze zu verwenden.'
      },
      caps_min_current_A: {
        description: 'Minimale Stromstärke an der AC-Seite. Für AC ist dies typischerweise 6, aber für HLC kann dies weniger sein. -1 bedeutet die vom HW gemeldete Grenze zu verwenden.'
      },
      reset_gpio: { description: 'GPIO-Linie zur Zurücksetzung des AD-ACEVSE22KWZ-KIT' },
      reset_gpio_chip: {
        description: 'Reset GPIO-Chip zur HW-Zurücksetzung des AD-ACEVSE22KWZ-KIT. Wenn auf leere Zeichenkette gesetzt ist es deaktiviert.'
      },
      serial_port: {
        description: 'Serieller Port an dem das AD-ACEVSE22KWZ-KIT angeschlossen ist'
      }
    },
    description: 'Board Support Package-Modul für das AD-ACEVSE22KWZ-KIT-Referenzdesign',
    provides: {
      board_support: {
        description: 'Stellt die Board-Support-Schnittstelle für die Steuerung der Pilotleitungen, Relais, Motorverriegelung bereit'
      },
      powermeter: {
        description: 'Stellt den internen Leistungsmesser des AD-ACEVSE22KWZ-KIT bereit'
      }
    }
  },
  Auth: {
    config: {
      connection_timeout: {
        description: 'Definiert wie viele Sekunden eine Autorisierung gültig ist bevor sie verworfen wird. Definiert wie viele Sekunden ein Benutzer nach dem Einstecken eines Autos eine Autorisierung bereitstellen kann'
      },
      ignore_connector_faults: {
        description: 'Boolescher Wert zur Beschreibung der Behandlung von Fehlern an Steckdosen.\n' +
          'Wenn wahr werden Fehler die an Steckdosen gemeldet werden ignoriert, d.h. sie können immer noch autorisiert werden. Dies sollte in den meisten Fällen deaktiviert werden, aber z.B. in freien Ladepunkten kann es nützlich sein eine Ladungssitzung zu ermöglichen, wenn: Eine Steckdose z.B. einen Überhitzungsfehler hat der sich mit der Zeit auflöst sobald sie abgekühlt ist. Ein Auto wird vor dem Löschen des Fehlers eingesteckt. Der Benutzer würde erwarten dass die Ladung beginnt sobald sie abgekühlt ist. Wenn diese Option auf falsch gesetzt ist wird sie nicht auf der fehlerhaften Steckdose autorisiert, da die Steckdose sich im Fehlerzustand befindet und sich nie von selbst erholen wird bis das Auto erneut eingesteckt wird. Wenn sie auf wahr gesetzt ist erfolgt die Autorisierung auf der fehlerhaften Steckdose und die Ladung beginnt sobald der Fehler beseitigt ist.\n' +
          'Wenn falsch werden fehlerhafte Steckdosen als nicht verfügbar behandelt und werden nicht autorisiert. Dies ist eine gute Einstellung für z.B. öffentliche Ladepunkte.'
      },
      master_pass_group_id: {
        description: 'IdTokens die diese id als groupId haben gehören zur Master Pass Group. Das bedeutet sie können jede laufende Transaktion beenden, aber keine Transaktionen starten. Dies kann z.B. von Behörden zur Beendigung jeder laufenden Transaktion verwendet werden, wenn ein EV abgeschleppt werden muss. Wenn leer gelassen wird master_pass_group_id nicht verwendet.'
      },
      prioritize_authorization_over_stopping_transaction: {
        description: 'Boolescher Wert zur Beschreibung der Behandlung von Parent-Id-Tokens.\n' +
          'Wenn wahr wird ein neuer Token vorzugsweise für die Autorisierung eines neuen Steckdosen verwendet wenn eine Steckdose verfügbar ist. Er wird nicht verwendet um eine Transaktion mit seinem parent_id_token zu beenden. parent_id_token wird nur verwendet um eine Transaktion zu beenden wenn keine Steckdose mehr für die Autorisierung verfügbar ist.\n' +
          'Wenn falsch wird ein neuer Token verwendet um eine Transaktion zu beenden wenn das parent_id_token einer aktuellen Transaktion mit dem parent_id_token des bereitgestellten Tokens übereinstimmt. Autorisierung für verfügbare Steckdosen wird nur bereitgestellt wenn keine Transaktion mit dem gegebenen parent_id_token gestoppt werden kann'
      },
      selection_algorithm: {
        description: 'Der Auswahlalgorithmus enthält die Logik zur Auswahl einer Steckdose für einen eingehenden Token. In Fällen in denen der Ladepunkt nur eine Steckdose hat ist die Auswahl einer Steckdose ziemlich einfach da es nur eine gibt die verfügbar ist. Der Auswahlalgorithmus wird relevant wenn das Auth-Modul Autorisierungsanfragen für mehrere Steckdosen verwaltet. Folgende Werte können gesetzt werden: PlugEvents: Auswahl der Steckdose basierend auf EV-Einsteckereignissen FindFirst: Wählt einfach die erste verfügbare Steckdose aus die keine aktive Transaktion hat UserInput: Platzhalter noch nicht implementiert'
      }
    },
    description: 'Dieses Modul implementiert die Authentifizierungsabwicklung für EVerest. Es ist dafür verantwortlich Autorisierung an die verbundenen Evse-Manager zu vergeben. Zusätzlich behandelt es die Reservierungsverwaltung.',
    provides: {
      main: { description: 'Dies implementiert die Auth-Schnittstelle für EVerest' },
      reservation: {
        description: 'Dies implementiert die Reservierungs-Schnittstelle für EVerest.'
      }
    }
  },
  DCSupplySimulator: {
    description: 'Implementierung einer programmierbaren Stromversorgung für DC-Ladung',
    provides: {
      main: {
        config: {
          bidirectional: { description: 'Auf true setzen für bidirektionale Versorgung' },
          max_current: { description: 'Maximale unterstützte Stromstärke' },
          max_power: { description: 'Maximale unterstützte Leistung in Watt' },
          max_voltage: { description: 'Maximale unterstützte Spannung' },
          min_current: { description: 'Minimale unterstützte Stromstärke' },
          min_voltage: { description: 'Minimale unterstützte Spannung' }
        },
        description: 'Haupt-Schnittstelle für die Stromversorgung'
      },
      powermeter: { description: 'Leistungsmesser-Schnittstelle für Simulation' }
    }
  },
  DPM1000: {
    config: {
      current_limit_A: { description: 'Maximale Stromgrenze in Ampere' },
      debug_print_all_telemetry: {
        description: 'Alle Telemetriedaten vom Leistungsmodul lesen und ausgeben. Hilfreich bei der Fehlersuche.'
      },
      device: { description: 'Schnittstellenname für das CAN-Gerät' },
      device_address: {
        description: 'Geräteadresse (wie auf dem Front-LED-Panel ausgewählt)'
      },
      discharge_gpio_chip: {
        description: 'GPIO-Chip zur Steuerung der externen Entladebelastung ein- und auszuschalten. Ein leerer String deaktiviert das Entladen. Beachten Sie dass die Hardwarebelastung so konzipiert sein muss dass sie dauerhaft aus der höchsten Spannung (z.B. 1000V) entladen werden kann'
      },
      discharge_gpio_line: { description: 'GPIO-Linie zur Steuerung der Entladebelastung' },
      discharge_gpio_polarity: {
        description: 'GPIO-Polarität, false bedeutet aktiv niedrig, true bedeutet aktiv hoch'
      },
      power_limit_W: { description: 'Maximale Leistungsgrenze in Watt' },
      series_parallel_mode: {
        description: 'Wählen Sie den Serienmodus (300-1000V), Parallelmodus (50-500) oder automatischer Schaltmodus (50-1000). Dies schaltet die interne Konfiguration eines Moduls um und sollte nicht mit der parallelen Betrieb von mehreren Modulen verwechselt werden.'
      },
      voltage_limit_V: {
        description: 'Maximale Spannungsgrenze in Volt. Wird zusätzlich durch die Serien-Parallel-Einstellung begrenzt.'
      }
    },
    description: 'DC-Stromversorgungs-Treiber',
    provides: {
      main: {
        description: 'Stromversorgungs-Treiber für DPM 1000-30 von SCU Power. Unterstützt aktuell nur ein Modul.'
      }
    }
  },
  DummyBankSessionTokenProvider: {
    description: 'Dummy-Bank-Sitzungstoken-Anbieter',
    provides: {
      main: {
        config: {
          randomize: { description: 'Token-Zeichenkette zufällig zurückgeben' },
          token: { description: 'Dummy-Token-Zeichenkette zum Zurückgeben' }
        },
        description: 'Hauptimplementierung des Dummy-Bank-Sitzungstoken-Anbieters, der entweder immer einen konfigurierten Token oder jedes Mal einen echten UUID zurückgibt'
      }
    }
  },
  DummyTokenProvider: {
    description: 'Dummy-Token-Anbieter der auf das AuthRequired-Ereignis vom EvseManager hört und dann einen Token veröffentlicht',
    provides: {
      main: {
        config: {
          connector_id: {
            description: 'Wenn >0 ist der generierte Token nur für diese connector_id gültig'
          },
          timeout: { description: 'Zeitlimit für den Dummy-Token (in s)' },
          token: { description: 'Dummy-Token-Zeichenkette zum Zurückgeben' },
          type: { description: 'Typ der für unseren Dummy-Token berichtet wird' }
        },
        description: 'Hauptimplementierung des Dummy-Token-Anbieters der immer einen konfigurierten Token zurückgibt'
      }
    }
  },
  DummyTokenProviderManual: {
    description: 'Dummy-Token-Anbieter der manuell einen Token veröffentlicht',
    provides: {
      main: {
        config: {
          timeout: { description: 'Zeitlimit für den Dummy-Token (in s)' },
          token: { description: 'Dummy-Token-Zeichenkette zum Zurückgeben' },
          type: { description: 'Typ der für unseren Dummy-Token berichtet wird' }
        },
        description: 'Hauptimplementierung des Dummy-Token-Anbieters der immer einen konfigurierten Token zurückgibt'
      }
    }
  },
  DummyTokenValidator: {
    description: 'Dummy-Token-Validator der immer das gleiche konfigurierte Token-Validierungsergebnis für jeden Token zurückgibt',
    provides: {
      main: {
        config: {
          sleep: {
            description: 'Zeit die gewartet wird bevor das Dummy-Validierungsergebnis zurückgegeben wird (in s)'
          },
          validation_reason: { description: 'Dummy-Validierungsgrund zum Zurückgeben' },
          validation_result: { description: 'Dummy-Validierungsergebnis zum Zurückgeben' }
        },
        description: 'Hauptimplementierung des Dummy-Token-Validators der immer das gleiche konfigurierte Token-Validierungsergebnis für jeden Token zurückgibt'
      }
    }
  },
  DummyV2G: {
    description: 'Dieses Modul implementiert eine leere Dummy für HLC. Es kommuniziert nicht tatsächlich mit dem Auto.',
    provides: {
      main: {
        description: 'Dieses Modul implementiert die ISO15118-2-Implementierung eines AC- oder DC-Ladepunkts'
      }
    }
  },
  EnergyManager: {
    config: {
      debug: { description: 'Zeige Debug-Ausgabe auf der Kommandozeile.' },
      nominal_ac_voltage: {
        description: 'Nominale AC-Spannung zur Umrechnung von Ampere zu Watt an AC'
      },
      schedule_interval_duration: {
        description: 'Dauer des Zeitintervalls für Vorhersage [min]'
      },
      schedule_total_duration: { description: 'Gesamtdauer der Vorhersage [h]' },
      slice_ampere: {
        description: 'Ampere-Slice für Handel. Kleinere Werte führen zu gleichmäßiger Verteilung, aber erhöhen die Verarbeitungszeit [A].'
      },
      slice_watt: {
        description: 'Watt-Slice für Handel. Kleinere Werte führen zu gleichmäßiger Verteilung, aber erhöhen die Verarbeitungszeit [W].'
      },
      switch_3ph1ph_max_nr_of_switches_per_session: {
        description: 'Begrenzen Sie die maximale Anzahl von Umschaltungen zwischen 1ph und 3ph pro Ladungssitzung. Auf 0 setzen für keine Begrenzung.'
      },
      switch_3ph1ph_power_hysteresis_W: {
        description: 'Leistungs-basierte Hysteresis in Watt. Wenn z.B. auf 200W gesetzt, beträgt die Hysteresis für PWM-basierte Ladung 4.2kW bis 4.4kW. Die tatsächlichen Werte hängen von der konfigurierten nominalen AC-Spannung ab, und sie können in Zukunft unterschiedlich für PWM vs ISO-basierte Ladung sein.'
      },
      switch_3ph1ph_switch_limit_stickyness: {
        description: 'Wenn die maximale Anzahl von Umschaltungen zwischen 1ph und 3ph erreicht ist, wählen Sie aus was passieren soll:\n' +
          '  - SinglePhase: Wechseln Sie in den 1ph-Modus\n' +
          '  - ThreePhase: Wechseln Sie in den 3ph-Modus\n' +
          '  - DontChange: Bleiben Sie im aktuellen Modus'
      },
      switch_3ph1ph_time_hysteresis_s: {
        description: 'Zeit-basierte Hysteresis. Es wird nur auf 3 Phasen gewechselt, wenn die Bedingung zur Auswahl von 3 Phasen für die konfigurierte Anzahl von Sekunden stabil ist. Es wird immer direkt in den 1ph-Modus gewechselt, ohne auf diese Verzögerung zu warten. Auf 0 setzen, um die zeitbasierte Hysteresis zu deaktivieren.'
      },
      switch_3ph1ph_while_charging_mode: {
        description: 'Wenn unterstützt von BSP in den Kapazitäten zur Umschaltung zwischen drei Phasen und einer Phase und die Konfigurationsoption three_phases auf true gesetzt ist, steuert dies den Algorithmus:\n' +
          '  - Never: Verwenden Sie keine 1ph/3ph-Umschaltung, auch wenn sie vom BSP unterstützt wird\n' +
          '  - Oneway: Wechseln Sie nur von 3ph zu 1ph wenn die Leistung nicht ausreicht, aber nie zurück zu 3ph für eine Sitzung.\n' +
          '  - Both: Schalten Sie in beide Richtungen, d.h. von 3ph zu 1ph und zurück zu 3ph, wenn die verfügbare Leistung ändert'
      },
      update_interval: { description: 'Aktualisierungsintervall für Energieverteilung [s]' }
    },
    description: 'Dieses Modul ist der globale Energie-Manager für alle EVSE/Ladepunkte in diesem Gebäude',
    provides: { main: { description: 'Haupt-Schnittstelle des Energie-Managers' } }
  },
  EnergyNode: {
    config: {
      fuse_limit_A: {
        description: 'Schutzschalter-Grenze in Ampere für alle Phasen. Hinweis: Dies gilt immer zusätzlich zu Grenzen die über die externe_limits-Schnittstelle gesetzt werden.'
      },
      phase_count: {
        description: 'Phasenzahl-Grenze. Auslassen wenn in diesem Schutz nicht begrenzt.'
      }
    },
    description: 'Dieses Modul ist Teil des Energie-Baums und repräsentiert einen einfachen Stromschutz.',
    provides: {
      energy_grid: {
        description: 'Dies ist die Kettenschnittstelle zur Erstellung des Energie-Versorgungsbaums'
      },
      external_limits: {
        description: 'Zusätzliche externe Grenzen können über diese Schnittstelle gesetzt werden.'
      }
    }
  },
  ErrorHistory: {
    description: 'Dieses Modul bietet eine persistente Fehlerhistorie',
    provides: {
      error_history: {
        config: {
          database_path: { description: 'Absoluter Pfad zur Datenbankdatei' }
        },
        description: 'Fehlerhistorie'
      }
    }
  },
  EvAPI: {
    description: 'Das EVerest EV API-Modul das einige interne Funktionen über eine externe MQTT-Verbindung verfügbar macht.',
    provides: { main: { description: 'EVerest EV API' } }
  },
  EvManager: {
    config: {
      ac_nominal_voltage: {
        description: 'Nominale AC-Spannung zwischen Phase und Neutral in Volt'
      },
      auto_enable: {
        description: 'Aktivieren Sie diese Simulation direkt beim Start. Auf true setzen für reine SIL-Konfigurationen, auf false für HIL.'
      },
      auto_exec: {
        description: 'Aktivieren Sie die automatische Ausführung von Simulationsbefehlen beim Start aus der auto_exec_commands-Konfigurationsoption.'
      },
      auto_exec_commands: {
        description: 'Simulationsbefehle, z.B. sleep 1;iec_wait_pwr_ready;sleep 1;draw_power_regulated 16,3;sleep 30;unplug'
      },
      auto_exec_infinite: {
        description: 'Wenn aktiviert führt die Simulationsbefehle unendlich aus.'
      },
      connector_id: {
        description: 'Steckdosen-ID des Evse-Managers mit dem dieser Simulator verbunden ist'
      },
      dc_discharge_max_current_limit: { description: 'Maximale Entlade-Stromstärke die vom EV erlaubt ist' },
      dc_discharge_max_power_limit: { description: 'Maximale Entlade-Leistung die vom EV erlaubt ist' },
      dc_discharge_target_current: { description: 'Entlade-Zielstromstärke die vom EV angefordert wird' },
      dc_discharge_v2g_minimal_soc: {
        description: 'Minimale SOC bei der der EVSE heruntergefahren werden sollte'
      },
      dc_energy_capacity: { description: 'Energiefähigkeit des EV' },
      dc_max_current_limit: { description: 'Maximale Stromstärke die vom EV erlaubt ist' },
      dc_max_power_limit: { description: 'Maximale Leistung die vom EV erlaubt ist' },
      dc_max_voltage_limit: { description: 'Maximale Spannung die vom EV erlaubt ist' },
      dc_target_current: { description: 'Zielstromstärke die vom EV angefordert wird' },
      dc_target_voltage: { description: 'Zielspannung die vom EV angefordert wird' },
      departure_time: {
        description: 'Abreisezeit in Sekunden nach Beginn der Sitzung'
      },
      e_amount: {
        description: 'Energiewert in Wh der während der Sitzung geladen werden soll'
      },
      keep_cross_boot_plugin_state: {
        description: 'Behalten Sie den Plugin-Zustand über den Boot (nur für Simulation).'
      },
      max_current: { description: 'Ac max Stromstärke in Ampere' },
      soc: { description: 'SoC am Beginn eines simulierten Ladeprozesses' },
      support_sae_j2847: { description: 'Unterstützung von SAE J2847 ISO 2 bidi Version' },
      three_phases: { description: 'Unterstützung von drei Phasen' }
    },
    description: 'Dieses Modul implementiert einen Auto-Simulator der Ladungssitzungen mit der car_simulator-Schnittstelle durchführen kann.',
    provides: {
      ev_manager: {
        description: 'Implementierung des EV-Managers zur Bereitstellung zusätzlicher Informationen wie detaillierte EV-Informationen'
      },
      main: { description: 'Dies implementiert den Auto-Simulator' }
    }
  },
  EvSlac: {
    description: 'Implementierung der EV SLAC-Datentrennungsverhandlung gemäß ISO15118-3.',
    provides: {
      main: {
        config: {
          device: { description: 'Ethernet-Gerät das für PLC verwendet wird.' },
          set_key_timeout_ms: {
            description: 'Timeout für CM_SET_KEY.REQ. Standard funktioniert für QCA7000/QCA7005/CG5317.'
          }
        },
        description: 'SLAC-Schnittstellenimplementierung.'
      }
    }
  },
  Evse15118D20: {
    config: {
      custom_protocol_namespace: { description: 'Bereitstellung eines benutzerdefinierten Protokoll-Namespace.' },
      device: {
        description: 'Ethernet-Gerät das für HLC verwendet wird. Jede lokale Schnittstelle die eine ipv6-Link-lokale und eine MAC-Adresse hat funktioniert'
      },
      enable_sdp_server: { description: 'Aktivieren Sie den eingebauten SDP-Server' },
      enable_ssl_logging: { description: 'Ausführlich das SSL/TLS-Protokoll protokollieren' },
      enable_tls_key_logging: {
        description: 'Aktivieren/Deaktivieren Sie den Export von TLS-Sitzungsschlüsseln (Pre-Master-Secret) während eines TLS-Handshakes. Beachten Sie dass diese Option nur zu Test- und Simulationszwecken gedacht ist'
      },
      enforce_tls_1_3: {
        description: 'Erzwingen Sie TLS-Version 1.3. Gilt nur wenn tls_negotiation_strategy auf ENFORCE_TLS gesetzt ist.'
      },
      logging_path: {
        description: 'Pfad zum Protokollverzeichnis (wird erstellt wenn es nicht existiert)'
      },
      supported_dynamic_mode: { description: 'Der EVSE sollte dynamischen Modus unterstützen' },
      supported_mobility_needs_mode_provided_by_secc: {
        description: 'Der EVSE sollte den von der SECC bereitgestellten Mobilitätsbedürfnis-Modus unterstützen. Der von der EVCC bereitgestellte Mobilitätsbedürfnis-Modus wird immer bereitgestellt.'
      },
      supported_scheduled_mode: { description: 'Der EVSE sollte geplanten Modus unterstützen' },
      tls_key_logging_path: { description: 'Ausgabeverzeichnis für die TLS-Key-Log-Datei' },
      tls_negotiation_strategy: {
        description: 'Wählen Sie die Strategie zur Verhandlung der Verbindungsk Verschlüsselung'
      }
    },
    description: 'Dieses Modul ist eine Entwurfsimplementierung von iso15118-20 für die EVSE-Seite',
    provides: {
      charger: {
        description: 'Diese Schnittstelle bietet begrenzten Zugriff auf iso15118-20'
      },
      extensions: {
        description: 'Diese Schnittstelle wird verwendet um Daten zwischen ISO15118 und OCPP-Modulen auszutauschen um die Anforderungen des OCPP-Protokolls zu unterstützen'
      }
    }
  },
  EvseManager: {
    config: {
      ac_enforce_hlc: {
        description: 'Kombiniert mit der 5 Prozent-Option um HLC wirklich zu erzwingen, auch mit EIM. Es ist nicht ISO15118-2/-3-konform, da es auf das Matching wartet selbst wenn EIM verfügbar ist, bevor SLAC das Matching erreicht. Bei Autos die ISO15118 auf AC nicht unterstützen dauert dies sehr lange um den Timeout zu erreichen und auf die normale nominale PWM-Ladung zurückzugreifen, aber es wird letztendlich.'
      },
      ac_hlc_enabled: {
        description: 'Aktivieren oder deaktivieren Sie HLC (aka ISO15118) für AC-Modus'
      },
      ac_hlc_use_5percent: {
        description: 'Verwenden Sie 5 Prozent PWM-Signal um HLC auf AC zu erzwingen. Beachten Sie dass wenn EIM vor SLAC-Matching eintrifft, wir auf die normale PWM-Ladung zurückfallen. Die meisten Autos werden in diesem Modus nie HLC verwenden, besonders bei einem freien Service wo EIM immer verfügbar ist, aber das ist was ISO15118-2/-3 erfordert um konform zu sein - es will HLC nur für PnC und nicht für EIM verwenden.'
      },
      ac_nominal_voltage: {
        description: 'Nominale AC-Spannung zwischen Phase und Neutral in Volt'
      },
      ac_with_soc: {
        description: 'Spezieller Modus der zwischen AC- und DC-Ladung wechselt um SoC-Prozentsatz mit AC-Ladung zu erhalten'
      },
      autocharge_use_slac_instead_of_hlc: {
        description: 'Verwenden Sie SLAC EV MAC-Adresse für Autocharge anstelle von EVCCID aus HLC'
      },
      cable_check_enable_imd_self_test: {
        description: 'Aktivieren Sie die Selbstprüfung des IMD bei der Kabelprüfung. Dies ist erforderlich für IEC 61851-23 (2023) Compliance.'
      },
      cable_check_wait_below_60V_before_finish: {
        description: 'Schalten Sie die Stromversorgung aus und warten Sie bis die Ausgangsspannung unter 60V fällt bevor die Kabelprüfung abgeschlossen ist. Beachten Sie: Es gibt verschiedene Versionen von IEC 61851-23:2023 im Umlauf mit der gleichen Versionsnummer, aber leicht unterschiedlichem Inhalt. Die IEC korrigierte Fehler _nach_ der ursprünglichen Veröffentlichung ohne Taggen einer neuen Versionsnummer. Einige frühe Versionen erfordern dass Sie auf die Ausgangsspannung warten bis sie unter 60V fällt in CC.4.1.2 (letzte Satz). Spätere Versionen haben diese Anforderung nicht. Die späteren Versionen sind korrekt und sollten gemäß IEC verwendet werden. Auf true setzen wenn:\n' +
          '  - die Stromversorgung keine aktive Entladung hat und das Herunterschalten der Spannung ohne Last sehr lange dauert. In diesem Fall\n' +
          '    hilft diese Option normalerweise die Spannung schnell herunterzurampen indem sie ausgeschaltet wird. Sie wird wieder eingeschaltet in der Vorladung.\n' +
          '    Auch schalten einige EVs ihre interne Relais bei zu hoher Spannung ein wenn die Spannung direkt von der Kabelprüfungsspannung zur Vorladungsspannung abgesenkt wird,\n' +
          '    daher ist true die empfohlene Standardeinstellung.\n' +
          'Auf false setzen wenn:\n' +
          '  - die Stromversorgung aktive Entladung hat und schnell herunterschalten kann ohne auszuschalten (indem nur eine niedrigere Zielspannung gesetzt wird).\n' +
          '    Dies kann ein paar Sekunden sparen da es unnötige Spannungsab- und aufwärtsrampen vermeidet.'
      },
      cable_check_wait_number_of_imd_measurements: {
        description: 'Anzahl der Isolationsmessung-Samples die vor der Vertrauenswürdigkeit des Werts gesammelt werden. Dieses Verfahren wertet nicht aus, sondern bewertet die letzte Messung. Einige IMDs (z.B. von Bender) benötigen 10s um wirklich ein zuverlässiges Ergebnis zu erhalten. In diesem Fall bei 1 Hz Abtastrate geben Sie hier 10 Samples an.'
      },
      central_contract_validation_allowed: {
        description: 'Verwendet für ISO15118 Plug and Charge: Wenn falsch soll der Vertrag nicht in der PaymentOptionList vorhanden sein. Wenn wahr kann der Vertrag in der PaymentOptionList vorhanden sein wenn TLS verwendet wird.'
      },
      charge_mode: { description: 'Wählen Sie den Lademodus' },
      connector_id: { description: 'Steckdosen-ID dieses Evse-Managers' },
      connector_type: {
        description: 'Der Steckdosen-Typ dieses Evse-Managers (/evse_manager#/ConnectorTypeEnum)'
      },
      contract_certificate_installation_enabled: {
        description: 'Verwendet für ISO15118 Plug and Charge: Gibt an ob der Ladepunkt die VertragszertifikatInstall und CertificateUpdate unterstützt'
      },
      dbg_hlc_auth_after_tstep: {
        description: 'Spezieller Modus: Senden Sie HLC-Auth-ok nur nach Abschluss von t_step_XX (true) oder direkt wenn verfügbar (false)'
      },
      dc_isolation_voltage_V: {
        description: 'Überschreiben Sie die DC-Spannung zur Isolationsprüfung in CableCheck. Standard ist 0, was bedeutet die Spannung wird gemäß IEC 61851-23 (2023) CC.4.1.2 bestimmt'
      },
      disable_authentication: {
        description: 'Warten Sie nicht auf Autorisierung vom Auth-Modul, bieten Sie einen freien Service an. Starten Sie sofort mit der Ladung nach dem Einstecken. Verwenden Sie nicht mit Auth-Manager oder OCPP, diese Option ist nur zum Laden mit einem eigenständigen EvseManager der nicht mit einem Auth-Manager verbunden ist. Verwenden Sie DummyTokenProvider/Validator bei Tests mit Auth-Modul und/oder OCPP.'
      },
      enable_autocharge: {
        description: 'Aktiviert Autocharge (d.h. MAC-Adresse für Autorisierung). Standardmäßig deaktiviert da PnC stattdessen verwendet werden sollte.'
      },
      ev_receipt_required: { description: 'Nicht unterstützt: Anforderung von Empfang vom EV mit HLC' },
      evse_id: { description: 'EVSE-ID' },
      evse_id_din: { description: 'EVSE-ID DIN nach DIN SPEC 91286' },
      external_ready_to_start_charging: {
        description: 'Aktivieren Sie das externe Signal zur Startbereitschaft für die Ladung das die Ladungsbereitschaft verzögert bis es empfangen wurde'
      },
      fail_on_powermeter_errors: {
        description: 'Setzen Sie den EVSE-Manager in einen inoperative Zustand wenn die Powermeter-Anforderung konfiguriert ist und Fehler gemeldet hat'
      },
      hack_allow_bpt_with_iso2: {
        description: 'Hack. Erlauben Sie bidirektionale Stromübertragung mit DIN-Spezifikation und ISO-2. Die von HLC kommunizierten Ströme sind immer positiv, aber die Stromversorgung kann das Auto tatsächlich entladen.'
      },
      hack_fix_hlc_integer_current_requests: {
        description: 'Einige Autos fordern während der DC-Ladung nur ganzzahlige Ampere-Werte an. Bei niedriger DC-Ladung bedeutet das dass sie ein paar hundert Watt langsamer laden als nötig. Wenn aktiviert wird mit voller Leistung geladen wenn die Differenz zwischen vom EV angefordertem Strom (ganzzahlig) und dem HLC-Stromlimit kleiner als 1.0 ist'
      },
      hack_pause_imd_during_precharge: {
        description: 'Deaktivieren Sie IMD am Ende der CableCheck und aktivieren Sie es erneut wenn der Strom in CurrentDemand fließt. Einige DCDC-Stromversorgungen starten den Stromfluss nicht wenn die Isolationsmessung aktiv ist. Auf true setzen um den schmutzigen Workaround für einige IMD-Hardware zu aktivieren.'
      },
      hack_present_current_offset: {
        description: 'Fügt einen Offset [A] zum aktuellen Strom hinzu der an das Auto auf HLC übermittelt wird. Auf 0 setzen es sei denn Sie wissen wirklich was Sie tun.'
      },
      hack_simplified_mode_limit_10A: {
        description: 'Begrenzen Sie PWM auf 10A wenn EV den vereinfachten Lademodus verwendet. Auf false setzen um der IEC61851-1:2019 Abschnitt A.2.3 zu entsprechen. Es ist die Verantwortung des EV auf 10A zu begrenzen gemäß der Norm. Aktivieren Sie diese Option um von der Norm abzuweichen und vom EVSE-Seitig zu begrenzen.'
      },
      hack_skoda_enyaq: {
        description: 'Skoda Enyaq fordert DC-Ladungsspannungen unter ihrem Batterieniveau oder sogar unter 0 an. Auf true setzen um den schmutzigen Workaround zu aktivieren.'
      },
      hack_sleep_in_cable_check: {
        description: 'Hack: Schlafen Sie für n Sekunden am Ende der Kabelprüfung.'
      },
      hack_sleep_in_cable_check_volkswagen: {
        description: 'Hack: Zusätzlicher Schlaf für Volkswagen-Autos für n Sekunden am Ende der Kabelprüfung'
      },
      has_ventilation: { description: 'Erlauben Sie belüftete Ladung oder nicht' },
      initial_meter_value_timeout_ms: {
        description: 'Dieses Timeout in ms definiert wie lange der EvseManager auf einen anfänglichen Meterwert vom Leistungsmesser wartet bevor er bereit ist die Ladung zu starten. Wenn auf 0 konfiguriert wartet der EvseManager nicht auf einen anfänglichen Meterwert bevor er bereit ist die Ladung zu starten.'
      },
      inoperative_error_use_vendor_id: {
        description: 'Bei Erhöhung von evse_manager/Inoperative den Hersteller-ID vom ursprünglichen Fehler verwenden'
      },
      lock_connector_in_state_b: {
        description: 'Gibt an ob der Steckdosenriegel in Zustand B verriegelt sein soll. Wenn auf false gesetzt bleibt der Stecker in CP-Zustand B unverriegelt und das verstößt gegen IEC61851-1:2019 D.6.5 Tabelle D.9 Zeile 4 und sollte nicht in öffentlichen Umgebungen verwendet werden!'
      },
      logfile_suffix: {
        description: 'Verwenden Sie die gegebene Zeichenkette für den Log-Ordnername. Spezielle Zeichenkette session_uuid wird durch die Sitzungs-UUID ersetzt.'
      },
      max_current_export_A: {
        description: 'Benutzerdefinierte Stromgrenze für diesen EVSE in Ampere'
      },
      max_current_import_A: {
        description: 'Benutzerdefinierte Stromgrenze für diesen EVSE in Ampere'
      },
      payment_enable_contract: {
        description: 'Auf true setzen um Vertragsauthentifizierung (aka Plug and Charge) zu aktivieren'
      },
      payment_enable_eim: {
        description: 'Auf true setzen um EIM (z.B. RFID-Karte oder mobile App) Authentifizierung zu aktivieren'
      },
      raise_mrec9: {
        description: 'Ermöglicht die Konfiguration ob ein MREC9-Autorisierungs-Timeout-Fehler von diesem Modul bei einem Autorisierungs-Timeout aufgetreten ist aufgeworfen werden soll. Es wird empfohlen es zu deaktivieren wenn OCPP1.6 verwendet wird.'
      },
      request_zero_power_in_idle: {
        description: '"true: In Idle-Modus (kein Auto verbunden) fordern Sie 0A von der Energieverwaltung an. In Installationen mit vielen Ladepunkten sollte dies gesetzt werden,\n' +
          'um die Leistung auf die Ladepunkte zu verteilen die mit einem Auto verbunden sind." "false: Fordern Sie den normalen Strom an auch wenn kein Auto verbunden ist. Dies beschleunigt den Start der Ladung bei AC BASIC-Ladung da\n' +
          'EvseManager nicht auf Energie vom Energie-Manager warten muss nachdem das Auto eingesteckt wurde."'
      },
      sae_j2847_2_bpt_enabled: { description: 'Aktivieren Sie SAE J2847 2 V2G oder V2H-Modus' },
      sae_j2847_2_bpt_mode: { description: 'SAE J2847 2 BPT-Modus' },
      session_id_type: {
        description: 'Typ zur Erzeugung von Sitzungs-IDs. UUID: 36 Zeichen lange UUIDs UUID_BASE64: 22 Zeichen lange base64-kodierte UUIDs SHORT_BASE64: 16 Zeichen lange base64-kodierte IDs'
      },
      session_logging: { description: 'Aktivieren/Deaktivieren Sie die Ausgabe von Sitzungs-Log-Dateien' },
      session_logging_path: { description: 'Ausgabeverzeichnis für Sitzungs-Log-Dateien' },
      session_logging_xml: { description: 'Vollständige XML-Nachrichten für HLC protokollieren' },
      sleep_before_enabling_pwm_hlc_mode_ms: {
        description: 'Schlafen Sie vor dem Update des PWM-Signals im HLC-Modus. Teslas senden sehr schnell das erste SLAC-Paket nach dem Aktivieren von PWM so dass die Schlafzeit SLAC für das Paket vorbereiten lässt. Einige EV-Tester haben Probleme mit einem Wert >= 1000ms obwohl ISO15118 oder IEC61851 keine Timeout spezifizieren.'
      },
      soft_over_current_measurement_noise_A: {
        description: 'Setzen Sie Rauschen bei Strommessung. Wird als Offset zur Grenze hinzugefügt um falsche Auslöser zu vermeiden.'
      },
      soft_over_current_timeout_ms: {
        description: 'Erlauben Sie Überstrom für N ms bei weichem Überstrom-Prüfung während AC-Ladung.'
      },
      soft_over_current_tolerance_percent: {
        description: 'Erlauben Sie N Prozent Überstrom bei weichem Überstrom-Prüfung während AC-Ladung.'
      },
      state_F_after_fault_ms: {
        description: 'Setzen Sie Zustand F nach einem Fehler der die Ladung für die angegebene Zeit in ms stoppt während im Lademodus (CX->F(300ms)->C1/B1). Wenn ein Fehler in Zustand B2 auftritt wird kein Zustand F hinzugefügt (B2->B1 bei Fehler). Einige (besonders ältere Hybridfahrzeuge) können in einen permanenten Fehlermodus wechseln sobald sie Zustand F erkennen in diesem Fall kann EVerest die Ladungssitzung nicht wiederherstellen wenn der Fehler beseitigt wird. In diesem Fall können Sie diesen Parameter auf 0 setzen was verhindert dass Zustand F bei einem Fehler verwendet wird und nur PWM deaktiviert (C2->C1) während der Stromabschaltung. Dies verstößt jedoch gegen IEC 61851-1:2017. Der Standard ist 300ms wie vom Minimum in IEC 61851-1:2017 Tabelle A.5 (Beschreibung) vorgeschrieben um konform zu sein. Diese Einstellung ist nur im BASIC-Lademodus aktiv.'
      },
      switch_3ph1ph_cp_state: {
        description: 'CP-Zustand zur Verwendung beim Umschalten. WARNUNG: Einige EVs können bei Umschaltung von 1ph zu 3ph permanent zerstört werden. Es ist die Verantwortung der evse_board_support-Implementierung sicherzustellen dass das EV in der Lage ist den Wechsel durchzuführen. Wenn nicht müssen die Kapazitäten set_supports_changing_phases_during_charging auf false setzen. Phasenumstellung ist nur im Basic-Lademodus möglich.'
      },
      switch_3ph1ph_delay_s: {
        description: 'Warten Sie für n Sekunden beim Umschalten zwischen 3ph/1ph-Modus.'
      },
      uk_smartcharging_random_delay_at_any_change: {
        description: '"True: Verwenden Sie zufällige Verzögerungen bei jeder Stromänderung während der Ladung. False: Nur verwenden wenn Strom auf Null reduziert oder von Null erhöht wird."'
      },
      uk_smartcharging_random_delay_enable: {
        description: '"true: Aktivieren Sie zufällige Verzögerungen beim Start false: Deaktivieren Sie zufällige Verzögerungen beim Start.\n' +
          'Sie können sie auch während der Laufzeit auf der random_delay-Implementierung aktivieren/deaktivieren."'
      },
      uk_smartcharging_random_delay_max_duration: {
        description: '"Startwert für die maximale Dauer einer zufälligen Verzögerung.\n' +
          'Kann während der Laufzeit auf der random_delay-Implementierung geändert werden."'
      }
    },
    description: 'EVSE-Manager. Stromversorgungsseite: Wird für Energieverwaltung verwendet. Wird auch für die Abrechnung verwendet wenn kein Auto-Seitiger Leistungsmesser verbunden ist. Auto-Seitiger Leistungsmesser: Wird für die Abrechnung verwendet wenn vorhanden.',
    provides: {
      energy_grid: {
        description: 'Dies ist die Baumblatt-Schnittstelle zur Erstellung des Energie-Versorgungsbaums'
      },
      evse: { description: 'Dies ist die Haupt-Evsemanager-Schnittstelle' },
      random_delay: {
        description: 'Steuert die Funktion zur zufälligen Verzögerung gemäß UK Smart Charging Regulation'
      },
      token_provider: {
        description: 'Stellt Authtokens für Autocharge oder Plug and Charge zur Verfügung'
      }
    }
  },
  EvseSecurity: {
    config: {
      csms_ca_bundle: {
        description: 'Pfad zur csms_ca_bundle-Datei. Wenn relativ wird er mit everest prefix + etc/everest/certs vorangestellt. Andernfalls wird der absolute Dateipfad verwendet.'
      },
      csms_leaf_cert_directory: {
        description: 'Verzeichnis in dem CSMS-Blattzertifikate gespeichert sind. Wenn relativ wird er mit everest prefix + etc/everest/certs vorangestellt. Andernfalls wird der absolute Dateipfad verwendet.'
      },
      csms_leaf_key_directory: {
        description: 'Verzeichnis in dem CSMS-Private Keys gespeichert sind. Wenn relativ wird er mit everest prefix + etc/everest/certs vorangestellt. Andernfalls wird der absolute Dateipfad verwendet.'
      },
      mf_ca_bundle: {
        description: 'Pfad zur mf_ca_bundle-Datei. Wenn relativ wird er mit everest prefix + etc/everest/certs vorangestellt. Andernfalls wird der absolute Dateipfad verwendet.'
      },
      mo_ca_bundle: {
        description: 'Pfad zur mo_ca_bundle-Datei. Wenn relativ wird er mit everest prefix + etc/everest/certs vorangestellt. Andernfalls wird der absolute Dateipfad verwendet.'
      },
      private_key_password: { description: 'Passwort für verschlüsselte Private Keys.' },
      secc_leaf_cert_directory: {
        description: 'Verzeichnis in dem SECC-Blattzertifikate gespeichert sind. Wenn relativ wird er mit everest prefix + etc/everest/certs vorangestellt. Andernfalls wird der absolute Dateipfad verwendet.'
      },
      secc_leaf_key_directory: {
        description: 'Verzeichnis in dem SECC-Private Keys gespeichert sind. Wenn relativ wird er mit everest prefix + etc/everest/certs vorangestellt. Andernfalls wird der absolute Dateipfad verwendet.'
      },
      v2g_ca_bundle: {
        description: 'Pfad zur v2g_ca_bundle-Datei. Wenn relativ wird er mit everest prefix + etc/everest/certs vorangestellt. Andernfalls wird der absolute Dateipfad verwendet.'
      }
    },
    description: 'Dieses Modul implementiert die evse_security-Schnittstelle. Es verwendet das Dateisystem um Zertifikate und Schlüssel zu speichern',
    provides: {
      main: { description: 'Implementierung der evse_security-Schnittstelle' }
    }
  },
  EvseSlac: {
    description: 'Implementierung der SLAC-Datentrennungsverhandlung gemäß ISO15118-3.',
    provides: {
      main: {
        config: {
          ac_mode_five_percent: {
            description: 'Verwenden Sie AC 5% Modus gemäß ISO15118-3. Dies startet SLAC-Sitzungen neu wenn sie nach dem Standard fehlschlagen. Der Standard erlaubt nur Wiederholungen für AC, nicht für DC. Es wird jedoch stark empfohlen diese Option immer auf true zu setzen, auch für DC, andernfalls werden einige EVs in der Felder häufig SLAC fehlschlagen.'
          },
          chip_reset_delay_ms: { description: 'Verzögerung zwischen SET_KEY.CNF und RS_DEV.REQ' },
          chip_reset_timeout_ms: {
            description: 'Timeout für RS_DEV.REQ (warten auf RS_DEV.CNF)'
          },
          debug_simulate_failed_matching: {
            description: 'Nur für Debugging. Simulieren Sie fehlgeschlagenes Matching durch Senden eines falschen NMK an das EV.'
          },
          device: { description: 'Ethernet-Gerät das für PLC verwendet wird.' },
          do_chip_reset: {
            description: 'Führen Sie einen Chip-Reset nach dem Setzen des NMK mit der RS_DEV.REQ Vendor MME Extension durch (Funktioniert nur auf Qualcomm-Chips)'
          },
          link_status_detection: {
            description: 'Nach matching.cnf warten Sie auf den Link bevor Sie d_link_ready=connected mit LINK_STATUS Vendor MME Extension senden (Funktioniert auf Qualcomm- und Lumissil-Chips)'
          },
          link_status_retry_ms: {
            description: 'Verzögerung zwischen Wiederholungen von LINK_STATUS-Anfragen nach matching-Anfrage'
          },
          link_status_timeout_ms: {
            description: 'Timeout für Link nachdem die matching-Anfrage gestellt wurde'
          },
          number_of_sounds: { description: 'SLAC-Anzahl der Töne.' },
          publish_mac_on_first_parm_req: {
            description: 'Veröffentlichen Sie die EV-MAC-Adresse wenn die erste CM_SLAC_PARM.REQ. Dies sollte nicht verwendet werden da es ziemlich fehleranfällig ist: Die MAC-Adresse könnte von einem anderen Auto über Cross-Talk stammen. Es ist besser auf das Abschließen des Matching zu warten.'
          },
          publish_mac_on_match_cnf: {
            description: 'Veröffentlichen Sie die EV-MAC-Adresse auf der token_provider-Schnittstelle wenn das Matching bestätigt ist (CM_SLAC_MATCH.CNF). Dies kann für Autocharge als Alternative zum EVCCID verwendet werden das aus HLC und von EvseManager veröffentlicht wird. Dies kann für AC-Autocharge bei Autos verwendet werden die keine echte HLC auf AC unterstützen.'
          },
          reset_instead_of_fail: {
            description: 'Geht in den Reset-Zustand anstelle des Failed-Zustands. Dies ist gegen ISO15118-3. Aber einige Autos senden direkt eine CM_SLAC_PARAM.req-Nachricht wenn der SLAC-Prozess abbricht. Um auf diese Nachricht zu reagieren und den SLAC-Prozess neu zu starten geht die EVSE in den Reset-Zustand hier.'
          },
          set_key_timeout_ms: {
            description: 'Timeout für CM_SET_KEY.REQ. Standard funktioniert für QCA7000/QCA7005/CG5317.'
          },
          sounding_attenuation_adjustment: {
            description: 'Offset in dB der zur berechneten Tonaufnahme hinzugefügt werden sollte'
          }
        },
        description: 'SLAC-Schnittstellenimplementierung.'
      }
    }
  },
  EvseV2G: {
    config: {
      auth_timeout_eim: {
        description: 'Definiert wie viele Sekunden der EVSE auf Autorisierung im EIM-Fall warten soll bevor die Ladungssitzung abgebrochen wird. Schreiben Sie 0 wenn der EVSE auf EIM-Autorisierung unendlich warten soll.'
      },
      auth_timeout_pnc: {
        description: 'Definiert wie viele Sekunden der EVSE auf Autorisierung im PnC-Fall warten soll bevor die Ladungssitzung abgebrochen wird. Schreiben Sie 0 wenn der EVSE auf PnC-Autorisierung unendlich warten soll.'
      },
      device: {
        description: 'Ethernet-Gerät das für HLC verwendet wird. Jede lokale Schnittstelle die eine ipv6-Link-lokale und eine MAC-Adresse hat funktioniert'
      },
      enable_sdp_server: { description: 'Aktivieren Sie den eingebauten SDP-Server' },
      supported_DIN70121: { description: 'Der EVSE unterstützt DIN SPEC' },
      supported_ISO15118_2: { description: 'Der EVSE unterstützt ISO15118-2' },
      terminate_connection_on_failed_response: {
        description: 'Steuert wie auf einen fehlerhaften Antwortcode des EVSE behandelt wird. Wenn wahr wird die V2G-Verbindung sofort nach einem fehlerhaften Antwortcode beendet andernfalls ist es die Verantwortung des EV die V2G-Kommunikationssitzung mit SessionStop zu schließen.'
      },
      tls_key_logging: {
        description: 'Aktivieren/Deaktivieren Sie den Export von TLS-Sitzungsschlüsseln (Pre-Master-Secret) während eines TLS-Handshakes. Diese Log-Datei kann verwendet werden um TLS-Sitzungen zu entschlüsseln. Beachten Sie dass diese Option nur zu Test- und Simulationszwecken gedacht ist'
      },
      tls_key_logging_path: { description: 'Ausgabeverzeichnis für die TLS-Key-Log-Datei' },
      tls_security: { description: 'Steuert wie mit verschlüsselter Kommunikation umgegangen wird' },
      tls_timeout: {
        description: 'Setzen Sie das TLS-Timeout in ms beim Aufbau einer TLS-Verbindung '
      },
      verify_contract_cert_chain: {
        description: 'Gibt an ob der EVSE die Vertragszertifikatkette lokal überprüfen soll.'
      }
    },
    description: 'Dieses Modul enthält eine DIN70121- und ISO15118-2-Implementierung von chargebyte GmbH',
    provides: {
      charger: {
        description: 'Dieses Modul implementiert die ISO15118-2-Implementierung eines AC- oder DC-Ladepunkts'
      },
      extensions: {
        description: 'Diese Schnittstelle wird verwendet um Daten zwischen ISO15118 und OCPP-Modulen auszutauschen um die Anforderungen des OCPP-Protokolls zu unterstützen'
      }
    }
  },
  Example: {
    description: 'Einfaches Beispielmodul in C++ geschrieben',
    provides: {
      example: {
        config: {
          current: {
            description: 'Der Strom den die physikalische Steckdose liefern kann'
          },
          enum_test: { description: 'Ein Konfigurationswert der den Enum-Typ testet' },
          enum_test2: {
            description: 'Ein weiterer Konfigurationswert der den Enum-Typ testet'
          }
        },
        description: 'Dies implementiert eine Beispiel-Schnittstelle die mehrere Framework-Funktionen verwendet'
      },
      store: {
        description: 'Dies implementiert die kvs-Schnittstelle, hauptsächlich für Tests mehrerer Schnittstellen in einem Manifest'
      }
    }
  },
  ExampleErrorGlobalSubscriber: {
    description: 'Einfaches Beispielmodul in C++ geschrieben um das Fehler-Framework auf globaler Abonnement-Seite zu demonstrieren',
    provides: {
      example_global_subscriber: { description: 'Dies implementiert die Beispiel-Schnittstelle' }
    }
  },
  ExampleErrorRaiser: {
    description: 'Einfaches Beispielmodul in C++ geschrieben um das Fehlerhandling auf der Erhöher-Seite zu demonstrieren',
    provides: {
      example_raiser: { description: 'Dies implementiert eine Beispiel-Schnittstelle' }
    }
  },
  ExampleErrorSubscriber: {
    description: 'Einfaches Beispielmodul in C++ geschrieben um das Fehler-Framework auf Abonnement-Seite zu demonstrieren',
    provides: {
      example_subscriber: { description: 'Dies implementiert die Beispiel-Schnittstelle' }
    }
  },
  ExampleUser: {
    description: 'Einfaches Beispielmodul in C++ geschrieben und unter Verwendung des anderen Beispielmoduls',
    provides: {
      example_user: { description: 'Dies implementiert die example_user-Schnittstelle' }
    }
  },
  GenericPowermeter: {
    description: 'Leistungsmesser-Treiber für verschiedene Leistungsmesser-Hardware',
    provides: {
      main: {
        config: {
          modbus_base_address: { description: 'Die Basisadresse für Registerzugriff' },
          model: {
            description: 'Auswahlschalter für die zu verwendende Leistungsmesser-Konfigurationsdatei'
          },
          powermeter_device_id: { description: "Die Adresse des Leistungsmessers auf der seriellen Bus" }
        },
        description: 'Implementierung der Treiberfunktionalität'
      }
    }
  },
  IMDSimulator: {
    description: 'SIL-Implementierung eines Isolations-Monitoring-Geräts (IMD) für DC-Ladung',
    provides: {
      main: {
        config: {
          interval: {
            description: 'Messung-Update-Intervall in Millisekunden'
          },
          resistance_F_Ohm: {
            description: 'Widerstand der für die simulierten Messungen in Ohm zurückgegeben wird'
          },
          selftest_success: {
            description: 'Auf true setzen für erfolgreiche Selbstprüfung false für Fehler'
          }
        },
        description: 'Haupt-Schnittstelle für das IMD'
      }
    }
  },
  IsabellenhuetteIemDcr: {
    config: {
      CI: {
        description: 'Ladepunkt-Kennung (Teil des signierten OCMF-Datentuples).'
      },
      CT: {
        description: 'Ladepunkt-Kennungstyp (Teil des signierten OCMF-Datentuples).'
      },
      TT_initial: {
        description: 'Anfänglicher Tariftext. (Der aktuelle Wert ist Teil des signierten OCMF-Datentuples).'
      },
      US: {
        description: 'Steuert ob die Benutzer-ID auf dem Display angezeigt wird oder nicht.'
      },
      datetime_resync_interval: { description: 'Intervall für zyklische Zeitneusynchronisierung in Stunden.' },
      ip_address: { description: 'IPv4-Adresse der Leistungsmeßgeräte-API.' },
      port_http: { description: 'HTTP-Port der Leistungsmeßgeräte-API.' },
      resilience_initial_connection_retry_delay: {
        description: 'Für die Controller-Resilience die Verzögerung in Millisekunden vor einem Wiederholungsversuch bei der Modulinitialisierung.'
      },
      resilience_transaction_request_retries: {
        description: 'Für die Controller-Resilience die Anzahl der Wiederholungsversuche um eine Verbindung zum Leistungsmeßgerät bei einer Transaktionsstart- oder Stop-Anfrage herzustellen.'
      },
      resilience_transaction_request_retry_delay: {
        description: 'Für die Controller-Resilience die Verzögerung in Millisekunden vor einem Wiederholungsversuch bei einer Transaktionsstart- oder Stop-Anfrage.'
      },
      timezone: {
        description: 'Die Zeitzonenoffset-Information gemäß ISO8601 (ohne Doppelpunkt) für Normalzeit.'
      },
      timezone_handle_DST: {
        description: 'Steuert ob die Sommerzeit (DST) berücksichtigt wird oder Normalzeit kontinuierlich verwendet wird.'
      }
    },
    description: 'Modul implementiert den Isabellenhuette IEM-DCR Leistungsmeßgeräte-Treiber der über HTTP/REST verbunden wird',
    provides: { main: { description: 'Dies ist die Haupteinheit des Moduls' } }
  },
  IsoMux: {
    config: {
      device: {
        description: 'Ethernet-Gerät das für HLC verwendet wird. Jede lokale Schnittstelle die eine ipv6-Linklokale und eine MAC-Adresse hat funktioniert'
      },
      proxy_port_iso2: { description: 'TCP-Port der lokalen ISO2-Instanz' },
      proxy_port_iso20: { description: 'TCP-Port der lokalen ISO20-Instanz' },
      tls_key_logging: {
        description: 'Aktivieren/Deaktivieren des Exports der TLS-Sitzungsschlüssel (Pre-Master-Secret) während eines TLS-Handshakes. Diese Logdatei kann verwendet werden um TLS-Sitzungen zu entschlüsseln. Hinweis: Diese Option ist nur für Tests und Simulationen gedacht'
      },
      tls_security: { description: 'Steuert wie verschlüsselte Kommunikation behandelt wird' },
      tls_timeout: {
        description: 'Setzt das TLS-Timeout in ms beim Aufbau einer TLS-Verbindung '
      }
    },
    description: 'Dieses Modul ist ein Multiplexer zur Unterstützung des Wechsels zwischen verschiedenen ISO-Modul-Implementierungen',
    provides: {
      charger: {
        description: 'Dieses Modul implementiert die ISO15118-2-Implementierung eines AC- oder DC-Ladegeräts'
      },
      extensions: {
        description: 'Diese Schnittstelle wird verwendet um Daten zwischen ISO15118- und OCPP-Modulen auszutauschen um die Anforderungen des OCPP-Protokolls zu unterstützen'
      }
    }
  },
  LemDCBM400600: {
    config: {
      SC: { description: 'SC (OCMF/Transaktionsfelder)' },
      UD: { description: 'UD (OCMF/Transaktionsfelder)' },
      UV: { description: 'Benutzer SW Version (OCMF/Transaktionsfelder)' },
      cable_id: {
        description: 'Der Kabelverlustkompensationsgrad der verwendet werden soll. Dies ermöglicht die Kompensation der Messungen des DCBM mit einem Widerstand.'
      },
      command_timeout_ms: {
        description: 'Das Timeout in Millisekunden für einen HTTP-Befehl an das LEM-Leistungsmeßgerät.'
      },
      ip_address: { description: 'IP-Adresse der Leistungsmeßgeräte-API.' },
      meter_dst: {
        description: 'Die Sommerzeit (DST) Einstellungen (wird ignoriert wenn NTP gesetzt ist)'
      },
      meter_timezone: {
        description: 'Der Zeitzonenoffset (wird ignoriert wenn NTP-Server gesetzt sind) - es kann von -11 bis +14 für Stunden und 00, 15, 30, 45 für Minuten gehen'
      },
      meter_tls_certificate: {
        description: "Das HTTPS-Zertifikat des DCBM im PEM-Format. Falls bereitgestellt wird HTTPS verwendet. Falls leer gelassen wird reguläres HTTP verwendet. Beachten Sie dass dies nicht den Standardport beeinflusst - geben Sie explizit einen Port an wenn Sie einen anderen Port als 80 verwenden möchten."
      },
      ntp_server_1_ip_addr: {
        description: "Die IPv4-Adresse (in 4-Oktett-Form W.X.Y.Z) des ersten NTP-Servers zur Zeit synchronisierung. Falls dies leer gelassen wird, wird NTP auf dem DCBM nicht konfiguriert - seine Zeit wird stattdessen mit der Systemzeit von EVerest synchronisiert."
      },
      ntp_server_1_port: { description: 'Der Port (1-65535) des ersten NTP-Servers.' },
      ntp_server_2_ip_addr: {
        description: 'Die IPv4-Adresse (in 4-Oktett-Form W.X.Y.Z) des zweiten NTP-Servers zur Zeit synchronisierung. Dies wird ignoriert wenn ntp_server_1_ip_addr leer ist.'
      },
      ntp_server_2_port: { description: 'Der Port (1-65535) des zweiten NTP-Servers.' },
      port: { description: 'Port der Leistungsmeßgeräte-API.' },
      resilience_initial_connection_retries: {
        description: 'Für die Controller-Resilience die Anzahl der Wiederholungsversuche um eine Verbindung zum Leistungsmeßgerät bei der Modulinitialisierung herzustellen.'
      },
      resilience_initial_connection_retry_delay: {
        description: 'Für die Controller-Resilience die Verzögerung in Millisekunden vor einem Wiederholungsversuch bei der Modulinitialisierung.'
      },
      resilience_transaction_request_retries: {
        description: 'Für die Controller-Resilience die Anzahl der Wiederholungsversuche um eine Verbindung zum Leistungsmeßgerät bei einer Transaktionsstart- oder Stop-Anfrage herzustellen.'
      },
      resilience_transaction_request_retry_delay: {
        description: 'Für die Controller-Resilience die Verzögerung in Millisekunden vor einem Wiederholungsversuch bei einer Transaktionsstart- oder Stop-Anfrage.'
      },
      tariff_id: {
        description: 'Wird zur eindeutigen Transaktions-Tarifbezeichnung verwendet'
      }
    },
    description: 'Modul implementiert den LEM DCBM 400/600 Leistungsmeßgeräte-Treiber-Adapter über HTTP.',
    provides: { main: { description: 'Dies ist die Haupteinheit des Moduls' } }
  },
  MicroMegaWattBSP: {
    config: {
      baud_rate: {
        description: 'Serielle Baudrate die bei der Kommunikation mit uMWC-Hardware verwendet werden soll'
      },
      connector_id: { description: 'Connector-ID' },
      dc_max_voltage: { description: 'Maximale Spannung die unterstützt werden soll' },
      reset_gpio: { description: 'GPIO-Linie die zum Zurücksetzen von uMWC verwendet werden soll' },
      reset_gpio_chip: {
        description: 'Reset GPIO-Chip der zum HW-Zurücksetzen von uMWC verwendet werden soll. Falls auf leere Zeichenkette gesetzt ist es deaktiviert.'
      },
      serial_port: { description: 'Serielle Schnittstelle an die das uMWC-Hardware angeschlossen ist' }
    },
    description: 'Treibermodul für den Micro Mega Watt DC-Ladetestgerät v1.0',
    provides: {
      board_support: {
        description: 'Stellt die Board-Support-Schnittstelle für die Steuerung der niedrigen Ebene der Steuerungspiloten, Relais, RCD, Motor-Sperre zur Verfügung'
      },
      dc_supply: { description: 'Schnittstelle für die DC/DC-Ausgangsversorgung' },
      powermeter: { description: 'Schnittstelle für das Leistungsmeßgerät' }
    }
  },
  OCPP: {
    config: {
      ChargePointConfigPath: {
        description: 'Pfad zur OCPP-Konfigurationsdatei. Libocpp definiert ein JSON-Schema für diese Datei. Bitte beachten Sie die Dokumentation von libocpp für weitere Informationen zu den Konfigurationsoptionen.'
      },
      DatabasePath: {
        description: 'Pfad zum persistenten SQLite-Datenbankverzeichnis. Bitte beachten Sie die Dokumentation von libocpp für weitere Informationen zur Datenbank und ihrer Struktur.'
      },
      DelayOcppStart: {
        description: 'Kleine Verzögerung in Zeit (Millisekunden) zum Starten des OCPP-Ladepunkts, um Zeit für die Aktualisierung des Connector-Status durch den Rest von EVerest zu lassen. Dies wird nur verwendet um Probleme zu verhindern bei denen verfügbar vorbereitet auf einem Neustart passiert.'
      },
      EnableExternalWebsocketControl: {
        description: 'Falls wahr kann der Websocket extern getrennt und verbunden werden. Dieser Parameter ist für Debugging- und Testzwecke.'
      },
      MessageLogPath: {
        description: 'Pfad zum Verzeichnis in das Logs aller OCPP-Meldungen geschrieben werden'
      },
      MessageQueueResumeDelay: {
        description: 'Zeit (Sekunden) zur Verzögerung des Fortsetzens der Nachrichtenwarteschlange nach dem Wiederverbinden. Dieser Parameter wurde eingeführt weil einige OCTT-Testfälle erfordern dass die erste Nachricht nach einem Wiederverbinden vom CSMS gesendet wird.'
      },
      PublishChargingScheduleDurationS: {
        description: 'Dauer in Sekunden die die Dauer der angeforderten Ladepläne ab jetzt definiert'
      },
      PublishChargingScheduleIntervalS: {
        description: 'Intervall in Sekunden in dem Ladepläne die von OCPP empfangen wurden über MQTT veröffentlicht und an verbundene Module signalisiert werden. Falls der Wert auf 0 gesetzt ist werden Ladepläne nur dann veröffentlicht wenn sie von CSMS geändert wurden'
      },
      RequestCompositeScheduleUnit: {
        description: 'Einheit in der zusammengesetzte Pläne angefordert und innerhalb EVerest geteilt werden. Es wird empfohlen Ampere für AC und Watt für DC-Ladestationen zu verwenden. Erlaubte Werte:\n' +
          "  - 'A' für Ampere\n" +
          "  - 'W' für Watt"
      },
      ResetStopDelay: {
        description: "Zeit (Sekunden) zur Verzögerung des Stopps des Ladepunkts damit das CSMS genug Zeit hat auf die letzten Nachrichten des Ladepunkts zu reagieren bevor er zurückgesetzt wird."
      },
      UserConfigPath: {
        description: 'Pfad zur Datei der OCPP-Benutzerkonfiguration. Die Benutzerkonfiguration wird als Overlay für die ursprüngliche Konfiguration definiert durch ChargePointConfigPath verwendet. Alle Änderungen an Konfigurationsschlüsseln die intern oder durch das CSMS vorgenommen wurden werden in die Benutzerkonfigurationsdatei geschrieben.'
      }
    },
    description: 'Ein OCPP-Ladepunkt / Ladeeinrichtung-Modul der aktuell OCPP-J 1.6 zielte',
    provides: {
      auth_provider: { description: 'Stellt Auth-Token aus OCPP zur Verfügung' },
      auth_validator: { description: 'Validiert das bereitgestellte Auth-Token mit OCPP' },
      data_transfer: { description: 'OCPP-Datentransfer zum CSMS' },
      main: { description: 'Dies ist ein OCPP 1.6-Ladepunkt' },
      ocpp_generic: { description: 'Generische OCPP-Schnittstelle.' },
      session_cost: { description: 'Sende Sitzungskosten' }
    }
  },
  OCPP201: {
    config: {
      CompositeScheduleIntervalS: {
        description: 'Intervall in Sekunden in dem zusammengesetzte Pläne von libocpp empfangen werden werden über MQTT veröffentlicht und an verbundene Module signalisiert. Falls der Wert auf 0 gesetzt ist werden zusammengesetzte Pläne nur dann veröffentlicht wenn sie von CSMS geändert wurden'
      },
      CoreDatabasePath: {
        description: 'Pfad zum persistenten SQLite-Datenbankverzeichnis. Bitte beachten Sie die Dokumentation von libocpp für weitere Informationen zur Datenbank und ihrer Struktur.'
      },
      DelayOcppStart: {
        description: 'Kleine Verzögerung in Zeit (Millisekunden) zum Starten des OCPP-Ladepunkts, um Zeit für die Aktualisierung des Connector-Status durch den Rest von EVerest zu lassen. Dies wird nur verwendet um Probleme zu verhindern bei denen verfügbar vorbereitet auf einem Neustart passiert.'
      },
      DeviceModelConfigPath: {
        description: 'Pfad zum Verzeichnis der Gerätemodell-Komponentenkonfiguration. Libocpp definiert ein bestimmtes Schema für diese Dateien. Bitte beachten Sie die Dokumentation von libocpp für weitere Informationen zu den Konfigurationsoptionen.'
      },
      DeviceModelDatabaseMigrationPath: {
        description: 'Pfad zu den Migration-Dateien für beide Gerätemodelle'
      },
      DeviceModelDatabasePath: {
        description: 'Pfad zur SQLite-Datenbank für das Gerätemodell'
      },
      EnableExternalWebsocketControl: {
        description: 'Falls wahr kann der Websocket extern getrennt und verbunden werden. Dieser Parameter ist für Debugging- und Testzwecke.'
      },
      EverestDeviceModelDatabasePath: {
        description: 'Pfad zur SQLite-Datenbank für das EVerest-Gerätemodell. Diese Datenbank speichert Komponenten und Variablen wie EVSE und Connector die eng mit everest-core zusammenhängen und daher nicht von libocpp verwaltet werden.'
      },
      MessageLogPath: {
        description: 'Pfad zum Verzeichnis in das Logs aller OCPP-Meldungen geschrieben werden'
      },
      MessageQueueResumeDelay: {
        description: 'Zeit (Sekunden) zur Verzögerung des Fortsetzens der Nachrichtenwarteschlange nach dem Wiederverbinden. Dieser Parameter wurde eingeführt weil einige OCTT-Testfälle erfordern dass die erste Nachricht nach einem Wiederverbinden vom CSMS gesendet wird.'
      },
      RequestCompositeScheduleDurationS: {
        description: 'Zeit (Sekunden) für die zusammengesetzte Pläne angefordert werden. Pläne werden von jetzt bis jetzt + RequestCompositeScheduleDurationS angefordert'
      },
      RequestCompositeScheduleUnit: {
        description: 'Einheit in der zusammengesetzte Pläne angefordert und innerhalb EVerest geteilt werden. Es wird empfohlen Ampere für AC und Watt für DC-Ladestationen zu verwenden. Erlaubte Werte:\n' +
          "  - 'A' für Ampere\n" +
          "  . 'W' für Watt"
      }
    },
    description: 'Ein OCPP-Ladepunkt / Ladeeinrichtung-Modul für OCPP 2.0.1',
    provides: {
      auth_provider: { description: 'Stellt Autorisierungsanfragen durch CSMS zur Verfügung' },
      auth_validator: {
        description: 'Validiert das bereitgestellte Token mit CSMS AuthorizationList oder AuthorizationCache'
      },
      data_transfer: { description: 'OCPP-Datentransfer zum CSMS' },
      ocpp_generic: { description: 'Generische OCPP-Schnittstelle.' },
      session_cost: { description: 'Sende Sitzungskosten' }
    }
  },
  OCPPExtensionExample: {
    config: {
      keys_to_monitor: {
        description: 'Komma-getrennte Liste von Schlüsseln die überwacht werden sollen'
      }
    },
    description: 'Dies ist ein Beispielmodul das zeigt wie das OCPP-Modul von EVerest mithilfe der DataTransfer-Funktionalität und benutzerdefinierter Konfigurationsschlüssel erweitert werden könnte',
    provides: { data_transfer: { description: 'OCPP-Datentransfer' } }
  },
  OVMSimulator: {
    description: 'SIL-Implementierung eines Überspannungsmonitors für DC-Ladung',
    provides: {
      main: {
        config: {
          simulate_error: {
            description: 'Auf true setzen um einen Überspannungsfehler während der Ladung zu werfen'
          },
          simulate_error_delay: {
            description: 'Überspannungsfehler N Sekunden nach dem Start der Ladung simulieren'
          }
        },
        description: 'Haupt-Schnittstelle für OVM'
      }
    }
  },
  PN532TokenProvider: {
    description: 'PN532 RFID/NFC-Tokenanbieter der das Token zurückgibt sobald das Tag vom Leser gelesen werden kann',
    provides: {
      main: {
        config: {
          baud_rate: {
            description: 'Serielle Baudrate die bei der Kommunikation mit PN532-Hardware verwendet werden soll'
          },
          debug: { description: 'Debug-Ausgabe auf der Kommandozeile anzeigen.' },
          read_timeout: { description: 'Zeit zwischen nachfolgenden Kartenlesungen (in s)' },
          serial_port: {
            description: 'Serielle Schnittstelle an die das PN532-Hardware angeschlossen ist'
          }
        },
        description: 'Implementierung des PN532 RFID/NFC-Tokenanbieters'
      }
    }
  },
  PN7160TokenProvider: {
    description: 'PN7160 RFID/NFC-Tokenanbieter der das Token zurückgibt sobald das Tag vom Leser gelesen werden kann',
    provides: {
      main: {
        config: {
          debug: { description: 'Debug-Ausgabe auf der Kommandozeile anzeigen.' },
          disable_nfc_rfid: { description: 'NFC RFID-Reader deaktivieren' },
          token_debounce_interval_ms: {
            description: 'Minimale Wartezeit in ms bis das nächste Token veröffentlicht wird (Debounce-Intervall).'
          }
        },
        description: 'Implementierung des PN7160 RFID/NFC-Tokenanbieters'
      }
    }
  },
  PacketSniffer: {
    config: {
      device: {
        description: 'Das Ethernet-Gerät auf dem die Nachrichten aufgezeichnet werden'
      },
      session_logging_path: {
        description: 'Ausgabeverzeichnis für Sitzungsaufzeichnungs-Dump-Dateien'
      }
    },
    description: 'Mit dem "PacketSniffer"-EVerest-Modul ist es möglich verschiedene Pakete auf der PLC-Schnittstelle aufzuzeichnen und zu speichern.',
    provides: { main: { description: 'EVerest-API' } }
  },
  PersistentStore: {
    config: {
      sqlite_db_file_path: { description: 'Pfad zur SQLite-db-Datei.' }
    },
    description: 'Einfache Implementierung eines SQLite-backenden persistenten Schlüssel-Wert-Speichers',
    provides: {
      main: { description: 'Dies implementiert einen persistenten Schlüssel-Wert-Speicher' }
    }
  },
  PhyVersoBSP: {
    config: {
      baud_rate: {
        description: 'Serielle Baudrate die bei der Kommunikation mit der Hardware verwendet werden soll'
      },
      conn1_dc: { description: 'Auf wahr setzen wenn es sich um DC handelt falsch wenn es sich um AC handelt' },
      conn1_gpio_stop_button_bank: {
        description: 'GPIO-Peripheriebank für Stop-Knopf des Connector 1'
      },
      conn1_gpio_stop_button_enabled: {
        description: 'Auf wahr setzen um externen Ladestop-Knopf für Connector 1 auf einem GPIO zu aktivieren der mit dem SOM verbunden ist'
      },
      conn1_gpio_stop_button_invert: { description: 'Auf wahr setzen um die Pin-Logik umzukehren' },
      conn1_gpio_stop_button_pin: {
        description: 'GPIO-Peripheriepin für Stop-Knopf des Connector 1'
      },
      conn1_has_socket: {
        description: 'Auf wahr setzen wenn es einen Stecker hat, falsch wenn es einen dauerhaft angebrachten Kabel hat'
      },
      conn1_max_current_A_export: { description: 'Maximale Exportstromstärke in Ampere' },
      conn1_max_current_A_import: { description: 'Maximale Importstromstärke in Ampere' },
      conn1_max_phase_count_export: { description: 'Maximale Phasenzahl für Export' },
      conn1_max_phase_count_import: { description: 'Maximale Phasenzahl für Import' },
      conn1_min_current_A_export: { description: 'Minimale Exportstromstärke in Ampere' },
      conn1_min_current_A_import: { description: 'Minimale Importstromstärke in Ampere' },
      conn1_min_phase_count_export: { description: 'Minimale Phasenzahl für Export' },
      conn1_min_phase_count_import: { description: 'Minimale Phasenzahl für Import' },
      conn1_motor_lock_type: {
        description: 'Typ des Motor-Sperrmechanismus des Connector 1; 1 == Hella-Stil zeitbasierte Sperrung, 2 == Valeo Potentiometer-Feedback basiert'
      },
      conn2_dc: { description: 'Auf wahr setzen wenn es sich um DC handelt, falsch wenn es sich um AC handelt' },
      conn2_gpio_stop_button_bank: {
        description: 'GPIO-Peripheriebank für Stop-Knopf des Connector 2'
      },
      conn2_gpio_stop_button_enabled: {
        description: 'Auf wahr setzen um externen Ladestop-Knopf für Connector 2 auf einem GPIO zu aktivieren der mit dem SOM verbunden ist'
      },
      conn2_gpio_stop_button_invert: { description: 'Auf wahr setzen um die Pin-Logik umzukehren' },
      conn2_gpio_stop_button_pin: {
        description: 'GPIO-Peripheriepin für Stop-Knopf des Connector 2'
      },
      conn2_has_socket: {
        description: 'Auf wahr setzen wenn es einen Stecker hat, falsch wenn es einen dauerhaft angebrachten Kabel hat'
      },
      conn2_max_current_A_export: { description: 'Maximale Exportstromstärke in Ampere' },
      conn2_max_current_A_import: { description: 'Maximale Importstromstärke in Ampere' },
      conn2_max_phase_count_export: { description: 'Maximale Phasenzahl für Export' },
      conn2_max_phase_count_import: { description: 'Maximale Phasenzahl für Import' },
      conn2_min_current_A_export: { description: 'Minimale Exportstromstärke in Ampere' },
      conn2_min_current_A_import: { description: 'Minimale Importstromstärke in Ampere' },
      conn2_min_phase_count_export: { description: 'Minimale Phasenzahl für Export' },
      conn2_min_phase_count_import: { description: 'Minimale Phasenzahl für Import' },
      conn2_motor_lock_type: {
        description: 'Typ des Motor-Sperrmechanismus des Connector 2; 1 == Hella-Stil zeitbasierte Sperrung, 2 == Valeo Potentiometer-Feedback basiert'
      },
      reset_gpio: {
        description: 'Wenn <0 gesetzt ist es deaktiviert. Wenn > 0 werden reset_gpio_bank und reset_gpio_pin Konfiguration für Hardreset des MCU verwendet'
      },
      reset_gpio_bank: {
        description: 'GPIO-Peripheriebank zu der der nRST-Pin des MCU zugeordnet ist'
      },
      reset_gpio_pin: {
        description: 'GPIO-Peripheriepin zu dem der nRST-Pin des MCU zugeordnet ist'
      },
      serial_port: { description: 'Serielle Schnittstelle an die die Hardware angeschlossen ist' }
    },
    description: 'Treibermodul für Phytec PhyVerso EV-Ladesteuerung mit Pionix MCU-Firmware',
    provides: {
      connector_1: {
        description: 'Stellt die Board-Support-Schnittstelle zur Steuerung der Niederebene der Näh- und Kontrollpiloten, Relais und Motor-Sperre zur Verfügung'
      },
      connector_2: {
        description: 'Stellt die Board-Support-Schnittstelle zur Steuerung der Niederebene der Näh- und Kontrollpiloten, Relais und Motor-Sperre zur Verfügung'
      },
      connector_lock_1: { description: 'Sperr-Schnittstelle' },
      connector_lock_2: { description: 'Sperr-Schnittstelle' },
      phyverso_mcu_temperature: { description: 'Temperaturen vom MCU' },
      rcd_1: { description: 'RCD-Schnittstelle des eingebauten RCD' },
      rcd_2: { description: 'RCD-Schnittstelle des eingebauten RCD' },
      system_specific_data_1: { description: 'Opaque-Datenblöcke von Connector 1' },
      system_specific_data_2: { description: 'Opaque-Datenblöcke von Connector 2' }
    }
  },
  PyEvJosev: {
    config: {
      device: {
        description: 'Ethernet-Gerät das für HLC verwendet wird. Jede lokale Schnittstelle die eine ipv6-Linklokale und eine MAC-Adresse hat funktioniert.'
      },
      enable_tls_1_3: { description: 'Der EVCC wird TLS-Version 1.3 aktivieren' },
      enforce_tls: { description: 'Der EVCC wird eine TLS-Verbindung erzwingen' },
      is_cert_install_needed: {
        description: 'Wenn wahr wird das Vertragszertifikat über die EVSE installiert. Und jedes bestehende Vertragszertifikat wird ebenfalls überschrieben.'
      },
      supported_DIN70121: { description: 'Die EVSE unterstützt die DIN SPEC' },
      supported_ISO15118_2: { description: 'Die EVSE unterstützt ISO15118-2' },
      supported_ISO15118_20_AC: { description: 'Die EVSE unterstützt ISO15118-20 AC' },
      supported_ISO15118_20_DC: { description: 'Die EVSE unterstützt ISO15118-20 DC' },
      tls_active: { description: 'Wenn wahr verbindet sich EVCC als TLS-Client mit SECC' }
    },
    description: 'Dieses Modul implementiert ein DIN70121, ISO15118-2 und ISO15118-20 EV unter Verwendung des Josev-Projekts.',
    provides: {
      ev: {
        description: 'Dieses Modul implementiert die ISO15118-2-Implementierung eines EV'
      }
    }
  },
  PyExampleErrorRaiser: {
    description: 'Einfaches Beispielmodul das in Python geschrieben wurde um Fehlerbehandlung auf der Raiser-Seite zu demonstrieren',
    provides: {
      example_raiser: { description: 'Dies implementiert eine Beispiel-Schnittstelle' }
    }
  },
  PyExampleErrorSubscriber: {
    description: 'Einfaches Beispielmodul das in Python geschrieben wurde um das Fehler-Framework auf der Subscriber-Seite zu demonstrieren',
    provides: {
      example_subscriber: { description: 'Dies implementiert die Beispiel-Schnittstelle' }
    }
  },
  SerialCommHub: {
    description: 'Zentrale Kommunikation mit angeschlossenen seriellen Geräten',
    provides: {
      main: {
        config: {
          baudrate: { description: 'Baudrate' },
          ignore_echo: {
            description: 'Bei mancher Hardware wird jede gesendete Nachricht zurückgelesen diese Einstellung filtert die gesendete Nachricht in der Antwort.'
          },
          initial_timeout_ms: { description: 'Timeout in ms für das erste Paket.' },
          max_packet_size: {
            description: 'Maximale Größe eines zu lesenden/zu schreibenden Pakets in Bytes. Daten die die Größe überschreiten werden aufgeteilt. Die APU-Größe gemäß [wikipedia](https://en.wikipedia.org/wiki/Modbus) ist 256 Bytes, die als Standard hier verwendet wird.'
          },
          parity: { description: 'Paritätsbit: 0: Keine, 1: Ungerade, 2: Gerade' },
          retries: {
            description: 'Anzahl der Wiederholungen bei Fehler in Modbus-Abfrage.'
          },
          rtscts: { description: 'Verwende RTS/CTS-Hardware-Flusskontrolle' },
          rxtx_gpio_chip: {
            description: 'GPIO-Chip der zum Umschalten zwischen RX/TX verwendet wird. Ein leerer String deaktiviert die GPIO-Verwendung.'
          },
          rxtx_gpio_line: { description: 'GPIO-Linie die zum Umschalten zwischen RX/TX verwendet wird' },
          rxtx_gpio_tx_high: {
            description: 'GPIO-Richtung false bedeutet low für TX, true bedeutet high für TX'
          },
          serial_port: { description: 'Serielle Schnittstelle an die die Hardware angeschlossen ist' },
          within_message_timeout_ms: { description: 'Timeout in ms für nachfolgende Pakete.' }
        },
        description: 'Implementierung des seriellen Kommunikationshub'
      }
    }
  },
  Setup: {
    config: {
      ap_interface: { description: 'Wifi-Schnittstelle für AP-Modus' },
      ap_ipv4: { description: 'IPv4-Adresse des AP' },
      initialized_by_default: {
        description: 'Immer als ob der Ladepunkt initialisiert wurde melden'
      },
      localization: { description: 'Lokalisierungssupport aktivieren' },
      online_check_host: {
        description: 'Hostname oder IP die zur Überprüfung der Internetverbindung verwendet werden'
      },
      release_metadata_file: {
        description: 'Speicherort der Release-Metadaten-Datei relativ zum EVerest-Präfix'
      },
      setup_simulation: { description: 'Simulation-Setup erlauben' },
      setup_wifi: { description: 'Wifi-Setup erlauben' }
    },
    description: 'Das EVerest-Setup-Modul zum Einrichten einer LAN- oder WIFI-Netzwerkverbindung. Dieses Modul benötigt privilegierten Zugriff und sollte nicht während normaler Betrieb ausgeführt werden',
    provides: { main: { description: 'EVerest Setup' } }
  },
  SlacSimulator: {
    description: 'SIL-Implementierung der SLAC-Datentlink-Verhandlung gemäß ISO15118-3.',
    provides: {
      ev: { description: 'SLAC-Schnittstellenimplementierung für EV-Seite' },
      evse: { description: 'SLAC-Schnittstellenimplementierung für EVSE-Seite' }
    }
  },
  StaticISO15118VASProvider: {
    config: {
      service_file: { description: 'Der Pfad zur Dienst-YAML-Datei' }
    },
    description: 'Dieses Modul stellt statische ISO15118-Wert-added-Services (VAS) bereit die in einer YAML-Datei definiert sind',
    provides: {
      iso15118_vas: { description: 'Die benutzerdefinierten VAS aus der YAML-Datei geparst' }
    }
  },
  Store: {
    description: 'Einfache Implementierung eines Speichers mit Speicherung im Arbeitsspeicher',
    provides: { main: { description: 'Dies implementiert einen Schlüssel-Wert-Speicher' } }
  },
  System: {
    config: {
      DefaultRetries: {
        description: 'Gibt an wie oft der Ladepunkt versucht Dateien bei vorherigem Fehler hoch- oder herunterzuladen.'
      },
      DefaultRetryInterval: {
        description: 'Gibt in Sekunden an nach welcher Zeit ein Wiederholungsversuch eines Hochladens oder Herunterladens bei vorherigem Fehler erfolgen kann.'
      },
      ResetDelay: {
        description: 'Wenn eine Reset-Anfrage empfangen wird kann die eigentliche Ausführung um diese Anzahl an Sekunden verzögert werden. Dies kann notwendig sein, zum Beispiel wenn die Reset-Anfrage über das Netzwerk empfangen wird und die Bestätigung der Anfrage etwas Zeit benötigt um den Rückweg zum Aufrufer zu nehmen. Standardmäßig auf null gesetzt, was bedeutet dass das Reset direkt ohne Verzögerung ausgeführt wird.'
      }
    },
    description: 'Dieses Modul implementiert systemweite Operationen',
    provides: { main: { description: 'Implementiert die System-Schnittstelle' } }
  },
  TerminalCostAndPriceMessage: {
    description: 'Beispielmodul für Kosten- und Preismeldung',
    provides: { main: { description: 'EVerest-API' } }
  },
  TerminalDisplayMessage: {
    description: 'Beispielmodul für Anzeigemeldung',
    provides: { display_message: { description: 'Modul zum Anzeigen einer Nachricht' } }
  },
  TestErrorHandling: {
    description: 'Definiert ein Modul das Fehlerbehandlungsfunktionen auf Befehl verwendet',
    provides: {
      main: {
        description: 'Dies implementiert eine Schnittstelle die Steuerung über Fehlerbehandlungsfunktionen zur Verfügung stellt'
      }
    }
  },
  YetiDriver: {
    config: {
      baud_rate: {
        description: 'Serielle Baudrate die bei der Kommunikation mit Yeti-Hardware verwendet werden soll'
      },
      caps_max_current_A: {
        description: 'Maximale Stromstärke an AC-Seite. Für AC ist dies typischerweise 16 oder 32, aber für HLC kann es weniger sein. -1 bedeutet den von der Hardware gemeldeten Grenzwert zu verwenden.'
      },
      caps_min_current_A: {
        description: 'Minimale Stromstärke an AC-Seite. Für AC ist dies typischerweise 6, aber für HLC kann es weniger sein. -1 bedeutet den von der Hardware gemeldeten Grenzwert zu verwenden.'
      },
      reset_gpio: { description: 'GPIO-Linie die zum Zurücksetzen von Yeti verwendet werden soll' },
      reset_gpio_chip: {
        description: 'Reset GPIO-Chip der zum HW-Zurücksetzen von Yeti verwendet werden soll. Falls auf leere Zeichenkette gesetzt ist es deaktiviert.'
      },
      serial_port: { description: 'Serielle Schnittstelle an die die Yeti-Hardware angeschlossen ist' }
    },
    description: 'Treibermodul für das YETI-Hardware v1.0',
    provides: {
      board_support: {
        description: 'Stellt die Board-Support-Schnittstelle zur Steuerung der niedrigen Ebene der Steuerungspiloten, Relais, Motor-Sperre zur Verfügung'
      },
      connector_lock: { description: 'Schnittstelle für die Motor-Sperre' },
      powermeter: { description: 'Stellt das interne Leistungsmeßgerät von Yeti zur Verfügung' },
      rcd: { description: 'RCD-Schnittstelle des eingebauten RCD' }
    }
  },
  YetiEvDriver: {
    config: {
      baud_rate: {
        description: 'Serielle Baudrate die bei der Kommunikation mit Yeti-Hardware verwendet werden soll'
      },
      reset_gpio: {
        description: 'Reset GPIO-Nummer die zum HW-Zurücksetzen von Yeti verwendet werden soll. Falls <0 gesetzt ist es deaktiviert.'
      },
      serial_port: { description: 'Serielle Schnittstelle an die die Yeti-Hardware angeschlossen ist' }
    },
    description: 'Treibermodul für EV-Seite für das YETI-Hardware',
    provides: {
      ev_board_support: {
        description: 'Stellt die Board-Support-Schnittstelle zur Steuerung der niedrigen Ebene der Steuerungspiloten, Relais, RCD zur Verfügung'
      }
    }
  },
  YetiSimulator: {
    config: {
      connector_id: {
        description: 'Connector-ID des EVSE-Managers mit dem dieser Simulator verbunden ist'
      },
      reset_powermeter_on_session_start: {
        description: 'Absolute Leistungsmeßwerte auf Null zurücksetzen wenn CP von Zustand A zu B wechselt'
      }
    },
    description: 'SIL-Simulator für YETI-Hardware v1.0',
    provides: {
      board_support: {
        description: 'Stellt die EVSE-Board-Support-Schnittstelle zur Steuerung der niedrigen Ebene der Steuerungspiloten, Relais, RCD, Motor-Sperre zur Verfügung'
      },
      connector_lock: { description: 'Schnittstelle für die simulierten Connector-Sperre' },
      ev_board_support: {
        description: 'Stellt die EV-Board-Support-Schnittstelle zur Steuerung der niedrigen Ebene der Steuerungspiloten, Relais, RCD zur Verfügung'
      },
      powermeter: { description: 'Stellt das interne Leistungsmeßgerät von Yeti zur Verfügung' },
      rcd: { description: 'Schnittstelle für das simulierten AC-RCD' }
    }
  }
} as const;
