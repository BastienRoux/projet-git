import Game from "./game.js";

const form = document.getElementById("form");
const message = document.getElementById("message");

const game = new Game();

form.addEventListener("submit", (event) => {
  event.preventDefault();
  game.attempts++;

  const number = parseInt(document.getElementById("number").value);
  if (game.found) {
    message.innerHTML = `Félicitations, vous avez trouvé le nombre en ${game.attempts}
     tentative(s)! <button id="play-again">Jouer à nouveau</button>`;
  } else {
    message.textContent = game.checkNumber(number);
  }
});

document.addEventListener("click", (event) => {
  if (event.target.id === "play-again") {
    game.resetGame();
    message.innerHTML = "";
    form.reset();
  }
});
