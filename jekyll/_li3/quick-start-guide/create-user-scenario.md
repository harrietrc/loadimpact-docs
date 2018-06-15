---
layout: classic-docs
title: Creating a User Scenario
description: User scenarios are the journeys Virtual Users will take during a load test.  They are limited programming environments which allow you to do programmatic things.  They are expressed in Lua code.
categories: [quick-start-guide]
order: 2
---

***

A user scenario is a script, defining the requests performed by the simulated users during a load test. A good user scenario will be based on the credible story of an user or system performing a realistic task.

You can create your load script from scratch, or use the following custom tools to auto-generate your script.
- A Google Chrome Extension **(Most popular!)**
- A Proxy Recorder (Good for mobile, non-chrome, scenarios with pop-ups/new windows)
- Submit a URL (this will only capture requests from the target domain of the URL submitted, no external requests will be included in the script)
- Writing a Lua script by hand

Image: https://loadimpact.uservoice.com/assets/120010129/Image%202017-04-18%20at%2011.16.19%20AM.png

After clicking new user scenario you will be prompted to select how you want to create the scenario:

Image: https://loadimpact.uservoice.com/assets/120011371/Image%202017-04-21%20at%2012.44.37%20PM.png



Once your script has been created, it will be available at the user scenario menu.

Image: https://loadimpact.uservoice.com/assets/120011869/Image%202017-04-21%20at%2012.54.35%20PM.png


Then, if needed, you can script your user scenario to include any specific customization, including sleep time and randomization of events to make the test as realistic as possible.  Some of the most popular scripting methods include:

[Parameterization of data (i.e. logins)](Data Store article)
[Handling of dynamic authentication tokens](CSRF article)

Image: https://loadimpact.uservoice.com/assets/120010192/Image%202017-04-18%20at%2011.19.16%20AM.png

Next, let's create a test
