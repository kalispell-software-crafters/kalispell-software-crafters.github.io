const SKYLER_PHOTO_URL = new URL('./imgs/skyler.jpg', import.meta.url).href;
const TRAVIS_PHOTO_URL = new URL('./imgs/travis.jpg', import.meta.url).href;

// handles keypresses for accessibility
function handleClick(e) {
	if (e.type === 'keypress') {
		const code = e.keyCode;
		return code === 32 || code === 13;
	}
}

document.addEventListener('keypress', handleClick);

const hamburgerMenu = document.getElementById('menu-toggle');
const nav = document.getElementById('main-navigation');

let menuOpen = false;

function setMenuState(open) {
	menuOpen = open;
	hamburgerMenu.classList.toggle('open', open);
	nav.classList.toggle('visible', open);
	hamburgerMenu.setAttribute('aria-expanded', String(open));
	hamburgerMenu.setAttribute(
		'aria-label',
		open ? 'Close navigation menu' : 'Open navigation menu'
	);
}

function toggleMenu() {
	setMenuState(!menuOpen);
}

hamburgerMenu.addEventListener('click', toggleMenu);

document.addEventListener('keydown', event => {
	if (event.key === 'Escape' && menuOpen) {
		setMenuState(false);
		hamburgerMenu.focus();
	}
});

let currentProfile = document.querySelector('.profile--selected');
const orgName = document.getElementById('about__name');
const orgAbout = document.getElementById('about__desc');
const orgPhoto = document.getElementById('about__photo');

const orgProfiles = document.querySelectorAll('.profile');

for (let i = 0; i < orgProfiles.length; i++) {
	orgProfiles[i].addEventListener('click', selectProfile);
	orgProfiles[i].addEventListener('keypress', e => {
		if (handleClick(e)) {
			selectProfile(e);
		}
	});
}

function selectProfile(e) {
	const currentProfileId = e.currentTarget.id;
	const selectedOrganizer = organizers[currentProfileId];

	if (selectedOrganizer) {
		currentProfile.classList.remove('profile--selected');

		currentProfile = document.getElementById(`${currentProfileId}`);
		currentProfile.classList.add('profile--selected');

		orgName.textContent = selectedOrganizer.name;
		orgAbout.textContent = selectedOrganizer.about;
		orgPhoto.src = selectedOrganizer.profilePhoto;
		orgPhoto.alt = `Kalispell Software Crafters organizer ${selectedOrganizer.name}`;
	}
}

const organizers = {
	Travis: {
		name: 'Travis Craft',
		about: "I'm a Flathead native and remote software engineer. I want to connect with others to talk about software development and engineering. I first learned about software craftsmanship in the Fall of 2017 which led me to create this group. I've learned a lot along the way!",
		profilePhoto: TRAVIS_PHOTO_URL
	},
	Skyler: {
		name: 'Skyler Bexten',
		about: 'Flathead native with computer science degree from UM. Fell in love with programming in a Java course. Likes JavaScript, test-driven development and plays with Haskell on the side. Reads too many books on the history of computer science and too much manga.',
		profilePhoto: SKYLER_PHOTO_URL
	}
};
