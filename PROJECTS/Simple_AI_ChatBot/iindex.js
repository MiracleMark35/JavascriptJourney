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
    res.sendFile('/views/iiindex.html') //	Sends a full file
});