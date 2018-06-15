---
layout: classic-docs
title: How do I override public DNS?
description: Overriding the public DNS record allows you to test different environments without overhauling your user scenario.  This is handy when you need to run the same scenario against staging, production or even an environment spun up for only the test.
categories: [user-scenario]
order: 14
redirect_from: /knowledgebase/articles/174527-how-do-i-override-public-dns
---

***

If you are looking to override public DNS settings for you domain, you can do that with the util.dns_remap function. This is equivalent to modifying the hosts file on operating systems to override DNS lookups.
```
-- Remap loadimpact.com to IP 195.178.177.179
util.dns_remap("loadimpact.com", "195.178.177.179")

-- All requests to loadimpact.com will now be sent to 195.178.177.179
local response = http.request_batch({
    {"GET", "http://loadimpact.com/"}
})

log.info("IP used: " .. response[1].ip)
```
Note: If any other port than the default port 80 is targeted the port number has to be specified. For https this means the port 443 must be specified.

Example:
```
-- Make sure clients that load things from loadimpact.com (port 80 and 443) connects to 123.123.123.123

util.dns_remap("loadimpact.com", "123.123.123.123")

util.dns_remap("loadimpact.com:443", "123.123.123.123")
```
