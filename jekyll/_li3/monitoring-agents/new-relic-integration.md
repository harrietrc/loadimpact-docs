---
layout: classic-docs
title: New Relic APM in your Load Impact Test
description: Load Impact's integration with New Relic allows you to view data from New Relic's APM.
permalink: /3.0/new-relic-integration
categories: [monitoring-agents]
order: 2
redirect_from: /knowledgebase/articles/752553-monitoring-new-relic-metrics-while-running-a-load
---

***

Monitoring New Relic Server and Application metrics in real time while running a Load Impact load test gives you a clear picture of your application and infrastructure’s performance under load. This is a helpful aid when looking for or verifying performance problems.

If you are a New Relic client and have the Application Performance Monitoring (APM) product, the metrics you can collect anything that New Relic exposes through their API (which is a lot, and will vary based on your set up), including CPU and APDEX.

Begin by adding your New Relic API key to your Load Impact account. You can [find your API key](https://docs.newrelic.com/docs/apis/rest-api-v2/requirements/rest-api-key) in your New Relic account, go to: Account settings > Integrations > data sharing > API access. To add your API key to Load Impact, in the left side bar, click Integrations then "New Relic"
Image: https://loadimpact.uservoice.com/assets/89046396/Screen%20Shot%202015-10-15%20at%2011.51.31%20AM.png

Next, add your API key in the area shown:

Image: https://loadimpact.uservoice.com/assets/89046414/Screen%20Shot%202015-10-15%20at%2011.51.42%20AM.png

Once your API key has been validated by our system, we will add all your New Relic applications/servers to the list under Monitoring on the left sidebar menu. Your API key will be validated nearly instantly.  If you don't see any agents after adding your key, you can utilize this tool from New Relic to investigate/see the response that your API key will generate. If you don't see any applications listed, please check that your installations are correct in New Relic

To collect metrics from New Relic during a test, simply go to the advanced test configuration page, under Server monitoring click "add monitoring" and select the desired New Relic application/server you wish to monitor during the test. If you receive an error when adding a metric, please double check that your subscription with New Relic allows you to access their full API.

**Note:** The number of applications/severs you can monitor is limited by your subscription. To know how many New Relic applications/servers you can include, please review our plans.
