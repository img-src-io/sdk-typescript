# AvailableFormats

## Example Usage

```typescript
import { AvailableFormats } from "@img-src/sdk/models/components";

let value: AvailableFormats = {
  webp: "https://cdn.img-src.io/john/photo.webp",
  avif: "https://cdn.img-src.io/john/photo.avif",
  jpeg: "https://cdn.img-src.io/john/photo.jpg",
};
```

## Fields

| Field                                  | Type                                   | Required                               | Description                            | Example                                |
| -------------------------------------- | -------------------------------------- | -------------------------------------- | -------------------------------------- | -------------------------------------- |
| `webp`                                 | *string*                               | :heavy_check_mark:                     | WebP format URL                        | https://cdn.img-src.io/john/photo.webp |
| `avif`                                 | *string*                               | :heavy_check_mark:                     | AVIF format URL                        | https://cdn.img-src.io/john/photo.avif |
| `jpeg`                                 | *string*                               | :heavy_check_mark:                     | JPEG format URL                        | https://cdn.img-src.io/john/photo.jpg  |