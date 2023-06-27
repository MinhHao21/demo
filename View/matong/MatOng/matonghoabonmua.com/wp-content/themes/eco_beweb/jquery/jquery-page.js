$('.slider-fashion').slick({dots: true,infinite: false,speed: 300,slidesToShow: 4,slidesToScroll: 1,responsive: [{breakpoint: 1024,settings: {slidesToShow: 4,slidesToScroll: 1,infinite: true,dots: true}},{breakpoint: 600,settings: {slidesToShow: 3,slidesToScroll: 1}},{breakpoint: 480,settings: {slidesToShow: 2,slidesToScroll: 1}}]});

$('img').addClass('img-responsive');
$('.cont-cate-all p.woocommerce-result-count').addClass('col-md-9 pull-left');
$('.woocommerce .woocommerce-ordering').addClass('col-md-3');
$('.woocommerce .woocommerce-ordering select').addClass('form-control pull-right');

$(window).load( function() { $('#imgpages-producter').smoothproducts(); });
$( "img.aligncenter" ).addClass( "center-block" );
$( "img.alignleft" ).addClass( "pull-left" );
$( "img.alignright" ).addClass( "pull-right" );

$( "#producconten_beweb" ).addClass( "table table-striped" );

$(document).ready(function(){
 $("#back-top").hide();
    // fade in #back-top
    $(function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 500) {
                $('#back-top').fadeIn();
            } else {
                $('#back-top').fadeOut();
            }
        });

        // scroll body to 0px on click
        $('#back-top a').click(function () {
            $('body,html').animate({
                scrollTop: 0
            }, 800);
            return false;
        });
    });

});