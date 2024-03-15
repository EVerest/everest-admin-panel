<!-- SPDX-License-Identifier: Apache-2.0 -->
<!-- Copyright 2020 - 2024 Pionix GmbH and Contributors to EVerest -->

<template>
  <v-app>
    <v-main>
      <v-container fluid fill-height>
        <v-row align="center" justify="center">
          <v-col xs="12" sm="10" md="8">
            <v-card elevation="10">
              <v-toolbar dark color="primary">
                <template v-if="!editItem">
                  <v-toolbar-title>Choose EVerest instance</v-toolbar-title>

                  <v-spacer></v-spacer>
                  <v-btn icon="mdi-plus" :disabled="connecting" @click="addServer"></v-btn>
                </template>
                <template v-else>
                  <v-toolbar-title>{{ editItem.is_add ? "Add" : "Edit" }} server instance</v-toolbar-title>
                </template>
              </v-toolbar>

              <v-card-text>
                <v-form v-if="editItem">
                  <v-container>
                    <v-row>
                      <v-col cols="12" sm="12">
                        <v-text-field
                            label="Name of EVerest instance"
                            v-model="editItem.server.id"
                            hint="For example 'Local', 'Development'..."
                            :rules="[validateInstanceName]"
                        >
                        </v-text-field>
                      </v-col>
                    </v-row>
                    <v-row>
                      <v-col cols="3" sm="3">
                        <v-select v-model="editItem.server.protocol"
                                  label="Protocol"
                                  :items="[ { value: 'ws', title: 'ws://' }, { value: 'wss', title: 'wss://' } ]"
                        ></v-select>
                      </v-col>
                      <v-col cols="6" sm="6">
                        <v-text-field
                          label="Server Address"
                          v-model="editItem.server.addr"
                          hint="For example, test.pionix.de"
                          :rules="[validateDomain]"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="3" sm="3">
                        <v-text-field type="number"
                                      label="Port"
                                      v-model="editItem.server.port"
                                      hint="For example, 8849"
                                      :rules="[validatePort]"
                        >
                        </v-text-field>
                      </v-col>
                    </v-row>
                    <v-row>
                      <v-col>
                        <v-btn icon="mdi-delete" elevation="2" @click="deleteItem(editItem.index)">
                        </v-btn>
                      </v-col>
                      <v-spacer />
                      <v-col class="text-right">
                        <v-btn class="mx-4" icon="mdi-close" elevation="2" @click="closeEdit()"></v-btn>
                        <v-btn icon="mdi-check" elevation="2" @click="submitEdit()"></v-btn>
                      </v-col>
                    </v-row>
                  </v-container>
                </v-form>
                <template v-else>
                  <v-list-subheader lines="two" :disabled="connecting" class="mb-3">
                    <v-list-item prepend-icon="mdi-server" v-for="(server, index) in servers" :key="server.id" @click="connect(server.addr)">

                        <v-list-item-title>{{ server.id }}</v-list-item-title>
                        <v-list-item-subtitle>{{ server.addr }}</v-list-item-subtitle>

                      <template v-slot:append v-if="server.editable">
                        <v-list-item-action>
                          <v-btn variant="text" icon="mdi-pencil" @click.prevent.stop="editServer(index)"></v-btn>
                        </v-list-item-action>
                      </template>
                    </v-list-item>
                  </v-list-subheader>
                  <v-alert v-bind:text="error.status" prominent type="error" icon="mdi-cloud-alert" v-model="error.active" closable>
                  </v-alert>
                  <transition>
                    <p class="pt-10 text-center font-weight-medium text-h6" v-if="connecting">
                      {{ connectionStatus }}
                    </p>
                  </transition>
                  <v-progress-linear :active="connecting" height="10" absolute location="bottom" indeterminate></v-progress-linear>
                </template>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { defineComponent, ref, reactive, onMounted, inject } from "vue";
import EVBackendClient from "@/modules/evbc/client";
import {useRouter} from "vue-router";

type ServerItem = {
  id: string;
  addr: string;
  editable: boolean;
  protocol: string;
  port: number;
};

