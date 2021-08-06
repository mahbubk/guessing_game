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

guessSubmit.addEventListener('click', checkGuess);


function checkGuess() {
  guesses.textContent = 'Your previous guesses: ';

 for(let i=3;i>=1;i--) {

  let userGuess = Number(prompt());

  chances.textContent = `Your chances remaining: ${i-1}`;
  guesses.textContent += ' ' + userGuess;

  if (userGuess === randomNumber) {
     lastResult.textContent = 'Congratulations! You Win!';
     lowOrHi.textContent = '';
     chances.textContent = '';
     // guessSubmit.textContent = 'Start new game';
     guesses.textContent = '';
     setGameOver();
     break;


   } else if (i === 1) {
     lastResult.textContent = 'You Lose!';
     lowOrHi.textContent = '';
     chances.textContent = '';
     // guessSubmit.textContent = 'Start new game';
     guesses.textContent = '';
     setGameOver();
     // break;
     // i=0;

   } else {
     lastResult.textContent = 'Wrong!';
     if(userGuess < randomNumber) {
       lowOrHi.textContent = 'Correct answer is smaller!';

     } else if (userGuess > randomNumber) {
       lowOrHi.textContent = ' Correct answer is greater!';

     }

}

}

}

//
function setGameOver() {


  // resetButton = document.createElement('button');
  // resetButton.textContent = 'Start new game';
  // document.body.appendChild(resetButton);
  if (confirm('Start New Game')) {
  guessSubmit.addEventListener('click', checkGuess);
  const resetParas = document.querySelectorAll('.resultParas p');
    for(let i = 0 ; i < resetParas.length ; i++) {
      resetParas[i].textContent = '';
}
}
// guessSubmit.value = 'Start New Game';
}
//
//
// function resetGame() {
//
//   const resetParas = document.querySelectorAll('.resultParas p');
//   for(let i = 0 ; i < resetParas.length ; i++) {
//     resetParas[i].textContent = '';
//   }
//   //
//   // resetButton.parentNode.removeChild(resetButton);
//   // guessField.disabled = false;
//   // guessSubmit.disabled = false;
//   // guessField.value = '';
//   // guessField.focus();
//   checkGuess();
//
//
//
// }
