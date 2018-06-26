import { environment } from '../../environments/environment';
export class PublicProfileServiceClient {

  URL = environment.apiUrl;
  // URL = 'http://localhost:4000';
  // URL_HEROKU = 'https://suledisha-project-nodejs.herokuapp.com';

  findLikedBooksUserById(userId) {
    return fetch(this.URL + '/api/user/' + userId + '/liked')
      .then(response => response.json());
  }

  findAuthoredBooksUserById(userId) {
    return fetch(this.URL + '/api/user/' + userId + '/authored')
      .then(response => response.json());
  }

  findReviewsUserById(userId) {
    return fetch(this.URL + '/api/user/' + userId + '/reviewed')
      .then(response => response.json());
  }

  findFollowingUserById(userId) {
    return fetch(this.URL + '/api/user/' + userId + '/userfollows')
      .then(response => response.json());
  }

  findFollowedByUserById(userId) {
  return fetch(this.URL + '/api/user/' + userId + '/userfollowedby')
.then(response => response.json());
}
}
