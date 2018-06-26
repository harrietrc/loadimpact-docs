---
layout: classic-docs
title: HTTP Authentication examples
description: Examples of different HTTP authentication methods
categories: [test-scripting]
order: 13
---

***

# Purpose

Examples of various HTTP Authentication methods that can be used with k6.  These, plus other examples can be found within the [k6 GitHub Repo](https://github.com/loadimpact/k6/tree/master/samples)

## Basic Authentication

{% highlight js linenos %}

import encoding from "k6/encoding";
import http from "k6/http";
import { check } from "k6";

export default function() {
    // Passing username and password as part of URL will authenticate using HTTP Basic Auth
    let res = http.get("http://user:passwd@httpbin.org/basic-auth/user/passwd");

    // Verify response
    check(res, {
        "status is 200": (r) => r.status === 200,
        "is authenticated": (r) => r.json().authenticated === true,
        "is correct user": (r) => r.json().user === "user"
    });

    // Alternatively you can create the header yourself to authenticate using HTTP Basic Auth
    res = http.get("http://httpbin.org/basic-auth/user/passwd", { headers: { "Authorization": "Basic " + encoding.b64encode("user:passwd") }});

    // Verify response
    check(res, {
        "status is 200": (r) => r.status === 200,
        "is authenticated": (r) => r.json().authenticated === true,
        "is correct user": (r) => r.json().user === "user"
    });
}
{% endhighlight %}


## Digest Authentication

{% highlight js linenos %}
import http from "k6/http";
import { check } from "k6";

export default function() {
    // Passing username and password as part of URL plus the auth option will authenticate using HTTP Digest authentication
    let res = http.get("http://user:passwd@httpbin.org/digest-auth/auth/user/passwd", {auth: "digest"});

    // Verify response
    check(res, {
        "status is 200": (r) => r.status === 200,
        "is authenticated": (r) => r.json().authenticated === true,
        "is correct user": (r) => r.json().user === "user"
    });
}
{% endhighlight %}
