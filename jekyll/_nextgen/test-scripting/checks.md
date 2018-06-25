---
layout: classic-docs
title: Checks
description: An overview of using checks
categories: [test-scripting]
order: 6
---

Checks are like asserts but differ in that they don't halt the execution of the test if a `false` result is encountered, instead the pass/fail result of the check is stored and the test continues executing.

Use checks to make sure functional pass/fail conditions are met during test execution.

{% highlight js linenos %}
import { check } from "k6";
import http from "k6/http";

export default function() {
  let res = http.get("http://test.loadimpact.com/");
  check(res, {
    "is status 200": (r) => r.status === 200
  });
}
{% endhighlight %}

## Failing a test in CI using thresholds
Checks on their own can' t fail a test, you need to combine them with [thresholds]() to specify failure criteria.

<div class="callout callout-warning" role="alert">
    A failed test for Locally Executed tests means the exit code of the k6 process will be non-zero, and in the case of a <a href="CLOUD_EXEC_DOCS_LINK" class="alert-link">Cloud Executed</a> test it means that the test will get a `Failed by thresholds` status.
</div>

In the below example we set a threshold that specifies we accept a 10% check failure rate before considering the test a failure:

{% highlight js linenos %}
import http from "k6/http";
import { check } from "k6";
import { Rate } from "k6/metrics";

export let errorRate = new Rate("errors");

export let options = {
    thresholds: {
        "errors": ["rate<0.1"], // <10% errors
   }
};

export default function() {
    let success = check(http.get("http://httpbin.org"), {
        "status is 200": (r) => r.status == 200
    });
    if (!success) {
        errorRate.add(1);
    }
};
{% endhighlight %}

See the k6 docs on [checks](https://docs.k6.io/docs/checks) for more information.

**Next**: [Thresholds]({{ site.baseurl }}{% link _nextgen/test-scripting/thresholds.md %})
