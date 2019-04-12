---
layout: classic-docs
title: How to Load Test an API
description: Example scripts for load tesing APIs with LoadImpact.
categories: [guides]
order: 1
redirect_from:
    - /4.0/how-to-tutorials/how-to-load-test-an-api/
    - /4.0/how-to-tutorials/how-to-load-test-an-api-with-k6/
---

***

Load testing is used to test scalability and performance of sites, apps and APIs;
there are however some differences in how to prepare and configure your load test depending on your type of system and what answer you are looking to get from your testing.

There are two typical approaches to testing APIs:
 1. You can test APIs in the same way you test websites, by simulating users (or VUs). You want to use this method if you are interested in how many users your API can serve simultaneously.
 2. You can test API for number or requests per second (or RPS). You want to use this method, if your are interested in how many requests your API can handle per second.

If you are testing one endpoint at a time, the RPS method is more meaningful. If you are a testing a real/logical user journey across multiple endpoints, the VU method is more meaningful.

# Testing API scenarios, using VUs.

If you are testing a scenario, with multiple endpoints at a time, your script may look similar to this

{% highlight js linenos %}

import { check, sleep } from "k6";
import { Rate } from "k6/metrics";
import http from "k6/http";

// See https://docs.k6.io/docs/options for other options
export let options = {
  // simulate rampup of traffic from 1 to 200 users over 5 minutes.
  stages: [
    { duration: "5m", target: 200 },
  ]
};

let baseUrl = 'https://httpbin.test.loadimpact.com/';

// let's collect all errors in one metric
let errorRate = new Rate("API errors");

let authenticate = function(user, password){
  let authUserRes = http.post(`${baseUrl}/anything`, JSON.stringify({user: user, password: password}));

  // check if the authentication was successful, or increase error metric
  check(authUserRes, {
    "login successful": (r) => r.status === 200
  }) || errorRate.add(1);

  return authUserRes.json().token;
};

let getUser = function(user_id, token){
  let userRes = http.get(`${baseUrl}/anything/${user_id}`, {}, {
    headers: {
      Authorization: `Token ${token}`
    }
  });

  check(userRes, {
      "user retrieval successful": (r) => r.status === 200
  }) || errorRate.add(1);

  return userRes.json();
};

export default function() {
  let authToken = authenticate("user@example.com", "supersecure");
  let user = getUser(2, authToken);

  sleep(1); // user usually waits 1 second after this flow
}
{% endhighlight %}

You can view a sample test run of this script [here](https://app.loadimpact.com/k6/anonymous/4eacae1dfd234566865962ccdb350c4e)

![k6 rps with VUs]({{ site.baseurl }}/assets/img/v4/how-to-tutorials/how-to-load-test-an-api/rps_vus.png)

Note, in this test run, the Request Rate closely follows VUs, while response time is relatively flat.
This means that the API under test is handling traffic well for specified number or users.
Aside from some fringe cases, the aforementioned pattern is a sign of good performance.

# Testing API endpoints for RPS

By default, k6 will operate in "VU mode". However, you can easily test in terms of RPS by limiting how many requests each VU is able to make per second.

Example:

{% highlight js linenos %}
import { check, sleep } from "k6";
import http from "k6/http";

let desiredRPS = 200; // total RPS for the test

// maximum requests executed by one VU per second, determined by experimentation.
// You can adjust this up/down depending on the performance of system you are testing.
let RPSperVU = 4;

let VUsRequired = Math.round(desiredRPS/RPSperVU);

export let options = {
  vus: VUsRequired,
  duration: '5m',
};

let baseUrl = 'https://httpbin.test.loadimpact.com/';

export default function() {
  let iterationStart = new Date().getTime(); // timestamp in ms

  for (let i of Array(RPSperVU).keys()) { // your URL(s) goes here.
    // if you add multiple URLs here, your RPS will be multiplied. (3 urls = 3x RPS)
    // if you plan on testing multiple endpoints, consider VU method rather than RPS method
    // different endpoints can have vastly different RPS.
    http.get(`${baseUrl}/anything/`);
  }

  let iterationDuration = (new Date().getTime() - iterationStart) / 1000;
  let sleepTime = 1 - iterationDuration;  // 1 second minus time spent on request execution

  if(sleepTime > 0){
    sleep(sleepTime);
  }
}
{% endhighlight %}

This script is rather simple. We are specifying that each virtual user should execute 4 requests every second, and sleep for the rest of the time.
This means that we need `50 VUs` to generate `200` requests every second.

You can view a sample test run of this script [here](https://app.loadimpact.com/k6/anonymous/81e9e44f12cb49c88da707fbdc65ee4a)

![k6 rps with VUs]({{ site.baseurl }}/assets/img/v4/how-to-tutorials/how-to-load-test-an-api/rps_result.png)


## Executing tests and viewing results

If your API is publicly accessible on the internet, you can run this script from LoadImpact cloud by running this command:
{% highlight console %}
$ k6 cloud API_scenario_test.js
{% endhighlight %}

If your API is behind a firewall or running on your development machine, you can use local execution, running this command:
{% highlight console %}
$ k6 run -o cloud API_scenario_test.js
{% endhighlight %}

In both cases you will see a link to LoadImpact where you can view your results in real time. It will look similar to this:

![k6 output]({{ site.baseurl }}/assets/img/v4/how-to-tutorials/how-to-load-test-an-api/k6_cloud_output.png)



Note, if you are just getting started or don't want to execute tests from the command line, you can also execute scripts directly from LoadImpact's web editor, without the need of installing k6. Go to the
[web editor](https://app.loadimpact.com/k6/tests/custom/editor) and try it out!

<!--stackedit_data:
eyJoaXN0b3J5IjpbNTk5MTcyNDg1XX0=
-->
