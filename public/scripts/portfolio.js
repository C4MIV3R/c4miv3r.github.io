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

// --------------- Konami Code ----------------
var konamiArray = [38,38,40,40,37,39,37,39,66,65,13];
var playerEntry = [];

function arrayCheck() {
  var konamiString = konamiArray.toString();
  var playerString = playerEntry.toString();
  // Refactor this later - string comparison === weak
  if (konamiString == playerString) {
    $('.konami').animate({
      left: '10px'
    }, 1000);
    console.log("Konami Code!!!");
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
  console.log(playerEntry);
}
