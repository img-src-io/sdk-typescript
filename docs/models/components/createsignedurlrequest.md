# CreateSignedUrlRequest

## Example Usage

```typescript
import { CreateSignedUrlRequest } from "@img-src/sdk/models/components";

let value: CreateSignedUrlRequest = {};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            | Example                                                                |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `expiresInSeconds`                                                     | *number*                                                               | :heavy_minus_sign:                                                     | Expiration time in seconds (60-86400, default 3600)                    | 3600                                                                   |
| `transformation`                                                       | [components.Transformation](../../models/components/transformation.md) | :heavy_minus_sign:                                                     | Optional image transformation parameters                               |                                                                        |