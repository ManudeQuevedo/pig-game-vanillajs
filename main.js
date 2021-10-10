'use strict';

// Players:
const scorePlayerOne = document.querySelector('#score-1');
const scorePlayerTwo = document.querySelector('#score-2');
const playerOne = document.querySelector('.player-1');
const playerTwo = document.querySelector('.player-2');

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

	// Display the dice
	diceElement.classList.remove('hidden');
	diceElement.src = `./imgs/dice-${dice}.png`;

	// Checked rolled dice:
	if (dice !== 1) {
		// If dice is not 1, roll the dice and sum the numbers:
		currentScore += dice;
		// Determine which player is the active one and display the current score sum:
		document.getElementById(`current-${activePlayer}`).textContent =
			currentScore;
	} else {
		// Reset current player score to 0 before switching players:
		document.getElementById(`current-${activePlayer}`).textContent = 0;
		// Score is now 0
		currentScore = 0;
		// Validates which one is the current active player to properly switch:
		activePlayer = activePlayer === 1 ? 2 : 1;
		// Add or Remove the class from the active player:
		playerOne.classList.toggle('player-active');
		playerTwo.classList.toggle('player-active');
	}
});
