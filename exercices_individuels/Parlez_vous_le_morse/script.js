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
