---
layout: classic-docs
title: Load Impact Proxy Recorder
description: "The Load Impact Proxy Recorder"
categories: [user-scenarios]
order: 5
redirect_from:
  - /knowledgebase/articles/175462-what-is-the-proxy-recorder-and-how-does-it-work
  - /knowledgebase/articles/175465-how-do-i-configure-my-proxy-settings-for-the-sessi
  - /knowledgebase/articles/175466-why-doesn-t-the-proxy-recorder-wor
---

***

_Consider: Our Google Chrome extension makes recording a user scenario easier! Read more about it here: [Chrome Extension.]({{ site.baseurl }}/3.0/user-scenarios/load-impact-chrome-extension)_


Our Proxy Recorder is a tool (User scenarios > New user scenario > Choose Proxy Recorder) that assists in creating [realistic user scenarios]({{ site.baseurl }}/3.0/user-scenarios/simulating-realistic-load-using-load-impact/) to simulate users browsing realistically.

It works by setting your browser to use a HTTP proxy located on Load Impact’s servers. The proxy logs all actions made by your browser and finally converts the log into a user scenario. It essentially creates a man-in-the-middle environment.

This is a very good way to make sure all necessary requests ends up in the scenario as all requests the browser makes will be caught by the proxy, both foreground requests and background ones like those made through AJAX calls. A script recorded this way will emulate the execution of javascript even though it just mimics the resulting requests. The proxy recorder will try to guess what requests belong to the same page and group them together accordingly. This does not always work satisfactorily 100% of the time, so you might want to check how the recorder grouped the requests and make adjustments manually if necessary.

**How to use our Proxy Recorder**
1. Clear your cache (but keep Load Impact Cookies)
2. Select the “User scenarios” Tab on the left menu
3. Click on “New user scenario”
4. Select "Choose"  on Proxy Recorder
5. Configure your browsers HTTP/HTTPS proxy settings to point at proxy.loadimpact.com and the 5 digit port noted
6. Click "Start proxy recording"

_Note: Remember to change back the settings in your browser once your Proxy Recording is over, so as to not use the proxy anymore._

### Having Trouble?
Here’s some things you could do to troubleshoot the problem:

**Proxy change**
The port number for the proxy changes every time you run it, so do remember to update it each time you use the proxy.

**Timeout issues**
(1) The proxy will only ever run for 30 minutes after you have pressed the “start recording” button. After that time has expired, you need to restart it (and probably change your proxy configuration to whatever new port number you’re told to use, though sometimes that can be the same as the old number)

(2) The proxy will stop automatically if it doesn’t see any traffic for 10 minutes. This means that if you start a recording, then go and take a coffee and come back 10 minutes later, you will have to restart the recording. It also means you can’t really spend more than 10 minutes on a single page during a recording session (unless there is e.g. AJAX requests happening regularly in the background while you are viewing the page)

**Firewall**
If you have a firewall running, do make sure that these IP addresses (especially our main loadimpact.com IP addresses) are able to access your site.

**Port limitations**
Check if your system/network administrators limit the ports accessible on your site. Load Impact randomly uses ports between 20000 and 21000 to record sessions, and it is necessary to open the entire range of ports for the recording duration.

**Security limitations**
In some cases, the unsigned security certificate is rejected by the server based on your security rules.  In this case it's very likely that you won't be able to use the proxy recorder, however you will need to work with your internal teams to see if any exception can be made.

**Why do I get logged out of my account when I start a recording?**

If you cleared your cache prior to starting your Session Recorder and got logged out after, is likely that you cleared all the cookies when clearing the cache. Load Impact uses cookies to keep you logged into your site, just as many websites do, so when you clear the cache, make sure that you do not clear the cookies. If, however, cookies are important to the website that you’re testing (i.e. your site uses login or similar, which requires the use of cookies in the transaction process), try clearing all the cookies except for the loadimpact.com ones. The other alternative would be to clear all the cookies related to the site which you want to test, which would have the same effect.
