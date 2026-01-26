# Usage

## Overview

### Available Operations

* [getUsage](#getusage) - Get usage statistics

## getUsage

Returns usage statistics for the authenticated user

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getUsage" method="get" path="/api/v1/usage" -->
```typescript
import { Imgsrc } from "@img-src/sdk";

const imgsrc = new Imgsrc({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await imgsrc.usage.getUsage();

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ImgsrcCore } from "@img-src/sdk/core.js";
import { usageGetUsage } from "@img-src/sdk/funcs/usageGetUsage.js";

// Use `ImgsrcCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const imgsrc = new ImgsrcCore({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await usageGetUsage(imgsrc);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("usageGetUsage failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetUsageResponse](../../models/operations/getusageresponse.md)\>**

### Errors

| Error Type                | Status Code               | Content Type              |
| ------------------------- | ------------------------- | ------------------------- |
| errors.ErrorResponse      | 401                       | application/json          |
| errors.ErrorResponse      | 500                       | application/json          |
| errors.ImgsrcDefaultError | 4XX, 5XX                  | \*/\*                     |