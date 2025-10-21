// Etape 1 : fonction getLatinCharacterList

const latinToMorse = {
  A: ".-",
  B: "-...",
  C: "-.-.",
  D: "-..",
  E: ".",
  F: "..-.",
  G: "--.",
  H: "....",
  I: "..",
  J: ".---",
  K: "-.-",
  L: ".-..",
  M: "--",
  N: "-.",
  O: "---",
  P: ".--.",
  Q: "--.-",
  R: ".-.",
  S: "...",
  T: "-",
  U: "..-",
  V: "...-",
  W: ".--",
  X: "-..-",
  Y: "-.--",
  Z: "--..",
};

function getLatinCharacterList(text) {
  return text.split("");
}

console.log("getLatinCharacterList", getLatinCharacterList("hello, world"));

// Etape 2 : fonction translateLatinCharacter

function translateLatinCharacter(character) {
  return latinToMorse[character.toUpperCase()];
}

console.log("translateLatinCharacter", translateLatinCharacter("a"));

// Étape 3
// Ajouter une nouvelle fonction encode qui prend en paramètre du texte et qui va utiliser la fonction de l’étape 1,
//  pour chaque caractère, appliquer la fonction de l’étape 2 et ainsi récupérer son équivalent morse.
// Attention: la table de correspondance ne contient que des caractères majuscules.

function encode(text) {
  const characters = getLatinCharacterList(text);
  const morseList = characters.map(char => translateLatinCharacter(char));
  return morseList.filter(Boolean).join(" ");
}

console.log("encode", encode("hello, world"));



// Étape 4
// Vous trouverez en annexe 2 le dictionnaire de correspondance inversé. Ajoutez-le à votre code, et appliquez les procédés similaire à ce qui a été fait pour le encode pour créer une fonction decode. Dans cet exercice, on admettra que les lettres en morse sont séparées par un espace, et les mots par des “/” (slash).

// Ainsi, créer la fonction getMorseCharacterList ainsi que translateMorseCharacter.
