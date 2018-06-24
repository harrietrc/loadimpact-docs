---
layout: classic-docs
title: Test setup/teardown
description: Test setup/teardown life-cycle hooks
categories: [test-scripting]
order: 5
---

Being able to execute code pre and post test is common place when running tests. It can be used to prepare the system under test with data, or maybe to trigger the provisioning of an ephemeral environment of the system under test itself, and at the end to reset or take down that what was set up before the test.

In k6 tests there are two life cycle hooks for running code pre and post test, `setup()` and `teardown()`.

<div class="callout callout-warning" role="alert">
    <code>setup()</code> and <code>teardown()</code> will only be called once each per test, they're test-wide life cycle hooks, not per-VU or per-loadzone/server (in the <a href="CLOUD_EXEC_DOCS_LINK" class="alert-link">Cloud Execution</a> case).
</div>

## Setup hook
To run code before the test starts, you implement the `setup()` function:

{% highlight js lineno %}
export function setup() {
    // setup code
}
{% endhighlight %}

## Teardown hook
To run code after the test has finished, you implement the `teardown()` function:

{% highlight js lineno %}
export function teardown() {
    // teardown code
}
{% endhighlight %}

## Passing data from setup() to main and teardown() functions

A convenient thing with how the `setup()`/`teardown()` functionality is implemented is that anything returned from the `setup()` function will be passed as the first argument to both the [main function]({{ site.baseurl }}{% link _nextgen/test-scripting/main-function.md %}) and the `teardown()` function:

{% highlight js lineno %}
export function setup() {
    let data = { message: "Hello world!" };
    return data;
}

export function teardown(setupData) {
    // this will print "Hello world!" to the terminal
    console.log(setupData.message);
}

export default function(setupData) {
    // this will print "Hello world!" to the terminal
    console.log(setupData.message);
}
{% endhighlight %}

<div class="callout callout-warning" role="alert">
    You can only return JSON compatible data types from the <code>setup()</code> function, as the returned data is serialized to JSON before being passed to the main and <code>teardown()</code> functions. In the <a href="CLOUD_EXEC_DOCS_LINK" class="alert-link">Cloud Execution</a> case the data will be extracted from the cloud server that runs the <code>setup()</code> function and distributed to all other cloud servers and passed to the main and <code>teardown()</code> functions.
</div>

See the k6 docs on the [test life cycle](https://docs.k6.io/docs/test-life-cycle) for more information.

**Next**: [Tags]({{ site.baseurl }}{% link _nextgen/test-scripting/tags.md %})