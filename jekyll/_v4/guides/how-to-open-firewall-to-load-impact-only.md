---
layout: classic-docs
title: How to Open Your Firewall to LoadImpact For Cloud Executed Tests
description: A guide with different methods to open your firewall to LoadImpact k6 cloud execution traffic for load testing
categories: [guides]
order: 6
redirect_from: /4.0/how-to-tutorials/how-to-open-firewall-to-load-impact-only/
---

***

If you are running a `k6 cloud` test, you will be utilizing LoadImpact's infrastructure. These are dynamically allocated from our cloud providers and we do not know the source IP until the test is running.

**If you are streaming results to Insights utilizing `k6 run -o cloud myscript.js` you SHOULD NOT need to whitelist anything.**

To open your firewall to LoadImpact traffic, you have multiple options. Depending on your business needs, one may be a better fit than another.


1. Open up your firewall to the whole range of AWS IP addresses used by the load zones where you want to run your load test from. To use AWS to generate traffic, you will have to open up your firewall to a large IP range.

2. Use HTTP headers, URL query parameters, or unique data that identifies the traffic as belonging to your load test, This requires that your firewall has support for scanning application payload data and apply rules based on what it finds.


Here is a more samples on how to complete the different options above:

### Opening up your firewall to all IPs potentially used in the test

We list the full range of IP addresses used in [this article]({{ site.baseurl }}/4.0/frequently-asked-questions/what-ip-addresses-are-used-by-load-impact/). You will need to whitelist the IP ranges for the load zones you are utilizing. Please note the JSON file at the bottom of the article.

### Using HTTP headers or URL query parameters to send an identifying token

You can add custom HTTP headers to any request in your script. You'll need to add the header to every single request.
{% highlight js linenos %}
import http from "k6/http";

export default function() {
  var url = "http://test.loadimpact.com/login";
  var payload = JSON.stringify({ email: "aaa", password: "bbb" });
  var params =  { headers: { "Content-Type": "application/json" , "Myheader": "TOKEN_STRING"} }
  http.post(url, payload, params);
};
{% endhighlight %}

If you're not dependent on having the simulated users in your load test tobe a certain user agent, you can also use the `userAgent` option to set the "User-Agent" header for all subsequent requests. That header could then contain your token value and you would not have to modify every single HTTP request in your script. In the below example the user agent is set to `MyK6UserAgentString/1.0`

{% highlight js linenos %}
// Set a custom User Agent globally in your test options.
export let options = {
  userAgent: "MyK6UserAgentString/1.0"
};
{% endhighlight %}

You might also use query parameters, if it doesn't interfere with the functionality of your application:

{% highlight js linenos %}
// Add query parameters to your requests with a unique piece of data
export default function() {
  http.get("http://test.loadimpact.com/?firewall_token=TOKEN_STRING");
}
{% endhighlight %}

Another option could be to request content from a certain hostname that is not in the DNS, but your site would of course need to be configured to respond to requests for that hostname. This is how you do it on the LoadImpact side:

{% highlight js linenos %}
// In your options, map your a unique/unused/secret hostname to the IP of the server.
export let options = {
  hosts: {
    "https://very_difficult.to.guess.hostname.com": "1.2.3.4"
  }
};
// Make your requests to that hostname
export default function() {
  http.get("https://very_difficult.to.guess.hostname.com/");
}
{% endhighlight %}
Of course, this last solution requires that your firewall terminates SSL traffic, otherwise it will not see the Host header in unencrypted form. You could also use unencrypted HTTP, but get a bit less security.
<!--stackedit_data:
eyJoaXN0b3J5IjpbMTYyMDgyNzc2XX0=
-->
