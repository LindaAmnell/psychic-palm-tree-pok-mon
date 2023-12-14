import { pokemonList, searchScreen } from "./startScreen.js";
import {
  teamList,
  reservList,
  deletePokemonReserv,
  addToTeamList,
  deletePokemon,
  reservContainer,
} from "./script.js";
const teamScreen = document.querySelector(".team-screen");
const teamButton = document.querySelector("#team-button");
const backbutton = document.querySelector("#back");
const pokemonTeamContainer = document.querySelector("#p-team");
const pokemonReserveContainer = document.querySelector("#r-team");
function render() {
  searchScreen.classList.remove("show");
  teamScreen.classList.add("show");
  pokemonTeamContainer.innerText = "";

  teamList.forEach((pokemon, index) => {
    const pokemonElement = createPokemonElement(pokemon);
    const button = pokemonElement.querySelector("button");
    pokemonTeamContainer.appendChild(pokemonElement);
    button.addEventListener("click", () => {
      deletePokemon(pokemon, index);
      deletePokemonReserv(pokemon);
      render();
    });
  });

  pokemonReserveContainer.innerText = "";
  reservList.forEach((pokemon, index) => {
    const pokemonElement = createPokemonElement(pokemon);
    const button = pokemonElement.querySelector("button");
    pokemonReserveContainer.appendChild(pokemonElement);
    button.addEventListener("click", () => {
      deletePokemonReserv(pokemon);
      pokemonReserveContainer.removeChild(pokemonElement);
    });
  });
}

teamButton.addEventListener("click", () => {
  render();
});
export { teamButton, pokemonTeamContainer, pokemonReserveContainer };

backbutton.addEventListener("click", () => {
  searchScreen.classList.add("show");
  teamScreen.classList.remove("show");
});

function createPokemonElement(pokemon) {
  const element = document.createElement("li");
  const button = document.createElement("button");
  element.classList.add("element");
  button.classList.add("kick-button");
  const bild = document.createElement("img");
  bild.src = `${pokemon.bild}`;
  element.innerText = `${pokemon.name}`.toUpperCase();
  button.innerText = "kicka";
  element.appendChild(bild);
  element.appendChild(button);
  bild.classList.add("bild");
  return element;
}
