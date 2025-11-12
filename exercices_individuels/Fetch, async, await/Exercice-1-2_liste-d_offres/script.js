// Fonction pour récupérer les offres d'emploi
async function fetchOffers() {
    try {
        const response = await fetch('https://corsproxy.io/?https://codepassport.dev/api/offers'); // utilisation proxy
        const offers = await response.json();
        console.log('Données reçues:', offers); // Pour voir la structure
        return offers;
    } catch (error) {
        console.error('Erreur lors de la récupération des offres:', error);
        throw error;
    }
}

// Fonction pour générer le HTML d'une offre
function generateOfferHTML(offer) {
    return `
        <article class="offer">
            <h2>${offer.titre}</h2>
            <p>${offer.technologie}<p>
            <p>${offer.description}</p>
        </article>
    `;
}

// Fonction principale pour afficher toutes les offres
async function displayOffers() {
    const container = document.getElementById('offers-container');
    
    try {
        // Récupérer les offres
        const offers = await fetchOffers();
        
        // Générer le HTML pour toutes les offres
        const offersHTML = offers.map(offer => generateOfferHTML(offer)).join('');
        
        // Injecter le HTML dans le conteneur
        container.innerHTML = offersHTML;
    } catch (error) {
        container.innerHTML = '<p class="error">Erreur lors du chargement des offres</p>';
    }
}

// Lancer l'affichage au chargement de la page
displayOffers();