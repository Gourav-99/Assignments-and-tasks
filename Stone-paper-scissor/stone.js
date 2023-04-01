class Stone {
  constructor() {
    this.compChoice();
    this.clickEvent();
    this.selectedOp;
    this.randomOption;
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
    const result = document.querySelector(".game-play .winner");
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
      message = `${compOp} ${
        compOp === "rock" ? "breaks" : compOp === "paper" ? "covers" : "cuts"
      } ${userOp}, Computer wins!`;
    } else {
      winner = "user";
      message = `${userOp} ${
        userOp === "rock" ? "breaks" : userOp === "paper" ? "covers" : "cuts"
      } ${compOp}, User wins!`;
    }

    result.textContent = message;
    this.updateScore(winner);
  };

  updateScore = (winner) => {
    const user = document.querySelector(".user-score");
    const comp = document.querySelector(".comp-score");
    let userScore = parseInt(user.getAttribute("score"));
    let compScore = parseInt(comp.getAttribute("score"));

    if (winner === "comp") {
      compScore++;
      comp.setAttribute("score", compScore);
      comp.textContent = compScore;
    } else if (winner === "user") {
      userScore++;
      user.setAttribute("score", userScore);
      user.textContent = userScore;
    }

    this.compChoice();
  };
  reset = () => {
    const result = document.querySelector(".game-play .winner");
    const user = document.querySelector(".user-score");
    const comp = document.querySelector(".comp-score");
    user.textContent = "0";
    user.setAttribute("score", "0");
    comp.textContent = "0";
    comp.setAttribute("score", "0");
    result.textContent = "Let's start playing";
  };
}

new Stone();
