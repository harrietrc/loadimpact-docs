---
layout: classic-docs
title: Tests Aborted by System
description: The most common reasons why your test may be aborted by the system.
categories: [troubleshooting]
order: 2
redirect_from: /knowledgebase/articles/802215-test-aborted-by-system
---

***

It's possible that your test will be aborted by the system. Below is a list of reasons this could occur from most common to least with suggested fixes:

### 1. Fatal Script Error (Most Common)

**Reason** - Script runs in such a way it can not complete.

_Solution_: Ensure you validate your scripts before running.  If your script validates, this actually could be a sign of a performance issue.  For example, if you were to be saving the response from a request(maybe to capture a token) and that request fails, the capture of the token will not occur, resulting in a `nil` value. This `nil` value will create a fatal script error. We suggest checking the content and doing some error handling in this case.

### 2. Script is too memory or CPU intensive (Fairly Common)

**Reason** - Load Generator Memory or CPU metric is too high because the test is too intensive for the amount of load generators you have selected. If load generator CPU metric metrics exceeds 50 percent, performance will start to degrade and skew your test results.

_Solutions_:

1. Increase the number of load generators for your script by adding more scenarios or using an IP multiplier. If you're already using your max multiplier, please reach out to support for a quote to increase.
You should also check that your scripts are properly paced using the client.sleep function. Pacing tends to be a common problem when testing APIs.

2. Use URL grouping to lower the number of URLs being stored in the result dataset.  This generally is only a problem if you are reporting back 5,000+

3. If you are logging a large amount of data, consider commenting that out for test runs.  You can log during a test, but keep it to a reasonable level.  Too much logging will create a larger data set for the Load Generator to manage and can quickly become too large for you to use.  Consider using a custom metric if you are counting certain responses.

### 3. Load Generator fails to boot/initialize (Rare)

**Reason** - Various, likely due to an issue on the load generator instance or at the Data Center as a whole.

_Solution_:  Change the Load Zone for your test. Issues with individual instances will correct themselves as we refresh our Load Generators regularly throughout the day. For data center issues, these can take longer to correct as it is outside our control. You can check the status of our system on our Status Page.

### 4. Load Generator instance fails while test is running (Extremely Rare)

**Reason**: Various, similar to reason 3 above except the generator fails while running your test.

_Solution_: Change your Load Zone for your test.  If the issue is with our instance, it will be corrected upon our next refresh.


The test will be aborted whenever these situations occur. These tests will receive the status “Aborted (by system)” and your credits will be refunded for that test run.
