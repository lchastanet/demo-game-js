const cards = [
  { id: 1, color: "blue" },
  { id: 2, color: "red" },
  { id: 3, color: "yellow" },
  { id: 4, color: "green" },
];

let iterator = 0;

function createCard(iterator) {
  const div = document.createElement("div");

  div.classList.add("bloc");
  div.style.backgroundColor = cards[iterator].color;

  div.addEventListener("click", (event) => {
    iterator = iterator + 1;
    if (iterator > cards.length - 1) iterator = 0;
    event.target.remove();
    createCard(iterator);
  });

  document.querySelector("body").append(div);
}

createCard(iterator);
