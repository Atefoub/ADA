// Ecris avec des mots ce que fais le code puis lis ta phrase à un encadrant :

//     int tmp = 15;

//     if (tmp < 0)
//         printf("Freezing weather.");
//     else if (tmp < 10)
//         printf("Very cold weather.");
//     else if (tmp < 20)
//         printf("Cold weather.");   .
//     else if (tmp < 30)
//         printf("Normal in temp.");
//     else if (tmp < 40)
//         printf("Its Hot.");
//     else
//         printf("Its very hot.");
// Ré-écris ce code en javascript en utilisant des IF/ELSE etc. Puis en utilisant un switch case.

// Ce code catégorise la température en fonction du degré.
// il éxécute les conditions de haut en bas.
// Si la température est négative il indique "Freezing weather"
// Si la température est inférieur à 10°C il affiche "Very cold weather"
// Si la température est inférieur à 20°C il affiche "Cold weather"
// Si la température est inférieur à 30°C il affiche "Normal in temp"
// Si la température est inférieur à 40°C il affiche "Its Hot."
// sinon il affiche "Its very hot."

let tmp = 10;

if (tmp < 0) {
  console.log("Freezing weather.");
} else if (tmp < 10) {
  console.log("Very cold weather");
} else if (tmp < 20) {
  console.log("cold weather");
} else if (tmp < 30) {
  console.log("Normal in temp");
} else if (tmp < 40) {
  console.log("Its Hot");
} else {
  console.log("Its very hot");
}

// SWITCH CASE

let tmp = 12;

switch (true) {
  case tmp < 0:
    console.log("Freezing weather.");
    break;
  case tmp < 10:
    console.log("Very cold weather");
    break;
  case tmp < 20:
    console.log("Cold weather");
    break;
  case tmp < 30:
    console.log("normal in temp");
    break;
  case tmp < 40:
    console.log("Its Hot");
    break;
  default:
    console.log("Its very Hot");
}
