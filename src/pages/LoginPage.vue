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
                <template v-if="currentView === ComponentViews.LIST">
                  <v-toolbar-title>Choose EVerest instance</v-toolbar-title>

                  <v-spacer></v-spacer>
                  <v-btn icon="mdi-plus" :disabled="connecting" @click="openAddServerView"></v-btn>
                </template>
                <template v-else>
                  <v-toolbar-title>{{ currentView === ComponentViews.ADD  ? "Add" : "Edit" }} server instance</v-toolbar-title>
                </template>
              </v-toolbar>

              <v-card-text>
                <Form @submit="submitEdit" v-if="[ComponentViews.ADD, ComponentViews.EDIT].includes(currentView)">
                  <v-container>
                    <v-row>
                      <v-col cols="12" sm="12">
                        <v-text-field
                            label="Name of EVerest instance"
                            v-model="instanceId.value.value"
                            :error-messages="instanceId.errorMessage.value"
                            hint="For example 'Local', 'Development'..."
                        >
                        </v-text-field>
                      </v-col>
                    </v-row>
                    <v-row>
                      <v-col cols="3" sm="3">
                        <v-select v-model="protocol.value.value"
                                  :error-messages="protocol.errorMessage.value"
                                  label="Protocol"
                                  :items="[ { value: 'ws', title: 'ws://' }, { value: 'wss', title: 'wss://' } ]"
                        ></v-select>
                      </v-col>
                      <v-col cols="6" sm="6">
                        <v-text-field
                          label="EVerest instance host address"
                          v-model="host.value.value"
                          :error-messages="host.errorMessage.value"
                          hint="For example, localhost"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="3" sm="3">
                        <v-text-field type="number"
                                      label="Port"
                                      v-model="port.value.value"
                                      :error-messages="port.errorMessage.value"
                                      hint="For example, 8849"
                        >
                        </v-text-field>
                      </v-col>
                    </v-row>
                    <v-row>
                      <v-col>
                        <v-btn icon="mdi-delete" elevation="2" @click="deleteItem()">
                        </v-btn>
                      </v-col>
                      <v-spacer />
                      <v-col class="text-right">
                        <v-btn class="mx-4" icon="mdi-close" elevation="2" @click="closeEdit()"></v-btn>
                        <v-btn icon="mdi-check" elevation="2" type="submit" :disabled="!meta.valid"></v-btn>
                      </v-col>
                    </v-row>
                  </v-container>
                </Form>
                <template v-else>
                  <v-list-subheader lines="two" :disabled="connecting" class="mb-3">
                    <v-list-item prepend-icon="mdi-server" v-for="(server, index) in servers" :key="server.id"
                                 @click="connect(server)">

                        <v-list-item-title>{{ server.id }}</v-list-item-title>
                      <v-list-item-subtitle>{{ server.host }}</v-list-item-subtitle>

                      <template v-slot:append v-if="server.editable">
                        <v-list-item-action>
                          <v-btn variant="text" icon="mdi-pencil" @click.prevent.stop="openEditServerView(index)"></v-btn>
                        </v-list-item-action>
                      </template>
                    </v-list-item>
                  </v-list-subheader>
                  <v-checkbox v-model="connectAutomatically"
                              label="Automatically connect to this instance"></v-checkbox>
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
import {defineComponent, inject, onMounted, reactive, ref, watch} from "vue";
import {useField, useForm} from "vee-validate";
import EVBackendClient from "@/modules/evbc/client";
import {useRouter} from "vue-router";

type ServerItem = {
  id: string;
  host: string;
  editable: boolean;
  protocol: "ws" | "wss";
  port: number;
};

enum ComponentViews {
  LIST,
  EDIT,
  ADD
}

