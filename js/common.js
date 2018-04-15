$(document).ready(function () {

	// ********* Main slider customize ********
	
	
	if ($(window).width()<576){
		$('#img1').attr('src', 'img/main-photo1-min.jpg');
		$('#img2').attr('src', 'img/main-photo2-min.jpg');
		$('#img3').attr('src', 'img/main-photo3-min.jpg');
	}

	var mySwiper = new Swiper ('.swiper-container', {
	// Optional parameters

	direction: 'horizontal',
	loop: true,
	speed: 1000,
	// autoplay: {
	//    delay: 5000 
	// },
	effect: 'fade',
	fadeEffect: {
    	crossFade: true
  	},
	// If we need pagination
	pagination: {
	  el: '.swiper-pagination',
	},

	// Navigation arrows
	navigation: {
	  nextEl: '.swiper-button-next',
	  prevEl: '.swiper-button-prev',
	},

	// And if we need scrollbar
	// scrollbar: {
	//   el: '.swiper-scrollbar',
	// },
	})

// ***************Slider Recent Posts Customize******************
	var screenForSingleSlide;
	if ($(window).width()<768){
		screenForSingleSlide = 1;
	}
	else
		screenForSingleSlide = 3;

	var mySwiper = new Swiper ('.swiper-container2', {
	// Optional parameters

	direction: 'horizontal',
	loop: true,
	speed: 1000,
	// autoplay: {
	//    delay: 5000
	// },
	slidesPerView: screenForSingleSlide,
	spaceBetween: 30,
	// If we need pagination
	// pagination: {
	//   el: '.swiper-pagination',
	// },

	// Navigation arrows
	navigation: {
	  nextEl: '.swiper-button-next',
	  prevEl: '.swiper-button-prev',
	},
	})

	// Custom JS

	// Video

	if ($(window).width()>1199){
		$("#v-text").click(function(){
			$('#video').get(0).play();
			$('#v-text').hide();
		    })
		$('#video').click(function(){
			this.pause();
			$('#v-text').show();
		})
	}

	// Mobile-menu open/close

	$("#mobile-menu-btn").click(function(){
		$("#id-mobile-menu").show();
	})	

	$("#close-mobile-menu").click(function(){
		$("#id-mobile-menu").hide();
	})	
});

