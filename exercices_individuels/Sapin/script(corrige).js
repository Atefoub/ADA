/////////////////////
//////Etape 1.1//////
/////////////////////

function afficherEtoiles(n) {
  // console.log('*') pour afficher une etoile
  let etoile = "*".repeat(n);

  // à faire pour chaque n étoile !
  return etoile;
}

console.log(afficherEtoiles(2));
console.log(afficherEtoiles(5));

/////////////////////
//////Etape 1.2//////
/////////////////////

function afficherRectangle(hauteur, largeur) {
  // pour chaque "étage" de la hauteur
  let rectangle = "";
  for (let i = 0; i < hauteur; i++) {
    rectangle += afficherEtoiles(largeur) + "\n";
  }
  //    appeler printEtoile
  return rectangle;
}

console.log(afficherRectangle(5, 5));

/////////////////////
//////Etape 1.3//////
/////////////////////

function afficherTriangleDroite(n) {
  let triangleDroite = "";
  // En s'inspirant de la fonction afficherRectangle(),
  // comment afficher des lignes qui "s'allongent" un peu plus à chaque itération ?
  for (let i = 0; i < n; i++) {
    triangleDroite += "*".repeat(i) + "\\\n";
  }
  return triangleDroite;
}

console.log(afficherTriangleDroite(5));

/////////////////////
//////Etape 1.4//////
/////////////////////

function afficherTriangleGauche(n) {
  // En s'inspirant de la fonction afficherTriangleDroite(),
  // comment aligner correctement les etoiles sur le bord de droite ?
  let triangleGauche = "";

  // En s'inspirant de la fonction afficherRectangle(),
  // comment afficher des lignes qui "s'allongent" un peu plus à chaque itération ?
  for (let i = 0; i < n; i++) {
    triangleGauche += " ".repeat(n - i) + "/" + "*".repeat(i) + "\n";
  }
  return triangleGauche;
}

console.log(afficherTriangleGauche(5));

/////////////////////
//////Etape 1.5//////
/////////////////////

function afficherPointeSapin(hauteur) {
  let sapin = "";
  sapin += " ".repeat(hauteur + 1) + "+\n";

  for (let i = 0; i < hauteur; i++) {
    let space = " ".repeat(hauteur - i);
    let etoiles = "*".repeat(i);
    sapin += space + "/" + etoiles + "|" + etoiles + "\\\n";
  }
  // à remplir
  return sapin;
}

console.log(afficherPointeSapin(4));
console.log(afficherPointeSapin(8));