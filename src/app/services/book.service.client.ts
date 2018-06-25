import { environment } from '../../environments/environment';
export class BookServiceClient {
  URL = environment.apiUrl;

  BOOKURL = this.URL + '/api/book';

  // BOOKURL_HEROKU = 'https://suledisha-project-nodejs.herokuapp.com/api/book';

  // ALLBOOKURL = 'http://localhost:4000/api/allbooks';
  // ALLBOOKURL_HEROKU = 'https://suledisha-project-nodejs.herokuapp.com/api/allbooks';

  createBook(id, title) {
    const book = {
      id: id,
      title: title
    };
    return fetch(this.BOOKURL, {
      body: JSON.stringify(book),
      credentials: 'include', // include, same-origin, *omit
      method: 'post',
      headers: {
        'content-type': 'application/json'
      }
    }) .then(response => response.json());
  }

  findAllBooks() {
    return fetch(this.BOOKURL, {
      credentials: 'include',  // include, same-origin, *omit
      method: 'get'
    }).then(response => response.json());
  }

  deleteBookById(bookId) {
    return fetch(this.BOOKURL + '/' + bookId + '/delete',{
      credentials: 'include', // include, same-origin, *omit
      method: 'delete',
    }).then(response => response.json());
  }
}

