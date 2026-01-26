# UpdateSettingsRequest

## Example Usage

```typescript
import { UpdateSettingsRequest } from "@img-src/sdk/models/components";

let value: UpdateSettingsRequest = {
  deliveryFormats: [
    "webp",
    "avif",
    "jpeg",
  ],
  defaultQuality: 80,
  defaultFitMode: "contain",
  defaultMaxWidth: 1920,
  defaultMaxHeight: 1080,
  theme: "dark",
  language: "ko",
};
```

## Fields

| Field                                  | Type                                   | Required                               | Description                            | Example                                |
| -------------------------------------- | -------------------------------------- | -------------------------------------- | -------------------------------------- | -------------------------------------- |
| `deliveryFormats`                      | *string*[]                             | :heavy_minus_sign:                     | Preferred delivery formats (ordered)   | [<br/>"webp",<br/>"avif",<br/>"jpeg"<br/>] |
| `defaultQuality`                       | *number*                               | :heavy_minus_sign:                     | Default image quality (1-100)          | 80                                     |
| `defaultFitMode`                       | *string*                               | :heavy_minus_sign:                     | Default fit mode                       | contain                                |
| `defaultMaxWidth`                      | *number*                               | :heavy_minus_sign:                     | Default maximum width (null to clear)  | 1920                                   |
| `defaultMaxHeight`                     | *number*                               | :heavy_minus_sign:                     | Default maximum height (null to clear) | 1080                                   |
| `theme`                                | *string*                               | :heavy_minus_sign:                     | UI theme                               | dark                                   |
| `language`                             | *string*                               | :heavy_minus_sign:                     | UI language                            | ko                                     |