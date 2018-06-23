export class LikeServiceClient {

  USER_URL = 'http://localhost:4000/api/book/likes';
  BOOK_URL = 'http://localhost:4000/api/book';

  USER_URL_HEROKU = 'https://suledisha-project-nodejs.herokuapp.com/api/book/likes';
  BOOK_URL_HEROKU = 'https://suledisha-project-nodejs.herokuapp.com/api/book';


  findLikedBooksForUser() {
    return fetch(this.USER_URL, {
      credentials: 'include'
    })
      .then(response => response.json());
  }

  userLikesBook(bookId) {
    const url = this.BOOK_URL + '/' + bookId + '/likes';
    return fetch(url, {
      method: 'post',
      credentials: 'include'
    });
  }

  userUnlikesBook(bookId) {
    const url = this.BOOK_URL + '/' + bookId + '/unlikes';
    return fetch(url, {
      method: 'delete',
      credentials: 'include'
    });
  }
}
