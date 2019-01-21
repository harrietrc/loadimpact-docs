---
layout: classic-docs
title: Scripting examples
description: Example test scripts for k6 and Load Impact 4.0
categories: [test-scripting]
order: 13
redirect_from:
    - /4.0/test-scripting/handling-dynamic-tokens-in-k6-scripts/
    - /4.0/test-scripting/http-authentication/
---

***

<h1>Background</h1>
As developers and testers ourselves we know how important it is with examples when learning a new tool. Below is a list of example k6 test scripts show casing commonly asked for functionality.

- TOC
{:toc}

## Authentication/Authorization
Examples of various HTTP Authentication methods that can be used with k6. These, plus other examples can be found within the [k6 GitHub Repo](https://github.com/loadimpact/k6/tree/master/samples/auth)

### Basic authentication
{% include 4.0/scripting-examples/http-auth-basic.md %}

### Digest authentication
{% include 4.0/scripting-examples/http-auth-digest.md %}

### NTLM authentication
{% include 4.0/scripting-examples/http-auth-ntlm.md %}

### AWS Signature v4 authentication
Requests to the AWS APIs requires a special type of auth, called AWS Signature Version 4. k6 doesn't support this authentication mechanism out of the box, so we'll have to resort to using a Node.js library called [awsv4.js](https://github.com/mhart/aws4) and [Browserify](http://browserify.org/) (to make it work in k6).

There are a few of steps to make this work:

1. Make sure you have the necessary prerequisites installed:
    * [Node.js](https://nodejs.org/en/download/)
    * [Browserify](http://browserify.org/)
2. Install the `awsv4.js` library:

    <kbd>npm install aws4</kbd>
3. Run it through browserify:

    <kbd>browserify node_modules/aws4/aws4.js -s aws4 > aws4.js</kbd>
4. Move the `aws4.js` file to the same folder as your script file and you'll be able to import it into your test script:

    `import aws4 from "./aws4.js"`

Here's an example script to list all the regions available in EC2. Note that the AWS access key and secret key needs to be provided through [environment variables]({{ site.baseurl}}{% link _v4/test-scripting/environment-variables.md %}).

<div class="callout callout-warning" role="alert">
    <b>Note that using this browserified Node.js library will be CPU and memory heavy</b><br>
    As the browserified version of this Node.js library includes several Node.js APIs implemented in pure JS (including crypto APIs) it will be quite heavy on CPU and memory hungry when run with more than just a few VUs.
</div>

{% include 4.0/scripting-examples/http-auth-aws4.md %}

## Cookies
As HTTP is a stateless protocol, cookies are used by server-side applications to persist data on client machines. This is used more or less everywhere on the web, commonly for user session tracking purposes. In k6 cookies are managed automatically by default, however there're use cases where access to read and manipulate cookies are required.

### Accessing a cookie set by server in response headers
{% include 4.0/scripting-examples/http-cookies-access.md %}

### Logging all cookies in response
<div class="callout callout-warning" role="alert">
    <b>Note that this only works when using k6 locally</b><br>
    The <code>console.log()</code> family of APIs are currently only useful when running k6 locally. 
    When running k6 tests with Load Impact Cloud Execution the logs will be discarded.
</div>

{% include 4.0/scripting-examples/http-cookies-log-all-in-resp.md %}

### Setting a cookie in VU cookie jar
To set a cookie that should be sent with every request matching a particular domain, path etc. you'd do something like this:
{% include 4.0/scripting-examples/http-cookies-set-cookie-in-jar.md %}

**Relevant k6 APIs**:
- [http.CookieJar](https://docs.k6.io/docs/cookiejar-k6http)
    - [set(url, name, value, [additionalProps])](https://docs.k6.io/docs/cookiejarsetname-value-options)
- [http.cookieJar()](https://docs.k6.io/docs/cookiejar)

## Correlation
In a load testing scenario, correlation means extracting one or more values from the response of one request and then reusing them in subsequent requests. Often times this could be getting a token or some sort of ID necessary to fulfill a sequence of steps in a user journey.

The [browser recording]({{ site.baseurl }}{% link _v4/how-to-tutorials/how-to-do-browser-recording.md %}) will for example capture things like CSRF tokens, VIEWSTATES etc. from your session. This type of data is likely to no longer be valid when you run your test, meaning you'll need to handle the extraction of this data from the HTML/form to include it in subsequent requests. This issue is fairly common and can be handled with a little bit of scripting.

### Extracting values/tokens from JSON response
{% include 4.0/scripting-examples/correlation-json-resp.md %}

**Relevant k6 APIs**:
- [Response.json()](https://docs.k6.io/docs/response-k6http)
- [JSON.parse()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse) (An laternative API that can be used for parsing JSON data)

### Extracting values/tokens from form fields
There are primarily two different ways you can choose from when deciding how to handle form submissions. Either you use the higher-level [Response.submitForm([params])](https://docs.k6.io/docs/responsesubmitform-params) API or you extract necessary hidden fields etc. and build a request yourself and then send it using the appropriate `http.*` family of APIs, like [http.post(url, [body], [params])](https://docs.k6.io/docs/post-url-body-params).

#### Extracting .NET ViewStates, CSRF tokens and other hidden input fields
**Method 1** using the k6 HTML parsing and query APIs:
{% include 4.0/scripting-examples/correlation-form-hidden-input1.md %}

**Method 2** using standard JS regex APIs:
{% include 4.0/scripting-examples/correlation-form-hidden-input2.md %}

**Relevant k6 APIs**:
- [Selection.find(selector)](https://docs.k6.io/docs/responsesubmitform-params) (the [jQuery Selector API](http://api.jquery.com/category/selectors/) docs are also a good resource on what possible selector queryies can be made)
- [Selection.attr(name)](https://docs.k6.io/docs/selectionattrname)

## Data files/Parameterization

### Reading parameterization data from a CSV file
As k6 doesn't support parsing CSV files out of the box, we'll have to resort to using a Node.js library called [Papa Parse](https://www.papaparse.com/) and [Browserify](http://browserify.org/) (to make it work in k6).

There are a few of steps to make this work:

1. Make sure you have the necessary prerequisites installed:
    * [Node.js](https://nodejs.org/en/download/)
    * [Browserify](http://browserify.org/)
2. Install the `Papa Parse` library:

    <kbd>npm install papaparse</kbd>
3. Run it through browserify:

    <kbd>browserify node_modules/papaparse/papaparse.min.js -s papaparse > papaparse.js</kbd>
4. Move the `papaparse.js` file to the same folder as your script file and you'll be able to import it into your test script:

    `import papaparse from "./papaparse.js"`

Here's an example using Papa Parse to parse a CSV file of username/password pairs and using that data to login to the Load Impact test site:

{% include 4.0/scripting-examples/data-parameterization-csv.md %}

### Reading parameterization data from a JSON file
{% include 4.0/scripting-examples/data-parameterization-json.md %}

## HTML

### Filling in and submitting forms
One of the most tedious tasks when testing websites and apps is to get all the form filling to work. You have to get all the so called "correlations" ([see above](#correlation)) correct which can take time, even with the help of a scenario recorder as the staring point for getting the basic user journey down into a re-playable test.

{% include 4.0/scripting-examples/html-fill-submit-form.md %}

**Relevant k6 APIs**:
- [Response.submitForm([params])](https://docs.k6.io/docs/responsesubmitform-params)
- [Selection.find(selector)](https://docs.k6.io/docs/responsesubmitform-params) (the [jQuery Selector API](http://api.jquery.com/category/selectors/) docs are also a good resource on what possible selector queryies can be made)

## HTTP/2
In k6 HTTP/2 is automatic. If the target system indicates that a connection can be upgraded from HTTP/1.1 to HTTP/2, k6 will do so automatically.

### Making HTTP/2 requests
{% include 4.0/scripting-examples/http-http2-req.md %}

## SOAP
Althought k6 doesn't have any builtin APIs for working with SOAP or XML data in general, you can still easily load test a SOAP based API by crafting SOAP messages and using the HTTP request APIs.

### Making SOAP requests
{% include 4.0/scripting-examples/http-soap-req.md %}

## Uploads

### Binary file upload
{% include 4.0/scripting-examples/http-upload-binary-file.md %}

**Relevant k6 APIs**:
- [open(filePath, [mode])](https://docs.k6.io/docs/open-filepath-mode)
- [http.file(data, [filename], [contentType])](https://docs.k6.io/docs/file-data-filename-contenttype)

### Creating a multipart request
With multipart requests you combine pieces of data with possibly different content types into one request body. A common scenario is for example a form with regular text input fields and a file field for uploading a file:

{% include 4.0/scripting-examples/http-multipart-request.md %}

**Relevant k6 APIs**:
- [open(filePath, [mode])](https://docs.k6.io/docs/open-filepath-mode)
- [http.file(data, [filename], [contentType])](https://docs.k6.io/docs/file-data-filename-contenttype)

## UUID

### Generate v1 and v4 UUIDs
Universally unique identifier are handy in many scenarios, as k6 doesn't have built-in support for UUIDs we'll have to resort to using a Node.js library called [uuid](https://www.npmjs.com/package/uuid) and [Browserify](http://browserify.org/) (to make it work in k6).

There are a few of steps to make this work:

1. Make sure you have the necessary prerequisites installed:
    * [Node.js](https://nodejs.org/en/download/)
    * [Browserify](http://browserify.org/)
2. Install the `uuid` library:

    <kbd>npm install uuid</kbd>
3. Run it through browserify:

    <kbd>browserify node_modules/uuid/index.js -s uuid > uuid.js</kbd>
4. Move the `uuid.js` file to the same folder as your script file and you'll be able to import it into your test script:

    `import uuid from "./uuid.js"`

Here's an example generating a v1 and v4 UUID:

{% include 4.0/scripting-examples/uuid-generate-v1-v4.md %}


## WebSocket

### Testing a WebSocket API
{% include 4.0/scripting-examples/websocket-echo-api.md %}
