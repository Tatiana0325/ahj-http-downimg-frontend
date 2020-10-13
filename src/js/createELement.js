export default function createElement(url, id) {
	const imageContainer = document.createElement('div');
	imageContainer.className = 'image-elemtn';
	imageContainer.setAttribute('id', id);
	
	imageContainer.innerHTML = `
		<div>
			<img class="image" src="${url}" alt="Image">
		<div>
		<div class="close">
			<img class="close-img" src="./img/cross.png" alt="Cross">
		</div>
	`

	url = '';
	return imageContainer;
}