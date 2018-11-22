{% highlight js linenos %}
import http from "k6/http";
import { sleep } from "k6";

let binFile = open("/path/to/file.bin", "b");

export default function() {
  var data = {
    file: http.file(binFile, "test.bin")
  };
  var res = http.post("https://example.com/upload", data);
  sleep(3);
}
{% endhighlight %}
