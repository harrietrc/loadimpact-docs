---
layout: classic-docs
title: Considerations for tests with a large number of Virtual Users
description: Explanation of the IP Multiplier option and how to get additional IPs in your load test.
categories: [test-configuration]
order: 11
redirect_from: /knowledgebase/articles/1181857-considerations-for-tests-with-a-large-number-of-vi
---

***



For large tests, we recommend to consider your user scenarios and test configurations with the following modifications. As tests scale in size, small inefficiencies can strain the load generators resulting in an aborted test, or worse, skewing results. Some or all of these changes will be required in order for your load test to be able to reach its maximum capacity.

1. Remove external requests (i.e. facebook, google, other trackers, ads, CDNs*, etc.). You can't fix them if they are problematic, they also add a lot of noise to the result dataset and are just consuming CPU cycles and memory (making the VUs less efficient in terms of what you want to test). *If you are specifically testing the CDN, you may keep those requests.


2. In cases where you have a large amount of requested URLs (> 500+), you have three options depending on your specific needs:

    2.1. If possible, turn off URL reporting. It will remove reporting on the URL tab, but it will report aggregate metrics like bandwidth, user load time, etc.  This can be done using http.set_option()

    `http.set_option("report_results", false)`

    Refer to: [http.set_options](https://loadimpact.com/load-script-api#http-set_option)

    2.2. If you do not want to remove URL reporting in general, you may need to:

    2.2.1 Turn off URL reporting for each http request whose report can be skipped.
    ```
    response = http.request({
      method="GET",
      url="http://xxxx.com/",
      report_results=false
    })
    ```
    2.2.2 Use URL Grouping to group multiple generated URLs together.
    ```
    http.request({
      method="GET",
      url="http://xxxx.com/account/" .. userID
    })
    ```

    Refer to: [URL Grouping]({{ site.baseurl }}/3.0/test-configuration/url-grouping)


    2.3. In case, you need the URL load time of an unreported URL. You could add a custom metric to report the URL load time:

    `result.custom_metric("my URL", response.total_load_time)`

    You will be able to find this metric “my URL” in your test results, by clicking the "Add visualization widget" button below the main graph and smaller graphs, at the bottom of the page.

    Refer to: [Creating Custom Metrics]({{ site.baseurl }}/3.0/user-scenarios-scripting-examples/creating-custom-metrics/)


3. Avoid logging information. When using our chrome extension we include a logging example at the top. You can/should comment this out. Logging is a fairly expensive process so it's just making the Virtual Users inefficient.  If you are looking for something in particular, such as a status code being returned, consider a custom metric that counts the number of times it has been returned.

    Refer to: [Log module](https://loadimpact.com/load-script-api#log)


4. Another thing that also affects memory usage is the decompression of compressed response content. Using the "auto_decompress" parameter for requests (default with the chrome extension) will decompress the compressed responses. This is really only necessary if you intend to use the contents in your script. Otherwise, we recommend you remove the "auto_decompress" parameter and just set the "Accept-Encoding" header instead, like so:
```
http.request_batch({
  {"GET", "https://example.com/", headers={["Accept-Encoding"]="gzip, deflate"}}
})
```
This will still make the servers send compressed content but the load generator servers won't have to waste resources decompressing the contents.


5. You should also check that your script is properly paced while using the client.sleep function() - giving reasonable time for these delays and/or in between requests should do. Add sleep times between the individual pages is recommended based on what you know about your users. You can randomize this if you want. i.e. client.sleep(math.random(15, 30)) will produce random sleep between 15 and 30 seconds.

    Refer to: [client.sleep()](https://loadimpact.com/load-script-api#client-sleep)


6.  If you need to capture something from the response body(tokens, a piece of data, etc) capture just enough of the response body up to what you need. It’s common to see users just set a large number for response_body_bytes, if you have done this, revisit that and adjust it as necessary.

     Refer to: [Why is my response body empty?]({{ site.baseurl }}/3.0/frequently-asked-questions/why-is-my-response-body-empty/)

7. In your test configuration, you may increase the number of load generators for your script by adding more of the same scenarios or using an IP multiplier.  We allocate load generators in the following order:

    One load generator per User Scenario - always

    Next, we look at the number of VUs assigned to each user scenario, if any are above 500, we increase load generators until they are below 500 and spread as evenly as possible.  I.e. a test with 1 scenario and 1001 VUs will get 3 load generators at about 333 per generator(this will be rounded slightly)

    Finally, we will use the IP multiplier to increase the number of load generators, again keeping VUs assigned as evenly as possible.  Standard plans and above are allowed a 2x multiplier.  Higher multiplier are available for an additional cost.

8.  Spread the virtual users across multiple load zones.  There is a limit of using 100 load generators per load zone in a test configuration.  A 100k test would need 200 load generators at minimum, you will need to use multiple zones to ensure your test starts correctly.

9. Include a ramp down period at the end of the test in order to scale back to check recovery.
