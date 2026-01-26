# MetadataResponse

## Example Usage

```typescript
import { MetadataResponse } from "@img-src/sdk/models/components";

let value: MetadataResponse = {
  id: "abcdef1234567890",
  metadata: {
    hash: "abcdef1234567890abcdef1234567890abcdef1234567890abcdef1234567890",
    originalFilename: "vacation-photo.jpg",
    size: 2048576,
    uploadedAt: new Date("2025-01-21T12:00:00Z"),
    mimeType: "image/jpeg",
    width: 1920,
    height: 1080,
    dominantColor: "3b82f6",
  },
  urls: {
    original: "https://cdn.img-src.io/john/photo.jpg",
    webp: "https://cdn.img-src.io/john/photo.webp",
    avif: "https://cdn.img-src.io/john/photo.avif",
    jpeg: "https://cdn.img-src.io/john/photo.jpg",
    png: "https://cdn.img-src.io/john/photo.png",
  },
  links: {
    self: "/api/v1/images/abc123",
    delete: "/api/v1/images/abc123",
  },
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          | Example                                                              |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `id`                                                                 | *string*                                                             | :heavy_check_mark:                                                   | Image ID                                                             | abcdef1234567890                                                     |
| `metadata`                                                           | [components.ImageMetadata](../../models/components/imagemetadata.md) | :heavy_check_mark:                                                   | N/A                                                                  |                                                                      |
| `urls`                                                               | [components.CdnUrls](../../models/components/cdnurls.md)             | :heavy_check_mark:                                                   | N/A                                                                  |                                                                      |
| `links`                                                              | [components.HateoasLinks](../../models/components/hateoaslinks.md)   | :heavy_check_mark:                                                   | N/A                                                                  |                                                                      |