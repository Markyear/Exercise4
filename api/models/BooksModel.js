const books = new Map();
let bookId = 1;

books.set(bookId.toString(), {
    bookCategory: "HTML5",
    bookTitle: "Html5: Up And Running",
    bookCover: "img\/HTML5_Up_And_Running.jpg",
    bookDescription: "If you don't know about the new features available in HTML5, now's the time to find out. The latest version of this markup language is going to significantly change the way you develop web applications, and this book provides your first real look at HTML5's new elements and attributes.",
    bookIsbn: "978-0596806026",
    bookPrice: 24.80,
    bookStockQuantity: 3
});


bookId++;
books.set(bookId.toString(), {
    bookCategory: "HTML5",
    bookTitle: "HTML5 Pocket Reference",
    bookCover: "img\/HTML5_Pocket_Reference.jpg",
    bookDescription: "Need help finding the right HTML5 element or attribute for your web page or application? HTML5 Pocket Reference is the classic reference that web designers and developers have been keeping close at hand for more than thirteen years.",
    bookIsbn: "978-1449363352",
    bookPrice: 15.90,
    bookStockQuantity: 2
});

bookId++;
books.set(bookId.toString(), {
    bookCategory: "JavaScript",
    bookTitle: "Java Script",
    bookCover: "img\/JavaScript 1.jfif",
    bookDescription: "Since 1996, JavaScript: The Definitive Guide has been the bible for JavaScript programmers programmer's guide and comprehensive reference to the core language and to the client-side JavaScript APIs defined by web browsers.",
    bookIsbn: "9781449308162",
    bookPrice: 47.30,
    bookStockQuantity: 99
});

bookId++;

books.set(bookId.toString(), {
    bookCategory: "JavaScript",
    bookTitle: "Java Script: The good parts",
    bookCover: "img\/Java Script 2.jfif",
    bookDescription: "Most programming languages contain good and bad parts, but JavaScript has more than its share of the bad, having been developed and released in a hurry before it could be refined.",
    bookIsbn: "0596517742",
    bookPrice: 23.90,
    bookStockQuantity: 30
});

class BooksModel {
    static getBooks() {
        let booksArray = [];
        for (let [id, book] of books) {
            booksArray.push({id, book});
        }
        return booksArray;
    }

    static findBookById(id) {
        let book = books.get(id);
        return book;
    }

    static createBook(book) {
        /*************************************************************************
         *****                                                               *****
         *****   Add Method for creating a new book in the books map by id   *****
         *****                                                               *****
         *************************************************************************/
        bookId++;

        books.set(bookId.toString(), {

            bookCategory: book.bookCategory,
            bookTitle: book.bookTitle,
            bookCover: "img\/" + book.bookCover,
            bookDescription: book.bookDescription,
            bookIsbn: book.bookIsbn,
            bookPrice: book.bookPrice,
            bookStockQuantity: book.bookStockQuantity,
        });
    }


    static updateBookById(id, book) {
        /*************************************************************************
         *****                                                               *****
         *****     Add Method for updating a book in the books map by id     *****
         *****                                                               *****
         *************************************************************************/


        if (books.has(id.toString())) {
            books.set(id.toString(), {

                bookCategory: book.bookCategory,
                bookTitle: book.bookTitle,
                bookCover: "img\/" + book.bookCover,
                bookDescription: book.bookDescription,
                bookIsbn: book.bookIsbn,
                bookPrice: book.bookPrice,
                bookStockQuantity: book.bookStockQuantity,
            });
            return true;
        }
        return  false;
    }
    static deleteBookById(id) {
        /*************************************************************************
         *****                                                               *****
         *****    Add Method for deleting a book from the books map by id    *****
         *****                                                               *****
         *************************************************************************/


           return books.delete(id);


    }
}

module.exports = BooksModel;