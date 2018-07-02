---
layout: classic-docs
title: Why is VU load time missing?
description: Description of why VU Load Time may be missing from your load test result.
categories: [troubleshooting]
order: 3
redirect_from: /knowledgebase/articles/401383-why-is-vu-load-time-not-showing-in-my-results-gr
---

***

The VU Load Time metric is an aggregated result metric. It represents how much time it took the simulated users to perform all the HTTP transactions in a user scenario minus sleep time(calls to `client.sleep` in your script).

For example, If you have a recording/user journey that took 10 minutes to create, there will not be any VU load times reported for at least that time after the test is started. If the site responds slower than it did during the recording, it will take even longer before the user load time can be reported.

![Missing VU Load Time]({{ site.baseurl }}/assets/img/v3/troubleshooting/why-is-vu-load-time-missing/missing-vu-load-time-1.jpg)

Even if your site is quick and has very low response times, this can still take quite a long time if you have a recording over several pages in your scenario, with sleeps in between the pages.

***

Look at this example scenario:

```
http.page_start("Page 1")
http.request_batch({
    {"GET", "http://example.com/"},
    {"GET", "http://example.com/page1/image.gif"},
})
http.page_end("Page 1")

client.sleep(math.random(60, 65))

http.page_start("Page 2")
http.request_batch({
    {"GET", "http://example.com/page2/"},
    {"GET", "http://example.com/page2/style.css"},
})
http.page_end("Page 2")

client.sleep(math.random(60, 65))

http.page_start("Page 3")
http.request_batch({
    {"GET", "http://example.com/page3"},
    {"GET", "http://example.com/page3/imgs/bg.png"},
    {"GET", "http://example.com/page3/imgs/header.png"},
})
http.page_end("Page 3")

client.sleep(math.random(60, 65))

```
 This scenario loads a page with the corresponding resources. Then it simulates the user browsing the content of the page for about a minute before loading the next page (simulated in the script as client.sleep). It repeats this pattern until three pages have been loaded and all sleeps have been accounted for. Here's what you'll see if you add the response time graphs for Page 1, Page 2 and Page 3 for the test example above:

![Page metrics]({{ site.baseurl }}/assets/img/v3/troubleshooting/why-is-vu-load-time-missing/missing-vu-load-time-2.jpg)

For the first minute of the test the only reported value (of the graphs plotted) is Page 1. All the simulated clients that are active for the first minute are busy either loading the first page or, if all content has already completed loading, browsing content ('sleeping'). Once the first client is done taking in the first page, it loads the second page and reports the load time, which can then be plotted in the graph. A minute later, the load time for the third page can be reported and after an additional minute the whole scenario is completed, generating the user load time metric.

***

In extreme cases you might not get any VU load time at all if no client has enough time to complete a full iteration of your user scenario.

To mitigate this issue you should try running your tests for a longer duration, consider increasing the time it takes to ramp up. This will allow more clients to complete your scenario before the test ends and in turn, generate more data points for the user load time metric.

You should avoid recording a single long user scenario simulating all the different user actions in a single script, this likely does not realistically simulate a user's actions on your site. Instead, split these into several shorter scenarios simulating different types of user behavior.

It is usually a good idea to end a test with a constant number of Virtual Users for at least the duration of the longest User scenario. For example, if your longest scenario is 3 minutes, you should ramp down over at least 3 minutes. A slightly longer ramp down is most ideal as this would account for any performance issues encountered during the test, giving the Virtual Users time to finsih. 

Perhaps, your target system could have started getting unresponsive, causing requests to timeout. The default timeout for connection attempts and requests is 2 minutes. In this specific case, URLs will have a status code of 1128 and VU load time will not be reported ~2 minutes before the test end.

In cases where scripts contain many pages/URLs and long execution times, the VU load time would only be good to get an indication of the trend of the VU experience. Therefore, some other metrics one can also look at to see a trend that could indicate problems are "Bandwidth" and "Requests per second".

So, if your test results aren't showing VU Load Time metrics, this does NOT mean you don't have test metrics to look at. You do! Instead of looking at the VU load time for load time values, you can look at the load times of the individual pages and URLs. A missing VU load time could also be a sign of a performance problem.
