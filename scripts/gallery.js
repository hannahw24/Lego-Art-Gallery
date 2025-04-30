function showDetails(setName) {
	// Store the value in localStorage so it can be used to filter
	// on the art page
	localStorage.setItem('setName', setName);

	// This is used to add smooth page load transition
	document.body.classList.add('fade-out');

	// Wait for animation to finish, then navigate
	setTimeout(() => {
		// Redirect to the art page
		window.location.href.includes('gallery.html')
			? (window.location.href = './art.html')
			: (window.location.href = './gift-shop-set.html');
	}, 400);
}

function redirectToGiftShop() {
	// Redirect to the gift shop page
	window.location.href = './gift-shop.html';
}

const minifigure = document.querySelector('.minifigure_image');
const artFrames = document.querySelectorAll('.gallery_container');
const giftShop = document.querySelector('.gift_shop_image');

// Hover effect for each picture frame
artFrames.forEach((frame) => {
	frame.addEventListener('mouseenter', () => {
		gsap.to(frame, {
			scale: 1.2,
			duration: 0.3,
			ease: 'back.out(1.7)',
		});
	});

	frame.addEventListener('mouseleave', () => {
		gsap.to(frame, {
			scale: 1,
			duration: 0.2,
			ease: 'power2.out',
		});
	});
});

// The following was taken from GSAP community blogs
// and ChatGPT to help achieve the desired mouse tracking effect

// Define the distance within which the image should stop moving
const stopDistance = 10;

// Function to check if the mouse is within stopDistance of any element
function isMouseNearElement(mouseX, mouseY) {
	for (const art of artFrames) {
		const artBoundary = art.getBoundingClientRect();

		// Check if mouse is within stopDistance of any side of the element
		const distanceX = Math.max(
			0,
			Math.max(artBoundary.left - mouseX, mouseX - artBoundary.right)
		);
		const distanceY = Math.max(
			0,
			Math.max(artBoundary.top - mouseY, mouseY - artBoundary.bottom)
		);

		// If the mouse is within the stopDistance from any edge of the element, return that element
		if (distanceX < stopDistance && distanceY < stopDistance) {
			return art;
		}
	}

	// Check if the mouse is within stopDistance of the gift shop image
	const giftShopBoundary = giftShop.getBoundingClientRect();
	const distanceX = Math.max(
		0,
		Math.max(giftShopBoundary.left - mouseX, mouseX - giftShopBoundary.right)
	);
	const distanceY = Math.max(
		0,
		Math.max(giftShopBoundary.top - mouseY, mouseY - giftShopBoundary.bottom)
	);
	// If the mouse is within the stopDistance from any edge of the gift shop image, return that element
	if (distanceX < stopDistance && distanceY < stopDistance) {
		return giftShop;
	}

	// If no element is found within the stopDistance, return null
	return null;
}

// Function to trigger a "click" event on the element
function simulateClick(element) {
	if (element) {
		// Trigger the click event on the element
		element.click();
	}
}

// Track the mouse position
window.addEventListener('mousemove', (e) => {
	const mouseX = e.clientX;
	const mouseY = e.clientY;

	// Check if the mouse is within 10px of any element in the group
	const nearElement = isMouseNearElement(mouseX, mouseY);

	// If the mouse is not near any element, move the minifigure with the mouse
	if (!nearElement) {
		gsap.to(minifigure, {
			left: mouseX - minifigure.width / 2 + 'px', // Center image on the mouse
			top: mouseY - minifigure.height / 2 + 'px', // Center image on the mouse
			duration: 0.1,
			ease: 'power3.out',
		});
	} else {
		// Simulate a click if the mouse is near an element
		simulateClick(nearElement);
	}
});
