---
layout: classic-docs
title: Load Impact 4.0 Trial Guide
description: Tutorial to utilize all the features within Load Impact 4.0, both in the cloud and locally with it's companion, k6.
categories: [getting-started]
order: 9
redirect_from: /knowledgebase/articles/738684-load-testing-with-bluemix-and-load-impact
---

***

<h1>Purpose</h1>
The purpose of this document is to aid you in exploring the primary features available in Load Impact 4.0 as you evaluate our service, build your proof of concept, or just explore the world of load and performance testing. Load Impact 4.0 is built around an open source load generator and command line interface. This load generator is named k6. k6 itself is built in Go and allows you to express your test cases as real code, JavaScript ES6. At the core, with everything as code, you gain full control over how your tests run, and what is happening during tests.

This guide will begin by covering the WebUI and what types of tests you can run using it. The WebUI is a good place to start, create tests with less complexity, or build your proof of concept. This guide then transitions into using k6 as a Command Line Interface(CLI) to the Load Impact platform covering running a test using your local machine and streaming result data to Load Impact Insights and triggering a cloud test on Load Impact’s infrastructure from the command line.

This flexibility of enabling testing in the local environment is what the majority of our customers have sought out. This enables them to shift left, start testing earlier in the dev process, work in a familiar environment, use their IDE of choice, take advantage of existing version control systems, and more.

- TOC
{:toc}

***

### URL Test

The simplest way to run your first load test is to run a URL test from the Load Impact User Interface.

When you click on **Create New Test** you’ll see this screen:

![Figure 1]({{ site.baseurl }}/assets/img/v4/getting-started/load-impact-trial-guide/create-new-test-choices.png)


_Figure 1: Test creation options_


**Select Test URLs**, you will then proceed to this screen:

![Figure 2]({{ site.baseurl }}/assets/img/v4/getting-started/load-impact-trial-guide/create-url-test.png)

_Figure 2, Test URL input screen_


**Input** the target URL for the site, endpoint or system you want to test.

Upon run/save and run, our URL analyzer visits the URL entered. We analyze the requests being made to completely load the page, including external requests. We create a script from this analysis and use that to run your test. This test is similar to a user visiting that URL, loading all the contents, then closing the tab.

It’s advised that you use the option to filter domains. This allows you to specify which domains you **want to be included** when generating the script. Generally speaking, you should not test third party resources. For example, trackers, analytic tools, advertising pixels, etc. Depending on your need, you may or may not want to include any Content Delivery Network (CDN) resources.

**Domain filtering example**: if you are testing test.loadimpact.com, you would use loadimpact.com as the domain filter.

Enter your URLs and test parameters then click the **SAVE AND RUN** button to start your test.

Next, take a look at your **test results**:

![Figure 3]({{ site.baseurl }}/assets/img/v4/getting-started/load-impact-trial-guide/test-result-overview.png)

_Figure 3, The performance status section provides a high level overview of the performance of your test. You should consider the following when analyzing your results._

- This test ramps to 50 Virtual Users over 1 minute, stays at 50 Virtual Users for 1 minute, ramps down to 0 Virtual Users over 1 minute.
- If Thresholds were configured, the number of passed `Thresholds / Total Thresholds`
  - **Failed Thresholds return non zero exit codes**
- If Checks were configured, the number of passing `Checks / Total Checks`
  - Checks **will not** fail a test, nor can they halt execution
  - Checks are often used with a Threshold and Custom Metrics
    - e.g. `"check_failure_rate": ["rate<0.3"]`
- The number of URLs with a status code `<400 / Total requests`

**Some Ideal performance result correlations**
- Flat response times with rising Virtual Users
- Increasing throughput/request rate with rising Virtual Users
- Low number of errors/error rate not increasing with rising Virtual users

