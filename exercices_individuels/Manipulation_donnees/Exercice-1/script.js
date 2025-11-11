const candidates = [
  "Le Filip",
  "Ruby On The Nail",
  "Leona Winter",
  "Lula Strega",
  "Misty Phoenix",
  "Perseo",
  "Norma Bell",
  "Edeha Noire",
  "Magnetica",
  "Afrodite Amour",
];

console.log(candidates[0]);

console.log(candidates[7]);

// Parcourir le tableau et afficher chaque nom dans la console
candidates.forEach((candidate) => {
  console.log(candidate);
});

// Afficher la liste des candidates dans la page HTML
const ul = document.getElementById("candidate-list");
candidates.forEach((candidate) => {
  const li = document.createElement("li");
  li.textContent = candidate;
  ul.appendChild(li);
});
