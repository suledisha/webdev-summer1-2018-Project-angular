import { Component, OnInit } from '@angular/core';
import {User} from '../models/user.model.client';
import {UserServiceClient} from '../services/user.service.client';
import {AdminUserListServiceClient} from '../services/admin-userlist.service.client';

@Component({
  selector: 'app-admin-userlist',
  templateUrl: './admin-userlist.component.html',
  styleUrls: ['./admin-userlist.component.css']
})
export class AdminUserlistComponent implements OnInit {

  users;
  username;
  password;
  firstName;
  lastName;
  role;
  _id;

  constructor(private service: UserServiceClient,
              private adminService: AdminUserListServiceClient) {
  }

  add() {
    this.service.findUserByUsername(this.username).then((user) => {
      if (user._id === -1) {
        this.adminService
          .addUser(this.username, this.password, this.firstName, this.lastName, this.role)
          .then((newuser) => {
            this.service.findAllUsers()
              .then(users => this.users = users);
          });

      } else {
        alert('Username already present');
      }
  });
  }

  update() {
    // console.log(user);

    this.adminService
      .updateUser(this._id, this.username, this.password, this.firstName, this.lastName, this.role)
      .then((user) => {
        this.service.findAllUsers()
          .then(users => this.users = users);
      });

  }

  setuser(user) {
    this._id = user._id;
    this.username = user.username;
    this.password = user.password;
    this.firstName = user.firstName;
    this.lastName = user.lastName;
    this.role = user.role;
  }
  remove(userId) {
    this.service.deleteUserById(userId)
      .then((user) => {
        this.service.findAllUsers()
          .then(users => this.users = users);
      });
  }
  ngOnInit() {
    this.service.findAllUsers()
      .then(users => this.users = users);
  }

}
