// Configuration de l'API
const API_URL = 'http://localhost:3000/api';

// État de l'application
let currentFilter = 'all';
let todos = [];

// Éléments du DOM
const statusIndicator = document.getElementById('status-indicator');
const statusText = document.getElementById('status-text');
const todoInput = document.getElementById('todo-input');
const addBtn = document.getElementById('add-btn');
const todoList = document.getElementById('todo-list');
const todoCount = document.getElementById('todo-count');
const clearCompletedBtn = document.getElementById('clear-completed');
const filterBtns = document.querySelectorAll('.filter-btn');
const loadingEl = document.getElementById('loading');
const errorMessageEl = document.getElementById('error-message');

// ============================================
// Fonctions utilitaires
// ============================================

function showLoading() {
    loadingEl.classList.remove('hidden');
}

function hideLoading() {
    loadingEl.classList.add('hidden');
}

function showError(message) {
    errorMessageEl.textContent = `❌ ${message}`;
    errorMessageEl.classList.remove('hidden');
    setTimeout(() => {
        errorMessageEl.classList.add('hidden');
    }, 5000);
}

function updateStatus(status, text) {
    statusIndicator.className = `status-dot ${status}`;
    statusText.textContent = text;
}

function updateTodoCount() {
    const activeTodos = todos.filter(todo => !todo.completed).length;
    todoCount.textContent = `${activeTodos} tâche(s) active(s)`;
}

// ============================================
// Fonctions API avec fetch()
// ============================================

async function checkAPIStatus() {
    try {
        const response = await fetch(`${API_URL}/status`);
        if (response.ok) {
            updateStatus('connected', 'API connectée ✅');
            return true;
        } else {
            updateStatus('error', 'API inaccessible ❌');
            return false;
        }
    } catch (error) {
        updateStatus('error', 'API inaccessible ❌');
        console.error('Erreur de connexion:', error);
        return false;
    }
}

async function fetchTodos() {
    showLoading();
    try {
        const response = await fetch(`${API_URL}/todos`);
        
        if (!response.ok) {
            throw new Error(`Erreur ${response.status}: ${response.statusText}`);
        }
        
        const data = await response.json();
        todos = data.todos || data || [];
        renderTodos();
        updateTodoCount();
        hideLoading();
        
    } catch (error) {
        hideLoading();
        showError('Impossible de charger les tâches');
        console.error('Erreur lors du chargement:', error);
        renderEmptyState();
    }
}

async function addTodo(text) {
    try {
        const response = await fetch(`${API_URL}/todos`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ text })
        });
        
        if (!response.ok) {
            throw new Error(`Erreur ${response.status}`);
        }
        
        const newTodo = await response.json();
        todos.push(newTodo.todo || newTodo);
        renderTodos();
        updateTodoCount();
        todoInput.value = '';
        
        console.log('✅ Todo ajouté:', newTodo);
        
    } catch (error) {
        showError('Impossible d\'ajouter la tâche');
        console.error('Erreur lors de l\'ajout:', error);
    }
}

