let randomNumber = 0;

const numberEl = document.querySelector("#txtNumber");
const startEl = document.querySelector("#btn-start");
const guessEl = document.querySelector("#btn-guess");
const rightEl = document.querySelector("#shot");
const lblResultEl = document.querySelector("#lblResult");
const kalp = document.querySelector("#kalp");

const maxRandomNumber = 100;
const minRandomNumber = 1;

rightEl.value = 5;
rightEl.innerHTML = rightEl.value;

startEl.addEventListener("click", () => {
  randomNumber = randomSayi(minRandomNumber, maxRandomNumber);
  numberEl.removeAttribute("disabled");
  numberEl.focus();
  startEl.innerHTML = "Reset Game";
  guessEl.style.display = "inline";
  lblResultEl.innerHTML = "";

  rightEl.value = 5;
});

guessEl.addEventListener("click", () => {
  let num = Number(numberEl.value);

  num = num || 0;
  //if (!num) num = 0;

  if (num === randomNumber) {
    lblResultEl.innerHTML = "Congrats! You guessed the number";
    reset();
  } else if (num > randomNumber) {
    lblResultEl.innerHTML = "Your number is greater than the random number";
    rightEl.innerHTML = rightEl.value -= 1;

    gameOver();
  } else {
    lblResultEl.innerHTML = "Your number is lesser than the random number";
    rightEl.innerHTML = rightEl.value -= 1;

    gameOver();
  }
  numberEl.value = "";
  numberEl.focus();
});

const gameOver = () => {
  if (rightEl.value == 0) {
    lblResultEl.innerHTML = "Game Over";
    reset();
  }
};

const reset = () => {
  numberEl.setAttribute("disabled", "true");
  startEl.innerHTML = "Start the Game";
  guessEl.style.display = "none";
};

const randomSayi = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
