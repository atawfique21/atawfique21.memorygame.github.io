const cards = [
{
rank: "queen",
suit: "hearts",
cardImage: "images/queen-of-hearts.png"
},
{
rank: "queen",
suit: "diamonds",
cardImage: "images/queen-of-diamonds.png"
},
{
rank: "king",
suit: "hearts",
cardImage: "images/king-of-hearts.png "
},
{
rank: "king",
suit: "diamonds",
cardImage: "images/king-of-diamonds.png"
}
];

let cardsInPlay = [];

function checkForMatch() {
		this.setAttribute(src, "/images/king-of-diamonds.png")
		if (cardsInPlay[0] === cardsInPlay[1]) {
		  alert("You found a match!");
		} else {
		  alert("Sorry, try again.");
	}
}

function flipCard() {
	let me = this.getAttribute('data-id')
	console.log(me)
	console.log("User Flipped: " + cards[me].rank);
	cardsInPlay.push(cards[me].rank)
	console.log(cards[me].cardImage)
	console.log(cards[me].suit)
	checkForMatch();
}

function createBoard() {
	for (var i = 0; i < 4; i++) {
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src', 'images/back.png');
		cardElement.setAttribute('data-id', [i])
		cardElement.addEventListener('click', flipCard)
		document.getElementById('game-board').appendChild(cardElement)
	}
}

createBoard();

console.log