const express = require("express"); // Importe le module Express pour créer le serveur web
const app = express(); // Crée une instance d'application Express
const port = 3000; // Définit le port sur lequel le serveur va écouter

const database = ["html", "css"]; // Crée un tableau qui simule une base de données avec 2 langages initiaux

app.use(express.json()); // Middleware qui permet de parser automatiquement le JSON des requêtes

// CREATE: Ajoute un langage dans "database"
app.post("/languages", (req, res) => { // Définit une route POST sur /languages avec req (requête) et res (réponse)
  database.push(req.body.language); // Ajoute le langage reçu dans le body à la fin du tableau database
  res.status(201).json({ language: req.body.language }); // Renvoie une réponse HTTP 201 (créé) avec le langage en JSON
});

// READ: Renvoie la liste des langages
app.get("/languages", (req, res) => { // Définit une route GET sur /languages
  res.status(200).json({ languages: database }); // Renvoie une réponse HTTP 200 (succès) avec tout le tableau database en JSON
});

// UPDATE: Remplace un langage existant par un nouveau
app.put("/languages/:name", (req, res) => { // Définit une route PUT avec un paramètre dynamique :name dans l'URL
  const oldLanguage = req.params.name; // Récupère le nom du langage depuis l'URL (exemple: /languages/html → "html")
  const newLanguage = req.body.language; // Récupère le nouveau langage depuis le body de la requête
  
  const index = database.indexOf(oldLanguage); // Cherche la position du langage dans le tableau (-1 si non trouvé)
  
  if (index === -1) { // Si le langage n'existe pas dans la database
    return res.status(404).json({ error: "Language not found" }); // Renvoie une erreur 404 (non trouvé) et arrête la fonction avec return
  }
  
  database[index] = newLanguage; // Remplace l'ancien langage par le nouveau à la position trouvée
  res.status(200).json({ // Renvoie une réponse HTTP 200 (succès)
    message: `${oldLanguage} replaced by ${newLanguage}`, // Message de confirmation avec template literals
    language: newLanguage // Le nouveau langage
  });
});

// DELETE: Supprime un langage
app.delete("/languages", (req, res) => { // Définit une route DELETE sur /languages
  const languageToDelete = req.body.language; // Récupère le langage à supprimer depuis le body
  
  const index = database.indexOf(languageToDelete); // Cherche la position du langage dans le tableau
  
  if (index === -1) { // Si le langage n'existe pas
    return res.status(404).json({ error: "Language not found" }); // Renvoie une erreur 404
  }
  
  database.splice(index, 1); // Supprime 1 élément à partir de l'index trouvé (modifie directement le tableau)
  res.status(200).json({ // Renvoie une réponse HTTP 200
    message: `${languageToDelete} deleted`, // Message de confirmation
    language: languageToDelete // Le langage supprimé
  });
});

app.listen(port, () => { // Démarre le serveur sur le port défini
  console.log(`Server started on http://localhost:${port}`); // Affiche un message dans la console quand le serveur démarre
});

//Voici une description synthétique de ce que fait ce code :

// ## Vue d'ensemble

// Ce code crée une **API REST** simple pour gérer une liste de langages de programmation. Il utilise Express.js comme serveur web et un tableau JavaScript comme "base de données" simplifiée.

// ## Logique générale

// 1. **Initialisation** : Le serveur démarre sur le port 3000 avec une liste initiale de 2 langages ["html", "css"]

// 2. **4 opérations CRUD** :
//    - **CREATE (POST)** : Ajoute un nouveau langage à la fin de la liste
//    - **READ (GET)** : Récupère et affiche tous les langages stockés
//    - **UPDATE (PUT)** : Cherche un langage existant et le remplace par un nouveau
//    - **DELETE (DELETE)** : Cherche un langage et le supprime de la liste

// 3. **Gestion des erreurs** : Pour UPDATE et DELETE, le code vérifie d'abord si le langage existe. Si non, il renvoie une erreur 404 "Language not found"

// ## Flux typique

// Quand une requête arrive → le serveur identifie la route → exécute l'action correspondante sur le tableau `database` → renvoie une réponse JSON au client

// **En résumé** : c'est un mini-système de gestion de langages où tu peux ajouter, consulter, modifier et supprimer des éléments via des requêtes HTTP.
