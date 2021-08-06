function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * (max - min) + min +1 );
}


let randomNumber = getRandomArbitrary(1, 10);
const chances = document.querySelector('.chances');
const guesses = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const guessSubmit = document.querySelector('.guessSubmit');
const guessField = document.querySelector('.guessField');

let guessCount = 3;

let resetButton;

function checkGuess() {
  let userGuess = Number(guessField.value);

    chances.textContent = `Your Chances: ${guessCount-1}`;

    if (guessCount === 3) {
      guesses.textContent = 'Previous guesses: ';
    }

     guesses.textContent += userGuess + ' ';

  if (userGuess === randomNumber) {
    lastResult.textContent = 'Congratulations! You Win!';
    lastResult.style.backgroundColor = 'green';
    lowOrHi.textContent = '';
    chances.textContent = '';
    setGameOver();
  } else if (guessCount === 1) {
    lastResult.textContent = 'You Lose!';
    lowOrHi.textContent = '';
    setGameOver();
  } else {
    lastResult.textContent = 'Wrong!';
    lastResult.style.backgroundColor = 'red';
    if(userGuess < randomNumber) {
      lowOrHi.textContent = 'Correct answer is smaller!';

    } else if (userGuess > randomNumber) {
      lowOrHi.textContent = ' Correct answer is greater!';

    }
  }

  guessCount--;
  guessField.value = '';

}


guessSubmit.addEventListener('click', checkGuess);

function setGameOver() {
  guessField.disabled = true;
  guessSubmit.disabled = true;
  resetButton = document.createElement('button');
  resetButton.textContent = 'Start New Game';
  document.body.appendChild(resetButton);
  resetButton.addEventListener('click', resetGame)

}

function resetGame() {
  guessCount = 3;
  const resetParas = document.querySelectorAll('.resultParas p');
  for(let i=0; i<resetParas.length;i++) {
    resetParas[i].textContent = '';
  }

  resetButton.parentNode.removeChild(resetButton);
  guessField.disabled = false;
  guessSubmit.disabled = false;
  guessField.value = '';

  lastResult.style.backgroundColor = 'white';
  randomNumber = getRandomArbitrary(1,10);
}
