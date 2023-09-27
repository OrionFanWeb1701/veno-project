/* Tiny slider settings */

const slider = tns({
	container: '.clients__slider',
	nav: false,
	items: 1,
	slideBy: 'page',
	autoplay: true,
	autoplayTimeout: 10000,
	autoplayButtonOutput: false,
	controls: false,
	loop: false,
	mouseDrag: true,

	responsive: {
		768: {
			items: 2,
			gutter: 32,
		},

		1440: {
			slideBy: 1,
			items: 3,
			fixedWidth: 437,
		},

		1920: {
			items: 4,
			fixedWidth: 440,
		},
	},
});
