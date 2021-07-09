function findAccountById(accounts, id) {
  let found = accounts.find((account) => account.id === id);
  return found;
}

function sortAccountsByLastName(accounts) {
  accounts.sort((accountA, accountB) => accountA.name.last.toLowerCase() > accountB.name.last.toLowerCase() ? 1 : -1);
  console.log(accounts);
  return accounts;
}

function getTotalNumberOfBorrows(account, books) {
  let count = [];
  books.forEach((book) => {
    book.borrows.forEach((borrow) =>
    count.push(borrow.id))
  })
  let total = count.filter((bookId) => bookId === account.id)
  let result = total.length;
  return result;
}
 

function getBooksPossessedByAccount(account, books, authors) {
  let result = [];
  books.forEach((book) => {
    if(book.borrows.find((item) => item.id === account.id && !item.returned)){
      result.push(book);
    }
  })
result.forEach((book) => {
  let theAuthor = authors.find((person) => person.id == book.authorId);
  book['author'] = theAuthor;
})
return result;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
