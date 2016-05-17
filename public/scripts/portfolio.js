$(document).ready(function(){
  $('.modal-trigger').leanModal({
    dismissable: false,
     opacity: .9,
     in_duration: 300,
     out_duration: 300
   });
  $('.slider').slider();
 });

// on mouseover and mouseout - show or hide element
$('.contact-item').on('mouseover', function() {
  // console.log('OW F!@#, STOP POKING ME!');
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

// --------------- Konami Code ----------------
var konamiArray = [38,38,40,40,37,39,37,39,66,65,13];
var playerEntry = [];

function arrayCheck() {
  var konamiString = konamiArray.toString();
  var playerString = playerEntry.toString();
  // Refactor this later - string comparison === weaksauce
  if (konamiString == playerString) {
    $('.konami').animate({
      left: '10px'
    }, 1500);
  }
}

var body = document.querySelector('body');
body.onkeydown = function(e) {
  if ( !e.metaKey ) {
    e.preventDefault();
  }
  playerEntry.push(e.keyCode);
  if (playerEntry.length > 11) {
    playerEntry.shift();
  }
  if (playerEntry.length === 11) {
      arrayCheck();
  }
}

// ----------- Top Secret Click Listener --------------
var clicked = 0;
$('.secret').on('click', function() {
  if (clicked == 0) {
    $('.slider').animate({
      left: '375px',
    }, 2000);
    clicked++;
  }
  else {
    $('.slider').animate({
      left: '-500px'
    }, 2000);
    clicked--;
  }
});
