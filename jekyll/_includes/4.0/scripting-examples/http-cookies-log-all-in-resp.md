{% highlight js linenos %}
// Example showing two methods how to log all cookies (with attributes) from a HTTP response.

import http from "k6/http";

function logCookie(c) {
    // Here we log the name and value of the cookie along with additional attributes.
    // For full list of attributes see: https://docs.k6.io/docs/cookies#section-properties-of-a-response-cookie-object
    console.log(`${c.name}: ${c.value}\n\tdomain: ${c.domain}\n\tpath: ${c.path}\n\texpires: ${c.expires}\n\thttpOnly: ${c.http_only}`);
}

export default function() {
    let res = http.get("https://www.google.com/");

    // Method 1: Use for-loop and check for non-inherited properties
    for (var name in res.cookies) {
        if (res.cookies.hasOwnProperty(name) !== undefined) {
            logCookie(res.cookies[name][0]);
        }
    }

    // Method 2: Use ES6 Map to loop over Object entries
    new Map(Object.entries(res.cookies)).forEach((v, k) => logCookie(v[0]) );
}
{% endhighlight %}