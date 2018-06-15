---
layout: classic-docs
title: Testing e-commerce/checkout processes
description: Things to consider when testing a site that processes payment.
categories: [how-to-tutorials]
order: 4
redirect_from: /knowledgebase/articles/747981-testing-a-checkout-or-e-commerce-process
---


If you are looking to perform a performance and load test on a website and will be including a checkout process as a user scenario within that test it’s important to keep some key things in mind.  This list is not meant to be all inclusive, but rather some key things we have seen as important to consider. [Data Stores](data-stores) will be essential to this type of test, so make sure you upload the appropriate information to include in your user scenario.



- Payments
  - Payment providers (credit cards, etc) often provide some type of QA/test environment with a number of possible payment methods. However, they usually prefer that they are not part of any performance test. Their QA environments typically are not scaled for that. Make sure you notify your payment provider if you want to run any such tests including payments.



- Email or other communication/confirmation
  - If you send email order receipts or confirmations, it is wise to set up a catch-all mailbox just to manage those test emails. Performance tests can generate thousands of emails and it’s generally a good idea to not have them all come to your main email. Large volumes of emails in a short period of time can often be interpreted as spam and will get filtered. In the long run this could lead to you being blacklisted as an email sender. Make sure your email configurations properly set up.
  - Also - if you send SMS to confirm anything, you might want to disable that specifically for performance tests. It can become costly to send thousands of text messages that a load test may produce.

- Inventory
  - Make sure your system holds enough items in stock of the things you want to purchase during your performance test. Again, it is very easy to use very high amounts of items. It is a good idea to configure specific items for performance tests that do not run out.



- Backend integrations (logistics etc)
  - If you have other backend integrations (logistics suppliers, print, invoicing, CRM, financials, etc.) make sure they are aware that you will run performance tests. It is good idea to set up a test sku that doesn’t have an inventory limit, product cost or selling price so that you mitigate any adverse effects down the line



- Test data
  - Since performance tests quickly consume test data in the thousands, make sure you have enough test data for the test to be reasonable. It could be as simple as usernames and product numbers or more complicated such as credit card limits. Just make sure you have enough information in your data store for the VUs.



- Tokens - CSRF Tokens, VIEWSTATE, etc.
  - The last thing that you may run into during creation/validation of your user scenario is the need to handle a token that is being passed for the current session.  Since the Chrome Extension will capture the token for your session, it's likely that it won't be valid when you run a test.  To handle these cases the value must be extracted, saved to a variable and concatenated in future requests.  We have a separate article on this topic with a theoretical code sample to explain the principal: Testing a Site with a CSRF token or VIEWSTATE



As we mentioned above, these are some of the key things to think about when testing these types of sites.
