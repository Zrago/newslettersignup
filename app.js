//express webserver
var express = require('express')
var app = express()
//bodyParser brukes til og tolke data fra klienten
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
//operativsystem api (brukes for linje skift)
var os = require('os');
//Gir tillgang til filsystem
var fs = require("fs");

//Sender tilbake start siden
app.get('/', function(req, res){
    res.sendfile('index.htm', { root: __dirname + "/www" } );
});

//sender epost addresen og lagrer den i en fil
app.post ('/signUp', function (req, res){
  console.log(req.body.email);
    //lagres eposten på en fil
    fs.appendFile('message.txt', req.body.email+os.EOL, function (err) {
    });
    res.send("registret");

  });
  //Hovedløkke for server
app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});
app.use('/', express.static("www"));
