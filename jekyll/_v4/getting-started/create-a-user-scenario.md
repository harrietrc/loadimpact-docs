---
layout: classic-docs
title: Creating a k6 user scenario
description: Guide to create a user scenario for k6
categories: [getting-started]
order: 4
hide: true
---

***

TODO


## Purpose

Explanation of the different parts of a k6 user scenario(test script) various ways to create a user scenario for k6.

## Things to consider

As mentioned in [load test preparations]({{ site.baseurl }}/4.0/getting-started/load-test-preparations/), a key to good testing is understanding what your users are doing, what services are most critical to your service, and what things are most critical to your organization. Knowledge of these things will guide you to create tests that are realistic and meaningful.

## Parts of a user scenario

There are 4 parts to a user scenario. Aside from Virtual User code, all are executed once per test. These sections are:

1. Init code (required)
2. Setup code (if required)
3. Virtual User code (required)
4. Teardown code (if required)

Here is an example of those parts:

{% highlight js linenos %}
// 1. Init code - For importing functionality and defining test options
import http from "k6/http";
export let options = {

}

// 2. Setup code - Run once per test
export function setup() {

}

// 3. VU code - iterated continuously during test execution. Your requests go in here
export default function(data) {

}

// 4. Teardown code - Run once per test
export function teardown(data) {

}
{% endhighlight %}

## By hand

Unless you are running the most basic of tests. You should expect to write some JavaScript to express your user journeys as code. Even if it's just to configure options, setup/teardown, or other functionality.


## HAR file converter

## POSTMAN converter
