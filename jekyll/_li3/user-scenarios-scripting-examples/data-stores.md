---
layout: classic-docs
title: Load Impact 3.0 - Using Data Stores (Parameterized Data)
description: Data stores allow you to parameterize data in your script.  User Logins, URLs and form data are just some examples.
permalink: /3.0/data-stores
categories: [user-scenario-scripting-examples]
order: 14
redirect_from: /knowledgebase/articles/174258-how-do-i-use-parameterized-data-data-stores
---


Data stores are used to parameterize data in load scripts. You create a data store from a CSV file containing the data you want to use in your load scripts. The CSV file should contain rows with one or more column fields in each row. The column fields should be separated by some separator character or string. You upload your CSV file(s) in the user scenario configuration interface, associating the data store(s) with that user scenario. In this process you also give the data store(s) a name.

Inside your load script you will then be able to use the datastore module functionality to initialize a datastore object by using the `datastore.open()`` and referring to the name of your data store(s). The datastore object, once initialized, can be used to extract data from your data store(s).

Data stores are a very convenient way to deal with large amounts of data you might need to access from your load script. One of the most common use cases is that you might have a list with 10,000 usernames and passwords that you want the simulated clients in a load test to use to access restricted content on your site. Entering all these usernames and passwords by hand into your load script would be a time-consuming task, but you might be able to export them to a file in CSV format, allowing you to upload them and create a data store from them.

Example:
Let’s say you have a CSV file called `user_credentials.csv` that looks like this:
```
Username,Password
joe,secret
bill,secret2
anne,verysecret
jim,topsecret
sally,ohsosecret
```
It contains the usernames and passwords of three users, and you want to use these in your load test.

To upload the CSV file as a data store, go to the menu section entitled "Date Stores" and click the button "New Data Store".





This box will pop open and allow you to upload your CSV file, as well a preview column names before uploading. You choose a file on your local computer that you want to upload. This file should be a text file in the CSV format. It can be up to a maximum of 50 MB in size. In our example we select our small “user_credentials.csv” file that contains only five rows. Next, we will see this:




Note: the file has not been uploaded yet, but parsed on the client side, via JavaScript. In our case, the file is so small that the preview shows all of it, but most of the time your CSV files are probably going to be quite large. The preview shows you what data your file contains, and also how it is going to be parsed when it is uploaded. On the screenshot above you can see that we will get six rows, with five columns in each row. However, we are not so interested in including the first row from the file – the one that says “Username” and “Password”. Those are just the column names, not actual login credentials that we can use. You do this by changing the "Start from line" option.
Note: with these extra options you can change the field separator character to be something other than the comma character, for example it is quite common that CSV files have semicolon as field separator. You can also specify what character is used to quote string values inside the CSV file (“Field delimiter”).

When we are done setting file parsing options we click the “Upload” button, which starts the upload of the CSV file. If the file is large, the upload may take a little while. To avoid having to wait around while the file uploads, we will show you a progress bar at the bottom of your screen. This will notify you when the file has been uploaded. You can move on to other tasks while you wait for the file to upload.



Once you've added your data store, you will see it in the list of data stores you have available to use. From this list view, you can see how many rows (lines) of data were included in the CSV and delete any old data stores you no longer need.:


To use your data store(s) in a user scenario, proceed to the menu section called "User scenarios". Either select a previously created scenario from the list, or create a new scenario.

If you are creating a new user scenario, select the "Scripting" option and proceed to our scripting IDE.




Once in the IDE, you can select your data store from the drop down menu. You can also upload a new data store if you wish. Following the same steps as explained above.


Now, you just have to click to select which data stores to associate with your user scenario. You can use MULTIPLE data stores in the same user scenario. Please note: you must select a data store to use it in the scenario. If let unselected you will get a Script Error "[Line]Failed to find datastore "data store name"."

In your load script, you could then use the following code:
```
 -- Initialize data store
 local ds = datastore.open("login")
 -- Get a random row from data store
 local row = ds:get_random()
 -- The row is a table (array). Extract username field from it
 local username = row[1]
 -- ...and password field
 local password = row[2]
 -- Issue a HTTP POST request to login this user on our site
 http.request({"POST", "http://test.loadimpact.com/user_login.php", data="username=" .. username .. "&password=" .. password})
```
