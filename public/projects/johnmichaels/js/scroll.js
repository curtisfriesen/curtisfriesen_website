var offset = 150;

var navbar = $('#nav');
var navMobile = $('#navbar');

var header = $('header');


$(document).scroll(function() {
	position = $(this).scrollTop();

  if (position < offset)
  {
  	navbar.css('background-color', 'transparent');

    navMobile.css('background-color', 'transparent');
    navMobile.css('border-bottom', 'none');
  }
  else
  {
    navbar.css('background-color', 'rgba(0,0,0,0.6)');

    navMobile.css('background-color', '#23211a');
    navMobile.css('border-bottom', '2px solid #fff');
  }
});

$('#hamburger').click(function() {

      $("#navMobile").css({"left": "270px"});

      $("body").css({"overflow-y": "hidden"});
      $("body").css({"-webkit-overflow-scrolling": "hidden"});

});

$('#close').click(function() {

      $("#navMobile").css({"left": "-270px"});

      $("body").css({"overflow-y": "scroll"});
      $("body").css({"-webkit-overflow-scrolling": "touch"});
});

$('#login').click(function() {

      $("#loginBox").css({"display": "block"});
      $("body").css({"overflow-y": "hidden"});
});

$('#closeLogin').click(function() {

      $("#loginBox").css({"display": "none"});
      $("body").css({"overflow-y": "scroll"});
});

$('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') || location.hostname == this.hostname){

        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
           if (target.length) {
             $('body, html').animate({
               scrollTop: target.offset().top
            }, 400);

            return false;
        }
    }
});

