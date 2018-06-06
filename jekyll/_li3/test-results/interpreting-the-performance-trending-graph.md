---
layout: classic-docs
title: Load Impact 3.0 - How to interpret the performance trending graph
description: How to: Interpreting the performance trending graph for your load tests
permalink: /3.0/interpreting-the-performance-trending-graph
categories: [test-results]
order: 5
redirect_from: /knowledgebase/articles/617088-how-do-i-interpret-the-performance-trend-analysis
---


The performance trending graph allows you to plot runs of the same test over time in order to locate patterns of performance degradation or improvement and more easily validate the performance impact of code and infrastructure changes.

Individual test run results provide granular data for analysis, such as requests per second for individual requests, time-to-first-byte (latency) and connection-time.  Once you have completed more than one run of a particular test, our performance trending plots single, high-level performance metrics on the same graph for each individual run.

The single high-level performance metric given in the performance trending graph is the 95% percentile of all requests included in the test. This means that 95% of requests in your test will have a load time better than this value. Requests include, but are not limited to, images, text/css, text/html, Javascript, etc.

The performance trending graph allows you to locate patterns of performance degradation or improvements over your project's life time. In short, a rising graph indicates degrading performance over time.

We recommend scheduling test runs for your tests to get an understanding of how your project's performance gradually changes.

Since performance and load testing typically calls for multiple iterations and changes of a test run, we demarcate the graph to show when test configurations were changed.  This is displayed as an orange line on the graph. See image below.



Although we will include all URLs tested by default, you can purposely include/exclude certain URLs from trending by setting “report_results=true/false” in the load script for the test. This is especially useful when testing APIs or if you would not benefit from knowing this data.

Note: If you choose to exclude URLs from trending by setting “report_results=false” in the test script, the results for the excluded URLs will not be automatically reported in the general test results - however, you can still use custom metrics to have URLs in your results and analysis although they will not be included in the trending graph.
