---
layout: classic-docs
title: How to automate load tests with Load Impact/k6
description: How to automate your load tests with Load Impact and k6
categories: [integrations]
order: 1
---

***
TODO

CURRENT V3 INTRO BELOW.  full article here: /legacy/integrations/automating-load-testing/


Automating load testing as part of a CI Pipeline/build process is becoming increasingly popular and a best practice recommendation.  How often you run these automated tests will depend on the individual needs of your organization. Our general recommendation is [with your nightly builds](http://blog.loadimpact.com/how-often-you-should-load-test) as that seems to be the closest to a one-size-fits-all approach. If you are using a Continuous Integration tool or want to build something yourself, we recommend one of the options below.  You can also [schedule tests]({{ site.baseurl }}/legacy/test-configuration/scheduling-tests/) to run at regular intervals within our tool.

Before you start with either method below, you should have a test that you want to automate as well as [thresholds]({{ site.baseurl }}/legacy/test-configuration/thresholds/) set up to be your pass/fail criteria. The exact criteria will depend on your needs, but you should think about:

- What's an acceptable response time for a resource/page/API call?
- What's an acceptable failure rate?
- Are any failures acceptable?
- What are my most critical requests?
