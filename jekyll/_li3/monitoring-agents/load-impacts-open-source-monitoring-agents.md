---
layout: classic-docs
title: Load Impact's Open Source Server Monitoring Agents
description: How to install Load Impact's open source Server Monitoring Agents to add more data and context to your load tests.
permalink: /3.0/load-impacts-open-source-monitoring-agents
categories: [monitoring-agents]
order: 1
redirect_from:
  - /knowledgebase/topics/114939-monitoring
  - /knowledgebase/articles/265482-server-monitoring-formerly-server-metric-agents
---

***

Server Monitoring helps you to measure performance metrics from your own servers and integrates these metrics with the graphs generated from your Load Impact test.

Load Impact offers three options to monitor a system under test(SUT).  We offer:

- Our open source monitoring agents (described in this article)
- [An Integration with New Relic ](new-relic-integration)
- Using the open source nature of our agents to send metrics from other monitoring solutions (ADVANCED)


Whichever you choose makes it much easier for you to correlate data from your servers with test result data. It also helps you identify the reasons behind possible performance problems.

If you wish to collect more specialized metrics than just the standard physical server metrics (i.e. CPU usage, memory, Disk I/O and Network I/O), our Server Monitoring Agents are also compatible with the Nagios plugin system. A tutorial on custom metrics with [Server Monitoring agents is available here](configuring-custom-monitoring-agent-metrics)

***


### Step 1: Download and install Server Monitoring Agent

The first step is to download the agent installer for your server platform. Download links can be found below.

The server monitoring agent requires Python 2.6+ and the module psutil. Both Python and psutil are bundled in the Windows installer, but on Ubuntu you might need to apt-get install python-psutil


