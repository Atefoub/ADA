const form = document.getElementById('email-form');
const emailInput = document.getElementById('email');
const errorIcon = document.querySelector('.error-icon');
const errorMessage = document.querySelector('.error-message');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const email = emailInput.value.trim();
  const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  if (email === '' || !isValidEmail) {
    emailInput.classList.add('error');
    errorIcon.classList.remove('hidden');
    errorMessage.classList.remove('hidden');
    emailInput.setAttribute('aria-invalid', 'true');
  } else {
    emailInput.classList.remove('error');
    errorIcon.classList.add('hidden');
    errorMessage.classList.add('hidden');
    emailInput.removeAttribute('aria-invalid');
    alert('Merci ! Votre email a bien été enregistré.');
    emailInput.value = '';
  }
});