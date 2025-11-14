// Fonction pour récupérer les photos depuis l'API
async function fetchPhotos() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/photos");
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Erreur:", error);
        throw error;
    }
}

// Fonction pour créer un élément photo avec gestion d’erreur de chargement
function createPhotoElement(photo) {
    const photoDiv = document.createElement("div");
    photoDiv.className = "photo";

    const img = document.createElement("img");
    img.src = photo.thumbnailUrl;
    img.alt = photo.title;

    // Ajout d’un gestionnaire d’erreur pour les images
    img.onerror = function () {
        console.error(`Échec du chargement de l'image: ${photo.thumbnailUrl}`);
        img.src = "https://via.placeholder.com/150?text=Image+non+disponible"; // Image de secours
        img.alt = "Image non disponible";
    };

    const title = document.createElement("div");
    title.className = "photo-title";
    title.textContent = photo.title;

    photoDiv.appendChild(img);
    photoDiv.appendChild(title);

    return photoDiv;
}

// Fonction pour afficher les photos dans la galerie
function displayPhotos(photos, limit = 50) {
    const gallery = document.getElementById("gallery");

    photos.slice(0, limit).forEach(photo => {
        const photoElement = createPhotoElement(photo);
        gallery.appendChild(photoElement);
    });
}

// Fonction pour afficher un message d'erreur
function displayError(message) {
    const gallery = document.getElementById("gallery");
    const errorDiv = document.createElement("div");
    errorDiv.className = "error-message";
    errorDiv.innerHTML = `
        <strong>Erreur de chargement</strong><br>
        ${message}<br>
        <small>Veuillez réessayer plus tard.</small>
    `;
    gallery.appendChild(errorDiv);
}

// Fonction pour afficher un message de chargement
function displayLoading() {
    const gallery = document.getElementById("gallery");
    const loadingDiv = document.createElement("div");
    loadingDiv.className = "loading";
    loadingDiv.textContent = "Chargement des photos";
    gallery.appendChild(loadingDiv);
}

// Fonction principale pour initialiser la galerie
async function initGallery() {
    try {
        displayLoading();
        const photos = await fetchPhotos();

        // Nettoyer le message de chargement
        const gallery = document.getElementById("gallery");
        gallery.innerHTML = "";

        displayPhotos(photos);
    } catch (error) {
        console.error("Erreur lors du chargement de la galerie:", error);

        // Nettoyer le message de chargement
        const gallery = document.getElementById("gallery");
        gallery.innerHTML = "";

        displayError(error.message || "Impossible de charger les photos depuis l'API.");
    }
}

// Initialiser la galerie au chargement de la page
window.onload = initGallery;