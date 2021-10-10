'use strict';

// Players:
const scorePlayerOne = document.querySelector('#score-1');
const scorePlayerTwo = document.querySelector('#score-2');
const currentScorePlayerOne = document.querySelector('#current-1');
const currentScorePlayerTwo = document.querySelector('#current-2');

// Elements:
const diceElement = document.querySelector('.dice');

// Functionality
const rollDice = document.querySelector('.btn-roll');
const newGame = document.querySelector('.btn-new');
const holdGame = document.querySelector('.btn-hold');

// Setting up initial scores:
scorePlayerOne.textContent = 0;
scorePlayerTwo.textContent = 0;

const scores = [0, 0];
let currentScore = 0;
let activePlayer = 1;
// Dice:
diceElement.classList.add('hidden');

rollDice.addEventListener('click', () => {
	// Roll the dice:
	const dice = Math.trunc(Math.random() * 6) + 1;
	console.log(dice);

	// Display the dice
	diceElement.classList.remove('hidden');
	diceElement.src = `./imgs/dice-${dice}.png`;

	// Checked rolled dice:
	if (dice !== 1) {
		currentScore += dice;
		currentScorePlayerOne.textContent = currentScore;
	} else {
	}
});
