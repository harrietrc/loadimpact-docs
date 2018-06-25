---
layout: classic-docs
title: Cloud execution
description: An overview running k6 tests with Load Impact Cloud Execution
categories: [test-running]
order: 1
---

Cloud execution is a convenient extension to the [local/on-premise execution]({{ site.baseurl }}{% link _v4/test-running/local-on-premise-execution.md %}) capability of k6. Great when you need to run larger tests or distribute traffic generation across several geographic locations (aka "load zones").

## Test configuration options

When running a cloud execution test you can configure from which load zones the traffic should be generated. You specify the load zones as part of the `ext.loadimpact.distribution` option:

{% highlight js linenos %}
export let options = {
    ext: {
        loadimpact: {
            name: "My k6 test",
            distribution: {
                scenarioLabel1: { loadZone: "amazon:us:ashburn", percent: 50 },
                scenarioLabel2: { loadZone: "amazon:ie:dublin", percent: 50 }
            }
        }
    }
};
{% endhighlight %}

Each entry, or scenario, in the `distribution` object specifies an arbitrary label as the key and an object with keys `loadZone` and `percent` as the value. The label ("scenarioLabel1" and "scenarioLabel2" above) will be injected as [environment variables]({{ site.baseurl }}{% link _v4/test-scripting/environment-variables.md %}) (`__ENV["scenarioLabel1"]` and `__ENV["scenarioLabel2"]`) into the k6 processes running in the corresponding load zone.

The `percent` is a specifies how VUs should be distributed across the different scenarios, and the `loadZone` the origin of the traffic for the scenario.

### Load zones

Valid values for `loadZone` are:

<table class="table table-striped">
  <thead>
    <tr>
      <th scope="col">Location</th>
      <th scope="col">Value</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Ashburn, Virginia, US (Default)</td>
      <td><code>amazon:us:ashburn</code></td>
    </tr>
    <tr>
      <td>Columbus, Ohio, US</td>
      <td><code>amazon:us:columbus</code></td>
    </tr>
    <tr>
      <td>Dublin, Ireland</td>
      <td><code>amazon:ie:dublin</code></td>
    </tr>
    <tr>
      <td>Frankfurt, Germany</td>
      <td><code>amazon:de:frankfurt</code></td>
    </tr>
    <tr>
      <td>London, UK</td>
      <td><code>amazon:gb:london</code></td>
    </tr>
    <tr>
      <td>Montreal, Canada</td>
      <td><code>amazon:ca:montreal</code></td>
    </tr>
    <tr>
      <td>Mumbai, India</td>
      <td><code>amazon:in:mumbai</code></td>
    </tr>
    <tr>
      <td>Palo Alto, California, US</td>
      <td><code>amazon:us:palo alto</code></td>
    </tr>
    <tr>
      <td>Portland, Oregon, US</td>
      <td><code>amazon:us:portland</code></td>
    </tr>
    <tr>
      <td>Seoul, South Korea</td>
      <td><code>amazon:kr:seoul</code></td>
    </tr>
    <tr>
      <td>Singapore</td>
      <td><code>amazon:sg:singapore</code></td>
    </tr>
    <tr>
      <td>Sydney, Australia</td>
      <td><code>amazon:au:sydney</code></td>
    </tr>
    <tr>
      <td>Tokyo, Japan</td>
      <td><code>amazon:jp:tokyo</code></td>
    </tr>
  </tbody>
</table>

## Tags

When running a k6 test in the cloud two [tags]({{ site.baseurl }}{% link _v4/test-scripting/tags.md %}) are added to all metrics:

<table class="table table-striped">
  <thead>
    <tr>
      <th scope="col">Tag name</th>
      <th scope="col">Type</th>
      <th scope="col">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>load_zone</code></td>
      <td>string</td>
      <td>The load zone from where the the metric was collected. Values will be of the form: <code>amazon:us :ashburn</code> (see list above).</td>
    </tr>
    <tr>
      <td><code>instance_id</code></td>
      <td>int</td>
      <td>A unique number representing the ID of a load generator server taking part in the test.</td>
    </tr>
  </tbody>
</table>

![Insights tags]({{ site.baseurl }}/assets/img/v4/test-running/cloud-execution-tags.png)

## Using environment variables

To use environment variables when running a cloud executed test you use one or more `-e KEY=VALUE` (or `--env KEY=VALUE`) CLI flags.

<div class="callout callout-warning" role="alert">
    <b>Use the CLI flags to set environment variables</b><br>
    With cloud execution you must use the CLI flags (<code>-e/--env</code>) to set <a href="{{ site.baseurl }}{% link _v4/test-scripting/environment-variables.md %}" class="alert-link">environment variables</a>. Environment variables set in the local terminal before executing k6 won't be forwarded to the Load Impact cloud service, and thus won't be available to your script when executing in the cloud.
</div>


## Multi scenario load tests

As described above the distribution of traffic across load zones is specifed by first assigning an arbitrary label to each entry. This label can be viewed upon as a "scenario label", and you can use it, together with [modules]({{ site.baseurl }}{% link _v4/test-scripting/modules-imports.md %}) to setup a test with several different scenarios:

{% highlight js linenos %}
import { frontpageScenario } from "./scenarios/frontpage.js"
import { searchScenario } from "./scenarios/search.js"
import { shoppingScenario } from "./scenarios/shop.js"

export let options = {
    ext: {
        loadimpact: {
            name: "My shop test",
            distribution: {
                frontpageScenarioLabel: { loadZone: "amazon:us:ashburn", percent: 50 },
                searchScenarioLabel: { loadZone: "amazon:ie:dublin", percent: 25 },
                shoppingScenarioLabel: { loadZone: "amazon:ie:dublin", percent: 25 }
            }
        }
    }
};

export default function() {
    if (__ENV["frontpageScenarioLabel"]) {
        frontpageScenario();
    } else if (__ENV["searchScenarioLabel"]) {
        searchScenario();
    } else if (__ENV["shoppingScenarioLabel"]) {
        shoppingScenario();
    }
}
{% endhighlight %}

Where scenario modules (frontpage.js, search.js and shop.js) would look something like this:

{% highlight js linenos %}
import { group, sleep } from "k6";
import http from "k6/http";

export function frontpageScenario() {
    group("Front page", function() {
        http.get("https://example.com/");
        sleep(10);
    });
}
{% endhighlight %}

**See also**: [Local and On-premise execution]({{ site.baseurl }}{% link _v4/test-running/local-on-premise-execution.md %})