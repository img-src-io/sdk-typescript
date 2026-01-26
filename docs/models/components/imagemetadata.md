# ImageMetadata

## Example Usage

```typescript
import { ImageMetadata } from "@img-src/sdk/models/components";

let value: ImageMetadata = {
  hash: "abcdef1234567890abcdef1234567890abcdef1234567890abcdef1234567890",
  originalFilename: "vacation-photo.jpg",
  size: 2048576,
  uploadedAt: new Date("2025-01-21T12:00:00Z"),
  mimeType: "image/jpeg",
  width: 1920,
  height: 1080,
  dominantColor: "3b82f6",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `hash`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | Full SHA256 hash                                                                              | abcdef1234567890abcdef1234567890abcdef1234567890abcdef1234567890                              |
| `originalFilename`                                                                            | *string*                                                                                      | :heavy_check_mark:                                                                            | Original filename as uploaded                                                                 | vacation-photo.jpg                                                                            |
| `size`                                                                                        | *number*                                                                                      | :heavy_check_mark:                                                                            | File size in bytes                                                                            | 2048576                                                                                       |
| `uploadedAt`                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | Upload timestamp                                                                              | 2025-01-21T12:00:00Z                                                                          |
| `mimeType`                                                                                    | *string*                                                                                      | :heavy_check_mark:                                                                            | MIME type                                                                                     | image/jpeg                                                                                    |
| `width`                                                                                       | *number*                                                                                      | :heavy_minus_sign:                                                                            | Image width in pixels                                                                         | 1920                                                                                          |
| `height`                                                                                      | *number*                                                                                      | :heavy_minus_sign:                                                                            | Image height in pixels                                                                        | 1080                                                                                          |
| `dominantColor`                                                                               | *string*                                                                                      | :heavy_minus_sign:                                                                            | Dominant color as 6-digit hex (without #)                                                     | 3b82f6                                                                                        |