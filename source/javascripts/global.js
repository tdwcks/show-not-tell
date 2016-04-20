
$(function(){

	$('.hamburger').on('click', function() {
		if($('.hamburger').hasClass('cross')) {
			$('nav').removeClass('active');
			$(this).addClass('collapse-burger');
			$(this).removeClass('cross');
		} else {
			$(this).removeClass('collapse_burger');
			$('nav').addClass('active');
			$(this).addClass('cross');
		}
	});	

});