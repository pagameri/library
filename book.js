let myLibrary = [
  {
    title: 'Harry Potter and the Philosopher\'s Stone',
    author: 'J.K. Rowling',
    pages: '352',
    year: 'xxxx',
    read: 'yes',
  },
  {
    title: 'One: Simple One-Pan Wonders',
    author: 'Jamie Oliver',
    pages: '312',
    year: 'xxxx',
    read: 'no',
  },
  {
    title: 'The Boy, The Mole, The Fox and The Horse',
    author: 'The Boy, The Mole, The Fox and The Horse',
    pages: '128',
    year: 'xxxx',
    read: 'no',
  },
  {
    title: 'The Da Vinci Code',
    author: 'Dan Brown',
    pages: '416',
    year: 'xxxx',
    read: 'yes',
  },
  {
    title: 'Angels and Demons',
    author: 'Dan Brown',
    pages: '572',
    year: 'xxxx',
    read: 'yes',
  },
  {
    title: 'The Ink Black Heart',
    author: 'Robert Galbraith',
    pages: '1024',
    year: 'xxxx',
    read: 'no',
  },
];

function Book(title, author, pages, year, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.year = year;
  this.read = read;
}

const table = document.querySelector('table');
const newBook = document.getElementById('new-book');
const addBook = document.getElementById('add-book');
const titleInput = document.getElementById('title');
const authorInput =  document.getElementById('author');
const pagesInput = document.getElementById('pages');
const yearInput = document.getElementById('year');
const readChkBox = document.getElementById('read');
const form = document.querySelector('form');
const deleteBookBtn = document.querySelectorAll('.delete-book');


function addBookToLibrary() {
  let book = new Book(titleInput.value, authorInput.value, pagesInput.value, yearInput.value, isRead(readChkBox));

  myLibrary.push(book);
}

function displayBooks() {
  const tableBody = document.querySelector('tbody');
  const tableHead = document.querySelector('thead');
  let headings;
  if (myLibrary.length === 0) {
    tableBody.innerHTML = "";
    tableHead.innerHTML = "";
    return;
  } else {
    headings = Object.keys(myLibrary[0]);
  }

  if (tableBody === null) {;
    dataCount = 0;
    createTable(table, myLibrary);
    createTableHead(table, headings);
  } else {
    tableBody.innerHTML = "";
    tableHead.innerHTML = "";
    dataCount = 0;
    createTable(table, myLibrary);
    createTableHead(table, headings);
  }
}

function createTable(table, array) {
  for (let element of array) {
    let row = table.insertRow();

    for (key in element) {
      let cell = row.insertCell();
      let text = document.createTextNode(element[key]);
      cell.appendChild(text);
    }
  createDelBtn(row);
  }
}

function createTableHead(table, headings) {
  let thead = table.createTHead();
  let row = thead.insertRow();
  for (let heading in headings) {
    let th = document.createElement('th');
    let text = document.createTextNode(headings[heading].charAt(0).toUpperCase() + headings[heading].slice(1));
    th.appendChild(text);
    row.appendChild(th);
  }
  let th = document.createElement('th');
  let text = document.createTextNode('Delete');
  th.appendChild(text);
  row.appendChild(th);
}

function isRead(checkbox) {
  if (readChkBox.checked) {
    return "yes";
  } else {
    return "no";
  }
}

newBook.addEventListener('click', e => {
  form.style.display = "block";
});

addBook.addEventListener('click', e => {
  addBookToLibrary();
  displayBooks();

  resetForm(titleInput, authorInput, pagesInput, yearInput, readChkBox);
  form.style.display = "none";
});


function resetForm(...inputs) {
  titleInput.value = "";
  authorInput.value = "";
  pagesInput.value = "";
  yearInput.value = "";
  readChkBox.checked = false;
}

function createDelBtn(row) {
  let cell = row.insertCell();
  let delBtn = document.createElement('button');
  delBtn.innerHTML = "Delete";
  delBtn.setAttribute('class', 'delBtn');
  cell.appendChild(delBtn);
  addDataSet(delBtn);
  delBtn.onclick = function(){deleteBook(delBtn)};
}

function deleteBook(delBtn) {
  let bookID = (delBtn.getAttribute('data-book-number'));
  myLibrary.splice(bookID, 1);
  displayBooks();
}

let dataCount = 0;

function addDataSet(button) {
  data = button.dataset;
  data.bookNumber = dataCount;
  dataCount++;
}
