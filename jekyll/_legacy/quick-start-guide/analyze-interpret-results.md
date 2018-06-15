---
layout: classic-docs
title: Analyze and Interpreting your results
description: Brief guide on interpreting your load or performance test results in Load Impact.
categories: [quick-start-guide]
order: 4
---

***

Interpreting test results can be tricky, but there are some general rules that can help you determine how a test went.

The *Vitual Users active* graph and the *Virtual User Load Time (VU Load Time)* graph are default graphs displayed on the result page.
### Simple Reminders:

- Look out for overall chart trends — is it trending upward/downwards, linear or exponential?.
- The VU Load Time represents how much time took all the HTTP transactions in a user scenario, and its graph gives a quick indication of how the target site handled the load during the test.
- VUs active graph show you the number of active simulated clients (simulated virtual users) at any point during the test - what we also sometimes call the “load level”.
- The optimum page load time is less than one minute. Ideally, it should be between 3-8 seconds
- Regardless of the type of graph you get, look out for the failed requests count. Failed requests indicate that you’re not getting any useful content back from the server: visible in the URL list with response code such as, 404
- Load testing is an experimental process, and should be planned and executed methodically. Testers should change only a single parameter for each load test, whether it's the type or mix of scripts, server configuration, test dataset, or other factor

### Example results 1:

Image: https://loadimpact.uservoice.com/assets/96702867/QSG%20example%20results%201.png

Green graph shows the Number of VUs active increasing.
Blue graph shows VU Load Time increasing exponentially.
If there was significant slow down in how fast the site responded to HTTP requests, it will be visible in the VU Load Time graph. It will show steadily increasing values as the load level increased.

### Example results 2:

Image: https://loadimpact.uservoice.com/assets/96702894/QSG%20example%20results%202.png

Green graph shows the Number of VUs active
Blue graph shows VU Load Time unaffected by the increasing load
A fairly common result is the completely flat VU Load Time graph. Depending on your objective for running the test in the first place, this can be either a good thing or a bad thing — it depends on your objectives:


#### Example test objective 1: The load test

If your goal is to test your site’s capability of handling 1,000 users and you get a flat graph without any errors and with reasonable response times, it suggests that the site can really handle 1,000 users.

#### Example test objective 2: The stress test

If, on the other hand, you are testing to determine the extreme performance limits of a site (how much load it can take before breaking) and you get a flat graph, you will probably need to run another test with more simulated users, as this implies there’s not enough stress being applied to the servers.


### Example results 3:

Image: https://loadimpact.uservoice.com/assets/96702825/qsg%20example%20results%203%20custom.png

Green graph shows the Number of VUs active
Blue graph shows VU Load Time dipping after the first point, then increasing again
It's not uncommon that VU Load time falls initially. This may be caused by DNS caching on the client side and/or content caching on the server side.

In a nutshell, the ability to extrapolate information from load test results allows you to understand and appreciate what is happening within your system. Here are some key factors to bear in mind when analyzing load test results
Check Bandwidth
Check load time for a single page rather than user load time
Check load times for static objects vs. dynamic objects
Check the failure rate
For Server Monitoring: Check CPU and Memory usage status
At this point - you should have a basic understanding of how to create your use cases, include them in tests, run those tests and analyze the results.  If you still have questions, please reach out to support and ask.  If you don't, it's time for a few more tips that will make you a performance expert. Here is what we suggest to do next
