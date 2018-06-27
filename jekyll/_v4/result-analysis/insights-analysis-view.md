---
layout: classic-docs
title: Insights analysis view
description: Documentation for the Insights analysis view
categories: [result-analysis]
order: 4
redirect_from:
  - /knowledgebase/articles/1172473-insights-analysis-view
  - /knowledgebase/articles/1172458-insights-overview
---

The analysis section is where you analyze selected metrics. It's divided into two parts, the top part contains a larger chart used for comparison and the bottom part contains all your metrics added from the breakdown.

The section will help you to:
- Get a quick overview of some metrics: VUs, response time and check failure aggregation.
- Compare and analyze metrics from the breakdown section.

![Insights: Analysis section overview]({{ site.baseurl }}/assets/img/v4/result-analysis/insights-analysis-section-overview.png)

*Note*: All metrics added to this area are saved and will stay persist when you return or share the results.

## Default metrics
By default, the comparison area contains VUs, response time and check failures. These three metrics are aggregated and represents the whole test run. Toggle them on and off by clicking the name - just like in the breakdown.

- Check failures: contains a summary of all checks to see when in the test the most checks fail.
- VUs: show the number of virtual users executing your load test simultaneously.
- Response time: show the aggregated response time of all the requests.

![Insights: Analysis section default metrics]({{ site.baseurl }}/assets/img/v4/result-analysis/insights-analysis-section-default-metrics.png)

## Added metrics
Below the comparison area you can find the metrics added from the breakdown. You can either compare them to each other by adding them to the comparison area or by hovering the chart. All charts in the analysis section share tooltip for easier comparison.

![Insights: Analysis section added metrics]({{ site.baseurl }}/assets/img/v4/result-analysis/insights-analysis-section-added-metrics.png)

To add a metric to the comparison area open the `more` menu for that metric and select `Add to comparison`.

![Insights: Analysis section how to add a metric]({{ site.baseurl }}/assets/img/v4/result-analysis/insights-analysis-section-howtoadd-metric.png)

Once added the metric will appear in the comparison area and you can compare it to the other metrics.

![Insights: Analysis section metrics comparison]({{ site.baseurl }}/assets/img/v4/result-analysis/insights-analysis-section-metrics-compare.png)

**Next**: [Insights: URL table]({{ site.baseurl }}{% link _v4/result-analysis/insights-url-table.md %})
