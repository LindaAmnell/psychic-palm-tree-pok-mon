import { fetchPokemonData } from "./URL.js";
import {
  startbtn,
  pokemonList,
  abilities,
  searchScreen,
} from "./startScreen.js";
import {
  teamButton,
  pokemonTeamContainer,
  pokemonReserveContainer,
} from "./teamScreen.js";
import { addToTeamList } from "./funktioner.js";
const searchInput = document.querySelector("#search-pokémon");
const pokemonContainer = document.querySelector("#pokèmon-list");
const pokemonListaContainer = document.querySelector("#pokèmon ");
const neadCountTeam = document.querySelector("#team-mates-count");
const reservContainer = document.querySelector(".reserve-team");
let teamList = [];
let reservList = [];

// sök funktionen
searchInput.addEventListener("keyup", async () => {
  pokemonListaContainer.classList.add("show");
  let search = searchInput.value.toLowerCase();
  let searchInfo = pokemonList.filter((pokemon) =>
    pokemon.name.includes(search)
  );

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
    // funktion där man kan ge ett smeknam, samt lägger till i ett team
    button.addEventListener("click", () => {
      const nickName = document.createElement("p");
      const inputNickName = document.createElement("input");
      const button = document.createElement("button");
      const label = document.createElement("label");
      button.innerText = "spara";
      label.innerText = "Smeknamn";
      inputNickName.type = "text";
      inputNickName.value = `${pokemon.name}`;
      inputNickName.id = "nicknameInput";
      label.setAttribute("for", "nicknameInput");
      nickName.appendChild(label);
      nickName.appendChild(inputNickName);
      nickName.appendChild(button);
      searchScreen.append(nickName);
      nickName.classList.add("nick-name");
      button.addEventListener("click", () => {
        addToTeamList(
          {
            name: inputNickName.value,
            bild: pokemon.bild,
            abilities: pokemon.abilities,
          },
          index
        );
        nickName.remove();
      });
      inputNickName.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
          button.click();
        }
      });
    });
  });
});
export {
  pokemonContainer,
  pokemonListaContainer,
  teamList,
  reservList,
  reservContainer,
  neadCountTeam,
  searchInput,
};
