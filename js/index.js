const handOptions = {
    "rock": "/assets/Rock.png",
    "paper": "/assets/Paper.png",
    "scissors": "/assets/Scissors.png"
  }

  let SCORE = 0;

  const pickUserHand = (hand) => {
      let hands = document.querySelector(".hands");
      hands.style.display = "none";

      let contest = document.querySelector(".contest");
      contest.style.display = "flex";

      document.getElementById("userPickImage").src = handOptions[hand];

      pickComputerHand(hand);
  };

  const pickComputerHand = (hand) => {
      let hands = ["rock", "paper", "scissors"]
      let compHand = hands[Math.floor(Math.random() * hands.length)];

      document.getElementById("computerPickImage").src = handOptions[compHand]

      ReferenceError(hand, compHand);
  }

  const referee = (userHand, compHand) => {
      if (userHand == "paper" && compHand == "scissors") {
      setDecision("YOU LOSE!");
      }
      if (userHand == "paper" && compHand == "rock") {
        setDecision("YOU WIN!");
        setScore(SCORE + 1);
      }
      if (userHand == "paper" && compHand == "paper") {
        setDecision("It's a tie!");
      }
      if (userHand == "rock" && compHand == "scissors") {
        setDecision("YOU WIN!");
        setScore(SCORE + 1);
      }
      if (userHand == "rock" && compHand == "paper") {
        setDecision("YOU LOSE!");
      }
      if (userHand == "rock" && compHand == "rock") {
        setDecision("It's a tie!");
      }
      if (userHand == "scissors" && compHand == "scissors") {
        setDecision("It's a tie!");
      }
      if (userHand == "scissors" && compHand == "rock") {
        setDecision("YOU LOSE!");
      }
      if (userHand == "scissors" && compHand == "paper") {
        setDecision("YOU WIN!");
        setScore(SCORE + 1);
      }
  };

  const restartGame = () => {
      let contest = document.querySelector(".contest");
      contest.style.display = "none";

      let hands = document.querySelector(".hands");
      hands.style.display = "flex";
  }

  const setDecision = (decision) => {
      document.querySelector(".decision h1").innerText = decision
  }

  const setScore= (newScore) => {
      SCORE = newScore;
      document.querySelector(".score h1").innerText = newScore;
  }
  