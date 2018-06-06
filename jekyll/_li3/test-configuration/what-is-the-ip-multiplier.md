---
layout: classic-docs
title: Load Impact 3.0 - IP Multiplier
description: Explanation of the IP Multiplier option and how to get additional IPs in your load test.
permalink: /3.0/what-is-the-ip-multiplier
categories: [test-configuration]
order: 6
redirect_from: /knowledgebase/articles/174298-what-is-the-option-to-add-extra-ip-addresses-for
---

NEEDS REVIEW

The option to add extra source IP addresses is a feature added for users who might require more than the set of IP addresses that is normally assigned to their test. We distribute VUs as evenly as possible across load generators. The maximum number of VUs per load generator is 500. It's possible to bring more load generators (and thus IPs) into a test by changing the number of user scenarios and load zones or using an IP multiplier.

In the majority of cases, this is more than adequate for your load testing needs. However, there are some tests that would require more IP addresses in order to get a more accurate test simulation. The main reasons for requiring more IP addresses include:

**(1) Load balancing** - Some systems have set up their load balancers to distribute load based on IP address configuration. In such cases, if the test configuration simulates 500 VUs coming from a single user scenario and loadzone, all the load would be directed via the load balancer to only one server. You can force additional Load Generators and thus IP addresses by adding additional Load Zones or different User Scenarios in the same Load Zone to your test configuration.

**(2) CPU/memory intensive scripts** - Some HTTPS sites have a high bit encryption which consumes a lot of memory from our load generators. In such cases, the bottleneck could potentially lie with our load generators, leading to inaccurate load testing results. You can check to see if load generator CPU/memory is a bottleneck by adding additional graphs in your load test result page.

**(3) Bandwidth as a bottleneck** - If you are consuming a lot of bandwidth during the test, it is also highly encouraged that you add additional IPs to ensure that load generation bandwidth isn’t a bottleneck. Each IP address you add equates to an additional instance where load is being generated from, which means more bandwidth being allocated to you from the load generation side. Some typical tests that consume high amounts of bandwidth are:

- Load tests that simulates the uploading of files in the megabyte range
- Simulating video streaming
- Simulating high resolution image loading

Note that adding IP addresses in the case of (2) and (3) would increase CPU, memory and bandwidth limits from the load generation side only. This does not remove the possibility that these factors could be a bottleneck for the servers that are being tested.
