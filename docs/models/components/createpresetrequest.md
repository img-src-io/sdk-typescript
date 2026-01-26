# CreatePresetRequest

## Example Usage

```typescript
import { CreatePresetRequest } from "@img-src/sdk/models/components";

let value: CreatePresetRequest = {
  name: "thumbnail",
  description: "200x200 thumbnail with cover fit",
  params: {
    "w": 200,
    "h": 200,
    "fit": "cover",
    "format": "webp",
  },
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              | Example                                                  |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `name`                                                   | *string*                                                 | :heavy_check_mark:                                       | Preset name (1-50 characters)                            | thumbnail                                                |
| `description`                                            | *string*                                                 | :heavy_minus_sign:                                       | Optional description (max 200 characters)                | 200x200 thumbnail with cover fit                         |
| `params`                                                 | Record<string, *any*>                                    | :heavy_check_mark:                                       | Transformation parameters                                | {<br/>"w": 200,<br/>"h": 200,<br/>"fit": "cover",<br/>"format": "webp"<br/>} |