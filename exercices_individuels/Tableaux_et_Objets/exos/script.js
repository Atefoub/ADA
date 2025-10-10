let life = 20;
let magic = 0;
let mind = 10;

// ici on fait une boucle pour représenter les 7 jours de la semaine, et on commence à 1 parce qu'on commence la semaine
for (let i = 1; i <= 7; i++) {
    let response = prompt("What do you want to do today ?"); // un prompt pour demander à l'utilisateur ce qu'il veut faire aujourd'hui

    if (response == "study") { // si la réponse est "study"
        magic += 3; // on additionne les points de magie existants à ceux que l'on vient de gagner
        mind -= 1; // on soustrait les points d'état d'esprit existants à ceux que l'on vient de gagner
        console.log(`You studied well, you have ${magic} points of magic and ${mind} points of mind`); // un petit console.log pour indiquer le résultat de ce qu'on vient de faire
    } else if (response == "duel") { // si la réponse est "duel"
        let result = Math.random(); // tire au hasard un chiffre entre 0 et 1, ce qui permet de faire une chance sur 2
        if (result > 0.5) { // si le chiffre est supérieur à 0.5 alors on estime que l'on gagne, donc on gagne 5 points de magie et 3 d'état d'esprit
            magic += 5;
            mind += 3;
            console.log(`Congrats you won ! You have now ${magic} points of magic and ${mind} points of mind`); // un petit console.log pour indiquer le résultat de ce qu'on vient de faire
        } else { // si on rentre dans le else ça veut dire qu'on a perdu, donc on perd 5 points de vie et 3 d'état d'esprit
            life -= 5; 
            mind -= 3;
            console.log(`Crap, you lost ! You have now ${life} points of life and ${mind} points of mind `); // un petit console.log pour indiquer le résultat de ce qu'on vient de faire
        }
    } else if (response == "sleep") { // si la réponse est "sleep"
        life += 5; // on additionne les points de vie existants à ceux que l'on vient de gagner
        mind += 3; // on additionne les points d'état d'esprit existants à ceux que l'on vient de gagner
        console.log(`You slept well, you have ${life}  life points and ${mind} mind points`);  // un petit console.log pour indiquer le résultat de ce qu'on vient de faire
    } else {
        console.log("You did nothing today"); // permet de gérer le cas ou l'utilisateur ne rentre aucune des 3 propositions
    }

    if (life <= 0) { // faire mourir l'utilisateur (parce que Jeanne était énervée)
        console.log("You died");
    }
} // ici la boucle se finie, donc la semaine aussi !

console.log(`Life : ${life}, magic : ${magic} and mind ${mind}`) // un petit recap de tous les points de l'utilisateur

if(magic > 10 && life > 0) { // on vérifie que nous avons assez de points de magie et que nous sommes toujuors en vie pour passer à la semaine suivante
    console.log("You passed the week")
} else { // sinon on redouble
    console.log(" You have to take  another week")
}

// Le ternaire
// condition ? uneAction : uneAutreAction
// magic > 10 ? console.log("You passed the week") : console.log(" You have to take  another week")