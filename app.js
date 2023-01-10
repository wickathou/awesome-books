let books = [];
const storedBooks = JSON.parse(localStorage.getItem('local-books'));
const addButton = document.getElementById('add');
const newBookTitle = document.getElementById('title');
const newBookAuthor = document.getElementById('author');
const bookList = document.getElementById('book-list');

// DOM element creation 
function bookElement(bookData) {
  const bookItem = document.createElement('li');
  bookItem.id = `${bookData.id}`;
  const bookItemTitle = document.createElement('h2');
  bookItemTitle.textContent = bookData.title;
  const bookItemAuthor = document.createElement('h3');
  bookItemAuthor.textContent = bookData.author;
  const bookRemoveButton = document.createElement('button');
  bookRemoveButton.textContent = 'Remove';
  bookRemoveButton.classList = `button ${bookData.id}`;
  bookItem.append(bookItemTitle, bookItemAuthor, bookRemoveButton);
  bookList.appendChild(bookItem);
}

class Book {
  constructor (title, author) {
  this._title = title;
  this._author = author;
  this._id = books.length;
  }

  get title() {
    return this._title
  }

  get author() {
    return this._author
  }

  get id() {
    return this._id
  }

  get addBook() {
    books.push(this);
    return this;
  }

}

function newBookItem() {
  const book = new Book(newBookTitle.value, newBookAuthor.value);
  book.addBook;
  bookElement(book);
}

// Removing books
function remove(bookId) {
  // eslint-disable-next-line no-use-before-define
  const removedBook = books.filter(removeBook);
  function removeBook(book) {
    return book.id !== parseInt(bookId, 10);
  }
  books = removedBook;
  localStorage.setItem('local-books', JSON.stringify(removedBook));
}

bookList.addEventListener('click', ((e) => {
  if (e.target.classList[0] === 'button') {
    remove(e.target.classList[1]);
    e.target.parentElement.remove();
  }
}));

if (storedBooks) {
  books = storedBooks;
  books.forEach((book) => {
    bookElement(book);
  });
}

addButton.addEventListener(('click'), ((e) => {
  e.preventDefault();
  newBookItem();
  localStorage.setItem('local-books', JSON.stringify(books));
}));