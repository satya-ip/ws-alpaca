var app = angular.module('app', []);

app.factory('socket', function () {

    // Connect to the server.Default scoket io method
    var socket = io.connect('http://localhost:3000');

    //            Return socket object
    return socket;
});

//mainCtrl is injected with scope and socket factory
app.controller('mainCtrl', function ($scope, socket) {

    socket.on('jsondata', function (data) {
        //To empty the form container
        $("#alpaca-form").html('');

        //Populate the form container with newly arrived data from server
        $("#alpaca-form").alpaca(data);
        console.log(data);

        //This is important for 2 way data binding
        $scope.$digest();
    });

});