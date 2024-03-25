'use strict';
let score = 20;
let number = Math.trunc(Math.random() * 20) + 1;
let highscore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (score > 0) {
    if (!guess) {
      document.querySelector('.message').textContent = 'No number';
    }
    //when player wins
    else if (guess === number) {
      document.querySelector('.message').textContent = '🎉 correct number!';
      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').style.width = '30rem';
      document.querySelector('.number').textContent = number;
      if (score > highscore) {
        highscore = score;
        document.querySelector('.highscore').textContent = highscore;
      }
    }
    //guess>number
    else if (guess > number) {
      document.querySelector('.message').textContent = ' 📈 Too high';
      score--;
      document.querySelector('.score').textContent = score;
    } else if (guess < number) {
      document.querySelector('.message').textContent = ' 📈 Too Low';
      score--;
      document.querySelector('.score').textContent = score;
    }
    if (score == 0) {
      document.querySelector('.message').textContent = ' you lost the game';
    }
  }
});
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  document.querySelector('.score').textContent = score;
  number = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
});
