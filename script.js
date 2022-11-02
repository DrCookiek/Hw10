// class Library {
//   constructor(name) {
//     this.name = name;
//     this.books = [];
//     this.users = [];
//   }
// }

class User {
  constructor(firstName, lastName, city) {
    this.firstName = firstName;
    this.#lastName = lastName;
    this.#city = city;
    this.borrowedBooks = [];
  }
  // borrow() {
  //   this.borrowedBooks.push(availableBooks.name);
  // }
}
