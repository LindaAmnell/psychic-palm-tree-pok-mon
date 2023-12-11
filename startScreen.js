const startbtn = document.querySelector("#start-button");
const startScreen = document.querySelector(".start-screen");
const searchScreen = document.querySelector(".search-screen");
let pokemonList = [];

async function getPokemon() {
  const url = `https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
}
async function createPokemonObject(pokemon, data2) {
  if (data2.sprites.front_default) {
    return {
      name: pokemon.name.toLowerCase(),
      url: pokemon.url,
      bild: data2.sprites.front_default,
    };
  }
  return null;
}
startbtn.addEventListener("click", async () => {
  startScreen.classList.add("hide");
  searchScreen.classList.add("show");
  try {
    const data = await getPokemon();

    if (data.results && data.results.length > 0) {
      pokemonList = await Promise.all(
        data.results.map(async (pokemon) => {
          try {
            const url2 = pokemon.url;
            const response2 = await fetch(url2);
            const data2 = await response2.json();
            return createPokemonObject(pokemon, data2);
          } catch (error) {
            console.log("Något gick fel igen", error);
            return null;
          }
        })
      );
    }
  } catch (error) {
    console.log("Något gick fel", error);
  }
});

export { startbtn, pokemonList, createPokemonObject };
