const result = document.querySelector(".game-play .winner");
const userScore = document.querySelector(".user-score");
const compScore = document.querySelector(".comp-score");
const userOp = document.querySelectorAll(".option");
const resetBtn = document.querySelector(".reset-btn");
let selectedOp;
let randomOption;
let scoreUser = 0,
  scoreComp = 0;

const getWinningVerb = (option) => {
  if (option === "rock") {
    return "breaks";
  } else if (option === "paper") {
    return "covers";
  } else {
    return "cuts";
  }
};

const compChoice = () => {
  const objComp = ["rock", "paper", "scissor"];
  randomOption = objComp[Math.floor(Math.random() * objComp.length)];
};
const updateScore = (winner) => {
  if (winner === "comp") {
    scoreComp++;
    compScore.setAttribute("score", scoreComp);
    compScore.textContent = scoreComp;
  } else if (winner === "user") {
    scoreUser++;
    userScore.setAttribute("score", scoreUser);
    userScore.textContent = scoreUser;
  }
};
const getWinner = (compOp, userOp) => {
  let winner, message;

  if (compOp === userOp) {
    winner = null;
    message = "it's a tie, No one wins";
  } else if (
    (compOp === "rock" && userOp === "scissor") ||
    (compOp === "paper" && userOp === "rock") ||
    (compOp === "scissor" && userOp === "paper")
  ) {
    winner = "comp";
    message = `${compOp} ${getWinningVerb(compOp)} ${userOp}, Computer wins!`;
  } else {
    winner = "user";
    message = `${userOp} ${getWinningVerb(userOp)} ${compOp}, User wins!`;
  }

  result.textContent = message;
  updateScore(winner);
};
userOp.forEach((item) => {
  item.addEventListener("click", () => {
    selectedOp = item.getAttribute("value");
    console.log(selectedOp);
    compChoice();
    getWinner(randomOption, selectedOp);
  });
});
const reset = () => {
  userScore.textContent = 0;
  compScore.textContent = 0;
  result.textContent = "";
};
resetBtn.addEventListener("click", () => reset());
