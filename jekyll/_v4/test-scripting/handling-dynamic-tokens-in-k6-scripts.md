---
layout: classic-docs
title: Handling dynamic tokens in k6 tests
description: Guide on how to handle tokens (CSRF, VIEWSTATE, NONCE, etc) in a k6 script
categories: [test-scripting]
order: 12
---
# Purpose
Explanation and guide on how to handle HTTP requests that use some type of token to prevent cross site forgery. These tokens are typically called, CSRF, VIEWSTATE, NONCE, etc. If the system you are testing is using some kind type of token. The [browser recording]({{ site.baseurl }}{% link _v4/how-to-tutorials/how-to-do-browser-recording.md %}) will capture the token from your session. This token is likely to no longer be valid when you run your test.

This issue is fairly common and can be handled with a little bit of scripting.

## Example code

This is a theoretical example. You will need to identify the page where the token is created and adjust the `res.html(selector)` criteria.

{% highlight js linenos %}
import {group} from "k6";
import http from "k6/http";

export default function() {
    let res = http.get("http://mydomain.com/myform.html");

    // Find the actual value of the token
    // We are looking for the value of an input field with a name of "token"
    let token = res.html("input[name=token]").val();

    // Make the POST request if a the token was found
    if (token) {
        // Use the token value in the following POST
        http.post("http://mydomain.com/post",
                  "token=" + token + "&foo=bar",
                  { headers: { "Content-Type": "application/x-www-form-urlencoded" }}
        );
    } else {
        console.error("Failed to find token");
    }
}
{% endhighlight %}

See the jQuery-like [HTML selection](https://docs.k6.io/docs/selection-k6html) APIs in the k6 docs for more information on how to extract values from an HTML document.
