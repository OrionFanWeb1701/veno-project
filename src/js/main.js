/* Burger menu */

const activeMenu = () => {
	const mainPage = document.querySelector('.main-page');

	const menuBtn = document.querySelector('.hero__panel p');
	const navigation = document.querySelector('.nav__menu');
	const closeBtn = document.querySelector('.nav__close p');
	const opacityBox = document.querySelector('.opacity-box');

	/* Service navigation */

	const removeActiveClasses = () => mainPage.classList.remove('main-page--active');

	menuBtn.addEventListener('click', () => {
		mainPage.classList.add('main-page--active');

		if (mainPage.classList.contains('main-page--active'))
			navigation.addEventListener('click', (e) => {
				if (e.target.nodeName == 'A') removeActiveClasses();
			});
	});

	closeBtn.addEventListener('click', () => removeActiveClasses());

	opacityBox.addEventListener('click', () => removeActiveClasses());
};

/* Scroll scripts */

window.addEventListener('scroll', () => {
	const currentSection = window.scrollY;
	const heroPanel = document.querySelector('.hero__panel');
	const scrollText = document.querySelector('.hero__scroll-text');
	const scrollTextLink = document.querySelector('.hero__scroll-text a');

	const sections = document.querySelectorAll('section');
	const menuItem = document.querySelectorAll('.nav__menu a');

	const sectionsBox = [];

	sections.forEach((section) => {
		/* Change style hero panel */

		if (section.classList.contains('white-bg') && section.offsetTop <= currentSection + 50) {
			heroPanel.classList.add('hero__panel--scroll');
		} else if (!section.classList.contains('white-bg') && section.offsetTop <= currentSection + 50) {
			heroPanel.classList.remove('hero__panel--scroll');
		}

		if (currentSection >= 15) {
			scrollText.classList.add('hero__scroll-text--change');
		} else {
			scrollText.classList.remove('hero__scroll-text--change');
		}

		/* ScrollSpy */

		if (currentSection <= section.offsetTop + section.offsetHeight - 50) {
			sectionsBox.push(section);

			const activeSection = document.querySelector(`[href*="${sectionsBox[0].id}"]`);

			menuItem.forEach((item) => item.classList.remove('active'));

			activeSection.classList.add('active');

			/* Scroll button */

			const activeSectionId = sectionsBox[0].id;

			switch (activeSectionId) {
				case 'start':
					scrollTextLink.setAttribute('href', '#about-me');
					break;

				case 'about-me':
					scrollTextLink.setAttribute('href', '#service');
					break;

				case 'service':
					scrollTextLink.setAttribute('href', '#projects');
					break;

				case 'projects':
					scrollTextLink.setAttribute('href', '#clients');
					break;

				case 'clients':
					scrollTextLink.setAttribute('href', '#contact');
					break;
			}
		}
	});
});

/* Current year */

const handleCurrentYear = () => {
	const footerYear = document.querySelector('.footer-year');
	const year = new Date().getFullYear();

	footerYear.innerText = year;
};

activeMenu();
handleCurrentYear();
