---
layout: classic-docs
title: How to never use the same login twice in a test
description: Methods to ensure you never use the same data from a data store more than once in a test
categories: [how-to-tutorials]
order: 2
redirect_from: /knowledgebase/articles/432349-how-to-never-use-the-same-user-login-twice-in-a-te
---

***

While this article uses login as an example, the same method can be used for any parameterized data that can not be used more than once in a test. 

It is not uncommon that you might want the VUs in your load test to all behave differently, and perhaps use different usernames and passwords when logging onto your site/application. Sometimes it is also necessary to prevent a certain login (or other information) to be used more than once in the same load test. This can be slightly tricky as every VU will (normally) repeat its user scenario multiple times during a load test, but it can be done.

First of all, some background information. A VU is basically an execution thread, and it will, when it is started, immediately start running its user scenario. When the user scenario ends, the VU will execute it again, and again, and again until the VU is shut down. A VU is shut down for one of 3 reasons: the load test ends, the configuration specifies that the load level should be ramped down, or the VU encounters some runtime error when executing its user scenario code

Each VU keeps track of how many times it has executed its user scenario. We call this the "repetition count". On its first iteration, the count is 1. It is then increased upon the start of every new iteration. This counter can be read by the user scenario code by calling the function client.get_repetition()

Now, you can make a VU execute its user scenario only once, if you want, by making sure your user scenario doesn't end before the load test does. This can be done e.g. by writing it in the form of an endless loop:
```
-- log in the user, then enter an endless loop that loads pages on the site
do_login()
while true
  load_something()
  load_something_more()
  client.sleep(math.random(20, 40))   -- simulate user think time
end
```
You could also just add a long sleep at the end of your user scenario:

`client.sleep(3600)`

However, this would mean you're not using all the VUs you have at your disposal throughout the test, and it would be difficult to know what load level the server is subjected to if clients just do one thing and then go to sleep (i.e. the traffic as experienced by the server might be the same at 100 concurrent clients as with 200 concurrent clients, depending on the ramp-up speed and how fast the clients complete their iterations)

Another option that is often the best solution to this kind of problem, is to calculate a unique number for each VU and script iteration combination, and then use that number to index a row in a data store that contains login credentials or whatever it is you just want to use once.

local unique_number = client.get_id() * 100 + client.get_repetition()

And then you use that to index your data store, e.g:
```
local row = ds:get(unique_number)
local username = row[1]
local password = row[2]
```
The above would mean you get a number that for VU #1 starts at 101 and increases with 1 for each repetition. VU #2 would get a number starting at 201 and increasing with 1 for each repetition, and so on. Each VU would be able to run up to 100 repetitions before getting into the number range of the next VU so as long as a repetition takes enough time that the earliest started VUs in the test do not manage to complete 100 of them, it will work fine. Your data store needs to have 100x as many rows as the max number of clients you will use in the test.

Simpler than using a data store is of course if you can pre-generate a large number of easily guessed usernames and passwords. Like "user1", "user2", "user3" and so on, combined with "password1", "password2", etc. Then you don't need a data store but can just let your user scenario create the correct login string and password like:
```
local username = 'user' .. tostring(unique_number)
local password = 'password' .. tostring(unique_number)
```

Note also, that this works fine for tests up to 500 VUs, but for larger tests there is a little added complexity as you will then have multiple load generators, each with its own VU count. client.get_id() might then return the same number for two different VUs in the test. In this case you have to also use client.get_load_generator_id()  when calculating your unique number.
