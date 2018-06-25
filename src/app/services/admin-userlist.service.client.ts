import { environment } from '../../environments/environment';
export class AdminUserListServiceClient {

  URL = environment.apiUrl;
  // URL = 'http://localhost:4000';
  // URL_HEROKU = 'https://suledisha-project-nodejs.herokuapp.com';

  addUser(username, password, firstName, lastName, role) {
    const user = {
      username: username,
      password: password,
      role: role,
      firstName: firstName,
      lastName: lastName
    };
    return fetch(this.URL + '/api/admin/adduser', {
      body: JSON.stringify(user),
      credentials: 'include', // include, same-origin, *omit
      method: 'post',
      headers: {
        'content-type': 'application/json'
      }
    });
  }

  updateUser(_id, username, password, firstName, lastName, role){
    const user = {
      _id: _id,
      username: username,
      password: password,
      role: role,
      firstName: firstName,
      lastName: lastName
    };
    return fetch(this.URL + '/api/admin/updateuser', {
      body: JSON.stringify(user),
      credentials: 'include', // include, same-origin, *omit
      method: 'put',
      headers: {
        'content-type': 'application/json'
      }
    });
  }

}
