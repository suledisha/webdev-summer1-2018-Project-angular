export class SearchPageServiceClient {
  findBookByTitle(title, author) {
    return fetch
    ('https://www.googleapis.com/books/v1/volumes?q=' + title + '+inauthor:' + author + '&key=AIzaSyC-1n7EYMBCWCjk5FZUz5f1otN1isYTLU0')
      .then(response => response.json());
  }
}
