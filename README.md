# Project 1: Memory Game

http://puzzleboks.github.io/project1/

**User Stories:**

* As a user I want to be able to see the names of the players so that I know whose playing
* As a user I want to see whose turn it is so that I know when to play
* As a user I want to see what the score is so that I know whose winning
* As a user I want to know who the winner is at the end of the game
* As a user I want to be able to start the game
* As a user I want to be able play the game again (reset)
* As a user I want to be able to click a card so that it reveals its image (symbol)
* As a user I want to be able to click a second card so that it reveals its image
* As a user I want to be able to see the score update when two cards match
* As a user I want to be able to remove the two revealed cards if they match
* As a user I want the two revealed cards to be hidden again if they don't match

**Rules:**

In turn each player chooses two cards and turns them face up. If they are of the same symbol then that player wins the pair, receives two points, and plays again. If they are not of the same symbol, the cards are automatically turned face down again after one second and play passes to the next player. The game ends when the last pair has been picked up. The winner is the person with the most pairs, and there may be a tie for first place.

**Methods Used:**

* Javascript only; no jQuery. Just to see if I could do it.
* Used a shuffle function that I read about [here](http://bost.ocks.org/mike/shuffle/), based on the Fisher-Yates method. It's fascinating.
* Used event delegation to handle the click events for each card. Instead of adding an eventlistener to each card, one was added to the card's parent element. Relies on event bubbling to function.

**Issues:**

* Decided to hard code some of my Javascript, such as the array of image urls. I would need to change this if I wanted to add a feature such as multiple decks (user would choose one).

* If I was going to do the project again I think I might use Ksenia's solution of using objects. Each card would be an object that has several properties like url, name, index, etc.

* I got very confused trying to follow all my many conditions, which I tried to handle with various "states".

* Did not effectively set up my task tracking. Hoping to do that on next project.
