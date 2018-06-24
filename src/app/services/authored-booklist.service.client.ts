export class AuthoredBookListServiceClient {

  BOOKURL = 'http://localhost:4000/api/authoredbook';
  BOOKURL_HEROKU = 'https://suledisha-project-nodejs.herokuapp.com/api/authoredbook';

  USER_URL = 'http://localhost:4000/api/book/authors';
  USER_URL_HEROKU = 'https://suledisha-project-nodejs.herokuapp.com/book/authors';

  addToAuthoredBooks(bookId) {
    const url = this.BOOKURL + '/' + bookId;
    return fetch(url, {
      method: 'post',
      credentials: 'include'
    });
  }
  removeFromAuthoredBooks(bookId) {
    const url = this.BOOKURL + '/' + bookId;
    return fetch(url, {
      method: 'delete',
      credentials: 'include'
    });
  }

  findAuthoredBooksForUser() {
    return fetch(this.USER_URL, {
      credentials: 'include'
    })
      .then(response => response.json());
  }
}
