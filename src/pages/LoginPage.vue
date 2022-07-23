<!-- SPDX-License-Identifier: Apache-2.0 -->
<!-- Copyright 2020 - 2022 Pionix GmbH and Contributors to EVerest -->

<template>
  <v-app>
    <v-main>
      <v-container fluid fill-height>
        <v-row align="center" justify="center">
          <v-col xs="12" sm="8" md="4">
            <v-card elevation="10">
              <v-toolbar dark color="primary">
                <template v-if="!edit_item">
                  <v-toolbar-title>Choose server instance</v-toolbar-title>

                  <v-spacer></v-spacer>
                  <v-btn icon :disabled="connecting" @click="add_server"><v-icon>mdi-plus</v-icon></v-btn>
                </template>
                <template v-else>
                  <v-toolbar-title>{{ edit_item.is_add ? "Add" : "Edit" }} server instance</v-toolbar-title>
                </template>
              </v-toolbar>

              <v-card-text>
                <v-form v-if="edit_item">
                  <v-container>
                    <v-row>
                      <v-col cols="12" sm="6">
                        <v-text-field label="Server ID" v-model="edit_item.server.id" hint="For example, HomeServer">
                        </v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6">
                        <v-text-field
                          label="Server Address"
                          v-model="edit_item.server.addr"
                          hint="For example, test.pionix.de"
                        ></v-text-field>
                      </v-col>
                    </v-row>
                    <v-row>
                      <v-col>
                        <v-btn icon tile elevation="2" @click="delete_item(edit_item.index)">
                          <v-icon> mdi-delete </v-icon>
                        </v-btn>
                      </v-col>
                      <v-spacer />
                      <v-col class="text-right">
                        <v-btn class="mx-4" icon tile elevation="2" @click="close_edit()">
                          <v-icon> mdi-close </v-icon>
                        </v-btn>
                        <v-btn icon tile elevation="2" @click="submit_edit()"> <v-icon> mdi-check </v-icon> </v-btn>
                      </v-col>
                    </v-row>
                  </v-container>
                </v-form>
                <template v-else>
                  <v-list subheader two-line :disabled="connecting">
                    <v-list-item v-for="(server, index) in servers" :key="server.id" @click="connect(server.addr)">
                      <v-list-item-avatar>
                        <v-icon class="grey lighten-1" dark> mdi-server </v-icon>
                      </v-list-item-avatar>
                      <v-list-item-content>
                        <v-list-item-title v-text="server.id"></v-list-item-title>
                        <v-list-item-subtitle v-text="server.addr"></v-list-item-subtitle>
                      </v-list-item-content>
                      <v-list-item-action v-if="server.editable">
                        <v-btn icon @click.prevent.stop="edit_server(index)"><v-icon>mdi-pencil</v-icon></v-btn>
                      </v-list-item-action>
                    </v-list-item>
                  </v-list>
                  <v-alert text prominent type="error" icon="mdi-cloud-alert" v-model="error.active" dismissible>
                    {{ error.status }}
                  </v-alert>
                  <transition>
                    <p class="pt-10 text-center font-weight-medium text-h6" v-if="connecting">
                      {{ connection_status }}
                    </p>
                  </transition>
                  <v-progress-linear :active="connecting" height="10" absolute bottom indeterminate></v-progress-linear>
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
import Vue from "vue";

type ServerItem = {
  id: string;
  addr: string;
  editable: boolean;
};

// BIG FIXME (aw): the needs to be refactored graphically and logically

export default Vue.extend({
  data: () => ({
    servers: [
      {
        id: "Loopback",
        addr: "loopback",
        editable: false,
      },
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
          addr: "8.8.4.8",
          editable: true,
        },
      };
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
      this.$evbc.connect(addr);
    },
  },
  created() {
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

    const unsubscribe = this.$evbc.on("connection_state", (ev) => {
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
