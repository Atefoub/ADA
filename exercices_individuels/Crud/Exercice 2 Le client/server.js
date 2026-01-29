// server.js - Serveur API pour l'exercice 1
const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Base de données en mémoire
let todos = [
    { id: 1, text: 'Apprendre Node.js', completed: false },
    { id: 2, text: 'Créer une API REST', completed: true },
    { id: 3, text: 'Utiliser fetch()', completed: false }
];

let nextId = 4;

// ============================================
// Routes de l'API
// ============================================

// GET /api/status - Vérifier que l'API fonctionne
app.get('/api/status', (req, res) => {
    res.status(200).json({
        status: 'online',
        message: 'API is running! 🚀',
        timestamp: new Date().toISOString()
    });
});

// GET /api/todos - Récupérer toutes les tâches
app.get('/api/todos', (req, res) => {
    console.log('📖 GET /api/todos - Récupération de toutes les tâches');
    
    res.status(200).json({
        todos: todos,
        count: todos.length
    });
});

// GET /api/todos/:id - Récupérer une tâche spécifique
app.get('/api/todos/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const todo = todos.find(t => t.id === id);
    
    if (!todo) {
        console.log(`❌ GET /api/todos/${id} - Tâche non trouvée`);
        return res.status(404).json({
            error: 'Todo not found',
            id: id
        });
    }
    
    console.log(`📖 GET /api/todos/${id} - Tâche trouvée`);
    res.status(200).json({ todo });
});

// POST /api/todos - Créer une nouvelle tâche
app.post('/api/todos', (req, res) => {
    const { text } = req.body;
    
    if (!text || text.trim() === '') {
        console.log('❌ POST /api/todos - Texte manquant');
        return res.status(400).json({
            error: 'Text is required',
            message: 'Le champ "text" est obligatoire'
        });
    }
    
    if (text.length > 100) {
        console.log('❌ POST /api/todos - Texte trop long');
        return res.status(400).json({
            error: 'Text too long',
            message: 'Le texte ne peut pas dépasser 100 caractères'
        });
    }
    
    const newTodo = {
        id: nextId++,
        text: text.trim(),
        completed: false
    };
    
    todos.push(newTodo);
    
    console.log(`✅ POST /api/todos - Nouvelle tâche créée (ID: ${newTodo.id})`);
    
    res.status(201).json({
        todo: newTodo,
        message: 'Todo created successfully'
    });
});

// PATCH /api/todos/:id - Mettre à jour une tâche
app.patch('/api/todos/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const todo = todos.find(t => t.id === id);
    
    if (!todo) {
        console.log(`❌ PATCH /api/todos/${id} - Tâche non trouvée`);
        return res.status(404).json({
            error: 'Todo not found',
            id: id
        });
    }
    
    if (req.body.text !== undefined) {
        todo.text = req.body.text.trim();
    }
    
    if (req.body.completed !== undefined) {
        todo.completed = req.body.completed;
    }
    
    console.log(`✅ PATCH /api/todos/${id} - Tâche mise à jour`);
    
    res.status(200).json({
        todo: todo,
        message: 'Todo updated successfully'
    });
});

// DELETE /api/todos/:id - Supprimer une tâche
app.delete('/api/todos/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const todoIndex = todos.findIndex(t => t.id === id);
    
    if (todoIndex === -1) {
        console.log(`❌ DELETE /api/todos/${id} - Tâche non trouvée`);
        return res.status(404).json({
            error: 'Todo not found',
            id: id
        });
    }
    
    const deletedTodo = todos.splice(todoIndex, 1)[0];
    
    console.log(`🗑️ DELETE /api/todos/${id} - Tâche supprimée`);
    
    res.status(200).json({
        todo: deletedTodo,
        message: 'Todo deleted successfully'
    });
});

// Route 404
app.use((req, res) => {
    res.status(404).json({
        error: 'Route not found',
        path: req.path
    });
});

// Démarrage du serveur
app.listen(port, () => {
    console.log('='.repeat(50));
    console.log(`🚀 Serveur démarré sur http://localhost:${port}`);
    console.log('='.repeat(50));
    console.log('Routes disponibles:');
    console.log(`  GET    /api/status`);
    console.log(`  GET    /api/todos`);
    console.log(`  GET    /api/todos/:id`);
    console.log(`  POST   /api/todos`);
    console.log(`  PATCH  /api/todos/:id`);
    console.log(`  DELETE /api/todos/:id`);
    console.log('='.repeat(50));
});
