{% highlight js linenos %}
import http from "k6/http";
import {sleep} from "k6";

export default function() {
    // Request page containing a form
    let res = http.get("https://httpbin.org/forms/post");
 
    // Now, submit form setting/overriding some fields of the form
    res = res.submitForm({
        formSelector: 'form[action="/post"]',
        fields: { custname: "test", extradata: "test2" },
        submitSelector: "mySubmit",
    });

    sleep(3);
}
{% endhighlight %}