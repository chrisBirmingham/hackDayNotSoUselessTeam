var express = require('express');
var fs = require('fs');
var app = express();

app.get('/', function (req, res) {
    res.send('Hello World!');
});

app.get('/team', function(req, res){
    res.send("drjhgriufhbeiufhefiuhzbefugfv\niuefheiufheuifhefu\newuifheiufhegui");
});

app.get('Get.aspx', function(req, res){
    req.param("username");
    req.param("age");
    res.send("Hello" + username)
});

app.get('/song', function(req, res){
    var song = req.param("song");
    console.log(song);
    fs.readFile(song, function(err, data){
        if(err){
            console.log(err);
            res.send("Error");
        } else {
            var response = "";
            response = "<audio controls><source src=\"data:audio/mp3;base64," + new Buffer(data, 'base64') + "\></audio>"
            res.send(response);
        } 
    });
});

    var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});
