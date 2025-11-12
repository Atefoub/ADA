function getStatut(estAbonne) {
  return estAbonne ? "Abonné" : "Non abonné";
}

function getCategorie(age) {
  if (age < 18) return "Jeune";
  if (age < 60) return "Adulte";
  return "Senior";
}

function genererRapportUtilisateur(nom, age, ville, profession, estAbonne) {
  return `Rapport utilisateur :
Nom : ${nom}
Age : ${age} ans
Ville : ${ville}
Profession : ${profession}
Statut : ${getStatut(estAbonne)}
Catégorie : ${getCategorie(age)}
`;
}
console.log(genererRapportUtilisateur("Mourin", 42, "Anetz", "dev", true));
