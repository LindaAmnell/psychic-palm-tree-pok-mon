import { pokemonList, searchScreen } from "./startScreen.js";
import {
  teamList,
  reservList,
  deletePokemon,
  deletePokemonReserv,
} from "./script.js";
const teamScreen = document.querySelector(".team-screen");
const teamButton = document.querySelector("#team-button");
const backbutton = document.querySelector("#back");
const pokemonTeamContainer = document.querySelector("#p-team");
const pokemonReserveContainer = document.querySelector("#r-team");

teamButton.addEventListener("click", () => {
  searchScreen.classList.remove("show");
  teamScreen.classList.add("show");
  pokemonTeamContainer.innerText = "";
  teamList.forEach((pokemon) => {
    const element = document.createElement("li");
    const button = document.createElement("button");
    button.classList.add("kick-button");
    element.classList.add("element");
    if (pokemon.bild) {
      const bild = document.createElement("img");
      bild.src = `${pokemon.bild}`;
      element.innerText = `${pokemon.name}`.toUpperCase();
      button.innerText = "kicka";
      element.appendChild(bild);
      element.appendChild(button);
      bild.classList.add("bild");
    }
    pokemonTeamContainer.appendChild(element);
    button.addEventListener("click", (event) => {
      reservList.push(teamList[0]);
      deletePokemon(event);
      teamList.push(reservList[0]);
      console.log(teamList);
      console.log(reservList);
      deletePokemonReserv(event);
      pokemonTeamContainer.removeChild(element);
    });
  });
  pokemonReserveContainer.innerText = "";
  reservList.forEach((pokemon) => {
    const element = document.createElement("li");
    const button = document.createElement("button");
    element.classList.add("element");
    button.classList.add("kick-button");
    if (pokemon.bild) {
      const bild = document.createElement("img");
      bild.src = `${pokemon.bild}`;
      element.innerText = `${pokemon.name}`.toUpperCase();
      button.innerText = "kicka";
      element.appendChild(bild);
      element.appendChild(button);
      bild.classList.add("bild");
    }
    pokemonReserveContainer.appendChild(element);
    button.addEventListener("click", (event) => {
      console.log("click");
      deletePokemonReserv(event);
      pokemonReserveContainer.removeChild(element);
    });
  });
});
export { teamButton, pokemonTeamContainer };

backbutton.addEventListener("click", () => {
  searchScreen.classList.add("show");
  teamScreen.classList.remove("show");
});
