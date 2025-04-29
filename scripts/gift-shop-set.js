document.addEventListener('DOMContentLoaded', async () => mainEvent());

async function mainEvent() {
	const giftShopImage = document.querySelector(
		'.gift_shop_set_container__image'
	);
	const setInfoLeft = document.querySelector('.set_info_left');
	const setInfoRight = document.querySelector('.set_info_right');
	const backButton = document.querySelector('#back_button');
	const galleryButton = document.querySelector('#gallery_button');

	const setName = localStorage.getItem('setName');

	const response = await fetch('./json/buy-architecture-sets.json');
	const data = await response.json();
	const architectureSet = data.filter(
		(item) => item.name === localStorage.getItem('setName')
	);

	// Set the frame color and image based on the set name
	if (setName === 'Trevi Fountain' || setName === 'Notre-Dame de Paris') {
		setName === 'Trevi Fountain'
			? (giftShopImage.src = './images/Trevi_Fountain_Box.png')
			: (giftShopImage.src = './images/Notre_Dame_Box.png');
	} else if (setName === 'Himeji Castle' || setName === 'Taj Mahal') {
		setName === 'Himeji Castle'
			? (giftShopImage.src = './images/Himeji_Castle_Box.png')
			: (giftShopImage.src = './images/Taj_Mahal_Box.png');
	} else {
		setName === 'Statue of Liberty'
			? (giftShopImage.src = './images/Statue_Of_Liberty_Box.png')
			: (giftShopImage.src = './images/NY_Box.png');
	}
	giftShopImage.alt = `Lego Architecture ${setName}`;

	// Display the set information
	setInfoLeft.innerHTML = `
        <h1>COST: <span>${architectureSet[0].cost}</span></h1>
        <h1>NUMBER OF PIECES: <span>${architectureSet[0].pieces}</span></h1>
        <h1>SET NUMBER: <span>${architectureSet[0].set}</span></h1>
        <h1>YEAR RELEASED: <span>${architectureSet[0].release}</span></h1>
        <h1>YEAR RETIRED: <span>${architectureSet[0].retired}</span></h1>
    `;
	setInfoRight.innerHTML = `
        <h1>WIDTH: <span>${architectureSet[0].width}</span></h1>
        <h1>HEIGHT: <span>${architectureSet[0].height}</span></h1>
        <h1>DEPTH: <span>${architectureSet[0].depth}</span></h1>
        <h1><a href=${architectureSet[0].link} target="_blank" rel="noopener noreferrer">LINK TO PURCHASE</a></h1>
    `;

	// Add event listeners to the buttons
	backButton.addEventListener('click', () => {
		window.location.href = './gift-shop.html';
	});
	galleryButton.addEventListener('click', () => {
		window.location.href = './gallery.html';
	});
}
