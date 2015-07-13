$(document).ready( function(){
  //shuffle
  //create an array with image urls (doubled)
  //when 'play' button is clicked, shuffle deck
  //change 'play' button to 'start over'
  var imgUrlArray = ["images/bolt.png", "images/bolt.png", "images/star.png", "images/star.png", "images/circle.png", "images/circle.png", "images/square.png", "images/square.png", "images/triangle.png", "images/triangle.png",];
  var card = document.getElementById('board').getElementsByTagName("img");
  var board = document.querySelector("#board");
  var playBtn = document.querySelector(".playBtn");
  var turn = "none";
  //var state = 0;
  var cardCount = 0;

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
  //click play button to shuffle deck and call ? function
  playBtn.addEventListener("click", function(){
    if (turn === "none"){//if play then shuffle
      var shuffled = shuffle(imgUrlArray);
      console.log(shuffled);
      turn = "player1";
      //state = 1;
      //run function
    }else{
      console.log(turn);
    }
    //if start over then reset?
    //if play again then ?
    //visually show whose turn it is?
  })


//reveal
  //when a card is clicked, reveal the card that equals that position in the array (replace placeholder?)
  //when a second card is clicked, reveal that card
  //console.log(card);
  // function alertMe() {
  //   for (var i=0; i<card.length-1; i++) {
  //     this.src = imgUrlArray[i];
  //   }
  // }
  //
board.addEventListener("click", doSomething, false);

function doSomething(e) {
    if (e.target !== e.currentTarget) {
      switch(e.target.alt) {
        case "card zero":
          e.target.src = imgUrlArray[0];
        break;
        case "card one":
          e.target.src = imgUrlArray[1];
        break;
        case "card two":
          e.target.src = imgUrlArray[2];
        break;
        case "card three":
          e.target.src = imgUrlArray[3];
        break;
        case "card four":
          e.target.src = imgUrlArray[4];
        break;
        case "card five":
          e.target.src = imgUrlArray[5];
        break;
        case "card six":
          e.target.src = imgUrlArray[6];
        break;
        case "card seven":
          e.target.src = imgUrlArray[7];
        break;
        case "card eight":
          e.target.src = imgUrlArray[8];
        break;
        case "card nine":
          e.target.src = imgUrlArray[9];
        break;
      }
    }
    e.stopPropagation();
}
//match
  //if cards match, remove them from the board and update score
  //if cards don't match, hide them again (replace with placeholder)

//win
  //when all the cards are removed from the board, announce the winner (player with the most points)
  //change 'play' button to 'play again'


})//end of code
