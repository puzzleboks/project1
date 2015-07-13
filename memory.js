$(document).ready( function(){
  //shuffle
  //create an array with image urls (doubled)
  //when 'play' button is clicked, shuffle deck
  //change 'play' button to 'start over'
  var imgUrlArray = ["images/bolt.png", "images/bolt.png", "images/star.png", "images/star.png", "images/circle.png", "images/circle.png", "images/square.png", "images/square.png", "images/triangle.png", "images/triangle.png",];
  var card = document.getElementById('board').getElementsByTagName("img");
  var playBtn = document.getElementsByClassName('playBtn');

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
  //add button click to play button
  var shuffled = shuffle(imgUrlArray);
  console.log(shuffled);
//reveal
  //when a card is clicked, reveal the card that equals that position in the array (replace placeholder?)
  //when a second card is clicked, reveal that card

    // for (var i=0; i<card.length; i++) {
    //   card[i].addEventListener("click", function(){
    //     this.src = imgUrlArray[0];
    //     console.log(this);
    //   })
    // }

//match
  //if cards match, remove them from the board and update score
  //if cards don't match, hide them again (replace with placeholder)

//win
  //when all the cards are removed from the board, announce the winner (player with the most points)
  //change 'play' button to 'play again'


})//end of code
