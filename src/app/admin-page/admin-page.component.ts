import { Component, OnInit } from '@angular/core';
import {UserServiceClient} from '../services/user.service.client';
import {Router} from '@angular/router';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {

  constructor(private service: UserServiceClient,
              private router: Router) { }

  user = {};
  _id;
  username;
  password;
  firstName;
  lastName;
  email;
  role;

  logout() {
    this.service
      .logout()
      .then(() =>
        this.router.navigate(['login']));

  }
  update() {
    // console.log(user);
    this.service
      .update(this._id, this.username, this.firstName, this.lastName, this.email, '', '', this.role);

  }

  ngOnInit() {
    this.service
      .profile()
      .then(user => {
        if (user !== null) {
          this._id = user._id;
          this.username = user.username;
          this.firstName = user.firstName;
          this.lastName = user.lastName;
          this.email = user.email;
          this.role = user.role;
          console.log(user._id);
        } else {
          this._id = -1;
        }

      });
  }

}
