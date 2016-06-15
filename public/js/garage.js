const socket = io();
const controls = Array.from(document.querySelectorAll('.controls > div'));

controls.forEach((control) => {
	let id = control.id;

	control.addEventListener('click', () => {
		let newClass = control.className === 'off' ? 'on' : 'off';

		control.className = newClass;
		socket.emit(id, newClass);
	});

	socket.on(id, (data) => {
		control.className = data;
	});
});
