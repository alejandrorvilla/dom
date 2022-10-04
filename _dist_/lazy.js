const isIntersecting = (entry) => {
	return entry.isIntersecting;
}

const loadImage = (entry) => {
	const container = entry.target;

	const image = container.firstChild;
	image.src = image.dataset.src;
	
	observer.unobserve(container);
}

const observer = new IntersectionObserver((entries) => {
	entries.filter(isIntersecting).forEach(loadImage);
});

export const subscribe = (container) => {
	observer.observe(container);
}