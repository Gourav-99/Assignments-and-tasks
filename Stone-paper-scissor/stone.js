class Stone {
  constructor() {
    this.compChoice();
    this.clickEvent();
    this.selectedOp;
    this.randomOption;
    this.result = document.querySelector(".game-play .winner");
    this.userScore = document.querySelector(".user-score");
    this.compScore = document.querySelector(".comp-score");
  }

  compChoice = () => {
    const objComp = ["rock", "paper", "scissor"];
    this.randomOption = objComp[Math.floor(Math.random() * objComp.length)];
  };

  clickEvent = () => {
    const userOp = document.querySelectorAll(".option");
    userOp.forEach((item) => {
      item.addEventListener("click", () => {
        this.selectedOp = item.getAttribute("value");
        this.getWinner(this.randomOption, this.selectedOp);
      });
    });
    let resetBtn = document.querySelector(".reset-btn");
    resetBtn.addEventListener("click", () => {
      this.reset();
    });
  };

  getWinner = (compOp, userOp) => {
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
      message = `${compOp} ${this.getWinningVerb(
        compOp
      )} ${userOp}, Computer wins!`;
    } else {
      winner = "user";
      message = `${userOp} ${this.getWinningVerb(
        userOp
      )} ${compOp}, User wins!`;
    }

    this.result.textContent = message;
    this.updateScore(winner);
  };

  getWinningVerb = (option) => {
    if (option === "rock") {
      return "breaks";
    } else if (option === "paper") {
      return "covers";
    } else {
      return "cuts";
    }
  };

  updateScore = (winner) => {
    let userScore = parseInt(this.userScore.getAttribute("score"));
    let compScore = parseInt(this.compScore.getAttribute("score"));

    if (winner === "comp") {
      compScore++;
      this.compScore.setAttribute("score", compScore);
      this.compScore.textContent = compScore;
    } else if (winner === "user") {
      userScore++;
      this.userScore.setAttribute("score", userScore);
      this.userScore.textContent = userScore;
    }

    this.compChoice();
  };

  reset = () => {
    this.userScore.textContent = 0;
    this.compScore.textContent = 0;
    this.userScore.setAttribute("score", 0);
    this.compScore.setAttribute("score", 0);
    this.result.textContent = "";
  };
}
new Stone();
