// Switch between tabs
function switchTab(event, tabId) {
    const button = event.target;
    const container = button.closest('.tab-container');
    
    // Remove active class from all tabs and contents in this container
    container.querySelectorAll('.tab').forEach(tab => tab.classList.remove('active'));
    container.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
    
    // Add active class to clicked tab and corresponding content
    button.classList.add('active');
    document.getElementById(tabId).classList.add('active');
}

// Copy code to clipboard
function copyCode(button) {
    const codeBlock = button.parentElement;
    const code = codeBlock.querySelector('pre').textContent;
    
    // Replace {{baseUrl}} and {{id}} with actual values
    const baseUrl = document.getElementById('baseUrl').value;
    const apiKey = document.getElementById('apiKey').value;
    const finalCode = code
        .replace(/\{\{baseUrl\}\}/g, baseUrl)
        .replace(/postmanrulz/g, apiKey);
    
    navigator.clipboard.writeText(finalCode).then(() => {
        const originalText = button.textContent;
        button.textContent = '✓ Copié !';
        setTimeout(() => {
            button.textContent = originalText;
        }, 2000);
    }).catch(err => {
        console.error('Erreur lors de la copie:', err);
        alert('Erreur lors de la copie dans le presse-papier');
    });
}

// Test endpoint function
async function testEndpoint(method, endpoint, body = null) {
    const baseUrl = document.getElementById('baseUrl').value;
    const apiKey = document.getElementById('apiKey').value;
    
    if (!baseUrl) {
        alert('Veuillez configurer l\'URL de base de l\'API');
        return;
    }

    // Créer l'ID du container de réponse
    const responseId = 'response-' + endpoint.split('?')[0].replace(/\//g, '-').substring(1);
    const responseContainer = document.getElementById(responseId);
    const responseContent = document.getElementById(responseId + '-content');

    // Afficher un message de chargement
    responseContent.textContent = 'Chargement...';
    responseContainer.style.display = 'block';

    try {
        const options = {
            method: method,
            headers: {
                'api-key': apiKey,
                'Content-Type': 'application/json'
            }
        };

        if (body) {
            options.body = JSON.stringify(body);
        }

        const response = await fetch(baseUrl + endpoint, options);
        
        // Vérifier le type de contenu de la réponse
        const contentType = response.headers.get('content-type');
        
        if (contentType && contentType.includes('application/json')) {
            const data = await response.json();
            responseContent.textContent = JSON.stringify(data, null, 2);
        } else {
            const text = await response.text();
            responseContent.textContent = text || 'Requête réussie (pas de contenu)';
        }
        
        responseContainer.style.display = 'block';
    } catch (error) {
        responseContent.textContent = 'Erreur: ' + error.message + '\n\nAssurez-vous que l\'URL de l\'API est correcte et que l\'API est accessible.';
        responseContainer.style.display = 'block';
    }
}

// Test book by ID
async function testBookById() {
    const bookId = document.getElementById('bookIdInput').value.trim();
    
    if (!bookId) {
        alert('Veuillez entrer un ID de livre');
        return;
    }
    
    const baseUrl = document.getElementById('baseUrl').value;
    const apiKey = document.getElementById('apiKey').value;
    
    if (!baseUrl) {
        alert('Veuillez configurer l\'URL de base de l\'API');
        return;
    }

    const responseContainer = document.getElementById('response-book-id');
    const responseContent = document.getElementById('response-book-id-content');

    // Afficher un message de chargement
    responseContent.textContent = 'Chargement...';
    responseContainer.style.display = 'block';

    try {
        const response = await fetch(`${baseUrl}/books/${bookId}`, {
            method: 'GET',
            headers: {
                'api-key': apiKey
            }
        });

        const contentType = response.headers.get('content-type');
        
        if (contentType && contentType.includes('application/json')) {
            const data = await response.json();
            responseContent.textContent = JSON.stringify(data, null, 2);
        } else {
            const text = await response.text();
            responseContent.textContent = text || 'Livre non trouvé';
        }
        
        responseContainer.style.display = 'block';
    } catch (error) {
        responseContent.textContent = 'Erreur: ' + error.message + '\n\nAssurez-vous que l\'ID du livre est correct.';
        responseContainer.style.display = 'block';
    }
}

// Test checkout
async function testCheckout() {
    const bookId = document.getElementById('checkoutIdInput').value.trim();
    
    if (!bookId) {
        alert('Veuillez entrer un ID de livre');
        return;
    }

    const baseUrl = document.getElementById('baseUrl').value;
    const apiKey = document.getElementById('apiKey').value;
    
    if (!baseUrl) {
        alert('Veuillez configurer l\'URL de base de l\'API');
        return;
    }

    const responseContainer = document.getElementById('response-checkout');
    const responseContent = document.getElementById('response-checkout-content');

    // Afficher un message de chargement
    responseContent.textContent = 'Chargement...';
    responseContainer.style.display = 'block';

    try {
        const response = await fetch(`${baseUrl}/books/${bookId}`, {
            method: 'PATCH',
            headers: {
                'api-key': apiKey,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ checkedOut: true })
        });

        const contentType = response.headers.get('content-type');
        
        if (contentType && contentType.includes('application/json')) {
            const data = await response.json();
            responseContent.textContent = JSON.stringify(data, null, 2);
        } else {
            const text = await response.text();
            responseContent.textContent = text || 'Livre emprunté avec succès';
        }
        
        responseContainer.style.display = 'block';
    } catch (error) {
        responseContent.textContent = 'Erreur: ' + error.message + '\n\nAssurez-vous que l\'ID du livre est correct.';
        responseContainer.style.display = 'block';
    }
}

