// Écris une fonction qui prend en argument un nombre entier et retourne son carré.
// Affiche le résultat dans la console. Objectif : Je donne 3 à ma fonction, j’obtiens 9.
// Je donne 2 à ma fonction, j’obtiens 4.

function carre(nombre) {
  return nombre * nombre;
}

console.log(carre(3));
console.log(carre(2));

// Stocke le résultat de la fonction dans une variable (c’est-à-dire, créé une variable qui sera égale à l’appel de la fonction).
// Nous allons utiliser cette variable pour la donner à une autre fonction . Ecris une autre fonction qui va multiplier par 10,
// la variable précédente. Affiche le résultat dans la console. Objectif : Je donne 9 à ma fonction de multiplication, j’obtiens 90.

let resultatCarre = carre(3);

function multiplierPar10(valeur) {
  return valeur * 10;
}

console.log(multiplierPar10(resultatCarre));

// Modifie le code existant et demande à l’utilisateurice via une fonction existante (que tu dois rechercher),
// le nombre qui sera en entrée de la première fonction. Objectif : L’utilisateur rentre un nombre, disons 4.
// Dans la console, je dois voir successivement 16 et 160.

let nombreUtilisateur = prompt("Donne-moi un nombre : ");

let carreDuNombre = carre(nombreUtilisateur);
let resultMult10 = multiplierPar10(carreDuNombre);

console.log(carreDuNombre);
console.log(resultMult10);
