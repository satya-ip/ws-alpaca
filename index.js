var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

//formObj has shcmeas for forms
var formObj = require('./data/objs.js');

//Routing for index.html
app.use(express.static('public'));

// Static folder for user defined stylesheets and Scripts
app.use(express.static('public'));

io.on('connection', function (socket) {
    console.log('Client connected');

    var count = 0;

    /*
    We pass a count value and an Object  derived through looping form Object.
    The socket.emit will fire a new Object to the Client (browser) every 10sec
    until the loop is finsihed

    */
    function doSetTimeOut(i, data) {

        setTimeout(function () {
            socket.emit('jsondata', data);
            console.log("Count is ", i);
            //console.log("Obj is ", data);

        }, i * 5000);
    }

    //   Loop through formObj which has 3 Alpaca schemas
    for (var key in formObj) {

        doSetTimeOut(count, formObj[key]);
        count++;
    }

});

http.listen(3000, function () {
    console.log('listening on *:3000');
});