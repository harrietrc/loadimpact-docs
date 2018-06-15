---
layout: classic-docs
title: Why doesn't the proxy recorder work?
description: Reasons why the Load Impact proxy recorder may not be functioning and suggestions on how to fix it.
categories: [user-scenarios]
order: 8
redirect_from: /knowledgebase/articles/175466-why-doesn-t-the-proxy-recorder-work
---

***


If you’re facing difficulties with getting the Session Recorder to work, first take a look at this to learn how to configure your proxy settings. You also need to make sure you do not have any cached files for the site you are about to record.
When clearing your cache, though, make sure that you keep Load Impact’s cookies. Otherwise, you will be logged out of your session. Learn more about caching and cookie clearing here.

If you’ve tried the above and still can’t get it to work, here’s some things you could do to troubleshoot the problem:

Proxy change
The port number for the proxy changes every time you run it, so do remember to update it each time you use the proxy.

Timeout issues
(1) The proxy will only ever run for 30 minutes after you have pressed the “start recording” button. After that time has expired, you need to restart it (and probably change your proxy configuration to whatever new port number you’re told to use, though sometimes that can be the same as the old number)

(2) The proxy will stop automatically if it doesn’t see any traffic for 10 minutes. This means that if you start a recording, then go and take a coffee and come back 10 minutes later, you will have to restart the recording. It also means you can’t really spend more than 10 minutes on a single page during a recording session (unless there is e.g. AJAX requests happening regularly in the background while you are viewing the page)

Firewall
If you have a firewall running, do make sure that these IP addresses (especially our main loadimpact.com IP addresses) are able to access your site.

Port limitations
Check if your system/network administrators limit the ports accessible on your site. Load Impact randomly uses ports between 20000 and 21000 to record sessions, and it is necessary to open the entire range of ports for the recording duration.

Why do I get logged out of my account when I start a recording?

If you cleared your cache prior to starting your Session Recorder and got logged out after, is likely that you cleared all the cookies when clearing the cache. Load Impact uses cookies to keep you logged into your site, just as many websites do, so when you clear the cache, make sure that you do not clear the cookies. If, however, cookies are important to the website that you’re testing (i.e. your site uses login or similar, which requires the use of cookies in the transaction process), try clearing all the cookies except for the loadimpact.com ones. The other alternative would be to clear all the cookies related to the site which you want to test, which would have the same effect.
