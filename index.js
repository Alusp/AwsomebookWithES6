import Book from './modules/Book.js';
import BStorage from './modules/BStorage.js';
import UI from './modules/UI.js';
import DateTime from './modules/luxon.js';

const dat = document.querySelector('#date');

dat.innerHTML = DateTime.now().toLocaleString(DateTime.DATETIME_MED);

// Listeners
document.querySelector('form').addEventListener('submit', (event) => {
  event.preventDefault();
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const book = new Book(title, author);
  UI.addBookToScreen(book, BStorage.getBook().length);
  BStorage.addBook(book);
  document.getElementById('title').value = '';
  document.getElementById('author').value = '';
});
document.addEventListener('DOMContentLoaded', UI.displayBook);
document
  .getElementsByClassName('book-list')[0]
  .addEventListener('click', BStorage.removeBook);

document.querySelector('.list').addEventListener('click', (e) => {
  e.preventDefault();
  document.getElementsByClassName('book')[0].style.display = 'flex';
  document.getElementsByClassName('add-book-list')[0].style.display = 'none';
  document.getElementsByClassName('contact-me')[0].style.display = 'none';
});
document.querySelector('.add').addEventListener('click', (e) => {
  e.preventDefault();
  document.getElementsByClassName('book')[0].style.display = 'none';
  document.getElementsByClassName('contact-me')[0].style.display = 'none';
  document.getElementsByClassName('add-book-list')[0].style.display = 'flex';
});

document.querySelector('.contact').addEventListener('click', (e) => {
  e.preventDefault();
  document.getElementsByClassName('book')[0].style.display = 'none';
  document.getElementsByClassName('contact-me')[0].style.display = 'flex';
  document.getElementsByClassName('add-book-list')[0].style.display = 'none';
});
