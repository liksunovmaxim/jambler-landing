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

	var mobileWidth = 950;

	var swiper = new Swiper('.swiper-container', {
		slidesPerView: 'auto',
		freeMode: true,
		scrollbar: '.swiper-scrollbar',
		scrollbarHide: false,
		breakpoints: {
			950: {
				freeMode: false,
				slidesPerView: 1,
				scrollbar: false,
				pagination: '.swiper-pagination',
				paginationClickable: true,
				nextButton: '.swiper-button-next',
				prevButton: '.swiper-button-prev'
			}
		}
	});

	var controller = new ScrollMagic.Controller();
	console.log(controller);

	$(window).on('resize', function(){
		if($(this).width() < mobileWidth){
			controller.destroy(true);
		} else {
			controller.update(true);
		}
	});

	$(window).on('load', function(){
		if($(this).width() < mobileWidth){
			controller.destroy(true);
		}
	});

	$('.burger-btn').on('click', function(){
		if(!$(this).hasClass('active')){
			$(this).addClass('active');
			$(this).next().slideDown('fast');
		} else {
			$(this).removeClass('active');
			$(this).next().slideUp('fast');
		}
	});

	// PHONE SECTION ANIMATION

	var tweenPhoneAnim = TweenMax.staggerFromTo(".phone__holder", 2, {top: 400, opacity: 0}, {top: 0, opacity:1, ease: Back.linear}, 0.15);

	var tweenTextAnim1 = TweenMax.staggerFromTo(".phone-text-1", 2, {top: 400, opacity: 0}, {top: 0, opacity:1, ease: Back.linear}, 0.15);

	new ScrollMagic.Scene({triggerElement: "#trigger", duration: 300, offset: -450})
		.setTween(tweenPhoneAnim)
		.triggerHook(0.21)
		.addIndicators({name: "PhoneArrive"})
		.addTo(controller);

	new ScrollMagic.Scene({triggerElement: "#trigger", duration: 3200, offset: 100})
		.addIndicators({name: "PhonePin"})
		.addTo(controller)
		.triggerHook(0.21)
		.setPin(".phone__images-block");

	new ScrollMagic.Scene({triggerElement: "#trigger", duration: 500, offset: 100})
		.addIndicators({name: "Text1Pin"})
		.addTo(controller)
		.triggerHook(0.21)
		.setPin(".phone-text-1 .text-holder");

	new ScrollMagic.Scene({triggerElement: "#trigger", duration: 300, offset: -300})
		.setTween(tweenTextAnim1)
		.addIndicators({name: "Text1Arrive"})
		.addTo(controller)
		.triggerHook(0.21)

	new ScrollMagic.Scene({triggerElement: "#trigger", duration: 500, offset: 1050})
		.addIndicators({name: "Text2Pin"})
		.addTo(controller)
		.triggerHook(0.21)
		.setPin(".phone-text-2 .text-holder");

	new ScrollMagic.Scene({triggerElement: "#trigger", offset: 1050})
		.setClassToggle(".image2", "arrived")
		.addIndicators({name: "image2 - add a class"})
		.triggerHook(0.21)
		.addTo(controller);

	new ScrollMagic.Scene({triggerElement: "#trigger", duration: 500, offset: 2000})
		.addIndicators({name: "Text3Pin"})
		.addTo(controller)
		.triggerHook(0.21)
		.setPin(".phone-text-3 .text-holder");

	new ScrollMagic.Scene({triggerElement: "#trigger", offset: 2000})
		.setClassToggle(".image3", "arrived")
		.addIndicators({name: "image3 - add a class"})
		.triggerHook(0.21)
		.addTo(controller);

	new ScrollMagic.Scene({triggerElement: "#trigger", duration: 300, offset: 3000})
		.addIndicators({name: "Text4Pin"})
		.addTo(controller)
		.triggerHook(0.21)
		.setPin(".phone-text-4 .text-holder");

	new ScrollMagic.Scene({triggerElement: "#trigger", offset: 3000})
		.setClassToggle(".image3", "with-shadow")
		.addIndicators({name: "image2 - add a class"})
		.triggerHook(0.21)
		.addTo(controller);

	new ScrollMagic.Scene({triggerElement: "#trigger", offset: 3000})
		.setClassToggle(".image4", "arrived")
		.addIndicators({name: "image4 - add a class"})
		.triggerHook(0.21)
		.addTo(controller);

	// SOCIAL BUTTONS SECTION ANIMATION

	var tweenButtonTextAnim = TweenMax.staggerFromTo(".social-section .text", 2, {top: 400, opacity: 0}, {top: 0, opacity:1, ease: Back.linear}, 0.15);
	
	var tweenButton1Anim = TweenMax.staggerFromTo(".social-section .fb-holder", 2, {top: 800, opacity: 0}, {top: 0, opacity:1, ease: Back.linear}, 0.15);
	var tweenButton2Anim = TweenMax.staggerFromTo(".social-section .gp-holder", 2, {top: 1000, opacity: 0}, {top: 0, opacity:1, ease: Back.linear}, 0.15);
	var tweenButton3Anim = TweenMax.staggerFromTo(".social-section .vk-holder", 2, {top: 1200, opacity: 0}, {top: 0, opacity:1, ease: Back.linear}, 0.15);

	new ScrollMagic.Scene({triggerElement: "#trigger1", duration: 300, offset: -300})
		.setTween(tweenButtonTextAnim)
		.triggerHook(0.5)
		.addIndicators({name: "sOCIALTextArrive"})
		.addTo(controller);

	new ScrollMagic.Scene({triggerElement: "#trigger1", duration: 250, offset: 400})
		.setPin('.social-section .text-wrapper')
		.triggerHook(0.5)
		.addIndicators({name: "sOCIALTextPin"})
		.addTo(controller);

	new ScrollMagic.Scene({triggerElement: "#trigger1", duration: 250, offset: 400})
		.setPin('.social-section__buttons')
		.triggerHook(0.5)
		.addIndicators({name: "sOCIALTextPin"})
		.addTo(controller);

	new ScrollMagic.Scene({triggerElement: "#trigger1", duration: 400, offset: -150})
		.setTween(tweenButton1Anim)
		.triggerHook(0.5)
		.addIndicators({name: "sOCIALButton1Arrive"})
		.addTo(controller);

	new ScrollMagic.Scene({triggerElement: "#trigger1", duration: 300, offset: -50})
		.setTween(tweenButton2Anim)
		.triggerHook(0.5)
		.addIndicators({name: "sOCIALButton1Arrive"})
		.addTo(controller);

	new ScrollMagic.Scene({triggerElement: "#trigger1", duration: 200, offset: 50})
		.setTween(tweenButton3Anim)
		.triggerHook(0.5)
		.addIndicators({name: "sOCIALButton1Arrive"})
		.addTo(controller);

	// LIVE SECTION ANIMATION

	var tweenLiveTextAnim = TweenMax.staggerFromTo(".live .text", 2, {top: 400, opacity: 0}, {top: 0, opacity:1, ease: Back.linear}, 0.15);
	var tweenTournamentAnim = TweenMax.staggerFromTo(".live__tournaments", 2, {top: 400, opacity: 0}, {top: -200, opacity:1, ease: Back.linear}, 0.15);

	new ScrollMagic.Scene({triggerElement: "#trigger2", duration: 300, offset: -450})
		.setTween(tweenLiveTextAnim)
		.triggerHook(0.5)
		.addIndicators({name: "LiveTextArrive"})
		.addTo(controller);

	new ScrollMagic.Scene({triggerElement: "#trigger2", duration: 700, offset: -150})
		.setTween(tweenTournamentAnim)
		.triggerHook(0.5)
		.addIndicators({name: "TornamentArrive"})
		.addTo(controller);

	$(document).on('ready',function(){
		$('.play-button').on('click', function(){
			$('.popup-holder').addClass('active');
			setTimeout(function(){
				$('#Jvideo').get(0).play();
			}, 400)
		});
		$('.popup-hidder').on('click', function(){
			$('.popup-holder').removeClass('active');
			$('#Jvideo').get(0).pause();
		});
		$(document).keyup(function(e) {
			if (e.keyCode === 27) {
				$('.popup-holder').removeClass('active');
				$('#Jvideo').get(0).pause();
			}
		});
	});

});
