---
layout: classic-docs
title: Custom metrics
description: An overview of using custom metrics
categories: [test-scripting]
order: 10
---

***

<h1>Purpose</h1>
For situations where you want to track something that is not part of the standard metrics, you can utilize custom metrics functionality in k6.

The are four metric types in k6; `Counter`, `Gauge`, `Rate` and `Trend`. All four can be used when creating custom metrics. Below we provide examples of each and how they could be utilized within a test.

**Note:** In order to utilize custom metrics, you MUST `import { Counter, Gauge, Rate, Trend } from "k6/metrics";` within the init context of your script.  You may remove any types you are not using in the specific test.

- TOC
{:toc}

## Counter metrics

A metric that cumulatively sums added values.

{% highlight js linenos %}
import http from "k6/http";
import { Counter } from "k6/metrics";

let CounterErrors = new Counter("Errors");

export default function() {
    let res = http.get("https://loadimpact.com");
    let contentOK = res.html("h1").text().includes("Load Impact");
    CounterErrors.add(!contentOK);
};
{% endhighlight %}

## Gauge metrics

A metric that stores the last value added to it.

{% highlight js linenos %}
import http from "k6/http";
import { Gauge } from "k6/metrics";

let GaugeContentSize = new Gauge("ContentSize");

export default function() {
    let res = http.get("https://loadimpact.com");
    GaugeContentSize.add(res.body.length);
};
{% endhighlight %}

## Rate metrics

A metric that tracks the percentage of added values that are non-zero.

{% highlight js linenos %}
import http from "k6/http";
import { Rate } from "k6/metrics";

let RateContentOK = new Rate("Content OK");

export default function() {
    let res = http.get("https://loadimpact.com");
    let contentOK = res.html("h1").text().includes("Load Impact");
    RateContentOK.add(contentOK);
};
{% endhighlight %}

## Trend metrics

A metric that allows for calculating statistics on the added values (min, max, average and percentiles).

{% highlight js linenos %}
import http from "k6/http";
import { Trend } from "k6/metrics";

let TrendRTT = new Trend("RTT");

export default function() {
    let res = http.get("https://loadimpact.com");
    TrendRTT.add(res.timings.duration);
};
{% endhighlight %}

Refer to k6 docs on [custom metrics](https://docs.k6.io/docs/result-metrics#section-custom-metrics) for additional information.

**Next**: [Ramping configurations]({{ site.baseurl }}{% link _v4/test-scripting/load-test-ramping-configurations.md %})
