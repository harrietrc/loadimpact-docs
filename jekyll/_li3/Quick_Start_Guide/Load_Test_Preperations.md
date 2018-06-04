---
layout: classic-docs
title: Load Impact 3.0 - Before You Begin
description: "Quick Start Guide - Load Test Preperations"
permalink: /3.0/Load_Test_Preperations
---

# Intro
In this guide, we will walk through the suggested steps to run a Load/Performance test. The best tests are the ones that simulate real user behavior. Before you move on to creating user scenarios, think about what your users are doing.  Realistically simulating how these users navigate your site, use your app or hit your API endpoints will give you the most actionable results.

A load test simulates users coming to your website, app or API, which produces metrics detailing web performance — such as user load time, accumulated load time, HTTP requests and many more.

Whether you’re testing your application for 100 users or 1 million, it’s important for you to know your performance testing goals and objectives prior to scripting your load tests. Some common performance testing objectives include:


- Determine if the application complies with contracts, regulations and service level agreements (SLAs)
- Detect performance bottlenecks to be tuned
- Assist the development team in determining the performance characteristics for various configuration options
- Provide input data for scalability and capacity-planning efforts
- Determine if the application is ready for deployment to production

## Calculating Virtual Users
Before getting started, we recommend looking into any analytics you may have for the following information:

Peak hourly sessions - on your busiest day, what is your busiest hour

Average session duration - In seconds, how long does each user stay on average

With these two metrics, you can determine the number of Virtual Users needed, using the following formula: VUs = (Peak Hourly Sessions * Average Session Duration in Seconds) / 3600.  Depending on your goals, you may want increase this number to provide a cushion beyond your expectations (i.e. 10%, 25%, etc.)

## Considerations when testing APIs
If you are testing an API endpoint, I would suggest going straight to our article on the topic ~~[here](INSERT LINK).~~  Testing API endpoints will require some different scripting configurations.  Since our Virtual Users are able to make multiple requests per second you can push them a little bit harder to hit some request/second goals you may have.

## Define your load test iterations:
- The first test (or series of tests) will be used as a baseline for performance
- The second test is to evaluate if you can increase performance
- The third test is used to tweak things and assure there are no issues

## Study/Review Analytics Data:
- Identify peak hours of traffic within the last year using Google analytics, then think about testing 10-50% above that peak number in order to ensure you have needed bandwidth for potential spikes in traffic at any given time
- If you want some concrete statistics from a historical perspective, go directly to your analytics reports


## Set Performance Benchmarks:
- Make sure your goals are realistic for your business and industry
- Have goals for load on the application that may go above and beyond stated requirements

Next, let's [create a user scenario]({{ site.baseurl }}/3.0/Create_User_Scenario)
