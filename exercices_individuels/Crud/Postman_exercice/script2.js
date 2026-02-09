// Configuration
const baseUrl = 'https://library-api.postmanlabs.com';
const apiKey = 'postmanrulz';

// GET - Récupérer tous les livres
async function getBooks() {
  const response = await fetch(`${baseUrl}/books`, {
    method: 'GET',
    headers: {
      'api-key': apiKey
    }
  });
  
  const data = await response.json();
  console.log(data);
  return data;
}

// POST - Ajouter un livre
async function addBook(bookData) {
  const response = await fetch(`${baseUrl}/books`, {
    method: 'POST',
    headers: {
      'api-key': apiKey,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(bookData)
  });
  
  const data = await response.json();
  return data;
}

// Exemple d'utilisation
const newBook = {
  title: "Rich Dad Poor Dad",
  author: "Robert Kiyosaki",
  genre: "finance",
  yearPublished: 1997
};

addBook(newBook).then(book => console.log('Livre ajouté:', book));