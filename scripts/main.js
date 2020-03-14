'use strict';

$(document).ready(function () {
	// toggle nav
	var $togglenav = $('.toggle-nav');

	$togglenav.on('click', function () {
		$togglenav.toggleClass('button-open');
		$('.menu-wrap').toggleClass('menu-show');
	});
});