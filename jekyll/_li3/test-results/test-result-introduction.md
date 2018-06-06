---
layout: classic-docs
title: Load Impact 3.0 - Test Results
description: Introduction on understanding and interpreting your Load Impact load and performance test results
permalink: /3.0/test-result-introduction
categories: [test-results]
order: 1
redirect_from:
  - /knowledgebase/articles/173368-test-result-introduction
  - /knowledgebase/topics/118848-test-results
---
NEEDS REVIEW.



The view test page is where you can watch the progress of a running load test, or look at the results of a previously run load test. This is a quick introduction to the elements and features on the view test page and what they mean.


At the top of the page, you will see the name of the test, the target URL (the site being tested), and the public URL of the test result. Below is a screenshot of how that can look.

Image: https://loadimpact.uservoice.com/assets/81641799/1.JPG
In this case, the test was an automatic one, which means the name of the test is rather long – “Auto generated from...”. The Target URL (the site to be tested) was “http://loadimpact.com” and also, there is a Public URL created for this test – that is a URL you can give your friends or colleagues to let them view your test results without them having to be logged on to loadimpact.com.

Note: when you are logged on with your Load Impact user account, your test results are private and visible to you only, but anyone who knows the Public URL to a test will be able to view the same test, so be careful whom you give it to. Also, of course, if you put the Public URL somewhere where a search engine can see it, the whole world will probably be able to access your test result.


If we move further down the page, there is the test progress section:


This section contains a couple of controls and a general status text box, telling you what the test is currently doing. On the left side you see a drop-down menu that allows you to control the statistics information further down on the page. On this screenshot we have opened the dropdown menu and can see that we have two choices: we can either display statistics for the load zone (the load generator that generates the traffic to your site) “Ashburn”, or for the whole world (“Aggregated, World”). The default is to display data for the whole world. In this particular case, we only generated traffic from the Ashburn load zone, so it doesn’t matter if we select Ashburn or the whole world. In a test that uses multiple load zones, however, it can be interesting to see which load zone generates the most requests etc.

The “Status” text field tells us that the test has been finished, and the progress bar is full, which also indicates that the test is still running. Finally, there is an Abort button that can be used to abort a running test.


Next comes the general statistics section that tells you things about the current load level your site is subjected to. For a finished test, the figures represent the final load level just before the test ended. Note also that the load zone control drop-down menu described earlier controls what is displayed here. If you run a load test that uses multiple load zones you can choose to display statistics for only one of those load zones here, or you can display statistics for all of them (“Aggregated, World”).



Maps are always nice. Below the statistics section you will find the map and console section. This section is collapsible so you can hide it if you want. It is open by default for tests that are running, and closed by default for tests that have finished, and it shows you the geographical location of the target system (as specified by the Target URL). The target system is represented by a small archery target icon. You can also see the geographical location of the load generator zones, where the load test traffic is coming from.


Between each active load zone and the target system there will be a green line that represents data traffic. The more traffic, the thicker the line gets. If you run a test that uses multiple load zones this means that you will be able to see during the test which of the load zones that generate more traffic, and which generate less. After the test has finished, the green lines will show you how the traffic flows appeared just before the test ended.


Charts!
Now we’re getting to the really fun parts. The charts section is collapsible, but who would want to hide it? Here is where you can visualize measurement results from your test. The default chart is shown on the screenshot below; It plots the User load time and the number of Active clients in the same chart, creating a chart that gives you a rough idea of how fast your site is loading at various load levels.


The “Add graph” button allows you to add more metrics to the same chart, or to add more charts besides the default one. You also have a corresponding “Remove graph” button that removes individual graphs (metrics) from a chart (and the chart itself if it has nothing left to plot).

Clicking the “Switch view” button makes all charts half as wide so you can display two charts next to each other horizontally.

The charting functionality is very powerful and allows you to combine different charts and graphs in almost any way you want. You can plot several different types of metrics in the same chart, for easy correlation between completely different metrics (See What metrics are reported for a URL? for more information about metrics). There is also zoom functionality that lets you zoom in on different parts of the whole data set.

Below the charts you will find a list of pages found in your user scenario(s). A page can be seen as a bunch of URLs grouped together, forming what a visitor would experience as a page on your site.


When you want to know what individual URLs/resources the test has downloaded from your site, you can look at the URL list section. This, too, is collapsible and it shows you every individual object/resource that was loaded from your server during the test. Like most data on the page, the URL list is updated dynamically throughout the course of the load test. Below is a screenshot showing only the first three URLs in an URL list section:


Along with each URL you get information about how many successful (where the server responded with a 200-response) and how many failed requests there were. Also, you get information about the lowest and highest load times seen for the particular URL, aswell as the latest reported average load time.

These statistics are reported per each URL, individual load zone, and individual user scenario, which means that you can e.g. check the load time for a certain URL and a certain load zone, or you can choose global statistics for a certainURL by selecting the results from “Aggregated, World”.

If you have failed transactions for a URL, you can click the small (+) icon beside the URL to expand a more detailed statistics view for that particular URL. In that detailed view you also have a button that lets you add a graph with results for the URL.

See what metrics are reported for a URL? for more info about the URLs section and about URL metrics.
