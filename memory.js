//shuffle
//create an array with image urls (doubled)
//when 'play' button is clicked, shuffle deck
//change 'play' button to 'start over'
var imgUrlArray = ["images/bolt.png", "images/bolt.png", "images/star.png", "images/star.png", "images/circle.png", "images/circle.png", "images/square.png", "images/square.png", "images/triangle.png", "images/triangle.png",];
var card1 = {
  url:"images/bolt.png",
  index: 0,
  flip: 0
}
var card = document.getElementById('board').getElementsByTagName("img");
var board = document.querySelector("#board");
var playBtn = document.querySelector(".playBtn");
//var turn = "none";
var player = 0;
var state = 0;
var game = 0;
var boardState = [0,0,0,0,0,0,0,0,0,0];
var matchArray = [];
var cardArray = [];
//var state = 0;
var click = 0;

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
//click play button to shuffle deck and start game
playBtn.addEventListener("click", function(){
  var shuffled = shuffle(imgUrlArray);
  console.log(shuffled);
  if (player === 0){//if play then shuffle
    player = 1;
    document.querySelector("#playTxt").innerHTML = "Start Over";
    startGame ();
  }else{
    console.log("start over");
  }
})
//reveal
//when a card is clicked, reveal the card that equals that position in the array (replace placeholder?)
function startGame(){
  board.addEventListener("click", revealCards, false);
  function revealCards(e) {
    if (game === 0) {
      return;
    }else{
      if (e.target !== e.currentTarget) {
        var targetId = parseInt(e.target.className);
        if (state === 0) {
          
          if (click < 2) {
            //reveal card
            click++
            e.target.src = imgUrlArray[targetId];
            matchArray.push(e.target.src);
            if (matchArray[0] === matchArray[1]){
              console.log("test");
            }
          }
        }
        //if cards match, remove them from the board and update score
        //if cards don't match, hide them again (replace with placeholder)
      }
    }
    e.stopPropagation();
  }
}

//win
//when all the cards are removed from the board, announce the winner (player with the most points)
//change 'play' button to 'play again'
