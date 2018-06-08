---
layout: classic-docs
title: What are RPS (Requests per second)?
description: Explanation of requests per second, as it relates to Load Impact.
permalink: /3.0/what-are-requests-per-second-rps
categories: [test-configuration]
order: 3
redirect_from: /knowledgebase/articles/1148857-what-are-requests-per-second-rps
---

***

Requests Per Second, RPS, is a scalability measure characterizing the throughput handled by a system.

Using RPS when defining sizing and scale of load testing is common when testing APIs, in the same way that the number of concurrent visitors or VUs is the most common concept and metric when talking about websites or apps.

In the current version of Load Impact, sizing of load tests are defined by VUs. Converting the scale or size of a load test from VUs to RPS depends on a number of factors such as response times, script processing complexity and VU concurrency factors. See this article on how to load test an API for more details and a sample script on how to design a test with the goal of controlling system throughput.

***

See also:
Virtual Users
How to load test an API
Load testing with Postman
User scenario scripting
