/* eslint-disable radix */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-plusplus */
/* eslint-disable no-use-before-define */
/* eslint-disable max-classes-per-file */
class Book {
  constructor(title, author, id) {
    this._title = title;
    this._author = author;
    this._id = id;
  }

  get title() {
    return this._title;
  }

  get author() {
    return this._author;
  }

  get id() {
    return this._id;
  }
}

class Books {
  constructor() {
    this.books = [];
  }

  addBook(title, author) {
    id++;
    const book = new Book(title, author, id);
    this.books.push(book);
    localStorage.setItem('local-books', JSON.stringify(this.books));
  }

  removeBook(idd) {
    this.books = this.books.filter((x) => x._id !== parseInt(idd));
    if (this.books.length === 0) {
      id = 0;
    } else {
      id = this.books[this.books.length - 1]._id;
    }
    localStorage.setItem('local-books', JSON.stringify(this.books));
  }
}

const addButton = document.getElementById('add');
const newBookTitle = document.getElementById('title');
const newBookAuthor = document.getElementById('author');
const bookList = document.getElementById('book-list');

const storedBooks = JSON.parse(localStorage.getItem('local-books'));
let id = 0;
const allBooks = new Books();

if (storedBooks?.length > 0) {
  id = storedBooks[storedBooks.length - 1]._id;
  allBooks.books = storedBooks;
  allBooks.books.forEach((x) => {
    bookElement(x);
  });
}

// DOM element creation
function bookElement(bookData) {
  const bookItem = document.createElement('li');
  bookItem.id = `${bookData._id}`;
  bookItem.classList = 'books';
  const div = document.createElement('div');
  div.classList = 'books-info-div';
  const bookItemTitle = document.createElement('h2');
  bookItemTitle.textContent = `"${bookData._title}" by`;
  const bookItemAuthor = document.createElement('h3');
  bookItemAuthor.textContent = bookData._author;
  bookItemAuthor.classList = 'book-author';
  const bookRemoveButton = document.createElement('button');
  bookRemoveButton.textContent = 'Remove';
  bookRemoveButton.classList = `button ${bookData.id}`;
  div.append(bookItemTitle, bookItemAuthor);
  bookItem.append(div, bookRemoveButton);
  bookList.appendChild(bookItem);
}

// Remove button , removes book
bookList.addEventListener('click', ((e) => {
  if (e.target.classList[0] === 'button') {
    allBooks.removeBook(e.target.parentElement.id);
    e.target.parentElement.remove();
  }
}));

// Add button adds an itme
addButton.addEventListener(('click'), ((e) => {
  e.preventDefault();
  if (newBookAuthor.value && newBookTitle.value) {
    const newBookTitle = document.getElementById('title');
    const newBookAuthor = document.getElementById('author');
    allBooks.addBook(newBookTitle.value, newBookAuthor.value);
    bookElement({ _title: newBookTitle.value, _author: newBookAuthor.value, _id: id });
    newBookAuthor.value = '';
    newBookTitle.value = '';
  }
}));

const bookStored = document.querySelector('.books-stored')
const booksAdd = document.querySelector('.books-add')
const contactForm = document.querySelector('.contact-form')

document.querySelector('.nav').addEventListener('click',((e)=>{
  if (e.target.innerText === 'List'){
    bookStored.classList.add('books-stored-appear') 
    booksAdd.classList.add('books-add-disappear')
    contactForm.classList.add('contact-form-disappear')
    console.log(bookStored);
  }
  if (e.target.innerText === 'Add new'){
    bookStored.classList.remove('books-stored-appear')
    booksAdd.classList.remove('books-add-disappear')
    contactForm.classList.add('contact-form-disappear')
  }
  if (e.target.innerText === 'Contact'){
    bookStored.classList.remove('books-stored-appear')
    booksAdd.classList.add('books-add-disappear')
    contactForm.classList.remove('contact-form-disappear')
  }
}))