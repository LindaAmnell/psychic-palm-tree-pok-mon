import { pokemonList, searchScreen, abilities } from "./startScreen.js";
import {
  teamList,
  reservList,
  searchInput,
  pokemonContainer,
  pokemonListaContainer,
} from "./script.js";
import {
  restartGame,
  movePokemonDown,
  movePokemonUp,
  deletePokemon,
  deletePokemonReserv,
  teamContainer,
} from "./funktioner.js";
import { createPokemonElement } from "./CreateElementFunktion.js";
const teamScreen = document.querySelector(".team-screen");
const teamButton = document.querySelector("#team-button");
const backbutton = document.querySelector("#back");
const pokemonTeamContainer = document.querySelector("#p-team");
const pokemonReserveContainer = document.querySelector("#r-team");
const exitButton = document.querySelector("#quit");
const exitButton2 = document.querySelector("#quit2");

// uppdaterar ordningen/infon på pokemonen i listorna när man raderat eller ändrat ordning
function render() {
  searchScreen.classList.remove("show");
  teamScreen.classList.add("show");
  pokemonTeamContainer.innerText = "";

  teamList.forEach((pokemon, index) => {
    const pokemonElement = createPokemonElement(pokemon);
    const button = pokemonElement.querySelector("button");
    const uppBotton = pokemonElement.querySelector(".move-btn-upp");
    const dowBotton = pokemonElement.querySelector(".move-btn-down");
    pokemonTeamContainer.appendChild(pokemonElement);
    button.addEventListener("click", () => {
      deletePokemon(pokemon, index);
      deletePokemonReserv(pokemon);
      render();
    });
    uppBotton.addEventListener("click", () => {
      movePokemonUp(pokemon, teamList);
      render();
    });
    dowBotton.addEventListener("click", () => {
      movePokemonDown(pokemon, teamList);
      render();
    });
  });

  pokemonReserveContainer.innerText = "";
  reservList.forEach((pokemon, index) => {
    const pokemonElement = createPokemonElement(pokemon);
    const button = pokemonElement.querySelector("button");
    const uppBotton = pokemonElement.querySelector(".move-btn-upp");
    const dowBotton = pokemonElement.querySelector(".move-btn-down");
    pokemonReserveContainer.appendChild(pokemonElement);
    button.addEventListener("click", () => {
      deletePokemonReserv(pokemon);
      pokemonReserveContainer.removeChild(pokemonElement);
    });
    uppBotton.addEventListener("click", () => {
      movePokemonUp(pokemon, reservList);
      render();
    });
    dowBotton.addEventListener("click", () => {
      movePokemonDown(pokemon, reservList);
      render();
    });
  });
}

teamButton.addEventListener("click", () => {
  render();
});
exitButton.addEventListener("click", restartGame);
exitButton2.addEventListener("click", restartGame);

backbutton.addEventListener("click", () => {
  searchScreen.classList.add("show");
  teamScreen.classList.remove("show");
  pokemonContainer.innerText = "";
  searchInput.value = "";
  teamContainer.classList.remove("show");
  pokemonListaContainer.classList.add("hide");
  pokemonListaContainer.classList.remove("show");
});
export {
  teamButton,
  pokemonTeamContainer,
  pokemonReserveContainer,
  teamScreen,
};
