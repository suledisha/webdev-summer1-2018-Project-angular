export class BookDetailsServiceClient {
  findBookById(bookId) {
    return fetch
    ('https://www.googleapis.com/books/v1/volumes/' + bookId + '?&key=AIzaSyC-1n7EYMBCWCjk5FZUz5f1otN1isYTLU0')
      .then(response => response.json());
  }
}
