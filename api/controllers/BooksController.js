const BooksModel = require("../models/BooksModel");

class BooksController {
    static books_get_all(req, res) {
        const booksArray = BooksModel.getBooks();
        res.send(booksArray);
    }

    static book_get_by_id(req, res) {
        const {id} = req.params;
        const getBook = BooksModel.findBookById(id);
        if (getBook) {
            res.send(getBook);
        } else {
            res.status(404).send('Book not found.');
        }
    }

    static book_create_book(req, res) {
     //
        let book =   req.body;
         BooksModel.createBook(book);
        console.log(book);
        res.status(201).send("Book was created");


        /******************************************************
         *****                                            *****
         *****   Add Controller for creating a new book   *****
         *****                                            *****
         ******************************************************/
    }

    static book_update_book_by_id(req, res) {
      const {id} =   req.params.id;
      let book =   req.body;
      let updated = BooksModel.updateBookById(id, book);
      if (updated){
          res.status(200).send("Book was updated");
      }
      else {
          res.status(404).send("Book id does not exist, book was not updated");
      }



        /******************************************************
         *****                                            *****
         *****  Add Controller for updating a book by id  *****
         *****                                            *****
         ******************************************************/
    }

    static delete_book_by_id(req, res) {
        const {id} = req.params;

          let deleted = BooksModel.deleteBookById(id);
        if (deleted){
            res.status(200).send('Book was deleted');
        }
            res.status(404).send('Book not found. Could not get deleted');

    }



        /******************************************************
         *****                                            *****
         *****  Add Controller for deleting a book by id  *****
         *****                                            *****
         ******************************************************/

}

module.exports = BooksController;