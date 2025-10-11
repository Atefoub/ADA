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

function calculerMoyennes() {                          // Déclaration de la fonction pour calculer les moyennes
  let moyennes = {};                                   // Initialisation d'un objet vide pour stocker les moyennes
  for (let id in students) {                           // Parcours de chaque étudiant par son identifiant
    let totalNotesbyId = 0;                            // Initialisation du total des notes pour cet étudiant
    for (let note of students[id].grades) {            // Parcours de chaque note de l'étudiant
      totalNotesbyId += note;                          // Ajout de la note au total
    }

    moyennes[id] = totalNotesbyId / students[id].grades.length; // Calcul de la moyenne et stockage dans l'objet
  }
  return moyennes;                                     // Retourne l'objet contenant les moyennes
}

console.log("Moyennes:", calculerMoyennes());          // Affiche les moyennes dans la console

// 2-

function trouverParFiliere(filiere) {                      // Déclare une fonction qui cherche les étudiants par filière
  let resultat = [];                                       // Initialise un tableau vide pour stocker les résultats

  for (let id in students) {                               // Parcourt chaque étudiant dans l'objet students
    if (students[id].major === filiere) {                  // Vérifie si la filière de l'étudiant correspond à celle recherchée
      resultat.push(students[id].name);                    // Ajoute le nom de l'étudiant au tableau résultat
    }
  }

  return resultat;                                         // Retourne le tableau des noms d'étudiants correspondant
}

console.log("Computer Science:", trouverParFiliere("Computer Science")); // Affiche les étudiants en "Computer Science"

// 3-

function meilleureMoyenne() {
  let meilleur = null;
  let max = 0;

  for (let id in students) {
    let moy = parseFloat(moyenne(students[id]));
    if (moy > max) {
      max = moy;
      meilleur = students[id].name;
    }
  }

  return `${meilleur} avec ${max.toFixed(2)}`;
}


// 4-




