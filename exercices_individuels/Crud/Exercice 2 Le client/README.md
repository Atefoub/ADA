# 📝 Client API - TODO List

Client web complet pour une API REST, inspiré de l'exemple `jessica.js` mais avec une interface DOM interactive.

## 🎯 Fonctionnalités

### Communication avec l'API via `fetch()`
- ✅ GET `/api/todos` - Récupérer toutes les tâches
- ✅ POST `/api/todos` - Créer une nouvelle tâche
- ✅ PATCH `/api/todos/:id` - Modifier une tâche
- ✅ DELETE `/api/todos/:id` - Supprimer une tâche
- ✅ GET `/api/status` - Vérifier le statut de l'API

### Interface utilisateur
- 📝 Ajouter des tâches
- ✅ Marquer comme terminées
- 🗑️ Supprimer des tâches
- 🔍 Filtrer (Toutes / Actives / Terminées)
- 📊 Compteur de tâches actives
- 🎨 Design moderne et responsive

## 🚀 Installation et utilisation

### 1. Installer les dépendances

```bash
npm install express cors
```

### 2. Démarrer le serveur

```bash
node server.js
```

Le serveur démarre sur `http://localhost:3000`

### 3. Ouvrir le client

Ouvrir le fichier `index.html` dans un navigateur

## 📁 Structure des fichiers

```
├── index.html      # Interface HTML
├── style.css       # Styles CSS
├── client.js       # Client JavaScript (fetch API)
├── server.js       # Serveur Express (API REST)
└── README.md       # Documentation
```

## 📖 Exemples de code

### Récupérer toutes les tâches

```javascript
async function fetchTodos() {
    const response = await fetch(`${API_URL}/todos`);
    const data = await response.json();
    todos = data.todos;
}
```

### Créer une tâche

```javascript
async function addTodo(text) {
    const response = await fetch(`${API_URL}/todos`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ text })
    });
    const newTodo = await response.json();
}
```

### Modifier une tâche

```javascript
async function toggleTodo(id) {
    const response = await fetch(`${API_URL}/todos/${id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ completed: true })
    });
    const updatedTodo = await response.json();
}
```

### Supprimer une tâche

```javascript
async function deleteTodo(id) {
    const response = await fetch(`${API_URL}/todos/${id}`, {
        method: 'DELETE'
    });
}
```

## 🔍 Debug

Pour voir les logs dans la console du navigateur :
- Ouvre les DevTools (F12)
- Va dans l'onglet Console

Pour voir les logs du serveur :
- Regarde la console où tu as lancé `node server.js`

Bon code ! 🚀
