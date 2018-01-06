console.log('\'Allo \'Allo!');


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