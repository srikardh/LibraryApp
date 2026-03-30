let myLibrary = [];

class Book {
    constructor(title, author, pages, status) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.status = status;
        this.id = crypto.randomUUID();
    }

    changeStatus() {
        if (this.status === "Read") {
            this.status = "Not Read";
        } else {
            this.status = "Read";
        }
    }
}

function addBookToLibrary(title, author, pages, status) {
    const book = new Book(title, author, pages, status);
    myLibrary.push(book);
}
function displayBooks() {
    const bookList = document.getElementById("book-list");
    bookList.innerHTML = "";
    myLibrary.forEach(book => {
        const tr = document.createElement("tr");
        tr.dataset.id = book.id;
        const tdTitle = document.createElement("td");
        tdTitle.textContent = book.title;
        const tdAuthor = document.createElement("td");
        tdAuthor.textContent = book.author;
        const tdPages = document.createElement("td");
        tdPages.textContent = book.pages;
        const tdStatus = document.createElement("td");
        tdStatus.textContent = book.status;
        const tdDeleteBtn = document.createElement("td");
        const deleteBtn = document.createElement("button");
        tdDeleteBtn.appendChild(deleteBtn);
        deleteBtn.textContent = "Delete";

        deleteBtn.addEventListener("click", () => {
            const bookId = tr.dataset.id;
            myLibrary = myLibrary.filter(book => {
                return book.id != bookId;
            });
            displayBooks();
        });

        const tdStatusBtn = document.createElement("td");
        const statusBtn = document.createElement("button");
        statusBtn.textContent = "Change Read Status";
        tdStatusBtn.appendChild(statusBtn);

        statusBtn.addEventListener("click", () => {
            const bookId = tr.dataset.id;
            const book = myLibrary.find(book => {
                return book.id === bookId;
            });
            book.changeStatus();
            displayBooks();
        });
        tr.append(tdTitle);
        tr.append(tdAuthor);
        tr.append(tdPages);
        tr.append(tdStatus);
        tr.append(tdStatusBtn);  // ACTIONS column
        tr.append(tdDeleteBtn);  // CHANGE STATUS column;
        bookList.append(tr);
    })
}

/**
 * @type {HTMLButtonElement}
 */
const addBookBtn = document.getElementById("add-book-btn");
const cancelBtn = document.getElementById("cancel-btn");
/** @type {HTMLDialogElement} */
const bookDialog = document.getElementById("book-dialog");
/** @type {HTMLFormElement} */
const bookForm = document.getElementById("book-form");

addBookBtn.addEventListener("click", () => {
    bookDialog.showModal();
});
cancelBtn.addEventListener("click", () => {
    bookDialog.close();
})

bookForm.addEventListener("submit", submitForm);
/**
 * @param {SubmitEvent} event
 */
function submitForm(event) {
    event.preventDefault();
    // const formData = new FormData(event.target);
    // const title = formData.get("title"); // formData looks up by the name not the ID.
    // const author = formData.get("author");
    // const pages = formData.get("pages");
    // const status = formData.get("status");
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const pages = document.getElementById("pages").value;
    const status = document.getElementById("status").value;
    addBookToLibrary(title, author, pages, status);
    displayBooks();
    bookForm.reset();
    bookDialog.close();
}



