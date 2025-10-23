<<<<<<< Updated upstream
// VARIABLES
=======
// État du jeu
>>>>>>> Stashed changes
let borneMin = 0;
let borneMax = 50;
let essais = 0;
let nombreSecret;
<<<<<<< Updated upstream
let jeuActif = true;

// INITIALISATION
function demarrerJeu() {
  afficherIntervalle();
  choisirNombreSecret();
  
  document.getElementById("valider").addEventListener("click", jouer);
  document.getElementById("nombre-input").addEventListener("keypress", (e) => {
    if (e.key === "Enter") jouer();
  });
}

function choisirNombreSecret() {
  let saisie;
  do {
    saisie = prompt(`Joueur 1 : Entrez un nombre entre ${borneMin} et ${borneMax}`);
    nombreSecret = parseInt(saisie);
  } while (isNaN(nombreSecret) || nombreSecret <= borneMin || nombreSecret >= borneMax);
}

=======

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
>>>>>>> Stashed changes
function afficherIntervalle() {
  document.getElementById("intervalle").textContent = `${borneMin} < ? < ${borneMax}`;
}

<<<<<<< Updated upstream
// JEU
function jouer() {
  if (!jeuActif) return;
  
  const proposition = parseInt(document.getElementById("nombre-input").value);

  // Validation
=======
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
>>>>>>> Stashed changes
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

<<<<<<< Updated upstream
  // Vérification
  if (proposition === nombreSecret) {
    gagner();
  } else if (proposition < nombreSecret) {
    mettreAJour(proposition, "C'est plus ! 👆");
  } else {
    mettreAJour(proposition, "C'est moins ! 👇");
  }

  document.getElementById("nombre-input").value = "";
}

function mettreAJour(proposition, message) {
  // Actualiser l'intervalle
  if (proposition > borneMin && proposition < nombreSecret) {
    borneMin = proposition;
  } else if (proposition < borneMax && proposition > nombreSecret) {
    borneMax = proposition;
  }
  
  afficherIntervalle();
  document.getElementById("message").textContent = message;
}

function gagner() {
  const victoire = document.getElementById("victoire");
  victoire.textContent = `Gagné ! 🎉 Vous avez trouvé le nombre ${nombreSecret} !`;
  victoire.classList.remove("cache");
  document.getElementById("nombre-input").disabled = true;
  document.getElementById("valider").disabled = true;
  jeuActif = false;
}

// DÉMARRAGE
demarrerJeu();
=======
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
>>>>>>> Stashed changes
