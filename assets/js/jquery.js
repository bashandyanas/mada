$(document).ready(function() {
  $('#logo').click(function() {
    $('#myCarousel').toggle();
    $('body').css('background-color', 'rgb(200,100,255)', 'slow');
    $('.menu a').css('color', 'black');
    $('.menu').toggleClass('hidden').animate();
  })
});
