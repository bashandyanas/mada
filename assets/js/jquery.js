$(document).ready(function() {
<<<<<<< HEAD
  $('#logo').click(function() {
    $('#myCarousel').toggle();
    $('body').css('background-color', 'rgb(200,100,255)', 'slow');
    $('.menu a').css('color', 'black');
    $('.menu').toggleClass('hidden').animate();
  })
});
=======
  $('.menuhover').mouseenter(function() {
    $('.itemactive').blur();
  })
});

$( "#logo" ).click(function() {
  $( ".itemactive" ).blur();
});
>>>>>>> a02528fbf2e10126244ccdccb195bbc306249760
