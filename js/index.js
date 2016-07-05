$(document).ready(function() {
  var scroll_on = false;

  $('.navbar-nav a').click(function() {
    var target = $(this).attr('href');
    scroll_to(target);
    $(this).parents().siblings().removeClass('active');
    $(this).parents().addClass('active');
    $('#myNavbar').collapse('hide');
    $('#myNavbar').addClass('collapsed');
  });

  function scroll_to(anchor) {
    var pos = $(anchor);
    $('html,body').animate({
      scrollTop: pos.offset().top
    }, 1000);
  }

});