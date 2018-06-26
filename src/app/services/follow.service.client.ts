import { environment } from '../../environments/environment';
export class FollowServiceClient {

  URL = environment.apiUrl;

  FOLLOW_URL = this.URL + '/api/userfollows';
 // USER_URL_HEROKU = 'https://suledisha-project-nodejs.herokuapp.com/api/userfollows';

  FOLLOWEDBY_URL = this.URL + '/api/userfollowedby';

  findAllFollowing() {
    return fetch(this.FOLLOW_URL, {
      credentials: 'include'
    })
      .then(response => response.json());
  }

  findAllFollowedBy() {
    return fetch(this.FOLLOWEDBY_URL, {
      credentials: 'include'
    })
      .then(response => response.json());
  }

  userfollowsUser(userId) {
    const url = this.FOLLOW_URL + '/' + userId + '/follows';
    return fetch(url, {
      method: 'post',
      credentials: 'include'
    });
  }

  userUnfollowsUser(userId) {
    const url = this.FOLLOW_URL + '/' + userId + '/unfollows';
    return fetch(url, {
      method: 'delete',
      credentials: 'include'
    });
  }
}
