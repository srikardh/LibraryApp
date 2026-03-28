let myLibrary = [];
myLibrary = (JSON.parse(localStorage.getItem("myLibrary")) || []).map(book => {
    const b = new Book(book.title, book.author, book.pages, book.status);
    b.id = book.id;
    return b;
})

function Book(title, author, pages, status) {
    if (!new.target) {
        console.log("Use new to create a Book object");
    }
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
    this.id = crypto.randomUUID();
}

Book.prototype.changeStatus = function () {
    if (this.status === "Read")
        this.status = "Not Read";
    else
        this.status = "Read";
}

function addBookToLibrary(title, author, pages, status) {
    const book = new Book(title, author, pages, status);

    myLibrary.push(book);
    localStorage.setItem("myLibrary", JSON.stringify(myLibrary));
}

function displayBooks() {
    const tbody = document.getElementById("book-list");
    tbody.innerHTML = "";

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
        const tdDeleteBook = document.createElement("td");
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.classList.add("delete-btn");
        deleteBtn.addEventListener("click", () => {
            const bookId = tr.dataset.id;
            myLibrary = myLibrary.filter(book => {
                return book.id !== bookId; //filter
            });
            displayBooks();
            localStorage.setItem("mylibrary", JSON.stringify(myLibrary));

        })
        const tdChangeStatus = document.createElement("td");
        const changeStatusBtn = document.createElement("button");
        changeStatusBtn.textContent = "Change Read Status";
        changeStatusBtn.classList.add("status-btn");
        changeStatusBtn.addEventListener("click", () => {
            const bookId = tr.dataset.id;
            const book = myLibrary.find(book => book.id === bookId); //find
            book.changeStatus();
            displayBooks();
            localStorage.setItem("mylibrary", JSON.stringify(myLibrary));

        })
        tdChangeStatus.appendChild(changeStatusBtn);
        tdDeleteBook.appendChild(deleteBtn);
        tr.append(tdTitle);
        tr.append(tdAuthor);
        tr.append(tdPages);
        tr.append(tdStatus);
        tr.append(tdDeleteBook);
        tr.append(tdChangeStatus);
        tbody.append(tr);
    });
}

const addBookBtn = document.getElementById("add-book-btn");
const dialog = document.getElementById("book-dialog");
const form = document.getElementById("book-form");
const cancelbtn = document.getElementById("cancel-btn");
addBookBtn.addEventListener("click", () => {
    dialog.showModal();
});
cancelbtn.addEventListener("click", () => {
    dialog.close();
})

form.addEventListener("submit", submitForm);
function submitForm(event) {
    event.preventDefault();
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const pages = document.getElementById("pages").value;
    const status = document.getElementById("status").value;
    // const formData = new FormData(event); // we don't have to use document.getElementById everytime. Because we have event object which has event type, target, and preventDefault();
    // const title = formData.get("title");
    // const author = formData.get("author");
    // const pages = formData.get("pages");
    // const status = formData.get("status");
    addBookToLibrary(title, author, pages, status);
    displayBooks();
    form.reset();
    dialog.close();
}

console.log(myLibrary);
