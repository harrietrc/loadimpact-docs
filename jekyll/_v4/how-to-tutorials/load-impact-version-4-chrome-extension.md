---
layout: classic-docs
title: Using the Load Impact Version 4.0 Chrome Extension
description: "How do I use the Load Impact Chrome Extension to record user scenarios in version 4.0?"
categories: [how-to-tutorials]
order: 1
---

***

<h1>Background</h1>

The Load Impact Chrome Extension allows you to generate the bulk of your test scripts simply by browsing like a user would on your site or web app.  The script created gives you a foundation which you can further edit, as required.

The Load Impact Chrome extension will capture everything – every single HTTP(s) request being loaded into the browser as you click – including ads, images, documents, etc., so you get a far more accurate read of what’s going on. Just press “record”, start browsing and when complete, the script will automatically upload to your Load Impact account.

_**Consider this:** The Chrome extension will not record other tabs or pop up windows. If you need to capture this information, you should check out [converting from a HAR file]({{ site.baseurl }}/4.0/how-to-tutorials/how-to-convert-har-to-k6-test/)._

*Note:* Before you begin, please be sure to force refresh the Load Impact app to ensure you are on the most recent version

Here's how to start:

1. Install the [Load Impact Chrome Extension through the Chrome Web Store ](https://chrome.google.com/webstore/detail/load-impact-k6-test-scrip/docmmckkhiefiadappjepjllcoemijpj)or by navigating to "User Scenarios" on loadimpact.com and select New user scenario.
2. Start recording your session by clicking "Start recording". At any point, you can choose to stop, pause or reset the recording
3. Once you've started recording, begin to browse and behave as a typical user would. Click stop when you are done.
4. As long as you are logged in, you will be brought into the platform and are able to give your script a name and assign it to the proper Project and Organization.
5. You can now edit your script as necessary.  Load Impact's in app IDE will update in real time to alert you of any syntax errors.



Based on your needs, you may want to further edit the script to parameterize data, handle tokens, or add more advanced business logic.
