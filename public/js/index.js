requirejs.config({
	baseUrl: './js'
});


define([
	"jquery",
	"swiper",
	"ScrollMagic",
	"TweenMax",
	"velocity",
	"animation.velocity",
	"animation.gsap",
	"debug.addIndicators",

], function($, a, ScrollMagic) {
	"use strict";

	var swiper = new Swiper('.swiper-container', {
		slidesPerView: 'auto',
		freeMode: true,
		scrollbar: '.swiper-scrollbar',
		scrollbarHide: false
	});

	var controller = new ScrollMagic.Controller();

	var tween1 = TweenMax.staggerFromTo(".phone__images-block", 2, {top: 700, opacity: 0}, {top: 0, opacity:1, ease: Back.linear}, 0.15);

	// build scene
	var scene = new ScrollMagic.Scene({triggerElement: "#trigger", duration: 300})
		.setTween(tween1)
		.addIndicators() // add indicators (requires plugin)
		.addTo(controller);
	var scene2 = new ScrollMagic.Scene({triggerElement: "#trigger", duration: 200, offset: 300})
		.setPin(".phone__images-block img")
		.addIndicators() // add indicators (requires plugin)
		.addTo(controller);
});
