'use strict';

if ($(window).width() < 768) {
	$('.header__img').removeClass('fadeInRight').addClass('fadeInUp');
	$('.header__wrapper').removeClass('fadeInLeft').addClass('fadeInDown');
}

// SCROLL-DOWN
$(document).on('click', function(event) {
	var eventTarget = event.target;
	var attrValue = $(eventTarget).attr('href');

	if((attrValue == '#about') || (attrValue == '#services') || (attrValue == '#contacts') || (attrValue == '#profile') || $(eventTarget).hasClass('footer__img-arrow-up') || $(eventTarget).hasClass('header__img-arrow-down')) {

		if ($(eventTarget).hasClass('header__img-arrow-down')) {
			scroll(eventTarget.parentNode);
			return;
		}

		if ($(eventTarget).hasClass('footer__img-arrow-up')) {
			scroll(eventTarget.parentNode);
			return;
		}

		if ($(eventTarget).hasClass('header__button')) {
			setTimeout(function () {
				$('#in-focus').focus();
			}, 300);
		}

		scroll(eventTarget);

	} else {

		return;
	}
});

function scroll (eventTarget) {
	$('html, body').animate({
		scrollTop: $($.attr(eventTarget, 'href')).offset().top
	}, 600);
	return false;
}
// SCROLL-DOWN

// WOW-ANIMATION
var wow = new WOW({

    boxClass:     'wow',      // default
    animateClass: 'animated', // default
    offset:       100,          // default 0
    mobile:       true,       // default
    live:         true        // default
});

wow.init();
// WOW-ANIMATION

//ANIMATION
var imgMouse = $('.our-services__img-mouse');
var textAnimation = $('.our-services__text-animation');

$(window).on('scroll', function() {

	//Title-underline
	$('.title').each(function() {
		var imagePos = $(this).offset().top;
		var topOfWindow = $(window).scrollTop();
		var heightWindow = $(window).height();
		if (imagePos < topOfWindow + heightWindow - 50) {
			$(this).addClass('playing-gradient');
		}
	});

	// $('.title').each(function() {
	// 	var imagePos = $(this).offset().top;
	// 	var topOfWindow = $(window).scrollTop();
	// 	var heightWindow = $(window).height();
	// 	if (imagePos < topOfWindow + heightWindow - 50) {
	// 		$(this).addClass('playing-gradient');
	// 	}
	// });

	//Mouse-move (adaptive-animation)
	if ($(this).width() < 1200)	{

		imgMouse[2].setAttribute('data-wow-delay', '0s');
		textAnimation[2].setAttribute('data-wow-delay', '.2s');
		imgMouse[3].setAttribute('data-wow-delay', '.2s');
		textAnimation[3].setAttribute('data-wow-delay', '.4s');

		imgMouse[4].setAttribute('data-wow-delay', '0s');
		textAnimation[4].setAttribute('data-wow-delay', '.2s');
		imgMouse[5].setAttribute('data-wow-delay', '.2s');
		textAnimation[5].setAttribute('data-wow-delay', '.4s');
	}

	if ($(this).width() < 768)	{

		for (var i = 0; i < imgMouse.length; i++) {

			imgMouse[i].setAttribute('data-wow-delay', '0s');
			textAnimation[i].setAttribute('data-wow-delay', '.2s');
		}
	}
});
//ANIMATION

// SLIDER-WEB
$('.slider__items-web').slick({
	appendArrows: $('.slider__arrows-web'),
	prevArrow: '<div class="slider__prev"><i class="icon-arrow-right"></i></div>',
	nextArrow: '<div class="slider__next"><i class="icon-arrow-left"></i></div>',
	// autoplay: true,
	// autoplaySpeed: 2000,
	slidesToShow: 2,
	// centerMode: true,
	// centerPadding: '60px',


	// slidesToScroll: 1,
	// infinite: false,
	responsive: [
	{
		breakpoint: 576,
		settings: {
			slidesToShow: 1,
		}
	},
	]
});
// SLIDER-WEB

// SLIDER-3D
$('.slider__items-3d').slick({
	appendArrows: $('.slider__arrows-3d'),
	prevArrow: '<div class="slider__prev"><i class="icon-arrow-right"></i></div>',
	nextArrow: '<div class="slider__next"><i class="icon-arrow-left"></i></div>',
	// autoplay: true,
	// autoplaySpeed: 2000,
	slidesToShow: 2,
	// centerMode: true,
	// centerPadding: '60px',


	// slidesToScroll: 1,
	// infinite: false,
	responsive: [
	{
		breakpoint: 576,
		settings: {
			slidesToShow: 1,
		}
	},
	]
});
// SLIDER-3D

// BURGER-BUTTON
$('.burger-btn').click(function() {
	$(this).toggleClass('burger-btn_is-active');
	$('.burger-menu').fadeToggle('fast');
});
// BURGER-BUTTON

// ZOOM-PICTURE
$('.lightzoom').lightzoom({
	speed: 5,
	imgPadding: 7,
	viewTitle: true,
	isOverlayClickClosing: true,
	isEscClosing: true
});
// ZOOM-PICTURE






