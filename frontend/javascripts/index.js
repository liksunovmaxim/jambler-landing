requirejs.config({
	baseUrl: './js'
});


define([
	"jquery",
	"swiper",
	"ScrollMagic",
	"velocity",
	"animation.velocity",
	"debug.addIndicators",
	"jquery.ScrollMagic"
], function($, a, ScrollMagic) {
	"use strict";

	var swiper = new Swiper('.swiper-container', {
		slidesPerView: 'auto',
		freeMode: true,
		scrollbar: '.swiper-scrollbar',
		scrollbarHide: false
	});

	var controller = new ScrollMagic.Controller();

	// build scene
	var scene = new ScrollMagic.Scene({triggerElement: "#trigger"})
		// trigger a velocity opaticy animation
		.setVelocity("#animate", {opacity: 0}, {duration: 400})
		.addIndicators() // add indicators (requires plugin)
		.addTo(controller);
});
