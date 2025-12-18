const openModalBtn = document.querySelectorAll(".btn--ticket");
const modal = document.getElementById("ticketModal");
const closeModalBtn = document.getElementById("closeModal");

openModalBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    modal.classList.add("show");
  });
});

closeModalBtn.addEventListener("click", () => {
  modal.classList.remove("show");
});

modal.querySelector(".modal__overlay").addEventListener("click", () => {
  modal.classList.remove("show");
});
