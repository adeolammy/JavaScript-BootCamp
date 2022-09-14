// BOOK CONSTRUCTOR

// function Book(title, author, isbn) {
//     this.title = title;
//     this.author  = author;
//     this.isbn = isbn;
// }

// // UI CONSTRUCTOR
//     function UI() { }
        
//         // Add Book to the list
//      UI.prototype.addBookList = function (book){
//         const list = document.getElementById('book-list');
            

//         const row = document.createElement('tr')
//         // insert cols
//         row.innerHTML = `
//             <td>${book.title}</td>                
//             <td>${book.author}</td>                
//             <td>${book.isbn}</td>                
//             <td><a href="#" class="delete">X</a></td>                
//         `;
//     list.appendChild(row)
//     }
   
// // ADDING EVENT LISTERNER
// document.getElementById('book-form').addEventListener('submit', function (e) {
//     const title = document.getElementById('title').value,    
//           author = document.getElementById('author').value,   
//           isbn = document.getElementById('isbn').value 
//         //   console.log(title, author, isbn);   
//           e.preventDefault();
//           const book = new Book(title,author,isbn);
//           console.log(book);

//         //   instance of ui
//         const ui = new UI();

//         // add book to the list
//         ui.addBookList(book)
        
// })

// /////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////


// create 2 CONSTRUCTOR (1)list of item (2) UI
// function Book(title, author, isbn) {
//     this.title = title
//     this.author = author
//     this.isbn = isbn
// }
// function UI() {
    
// }


// // ADD BOOK LIST
// UI.prototype.addBookList = function (book) {
//     const list = document.getElementById('book-list');

//     const row = document.createElement('tr');

//     row.innerHTML =`<td>${book.title}</td>
//                     <td>${book.author}</td>
//                     <td>${book.isbn}</td>
//                     <td><a href="#" class="delete">X</a></td>
//                    `
//                    list.appendChild(row)
// }

// // clear field
// UI.prototype.clearField = function () {
//     document.getElementById('title').value = '';
//     document.getElementById('author').value = '';
//     document.getElementById('isbn').value = '';
// }

// // SHOW ALERT
// UI.prototype.showAlert = function (message, className) {
//     // create div
//     const div = document.createElement('div');
    
//     //add class
//     div.className = `alert ${className}` 

//     // add text
//     div.appendChild(document.createTextNode(message ))

// // get parent
// const container = document.querySelector('.container');

// // get form

// const form = document.querySelector('#book-form');

// // insert alert into container
// container.insertBefore(div, form);

// setTimeout(function () {
//     document.querySelector('.alert').remove();   
// },3500)
// }

// document.getElementById('book-form').addEventListener('submit', function (e) {
//     const title =  document.getElementById('title').value;
//     const author =  document.getElementById('author').value;
//     const isbn =  document.getElementById('isbn').value;
    

//         // instance of Book
//     const book = new Book(title, author, isbn);
//     // console.log(book);

// // instance of UI
// const ui = new UI();

// //  VALIDATION
// if (title === '' || author === ''|| isbn === '') {
//     // ERROR
//     ui.showAlert('please fill in all fields', 'error');
// }else{
//     // add book to the ui
// ui.addBookList(book);

// // clear field
// ui.clearField();

// // success message
// ui.showAlert('Book added successfully', 'success');

// }
// e.preventDefault();


// })




// /////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////
// function Book(title, author, isbn) {
//     this.title = title;
//     this.author = author;
//     this.isbn = isbn;
// }

// function UI() {};

// UI.prototype.addBookList = function (book) {
//     const list = document.getElementById('book-list');
//     const row = document.createElement('tr');
//     row.innerHTML = `<td>${book.title}</td>
//                     <td>${book.author}</td>
//                     <td>${book.isbn}</td>
//                     <td><a href="#">X</a></td>
//                     `
//     list.appendChild(row)

// }

// UI.prototype.clearField = function () {
//     document.getElementById('title').value = '';
//     document.getElementById('author').value = '';
//     document.getElementById('isbn').value = '';
// }

// UI.prototype.errorMessage = function(message, className){
//     const container = document.querySelector('.container');
//     const form = document.querySelector('form');
//     const div = document.createElement('div');
//     div.className = `alert ${className}`;
//     div.appendChild(document.createTextNode(message))
//     container.insertBefore(div, form);

//     setTimeout(()=>{
//         document.querySelector('.alert').remove()
//     }, 4500)
// }

// document.getElementById('book-form').addEventListener('submit',function (e) {
//     const  title = document.getElementById('title').value;
//     const  author = document.getElementById('author').value;
//     const  isbn = document.getElementById('isbn').value;


// const book = new Book(title, author, isbn);
// // console.log(title, author, isbn);

// const ui = new UI();

// if (title === ''|| author === '' || isbn === '') {
//     ui.errorMessage('pls fill all fields', 'error')
// } else {
    

// // for adding book to the ui
// ui.addBookList(book)

// // show success message
// ui.errorMessage('Your book has been added', 'success')
// // ui.successMessage('Your book has been added', 'success')

// // clear the field
// ui.clearField()
// e.preventDefault()
// }

// })

function Book(title, author, isbn) {
    this.title = title;
    this.author  = author;
    this.isbn = isbn
};

function UI() {};

UI.prototype.bookList = function (book) {
    const listItems = document.getElementById('book-list')
    const row = document.createElement('tr');
    row.innerHTML = `<td>${book.title}</td>
                       <td>${book.author}</td>
                       <td>${book.isbn}</td>
                       <td><a href>X<a/></td> 
                        
                        `
    listItems.appendChild(row)
}

UI.prototype.clearField = function () {
            document.getElementById('title').value = '';
            document.getElementById('author').value = '';
            document.getElementById('isbn').value = '';
} 

UI.prototype.alertMessage = function (message, className) {
    
const container = document.querySelector('.container');
const form = document.querySelector('form');
const div = document.createElement('div');
div.appendChild(document.createTextNode(message))
div.className = `alert ${className}`;
container.insertBefore(div, form);


setTimeout(()=>{
    document.querySelector('.alert').remove()
}, 1300)


}

    

document.getElementById('book-form').addEventListener('submit', (e)=>{
            const title = document.getElementById('title').value;
            const author = document.getElementById('author').value;
            const isbn = document.getElementById('isbn').value;


    // instance of Book
    const book = new Book(title, author, isbn);
    const ui = new UI();

    if (title === ''|| author === ''|| isbn === '') {
        ui.alertMessage('Pls fill all fields', 'error')
    } else {
        
    
        ui.bookList(book);

        // clearField
        ui.clearField()

        // validation
        ui.alertMessage('Your book has been submited', 'success')
    }
e.preventDefault()
})
// /////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////