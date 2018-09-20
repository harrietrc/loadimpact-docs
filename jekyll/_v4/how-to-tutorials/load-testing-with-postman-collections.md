---
layout: classic-docs
title: Load testing with Postman collections
description: A tutorial on how to convert Postman collections to k6 test scripts
categories: [how-to-tutorials]
order: 4
---

***

## Background

<p style="text-align: center;"><img src="{{ site.baseurl }}/assets/img/v4/how-to-tutorials/postman-logo.png" alt="Postman" width="300"/></p>

[Postman](https://getpostman.com/) is one of the best-in-market tools for functional testing of APIs. As a Postman user, you organize your API tests into collections of requests. While this is great for functional testing, it's also important to understand how API endpoints perform under load.

The presented information covers how to use the Portman to Load Impact converter with version 4.0 of Load Impact. Version 4.0 is based on the open source load generator, k6.

## How to use the Postman to Load Impact converter

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

    `k6-script.js` will be the outputted script name in the specified path of your output.
4. Make any edits to your script necessary

    You may wish to change [configuration options]({{ site.baseurl }}/4.0/test-scripting/test-configuration-options/)
    Create [custom metrics]({{ site.baseurl }}/4.0/test-scripting/custom-metrics/)
    Define [thresholds]({{ site.baseurl }}/4.0/test-scripting/thresholds/)

5. Utilize your script with your Load Impact account
    `k6 run k6-script.js` will execute your script locally with local output
    `k6 run k6-script.js -o cloud` will execute locally with cloud output to the Load Impact platform
    `k6 cloud k6-script.js` will package up the script and any depedencies for execution on Load Impact's infrastructure

**See also**:
- [How to do a browser recording]({{ site.baseurl }}{% link _v4/how-to-tutorials/how-to-do-browser-recording.md %})
- [How to convert HAR files to k6 tests]({{ site.baseurl }}{% link _v4/how-to-tutorials/how-to-convert-har-to-k6-test.md %})
