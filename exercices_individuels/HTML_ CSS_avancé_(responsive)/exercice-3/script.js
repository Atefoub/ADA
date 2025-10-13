const form = document.getElementById('email-form');
const emailInput = document.getElementById('email');
const errorMessage = document.getElementById('error-message');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  const email = emailInput.value.trim();

  const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  if (!isValidEmail) {
    errorMessage.style.display = 'block';
    emailInput.style.borderColor = 'hsl(0, 93%, 68%)';
  } else {
    errorMessage.style.display = 'none';
    emailInput.style.borderColor = 'hsl(0, 36%, 70%)';
    alert('Merci ! Vous serez informé du lancement.');
    emailInput.value = '';
  }
});