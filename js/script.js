const contactForm = document.querySelector(".contact__form");
const contactName = document.getElementById("contactName");
const contactEmail = document.getElementById("email");
const message = document.getElementById("message");

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const errorEl =
    document.getElementById("contactError") || createErrorEl(contactForm);

  if (!contactName.value.trim()) {
    errorEl.textContent = "Ім'я не може бути пустим!";
  } else if (!isValidEmail(contactEmail.value)) {
    errorEl.textContent = "Введіть правильний email!";
  } else if (!message.value.trim()) {
    errorEl.textContent = "Повідомлення не може бути пустим!";
  } else {
    errorEl.textContent = "Форма успішно надіслана!";
    contactForm.reset();
  }
});

function createErrorEl(form) {
  const div = document.createElement("div");
  div.id = "contactError";
  div.style.color = "#f82b56";
  div.style.marginTop = "10px";
  form.appendChild(div);
  return div;
}

const ticketForm = document.querySelector(".modal__form");
const ticketName = document.getElementById("ticketName");
const ticketEmail = document.getElementById("ticketEmail");
const tickets = document.getElementById("tickets");
const ticketError = document.getElementById("ticketError");

ticketForm.addEventListener("submit", (e) => {
  e.preventDefault();

  if (!ticketName.value.trim()) {
    ticketError.textContent = "Ім'я не може бути пустим!";
  } else if (!isValidEmail(ticketEmail.value)) {
    ticketError.textContent = "Введіть правильний email!";
  } else if (!tickets.value || tickets.value < 1) {
    ticketError.textContent = "Вкажіть кількість квитків!";
  } else {
    ticketError.textContent = "Форма успішно надіслана!";
    ticketForm.reset();
  }
});

function isValidEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}
