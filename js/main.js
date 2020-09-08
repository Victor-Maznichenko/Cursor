$(function(){
	
	$('.filter-style').styler();

	$('.aside-slider').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 5000,
		arrows: true,
		speed: 600,
		vertical: true,
		verticalSwiping: true,
		prevArrow: '<button class="aside-slider__btns aside-slider__btnprev"><img src="images/asideslider-arrow.svg" alt=""></button>',
		nextArrow: '<button class="aside-slider__btns aside-slider__btnnext"><img src="images/asideslider-arrow.svg" alt=""></button>',
		asNavFor: '.main__slider',
	});
	$('.main__slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 5000,
		useTransform: false,
		speed: 600,
		arrows: false,
		vertical: true,
		verticalSwiping: true,
		prevArrow: '<button class="aside-slider__btns aside-slider__btnprev"><img src="images/asideslider-arrow.svg" alt=""></button>',
		nextArrow: '<button class="aside-slider__btns aside-slider__btnnext"><img src="images/asideslider-arrow.svg" alt=""></button>',
		asNavFor: '.aside-slider',
		focusOnSelect: true,
		centerMode: true,
	});

	$('.menu-btn').on('click', function(){
		$(this).toggleClass('menu-btn--active');
		$('.menu-mobile').toggleClass('menu-mobile--active');
	});
});
