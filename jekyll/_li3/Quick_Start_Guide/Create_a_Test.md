---
layout: classic-docs
title: Load Impact 3.0 - Creating a Test
description: "Quick Start Guide - Creating a Test"
permalink: /3.0/Create_a_Test
---


A [test configuration](need link) describes the load test you want to run.

Major components include:

How many simulated users the test should load and at what ramp-up speed
How those users should behave (i.e. select the user scenario(s) created in step 1 that you want to test or select an auto-generated user scenario)
Extra settings, such as our Server Monitoring Agent which measures backend resource utilization during testing, extra IP addresses, network and client emulation.

First, Click "Create New Test"

Image: https://loadimpact.uservoice.com/assets/120012970/Image%202017-04-18%20at%2011.20.39%20AM.png

Then, "Add User Scenario"

Image: https://loadimpact.uservoice.com/assets/120012997/Image%202017-04-18%20at%2011.21.50%20AM_1.png

From here, you can select a scenario you created in the previous step, or enter a URL for a quick scenario(URL Analyzer):
Image: https://loadimpact.uservoice.com/assets/120013117/Image%202017-04-18%20at%2011.22.50%20AM.png

You can add up to 10 user scenarios in a single test.  Most users find that 4-5 are generally more than enough and prevents "analytics overload". However some use cases require fully utilizing all of them.  It's also important to note that you can add the same scenario multiple times.  Each scenario represented will have it's own load generator - even if added from the same zone.

Image: https://loadimpact.uservoice.com/assets/120013228/Image%202017-04-18%20at%2011.23.33%20AM.png





Inputs needed:
For simple settings: Enter the VU load level (the number of concurrent users you want to simulate) and test duration
Specifying the percentage of simulated users that will be allocated to each scenario
You can also use Advanced Settings to set ramping configurations
Image: https://loadimpact.uservoice.com/assets/120013330/Image%202017-04-18%20at%2011.24.19%20AM.png

The final options at the bottom of the page are optional.

Thresholds allow you to set binary pass fail metrics for a test.  Useful after you have established a baseline or you are integrating testing as part of your CI Pipeline.

Server Monitoring is useful for receiving server side metrics during a test.  This is helpful for correlating performance degradation and finding causes of performance issues. You can use our open source agents or our integration with New Relic (New Relic subscription required)

URL Grouping is useful when running a test with dynamic URLs. This will group similar URLs together to make analysis easier.

Image: https://loadimpact.uservoice.com/assets/120013423/Image%202017-04-18%20at%2011.25.52%20AM.png


Then, simply click the "Save Changes" button in the top-right corner of the testing window, and you'll be ready to run your test!


After running your test - it's time to Analyze and Interpret results!
