// SPDX-License-Identifier: Apache-2.0
// Copyright 2020 - 2025 Pionix GmbH and Contributors to EVerest

import { ModuleInstanceID, ModuleInstanceModel } from "@/modules/evbc";

export type CopiedModule = {
  originalId: ModuleInstanceID;
  model: Omit<ModuleInstanceModel, "id" | "connections"> & {
    // We keep the original name (id in model) to generate a new unique name like "name (1)"
    name: string;
  };
};

export type CopiedConnection = {
  providing_original_id: ModuleInstanceID;
  providing_impl_name: string;
  requiring_original_id: ModuleInstanceID;
  requirement_name: string;
};

export type ClipboardSnapshot = {
  modules: CopiedModule[];
  connections: CopiedConnection[];
};
