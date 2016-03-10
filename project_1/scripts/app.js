
//  ------   mk img ------
// var img = $('<img src=""/>');
// -- change prop/attribute of img --
// img.prop('src', 'http://....');
// --- select a css class or DOM element and append img ---
// $('body').append(img);


var placementTurn=0;
var placementTurnTotal=8;

function createPlayerTokens() {
  for(i=0; i <= 16; i++) {
    var whiteSheepTokens = $('<img src="images/white_battlesheep.png" draggable="true" class="sheep-piece" ondragstart="event.dataTransfer.setData("image/png", null) />');
    $('.playerOne').append(whiteSheepTokens);
  }
  return null;
}

function createPlayerTwoTokens() {
  for(i=0; i <=16; i++) {
    var redSheepTokens = $('<img src="images/red_battlesheep.png" draggable="true" class="sheep-piece" />');
    $('.playerTwo').append(redSheepTokens);
  }
  return null;
}

$('.playerOne').bind('DOMSubtreeModified', function(e) {
  if(e.target.innerHTML <= 0) {
    createPlayerTokens();
  }
});
$('.playerTwo').bind('DOMSubtreeModified', function(e) {
  if(e.target.innerHTML <= 0) {
    createPlayerTwoTokens();
  }
});

// draggable functions
var dragged;
function drag(e) {
e.target.style.opacity = 0.5;
}
function dragStart(e) {
  // store a refernce on the element
  dragged = e.target;
  // lower transparency to .5 as visual feedback
  e.target.style.opacity = 0.5;
}
function dragEnd(e) {
  // reset transparency when element is dropped
  e.target.style.opacity = '';
}
function dragOver(e) {
  // prevent default
  e.preventDefault();
}
function dragEnter(e) {
  if(e.target.className === "dropzone") {
    e.target.style.background = "rgba(90, 252, 87, .5)";
  } else if(e.target.className === 'dropzoneOne') {
    e.target.style.background = "rgba(80, 156, 245, .5)";
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
    var secondGridDivTop = $('<div class="second-grid-top dropzoneOne" style="position: absolute; height: 55px; width: 55px; z-index: 2;"></div>');
    var secondGridDivBottom = $('<div class="second-grid-bottom dropzoneOne" style="position: absolute; height: 55px; width: 55px; z-index: 2;"></div>');
    var secondGridDivLeft = $('<div class="second-grid-left dropzoneOne" style="position: absolute; height: 55px; width: 55px; z-index: 2;"></div>');
    var secondGridDivRight = $('<div class="second-grid-right dropzoneOne" style="position: absolute; height: 55px; width: 55px; z-index: 2;"></div>');
    $(divTarget).prepend(secondGridDivTop, secondGridDivLeft, secondGridDivRight, secondGridDivBottom);
    dragged.setAttribute('draggable', false);
  } else if(e.target.className === "dropzoneOne") {
    e.target.style.background = "";
    dragged.parentNode.removeChild(dragged);
    e.target.appendChild(dragged);
    dragged.setAttribute('draggable', false);
  }
  placementTurn++;
  if(placementTurn > placementTurnTotal) {
    $('.dropzone').removeClass('dropzone');
  } else console.log("Sooon my dog of war.");
}
// events fired on draggable target
document.addEventListener('drag', drag, false);
document.addEventListener('dragstart', dragStart, false);
document.addEventListener('dragend', dragEnd, false);
document.addEventListener('dragover', dragOver, false);
document.addEventListener('dragenter', dragEnter, false);
document.addEventListener('dragleave', dragLeave, false);
document.addEventListener('drop', drop, false);

/*
$('.second-grid-top').on('click', function() {
  console.log('top toptppptptptptpttpptptpt');
});
*/

// start absolute drag block for player pieces??

// map of grids in order to keep track of where
// tokens are placed. Unsure if I can use.

// var map = [[0,0,0,0,0,0],
//            [0,0,0,0,0],
//            [0,0,0,0,0,0]]
