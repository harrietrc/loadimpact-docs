{% highlight js linenos %}
import http from "k6/http";
import {sleep} from "k6";

// Import browserified AWSv4 signature library
import aws4 from "./aws4.js";

// Get AWS credentials from environment variables
const AWS_CREDS = {
    accessKeyId: __ENV.AWS_ACCESSKEY,
    secretAccessKey: __ENV.AWS_SECRETKEY
};

export default function() {
    // Sign the AWS API request
    const signed = aws4.sign({
            service: 'ec2',
            path: '/?Action=DescribeRegions&Version=2014-06-15'
        }, AWS_CREDS);

    // Make the actual request to the AWS API including the "Authorization" header with the signature
    let res = http.get(`https://${signed.hostname}${signed.path}`, { headers: signed.headers });

    // Print the response
    console.log(res.body);

    sleep(1);
}
{% endhighlight %}
