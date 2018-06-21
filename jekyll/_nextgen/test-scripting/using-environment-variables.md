---
layout: classic-docs
title: Using environment variables
description: Overview on how to use environment variables
categories: [test-scripting]
order: 7
---

Environment variables are great for making your tests usable across different hosting environment (dev, staging, production etc.).

## Accessing environment variables

To access an environment variable from a k6 test you use the global `__ENV` variable. So if you set an env var `MY_ENV_VAR` you'd access it like so:

{% highlight js lineno %}
export default function() {
    console.log(__ENV.MY_ENV_VAR);
}
{% endhighlight %}

## Setting environment variables

There are two ways to pass environment variables to a k6 test:

- By setting one or more `-e KEY=VALUE` flags when executing k6
- By reading from the system environment

### Setting CLI flags

TODO

### Reading from system environment

<div class="callout callout-warning" role="alert">
    Note that this way of setting environment variables is only supported when running Locally Executed tests, it will not work with <a href="CLOUD_EXEC_DOCS_LINK" class="alert-link">Cloud Execution</a>.
</div>

If we have a test script like this:

{% highlight js lineno %}
import { check, sleep } from "k6";
import http from "k6/http";

export default function() {
    var r = http.get(`https://${__ENV.MY_HOSTNAME}/`);
    check(r, {
        "status is 200": (r) => r.status === 200
    });
    sleep(5);
}
{% endhighlight %}

you would set the environment variable `MY_HOSTNAME` and execute k6 like this:

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
                <code>MY_HOSTNAME=test.loadimpact.com k6 run script.js</code>
            </div>
            <div class="tab-pane fade" id="platform-tabs-content-macos" role="tabpanel" aria-labelledby="platform-tabs-link-macos">
                <code>MY_HOSTNAME=test.loadimpact.com k6 run script.js</code>
            </div>
            <div class="tab-pane fade" id="platform-tabs-content-windows" role="tabpanel" aria-labelledby="platform-tabs-link-windows">
                <b>Cmd</b>
                <pre><code>c:\k6> set MY_HOSTNAME="test.loadimpact.com"
c:\k6> k6 run script.js</code></pre>
                <br>
                <b>PowerShell</b>
                <pre><code>c:\k6> $env:MY_HOSTNAME = "test.loadimpact.com"
c:\k6> k6 run script.js</code></pre>
            </div>
        </div>
    </div>
</div>

See the k6 docs on [environment variables](https://docs.k6.io/docs/environment-variables) for more information.
