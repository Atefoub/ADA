// Clé API OMDb (utilise une clé de démonstration)
// Pour avoir ta propre clé gratuite : https://www.omdbapi.com/apikey.aspx
const API_KEY = 'b9a5e69d'; // Clé de démonstration

let currentSearch = '';
let currentPage = 1;

// Fonction pour rechercher des films avec paramètres de requête
async function searchMovies(searchTerm, page = 1) {
    const results = document.getElementById('results');
    results.innerHTML = '<div class="loading">Recherche en cours...</div>';
    
    try {
        // Construction de l'URL avec paramètres de requête
        // ?s= pour le terme de recherche
        // &page= pour la pagination
        const url = `https://corsproxy.io/?https://www.omdbapi.com/?apikey=${API_KEY}&s=${searchTerm}&page=${page}`;
        
        const response = await fetch(url);
        const data = await response.json();
        
        if (data.Response === "True") {
            displayMovies(data.Search);
            displayPagination(data.totalResults, page);
        } else {
            results.innerHTML = `<div class="error">Aucun film trouvé pour "${searchTerm}"</div>`;
            document.getElementById('pagination').innerHTML = '';
        }
        
    } catch (error) {
        results.innerHTML = '<div class="error">Erreur lors de la recherche</div>';
    }
}

// Fonction pour afficher les films
function displayMovies(movies) {
    const results = document.getElementById('results');
    
    results.innerHTML = movies.map(movie => `
        <div class="movie-card">
            ${movie.Poster !== "N/A" 
                ? `<img src="${movie.Poster}" alt="${movie.Title}" class="movie-poster">`
                : `<div class="no-poster">Pas d'affiche</div>`
            }
            <div class="movie-info">
                <div class="movie-title">${movie.Title}</div>
                <div class="movie-year">${movie.Year}</div>
            </div>
        </div>
    `).join('');
}

// Fonction pour afficher la pagination
function displayPagination(totalResults, currentPage) {
    const totalPages = Math.ceil(totalResults / 12); // 12 résultats par page
    const pagination = document.getElementById('pagination');
    
    pagination.innerHTML = `
        <button class="page-btn" id="prevBtn" ${currentPage === 1 ? 'disabled' : ''}>
            ← Précédent
        </button>
        <span class="page-info">Page ${currentPage} sur ${totalPages}</span>
        <button class="page-btn" id="nextBtn" ${currentPage === totalPages ? 'disabled' : ''}>
            Suivant →
        </button>
    `;
    
    // Événements pour les boutons de pagination
    document.getElementById('prevBtn').addEventListener('click', () => {
        if (currentPage > 1) {
            searchMovies(currentSearch, currentPage - 1);
        }
    });
    
    document.getElementById('nextBtn').addEventListener('click', () => {
        if (currentPage < totalPages) {
            searchMovies(currentSearch, currentPage + 1);
        }
    });
}

// Événement pour le bouton de recherche
document.getElementById('searchBtn').addEventListener('click', () => {
    const searchTerm = document.getElementById('searchInput').value.trim();
    if (searchTerm) {
        currentSearch = searchTerm;
        currentPage = 1;
        searchMovies(searchTerm, 1);
    }
});

// Recherche avec la touche Entrée
document.getElementById('searchInput').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        document.getElementById('searchBtn').click();
    }
});

// Recherche par défaut au chargement
searchMovies('batman', 1);
currentSearch = 'batman';