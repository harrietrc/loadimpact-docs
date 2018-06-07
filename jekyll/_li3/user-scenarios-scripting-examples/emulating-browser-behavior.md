---
layout: classic-docs
title: Load Impact 3.0 - Emulating Browser Behavior
description: When running load tests it important to consider how a real user would make requests in the browser. Real browsers open multiple connections in parallel. The request_batch() allows you to emulate this behavior.
permalink: /3.0/emulating-browser-behavior
categories: [user-scenario-scripting-examples]
order: 7
redirect_from: /knowledgebase/articles/835728-simulating-browser-behavior
---

When a browser loads a HTML page it usually requests a whole series of resources/files – it loads first the main HTMLcode, then CSS files, images, Javascript files, and so on. It can even load other HTML files in iframe tags or via AJAXcalls.

Modern browsers load all these resources asynchronuously, using multiple network connections over which they issue several requests in parallel. This gets the whole web page loaded faster, and also puts a lot of extra stress on the web server, which has to deliver a lot of different resources in a short amount of time, across several network connections. If you want your load test to be realistic, you should try and make sure that your simulated clients emulate this browser behaviour as closely as possible. **If you have used the [chrome extension](load-impact-chrome-extension) to record your user scenario, you will notice that most requests are already in batches.**

You can use `http.request()` (or its wrappers, `http.get()` and `http.post()`) to issue a blocking HTTP request call that will load only a single resource, but if you want to take advantage of the ability of the Load Impact load generator to load multiple resources at once, across multiple network connections, you should use `http.request_batch()` to issue multiple request in parallel.

Here is an example that shows a load script that loads all the content on the page `http://test.loadimpact.com/` in a way that emulates a modern browser:
```
 http.get("http://test.loadimpact.com") -- Get the main HTML code for the page
 -- Get resources mentioned in the HTML code we just loaded
 http.request_batch({
     {"GET", "http://test.loadimpact.com/style.css" },
     {"GET", "http://test.loadimpact.com/favicon.ico" }
 })
 -- Get all the resources that are mentioned in the CSS
 http.request_batch({
     {"GET", "http://test.loadimpact.com/images/logo.png" }
 })
 ```
