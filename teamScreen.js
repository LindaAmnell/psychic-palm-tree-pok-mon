import { searchScreen } from "./startScreen.js";
import { teamList, reservList } from "./script.js";
const teamScreen = document.querySelector(".team-screen");
const teamButton = document.querySelector("#team-button");
const backbutton = document.querySelector("#back");
const pokemonTeamContainer = document.querySelector("#p-team");
const pokemonReserveContainer = document.querySelector("#r-team");

teamButton.addEventListener("click", () => {
  searchScreen.classList.remove("show");
  teamScreen.classList.add("show");
  console.log("click");
  pokemonTeamContainer.innerText = "";
  teamList.forEach((pokemon) => {
    const element = document.createElement("li");
    if (pokemon.bild) {
      const bild = document.createElement("img");
      bild.src = `${pokemon.bild}`;
      element.innerText = `${pokemon.name}`.toUpperCase();
      element.appendChild(bild);
      bild.classList.add("bild");
    }
    pokemonTeamContainer.appendChild(element);
  });
  pokemonReserveContainer.innerText = "";
  reservList.forEach((pokemon) => {
    const element = document.createElement("li");
    if (pokemon.bild) {
      const bild = document.createElement("img");
      bild.src = `${pokemon.bild}`;
      element.innerText = `${pokemon.name}`.toUpperCase();
      element.appendChild(bild);
      bild.classList.add("bild");
    }
    pokemonReserveContainer.appendChild(element);
  });
});
export { teamButton };

backbutton.addEventListener("click", () => {
  console.log("click");
  searchScreen.classList.add("show");
  teamScreen.classList.remove("show");
});
