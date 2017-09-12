var express = require('express');
var app = express();
/*
app.get('/', function(req, res){ 
        res.send("Hello world from server.js")
        }       
       );
*/
//static = html, css static files.
app.use(express.static(__dirname + "/public"));

app.listen(2000);
console.log("server runing on port 2000");