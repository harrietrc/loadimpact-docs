### Introduction

The goal of this article is to describe how to create a load test in [LoadImpact app](https://app.loadimpact.com) that tests site deployed as a [Service](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs_services.html) in AWS ECS Cluster, and pulls data from DataDog.
Test queries data from DataDog [Event Stream](https://docs.datadoghq.com/graphing/event_stream/), and fails if CPU consumption of our Service reaches the threshold limit. This test is saved in [LoadImpact app](https://app.loadimpact.com) and scheduled to be executed every 4 hours, running required number of [k6](https://docs.k6.io/docs/welcome) instances in LoadImpact's cloud platform.


### Assumptions

* ECS Service which will be tested by our load test is already created and running. In our case it is a site, which is available at https://httpbin.test.loadimpact.com.
* Datadog integration with AWS is already configured, here is official [DataDog AWS Integration Guide](https://docs.datadoghq.com/integrations/amazon_web_services).
* We have permissions to create a load test in LoadImpact app and to create a [monitor](https://docs.datadoghq.com/monitors) in DataDog.

### Create a Monitor in DataDog

So we have a running ECS Service and we want to create a [monitor](https://docs.datadoghq.com/monitors) in DataDog which will trigger alert if Service CPU utilization reaches 100 units or above.
While creating a monitor make next actions:
* Choose  `Threshold alert` as a detection method
* Choose `aws.ecs.service.cpuutilization` metric from `servicename:<your_service_name>` in "Define the metric" step
* Configure "Alert threshold" to be 100
* Edit message and notification steps and save Monitor
[![datadog-pull-2.png](https://i.postimg.cc/KYHpv8rV/datadog-pull-2.png)](https://postimg.cc/7CSnKDRM)
[![datadog-pull-1.png](https://i.postimg.cc/SQwdvPD6/datadog-pull-1.png)](https://postimg.cc/V5WXSKyv)

After Monitor created, in DataDog [Event Stream](https://docs.datadoghq.com/graphing/event_stream/) will appear events when metric threshold is reached.

### Create a test in LoadImpact app

First of all we need a [k6](https://docs.k6.io/docs/welcome) script, here is an example sufficient for our needs:

```javascript
import http from "k6/http";
import { Counter } from "k6/metrics";
import { check, group, sleep } from "k6";

export const datadogHttpbinCpu = new Counter("ECS Service httpbin CPU Threshold Exceeded");
export let options = {
    stages: [
        { duration: "30s", target: 150 },
        { duration: "600s", target: 150 }
    ],
    thresholds: {
        "http_req_duration": ["p(95)<200"],
        "ECS Service httpbin CPU Threshold Exceeded": ["count < 1"]
    }
};

const datadogApi = "https://api.datadoghq.com/api/v1/";
const datadogApiKey = "<YOUR_DATADOG_API_KEY>"
const datadogAppKey = "<YOUR_DATADOG_APPLICATION_KEY>"
const getDataDogHeader = tagName => {
    return {
        headers: { ["Content-Type"]: "application/x-www-form-urlencoded" },
        tags: { name: tagName }
    };
};

export function setup() {
    let time = Date.now();
    return time;
}

export default function () {
    let res = http.get("https://httpbin.test.loadimpact.com/");
    check(res, {
        "is status 200": (r) => r.status === 200
    });
    sleep(1);
}

export function teardown(time) {
    let endTime = Math.floor(Date.now() / 1000);
    let startTime = Math.floor(time / 1000);
    let monitorTags = [
        "servicename:demosites-httpbin"
    ];

    let reqString =
        `events?api_key=` + datadogApiKey +
        `&application_key=` + datadogAppKey +
        "&start=" + startTime +
        "&end=" + endTime +
        "&tags=";

    monitorTags.forEach(tag => {
        let response = http.get(
            datadogApi + reqString + tag,
            getDataDogHeader("DataDog Event Stream")
        );
        let body = JSON.parse(response.body);
        body.events.forEach(event => {
            if (event.tags.includes("servicename:demosites-httpbin")) {
                datadogHttpbinCpu.add(true);
            }
        });
    });

}
```

How to manage datadog API and Application keys you can find [here](https://docs.datadoghq.com/account_management/faq/api-app-key-management/).

Go to [LoadImpact app](https://app.loadimpact.com) and push button "CREATE NEW TEST". Choose "SRIPTING" in "WEBSITE/APP TESTING" section:
[![datadog-pull-3.png](https://i.postimg.cc/DZCK3FHC/datadog-pull-3.png)](https://postimg.cc/r0tHS68W)

Paste your script body, make a suitable name for test and save. After you can configure Schedule, in our case it is scheduled to be executed each 4 hours:
[![datadog-pull-4.png](https://i.postimg.cc/sf9TXw2r/datadog-pull-4.png)](https://postimg.cc/WtzGYmrW)

That's it, you have a script which will be executed each 4 hours and failed if there are alerts in datadog event stream in time frame of test execution.