$(document).ready(function() {
  $('.menuhover').mouseenter(function() {
    $('.itemactive').blur();
  })
});

$( "#logo" ).click(function() {
  $( ".itemactive" ).blur();
});
