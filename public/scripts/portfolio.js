// on mouseover and mouseout - show or hide element
$('.contact-item').on('mouseover', function() {
  // console.log('OW F!@#, STOP POKING ME!');
  // how to select only the hovered element? this?
  var wantedDiv = $(this).siblings('#contactInfo');
  $(wantedDiv).animate({
    opacity: 1,
    width: '130px',
    height: '35px',
  }, 500);
});
$('.contact-item').on('mouseout', function() {
  var wantedDiv = $(this).siblings('#contactInfo');
  // console.log('Thank you, @$$#!)^&.');
  $(wantedDiv).animate({
    opacity: 0,
    width: '0px',
    height: '35px'
  }, 500);
});
$('.btn-floating').on('click', function() {
  $('.orangeArrow').fadeToggle();
});
