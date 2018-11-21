{% highlight js linenos %}
import encoding from "k6/encoding";
import http from "k6/http";
import { check } from "k6";

const username = "user",
      password = "passwd";

export default function() {
    // Passing username and password as part of URL will authenticate using HTTP Basic Auth
    let res = http.get(`http://${username}:${password}@httpbin.org/basic-auth/${username}/${password}`);

    // Verify response
    check(res, {
        "status is 200": (r) => r.status === 200,
        "is authenticated": (r) => r.json().authenticated === true,
        "is correct user": (r) => r.json().user === username
    });

    // Alternatively you can create the header yourself to authenticate using HTTP Basic Auth
    res = http.get(`http://httpbin.org/basic-auth/${username}/${password}`, { headers: { "Authorization": "Basic " + encoding.b64encode(`${username}:${password}`) }});

    // Verify response (checking the echoed data from the httpbin.org basic auth test API endpoint)
    check(res, {
        "status is 200": (r) => r.status === 200,
        "is authenticated": (r) => r.json().authenticated === true,
        "is correct user": (r) => r.json().user === username
    });
}
{% endhighlight %}