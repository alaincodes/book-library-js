const modal = document.getElementById("modal-box");
const modalButton = document.getElementById("modal-btn");
const closeModalBtn = document.getElementsByClassName("close-modal")[0];

let myLibrary = [];

function Book() {}

function addBookToLibrary() {}

modalButton.addEventListener("click", () => {
  modal.style.display = "block";
});

closeModalBtn.addEventListener("click", () => {
  modal.style.display = "none";
});
