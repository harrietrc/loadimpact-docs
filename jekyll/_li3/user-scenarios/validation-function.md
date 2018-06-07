---
layout: classic-docs
title: Load Impact 3.0 - What does the validation function do?
description: User Scenario Validation allows you to send a single Virtual User through your user scenario to test for for any errors. During validation, sleep times are ignored.
permalink: /3.0/validation-function
categories: [user-scenario]
order: 6
redirect_from: /knowledgebase/articles/174261-what-does-the-validation-function-do
---

The validation function runs a **single VU** through the user scenario using our Load Generators.  If the single VU is able to complete the scenario without errors then the script is validated.  If the VU encounters any errors those are logged in the status window on the right of the page.  Every time you validate a script, the scenario is **automatically saved.**

Whenever you are satisfied with your script, instead of saving it directly, you should always make a habit of validating it first. All sleeps are removed from validations in order to make it as quick as possible. If the script can complete without any errors you will see the message “Validation finished!”. If there were any errors during the test run you will be notified and given an indication of what might be wrong.

A syntax error in a Lua script is an example of what would cause an error. Note that you can also get URL warnings in your validation. Warnings do not prevent the script from completing, so the validation will still be successful, but they point out things you might want to be aware of and possibly change. An example of a warning in a validation is if a URL in the script returns HTTP response code 404 (Not Found). If you are dealing with forms or logins, it's very common to have to handle authentication tokens.  If these are not handled, you will have URL warnings.

Making a habit of always validating a script before saving it is a good way of avoiding unnecessary failed tests that takes much more time to initialize than a quick validation. Note though that just because it validates successfully is no guarantee it will complete a large scale test. For example, there are errors that will only appear once the server is not behaving as expected anymore that can cause i.e. when extracting strings from the response, a failed response would produce a nil value. This would be a sign of a performance problem an could cause the test to be aborted if it persisted.
