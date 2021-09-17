document.addEventListener("DOMContentLoaded", () => {
  // Card options
  const cardArray = [
    {
      name: "luffy",
      img: "images/luffy.png",
    },
    {
      name: "zoro",
      img: "images/zoro.png",
    },
    {
      name: "saitama",
      img: "images/saitama.png",
    },
    {
      name: "itachi",
      img: "images/itachi.png",
    },
    {
      name: "mikasa",
      img: "images/mikasa.png",
    },
    {
      name: "edward",
      img: "images/edward.png",
    },
    {
      name: "luffy",
      img: "images/luffy.png",
    },
    {
      name: "zoro",
      img: "images/zoro.png",
    },
    {
      name: "saitama",
      img: "images/saitama.png",
    },
    {
      name: "itachi",
      img: "images/itachi.png",
    },
    {
      name: "mikasa",
      img: "images/mikasa.png",
    },
    {
      name: "edward",
      img: "images/edward.png",
    },
  ];

  cardArray.sort(() => 0.5 - Math.random());

  const grid = document.querySelector(".grid");
  const resultDisplay = document.querySelector("#result");
  const comment = document.querySelectorAll(".comment");
  let cardsChosen = [];
  let cardsChosenId = [];
  let cardsWon = [];

  // Create Board
  function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      const card = document.createElement("img");
      card.setAttribute("src", "images/blank.png");
      card.setAttribute("data-id", i);
      card.addEventListener("click", flipcard);
      grid.appendChild(card);
    }
  }

  // Check for match
  function checkForMatch() {
    const cards = document.querySelectorAll("img");
    const optionOneId = cardsChosenId[0];
    const optionTwoId = cardsChosenId[1];

    if (optionOneId === optionTwoId) {
      cards[optionOneId].setAttribute("src", "images/blank.png");
      cards[optionTwoId].setAttribute("src", "images/blank.png");
      alert("You have clicked the same image!");
    } else if (cardsChosen[0] === cardsChosen[1]) {
      alert("You found a match");
      cards[optionOneId].setAttribute("src", "images/white.png");
      cards[optionTwoId].setAttribute("src", "images/white.png");
      cards[optionOneId].removeEventListener("click", flipcard);
      cards[optionTwoId].removeEventListener("click", flipcard);
      cardsWon.push(cardsChosen);
    } else {
      cards[optionOneId].setAttribute("src", "images/blank.png");
      cards[optionTwoId].setAttribute("src", "images/blank.png");
      alert("Sorry, try again");
    }

    cardsChosen = [];
    cardsChosenId = [];
    resultDisplay.textContent = cardsWon.length;
    if (cardsWon.length === cardArray.length / 2) {
      resultDisplay.textContent = "Congratulation! You found them all!";
    }
  }

  // flip cards
  function flipcard() {
    let cardId = this.getAttribute("data-id");
    cardsChosen.push(cardArray[cardId].name);
    cardsChosenId.push(cardId);
    this.setAttribute("src", cardArray[cardId].img);

    if (cardsChosen.length === 2) {
      setTimeout(checkForMatch, 500);
    }
  }

  createBoard();
});
