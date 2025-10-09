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

// 2-

function idMajor() {

}