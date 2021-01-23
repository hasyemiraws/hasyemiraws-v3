$(function () {
	$(window).on("scroll", function () {
		if (!$('.content--section').length) return true;

		if ($(window).scrollTop() >= $('.content--section').offset().top - 40) {
			if (!$('.header__top').hasClass('header__top__scroll')) {
				$('.header__top').addClass('header__top__scroll');
			}
		} else {
			if ($('.header__top').hasClass('header__top__scroll')) {
				$('.header__top').removeClass('header__top__scroll').removeClass('header-sticky');
			}
		}
	});
});