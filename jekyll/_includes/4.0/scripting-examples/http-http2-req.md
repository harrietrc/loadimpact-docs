{% highlight js linenos %}
import http from "k6/http";
import { check } from "k6";

export default function() {
    let res = http.get("https://www.bbc.co.uk/");
    check(res, {
        "status is 200": (r) => r.status === 200,
        "protocol is HTTP/2": (r) => r.proto === "HTTP/2.0",
    });
}
{% endhighlight %}