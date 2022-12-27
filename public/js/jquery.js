var offset = 50;
var header = $('header');

var footerYear = document.getElementById("year");
footerYear.textContent = new Date().getFullYear();

$(document).on("scroll", function() {
	position = $(this).scrollTop();

  if (position < offset) {
    header.removeClass('active');
  }
  else {
    header.addClass('active');
  }
});

$('a[href*="#"]:not([href="#"])').on("click", function() {
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
    toggleMenu();
});

$('.menu-btn, header nav ul li a').on("click", function() {
	toggleMenu();
});

$('.close-btn').on("click", function() {
	closeNotification();
});

function printMousePos(event) {
    var intX = event.clientX;
    var intY = event.clientY;
    $("#clicker").addClass("clicked");
    $("#clicker").css('top', intY);
    $("#clicker").css('left', intX);

    setTimeout(function () { $("#clicker").removeClass("clicked") }, 500);
}
document.addEventListener("click", printMousePos);

function toggleMenu() {
  $('.toggle-bar').toggleClass("toggle-close");
  $('header nav ul').toggleClass("active");
}

function closeNotification() {
  $('body').removeClass('active');
  $('#notification-bar').addClass('closed');
}

