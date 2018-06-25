---
layout: classic-docs
title: Load testing with Postman collections
description: A tutorial on how to convert Postman collections to k6 test scripts
categories: [how-to-tutorials]
order: 4
---

<p style="text-align: center;"><img src="{{ site.baseurl }}/assets/img/v4/how-to-tutorials/postman-logo.png" alt="Postman" width="300"/></p>

[Postman](https://getpostman.com/) is one of the best-in-market tools for functional testing of APIs. As a Postman user, you organize your API tests into collections of requests.

Load Impact provides a [CLI tool for converting Postman collections to k6 tests](https://github.com/loadimpact/postman-to-k6).

## Installation and usage

The following section describes the steps to convert your Postman collections to k6 tests.

1. First, you have to export your Postman collections.
    ![Download collection from Postman]({{ site.baseurl }}/assets/img/v4/how-to-tutorials/postman-download-collection.png)

2. Install the command-line tool:

    `npm install -g postman-to-k6`

    For more installation options see the [Github repo](https://github.com/loadimpact/postman-to-k6).

3. Run the tool to convert the Postman collection

    `postman-to-k6 path/to/postman-collection.json -o path/to/k6-script.js`

**See also**:
- [How to do a browser recording]({{ site.baseurl }}{% link _v4/how-to-tutorials/how-to-do-browser-recording.md %})
- [How to convert HAR files to k6 tests]({{ site.baseurl }}{% link _v4/how-to-tutorials/how-to-convert-har-to-k6-test.md %})