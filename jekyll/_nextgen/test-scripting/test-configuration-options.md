---
layout: classic-docs
title: Configuration options
description: The available test configuration options
categories: [test-scripting]
order: 3
---

TODO

## Naming your test
By default the name of your test will be based on the filename of the main JS file you specify when executing k6 on the command line.

```shell
k6 run -o cloud script.js
```

In the above example, the name of the test would be "script.js". To override the default and specify a name you set the Load Impact extension option `name`, like this:

{% highlight js linenos %}
export let options = {
    ext: {
        loadimpact: {
            name: "My test name"
        }
    }
};
{% endhighlight %}

## Specifying how many virtual users to run
There are two ways that you can specify how many Virtual Users (VUs) you want to run.

- Specify a constant number
- Specify an arbitrary number of ramp-up, constant and ramp-down stages

### Constant VU load
To specify a simple constant number of VUs you set the `vus` option:

{% highlight js linenos %}
export let options = {
    vus: 100,
    duration: "60s"
};
{% endhighlight %}

*Note: that you must also specify `duration` to set the test length. Each VU will run the default (aka main) function over and over (like a while-true loop) for the length of the test.*

### Dynamic VU load
To specify an arbitrary number of ramp-up, constant and ramp-down stages you set the `stages` option:

{% highlight js linenos %}
export let options = {
    stages: [
        { target: 100, duration: "60s" },
        { target: 100, duration: "60s" },
        { target: 0, duration: "60s" },
    ]
};
{% endhighlight %}

The above `stages` configuration would result in a VU load as follows:
- Start of at 0 users
- For the first 60s, VUs ramp up from 0 to 100
- For the next 60s, VUs stay constant at 100
- For the last 60s, VUs ramp down to 0

## Specifying from which load zones to generate traffic
TODO

## Sending results to a specific project
TODO

## Overriding DNS
TODO

## Setting thresholds for pass/fail results
TODO

## Turning off TLS certificate checking
TODO

## Only allow specific TLS versions
TODO

## Only allow specific TLS ciphers
TODO

See the k6 docs on [options](https://docs.k6.io/docs/options) for more information.

Next: [Test setup/teardown life-cycle hooks]({{ site.baseurl }}{% link _nextgen/test-scripting/test-setup-teardown-life-cycle.md %})