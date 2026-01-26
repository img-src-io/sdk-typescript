# UserSettings

## Example Usage

```typescript
import { UserSettings } from "@img-src/sdk/models/components";

let value: UserSettings = {
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
};
```

## Fields

| Field                                   | Type                                    | Required                                | Description                             | Example                                 |
| --------------------------------------- | --------------------------------------- | --------------------------------------- | --------------------------------------- | --------------------------------------- |
| `id`                                    | *string*                                | :heavy_check_mark:                      | Clerk user ID                           | user_abc123                             |
| `username`                              | *string*                                | :heavy_check_mark:                      | Username                                | johndoe                                 |
| `email`                                 | *string*                                | :heavy_minus_sign:                      | Email address                           | john@example.com                        |
| `deliveryFormats`                       | *string*[]                              | :heavy_check_mark:                      | Preferred delivery formats (ordered)    | [<br/>"webp",<br/>"avif",<br/>"jpeg"<br/>] |
| `defaultQuality`                        | *number*                                | :heavy_check_mark:                      | Default image quality (1-100)           | 80                                      |
| `defaultFitMode`                        | *string*                                | :heavy_check_mark:                      | Default fit mode                        | contain                                 |
| `defaultMaxWidth`                       | *number*                                | :heavy_minus_sign:                      | Default maximum width                   | 1920                                    |
| `defaultMaxHeight`                      | *number*                                | :heavy_minus_sign:                      | Default maximum height                  | 1080                                    |
| `theme`                                 | *string*                                | :heavy_check_mark:                      | UI theme                                | light                                   |
| `language`                              | *string*                                | :heavy_check_mark:                      | UI language                             | en                                      |
| `createdAt`                             | *number*                                | :heavy_check_mark:                      | Account creation timestamp (Unix epoch) | 1704067200                              |
| `updatedAt`                             | *number*                                | :heavy_check_mark:                      | Last update timestamp (Unix epoch)      | 1704067200                              |
| `totalUploads`                          | *number*                                | :heavy_check_mark:                      | Total number of uploads                 | 150                                     |
| `storageUsedBytes`                      | *number*                                | :heavy_check_mark:                      | Total storage used in bytes             | 104857600                               |