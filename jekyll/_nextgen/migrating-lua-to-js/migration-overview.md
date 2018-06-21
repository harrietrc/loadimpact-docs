---
layout: classic-docs
title: Migration overview
description: Overview of differences between Load Impact Legacy (Lua) and Load Impact Next Gen (JS/k6) products
categories: [migrating-lua-to-js]
order: 0
---

From a general performance testing perspective the Legacy and Next-gen products are more or less the same:

1. You create one or more user scenarios that step through a particular process of your target system that you want to test.
2. You then combine your user scenario(s) with a traffic simulation profile that specifies how many Virtual Users (VUs) should be concurrently executing the user scenario(s) at different points in time of the test.
3. You execute your test, metrics data is collected and you are presented with results.

## Differences between Legacy and Next-gen products
When looking more closely though there are some differences in how you accomplish step 1, 2 and 3 above.

A big difference is in the workflow that you can accomplish with each respective product.

The Legacy product is completely cloud based, user scenarios and test configuration are created/edited and stored in the Load Impact cloud service, and running tests is also done exclusively from the cloud. This also means the target system that is being tested needs to be accessible from the public Internet.

With the Next-gen product we've opened up the platform in two important ways. First, the core load testing software, [k6](https://github.com/loadimpact/k6), is now an open source tool, and secondly it can be used both [on-premise](LINK_TO_ON_PREMISE_DOCS) as well as from the Load Impact service via our [cloud execution](LINK_TO_CLOUD_EXEC_DOCS) functionality. The user scenarios and test configuration has been merged into one, it's now all just JavaScript code, so very version control friendly.

This brings us to an important difference, in the Next-gen product you're responsible for storing and version controlling your tests (the JavaScript combining user scenario and test configuration), and the Load Impact cloud service can provide you with result storage, visualization and trending, as well as geographically distributed cloud execution of tests.

### User scenario
In the Legacy product user scenarios described using Lua code. You can end up with the Lua code in various ways, by using one of the recorder options, the Postman converter or hand coding it, but at the end of the day the output of all these various ways is a piece of Lua code.

In the Next-gen product user scenarios are described using JavaScript, the ES6 version of JS to be precise. This means it's not only a more familiar language to most developers/testers but it also introduces a nice addition compared to the Legacy product: support for modules, allowing code to be modularized and reused across tests and teams.

See the [Lua to JS migration guide]({{ site.baseurl }}{% link _nextgen/migrating-lua-to-js/lua-to-js.md %}) for more information on how to migrate your Lua user scenarios to JS.

### Test configuration
In the Legacy product you compose one or more user scenarios into a separate entity known as a "Test" (aka "Test configuration"), and then add additional configuration like traffic simulation profile and thresholds. This is done through the Load Impact WebApp UI.

In the Next-gen product the equivalent configuration options are specified in the script itself:

{% highlight js linenos %}
export let options = {
    // Stages represents the traffic ramping profile that will be used in the test,
    // controlling the VU concurrency throughout the duration of the test
    'stages': [
        // Linear ramp-up from 0 to 50 VUs for 60s
        { 'target': 50, 'duration': '60s' },

        // Stay constant at 50 VUs for 60s
        { 'target': 50, 'duration': '60s' },

        // Linear ramp-down from 50 to 0 VUs for 60s
        { 'target': 0, 'duration': '60s' }
    ],

    // Use thresholds to set your metric targets, thresholds are used to pass/fail tests
    // and for controlling automatic test termination
    thresholds: {
        // Add a threshold mark test as failed is 95th percentile of overall response time goes above 500ms
        'http_req_duration': 'p(95)<500',

        // Add another threshold to fail and abort the test if the threshold hits 1s
        'http_req_duration': {'trigger': 'p(95)<1000', 'abortOnFail': true}
    }
};
{% endhighlight %}

For more information, see the [available options](https://docs.k6.io/docs/options) in the k6 documentation.
g
Next: [Lua to JS migration guide]({{ site.baseurl }}{% link _nextgen/migrating-lua-to-js/lua-to-js.md %})