---
layout: classic-docs
title: Insights URL table
description: Documentation for the Insights URL table
categories: [result-analysis]
order: 5
redirect_from: /knowledgebase/articles/1825249-insights-url-table
---

Sometimes you just want to get a raw overview of the performance of the URLs in your test. For this, you can switch to the URL-table view by pressing the button between the performance overview and filters box:

![Insights: URL table tab]({{ site.baseurl }}/assets/img/nextgen/result-analysis/insights-url-table-tab.png)

The URL-table will help you to:
- Get an overview of all the URLs tested in your k6 test.
- Identify which URLs are returning good and/or bad status codes.
- Sort the URLs by different column values.
- Filter the URLs by [k6 tags](https://docs.k6.io/docs/tags-and-groups).

URLs are, unlike the breakdown view, grouped by status code. This means that if the same URL returned two different statuses during the test, like 204 and 500, it will get two separate rows in the URL table.

![Insights: URL table]({{ site.baseurl }}/assets/img/nextgen/result-analysis/insights-url-table-full.png)

URLs can stack up quite quickly in large test. For those cases, sorting and/or filtering comes in handy:

![Insights: URL table filter and sorting]({{ site.baseurl }}/assets/img/nextgen/result-analysis/insights-url-table-filter-sorting.png)