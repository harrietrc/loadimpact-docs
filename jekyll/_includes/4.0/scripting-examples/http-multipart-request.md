{% highlight js linenos %}
import http from "k6/http";
import { sleep } from "k6";

let file = open("/path/to/file.txt");

export default function() {
  var data = {
    field: "this is a standard form field",
    file: http.file(file, "test.txt")
  };
  var res = http.post("https://example.com/upload", data);
  sleep(3);
}
{% endhighlight %}
