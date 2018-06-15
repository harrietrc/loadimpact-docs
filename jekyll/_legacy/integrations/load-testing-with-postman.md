---
layout: classic-docs
title: Load Testing with Postman
description: Guide on how to create load tests in Load Impact from your Postman collections
categories: [integrations]
order: 2
redirect_from: /knowledgebase/articles/894636-load-testing-with-postman
---

***

Postman is one of the best-in-market tools for functional testing of APIs.



Load Impact provides CLI tools to convert your Postman tests to:

LUA tests: https://github.com/loadimpact/postman-to-loadimpact
k6 tests: https://github.com/loadimpact/postman-to-k6

Choose one of the tools depending on your needs and desired script language.
- LUA tests: cloud execution and result visualization through Load Impact. Scripts are written in LUA.
- k6 tests: local execution and Insights visualization. Scripts are written in Javascript.

The following section describes the steps to convert your Postman configuration.

1 - As a Postman user, you organize your API tests into collections of requests. First, you have to export your Postman collections.




2 - Install the Command Line Tool.

https://github.com/loadimpact/postman-to-loadimpact#installation-and-usage


https://github.com/loadimpact/postman-to-k6#installation-and-usage


3 - Use the command line to convert the Postman collection:
`postman-to-loadimpact path/my-collection.json -o path/my-collection.lua`
`postman-to-k6 path/my-collection.json -o path/k6-script.js`

4 - **Only LUA tests/scripts** Copy the content of the command output into a new or existing user scenario script.




5 - It’s time to validate your load script and tweak it some specific cases:


5.1  -  Assign Lua variable values.
The transformer will convert variables as:
```
    "{{url}}/repos/{{username}}/{{repository}}/contributors"
    ""..url.."/repos/"..username.."/"..repository.."/contributors"
```

But, you will have to assign values to the auto-generate variables at the top of the script.
```
    local url = “YOUR_VALUE”
    local username = “YOUR_VALUE”
    local repository = “YOUR_VALUE”
```
5.2  -  Replicate the behaviour defined in your Postman pre-request and response test.

This code will be inserted as a comment before and after the Lua request.
```
    --[[
    tests["Body matches string"] = responseBody.has("OMG");
    tests["Status code is 200"] = responseCode.code === 200;
    --]]
```
You could easily replace the code to simulate this behaviour:


5.2.1 - LUA tests using the Load script API
```
    if response.status_code ~= 200 then
      log.error("Status code is 200")
       -- or
      result.custom_metric("Status code is 200", 1)
    end
    if not string.find(response.body, "OMG") then
      log.error("Body matches string")
      -- or
      result.custom_metric("Body matches string", 1)
    end
```

5.2.2 - k6 tests using the k6 API.
```
    check(res, {
      "status was 200": (r) => r.status == 200
    });
```
6 - Once, the script has been validated, you can run your load tests.

Happy load testing!


If you have any suggestions, please, contact support or post a Github issue.


See also:
- Virtual Users, VUs
- Requests Per Second, RPS
- How to load test an API
- User scenario scripting
