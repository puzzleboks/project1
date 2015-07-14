//shuffle
//create an array with image urls (doubled)
//when 'play' button is clicked, shuffle deck
//change 'play' button to 'start over'
var imgUrlArray = ["images/bolt.png", "images/bolt.png", "images/star.png", "images/star.png", "images/circle.png", "images/circle.png", "images/square.png", "images/square.png", "images/triangle.png", "images/triangle.png",];
// var card1 = {
//   url:"images/bolt.png",
//   index: 0,
//   flip: 0
// }
var card = document.getElementById('board').getElementsByTagName("img");
var board = document.querySelector("#board");
var playBtn = document.querySelector(".playBtn");
var score1 = document.querySelector(".score1");
var score2 = document.querySelector(".score2");
var score1Num = 0;
var score2Num = 0;
var player = 1;
var state = 0;
var game = 0;
var boardState = [0,0,0,0,0,0,0,0,0,0];//0=back,1=face,2=removed
var matchArray = [];
var cardArray = [];
var choicePic = "";
var choiceNum = 0;

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
  if (game === 0){
    console.log(shuffled);
    game = 1;
    document.querySelector("#playTxt").innerHTML = "Start Over";
    startGame ();
  }else{
    game = 0;
    //console.log("start over");
    //return;
  }
})
//reveal
//when a card is clicked, reveal the card that equals that position in the array (replace placeholder?)
function startGame(){
  board.addEventListener("click", revealCards, false);
  function revealCards(e) {
    if (game === 0) {
      //game = 1;
      return;
    }else{//game === 1
      if (e.target !== e.currentTarget) {
        var targetId = parseInt(e.target.className);
        if (state === 0) {
          e.target.src = imgUrlArray[targetId];
          game = 1;
          state = 1;
          boardState[targetId] = 1;
          choicePic = e.target.src;
          choiceNum = targetId;
          //matchArray.push(e.target.src);
          //cardArray.push(targetId);
        }else if (state === 1) {
          if (boardState[targetId] === 0) {
            e.target.src = imgUrlArray[targetId];
            //delay
            var myDelay = setTimeout(function () {myTimer()}, 1000);
            function myTimer() {
              if (e.target.src === choicePic){
                e.target.style.visibility = 'hidden';
                card[choiceNum].style.visibility = 'hidden';
                boardState[targetId] = 2;
                //update score
                if (player === 1) {
                  score1Num = score1Num + 2;
                  score1.innerHTML = score1Num;

                }else{
                  score2Num = score2Num + 2;
                  score2.innerHTML = score2Num;
                }
              }else{
                player = 2;
                e.target.src = "images/cardBack.png";
                card[choiceNum].src = "images/cardBack.png";
                boardState[targetId] = 0;
              }
              state = 0;
              clearTimeout(myDelay);
              return;
            }

          }
          return;
        }
      }
      e.stopPropagation();
      //if cards match, remove them from the board and update score
      //if cards don't match, hide them again (replace with placeholder)
    }
  }

}


//win
//when all the cards are removed from the board, announce the winner (player with the most points)
//change 'play' button to 'play again'
