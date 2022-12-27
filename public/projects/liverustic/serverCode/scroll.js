var offset = 50;
var navbar = $('#nav');

$("#page-content").scroll(function() {
	position = $(this).scrollTop();

  if (position < offset)
  {
  	navbar.css('background-color', 'transparent');
  	navbar.css('border-bottom', 'none');
  }
  else
  {
    navbar.css('background-color', '#fff');
    navbar.css('border-bottom', 'solid 3px #eee');
}
});

