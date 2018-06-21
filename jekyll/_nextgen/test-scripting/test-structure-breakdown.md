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

## Init code
TODO

See the k6 docs on [init code](https://docs.k6.io/docs/test-life-cycle#section-init-and-vu-stages) for more information.

### VU code
TODO

See the k6 docs on [VU code](https://docs.k6.io/docs/test-life-cycle#section-init-and-vu-stages) for more information.

### Setup/teardown lifecycle hooks
TODO

See the k6 docs on [setup/teardown code](https://docs.k6.io/docs/test-life-cycle#section-setup-and-teardown-stages) for more information.

Next: [Modules and imports]({{ site.baseurl }}{% link _nextgen/test-scripting/modules-imports.md %})