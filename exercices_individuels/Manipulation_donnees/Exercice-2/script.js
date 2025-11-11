const obj = {
  "candidate": "Le Filip",
  "age": 29,
  "city": "Paris",
  "region": "Île-de-France"
};

const data = [
  {
    "candidate": "Afrodite Amour",
    "age": 27,
    "city": "Lyon",
    "region": "Auvergne-Rhône-Alpes"
  },
  {
    "candidate": "Edeha Noire",
    "age": 34,
    "city": "Lyon",
    "region": "Auvergne-Rhône-Alpes"
  },
  {
    "candidate": "Le Filip",
    "age": 29,
    "city": "Paris",
    "region": "Île-de-France"
  }
];

// Afficher le nom de la candidate dans obj
console.log(obj.candidate);

// Parcourir le tableau data pour afficher tous les noms des candidates
data.forEach(item => {
  console.log(item.candidate);
});
