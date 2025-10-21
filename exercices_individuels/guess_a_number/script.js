// Variables globales
let borneMin = 0;
let borneMax = 50;
let essais = 0;
let nombreSecret;
let jeuActif = true;

document.getElementById("intervalle").innerHTML = `${borneMin} &lt; ? &lt; ${borneMax}`;


// Joueur 1 choisit le nombre
function choisirNombre() {
  let saisie;
  do {
    saisie = prompt(`Joueur 1 : Entrez un nombre entre ${borneMin} et ${borneMax}`);
    nombreSecret = parseInt(saisie);
  } while (isNaN(nombreSecret) || nombreSecret <= borneMin || nombreSecret >= borneMax);
}

// Vérifie si la proposition est correcte
function verifier(proposition, cible) {
  if (proposition === cible) {
    return "gagne";
  } else if (proposition < cible) {
    return "plus";
  } else {
    return "moins";
  }
}

// Met à jour l'intervalle
function actualiserIntervalle(proposition) {
  if (proposition > borneMin && proposition < nombreSecret) {
    borneMin = proposition;
  } else if (proposition < borneMax && proposition > nombreSecret) {
    borneMax = proposition;
  }
  document.getElementById("intervalle").textContent = 
    `${borneMin} < ? < ${borneMax}`;
}

// Affiche un message d'indication
function afficherIndice(resultat) {
  const messageElement = document.getElementById("message");
  
  if (resultat === "plus") {
    messageElement.textContent = "C'est plus ! 👆";
  } else if (resultat === "moins") {
    messageElement.textContent = "C'est moins ! 👇";
  } else {
    messageElement.textContent = "";
  }
}

// Termine la partie
function terminerJeu() {
  const victoireElement = document.getElementById("victoire");
  victoireElement.textContent = `Gagné ! 🎉 Vous avez trouvé le nombre ${nombreSecret} !`;
  victoireElement.classList.remove("cache");
  document.getElementById("nombre-input").disabled = true;
  document.getElementById("valider").disabled = true;
  jeuActif = false;
}

// Fonction principale du jeu
function jouer() {
  if (!jeuActif) return;
  
  const inputElement = document.getElementById("nombre-input");
  const proposition = parseInt(inputElement.value);

  // Validation de la saisie
  if (isNaN(proposition)) {
    alert("Entrez un nombre valide svp !");
    return;
  }

  if (proposition <= borneMin || proposition >= borneMax) {
    alert(`Le nombre doit être entre ${borneMin} et ${borneMax}`);
    return;
  }

  // Incrémente le compteur
  essais++;
  document.getElementById("compteur").textContent = `Essais : ${essais}`;

  // Vérification
  const resultat = verifier(proposition, nombreSecret);
  
  if (resultat === "gagne") {
    terminerJeu();
  } else {
    actualiserIntervalle(proposition);
    afficherIndice(resultat);
  }

  // Réinitialise l'input
  inputElement.value = "";
}

// Démarrage du jeu
choisirNombre();
document.getElementById("valider").addEventListener("click", jouer);

// Permet de valider avec la touche Entrée
document.getElementById("nombre-input").addEventListener("keypress", function(e) {
  if (e.key === "Enter") {
    jouer();
  }
});