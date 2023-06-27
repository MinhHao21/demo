// view images
$(document).ready(function() {
	$('.flickrshowmain-widget').magnificPopup({
		delegate: 'a',
		type: 'image',
		closeOnContentClick: false,
		closeBtnInside: false,
		mainClass: 'mfp-with-zoom mfp-img-mobile',
		image: {
			verticalFit: true,
			titleSrc: function(item) {
				return item.el.attr('title') + ' &middot; <a class="image-source-link" href="'+item.el.attr('data-source')+'" target="_blank">image source</a>';
			}
		},
		gallery: {
			enabled: true
		},
		zoom: {
			enabled: true,
			duration: 300, // don't foget to change the duration also in CSS
			opener: function(element) {
				return element.find('img');
			}
		}
		
	});
});

$('.scroll-baogia').click(function(){
    $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top
    }, 0);
    return false;
});



$(document).ready(function(){
	$(".owl-carousel.product-gallery-lg").owlCarousel({
		loop: !1,
		margin: 4,
		responsiveClass: !0,
		nav: !1,
		dots: !1,
		autoplay: !0,
		autoplayTimeout: 1e4,
		responsive: {
			0: {
				items: 4
			},
			480: {
				items: 4
			},
			768: {
				items: 4
			},
			992: {
				items: 6
			}
		}
	});

	$(".owl-carousel.product-gallery-show").owlCarousel({
		loop: !1,
		margin: 4,
		responsiveClass: !0,
		nav: !1,
		dots: true,
		dots: !1,
		autoplay: !0,
		autoplayTimeout: 1e4,
		responsive: {
			0: {
				items: 2
			},
			480: {
				items: 2
			},
			768: {
				items: 4
			},
			992: {
				items: 4
			}
		}
	});
});

// view images
$(document).ready(function() {
	$('.flickrshowmain-widget').magnificPopup({
		delegate: 'a',
		type: 'image',
		closeOnContentClick: false,
		closeBtnInside: false,
		mainClass: 'mfp-with-zoom mfp-img-mobile',
		image: {
			verticalFit: true,
			titleSrc: function(item) {
				return item.el.attr('title') + ' &middot; <a class="image-source-link" href="'+item.el.attr('data-source')+'" target="_blank">image source</a>';
			}
		},
		gallery: {
			enabled: true
		},
		zoom: {
			enabled: true,
			duration: 300, // don't foget to change the duration also in CSS
			opener: function(element) {
				return element.find('img');
			}
		}
		
	});
	
});


// end view images

// new in detail
var check_variant = true;
$(".product-thumb img").click(function() {
    $(".product-thumb").removeClass('active');
    $(this).parents('li').addClass('active');
    $(".product-image-feature").attr("src", $(this).attr("data-image"));
    $("a.pdFancybox").attr('href', $(this).attr("data-image"));
});

$(".product-thumb").first().addClass('active');

$(document).ready(function() {
	$("a.pdFancybox").fancybox({
	    'transitionIn': 'elastic',
	    'transitionOut': 'elastic',
	    'speedIn': 600,
	    'speedOut': 200
	});
});


// mega_menu
$('.rx-parent').on('click', function(){
    $('.rx-child').slideToggle();
    $(this).toggleClass('rx-change');
});
jQuery(document).ready(function () {
    // jQuery(".ot-vm-click #mega-menu-title").click(function () {
    //     jQuery("#mega_menu").toggleClass("active")
    // }),
    // jQuery("body").click(function (e) {
    //     var i = jQuery(e.target);
    //     "mega-menu-title" != i.attr("id") && jQuery("#mega_menu.active").removeClass("active")
    // })
    // jQuery("#mega_menu>li").each(function (e) {

    //     jQuery(this).children(".sub-menu").css("margin-top", 37 * -e + "px"), jQuery(this).children(".menu-image").css("margin-top", 37 * -e + "px"), jQuery(this).find("li").each(function (e) {
    //         jQuery(this).children(".menu-image").css("margin-top", 36 * -e + "px")
    //     })

    // })

});

// end mega_menu

$(document).on('click', '[data-toggle="ajax_tab_product"]', function(e) {
  e.preventDefault();
  var $this = $(this);
  var id =  $this.attr('data-id');
  var limit =  $this.attr('data-limit');
  var data = {id:id,limit:limit};
  $('#show_tab_product_load').append('<i class="fa fa-spinner fa-spin fa-1x fa-fw"></i>');
  $.ajax({
      type    : 'POST', 
      url     : base_url + 'shops/ajax_tab_product',
      data: data,
      cache: false,
      success   : function(data) {
          $('#show_tab_product_load').html(''); 
          $('#portfolio-item-container').html(''); 
          $('#portfolio-item-container').append(data).show(2000);
          e.preventDefault();
      }
  });
});

$(".nav-tab").on('click', 'li', function(){
  $(this).siblings().removeClass('active');
  $(this).addClass('active');
});