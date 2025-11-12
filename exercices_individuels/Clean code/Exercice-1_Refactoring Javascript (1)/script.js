// function sumNumber(arr) {
// 	let n = 0;
// 	for (let i = 0; i < arr.length; i++) {
// 		n += arr[i];
// 	}
// 	return n;
// }

// console.log(f1([1, 2, 3, 4])); // Devrait retourner 10
// console.log(f1([1, 2])); // Devrait retourner 3
// console.log(f1([0])); // Devrait retourner 0
// console.log(f1([1, 0])) // Devrait retourner 1

// Implémente la gestion des erreurs dans les cas suivants
// console.log(f1([1, "Haha"])) // Devrait retourner 1
// console.log(f1()) // Devrait retourner "Erreur: Vous devez passer un tableau de nombres"
// console.log(f1("Huhu")) // Devrait retourner "Erreur: Vous devez passer un tableau de nombres" 

function sumNumber(arr) {                     // Déclare une fonction nommée sumNumber qui prend un paramètre arr
    if (!Array.isArray(arr)) {                // Vérifie si arr n'est pas un tableau
        return "Erreur: Vous devez passer un tableau de nombres"; // Si ce n’est pas un tableau, retourne un message d’erreur
    }

    return arr.reduce((a, b) => {             // Utilise reduce pour parcourir le tableau et accumuler la somme
        return typeof b === 'number' ? a + b : a; // Si b est un nombre, on l’ajoute à a ; sinon, on ignore b
    }, 0);                                    // Initialise l’accumulateur (a) à 0
}

console.log(sumNumber([1, 2, 3, 4]));
console.log(sumNumber([1, 2]));
console.log(sumNumber([0]));
console.log(sumNumber([1, 0]))

console.log(sumNumber([1, "Haha"]))
console.log(sumNumber())
console.log(sumNumber("Huhu"))
