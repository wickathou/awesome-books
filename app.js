let books = [];
const storedBooks = JSON.parse(localStorage.getItem('local-books'));
const addButton = document.getElementById('add');
const newBookTitle = document.getElementById('title');
const newBookAuthor = document.getElementById('author');
const bookList = document.getElementById('book-list');

function bookElement(bookData) {
  const bookItem = document.createElement('li');
  bookItem.id = `${bookData.id}`;
  const bookItemTitle = document.createElement('h2');
  bookItemTitle.textContent = bookData.title;
  const bookItemAuthor = document.createElement('h3');
  bookItemAuthor.textContent = bookData.author;
  const bookRemoveButton = document.createElement('button');
  bookRemoveButton.textContent = 'Remove';
  bookRemoveButton.id = `button-${bookData.id}`;
  bookItem.append(bookItemTitle, bookItemAuthor, bookRemoveButton);
  bookList.appendChild(bookItem);
}

function newBookItem() {
  const book = addBook(newBookTitle.value, newBookAuthor.value);
  bookElement(book);
}

function Book(title, author, id) {
  this.title = title;
  this.author = author;
  this.id = id;
}

// adding books
function addBook(title, author) {
  const book = new Book(title, author, books.length);
  books.push(book);
  return book;
}

// Removing books
function removeBook() {
  
}

if (storedBooks) {
  books = storedBooks;
  books.forEach(book => {
    bookElement(book)
  });
}

addButton.addEventListener(('click'), ((e) => {
  e.preventDefault();
  newBookItem();
  localStorage.setItem('local-books', JSON.stringify(books));
}));