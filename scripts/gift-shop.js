// The following is taken from ChatGPT with minimal changes to match exisiting code
const container = document.querySelector('.gift_shop');
const setItem = document.querySelectorAll('.gift_shop_container');
const carousel = document.querySelector('.carousel');
// const itemHeight = setItem[0].offsetHeight;
// const totalItems = setItem.length;

// let index = 0;
// let autoSlideInterval;
// let isHovered = false;

// function goToSlide(i) {
// 	gsap.to(container, {
// 		y: -itemHeight * i,
// 		duration: 0.8,
// 		ease: 'power1.inOut',
// 	});
// }

// function startAutoSlide() {
// 	autoSlideInterval = setInterval(() => {
// 		if (!isHovered) {
// 			index = (index + 1) % totalItems;
// 			goToSlide(index);
// 		}
// 	}, 5000);
// }

// function stopAutoSlide() {
// 	clearInterval(autoSlideInterval);
// }

// carousel.addEventListener('mouseenter', () => {
// 	isHovered = true;
// 	stopAutoSlide();
// });

// carousel.addEventListener('mouseleave', () => {
// 	isHovered = false;
// 	startAutoSlide();
// });

// startAutoSlide(); // initialize
const itemHeight = setItem[0].offsetHeight;
const itemCount = setItem.length;

// Clone items for seamless looping
setItem.forEach((item) => {
	const clone = item.cloneNode(true);
	container.appendChild(clone);
});

// Total move distance
const totalHeight = itemHeight * itemCount;

// Timeline
const tl = gsap.timeline({
	delay: 1.5,
	repeat: -1,
	defaults: { ease: 'none' },
});

tl.to(container, {
	y: `-=${totalHeight}`,
	duration: 25,
	modifiers: {
		y: gsap.utils.unitize((y) => parseFloat(y) % totalHeight),
	},
});

carousel.addEventListener('mouseenter', () => tl.pause());
carousel.addEventListener('mouseleave', () => tl.play());
