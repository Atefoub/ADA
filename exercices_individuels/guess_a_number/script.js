let min = 0;
let max = 50;
let attempts = 0;
let targetNumber;
let gameOver = false;

// Étape 4 : joueur 1 choisit le nombre à deviner
function setTargetNumber() {
  let input;
  do {
    input = prompt("Joueur 1 : Choisissez un nombre entre 0 et 50");
    targetNumber = parseInt(input);
  } while (isNaN(targetNumber) || targetNumber < 0 || targetNumber > 50);
}

function didIWin(givenNumber, target) {
  if (givenNumber === target) {
    return "win";
  } else if (givenNumber < target) {
    return "higher";
  } else {
    return "lower";
  }
}

function updateRange(givenNumber) {
  if (givenNumber > min && givenNumber < targetNumber) {
    min = givenNumber;
  } else if (givenNumber < max && givenNumber > targetNumber) {
    max = givenNumber;
  }
  document.getElementById("range-display").textContent = `${min} < ? < ${max}`;
}

function showFeedback(result) {
  const feedback = document.getElementById("feedback");
  if (result === "higher") {
    feedback.textContent = "Plus grand 🔼";
  } else if (result === "lower") {
    feedback.textContent = "Plus petit 🔽";
  } else {
    feedback.textContent = "";
  }
}

function endGame() {
  document.getElementById("win-message").classList.remove("hidden");
  document.getElementById("guess-input").disabled = true;
  document.getElementById("submit-btn").disabled = true;
}

function gamePlay() {
  const input = document.getElementById("guess-input");
  const value = parseInt(input.value);

  if (isNaN(value)) {
    alert("Veuillez entrer un nombre valide !");
    return;
  }

  if (value <= min || value >= max) {
    alert(`Le nombre doit être entre ${min} et ${max}`);
    return;
  }

  attempts++;
  document.getElementById("attempts").textContent = `Tentatives : ${attempts}`;

  const result = didIWin(value, targetNumber);
  if (result === "win") {
    endGame();
  } else {
    updateRange(value);
    showFeedback(result);
  }

  input.value = "";
}

// Initialisation
setTargetNumber();
document.getElementById("submit-btn").addEventListener("click", gamePlay);