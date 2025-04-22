// window.onload = () => {
// 	const colors = ['#c91a09', '#ffd700', '#0055bf'];
// 	document
// 		.querySelectorAll('.frame')
// 		.forEach(
// 			(el) =>
// 				(el.style.backgroundColor =
// 					colors[Math.floor(Math.random() * colors.length)]),
// 			(el.style.display = 'flex')
// 		);
// };
document.addEventListener('DOMContentLoaded', (event) => {
	const colors = ['#c91a09', '#ffd700', '#0055bf'];
	document
		.querySelectorAll('.frame')
		.forEach(
			(el) => (
				(el.style.backgroundColor =
					colors[Math.floor(Math.random() * colors.length)]),
				(el.style.display = 'flex')
			)
		);
});
