---
layout: classic-docs
title: Creating a k6 test script
description: Guide to create a test script for k6
categories: [getting-started]
order: 4
---

***

## Purpose

Explanation of the different ways to create your test scripts within the Load Impact web interface.  Advanced users may want to use the web interface to build a proof of
concept before opting to start using k6 locally to script and trigger their tests.

## Things to consider

As mentioned in [load test preparations]({{ site.baseurl }}/4.0/getting-started/load-test-preparations/), a key to good testing is understanding what your users are doing, what services are most critical to your service, and what things are most critical to your organization. Knowledge of these things will guide you to create tests that are realistic and meaningful. If you are new to testing, you may want to read our [Testing Methodologies]({{ site.baseurl}}/4.0/testing-methodologies/)

## Creating your test scripts

From within the Load Impact web interface, there are a few different ways to create your test scripts. The test script itself is where your entire test is defined. Every
test in Load Impact is driven from a JavaScript file.  Since test scripts are expressed as code, this gives you flexiblity and fine tune control over how they execute.
You can start creating your tests in app, [here](https://app.loadimpact.com/k6/tests/new).

### Entering Website URLs (URL Generator)

This method of test script creation is the simpliest. It allows you to enter multiple URLs, select a number of Virtual Users, test duration, set a ramping profile, and
load zones where the test will execute from. You are also able to whitelist so you are only testing certain domains.

**Important**:  This test will only make GET requests and is not intended to test APIs. If you are testing APIs, please select [API test scripting option](https://app.loadimpact.com/k6/tests/custom/editor?type=api). Scripting allows you to define payloads, make different HTTP requests, alter headers, etc.

### Recording a browser session - Chrome extension

The Load Impact Chrome Extension is an easy way to create a test script, simply by browsing like a user would. To use the chrome exstenion you would:

1. Start recording
2. Browse across multiple pages/actions, like a user would
3. Stop recording
4. Edit your script, if necessary

To start using the chrome extension, you can start in app [here](https://app.loadimpact.com/k6/tests/recording-instructions)

### Recording a browser session - HAR file

The HAR file converter allows you to convert a HAR file into a test script.  This enables you to create a HAR file from any method you would like. The Load Impact web interface allows you to upload a HAR file for us to convert. For more information on create HAR files please refer to [this article]({{ site.baseurl }}/4.0/how-to-tutorials/how-to-do-browser-recording/)

### Scripting

The final way to create your test would be to write it by hand.  When choosing one of the in app options, we will provide a sample script for you to follow.  Test scripts
are written as JavaScript code, so feel free to do programmatic things as you build your proof of concept. Some of the most common scripting tasks are covered in our
[Scripting Examples]({{ site.baseurl }}/4.0/test-scripting/examples/)
