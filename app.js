import shuffleArray from "./utils.js";

function createHTMLCard(card) {
  const div = document.createElement("div");

  div.classList.add("bloc");
  div.dataset.win = card.win;

  div.addEventListener("click", (event) => {
    if (event.target.dataset.win === "true" ? true : false) {
      alert("You won !");
    } else {
      alert("Try again !");
    }
    document.querySelector(".container").innerHTML = "";
    game();
  });

  document.querySelector(".container").append(div);
}

function game() {
  const cards = [
    { id: 1, win: false },
    { id: 2, win: true },
    { id: 3, win: false },
  ];

  shuffleArray(cards);

  cards.forEach((card) => createHTMLCard(card));
}

game();
