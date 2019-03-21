---
layout: classic-docs
title: How do I share tests results with others?
description: Different ways to share your Load Impact v4.0 results with others on your team
categories: [results-analysis]
order: 7
---

***

#### Public URL
Once a new test has started to run it is immediately possible to share the test in its current status by clicking on the three dots in the top right corner -> Share these results.

![Sharing results]({{ site.baseurl }}/assets/img/v4/result-analysis/insights-results-sharing/ShareResults20190321.png)


This unique generated Public URL will allow access to this specific test only and will be active and accessible at any future date, as long as test result is not delted.


Public URL is contained in this format :
`https://app.loadimpact.com/k6/anonymous/xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx`

**Note:** This URL provides access to the test result and there is no way to revoke access.  Be sure to only share this URL with those necessary.  If you have sensitive data, you may want to invite those users as a team member to your organization.

#### Team Members

If your test result is sensitive and you do not want to share the result publicly, [Team Members]({{ site.baseurl }}/4.0/team-project-management/adding-team-members/) can be added as read/write members of the project the test is a part of. If these Team Members already have access or are Admins - you can simply share the URL with them directly. It is in this format :
`https://app.loadimpact.com/k6/tests/xxxxxx`
<!--stackedit_data:
eyJoaXN0b3J5IjpbLTkyMjE3ODc4NCwtMTcwMjgyMzA5MF19
-->