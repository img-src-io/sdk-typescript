# Images

## Overview

### Available Operations

* [uploadImage](#uploadimage) - Upload image
* [listImages](#listimages) - List images
* [searchImages](#searchimages) - Search images
* [getImage](#getimage) - Get image metadata
* [deleteImage](#deleteimage) - Delete image
* [createSignedUrl](#createsignedurl) - Create signed URL
* [deleteImagePath](#deleteimagepath) - Delete image path

## uploadImage

Upload a new image. Supports multipart/form-data with 'file' field.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="uploadImage" method="post" path="/api/v1/images" -->
```typescript
import { Imgsrc } from "@img-src/sdk";

const imgsrc = new Imgsrc({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await imgsrc.images.uploadImage({
    targetPath: "blog/2024",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ImgsrcCore } from "@img-src/sdk/core.js";
import { imagesUploadImage } from "@img-src/sdk/funcs/imagesUploadImage.js";

// Use `ImgsrcCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const imgsrc = new ImgsrcCore({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await imagesUploadImage(imgsrc, {
    targetPath: "blog/2024",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("imagesUploadImage failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UploadImageRequestBody](../../models/operations/uploadimagerequestbody.md)                                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.UploadImageResponse](../../models/operations/uploadimageresponse.md)\>**

### Errors

| Error Type                | Status Code               | Content Type              |
| ------------------------- | ------------------------- | ------------------------- |
| errors.ErrorResponse      | 400, 401, 409, 413        | application/json          |
| errors.ErrorResponse      | 500                       | application/json          |
| errors.ImgsrcDefaultError | 4XX, 5XX                  | \*/\*                     |

## listImages

List user's images with pagination and optional path filtering

### Example Usage

<!-- UsageSnippet language="typescript" operationID="listImages" method="get" path="/api/v1/images" -->
```typescript
import { Imgsrc } from "@img-src/sdk";

const imgsrc = new Imgsrc({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await imgsrc.images.listImages(50, 0, "blog/2024");

  for await (const page of result) {
    console.log(page);
  }
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ImgsrcCore } from "@img-src/sdk/core.js";
import { imagesListImages } from "@img-src/sdk/funcs/imagesListImages.js";

// Use `ImgsrcCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const imgsrc = new ImgsrcCore({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await imagesListImages(imgsrc, 50, 0, "blog/2024");
  if (res.ok) {
    const { value: result } = res;
    for await (const page of result) {
    console.log(page);
  }
  } else {
    console.log("imagesListImages failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `limit`                                                                                                                                                                        | *number*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | N/A                                                                                                                                                                            |
| `offset`                                                                                                                                                                       | *number*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | N/A                                                                                                                                                                            |
| `path`                                                                                                                                                                         | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | N/A                                                                                                                                                                            |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ListImagesResponse](../../models/operations/listimagesresponse.md)\>**

### Errors

| Error Type                | Status Code               | Content Type              |
| ------------------------- | ------------------------- | ------------------------- |
| errors.ErrorResponse      | 401                       | application/json          |
| errors.ErrorResponse      | 500                       | application/json          |
| errors.ImgsrcDefaultError | 4XX, 5XX                  | \*/\*                     |

## searchImages

Search images by filename

### Example Usage

<!-- UsageSnippet language="typescript" operationID="searchImages" method="get" path="/api/v1/images/search" -->
```typescript
import { Imgsrc } from "@img-src/sdk";

const imgsrc = new Imgsrc({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await imgsrc.images.searchImages("vacation");

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ImgsrcCore } from "@img-src/sdk/core.js";
import { imagesSearchImages } from "@img-src/sdk/funcs/imagesSearchImages.js";

// Use `ImgsrcCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const imgsrc = new ImgsrcCore({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await imagesSearchImages(imgsrc, "vacation");
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("imagesSearchImages failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `q`                                                                                                                                                                            | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            |
| `limit`                                                                                                                                                                        | *number*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | N/A                                                                                                                                                                            |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.SearchImagesResponse](../../models/operations/searchimagesresponse.md)\>**

### Errors

| Error Type                | Status Code               | Content Type              |
| ------------------------- | ------------------------- | ------------------------- |
| errors.ErrorResponse      | 400, 401                  | application/json          |
| errors.ErrorResponse      | 500                       | application/json          |
| errors.ImgsrcDefaultError | 4XX, 5XX                  | \*/\*                     |

## getImage

Get metadata for a specific image

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getImage" method="get" path="/api/v1/images/{id}" -->
```typescript
import { Imgsrc } from "@img-src/sdk";

const imgsrc = new Imgsrc({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await imgsrc.images.getImage("<id>");

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ImgsrcCore } from "@img-src/sdk/core.js";
import { imagesGetImage } from "@img-src/sdk/funcs/imagesGetImage.js";

// Use `ImgsrcCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const imgsrc = new ImgsrcCore({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await imagesGetImage(imgsrc, "<id>");
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("imagesGetImage failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `id`                                                                                                                                                                           | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetImageResponse](../../models/operations/getimageresponse.md)\>**

### Errors

| Error Type                | Status Code               | Content Type              |
| ------------------------- | ------------------------- | ------------------------- |
| errors.ErrorResponse      | 401, 404                  | application/json          |
| errors.ErrorResponse      | 500                       | application/json          |
| errors.ImgsrcDefaultError | 4XX, 5XX                  | \*/\*                     |

## deleteImage

Delete an image and all its paths

### Example Usage

<!-- UsageSnippet language="typescript" operationID="deleteImage" method="delete" path="/api/v1/images/{id}" -->
```typescript
import { Imgsrc } from "@img-src/sdk";

const imgsrc = new Imgsrc({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await imgsrc.images.deleteImage("abcdef1234567890");

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ImgsrcCore } from "@img-src/sdk/core.js";
import { imagesDeleteImage } from "@img-src/sdk/funcs/imagesDeleteImage.js";

// Use `ImgsrcCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const imgsrc = new ImgsrcCore({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await imagesDeleteImage(imgsrc, "abcdef1234567890");
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("imagesDeleteImage failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `id`                                                                                                                                                                           | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.DeleteImageResponse](../../models/operations/deleteimageresponse.md)\>**

### Errors

| Error Type                | Status Code               | Content Type              |
| ------------------------- | ------------------------- | ------------------------- |
| errors.ErrorResponse      | 401, 404                  | application/json          |
| errors.ErrorResponse      | 500                       | application/json          |
| errors.ImgsrcDefaultError | 4XX, 5XX                  | \*/\*                     |

## createSignedUrl

Create a time-limited signed URL for an image (Pro plan only)

### Example Usage

<!-- UsageSnippet language="typescript" operationID="createSignedUrl" method="post" path="/api/v1/images/{id}/signed-url" -->
```typescript
import { Imgsrc } from "@img-src/sdk";

const imgsrc = new Imgsrc({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await imgsrc.images.createSignedUrl("abcdef1234567890", {});

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ImgsrcCore } from "@img-src/sdk/core.js";
import { imagesCreateSignedUrl } from "@img-src/sdk/funcs/imagesCreateSignedUrl.js";

// Use `ImgsrcCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const imgsrc = new ImgsrcCore({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await imagesCreateSignedUrl(imgsrc, "abcdef1234567890", {});
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("imagesCreateSignedUrl failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `id`                                                                                                                                                                           | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            |
| `body`                                                                                                                                                                         | [components.CreateSignedUrlRequest](../../models/components/createsignedurlrequest.md)                                                                                         | :heavy_minus_sign:                                                                                                                                                             | N/A                                                                                                                                                                            |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.CreateSignedUrlResponse](../../models/operations/createsignedurlresponse.md)\>**

### Errors

| Error Type                | Status Code               | Content Type              |
| ------------------------- | ------------------------- | ------------------------- |
| errors.ErrorResponse      | 401, 403, 404             | application/json          |
| errors.ErrorResponse      | 500                       | application/json          |
| errors.ImgsrcDefaultError | 4XX, 5XX                  | \*/\*                     |

## deleteImagePath

Delete a specific path from an image. If this is the last path, the image is deleted.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="deleteImagePath" method="delete" path="/api/v1/images/path/{username}/{filepath}" -->
```typescript
import { Imgsrc } from "@img-src/sdk";

const imgsrc = new Imgsrc({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await imgsrc.images.deleteImagePath("johndoe", "blog/2024/photo.webp");

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ImgsrcCore } from "@img-src/sdk/core.js";
import { imagesDeleteImagePath } from "@img-src/sdk/funcs/imagesDeleteImagePath.js";

// Use `ImgsrcCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const imgsrc = new ImgsrcCore({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await imagesDeleteImagePath(imgsrc, "johndoe", "blog/2024/photo.webp");
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("imagesDeleteImagePath failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `username`                                                                                                                                                                     | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            |
| `filepath`                                                                                                                                                                     | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.DeleteImagePathResponse](../../models/operations/deleteimagepathresponse.md)\>**

### Errors

| Error Type                | Status Code               | Content Type              |
| ------------------------- | ------------------------- | ------------------------- |
| errors.ErrorResponse      | 401, 403, 404             | application/json          |
| errors.ErrorResponse      | 500                       | application/json          |
| errors.ImgsrcDefaultError | 4XX, 5XX                  | \*/\*                     |