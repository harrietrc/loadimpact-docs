---
layout: classic-docs
title: Product overview
description: A brief overview of the Load Impact Next-gen product offering
categories: [getting-started]
order: 0
---

As illustrated below Load Impact Next-gen is composed of 3 major components:

- **k6** - the [open source load testing tool](https://github.com/loadimpact/k6) created and maintained by us at Load Impact

- **Load Impact Insights** - part of the Load Impact cloud service offering for storing, analyzing and trending k6 test results with your team

- **Load Impact Cloud Execution** - part of the Load Impact cloud service offering for running tests on global cloud infrastructure managed by us at Load Impact, with support for larger tests and geographic distribution

![Load Impact Next-gen product overview]({{ site.baseurl }}/assets/img/nextgen/getting-started/v4-product-overview.svg)

## k6

An open source load testing tool where you script your tests in ES6 JavaScript. To learn more about k6 head over to the [k6 repo on Github](https://github.com/loadimpact/k6). To learn more about k6 test scripting head on over to the [test scripting]({{ site.baseurl}}{% link _nextgen/test-scripting/intro.md %}) section.

## Load Impact Insights

As k6 tests can run from anywhere, local/on-premise or in the cloud (on your own infrastructure or ours), having a central place where results can be sent and stored, analyzed and trended is very convenient. That's what Insights was built for. Learn more about Insights in the [result analysis]({{ site.baseurl}}{% link _nextgen/result-analysis/insights-overview.md %}) section.

## Load Impact Cloud Execution

There are many different use cases for running load tests. In some, running tests locally (on-premise/behind the firewall) is the only solution. In others, you want the convenience of a cloud service or need the geographic distribution and scale that it offers. That's when Cloud Execution is a good fit. Learn more about Cloud Execution in the [test running]({{ site.baseurl}}{% link _nextgen/test-running/cloud-execution.md %}) section.

Now, let's get you set up so you can [run your very first test]({{ site.baseurl}}{% link _nextgen/getting-started/hello-world.md %})
