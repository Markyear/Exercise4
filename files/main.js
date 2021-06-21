


document.addEventListener("DOMContentLoaded", function (event) {


    const maxBookShoppingCartQuantity = 8;
    let bookShoppingCartAmount = 0;
    let HTML5H1 = 1;
    let JavaScriptH1 = 1;


    class Book {
        constructor(bookCategory, bookTitle, bookCover, bookPrice, bookDescription, bookIsbn, bookStockQuantity) {
            this.bookCategory = bookCategory;
            this.bookTitle = bookTitle;
            this.bookCover = bookCover;
            this.bookDescription = bookDescription;
            this.bookIsbn = bookIsbn;
            this.bookPrice = bookPrice;
            this.bookStockQuantity = bookStockQuantity;
            this.bookShoppingCartQuantity = 0;
        }
    }

    class Shop {
        constructor() {
            this.shoppingCart = new ShoppingCart("Shopping Cart");
            this.mainBookScreen = document.getElementById("mainBookScreen");

            //added Exc 4:

           const maxBooksPerPage = 4;
            let bookId = 1;

          async function loadNewBook(loadBookId) {

               let myObject = await fetch("http://localhost:3000/api/v1/books/"+loadBookId);
               let bookObject = await myObject.json();



              console.log(bookObject);
              //let testObject = JSON.stringify(bookObject);
              let testObject = Object.values(bookObject);
              console.log(testObject);

             shop.addBookToScreen(bookObject);
              //
           //   shop.addBookToScreen(new Book("HTML5", "Html5: Up And Running", "HTML5_Up_And_Running.jpg", 24.80, "If you don't know about the new features available in HTML5, now's the time to find out. The latest version of this markup language is going to significantly change the way you develop web applications, and this book provides your first real look at HTML5's new elements and attributes.", "978-0596806026"));
          //   let book = [];


           // book[0] = new Book ("HTML5", "Html5: Up And Running", "HTML5_Up_And_Running.jpg", 24.80, "If you don't know about the new features available in HTML5, now's the time to find out. The latest version of this markup language is going to significantly change the way you develop web applications, and this book provides your first real look at HTML5's new elements and attributes.", "978-0596806026");
            // console.log(book);
            //  shop.addBookToScreen(book[0]);
                /*******************************************************************************
                 *****                                                                     *****
                 *****    Implement the Code for loading and displaying a new book here    *****
                 *****                                                                     *****
                 *******************************************************************************/
            }

            loadNewBook(bookId);
            bookId++;
            loadNewBook(bookId);
            bookId++;

         window.addEventListener('scroll', function () {
              if (window.scrollY >= document.getElementById("mainBookScreen").clientHeight - window.innerHeight - 10 && bookId <= maxBooksPerPage) {
                  loadNewBook(bookId);
                 bookId++;
             }
         });


        }

        // This method must ensure that a book is displayed in the mainBookScreen.

            addBookToScreen(book) {


            let mainNode = document.getElementById(book.bookCategory);
            let article = document.createElement("article");
            let articleNode = document.createElement("lll"); // if its emtpy it does not work :(
            article.appendChild(articleNode);

            //only if the book gets added to an empty categorie, the category heading is showing
            if (book.bookCategory == "HTML5") {
                if (HTML5H1 == 1) {
                    let bookCategory = document.createElement("h1");
                    let textNodeCat = document.createTextNode(book.bookCategory);
                    bookCategory.setAttribute("class", "section_heading");
                    bookCategory.appendChild(textNodeCat);

                    article.appendChild(bookCategory);
                    HTML5H1--;
                }
            }
            if (book.bookCategory == "JavaScript") {
                if (JavaScriptH1 == 1) {
                    let bookCategory = document.createElement("h1");
                    let textNodeCat = document.createTextNode(book.bookCategory);
                    bookCategory.setAttribute("class", "section_heading");
                    bookCategory.appendChild(textNodeCat);
                    article.appendChild(bookCategory);
                    JavaScriptH1--;
                }
            }

            let title = document.createElement("h2");
            let textNode = document.createTextNode(book.bookTitle);
            title.appendChild(textNode);

            let bookCoverPic = document.createElement("p");
            let bookCoverPicNode = document.createElement("IMG");
            bookCoverPicNode.setAttribute("src", book.bookCover);
            bookCoverPicNode.setAttribute("class", book.bookCategory);
            bookCoverPic.appendChild(bookCoverPicNode);

            let updateShopping = document.createElement("p");
            let updateShoppingNode = document.createTextNode("Quantity: ");
            updateShopping.appendChild(updateShoppingNode);

            let select = document.createElement("select");
            select.id = "select" + book.bookIsbn;  //Id by bookname for the selector of each book

//help from https://stackoverflow.com/questions/17001961/how-to-add-drop-down-list-select-programmatically
            //dropdown is added
            for (let i = 1; i < maxBookShoppingCartQuantity + 1; i++) {
                let option = document.createElement("option");
                option.value = i;
                option.text = i;
                select.appendChild(option);
            }
// help from https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_document_createelement2
            let button = document.createElement("BUTTON");
            button.innerHTML = "Update Shopping Cart";
            button.id = "upDate" + book.bookIsbn;
            button.addEventListener("click", event => this.shoppingCart.updateBookInShoppingCart(book));


            let price = document.createElement("p");
            let priceNode = document.createTextNode(book.bookPrice + "€");
            price.appendChild(priceNode)

            let description = document.createElement("p");
            let descriptionNode = document.createTextNode(book.bookDescription);
            description.appendChild(descriptionNode);

            let isbn = document.createElement("p");
            let isbnNode = document.createTextNode("ISBN-13: " + book.bookIsbn);
            isbn.appendChild(isbnNode);


            mainNode.appendChild(article);

            //dropdown and button are child element of updateShopping, which is a child of article..
            updateShopping.appendChild(select);
            updateShopping.appendChild(button);

            article.appendChild(title);
            article.appendChild(bookCoverPic);
            article.appendChild(updateShopping);
            article.appendChild(price);
            article.appendChild(description);
            article.appendChild(isbn);


        }
    }


    class ShoppingCart {
        constructor(shoppingCartHeading) {
            this.shoppingCartHeading = shoppingCartHeading;
            this.books = [];
            this.shoppingCartSum = 0;

            this.asideShoppingCart = document.getElementById("shoppingCart");
            this.header2ShoppingCart = document.createElement("h2");
            this.textHeader2ShoppingCart = document.createTextNode(this.shoppingCartHeading);
            this.unorderedListShoppingCart = document.createElement("ul");
            this.divShoppingCartSum = document.createElement("div");
            this.divShoppingCartSum.id = "shoppingCartSum";
            this.divShoppingCartSum.textContent = "Sum: " + this.shoppingCartSum + " €";


            this.header2ShoppingCart.appendChild(this.textHeader2ShoppingCart);
            this.asideShoppingCart.appendChild(this.header2ShoppingCart);
            this.asideShoppingCart.appendChild(this.unorderedListShoppingCart);
            this.asideShoppingCart.appendChild(this.divShoppingCartSum);
        }

        // This method adds a book and the quantity of books to your shopping cart.

        addBookToShoppingCart(book) {

            let quantityOfBook = document.getElementById("select" + book.bookIsbn);

            let thisBocksQuantity = parseInt(quantityOfBook.options[quantityOfBook.selectedIndex].text);
            book.bookShoppingCartQuantity = thisBocksQuantity;
            shop.shoppingCart.books.push(book);

            let title = document.createElement("article");
            title.id = "Shoppingcart" + book.bookIsbn;
            let textNode = document.createTextNode(book.bookTitle + " " + book.bookShoppingCartQuantity + " Pcs " + book.bookPrice + " €");
            textNode.id = "Shoppingcartchild" + book.bookIsbn;
            title.appendChild(textNode);
            let button = document.createElement("BUTTON");
            button.innerHTML = "X";
            button.id = "RemoveButton" + book.bookIsbn;
            title.appendChild(button);
            button.addEventListener("click", event => this.deleteBookFromShoppingCart(book));

            shop.shoppingCart.shoppingCartSum += book.bookPrice * thisBocksQuantity;

            shop.shoppingCart.unorderedListShoppingCart.appendChild(title); //unorderedListShoppingCart gets created in the Custructor

            bookShoppingCartAmount++;

            shop.shoppingCart.showSumInShoppingCart();
        }


        // This method deletes a specific book from your shopping cart.
        deleteBookFromShoppingCart(book) {

            let removeBook = document.getElementById("RemoveButton" + book.bookIsbn);
            removeBook.parentElement.remove();

            for (let i = 0; i < shop.shoppingCart.books.length; i++) {
                // richtiges Buch wird in dem Buch Array des shoppingCarts gesucht und gelöscht.
                if (shop.shoppingCart.books[i].bookIsbn === book.bookIsbn) {
                    shop.shoppingCart.books.splice(i, 1);
                }
            }
            //die Summe des Shoppingcats wird wieder neu upgedatet.
            shop.shoppingCart.showSumInShoppingCart();

        }

        // This method updates the quantity of a specific books in your shopping cart.
        updateBookInShoppingCart(book) {

            for (let i = 0; i < shop.shoppingCart.books.length; i++) {
                if (shop.shoppingCart.books[i].bookIsbn === book.bookIsbn) {
                    let placeholder = document.getElementById("Shoppingcart" + book.bookIsbn);

                    shop.shoppingCart.books.splice(i, 1);

                    let quantityOfBook = document.getElementById("select" + book.bookIsbn);
                    let thisBocksQuantity = parseInt(quantityOfBook.options[quantityOfBook.selectedIndex].text);
                    book.bookShoppingCartQuantity = thisBocksQuantity;
                    shop.shoppingCart.books.push(book);
                    placeholder.innerHTML = book.bookTitle + " " + book.bookShoppingCartQuantity + " Pcs " + book.bookPrice + " €";

                    let button = document.createElement("BUTTON");
                    button.innerHTML = "X";
                    button.id = "RemoveButton" + book.bookIsbn;
                    placeholder.appendChild(button);
                    button.addEventListener("click", event => this.deleteBookFromShoppingCart(book));

                    shop.shoppingCart.showSumInShoppingCart();

                    return;
                }
            }

            shop.shoppingCart.addBookToShoppingCart(book)
            shop.shoppingCart.showSumInShoppingCart();

        }

        // This method prints the summarized price of the books in the shopping cart.
        showSumInShoppingCart() {

            let sumHelper = 0;
            // das Array des Shoppingcarts wird duchgegangen und die Quantität und die Buchpreise multipliziert und dann dazuaddiert.
            for (let i = 0; i < shop.shoppingCart.books.length; i++) {
                sumHelper += (parseFloat(shop.shoppingCart.books[i].bookPrice)) * shop.shoppingCart.books[i].bookShoppingCartQuantity;
            }

            sumHelper = Math.round(sumHelper * 100) / 100;

            // errechnete Betrag wird dem shoppingCartSum zugewiesen
            shop.shoppingCart.shoppingCartSum = sumHelper;

            let shoppingElement = document.getElementById("shoppingCartSum");
            shoppingElement.innerHTML = "Sum: " + shop.shoppingCart.shoppingCartSum + " €";

        }
    }

    const shop = new Shop();

/*
    let book = [];


   book[0] = new Book("HTML5", "Html5: Up And Running", "HTML5_Up_And_Running.jpg", 24.80, "If you don't know about the new features available in HTML5, now's the time to find out. The latest version of this markup language is going to significantly change the way you develop web applications, and this book provides your first real look at HTML5's new elements and attributes.", "978-0596806026");
    book[1] = new Book("HTML5", "Pocket Reference", "HTML5_Pocket_Reference.jpg", 15.90, "Need help finding the right HTML5 element or attribute for your web page or application? HTML5 Pocket Reference is the classic reference that web designers and developers have been keeping close at hand for more than thirteen years.", "978-1449363352");
    book[2] = new Book("JavaScript", "Java Script: The Definitive Guide", "JavaScript%201.jfif", 47.30, "Since 1996, JavaScript: The Definitive Guide has been the bible for JavaScript programmers programmer's guide and comprehensive reference to the core language and to the client-side JavaScript APIs defined by web browsers.", "978-1491952023");
    book[3] = new Book("JavaScript", "Java Script: The good parts", "Java%20Script%202.jfif", 23.90, "Most programming languages contain good and bad parts, but JavaScript has more than its share of the bad, having been developed and released in a hurry before it could be refined.", "978-0596517748");

    shop.addBookToScreen(book[0]);
    shop.addBookToScreen(book[1]);
    shop.addBookToScreen(book[2]);
    shop.addBookToScreen(book[3]);*/



});


