import { getPokemon, fetchPokemonData } from "./URL.js";
import { pokemonListaContainer } from "./script.js";
const startbtn = document.querySelector("#start-button");
const startScreen = document.querySelector(".start-screen");
const searchScreen = document.querySelector(".search-screen");

let pokemonList = [];
startbtn.addEventListener("click", async () => {
  startScreen.classList.add("hide");
  searchScreen.classList.add("show");
  pokemonListaContainer.classList.add("hide");
  try {
    const data = await getPokemon();
    if (data.results && data.results.length > 0) {
      pokemonList = await Promise.all(
        data.results.map(async (pokemon) => {
          const response = await fetch(pokemon.url);
          const pokemonData = await response.json();
          if (!pokemonData.sprites.front_default) {
            return {
              name: pokemon.name.toLowerCase(),
              url: pokemon.url,
            };
          }

          return {
            name: pokemon.name.toLowerCase(),
            url: pokemon.url,
            bild: pokemonData.sprites.front_default,
          };
        })
      );
    }
    await fetchPokemonData(pokemonList);
  } catch (error) {
    console.log("Något gick fel", error);
  }
});
export { startbtn, pokemonList, searchScreen };