// Test delete
async function testDelete() {
    const bookId = document.getElementById('deleteIdInput').value.trim();
    
    if (!bookId) {
        alert('Veuillez entrer un ID de livre');
        return;
    }

    if (!confirm('Êtes-vous sûr de vouloir supprimer ce livre ? Cette action est irréversible.')) {
        return;
    }

    const baseUrl = document.getElementById('baseUrl').value;
    const apiKey = document.getElementById('apiKey').value;
    
    if (!baseUrl) {
        alert('Veuillez configurer l\'URL de base de l\'API');
        return;
    }

    const responseContainer = document.getElementById('response-delete');
    const responseContent = document.getElementById('response-delete-content');

    // Afficher un message de chargement
    responseContent.textContent = 'Chargement...';
    responseContainer.style.display = 'block';

    try {
        const response = await fetch(`${baseUrl}/books/${bookId}`, {
            method: 'DELETE',
            headers: {
                'api-key': apiKey
            }
        });

        if (response.ok) {
            const contentType = response.headers.get('content-type');
            
            if (contentType && contentType.includes('application/json')) {
                const data = await response.json();
                responseContent.textContent = JSON.stringify(data, null, 2);
            } else {
                responseContent.textContent = 'Livre supprimé avec succès';
            }
        } else {
            const contentType = response.headers.get('content-type');
            
            if (contentType && contentType.includes('application/json')) {
                const data = await response.json();
                responseContent.textContent = 'Erreur: ' + JSON.stringify(data, null, 2);
            } else {
                responseContent.textContent = `Erreur ${response.status}: ${response.statusText}`;
            }
        }
        
        responseContainer.style.display = 'block';
    } catch (error) {
        responseContent.textContent = 'Erreur: ' + error.message + '\n\nAssurez-vous que l\'ID du livre est correct.';
        responseContainer.style.display = 'block';
    }
}

// Initialisation au chargement de la page
document.addEventListener('DOMContentLoaded', function() {
    console.log('Guide API Bibliothèque chargé avec succès !');
    
    // Vérifier si les valeurs de configuration sont déjà remplies
    const baseUrl = document.getElementById('baseUrl').value;
    const apiKey = document.getElementById('apiKey').value;
    
    if (baseUrl && apiKey) {
        console.log('Configuration API détectée');
    }
});