class Library {
  constructor(name) {
    this.name = name;
    this.books = [];
    this.users = [];
  }
  print() {
    // let results = [];
    // this.books.forEach(book => {
    //     if (book.user === null) {
    //         results.push( `${book.name} is not borrowed.`);
    //     } else {
    //         results.push(`${book.name} is borrowed by ${book.user.name}; total: ${book.total()}.`)
    //     }
    // });
    // document.body.innerHTML = results.join('<br>');

    document.body.innerHTML =
      `<h1>${this.name}</h1>` +
      this.books
        .map((book) => {
          if (book.user === null) {
            return `${book.name} is not borrowed.`;
          }
          return `${book.name} is borrowed by ${
            book.user.name
          }; total: ${book.total()}.`;
        })
        .join("<br>");
  }
}

class User {
  constructor(name, library) {
    this.name = name;
    library.users.push(this);
  }
}

class BookBase {
  constructor(name) {
    this.name = name;
    this.user = null;
  }
}

class NonBorrowable extends BookBase {
  constructor(name) {
    super(name);
  }
  borrow() {
    alert(`${this.name} cannot be borrowed.`);
  }
}

class Borrowable extends BookBase {
  constructor(name, pricePerDay) {
    super(name);
    this.pricePerDay = pricePerDay;
  }
  borrow(user, countOfDays) {
    if (user == null) {
      alert("Invalid user");
      return;
    }
    if (!Number.isSafeInteger(countOfDays) || countOfDays < 0) {
      alert("Invalid count of days");
      return;
    }
    if (this.user !== null) {
      alert("This book has already been borrowed.");
      return;
    }

    this.user = user;
    this.countOfDays = countOfDays;
  }
  returnBook() {
    this.user = null;
    this.countOfDays = null;
  }
  total() {
    return this.pricePerDay * this.countOfDays;
  }
}

let library = new Library("The best Books library");

let book1 = new Borrowable("Book1", 2.5);
library.books.push(book1);
library.books.push(new Borrowable("Book2", 2));
library.books.push(new Borrowable("Book", 3));
library.books.push(new Borrowable("Book", 4));

// let fbwtft = new NonBorrowable('Fantastic Beasts and Where to Find Them');
library.books.push(
  new NonBorrowable("Fantastic Beasts and Where to Find Them")
);
library.books.push(new NonBorrowable("Quidditch Throughout the Ages"));

book1.borrow(new User("karin", library), 5);
// book1.borrow(new User('karin, library), 'abcd');
// fbwtft.borrow();

library.print();

hp1.returnBook();
library.print();
