// Configuration des villes avec leurs coordonnées
const CITIES = [
    { name: 'Paris', lat: 48.8534, long: 2.3488 },
    { name: 'Lyon', lat: 45.75, long: 4.85 },
    { name: 'Nantes', lat: 47.2173, long: -1.5534 },
    { name: 'Marseille', lat: 43.3, long: 5.4 },
    { name: 'Lille', lat: 50.633333, long: 3.066667 }
];

/**
 * Récupère les données météo pour une ville donnée
 * @param {Object} city - Objet contenant name, lat et long
 * @returns {Promise<Object>} - Données météo formatées
 */
const fetchCityWeather = async (city) => {
    try {
        const url = `https://api.open-meteo.com/v1/forecast?latitude=${city.lat}&longitude=${city.long}&current=temperature_2m,rain`;
        const response = await fetch(url);
        
        if (!response.ok) {
            throw new Error(`Erreur HTTP: ${response.status}`);
        }
        
        const data = await response.json();
        
        return {
            name: city.name,
            temperature: data.current.temperature_2m,
            rain: data.current.rain
        };
    } catch (error) {
        console.error(`Erreur pour ${city.name}:`, error);
        return {
            name: city.name,
            temperature: 'N/A',
            rain: 'N/A',
            error: true
        };
    }
};

/**
 * Crée l'élément HTML pour afficher la météo d'une ville
 * @param {Object} weatherData - Données météo d'une ville
 * @returns {HTMLElement} - Élément div contenant les informations
 */
const createWeatherElement = (weatherData) => {
    const div = document.createElement('div');
    div.className = 'weather-item';
    
    const p = document.createElement('p');
    p.innerHTML = `Il y a eu <strong>${weatherData.rain}</strong> millimètres de pluie et il fait <strong>${weatherData.temperature}</strong>°C à ${weatherData.name}.`;
    
    div.appendChild(p);
    return div;
};

/**
 * Affiche les données météo de toutes les villes
 */
const displayWeather = async () => {
    const weatherList = document.getElementById('weather-list');
    weatherList.innerHTML = '<div class="loading">Chargement des données météo...</div>';
    
    try {
        // Récupère les données de toutes les villes en parallèle
        const weatherPromises = CITIES.map(city => fetchCityWeather(city));
        const weatherData = await Promise.all(weatherPromises);
        
        // Efface le message de chargement
        weatherList.innerHTML = '';
        
        // Affiche chaque ville
        weatherData.forEach(data => {
            const element = createWeatherElement(data);
            weatherList.appendChild(element);
        });
        
    } catch (error) {
        console.error('Erreur lors du chargement:', error);
        weatherList.innerHTML = '<div class="error">Erreur lors du chargement des données météo.</div>';
    }
};

// Démarre l'application
displayWeather();