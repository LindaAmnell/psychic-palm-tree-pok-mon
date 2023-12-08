import { getPokemon } from "./URL.js";
import { startbtn } from "./startScreen.js";
const searchInput = document.querySelector("#search-pokémon");
// const searchBtn = document.querySelector("#search-button");
const pokemonContainer = document.querySelector("#pokèmon-list");
let pokemonList = [];

searchInput.addEventListener("keyup", async () => {
  try {
    const data = await getPokemon();
    if (data.results && data.results.length > 0) {
      pokemonList = data.results.map(({ name, url }) => ({
        name: name.toLowerCase(),
        url,
      }));
    }
  } catch (error) {
    console.log("Något gick fel", error);
  }
  let search = searchInput.value.toLowerCase();
  let searchInfo = pokemonList.filter((pokemon) =>
    pokemon.name.includes(search)
  );
  console.log(searchInfo);
  pokemonContainer.innerText = "";
  searchInfo.forEach((pokemon) => {
    const element = document.createElement("li");
    const button = document.createElement("button");
    element.innerText = `${pokemon.name}`;
    pokemonContainer.appendChild(element);
    element.appendChild(button);
    button.innerText = "välj mig";
  });
});
