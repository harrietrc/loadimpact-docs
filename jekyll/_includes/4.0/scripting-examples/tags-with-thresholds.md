{% highlight js linenos %}
import http from "k6/http";
import {sleep} from "k6";

export let options = {
    stages: [
        { target: 10, duration: "10s" }
    ],
    thresholds: {
        // A threshold that only looks at requests with a tag "staticAsset" with a value of "yes"
        "http_req_duration{staticAsset:yes}": ["p(95)<500"]
    }
};

const baseURL = "https://test.loadimpact.com";

export default function(data) {
    // Load page
    let res = http.get(baseURL);

    // Load static assets (tagging them with "staticAsset"="yes")
    res = http.batch([
        ["GET", `${baseURL}/style.css`, null, { tags: { staticAsset: "yes" } }],
        ["GET", `${baseURL}/images/logo.png`, null, { tags: { staticAsset: "yes" } }]
    ]);

    sleep(3.0);
}
{% endhighlight %}