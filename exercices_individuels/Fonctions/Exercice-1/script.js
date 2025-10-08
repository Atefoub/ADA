// Ecris une fonction addThreeNumbers() qui affichera la somme de 1 + 2 + 3 dans la console.
// Objectif : Voir dans la console : “Le résultat de la somme est 6”

function addThreeNumbers() {
  console.log("Le résultat de la somme est " + (1 + 2 + 3));
}

addThreeNumbers();

// Ecris une nouvelle fonction addThreeNumbersWithArg(…) qui affichera aussi le résultat d’une addition de 3 nombres
// mais cette fois-ci à partir de 3 arguments. Déclarer 3 variables qui prennent chacune une valeur de votre choix.
// Passez ces variables à la fonction addThreeNumbersWithArg(…).
// Objectif : Voir dans la console : “Le résultat de la somme est X”. X étant le résultat de la somme de vos trois valeurs de variables.

function addThreeNumbersWithArg(a, b, c) {
  const result = a + b + c
  console.log("Le résultat de la somme est " + result);
}

let a = 5;
let b = 10;
let c = 15;

addThreeNumbersWithArg(a,b,c);

// Appelez addThreeNumbersWithArg() 3 fois avec des valeurs d’argument différentes.
// Objectif : Voir dans la console : “Le résultat de la somme est X ” “Le résultat de la somme est Y” “Le résultat de la somme est Z”

addThreeNumbersWithArg(1, 2, 3);
addThreeNumbersWithArg(10, 20, 30);
addThreeNumbersWithArg(7, 8, 9);
