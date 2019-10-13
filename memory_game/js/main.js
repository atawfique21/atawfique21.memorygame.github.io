const cards = ["queen", "queen", "king", "king"];
let cardsInPlay = [];
let cardOne = cards[0];

cardsInPlay.push(cardOne)
console.log(cardOne)

let cardTwo = cards[2];
cardsInPlay.push(cardTwo)

console.log(cardTwo)

if (cardsInPlay.length == 2){
	if (cardOne == cardTwo){
		alert("You've found a match!")
	} else {
		alert("No match!")
	}
}