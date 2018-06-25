export class ReviewServiceClient {

  USER_URL = 'http://localhost:4000/api/book/reviews';
  BOOK_URL = 'http://localhost:4000/api/book';
  ALLREVIEW = 'http://localhost:4000/api/allreviews';
  REVIEW_URL= 'http://localhost:4000/api/review';

  USER_URL_HEROKU = 'https://suledisha-project-nodejs.herokuapp.com/api/book/reviews';
  BOOK_URL_HEROKU = 'https://suledisha-project-nodejs.herokuapp.com/api/book';
  ALLREVIEW_HEROKU = 'https://suledisha-project-nodejs.herokuapp.com/api/allreviews';
  REVIEW_URL_HEROKU= 'https://suledisha-project-nodejs.herokuapp.com/api/review';

  findAllReviews() {
    return fetch(this.ALLREVIEW, {
      credentials: 'include'
    })
      .then(response => response.json());
  }

  deleteReviewById(reviewId){
    return fetch(this.REVIEW_URL + '/' + reviewId + '/delete',{
      credentials: 'include', // include, same-origin, *omit
      method: 'delete',
    }).then(response => response.json());
  }

  findReviewsForUser() {
    return fetch(this.USER_URL, {
      credentials: 'include'
    })
      .then(response => response.json());
  }

  userReviewsBook(bookId, reviewTitle, reviewText) {
    const url = this.BOOK_URL + '/' + bookId + '/reviews';
    const review = {
      title : reviewTitle,
      text: reviewText
    };
    return fetch(url, {
      method: 'post',
      body: JSON.stringify(review),
      credentials: 'include',
      headers: {
        'content-type': 'application/json'
      }
    });
  }

  userRemovesReview(bookId) {
    const url = this.BOOK_URL + '/' + bookId + '/unreviews';
    return fetch(url, {
      method: 'delete',
      credentials: 'include'
    });
  }
}
