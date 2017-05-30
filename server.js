/**
 * Created by Jian Ping Xu on 5/20/2017.
 */
var express = require('express');
var path = require('path');
var bodyParser = require("body-parser");
var app = express();
var users = require(__dirname + '/userDb');

app.get('/users', users.findAll);

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/createUser', function(req, res){
    res.sendFile(path.join(__dirname+ '/createUser.html'));
});

app.get('/portfolioOverview', function(req, res){
    res.sendFile(path.join(__dirname+ '/portfolioOverview.html'));
});

app.use(express.static(__dirname + '/'));

app.use(bodyParser.json());

app.get('/users', users.findAll);

app.get('/users/:id', users.findById);

app.get('/users/username/:id', users.findByUserName);

app.post('/users', users.addUsers);


app.listen(8080, function () {
    console.log('Example app listening on port 8080!')
});