
# [1] 
Use the Web Speech API’s SpeechRecognition interface to listen to the user’s voice.

# [2] 
 Send the user’s message to a commercial natural-language-processing API as a text string.

# [3] 
Once API.AI returns the response text back, use the SpeechSynthesis interface to give it a synthetic voice.

<img width="759" height="348" alt="image" src="https://github.com/user-attachments/assets/5344319b-c66c-4979-b443-8ad9e983540f" />


# [4]
npm init -f
The -f accepts the default setting, or else you can configure the app manually without the flag. Also, this will generate a package.json file that contains the basic info for your app.

# [5]
npm install express socket.io apiai --save
With the --save flag added, your package.json file will be automatically updated with the dependencies.


```javascript
const express = require('express'); //
//Express.js is a small web server framework for Node.js. 
//It's like the "engine" that:
//serves HTML pages,
//handles browser requests (like GET/POST),

//returns data (like JSON),
//serves files (like JS, CSS)
const app = express(); // app or web

app.use(express.static(__dirname + '/views')); // html
app.use(express.static(__dirname + '/public')); // js , css, images
//Why use __dirname?
// Because it helps you build file paths that will work on any computer — 
// even  if the location of your project changes. 


//So your web app becomes available at: app.listen();
const server = app.listen(5000);

// “When the browser visits localhost:5000/, send back the iiindex.html file.”
// req stands for Request
// res stands for Response
app.get('/', (req , res) => { 
    res.sendFile('iiindex.html') //	Sends a full file
});

```

# Problems (need to learn) 

app.use() adds middleware to your app.

# Middleware?
Middleware are functions that run before your route handlers (like app.get()). They can:

Serve files (HTML, CSS, JS, images)

Parse data

Log requests

Check permissions

Or anything else before responding

```javascript
app.use(express.static(__dirname + '/views'));
app.use(express.static(__dirname + '/public'));

```
So when your browser opens http://localhost:5000/index.html, Express looks in /views/index.html

app.get()
➤ What it does:
Defines a route handler for GET requests.
