let myLibrary = [
  {
    title: 'Harry Potter and the Philosopher\'s Stone',
    author: 'J.K. Rowling',
    pages: '352',
    year: '1997',
    read: 'yes',
  },
  {
    title: 'One: Simple One-Pan Wonders',
    author: 'Jamie Oliver',
    pages: '312',
    year: '2022',
    read: 'no',
  },
  {
    title: 'The Boy, The Mole, The Fox and The Horse',
    author: 'The Boy, The Mole, The Fox and The Horse',
    pages: '128',
    year: '2019',
    read: 'no',
  },
  {
    title: 'The Da Vinci Code',
    author: 'Dan Brown',
    pages: '416',
    year: '2003',
    read: 'yes',
  },
  {
    title: 'Angels and Demons',
    author: 'Dan Brown',
    pages: '572',
    year: '2000',
    read: 'yes',
  },
  {
    title: 'The Ink Black Heart',
    author: 'Robert Galbraith',
    pages: '1024',
    year: '2022',
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
const totalBookCount = document.getElementById('total-books');
const readBookCount = document.getElementById('read-books');
const notReadCount = document.getElementById('not-read-books');
let readBooks;


function addBookToLibrary() {
  let book = new Book(titleInput.value, authorInput.value, pagesInput.value, yearInput.value, isRead(readChkBox));

  myLibrary.push(book);
}


function isRead(checkbox) {
  if (readChkBox.checked) {
    return 'yes';
  } else {
    return 'no';
  }
}


function displayBooks() {
  const tableBody = document.querySelector('tbody');
  const tableHead = document.querySelector('thead');
  let headings;
  
  if (myLibrary.length === 0) {
    tableBody.innerHTML = '';
    tableHead.innerHTML = '';
    return;
  } else {
    headings = Object.keys(myLibrary[0]);
  }

  if (tableBody === null) {;
    dataCount = 0;
    createTable(table, myLibrary);
    createTableHead(table, headings);
  } else {
    tableBody.innerHTML = '';
    tableHead.innerHTML = '';
    dataCount = 0;
    createTable(table, myLibrary);
    createTableHead(table, headings);
  }
    
  displayBookCounter();
}


function createTable(table, array) {
  let readCounter = 0;
  for (let element of array) {
    let row = table.insertRow();
    for (key in element) {
      let cell = row.insertCell();
      if (key === 'read') {
        let readStatus = element[key];
        createSetToggle(cell, readCounter, readStatus);
        readCounter++;
      } else {
        let text = document.createTextNode(element[key]);
        cell.appendChild(text);
      }
    }
    createDelBtn(row);
  }
}


function createSetToggle(cell, readCounter, readStatus) {
  let label = document.createElement('label');
  label.setAttribute('class', 'toggle');
  label.setAttribute('for', readCounter);
  cell.appendChild(label);

  let toggle = document.createElement('input');
  toggle.setAttribute('type', 'checkbox');
  toggle.setAttribute('id', readCounter);
  toggle.onclick = function(){changeReadStatus(readCounter, toggle)}
  label.appendChild(toggle);

  let slider = document.createElement('span');
  slider.setAttribute('class', 'slider');
  label.appendChild(slider);

  if (readStatus === 'yes') {
    toggle.checked = true;
  } else {
    toggle.checked = false;
  }
}


function changeReadStatus(index, toggle) {
  if (toggle.checked === true) {
    toggle.checked = true;
    myLibrary[index].read = 'yes';
    displayBookCounter();
  } else {
    toggle.checked = false;
    myLibrary[index].read = 'no';
    displayBookCounter();
  }
}


function createDelBtn(row) {
  let cell = row.insertCell();
  let delBtn = document.createElement('button');
  delBtn.innerHTML = 'Delete';
  delBtn.setAttribute('class', 'delBtn');
  cell.appendChild(delBtn);
  addDataSet(delBtn);
  delBtn.onclick = function(){deleteBook(delBtn)};
}


let dataCount = 0;

function addDataSet(button) {
  data = button.dataset;
  data.bookNumber = dataCount;
  dataCount++;
}


function deleteBook(delBtn) {
  let bookID = (delBtn.getAttribute('data-book-number'));
  myLibrary.splice(bookID, 1);
  displayBooks();
}


function createTableHead(table, headings) {
  let thead = table.createTHead();
  let row = thead.insertRow();
  for (let i = 0; i < headings.length; i++) {
    let th = document.createElement('th');
    let text = document.createTextNode(headings[i].charAt(0).toUpperCase() + headings[i].slice(1));
    th.appendChild(text);
    row.appendChild(th);
    if (i < 5) {
      th.onclick = function(){sortTable(i)};
    }
  }
  let th = document.createElement('th');
  let text = document.createTextNode('Delete');
  th.appendChild(text);
  row.appendChild(th);
}


function displayBookCounter() {
  readBooks = myLibrary.filter(book => book.read === 'yes');
  
  totalBookCount.innerText = myLibrary.length;
  readBookCount.innerText = readBooks.length;
  notReadCount.innerText = myLibrary.length - readBooks.length;
}


function sortTable(n) {
  let switching = true;
  let dir = 'asc';
  let i, rows, shouldSwitch, x, y;
  let switchCount = 0;

  while (switching) {
    switching = false;
    rows = table.rows;

    for (i = 1; i < (rows.length - 1); i++) {
      shouldSwitch = false;
      x = rows[i].getElementsByTagName('td')[n];
      y = rows[i + 1].getElementsByTagName('td')[n];
      let checkboxA, checkboxB;
      
      if (n < 2) {
        if (dir === 'asc') {
          if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
            shouldSwitch = true;
          }
        } else if (dir === 'desc') {
          if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
            shouldSwitch = true;
          }
        }
      } else if (n === 4) {
        checkboxA = rows[i].querySelector('input[type=checkbox]');
        checkboxB = rows[i + 1].querySelector('input[type=checkbox]');
        if (dir === 'asc') {
          if (checkboxA.checked && !checkboxB.checked) {
            shouldSwitch = true;
          }
        } else if (dir === 'desc') {
          if (!checkboxA.checked && checkboxB.checked) {
            shouldSwitch = true;
          }
        } 
      } else {
        if (dir === 'asc') {
          if (Number(x.innerHTML) > Number(y.innerHTML)) {
            shouldSwitch = true;
          }
        } else if (dir === 'desc') {
          if (Number(x.innerHTML) < Number(y.innerHTML)) {
            shouldSwitch = true;
          }
        }
      }

    if (shouldSwitch) {
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        switching = true;
        switchCount++;
      } else {
        if (checkboxA === undefined) {
          if (switchCount === 0 && dir == 'asc' && (x.innerHTML !== y.innerHTML)) {
            dir = 'desc'
            switching = true;
          }
        }
        else if (switchCount === 0 && dir == 'asc' && !checkboxA.checked) {
          dir = 'desc'
          switching = true;
        }
      }
    }
  }
}


form.style.display = 'none';

newBook.addEventListener('click', e => {
  if (form.style.display === 'none') {
    form.style.display = 'block';
    newBook.innerText = 'CLOSE'
  } else {
    form.style.display = 'none';
    newBook.innerText = 'NEW BOOK';
  }
});


addBook.addEventListener('click', e => {
  addBookToLibrary();
  displayBooks();

  resetForm(titleInput, authorInput, pagesInput, yearInput, readChkBox);
  form.style.display = 'none';
});


function resetForm(...inputs) {
  titleInput.value = '';
  authorInput.value = '';
  pagesInput.value = '';
  yearInput.value = '';
  readChkBox.checked = false;
}


displayBooks();