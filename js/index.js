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
    if (userHand == "paper" && cpHand == "scissors") {
        setDecision("YOU LOSE!");
      }
      if (userHand == "paper" && cpHand == "rock") {
        setDecision("YOU WIN!");
        setScore(SCORE + 1);
      }
      if (userHand == "paper" && cpHand == "paper") {
        setDecision("It's a tie!");
      }
      if (userHand == "rock" && cpHand == "scissors") {
        setDecision("YOU WIN!");
        setScore(SCORE + 1);
      }
      if (userHand == "rock" && cpHand == "paper") {
        setDecision("YOU LOSE!");
      }
      if (userHand == "rock" && cpHand == "rock") {
        setDecision("It's a tie!");
      }
      if (userHand == "scissors" && cpHand == "scissors") {
        setDecision("It's a tie!");
      }
      if (userHand == "scissors" && cpHand == "rock") {
        setDecision("YOU LOSE!");
      }
      if (userHand == "scissors" && cpHand == "paper") {
        setDecision("YOU WIN!");
        setScore(SCORE + 1);
      }
  };

  