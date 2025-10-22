// VARIABLES
let borneMin = 0;
let borneMax = 50;
let essais = 0;
let nombreSecret;
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

function afficherIntervalle() {
  document.getElementById("intervalle").textContent = `${borneMin} < ? < ${borneMax}`;
}

// JEU
function jouer() {
  if (!jeuActif) return;
  
  const proposition = parseInt(document.getElementById("nombre-input").value);

  // Validation
  if (isNaN(proposition)) {
    alert("Entrez un nombre valide svp !");
    return;
  }
  if (proposition <= borneMin || proposition >= borneMax) {
    alert(`Le nombre doit être entre ${borneMin} et ${borneMax}`);
    return;
  }

  // Compteur
  essais++;
  document.getElementById("compteur").textContent = `Essais : ${essais}`;

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