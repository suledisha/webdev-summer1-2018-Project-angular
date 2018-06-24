export class UserServiceClient {

  URL = 'http://localhost:4000';
  URL_HEROKU = 'https://suledisha-project-nodejs.herokuapp.com';

  findUserById(userId) {
    return fetch(this.URL + '/api/user/' + userId)
      .then(response => response.json());
  }

  findUserByUsername(username) {
    const credentials = {
      username: username
    };
    return fetch(this.URL + '/api/register', {
      method: 'post',
      body: JSON.stringify(credentials),
      credentials: 'include', // include, same-origin, *omit
      headers: {
        'content-type': 'application/json'
      }
    }) .then(response => response.json());
  }

  profile() {
    return fetch(this.URL + '/api/profile',
      {
        credentials: 'include', // include, same-origin, *omit
      })
      .then(response => response.json());
  }
  login(username, password) {
    const credentials = {
      username : username,
      password: password
    };
    return fetch(this.URL + '/api/login', {
      method: 'post',
      body: JSON.stringify(credentials),
      credentials: 'include', // include, same-origin, *omit
      headers: {
        'content-type': 'application/json'
      }
    }).then(response => response.json());
  }
  logout() {
    return fetch(this.URL + '/api/logout', {
      method: 'post',
      credentials: 'include', // include, same-origin, *omit
    });
  }

  createUser(username, password, role) {
    const user = {
      username: username,
      password: password,
      role: role
    };
    return fetch(this.URL + '/api/user', {
      body: JSON.stringify(user),
      credentials: 'include', // include, same-origin, *omit
      method: 'post',
      headers: {
        'content-type': 'application/json'
      }
    });
  }
  update(_id, username, firstName, lastName, email, bio, snippet) {
    const url = this.URL + '/api/profile';
    const user = {_id, username, firstName, lastName, email, bio, snippet};
    return fetch(url, {
      method: 'put',
      body: JSON.stringify(user),
      credentials: 'include',
      headers: {
        'content-type': 'application/json'
      }
    });
  }
}