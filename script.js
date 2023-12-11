import { startbtn, pokemonList, createPokemonObject } from "./startScreen.js";
const searchInput = document.querySelector("#search-pokémon");
const pokemonContainer = document.querySelector("#pokèmon-list");

searchInput.addEventListener("keyup", () => {
  let search = searchInput.value.toLowerCase();
  let searchInfo = pokemonList.filter(
    (pokemon) => pokemon && pokemon.name.includes(search)
  );
  console.log(searchInfo);
  pokemonContainer.innerText = "";

  searchInfo.forEach((pokemon) => {
    if (pokemon) {
      const element = document.createElement("li");
      const button = document.createElement("button");
      const bild = document.createElement("img");
      bild.src = `${pokemon.bild}`;
      element.innerText = `${pokemon.name}`;
      pokemonContainer.appendChild(element);
      element.appendChild(button);
      element.appendChild(bild);
      button.innerText = "välj mig";
    }
  });
});
