"use strict";
// 📚 Create a simple Library System where users can add books, borrow books, return books, and check availability.
// 1. Create an enum called BookGenre with at least 5 book genres.
// 2. Create a type alias called Book which contains: bookId (number), title (string), author (string), genre (BookGenre), isAvailable (boolean).
// 3. Create a function called addBook which will add a new book into the library array. The function needs to return a Book object.
// 4. Create a function called borrowBook which will change the book’s availability to false if available. The return needs to be a string.
// 5. Create a function called returnBook which will change the book’s availability to true. The return needs to be a string.
// 6. Create a function called checkAvailability which will return true if the book is available and false otherwise.
// 7. Create a function called removeBook which will remove a book from the library array. The return needs to be a string.
var BookGenre;
(function (BookGenre) {
    BookGenre[BookGenre["Fantasy"] = 0] = "Fantasy";
    BookGenre[BookGenre["Mistery"] = 1] = "Mistery";
    BookGenre[BookGenre["SF"] = 2] = "SF";
    BookGenre[BookGenre["Comedy"] = 3] = "Comedy";
    BookGenre[BookGenre["Romance"] = 4] = "Romance";
    BookGenre[BookGenre["Family"] = 5] = "Family";
    BookGenre[BookGenre["NonFiction"] = 6] = "NonFiction";
})(BookGenre || (BookGenre = {}));
var library = [];
function addBook(bookId, title, author, genre) {
    var newBook = { bookId: bookId, title: title, author: author, genre: genre, isAvailable: true };
    library.push(newBook);
    return newBook;
}
function borrowBook(bookId) {
    var thisBook;
    if (library.length > 0) {
        for (var i = 0; i < library.length; i++) {
            if (library[i].bookId === bookId) {
                thisBook = library[i];
                break;
            }
        }
        if (!thisBook) {
            return 'Book not found.';
        }
    }
    else {
        return 'Library is empty.';
    }
    if (thisBook.isAvailable === true) {
        thisBook.isAvailable = false;
        return "".concat(thisBook.title, " has been borrowed.");
    }
    else {
        return "".concat(thisBook.title, " not available.");
    }
}
function returnBook(bookId) {
    var thisBook;
    if (library.length > 0) {
        for (var i = 0; i < library.length; i++) {
            if (library[i].bookId === bookId) {
                thisBook = library[i];
                break;
            }
        }
        if (!thisBook) {
            return 'Book not found.';
        }
    }
    else {
        return 'Library is empty.';
    }
    thisBook.isAvailable = true;
    return "".concat(thisBook.title, " has been returned.");
}
function checkAvailability(bookId) {
    var thisBook;
    if (library.length > 0) {
        for (var i = 0; i < library.length; i++) {
            if (library[i].bookId === bookId) {
                thisBook = library[i];
                break;
            }
        }
        if (!thisBook) {
            return 'Book not found.';
        }
    }
    else {
        return 'Library is empty.';
    }
    if (thisBook.isAvailable === true) {
        return true;
    }
    else {
        return false;
    }
}
function removeBook(bookId) {
    var thisBook;
    if (library.length > 0) {
        for (var i = 0; i < library.length; i++) {
            if (library[i].bookId === bookId) {
                thisBook = library[i];
                break;
            }
        }
        if (!thisBook) {
            return 'Book not found.';
        }
    }
    else {
        return 'Library is empty.';
    }
    library = library.filter(function (book) { return book.bookId !== thisBook.bookId; });
    return "".concat(thisBook.title, " has been removed from the library.");
}
// Test cases (Create more if needed)
console.log(addBook(1, "The Hobbit", "J.R.R. Tolkien", BookGenre.Fantasy)); // { bookId: 1, title: "The Hobbit", author: "J.R.R. Tolkien", genre: BookGenre.Fantasy, isAvailable: true }
console.log(borrowBook(1)); // "The Hobbit has been borrowed"
console.log(checkAvailability(1)); // false
console.log(returnBook(1)); // "The Hobbit has been returned"
console.log(removeBook(1)); // "The Hobbit has been removed from the library"
console.log(library);
console.log(checkAvailability(1));
