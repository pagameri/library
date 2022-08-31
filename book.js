let myLibrary = [
  // {
  //   title: 'Harry Potter and the Philosopher\'s Stone',
  //   author: 'J.K. Rowling',
  //   pages: '352',
  //   read: 'yes',
  // },
  // {
  //   title: 'One: Simple One-Pan Wonders',
  //   author: 'Jamie Oliver',
  //   pages: '312',
  //   read: 'no',
  // },
  // {
  //   title: 'The Boy, The Mole, The Fox and The Horse',
  //   author: 'The Boy, The Mole, The Fox and The Horse',
  //   pages: '128',
  //   read: 'no',
  // },
  // {
  //   title: 'The Da Vinci Code',
  //   author: 'Dan Brown',
  //   pages: '416',
  //   read: 'yes',
  // },
  // {
  //   title: 'Angels and Demons',
  //   author: 'Dan Brown',
  //   pages: '572',
  //   read: 'yes',
  // },
  // {
  //   title: 'The Ink Black Heart',
  //   author: 'Robert Galbraith',
  //   pages: '1024',
  //   read: 'no',
  // },
];

function Book(title, author, pages, read) {
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read
}

function createTableHead(table, headings) {
  let thead = table.createTHead();
  let row = thead.insertRow();
  for (let heading of headings) {
    let th = document.createElement('th');
    let text = document.createTextNode(heading.charAt(0).toUpperCase() + heading.slice(1));
    th.appendChild(text);
    row.appendChild(th);
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
  }
}

function addToTable(table, object) {
  let row = table.insertRow();
  for (key in object) {
    let cell = row.insertCell();
    let text = document.createTextNode(object[key]);
    cell.appendChild(text);
  }
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
const readChkBox = document.getElementById('read');

function resetForm(...inputs) {
  titleInput.value = "";
  authorInput.value = "";
  pagesInput.value = "";
  readChkBox.checked = false;
}

function addBookToLibrary() {
  let book = {
    title: titleInput.value,
    author: authorInput.value,
    pages: pagesInput.value,
    read: isRead(readChkBox),
  }

  myLibrary.push(book);
}

newBook.addEventListener('click', e => {
  // show form (originally hidden)
});

addBook.addEventListener('click', e => {
  addBookToLibrary();
  
  if (document.querySelector('thead') === null) {
    let headings = Object.keys(myLibrary[0]);
    createTable(table, myLibrary)
    createTableHead(table, headings);
  } else {
    addToTable(table, myLibrary[myLibrary.length - 1]);
  }

  resetForm(titleInput, authorInput, pagesInput, readChkBox);
});

