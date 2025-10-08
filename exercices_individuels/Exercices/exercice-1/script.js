// on recupère le h1 de la page
const pageTitle = document.querySelector("h1");
// on recupère l'élément avec l'id newsletter (# est utilisé pour les ids)
// const subscribeButton = document.querySelector("#newsletter");

// on recupère dans un tableau tous les éléments qui ont la classe recipe
const recipes = document.querySelectorAll(".recipe");

const hasSubscribed = true;
// on recupère l'élément avec l'id newsletter (# est utilisé pour les ids)
const subscribeButton = document.querySelector("#newsletter");

// si on a souscrit, on change le texte du bouton :
if (hasSubscribed) {
  subscribeButton.innerText = "Unsubscribe";
}
const tasks = [
  "Finir d'écrire la fiche",
  "Corriger les fautes",
  "Demander à une encadrante de relire",
  "Faire tester à des apprenantes",
];

// on recupère notre liste de tâches (<ul id="tasks"></ul>) :
const listEl = document.querySelector("ul#tasks");
listEl.innerHTML = ""; // on vide la liste
for (const task of tasks) {
  // on ajoute la tache sous forme d'élément li :
  listEl.innerHTML += `<li>${task}</li>`;
}

// EXERCICE 1

const h1 = document.querySelector("h1");

h1.innerText = "Mes recettes de saison 😋";
