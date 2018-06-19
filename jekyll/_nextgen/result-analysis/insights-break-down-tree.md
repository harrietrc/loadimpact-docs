---
layout: classic-docs
title: Insights break down tree
description: Documentation for the Insights break down tree
categories: [result-analysis]
order: 3
redirect_from: /knowledgebase/articles/1172470-insights-breakdown-structure
---

The breakdown structure contains your test script in a visual way; most of the components (thresholds, groups, requests...) that you've added in your script will be represented in the same order in the breakdown. This section will help you to:

- Find failing errors: checks, thresholds and requests.
- Find the slowest/fastest groups and requests.
- Visualize custom metrics.
- Drilling down check, custom and request metrics.

![Insights: Breakdown structure]({{ site.baseurl }}/assets/img/nextgen/result-analysis/insights-breakdown-structure-full.png)

## Finding errors
In the top left of the breakdown you'll find a `status filter`. This filter will let you show or hide passed and failed items and the selected filter will only affect the breakdown and nothing else. The error filter will be applied to:

- Checks
- Thresholds
- Requests
- Groups

![Insights: Breakdown filter errors]({{ site.baseurl }}/assets/img/nextgen/result-analysis/insights-breakdown-filter-errors.png)

Moving down in the breakdown you'll see your added groups, checks and requests. To the left of each item in the breakdown you can see the status represented by a red or green border together with a summary of the error rate.

![Insights: Breakdown row status]({{ site.baseurl }}/assets/img/nextgen/result-analysis/insights-breakdown-row-status.png)

For a group the error rate will be the number of passed or failed checks and requests in that group(including any nested sub groups). Checks and requests will display a percentage of the success rate.

## Finding slowest/fastest groups and requests
To the right of each group or request you'll find an aggregated value for the `response time` for that item. This value is based on all requests in that group and will respect the aggregation method selected previously.

To find the slowest(or fastest one) simply click the `Load time` column header and it will sort the breakdown on descending `response time`.

![Insights: Breakdown sorting descending order]({{ site.baseurl }}/assets/img/nextgen/result-analysis/insights-breakdown-sorting-desc.png)

Click the header again to change to ascending order.

![Insights: Breakdown sorting ascending order]({{ site.baseurl }}/assets/img/nextgen/result-analysis/insights-breakdown-sorting-asc.png)

## Drilling down
When you find a group, URL or check that you want to see more information about click the row to expand the metrics section for that resource. If you want to see metrics aggregated for a group you'll find them in the `more` menu to the right of the `load time`.

![Insights: Breakdown more menu]({{ site.baseurl }}/assets/img/nextgen/result-analysis/insights-breakdown-more-menu.png)

### Requests metrics
![Insights: Requests metrics]({{ site.baseurl }}/assets/img/nextgen/result-analysis/insights-breakdown-reqs-metrics.png)

For a URL you can see the status distribution at the top of the expanded area and beneath you'll find a chart with metrics for that URL. Read more about [k6 HTTP metrics](https://docs.k6.io/docs/result-metrics#section-http-specific-built-in-metrics).

- Response time: based on the current aggregation
- Response time percentiles: mean, median, p95, p99
- Response timing: all [k6 HTTP metrics](https://docs.k6.io/docs/result-metrics#section-http-specific-built-in-metrics) for the request
- Response rate

![Insights: URL response time avg]({{ site.baseurl }}/assets/img/nextgen/result-analysis/insights-breakdown-url-avg-resp-time.png)

![Insights: URL response time percentiles]({{ site.baseurl }}/assets/img/nextgen/result-analysis/insights-breakdown-url-percentiles.png)

![Insights: URL response time parts]({{ site.baseurl }}/assets/img/nextgen/result-analysis/insights-breakdown-url-resp-time-parts.png)

![Insights: URL request rate]({{ site.baseurl }}/assets/img/nextgen/result-analysis/insights-breakdown-url-req-rate.png)

When you find something interesting that you want to compare with other metrics or keep for later you can **add the metric to the [analysis panel]({{ site.baseurl }}{% link _nextgen/result-analysis/insights-analysis-view.md %})**. Metrics added to the analysis panel will be persisted if you leave the results page and come back later.

### Group metrics
Group metrics are aggregated metrics based on all requests in that group. Because they behave as a request aggregation, you can visualize the same type of charts than a URL metric.

### Checks
![Insights: Checks selection]({{ site.baseurl }}/assets/img/nextgen/result-analysis/insights-breakdown-checks-top.png)
![Insights: Checks]({{ site.baseurl }}/assets/img/nextgen/result-analysis/insights-breakdown-checks.png)

The metric chart for a check contains passes and failures. This will give you a good overview of when a check is failing during the test run.

### Custom metrics and thresholds
Custom metrics and thresholds created in your test script will be available to the root group in the breakdown. You could visualize the metric values (based on the current aggregation) and metric percentiles.

![Insights: Custom metrics and Thresholds selection]({{ site.baseurl }}/assets/img/nextgen/result-analysis/insights-breakdown-custom-metrics-thresholds-top.png)

![Insights: Custom metrics and Thresholds]({{ site.baseurl }}/assets/img/nextgen/result-analysis/insights-breakdown-custom-metrics-thresholds.png)

See next: [Insights: analysis view]({{ site.baseurl }}{% link _nextgen/result-analysis/insights-analysis-view.md %})