---
layout: classic-docs
title: Random data from Data Store
description: In this article we provide a method to get random data from a Data Store for use in a test.  Data stores can be used to parameterize a variety of information in your Load Test.
categories: [user-scenario-scripting-examples]
order: 16
redirect_from: /knowledgebase/articles/174987-random-url-from-a-data-store
---

***

#### Example data store content
In this example we will be getting random URLs from our Data Store.  You may have another use case, the same principle applies.

```
http://example.com/page1
http://example.com/page2
http://example.com/page3
http://example.com/page4
....
```
#### User scenario
The following scenario creates a request batch of five randomly selected URLs from the data store "URL data store".
{% highlight lua linenos %}
-- Seed RNG
math.randomseed(util.time())

 -- Open data store (this data store should have one URL per line)
dsname = "URL data store"
ds = datastore.open(dsname)

 -- Create parameters for http.request_batch() to load 5 random URLs
batch_params = {}
for i = 1, 5 do
  url = ds:get_random()
  table.insert(batch_params, {"GET", url[1]})
end

 -- Perform HTTP requests as a single batch request
 -- (This means the simulated client will behave like a browser and try to fetch several things in parallel)
local responses = http.request_batch(batch_params)

 -- Simulate user think time before script is reiterated
sleeptime = 100 + math.random(100)
client.sleep(sleeptime))
{% endhighlight %}
