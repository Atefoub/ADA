// Problème : Gestion d'une bibliothèque numérique

// Vous devez créer un système de gestion de livres avec les fonctionnalités suivantes :

// Base de données initiale

const books = [
  {
    id: 1,
    title: "JavaScript for Beginners",
    author: "Alice Martin",
    year: 2020,
    pages: 300,
    genre: "programming",
    rating: 4.2,
  },
  {
    id: 2,
    title: "Advanced React",
    author: "Bob Dupont",
    year: 2021,
    pages: 450,
    genre: "programming",
    rating: 4.5,
  },
  {
    id: 3,
    title: "Art History",
    author: "Claire Leroy",
    year: 2019,
    pages: 280,
    genre: "art",
    rating: 3.8,
  },
  {
    id: 4,
    title: "Python Data Science",
    author: "David Moreau",
    year: 2022,
    pages: 520,
    genre: "programming",
    rating: 4.7,
  },
  {
    id: 5,
    title: "Design Patterns",
    author: "Alice Martin",
    year: 2018,
    pages: 320,
    genre: "programming",
    rating: 4.1,
  },
  {
    id: 6,
    title: "Modern Painting",
    author: "Emma Laurent",
    year: 2020,
    pages: 190,
    genre: "art",
    rating: 3.9,
  },
];

// Consignes : Implémentez les fonctions suivantes :

// 1- Trouver tous les livres d'un auteurice donné ( Aline Martin )
// 2- Calculer la moyenne des pages par genre
// 3- Trouver le livre le plus récent
// 4- Créer une liste unique de tous les auteurices
// 5- Grouper les livres par genre

// 1-
function findBooksByAuthor(authorName) {
  return books.filter((books) => books.author === authorName);
}

const aliceBooks = findBooksByAuthor("Alice Martin");
console.log(aliceBooks);

// 2-

function averagePages() {
  let totalPages = 0;
  for (let i = 0; i < books.length; i++) {
    totalPages += books[i].pages;
  }
  const averagePages = totalPages / books.length;
  console.log("Moyenne des pages :", averagePages);
}

averagePages()

// 3-

let mostRecent = books[0];

for (let i = 1; i < books.length; i++) {
  if (books[i].year > mostRecent.year) {
    mostRecent = books[i];
  }
}

console.log("Livre le plus récent :", mostRecent);

// 4-

console.log([...new Set(books.map(books => books.author))]);

// 5-

let groupes = {};

for (let b of books) {
  groupes[b.genre] = (groupes[b.genre] || []).concat(b);
}

console.log(groupes);






