async function fetchPokemonWeight(pokemonName) {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
  const data = await res.json();
  return data.weight / 10;
}

async function checkLuggageLimit() {
  const startTime = performance.now();
  
  const weights = await Promise.all([
    fetchPokemonWeight("snorlax"),
    fetchPokemonWeight("pikachu"),
    fetchPokemonWeight("ditto"),
    fetchPokemonWeight("bulbasaur")
  ]);
  
  const totalWeight = weights.reduce((sum, weight) => sum + weight, 0);
  
  console.log(`Total weight: ${totalWeight}kg`);
  console.log(`Execution time: ${performance.now() - startTime}ms`);
}

checkLuggageLimit();