async function toggleTodo(id) {
    try {
        const todo = todos.find(t => t.id === id);
        
        const response = await fetch(`${API_URL}/todos/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ 
                completed: !todo.completed 
            })
        });
        
        if (!response.ok) {
            throw new Error(`Erreur ${response.status}`);
        }
        
        const updatedTodo = await response.json();
        const index = todos.findIndex(t => t.id === id);
        if (index !== -1) {
            todos[index] = updatedTodo.todo || updatedTodo;
        }
        
        renderTodos();
        updateTodoCount();
        
        console.log('✅ Todo mis à jour:', updatedTodo);
        
    } catch (error) {
        showError('Impossible de modifier la tâche');
        console.error('Erreur lors de la modification:', error);
    }
}

async function deleteTodo(id) {
    try {
        const response = await fetch(`${API_URL}/todos/${id}`, {
            method: 'DELETE'
        });
        
        if (!response.ok) {
            throw new Error(`Erreur ${response.status}`);
        }
        
        todos = todos.filter(t => t.id !== id);
        renderTodos();
        updateTodoCount();
        
        console.log('✅ Todo supprimé');
        
    } catch (error) {
        showError('Impossible de supprimer la tâche');
        console.error('Erreur lors de la suppression:', error);
    }
}

async function clearCompleted() {
    const completedTodos = todos.filter(t => t.completed);
    
    if (completedTodos.length === 0) {
        return;
    }
    
    try {
        const promises = completedTodos.map(todo => 
            fetch(`${API_URL}/todos/${todo.id}`, { method: 'DELETE' })
        );
        
        await Promise.all(promises);
        todos = todos.filter(t => !t.completed);
        renderTodos();
        updateTodoCount();
        
        console.log('✅ Tâches terminées supprimées');
        
    } catch (error) {
        showError('Impossible de supprimer les tâches terminées');
        console.error('Erreur:', error);
    }
}

// ============================================
// Fonctions de rendu
// ============================================

function renderTodos() {
    let filteredTodos = todos;
    
    if (currentFilter === 'active') {
        filteredTodos = todos.filter(t => !t.completed);
    } else if (currentFilter === 'completed') {
        filteredTodos = todos.filter(t => t.completed);
    }
    
    todoList.innerHTML = '';
    
    if (filteredTodos.length === 0) {
        renderEmptyState();
        return;
    }
    
    filteredTodos.forEach(todo => {
        const li = createTodoElement(todo);
        todoList.appendChild(li);
    });
}

function createTodoElement(todo) {
    const li = document.createElement('li');
    li.className = `todo-item ${todo.completed ? 'completed' : ''}`;
    li.dataset.id = todo.id;
    
    li.innerHTML = `
        <input 
            type="checkbox" 
            class="todo-checkbox" 
            ${todo.completed ? 'checked' : ''}
        >
        <span class="todo-text">${escapeHtml(todo.text)}</span>
        <div class="todo-actions">
            <button class="btn-icon btn-delete" title="Supprimer">
                🗑️
            </button>
        </div>
    `;
    
    const checkbox = li.querySelector('.todo-checkbox');
    checkbox.addEventListener('change', () => toggleTodo(todo.id));
    
    const deleteBtn = li.querySelector('.btn-delete');
    deleteBtn.addEventListener('click', () => deleteTodo(todo.id));
    
    return li;
}

function renderEmptyState() {
    let message = '🎉 Aucune tâche';
    let emoji = '✨';
    
    if (currentFilter === 'active') {
        message = 'Aucune tâche active';
        emoji = '👏';
    } else if (currentFilter === 'completed') {
        message = 'Aucune tâche terminée';
        emoji = '📝';
    }
    
    todoList.innerHTML = `
        <div class="empty-state">
            <div class="empty-state-icon">${emoji}</div>
            <p>${message}</p>
        </div>
    `;
}

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// ============================================
// Gestionnaires d'événements
// ============================================

addBtn.addEventListener('click', () => {
    const text = todoInput.value.trim();
    if (text) {
        addTodo(text);
    }
});

todoInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        const text = todoInput.value.trim();
        if (text) {
            addTodo(text);
        }
    }
});

clearCompletedBtn.addEventListener('click', () => {
    if (confirm('Supprimer toutes les tâches terminées ?')) {
        clearCompleted();
    }
});

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentFilter = btn.dataset.filter;
        renderTodos();
    });
});

// ============================================
// Initialisation
// ============================================

async function init() {
    console.log('🚀 Initialisation du client...');
    
    const isApiAvailable = await checkAPIStatus();
    
    if (isApiAvailable) {
        await fetchTodos();
    } else {
        console.warn('⚠️ API non disponible - Mode local');
        showError('API non disponible. Veuillez démarrer le serveur.');
        renderEmptyState();
    }
}

init();

console.log('✅ Client chargé');
