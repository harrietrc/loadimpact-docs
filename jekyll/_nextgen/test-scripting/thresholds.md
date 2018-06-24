---
layout: classic-docs
title: Thresholds
description: An overview of using thresholds
categories: [test-scripting]
order: 7
---

Thresholds are used to specify test pass/fail criteria. Thresholds can be set on all metrics including custom ones and you can limit the data point of a metric that are being included in the evaluation by scoping the threshold with tags.

## Threshold expressions

TODO

## Standard metrics

{% highlight js lineno %}
import http from "k6/http";
import { Rate } from "k6/metrics";

var myFailRate = new Rate("failed requests");

export let options = {
    thresholds: {
        "failed requests": ["rate<0.1"],
    }
};

export default function() {
    let res = http.get("https://loadimpact.com");
    myFailRate.add(res.status != 200);
};
{% endhighlight %}

## Custom metrics

Thresholds can also be set on [custom metrics]({{ site.baseurl }}{% link _nextgen/test-scripting/custom-metrics.md %}). The variable referred to in the threshold expression varies between the different custom metrics as you'll see below.

### Counter metric

To set a threshold on a `Counter` metric you:

1. Create the custom metric and give it a name
2. Specify the threshold condition for the `Counter` metric by referring to the `count` variable
3. Add data points to the custom metric using the `add()` method

{% highlight js lineno %}
import http from "k6/http";
import { Counter } from "k6/metrics";

let CounterErrors = new Counter("Errors");

export let options = {
    thresholds: {
        "Errors": ["count<100"]
    }
};

export default function() {
    let res = http.get("https://loadimpact.com");
    let contentOK = res.html("h1").text().includes("Load Impact");
    CounterErrors.add(!contentOK);
};
{% endhighlight %}

### Gauge metric

TODO

### Rate metric

TODO

### Trend metric

TODO

## Aborting a test using thresholds

By default thresholds don't abort a test before the total duration or iterations have completed. But you can choose to abort the test, if a threshold is hit in the middle of the test:

{% highlight js lineno %}
export let options = {
    thresholds: {
        metric_name: [ { threshold: string, abortOnFail: boolean, delayAbortEval: string }, ... ],
    }
};
{% endhighlight %}

See the k6 docs on [thresholds](https://docs.k6.io/docs/thresholds) for more information.

**Next**: [Tags]({{ site.baseurl }}{% link _nextgen/test-scripting/tags.md %})
