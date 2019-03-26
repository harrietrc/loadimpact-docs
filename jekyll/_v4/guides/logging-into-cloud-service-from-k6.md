---
layout: classic-docs
title: How to Authenticate Against the LoadImpact Cloud With k6
description: A guide on how to authenticate k6 with LoadImpact cloud service when running load tests from the command line/locally.
categories: [guides]
order: 15
redirect_from: /4.0/test-running/logging-into-cloud-service-from-k6/
---

***

# Purpose

Explanation of the different ways that you can log into LoadImpact's cloud service from k6 for the purpose of [running tests locally and streaming results to Insights]({{ site.baseurl }}/4.0/test-running/local-on-premise-execution/#streaming-results-to-insights) or [running cloud executed tests]({{ site.baseurl }}{% link _v4/guides/cloud-execution.md %}).

## Authenticating using email/password

Before you can interact with the LoadImpact cloud service, whether it's for streaming results or running tests in the cloud, you'll need to authenticate. You can login with your LoadImpact email/password credentials by entering the following command into your terminal:

`k6 login cloud`

<div class="callout callout-warning" role="alert">
    <b>Google/Github Single Sign-On Users</b><br>
    For Single Sign-On (SSO) users logging in with <code>k6 login cloud</code> won't work as it requires a LoadImpact account email and password. You'll instead need to <a href="https://app.loadimpact.com/account/token">get your API authentication token from the app</a> and supply that explicitly: <code>k6 login cloud --token YOUR_API_AUTH_TOKEN</code>. <a href="#authenticating-using-api-authentication-token">See below</a> for more information.
</div>

<div class="callout callout-warning" role="alert">
    <b>Docker Users</b><br>
    If you're running k6 in a Docker container you'll need to make sure that the k6 config file where the LoadImpact API authentication information (an API authentication token) will be stored to is persisted via a Docker volume to the host machine using the <code>-c/--config PATH/TO/CONFIG_FILE</code> CLI flag, e.g. <code>docker run -i -v /path/on-host:/path/in-container/ loadimpact/k6 login cloud -c /path/in-container/config.json</code>.
</div>

This will login to your account, fetch (and create of necessary) your LoadImpact API authentication token, and save it to a [k6 configuration file](#using-config-file).

## Authenticating using API authentication token

If you're a Google/Github Single Sign-On (SSO) user or if you have a use case where using your LoadImpact account credentials is not appropriate you can choose to enter your LoadImpact API authentication token directly by entering the following command into your terminal:

`k6 login cloud --token YOUR_API_AUTH_TOKEN`

### Using environment variables

You can also authenticate with your LoadImpact API authentication token via environment variables. If you make sure the `K6_CLOUD_TOKEN` has been set to your LoadImpact API authentication token k6 will pick it up when executing.

### Using config file

You can also directly add your LoadImpact API authentication token to a configuration file. Either in the default path that k6 will look for it by default:

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
                <code>${HOME}/.config/loadimpact/k6/config.json</code>
            </div>
            <div class="tab-pane fade" id="platform-tabs-content-macos" role="tabpanel" aria-labelledby="platform-tabs-link-macos">
                <code>${HOME}/Library/Application Support/LoadImpact/k6/config.json</code>
            </div>
            <div class="tab-pane fade" id="platform-tabs-content-windows" role="tabpanel" aria-labelledby="platform-tabs-link-windows">
                <code>C:\Users\&lt;User&gt;\AppData\Roaming\loadimpact\k6\config.json</code>
            </div>
        </div>
    </div>
</div>

or by specifying the `-c/--config PATH/TO/CONFIG_FILE` CLI flag.

When your LoadImpact API authentication token has been added to the config file, it should look something like this (removing any other config options from the file):

{% highlight json linenos %}
{
    "collectors" {
        "cloud": {
            "token": "YOUR_API_AUTH_TOKEN"
        }
    }
}
{% endhighlight %}

## See also
- [Local and On-premise execution]({{ site.baseurl }}{% link _v4/guides/local-on-premise-execution.md %})
- [Cloud execution]({{ site.baseurl }}{% link _v4/guides/cloud-execution.md %})
<!--stackedit_data:
eyJoaXN0b3J5IjpbLTE1MzE4OTIyOF19
-->
