
//  ------   mk img ------
// var img = $('<img src=""/>');
// -- change prop/attribute of img --
// img.prop('src', 'http://....');
// --- select a css class or DOM element and append img ---
// $('body').append(img);


// global variables ... probably wayyy too many
var placementTurn=0;
var placementTurnTotal=16;
var dragged;
var playerOneScore = 0;
var playerTwoScore = 0;
var playerThreeScore = 0;
var playerFourScore = 0;
var playerOneTotalTokens;
var playerTwoTotalTokens;
var playerThreeTotalTokens;
var playerFourTotalTokens;
var playerOneCanOnlyFireOnce=0;
var playerTwoCanOnlyFireOnce=0;
var playerThreeCanOnlyFireOnce=0;
var playerFourCanOnlyFireOnce=0;

// once a player's tokens are exhausted game spits out score
// while(playerOneTotalTokens >= 1 && playerTwoTotalTokens >= 1) {
//   if(playerOneScore > playerTwoScore) {
//     console.log('Player One wins! The score is: Player One: '+playerOneScore+' - '+playerTwoScore+' : Player Two');
//   } else if(playerTwoScore > playerOneScore) {
//     console.log('Player Two wins! The score is: Player One: '+playerOneScore+' - '+playerTwoScore+' : Player Two');
//   } else {
//     console.log('Tie! Whoadathunk!?');
//   }
// }
function rules() {
  
}


