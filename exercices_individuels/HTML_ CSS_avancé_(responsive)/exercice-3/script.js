const form = document.getElementById('email-form');
const emailInput = document.getElementById('email');
const errorIcon = document.querySelector('.error-icon');
const errorMessage = document.querySelector('.error-message');
const inputGroup = document.querySelector('.input-group');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const email = emailInput.value.trim();
  const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  if (email === '' || !isValidEmail) {
    inputGroup.classList.add('error-state');
    errorIcon.classList.remove('hidden');
    errorMessage.classList.remove('hidden');
    emailInput.setAttribute('aria-invalid', 'true');
  } else {
    inputGroup.classList.remove('error-state');
    errorIcon.classList.add('hidden');
    errorMessage.classList.add('hidden');
    emailInput.removeAttribute('aria-invalid');
    alert('Merci ! Votre email a bien été enregistré.');
    emailInput.value = '';
  }
});