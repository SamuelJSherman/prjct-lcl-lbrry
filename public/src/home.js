function getTotalBooksCount(books) {
  return books.length;
}

function getTotalAccountsCount(accounts) {
  return accounts.length;
}

function getBooksBorrowedCount(books) {
  let borrowedBooks = books.filter((book) => book.borrows.some((borrow) => borrow.returned === false))
  return borrowedBooks.length;
}

function getMostCommonGenres(books) {
  let genresArr = [];
  books.forEach((book) => {
    if (genresArr.some((genr) => genr.name === book.genre)) {
      for (let i = 0; i < genresArr.length; i++){
        if ( genresArr[i].name === book.genre) {
          genresArr[i].count += 1;
        }
      }
    } else {
      let newObject = {};
      newObject.name = book.genre;
      newObject.count = 1;
      genresArr.push(newObject);
    }
  })
  genresArr.sort((a, b) => b.count - a.count);
  return genresArr.slice (0, 5);
}

function getMostPopularBooks(books) {
  let popBooks = books.map((book) => {
    let newObject = {};
    newObject.name = book.title;
    newObject.count = book.borrows.length
    return newObject
  })
popBooks.sort((a, b) => b.count - a.count)

  return popBooks.slice(0, 5)

}

function getMostPopularAuthors(books, authors) {
  books.forEach((book) => {
    let number = book.borrows.length
    let theAuthor = authors.find((person) => person.id === book.authorId);
    let theName = `${theAuthor.name.first} ${theAuthor.name.last}`
    book['name'] = theName;
    book['count'] = number;
  })
  let newArr = books.map(({ name, count }) => ({name, count}))
  let finalArr = []
  newArr.forEach((item) => {
    if (finalArr.some((obj) => obj.name === item.name)) {
      for (let i = 0; i <finalArr.length; i++) {
        if (finalArr[i].name === item.name) {
          finalArr[i].count += item.count
        }
      }
    } else {
      let newObject = {}
      newObject.name = item.name;
      newObject.count = item.count;
    finalArr.push(newObject);
    }
  })
  finalArr.sort((a, b) => b.count - a.count)
  return finalArr.slice(0,5)
}


module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
