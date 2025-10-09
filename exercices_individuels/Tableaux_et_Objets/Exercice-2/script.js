// Problème : Système de gestion d'étudiants

// Créez un système complet de gestion d'étudiant·es avec calcul de notes, statistiques et recherche avancée.

const students = {
  A001: {
    id: "A001",
    name: "Alice Martin",
    age: 22,
    major: "Computer Science",
    grades: [14, 16, 12, 18, 15],
    absences: 3,
    courses: ["JavaScript", "Algorithms", "Database"],
  },
  A002: {
    id: "A002",
    name: "Bob Dupont",
    age: 24,
    major: "Mathematics",
    grades: [11, 9, 15, 8, 13],
    absences: 7,
    courses: ["Calculus", "Statistics", "Algebra"],
  },
  A003: {
    id: "A003",
    name: "Claire Leroy",
    age: 21,
    major: "Computer Science",
    grades: [17, 19, 16, 18, 20],
    absences: 1,
    courses: ["JavaScript", "Web Development", "Data Structures"],
  },
  A004: {
    id: "A004",
    name: "David Moreau",
    age: 23,
    major: "Physics",
    grades: [12, 14, 11, 10, 13],
    absences: 5,
    courses: ["Mechanics", "Quantum Physics", "Thermodynamics"],
  },
  A005: {
    id: "A005",
    name: "Emma Bernard",
    age: 22,
    major: "Computer Science",
    grades: [15, 17, 16, 14, 19],
    absences: 2,
    courses: ["JavaScript", "Networks", "Security"],
  },
};

// Consignes : Implémentez les fonctions suivantes :

// 1- Calculer la moyenne de chaque étudiant·e
// 2- Trouver les étudiant·es d'une filière donnée
// 3- Identifier l'étudiante avec la meilleure moyenne
// 4- Statistiques par filière (moyenne des moyennes, taux d'absentéisme)
// 5- Ajouter une nouvelle note à un étudiante

// 1-

function moyennes(students) {
  for (let s in students)
    console.log(
      students[s].grades.reduce((a, b) => a + b) / students[s].grades.length);
}

moyennes(students)

// 🧠 Étape par étape :
// 1. function moyennes(students) { ... }
// - Tu déclares une fonction nommée moyennes.
// - Elle prend un paramètre students, qui est un objet contenant tous les étudiant·es.
// 2. for (let s in students)
// - Tu utilises une boucle for...in pour parcourir chaque clé de l’objet students.
// - Chaque s est un identifiant d’étudiant·e, comme "A001", "A002", etc.
// 3. students[s].grades
// - Tu accèdes à l’étudiant·e correspondant à l’identifiant s.
// - Puis tu récupères son tableau de notes (grades), par exemple [14, 16, 12, 18, 15].
// 4. .reduce((a, b) => a + b)
// - Tu utilises .reduce() pour additionner toutes les notes.
// - a est l’accumulateur, b est la note actuelle.
// - Exemple : [14, 16, 12] devient 14 + 16 + 12 = 42.
// 5. / students[s].grades.length
// - Tu divises la somme des notes par le nombre de notes pour obtenir la moyenne.
// - Exemple : 42 / 3 = 14.
// 6. console.log(...)
// - Tu affiches directement la moyenne dans la console.
// - Une ligne par étudiant·e, sans nom ni identifiant