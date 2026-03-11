# 📚 LibraryApp

![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Status](https://img.shields.io/badge/Status-Complete-brightgreen?style=for-the-badge)

A simple browser-based Library App built with vanilla HTML, CSS and JavaScript — created as part of [The Odin Project](https://www.theodinproject.com/) curriculum.

---

## ✨ Features

- 📖 Add books with title, author, page count and read status
- 🗑️ Delete books from the library
- 🔄 Toggle read/not read status for each book
- 🪪 Each book gets a unique ID using `crypto.randomUUID()`
- 💬 Dialog-based form for adding books
- 📱 Clean responsive UI

---

## 🧠 Concepts Practiced

This project was built to practice and solidify the following JavaScript concepts:

| Concept | How it was used |
|---|---|
| Object Constructors | `Book()` constructor to create book objects |
| Prototypal Inheritance | `Book.prototype.changeStatus()` shared method |
| DOM Manipulation | Dynamically creating and removing table rows |
| Event Listeners | Button clicks, form submission |
| `event.preventDefault()` | Preventing default form submission behaviour |
| Data Attributes | Linking DOM elements to book objects via `data-id` |
| Array methods | `filter()` to delete, `find()` to locate books |
| `crypto.randomUUID()` | Generating unique stable IDs for each book |

---

## 🚀 How to Use

1. Clone the repository:
```bash
git clone https://github.com/srikardh/LibraryApp.git
```

2. Open `MyLibrary.html` in your browser — no build tools or dependencies needed!

3. Use the **Add Book** button to add books to your library
4. Use **Change Read Status** to toggle between Read / Not Read
5. Use **Delete** to remove a book

---

## 📁 Project Structure

```
LibraryApp/
├── MyLibrary.html   # Main HTML structure
├── Books.js         # JavaScript logic
└── Stylesheet.css   # Styling
```

---

## 🛣️ What I Learned

This was my first project combining JavaScript constructors, prototypes and DOM manipulation together. Key takeaways:

- The difference between storing data in an array vs directly in the DOM
- Why prototype methods are more memory efficient than defining methods inside constructors
- How `event.preventDefault()` works with form submissions
- How `data-attributes` link DOM elements back to JS objects

---

## 🔮 Future Improvements

- [ ] Persist data using `localStorage` so books survive page refresh
- [ ] Add search and filter functionality
- [ ] Make the UI fully responsive on mobile
- [ ] Add form validation

---

## 👤 Author

**Srikar** — learning web development through [The Odin Project](https://www.theodinproject.com/)

> *"The best way to learn is to build."*
