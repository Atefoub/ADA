// 🔹 Étape 1 : Préparer la pâte
// Crée une fonction preparerPate() qui prend en paramètres :
// farine (en grammes)
// lait (en ml)
// oeufs (nombre)
// sucre (en grammes)
// Elle doit retourner une phrase indiquant que la pâte est prête. 🧪 Exemple d'appel
// console.log(preparerPate(250, 500, 3, 50));
// Doit afficher
// Pâte prête avec 100g de farine, 500ml de lait, 3 oeufs et 50g de sucre.

function preparerPate(farine, lait, oeufs, sucre) {
  return (`Pâte prête avec ${farine}g de farine, ${lait}ml de lait, ${oeufs} oeufs et ${sucre}g de sucre.`);
}

console.log(preparerPate(250, 500, 3, 50));
    
// 🔹 Étape 2 : Cuire une crêpe
// Crée une fonction cuireCrepe() qui prend en paramètres :
// farine
// lait
// oeufs
// sucre
// Elle doit retourner une phrase indiquant qu’une crêpe est cuite. 🧪 Exemple d'appel
// console.log(cuireCrepe(farine, lait, oeufs, sucre));
// Doit afficher
// Crêpe cuite avec 250g de farine, 500ml de lait, 3 oeufs et 50g de sucre.

function cuireCrepe(farine, lait, oeufs, sucre) {
  return (`Crêpe cuite avec ${farine}g de farine, ${lait}ml de lait, ${oeufs} oeufs et ${sucre}g de sucre.`);
}

console.log(cuireCrepe(250, 500, 3, 50));