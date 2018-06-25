---
layout: classic-docs
title: Testing a JSON API
description: Basic example on load testing a JSON API endpoint and handling the response.
categories: [user-scenario-scripting-examples]
order: 21
redirect_from: /knowledgebase/articles/827841-testing-a-json-api
---

***

This is a basic example which uses the http and json load script APIs to test a JSON API server. Since testing API endpoints typically has slightly different requirements than testing an app or website. We also suggest our article on [How to load test an API]({{ site.baseurl }}/3.0/how-to-tutorials/how-to-load-test-an-api/)

{% highlight lua linenos %}
local username = "xxxxx"
local password = "yyyyyyy"

local data, headers, response



data = json.stringify({email=username, password=password})
headers = {
    ["Content-Type"] = "application/json"
}
response = http.request({"POST",
        "https://api.xxxx.com/login",
        headers = headers,
        data = data,
        response_body_bytes=1000000})

if response.status_code ~= 200 then
  log.error('login API error')
  do return end
end

-- read response value
local token = json.parse(response.body).token.key



headers = {
  ["Content-Type"] = "application/json",
  ["Authorization"] = "Token "..token
}
response = http.request({"GET",
  "https://api.xxxx.com/v3/account",
  headers = headers,
  response_body_bytes=1000000})

if response.status_code ~= 200 then
  log.error('fetching API error')
  do return end
end


log.debug(response.body)
data = json.parse(response.body)
--process data


client.sleep(math.random(20, 40))
{% endhighlight %}
