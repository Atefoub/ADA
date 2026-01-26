
// 1.1 Afficher une ligne d"étoiles

function afficherEtoiles(n) {
  console.log("*".repeat(n));
}

// 1.2 Afficher un rectangle
function afficherRectangle(hauteur, largeur) {
  for (let i = 0; i < hauteur; i++) {
    afficherEtoiles(largeur);
  }
}

// 1.3 Triangle droit (partie droite du sapin)
function afficherTriangleDroite(n) {
  for (let i = 0; i < n; i++) {
    console.log("*".repeat(i) + "\\");
  }
}

// 1.4 Triangle gauche (partie gauche du sapin)
function afficherTriangleGauche(n) {
  for (let i = 0; i < n; i++) {
    console.log(" ".repeat(n - 1 - i) + "/" + "*".repeat(i)); // enlève l"espace à gauche du sapin (repeat (n - 1 - i))
  }
}

// 2.1 Afficher un étage du sapin avec décorations
function afficherEtage(hauteur, pointe_offset, espacement) {
  for (let i = pointe_offset; i < pointe_offset + hauteur; i++) {
    let ligne = "";
    
    // Ajouter l"espacement initial
    for (let j = 0; j < espacement; j++) {
      ligne += " ";
    }
    
    // Calculer la largeur de chaque côté
    const largeurMax = pointe_offset + hauteur;
    const espacesGauche = largeurMax - i - 1;
    
    // Ajouter les espaces à gauche
    for (let j = 0; j < espacesGauche; j++) {
      ligne += " ";
    }
    
    // Partie gauche avec décorations
    ligne += "/";
    for (let j = 0; j < i; j++) {
      const rand = Math.random();
      if (i > 1 && j > 0 && j < i - 1) {
        if (rand < 0.1) {
          ligne += "o";
        } else if (rand < 0.15) {
          ligne += "+";
        } else {
          ligne += "*";
        }
      } else {
        ligne += "*";
      }
    }
    
    // Tronc central
    ligne += "|";
    
    // Partie droite avec décorations
    for (let j = 0; j < i; j++) {
      const rand = Math.random();
      if (i > 1 && j > 0 && j < i - 1) {
        if (rand < 0.1) {
          ligne += "o";
        } else if (rand < 0.15) {
          ligne += "+";
        } else {
          ligne += "*";
        }
      } else {
        ligne += "*";
      }
    }
    ligne += "\\";
    
    console.log(ligne);
  }
}

// 2.2 Afficher le sapin complet avec l"étoile
function afficherSapin(etages, hauteur_etage) {

  const hauteurTotale = etages * hauteur_etage;
  
  let ligneEtoile = "";
  for (let i = 0; i < hauteurTotale; i++) {
    ligneEtoile += " ";
  }
  ligneEtoile += "+";
  console.log(ligneEtoile);
  
  for (let etage = 0; etage < etages; etage++) {
    const pointe_offset = etage;
    const espacement = hauteurTotale - (etage + hauteur_etage);
    afficherEtage(hauteur_etage, pointe_offset, espacement);
  }
  

  const largeurTronc = 3;
  const hauteurTronc = 3;
  const espacementTronc = hauteurTotale - Math.floor(largeurTronc / 2);
  
  for (let i = 0; i < hauteurTronc; i++) {
    let ligneTronc = "";
    for (let j = 0; j < espacementTronc; j++) {
      ligneTronc += " ";
    }
    for (let j = 0; j < largeurTronc; j++) {
      ligneTronc += "#";
    }
    console.log(ligneTronc);
  }
}

// tests

console.log(" Voici votre magnifique sapin de Noël ! \n");
afficherSapin(3, 3);

console.log(" Un sapin plus grand (6 étages de hauteur 6) ! \n");
afficherSapin(6, 6);


