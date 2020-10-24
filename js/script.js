$(function(){

	$('.slider').slick({
		arrows: false,
		dots: true,
		fade: true,
		speed: 2500,
		autoplay: true,
		responsive: [
			{
			  breakpoint: 641,
			  settings: {
				 dots: false
			  }
			}
		 ]
	});

	$('.header-btn').on('click', function(){
		$('.menu').addClass('active');
	});

	$('.menu-btn').on('click', function(){
		$('.menu').removeClass('active');
	});

	$('.menu-list a').on('click', function(){
		$('.menu').removeClass('active');
	});


	new WOW().init();

});