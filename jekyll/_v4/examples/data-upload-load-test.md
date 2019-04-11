---
layout: classic-docs
title: Load Testing Data Uploads
description: Code sample on how to load test a system where you need to upload data
categories: [examples]
order: 8
---

***

## Uploads

### Binary file upload
{% include 4.0/scripting-examples/http-upload-binary-file.md %}

**Relevant k6 APIs**:
- [open(filePath, [mode])](https://docs.k6.io/docs/open-filepath-mode)
- [http.file(data, [filename], [contentType])](https://docs.k6.io/docs/file-data-filename-contenttype)

### Creating a multipart request
With multipart requests you combine pieces of data with possibly different content types into one request body. A common scenario is for example a form with regular text input fields and a file field for uploading a file:

{% include 4.0/scripting-examples/http-multipart-request.md %}

**Relevant k6 APIs**:
- [open(filePath, [mode])](https://docs.k6.io/docs/open-filepath-mode)
- [http.file(data, [filename], [contentType])](https://docs.k6.io/docs/file-data-filename-contenttype)
