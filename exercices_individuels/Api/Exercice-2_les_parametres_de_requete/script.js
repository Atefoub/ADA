let currentId = 1;

// Fonction pour récupérer un Pokémon avec son ID (paramètre de chemin)
async function getPokemon(id) {
    const container = document.getElementById('pokemon');
    container.innerHTML = '<p>Chargement...</p>';
    
    try {
        // Appel API avec paramètre de chemin
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const data = await response.json();
        
        // Afficher le Pokémon
        showPokemon(data);
        
    } catch (error) {
        container.innerHTML = '<p>Erreur de chargement</p>';
    }
}

// Fonction pour afficher les infos du Pokémon
function showPokemon(pokemon) {
    const container = document.getElementById('pokemon');
    
    const types = pokemon.types
        .map(t => `<span class="type">${t.type.name}</span>`)
        .join('');
    
    container.innerHTML = `
        <h2 class="pokemon-name">#${pokemon.id} - ${pokemon.name}</h2>
        <img class="pokemon-image" src="${pokemon.sprites.front_default}" alt="${pokemon.name}">
        <div class="pokemon-types">${types}</div>
        <p>Taille: ${pokemon.height / 10}m | Poids: ${pokemon.weight / 10}kg</p>
    `;
    
    currentId = pokemon.id;
    document.getElementById('pokemonId').value = pokemon.id;
}

// Bouton Précédent
document.getElementById('prevBtn').addEventListener('click', () => {
    if (currentId > 1) {
        getPokemon(currentId - 1);
    }
});

// Bouton Suivant
document.getElementById('nextBtn').addEventListener('click', () => {
    getPokemon(currentId + 1);
});

// Input pour aller à un Pokémon spécifique
document.getElementById('pokemonId').addEventListener('change', (e) => {
    const id = parseInt(e.target.value);
    if (id > 0) {
        getPokemon(id);
    }
});

// Charger le premier Pokémon
getPokemon(1);