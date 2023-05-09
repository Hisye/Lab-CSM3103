function Book(bookName, authorName) {
    this.bookName = bookName;
    this.authorName = authorName;
}

Book.prototype.price = 49.99;
var myBook = new Book("Harry Potter and Hisye in the Dungeon", "Akmal Hisyam");


console.log("Book Name: " + myBook.bookName);
console.log("Author Name: " + myBook.authorName);
console.log("Price: $" + myBook.price.toFixed(2));