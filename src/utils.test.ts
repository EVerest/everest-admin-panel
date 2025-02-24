// SPDX-License-Identifier: Apache-2.0
// Copyright 2020 - 2025 Pionix GmbH and Contributors to EVerest

import {urlToPublicAsset} from "@/utils";
import { describe, it, expect, beforeAll, afterAll } from "vitest";

let originalBaseUrl: string;
describe("Utils", () => {
    beforeAll(() => {
        originalBaseUrl = import.meta.env.BASE_URL;
    });
    describe("urlToPublicAsset", () => {
        it('should not produce double slashes', () => {
            import.meta.env.BASE_URL = '/';
            expect(urlToPublicAsset('/some-path')).toEqual('/some-path');
        });
        it('should add slash if necessary', () => {
            import.meta.env.BASE_URL = 'localhost';
            expect(urlToPublicAsset('some-path')).toEqual('localhost/some-path');
        });
        it('should deal with trailing base url slash and no path slash', () => {
            import.meta.env.BASE_URL = 'localhost/';
            expect(urlToPublicAsset('some-path')).toEqual('localhost/some-path');
        });
    });
    afterAll(() => {
        import.meta.env.BASE_URL = originalBaseUrl;
    });
})
