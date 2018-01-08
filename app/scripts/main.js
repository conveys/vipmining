console.log('\'Allo \'Allo! here');

AOS.init();


	$('a[href^="#"]').on('click', function(event) {

		var target = $(this.getAttribute('href'));
		if( target.length ) {
			event.preventDefault();
			$('html, body').stop().animate({
				scrollTop: target.offset().top - 61 //value needs to be dinamic
			}, 500, 'swing');
		}
		
	});


	$('.fade-in').each(function() {
		var src = $(this).data('src');
		if (src) {
			var img = new Image();
			img.style.display = 'none';
			img.onload = function() {
				$(this).fadeIn(250).addClass('img-cover-bg');
			};
			$(this).append(img);
			img.src = src;
		}
	});






//$(function() {

	// $(function() {
	// 	$(document).on("scroll", onScroll);
		
	// 	$('a[href^="#"]').on('click',  function(e) {
	// 		//console.log(this);
	// 		e.preventDefault();
	// 		$(document).off("scroll");

	// 		//$('a').each(function() {
	// 			//$(this).removeClass('active');
	// 		//})
	// 		//$(this).addClass('active');

	// 		var target = this.hash,
	// 			menu = target;

	// 			$target = $(target);

	// 			// $('html, body').stop().animate({
	// 			// 	'scrollTop': $target.offset().top - headerHeight
	// 			// }, 500, 'swing', function() { });

	// 	});

	// });

	// function onScroll(e) {};

//});