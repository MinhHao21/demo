$(document).ready(function ($) {
	"use strict";
	awe_backtotop();
	awe_category();
	awe_tab();
	if(navigator.userAgent.indexOf("Speed Insights") == -1) {
		awe_lazyloadImage();
	}
	$('.button-menu').click(function(){$(".menu_mobile").addClass('active');$(".backdrop__body-backdrop___1rvky").addClass('active');});
	$('#close-nav').click(function(){$(".menu_mobile").removeClass('active');$(".backdrop__body-backdrop___1rvky").removeClass('active');});
	$('.backdrop__body-backdrop___1rvky,.menu_mobile .account i.fa-arrow-left').click(function(){$(".menu_mobile").removeClass('active');$(".backdrop__body-backdrop___1rvky").removeClass('active');});
	$(window).resize( function(){if ($(window).width() > 1023){$(".menu_mobile").removeClass('active');$(".backdrop__body-backdrop___1rvky").removeClass('active');}});
});
window.addEventListener('DOMContentLoaded', (event) => {
	var swiperCategory = new Swiper('.swiper_category', {
		slidesPerView: 4,
		spaceBetween: 10,
		navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
		breakpoints: {
			300: {
				slidesPerView: 4,
				spaceBetween: 10
			},
			767: {
				slidesPerView: 4,
				spaceBetween: 10
			},
			768: {
				slidesPerView: 4,
				spaceBetween: 10
			},
			1024: {
				slidesPerView: 4,
				spaceBetween: 10
			},
			1200: {
				slidesPerView: 4,
				spaceBetween: 10
			}
		}
	});
});
$(document).on('click','.overlay, .close-popup, .btn-continue, .fancybox-close', function() {   
	awe_hidePopup('.awe-popup'); 	
	setTimeout(function(){
		$('.loading').removeClass('loaded-content');
	},500);
	return false;
})

$( ".collection-category li" ).each(function() {
	if ($(this).hasClass('active')) {
		$(this).parents('li').addClass('active');
	}
});
$( ".main-header .site-category .title" ).click(function() {
	$(this).next().slideToggle()
})
$('.main-header .site-category .category li.level0 i.fa-angle-down').click(function() {
	$(this).toggleClass('open').next().slideToggle(); 	
}); 
$(window).scroll(function () {
	if ( $(this).scrollTop() > 1 && !$('.main-header').hasClass('open') ) {
		$('.main-header').addClass('open');
	} else if ( $(this).scrollTop() <= 1 ) {
		$('.main-header').removeClass('open');
	}
});

/********************************************************
	# LazyLoad
	********************************************************/
function awe_lazyloadImage() {
	var i = $("[data-lazyload]");
	i.length > 0 && i.each(function() {
		var i = $(this), e = i.attr("data-lazyload");
		i.appear(function() {
			i.removeAttr("height").attr("src", e);
		}, {
			accX: 0,
			accY: 120
		}, "easeInCubic");
	});
	var e = $("[data-lazyload2]");
	e.length > 0 && e.each(function() {
		var i = $(this), e = i.attr("data-lazyload2");
		i.appear(function() {
			i.css("background-image", "url(" + e + ")");
		}, {
			accX: 0,
			accY: 120
		}, "easeInCubic");
	});
	var s = $("[data-lazyload3]");
	s.length > 0 && s.each(function() {
		var s = $(this), e = s.attr("data-lazyload3");
		s.appear(function() {
			s.attr("srcset", e);
		}, {
			accX: 0,
			accY: 120
		}, "easeInCubic");
	});
} window.awe_lazyloadImage=awe_lazyloadImage;

/********************************************************
# SHOW NOITICE
********************************************************/
function awe_showNoitice(selector) {
	$(selector).animate({right: '0'}, 500);
	setTimeout(function() {
		$(selector).animate({right: '-300px'}, 500);
	}, 3500);
}  window.awe_showNoitice=awe_showNoitice;

/********************************************************
# SHOW LOADING
********************************************************/
function awe_showLoading(selector) {
	var loading = $('.loader').html();
	$(selector).addClass("loading").append(loading); 
}  window.awe_showLoading=awe_showLoading;

/********************************************************
# HIDE LOADING
********************************************************/
function awe_hideLoading(selector) {
	$(selector).removeClass("loading"); 
	$(selector + ' .loading-icon').remove();
}  window.awe_hideLoading=awe_hideLoading;

/********************************************************
# SHOW POPUP
********************************************************/
function awe_showPopup(selector) {
	$(selector).addClass('active');
}  window.awe_showPopup=awe_showPopup;

