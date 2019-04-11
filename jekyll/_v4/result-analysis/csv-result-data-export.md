---
layout: classic-docs
title: CSV result data export
description: Documentation for the CSV result export feature of Insights
categories: [result-analysis]
order: 7
---

Sometimes there's a need for extra processing of the result data. Could be to generate a report to hand to a manager or execute, or it could be to display data in a BI tool or dashboard for your team's consumption. It could also be to attach the results to a Jira issue or Trello card. This guide aims to give you the information you need to effectively work with the CSV result data that you can export from a test run.

## How to export the CSV data

You'll find the "Export data" feature in the top-right menu on the test result page:

![Insights: CSV result data export]({{ site.baseurl }}/assets/img/v4/result-analysis/csv-result-data-export/test-result-csv-export.png)

You can follow the progress of the export in the right sidebar. Once the CSV data export is complete you'll see a download link in the right sidebar:

![Insights: CSV result data export progress]({{ site.baseurl }}/assets/img/v4/result-analysis/csv-result-data-export/test-result-csv-export-progress.png)

The top-right menu item will also change to say "Download CSV":

![Insights: CSV result data export download]({{ site.baseurl }}/assets/img/v4/result-analysis/csv-result-data-export/test-result-csv-export-download.png)

## Structure of the CSV data

The CSV data has the following columns of data:

```
"time","metric","group_id","response_time","url","method","status","count","load_zone","tags"
```

Here's example data, units (where necessary) and description of each field present in the CSV data.

Column | Example | Data/Unit | Description
---------------------------------|-----------------|----------------------------------|---------------|
`time` | 2019-03-25 11:12:48.927949+00:00 | datetime (UTC) | The ISO-8601 timestamp when this data point was captured (when the HTTP request was made).
`metric` | http_req_duration | string | The metric name that this data point represents.
`group_id` | e1158ec16fa10dcfd16f4bd7309e2c55 | string | The ID of the k6 [`group()`](https://docs.k6.io/docs/tags-and-groups) from where this request was made.
`response_time` | 2.008016 | number (ms) | The HTTP response time of the request that this data point represents (if `count` > 1 then this will be an aggregate value, the average).
`url` | http://test.loadimpact.com/style.css | string | The URL requested.
`method` | GET | string | The HTTP method of the request that this data point represents.
`status` | 200 | number | The HTTP response status code of the request that this data point represents.
`count` | 1.0 | number | Number of samples that this data point represents (if > 1 `response_time` is an aggregate value).
`load_zone` | amazon:us:ashburn | string | The load zone where the request(s) was made from.
`tags` | staticAsset=true | string | Pipe (`|`) separated list of `name=value` tags as specified for the request in the script.
{: class="table table-striped"}

### Future

The exported CSV file currently only contains data from the primary HTTP response time metric (`http_req_duration`). In the future we'll expand the export feature with more HTTP data, WebSocket data, Checks data, Thresholds data as well as Custom metrics data.
