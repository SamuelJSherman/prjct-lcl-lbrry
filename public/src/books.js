function findAuthorById(authors, id) {
  let found = authors.find((author) => author.id === id);
  return found;
}

function findBookById(books, id) {
  let foundBook = books.find((book) => book.id === id);
  return foundBook;
}

function partitionBooksByBorrowedStatus(books) {
  let loanedBooks = [];
  let returnedBooks = [];
  books.forEach((book) => {
    if (book.borrows.find((item) => item.returned === false)){
      loanedBooks.push(book)
    }else{
      returnedBooks.push(book);
    }
  })
  result = [loanedBooks, returnedBooks];
  return result;
}

function getBorrowersForBook(book, accounts) {
  let bookBorrows = book.borrows.map((borrow)=> {
    let accountInfo = findAuthorById(accounts, borrow.id)
    accountInfo.returned = borrow.returned;
    return accountInfo;
  }).slice(0, 10)
  return bookBorrows
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