Additional resources can be found in the [Results Analysis](#results-analysis) section at the bottom of this page.

***

### Creating a test from Browser Activity (Using the Chrome Recorder)

When running performance tests, you should make your test cases as realistic as possible. An easy way to do this is to record a browser session. Use the [Load Impact k6 Test Script Recorder](https://chrome.google.com/webstore/detail/load-impact-k6-test-scrip/docmmckkhiefiadappjepjllcoemijpj), available in the Chrome Web Store. The Chrome Recorder essentially generates a HAR file from browser activity and then uses the same converter built into k6 to generate a script. The result is a very thorough script with many details such as headers, cookies and of course, the requests being made.

Click on **Create New Test** and select **Browser recording**, as shown in Figure 1 above.

Follow the steps as shown in the Load Impact UI to download the chrome extension, start a recording, stop recording, save the test script, and run the test. Then, check your test results.

***

### Creating a test from Browser Activity (Converting a HAR file)

A second way to create realistic tests is to capture activity in your browser and save it as a HAR file. Here is a list of [tools that can output HAR files]({{ site.baseurl }}/4.0/how-to-tutorials/how-to-convert-har-to-k6-test/#tools-that-can-output-har-files) from another document in this knowledge base. The script created from converting a HAR file and generated by the Chrome Recorder should be nearly identical.  The HAR file converter is preferred when needing to record HTTP requests outside of Chrome.

**Also note:** k6 has a built-in HAR converter that will read HAR files and convert them to k6 test scripts that can then be executed. Refer to [this document]({{ site.baseurl }}/4.0/how-to-tutorials/how-to-convert-har-to-k6-test/) on converting HAR files locally.

Click on **Create New Test** and select **HAR file upload**, as shown in Figure 1 above.


![Figure 4]({{ site.baseurl }}/assets/img/v4/getting-started/load-impact-trial-guide/create-har-file-test.png)

_Figure 4, Browser recording input_

The **HAR file upload** allows you to take a recorded browser session, where you emulated real user behavior, and convert that into a k6 script. The requests made in this session will be identical to the ones you made - so if you logged into a system, that will also be attempted. If your system uses any tokens to prevent CSRF attacks, it’s likely that you will see some 400 level responses (since the token has since expired).

Similar to the URL analyzer, you can also filter domains. We advise you to take the same care as mentioned above to limit the test to domains you are able to and want to test.

Simply **upload your HAR file**, set your test parameters and then click **SAVE AND RUN.**

Check your test results, as before.

***

### Creating a Test Script in Javascript

One of the powerful features of Load Impact 4.0 is the ability to create test scripts directly in JavaScript. There’s an in-app editor (IDE) where you can create, edit, and run your test scripts right in the Load Impact SaaS platform. This means you don’t need to download and install k6 to create or run your initial tests as you evaluate our platform.

Click on **Create New Test** and select **Scripting** as shown on the right side of Figure 1 above. You will see that **the in-app script editor is pre-populated with a sample test script**. You can edit this script to meet your needs.

![Figure 5]({{ site.baseurl }}/assets/img/v4/getting-started/load-impact-trial-guide/create-javascript-scripted-test.png)
_Figure 5, In app scripting_


Take note of the script here; it defines your test configuration as well as the requests made. It is exactly what our platform reads and executes for your test. Within the options section, you can define things such as ramping patterns or load zone distribution. The default function serves as the main entry point for Virtual Users. That is, Virtual Users will iterate over this function until they ramp down or the test ends. You can change the GET request to your domain if you would like. Finally, this is a JavaScript environment, so you can express complex behaviors and actions as code. Make any edits you would like then click **SAVE AND RUN** to start your test. The Virtual Users will follow the ramping configuration specified.

***

### Using k6 locally with the Load Impact Cloud

To realize the full value out of Load Impact 4.0, download and install k6 on your local machine. This enables you to run tests that are local behind your firewall, local with result streaming into our cloud service, or on the Load Impact cloud service with results in the cloud all by using the command line.

By working locally, you can use your favorite IDE to write your scripts, create custom modules or libraries to share with your team, and utilize any version control you already have in place. This knowledge base contains sample scripts and code snippets to help you get started.

Aside from where the load generates from and the results output, the script itself remains unchanged between execution modes. This allows you to shift testing left to be available in the development cycle.

***


### Downloading k6

k6 is available directly from our GitHub repository. You may also utilize the following install methods:

<div class="row platform-tabs">
    <div class="col-12">
        <ul class="nav nav-pills mb-3" role="tablist">
            <li class="nav-item">
                <a class="nav-link active" id="platform-tabs-link-linux" data-toggle="pill" href="#platform-tabs-content-linux" role="tab">Linux</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" id="platform-tabs-link-macos" data-toggle="pill" href="#platform-tabs-content-macos" role="tab">Mac</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" id="platform-tabs-link-windows" data-toggle="pill" href="#platform-tabs-content-windows" role="tab">Windows</a>
            </li>
        </ul>
        <div class="tab-content">
            <div class="tab-pane fade show active" id="platform-tabs-content-linux" role="tabpanel" aria-labelledby="platform-tabs-link-linux">
                <p>
                    <h4>Debian/Ubuntu</h4>
                    <pre><code>$ sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv-keys 379CE192D401AB61
$ echo "deb https://dl.bintray.com/loadimpact/deb stable main" | sudo tee -a /etc/apt/sources.list
$ sudo apt-get update
$ sudo apt-get install k6</code></pre>
                </p>
                <p>
                    <h4>Redhat/CentOS</h4>
                    <pre><code>$ wget https://bintray.com/loadimpact/rpm/rpm -O bintray-loadimpact-rpm.repo
$ sudo mv bintray-loadimpact-rpm.repo /etc/yum.repos.d/
$ sudo yum install k6</code></pre>
                </p>
            </div>
            <div class="tab-pane fade" id="platform-tabs-content-macos" role="tabpanel" aria-labelledby="platform-tabs-link-macos">
                <pre><code>brew tap loadimpact/k6
brew install k6</code></pre>
            </div>
            <div class="tab-pane fade" id="platform-tabs-content-windows" role="tabpanel" aria-labelledby="platform-tabs-link-windows">
                <a href="https://dl.bintray.com/loadimpact/windows/k6-latest-amd64.msi">Download the latest k6 installer</a>
            </div>
        </div>
    </div>
</div>

Refer to [installation options](https://docs.k6.io/docs/installation) in the k6 docs for additional information

#### Utilizing k6 locally to trigger tests

Once you've installed k6, try these commands to try the different execution modes:

##### Local Execution with local output
This mode is useful for validations and smoke tests. Load generated from your local machine with output to stdout
{% highlight shell %}
k6 run -u 1 -d 10s github.com/loadimpact/k6/samples/http_get.js
{% endhighlight %}

##### Local Execution with cloud streaming output
This mode is useful for testing behind the firewall. Cloud output enables you to analyze your results within Load Impact's cloud platform. In stdout, you are given a link to the test result to watch in real-time.
{% highlight shell %}
k6 login cloud
k6 run -u 25 -d 5m github.com/loadimpact/k6/samples/http_get.js -o cloud
{% endhighlight %}

##### Cloud Execution triggered from local command line

This mode allows you to scale to a large number of Virtual Users on demand, utilizing Load Impact's cloud infrastructure. Your script and it's dependencies (if applicable) are uploading to our cloud service and then executed. In stdout, you are given a link to the test result to watch in real-time.
{% highlight shell %}
k6 login cloud
k6 cloud -u 25 -d 5m github.com/loadimpact/k6/samples/http_get.js
{% endhighlight %}

***

### Results analysis
Refer to the following resources for more information on result analysis:
- Take an [in-app tour](https://app.loadimpact.com/k6/anonymous/9b480b664bee46c3bf1a9d1ffb57328d)
- [Load Impact insights]({{ site.baseurl }}/4.0/result-analysis/insights-overview/)
- [Thresholds]({{ site.baseurl }}/4.0/test-scripting/thresholds/)

***

### Next Steps/Automating testing

As a best practice, building automation into your development cycle for testing provides a multitude of benefits, such as:
- Deploying higher quality code, faster
- Improving efficiencies
- Detecting performance issues, before they become problems in production

Load Impact 4.0 and k6 are designed to fit nicely into automation pipelines or custom processes you've already created. The most popular CI tools, such as Circle CI, GitLab, Jenkins, Team City, etc. support making command line calls. This allows k6 to fit nicely into these workflows and build processes. Enabling you to run tests as part of the build process, and halt those builds, should a failing result be returned.

The frequency in which you run tests varies from organization to organization. Our best practice recommendation is to _run tests with your nightly builds_.




***

### How can I get help?
The Load Impact Support and Client Success teams are here to help should you have questions. You can utilize the icon in the lower right corner of this page to start a chat or email us at support [at] loadimpact.com.

***

### Additional resources

- [This Knowledge Base]({{ site.baseurl }}/4.0/)
- [k6 docs](http://docs.k6.io/docs)
- [k6 project page](https://k6.io/)
- [GitHub Repo](https://github.com/loadimpact/k6)
- [Load Impact v4.0 Chrome Extension ]({{ site.baseurl }}/4.0/how-to-tutorials/load-impact-version-4-chrome-extension/)
- [How to create a HAR recording]({{ site.baseurl }}/4.0/how-to-tutorials/how-to-do-browser-recording/)
-
