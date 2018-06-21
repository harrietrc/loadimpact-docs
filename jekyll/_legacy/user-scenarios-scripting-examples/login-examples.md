---
layout: classic-docs
title: Login Examples
description: Variety of code samples on how to instruct Virtual Users to login during a performance test
categories: [user-scenario-scripting-examples]
order: 15
redirect_from:
  - /knowledgebase/articles/174596-http-basic-digest-ntlm-authentication
  - /knowledgebase/articles/174604-simple-login-using-http-post
  - /knowledgebase/articles/174601-random-user-login-using-http-post
---

***

Below we provide a variety of code samples regarding virtual users logging into a system during a test.

#### Login using HTTP Basic header
{% highlight lua linenos %}
http.request({
  method="GET",
  url="http://example.com/",
  headers={ ["Authorization"]= 'Basic ' .. base64.encode(username .. ':' .. password) }
})
{% endhighlight %}


#### Login using HTTP Basic or Digest authentication
{% highlight lua linenos %}
http.request_batch({
     {"GET", "http://username:password@example.com/"}
})
{% endhighlight %}


#### Login using NTLM authentication
{% highlight lua linenos %}
http.request_batch({
    {"GET", "http://username:password@example.com/"}
})
{% endhighlight %}


If you need to set a domain use the following instead:
{% highlight lua linenos %}
http.request_batch({
    {"GET", "http://domain\\username:password@example.com/"}
})
{% endhighlight %}


#### Simple login using HTTP POST
Note: Ideally you should use a [data store](data-stores) to provide credentials to variables named `login` and `password`. The below example is simplified for sample purposes.
{% highlight lua linenos %}
local post_data = "login=test_user&password=123"

http.request_batch({
     {"POST", "http://test.loadimpact.com/login.php", data=post_data}
})
{% endhighlight %}
