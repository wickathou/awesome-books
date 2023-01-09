let books = [];


function newBook(title, author) {
  this.title = title;
  this.author = author;
}

// adding books
function addBook(title, author) {
  books.push(new newBook(title, author));
}

// Removing books
function removeBook() {
  
}



// Testing 

addBook('Other book', 'Jane Jones');
addBook('Other book', 'Jane Jones');
addBook('Other book', 'Jane Jones');
addBook('Other book', 'Jane Jones');
console.log(books);

