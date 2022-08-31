let myLibrary = [
  {
    title: 'Harry Potter and the Philosopher\'s Stone',
    author: 'J.K. Rowling',
    pages: '352',
    read: 'yes',
  },
  {
    title: 'One: Simple One-Pan Wonders',
    author: 'Jamie Oliver',
    pages: '312',
    read: 'no',
  },
  {
    title: 'The Boy, The Mole, The Fox and The Horse',
    author: 'The Boy, The Mole, The Fox and The Horse',
    pages: '128',
    read: 'no',
  },
  {
    title: 'The Da Vinci Code',
    author: 'Dan Brown',
    pages: '416',
    read: 'yes',
  },
  {
    title: 'Angels and Demons',
    author: 'Dan Brown',
    pages: '572',
    read: 'yes',
  },
  {
    title: 'The Ink Black Heart',
    author: 'Robert Galbraith',
    pages: '1024',
    read: 'no',
  },
];

function Book(title, author, pages, read) {
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read
}

// const hP1= new Book('Harry Potter and the Philospher\'s Stone', 'J.K. Rowling', '352', 'read');
// // hP1.info();
// console.log(hP1.info());


function addBookToLibrary() {
  
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

let table = document.querySelector('table');
let headings = Object.keys(myLibrary[0]);
createTable(table, myLibrary)
createTableHead(table, headings);

