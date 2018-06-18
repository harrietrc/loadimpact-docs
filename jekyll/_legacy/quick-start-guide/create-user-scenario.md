---
layout: classic-docs
title: Creating a User Scenario
description: User scenarios are the journeys Virtual Users will take during a load test.  They are limited programming environments which allow you to do programmatic things.  They are expressed in Lua code.
categories: [quick-start-guide]
order: 2
---

***

A [user scenario]({{ site.baseurl }}/legacy/user-scenarios/what-is-a-user-scenario/) is a script, defining the requests performed by the simulated users during a load test. A good user scenario will be based on the credible story of an user or system performing a realistic task.

You can create your load script from scratch, or use the following custom tools to auto-generate your script.
- A [Google Chrome Extension]({{ site.baseurl }}/legacy/user-scenarios/load-impact-chrome-extension/) **(Most popular!)**
- A [Proxy Recorder]({{ site.baseurl }}/legacy/user-scenarios/load-impact-proxy-recorder/) (Good for mobile, non-chrome, scenarios with pop-ups/new windows)
- Submit a URL (this will only capture requests from the target domain of the URL submitted, no external requests will be included in the script)
- Writing a Lua script by hand

![Step 1](jekyll/assets/img/legacy/quick-start-guide/create-user-scenario/create-user-scenario-1.png)


After clicking new user scenario you will be prompted to select how you want to create the scenario:

![Step 2](jekyll/assets/img/legacy/quick-start-guide/create-user-scenario/create-user-scenario-2.png)




Once your script has been created, it will be available at the user scenario menu.

![Step 3](jekyll/assets/img/legacy/quick-start-guide/create-user-scenario/create-user-scenario-3.png)



Then, if needed, you can [script your user scenario]({{ site.baseurl }}/legacy/user-scenarios-scripting-examples/scripting-introduction/) to include any specific customization, including sleep time and randomization of events to make the test as realistic as possible.  Some of the most popular scripting methods include:

- [Parameterization of data (i.e. logins)]({{ site.baseurl }}/legacy/user-scenarios-scripting-examples/data-stores/)
- [Handling of dynamic authentication tokens]({{ site.baseurl }}/legacy/user-scenarios-scripting-examples/http-requests-wiht-csrf-viewstate-authentication-tokens)



Next, [let's create a test]({{ site.baseurl }}/legacy/quick-start-guide/create-a-test/)
