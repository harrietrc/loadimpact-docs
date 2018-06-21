---
layout: classic-docs
title: Migrating from Lua to JS (k6)
description: Migration from Load Impact Legacy (Lua) to Load Impact Next Gen (JS/k6)
categories: [migrating-lua-to-js]
order: 1
---

Lua and JS share most of the fundamental logical constructs and control flow mechanisms that are commonly found in general purpose programming languages. Same goes for the load testing oriented APIs that we've added in each respective product. This section will look at how to convert Lua APIs into the JS equivalent.

## High-level differences

On highest level there are some differences to be aware of before we continue on into more details.

### Loading of builtin modules and APIs

#### Lua
In Lua all the available functionality is loaded by default, APIs can be called right away without explicit loading/importing:

{% highlight lua linenos %}
http.get("https://test.loadimpact.com/")
client.sleep(3)
{% endhighlight %}

#### JS
In JS you need to explicitly import the builtin modules and APIs that you want to use:

{% highlight js linenos %}
import {sleep} from "k6";
import http from "k6/http";

export default function() {
  http.get("https://test.loadimpact.com/");
  sleep(3);
}
{% endhighlight %}

### Scope of VU code

#### Lua
VUs execute the script from top to bottom over and over:

{% highlight lua linenos %}
// The VU code is the same as global scope, and gets run over and over by a VU
{% endhighlight %}

#### JS
VUs execute the global scope (aka "init code") once to initialize, and then executes the "main function" (`export default function`) over and over:

{% highlight js linenos %}
// Imports and other global scope code

export default function() {
  // The VU code, that gets run over and over by a VU
}
{% endhighlight %}

## Converting Lua APIs to JS APIs

### Client sleep/think time
To have a VU sleep or think for a specific amount of time (in the example below for 3 seconds), pausing the VU execution, you would write Lua code like this:

{% highlight lua linenos %}
client.sleep(3.0)
{% endhighlight %}

the equivalent in JS would be:

{% highlight js linenos %}
import {sleep} from "k6";

export default function() {
  sleep(3);
}
{% endhighlight %}

### Making requests
To make HTTP requests there are a number of different Lua APIs available. In the end they're all wrappers around the `http.request_batch()` API. Here are the common ways to make requests in Lua code:

{% highlight lua linenos %}
-- Send a single GET request
http.get("https://httpbin.org/")

-- Send a single POST request
http.post("https://httpbin.org", "key=val&key2=val")

-- Send several requests in parallel
http.request_batch({
  { "GET", "https://httpbin.org/" },
  { "POST", "https://httpbin.org/", "key=val&key2=val" }
})
{% endhighlight %}

the equivalent in JS would be:

{% highlight js linenos %}
import http from "k6/http";

export default function() {
  // Send a single GET request
  http.get("https://httpbin.org/");

  // Send a single POST request
  http.post("https://httpbin.org", "key=val&key2=val");

  // Send several requests in parallel
  http.batch([
    "https://httpbin.org/",
    { method: "POST", url: "https://httpbin.org/", body: "key=val&key2=val" }
  ]);
}
{% endhighlight %}

See the [HTTP API](https://docs.k6.io/docs/k6http) docs for k6 for more information and examples.

### Group requests and logic into transactions/pages
In the Legacy product there's a concept of pages. Lua code in between calls to `http.page_start()` and `http.page_end()` will be be measured to provide a page load times in the results:

{% highlight lua linenos %}
http.page_start("My page")
http.get("https://httpbin.org/")
http.request_batch({
  { "GET", "https://httpbin.org/" },
  { "GET", "https://httpbin.org/get" },
})
http.page_end("My page")
{% endhighlight %}

the equivalent in JS would be to use [`Groups`](https://docs.k6.io/docs/tags-and-groups#section-groups):

{% highlight js linenos %}
import http from "k6/http";

export default function() {
  group("My page", function() {
    http.get("https://httpbin.org/");
    http.batch([
      "https://httpbin.org/",
      "https://httpbin.org/get",
    ]);
  });
}
{% endhighlight %}

### Data store
In the Legacy product there's a concept of a Datastore. A CSV file that you can upload to the service and then attach to your user scenario for accessing and using the data in your user scenario logic.

In the Next-gen product there's no specific concept of a Datastore, but in k6 you have two different ways to separate test parameterization data from script logic.

Both of the examples below can be run with:
```shell
k6 run --vus 3 --iterations 3 script.js
```

#### Use the [`open()`](https://docs.k6.io/docs/open-filepath-mode) scripting API to open a CSV/JSON/TXT file:

**users.json**:
{% highlight json linenos %}
[
  {
    "username": "user1",
    "password": "password1"
  },
  {
    "username": "user2",
    "password": "password2"
  },
  {
    "username": "user3",
    "password": "password3"
  }
]
{% endhighlight %}

**script.js**:
{% highlight js linenos %}
import { sleep } from "k6";

const users = JSON.parse(open("./users.json"));

export default function() {
  let user = users[__VU - 1];
  console.log(`${user.username}, ${user.password}`);
  sleep(3);
}
{% endhighlight %}

#### Put the data in a JS file and import it as a module:

**userData.js**:
{% highlight js linenos %}
export let users = [
  {
    "username": "user1",
    "password": "password1"
  },
  {
    "username": "user2",
    "password": "password2"
  },
  {
    "username": "user3",
    "password": "password3"
  }
];
{% endhighlight %}

**script.js**:
{% highlight js linenos %}
import { sleep } from "k6";
import { users } from "./userData.js"

export default function() {
  let user = users[__VU - 1];
  console.log(`${user.username}, ${user.password}`);
  sleep(3);
}
{% endhighlight %}

### Custom metrics
Beyond the standard metrics collected by the Legacy product you can also collect custom metrics using the `results.custom_metric()` API:

{% highlight lua linenos %}
-- Track the time-to-first-byte (TTFB)
local res = http.get("https://httpbin.org/")
result.custom_metric("time_to_first_byte", res.time_to_first_byte)
{% endhighlight %}

the equivalent in JS would be to use the [`Trend`](https://docs.k6.io/docs/result-metrics#section-trend-collect-trend-statistics-min-max-avg-percentiles-for-a-series-of-values-) custom metric:

{% highlight js linenos %}
import {group} from "k6";
import http from "k6/http";
import {Trend} from "k6/metrics";

let ttfbMetric = new Trend("time_to_first_byte");

export default function() {
  group("My page", function() {
    let res = http.get("https://httpbin.org/");
    ttfbMetric.add(res.timings.waiting);
  });
}
{% endhighlight %}

For more information, see the [custom metrics](https://docs.k6.io/docs/result-metrics#section-custom-metrics) k6 docs (there `Counter`, `Gauge` and `Rate` metric types beyond the `Trend` one used above).
