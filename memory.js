// memory game


// global variables

// elements
var card = document.getElementById('board').getElementsByTagName("img");
var board = document.querySelector("#board");
var playBtn = document.querySelector(".playBtn");
var score1 = document.querySelector(".score1");
var score2 = document.querySelector(".score2");

// array of images (hard coded)
var imgUrlArray = ["images/bolt.png", "images/bolt.png", "images/star.png", "images/star.png", "images/circle.png", "images/circle.png", "images/square.png", "images/square.png", "images/triangle.png", "images/triangle.png",];

// board status: 0 = back up, 1 = face up, 2 = hidden
var boardState = [0,0,0,0,0,0,0,0,0,0];

// play status: 0 = first pick, 1 = second pick
var state = 0;

// game status: 0 = finished, 1 = in progress
var game = 0;

var score1Num = 0;      //player 1 score
var score2Num = 0;      //player 2 score
var player = 1;         //current player
var choicePic = "";     //image of first card
var choiceNum = 0;      //number of first card



//functions

// click play/start over button to start game
playBtn.addEventListener("click", function(){
  if (game === 1){
    resetGame ();
  }
    startGame();
})

// resetGame: clear variables, scores, and game board
function resetGame() {
  boardState = [0,0,0,0,0,0,0,0,0,0];
  state = 0;
  game = 0;
  score1Num = 0;
  score2Num = 0;
  player = 1;
  choicePic = "";
  choiceNum = 0;
  playBtn.innerHTML = "Play";
  score1.innerHTML = 0;
  score2.innerHTML = 0;
  score1.style.color = 'white';
  score2.style.color = 'white';
  for (var i=0; i<imgUrlArray.length; i++) {
    card[i].src = "images/cardBack.png";
    card[i].style.visibility = "visible";
  }
}

// start game: shuffle array images, set board eventlistener
function startGame(){
  var shuffled = shuffle(imgUrlArray);
  console.log(shuffled);
  game = 1;
  score1.style.color = 'red';
  playBtn.innerHTML = "Start Over";
  board.addEventListener("click", revealCards, false);
}

// shuffle: randomize card array (within the array)
function shuffle(array) {
  var m = array.length, t, i;
  // While there remain elements to shuffle…
  while (m) {
    // Pick a remaining element…
    i = Math.floor(Math.random() * m--);
    // And swap it with the current element.
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }
  return array;
}

// reveal cards: handle a player's turn picking two cards
function revealCards(e) {
  var targetId = parseInt(e.target.className);
  if (game === 1 && boardState[targetId] === 0 && e.target !== e.currentTarget) {
    // first card
    if (state === 0) {
      e.target.src = imgUrlArray[targetId];
      state = 1;
      boardState[targetId] = 1;
      choicePic = e.target.src;
      choiceNum = targetId;
    // second card
    }else if (state ===1) {
      e.target.src = imgUrlArray[targetId];
      // delay 1 second for player to view both cards
      setTimeout( function () {compareCards(e, targetId)}, 1000);
    }
  }
  e.stopPropagation();
  return;
}

// compare cards: compare the result of the two picked cards
function compareCards(e, targetId) {
  // cards match
  if (e.target.src === choicePic){
    e.target.style.visibility = 'hidden';
    card[choiceNum].style.visibility = 'hidden';
    boardState[targetId] = 2;
    boardState[choiceNum] = 2;
    if (player === 1) {
      score1Num = score1Num + 2;
      score1.innerHTML = score1Num;
    }else{
      score2Num = score2Num + 2;
      score2.innerHTML = score2Num;
    }
    //all cards revealed, game over
    if (score1Num + score2Num === imgUrlArray.length) {
      if (score2Num > score1Num){
        alert ("Player 2 Wins!");
      }else if (score1Num > score2Num){
        alert ("Player 1 Wins!");
      }else{
        alert ("It's a Tie!");
      }
      resetGame();
    }
  // cards don't match, next player's turn
  }else{
    if (player === 1) {
      player = 2;
      score2.style.color = "red";
      score1.style.color = "white";
    }else{
      player = 1;
      score1.style.color = "red";
      score2.style.color = "white";
    }
    e.target.src = "images/cardBack.png";
    card[choiceNum].src = "images/cardBack.png";
    boardState[targetId] = 0;
    boardState[choiceNum] = 0;
  }
  state = 0;
  return;
}
