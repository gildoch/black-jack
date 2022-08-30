//Variaveis
let player = {
  name: "Gildo",
  chips: 140,
};
let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";

//Elementos HTML
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardEl = document.getElementById("card-el");
let playerEl = document.getElementById("player-el");
playerEl.textContent = player.name + ": $" + player.chips;

//Metodos
function getRandomNumbers() {
  let randomNum = Math.floor(Math.random() * 13) + 1;
  if (randomNum === 1) {
    return 11;
  } else if (randomNum > 10) {
    return 10;
  } else {
    return randomNum;
  }
}

function startGame() {
  isAlive = true;
  let firstCard = getRandomNumbers();
  let secondCard = getRandomNumbers();
  let cards = [firstCard, secondCard];
  sum += firstCard + secondCard;
  renderGame();
}

function renderGame() {
  cardEl.textContent = "Cards: ";
  sumEl.textContent = "Sum: " + sum;

  for (let i = 0; i < cards.length; i++) {
    cardEl.textContent += cards[i] + " ";
  }

  if (sum <= 20) {
    message = "Do you want to draw a new card? 🙂";
  } else if (sum === 21) {
    message = "Wohoo! You've got Blackjack! 🥳";
    hasBlackJack = true;
  } else {
    message = "You're out of the game! 😭";
    isAlive = false;
  }
  messageEl.textContent = message;
}

function newCard() {
  if (isAlive === true && hasBlackJack === false) {
    let card = getRandomNumbers();
    sum += card;
    cards.push(card);
    renderGame();
  }
}
