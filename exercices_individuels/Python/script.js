// Pour l'exercice des allumettes tranformé en attaque de monstre, voici les étapes :
// Étape 1 — Fonction d’attaque
// But : créer la fonction qui applique des dégâts aux PV du monstre.

function attack(remainingPv, damages) {
  return remainingPv - damages;
}
// Entrées : pvRestants (number), degats (number)
// Sortie : nouveau nombre de PV (number)

// Étape 2 — Demander les dégâts au joueur (boucle)
// But : tant que le monstre a des PV, demander au joueur combien il souhaite infliger.

// Créer demanderDegats(joueur) qui :
// affiche prompt("Joueur X, combien de dégâts ? (1-6)")
// convertit en nombre et retourne le nombre (sans validation ici).
// Boucle qui :
// appelle demanderDegats
// appelle attaquerMonstre pour mettre à jour les PV
// affiche l’état (console.log ou alert) après chaque attaque

function askDamages(player) {
  return Number.parseInt(
    `Player, ${player}how many damaes would you like to inflige ? (1-6)`
  );
}

function jouer() {
  let monsterPv = 50;
  let player = 1;


    while (monsterPv > 0) {
            let damages = askDamages(player);
        monsterPv = attack(monsterPv, damages);
        console.log(monsterPv);
}
}

jouer();

// Étape 3 — Validation des entrées (1 à 6) + détection de victoire
// But : s’assurer que le joueur choisit un entier entre 1 et 6 et gérer la victoire.

// Implémenter demanderDegatsValide(joueur) :
// boucle qui redemande tant que l’entrée est NaN ou hors intervalle [1,6]
// retourne un entier valide

// Dans la boucle principale :
// après attaquerMonstre, vérifier if (pv <= 0) → afficher Joueur X a vaincu le monstre ! et terminer la partie.

function ()


// Étape 4 — Deux joueurs (alternance de tours)
// But : gérer l’alternance entre 2 joueurs.

// Écrire jouerDeuxJoueurs() :

// initialise pvMonstre = 50, joueurActif = 1
// boucle while (pvMonstre > 0) :
// appelle demanderDegatsValide(joueurActif)
// pvMonstre = attaquerMonstre(pvMonstre, degats)
// affiche effets et PV restants
// si victoire → annoncer gagnant et break
// sinon joueurActif = joueurActif === 1 ? 2 : 1
