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

// 1- Trouver tous les livres d'un auteurice donné ( Alice Martin )
// 2- Calculer la moyenne des pages par genre
// 3- Trouver le livre le plus récent
// 4- Créer une liste unique de tous les auteurices
// 5- Grouper les livres par genre

// 1-

function findBooksByAuthor(authorName) {
  return books.filter(book => book.author === authorName);
}

console.log(findBooksByAuthor("Alice Martin"))

// 2-

function averagePagesByGenre() {
  const genreStats = {};
  books.forEach(book => {
    if (!genreStats[book.genre]) {
      genreStats[book.genre] = { totalPages: 0, count: 0 };
    }
    genreStats[book.genre].totalPages += book.pages;
    genreStats[book.genre].count += 1;
  });

  const averages = {};
  for (const genre in genreStats) {
    averages[genre] = genreStats[genre].totalPages / genreStats[genre].count;
  }
  return averages;
}

console.log(averagePagesByGenre())


// 3-

function findMostRecentBook() {
  return books.reduce((latest, book) => book.year > latest.year ? book : latest, books[0]);
}

console.log(findMostRecentBook())

// 4-

function getUniqueAuthors() {
  return [...new Set(books.map(book => book.author))];
}

console.log(getUniqueAuthors())

// 5-

function groupBooksByGenre() {
  return books.reduce((grouped, book) => {
    if (!grouped[book.genre]) {
      grouped[book.genre] = [];
    }
    grouped[book.genre].push(book);
    return grouped;
  }, {});
}

console.log(groupBooksByGenre())






