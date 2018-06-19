---
layout: classic-docs
title: How do I share results?
description: Ways to share results with your team
categories: [test-results]
order: 7
redirect_from: /knowledgebase/articles/553950-public-url-sharing-test-results
---

***

#### Public URL
Once a new test has started to run it is immediately possible to share the test in its current status by clicking on the three dots in the top right corner -> Share these results.

![Performance trending graph]({{ site.baseurl }}/assets/img/legacy/test-result/sharing-results/sharing-results.png)


This unique generated Public URL will allow access to this specific test only and will be active and accessible at any future date.


Public URL is contained in the format :
`https://app.loadimpact.com/load-test/xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx`

Upon exiting a test run and logging out of your account, the unique Public URL will remain static and visible and will continue to link to the specific test run.


#### Team Members

If your test result is sensitive and you do not want to share the result publicly, [Team Members]({{ site.baseurl }}/legacy/organizations-projects-team-management/adding-team-members/) can be added as read/write members of the project the test is a part of.  If these Team Members already have access or are Admins - you can simply share the URL with them directly.  It is in this format :
`https://app.loadimpact.com/tests/XXXXXXX/runs/X`
