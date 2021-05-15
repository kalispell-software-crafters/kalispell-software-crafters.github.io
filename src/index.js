const hamburgerMenu = document.querySelector('.hamburger-container');
const nav = document.querySelector('.nav');

let menuOpen = false;

function toggleMenu() {
	if (!menuOpen) {
		nav.classList.add('visible');
		menuOpen = true;
	} else {
		nav.classList.remove('visible');
		menuOpen = false;
	}
}

hamburgerMenu.addEventListener('click', toggleMenu);
