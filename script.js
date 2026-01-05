const form = document.getElementById('contactForm');
const emailInput = document.getElementById('email');
const errorMessage = emailInput.nextElementSibling;
const successMessage = document.getElementById('success-message');

form.addEventListener('submit', function(e) {
  e.preventDefault(); // hindra sidan från att laddas om
  let isValid = validateEmail();

  if (isValid) {
    successMessage.style.display = 'block';
   
    form.reset(); 
    emailInput.classList.remove('error');
    errorMessage.style.display = 'none';
  } else {
    successMessage.style.display = 'none';
  }
});

function validateEmail() {
  const emailValue = emailInput.value.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailValue || !emailRegex.test(emailValue)) {
    emailInput.classList.add('error');
    errorMessage.textContent = "Please enter a valid email address";
    errorMessage.style.display = 'block';
    return false;
  } else {
    emailInput.classList.remove('error');
    errorMessage.textContent = "";
    errorMessage.style.display = 'none';
    return true;
  }
}

const messageInput = document.getElementById('message');
const messageCounter = document.getElementById('message-counter');
const maxChars = 30;

messageInput.addEventListener('input', () => {
  const currentLength = messageInput.value.length;
  messageCounter.textContent = `${currentLength} / ${maxChars} characters`;

  if (currentLength >= maxChars) {
    messageCounter.classList.add('max'); 
  } else {
    messageCounter.classList.remove('max');
  }
});