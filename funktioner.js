import {
  teamList,
  reservList,
  neadCountTeam,
  reservContainer,
  pokemonListaContainer,
  pokemonContainer,
  searchInput,
} from "./script.js";
import { startScreen, searchScreen } from "./startScreen.js";
import {
  pokemonTeamContainer,
  pokemonReserveContainer,
  teamScreen,
} from "./teamScreen.js";
const teamMateContainer = document.querySelector(".team-mates");
const teamContainer = document.querySelector(".pokemon-team");
const teamCount = document.querySelector("#team-count");
const reservCount = document.querySelector("#reserve-team-count");
let countTeam = 0;
let countReserv = 0;
let countNeadTeam = 3;
// lägger pokemonen i listor
function addToTeamList(pokemon, index) {
  if (teamList.length < 3) {
    teamList.push(pokemon);
    countTeam++;
    countNeadTeam--;
    teamCount.innerText = countTeam;
    neadCountTeam.innerText = countNeadTeam;
    teamContainer.classList.add("show");
    if (teamList.length == 3) {
      teamMateContainer.classList.add("hide");
    }
  } else {
    reservList.push(pokemon);
    console.log(reservList);
    countReserv++;
    reservCount.innerText = countReserv;
    reservContainer.classList.add("show");
  }
}
// tar bort pokemon och ändrar så att första pokemonen från reserv dyker upp på teamlist
function deletePokemon(pokemon, index) {
  if (reservList.length === 0) {
    countTeam--;
    teamList.splice(index, 1);
    teamCount.innerText = countTeam;
    teamMateContainer.classList.remove("hide");
    countNeadTeam++;
    neadCountTeam.innerText = countNeadTeam;
    console.log("kllliiick 1");
  } else {
    reservList.push(pokemon);
    teamList.splice(index, 1);
    teamList.push(reservList[0]);
    countReserv++;
    reservCount.innerText = countReserv;

    console.log("kllliiick 2");
    console.log(teamList);
    console.log(reservList);
  }
}
function deletePokemonReserv(pokemon, index) {
  if (reservList.length <= 0) {
    reservContainer.classList.remove("show");
    console.log("click1");
  } else {
    reservList.splice(index, 1);
    console.log("click 3");
    countReserv--;
    reservCount.innerText = countReserv;
  }
}

// gör så man kan ändra ordningen på pokemonen i teamlist och reservlist

function movePokemonUp(pokemon) {
  const index = teamList.indexOf(pokemon);
  if (index > 0) {
    const temp = teamList[index];
    teamList[index] = teamList[index - 1];
    teamList[index - 1] = temp;
  }
}
function movePokemonDown(pokemon) {
  const index = teamList.indexOf(pokemon);
  if (index < teamList.length - 1) {
    const temp = teamList[index];
    teamList[index] = teamList[index + 1];
    teamList[index + 1] = temp;
  }
}
function movePokemonUpReserv(pokemon) {
  const index = reservList.indexOf(pokemon);
  if (index > 0) {
    const temp = reservList[index];
    reservList[index] = reservList[index - 1];
    reservList[index - 1] = temp;
  }
}
function movePokemonDownReserv(pokemon) {
  const index = reservList.indexOf(pokemon);
  if (index < reservList.length - 1) {
    const temp = reservList[index];
    reservList[index] = reservList[index + 1];
    reservList[index + 1] = temp;
  }
}
// skapar containers till alla pokemon i teamlist och reservlist
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
  element.innerText = `${pokemon.name}`.toUpperCase();
  button.innerText = "kicka";
  pelement.innerText = "Abilitys:";
  pelement.classList.add("ability");
  if (pokemon.bild) {
    const bild = document.createElement("img");
    bild.src = `${pokemon.bild}`;
    element.appendChild(bild);
    bild.classList.add("bild");
  } else {
    const bild2 = document.createElement("img");
    bild2.src = "./bilder/anonymbild.jpg";
    element.appendChild(bild2);
    bild2.classList.add("bild2");
  }
  if (pokemon.abilities && pokemon.abilities.length > 0) {
    pokemon.abilities.forEach((ability) => {
      const abilityName = ability.name;
      const abilityParagraph = document.createElement("p");
      abilityParagraph.innerText = `${abilityName}`;
      abilityParagraph.classList.add("ability-name");
      pelement.appendChild(abilityParagraph);
    });
  }
  element.appendChild(pelement);
  element.appendChild(button);
  element.appendChild(divContainer);
  divContainer.appendChild(moveButtonDown);
  divContainer.appendChild(moveButtonUpp);
  return element;
}

function restartGame() {
  startScreen.classList.remove("hide");
  pokemonListaContainer.classList.add("hide");
  pokemonListaContainer.classList.remove("show");
  teamScreen.classList.remove("show");
  searchScreen.classList.remove("show");
  pokemonTeamContainer.innerText = "";
  pokemonReserveContainer.innerText = "";
  countTeam = 0;
  countReserv = 0;
  countNeadTeam = 3;
  teamMateContainer.classList.remove("hide");
  teamList.splice(0, teamList.length);
  reservList.splice(0, reservList.length);
  reservCount.innerText = countReserv;
  teamCount.innerText = countTeam;
  neadCountTeam.innerText = countNeadTeam;
  teamContainer.classList.remove("show");
  reservContainer.classList.remove("show");
  pokemonContainer.innerText = "";
  searchInput.value = "";
}

export {
  movePokemonDown,
  movePokemonDownReserv,
  movePokemonUp,
  movePokemonUpReserv,
  deletePokemon,
  deletePokemonReserv,
  addToTeamList,
  createPokemonElement,
  restartGame,
};
