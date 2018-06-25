---
layout: classic-docs
title: Creating a Test
description: Your test configuration allows you to granularly control various aspects of the test including ramping and geographical distrobution.
categories: [quick-start-guide]
order: 3
redirect_from: /knowledgebase/articles/836124-create-a-test
---

***


A [test configuration]({{ site.baseurl }}/3.0/test-configuration/what-is-a-test-configuration/) describes the load test you want to run.

Major components include:

How many simulated users the test should load and at what ramp-up speed
How those users should behave (i.e. select the user scenario(s) created in step 1 that you want to test or select an auto-generated user scenario)
Extra settings, such as our Server Monitoring Agent which measures backend resource utilization during testing, extra IP addresses, network and client emulation.

First, Click **"Create New Test"**



![Click create new test]({{ site.baseurl }}/assets/img/3.0/quick-start-guide/create-a-test/create-a-test-1.png)



Then, **"Add User Scenario"**

![Add a user scenario]({{ site.baseurl }}/assets/img/3.0/quick-start-guide/create-a-test/create-a-test-2.png)


From here, you can select a scenario you created in the previous step, or enter a URL for a quick scenario(URL Analyzer):
![Choose a user scenario](/{{ site.baseurl }}/assets/img/3.0/quick-start-guide/create-a-test/create-a-test-3.png)

You can add up to 10 user scenarios in a single test.  Most users find that 4-5 are generally more than enough and prevents "analytics overload". However some use cases require fully utilizing all of them.  It's also important to note that you can add the same scenario multiple times.  Each scenario represented will have it's own load generator - even if added from the same zone.

![Add additional user scenarios (if required)]({{ site.baseurl }}/assets/img/3.0/quick-start-guide/create-a-test/create-a-test-4.png)





Inputs needed:
- For simple settings: Enter the VU load level (the number of concurrent users you want to simulate) and test duration
- Specifying the percentage of simulated users that will be allocated to each scenario
- You can also use Advanced Settings to set [ramping configurations]({{ site.baseurl }}/3.0/test-configuration/load-test-ramping-configurations/)

![Configure ramping and distribution]({{ site.baseurl }}/assets/img/3.0/quick-start-guide/create-a-test/create-a-test-5.png)



The final options at the bottom of the page are optional.

[Thresholds]({{ site.baseurl }}/3.0/test-configuration/what-is-a-test-configuration/) allow you to set binary pass fail metrics for a test.  Useful after you have established a baseline or you are integrating testing as part of your CI Pipeline.

Server Monitoring is useful for receiving server side metrics during a test.  This is helpful for correlating performance degradation and finding causes of performance issues. You can use our [open source agents]({{ site.baseurl }}/3.0/monitoring-agents/load-impacts-open-source-monitoring-agents/) or our integration with [New Relic]({{ site.baseurl }}/3.0/monitoring-agents/new-relic-integration/) (New Relic subscription required)

URL Grouping is useful when running a test with dynamic URLs. This will group similar URLs together to make analysis easier.

![Configure optional features]({{ site.baseurl }}/assets/img/3.0/quick-start-guide/create-a-test/create-a-test-6.png)


Then, simply click the "Save Changes" button in the top-right corner of the testing window, and you'll be ready to run your test!


After running your test - it's time to [Analyze and Interpret results]({{ site.baseurl }}/3.0/quick-start-guide/analyze-interpret-results/)!