Packages/Installers:  The latest installers/packages of our Server Monitoring Agents are found within our app here: [Monitoring](https://app.loadimpact.com/monitoring) (Login required).

In case you do not yet have a [free account](https://app.loadimpact.com/account/register), here are the instructions, for your reference.

**Ubuntu Specific instructions:** Please see this article for specific instructions on Ubuntu install

**CentOS:** Please see this article for specific instructions on CentOS install

**Windows:** Windows Server 2008R2 and Windows Server 2012 supported. Your mileage might vary on other platforms.  The installer is found here.

**Source:** To get it running on any other platform, you can use the Python files directly
https://github.com/loadimpact/loadimpact-server-metrics




### Step 2: Generate a Server Monitoring Token

In order to identify the agents when they are talking to Load Impact, we need an identification key. We refer to this as a "token".

In the app,  on the left side bar, under the menu item "Integrations" you can generate a token. If you are logged in, you can access the menu here.

First, choose "Load Impact"

Image: https://loadimpact.uservoice.com/assets/116761147/Image%202017-02-14%20at%2012.47.48%20PM.png


Scroll to step two and click `Generate Token`.



Image: https://loadimpact.uservoice.com/assets/77332142/Token.jpg

Use the same token for all agents/machines you wish to monitor. You can re-generate a new token at any time if you believe it has been compromised or distributed to someone outside your company. If you do re-generate a token, the old token will no longer be valid.

### Step 3: Name your agents and give them access

During the installation of the server monitoring agent you will be asked to provide a name for the agent and the token. We suggest you give it a name equal to, or describing, the name of the server you are installing it on to make it easier to identify it later on.

If you are using the python files to install your agent, we recommend you read "README.md". That being said, you will need to set the name and token within the config file.  Using our provided template, this can be found on lines 1-8 of li_metrics_agent.conf:
```
# Load Impact Server Metrics sample configuration file

[General]
# agent_name - hostname or any other identifier for this server, choose wisely
agent_name = myagent

# server_metrics_token - assigned to your account on loadimpact.com
server_metrics_token = SERVER_METRICS_API_TOKEN
```

### Step 4: Wait for check-in

We will see if your agent has started communication with us.

To ensure that the agents can connect, please allow outgoing port 443 against api.loadimpact.com in your firewall.

### Step 5: Configure your test to include the agents

Once the installation is complete, the server monitoring agent will start automatically and you should be able to select it on the test configuration page in the Load Impact interface.

Image: https://loadimpact.uservoice.com/assets/77332185/AddAgent.jpg

### Step 6: Review your Server Monitoring results

Once your test has started, you will be able to see your Server Monitoring results in real time. Simply select the type(s) of server monitoring you wish to view in the “Add Visualization” drop down menu. This will plot the results for the specific server metric that you wish to view.

Image: https://loadimpact.uservoice.com/assets/77332222/Add-visualization2.jpg


Take a look at the test results below for an example of Server Monitoring in action. The results show CPU usage as load is increased on a website.

***


### FAQs

#### How do the Server Monitoring Agents communicate with Load Impact?

Load Impact servers never contact the server monitoring agents. It is the other way around - the agents contact Load Impact regularly. This is to make it more likely that there are no firewall issues affecting the communication, etc. Most firewalls are set up to allow outgoing HTTP connections. To ensure that the agents can connect, please allow outgoing **port 443 against api.loadimpact.com** in your firewall.

The agents contact Load Impact every few minutes and if our system sees you logon to your Load Impact account we will tell the agents to start contacting us a little more frequently in case you are going to start a load test (i.e. we don't want you to have to wait a long time for the Server Metric Agents to get ready when you start a test).

Then when you do start a test where you have chosen to collect data from an agent, we will wait for that agent to contact us and when it does - by sending us an HTTP request - we will respond with an order for the agent to start collecting data and sending it to us. The agent will then go into active mode - collecting data and transmitting it to us continuously throughout the load test (using HTTP). Then when the test is over, we will tell the agent to stop collecting data, and after you logout from loadimpact.com, we will also tell the agent to contact us less frequently.

**Note:** On Windows Server you must make sure that the proper Truested Root CA Certificate ("GeoTrust Global CA") is present in the Trusted Root Certificate Authorities. If you don't have this root CA certificate you'll see CERTIFICATE_VERIFY_FAILED errors in the Server Monitoring Agent log file. The needed root CA certificate can be downloaded from [GeoTrust](https://www.geotrust.com/resources/root_certificates/certificates/GeoTrust_Global_CA.pem)
(from this page: https://www.geotrust.com/resources/root-certificates/), and installed by following these steps:


1. Open Microsoft Management Console (Start -> Run -> mmc.exe)
2. Choose File -> Add/Remove Snap-in
3. In the Standalone tab, choose Add
4. Choose the Certificates snap-in, and click Add
5. In the wizard, choose the Computer Account, and then choose Local Computer. Press Finish to end the wizard
6. Close the Add/Remove Snap-in dialog
7. Navigate to Certificates (Local Computer)
8. Right-click the Trusted Root Certification Authorities store and choose All Tasks -> Import
9. Follow the wizard and provide the certificate file that you downloaded from GeoTrust


_In a future version the Server Monitoring Agent will make an attempt to trigger an "Automatic Root Certificate Update" to download the needed root CA certificate, if the group policy hasn't been turned off (Computer Settings / Administrative Templates / System / Internet Communication Management / Turn off Automatic Root Certificate Update), but in some environments this might not be possible due to firewall restrictions etc. In those cases the manual root CA certificate installation process described above will be necessary._


#### What are the default values returned for the metrics and can they be changed?

The default values reported back are as follows:
- Network - bps
- Disk- bps
- CPU - % of system-wide utilization
- Memory - % of utilization
- Our agents are also compatible with the Nagios plugin system if you wanted to send other metrics back during a test.

If you would like to configure custom metrics with our Monitoring Agents, please see [this tutorial](configuring-custom-monitoring-agent-metrics).


You can report back on different things that may be interesting for you.  For example, packets/s for network performance or an individual CPU.  You can change the defaults by opening the li_metrics_agent.conf file in the install directory and making the necessary changes

#### My agent is not working! Help!

In the event that an agent takes too long to check-in, or just fails to report back information we recommend the following steps to troubleshoot:

1. Ensure port 443 is open against api.loadimpact.com
2. Restart the agent (because turning it off and on again works far too often with computers)
3. Check the log file in the install folder (and send it to us if you need help.)
