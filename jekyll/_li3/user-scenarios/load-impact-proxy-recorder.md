---
layout: classic-docs
title: Load Impact 3.0 - Load Impact Proxy Recorder
description: "The Load Impact Proxy Recorder"
permalink: /3.0/load-impact-proxy-recorder
categories: [user-scenarios]
order: 5
redirect_from: /knowledgebase/articles/175462-what-is-the-proxy-recorder-and-how-does-it-work
---

A Google Chrome extension makes recording a user scenario easier! Read more about it here: [Load Impact Chrome Extension](load-impact-chrome-extension)


Our Proxy Recorder is a nifty tool (User scenarios > New user scenario > Choose Proxy Recorder) that assists in creating a User scenario that simulates a user visiting several pages on a site. The way it works is you set your browser to use a HTTP proxy located on Load Impact’s servers. This proxy then logs all actions made by your browser and finally converts the log into a User scenario. This is a very good way to make sure all necessary requests ends up in the scenario as all requests the browser makes will be caught by the proxy, both foreground requests and background ones like those made through AJAX calls. A script recorded this way will emulate the execution of javascript even though it just mimics the resulting requests. The proxy recorder will try to guess what requests belong to the same page and group them together accordingly. This does not always work satisfactorily 100% of the time, so you might want to check how the recorder grouped the requests and make adjustments manually if necessary.

How to use our Proxy Recorder
Select the “User scenarios” Tab on the left menu
Click on “New user scenario”
Select "Choose"  on Proxy Recorder
Configure your proxy in the "Proxy recorder setup" pop-up window
Click "Start proxy recording"



Note: Remember to change back the settings in your browser once your Proxy Recording is over, so as to not use the proxy anymore.

If you get logged out from your account after you start the Proxy Recorder, you likely have a cookie problem. You can solve this here

For more information on how to configure your proxy settings for the Session Recorder, please refer here.
