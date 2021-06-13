const {Router} = require('express');
const bookRoutes = Router();

const BooksController = require('../controllers/BooksController');

bookRoutes.get('/', BooksController.books_get_all);

bookRoutes.get('/:id', BooksController.book_get_by_id);

//
bookRoutes.post('/', BooksController.book_create_book);
bookRoutes.put('/:id', BooksController.book_update_book_by_id);
bookRoutes.delete('/:id', BooksController.delete_book_by_id);





/******************************************************
 *****                                            *****
 *****  Add Routes for POST, PUT and DELETE here  *****
 *****                                            *****
 ******************************************************/

module.exports = bookRoutes;