---
layout: classic-docs
title: Webapp and Website Testing Methodology
description: A testing methodology to help you get started with testing your website or webapp with Load Impact
categories: [testing-methodologies]
order: 2
---

***

<h1>Background</h1>

If you have already read our [Getting Started Methodology]({{ site.baseurl }}/4.0/testing-methodologies/application-testing-methodology/) similar concepts are repeated here. This document will touch on some more specific aspects to help you start testing a real user journey of a website or webapp. Testing of these systems generally involve simulating real user behavior and complex actions in some logical flow or journey, for this reason we have combined this into a single document. As you start your testing we recommend that you _start small and iterate, iterate, iterate._


## Preparations
Preparation is the most important step before any testing, here are things find answers to in order to improve your testing outcomes.

- What am I testing? Specifically, what are my users doing?
  - _You may already have a good idea on what your users do on a regular basis. You should look to you analytics tools to confirm your suspicions. You do not need to test every single page or action of your system, rather focus on the most used or critical ones._
- Do I need to account for any dynamic data or complex actions?
  - _If your users are just making GET requests to your site or app, you probably don't need to do much here. Conversely, if users are able to login, submit form data, etc. then there are more things to think about_
    - _If you are handling logins or forms, you will need to consider how much test data you need to create to feed the tests_
    - _You should also consider if any of this data can be reused. Virtual Users are concurrent, so they will create a large number of total sessions._
- What environment am I testing?
  - _Are you testing production? Staging?_
    - _If staging, does it mimic production?_
    - _If production, do you know when you have the least amount of traffic to impact the smallest number of users?_
- What external services are in use on my system?
  - _Do you utilize CDNs? Are marketing trackers present on your site?_
    - _In most cases you will want to remove these requests. You may have a valid reason for wanting to test your CDN. CDN's usually charge based on usage. Thus, a load test would increase your costs with them._
  - How many virtual users should I use?
    - _This is dependent on your needs, we recommend calculating the number of users you get both on average and during a peak period_
      - _You may want to test to a certain percentage beyond these numbers, based on discussions with other users, we've seen 15-30% as typical._
    - _Utilize this formula with your analytics data to calculate Virtual User needs_
      - `VUs = (Hourly Sessions * Average Session Duration in Seconds) / 3600`

***

## Recording your intital script
Load Impact offers a few ways for you to speed up your test scripting by allowing you to record a user journey by browsing like a user would. You can do this by using our Chrome extension or by generating a HAR file and converting that to a test script. If you have done preparations above, this should be very straight forward to complete and will give you a head start on scripting.

**Do**:

- Browse like a user would
- Take natural pauses that users would take to consume page content
- Focus on the most common use cases, rather than all the possible use cases
- Take note of pages where forms/logins occur, you will likely need to complete some scripting there

_Do not_:

- Visit every page in one journey
- Click every possible option
- Navigate as fast as you can
- Navigate away your actual site or application

Once you have completed your recording, you can move on to editing, as necessary.

***

## Editing your script (as necessary)

Based on what you discovered during the preparation phase, you may need to deal with some complex actions such as logging in, dealing with forms, or something else. The actions you took during recording your script will be that of the session you recorded. This presents the following potential problems:

- The login used is the one from your session. **Real users will not reuse the same login.**
- If the login form (or other forms) use any type of CSRF token, that token is likely not valid beyond that sessions. **Real users will not use the same token or session ID**
- All of the POST/PUT/DELETE/etc. requests are sending the same data. **In most cases, real users will not do this.** (maybe this can help you learn about server side caching though!)

All of these issues are easily solved (with token handling being the trickiest for most users).

<div class="callout callout-warning" role="alert">
When parameterizing data, you MUST trigger your test using k6 from the command line. The Load Impact Web GUI does not support parameterization from external files. For more information using k6 refer to <a href="/4.0/getting-started/hello-world/" class="alert-link">this article.</a> If, for purposes of evaluating, you want to stick with the web interface, we recommend creating arrays with the necessary data in your script. This will allow you to build the necessary proof of concept within the Web GUI.
</div>

