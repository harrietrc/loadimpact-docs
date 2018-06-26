---
layout: classic-docs
title: Local and On-premise execution
description: An overview running k6 tests locally and on-premise
categories: [test-running]
order: 0
---

Running load tests from your laptop or an on-premise machine is one of the ways you can use k6.

## Executing a local test

To execute a test where the traffic is generated from the local machine you execute the `run` k6 command. So say you have a test in a file called `script.js`, you'd then trigger a local test by executing the following in your terminal:

`k6 run script.js`

## Streaming results to Insights

By default when running a local test, k6 will output a summary of the results to the terminal. The results are not persisted by default. If you want to store the results, graphically analyze them, share them with your team mates and trend the performance of your system over time, you can opt to send your test results to Load Impact Insights.

You do this by first making sure you're logged in to your Load Impact account:

`k6 login cloud`

and then adding the `-o cloud` CLI flag:

`k6 run -o cloud script.js`

You should now see something like this in your terminal:
![Local execution with Insights streaming]({{ site.baseurl }}/assets/img/v4/test-running/k6-local-exec-streaming-to-insights.png)
Note the URL in the `output: cloud (https://app.loadimpact.com/k6/runs/12696)`. That URLs is where you go to see the test results as the come streaming in from the test execution.

<div class="callout callout-warning" role="alert">
    Note that you can change under which project your tests and results are stored by adding a project ID to your <a href="{{ site.baseurl }}{% link _v4/test-scripting/test-configuration-options.md %}#sending-results to-a-specific-project" class="alert-link">test configuration options</a>.
</div>

**See also**: [Cloud execution]({{ site.baseurl }}{% link _v4/test-running/cloud-execution.md %})