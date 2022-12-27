$(document).ready(function(){
    $("#testimonial-slider").owlCarousel({
        items:1,
        itemsDesktop:[1000,1],
        itemsDesktopSmall:[979,1],
        itemsTablet:[768,1],
        pagination: false,
        navigation:true,
        navigationText:["",""],
        autoPlay:false
    });

    $('.bxslider').bxSlider({
      minSlides: 4,
      maxSlides: 4,
      slideWidth: 350,
      slideMargin: 3,
      ticker: true,
      tickerHover: true,
      speed: 40000

    });
});