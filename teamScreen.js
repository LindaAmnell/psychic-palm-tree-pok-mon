import { pokemonList, searchScreen, abilities } from "./startScreen.js";
import {
  teamList,
  reservList,
  searchInput,
  pokemonContainer,
  pokemonListaContainer,
} from "./script.js";
import {
  deletePokemon,
  deletePokemonReserv,
  movePokemonDown,
  movePokemonDownReserv,
  movePokemonUp,
  movePokemonUpReserv,
  createPokemonElement,
  restartGame,
} from "./funktioner.js";
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
      console.log("click");
      console.log(teamList);
      movePokemonUp(pokemon);
      render();
    });
    dowBotton.addEventListener("click", () => {
      console.log("click1");
      movePokemonDown(pokemon);
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
      console.log("click");
      console.log(reservList);
      movePokemonUpReserv(pokemon);
      render();
    });
    dowBotton.addEventListener("click", () => {
      console.log("click1");
      movePokemonDownReserv(pokemon);
      render();
    });
  });
}

teamButton.addEventListener("click", () => {
  render();
});
exitButton.addEventListener("click", () => {
  console.log("click");
  restartGame();
});
exitButton2.addEventListener("click", () => {
  console.log("click1");
  restartGame();
});
backbutton.addEventListener("click", () => {
  searchScreen.classList.add("show");
  teamScreen.classList.remove("show");
  pokemonContainer.innerText = "";
  searchInput.value = "";
  pokemonListaContainer.classList.add("hide");
  pokemonListaContainer.classList.remove("show");
});
export {
  teamButton,
  pokemonTeamContainer,
  pokemonReserveContainer,
  teamScreen,
};
