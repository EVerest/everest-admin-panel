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
                <template v-if="!edit_item">
                  <v-toolbar-title>Choose server instance</v-toolbar-title>

                  <v-spacer></v-spacer>
                  <v-btn icon="mdi-plus" :disabled="connecting" @click="add_server"></v-btn>
                </template>
                <template v-else>
                  <v-toolbar-title>{{ edit_item.is_add ? "Add" : "Edit" }} server instance</v-toolbar-title>
                </template>
              </v-toolbar>

              <v-card-text>
                <v-form v-if="edit_item">
                  <v-container>
                    <v-row>
                      <v-col cols="12" sm="12">
                        <v-text-field label="Name of EVerest instance" v-model="edit_item.server.id" hint="For example 'Local', 'Development'...">
                        </v-text-field>
                      </v-col>
                    </v-row>
                    <v-row>
                      <v-col cols="3" sm="3">
                        <v-select v-model="edit_item.server.protocol"
                                  label="Protocol"
                                  :items="[ { value: 'ws', title: 'ws://' }, { value: 'wss', title: 'wss://' } ]"
                        ></v-select>
                      </v-col>
                      <v-col cols="6" sm="6">
                        <v-text-field
                          label="Server Address"
                          v-model="edit_item.server.addr"
                          hint="For example, test.pionix.de"
                          :rules="[validateDomain]"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="3" sm="3">
                        <v-text-field type="number"
                                      label="Port"
                                      v-model="edit_item.server.port"
                                      hint="For example, 8849"
                                      :rules="[validatePort]"
                        >
                        </v-text-field>
                      </v-col>
                    </v-row>
                    <v-row>
                      <v-col>
                        <v-btn icon="mdi-delete" elevation="2" @click="delete_item(edit_item.index)">
                        </v-btn>
                      </v-col>
                      <v-spacer />
                      <v-col class="text-right">
                        <v-btn class="mx-4" icon="mdi-close" elevation="2" @click="close_edit()"></v-btn>
                        <v-btn icon="mdi-check" elevation="2" @click="submit_edit()"></v-btn>
                      </v-col>
                    </v-row>
                  </v-container>
                </v-form>
                <template v-else>
                  <v-list-subheader lines="two" :disabled="connecting">
                    <v-list-item append-icon="mdi-server" v-for="(server, index) in servers" :key="server.id" @click="connect(server.addr)">

                        <v-list-item-title>{{ server.id }}</v-list-item-title>
                        <v-list-item-subtitle>{{ server.addr }}</v-list-item-subtitle>
                      
                      <v-list-item-action v-if="server.editable">
                        <v-btn icon="mdi-pencil" @click.prevent.stop="edit_server(index)"></v-btn>
                      </v-list-item-action>
                    </v-list-item>
                  </v-list-subheader>
                  <v-alert v-bind:text="error.status" prominent type="error" icon="mdi-cloud-alert" v-model="error.active" closable>
                  </v-alert>
                  <transition>
                    <p class="pt-10 text-center font-weight-medium text-h6" v-if="connecting">
                      {{ connection_status }}
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
import {defineComponent, inject} from "vue";
import EVBackendClient from "@/modules/evbc/client";
let evbc: EVBackendClient;

type ServerItem = {
  id: string;
  addr: string;
  editable: boolean;
  protocol: string;
  port: number;
};

// BIG FIXME (aw): the needs to be refactored graphically and logically

export default defineComponent({
  data: () => ({
    servers: [
      {
        id: "Loopback",
        addr: "loopback",
        editable: false,
        protocol: undefined,
        port: undefined
      },
      {
        id: "Ötzi",
        addr: "oetzi.pionix.net",
        editable: true,
        protocol: "wss",
        port: 8849
      }
    ] as ServerItem[],
    edit_item: null as { is_add: boolean; index: number; server: ServerItem },
    connect_automatically: true as boolean,
    connecting: false as boolean,
    connection_status: null as string,
    error: { active: false, status: "" },
  }),
  methods: {
    add_server() {
      this.edit_item = {
        is_add: true,
        index: null,
        server: {
          id: "Example Instance",
          addr: "127.0.0.1",
          editable: true,
          protocol: "ws",
          port: 8849
        },
      };
    },
    validateDomain(value: string): true | string {
      if (value.includes('://')) {
        return 'Please enter a domain without any protocol (e.g., "test.pionix.de").';
      }

      // Prevent user from entering a domain with port
      const domainPattern = /.*:\d+$/;
      if (domainPattern.test(value)) {
        return "Please don't enter a port here.";
      } else {
        return true
      }
    },
    validatePort(value: number): true | string {
      if (value < 1 || value > 65535) {
        return 'Please enter a valid port number.';
      } else {
        return true;
      }
    },
    edit_server(index: number) {
      this.edit_item = {
        is_add: false,
        index,
        server: {
          ...this.servers[index],
        },
      };
    },
    submit_edit() {
      const server_item = {
        ...this.edit_item.server,
      };
      if (this.edit_item.is_add) {
        this.servers.push(server_item);
      } else {
        this.servers[this.edit_item.index] = server_item;
      }
      this.close_edit();
      this.submit_local_storage_settings();
    },
    close_edit() {
      this.edit_item = null;
    },
    delete_item(index: number) {
      this.servers.splice(index, 1);
      this.close_edit();
      this.submit_local_storage_settings();
    },
    submit_local_storage_settings() {
      window.localStorage.setItem(
        "evbc-settings",
        JSON.stringify({
          servers: this.servers,
          connect_automatically: this.connect_automatically,
        })
      );
    },
    connect(addr: string) {
      this.connecting = true;
      evbc.connect(addr);
    },
  },
  created() {
    evbc = inject<EVBackendClient>('evbc');
    const storage = window.localStorage;
    const evbc_ls_string = storage.getItem("evbc-settings");

    if (evbc_ls_string) {
      const evbc_local_storage = JSON.parse(evbc_ls_string);
      if ("servers" in evbc_local_storage) {
        this.servers = (evbc_local_storage.servers as ServerItem[]).map((item) => ({ ...item }));
      }

      if ("connect_automatically" in evbc_local_storage) {
        this.connect_automatically = evbc_local_storage.connect_automatically;
      }
    }

    const unsubscribe = evbc.on("connection_state", (ev) => {
      if (ev.type === "INFO") {
        this.connection_status = ev.text;
      } else if (ev.type === "INITIALIZED") {
        unsubscribe();
        this.$router.push({ name: "main" });
      } else if (ev.type === "FAILED") {
        this.connecting = false;
        this.error = { active: true, status: ev.text };
      }
    });

    if (this.connect_automatically) {
      // FIXME (aw): would be nice to have an senseful default here!
      this.connect(`${window.location.hostname}:8849`)
    }
  },
});
</script>
