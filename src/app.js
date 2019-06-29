const modal = document.getElementById("modal-box");
const modalButton = document.getElementById("modal-btn");
const closeModalBtn = document.getElementsByClassName("close-modal")[0];

const title = document.getElementById("title").value;
const author = document.getElementById("author").value;
const pages = document.getElementById("pages").value;
const read = document.getElementById("read").value;
let read = false;

let myLibrary = [
  {
    title: "Harry Potter",
    author: "J. K. Rowling",
    pages: 254,
    read: false
  }
];

class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }
}

function addBookToLibrary(event) {}

function render() {}

function deleteBook() {}

modalButton.addEventListener("click", () => {
  modal.style.display = "block";
});

closeModalBtn.addEventListener("click", () => {
  modal.style.display = "none";
});
