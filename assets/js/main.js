
async function getData() {
	// 1. Получить данные с сервера
	let url = 'https://bngprm.com/api/v2/models-online?c=614262&client_ip=192.168.1.1&limit=8';
	const response = await fetch(url);
	const data = await response.json();

	return data.models;
}
const result = new Promise((resolve, reject) => {
	resolve(getData());
	// or
	// reject(new Error("Error!"));
});
function onMove() {
	let signal  = document.createElement('div');
	signal.className = "signal";
	let body = document.querySelector('body');
	signal.textContent = 'очко лизал';
	body.appendChild(signal);
}
result.then(
	(value) => {
		value.forEach((item, index, array) => {
			let element = document.createElement('div');
			element.className = "element"	
			let a = document.createElement('a');
			let img = document.createElement('img');
			a.href = item.chat_url;
			a.target="_blank"
			a.appendChild(img);
			element.appendChild(a);
			let box = document.querySelector('.box');
			img.className = "avatar"
			img.src = item.live_images.thumbnail_image_medium;
			box.appendChild(element);
			element.addEventListener('mouseover', onMove);
		}); // Success!
	},
	(reason) => {
		console.error(reason); // Error!
	},
);
let hostName = document.location.origin;
let hostNameLink = document.querySelector('.host-name');
hostNameLink.innerHTML = hostName;