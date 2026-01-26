// Vérifie si un pattern de jonglage est valide en analysant la réponse HTML
async function isValidPattern(pattern) {
  try {
    const url = `https://jugglinglab.org/anim?pattern=${encodeURIComponent(pattern)}`;
    const response = await fetch(url);
    
    if (!response.ok) {
      return { valid: false, error: 'Erreur réseau' };
    }
    
    const html = await response.text();
    
    if (html.includes('Oops!')) {
      // Extraire le message d'erreur
      const errorMatch = html.match(/encountered an error[^:]*:\s*([^<]+)/i);
      const errorMessage = errorMatch ? errorMatch[1].trim() : 'Pattern invalide';
      
      return { valid: false, error: errorMessage };
    }
    
    // Si pas d'erreur, le pattern est valide
    return { valid: true, error: null };
    
  } catch (error) {
    console.error(`Erreur lors de la vérification du pattern "${pattern}":`, error);
    return { valid: false, error: 'Erreur de connexion' };
  }
}

// Teste plusieurs patterns et affiche les résultats détaillés

async function testPatterns() {
  console.log('Test de validation des patterns de jonglage...\n');
  
  const patternsToTest = [
    '3',
    '441',
    '531',
    '97531',
    '423',
    'xyz',
    'R5xL5L5xL5xR5R5x',
    '',
    '5',
    '55500',
  ];
  
  for (const pattern of patternsToTest) {
    const result = await isValidPattern(pattern);
    const displayPattern = pattern === '' ? '(vide)' : pattern;
    
    if (result.valid) {
      console.log(`✓ VALIDE   - Pattern: "${displayPattern}"`);
    } else {
      console.log(`✗ INVALIDE - Pattern: "${displayPattern}"`);
      console.log(`           → ${result.error}\n`);
    }
  }
}

// Exemple d'utilisation avec validation avant affichage
async function displayPatternIfValid(pattern) {
  console.log(`Vérification du pattern "${pattern}"...`);
  
  const result = await isValidPattern(pattern);
  
  if (result.valid) {
    console.log(`✓ Pattern valide !`);
    console.log(`  URL: https://jugglinglab.org/anim?pattern=${pattern}\n`);
    return true;
  } else {
    console.log(`✗ Pattern invalide : "${pattern}"`);
    console.log(`  Erreur: ${result.error}\n`);
    return false;
  }
}

// Lancer les tests
testPatterns();

// Tester des patterns spécifiques
displayPatternIfValid('441');
displayPatternIfValid('R5xL5L5xL5xR5R5x');