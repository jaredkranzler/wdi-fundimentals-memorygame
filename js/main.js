
var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];
var checkForMatch = function () {
	cardsInPlay[0] === cardsInPlay[1] ? alert("You found a match!"): alert("Sorry, try again.");
};
var flipCard = function (cardId) {
	console.log("User flipped " + cards[cardId]);
	cardsInPlay.push(cards[cardId]);
if (cardsInPlay.length === 2) {
}
checkForMatch ();
};
	flipCard (0);
	flipCard (2);