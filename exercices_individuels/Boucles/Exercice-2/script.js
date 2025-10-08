// Nous souhaitons recréer un mot à partir de lettres dans un tableau.

// let letters = [ 'A', 'd', 'a', '-', 'T', 'e', 'c', 'h']
 
// Créer une variable appelé “message” de type string.
// Créer une boucle qui va parcourir le tableau letters (choisis la boucle de ton choix)
// Dans le code de la boucle, ajouter chaque élément du tableau letters à message.
// Une fois la boucle terminée, afficher “message” dans la console.
// Le tableau letters a maintenant changé.
// let letters = [ 'A', 'd', 'a', '-', 'S', 'c', 'h', 'o', 'o', 'l']
 
// Fais en sorte que ta boucle soit adaptée à tous les contenus de letters (toute taille).

let letters = [ 'A', 'd', 'a', '-', 'S', 'c', 'h', 'o', 'o', 'l']
let message = " "

for (let i = 0; i < letters.length; i++) {
  message += letters[i];
}

console.log(message);