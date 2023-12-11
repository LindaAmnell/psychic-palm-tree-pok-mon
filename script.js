const searchInput = document.querySelector("#search-pokémon");
const pokemonContainer = document.querySelector("#pokèmon-list");
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
async function fetchPokemonData(pokemonList) {
  for (const pokemon of pokemonList) {
    try {
      const response = await fetch(pokemon.url);
      const pokemonData = await response.json();
    } catch (error) {
      console.error(`Error fetching data for ${pokemon.name}:`, error);
    }
  }
}
startbtn.addEventListener("click", async () => {
  startScreen.classList.add("hide");
  searchScreen.classList.add("show");
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

searchInput.addEventListener("keyup", async () => {
  let search = searchInput.value.toLowerCase();
  let searchInfo = pokemonList.filter((pokemon) =>
    pokemon.name.includes(search)
  );
  console.log(searchInfo);
  pokemonContainer.innerText = "";
  searchInfo.forEach((pokemon) => {
    const element = document.createElement("li");
    const button = document.createElement("button");

    if (pokemon.bild) {
      const bild = document.createElement("img");
      bild.src = `${pokemon.bild}`;
      element.innerText = `${pokemon.name}`;
      element.appendChild(bild);
    } else {
      const bild2 = document.createElement("img");
      bild2.src = "./bilder/anonymbild.jpg";
      element.innerText = `${pokemon.name}`;
      element.appendChild(bild2);
      bild2.classList.add("bild2");
    }

    element.appendChild(button);
    button.innerText = "välj mig";
    pokemonContainer.appendChild(element);
  });
});
