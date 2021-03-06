import { environment } from '../../environments/environment';
export class LikeServiceClient {

  URL = environment.apiUrl;

  USER_URL = this.URL + '/api/book/likes';
  BOOK_URL = this.URL + '/api/book';

  // USER_URL_HEROKU = 'https://suledisha-project-nodejs.herokuapp.com/api/book/likes';
 //  BOOK_URL_HEROKU = 'https://suledisha-project-nodejs.herokuapp.com/api/book';


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

  findLikesForBooks(bookId) {
    const url = this.BOOK_URL + '/' + bookId + '/likes';
    return fetch(url, {
      credentials: 'include'
    }).then(response => response.json());
  }
}
