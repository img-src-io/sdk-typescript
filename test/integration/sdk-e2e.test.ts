import { randomBytes } from "node:crypto";
import { deflateSync } from "node:zlib";
import { describe, it, expect, beforeAll } from "vitest";
import { Imgsrc } from "../../src/index.js";

/**
 * End-to-end integration tests for the full SDK.
 * Requires IMGSRC_API_KEY environment variable.
 *
 * Run: IMGSRC_API_KEY=<key> npm test -- test/integration/sdk-e2e.test.ts
 */

const API_KEY = process.env["IMGSRC_API_KEY"];

/** Build a unique 8x8 PNG with random pixel data (avoids content dedup). */
function makeUniquePng(): Uint8Array {
  const width = 8, height = 8;
  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(width, 0);
  ihdr.writeUInt32BE(height, 4);
  ihdr[8] = 8; ihdr[9] = 2; // 8-bit RGB

  const rowSize = 1 + width * 3;
  const raw = Buffer.alloc(rowSize * height);
  for (let y = 0; y < height; y++) {
    raw[y * rowSize] = 0; // filter: none
    randomBytes(width * 3).copy(raw, y * rowSize + 1);
  }
  const deflated = deflateSync(raw, { level: 0 });

  function crc32(buf: Buffer): number {
    let crc = 0xffffffff;
    for (let i = 0; i < buf.length; i++) {
      crc ^= buf[i]!;
      for (let j = 0; j < 8; j++) crc = (crc >>> 1) ^ (crc & 1 ? 0xedb88320 : 0);
    }
    return (crc ^ 0xffffffff) >>> 0;
  }
  function chunk(type: string, data: Buffer): Buffer {
    const len = Buffer.alloc(4); len.writeUInt32BE(data.length, 0);
    const t = Buffer.from(type, "ascii");
    const crcB = Buffer.alloc(4); crcB.writeUInt32BE(crc32(Buffer.concat([t, data])), 0);
    return Buffer.concat([len, t, data, crcB]);
  }

  return Buffer.concat([
    Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]),
    chunk("IHDR", ihdr),
    chunk("IDAT", deflated),
    chunk("IEND", Buffer.alloc(0)),
  ]);
}

