$(document).ready(function(){
	$('#gallery_01').slick({
		autoplay: false,
		autoplaySpeed: 3000,
		dots: false,
		arrows: true,
		infinite: false,
		slidesToShow: 4,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 991,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1
				}
			}
		]
	})

	$('.related-product').slick({
		autoplay: true,
		autoplaySpeed: 3000,
		dots: false,
		arrows: true,
		infinite: false,
		slidesToShow: 5,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 991,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1
				}
			}
		]
	})
	$('.group-reviews').on('click', function (e) {
		e.preventDefault();
		$('html, body').animate({ scrollTop: $('.product-review-frame').offset().top -100 }, 'slow');
	});
	window.addEventListener('DOMContentLoaded', (event) => {
		var swiperMuacung = new Swiper('.swiper_muacung', {
			slidesPerView: 4,
			spaceBetween: 20,
			slidesPerColumn: 2,
			slidesPerColumnFill: 'row',
			breakpoints: {
				300: {
					slidesPerView: 2,
					slidesPerColumnFill: 'row',
					slidesPerColumn: 2,
					spaceBetween: 20
				},
				767: {
					slidesPerView: 2,
					slidesPerColumnFill: 'row',
					slidesPerColumn: 2,
					spaceBetween: 20
				},
				768: {
					slidesPerView: 3,
					spaceBetween: 20
				},
				1024: {
					slidesPerView: 4,
					spaceBetween: 20
				},
				1200: {
					slidesPerView: 4,
					spaceBetween: 20
				}
			}
		});
	});
})