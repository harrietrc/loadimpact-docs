---
layout: classic-docs
title: What IP Addresses are used by Load Impact to generate load?
description: List and explanation of the IP addresses Load Impact uses to generate load during a test.
categories: [frequently-asked-questions]
order: 5
redirect_from: /knowledgebase/articles/174262-what-load-zones-and-ip-addresses-does-load-impact
---

***


Some people have firewalls that prevent the general public out on the Internet from reaching their staging web sites. They often configure their firewalls to block traffic from all IP addresses except the ones used by their developers. To run tests with Load Impact they therefore need to either:
- Add the Load Impact load generator IP addresses to the list of addresses that are allowed to pass the firewall.
- Use another method, such as header or query parameter whitelisting, as described in [this article]({{ site.baseurl }}/legacy/how-to-tutorials/how-to-open-firewall-to-load-impact-only/)

Load Impact generates load solely from the cloud, using Amazon cloud servers. However, you will need to include our main loadimpact.com IP addresses as well.

**The main loadimpact.com IP address:**

52.4.55.233 - Ashburn

This used for validations, and must be included in every test, regardless of loadzone. Please refer to the Load Zone section of this document for the full range of IP addresses used when testing.

**Auto-generated load scripts/Page Analyzer IP address:**

54.208.147.247

This is only for URL generated tests from within the Load Impact platform.

**Proxy Recorder IP addresses:**

The Session Recorder IP address is not fixed. It does not change often, but it is a good practice to re-resolve the hostname and make necessary changes to the firewall if this is fixed to the IP address. We highly recomend adding the hostname proxy.loadimpact.com instead of the IP address if possible.
IP address for Session Recorder (Updated on 11/09/2014): 54.88.120.157

Note: Please ensure that your servers are allowed outbound connections within the port range 20000 - 21000 as well.


### Load Zones

Load Impact uses AWS for cloud load generators. For the IP addresses used in the different load zones and filtering methods please refer directly to [Amazon](http://docs.aws.amazon.com/general/latest/gr/aws-ip-ranges.html).

If you prefer to view the ranges directly, within the above link, the [ip-ranges.json](https://ip-ranges.amazonaws.com/ip-ranges.json) file provides the updated list of IP addresses used by our load generators. In order to know which IP range/s can be used, you need to filter the `service` of type EC2 and the `region` of the selected load zone/s in your test configuration.

The zone codes are mapped as follows:


Code           | Name
---------------|--------------------------
us-east-1      | US East (Ashburn)
us-east-2      | US East (Columbus)
us-west-1      | US West (Palo Alto)
us-west-2      | US West (Portland)
ca-central-1   | Canada (Montreal)
eu-west-1      | EU (Dublin)
eu-central-1   | EU (Frankfurt)
eu-west-2      | EU (London)
ap-northeast-1 | Asia Pacific (Tokyo)
ap-northeast-2 | Asia Pacific (Seoul)
ap-southeast-1 | Asia Pacific (Singapore)
ap-southeast-2 | Asia Pacific (Sydney)
ap-south-1     | Asia Pacific (Mumbai)
sa-east-1      | South America (São Paulo)
{: class="table table-bordered"}
