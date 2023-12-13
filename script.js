import { startbtn, pokemonList } from "./startScreen.js";
import { teamButton, pokemonTeamContainer } from "./teamScreen.js";
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
  searchInfo.forEach((pokemon) => {
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
      pokemonContainer.append(nickName);
      nickName.classList.add("nick-name");
      const someIndex = button.addEventListener("click", () => {
        addToTeamList(
          { name: inputNickName.value, bild: pokemon.bild },
          someIndex
        );
        nickName.classList.remove("nick-name");
        nickName.classList.add("nick-name-hide");
      });
    });
  });
});
function addToTeamList(pokemon, index) {
  if (teamList.length < 3) {
    teamList.push(pokemon);
    console.log(teamList);
    countTeam++;
    countNeadTeam--;
    teamCount.innerText = countTeam;
    neadCountTeam.innerHTML = countNeadTeam;
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
function deletePokemon(event) {
  const index = event.currentTarget.dataset.index;
  teamList.splice(index, 1);
  //   console.log(teamList);
  //   countTeam--;
  //   countNeadTeam++;
  countReserv++;
  //   teamCount.innerText = countTeam;
  //   neadCountTeam.innerHTML = countNeadTeam;
  reservCount.innerText = countReserv;
  teamMateContainer.classList.remove("hide");
}
function deletePokemonReserv(event) {
  const index = event.currentTarget.dataset.index;
  reservList.splice(index, 1);
  //   console.log(teamList);
  countReserv--;
  reservCount.innerText = countReserv;
}
export {
  pokemonContainer,
  pokemonListaContainer,
  teamList,
  reservList,
  countTeam,
  deletePokemon,
  deletePokemonReserv,
};
