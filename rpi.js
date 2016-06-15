const five = require('johnny-five');
const raspi = require('raspi-io');
const board = new five.Board({
	io: new raspi()
});

// export any pins here
// TODO: interior and exterior lights, door state reed switches, music and TV
module.exports = {
	'door': new five.Relay({
		pin: 0,
		type: 'NC'
	})
};
