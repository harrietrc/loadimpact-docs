{% highlight js linenos %}
import uuid from "./uuid.js";

export default function() {
    // Generate a UUID v1
    let uuid1 = uuid.v1();
    console.log(uuid1);

    // Generate a UUID v4
    let uuid4 = uuid.v4();
    console.log(uuid4);
}
{% endhighlight %}