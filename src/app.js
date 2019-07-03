const tableHeaders = ["TITLE", "AUTHOR", "PAGES", "READ", "DELETE"];

function saveLibrary() {
  localStorage.setItem("library", JSON.stringify(myLibrary));
}

function getLibrary() {
  let data = localStorage.getItem("library")
    ? JSON.parse(localStorage.getItem("library"))
    : [];
  if (data) {
    data.forEach(book => {
      book.__proto__ = Book.prototype;
    });
  }
  return data;
}

class Book {
  constructor(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = false;
  }
  toggleRead() {
    this.read = this.read ? false : true;
  }
}

function createBook() {
  let author = document.getElementById("author").value;
  let title = document.getElementById("title").value;
  let pages = document.getElementById("pages").value;

  return new Book(author, title, pages);
}

function updateChanges() {
  saveLibrary();
  clearTable();
  render();
}

function addBookToLibrary(book) {
  myLibrary.push(book);
  updateChanges();
}

function removeBook(index) {
  myLibrary.splice(index, 1);
  updateChanges();
}

function clearTable() {
  let library = document.getElementById("book-table");
  while (library.firstChild) {
    library.removeChild(library.firstChild);
  }
}

function render() {
  let bookList = document.getElementById("book-table");
  let bookHeader = document.createElement("tr");

  tableHeaders.forEach(header => {
    th = document.createElement("th");
    th.innerHTML = header;
    bookHeader.appendChild(th);
  });
  bookList.appendChild(bookHeader);

  myLibrary.forEach((book, id) => {
    let bookInfo = document.createElement("tr");
    let bookKeys = Object.keys(book);
    bookKeys.push("delete");
    bookKeys.forEach(key => {
      let entry = document.createElement("td");
      if (key == "delete") {
        entry.innerHTML = `<button class="remove-book-btn">Remove</button>`;
        entry.setAttribute("data-id", id);
        entry.addEventListener("click", function() {
          removeBook(entry.dataset.id);
        });
      } else if (key == "read") {
        entry.innerHTML = book.read ? "YES" : "NO";
        entry.style.color = book.read ? "green" : "red";
        entry.classList.add("read-btn");
        entry.addEventListener("click", function() {
          book.toggleRead();
          updateChanges();
        });
      } else {
        entry.innerHTML = book[key];
      }
      bookInfo.appendChild(entry);
    });

    bookList.appendChild(bookInfo);
  });
}

let myLibrary = getLibrary();

render();

function hideModal() {
  let modal = document.getElementById("modal-box");
  modal.style.display = "none";
}

function showModal() {
  let modal = document.getElementById("modal-box");
  modal.style.display = "block";
}

let addBtn = document.getElementById("modal-btn");
addBtn.addEventListener("click", function() {
  showModal();
});

let closeBtn = document.querySelector(".close-modal");
closeBtn.addEventListener("click", function() {
  hideModal();
});

let addBook = document.querySelector(".form-box");
addBook.addEventListener("submit", function(event) {
  event.preventDefault();
  let book = createBook();
  addBookToLibrary(book);
  hideModal();
});
