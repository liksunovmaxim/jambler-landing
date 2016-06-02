requirejs.config({
	baseUrl: './js'
});


define(["jquery", "swiper"], function($) {
	"use strict";

	var swiper = new Swiper('.swiper-container', {
		slidesPerView: 'auto',
		freeMode: true,
		scrollbar: '.swiper-scrollbar',
		scrollbarHide: false
	});

});
