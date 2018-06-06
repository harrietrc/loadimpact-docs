---
layout: classic-docs
title: Load Impact 3.0 - Test Configuration
description: In depth guide on what a test configuation is and how to use it in Load Impact 3.0
permalink: /3.0/what-is-a-test-configuration
categories: [test-configuration]
order: 1
redirect_from:
  - /knowledgebase/articles/174522-what-is-a-test-configuration
  - /knowledgebase/topics/118842-test-configuration
---


A test configuration describes the load test you want to run – how many simulated virtual users the test should load your site, what those users should do on your site (what pages they should load on the site) and from which load zones (which geographic region to run each scenario from, allowing you to distribute the simulated load across different types of users coming from different geographic locations).

Start by click on "New Test" from your Insights Dashboard

Image: https://loadimpact.uservoice.com/assets/115272343/Image%202017-01-17%20at%201.11.19%20PM.png



In test configuration you have to supply User Scenarios to the site you want to test. You can configure your test to use one or more user scenarios. It is recommended to use our Chrome Extension or Proxy Recorder to create User Scenarios based on real user behavior.  Alternatively, you can enter a URL for a quick scenario.  URL generated scenarios will only load content from the target domain.

Image: https://loadimpact.uservoice.com/assets/115272502/Image%202017-01-17%20at%201.14.28%20PM.png

You are also able to assign the User Scenarios to different Load Zones using the drop down menu below the scenario name. You are able to add the same scenario multiple times if needed.  Each User Scenario will be given it's own Load Generator at minimum, you can have up to 10 individual User Scenarios in a single test.

Image: https://loadimpact.uservoice.com/assets/115274434/Image%202017-01-17%20at%201.41.14%20PM.png

After adding your User Scenarios you are able to further configure and change Traffic Simulation settings.

Virtual User Distribution across the scenarios added (if you have three or more scenarios in a single test). A Stress Test pattern is used in the example below.

Image: https://loadimpact.uservoice.com/assets/115274557/Image%202017-01-17%20at%201.41.49%20PM.png



Under Advanced Settings:

Multi-step ramping - Allows for granular control of how many Virtual Users are active, up to 10 steps. In the below picture, we use a stress test ramping pattern.  More patterns can be found in this article.

Image: https://loadimpact.uservoice.com/assets/115273780/Image%202017-01-17%20at%201.35.17%20PM.png




Network Emulation - Select a browser or network speeds to emulate for the entire test.  You are also able to set custom User Agents and Max Connections using our Load Script API on a per User Scenario basis

Source IP Multiplier - Up to 2x for Standard plans and above. This will increase the number of Load Generators in the test.  Virtual Users will be distributed as evenly as possible, based on current distribution.

Image: https://loadimpact.uservoice.com/assets/115274083/Image%202017-01-17%20at%201.37.04%20PM.png





Finally, we also have three optional configuration options for you to use:

Thresholds - Allow you to set a binary pass/fail criteria that can also automatically abort the test

Server Monitoring Agents - Using either our Open Source Agents or our integration with New Relic you are able to report back on various server side metrics for correlation in your test results in Load Impact

URL Grouping - Recommended for tests against systems that generate unique identifiers in the URL.  This allows you to group similar URLs together and stay organized when analyzing results.
