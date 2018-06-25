export class FollowServiceClient {

  USER_URL = 'http://localhost:4000/api/userfollows';
  USER_URL_HEROKU = 'https://suledisha-project-nodejs.herokuapp.com/api/userfollows';



  findAllFollowing() {
    return fetch(this.USER_URL, {
      credentials: 'include'
    })
      .then(response => response.json());
  }

  userfollowsUser(userId) {
    const url = this.USER_URL + '/' + userId + '/follows';
    return fetch(url, {
      method: 'post',
      credentials: 'include'
    });
  }

  userUnfollowsUser(userId) {
    const url = this.USER_URL + '/' + userId + '/unfollows';
    return fetch(url, {
      method: 'delete',
      credentials: 'include'
    });
  }
}
