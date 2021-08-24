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

  