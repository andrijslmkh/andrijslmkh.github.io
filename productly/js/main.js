$(function () {

	$('.slider').slick({
		autoplay: true,
		slidesToShow: 3,
		slidesToScroll: 3,
		arrows: false,
		dots: true,
		speed: 700,
		responsive: [
			{
				breakpoint: 1175,
				settings: {
					slidesToShow: 2,
					slideToScroll: 2,
				}
			},
			{
				breakpoint: 769,
				settings: {
					slidesToShow: 1,
					slideToScroll: 1,
				}
			}
		]
	});


	$('.menu__btn').on('click', function () {
		$('.menu__list').toggleClass('menu__list--active')
	});

});
