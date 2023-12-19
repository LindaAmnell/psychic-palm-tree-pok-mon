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
    countReserv++;
    reservCount.innerText = countReserv;
    reservContainer.classList.add("show");
  }
}
// tar bort pokemon och ändrar så att första pokemonen från reserv dyker upp på teamlist
function deletePokemon(pokemon, index) {
  teamList.splice(index, 1);
  if (reservList.length === 0) {
    countTeam--;
    teamCount.innerText = countTeam;
    teamMateContainer.classList.remove("hide");
    countNeadTeam++;
    neadCountTeam.innerText = countNeadTeam;
  } else {
    reservList.push(pokemon);
    teamList.push(reservList[0]);
    countReserv++;
    reservCount.innerText = countReserv;
  }
}
function deletePokemonReserv(pokemon, index) {
  if (reservList.length <= 0) {
    reservContainer.classList.remove("show");
  } else {
    reservList.splice(index, 1);
    countReserv--;
    reservCount.innerText = countReserv;
  }
}
// gör så man kan ändra ordningen på pokemonen i teamlist och reservlist

function movePokemonUp(pokemon, list) {
  const index = list.indexOf(pokemon);
  if (index > 0) {
    const temp = list[index];
    list[index] = list[index - 1];
    list[index - 1] = temp;
  }
}
function movePokemonDown(pokemon, list) {
  const index = list.indexOf(pokemon);
  if (index < list.length - 1) {
    const temp = list[index];
    list[index] = list[index + 1];
    list[index + 1] = temp;
  }
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
  restartGame,
  addToTeamList,
  deletePokemon,
  deletePokemonReserv,
  movePokemonDown,
  movePokemonUp,
  teamContainer,
};
