---
layout: classic-docs
title: What are VUs (Virtual Users)?
description: Definition of Load Impact's Virtual Users.  Complex simulated users capable of making multiple concurrent network connections.
categories: [test-configuration]
order: 2
redirect_from: /knowledgebase/articles/174260-what-are-virtual-users-vus
---

***

NEEDS UPDATE - CLEARLY EXPLAIN VUS.



When executing a load test we will simulate a certain number of users accessing your system concurrently.

A VU can use multiple concurrent network connections when loading resources from a single target host. This means that if e.g. the simulated user needs to fetch four different resources from the same target host, it can open four concurrent network connections and transfer all four resources in parallel. Obviously, this results in faster page loads, but also a lot more stress on the target server that has to serve four connections at once instead of just one.

You are also able to have your VUs emulate a wide range of popular browsers such as IE, Firefox, Chrome, Safari, Opera etc. and even different versions of those browsers. The performance impact of emulating different browser can be huge – for instance, IE6 will never open more than two concurrent network connections to your web server, while most newer browsers will open up to six connections.

If you're looking to understand how to calculate the number of VUs you might need based on your Google Analytics, this blog article might be useful to you.

***

See also:
- Requests per second, RPS
- User scenario scripting
