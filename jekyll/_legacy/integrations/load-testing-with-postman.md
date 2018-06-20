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


1 - Install the Command Line Tool.

  Load Impact provides CLI tools to convert your Postman tests to both versions of our platform:

  - [Postman to Lua converter](https://github.com/loadimpact/postman-to-loadimpact#installation-and-usage)
  - [Postman to k6/JavaScript converter](https://github.com/loadimpact/postman-to-k6#installation-and-usage)


2 - As a Postman user, you organize your API tests into collections of requests. First, you have to export your Postman collections.

  ![Download Postman collection]({{ site.baseurl }}/assets/img/legacy/integrations/load-testing-with-postman/download-postman-collection-1.png)


3 - Use the command line to convert the Postman collection:
  `postman-to-loadimpact path/my-collection.json -o path/my-collection.lua`
  `postman-to-k6 path/my-collection.json -o path/k6-script.js`

4 - _Only LUA tests/scripts:_ Copy the content of the command output into a new or existing user scenario in Load Impact.

5 - Based on your script, you may need to do some additional scripting for it to validate. Here are common cases:

  5.1  -  Assign Lua variable values.
    The transformer will convert variables as:

  ```
  {% raw %}
    `{{url}}/repos/{{username}}/{{repository}}/contributors`
    ..url.."/repos/"..username.."/"..repository.."/contributors
  {% endraw %}
  ```


  At the top of the script, we have auto-generated variables. You must assign values to these. If these are dynamic, you may wish to use a [Data Store]({{ site.baseurl }}/legacy/user-scenarios-scripting-examples/data-stores/)

  ```
      local url = “YOUR_VALUE”
      local username = “YOUR_VALUE”
      local repository = “YOUR_VALUE”
  ```

  5.2  -  Replicate the behaviour defined in your Postman pre-request and response test.

  This code will be inserted as a comment before and after the Lua request.
  ```
      --[[
      tests["Body matches string"] = responseBody.has("API endpoint authorized");
      tests["Status code is 200"] = responseCode.code === 200;
      --]]
  ```
  You could easily replace the code to simulate this behaviour:


  **LUA tests using the Load script API**
  ```
      if response.status_code ~= 200 then
        log.error("Status code is 200")
         -- or
        result.custom_metric("Status code is 200", 1)
      end
      if not string.find(response.body, "API endpoint authorized") then
        log.error("Body does not match")
        -- or
        result.custom_metric("Body does not match", 1)
      end
  ```

  **k6 tests using the k6 API.**
  ```
      check(res, {
        "status was 200": (r) => r.status == 200
      });
  ```
6 - Validate your script and run your test!



See also:
- [Virtual Users, VUs]({{ site.baseurl }}legacy/test-configuration/what-are-virtual-users-vus/)
- [Requests Per Second, RPS]({{ site.baseurl }}legacy/test-configuration/what-are-requests-per-second-rps/)
- [How to load test an API]({{ site.baseurl }}/legacy/how-to-tutorials/how-to-load-test-an-api/)
