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

export { getPokemon, fetchPokemonData };