/********************************************************
# HIDE POPUP
********************************************************/
function awe_hidePopup(selector) {
	$(selector).removeClass('active');
}  window.awe_hidePopup=awe_hidePopup;

/********************************************************
# CONVERT VIETNAMESE
********************************************************/
function awe_convertVietnamese(str) { 
	str= str.toLowerCase();
	str= str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g,"a"); 
	str= str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g,"e"); 
	str= str.replace(/ì|í|ị|ỉ|ĩ/g,"i"); 
	str= str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g,"o"); 
	str= str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g,"u"); 
	str= str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g,"y"); 
	str= str.replace(/đ/g,"d"); 
	str= str.replace(/!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'| |\"|\&|\#|\[|\]|~|$|_/g,"-");
	str= str.replace(/-+-/g,"-");
	str= str.replace(/^\-+|\-+$/g,""); 
	return str; 
} window.awe_convertVietnamese=awe_convertVietnamese;


/********************************************************
# SIDEBAR CATEOGRY
********************************************************/
function awe_category(){
	$('.nav-category .fa-angle-down').click(function(e){
		$(this).parent().toggleClass('active');
	});
} window.awe_category=awe_category;

/********************************************************
# ACCORDION
********************************************************/
function awe_accordion(){
	$('.accordion .nav-link').click(function(e){
		e.preventDefault;
		$(this).parent().toggleClass('active');
	})
} window.awe_accordion=awe_accordion;

/********************************************************
# BACKTOTOP
********************************************************/
function awe_backtotop() { 
	if ($('.back-to-top').length) {
		var scrollTrigger = 100, // px
			backToTop = function () {
				var scrollTop = $(window).scrollTop();
				if (scrollTop > scrollTrigger) {
					$('.back-to-top').addClass('show');
				} else {
					$('.back-to-top').removeClass('show');
				}
			};
		backToTop();
		$(window).on('scroll', function () {
			backToTop();
		});
		$('.back-to-top').on('click', function (e) {
			e.preventDefault();
			$('html,body').animate({
				scrollTop: 0
			}, 700);
		});
	}
} window.awe_backtotop=awe_backtotop;

/********************************************************
# TAB
********************************************************/
function awe_tab() {
	$(".e-tabs:not(.not-dqtab)").each( function(){
		$(this).find('.tabs-title li:first-child').addClass('current');
		$(this).find('.tab-content').first().addClass('current');
		$(this).find('.tabs-title li').click(function(e){
			var tab_id = $(this).attr('data-tab');
			var url = $(this).attr('data-url');
			$(this).closest('.e-tabs').find('.tab-viewall').attr('href',url);
			$(this).closest('.e-tabs').find('.tabs-title li').removeClass('current');
			$(this).closest('.e-tabs').find('.tab-content').removeClass('current');
			$(this).addClass('current');
			$(this).closest('.e-tabs').find("#"+tab_id).addClass('current');

		});    
	});
} window.awe_tab=awe_tab;
/********************************************************
# DROPDOWN
********************************************************/
$('.dropdown-toggle').click(function() {
	$(this).parent().toggleClass('open'); 	
}); 
$('.btn-close').click(function() {
	$(this).parents('.dropdown').toggleClass('open');
}); 
$('body').click(function(event) {
	if (!$(event.target).closest('.dropdown').length) {
		$('.dropdown').removeClass('open');
	};
});

/************************************/
/*Show hide Recoverpass*/
$('.recv-text #rcv-pass').click(function(){
	$('.form_recover_').slideToggle('500');
});
/*End*/

/***************************************/
$(document).ready(function(){
	var wDW = $(window).width();
	/*Footer*/
	if(wDW > 767){
		$('.toggle-mn').show();
	}else {
		$('.footer-click > .cliked').click(function(){
			$(this).toggleClass('open_');
			$(this).next('ul').slideToggle("fast");
			$(this).next('div').slideToggle("fast");
		});
	}
	if (wDW < 991) {
		$(".filter-group li span label").click(function(){
			$('.dqdt-sidebar').removeClass('openf');
			$('.open-filters').removeClass('openf');
			$('.opacity_filter').removeClass('opacity_filter_true');
		});
		$('.opacity_filter').click(function(e){
			$('.dqdt-sidebar').removeClass('openf');
			$('.open-filters').removeClass('openf');
			$('.opacity_filter').removeClass('opacity_filter_true');
		});
	}
});
$('.cate_padding li .fa').click(function() {
	$(this).closest('li').toggleClass("active");
	return false;              
});