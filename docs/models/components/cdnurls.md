# CdnUrls

## Example Usage

```typescript
import { CdnUrls } from "@img-src/sdk/models/components";

let value: CdnUrls = {
  original: "https://cdn.img-src.io/john/photo.jpg",
  webp: "https://cdn.img-src.io/john/photo.webp",
  avif: "https://cdn.img-src.io/john/photo.avif",
  jpeg: "https://cdn.img-src.io/john/photo.jpg",
  png: "https://cdn.img-src.io/john/photo.png",
};
```

## Fields

| Field                                  | Type                                   | Required                               | Description                            | Example                                |
| -------------------------------------- | -------------------------------------- | -------------------------------------- | -------------------------------------- | -------------------------------------- |
| `original`                             | *string*                               | :heavy_check_mark:                     | Original format URL                    | https://cdn.img-src.io/john/photo.jpg  |
| `webp`                                 | *string*                               | :heavy_check_mark:                     | WebP format URL                        | https://cdn.img-src.io/john/photo.webp |
| `avif`                                 | *string*                               | :heavy_check_mark:                     | AVIF format URL                        | https://cdn.img-src.io/john/photo.avif |
| `jpeg`                                 | *string*                               | :heavy_check_mark:                     | JPEG format URL                        | https://cdn.img-src.io/john/photo.jpg  |
| `png`                                  | *string*                               | :heavy_check_mark:                     | PNG format URL                         | https://cdn.img-src.io/john/photo.png  |