describe.skipIf(!API_KEY)("SDK E2E Integration", () => {
  let sdk: Imgsrc;
  let uploadedImageId: string;

  beforeAll(() => {
    sdk = new Imgsrc({ bearerAuth: API_KEY });
  });

  // ─── Settings ───────────────────────────────────────────

  it("settings.getSettings()", async () => {
    const res = await sdk.settings.getSettings();
    expect(res.httpMeta.response.status).toBe(200);
    const settings = res.settingsResponse!.settings;
    expect(settings.username).toBeTruthy();
    expect(settings.plan).toBeTruthy();
    expect(typeof settings.defaultQuality).toBe("number");
    console.log(
      `  [settings] user=${settings.username} plan=${settings.plan}`
    );
  });

  it("settings.updateSettings() - change theme and revert", async () => {
    const current = (await sdk.settings.getSettings()).settingsResponse!
      .settings;
    const originalTheme = current.theme;
    const newTheme = originalTheme === "dark" ? "light" : "dark";

    // Update
    const updated = await sdk.settings.updateSettings({ theme: newTheme });
    expect(updated.httpMeta.response.status).toBe(200);
    expect(updated.settingsUpdateResponse!.settings.theme).toBe(newTheme);

    // Revert
    const reverted = await sdk.settings.updateSettings({
      theme: originalTheme,
    });
    expect(reverted.settingsUpdateResponse!.settings.theme).toBe(
      originalTheme
    );
    console.log(
      `  [settings] theme: ${originalTheme} -> ${newTheme} -> ${originalTheme}`
    );
  });

  // ─── Usage ──────────────────────────────────────────────

  it("usage.getUsage()", async () => {
    const res = await sdk.usage.getUsage();
    expect(res.httpMeta.response.status).toBe(200);
    const usage = res.usageResponse!;
    expect(usage.plan).toBeTruthy();
    expect(usage.planName).toBeTruthy();
    expect(typeof usage.totalImages).toBe("number");
    expect(usage.credits).toBeDefined();
    expect(typeof usage.credits.storageBytes).toBe("number");
    expect(usage.currentPeriod).toBeDefined();
    expect(usage.planLimits).toBeDefined();
    console.log(
      `  [usage] plan=${usage.planName} images=${usage.totalImages} storage=${usage.storageUsedMb}MB`
    );
  });

  // ─── Images: Upload ─────────────────────────────────────

  it("images.uploadImage()", async () => {
    const png = makeUniquePng();
    const res = await sdk.images.uploadImage({
      file: {
        fileName: `sdk-test-${Date.now()}.png`,
        content: png,
      },
      targetPath: "sdk-test/test-image.png",
    });
    // Upload returns 200 (duplicate) or 201 (new)
    expect([200, 201]).toContain(res.httpMeta.response.status);
    const upload = res.uploadResponse!;
    uploadedImageId = upload.id;
    expect(upload.id).toBeTruthy();
    expect(upload.url).toBeTruthy();
    expect(upload.visibility).toBeTruthy();
    expect(upload.size).toBeGreaterThan(0);
    expect(upload.paths.length).toBeGreaterThan(0);
    console.log(
      `  [upload] id=${upload.id} size=${upload.size} visibility=${upload.visibility}`
    );
  });

  // ─── Images: List ───────────────────────────────────────

  it("images.listImages()", async () => {
    // PageIterator: first page data is on the returned object itself
    const firstPage = await sdk.images.listImages(5);
    expect(firstPage.httpMeta.response.status).toBe(200);
    const list = firstPage.imageListResponse!;
    expect(list.images.length).toBeGreaterThan(0);
    console.log(
      `  [list] total=${list.total} returned=${list.images.length}`
    );
  });

  // ─── Images: Search ─────────────────────────────────────

  it("images.searchImages()", async () => {
    const res = await sdk.images.searchImages("sdk-test");
    expect(res.httpMeta.response.status).toBe(200);
    const search = res.searchResponse!;
    expect(search.results).toBeDefined();
    console.log(
      `  [search] query="sdk-test" results=${search.results.length}`
    );
  });

  // ─── Images: Get Metadata ───────────────────────────────

  it("images.getImage()", async () => {
    expect(uploadedImageId).toBeTruthy();

    const res = await sdk.images.getImage(uploadedImageId);
    expect(res.httpMeta.response.status).toBe(200);
    const meta = res.metadataResponse!;
    expect(meta.id).toBe(uploadedImageId);
    expect(meta.visibility).toBeTruthy();
    expect(meta.urls).toBeDefined();
    expect(meta.links).toBeDefined();
    console.log(
      `  [getImage] id=${meta.id} visibility=${meta.visibility}`
    );
  });

  // ─── Images: Update Visibility ──────────────────────────

  it("images.updateImageVisibility()", async () => {
    expect(uploadedImageId).toBeTruthy();

    const res = await sdk.images.updateImageVisibility(uploadedImageId, {
      visibility: "private",
    });
    expect(res.httpMeta.response.status).toBe(200);
    const updated = res.updateVisibilityResponse!;
    expect(updated.visibility).toBe("private");
    console.log(
      `  [visibility] id=${updated.id} -> ${updated.visibility}`
    );

    // Revert to public
    const reverted = await sdk.images.updateImageVisibility(uploadedImageId, {
      visibility: "public",
    });
    expect(reverted.updateVisibilityResponse!.visibility).toBe("public");
  });

  // ─── Images: Create Signed URL (Pro only) ───────────────

  it("images.createSignedUrl()", async () => {
    expect(uploadedImageId).toBeTruthy();

    try {
      const res = await sdk.images.createSignedUrl(uploadedImageId, {
        expiresInSeconds: 300,
      });
      expect(res.httpMeta.response.status).toBe(200);
      const signed = res.signedUrlResponse!;
      expect(signed.signedUrl).toBeTruthy();
      expect(signed.expiresAt).toBeGreaterThan(0);
      console.log(
        `  [signedUrl] url=${signed.signedUrl.slice(0, 60)}...`
      );
    } catch (err: any) {
      if (err?.statusCode === 403 || err?.message?.includes("403")) {
        console.log("  [signedUrl] SKIPPED (Pro plan required)");
      } else {
        throw err;
      }
    }
  });

  // ─── Presets (Pro only) ─────────────────────────────────

  describe("presets (Pro plan)", () => {
    let createdPresetId: string | undefined;
    const presetName = `sdk-test-preset-${Date.now()}`;

    it("presets.listPresets()", async () => {
      try {
        const res = await sdk.presets.listPresets();
        expect(res.httpMeta.response.status).toBe(200);
        console.log("  [presets.list] OK");
      } catch (err: any) {
        if (err?.statusCode === 403 || err?.message?.includes("403")) {
          console.log("  [presets.list] SKIPPED (Pro plan required)");
        } else {
          throw err;
        }
      }
    });

    it("presets.createPreset()", async () => {
      try {
        const res = await sdk.presets.createPreset({
          name: presetName,
          description: "Created by SDK E2E test",
          params: { w: 200, h: 200, fit: "cover", q: 80 },
        });
        expect(res.httpMeta.response.status).toBe(201);
        createdPresetId = res.preset?.id;
        console.log(
          `  [presets.create] id=${createdPresetId} name=${presetName}`
        );
      } catch (err: any) {
        if (err?.statusCode === 403 || err?.message?.includes("403")) {
          console.log("  [presets.create] SKIPPED (Pro plan required)");
        } else {
          throw err;
        }
      }
    });

    it("presets.getPreset()", async () => {
      if (!createdPresetId) {
        console.log("  [presets.get] SKIPPED (no preset created)");
        return;
      }
      const res = await sdk.presets.getPreset(createdPresetId);
      expect(res.httpMeta.response.status).toBe(200);
      expect(res.preset!.name).toBe(presetName);
      console.log("  [presets.get] OK");
    });

    it("presets.updatePreset()", async () => {
      if (!createdPresetId) {
        console.log("  [presets.update] SKIPPED (no preset created)");
        return;
      }
      const res = await sdk.presets.updatePreset(createdPresetId, {
        description: "Updated by SDK E2E test",
      });
      expect(res.httpMeta.response.status).toBe(200);
      console.log("  [presets.update] OK");
    });

    it("presets.deletePreset()", async () => {
      if (!createdPresetId) {
        console.log("  [presets.delete] SKIPPED (no preset created)");
        return;
      }
      // API expects preset name for deletion, not UUID
      const res = await sdk.presets.deletePreset(presetName);
      expect(res.httpMeta.response.status).toBe(200);
      console.log("  [presets.delete] OK");
    });
  });

  // ─── Images: Delete (cleanup) ───────────────────────────

  it("images.deleteImage()", async () => {
    expect(uploadedImageId).toBeTruthy();

    const res = await sdk.images.deleteImage(uploadedImageId);
    expect(res.httpMeta.response.status).toBe(200);
    const deleted = res.deleteResponse!;
    expect(deleted.message).toBeTruthy();
    console.log(`  [delete] ${deleted.message}`);
  });
});
