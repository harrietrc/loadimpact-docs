---
layout: classic-docs
title: Authenticating with cloud service from k6
description: An overview of authenticating with Load Impact cloud service from k6
categories: [test-running]
order: 0
---

***

# Purpose

Explanation of the different ways that you can log into Load Impact's cloud service from k6 for the purpose of [running tests locally and streaming results to Insights]({{ site.baseurl }}/4.0/test-running/local-on-premise-execution/#streaming-results-to-insights) or [running cloud executed tests]({{ site.baseurl }}{% link _v4/test-running/cloud-execution.md %}).

## Authenticating using email/password

Before you can interact with the Load Impact cloud service, whether it's for streaming results or running tests in the cloud, you'll need to authenticate. You can login with your Load Impact email/password credentials by entering the following command into your terminal:

`k6 login cloud`

<div class="callout callout-warning" role="alert">
    <b>Google/Github Single Sign-On Users</b><br>
    For Single Sign-On (SSO) users logging in with <code>k6 login cloud</code> won't work as it requires a Load Impact account email and password. You'll instead need to <a href="https://app.loadimpact.com/account/token">get your API authentication token from the app</a> and supply that explicitly: <code>k6 login cloud --token YOUR_API_AUTH_TOKEN</code>. <a href="#authenticating-using-api-authentication-token">See below</a> for more information.
</div>

<div class="callout callout-warning" role="alert">
    <b>Docker Users</b><br>
    If you're running k6 in a Docker container you'll need to make sure that the k6 config file where the Load Impact API authentication information (an API authentication token) will be stored to is persisted via a Docker volume to the host machine using the <code>-c/--config PATH/TO/CONFIG_FILE</code> CLI flag, e.g. <code>docker run -i -v /path/on-host:/path/in-container/ loadimpact/k6 login cloud -c /path/in-container/config.json</code>.
</div>

This will login to your account, fetch (and create of necessary) your Load Impact API authentication token, and save it to a [k6 configuration file](#using-config-file).

## Authenticating using API authentication token

If you're a Google/Github Single Sign-On (SSO) user or if you have a use case where using your Load Impact account credentials is not appropriate you can choose to enter your Load Impact API authentication token directly by entering the following command into your terminal:

`k6 login cloud --token YOUR_API_AUTH_TOKEN`

### Using environment variables

You can also authenticate with your Load Impact API authentication token via environment variables. If you make sure the `K6_CLOUD_TOKEN` has been set to your Load Impact API authentication token k6 will pick it up when executing.

### Using config file

You can also directly add your Load Impact API authentication token to a configuration file. Either in the default path that k6 will look for it by default:

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

## See also
- [Local and On-premise execution]({{ site.baseurl }}{% link _v4/test-running/local-on-premise-execution.md %})
- [Cloud execution]({{ site.baseurl }}{% link _v4/test-running/cloud-execution.md %})