export default defineComponent({
  setup() {
    const evbc = inject<EVBackendClient>("evbc");
    const servers = reactive<ServerItem[]>([
      {
        id: "Loopback",
        host: "loopback",
        editable: false,
        protocol: 'ws',
        port: 8849,
      },
      {
        id: "Instance on localhost",
        host: "localhost",
        editable: true,
        protocol: "ws",
        port: 8849,
      },
    ]);
    const currentView = ref<ComponentViews>(ComponentViews.LIST);
    const connectAutomatically = ref(false);
    watch<boolean>(connectAutomatically, () => {
      submitLocalStorageSettings();
    });
    const currentlyEditing = ref<ServerItem | null>(null);
    const connecting = ref(false);
    const connectionStatus = ref<string | null>(null);
    const error = reactive({ active: false, status: "" });

    const { meta, handleSubmit } = useForm({
      validationSchema: {
        instanceId: (value: string) => {
          if (value === undefined || value.trim().length < 1) {
            return 'Please enter a name with at least one character.';
          } else {
            return true;
          }
        },
        host: (value: string) => {
          if (value === undefined || value.trim().length < 1) {
            return 'Please enter a host.';
          }

          if (value.includes('://')) {
            return 'Please enter a domain without any protocol (e.g., "test.pionix.de").';
          }

          // Prevent user from entering a domain with port
          const domainPattern = /.*:\d+$/;
          if (domainPattern.test(value)) {
            return "Please don't enter a port here.";
          } else {
            return true;
          }
        },
        port: (value: number) => {
          if (value === undefined || value < 1 || value > 65535) {
            return 'Please enter a valid port number.';
          } else {
            return true;
          }
        },
      }
    });

    const instanceId = useField<string>("instanceId");
    const host = useField<string>("host");
    const port = useField<number>("port");
    const protocol = useField<"ws" | "wss">("protocol");


    const openAddServerView = () => {
      resetFields();
      currentView.value = ComponentViews.ADD;
    };

    const resetFields = () => {
      instanceId.value.value = "";
      host.value.value = "";
      port.value.value = 8849;
      protocol.value.value = "ws";
      currentlyEditing.value = null;
    };

    const openEditServerView = (index: number) => {
      currentlyEditing.value = servers[index];
      protocol.value.value = servers[index].protocol;
      host.value.value = servers[index].host;
      port.value.value = servers[index].port;
      instanceId.value.value = servers[index].id;
      currentView.value = ComponentViews.EDIT;
    };

    const submitEdit = handleSubmit(async () => {
      if (currentlyEditing.value !== null) {
        // This works because we are using the objects reference and not a copy
        currentlyEditing.value.id = instanceId.value.value;
        currentlyEditing.value.host = host.value.value;
        currentlyEditing.value.protocol = protocol.value.value;
        currentlyEditing.value.port = port.value.value;
      } else {
        servers.push({
          id: instanceId.value.value,
          host: host.value.value,
          editable: true,
          protocol: protocol.value.value,
          port: port.value.value,
        });
      }
      closeEdit();
      submitLocalStorageSettings();
    });

    const closeEdit = () => {
      currentView.value = ComponentViews.LIST;
      resetFields();
    };

    const deleteItem = () => {
      servers.splice(servers.indexOf(currentlyEditing.value), 1);
      closeEdit();
      submitLocalStorageSettings();
    };

    const submitLocalStorageSettings = () => {
      window.localStorage.setItem(
          "evbcSettings",
          JSON.stringify({
            servers: servers,
            connectAutomatically: connectAutomatically.value,
          })
      );
    };

    const connect = (server: ServerItem) => {
      window.localStorage.setItem("lastConnectedServer", JSON.stringify(server));
      connecting.value = true;
      if (evbc) {
        evbc.connect(server.protocol + "://" + server.host + ":" + server.port);
      }
    };

    onMounted(() => {
      const router = useRouter();
      const storage = window.localStorage;
      const evbcLsString = storage.getItem("evbcSettings");
      if (evbcLsString) {
        const evbcLocalStorage = JSON.parse(evbcLsString);
        if ("servers" in evbcLocalStorage) {
          servers.splice(0, servers.length);
          servers.push(...evbcLocalStorage.servers);
        }
        if ("connectAutomatically" in evbcLocalStorage) {
          connectAutomatically.value = evbcLocalStorage.connectAutomatically;
          if (
              router.currentRoute.value.query.auto_connect !== 'false' &&
              connectAutomatically.value &&
              window.localStorage?.getItem("lastConnectedServer") !== null
          ) {
            const lastServer = JSON.parse(window.localStorage.getItem("lastConnectedServer")!);
            connect(lastServer);
          }
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
          } else if (ev.type === "IDLE") {
            connecting.value = false;
            connectionStatus.value = "";
          }
        });
      }
    });

    return {
      servers,
      connectAutomatically,
      connecting,
      connectionStatus,
      error,
      openAddServerView,
      openEditServerView,
      submitEdit,
      closeEdit,
      deleteItem,
      submitLocalStorageSettings,
      connect,
      meta,
      host,
      instanceId,
      protocol,
      port,
      currentView,
      currentlyEditing,
      ComponentViews,
    };
  },
});
</script>
