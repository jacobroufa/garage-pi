const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const rpi = require('./rpi');

// our web-app
app.use('/', express.static('public'));

io.on('connection', listenToPi);

server.listen(80, () => console.log('listening on port 80'));

function listenToPi(socket) {
	console.log('client connected');

	socket.emit('door', 'off');
	socket.on('door', (data) => {
		// toggle the relay
		rpi.door.on();
		setTimeout(() => rpi.door.off(), 400);
	});
}
