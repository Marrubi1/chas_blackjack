// You blackjack game code goes here
import { cards } from "./cards.js";
// You blackjack game code goes here
let sum = 0;
let dealerCardSum = 0;

const takeCard = document.querySelector("#takeCard");
const dealerCards = document.querySelector("#dealerCards");
const cardsElement = document.querySelector("#cardsELement");
const resultElement = document.querySelector("#result");
const stopElement = document.querySelector("#stop");

function randomCard() {
    const randNum = Math.floor(Math.random() * cards.length);
    const chosenCard = cards[randNum];
    return chosenCard;
}
document.getElementById("restart-button").addEventListener("click", myFunction);
function myFunction() {
    location.reload();
}
takeCard.addEventListener("click", userTakeCard);
stopElement.addEventListener("click", dealerTakeCards);

function userTakeCard(e) {
    if (sum > 21) {
        return;
    }
    const card = randomCard();
    const cardImage = document.createElement("img");
    cardImage.setAttribute("class", "cardImage");
    cardImage.src = `images/${card.file}`;

    cardsElement.appendChild(cardImage);
    sum += card.num;
    if (sum > 21) {
        resultElement.textContent = "Over 21, you lost!.";
    }
}

function dealerTakeCards(event) {
    resultElement.textContent = "You stopped " + sum + ".";

    while (dealerCardSum < 17) {
        const card = randomCard();
        const cardImage = document.createElement("img");
        cardImage.setAttribute("class", "cardImage");
        cardImage.src = `images/${card.file}`;
        dealerCards.appendChild(cardImage);
        dealerCardSum += card.num;
    }
    if (dealerCardSum > 21) {
        resultElement.textContent = "Dealer got over 21, you won!";
    } else if (dealerCardSum >= sum) {
        resultElement.textContent =
            "Dealer had the same amount or more points, he won ";
    } else if (sum > 21) {
        resultElement.textContent = "You have more than 21 points, you lost.";
    } else {
        resultElement.textContent = "You had more points, you won!";
    }
}