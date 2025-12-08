# Data Model: Copy/Paste Modules

## Entities

### ClipboardSnapshot

Represents the state of copied modules at a specific point in time.

```typescript
type ClipboardSnapshot = {
  /** Timestamp of the copy operation */
  timestamp: number;
  /** List of modules included in this snapshot */
  modules: CopiedModule[];
  /** List of connections that exist strictly between the copied modules */
  connections: CopiedConnection[];
};
```

### CopiedModule

A serialized representation of a module instance, ready to be re-instantiated.

```typescript
type CopiedModule = {
  /** The ID of the module at the time of copy (used for connection mapping) */
  original_id: string;
  /** The module type (e.g., "EvseManager") */
  type: string;
  /** The configuration values (stripped of schema, similar to EverestModuleConfig) */
  config: EverestModuleConfig;
  /** The visual configuration (position, terminals) */
  view_config: ModuleViewConfig;
};
```

### CopiedConnection

Represents a connection between two modules in the snapshot.

```typescript
type CopiedConnection = {
  /** ID of the providing module (refers to original_id in CopiedModule) */
  provider_original_id: string;
  /** Name of the implementation provided */
  provider_impl: string;
  /** ID of the requiring module (refers to original_id in CopiedModule) */
  requirer_original_id: string;
  /** Name of the requirement */
  requirement: string;
};
```

## State Transitions

### Copy

1.  Identify selected `ModuleInstanceID`s.
2.  For each instance:
    *   Serialize config (Model -> `EverestModuleConfig`).
    *   Clone `view_config`.
    *   Create `CopiedModule`.
3.  Identify connections where `provider` AND `requirer` are in the selection.
4.  Create `CopiedConnection`s.
5.  Store `ClipboardSnapshot` in memory.

### Paste

1.  Retrieve `ClipboardSnapshot`.
2.  Calculate position offset (e.g., +20px).
3.  For each `CopiedModule`:
    *   Generate new unique ID (Smart Increment).
    *   Call `EVConfigModel.add_new_module_instance` with new ID and config.
    *   Update `view_config` position.
    *   Map `original_id` -> `new_id`.
4.  For each `CopiedConnection`:
    *   Resolve `new_provider_id` and `new_requirer_id` using the map.
    *   Call `EVConfigModel.add_connection`.
5.  Update selection to the newly created instances.

