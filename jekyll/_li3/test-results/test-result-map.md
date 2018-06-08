---
layout: classic-docs
title: What does the map show?
description: Explanation of the map shown within the Load Impact test result dataset
permalink: /3.0/test-result-map
categories: [test-results]
order: 4
redirect_from: /knowledgebase/articles/173853-what-does-the-map-show
---

***


The map shows the geographical location of the target system and the load generators used in the test. You can see on the map the origin of the load generator/s you have configured in your test configuration.

Please Note:  At times, the location identified could be incorrect. This is typically due to the geolocation data on file for that IP address or because another request was made first.  i.e. if your test starts with a request against google, the map will likely show the target server as Mountainview, California. You can safely ignore any incorrect display of location

<!-- need to adjust this path.  The actual is: http://localhost:4000/docs/3.0/jekyll/assets/img/li3/test-result/test-result-map.jpg the 3.0 prefix is causing it to point in the wrong direction-->

![Load Impact Test Result Map](jekyll/assets/img/li3/test-result/test-result-map.jpg)
