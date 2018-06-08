---
layout: classic-docs
title: Ramping configurations
description: Common load test ramping configuration examples and what you can learn from using them
permalink: /3.0/load-test-ramping-configurations
categories: [test-configuration]
order: 9
redirect_from: /knowledgebase/articles/945337-different-types-of-ramping-configurations
---

***

There are many different ways to configure tests in Load Impact. You can even control how VUs ramp up and down during a test.  Depending on how you configure your ramping, it will provide different test profiles that can help you learn different things. Running different types of ramp up profile will provide different types of results.

For the following examples, we list theoretical tests you might run. This isn't meant to be an all inclusive list, but some of the most common test ramping configurations used.


Stress test:

Simply put - how much can you take and when will you break? Any performance test that will push above and beyond your normal level of load. It configures ramp ups that aren't too steep, which might cause servers to experience a spike test. It can be one step or several, just make sure you overreach and try for more than you expect your system can handle.




Load test:

Used to evaluate if performance goals are met. Set the thresholds and limits for the goals you target with your test.





Spike test:

Sudden spike in traffic from normal levels that may last for any amount of time. If you were running an ad campaign on the next Superbowl you would really like to make sure you can handle the amount of users coming in a very short amount of time. The defining characteristic is a very short ramp up time.





Soak test:

Used to find problems that arise when a system is under pressure for extended periods of time. Run for longer duration and is used to find long term problems such as memory leaks, resource leaks or corruption and degradation that occurs over time. Run these at roughly 80% of your load testing goals. Not at max capacity.
