// Liste des boissons disponibles
const boissonsDisponibles = [
  "Eau minérale",
  "Coca-Cola",
  "Thé glacé",
  "Jus d'orange",
  "Café"
];

// Fonction pour sélectionner une boisson
function selectionnerBoisson(numero) {
  if (numero >= 1 && numero <= boissonsDisponibles.length) {
    return `✅ Vous avez choisi : ${boissonsDisponibles[numero - 1]}`;
  } else {
    return `❌ Numéro invalide. Choisissez entre 1 et ${boissonsDisponibles.length}.`;
  }
}

// Fonction appelée au clic sur le bouton
function commanderBoisson() {
  const numero = parseInt(document.getElementById("numeroBoisson").value);
  const message = selectionnerBoisson(numero);
  document.getElementById("resultat").textContent = message;
  console.log(message);
}