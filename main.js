'use strict';
// Player scores:
const scorePlayerOne = document.querySelector('#score--0');
const scorePlayerTwo = document.querySelector('#score--1');
// Functionality:
const rollDice = document.querySelector('.btn--roll');

// Setting up initial scores:
scorePlayerOne.textContent = 0;
scorePlayerTwo.textContent = 0;

// Dice:
const dice = Math.trunc(Math.random() * 6) + 1;
console.log(dice);
