// Variable pour compter les clics
let count = 0;

// Ajoute un gestionnaire d'événement au bouton avec l'id "counter"
// A chaque clic, on incrémente la variable count, puis on met à jour le texte du bouton
// counter.onclick = () => (counter.textContent = ++count + " clics!");

const myButton = document.getElementById ("counter");
// const myButton = document.querySelector ("#counter");

// myButton.addEventListener("click", () => {
    // count ++;

// });


function clickCount() {
    count ++;
    myButton.innerText = `${count} clics !`

}
