---
layout: classic-docs
title: Custom metrics
description: An overview of using custom metrics
categories: [test-scripting]
order: 10
---

For situations where you want to track something not part of the standard metrics, you can reach for the custom metrics functionality in k6.

The are four metric types in k6; `Counter`, `Gauge`, `Rate` and `Trend`. All four can be used when creating custom metrics.

## Counter metrics

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

{% highlight js linenos %}
import http from "k6/http";
import { Trend } from "k6/metrics";

let TrendRTT = new Trend("RTT");

export default function() {
    let res = http.get("https://loadimpact.com");
    TrendRTT.add(res.timings.duration);
};
{% endhighlight %}

See the k6 docs on [custom metrics](https://docs.k6.io/docs/result-metrics#section-custom-metrics) for more information.

**Next**: [Ramping configurations]({{ site.baseurl }}{% link _nextgen/test-scripting/load-test-ramping-configurations.md %})
