// searchBtn.addEventListener("click", async (event) => {
//     const url = `https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0`;
//     try {
//       const response = await fetch(url);
//       const data = await response.json();
//       if (data.results && data.results.length > 0) {
//         pokemonList = data.results.map((pokemon) => {
//           return {
//             name: pokemon.name.toLowerCase(),
//             url: pokemon.url,
//           };
//         });
//       }
//     } catch (error) {
//       console.log("Något gick fel", error);
//     }
// });
