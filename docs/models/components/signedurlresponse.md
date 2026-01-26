# SignedUrlResponse

## Example Usage

```typescript
import { SignedUrlResponse } from "@img-src/sdk/models/components";

let value: SignedUrlResponse = {
  signedUrl:
    "https://cdn.img-src.io/john/photo.webp?token=xxx&expires=1704153600",
  expiresAt: 1704153600,
  expiresInSeconds: 3600,
};
```

## Fields

| Field                                                               | Type                                                                | Required                                                            | Description                                                         | Example                                                             |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `signedUrl`                                                         | *string*                                                            | :heavy_check_mark:                                                  | Time-limited signed URL                                             | https://cdn.img-src.io/john/photo.webp?token=xxx&expires=1704153600 |
| `expiresAt`                                                         | *number*                                                            | :heavy_check_mark:                                                  | Expiration timestamp (Unix epoch)                                   | 1704153600                                                          |
| `expiresInSeconds`                                                  | *number*                                                            | :heavy_check_mark:                                                  | Seconds until expiration                                            | 3600                                                                |