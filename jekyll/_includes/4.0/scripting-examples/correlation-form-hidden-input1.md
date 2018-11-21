{% highlight js linenos %}
import http from "k6/http";
import {sleep} from "k6";

export default function() {
    // Request page containing a form
    let res = http.get("https://test.loadimpact.com/my_messages.php");

    // Query the HTML for an input field named "redir"
    let elem = res.html().find('input[name=redir]');

    // Get the value of the attribute "value"
    let val = elem.attr('value');

    // Now you can use this extracted value in subsequent requests...

    sleep(1);
}
{% endhighlight %}
