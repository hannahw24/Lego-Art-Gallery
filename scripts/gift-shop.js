// The following is taken from ChatGPT with minimal changes to match exisiting code
const container = document.querySelector('.gift_shop');
const setItem = document.querySelectorAll('.gift_shop_container');
const carousel = document.querySelector('.carousel');
const itemHeight = setItem[0].offsetHeight;
const totalItems = setItem.length;

let index = 0;
let autoSlideInterval;
let isHovered = false;

function goToSlide(i) {
	gsap.to(container, {
		y: -itemHeight * i,
		duration: 0.8,
		ease: 'power1.inOut',
	});
}

function startAutoSlide() {
	autoSlideInterval = setInterval(() => {
		if (!isHovered) {
			index = (index + 1) % totalItems;
			goToSlide(index);
		}
	}, 5000);
}

function stopAutoSlide() {
	clearInterval(autoSlideInterval);
}

carousel.addEventListener('mouseenter', () => {
	isHovered = true;
	stopAutoSlide();
});

carousel.addEventListener('mouseleave', () => {
	isHovered = false;
	startAutoSlide();
});

startAutoSlide(); // initialize
