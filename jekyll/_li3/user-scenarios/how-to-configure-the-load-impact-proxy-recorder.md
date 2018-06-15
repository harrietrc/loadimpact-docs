---
layout: classic-docs
title: Configuring the Load Impact Proxy Recorder
description: "How to: Congfiguring the Load Impact Proxy Recorder"
categories: [user-scenarios]
order: 4
redirect_from: /knowledgebase/articles/175465-how-do-i-configure-my-proxy-settings-for-the-proxy
---

***

In order to use our Proxy Recorder, you will need to configure your browser settings. You also need to make sure you do not have any cached files for the site you are about to record.
When clearing your cache, though, make sure that you keep Load Impact’s cookies. Otherwise, you will be logged out of your session. Learn more about caching and cookie clearing here.

When you have configured your browser, test your proxy settings to ensure that the settings are properly configured, then click on “Start Recording”.

Note: Remember to clear your cache once this is done. Steps written below.
Can't find your 5 digit port number? Scroll to the bottom for more help.

If you are having other issues, please review :  http://support.loadimpact.com/knowledgebase/articles/175466-why-doesn-t-the-proxy-recorder-work

For MAC OS X users
Configuring your proxy settings for Chrome (Mac)
Step 1
Select “Preferences”
Step 2
Click “Under the Hood” and select the “Change Proxy Settings” option. You should get the proxy dialogue.
Step 3
In the window that appears, check the “Web Proxy (HTTP)” and Secure Web Proxy (HTTPS)” options.
Step 4
In the field of “Web Proxy Server” enter “proxy.loadimpact.com”
(Note: You have to do this for BOTH the Web Proxy and Secure Web Proxy options)
Step 5
In the “Port” field, enter the 5 digit port number provided
Step 6
Confirm your changes by pressing “Ok” in both dialogs.

Configuring your proxy settings for Safari (Mac)
Step 1
Select Safari’s “Preferences”
Step 2
Click on the “Advanced” tab and “Change Settings” with the Proxies label. You should get the proxy dialogue.
Step 3
In the window that appears, check the “Web Proxy (HTTP)” and Secure Web Proxy (HTTPS)” options.
Step 4
In the field of “Web Proxy Server” enter “proxy.loadimpact.com”
(Note: You have to do this for BOTH the Web Proxy and Secure Web Proxy options)
Step 5
In the “Port” field, enter the 5 digit port number provided
Step 6
Confirm your changes by pressing “Ok” in both dialogs.

For Windows users
Configuring your proxy settings for Chrome (Windows)
Step 1
Select “Options” in the Toolbar Menu>“Under The Hood”>“Change Proxy Settings”>“LAN Settings”.
Step 2
Enter “proxy.loadimpact.com” as address.
Step 3
In the port field, enter the 5 digit port number provided.
Step 4
Confirm your changes.

Configuring your proxy settings for Firefox
Step 1
Open the “Tools” menu and select “Options”.
Step 2
Click “Advanced” and select the “Network” tab.
Step 3
Under the “Connection” label, click the “Settings” button.
Step 4
In the window that appears, select “Manual proxy configuration”.
Step 5
In the field of “HTTP proxy” enter “proxy.loadimpact.com”.
Step 6
In the “Port” field, enter the 5 digit port number provided
Step 7
Confirm your changes.

Configuring your proxy settings for Internet Explorer
Step 1
Open the “Tools” menu and select “Internet Options”.
Step 2
Select the “Connections” tab and press the “LAN Settings” button.
Step 3
Under the “Proxy server” settings, check the box labeled “Use a proxy server for your LAN”.
Step 4
In the “Address” field enter “proxy.loadimpact.com”.
Step 5
In the “Port” field, enter the 5 digit port number provided.
Step 6
Confirm your changes.

Clear your cache
(Essential for Session Recorder to record all requests, ensuring a proper load test is performed)
Clear cache
Step 1
Open the settings for “Temporary internet files”.
Step 2
Clear the cached files.
Final Step
Click “Go” on this page and record your session

Finding your 5 digit port number
(Note that this changes each time you run it, so remember to update it each time you use the proxy.)
