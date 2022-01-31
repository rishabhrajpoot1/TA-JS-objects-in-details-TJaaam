## An object-oriented book-list!

- [ ] Create a class BookList
- [ ] Create another class called Book

#### Each Book should have several properties:

1. Title
2. Category
3. Author
4. isRead (default to `false`)
5. finishedDate

Book class will have the following methods:

- `markBookAsRead` when called will change the `isRead` property on the book to be `true`. It will also change the `finishedDate` to be the `Date.now()` when this function is called.

```js
class Book{
    constructor(Title,Category,Author,isRead=false,finishedDate){
        this.Title = Title;
        this.Category = Category;
        this.Author = Author;
        this.isRead = isRead;
        this.finishedDate = finishedDate;
    }
    markBookAsRead(){
        this.isRead = false;
    }
    finishedNewDate(){
        let a = Date(Date.now());
        let b = a.toString();
        this.finishedDate = b;
        console.log(this);
    }
}

let Book1 = new Book("Sherlock Holmes","thriller","canon",true,"Wed May 26 2021 21:42:36 GMT+0530 (India Standard Time)");
let Book2 =  new Book("lucia","thriller","canon",true,"Wed May 26 2021 21:42:36 GMT+0530 (India Standard Time)");
let Book3 =  new Book("wow","thriller","canon",true,"Wed May 26 2021 21:42:36 GMT+0530 (India Standard Time)");
Book1.finishedNewDate();
BOOk1.markBookAsRead();//
```

#### BookList should have the following properties:

1. An array of all the Books
2. Current read book index

#### BookList Methods

- [] `add([Book])` will accept an array (list of books). Once the method is called the book will added to the list.
- [] `getCurrentBook()` should return the current book using the `index` and the book array
- [] `getNextBook()` should return the next book using the `index` and the book array
- [] `getPrevBook()` should return the previous book using the `index` and the book array
- [] `changeCurrentBook` should accept one parameter and update the current index.

```js
class BookList{
    constructor(arrayOfBooks,currentReadBook = 1){
        this.arrayOfBooks = arrayOfBooks;
        this.currentReadBook = currentReadBook;
    }
    add(book){
        this.arrayOfBooks.push(book);
    }
    getCurrentBook(){
        return this.arrayOfBooks[this.currentReadBook];
    }
    getNextBook(){
        return this.arrayOfBooks[this.currentReadBook+1];
    }
    getPrevBook(){
        return this.arrayOfBooks[this.currentReadBook-1];
    }
    set changeCurrentBook(value){
        this.currentReadBook = value;
    }
}
let books = new BookList([Book1,Book2]);
books.add(Book3);
books.changeCurrentBook = 0;
books.getCurrentBook();
books.getNextBook();
books.getPrevBook();
```

After creating the Book and BookList class create 5 book object and add it to list. Test all the methods in Book and BookList class.
