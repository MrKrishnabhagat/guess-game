'use strict';

const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
score0El.textContent = 0;
score1El.textContent = 0;
const diceEl = document.querySelector('.dice');
diceEl.classList.add('hidden');
const curren0El = document.getElementById('current--0');
const curren1El = document.getElementById('current--1');
let currentScore = 0;
let activePlayer = 0;
let playing = true;
const score = [0, 0];
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
//btn functionality

const btnRoll = document.querySelector('.btn--roll');
const btnNew = document.querySelector('.btn--new');
const btnHold = document.querySelector('.btn--hold');

//die rolling
const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;

  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};
btnRoll.addEventListener('click', function () {
  if (playing) {
    const dice = Math.trunc(Math.random() * 6 + 1);
    console.log(dice);
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;
    if (dice !== 1) {
      //add die to current score
      currentScore = currentScore + dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      switchPlayer();
    }
  }
});
btnHold.addEventListener('click', function () {
  if (playing) {
    score[activePlayer] += currentScore;

    document.getElementById(`score--${activePlayer}`).textContent =
      score[activePlayer];
    if (score[activePlayer] > 100) {
      //finish
      diceEl.classList.add('hidden');
      playing = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
    } else {
      switchPlayer();
    }
  }
});
btnNew.addEventListener('click', function () {
  playing = true;
  score0El.textContent = 0;
  score1El.textContent = 0;
  (score[0] = 0), (score[1] = 0);
  currentScore = 0;
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.remove('player--winner');
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  if (activePlayer == 1) {
    switchPlayer();
  }
});
