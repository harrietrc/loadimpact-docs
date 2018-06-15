---
layout: classic-docs
title: Login Code Examples
description: Variety of code samples on how to instruct Virtual Users to login during a performance test
categories: [user-scenario]
order: 15
redirect_from:
  - /knowledgebase/articles/174596-http-basic-digest-ntlm-authentication
  - /knowledgebase/articles/174604-simple-login-using-http-post
  - /knowledgebase/articles/174601-random-user-login-using-http-post
---

***

Below we provide a variety of code samples regarding virtual users logging into a system during a test.

#### Login using HTTP Basic header
```
http.request({
  method="GET",
  url="http://example.com/",
  headers={ ["Authorization"]= 'Basic ' .. base64.encode(username .. ':' .. password) }
})
```
#### Login using HTTP Basic or Digest authentication
```
http.request_batch({
     {"GET", "http://username:password@example.com/"}
})
```
#### Login using NTLM authentication
```
http.request_batch({
    {"GET", "http://username:password@example.com/"}
})
```
If you need to set a domain use the following instead:
```
http.request_batch({
    {"GET", "http://domain\\username:password@example.com/"}
})
```
#### Simple login using HTTP POST
Note: Ideally you should use a [data store](data-stores) to provide credentials to variables named `login` and `password`. The below example is simplified for sample purposes.
```
local post_data = "login=test_user&password=123"

http.request_batch({
     {"POST", "http://test.loadimpact.com/login.php", data=post_data}
})
```
