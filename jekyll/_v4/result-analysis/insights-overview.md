---
layout: classic-docs
title: Insights overview
description: An overview of Load Impact Insights
categories: [result-analysis]
order: 0
redirect_from: /knowledgebase/articles/1172458-k6-insights-overview
---

Insights is designed to be the perfect companion to [k6](https://k6.io/), a convenient and powerful solution for storing and analyzing your k6 test results.

Continuous use of Insights will also enable the performance trending functionality&nbsp;to keep track of how the performance of your system changes over time. This is good for spotting performance regressions before they become a larger problems, ensuring you are within SLAs for requests and more, depending on your use case/need.

The Insights page is divided into these 5 sections:
- Performance overview
- Filters
- Test breakdown structure
- Analysis
- URL table

## Performance overview
The top of the page provides a breadcrumb menu and a quick test overview.

The breadcrumb menu allows to quickly navigate between the latest runs of the test, the test page or all the tests in the current project.

The test overview shows the test length, number of maximum VUs, and the status of the test. If the test is running; live metrics such as the&nbsp;current number of active VUs and time will be displayed. When the test is done, the status will be updated based on the results of your [thresholds](https://docs.k6.io/docs/thresholds).

![Test run navigation]({{ site.baseurl }}/assets/img/v4/result-analysis/test-run-navigation.png)

Performance overview panel contains:
- a chart with VU ramping, response time and requests/second metrics
- the number of failed thresholds
- the number of failed checks
- the number of failed requests

![Insights: Performance overview]({{ site.baseurl }}/assets/img/v4/result-analysis/insights-performance-overview.png)

*Note*: Checks are different than thresholds and will not mark your test as failed; see [how to setup thresholds to determine the test outcome](https://docs.k6.io/docs/thresholds).

### Filters

The filter section will help you to:

- Filter results by user tags and system tags.
- Change data aggregation that is used in test breakdown structure and analysis panels

![Insights: filters]({{ site.baseurl }}/assets/img/v4/result-analysis/insights-filters.png)

### Test breakdown structure

The breakdown tree section contains your test script in a visual way; most of the components (thresholds, groups, requests...) that you've added in your script will be represented in the same order in the breakdown structure. This section will help you to:

- Find failing errors: checks, thresholds and requests.
- Find the slowest/fastest groups and requests.
- Visualize custom metrics.
- Drilling down check, custom and request metrics.

![Insights: test breakdown structure]({{ site.baseurl }}/assets/img/v4/result-analysis/insights-breakdown-structure.png)

### Analysis

The analysis section is where you analyze selected metrics. The section will help you to:

- Get a quick overview of some metrics: VUs, response time and check failure aggregation.
- Visualise custom metrics.
- Compare and analyze metrics from the breakdown section.

![Insights: analysis section]({{ site.baseurl }}/assets/img/v4/result-analysis/insights-analysis-section.png)

### URL Table

The URL-table section is where you can get a raw overview of the URLs in your test.&nbsp; It will help you to:

- Get an overview of all the URLs tested in your k6 test.
- Identify which URLs are returning good and/or bad status codes.
- Sort the URLs by different column values.
- Filter the URLs by [k6 tags](https://docs.k6.io/docs/tags-and-groups).

![Insights: URL table]({{ site.baseurl }}/assets/img/v4/result-analysis/insights-url-table.png)

See more:
- [Insights: performance overview]({{ site.baseurl }}{% link _v4/result-analysis/insights-performance-overview.md %})
- [Insights: filters]({{ site.baseurl }}{% link _v4/result-analysis/insights-filters.md %})
- [Insights: breakdown tree view]({{ site.baseurl }}{% link _v4/result-analysis/insights-break-down-tree.md %})
- [Insights: analysis view]({{ site.baseurl }}{% link _v4/result-analysis/insights-analysis-view.md %})
- [Insights: URL table]({{ site.baseurl }}{% link _v4/result-analysis/insights-url-table.md %})