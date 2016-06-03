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

	// PHONE SECTION ANIMATION

	var tweenPhoneAnim = TweenMax.staggerFromTo(".phone__holder", 2, {top: 400, opacity: 0}, {top: 0, opacity:1, ease: Back.linear}, 0.15);

	var tweenTextAnim1 = TweenMax.staggerFromTo(".phone-text-1", 2, {top: 400, opacity: 0}, {top: 0, opacity:1, ease: Back.linear}, 0.15);

	new ScrollMagic.Scene({triggerElement: "#trigger", duration: 300, offset: -450})
		.setTween(tweenPhoneAnim)
		.triggerHook(0.21)
		.addIndicators({name: "PhoneArrive"})
		.addTo(controller);

	new ScrollMagic.Scene({triggerElement: "#trigger", duration: 4000, offset: 100})
		.addIndicators({name: "PhonePin"})
		.addTo(controller)
		.triggerHook(0.21)
		.setPin(".phone__images-block");

	new ScrollMagic.Scene({triggerElement: "#trigger", duration: 1000, offset: 100})
		.addIndicators({name: "Text1Pin"})
		.addTo(controller)
		.triggerHook(0.21)
		.setPin(".phone-text-1 .text-holder");

	new ScrollMagic.Scene({triggerElement: "#trigger", duration: 300, offset: -300})
		.setTween(tweenTextAnim1)
		.addIndicators({name: "Text1Arrive"})
		.addTo(controller)
		.triggerHook(0.21)
});
