import { pokemonList, searchScreen, abilities } from "./startScreen.js";
import {
  teamList,
  reservList,
  deletePokemonReserv,
  addToTeamList,
  deletePokemon,
  reservContainer,
  movePokemonUp,
  movePokemonDown,
  movePokemonDownReserv,
  movePokemonUpReserv,
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
export { teamButton, pokemonTeamContainer, pokemonReserveContainer };

backbutton.addEventListener("click", () => {
  searchScreen.classList.add("show");
  teamScreen.classList.remove("show");
});

function createPokemonElement(pokemon) {
  const element = document.createElement("li");
  const button = document.createElement("button");
  const pelement = document.createElement("p");
  const divContainer = document.createElement("div");
  const moveButtonUpp = document.createElement("button");
  const moveButtonDown = document.createElement("button");
  element.classList.add("element");
  button.classList.add("kick-button");
  moveButtonDown.classList.add("move-btn-down");
  moveButtonUpp.classList.add("move-btn-upp");
  moveButtonUpp.innerText = "Flytta upp";
  moveButtonDown.innerText = "Flytta ner";
  divContainer.classList.add("container-div");
  const bild = document.createElement("img");
  bild.src = `${pokemon.bild}`;
  element.innerText = `${pokemon.name}`.toUpperCase();
  button.innerText = "kicka";
  pelement.innerText = "Abilitys:";
  pelement.classList.add("ability");
  if (pokemon.abilities && pokemon.abilities.length > 0) {
    pokemon.abilities.forEach((ability) => {
      const abilityName = ability.name;
      const abilityParagraph = document.createElement("p");
      abilityParagraph.innerText = `${abilityName}`;
      abilityParagraph.classList.add("ability-name");
      pelement.appendChild(abilityParagraph);
    });
  }

  element.appendChild(bild);
  element.appendChild(pelement);
  element.appendChild(button);
  element.appendChild(divContainer);
  divContainer.appendChild(moveButtonDown);
  divContainer.appendChild(moveButtonUpp);

  bild.classList.add("bild");
  return element;
}
