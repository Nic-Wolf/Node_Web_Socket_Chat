// TODO - setup a public folder for the frontend

var express = require('express');
var app     = express();
var http    = require('http').Server(app);
var io      = require('socket.io')(http);
var path    = require('path');

var port = process.env.PORT || 1337;


// Set the public folder to serve public assets
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});


// Socket.io Connection Actions
io.on('connection', function(socket) {
  socket.on('chat message', function(msg) {
    io.emit('chat message', msg);
  });
});


// Port Listener
http.listen(port, function() {
	console.log("Node server running on port: " + port + ".");
	console.log("Press Ctrl-C to Exit.");
});

