// SPDX-License-Identifier: Apache-2.0
// Copyright 2020 - 2025 Pionix GmbH and Contributors to EVerest

/* eslint-disable prettier/prettier */
export default {
  ISO15118_charger: {
    cmds: {
      ac_contactor_closed: {
        arguments: {
          status: {
            description: 'Auf true setzen wenn Kontaktor geschlossen ist, auf false wenn Kontaktor geöffnet ist'
          }
        },
        description: 'Diese Nachricht ist eine asynchrone Antwort auf eine zuvor veröffentlichte ac_close_contactor oder ac_open_contactor.'
      },
      authorization_response: {
        arguments: {
          authorization_status: {
            description: 'Autorisierungsstatus des ID Tokens'
          },
          certificate_status: {
            description: 'Zertifikatsstatusinformation'
          }
        },
        description: 'Diese Nachricht ist eine asynchrone Antwort auf eine zuvor veröffentlichte require_auth_eim oder require_auth_pnc. Die SECC informiert den EVCC darüber ob die Autorisierung akzeptiert wurde oder nicht.'
      },
      cable_check_finished: {
        arguments: {
          status: {
            description: 'Auf true setzen wenn Kabelprüfung in Ordnung ist'
          }
        },
        description: 'Kabelprüfung ist abgeschlossen, Spannung unter 20V und Isolationswiderstand des Kabels ist in Ordnung'
      },
      dlink_ready: {
        arguments: {
          value: {
            description: 'Auf true setzen wenn Verbindung bereit ist, auf false wenn die Verbindung beendet ist'
          }
        },
        description: 'Signalisiert dlink_ready aus der SLAC-Ebene gemäß ISO15118-3'
      },
      pause_charging: {
        arguments: {
          pause: {
            description: 'Auf true setzen um zu pausieren, auf false setzen um fortzufahren'
          }
        },
        description: 'Pausiert den Ladevorgang (nur in ISO15118-20)'
      },
      receipt_is_required: {
        arguments: {
          receipt_required: {
            description: 'Auf true setzen wenn Beleg erforderlich ist, auf false wenn nicht'
          }
        },
        description: 'Dieses Element wird von der SECC verwendet um anzuzeigen dass der EVCC eine MeteringReceiptReq-Nachricht senden muss um den Metering-Info-Datensatz zu signieren.'
      },
      reset_error: {
        description: 'Alle Fehler zurücksetzen'
      },
      send_error: {
        arguments: {
          error: {
            description: 'Der EVSE-Fehler-Enum'
          }
        },
        description: 'Ein Fehler ist aufgetreten. Senden Sie diesen Fehler um den EV zu informieren.'
      },
      session_setup: {
        arguments: {
          central_contract_validation_allowed: {
            description: 'Gibt an ob der Fahrzeugvertrag bei erfolgloser lokaler Validierung an eine CSMS weitergeleitet und validiert werden darf'
          },
          payment_options: {
            description: 'Bietet eine Liste der Zahlungsoptionen an den EVCC',
            items: {
              description: 'Dies sind die Zahlungsoptionen die eine SECC an den EVCC anbietet'
            }
          },
          supported_certificate_service: {
            description: 'Der Ladepunkt unterstützt den Zertifikatsinstallation-/Update-Service und hat eine Verbindung zu einem SA für diesen Zweck'
          }
        },
        description: 'Bei jedem Sitzungsstart sollte diese Information an das Modul gesendet werden.'
      },
      set_charging_parameters: {
        arguments: {
          physical_values: {
            description: 'Einrichten der anfänglichen physikalischen Werte für eine AC- oder DC-Ladungssitzung'
          }
        },
        description: 'Beim Start werden die Ladeparameter mindestens einmal festgelegt. Können später aktualisiert werden. Wenn eine Ladungssitzung gerade aktiv ist können einige aktualisierte Werte nur für die nächste Ladungssitzung verwendet werden.'
      },
      setup: {
        arguments: {
          debug_mode: {
            description: 'Aktivieren/Deaktivieren des Debug-Modus'
          },
          evse_id: {
            description: 'Legt eine ID fest die den EVSE und die Stromquelle eindeutig identifiziert mit der das Fahrzeug verbunden ist'
          },
          sae_j2847_mode: {
            description: 'Ladepunkt unterstützt SAE J2847 V2G/V2H Version'
          },
          supported_energy_transfer_modes: {
            description: 'Verfügbare Energieübertragungsmodi die vom EVSE unterstützt werden',
            items: {
              description: 'Die verschiedenen Energie-Modi die von der SECC unterstützt werden'
            }
          }
        },
        description: 'Beim Start sollten alle notwendigen Informationen einmal an das Modul gesendet werden.'
      },
      stop_charging: {
        arguments: {
          stop: {
            description: 'Auf true setzen um zu stoppen, auf false setzen um fortzufahren'
          }
        },
        description: 'Stoppt den Ladevorgang'
      },
      update_ac_max_current: {
        arguments: {
          max_current: {
            description: 'Maximale Stromstärke in A'
          }
        },
        description: 'Aktualisiert die maximale zulässige Stromstärke pro Phase. Mindestens einmal während des Starts aufrufen.'
      },
      update_dc_maximum_limits: {
        arguments: {
          maximum_limits: {
            description: 'Maximale Werte (Strom, Leistung und Spannung) die der EVSE liefern kann'
          }
        },
        description: 'Aktualisiert die maximalen Grenzwerte. Mindestens einmal während des Starts aufrufen.'
      },
      update_dc_minimum_limits: {
        arguments: {
          minimum_limits: {
            description: 'Minimale Werte (Strom und Spannung) die der EVSE liefern kann'
          }
        },
        description: 'Aktualisiert die minimalen Grenzwerte. Mindestens einmal während des Starts aufrufen.'
      },
      update_dc_present_values: {
        arguments: {
          present_voltage_current: {
            description: 'Aktuelle Spannung und Stromstärke'
          }
        },
        description: 'Aktualisiert die aktuellen Werte aus der DC-Stromversorgung'
      },
      update_isolation_status: {
        arguments: {
          isolation_status: {
            description: 'Ergebnis der Isolationsüberwachung'
          }
        },
        description: 'Aktualisiert den Isolationszustand'
      },
      update_meter_info: {
        arguments: {
          powermeter: {
            description: 'Enthält den meterInfo-Datensatz mit dem neuesten Zählerstand und anderen zählerrelevanten Daten'
          }
        },
        description: 'Aktualisiert Zählerinformationen'
      }
    },
    description: 'Diese Schnittstelle definiert einen ISO15118-Ladepunkt.',
    vars: {
      ac_close_contactor: {
        description: 'Der Kontaktor sollte geschlossen werden'
      },
      ac_eamount: {
        description: '[Wh] Menge an Energie die den EVs Schätzung widerspiegelt wie viel Energie benötigt wird um das vom Benutzer konfigurierte Ladeziel für die aktuelle Ladungssitzung zu erreichen'
      },
      ac_ev_max_current: {
        description: '[A] Maximale Stromstärke die vom EV pro Phase unterstützt wird'
      },
      ac_ev_max_voltage: {
        description: '[V] RMS des maximalen Nennspannung die das Fahrzeug akzeptieren kann, gemessen zwischen einer Phase und Neutral'
      },
      ac_ev_min_current: {
        description: '[A] EVMinCurrent wird verwendet um der SECC mitzuteilen dass eine Ladung unter diesem Minimum nicht energie-/kosteneffizient für das EV ist'
      },
      ac_open_contactor: {
        description: 'Der Kontaktor sollte geöffnet werden'
      },
      current_demand_finished: {
        description: 'Der Ladevorgang wurde abgeschlossen'
      },
      current_demand_started: {
        description: 'Der Ladevorgang hat begonnen und der EV möchte geladen werden'
      },
      d20_dc_dynamic_charge_mode: {
        description: 'Die Parameter die der EVCC anbietet und für den dynamischen Steuerungsmodus festlegt'
      },
      dc_bulk_charging_complete: {
        description: 'Optional: Wenn auf TRUE gesetzt zeigt das EV an dass die Bulk-Ladung (ca. 80% SOC) abgeschlossen ist'
      },
      dc_bulk_soc: {
        description: 'Optional: [%] SOC bei dem das EV die schnelle Ladung als beendet betrachtet'
      },
      dc_charging_complete: {
        description: 'Optional: Wenn auf TRUE gesetzt zeigt das EV an dass die vollständige Ladung (100% SOC) abgeschlossen ist'
      },
      dc_ev_energy_capacity: {
        description: 'Optional: [Wh] Energiekapazität des EV'
      },
      dc_ev_energy_request: {
        description: 'Optional: [Wh] Menge an Energie die das EV vom EVSE anfordert'
      },
      dc_ev_maximum_limits: {
        description: 'Maximale Werte (Strom, Leistung und Spannung) die vom EV unterstützt und erlaubt sind'
      },
      dc_ev_present_voltage: {
        description: 'Aktuelle Spannung gemessen vom EV'
      },
      dc_ev_remaining_time: {
        description: 'Geschätzte oder berechnete Zeit bis zur Abschluss der Bulk- und Vollladung'
      },
      dc_ev_status: {
        description: 'Aktueller Status des EV'
      },
      dc_ev_target_voltage_current: {
        description: 'Zielspannung und Stromstärke die vom EV angefordert werden'
      },
      dc_full_soc: {
        description: 'Optional: [%] SOC bei dem das EV den Akku als vollständig geladen betrachtet'
      },
      dc_open_contactor: {
        description: 'Der Kontaktor sollte geöffnet werden'
      },
      departure_time: {
        description: 'Optional: [RFC3339 UTC] Dieses Element wird verwendet um anzuzeigen wann das Fahrzeug den Ladevorgang beenden möchte'
      },
      display_parameters: {
        description: 'Parameter die auf dem EVSE angezeigt werden können (SOC, Batteriekapazität)'
      },
      dlink_error: {
        description: 'Beendet die Datenverbindung und startet den Matching-Prozess neu.'
      },
      dlink_pause: {
        description: 'Fordert den Energiesparmodus an während der MATCHED-Status beibehalten wird.'
      },
      dlink_terminate: {
        description: 'Beendet die Datenverbindung und wird UNMATCHED.'
      },
      ev_app_protocol: {
        description: 'Debug_Lite - Diese Anforderungsnachricht liefert eine Liste der vom EVCC unterstützten Lade-Protokolle'
      },
      evcc_id: {
        description: 'Gibt die Identifizierung des EV in einem lesbaren Format an. Enthält die MAC-Adresse des EVCC in Großbuchstaben'
      },
      meter_info_requested: {
        description: 'Der EV hat Zählerinformationen vom EVSE angefordert'
      },
      requested_energy_transfer_mode: {
        description: 'Ausgewählter Energieübertragungsmodus für die Ladung der vom EVCC angefordert wurde.'
      },
      require_auth_eim: {
        description: 'Eine EIM-Autorisierung ist erforderlich'
      },
      require_auth_pnc: {
        description: 'Der EVCC liefert die Zahlungsdetails für eine PnC-Autorisierung indem er die Signaturzertifikatkette und die eMAID sendet.'
      },
      sae_bidi_mode_active: {
        description: 'Der SAE J2847 Bidi-Modus ist aktiv'
      },
      selected_payment_option: {
        description: 'Dieses Element wird verwendet um den Zahlungstyp anzuzeigen'
      },
      selected_protocol: {
        description: 'Debug - Enthält das ausgewählte Protokoll'
      },
      start_cable_check: {
        description: 'Der Ladepunkt sollte jetzt eine Kabelprüfung starten'
      },
      start_pre_charge: {
        description: 'Der Ladepunkt sollte jetzt die Vorladephase starten'
      },
      v2g_messages: {
        description: 'Debug - Dieses Element enthält alle V2G-Elemente und sollte nur für Debug-Zwecke verwendet werden'
      },
      v2g_setup_finished: {
        description: 'v2g_setup_finished aus ISO15118-3. Auslösen wenn EV eine PowerDeliveryReq-Nachricht mit ChargeProgess gleich Start oder Stop sendet'
      }
    }
  },
  ISO15118_ev: {
    cmds: {
      enable_sae_j2847_v2g_v2h: {
        description: 'Aktiviert SAE J2847 2 V2H V2G'
      },
      pause_charging: {
        description: 'Pausiert den EV-Ladekommunikationsprozess'
      },
      set_bpt_dc_params: {
        arguments: {
          EvBPTParameters: {
            description: 'BPT-Parameter für DC-Ladung'
          }
        },
        description: 'Setzt die BPT-Parameter für DC-Ladung'
      },
      set_dc_params: {
        arguments: {
          EvParameters: {
            description: 'Zielparameter für DC-Ladung'
          }
        },
        description: 'Setzt die Zielparameter für einen DC-Ladevorgang'
      },
      set_fault: {
        description: 'TODO_SL: Setzt die verschiedenen EV-Fehler um diese Fehler an die Ladestation zu kommunizieren'
      },
      start_charging: {
        arguments: {
          DepartureTime: {
            description: 'Die Zeit zu der der EVCC die Ladestation verlassen möchte (in Sekunden)'
          },
          EAmount: {
            description: 'Die Menge an Energie die der EVCC laden möchte (in kWh)'
          },
          EnergyTransferMode: {
            description: 'Ausgewählter Energieübertragungsmodus für die Ladung der vom EVCC angefordert wurde'
          }
        },
        description: 'Startet den EV-Ladevorgang',
        result: {
          description: 'Gibt true zurück wenn die EVCC-Simulation gestartet wurde'
        }
      },
      stop_charging: {
        description: 'Stoppt den EV-Ladekommunikationsprozess'
      }
    },
    description: 'Diese Schnittstelle definiert einen einfachen ISO15118-EV.',
    vars: {
      AC_EVPowerReady: {
        description: 'Das Auto ist bereit für Strom (HLC)'
      },
      AC_EVSEMaxCurrent: {
        description: 'EVSE maximale Stromstärke pro Phase'
      },
      AC_StopFromCharger: {
        description: 'Der Ladepunkt möchte den Ladevorgang stoppen'
      },
      DC_PowerOn: {
        description: 'Der EV möchte die DC-Kontaktoren schließen'
      },
      V2G_Session_Finished: {
        description: 'Die V2G-Sitzung zwischen dem Ladepunkt und dem Auto ist beendet'
      },
      pause_from_charger: {
        description: 'Der Ladepunkt möchte die Sitzung pausieren (nur d20)'
      }
    }
  },
  ISO15118_vas: {
    cmds: {
      get_service_parameters: {
        arguments: {
          service_id: {
            description: 'Service-ID'
          }
        },
        description: 'Dieser Befehl gibt dynamisch die Parameter-Sätze für einen einzelnen Service zurück. Er wird bei Empfang von ServiceDetailReq aufgerufen und gibt die Nutzlast für ServiceDetailRes zurück.',
        result: {
          description: 'Parameter-Sätze für diesen VAS'
        }
      },
      selected_services: {
        arguments: {
          selected_services: {
            description: 'Liste der ausgewählten Services und ihrer Parameter-Satz-IDs'
          }
        },
        description: 'Callback um dem VAS-Anbieter mitzuteilen welche Services und Parameter-Sätze vom EV ausgewählt wurden. Wird bei Empfang von ServiceSelectionReq aufgerufen und nur einmal pro Anfrage aufgerufen.'
      }
    },
    description: 'Benutzerdefinierter VAS-Anbieter für ISO 15118',
    vars: {
      offered_vas: {
        description: 'Liste der angebotenen VAS-Service-IDs'
      }
    }
  },
  ac_rcd: {
    cmds: {
      reset: {
        description: 'Setzt den RCD nach einem Auslösen zurück. Wird möglicherweise von echter Hardware nicht unterstützt.',
        result: {
          description: 'True: Zurücksetzen erfolgreich, False: Zurücksetzen fehlgeschlagen.'
        }
      },
      self_test: {
        description: 'Führt einen Selbsttest des RCD durch. Falls er fehlschlägt sollte ein Fehler vom Typ Selftest ausgelöst werden.'
      }
    },
    description: 'Diese Schnittstelle bietet einen AC-Residualstromüberwacher (RCD). Die tatsächliche Notabschaltung erfolgt direkt in der Hardware, aber diese Schnittstelle ermöglicht einige Steuerung und Telemetrie.',
    vars: {
      rcd_current_mA: {
        description: 'Residualstrom in mA. Beachten Sie dass dies nichts auslöst, es ist nur zur Berichterstattung.'
      }
    }
  },
  auth: {
    cmds: {
      set_connection_timeout: {
        arguments: {
          connection_timeout: {
            description: 'Verbindungs-Timeout in Sekunden'
          }
        },
        description: 'Setzt das Verbindungs-Timeout'
      },
      set_master_pass_group_id: {
        arguments: {
          master_pass_group_id: {
            description: 'Die Master-Pass-Gruppen-ID'
          }
        },
        description: 'Setzt die Master-Pass-Gruppen-ID. IdTokens die diese ID als parent_id_token haben gehören zur Master-Pass-Gruppe. Das bedeutet sie können jede laufende Transaktion stoppen, aber keine Transaktionen starten. Dies kann zum Beispiel von Beamten zur Beendigung einer laufenden Transaktion verwendet werden wenn ein EV abgeschleppt werden muss. Wenn master_pass_group_id eine leere Zeichenkette ist wird sie nicht verwendet.'
      },
      withdraw_authorization: {
        arguments: {
          request: {
            description: 'Die Anfrage'
          }
        },
        description: 'Entzieht die gewährte Autorisierung. Wenn nur die evse_id angegeben ist wird die gewährte Autorisierung für diese EVSE widerrufen. Wenn nur die id_token angegeben ist wird die gewährte Autorisierung für jede EVSE widerrufen auf der dieses id_token platziert ist.\nWenn beide Parameter angegeben sind wird die gewährte Autorisierung für die gegebene EVSE widerrufen wenn das platzierte id_token mit dem gegebenen id_token übereinstimmt.\nWenn kein Parameter angegeben ist werden alle gewährten Autorisierungen für alle EVSE entfernt',
        result: {
          description: 'Akzeptiert, falls die angeforderte Autorisierung entfernt wurde. AuthorizationNotFound, falls kein Treffer für die Anfrage gefunden wurde. Abgelehnt, falls das Modul die Anfrage aus anderen Gründen nicht verarbeiten konnte.'
        }
      }
    },
    description: 'Schnittstelle des Authentifizierungs-Frameworks',
    vars: {
      token_validation_status: {
        description: 'Emittiert alle Ereignisse im Zusammenhang mit der aktuellen Token-Validierung'
      }
    }
  },
  auth_token_provider: {
    description: 'Schnittstelle zum Bereitstellen eines Tokens',
    vars: {
      provided_token: {
        description: 'Das bereitgestellte Token'
      }
    }
  },
  auth_token_validator: {
    cmds: {
      validate_token: {
        arguments: {
          provided_token: {
            description: 'Enthält Informationen über die Autorisierungsanfrage'
          }
        },
        description: 'Validiert Auth-Token und gibt Ergebnis zurück (mit optionaler Begründung)',
        result: {
          description: 'Ergebnisobjekt mit Validierungsergebnis'
        }
      }
    },
    description: 'Prüft bereitgestellte Tokens auf Gültigkeit',
    vars: {
      validate_result_update: {
        description: 'Aktualisiertes Validierungsergebnis für ein gegebenes Token aufgrund von Änderungen. Diese können durch TransactionEvent-Meldungen oder StartTransaction ausgelöst werden.'
      }
    }
  },
  bank_session_token_provider: {
    cmds: {
      get_bank_session_token: {
        description: 'Gibt das Token zurück.',
        result: {
          description: 'Token'
        }
      }
    },
    description: 'Stellt das Token bereit das zur eindeutigen Identifizierung der Sitzung in der Bankabrechnung verwendet werden kann.'
  },
  car_simulator: {
    cmds: {
      enable: {
        arguments: {
          value: {
            description: 'Aktivieren/Deaktivieren des Simulationsmodus'
          }
        },
        description: 'Aktiviert oder deaktiviert die Simulation.'
      },
      execute_charging_session: {
        arguments: {
          value: {
            description: 'Lade-Simulationszeichenkette'
          }
        },
        description: 'Führt eine Lade-Simulationszeichenkette aus'
      }
    },
    description: 'Dies definiert einen Autosimulator der eine vollständige Ladungssitzung von Einstecken bis Ausstecken ausführen kann. Er verwendet HIL- oder SIL-Simulationscontroller von z.B. dem Yeti HIL-Simulator.',
    vars: {
      enabled: {
        description: 'Gibt an ob die Simulation derzeit aktiviert oder nicht ist'
      }
    }
  },
  connector_lock: {
    cmds: {
      lock: {
        description: 'Verriegelt den Stecker'
      },
      unlock: {
        description: 'Entriegelt den Stecker (z.B. normales Entriegeln oder erzwungen durch OCPP)'
      }
    },
    description: 'Diese Schnittstelle definiert einen Stecker-Schließmotor (z.B. für AC-Steckdosen mit keinem festen Kabel)'
  },
  debug_json: {
    description: 'Diese Schnittstelle definiert ein generisches JSON-Objekt-Debug-Variablen-Veröffentlicher für die Verwendung in jedem Modul. Kann verwendet werden um Debug-Variablen z.B. in der Web-Oberfläche anzuzeigen.',
    vars: {
      debug_json: {
        description: 'Stellt das Debug-Objekt als JSON-Objekt zur Verfügung'
      },
      title: {
        description: 'Titel des Debug-Objekts'
      }
    }
  },
  display_message: {
    cmds: {
      clear_display_message: {
        arguments: {
          request: {
            description: 'Die Anfrage zum Löschen einer Nachricht'
          }
        },
        description: 'Befehl zum Entfernen einer Anzeigemeldung',
        result: {
          description: 'Antwort auf die Anfrage zur Löschen einer Nachricht'
        }
      },
      get_display_messages: {
        arguments: {
          request: {
            description: 'Die Anfrage nach Anzeigemeldungen'
          }
        },
        description: 'Befehl zum Abrufen einer oder mehrerer Anzeigemeldungen.',
        result: {
          description: 'Die Anzeigemeldungen oder ein leeres Array wenn es keine gibt'
        }
      },
      set_display_message: {
        arguments: {
          request: {
            description: 'Anfrage zum Festlegen einer Anzeigemeldung',
            items: {
              description: 'Die Anzeigemeldungen zum Festlegen'
            }
          }
        },
        description: 'Befehl zum Festlegen oder Ersetzen einer Anzeigemeldung.',
        result: {
          description: 'Antwort auf die Anfrage zur Festlegung einer Anzeigemeldung.'
        }
      }
    },
    description: 'Ein Modul das diese Schnittstelle implementiert sollte: - vordefinierte Meldungen speichern (hinzufügen, entfernen, ändern) und abrufen - Meldungen auf einem Display anzeigen\nWenn eine Anzeigemeldung eine Sitzungs-ID enthält muss die Anzeigemeldung entfernt werden sobald die Sitzung beendet ist.'
  },
  empty: {
    description: 'Diese Schnittstelle ist leer und kann für eine config-only (main) Implementierung verwendet werden'
  },
  energy: {
    cmds: {
      enforce_limits: {
        arguments: {
          value: {
            description: 'Limitobjekt das durch den Baum weitergeleitet wird.'
          }
        },
        description: 'Der EnergyManager erzwingt ein Limit mit diesem Befehl.'
      }
    },
    description: 'Diese Schnittstelle ist die interne Energienmanagement-Schnittstelle zwischen Knoten.',
    vars: {
      energy_flow_request: {
        description: 'Anfrage zur Energieflussversorgung/limitiert Energieimport (Richtung vom Netz zum Auto) und/oder Energieexport (Auto zum Netz) konsumieren/limitieren.'
      }
    }
  },
  energy_manager: {
    description: 'Diese Schnittstelle definiert den globalen EnergyManager'
  },
  energy_price_information: {
    description: 'Diese Schnittstelle definiert die Schnittstelle für eine Energiepreisprognose',
    vars: {
      energy_pricing: {
        description: 'Vorhersage-JSON-Objekt mit Zeitstempeln und der Preisprognose für Import und Export.'
      }
    }
  },
  error_history: {
    cmds: {
      get_errors: {
        arguments: {
          filters: {
            description: 'Filter die auf die Liste der Fehler angewendet werden'
          }
        },
        description: 'Nimmt eine Liste von Filtern entgegen und gibt eine Liste von Fehlern zurück',
        result: {
          description: 'Liste der gefilterten Fehler'
        }
      }
    },
    description: 'Diese Schnittstelle bietet Zugriff auf die Fehlerhistorie des EVerest-Frameworks'
  },
  ev_board_support: {
    cmds: {
      allow_power_on: {
        arguments: {
          value: {
            description: 'True: Strom erlauben, false: Strom nicht erlauben.'
          }
        },
        description: 'Setzt die allow_power_on-Flag. Wenn false darf der Kontaktor niemals eingeschaltet werden.'
      },
      diode_fail: {
        arguments: {
          value: {
            description: 'True: Diode-Fehler'
          }
        },
        description: 'Setzt einen Diode-Fehler'
      },
      enable: {
        arguments: {
          value: {
            description: 'true zum Aktivieren, false zum Deaktivieren'
          }
        },
        description: 'Aktiviert/deaktiviert die Simulation'
      },
      set_ac_max_current: {
        arguments: {
          current: {
            description: 'Maximaler Strom der vom EV angefordert wird'
          }
        },
        description: 'Setzt den maximalen Strom der vom EV angefordert wird'
      },
      set_cp_state: {
        arguments: {
          cp_state: {
            description: 'Der CP-Zustand'
          }
        },
        description: 'Setzt den CP-Zustand der vom EV-Board-Support-Treiber gesetzt werden soll (kontrolliert durch S2)'
      },
      set_rcd_error: {
        arguments: {
          rcd_current_mA: {
            description: 'RCD-Strom in mA'
          }
        },
        description: 'Setzt einen RCD-Fehler. Nur für Simulationszwecke.'
      },
      set_three_phases: {
        arguments: {
          three_phases: {
            description: 'True: Dreiphasenunterstützung, False: Einphasenunterstützung'
          }
        },
        description: 'Setzt drei- oder einphasenunterstützung'
      }
    },
    description: 'Dies definiert das Board-Support-Paket für die EV-Seite',
    vars: {
      bsp_event: {
        description: 'Ereignisse von CP/Relais'
      },
      bsp_measurement: {
        description: 'BSP-Messungen'
      },
      ev_info: {
        description: 'Weitere Details über das EV falls verfügbar'
      }
    }
  },
  ev_manager: {
    description: 'Diese Schnittstelle definiert den EV-Manager. Ein EV-Manager repräsentiert die Ladelogik der EV-Seite',
    vars: {
      bsp_event: {
        description: 'Ereignisse von CP/Relais'
      },
      ev_info: {
        description: 'Weitere Details über das EV falls verfügbar'
      }
    }
  },
  ev_slac: {
    cmds: {
      reset: {
        description: 'Setzt SLAC zurück'
      },
      trigger_matching: {
        description: 'Startet den Matching-Prozess',
        result: {
          description: 'True bei Erfolg, gibt False zurück wenn die Transition unerwartet war und nicht vom SLAC-Zustandsautomaten behandelt werden konnte.'
        }
      }
    },
    description: 'ISO15118-3 SLAC-Schnittstelle für EV-Seite',
    vars: {
      dlink_ready: {
        description: 'Informiert höhere Ebenen über eine Änderung des Datenlink-Status. Gibt true aus wenn die Verbindung aufgebaut wurde, und false wenn die Verbindung heruntergefahren wurde.'
      },
      ev_mac_address: {
        description: 'Informiert höhere Ebenen über die MAC-Adresse des Ladeanschlusses'
      },
      state: {
        description: 'Stellt den Zustands-Enum zur Verfügung.'
      }
    }
  },
  evse_board_support: {
    cmds: {
      ac_read_pp_ampacity: {
        description: 'Liest die Stromtragfähigkeit des angeschlossenen Kabels in Ampere für AC-Ladung mit einer Steckdose. Diese Funktion wird vom EvseManager verwendet um den PP-Wert zu einem bestimmten Zeitpunkt zu erhalten. Sie sollten auch die Var pp_ampacity veröffentlichen sobald sich die PP-Ampacity-Reading ändert um Änderungen z.B. während der Ladung zu signalisieren. Dies hat keinen Sinn für DC oder AC-Ladung mit einem festen angeschlossenen Kabel es muss nicht implementiert werden und der zurückgegebene Wert wird in diesen Fällen nicht verwendet.',
        result: {
          description: 'Gibt die Stromtragfähigkeit des angeschlossenen Kabels zurück'
        }
      },
      ac_set_overcurrent_limit_A: {
        arguments: {
          value: {
            description: 'Ampere-Stromlimitwert'
          }
        },
        description: 'Viele Ladepunkte implementieren eine schnelle Überstromabschaltung direkt in der Hardware die auslöst wenn das EV mehr Strom zieht als der PWM erlaubt. Wenn die Hardware diese Funktionalität nicht hat einfach diesen Befehl ignorieren. Verwenden Sie ihn nicht um die PWM-Duty-Cycle zu setzen. Andernfalls meldet dieser Befehl einen Wert der für die Überstromdetektion verwendet werden sollte. Ein Rand muss hinzugefügt werden um falsche Auslösungen zu vermeiden. Verwenden Sie nicht den PWM-Duty-Cycle um den Stromlimit in der BSP zu ermitteln, da dies bei HLC nicht funktioniert.'
      },
      ac_switch_three_phases_while_charging: {
        arguments: {
          value: {
            description: 'True: zu 3ph wechseln, False: zu 1ph wechseln'
          }
        },
        description: 'Optional, bei Zweifel nicht implementieren. Melden Sie in hardware_capabilites wenn dieser Befehl unterstützt wird. Dieser Befehl schaltet zwischen ein- und dreiphasiger Betrieb während einer aktiven Ladungssitzung. Einige Autos können dadurch permanent beschädigt werden, daher muss die BSP eine spezielle Sequenz für das Schalten implementieren. Die genaue Sequenz kann vom BSP definiert werden, aber ein Beispiel wäre C2->C1->B1->F->B1->B2->C2 oder ähnlich. Mit Vorsicht verwenden.'
      },
      allow_power_on: {
        arguments: {
          value: {
            description: 'Flag und Kontext'
          }
        },
        description: 'Setzt die allow_power_on-Flag. Wenn false dürfen Relais niemals eingeschaltet werden.'
      },
      enable: {
        arguments: {
          value: {
            description: 'True: aktiviert, false: deaktiviert.'
          }
        },
        description: 'Aktiviert oder deaktiviert den Ladepunkt. Typischerweise führt eine Deaktivierung dazu dass der Control-Pilot-Zustand F wird. Es darf keine Fahrzeuge für neue Ladungssitzungen akzeptieren wenn deaktiviert.'
      },
      evse_replug: {
        arguments: {
          value: {
            description: 'Zeit in ms für die Dauer der Replug-Sequenz'
          }
        },
        description: 'Optional, bei Zweifel nicht implementieren. Spezialbefehl um eine virtuelle Replug-Sequenz ohne Neustart der Sitzung zu initiieren. Sendet ein EvseReplugStarted-Ereignis wenn unterstützt und gestartet. BSP kümmert sich darum dass keine anderen Ereignisse wie CarPluggedIn/Out während dieser Zeit ausgelöst werden. Sobald fertig sendet es ein EvseReplugFinished. Dies ist hauptsächlich für Testzwecke gedacht, nicht für die Produktion implementieren.'
      },
      pwm_F: {
        description: 'Schaltet PWM aus mit Fehler F (konstante negative Spannung)'
      },
      pwm_off: {
        description: 'Schaltet PWM aus (konstante hohe Spannung)'
      },
      pwm_on: {
        arguments: {
          value: {
            description: 'PWM-Duty-Cycle (>0, <100)'
          }
        },
        description: 'Schaltet PWM mit Duty-Cycle (in Prozent) ein'
      }
    },
    description: 'Diese Schnittstelle definiert den Board-Support-Treiber für AC oder DC minimale Strompfad: ControlPilot, Ausgangskontaktoren. Andere Komponenten des Strompfads wie IMD(DC)/RCD(AC)/Stecker-Sperre usw. haben ihre eigenen Schnittstellen.',
    vars: {
      ac_nr_of_phases_available: {
        description: 'Momentane Phasenanzahl die dem Auto zur Verfügung steht'
      },
      ac_pp_ampacity: {
        description: 'Stromtragfähigkeit des angeschlossenen Kabels in Ampere für AC-Ladung mit einer Steckdose. Veröffentlichen Sie immer wenn es sich ändert. Dies hat keinen Sinn für DC oder AC-Ladung mit einem festen angeschlossenen Kabel, es muss nicht implementiert werden und der zurückgegebene Wert wird in diesen Fällen nicht verwendet.'
      },
      capabilities: {
        description: 'Hardwarefähigkeiten/Grenzen. Der BSP muss diese Variable mindestens einmal während des Starts veröffentlichen. Für AC sind die Fähigkeiten die Grenzen des AC-Hardware-Strompfads. Für DC sind dies die Grenzen für die AC-Eingabe für den AC/DC-Wandler. Der BSP kann diese Variable veröffentlichen um Grenzen zu aktualisieren wenn sie sich während der Laufzeit ändern, z.B. wenn sich die maximale Stromstärke ändert weil die Hardware zu heiß wird.'
      },
      event: {
        description: 'Ereignis von ControlPilot-Signal/Ausgangsrelais'
      },
      request_stop_transaction: {
        description: 'Veröffentlichen um die Transaktion ordnungsgemäß zu beenden (z.B. Benutzer hat die Stop-Taste gedrückt)'
      },
      telemetry: {
        description: 'Andere Telemetrie'
      }
    }
  },
  evse_manager: {
    cmds: {
      authorize_response: {
        arguments: {
          provided_token: {
            description: 'Das Token für das Autorisierung angefordert wurde'
          },
          validation_result: {
            description: 'Das Validierungsergebnis'
          }
        },
        description: 'Berichtet das Ergebnis einer Autorisierungsanfrage an den EvseManager. Enthält das bereitgestellte Token für das Autorisierung angefordert wurde und das Validierungsergebnis'
      },
      cancel_reservation: {
        description: 'Aufruf um anzuzeigen dass EVSE nicht mehr reserviert ist'
      },
      enable_disable: {
        arguments: {
          cmd_source: {
            description: 'Quelle des Enable-Befehls'
          },
          connector_id: {
            description: 'Gibt die ID des zu aktivierenden Steckers an. Wenn 0 sollte der gesamte EVSE aktiviert werden'
          }
        },
        description: 'Aktiviert oder deaktiviert den EVSE. Schaltet PWM mit Fehler F aus. Ladung ist nur möglich wenn ein EVSE aktiviert ist.',
        result: {
          description: 'Gibt true zurück wenn EVSE nach dem Befehl aktiviert ist, false wenn deaktiviert. Dies kann nicht der gleiche Wert wie die Anfrage sein, da es eine höhere Priorität von einer anderen Quelle geben kann die entscheidet ob es aktiviert oder deaktiviert ist.'
        }
      },
      external_ready_to_start_charging: {
        description: 'Es gibt Situationen in denen ein anderes Modul einige Initialisierung nach dem Prinzip des EvseManager benötigt um die Ladung zu starten. Dieser Befehl kann verwendet (optimiert in Kombination mit einer Konfigurationoption) werden um die Ladung bereit zu stellen bis das externe Modul mit seiner Initialisierung fertig ist',
        result: {
          description: 'Gibt true zurück wenn das Signal vom EvseManager-Implementierung verwendet wurde'
        }
      },
      force_unlock: {
        arguments: {
          connector_id: {
            description: 'Gibt die ID des Steckers an der jetzt entsperrt werden soll'
          }
        },
        description: 'Zwingt den Stecker jetzt zu entsperren. Während normaler Betrieb wird der Stecker in der korrekten Sequenz gesperrt/entsperrt. Verwenden Sie diese Funktion nicht außer es wird explizit von z.B. einer Management-Cloud angefordert.',
        result: {
          description: 'Gibt true zurück wenn das Entsperrkommando akzeptiert wurde, oder false wenn es nicht unterstützt wird. Es spiegelt nicht den Erfolg/Fehlschlag der tatsächlichen Entsperrung wider. Wenn die Entsperrung fehlschlägt soll die connector_lock-Schnittstelle einen Fehler asynchron auslösen.'
        }
      },
      get_evse: {
        description: 'Aufruf um Informationen über den EVSE einzufügen einschließlich seiner Stecker',
        result: {
          description: 'Objekt das Informationen über den EVSE einschließlich seiner Stecker enthält'
        }
      },
      pause_charging: {
        description: 'Aufruf um EVSE zum Pausieren der Ladung zu signalisieren',
        result: {
          description: 'Gibt true zurück wenn erfolgreich pausiert oder bereits im paused_by_evse-Modus war'
        }
      },
      reserve: {
        arguments: {
          reservation_id: {
            description: 'Die Reservierungs-ID (sollte zum TransactionStarted-Ereignis hinzugefügt werden). Setzen Sie dies auf einen negativen Wert wenn es keine spezifische Reservierungs-ID für diesen EVSE gibt, aber der EVSE dennoch in den Reserviert-Status wechseln sollte weil es globale Reservierungen gibt.'
          }
        },
        description: 'Aufruf um anzuzeigen dass EVSE reserviert ist. Kann verwendet werden um z.B. die Farbe der HMI-LEDs zu ändern um Reservierung anzuzeigen.',
        result: {
          description: 'Gibt true zurück wenn der EVSE die Reservierung akzeptiert hat, sonst false.'
        }
      },
      resume_charging: {
        description: 'Aufruf um EVSE zum Fortsetzen der Ladung zu signalisieren',
        result: {
          description: 'Gibt true zurück wenn Fortsetzen erfolgreich war, sonst false (z.B. Fortsetzen einer Auto-Pause funktioniert nicht)'
        }
      },
      set_faulted: {
        description: 'Setzt den EVSE-Manager extern auf fehlerhaft. Er kann auch selbst auf fehlerhaft setzen wenn er einen internen Fehler erkennt.'
      },
      set_plug_and_charge_configuration: {
        arguments: {
          plug_and_charge_configuration: {
            description: 'Das Plug-and-Charge-Konfigurationsobjekt'
          }
        },
        description: 'Setzt die Konfiguration die für ISO15118 erforderlich ist um Vertragsautorisierung zu behandeln.'
      },
      stop_transaction: {
        arguments: {
          request: {
            description: 'Anfrage um die Transaktion zu beenden.'
          }
        },
        description: 'Stoppt Transaktion und bricht die Ladung extern ab, Ladung kann nur durch erneutes Einstecken des Autos fortgesetzt werden. EVSE stoppt Transaktion auch automatisch z.B. beim Trennen, daher muss dies nur aufgerufen werden wenn die Transaktion vorzeitig enden soll.',
        result: {
          description: 'Gibt true zurück wenn erfolgreich'
        }
      },
      withdraw_authorization: {
        description: 'Aufruf um anzuzeigen dass EVSE nicht länger autorisiert ist eine Transaktion zu starten (z.B. bei connection_timeout)'
      }
    },
    description: 'Diese Schnittstelle definiert den EVSE-Manager. Ein EVSE-Manager repräsentiert den Ladekern einer physischen Steckdose.',
    vars: {
      car_manufacturer: {
        description: 'Autohersteller (falls bekannt)'
      },
      enforced_limits: {
        description: 'Erzwungene Grenzen für diesen Knoten (kommt vom EnergyManager)'
      },
      ev_info: {
        description: 'Weitere Details über das EV falls verfügbar'
      },
      evse_id: {
        description: 'EVSE-ID inklusive der Stecker-Nummer, z.B. DE*PNX*E123456*1'
      },
      hw_capabilities: {
        description: 'Hardwarefähigkeiten/Grenzen'
      },
      limits: {
        description: 'Grenzen dieses EVSE, veröffentlicht bei Änderung'
      },
      powermeter: {
        description: 'Gemessene Datensätze'
      },
      powermeter_public_key_ocmf: {
        description: 'Öffentlicher Schlüssel des Stromzählers'
      },
      ready: {
        description: 'Signalisiert dass der EVSE-Manager bereit ist die Ladung zu starten'
      },
      selected_protocol: {
        description: 'Enthält das ausgewählte Protokoll zur Ladung zu informativen Zwecken'
      },
      session_event: {
        description: 'Emittiert alle Ereignisse im Zusammenhang mit Sitzungen'
      },
      telemetry: {
        description: 'Andere Telemetrie'
      },
      waiting_for_external_ready: {
        description: 'Signalisiert dass der EVSE-Manager grundsätzlich bereit ist die Ladung zu starten, aber verzögert das Senden des bereit-Signals bis das externe_ready_to_start_charging-Kommando empfangen wird.'
      }
    }
  },
  evse_security: {
    cmds: {
      delete_certificate: {
        arguments: {
          certificate_hash_data: {
            description: 'Gibt an welches Zertifikat gelöscht werden soll'
          }
        },
        description: 'Befehl zum Löschen eines Zertifikats',
        result: {
          description: 'Ergebnis des Versuchs ein Zertifikat zu löschen'
        }
      },
      generate_certificate_signing_request: {
        arguments: {
          certificate_type: {
            description: 'Gibt den Typ des Leaf-Zertifikats an'
          },
          common: {
            description: 'Gibt den Common Name (CN) des Zertifikats an'
          },
          country: {
            description: 'Gibt den Country Name (C) des Zertifikats an'
          },
          organization: {
            description: 'Gibt den Organization Name (O) des Zertifikats an'
          },
          use_tpm: {
            description: 'Gibt an ob der private Schlüssel im TPM gespeichert werden soll'
          }
        },
        description: 'Befehl zum Generieren einer Zertifikats-Anfrage für die angegebene Verwendung',
        result: {
          description: 'Die Zertifikats-Anfrage im PEM-Format'
        }
      },
      get_all_valid_certificates_info: {
        arguments: {
          certificate_type: {
            description: 'Gibt den Typ des Leaf-Zertifikats an'
          },
          encoding: {
            description: 'Gibt die Codierung des Schlüssels an'
          },
          include_ocsp: {
            description: 'Gibt an ob OCSP-Daten pro Zertifikat auch angefordert werden'
          }
        },
        description: 'Findet die neuesten gültigen Leaf-Zertifikate für jedes vorhandene Root-Zertifikat im Dateisystem und gibt alle neuesten gültigen Leaf-Zertifikate für verschiedene Root-Zertifikate zurück',
        result: {
          description: 'Die Antwort auf den angeforderten Befehl'
        }
      },
      get_installed_certificates: {
        arguments: {
          certificate_types: {
            description: 'Typen der abzurufenden Zertifikate'
          }
        },
        description: 'Befehl zum Abrufen installierter Zertifikate des EVSE',
        result: {
          description: 'Gibt das Ergebnis des Befehls und optionale Zertifikats-Hash-Daten an'
        }
      },
      get_leaf_certificate_info: {
        arguments: {
          certificate_type: {
            description: 'Gibt den Typ des Leaf-Zertifikats an'
          },
          encoding: {
            description: 'Gibt die Codierung des Schlüssels an'
          },
          include_ocsp: {
            description: 'Gibt an ob OCSP-Daten pro Zertifikat auch angefordert werden'
          }
        },
        description: 'Befehl zum Abrufen der Pfade des Zertifikats und des jeweiligen Schlüssels',
        result: {
          description: 'Die Antwort auf den angeforderten Befehl'
        }
      },
      get_leaf_expiry_days_count: {
        arguments: {
          certificate_type: {
            description: 'Gibt den Typ des Zertifikats an'
          }
        },
        description: 'Befehl zum Abrufen der Anzahl der Tage bis zum Ablauf des angegebenen Leaf-Zertifikats. Wenn kein Leaf-Zertifikat installiert ist gibt dieser Befehl 0 zurück',
        result: {
          description: 'Anzahl der Tage bis zum Ablauf des angegebenen Leaf-Zertifikats'
        }
      },
      get_mo_ocsp_request_data: {
        arguments: {
          certificate_chain: {
            description: 'Zertifikatskette für die die OCSP-Daten abgerufen werden'
          }
        },
        description: 'Befehl zum Abrufen der OCSP-Anfrage-Daten der angegebenen MO-Zertifikatskette. Enthält OCSP-Daten für jedes Zertifikat in der Kette (ohne das Root-Zertifikat)',
        result: {
          description: 'Die OCSP-Anfrage-Daten der angegebenen Zertifikatskette. Enthält OCSP-Daten für jedes Zertifikat in der angegebenen Kette. '
        }
      },
      get_v2g_ocsp_request_data: {
        description: 'Befehl zum Abrufen der OCSP-Anfrage-Daten der V2G-Zertifikate. Enthält OCSP-Daten für jedes Zertifikat in der Kette (ohne das Root-Zertifikat). ',
        result: {
          description: 'Die OCSP-Anfrage-Daten aller V2G-CA-Zertifikate einschließlich der Sub CAs (ohne das Root-Zertifikat)'
        }
      },
      get_verify_file: {
        arguments: {
          certificate_type: {
            description: 'Gibt den Typ des CA-Zertifikats an'
          }
        },
        description: 'Befehl zum Abrufen des Dateipfads eines CA-Bundles das für die Überprüfung verwendet werden kann',
        result: {
          description: 'Der Pfad der CA-Bundle-Datei'
        }
      },
      get_verify_location: {
        arguments: {
          certificate_type: {
            description: 'Gibt den Typ des CA-Zertifikats an'
          }
        },
        description: 'Befehl zum Abrufen des Dateipfads des CA-Root-Verzeichnisses das für die Überprüfung verwendet werden kann. Ruft auch c_rehash für dieses Verzeichnis auf',
        result: {
          description: 'Der Pfad des CA-Zertifikats-Verzeichnisses'
        }
      },
      install_ca_certificate: {
        arguments: {
          certificate: {
            description: 'Ein PEM-kodiertes X.509-Zertifikat.'
          },
          certificate_type: {
            description: 'Gibt den Typ des Zertifikats an'
          }
        },
        description: 'Befehl zum Installieren eines neuen CA-Zertifikats',
        result: {
          description: 'Ergebnis des Versuchs ein CA-Zertifikat zu installieren'
        }
      },
      is_ca_certificate_installed: {
        arguments: {
          certificate_type: {
            description: 'Gibt den Typ des CA-Zertifikats an'
          }
        },
        description: 'Befehl der angibt ob das angegebene CA-Zertifikat installiert ist',
        result: {
          description: 'True wenn das CA-Zertifikat installiert ist, sonst false'
        }
      },
      update_leaf_certificate: {
        arguments: {
          certificate_chain: {
            description: 'Leaf-Zertifikat oder Zertifikatskette die installiert werden soll'
          },
          certificate_type: {
            description: 'Gibt den Typ des Zertifikats an'
          }
        },
        description: 'Befehl zum Installieren oder Aktualisieren eines SECC- oder CSMS-Leaf-Zertifikats',
        result: {
          description: 'Ergebnis des Versuchs ein Leaf-Zertifikat zu installieren oder zu aktualisieren'
        }
      },
      update_ocsp_cache: {
        arguments: {
          certificate_hash_data: {
            description: 'Zertifikats-Hash-Daten die das Zertifikat identifizieren für das der Cache aktualisiert werden soll'
          },
          ocsp_response: {
            description: 'OCSPResponse-Klasse wie in IETF RFC 6960 definiert. DER und dann base64-kodiert'
          }
        },
        description: 'Befehl zum Aktualisieren des OCSP-Caches mit den angegebenen Daten'
      },
      verify_certificate: {
        arguments: {
          certificate_chain: {
            description: 'Leaf-Zertifikat oder Zertifikatskette die überprüft werden soll'
          },
          certificate_types: {
            description: 'Gibt den Typ des Zertifikats an'
          }
        },
        description: 'Befehl zum Überprüfen des angegebenen Zertifikats',
        result: {
          description: 'Ergebnis der Überprüfung'
        }
      },
      verify_file_signature: {
        arguments: {
          file_path: {
            description: 'Pfad zur Datei die überprüft werden soll'
          },
          signature: {
            description: 'Base64-kodierte Datei-Signatur'
          },
          signing_certificate: {
            description: 'Zertifikat mit dem die Datei signiert wurde. PEM-kodiertes X.509-Zertifikat'
          }
        },
        description: 'Überprüfen Sie die Datei am angegebenen Pfad mit dem bereitgestellten Zertifikat und der Signatur',
        result: {
          description: 'True wenn die Überprüfung erfolgreich war, false wenn nicht'
        }
      }
    },
    description: 'Diese Schnittstelle stellt sicherheitsrelevante Funktionen und Zugriff auf sicheren Speicher zur Verfügung die ein EVSE benötigt. Dies schließt die Handhabung aller sicherheitsrelevanter Funktionen ein die in OCPP und ISO15118 spezifiziert sind. Die Module die diese Schnittstelle implementieren sind verantwortlich für die Überprüfung des Gültigkeitszeitraums der Leaf-Zertifikate und initiieren Zertifikats-Anfragen wenn Leaf-Zertifikate kurz vor Ablauf stehen.',
    vars: {
      certificate_store_update: {
        description: 'Variable die angibt dass der Zertifikatsspeicher aktualisiert wurde, d.h. entweder ein Zertifikat wurde installiert oder gelöscht. Dies wird verwendet um andere Module zu benachrichtigen dass sich der Zertifikatsspeicher geändert hat.'
      }
    }
  },
  example: {
    cmds: {
      uses_something: {
        arguments: {
          key: {
            description: 'Schlüssel zum Prüfen der Existenz'
          }
        },
        description: 'Dieser Befehl prüft ob etwas unter einem gegebenen Schlüssel gespeichert ist',
        result: {
          description: 'Gibt "True" zurück wenn etwas für diesen Schlüssel gespeichert wurde'
        }
      }
    },
    description: 'Diese Schnittstelle definiert eine Beispiel-Schnittstelle die mehrere Framework-Funktionen verwendet',
    vars: {
      max_current: {
        description: 'Stellt die maximale Stromstärke dieses Ladepunkts in Ampere bereit'
      }
    }
  },
  example_error_framework: {
    description: 'Dies ist eine Beispiel-Schnittstelle die für die Fehler-Framework-Beispielmodule verwendet wird.'
  },
  example_user: {
    description: 'Diese Schnittstelle definiert eine example_user-Schnittstelle die die example-Schnittstelle verwendet'
  },
  external_energy_limits: {
    cmds: {
      set_external_limits: {
        arguments: {
          value: {
            description: 'Externes Energiefluss-Limit-Objekt'
          }
        },
        description: 'Setzen Sie zusätzliche externe Energiefluss-Limits an diesem Knoten.'
      }
    },
    description: 'Diese Schnittstelle ermöglicht es den Energiefluss an einem bestimmten Knoten des Energiebaums von außen (z.B. von ocpp) zu begrenzen.',
    vars: {
      enforced_limits: {
        description: 'Erzwungene Limits für diesen Knoten (kommt vom EnergyManager)'
      }
    }
  },
  generic_array: {
    description: 'Diese Schnittstelle veröffentlicht nur generische Daten-Blobs.',
    vars: {
      vector_of_ints: {
        description: 'Daten-Blob.'
      }
    }
  },
  generic_error: {
    description: 'Schnittstelle zur Bereitstellung von generischen Fehlern'
  },
  iso15118_extensions: {
    cmds: {
      set_get_certificate_response: {
        arguments: {
          certificate_response: {
            description: 'Die Antwort-Raw-EXI-Stream und der Status vom CSMS-System'
          }
        },
        description: 'CertificateInstallationRes/CertificateUpdateRes - Legen Sie das neue/aktualisierte Vertragszertifikat (einschließlich der Zertifikatskette) und den entsprechenden verschlüsselten privaten Schlüssel fest. Sollte an EVCC weitergeleitet werden. Dies ist eine asynchrone Antwort auf eine zuvor veröffentlichte iso15118_certificate_request'
      }
    },
    description: 'Diese Schnittstelle wird verwendet um Daten zwischen ISO15118- und OCPP-Modulen auszutauschen um die Anforderungen des OCPP-Protokolls zu unterstützen',
    vars: {
      charging_needs: {
        description: 'Die ISO15118-20 bidirektionale Ladung muss diese Nachricht senden um OCPP 2.1 während des "ScheduleExchangeReq"-Zustandsmaschinen zu unterstützen. Für ISO15118-2 und OCPP 2.1 muss diese Nachricht während der "ChargeParameterDiscoveryReq"-Zustandsmaschine gesendet werden'
      },
      iso15118_certificate_request: {
        description: 'Die Fahrzeuganforderung an die SECC das Zertifikat zu liefern das zum aktuellen gültigen Vertrag des Fahrzeugs gehört. Die Antwort wird asynchron über set_get_certificate_response gemeldet'
      }
    }
  },
  isolation_monitor: {
    cmds: {
      start: {
        description: 'Starten Sie wiederholte Isolationsmessungen. Das Gerät sollte den Isolationsstatus überwachen bis es gestoppt wird, und die Widerstandsdaten in regelmäßigen Abständen veröffentlichen. Die tatsächliche Intervall ist geräteabhängig.'
      },
      start_self_test: {
        arguments: {
          test_voltage_V: {
            description: 'Gibt die Testspannung [V] an die während des Selbsttests auf die DC-Pins aufgelegt wird. Dies kann verwendet werden um die interne Spannungsmessung des IMD zu überprüfen.'
          }
        },
        description: 'Starten Sie den Selbsttest. Dies wird während der CableCheck-Phase durchgeführt daher wird eine DC-Spannung gemäß IEC 61851-23 (2023) vorhanden sein. Der Befehl sollte sofort zurückkehren. Die Variable "self_test_result" muss veröffentlicht werden sobald der Selbsttest abgeschlossen ist. Beachten Sie dass dies auf vielen Hardwaregeräten lange dauern kann (z.B. 20 Sekunden).'
      },
      stop: {
        description: 'Stoppen Sie wiederholte Messungen. Das Gerät sollte die Überwachung des Isolationswiderstands stoppen und das Veröffentlichen der Daten stoppen.'
      }
    },
    description: 'Diese Schnittstelle definiert ein Isolationsüberwachungsgerät (IMD) gemäß IEC 61557-8 für DC-Ladung. Dies wird verwendet um die Isolierung der DC-Leitungen vor dem Start der Hochspannungs-Ladung und während der Ladung zu überprüfen.',
    vars: {
      isolation_measurement: {
        description: 'Ergebnisse der Isolationsüberwachungs-Messung'
      },
      self_test_result: {
        description: 'Gibt an dass der Selbsttest abgeschlossen ist und veröffentlicht das Ergebnis. Setzen Sie "true" für Erfolg, "false" für Fehler.'
      }
    }
  },
  kvs: {
    cmds: {
      delete: {
        arguments: {
          key: {
            description: 'Schlüssel zum Löschen des Werts'
          }
        },
        description: 'Dieser Befehl entfernt den unter einem gegebenen Schlüssel gespeicherten Wert'
      },
      exists: {
        arguments: {
          key: {
            description: 'Schlüssel zum Prüfen der Existenz'
          }
        },
        description: 'Dieser Befehl prüft ob etwas unter einem gegebenen Schlüssel gespeichert ist',
        result: {
          description: 'Gibt "True" zurück wenn etwas für diesen Schlüssel gespeichert wurde'
        }
      },
      load: {
        arguments: {
          key: {
            description: 'Schlüssel zum Laden des Werts'
          }
        },
        description: 'Dieser Befehl lädt den zuvor gespeicherten Wert für einen gegebenen Schlüssel (es wird null zurückgegeben wenn der Schlüssel nicht existiert)',
        result: {
          description: 'Der zuvor gespeicherte Wert'
        }
      },
      store: {
        arguments: {
          key: {
            description: 'Schlüssel zum Speichern des Werts'
          },
          value: {
            description: 'Wert zum Speichern'
          }
        },
        description: 'Dieser Befehl speichert einen Wert unter einem gegebenen Schlüssel'
      }
    },
    description: 'Diese Schnittstelle definiert eine einfache Schlüssel-Wert-Speicher-Schnittstelle'
  },
  ocpp: {
    cmds: {
      change_availability: {
        arguments: {
          request: {
            description: 'Die ChangeAvailabilityRequest wie in OCPP2.0.1 spezifiziert. Für OCPP 1.6:'
          }
        },
        description: 'Ermöglicht das Senden einer ChangeAvailabilityRequest intern (wie es vom CSMS getan werden kann).',
        result: {
          description: 'Antwort auf ChangeAvailabilityRequest wie in OCPP 2.0.1 spezifiziert'
        }
      },
      get_variables: {
        arguments: {
          requests: {
            description: 'Liste der GetVariableRequest'
          }
        },
        description: 'Befehl zum Abrufen einer Variablen aus OCPP. Mit OCPP1.6: Ruft einen Konfigurationsschlüssel ab. Mit OCPP2.0.1: Ruft eine Variable mit Wert aus dem Gerätemodell-Speicher ab',
        result: {
          description: 'Liste der GetVariableResult die das Ergebnis für jeden angeforderten Wert enthält. Behält die Reihenfolge der Eingabe-Anfragen bei.'
        }
      },
      monitor_variables: {
        arguments: {
          component_variables: {
            description: 'Liste der ComponentVariable(s) zum Überwachen'
          }
        },
        description: 'Befehl zum Starten der Überwachung der angegebenen ComponentVariable(s). Jeder der bereitgestellten Konfigurationsschlüssel wird bei Änderung durch das CSMS veröffentlicht. Konsekutive Aufrufe dieser Operation überschreiben nicht sondern erweitern die bestehenden Überwachungen. Mit OCPP1.6: Dieser Befehl kann verwendet werden um Konfigurationsschlüssel zu überwachen Mit OCPP2.0.1: Dieser Befehl kann verwendet werden um jede Art von Variable im Gerätemodell-Speicher zu überwachen'
      },
      restart: {
        description: 'Verbindet den Websocket und aktiviert die OCPP-Kommunikation nach einem vorherigen Stop-Aufruf.',
        result: {
          description: 'Gibt true zurück wenn der Dienst erfolgreich neu gestartet werden konnte sonst false'
        }
      },
      security_event: {
        arguments: {
          event: {
            description: 'Ein Sicherheitsereignis'
          }
        },
        description: 'Löst eine SecurityEventNotification.req beim CSMS aus wenn es als kritisch gilt, entweder durch Setzen der Flag in diesem Ereignis oder wenn sie fehlt, automatisch von libocpp'
      },
      set_variables: {
        arguments: {
          requests: {
            description: 'Liste der SetVariableRequests'
          },
          source: {
            description: 'Quelle der Variablenwerte'
          }
        },
        description: 'Befehl zum Setzen einer Variablen bei OCPP. Mit OCPP1.6: Dieser Befehl kann verwendet werden um benutzerdefinierte Konfigurationsschlüssel zu setzen (andere werden abgelehnt) Mit OCPP2.0.1: Dieser Befehl kann verwendet werden um Variablen im Gerätemodell-Speicher zu setzen',
        result: {
          description: 'Liste der SetVariableResult die das Ergebnis für jeden angeforderten Set-Vorgang enthält'
        }
      },
      stop: {
        description: 'Trennt die Websocket-Verbindung und stoppt die OCPP-Kommunikation. Es werden keine OCPP-Nachrichten gespeichert und gesendet nach einem Neustart.',
        result: {
          description: 'Gibt true zurück wenn der Dienst erfolgreich gestoppt werden konnte, sonst false'
        }
      }
    },
    description: 'Diese Schnittstelle ermöglicht die Steuerung eines OCPP-Dienstes und das Setzen und Abrufen von Daten vom OCPP-Dienst. Sie ist für beide OCPP1.6- und OCPP2.0.1-Modul-Implementierungen konzipiert. Daher basieren die vars Befehle und Typen mehr auf den Definitionen von OCPP2.0.1, da dies mehr Flexibilität bietet und es einfacher ist auf die Fähigkeiten von OCPP1.6 zu übertragen als umgekehrt.',
    vars: {
      boot_notification_response: {
        description: 'Wird veröffentlicht wenn eine BootNotificationResponse-Nachricht vom CSMS empfangen wird'
      },
      charging_schedules: {
        description: 'Objekt das OCPP-Ladefahrpläne aller Stecker enthält. Das Objekt enthält einen zusammengesetzten Fahrplan für jeden Stecker-Id, beginnend mit Stecker 0. Stecker 0 enthält einen Fahrplan für die gesamte Ladestation.'
      },
      event_data: {
        description: 'Wird für eine Kombination aus Komponente und Variable veröffentlicht wenn eine Variable mit einem Monitor geändert wurde Für OCPP1.6: Das Objekt kann nur die erforderlichen Eigenschaften des EventData-Typs enthalten da in OCPP1.6\n  keine weiteren Informationen verfügbar oder erforderlich sind.\nFür OCPP2.0.1: Das Objekt kann alle verfügbaren Eigenschaften enthalten'
      },
      is_connected: {
        description: 'Gibt an ob der Ladepunkt mit dem CSMS verbunden ist'
      },
      ocpp_transaction_event: {
        description: 'Emittiert Ereignisse im Zusammenhang mit OCPP-Transaktionen'
      },
      ocpp_transaction_event_response: {
        description: 'Emittiert OCPP-Transaktions-Antworten'
      },
      security_event: {
        description: 'Wird veröffentlicht wenn ein internes Sicherheitsereignis auftritt'
      }
    }
  },
  ocpp_1_6_charge_point: {
    cmds: {
      get_configuration_key: {
        arguments: {
          keys: {
            description: 'Liste der Schlüssel für die die Werte angefordert werden. Wenn leer werden alle Schlüssel und Werte zurückgegeben',
            items: {
              description: 'Ein Schlüssel'
            }
          }
        },
        description: 'Ruft die Antwort auf den angeforderten Konfigurationsschlüssel ab die eine Liste der Werte der angeforderten Schlüssel und eine Liste der unbekannten Schlüssel enthält',
        result: {
          description: 'Antwort auf die angeforderte Operation'
        }
      },
      monitor_configuration_keys: {
        arguments: {
          keys: {
            description: 'Schlüssel die überwacht werden sollen',
            items: {
              description: 'Schlüssel der überwacht werden soll'
            }
          }
        },
        description: 'Überwacht den angegebenen Konfigurationsschlüssel. Falls dieser Konfigurationsschlüssel durch das CSMS geändert wird, wird der geänderte Konfigurationsschlüssel veröffentlicht. Konsekutive Aufrufe dieser Operation überschreiben nicht, sondern erweitern die bestehenden Überwachungen'
      },
      restart: {
        description: 'Verbindet den Websocket und aktiviert die OCPP-Kommunikation nach einem vorherigen Stop-Aufruf.',
        result: {
          description: 'Gibt true zurück wenn der Dienst erfolgreich neu gestartet werden konnte, sonst false'
        }
      },
      security_event: {
        arguments: {
          info: {
            description: 'Zusätzliche Informationen über das aufgetretene Sicherheitsereignis'
          },
          type: {
            description: 'Typ des Sicherheitsereignisses'
          }
        },
        description: 'Löst eine SecurityEventNotification.req beim CSMS aus. Dieses Ereignis wird mit einer garantierten Zustellung an das CSMS in die Warteschlange gestellt.'
      },
      set_custom_configuration_key: {
        arguments: {
          key: {
            description: 'Schlüssel der gesetzt werden soll'
          },
          value: {
            description: 'Wert der für den gegebenen Schlüssel gesetzt werden soll'
          }
        },
        description: 'Befehl zum Setzen eines benutzerdefinierten Konfigurationsschlüssels. Es ist nicht möglich standardisierte Konfigurationsschlüssel extern zu setzen',
        result: {
          description: 'Gibt das Ergebnis der angeforderten Operation an'
        }
      },
      stop: {
        description: 'Trennt die Websocket-Verbindung und stoppt die OCPP-Kommunikation. Es werden keine OCPP-Nachrichten gespeichert und gesendet nach einem Neustart.',
        result: {
          description: 'Gibt true zurück wenn der Dienst erfolgreich gestoppt werden konnte, sonst false'
        }
      }
    },
    description: 'Diese Schnittstelle definiert einen OCPP 1.6-Ladepunkt',
    vars: {
      configuration_key: {
        description: 'Wird veröffentlicht wenn ein Konfigurationsschlüssel durch das CSMS geändert wurde und ein Monitor mit dem Befehl monitor_configuration_keys registriert wurde'
      },
      is_connected: {
        description: 'Gibt an ob der Ladepunkt mit dem CSMS verbunden ist'
      },
      security_event: {
        description: 'Wird veröffentlicht wenn ein internes Sicherheitsereignis auftritt'
      }
    }
  },
  ocpp_data_transfer: {
    cmds: {
      data_transfer: {
        arguments: {
          request: {
            description: 'Anfrageobjekt mit Datenübertragungsanfrage'
          }
        },
        description: 'Führt eine OCPP-Datenübertragungsanfrage durch und gibt die Antwort zurück',
        result: {
          description: 'Ergebnisobjekt mit Datenübertragungsantwort'
        }
      }
    },
    description: 'Diese Schnittstelle definiert eine OCPP-Datenübertragung'
  },
  over_voltage_monitor: {
    cmds: {
      reset_over_voltage_error: {
        description: 'Setzt die Erkennungslogik zurück um neue Ladungssitzungen nach einem Überspannungsfehler zu ermöglichen. Dies sollte den Überspannungsfehler löschen. Wenn die Überwachung aktiv ist sollte sie gestoppt werden.'
      },
      start: {
        arguments: {
          over_voltage_limit_V: {
            description: 'Gibt den Überspannungs-Schwellenwert [V] an (basierend auf IEC61851-23:2023 Tabelle 103) Ein Notabschaltungsprozess sollte ausgelöst werden wenn die DC-Ausgangsspannung höher als dieser Wert ist.'
          }
        },
        description: 'Startet die Überspannungs-Überwachung'
      },
      stop: {
        description: 'Stoppt die Überspannungs-Überwachung am Ende der Stromübertragung.'
      }
    },
    description: 'Diese Schnittstelle definiert ein schnelles Überspannungs-Überwachungsgerät gemäß IEC61851-23:2023 6.3.1.106.2 für DC-Ladung. Ein Notabschaltungsprozess muss ausgelöst werden wenn die DC-Ausgangsspannung über dem Limit der Tabelle 103 für 9ms liegt. Die eigentliche Abschaltung muss in einer niedrigeren Ebene außerhalb von EVerest erfolgen, aber diese Schnittstelle setzt das korrekte Spannungslimit am Beginn der Sitzung und stoppt die Überwachung am Ende der Sitzung. Der Überspannungsfehler sollte nach der eigentlichen Abschaltung bereits ausgeführt wurde. Sobald ein Überspannungsfehler ausgelöst wurde sollte er nur gelöscht werden wenn der Befehl reset_over_voltage_error aufgerufen wird. Alle anderen Fehler sollten sofort ausgelöst/gelöscht werden wenn sie auftreten/nicht mehr aktiv sind. Die var voltage_measurement_V sollte in regelmäßigen Abständen veröffentlicht werden, z.B. 1 Sekunde. Es wird nicht verwendet um sie mit dem Überspannungs-Schwellenwert-Einstellung in EVerest zu vergleichen das in der OVM-Geräte selbst durchgeführt werden muss. Es wird nur verwendet um zu validieren dass die OVM und das IMD dieselbe Spannung sehen um sicherzustellen dass sie korrekt an denselben Ladepunkt angeschlossen sind. Wenn es in der Hardware nicht verfügbar ist veröffentlichen Sie nicht voltage_measurement_V.',
    vars: {
      voltage_measurement_V: {
        description: 'Gemessene Spannung in V'
      }
    }
  },
  payment_terminal: {
    cmds: {
      allow_all_cards_for_every_connector: {
        description: 'Aktiviert alle Kartenarten auf jedem Stecker. Dies ist das Standardverhalten beim Start'
      },
      enable_card_reading: {
        arguments: {
          connector_id: {
            description: 'Welcher Stecker'
          },
          supported_cards: {
            description: 'Array der unterstützten Kartenarten'
          }
        },
        description: 'Aktiviert oder deaktiviert das Lesen von Karten für den angegebenen Stecker'
      }
    },
    description: 'Schnittstelle die Funktionalität für ein Zahlungsterminal bereitstellt',
    vars: {
      bank_transaction_summary: {
        description: 'Stellt Informationen zur Sitzung zur Verfügung die an die Bank übermittelt wurde. Diese Daten könnten für Buchhaltungszwecke benötigt werden. Zusammenfassung einer Banktransaktion. Abhängig von Bank und Backend. Daher ist es im Moment größtenteils opaque Daten.'
      },
      rejection_reason: {
        description: 'Stellt einen Ablehnungsgrund für die abgelehnte Kreditkarten-Abfrage bereit.'
      }
    }
  },
  phyverso_mcu_temperature: {
    description: 'Temperaturen vom MCU',
    vars: {
      MCUTemperatures: {
        description: 'Temperaturen'
      }
    }
  },
  power: {
    description: 'Diese Schnittstelle definiert die Schnittstelle einer Stromversorgung',
    vars: {
      max_current: {
        description: 'Dies ist die maximale Stromstärke der Stromversorgung'
      }
    }
  },
  power_supply_DC: {
    cmds: {
      setExportVoltageCurrent: {
        arguments: {
          current: {
            description: 'Ausgangsstromgrenze in Ampere'
          },
          voltage: {
            description: 'Ausgangsspannung in Volt'
          }
        },
        description: 'Setzen Sie das Ausgangsziel-Spannungslimit. Muss innerhalb der gemeldeten Grenzen liegen.'
      },
      setImportVoltageCurrent: {
        arguments: {
          current: {
            description: 'Eingangsstromgrenze in Ampere'
          },
          voltage: {
            description: 'Strom wird gezogen wenn Eingang über diese Spannung (in Volt) liegt'
          }
        },
        description: 'Setzen Sie die minimale Eingangsspannung und Stromgrenze. Muss innerhalb der gemeldeten Grenzen liegen.'
      },
      setMode: {
        arguments: {
          mode: {
            description: 'Betriebsmodus der Stromversorgung'
          },
          phase: {
            description: 'Ladephase für diese Modusänderung. Diese Informationen sollten normalerweise nicht vom Stromversorgungsgerät benötigt werden, da es immer im CCCV-Modus betrieben werden sollte. Einige spezielle Einrichtungen behandeln jedoch das CableCheck/PreCharge/Charge etwas anders intern.'
          }
        },
        description: 'Setzen Sie den Betriebsmodus der bidirektionalen DC-Stromversorgung'
      }
    },
    description: 'Schnittstelle für Stromversorgungen die für DC-Ladung verwendet werden\nImplementierungsrichtlinien für diese Schnittstelle: 1) Während des Starts des Treibers veröffentlichen Sie Fähigkeiten sobald sie verfügbar sind, idealerweise in der ready()-Funktion.\n   Die Ladelogik in EvseManager erlaubt keine Ladung bis sie die Fähigkeiten mindestens einmal empfängt.\n   Fähigkeiten können zu jedem späteren Zeitpunkt veröffentlicht werden um die Werte zu aktualisieren. Dies kann passieren wenn sie z.B. aufgrund\n   thermischer Abwärme ändern. Wenn eine Ladungssitzung aktiv ist wenn das Update empfangen wird,\n   werden nur Leistung/Stromgrenzen sofort angewendet. Alle anderen Werte werden beim nächsten Ladungssitzung aktiv.\n\n2) setMode/setVoltageCurrent-Befehle sollten sofort auf der Hardware ausgeführt werden. Wenn dies nicht möglich ist weil ein Fehler aktuell aktiv ist\n   (z.B. Kommunikation mit der Hardware verloren gegangen) soll das Treibermodul den letzten Modus und Spannungs-/Strom-Einstellungen puffern.\n   Sobald die PSU wieder online ist (z.B. nach einem Kommunikationsfehler) setzen Sie die zuletzt empfangenen Modus- und Spannungs-/Stromwerte und löschen erst danach den Fehler.\n\n3) setMode auf Off erfordert besondere Aufmerksamkeit. Um das Ausschalten der Ausgangsrelais des Ladegeräts unter vollem Last zu vermeiden stellen Sie sicher dass die Funktion setMode(Off) nur zurückkehrt wenn der Strom unter einem sicheren Schwellenwert für das Ausschalten der Relais liegt (exakter Wert ist hardwareabhängig).\n   Wenn die Kommunikation mit der Stromversorgung verloren geht stellen Sie sicher dass Sie den Aufruf zurückgeben der nicht für eine längere Zeit blockieren soll.\n   EVerest wird sicherstellen dass die Reihenfolge der Aufrufe korrekt ist während des Herunterfahrens, aber wird nicht auf die Stromversorgung warten um tatsächlich auszuschalten:\n    1. rufen Sie setMode(Off) auf power_supply_DC\n    2. rufen Sie allow_power_on(false) auf evse_board_support\n  Wenn die setMode(Off) sofort zurückkehrt kann es passieren dass die bsp-Implementierung die Relais öffnet bevor die Stromversorgung abgeschaltet wird.\n\n4) var voltage_current sollte in regelmäßigen Abständen veröffentlicht werden. Das Intervall hängt von der Hardware ab, aber es sollte mindestens einmal pro Sekunde erfolgen. Wenn möglich,\n   aktualisieren Sie mit z.B. 4 Hertz.',
    vars: {
      capabilities: {
        description: 'Veröffentlichen Sie Fähigkeiten dieser PSU.'
      },
      mode: {
        description: 'Aktueller Modus. Wird bei Änderung veröffentlicht.'
      },
      voltage_current: {
        description: 'Spannung/Strom am Eingang/Ausgang'
      }
    }
  },
  powermeter: {
    cmds: {
      start_transaction: {
        arguments: {
          value: {
            description: 'Alle Informationen die in das signierte OCMF-Paket eingeschlossen werden sollen'
          }
        },
        description: 'Startet eine Transaktion auf dem Stromzähler (für signierte Messung gemäß deutschem Eichrecht)',
        result: {
          description: 'True bei Erfolg, False wenn die Transaktion auf dem Stromzähler nicht gestartet werden konnte'
        }
      },
      stop_transaction: {
        arguments: {
          transaction_id: {
            description: 'Transaktions-ID'
          }
        },
        description: 'Stoppt die Transaktion auf dem Stromzähler und gibt die signierten Messinformationen zurück. Wenn die Transaktions-ID eine leere Zeichenfolge ist sollten alle laufenden Transaktionen abgebrochen werden. Dies wird bei Start verwendet um hängende Transaktionen zu löschen die möglicherweise noch auf dem Stromzähler aktiv sind, aber nicht vom EvseManager bekannt sind.',
        result: {
          description: 'Antwort auf die Transaktions-Stop-Anfrage inklusive OCMF-Zeichenfolge.'
        }
      }
    },
    description: 'Diese Schnittstelle definiert einen generischen Stromzähler für 5-Kabel-TN-Netze.',
    vars: {
      powermeter: {
        description: 'Gemessenes Datensatz'
      },
      public_key_ocmf: {
        description: 'Der öffentliche Schlüssel für OCMF'
      }
    }
  },
  reservation: {
    cmds: {
      cancel_reservation: {
        arguments: {
          reservation_id: {
            description: 'ID der Reservierung'
          }
        },
        description: 'Bricht die Reservierung mit der angegebenen Reservierungs-ID ab',
        result: {
          description: 'Gibt true zurück wenn die Reservierung abgebrochen wurde. Gibt false zurück wenn es keine Reservierung zum Abbrechen gab.'
        }
      },
      exists_reservation: {
        arguments: {
          request: {
            description: 'Die Informationen die zum Prüfen ob es eine Reservierung für den angegebenen Stecker und Token gibt gesendet werden sollen.'
          }
        },
        description: 'Prüft ob es eine Reservierung für den angegebenen Stecker und Token gibt. Gibt auch true zurück wenn es eine Reservierung mit diesem Token für EVSE-ID 0 gibt.',
        result: {
          description: 'Gibt eine Aufzählung zurück die den Reservierungsstatus der angegebenen ID / ID-Token / Gruppen-ID-Token-Kombination anzeigt.'
        }
      },
      reserve_now: {
        arguments: {
          request: {
            description: 'Anforderung zur Reservierung'
          }
        },
        description: 'Reserviert eine EVSE.',
        result: {
          description: 'Gibt Accepted zurück wenn die Reservierung erfolgreich war, oder gibt den Fehlercode an.'
        }
      }
    },
    description: 'Schnittstelle für Reservierungen',
    vars: {
      reservation_update: {
        description: 'Aktualisierung der Reservierung.'
      }
    }
  },
  serial_communication_hub: {
    cmds: {
      modbus_read_holding_registers: {
        arguments: {
          first_register_address: {
            description: 'Startadresse für Leseoperation (16 Bit-Adresse)'
          },
          num_registers_to_read: {
            description: 'Anzahl der zu lesenden Register (16 Bit each)'
          },
          target_device_id: {
            description: 'ID (1 Byte) des Geräts an das die Befehle gesendet werden'
          }
        },
        description: 'Sendet einen Modbus RTU "read holding registers" Befehl über die serielle Schnittstelle an das Zielhardware. (Rückgabewert: Antwort)',
        result: {
          description: 'Ergebnis des Übertragung'
        }
      },
      modbus_read_input_registers: {
        arguments: {
          first_register_address: {
            description: 'Startadresse für Leseoperation (16 Bit-Adresse)'
          },
          num_registers_to_read: {
            description: 'Anzahl der zu lesenden Register (16 Bit each)'
          },
          target_device_id: {
            description: 'ID (1 Byte) des Geräts an das die Befehle gesendet werden'
          }
        },
        description: 'Sendet einen Modbus RTU "read input registers" Befehl über die serielle Schnittstelle an das Zielhardware. (Rückgabewert: Antwort)',
        result: {
          description: 'Ergebnis des Übertragung'
        }
      },
      modbus_write_multiple_registers: {
        arguments: {
          data_raw: {
            description: 'Dateninhalt der in die oben ausgewählten Register geschrieben werden soll (in 16 Bit-Wörtern)'
          },
          first_register_address: {
            description: 'Startadresse für Schreiboperation (16 Bit-Adresse)'
          },
          target_device_id: {
            description: 'ID (1 Byte) des Geräts an das die Befehle gesendet werden'
          }
        },
        description: 'Sendet einen Modbus RTU "write multiple registers" Befehl über die serielle Schnittstelle an das Zielhardware. (Rückgabewert: Antwort)',
        result: {
          description: 'Statuscode der Übertragung'
        }
      },
      modbus_write_single_register: {
        arguments: {
          data: {
            description: 'Dateninhalt der in das oben ausgewählte Register geschrieben werden soll'
          },
          register_address: {
            description: 'Adresse des Registers in das geschrieben werden soll (16 Bit-Adresse)'
          },
          target_device_id: {
            description: 'ID (1 Byte) des Geräts an das die Befehle gesendet werden'
          }
        },
        description: 'Sendet einen Modbus RTU "write single register" Befehl über die serielle Schnittstelle an das Zielhardware. (Rückgabewert: Antwort)',
        result: {
          description: 'Statuscode der Übertragung'
        }
      },
      nonstd_read: {
        arguments: {
          first_register_address: {
            description: 'Startadresse für Schreiboperation (16 Bit-Adresse)'
          },
          num_registers_to_read: {
            description: 'Anzahl der zu lesenden Register (16 Bit each)'
          },
          target_device_id: {
            description: 'ID (1 Byte) des Geräts an das die Befehle gesendet werden'
          }
        },
        description: 'Nicht-standardmodus zum Lesen von Registern im Read Coils-Modus, aber mit fehlerhafter Antwort. Verwendet z.B. von GYDCG-UBC1 Isolationsmonitor.',
        result: {
          description: 'Ergebnis des Übertragung'
        }
      },
      nonstd_write: {
        arguments: {
          first_register_address: {
            description: 'Startadresse für Leseoperation (16 Bit-Adresse)'
          },
          num_registers_to_read: {
            description: 'Anzahl der zu lesenden Register (16 Bit each)'
          },
          target_device_id: {
            description: 'ID (1 Byte) des Geräts an das die Befehle gesendet werden'
          }
        },
        description: 'Nicht-standardmodus zum Schreiben von Registern im Read Discrete Input-Modus ohne Warten auf Antwort. Verwendet z.B. von GYDCG-UBC1 Isolationsmonitor.'
      }
    },
    description: 'Diese Schnittstelle bietet multiplexed Zugriff auf einen seriellen Port (z.B. RS485) für mehrere Clients.'
  },
  session_cost: {
    description: 'Diese Schnittstelle veröffentlicht die laufenden oder abgeschlossenen Sitzungskosten. Diese Schnittstelle bietet Kosten einer Sitzung. Wenn wir mehr als eine EVESEID haben müssen wir diese Schnittstelle für jede EVSE instanziieren.',
    vars: {
      session_cost: {
        description: 'Sitzungskostenobjekt mit der Gesamtkosten der Sitzung und einer Liste der Stücke'
      },
      tariff_message: {
        description: 'Nachricht die dem Benutzer mit Informationen über die Tarif zeigt.'
      }
    }
  },
  slac: {
    cmds: {
      dlink_error: {
        description: 'Beenden Sie die Datenverbindung und starten Sie den Matching-Prozess neu.',
        result: {
          description: 'True bei Erfolg.'
        }
      },
      dlink_pause: {
        description: 'Fordern Sie den Energiesparmodus an während Sie MATCHED bleiben.',
        result: {
          description: 'True bei Erfolg.'
        }
      },
      dlink_terminate: {
        description: 'Beenden Sie die Datenverbindung und werden UNMATCHED.',
        result: {
          description: 'True bei Erfolg.'
        }
      },
      enter_bcd: {
        description: 'Signalieren Sie den Pilotzustandswechsel von A/E/F zu B/C/D.',
        result: {
          description: 'True bei Erfolg gibt False zurück wenn die Transition unerwartet war und nicht vom SLAC-Zustandsmaschine behandelt werden kann.'
        }
      },
      leave_bcd: {
        description: 'Signalieren Sie den Pilotzustandswechsel von B/C/D zu A/E/F.',
        result: {
          description: 'True bei Erfolg gibt False zurück wenn die Transition unerwartet war und nicht vom SLAC-Zustandsmaschine behandelt werden kann.'
        }
      },
      reset: {
        arguments: {
          enable: {
            description: 'true: starten Sie SLAC nach dem Reset, false: stoppen Sie SLAC'
          }
        },
        description: 'Reset SLAC'
      }
    },
    description: 'ISO15118-3 SLAC-Schnittstelle für EVSE-Seite',
    vars: {
      dlink_ready: {
        description: 'Informieren Sie höhere Ebenen über eine Änderung des Datenverbindungsstatus. Sendet true wenn der Link eingerichtet wurde und false wenn der Link heruntergefahren wurde.'
      },
      ev_mac_address: {
        description: 'Informieren Sie höhere Ebenen über die MAC-Adresse des Fahrzeugs (in Großbuchstaben)'
      },
      request_error_routine: {
        description: 'Informieren Sie die höhere Ebene um die Fehler-Routine für einen SLAC-Verbindungsversuch auszuführen'
      },
      state: {
        description: 'Stellt die Zustandsenummer bereit.'
      }
    }
  },
  solar_forecast: {
    description: 'Diese Schnittstelle definiert die Schnittstelle für eine Solarenergie-Produktionsprognose',
    vars: {
      forecast: {
        description: 'Prognose JSON Objekt mit Zeitstempel und Energieprognose in Wattstunden.'
      }
    }
  },
  sunspec_ac_meter: {
    cmds: {
      get_sunspec_ac_meter_value: {
        arguments: {
          auth_token: {
            description: 'Authentifizierungstoken'
          }
        },
        description: 'Gibt ein Sunspec AC-Meter-Modell zurück',
        result: {
          description: 'Sunspec AC-Meter-Modell'
        }
      }
    },
    description: 'Holen Sie sich Sunspec AC-Meter-Messung'
  },
  sunspec_reader: {
    description: 'Diese Schnittstelle definiert einen generischen Sunspec-Reader der verwendet werden kann um Werte von Sunspec-Geräten abzurufen wenn eine Implementierung gegeben ist.',
    vars: {
      measurement: {
        description: 'Gemessener Datensatz',
        properties: {
          timestamp: {
            description: 'Zeitstempel der Messung'
          },
          value: {
            description: 'Messwert'
          }
        }
      }
    }
  },
  sunspec_scanner: {
    cmds: {
      scan_device: {
        arguments: {
          ip_address: {
            description: 'Lokale IP-Adresse des Sunspec-Geräts'
          }
        },
        description: 'Scannt das gesamte Gerät',
        result: {
          description: 'Gibt eine JSON-Übersicht des Scans zurück'
        }
      },
      scan_network: {
        description: 'Scannt das lokale Netzwerk',
        result: {
          description: 'Gibt eine JSON-Übersicht des Scans zurück'
        }
      },
      scan_port: {
        arguments: {
          ip_address: {
            description: 'Lokale IP-Adresse des Sunspec-Geräts'
          },
          port: {
            description: 'Modbus-Port'
          }
        },
        description: 'Scannt alle Einheiten an einem Geräte-Port',
        result: {
          description: 'Gibt eine JSON-Übersicht des Scans zurück'
        }
      },
      scan_unit: {
        arguments: {
          ip_address: {
            description: 'Lokale IP-Adresse des Sunspec-Geräts'
          },
          port: {
            description: 'Modbus-Port'
          },
          unit: {
            description: 'Modbus-Einheits-ID'
          }
        },
        description: 'Scannt spezifische Einheit an einem Geräte-Port',
        result: {
          description: 'Gibt eine JSON-Übersicht des Scans zurück'
        }
      }
    },
    description: 'Diese Klasse definiert den globalen Sunspec-Scanner'
  },
  system: {
    cmds: {
      allow_firmware_installation: {
        description: 'Aufruf zur Erlaubnis einer Firmwareinstallation'
      },
      get_boot_reason: {
        description: 'Aufruf zum Abrufen des Startgrundes des Systems',
        result: {
          description: 'Gibt den Startgrund des Systems zurück'
        }
      },
      is_reset_allowed: {
        arguments: {
          type: {
            description: 'Typ des Resets (Soft oder Hard)'
          }
        },
        description: 'Aufruf zur Bestimmung ob ein Reset des Systems erlaubt ist',
        result: {
          description: 'Gibt an ob das System zurückgesetzt werden kann'
        }
      },
      reset: {
        arguments: {
          scheduled: {
            description: 'Gibt an ob dieser Reset-Befehl geplant oder sofort ausgeführt wurde. Ein geplanter Reset bedeutet dass das System auf alle Transaktionen gewartet hat bevor dieser Befehl ausgeführt wurde. Dieser Wert ist nur informativ.'
          },
          type: {
            description: 'Typ des Resets (Soft oder Hard)'
          }
        },
        description: 'Aufruf zum sofortigen Zurücksetzen des Systems'
      },
      set_system_time: {
        arguments: {
          timestamp: {
            description: 'Die neue Systemzeit im RFC3339-Format'
          }
        },
        description: 'Aufruf zum Festlegen der Systemzeit von EVerest',
        result: {
          description: 'Gibt true zurück wenn die Systemzeit erfolgreich gesetzt werden konnte, sonst false'
        }
      },
      update_firmware: {
        arguments: {
          firmware_update_request: {
            description: 'Metadaten mit Informationen über die Firmware-Anfrage'
          }
        },
        description: 'Aufruf zum Starten eines Firmware-Updates',
        result: {
          description: 'Gibt das Ergebnis des Versuchs zum Aktualisieren der Firmware zurück'
        }
      },
      upload_logs: {
        arguments: {
          upload_logs_request: {
            description: 'Metadaten mit Informationen über die Log-Anfrage'
          }
        },
        description: 'Aufruf zum Starten eines Log-Uploads',
        result: {
          description: 'Gibt das Ergebnis des Versuchs zum Hochladen der Logs zurück'
        }
      }
    },
    description: 'Schnittstelle für systemweite Operationen von EVerest',
    vars: {
      firmware_update_status: {
        description: 'Beschreibt den aktuellen Status eines Firmware-Updates des Systems'
      },
      log_status: {
        description: 'Beschreibt den aktuellen Status des Log-Uploads des Systems'
      }
    }
  },
  test_control: {
    cmds: {
      start_charging: {
        arguments: {
          mode: {
            description: 'Setzt den Lademodus (z.B. raw, iso15118)'
          }
        },
        description: 'Ermöglicht dem EvManager mit dem Laden zu beginnen',
        result: {
          description: 'Ladestatus des EvManager'
        }
      }
    },
    description: 'Diese Schnittstelle definiert die Testfunktionen des everest-testing auf everest-core',
    vars: {
      state: {
        description: 'Status der Teststeuerungsinstanz'
      }
    }
  },
  test_error_handling: {
    cmds: {
      clear_all_errors: {
        description: 'Dieser Befehl löscht alle Fehler die von dieser Implementierung ausgelöst wurden'
      },
      clear_error: {
        arguments: {
          sub_type: {
            description: 'Dieses Argument ermöglicht die Angabe des Subtyps'
          },
          type: {
            description: 'Dieses Argument ermöglicht die Angabe des gelöschten Typs'
          }
        },
        description: 'Dieser Befehl löscht alle Fehler eines bestimmten Typs'
      },
      raise_error: {
        arguments: {
          message: {
            description: 'Dieses Argument ermöglicht die Angabe der Nachricht'
          },
          severity: {
            description: 'Dieses Argument ermöglicht die Angabe der Schwere'
          },
          sub_type: {
            description: 'Dieses Argument ermöglicht die Angabe des Subtyps'
          },
          type: {
            description: 'Dieses Argument ermöglicht die Angabe des ausgelösten Typs'
          }
        },
        description: 'Dieser Befehl löst einen Fehler aus'
      }
    },
    description: 'Diese Schnittstelle definiert eine Test-Schnittstelle die die Steuerung der Fehlerbehandlungsfunktionen ermöglicht',
    vars: {
      errors_cleared_subscribe_TestErrorA: {
        description: 'Diese Variable veröffentlicht die Fehler die von error_raiser gelöscht wurden'
      },
      errors_cleared_subscribe_TestErrorB: {
        description: 'Diese Variable veröffentlicht die Fehler die von error_raiser gelöscht wurden'
      },
      errors_cleared_subscribe_all: {
        description: 'Diese Variable veröffentlicht die Fehler die von error_raiser gelöscht wurden'
      },
      errors_cleared_subscribe_global_all: {
        description: 'Diese Variable veröffentlicht die Fehler die von jedem Modul/Implementierung gelöscht wurden'
      },
      errors_subscribe_TestErrorA: {
        description: 'Diese Variable veröffentlicht die Fehler die von error_raiser ausgelöst wurden'
      },
      errors_subscribe_TestErrorB: {
        description: 'Diese Variable veröffentlicht die Fehler die von error_raiser ausgelöst wurden'
      },
      errors_subscribe_all: {
        description: 'Diese Variable veröffentlicht die Fehler die von error_raiser ausgelöst wurden'
      },
      errors_subscribe_global_all: {
        description: 'Diese Variable veröffentlicht die Fehler die von jedem Modul/Implementierung ausgelöst wurden'
      }
    }
  },
  test_error_raiser: {
    description: 'Diese Schnittstelle definiert eine Test-Schnittstelle die Fehler auslösen kann'
  },
  tibber_price_forecast: {
    description: 'Diese Schnittstelle definiert die Schnittstelle für eine Energiepreisprognose',
    vars: {
      forecast: {
        description: 'Prognose JSON Objekt mit Zeitstempel und Preisprognose'
      }
    }
  },
  uk_random_delay: {
    cmds: {
      cancel: {
        description: 'Bricht eine laufende zufällige Verzögerung ab. Der Effekt ist derselbe wie wenn die Zeit jetzt abgelaufen wäre.'
      },
      disable: {
        description: 'Aufruf zur Deaktivierung der zufälligen Verzögerungsfunktion'
      },
      enable: {
        description: 'Aufruf zur Aktivierung der zufälligen Verzögerungsfunktion'
      },
      set_duration_s: {
        arguments: {
          value: {
            description: 'Maximale Dauer in Sekunden'
          }
        },
        description: 'Setzen Sie die maximale Dauer der zufälligen Verzögerung. Standardmäßig ist dies 600 Sekunden.'
      }
    },
    description: 'Diese Schnittstelle bietet Funktionen für eine zufällige Verzögerungsfunktion gemäß den UK-Smart-Charging-Vorschriften. Die Logik ob eine zufällige Verzögerung verwendet werden soll oder nicht ist nicht in EvseManager enthalten ein anderes Modul kann diese Schnittstelle verwenden um die Funktion während der Laufzeit zu aktivieren/deaktivieren und eine laufende zufällige Verzögerung abzubrechen. Dies gilt immer für alle Stecker dieses EVSE. Standardmäßig sind zufällige Verzögerungen beim Start deaktiviert.',
    vars: {
      countdown: {
        description: 'Countdown der aktuell laufenden zufälligen Verzögerung'
      }
    }
  }
} as const;
