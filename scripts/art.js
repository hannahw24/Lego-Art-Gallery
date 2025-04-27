document.addEventListener('DOMContentLoaded', async () => mainEvent());

async function mainEvent() {
	const artContainerFrame = document.querySelector('#frame');
	const artImage = document.querySelector('.art_container__image');
	const setInfoLeft = document.querySelector('.art_info_left');
	const setInfoRight = document.querySelector('.art_info_right');
	const backButton = document.querySelector('#back_button');
	const giftShopButton = document.querySelector('#gift_shop_button');

	const setName = localStorage.getItem('setName');

	const response = await fetch('./owned-architecture-sets.json');
	const data = await response.json();
	const architectureSet = data.filter(
		(item) => item.name === localStorage.getItem('setName')
	);
	console.log('architectureSet', architectureSet);

	// Set the frame color and image based on the set name
	if (setName === 'Paris' || setName === 'The White House') {
		artContainerFrame.className = 'art_container__frame_red';
		setName === 'Paris'
			? (artImage.src = './images/Paris.PNG')
			: (artImage.src = './images/White_House.PNG');
	} else if (setName === 'London' || setName === 'Great Pyramid of Giza') {
		artContainerFrame.className = 'art_container__frame_yellow';
		setName === 'London'
			? (artImage.src = './images/London.PNG')
			: (artImage.src = './images/Giza.PNG');
	} else {
		artContainerFrame.className = 'art_container__frame_blue';
		setName === 'Singapore'
			? (artImage.src = './images/Singapore.png')
			: (artImage.src = './images/SF.PNG');
	}

	// Display the set information
	setInfoLeft.innerHTML = `
        <h1>NUMBER OF PIECES: <span>${architectureSet[0].pieces}</span></h1>
        <h1>SET NUMBER: <span>${architectureSet[0].set}</span></h1>
        <h1>YEAR RELEASED: <span>${architectureSet[0].release}</span></h1>
        <h1>YEAR RETIRED: <span>${architectureSet[0].retired}</span></h1>
    `;
	setInfoRight.innerHTML = `
        <h1>WIDTH: <span>${architectureSet[0].width}</span></h1>
        <h1>HEIGHT: <span>${architectureSet[0].height}</span></h1>
        <h1>DEPTH: <span>${architectureSet[0].depth}</span></h1>
        <h1>BUILD HOURS: <span>${architectureSet[0].build_time}</span></h1>
    `;

	// Add event listeners to the buttons
	backButton.addEventListener('click', () => {
		window.location.href = './gallery.html';
	});
	giftShopButton.addEventListener('click', () => {
		window.location.href = './gift-shop.html';
	});
}
