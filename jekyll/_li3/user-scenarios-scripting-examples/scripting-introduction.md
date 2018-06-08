---
layout: classic-docs
title: Scripting Introduction
description: Introduction to scripting in Lua for Load Impact 3.0
permalink: /3.0/scripting-introduction
categories: [user-scenario-scripting-examples]
order: 1
redirect_from:
  - /knowledgebase/topics/117699-user-scenario-scripting
  - /knowledgebase/articles/835701-scripting-introduction
  - /knowledgebase/topics/23898-scripting-examples
---

***

This section needs an update - plan to combine user scenario scripting and scripting examples into one larger section


In order to create much more complex behavior from the simulated clients in a load test, you might want to take a look at the scripting functionality of Load Impact. By using the modern, high-level programming language Lua together with the Load Impact API you can make your simulated clients perform very advanced tasks on the site being tested.

The load script is a program that describes what each simulated client should do during the load test. Every simulated client will run its own execution thread, executing the load script until it runs to completion. After that, the client will run the load script again and again, repeating it infinitely until the load test is finished and/or the client is shut down (the client may be shut down before the load test is completed in case the user configures the test to ramp down the load level at some point during the test).

In this section we will provide you with a set of examples on how to create load scripts that perform several common actions.

- Basics of loading resources with Load Impact
- Delay between requests
- HTTP headers
- Verifying resources content
- Conditional logic
- Simulating browser behavior
- Simulating complex user behavior
- ... more examples
