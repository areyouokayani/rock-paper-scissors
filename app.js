let userScore = 0;
let compScore = 0;

const userScoreDisplay = document.querySelector("#userScore");
const compScoreDisplay = document.querySelector("#compScore");

const resetBtn = document.querySelector("#reset");
const scoreBoard = document.querySelector(".scoreBoard");
const result = document.querySelector(".result > p");

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

function setColor(element, color) {
  element.className = color;
}

function colorChange() {
  if (userScore > compScore) {
    setColor(userScoreDisplay, "green");
    setColor(compScoreDisplay, "red");
    return;
  }
  if (userScore < compScore) {
    setColor(userScoreDisplay, "red");
    setColor(compScoreDisplay, "green");
    return;
  }

  setColor(userScoreDisplay, "black");
  setColor(compScoreDisplay, "black");
}

// the two above functions // setColor() and colorChange() // are more concise ways of writing this code than if/else in one big function
//function colorChange() {
//if (userScore > compScore) {
//userScoreDisplay.classList.remove("red", "black");
//userScoreDisplay.classList.add("green");
//compScoreDisplay.classList.remove("green", "black")
//compScoreDisplay.classList.add("red");
//} else if (compScore > userScore) {
//userScoreDisplay.classList.remove("green", "black");
//userScoreDisplay.classList.add("red");
//compScoreDisplay.classList.remove("red", "black")
//compScoreDisplay.classList.add("green");
//} else {
//userScoreDisplay.classList.remove("green", "red");
//userScoreDisplay.classList.add("black");
//compScoreDisplay.classList.remove("green", "red");
//compScoreDisplay.classList.add("black");
//}
//}

function getCompChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randNum = Math.floor(Math.random() * 3);
  return choices[randNum];
}

function win(userChoice, compChoice) {
  userScore++;
  userScoreDisplay.textContent = userScore;
  compScoreDisplay.textContent = compScore;
  result.textContent = `${userChoice} beats ${compChoice}. you win!`;
  //colorChange();
}

function lose(userChoice, compChoice) {
  compScore++;
  userScoreDisplay.textContent = userScore;
  compScoreDisplay.textContent = compScore;
  result.textContent = `${compChoice} beats ${userChoice}. you lose!`;
  //colorChange();
}

function draw(userChoice, compChoice) {
  userScoreDisplay.textContent = userScore;
  compScoreDisplay.textContent = compScore;
  result.textContent = `${userChoice} draws with ${compChoice}, try again!`;
}

function game(userChoice) {
  const compChoice = getCompChoice();
  switch (userChoice + compChoice) {
    case "rockscissors":
    case "paperrock":
    case "scissorspaper":
      win(userChoice, compChoice);

      break;

    case "rockpaper":
    case "paperscissors":
    case "scissorsrock":
      lose(userChoice, compChoice);

      break;

    case "rockrock":
    case "paperpaper":
    case "scissorsscissors":
      draw(userChoice, compChoice);

      break;
  }
  colorChange();
}

rock.addEventListener("click", function () {
  game("rock");
});

paper.addEventListener("click", function () {
  game("paper");
});

scissors.addEventListener("click", function () {
  game("scissors");
});

resetBtn.addEventListener("click", function () {
  userScore = 0;
  compScore = 0;
  userScoreDisplay.textContent = 0;
  compScoreDisplay.textContent = 0;
  result.textContent = "will you win?";
  userScoreDisplay.classList.remove("green", "red");
  compScoreDisplay.classList.remove("green", "red");
});
