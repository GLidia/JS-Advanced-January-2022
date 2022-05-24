class LibraryCollection{
    constructor(capacity){
        this.capacity = capacity;
        this.books = [];
    }

    addBook = function(bookName, bookAuthor){
        if (this.books.length == this.capacity){
            throw new Error("Not enough space in the collection.");
        } 

        this.books.push({bookName: bookName, bookAuthor: bookAuthor, payed: false});
        return `The ${bookName}, with an author ${bookAuthor}, collect.`
    }

    payBook = function(bookName){
        if (!this.books.find(x => x.bookName == bookName)){
            throw new Error(`${bookName} is not in the collection.`);
        }

        let book = this.books.find(x => x.bookName == bookName);

        if (book.payed == true){
            throw new Error(`${bookName} has already been paid.`);
        }

        book.payed = true;
        return `${bookName} has been successfully paid.`;
    }

    removeBook(bookName){
        if (!this.books.find(x => x.bookName == bookName)){
            throw new Error("The book, you're looking for, is not found.");
        }

        let book = this.books.find(x => x.bookName == bookName);

        if (book.payed == false){
            throw new Error(`${bookName} need to be paid before removing from the collection.`)
        }

        this.books = this.books.filter(x => x.bookName != bookName);
        return `${bookName} remove from the collection.`;
    }

    getStatistics = function(bookAuthor){
        let toReturn;
        if (!bookAuthor){
            toReturn = `The book collection has ${this.capacity - this.books.length} empty spots left.\n`;
            this.books.sort((a, b) => (a.bookName).localeCompare(b.bookName));
            for(let book of this.books){
                let hasPaid;
                if (book.payed == true){
                    hasPaid = `Has Paid`;
                } else {
                    hasPaid = `Not Paid`;
                }
                toReturn += `${book.bookName} == ${book.bookAuthor} - ${hasPaid}.\n`;
            }
        } else {
            if (!this.books.find(x => x.bookAuthor == bookAuthor)){
                throw new Error(`${bookAuthor} is not in the collection.`);
            } else {
                let book = this.books.find(x => x.bookAuthor == bookAuthor);
                let hasPaid;
                if (book.payed == true){
                    hasPaid = `Has Paid`;
                } else {
                    hasPaid = `Not Paid`;
                }
                toReturn = `${book.bookName} == ${book.bookAuthor} - ${hasPaid}.`
            }
        }

        return toReturn.trim();
    }
}
const library = new LibraryCollection(2)
library.addBook('In Search of Lost Time', 'Marcel Proust');
library.addBook('Don Quixote', 'Miguel de Cervantes');
library.payBook('Don Quixote');
console.log(library.removeBook('Don Quixote'));


