function showDetails(setName) {
	// Store the value in localStorage so it can be used to filter
	// on the art page
	localStorage.setItem('setName', setName);

	// Redirect to the art page
	window.location.href = './art.html';
}
