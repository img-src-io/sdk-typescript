# SettingsResponse

## Example Usage

```typescript
import { SettingsResponse } from "@img-src/sdk/models/components";

let value: SettingsResponse = {
  settings: {
    id: "user_abc123",
    username: "johndoe",
    email: "john@example.com",
    deliveryFormats: [
      "webp",
      "avif",
      "jpeg",
    ],
    defaultQuality: 80,
    defaultFitMode: "contain",
    defaultMaxWidth: 1920,
    defaultMaxHeight: 1080,
    theme: "light",
    language: "en",
    createdAt: 1704067200,
    updatedAt: 1704067200,
    totalUploads: 150,
    storageUsedBytes: 104857600,
  },
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `settings`                                                         | [components.UserSettings](../../models/components/usersettings.md) | :heavy_check_mark:                                                 | N/A                                                                |