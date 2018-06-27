import { environment } from '../../environments/environment';

export class ShelfServiceClient {

  URL = environment.apiUrl;

  USER_URL = this.URL + '/api/book/shelf';
  BOOK_URL = this.URL + '/api/book';
  ALLSHELVED = this.URL + '/api/allshelved';
  SHELF_URL = this.URL + '/api/shelf';

  // USER_URL_HEROKU = 'https://suledisha-project-nodejs.herokuapp.com/api/book/reviews';
  // BOOK_URL_HEROKU = 'https://suledisha-project-nodejs.herokuapp.com/api/book';
  // ALLREVIEW_HEROKU = 'https://suledisha-project-nodejs.herokuapp.com/api/allreviews';
  // REVIEW_URL_HEROKU = 'https://suledisha-project-nodejs.herokuapp.com/api/review';

  findAllShelved() {
    return fetch(this.ALLSHELVED, {
      credentials: 'include'
    })
      .then(response => response.json());
  }

  deleteShelvedById(shelfId) {
    return fetch(this.SHELF_URL + '/' + shelfId + '/delete',{
      credentials: 'include', // include, same-origin, *omit
      method: 'delete',
    }).then(response => response.json());
  }

  findShelvedForUser() {
    return fetch(this.SHELF_URL, {
      credentials: 'include'
    })
      .then(response => response.json());
  }

  findShelvedForBook(bookId) {
    const url = this.BOOK_URL + '/' + bookId + '/shelf';
    return fetch(url, {
      credentials: 'include'
    })
      .then(response => response.json());
  }

  userShelvesBook(bookId, shelfTitle) {
    const url = this.BOOK_URL + '/' + bookId + '/shelf';
    const shelf = {
      title : shelfTitle,
    };
    return fetch(url, {
      method: 'post',
      body: JSON.stringify(shelf),
      credentials: 'include',
      headers: {
        'content-type': 'application/json'
      }
    });
  }

  userUnshelvesBook(bookId) {
    const url = this.BOOK_URL + '/' + bookId + '/unshelf';
    return fetch(url, {
      method: 'delete',
      credentials: 'include'
    });
  }
}
