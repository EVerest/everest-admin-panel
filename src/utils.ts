// SPDX-License-Identifier: Apache-2.0
// Copyright 2020 - 2025 Pionix GmbH and Contributors to EVerest

/**
 *
 * @param filePath The path relative to public
 */
export function urlToPublicAsset(filePath: string): string {
  let base: string = import.meta.env.BASE_URL;
  if (!base.endsWith("/")) {
    base += "/";
  }
  if (!filePath.startsWith("/")) {
    return base + filePath;
  } else {
    return base + filePath.slice(1);
  }
}
