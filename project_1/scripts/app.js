
//  ------   mk img ------
// var img = $('<img src=""/>');
// -- change prop/attribute of img --
// img.prop('src', 'http://....');
// --- select a css class or DOM element and append img ---
// $('body').append(img);


// global variables
var placementTurn=0;
var placementTurnTotal=16;
var dragged;
var playerOneScore, playerTwoScore, playerThreeScore, playerFourScore = 0;
var playerOneTotalTokens, playerTwoTotalTokens, playerThreeTotalTokens, playerFourTotalTokens;

// var playerOne = {
//
// }

// once a player's tokens are exhausted game spits out score
// currently not working due to when last token removed
// does not add one to the playerScore because the div no
// longer has any children to add to the score

while(playerOneTotalTokens >= 1 && playerTwoTotalTokens >= 1 && playerThreeTotalTokens >= 1 && playerFourTotalTokens >= 1) {
  if(Math.max(playerOneScore,playerTwoScore,)) {
    console.log('Player One wins! The score is: Player One: '+playerOneScore+' - '+playerTwoScore+' : Player Two');
  } else if(playerTwoScore > playerOneScore) {
    console.log('Player Two wins! The score is: Player One: '+playerOneScore+' - '+playerTwoScore+' : Player Two');
  } else if (){
    console.log('Tie! Whoadathunk!?');
  }
}
// function rules() {
//   // rules should slide over on top of game or fadeIn
// }
// function whoWins() {
//   $.eq(Math.max(playerOneScore,playerTwoScore,playerThreeScore,playerFourScore));
// }
// console.log(whoWins());

function createTokens(playerClass, color) {
  for(i=0;i <=15; i++) {
    var imgTag = '<img src="images/'+color+'_battlesheep.png" draggable="true" class="sheep-piece" ondragover="event.preventDefault()" />';
    var tokenColor = $(imgTag);
    $(playerClass).append(tokenColor);
  }
}
// DOM observer that fires once player column is empty
// and only once
function monitorAPlayer(playerClass, color, playerScoreVar, fireCount) {
  $(playerClass).bind('DOMSubtreeModified', function(e) {
    if(e.target.innerHTML <= 0) {
      if(fireCount < 1) {
        createTokens(playerClass, color)
        fireCount++;
      } else if (fireCount >= 1) {
        console.log('These aren\'t the droids you\'re looking for.');
      } else {
        return null;
      }
    }
  });
}
// player one test
monitorAPlayer('.playerOne', 'black', playerOneScore, 0);
monitorAPlayer('.playerTwo', 'red', playerTwoScore, 0);
monitorAPlayer('.playerThree', 'white', playerThreeScore, 0);
monitorAPlayer('.playerFour', 'blue', playerFourScore, 0);

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
      $('.dropzone').removeClass('dropzone');     // remove dropzone classes from all divs to prevent movement of board
      console.log("We go in! We kill!");          // We go iiinnnnn. We kiiilllll.
    } else {
      console.log("Soon my dog of war...");       // You just... you just wait!
    }
  } else if(e.target.className === "dropzoneOne") {
    e.target.style.background = "";
    var playerParentNode = dragged.parentNode;
    // console.log(dragged.parentNode.className);
      if(playerParentNode.className === 'land-div playerOne') {
        playerOneTotalTokens = $('.playerOne').children().length;
        playerOneScore = 17 - playerOneTotalTokens;
        console.log(playerOneScore);
      } else if(playerParentNode.className === 'land-div playerTwo') {
        playerTwoTotalTokens = $('.playerTwo').children().length;
        playerTwoScore = 17 - playerTwoTotalTokens;
        console.log(playerTwoScore);
      } else if(playerParentNode.className === 'land-div playerThree') {
        playerThreeTotalTokens = $('.playerThree').children().length;
        playerThreeScore = 17 - playerThreeTotalTokens;
        cosole.log(playerThreeScore);
      } else if(playerParentNode.className === 'land-div playerFour') {
        playerFourTotalTokens = $('.playerFour').children().length;
        playerFourScore = 17 - playerFourTotalTokens;
        console.log(playerFourScore);
      } else {
        console.log('wat');
      }
    dragged.parentNode.removeChild(dragged);
    e.target.appendChild(dragged);
    dragged.setAttribute('draggable', false);
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
// button.addEventListener('click', rules, false);


// NOTES AND TERRIBLE CODE LOL
/*
$('.second-grid-top').on('click', function() {
  console.log('top toptppptptptptpttpptptpt');
});
*/
// SUPER WET CODE for making tokens
// function createPlayerOneTokens() {
//   for(i=0;i <=15; i++) {
//     var whiteToken = $('<img src="images/white_battlesheep.png" draggable="true" class="sheep-piece" ondragover="event.preventDefault()" />');
//     $('.playerOne').append(whiteToken);
//   }
// }
// SUPER WET CODE for monitoring divs and when they become empty
// $('.playerOne').bind('DOMSubtreeModified', function(e) {
//   if(e.target.innerHTML <= 0) {
//     if(playerOneCanOnlyFireOnce < 1) {
//       createTokens('.playerOne', 'black');
//       playerOneCanOnlyFireOnce++;
//       playerOneTotalTokens = $('.playerOne').children().length;
//       playerOneScore = 16 - playerOneTotalTokens;
//     } else if(playerOneCanOnlyFireOnce === 1) {
//       console.log(playerOneScore);
//     }
//     else {
//       return null;
//     }
//   }
// });
