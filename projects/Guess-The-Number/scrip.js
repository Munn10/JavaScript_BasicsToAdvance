let RandomNum = parseInt(Math.random() * 100 + 1);
const submit = document.querySelector("#subt");
const userInput = document.querySelector("#guess-field");
const guesses = document.querySelector(".guesses");
const startOver = document.querySelector(".lastResult");
const lowOrHigh = document.querySelector(".lowOrhigh");

const p = document.createElement("p");

let prevGuess = [];
let numGuesses = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener("click", (e) => {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    // console.log(guess);
    validateGuess(guess);
  });
}

const validateGuess = (guess) => {
  if (isNaN(guess)) {
    alert(`Enter a valid number`);
  } else if (guess < 1) {
    alert(`Enter a number more than 1`);
  } else if (guess > 100) {
    alert(`Enter a number less than 100`);
  } else {
    prevGuess.push(guess);
    if (numGuesses === 10) {
      displayGuess(guess);
      displayMessage(`Game Over! Random number is ${RandomNum}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
};

const checkGuess = (guess) => {
  if (guess === RandomNum) {
    displayMessage(`You guessed it right!!!`);
    endGame();
  } else if (guess > RandomNum) {
    displayMessage(`Number is TOO High`);
  } else if (guess < RandomNum) {
    displayMessage(`Number is TOO Low`);
  }
};

const displayGuess = (guess) => {
  userInput.value = "";
  guesses.innerHTML += `${guess}, `;
  numGuesses++;
  startOver.innerHTML = `${10 - numGuesses}`;
};

const displayMessage = (msg) => {
  lowOrHigh.innerHTML = `<h2>${msg}</h2>`;
};

const endGame = () => {
  userInput.value = "";
  userInput.setAttribute("disabled", "");
  p.classList.add("button");
  p.innerHTML = `<h2 id='new-Game'>Start new Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
};
const newGame = () => {
  const newGame = document.querySelector("#new-Game");
  newGame.addEventListener("click", () => {
    RandomNum = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuesses = 1;
    guesses.innerHTML = "";
    startOver.innerHTML = `${10 - numGuesses}`;
    userInput.removeAttribute("disabled");
    startOver.removeChild(p);

    playGame = true;
  });
};
