---
layout: classic-docs
title: How to Interpret Results
description: Introduction on understanding and interpreting your Load Impact load and performance test results
permalink: /3.0/how-to-interpret-load-test-results
categories: [test-results]
order: 2
redirect_from: /knowledgebase/articles/174121-how-do-i-interpret-test-results
---

***

Likely needs a rewrite.  Make use of blog: http://blog.loadimpact.com/how-to-interpret-your-load-test-results

Interpreting results from a load test is not easy. It is almost as difficult as configuring a load test. When you run a load test using Load Impact, you will always get a default results graph on the test result page. This graph will give you a very rough estimate of how much time, as experienced by a user, it would take to load your web page (or pages, if you configured your test to access multiple pages) when your site was accessed by a certain number of concurrent users.

In most situations, it is correct to say that If you get a flat or falling graph, it means your site can handle the load comfortably and if you want to know where its limits are, you need to increase the load level.

Apart from that, you have to look at the absolute load time values reported and decide what are acceptable values for your site. Maybe your particular application or your particular users will balk at using your site/application if the page load time exceeds 10 seconds, or maybe they will do so at 5 seconds. Only you know your own users. Usually, it is worthwhile to decide on a number and then load your site until you reach that number, because then you know how many users you can handle with acceptably low load times.

Note that it is very important to know how your users behave on your site, in order to be able to create a realistic load test. What pages they visit and how long they stay on those pages will greatly affect how many concurrent users your site can handle, and if your load test does not correctly emulate the behavior of your real users, the results will not tell you how many real users your site can handle. You should start by using a tool like Google analytics to learn more about the behavior of your users, and then create Load Impact user scenarios to emulate how your users behave on your site.

Metrics reported in a test
VU load time is the “default” metric that gets shown in the default chart for every test started, along with the number of active clients. Below is an example of the default chart, showing VU load time as a blue graph and active clients as a green graph (note that colors may vary if you create your own, custom graphs).


The VU load time metric reports the amount of time a simulated client has spent loading resources from the tested server. If the load test is well prepared and executed, this metric will report the actual load time as experienced by a typical user on your site, at different load levels. However, “well prepared and executed” in this case means you have to:

Know what client applications (browsers) are most commonly used when users access your site
Know what the most common user behaviors on your site are – what do people do on the site, exactly?
Know where your users are most commonly located geographically (or even better, how much network delay there is between them and your site)
Accurately simulate these behaviors/circumstances through correct configuration of your load test and your user scenarios
Obviously, there has to be a large amount of luck involved to get these things right through just entering the site URLand pressing a “start” button, and that is why many such tests do not provide very accurate estimates of how many real-world users the site can handle. The test case is simply not realistic enough. An unrealistic test case can nevertheless provide you with valuable information. You can run such a test in order to learn where bottlenecks are, you can also run the test before and after optimization efforts, in order to learn what actions give you the most performance improvements. Load testing is rarely a waste of time, even if very little effort is spent on preparations, but it is useful to know the limitations of your testing.

To sum up, VU load time tells you how much time it took the simulated clients to perform all the HTTP transactions in your user scenario. It measures actual time passed fetching HTTP objects from the server, and ignores time spent executing e.g. sleep() statements or similar. It also takes into account the speedup generated when fetching multiple things in parallel, like all modern browsers do. This means that if you run a test and set the right number of max connections for those users, the VU load time metric will give you a fairly accurate measurement of how long it would have taken a real user, using a real browser, to load the same content.

Another standard metric is accumulated load time. This metric is the sum total of all individual load times, for all objects loaded by the client. It is a metric you can use to compare web server performance between load tests, as it gives a good picture of how fast things are loading in general, but it does not tell you “page load time” as experienced by a user. Mainly because a user will normally run a browser that loads several things in parallel, over multiple TCP connections and the actual time passed will then not be a sum of all individual load times. An example:

A real user runs Firefox and navigates to a web page – http://www.dom.ain
Firefox opens a single connection to the www.dom.ain server and requests the main HTML document “/”
After 0.2 seconds, Firefox has retrieved the main HTML document. It parses it and notices references to a CSSfile (“main.css”), two images (“image1.jpg” and “image2.jpg”) and a javascript (“jquery.js”)
Firefox now requests “main.css” over the connection it already has open, then it opens three more connections to the server and requests “image1.jpg”, “image2.jpg” and “jquery.js” over those connections.
0.3 seconds later, Firefox has received the “main.css” file
0.1 seconds later it has received the “image1.jpg” file and the “jquery.js” file
0.1 seconds later it has received the “image2.jpg file”
Note that in order to understand these examples, and how web performance is affected depending on the user’s choice of browser, it is important to know a bit about networking and how web servers and clients make use of the connection-oriented/stateful TCP procotol to transfer data.

Total (real) time elapsed is 0.2 + 0.3 + 0.1 + 0.1 = 0.7 seconds. This is what the VU load time metric would report if this had been a load test – the actual time passed as experienced by the user. The accumulated load time metric, however, will report 0.2 + 0.3 + 0.4 + 0.4 + 0.5 = 1.8 seconds. These are the individual load times for all objects/resources loaded. The main HTML file took 0.2 seconds to load, the “jquery.js” took 0.3 seconds, the “image1.jpg” and “image2.jpg” took 0.4 seconds (remember that we started loading them at the same time as we started loading “jquery.js”, in step #4 above) and “image2.jpg” took a total of 0.5 seconds to load.

###  Common graph types/patterns
Below we will cover some common patterns you may encounter and what to potentially take away from them.

##### 1. The flat graph

The chart below shows a green graph that displays number of active clients in a test, and a blue graph that shows user load time (response time) during the test. Despite increasing the load (the green graph) from 1 to 25 concurrent clients we can see that the blue graph doesn't change – it fluctuates slightly up and down but stays at the same average level regardless of the load level. This tells us that the system we are testing is nowhere near stressed by the load we are subjecting it to. We probably need to use substantially higher load levels to see any kind of performance degradation.



##### 2. The rising graph

Here we have a test where the load level is ramped up from about 75 to 500 clients over the course of about 12 minutes (the test started at 0 clients but we have zoomed in the graph to show the most interesting parts). We can see that the blue graph showing response time is flat for a while, then it starts to increase at approx. 200 concurrent clients, and continues increasing linearly throughout the test.

From this graph we can deduce that demand for some resource is exceeding availability of that resource around 200 clients, causing a graceful performance degradation from that point onwards as every client has to share the scarce resource equally. Shortage of some system resources (e.g. network bandwidth) will cause this kind of graceful/linear performance degradation, while others will result in very fast, exponential performance degradation (system memory shortage, for instance). Note that graceful degradation usually becomes exponential once the shortage gets severe enough.


##### 3. The exponential graph

This graph looks flat to begin with, but then it starts to rise, and keeps rising faster and faster as load increases. This is called exponential behavior, where every little bit of load that is added will cause an ever larger performance degradation. When you see this type of graph you know that you are not far away from the extreme limit of your system’s performance.
