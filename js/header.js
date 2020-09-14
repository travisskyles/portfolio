$(function () {
	$('#attr_info').hover(function () {
		$('#attr_box').toggleClass('hidden');
	});

	$('.icon-wrapper').hover(function () {
		// $(this).children(':first').toggleClass('hidden');
		$(this).children(':last').toggleClass('hidden');
	});
});