export default defineComponent({
  setup() {
    const evbc = inject<EVBackendClient>("evbc");
    const servers = ref<ServerItem[]>([
      {
        id: "Loopback",
        addr: "loopback",
        editable: false,
        protocol: 'ws',
        port: 8849,
      },
      {
        id: "Ötzi",
        addr: "oetzi.pionix.net",
        editable: true,
        protocol: "wss",
        port: 8849,
      },
    ]);
    const editItem = ref<{ is_add: boolean; index: number | null; server: ServerItem } | null>(null);
    const connectAutomatically = ref(true);
    const connecting = ref(false);
    const connectionStatus = ref<string | null>(null);
    const error = reactive({ active: false, status: "" });

    const addServer = () => {
      editItem.value = {
        is_add: true,
        index: null,
        server: {
          id: "Example Instance",
          addr: "127.0.0.1",
          editable: true,
          protocol: "ws",
          port: 8849,
        },
      };
    };

    const validateInstanceName = (value: string): true | string => {
      if (value.trim().length < 1) {
        return 'Please enter a name with at least one character.';
      } else {
        return true;
      }
    };

    const validateDomain = (value: string): true | string => {
      if (value.includes('://')) {
        return 'Please enter a domain without any protocol (e.g., "test.pionix.de").';
      }
      const domainPattern = /.*:\d+$/;
      if (domainPattern.test(value)) {
        return "Please don't enter a port here.";
      } else {
        return true;
      }
    };

    const validatePort = (value: number): true | string => {
      if (value < 1 || value > 65535) {
        return 'Please enter a valid port number.';
      } else {
        return true;
      }
    };

    const editServer = (index: number) => {
      editItem.value = {
        is_add: false,
        index,
        server: { ...servers.value[index] },
      };
    };

    const submitEdit = () => {
      if (editItem.value) {
        const serverItem = { ...editItem.value.server };
        if (editItem.value.is_add) {
          servers.value.push(serverItem);
        } else if (editItem.value.index !== null) {
          servers.value[editItem.value.index] = serverItem;
        }
        closeEdit();
        submitLocalStorageSettings();
      }
    };

    const closeEdit = () => {
      editItem.value = null;
    };

    const deleteItem = (index: number) => {
      servers.value.splice(index, 1);
      closeEdit();
      submitLocalStorageSettings();
    };

    const submitLocalStorageSettings = () => {
      window.localStorage.setItem(
          "evbc-settings",
          JSON.stringify({
            servers: servers.value,
            connectAutomatically: connectAutomatically.value,
          })
      );
    };

    const connect = (addr: string) => {
      connecting.value = true;
      if (evbc) {
        evbc.connect(addr);
      }
    };

    onMounted(() => {
      const router = useRouter();
      const storage = window.localStorage;
      const evbcLsString = storage.getItem("evbc-settings");
      if (evbcLsString) {
        const evbcLocalStorage = JSON.parse(evbcLsString);
        if ("servers" in evbcLocalStorage) {
          servers.value = evbcLocalStorage.servers.map((item: ServerItem) => ({ ...item }));
        }
        if ("connectAutomatically" in evbcLocalStorage) {
          connectAutomatically.value = evbcLocalStorage.connectAutomatically;
        }
      }

      if (evbc) {
        const unsubscribe = evbc.on("connection_state", (ev) => {
          if (ev.type === "INFO") {
            connectionStatus.value = ev.text;
          } else if (ev.type === "INITIALIZED") {
            unsubscribe();
            router.push({ name: "main" });
          } else if (ev.type === "FAILED") {
            connecting.value = false;
            error.active = true;
            error.status = ev.text;
          }
        });
      }

      if (connectAutomatically.value && evbc) {
        connect(`${window.location.hostname}:8849`);
      }
    });

    return {
      servers,
      editItem,
      connectAutomatically,
      connecting,
      connectionStatus,
      error,
      addServer,
      validateInstanceName,
      validateDomain,
      validatePort,
      editServer,
      submitEdit,
      closeEdit,
      deleteItem,
      submitLocalStorageSettings,
      connect,
    };
  },
});
</script>
