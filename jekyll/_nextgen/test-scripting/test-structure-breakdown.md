---
layout: classic-docs
title: Breakdown of a k6 test
description: A breakdown of the anatomy of a k6 test script
categories: [test-scripting]
order: 1
---

A k6 test script can be broken down into four distinct life-cycle stages.

This can be illustrated by looking at a skeleton of k6 test:
{% highlight js linenos %}
// 1. init code

export function setup() {
    // 2. setup code
}

export default function(data) {
    // 3. vu code
}

export function teardown(data) {
    // 4. teardown code
}
{% endhighlight %} 

It can also be visualized like this:

<p class="text-center"><img src="{{ site.baseurl }}/assets/img/nextgen/test-scripting/v4-k6-execution-breakdown.svg" alt="k6 execution breakdown" width="400"></p>

## Init code

Init code is run once per VU, when the VU is initialized. This is the only place where interacting with files is allowed, via the [`open()`](https://docs.k6.io/docs/open-filepath-mode) API.

See the k6 docs on [init code](https://docs.k6.io/docs/test-life-cycle#section-init-and-vu-stages) for more information.

### VU code

The VU code is the code that contains the actual testing logic. This code is executed from top to bottom. If you have test duration that is longer than the time it takes to run through one iteration of the VU code it will loop, and start executing from the top of this [main function]({{ site.baseurl }}{% link _nextgen/test-scripting/main-function.md %})

### Setup/teardown life-cycle hooks

The `setup()` and `teardown()` functions are life-cycle hooks that are run once pre and post test respectively. See article on [setup/teardown life-cycle hooks]({{ site.baseurl }}{% link _nextgen/test-scripting/test-setup-teardown-life-cycle.md %}) for more details.

**Next**: [Modules and imports]({{ site.baseurl }}{% link _nextgen/test-scripting/modules-imports.md %})