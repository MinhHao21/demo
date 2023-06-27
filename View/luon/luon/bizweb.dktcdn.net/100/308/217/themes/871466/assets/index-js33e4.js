$(document).ready(function(){
	$('.home-slider').slick({
		autoplay: false,
		autoplaySpeed: 3000,
		fade: false,
		cssEase:'linear',
		dots: false,
		arrows: true,
		infinite: true
	});
	$('.cate-slider').slick({
		autoplay: true,
		autoplaySpeed: 6000,
		dots: false,
		arrows: true,
		infinite: false,
		slidesToShow: 9,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 7,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 991,
				settings: {
					slidesToShow: 7,
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
	});
	$('.slider-product').slick({
		autoplay: true,
		autoplaySpeed: 6000,
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
					slidesToShow: 3,
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
	$('.slick_brand').slick({
		autoplay: true,
		autoplaySpeed: 6000,
		dots: false,
		arrows: true,
		infinite: false,
		slidesToShow: 7,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 6,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 991,
				settings: {
					slidesToShow: 6,
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
})
/*Ajax tab 1*/
$(".not-dqtab").each( function(e){
	/*khai báo khởi tạo ban đầu cho 2 kiểu tab*/
	var $this1 = $(this);
	var $this2 = $(this);
	var datasection = $this1.closest('.not-dqtab').attr('data-section');
	$this1.find('.tabs-title li:first-child').addClass('current');
	$this1.find('.tab-content').first().addClass('current');
	var datasection2 = $this2.closest('.not-dqtab').attr('data-section-2');
	$this2.find('.tabs-title li:first-child').addClass('current');
	$this2.find('.tab-content').first().addClass('current');

	/*khai báo cho chức năng dành cho mobile tab*/
	var _this = $(this).find('.wrap_tab_index .title_module_main');
	var droptab = $(this).find('.link_tab_check_click');

	/*type 1*/ //kiểu 1 này thì load có owl carousel
	$this1.find('.tabtitle1.ajax li').click(function(){
		var $this2 = $(this),
			tab_id = $this2.attr('data-tab'),
			url = $this2.attr('data-url');
		var etabs = $this2.closest('.e-tabs');
		etabs.find('.tab-viewall').attr('href',url);
		etabs.find('.tabs-title li').removeClass('current');
		etabs.find('.tab-content').removeClass('current');
		$this2.addClass('current');
		etabs.find("."+tab_id).addClass('current');
		//Nếu đã load rồi thì không load nữa
		if(!$this2.hasClass('has-content')){
			$this2.addClass('has-content');		
			getContentTab(url,"."+ datasection+" ."+tab_id);
		}
	});
	$this2.find('.tabtitle2.ajax li').click(function(){
		var $this2 = $(this),
			tab_id = $this2.attr('data-tab'),
			url = $this2.attr('data-url');
		var etabs = $this2.closest('.e-tabs');
		etabs.find('.tab-viewall').attr('href',url);
		etabs.find('.tabs-title li').removeClass('current');
		etabs.find('.tab-content').removeClass('current');
		$this2.addClass('current');
		etabs.find("."+tab_id).addClass('current');
		//Nếu đã load rồi thì không load nữa
		if(!$this2.hasClass('has-content')){
			$this2.addClass('has-content');		
			getContentTab2(url,"."+ datasection2+" ."+tab_id);
		}
	});

});

// Get content cho tab
function getContentTab(url,selector){
	url = url+"?view=ajaxload";
	var loading = '<div class="a-center"><img src="//bizweb.dktcdn.net/100/308/217/themes/871466/assets/rolling.svg?1684896176629" alt="loading"/></div>';
	$.ajax({
		type: 'GET',
		url: url,
		beforeSend: function() {
			$(selector).html(loading);
		},
		success: function(data) {
			var content = $(data);
			setTimeout(function(){
				$(selector).html(content.html());
				ajaxSwiper(selector);
				awe_lazyloadImage();
				$(selector + ' .add_to_cart').click(function(e){
					e.preventDefault();		
					var $this = $(this);
					var form = $this.parents('form');	
					$.ajax({
						type: 'POST',
						url: '/cart/add.js',
						async: false,
						data: form.serialize(),
						dataType: 'json',
						error: addToCartFail,
						beforeSend: function() { 

						},
						success: addToCartSuccess,
						cache: false
					});
				});
			},500);
		},
		dataType: "html"
	});
}
// Get content cho tab
function getContentTab2(url,selector){
	url = url+"?view=ajaxload2";
	var loading = '<div class="a-center"><img src="//bizweb.dktcdn.net/100/308/217/themes/871466/assets/rolling.svg?1684896176629" alt="loading"/></div>';
	$.ajax({
		type: 'GET',
		url: url,
		beforeSend: function() {
			$(selector).html(loading);
		},
		success: function(data) {
			var content = $(data);
			setTimeout(function(){
				$(selector).html(content.html());
				ajaxSwiper2(selector);
				awe_lazyloadImage();
				if(window.BPR)
					return window.BPR.initDomEls(), window.BPR.loadBadges();
				$(selector + ' .add_to_cart').click(function(e){
					e.preventDefault();		
					var $this = $(this);
					var form = $this.parents('form');	
					$.ajax({
						type: 'POST',
						url: '/cart/add.js',
						async: false,
						data: form.serialize(),
						dataType: 'json',
						error: addToCartFail,
						beforeSend: function() { 

						},
						success: addToCartSuccess,
						cache: false
					});
				});
			},500);
		},
		dataType: "html"
	});
}
// Ajax carousel
function ajaxSwiper(selector,dataLgg){
	$(selector+' .swipertab').each( function(){
		var swiperTab = new Swiper('.swipertab', {
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
					slidesPerView: 4,
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
	})
}
function ajaxSwiper2(selector,dataLgg){
	$(selector+' .swipertab2').each( function(){
		var swiperTab = new Swiper('.swipertab2', {
			slidesPerView: 3,
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
					slidesPerView: 2,
					spaceBetween: 20
				},
				1024: {
					slidesPerView: 3,
					spaceBetween: 20
				}
			}
		});
	})
}
window.addEventListener('DOMContentLoaded', (event) => {
	var swiperCarousel = new Swiper('.swiper-carousel', {
		slidesPerView: 4,
		spaceBetween: 10,
		slidesPerColumn: 1,
		slidesPerColumnFill: 'row',
		navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
		breakpoints: {
			300: {
				slidesPerView: 2,
				slidesPerGroup: 2,
				slidesPerColumnFill: 'row',
				slidesPerColumn: 2,
				spaceBetween: 10
			},
			767: {
				slidesPerView: 2,
				slidesPerGroup: 2,
				slidesPerColumnFill: 'row',
				slidesPerColumn: 2,
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
window.addEventListener('DOMContentLoaded', (event) => {
	var swiperCarousel = new Swiper('.swiper-carousel2', {
		slidesPerView: 3,
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
				slidesPerView: 2,
				spaceBetween: 20
			},
			1024: {
				slidesPerView: 3,
				spaceBetween: 20
			}
		}
	});
});
function addToCartSuccess (jqXHR, textStatus, errorThrown){

	$.ajax({
		type: 'GET',
		url: '/cart.js',
		async: false,
		cache: false,
		dataType: 'json',
		success: function (cart){
			awe_hidePopup('.loading');
			Bizweb.updateCartFromForm(cart, '.top-cart-content .mini-products-list');
			Bizweb.updateCartPopupForm(cart, '#popup-cart-desktop .tbody-popup');
		}
	});



	var url_product = jqXHR['url'];
	var class_id = jqXHR['product_id'];
	var name = jqXHR['name'];
	var textDisplay = ('<i style="margin-right:5px; color:red; font-size:13px;" class="fa fa-check" aria-hidden="true"></i>Sản phẩm vừa thêm vào giỏ hàng');
	var id = jqXHR['variant_id'];
	var dataList = $(".item-name a").map(function() {
		var plus = $(this).text();
		return plus;
	}).get();
	$('.title-popup-cart .cart-popup-name').html('<a href="'+ url_product +'" title="'+name+'">'+ name + '</a> ');
	var nameid = dataList,
		found = $.inArray(name, nameid);
	var textfind = found;

	var src = '';
	if(Bizweb.resizeImage(jqXHR['image'], 'small') == null || Bizweb.resizeImage(jqXHR['image'], 'small') =="null" || Bizweb.resizeImage(jqXHR['image'], 'small') ==''){
		src= 'https://bizweb.dktcdn.net/thumb/large/assets/themes_support/noimage.gif'
	}
	else
	{
		src=  Bizweb.resizeImage(jqXHR['image'], 'small')
	}

	$(".item-info > p:contains("+id+")").html('<span class="add_sus" style="color:#898989;"><i style="margin-right:5px; color:#3cb878; font-size:14px;" class="fa fa-check" aria-hidden="true"></i>Sản phẩm vừa thêm</span>');





	var windowW = $(window).width();
	if(windowW > 768){				
		$('#popup-cart').modal();
	}else{
		$('#myModal').html('');
		var $popupMobile = '<div class="modal-dialog"><div class="modal-content"><div class="modal-header">'
		+ '<button type="button" class="close" data-dismiss="modal" aria-label="Close" style="position: relative; z-index: 9;"><span aria-hidden="true">×</span></button>'
		+ '<h4 class="modal-title"><span><i class="fa fa-check" aria-hidden="true"></i></span>Đã mua thành công</h4></div>'
		+ '<div class="modal-body"><div class="media"><div class="media-left"><div class="thumb-1x1">'
		+ '<img width="70px" src="'+ src +'" alt="'+ jqXHR['title'] +'"></div></div>'
		+ '<div class="media-body"><div class="product-title">'+ jqXHR['name'] +'</div>'
		+ '<div class="product-new-price"><span>' + (jqXHR['price']).formatMoney(0) + ' đ</span></div></div></div>'
		+ '<button class="btn btn-block btn-outline-red" data-dismiss="modal">Tiếp tục mua hàng</button>'
		+ '<a href="/checkout" class="btn btn-block btn-red">Tiến hành thanh toán »</a></div></div></div>';
		$('#myModal').html($popupMobile);
		$('#myModal').modal();
		clearTimeout($('#myModal').data('hideInterval'));
		$('#myModal').data('hideInterval', setTimeout(function(){
			$('#myModal').modal('hide');
		}, 5000));
	}
}
function addToCartFail(jqXHR, textStatus, errorThrown){
	var response = $.parseJSON(jqXHR.responseText);
	var $info = '<div class="error">'+ response.description +'</div>';
}