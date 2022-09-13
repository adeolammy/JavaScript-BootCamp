// BOOK CONSTRUCTOR

function Book(title, author, isbn) {
    this.title = title;
    this.author  = author;
    this.isbn = isbn;
}

// UI CONSTRUCTOR
    function UI() {
        
    }
// ADDING EVENT LISTERNER
document.getElementById('book-form').addEventListener('submit', function (e) {
    const title = document.getElementById('title').value,    
          author = document.getElementById('author').value,   
          isbn = document.getElementById('isbn').value 
        //   console.log(title, author, isbn);   
          e.preventDefault();
          const book = new Book(title,author,isbn);
          console.log(book);
})