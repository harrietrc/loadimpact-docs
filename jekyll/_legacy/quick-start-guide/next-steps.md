---
layout: classic-docs
title: Next Steps
description: Suggestions on next steps to take your load or performance testing to the next level.
categories: [quick-start-guide]
order: 5
---

***

Congratulations! By now you have likely finished running and analyzing your first set of tests. You probably have some interesting, actionable results. However, you've only scratched the surface of performance testing with Load Impact.

Our most successful clients often take their performance testing to the next level by taking advantage of the following:

### Building more realistic user scenarios

Read our [Scripting Guide]({{ site.baseurl }}/legacy/user-scenarios-scripting-examples/scripting-introduction/) and the [Load Script API](https://loadimpact.com/load-script-api) to make your tests even more realistic. You have access to most of the Lua standard library and are able to do programmatic things during a test/script.

### Getting more metrics in tests

You get many great metrics from our tests, but you can get many more with [Server Monitoring]({{ site.baseurl }}/legacy/monitoring-agents/load-impacts-open-source-monitoring-agents/). Using our Server Monitoring Agents or our integration with [New Relic]({{ site.baseurl }}/legacy/monitoring-agents/load-impacts-open-source-monitoring-agents/), you can paint a complete picture of what's happening in your application and on your server during a test. Does VU Load Time unexpectedly increase? Maybe that correlated with 100 percent utilization of the CPU on the target machine. These monitoring agents allow you to correlate that data during and after your test run.

### Collaborating with other team members

Your Load Impact subscription is tied to what we call an [Organization]({{ site.baseurl }}/legacy/organizations-projects-team-management/organizations/). You can invite your [Team Members]({{ site.baseurl }}/legacy/organizations-projects-team-management/adding-team-members/) to be part of your Load Impact account to share data, run tests and create user scenarios within an Organization. As the admin of an account you can control what those users are able to access. Maybe you need to invite a junior engineer to help on a project or your CTO to view your app's performance improvement. This feature allows you to grant access the way you want it.  For larger companies, you may wish to create multiple organizations each with their own subscription.

### Staying organized
[Projects ]({{ site.baseurl }}/legacy/organizations-projects-team-management/projects/)act as a foldering system in Load Impact.  They roll up under an Organization and [Team Members]({{ site.baseurl }}/legacy/organizations-projects-team-management/adding-team-members/) can be added to them as admins or read/write members.  Whether you're a manager who wants to assign certain tasks to your team, an engineer who is testing multiple functionalities through different tests, or a consultant who needs to keep their work with different companies organized, Projects are a great way to stay organized and keep yourself away from data overload.

### Scheduling tests to run automatically

Running a single test can give you some great information. Taking action on that information and comparing it to the next test run will tell you if performance has regressed. Our most successful users will [automate tests]({{ site.baseurl }}/legacy/integrations/automating-load-testing/) or [schedule tests]({{ site.baseurl }}/legacy/test-configuration/scheduling-tests/) to run automatically and build a [performance trend ]({{ site.baseurl }}/legacy/test-results/interpreting-the-performance-trending-graph/)over time. This has helped them identify performance issues before they become problems.



As you continue this journey to become a performance testing expert - we recommend reading our [scripting examples]({{ site.baseurl }}/legacy/user-scenario-scripting-examples/).
