export class BookServiceClient {

  BOOKURL = 'http://localhost:4000/api/book';
  BOOKURL_HEROKU = 'https://suledisha-project-nodejs.herokuapp.com/api/book';

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
}

