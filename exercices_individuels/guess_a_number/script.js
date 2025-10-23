// État du jeu
let borneMin = 0;
let borneMax = 50;
let essais = 0;
let nombreSecret;

// Éléments DOM
const input = document.getElementById("nombre-input");
const bouton = document.getElementById("valider");

// Joueur 1 choisit le nombre
function init() {
  let nombre;
  do {
    nombre = parseInt(prompt(`Entrez un nombre entre ${borneMin} et ${borneMax}`));
  } while (isNaN(nombre) || nombre <= borneMin || nombre >= borneMax);
  
  nombreSecret = nombre;
  afficherIntervalle();
}

// Affiche l'intervalle
function afficherIntervalle() {
  document.getElementById("intervalle").textContent = `${borneMin} < ? < ${borneMax}`;
}

// Affiche un message
function afficherMessage(texte) {
  document.getElementById("message").textContent = texte;
}

// Fin de partie
function gagner() {
  document.getElementById("victoire").textContent = 
    `Gagné ! 🎉 Vous avez trouvé ${nombreSecret} !`;
  document.getElementById("victoire").classList.remove("cache");
  input.disabled = true;
  bouton.disabled = true;
}

// Jouer un tour
function jouer() {
  const proposition = parseInt(input.value);

  // Vérification
  if (isNaN(proposition)) {
    alert("Entrez un nombre valide !");
    return;
  }
  if (proposition <= borneMin || proposition >= borneMax) {
    alert(`Le nombre doit être entre ${borneMin} et ${borneMax}`);
    return;
  }

  // Compteur
  essais++;
  document.getElementById("compteur").textContent = `Essais : ${essais}`;

  // Comparaison
  if (proposition === nombreSecret) {
    gagner();
  } else if (proposition < nombreSecret) {
    borneMin = proposition;
    afficherIntervalle();
    afficherMessage("C'est plus ! 👆");
  } else {
    borneMax = proposition;
    afficherIntervalle();
    afficherMessage("C'est moins ! 👇");
  }

  input.value = "";
}

// Événements
bouton.addEventListener("click", jouer);
input.addEventListener("keypress", (e) => {
  if (e.key === "Enter") jouer();
});

// Démarrage
init();