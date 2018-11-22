{% highlight js linenos %}
import http from "k6/http";

const username = "user",
      password = "passwd";

export default function() {
    // Passing username and password as part of URL and then specifying "ntlm" as auth type will do the trick!
    let res = http.get(`http://${username}:${password}@example.com/`, { auth: "ntlm" });
}
{% endhighlight %}