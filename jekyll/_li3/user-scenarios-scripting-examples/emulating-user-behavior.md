---
layout: classic-docs
title: Load Impact 3.0 - Emulating User Behavior
description: Example script on how to weight users behavior within a user scenario
permalink: /3.0/emulating-user-behavior
categories: [user-scenario-scripting-examples]
order: 20
redirect_from: /knowledgebase/articles/174619-emulating-user-behaviour
---

If we have 3 pages on our site that users can visit, and we know how many times each page is visited by the users, we can calculate the “weight” of each page, and create a user scenario that simulates the same kind of visitor pattern on our site that real users exhibit. This is an example of how to do that.

First, we have to find out how popular each of our three pages are. This can be done by looking at statistics from e.g. Google Analytics to see how many times each page was visited the last month or so. Let’s say we have these figures:

Page            | Number of visits
----------------|-----------------
/               | 8453
/news.php       | 1843
/contacts.php   | 277
Total pageloads | 10573

***

Adding together the number of page loads for all individual pages we get 10,573 total page loads. If we divide each individual number by the total, we get the “weight” (percentage) for that particular page – i.e. how big the chance is that a random page load on the site happens to load that particular page.

Page            | Number of visits | Weight
----------------|------------------|--------------------------------
/               | 8453             | 0.799 (79.9% of all page loads)
/news.php       | 1843             | 0.174 (17.4% of all page loads)
/contacts.php   | 277              | 0.026 (2.6% of all page loads)
Total pageloads | 10573            | 1.0

***

Now we can create our user scenario that replicates real traffic on our site – i.e. that will exercise our web server in the same way real users do.

```
-- We create functions for each of the three pages. Calling one of these functions
-- will result in the simulated client loading all the resources necessary for rendering
-- the page. I.e. the client will perform one page load of that particular page.
--
-- Main/start page
local page1 = function()
  -- First load HTML code
  http.request_batch({
      "http://test.loadimpact.com/"
  })
  -- When HTML code is done loading, start loading other resources that are
  -- referred to in the HTML code, emulating the load order a real browser uses
  http.request_batch({
      "http://test.loadimpact.com/style.css",
      "http://test.loadimpact.com/images/logo.png"
  })
end
--
-- /news.php page
local page2 = function()
  -- This example page consist of only one resource - the main HTML code for the page
  http.request_batch({
      "http://test.loadimpact.com/news.php"
  })
end
--
-- /contacts.php page
local page3 = function()
  -- This example page consist of only one resource - the main HTML code for the page
  http.request_batch({
      "http://test.loadimpact.com/contacts.php"
  })
end
--
--
-- Get a random page to load, using our page weights that we found out earlier
--
-- Generate a value in the range 0-1
local randval = math.random()
-- Find out which page to load
if randval <= 0.799 then
  -- 79.9% chance that we load page1
  page1()
elseif randval <= (0.799 + 0.174) then
  -- 17.4% chance that page2 gets loaded
  page2()
else
  -- ...and the rest of the time (2.7%), page3 gets loaded
  page3()
end
```
