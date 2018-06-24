---
layout: classic-docs
title: Quick start guide - "Hello world"
description: "Getting started - Quick start guide - Hello World"
categories: [getting-started]
order: 1
---

To get started with Load Impact Next-gen you'll need to complete a few steps:

1. Download and install k6 for your platform of choice: Linux, Mac or Windows
2. Run your first k6 test
3. Login to your Load Impact account and stream your results to Load Impact Insights

## Download and install k6

Follow these instructions for your platform of choice to download and install k6:

<div class="row platform-tabs">
    <div class="col-12">
        <ul class="nav nav-pills mb-3" role="tablist">
            <li class="nav-item">
                <a class="nav-link active" id="platform-tabs-link-linux" data-toggle="pill" href="#platform-tabs-content-linux" role="tab">Linux</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" id="platform-tabs-link-macos" data-toggle="pill" href="#platform-tabs-content-macos" role="tab">Mac</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" id="platform-tabs-link-windows" data-toggle="pill" href="#platform-tabs-content-windows" role="tab">Windows</a>
            </li>
        </ul>
        <div class="tab-content">
            <div class="tab-pane fade show active" id="platform-tabs-content-linux" role="tabpanel" aria-labelledby="platform-tabs-link-linux">
                <ol>
                    <li>Download the latest k6 binary:<br>
                        <code>curl -OL https://github.com/loadimpact/k6/releases/download/v0.21.1/k6-v0.21.1-linux64.tar.gz</code>
                    </li>
                </ol>
                <ol start="2">
                    <li>Unzip and put binary somewhere in your <code>$PATH</code>:<br>
                        <pre><code>$ tar -xzf k6-v0.21.1-linux64.tar.gz
$ cp k6-v0.21.1-linux64/k6 /usr/local/bin</code></pre>
                    </li>
                </ol>
            </div>
            <div class="tab-pane fade" id="platform-tabs-content-macos" role="tabpanel" aria-labelledby="platform-tabs-link-macos">
                <pre><code>brew tap loadimpact/k6
brew install k6</code></pre>
            </div>
            <div class="tab-pane fade" id="platform-tabs-content-windows" role="tabpanel" aria-labelledby="platform-tabs-link-windows">
                <ol>
                    <li><a href="https://github.com/loadimpact/k6/releases">Download the latest k6 binary</a> from Github.</li>
                </ol>
                <ol start="2">
                    <li>Unzip and put binary somewhere in your PATH</li>
                </ol>
            </div>
        </div>
    </div>
</div>

Read more about [installation options](https://docs.k6.io/docs/installation) in the k6 docs.

## Run your first k6 test

Let's have a look at a simple k6 test script that you can use to run your first k6 test:

{% highlight js lineno %}
import { sleep } from "k6";
import http from "k6/http";

export default function() {
  http.get("https://test.loadimpact.com/");
  sleep(3);
}
{% endhighlight %}

Not too fancy, we import some functionality we need, make a single request to `https://test.loadimpact.com/` and then have our Virtual User sleep/think for 3s (before starting over at the top of the [main function]({{ site.baseurl}}{% link _nextgen/test-scripting/main-function.md %}).

Let's run this test script with k6. Save it in a file on your computer (we'll assume it's saved to a file called `script.js` below). In a terminal, where the current working directory is where you saved the file, execute the following command:

`k6 run script.js`

You should see something like this in the terminal:

![First k6 execution]({{ site.baseurl }}/assets/img/nextgen/getting-started/hello-world-first-k6-exec.png)

This executed the test with k6's default settings in terms of number of concurrent Virtual Users (VU) and test duration. The default is 1 VU doing one iteration through the test script.

Well done!

### Ramping VUs

To run an actual load test we need more than 1 VU :)

We can specify the VU ramping that we want by extending out test script with some [test configuration options]({{ site.baseurl}}{% link _nextgen/test-scripting/test-configuration-options.md %}):

{% highlight js lineno %}
import { sleep } from "k6";
import http from "k6/http";

export let options = {
    // Add VU ramping option, total test length is 3m
    stages: [
        // Ramp up from 1 VU to 25 VUs for 1m
        { target: 25, duration: "60s" },

        // Stay constant at 25 VUs for 1m
        { target: 25, duration: "60s" },

        // Ramp down from 25 VUs to 0 VUs for 1m
        { target: 0, duration: "60s" }
    ]
};

export default function() {
  http.get("https://test.loadimpact.com/");
  sleep(3);
}
{% endhighlight %}

Let's run the test again:

`k6 run script.js`

Now you should see something like this in the terminal:

![k6 execution with VU ramping]({{ site.baseurl }}/assets/img/nextgen/getting-started/hello-world-ramping-k6-exec.png)

We were presented with a progress bar for the 3m duration of the test before being presented with the results.

Read more about [VU ramping configurations]({{ site.baseurl}}{% link _nextgen/test-scripting/load-test-ramping-configurations.md %}) in the test scripting section.

## Stream results to Load Impact Insights

So far we've only used one component (k6) of Load Impact Next-gen. Let's have a look at the centerpiece of the cloud offering, Load Impact Insights. Insights is used for storing, analyzing and trending k6 test results. It's easy to use, you just login to your Load Impact account and add `-o cloud`:

**Login to your Load Impact account**:

`k6 login cloud`

**Run test and stream results to Insights**:

`k6 run -o cloud script.js`

![Streaming to Insights]({{ site.baseurl }}/assets/img/nextgen/getting-started/hello-world-streaming-k6-exec.png)

The interesting in the terminal this time around is the `output: cloud (https://app.loadimpact.com/k6/runs/12696)` line which tells us that we can go look at the test results in Load Impact Insights by opening the provided URL. Let's do that:

![Test results in Insights]({{ site.baseurl }}/assets/img/nextgen/getting-started/hello-world-streaming-exec-insights.png)

Learn more about Insights in the [result analysis]({{ site.baseurl}}{% link _nextgen/result-analysis/insights-overview.md %}) section.

## Running a test with Load Impact Cloud Execution

The last step of this intro guide is to try the last component of Load Impact Next-gen, Load Impact Cloud Execution.

The only change we need to make is that we'll need to change the k6 command used from `run` to `cloud`:

`k6 cloud script.js`

Same as when we streamed our results to Insights, we'll now get a link to Insights to view the test results of this Load Impact Cloud Executed test.

Learn more about Cloud Execution in the [test running]({{ site.baseurl}}{% link _nextgen/test-running/cloud-execution.md %}) section.

You made it to the end, congrats!

Now that you've successfully run your first k6 test, consider the following [load test preparations]({{ site.baseurl}}{% link _nextgen/getting-started/load-test-preparations.md %})
