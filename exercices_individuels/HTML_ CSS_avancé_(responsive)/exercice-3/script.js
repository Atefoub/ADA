document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("emailForm");
  const input = document.getElementById("emailInput");
  const icon = document.getElementById("errorIcon");
  const message = document.getElementById("errorMessage");

  const showError = msg => {
    input.classList.add("error");
    icon.classList.add("show");
    message.textContent = msg;
    message.classList.add("show");
  };

  const hideError = () => {
    input.classList.remove("error");
    icon.classList.remove("show");
    message.textContent = "";
    message.classList.remove("show");
  };

  const isValidEmail = email =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  form.addEventListener("submit", e => {
    e.preventDefault();
    const email = input.value.trim();

    if (!email) {
      showError("Email address cannot be empty");
      return; 
    }
    
    if (!isValidEmail(email)) {
      showError("Please provide a valid email");
      return;
    }

    hideError();
    alert("Thank you! Your email has been submitted successfully.");
    input.value = "";
  });

  input.addEventListener("input", hideError);
});