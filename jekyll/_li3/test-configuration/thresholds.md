---
layout: classic-docs
title: Load Impact 3.0 - What are thresholds?
description: Explanation of Load Impact's "Threshold" feature, which allows you to set binary pass/fail metrics for your load and performnace tests
permalink: /3.0/thresholds
categories: [test-configuration]
order: 4
redirect_from: /knowledgebase/articles/918699-thresholds
---

The threshold feature allows to set your criteria to fail a load test.


VIDEO


With thresholds, you can setup your own criteria based on your performance needs as the following examples:

When total/user load time is higher than 1000ms.

When the response time of a specific resource or a page is higher than expected.

When a server response is different than expected.

You configure thresholds in your test configuration.



For now, thresholds can be defined based on:

Predefined metrics: User Load Time and Failure Rate.

Page and custom metrics. (These name field are case sensitive)
If the threshold is reached and the "Abort Test" option is enabled, the test will be immediately aborted.




When running your load tests, thresholds will be continuously evaluated, and they determine the final status of your load test.




As in other testing disciplines, your own criteria defines a test as a success or failure. Thresholds provides this pass/fail behaviour for your load tests.

Soon, you will be able to define your assertions with the Load Script API to support the same pass/fail behaviour in your user scenario scripts.
