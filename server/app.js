/**
 * This is the server side of the handswithoutborders project. 
 * It acts as a notification server that relays messages between
 * two clients. 
**/
var io = require('socket.io').listen(80);

io.on('connection', function (socket) {
	// emit any coming data with the tag 'update'
	socket.on('update', function (data) {
		socket.emit(data);
	});
});