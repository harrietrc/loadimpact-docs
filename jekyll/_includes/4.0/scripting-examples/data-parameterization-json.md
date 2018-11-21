{% highlight js linenos %}
/*
    Where contents of data.json is:
    {
        "users": [
            { username: "test", password: "qwerty" },
            { username: "test", password: "qwerty" }
        ]
    }
*/

const data = JSON.parse(open("./data.json"));

export default function() {
    let user = data.users[0];
    console.log(data.users[0].username);
}
{% endhighlight %}
