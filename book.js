let myLibrary = [
  {
    count: '0',
    title: 'Harry Potter and the Philosopher\'s Stone',
    author: 'J.K. Rowling',
    pages: '352',
    year: 'xxxx',
    read: 'yes',
  },
  {
    count: '1',
    title: 'One: Simple One-Pan Wonders',
    author: 'Jamie Oliver',
    pages: '312',
    year: 'xxxx',
    read: 'no',
  },
  {
    count: '2',
    title: 'The Boy, The Mole, The Fox and The Horse',
    author: 'The Boy, The Mole, The Fox and The Horse',
    pages: '128',
    year: 'xxxx',
    read: 'no',
  },
  {
    count: '3',
    title: 'The Da Vinci Code',
    author: 'Dan Brown',
    pages: '416',
    year: 'xxxx',
    read: 'yes',
  },
  {
    count: '4',
    title: 'Angels and Demons',
    author: 'Dan Brown',
    pages: '572',
    year: 'xxxx',
    read: 'yes',
  },
  {
    count: '5',
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
  this.count = count;
}

let dataCount = 0;

function createDelBtn(row) {
  let cell = row.insertCell();
  let delBtn = document.createElement('button');
  delBtn.innerHTML = "Delete";
  delBtn.setAttribute('class', 'delete-book');
  cell.appendChild(delBtn);
}

function addDataSet(row) {
  data = row.dataset;
  data.dataCount = dataCount + 1;
  dataCount++;
}

function createTableHead(table, headings) {
  let thead = table.createTHead();
  let row = thead.insertRow();
  for (let i = 0; i < headings.length; i++) {
    let th = document.createElement('th');
    let text = document.createTextNode(headings[i].charAt(0).toUpperCase() + headings[i].slice(1));
    th.appendChild(text);
    row.appendChild(th);
  }
  let th = document.createElement('th');
  let text = document.createTextNode('Delete');
  th.appendChild(text);
  row.appendChild(th);
}

function createTable(table, array) {
  for (let element of array) {
    addToTable(table, element);
  }
}

function addToTable(table, object) {
  let row = table.insertRow();
  let values = Object.values(object);
  values.shift();

  for (i = 0; i < values.length; i++) {
    let cell = row.insertCell();
    let text = document.createTextNode(values[i]);
    cell.appendChild(text);
  }
  createDelBtn(row);
  addDataSet(row);
}

function isRead(checkbox) {
  if (readChkBox.checked) {
    return "yes";
  } else {
    return "no";
  }
} 

let table = document.querySelector('table');
const newBook = document.getElementById('new-book');
const addBook = document.getElementById('add-book');
const titleInput = document.getElementById('title');
const authorInput =  document.getElementById('author');
const pagesInput = document.getElementById('pages');
const yearInput = document.getElementById('year');
const readChkBox = document.getElementById('read');
const form = document.querySelector('form');


if (myLibrary.length > 0) {
  let headings = Object.keys(myLibrary[0]);
  headings.shift();
  createTable(table, myLibrary)
  createTableHead(table, headings);
}

function resetForm(...inputs) {
  titleInput.value = "";
  authorInput.value = "";
  pagesInput.value = "";
  yearInput.value = "";
  readChkBox.checked = false;
}

function addBookToLibrary() {
  let bookCount;
  if (myLibrary.length === 0) {
    bookCount = 0;
  } else {
    bookCount = myLibrary[myLibrary.length - 1].count;
    bookCount = Number(bookCount) + 1;
  }
  
  let book = {
    count: bookCount,
    title: titleInput.value,
    author: authorInput.value,
    pages: pagesInput.value,
    year: yearInput.value,
    read: isRead(readChkBox),
  }

  myLibrary.push(book);
}

newBook.addEventListener('click', e => {
  form.style.display = "block";
});

addBook.addEventListener('click', e => {
  addBookToLibrary();
  
  if (document.querySelector('thead') === null) {
    let headings = Object.keys(myLibrary[0]);
    headings.shift();
    createTable(table, myLibrary)
    createTableHead(table, headings);
  } else {
    addToTable(table, myLibrary[myLibrary.length - 1]);
  }

  resetForm(titleInput, authorInput, pagesInput, yearInput, readChkBox);
  form.style.display = "none";
});

const deleteBook = document.querySelectorAll('.delete-book');

deleteBook.forEach((button) => {
  button.addEventListener('click', e => {
    let bookNumber = (e.target.parentNode.parentNode.dataset.bookCount) - 1;
    myLibrary.splice(bookNumber, 1);
    console.log(myLibrary);
    // remove book from myLibrary and from table using the data attribute
  });
});

