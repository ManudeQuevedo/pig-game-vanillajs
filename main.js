'use strict';

// Players:
const playerOne = document.querySelector('.player-0');
const playerTwo = document.querySelector('.player-1');
const namePlayerOne = document.querySelector('#name-0');
const namePlayerTwo = document.querySelector('#name-1');
const scorePlayerOne = document.querySelector('#score-0');
const scorePlayerTwo = document.querySelector('#score-1');
const currentScorePlayerOne = document.querySelector('#current-0');
const currentScorePlayerTwo = document.querySelector('#current-1');

// Elements:
const diceElement = document.querySelector('.dice');

// Functionality
const rollDice = document.querySelector('.btn-roll');
const newGame = document.querySelector('.btn-new');
const btnHold = document.querySelector('.btn-hold');

let scores, currentScore, activePlayer, playing;

const init = function () {
	// Setting up initial scores:
	scores = [0, 0];
	currentScore = 0;
	activePlayer = 0;
	playing = true;

	scorePlayerOne.textContent = 0;
	scorePlayerTwo.textContent = 0;
	currentScorePlayerOne.textContent = 0;
	currentScorePlayerTwo.textContent = 0;

	// Dice:
	diceElement.classList.add('hidden');

	// Player Classes:
	playerOne.classList.remove('player-winner');
	playerTwo.classList.remove('player-winner');
	playerOne.classList.add('player-active');
	playerTwo.classList.remove('player-active');

	// Get Player names:
	const getNames = function () {
		const name1 = prompt('Player One Name: ');
		const name2 = prompt('Player Two Name: ');
		namePlayerOne.textContent = name1;
		namePlayerTwo.textContent = name2;
	};

	getNames();
};

const switchPlayer = function () {
	// Reset current player score to 0 before switching players:
	document.getElementById(`current-${activePlayer}`).textContent = 0;
	// Score is now 0
	currentScore = 0;
	// Validates which one is the current active player to properly switch:
	activePlayer = activePlayer === 0 ? 1 : 0;
	// Add or Remove the class from the active player:
	playerOne.classList.toggle('player-active');
	playerTwo.classList.toggle('player-active');
};

init();

rollDice.addEventListener('click', () => {
	if (playing) {
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
			switchPlayer();
		}
	}
});

btnHold.addEventListener('click', () => {
	if (playing) {
		// Add current score to the active player:
		scores[activePlayer] += currentScore;
		// Display the active player's score:
		console.log(activePlayer);
		document.getElementById(`score-${activePlayer}`).textContent =
			scores[activePlayer];
		console.log(scores);
		// validate that current score is >= to 100:
		if (scores[activePlayer] >= 100) {
			playing = false;
			diceElement.classList.add('hidden');
			document
				.querySelector(`.player-${activePlayer}`)
				.classList.add('player-winner');
			document
				.querySelector(`.player-${activePlayer}`)
				.classList.remove('player-active');
		} else {
			switchPlayer();
		}
	}
});

newGame.addEventListener('click', init);