function createPlayerOneTokens() {
  for(i=0; i <=15; i++) {
    var whiteSheepTokens = $('<img src="images/white_battlesheep.png" draggable="true" class="sheep-piece" ondragover="event.preventDefault()" />');
    $('.playerOne').append(whiteSheepTokens);
  }
  return null;
}
function createPlayerTwoTokens() {
  for(i=0; i <=15; i++) {
    var redSheepTokens = $('<img src="images/red_battlesheep.png" draggable="true" class="sheep-piece" ondragover="event.preventDefault()" />');
    $('.playerTwo').append(redSheepTokens);
  }
  return null;
}
function createPlayerThreeTokens() {
  for(i=0; i <=15; i++) {
    var blueSheepTokens = $('<img src="images/blue_battlesheep.png" draggable="true" class="sheep-piece" ondragover="event.preventDefault()" />');
    $('.playerThree').append(blueSheepTokens);
  }
  return null;
}
function createPlayerFourTokens() {
  for(i=0; i <=15; i++) {
    var blackSheepTokens = $('<img src="images/black_battlesheep.png" draggable="true" class="sheep-piece" ondragover="event.preventDefault()" />');
    $('.playerFour').append(blackSheepTokens);
  }
  return null;
}
// DOM observer that fires once player column is empty
// player one
$('.playerOne').bind('DOMSubtreeModified', function(e) {
  if(e.target.innerHTML <= 0) {
    if(playerOneCanOnlyFireOnce < 1) {
      createPlayerOneTokens();
      playerOneCanOnlyFireOnce++;
      playerOneTotalTokens = $('.playerOne').children().length;
      playerOneScore = 16 - playerOneTotalTokens;
    } else if(playerOneCanOnlyFireOnce === 1) {
      console.log(playerOneScore);
    }
    else {
      return null;
    }
  }
});
// player two
$('.playerTwo').bind('DOMSubtreeModified', function(e) {
  if(e.target.innerHTML <= 0) {
    if(playerTwoCanOnlyFireOnce < 1) {
      createPlayerTwoTokens();
      playerTwoCanOnlyFireOnce++;
      playerTwoTotalTokens = $('.playerTwo').children().length;
      playerTwoScore = 16 - playerTwoTotalTokens;
    } else if(playerTwoCanOnlyFireOnce === 1) {
      console.log(playerTwoScore);
    }
    else {
      return null;
    }
  }
});
// player three
$('.playerThree').bind('DOMSubtreeModified', function(e) {
  if(e.target.innerHTML <= 0) {
    if(playerThreeCanOnlyFireOnce < 1) {
      createPlayerThreeTokens();
      playerThreeCanOnlyFireOnce++;
      playerThreeTotalTokens = $('.playerThree').children().length;
      playerThreeScore = 16 - playerThreeTotalTokens;
    } else if(playerThreeCanOnlyFireOnce === 1) {
      console.log(playerThreeScore);
    }
    else {
      return null;
    }
  }
});
// player four
$('.playerFour').bind('DOMSubtreeModified', function(e) {
  if(e.target.innerHTML <= 0) {
    if(playerFourCanOnlyFireOnce < 1) {
      createPlayerFourTokens();
      playerFourCanOnlyFireOnce++;
      playerFourTotalTokens = $('.playerFour').children().length;
      playerFourScore = 16 - playerFourTotalTokens;
    } else if(playerFourCanOnlyFireOnce === 1) {
      console.log(playerFourScore);
    }
    else {
      return null;
    }
  }
});
// draggable functions
function drag(e) {
e.target.style.opacity = 0.5;
}
function dragStart(e) {
  // store the drag target element in var dragged
  dragged = e.target;
  // lower transparency to .5 as visual feedback
  e.target.style.opacity = 0.5;
}
function dragEnd(e) {
  // reset transparency when element is dropped
  e.target.style.opacity = '';
}
function dragOver(e) {
  // prevent default action
  e.preventDefault();
}
function dragEnter(e) {
  if(e.target.className === "dropzone") {
    e.target.style.background = "rgba(90, 252, 87, .5)";
  } else if(e.target.className === 'dropzoneOne') {
    e.target.style.background = "rgba(90, 252, 87, .5)";
  }
}
function dragLeave(e) {
  if(e.target.className === "dropzone") {
    e.target.style.background = "";
  } else if(e.target.className === 'dropzoneOne') {
    e.target.style.background = "";
  }
}
function drop(e) {
  e.preventDefault();
  if(e.target.className === "dropzone") {
    e.target.style.background = "";
    dragged.parentNode.removeChild(dragged);
    e.target.appendChild(dragged);
    var divTarget = e.target;
    var secondGridDivTop = $('<div class="dropzoneOne" id="second-grid-top" ondragover="event.preventDefault()"></div>');
    var secondGridDivLeft = $('<div class="dropzoneOne" id="second-grid-left" ondragover="event.preventDefault()"></div>');
    var secondGridDivRight = $('<div class="dropzoneOne" id="second-grid-right" ondragover="event.preventDefault()"></div>');
    var secondGridDivBottom = $('<div class="dropzoneOne" id="second-grid-bottom" ondragover="event.preventDefault()"></div>');
    $(divTarget).append(secondGridDivTop, secondGridDivLeft, secondGridDivRight, secondGridDivBottom); // add second grid over the first to lock pieces into position
    dragged.setAttribute('draggable', false);     // remove draggable ability from board pieces once they are placed
    placementTurn++;                              // add one to placementTurn
    if(placementTurn >= placementTurnTotal) {     // used as a check to see if the max number of board tiles have been played
      // remove dropzone classes from all divs to prevent movement of board
      $('.dropzone').removeClass('dropzone');
      console.log("We go in! We kill!"); // We go iiinnnnn. We kiiilllll.
    } else {
      console.log("Soon my dog of war...");  // You just... you just wait!
    }
  } else if(e.target.className === "dropzoneOne") {
    e.target.style.background = "";
    dragged.parentNode.removeChild(dragged);
    e.target.appendChild(dragged);
    dragged.setAttribute('draggable', false);
    playerOneTotalTokens = $('.playerOne').children().length;
    playerTwoTotalTokens = $('.playerTwo').children().length;
    playerThreeTotalTokens = $('.playerThree').children().length;
    playerFourTotalTokens = $('.playerFour').children().length;
    playerOneScore = 16 - playerOneTotalTokens;
    playerTwoScore = 16 - playerTwoTotalTokens;
    playerThreeScore = 16 - playerThreeTotalTokens;
    playerFourScore = 16 - playerFourTotalTokens;
  }
}

// events fired on draggable target
document.addEventListener('drag', drag, false);
document.addEventListener('dragstart', dragStart, false);
document.addEventListener('dragend', dragEnd, false);
document.addEventListener('dragover', dragOver, false);
document.addEventListener('dragenter', dragEnter, false);
document.addEventListener('dragleave', dragLeave, false);
document.addEventListener('drop', drop, false);
button.addEventListener('click', rules, false);

/*
$('.second-grid-top').on('click', function() {
  console.log('top toptppptptptptpttpptptpt');
});
*/
