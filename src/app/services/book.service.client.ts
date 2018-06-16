export class BookServiceClient {
  createBook(id, title) {
    const book = {
      id: id,
      title: title
    };
    return fetch('http://localhost:4000/api/book', {
      body: JSON.stringify(book),
      credentials: 'include', // include, same-origin, *omit
      method: 'post',
      headers: {
        'content-type': 'application/json'
      }
    });
  }
}
