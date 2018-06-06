---
layout: classic-docs
title: Load Impact 3.0 - Auto Generated URL scenarios
description: "How does the URL auto-generation feature work?"
permalink: /3.0/how-does-the-url-auto-generation-feature-work
categories: [user-scenarios]
order: 4
redirect_from: /knowledgebase/articles/174237-how-does-the-auto-generate-feature-work
---

Load Impact provides three tools for you to get a basic script quickly; the “Auto-generate” feature, the [Chrome Extension](load-impact-chrome-extension) and the Proxy Recorder.

Image: https://loadimpact.uservoice.com/assets/81665904/3.JPG

The "Auto-generate" feature utilizes the publicly available analysis tool – the Page analyzer. It loads a single page, parses the HTML and CSS to find external objects needed to render the page, then generates a load script that loads the page objects in the same order that a real browser client would load them. This results in a simple load script with only two request batches, one with just the Target URL (loading the HTML for the page) and one with all the dependent objects that are needed to fully render that page.

Image: https://loadimpact.uservoice.com/assets/81666006/2.JPG

Note that JavaScript included in the page is not executed, so any resources loaded by JavaScript through AJAX calls will not be included in the script.

Useful to know: The “Auto-generate” method is the one used to generate a script when there is no User scenario specified in the Test configuration setup, or when starting a quick test from the test results page without having specified any Test configuration at all. It is also used for running anonymous tests from the loadimpact.com start page by users that are not logged into Load Impact.



Image: https://loadimpact.uservoice.com/assets/81375153/Capture.JPG



Having trouble with the URL Generator? Certain pages are unable to be correctly analyzed for scenario creation.  When this occurs, we recommend using our Chrome Extension or Proxy Recorder to create your scenarios.

**Limitations**: Since the URL Generator simply loads the page and dependent objects, it's not very good at simulating real user behavior. Because of this, we recommend using one of the aforementioned tools to generate realistic user scenarios after running some simple tests with the URL Generator.
