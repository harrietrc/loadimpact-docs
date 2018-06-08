---
layout: classic-docs
title: URL Grouping
description: How to use Load Impact's URL Grouping feature
permalink: /3.0/url-grouping
categories: [test-configuration]
order: 8
redirect_from: /knowledgebase/articles/942696-url-grouping
---

***

What is URL grouping?
URL grouping allows you to group several URLs into one. The main reason to introduce this feature is that one data endpoint can be touched by thousands of similar, slightly varying, URLs and on their own these unique URLs are not valuable for test results analysis. We can instead group these URLs to make the test results more valuable.

Configuring URL groups
You can configure URL groups in your test configuration. A URL group is defined by:

A display name
A regular expression pattern, that is used to match URLs that should be part of a grouping.


The order of the URL groups is important: if a given URL matches multiple regular expressions it will be assigned to the first group in the list. You can reorder groups by clicking arrow buttons on the left side of the table.

Regular expressions can be difficult to read and write, so you can verify a URL against the regular expression when adding or editing a URL group.



Don't forget to save your test configuration after updating the URL group list!
URL grouping in test results

During the test execution all urls from the test script that match the given regular expression of a URL group will be combined and displayed as a single entry in the “URLs” overview section of the test results page. This enables you to optimize your test results, making them easier to analyze by reducing the number of URLs without losing the relevant information.
