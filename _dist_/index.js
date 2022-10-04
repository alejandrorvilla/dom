import { subscribe } from "./lazy.js";

const main = document.querySelector('section')

document.querySelector('button').addEventListener('click', () => {
	const container = createImageNode();
	main.appendChild(container);
	subscribe(container);
});

function createImageNode() {
	const container = document.createElement('div');
	container.className = '';

	const random = Math.floor(Math.random() * (122)) + 1;
	const image = document.createElement('img');
	image.className = 'mx-auto rounded-md bg-gray-300';
	const src = `https://randomfox.ca/images/${random}.jpg`
	image.width = '300';
	image.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjMyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4=';
	image.dataset.src = src;

	const span = document.createElement('span');
	span.append(src);

	container.append(image, span);

	return container;
}

//Delegación de eventos
main.addEventListener('click', (event) => {
	const target = event.target;
	if(target.nodeName === 'IMG') {
		console.log(`Url: ${target.dataset.src}`)
	}
});
