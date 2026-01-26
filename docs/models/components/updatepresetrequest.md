# UpdatePresetRequest

## Example Usage

```typescript
import { UpdatePresetRequest } from "@img-src/sdk/models/components";

let value: UpdatePresetRequest = {
  name: "card-image",
  description: "Card thumbnail for product listings",
  params: {
    "w": 400,
    "h": 300,
    "fit": "cover",
  },
};
```

## Fields

| Field                                               | Type                                                | Required                                            | Description                                         | Example                                             |
| --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- |
| `name`                                              | *string*                                            | :heavy_minus_sign:                                  | New preset name (1-50 characters)                   | card-image                                          |
| `description`                                       | *string*                                            | :heavy_minus_sign:                                  | New description (max 200 characters, null to clear) | Card thumbnail for product listings                 |
| `params`                                            | Record<string, *any*>                               | :heavy_minus_sign:                                  | New transformation parameters                       | {<br/>"w": 400,<br/>"h": 300,<br/>"fit": "cover"<br/>} |