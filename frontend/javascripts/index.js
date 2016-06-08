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
		pagination: '.swiper-pagination',
		paginationClickable: true,
		nextButton: '.swiper-button-next',
		prevButton: '.swiper-button-prev',
		breakpoints: {
			950: {
				freeMode: false,
				slidesPerView: 1,
				scrollbar: false
			}
		}
	});

	var controller = new ScrollMagic.Controller();

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

	var tweenTextAnim1 = TweenMax.staggerFromTo(".phone-text-1", 2, {top: 600}, {top: -300, ease: Back.linear}, 0.15);

	var tweenTextHolderAnim1 = TweenMax.staggerFromTo(".phone-text-1 .text-holder", 2, {opacity: 0}, {opacity:1, ease: Back.linear}, 0.15);

	var tweenTextAnim2 = TweenMax.staggerFromTo(".phone-text-2", 2, {top: 600}, {top: -300, ease: Back.linear}, 0.15);

	var tweenTextHolderAnim2 = TweenMax.staggerFromTo(".phone-text-2 .text-holder", 2, {opacity: 0}, {opacity: 1, ease: Back.linear}, 0.15);

	var tweenTextAnim3 = TweenMax.staggerFromTo(".phone-text-3", 2, {top: 600}, {top: -300, ease: Back.linear}, 0.15);

	var tweenTextHolderAnim3 = TweenMax.staggerFromTo(".phone-text-3 .text-holder", 2, {opacity: 0}, {opacity: 1, ease: Back.linear}, 0.15);

	var tweenTextAnim4 = TweenMax.staggerFromTo(".phone-text-4", 2, {top: 600}, {top: -300, ease: Back.linear}, 0.15);

	var tweenTextHolderAnim4 = TweenMax.staggerFromTo(".phone-text-4 .text-holder", 2, {opacity: 0}, {opacity: 1, ease: Back.linear}, 0.15);

	var tweenCoeffsAnim = TweenMax.staggerFromTo(".coeffs", 2, {left: 0}, {left: -766, ease: Back.linear}, 0.15);

	new ScrollMagic.Scene({triggerElement: "#trigger", duration: 800, offset: -750})
		.setTween(tweenPhoneAnim)
		.triggerHook(0.21)
		//.addIndicators({name: "PhoneArrive"})
		.addTo(controller);

	new ScrollMagic.Scene({triggerElement: "#trigger", duration: 1700, offset: 100})
		//.addIndicators({name: "PhonePin"})
		.addTo(controller)
		.triggerHook(0.21)
		.setPin(".phone__images-block");

	new ScrollMagic.Scene({triggerElement: "#trigger", duration: 3000, offset: -200})
		.setTween(tweenTextAnim1)
		//.addIndicators({name: "Text1Arrive"})
		.addTo(controller)
		.triggerHook(0.21)
	new ScrollMagic.Scene({triggerElement: "#trigger", duration: 300, offset: -200})
		.setTween(tweenTextHolderAnim1)
		//.addIndicators({name: "Text1Opacity"})
		.addTo(controller)
		.triggerHook(0.21)

	new ScrollMagic.Scene({triggerElement: "#trigger", duration: 3000, offset: 400})
		.setTween(tweenTextAnim2)
		//.addIndicators({name: "Text2Arrive"})
		.addTo(controller)
		.triggerHook(0.21)
	new ScrollMagic.Scene({triggerElement: "#trigger", duration: 300, offset: 400})
		.setTween(tweenTextHolderAnim2)
		//.addIndicators({name: "Text2Opacity"})
		.addTo(controller)
		.triggerHook(0.21)

	new ScrollMagic.Scene({triggerElement: "#trigger", offset: 400})
		.setClassToggle(".image2", "arrived")
		//.addIndicators({name: "image2 - add a class"})
		.triggerHook(0.21)
		.addTo(controller);

	new ScrollMagic.Scene({triggerElement: "#trigger", duration: 3000, offset: 900})
		.setTween(tweenTextAnim3)
		//.addIndicators({name: "Text3Arrive"})
		.addTo(controller)
		.triggerHook(0.21)
	new ScrollMagic.Scene({triggerElement: "#trigger", duration: 300, offset: 900})
		.setTween(tweenTextHolderAnim3)
		//.addIndicators({name: "Text3Opacity"})
		.addTo(controller)
		.triggerHook(0.21)

	new ScrollMagic.Scene({triggerElement: "#trigger", offset: 900})
		.setClassToggle(".image3", "arrived")
		//.addIndicators({name: "image3 - add a class"})
		.triggerHook(0.21)
		.addTo(controller);

	new ScrollMagic.Scene({triggerElement: "#trigger", duration: 1000, offset: 970})
		.setTween(tweenCoeffsAnim)
		//.addIndicators({name: "Coeffs"})
		.addTo(controller)
		.triggerHook(0.21)

	new ScrollMagic.Scene({triggerElement: "#trigger", duration: 3000, offset: 1400})
		.setTween(tweenTextAnim4)
		//.addIndicators({name: "Text4Arrive"})
		.addTo(controller)
		.triggerHook(0.21)
	new ScrollMagic.Scene({triggerElement: "#trigger", duration: 300, offset: 1400})
		.setTween(tweenTextHolderAnim4)
		//.addIndicators({name: "Text4Opacity"})
		.addTo(controller)
		.triggerHook(0.21)

	new ScrollMagic.Scene({triggerElement: "#trigger", offset: 1400})
		.setClassToggle(".image3", "with-shadow")
		//.addIndicators({name: "image2 - add a class"})
		.triggerHook(0.21)
		.addTo(controller);

	new ScrollMagic.Scene({triggerElement: "#trigger", offset: 1400})
		.setClassToggle(".image4", "arrived")
		//.addIndicators({name: "image4 - add a class"})
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
		//.addIndicators({name: "sOCIALTextArrive"})
		.addTo(controller);

	new ScrollMagic.Scene({triggerElement: "#trigger1", duration: 400, offset: -150})
		.setTween(tweenButton1Anim)
		.triggerHook(0.5)
		//.addIndicators({name: "sOCIALButton1Arrive"})
		.addTo(controller);

	new ScrollMagic.Scene({triggerElement: "#trigger1", duration: 300, offset: -50})
		.setTween(tweenButton2Anim)
		.triggerHook(0.5)
		//.addIndicators({name: "sOCIALButton1Arrive"})
		.addTo(controller);

	new ScrollMagic.Scene({triggerElement: "#trigger1", duration: 200, offset: 50})
		.setTween(tweenButton3Anim)
		.triggerHook(0.5)
		//.addIndicators({name: "sOCIALButton1Arrive"})
		.addTo(controller);

	// LIVE SECTION ANIMATION

	var tweenLiveTextAnim = TweenMax.staggerFromTo(".live .text", 2, {top: 400, opacity: 0}, {top: 0, opacity:1, ease: Back.linear}, 0.15);
	var tweenTournamentAnim = TweenMax.staggerFromTo(".live__tournaments", 2, {top: 400, opacity: 0}, {top: -200, opacity:1, ease: Back.linear}, 0.15);

	new ScrollMagic.Scene({triggerElement: "#trigger2", duration: 300, offset: -450})
		.setTween(tweenLiveTextAnim)
		.triggerHook(0.5)
		//.addIndicators({name: "LiveTextArrive"})
		.addTo(controller);

	new ScrollMagic.Scene({triggerElement: "#trigger2", duration: 700, offset: -150})
		.setTween(tweenTournamentAnim)
		.triggerHook(0.5)
		//.addIndicators({name: "TornamentArrive"})
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
