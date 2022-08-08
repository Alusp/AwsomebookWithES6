
// Listeners 
document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const book = new Book(title, author);
  UI.addBookToScreen(book, BStorage.getBook().length);
  BStorage.addBook(book);
  document.getElementById("title").value = "";
  document.getElementById("author").value = "";
});
document.addEventListener("DOMContentLoaded", UI.displayBook);
document
  .getElementsByClassName("book-list")[0]
  .addEventListener("click", BStorage.removeBook);

document.querySelector(".list").addEventListener("click", () => {
  document.getElementsByClassName("book")[0].style.display = "block";
  document.getElementsByClassName("add-book-list")[0].style.display = "none";
  document.getElementsByClassName("contact-me")[0].style.display = "none";
});
document.querySelector(".add").addEventListener("click", (e) => {
  e.preventDefault();
  document.getElementsByClassName("book")[0].style.display = "none";
  document.getElementsByClassName("contact-me")[0].style.display = "none";
  document.getElementsByClassName("add-book-list")[0].style.display = "flex";
});
