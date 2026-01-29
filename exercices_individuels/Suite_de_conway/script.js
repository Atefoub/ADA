function decritChaine(chaine) {
    let resultat = "";
    let count = 1;

    for (let i = 1; i <= chaine.length; i++) {
        if (chaine[i] === chaine[i - 1]) {
            count++;
        } else {
            resultat += count + chaine[i - 1];
            count = 1;
        }
    }
    return resultat;
}

function suiteConway(carac, n) {
    let resultatDiv = document.getElementById('resultat');
    resultatDiv.innerHTML += `<div>${carac}</div>`;
    
    for (let i = 0; i < n; i++) {
        carac = decritChaine(carac);
        resultatDiv.innerHTML += `<div>${carac}</div>`;
    }
}

suiteConway("1", 10);