const hamburgerMenu = document.querySelector('.hamburger');
const nav = document.querySelector('.nav');

let menuOpen = false;

function toggleMenu() {
	if (!menuOpen) {
		hamburgerMenu.classList.add('open');
		nav.classList.add('visible');
		menuOpen = true;
	} else {
		hamburgerMenu.classList.remove('open');
		nav.classList.remove('visible');
		menuOpen = false;
	}
}

hamburgerMenu.addEventListener('click', toggleMenu);
