const firstname = prompt("Quel est ton prénom ?");

function sayHello(firstname, hour) {
  let message;
  if (hour >= 18) {
    message = `Bonsoir ${firstname} !`;
  } else {
    message = `Bonjour ${firstname} !`;
  }

  document.querySelector("h1").innerText = message;
}

const currentHour = new Date().getHours();
sayHello(firstname, currentHour);
