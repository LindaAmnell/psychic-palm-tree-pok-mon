import { startbtn, pokemonList } from "./startScreen.js";
import {
  teamButton,
  pokemonTeamContainer,
  pokemonReserveContainer,
} from "./teamScreen.js";
const searchInput = document.querySelector("#search-pokémon");
const pokemonContainer = document.querySelector("#pokèmon-list");
const pokemonListaContainer = document.querySelector("#pokèmon ");
const teamCount = document.querySelector("#team-count");
const reservCount = document.querySelector("#reserve-team-count");
const neadCountTeam = document.querySelector("#team-mates-count");
const teamMateContainer = document.querySelector(".team-mates");
const teamContainer = document.querySelector(".pokemon-team");
const reservContainer = document.querySelector(".reserve-team");
let countTeam = 0;
let countReserv = 0;
let countNeadTeam = 3;
let teamList = [];
let reservList = [];
searchInput.addEventListener("keyup", async () => {
  pokemonListaContainer.classList.add("show");
  let search = searchInput.value.toLowerCase();
  let searchInfo = pokemonList.filter((pokemon) =>
    pokemon.name.includes(search)
  );
  console.log(searchInfo);
  pokemonContainer.innerText = "";
  searchInfo.forEach((pokemon, index) => {
    const element = document.createElement("li");
    const button = document.createElement("button");
    element.classList.add("element");
    element.innerText = pokemon.name.toUpperCase();

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

    element.appendChild(button);
    button.innerText = "välj mig";
    button.classList.add("chose-button");
    pokemonContainer.appendChild(element);

    button.addEventListener("click", () => {
      const nickName = document.createElement("p");
      const inputNickName = document.createElement("input");
      const button = document.createElement("button");
      const label = document.createElement("label");
      button.innerText = "spara";
      label.innerText = "Smeknamn";
      inputNickName.value = `${pokemon.name}`;
      nickName.appendChild(label);
      nickName.appendChild(inputNickName);
      nickName.appendChild(button);
      pokemonListaContainer.append(nickName);
      nickName.classList.add("nick-name");
      //   const someIndex = index;
      button.addEventListener("click", () => {
        addToTeamList({ name: inputNickName.value, bild: pokemon.bild }, index);
        nickName.classList.remove("nick-name");
        nickName.classList.add("nick-name-hide");
      });
    });
  });
});
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
    reservCount.innerText = countReserv;
    teamMateContainer.classList.remove("hide");
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
export {
  pokemonContainer,
  pokemonListaContainer,
  teamList,
  reservList,
  countTeam,
  deletePokemonReserv,
  addToTeamList,
  deletePokemon,
  reservContainer,
};
