import { startbtn, pokemonList } from "./startScreen.js";
import { teamButton } from "./teamScreen.js";

const searchInput = document.querySelector("#search-pokémon");
const pokemonContainer = document.querySelector("#pokèmon-list");
const pokemonListaContainer = document.querySelector("#pokèmon ");
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

    if (pokemon.bild) {
      const bild = document.createElement("img");
      bild.src = `${pokemon.bild}`;
      element.innerText = `${pokemon.name}`.toUpperCase();
      element.appendChild(bild);
      bild.classList.add("bild");
    } else {
      const bild2 = document.createElement("img");
      bild2.src = "./bilder/anonymbild.jpg";
      element.innerText = `${pokemon.name}`.toUpperCase();
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
      label.innerText = "Smecknamn";
      inputNickName.value = `${pokemon.name}`;
      nickName.appendChild(label);
      nickName.appendChild(inputNickName);
      nickName.appendChild(button);
      pokemonContainer.append(nickName);
      nickName.classList.add("nick-name");

      button.addEventListener("click", () => {
        addToTeamList({ name: inputNickName.value, bild: pokemon.bild });
        nickName.classList.remove("nick-name");
        nickName.classList.add("nick-name-hide");
      });
    });
  });
});
function addToTeamList(pokemon) {
  if (teamList.length < 3) {
    teamList.push(pokemon);
    console.log(teamList);
  } else {
    reservList.push(pokemon);
    console.log(reservList);
  }
}

export { pokemonContainer, pokemonListaContainer, teamList, reservList };
