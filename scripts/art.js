document.addEventListener('DOMContentLoaded', async () => mainEvent());

async function mainEvent() {
	// const art = document.querySelector('.art');
	// const artContainer = document.querySelector('.art-container');
	// const artTitle = document.querySelector('.art-title');
	// const artDescription = document.querySelector('.art-description');
	// const artImage = document.querySelector('.art-image');
	console.log('setName', localStorage.getItem('setName'));

	const response = await fetch('./owned-architecture-sets.json');
	const data = await response.json();
	const architectureSet = data.filter(
		(item) => item.name === localStorage.getItem('setName')
	);
	console.log('architectureSet', architectureSet);

	// artTitle.innerText = artwork.title;
	// artDescription.innerText =
	// 	artwork.exhibition_history || 'No description available';
	// artImage.src = `https://www.artic.edu/iiif/${artwork.image_id}/full/843,/0/default.jpg`;
}
