/* Swiper settings */

const swiper = new Swiper('.clients__swiper', {
	autoplay: {
		delay: 5000,
	},
	
	direction: 'horizontal',
	spaceBetween: 8,

	breakpoints: {
		768: {
			slidesPerView: 2,
			spaceBetween: 32,
		},
	},
});
