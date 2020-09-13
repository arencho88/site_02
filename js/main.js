$(function(){

	$('.reviews__sliders').slick({
		infinite: true,
		slidesToShow: 2,
		slidesToScroll: 2,
		arrows: false,
		dots: true,
		responsive: [
			{
			  breakpoint: 1110,
			  settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				infinite: true,
				dots: true
			  }
			}
		]
	});

	$('.header__nav__btn').on('click', function(){
		$('.header__nav ul').slideToggle();
	});

	
});