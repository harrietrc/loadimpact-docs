---
layout: classic-docs
title: How to convert HAR to k6 test
description: A tutorial on how to convert a HAR file to a k6 test
categories: [how-to-tutorials]
order: 4
---

k6 has a built-in HAR converter that will read HAR files and convert them to k6 scripts that can then be executed:

`k6 convert myfile.har`

The above command will make k6 read myfile.har, convert it into k6-compatible Javascript and then output it on stdout (you can use the `-O` option to save to a file, or just redirect the output on stdout to a file).

See the [Session recording/HAR support](https://docs.k6.io/docs/session-recording-har-support) docs for k6 for more information and examples.

## Tools that can output HAR files

The built-in HAR converter is very useful because HAR is a format supported by many other tools, whose output can now be used by k6 to control VU behavior. Here is a list of some useful tools that are able to output HAR files:

- [Chrome](https://www.google.com/chrome/) (browser)
- [Firefox](https://www.mozilla.org/en-US/firefox/) (browser)
- [Microsoft Edge](https://www.microsoft.com/en-us/windows/microsoft-edge) (browser)
- [Charles recording proxy](http://www.charlesproxy.com/) (HTTP proxy/recorder)
- [Dynatrace](https://www.dynatrace.com/) (APM tool)
- [Fiddler](http://www.telerik.com/fiddler) (HTTP proxy/recorder)
- [Webpagetest](http://www.webpagetest.org/) (Online web page tester)
- [Crossbrowsertesting](http://crossbrowsertesting.com/) (Online testing service)
- [pcap2har](https://github.com/andrewf/pcap2har) (Converts sniffer - e.g. Wireshark - pcap files to HAR)

See also [How to do a browser recording]({{ site.baseurl }}{% link _nextgen/how-to-tutorials/how-to-do-browser-recording.md %}) for a guide on recording a session in a web browser and exporting it to a HAR file for conversion to a k6 test.