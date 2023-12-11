/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  document.querySelector(`#card`).classList.add(generateRandomSuit());
  document.querySelector(`.number`).innerHTML = generateRandomNumbers();

  function generateRandomNumbers() {
    let numbers = [
      "A",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "J",
      "K",
      "Q"
    ];
    let indexnumb = Math.floor(Math.random() * numbers.length);
    return numbers[indexnumb];
  }
  function generateRandomSuit() {
    let suit = ["trebol", "dinamond", "heart", "picas"];
    let indexSuit = Math.floor(Math.random() * suit.length);
    return suit[indexSuit];
  }

  document.querySelector(`#card`);
  console.log("Hello Rigo from the console!");
};