- For login, you'll probably want to include a CSV or JSON file containing usernames or passwords.
  - Examples here: [Parameterizing from a JSON or CSV file]({{ site.baseurl}}/4.0/test-scripting/examples/#data-filesparameterization)
- For CSRF tokens, you will need to: Identify the page where the token is created, save the response body of that page, find the token through the DOM or a regex match, save that to a variable, cocatenate the variable in future requests
  - Examples here: [Data Correlation in your test script]({{ site.baseurl }}/4.0/test-scripting/examples/#correlation)
- For other forms, such as a search or name fields, you can pull the data from an external source like you did with the login. You may prefer to generate the data inline if it doesn't matter what is submitted.  There are some good implementations of this on [stackoverflow](https://stackoverflow.com/questions/1349404/generate-random-string-characters-in-javascript) that you may want to utilize.

### Other scripting considerations

#### Removal of external requests
As mentioned in the preparation stage, you may have various external requests happening for a normal visitor on your site. While these requests do impact the user experience on the front end, they have no impact on performance of your system on our backend. We highly recommend removing all third party requests from your test script for the following reasons:

- Third party requests have no impact on your backend Performance
- Third parties may throttle requests, skewing your results
- Third parties add a lot of noise to your test result data which makes understanding results harder
- It may be against the TOS with the third party to run a test against their system
- In the case of a CDN, it may cost you money to run a test (Valid test cases for CDN do exist! So keep these resources if you want to specifically understand something about the CDN)

If you are using the built in HAR file converter locally, you can use the built in flags of `--only` or `--skip` to control what requests convert into your script. You may also simply delete the external requests as necessary.  More information on converting HAR files can be found [here]({{ site.baseurl }}/4.0/how-to-tutorials/how-to-convert-har-to-k6-test/)

#### Advanced Logic
Since your test cases are expressed as real code, you can do programmatic things. This varies greatly based on needs, but we have seen users utilize IF statements and other logic to instruct virtual users take different paths. While it's impossible to cover every case with examples here, it's important to note the flexiblity of test scripts written in real code.

#### Modularization
Depending on how you want to organize your test scripts, you may find it convenient to organize your test and scripts into smaller parts. For example, if every single user, no matter the journey had to log into your app, you may want to dedicate a short script just to handle your login process. Since modularization of scripts is supported in k6, you simply would need to include this in your script and call the appropriate function to complete that action.

For more information on modularizing your test, please refer to [this article]({{ site.baseurl }}/4.0/test-scripting/modules-imports/)

Once you are done with scripting related items, you are finished with the most tedious parts of testing. Do note that maintenance of your scripts is a normal necessity, so as you develop your site or app, be sure to keep those changes in mind and how they may impact your test scripts. This is especially important if testing is part of any automation or CI pipeline.

***

## Running your tests

### Background
By now, you have finished scripting and are ready to run your tests. The behavior of your tests is actually controlled by the options section of your script or by passing different flags from the command line to control test behavior. When you first start, the recommended approach is to update the options portion of your script as needed, between test runs as this can be done when using both the scripting Web UI or when triggering tests from the command line.


### Test in a systematic way
The best results come when you run your tests in a systematic way, where you can compare data between test runs and a minimal amount of variables are changed between tests. For this reason, we recommend the following testing pattern:

1. Baseline tests
  * A test with a small number of VUs meant to produce response times for a system experiencing favorable conditions
  * Typically run for 5-10 minutes and establishes a baseline for comparison
2. Stress tests
  * A test that steps through different levels of load and will highlight where performance problems happen
  * You should expect to iterate this test multiple times as you enter a test-> analyze-> make changes-> repeat pattern
3. Load tests
  * After you experience a stable stress test result, you should run a load test at your targets to confirm the system can handle your goals
4. Other tests as required
  * You may have other traffic patterns you may want to test for. This may be from different load zones or different ramping profiles. Continue testing here as required.
5. Continuous and Regression Testing
   Many users start running tests as part of a CI pipeline to monitor for performance regressions. Since you've created your test scripts, most of the work is already done!

### Common questions related to test execution

- How long should I run my test?
  - _You should run your test long enough for all virtual users to complete 2-5 complete iterations of your test script. If your user journey takes 5 minutes to complete, 10+ minutes would be a reasonable test length._
- How many VUs should I use?
  - _You should base this off your normal and peak traffic levels. Use the formula: `VUs = (Peak Hourly Sessions * Average Session Duration in Seconds) / 3600`_
  - _**This will vary based on your test, needs, and what you are trying to learn.** You should refer to our article on [ramping configurations]({{ site.baseurl }}/4.0/test-scripting/load-test-ramping-configurations/) for more examples of the different patterns._
  - _For a baseline test, you want a low enough number not to cause any stress on your system. For most, probably less than 100._
  - _For the other tests, you should use data on how many users you have normally and any business goals you may have for concurrency._

***

## Other things to think about for e-commerce specific flows

- You likely have various systems connected to the front end you are testing.
  - Payments
    - In most cases you should not be testing your payment provider (unless you have explicit permission)
  - Email confirmations
    - Do any actions generate emails?  Make sure they are handled appropraitely.
    - Avoid sending emails to a non existent mailbox and avoid sending emails to a single person. Try to disconnect this, if possible.
  - Inventory
    - Do the SKUs/products being tested have enough inventory?
  - Backend integrations
    - Make sure to disconnect from any logistics/billing/invoicing systems or correctly flag your orders as a test.


***

## See Also:
- [Getting Started Methodology]({{ site.baseurl }}/4.0/testing-methodologies/application-testing-methodology/)
- [Parameterizing from a JSON or CSV file]({{ site.baseurl}}/4.0/test-scripting/examples/#data-filesparameterization)
- [Data Correlation in your test script]({{ site.baseurl }}/4.0/test-scripting/examples/#correlation)
- [Converting a HAR file]({{ site.baseurl }}/4.0/how-to-tutorials/how-to-convert-har-to-k6-test/)
- [Module Imports]({{ site.baseurl }}/4.0/test-scripting/modules-imports/)
- [Ramping configurations]({{ site.baseurl }}/4.0/test-scripting/load-test-ramping-configurations/)
