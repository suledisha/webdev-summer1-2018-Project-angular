import { Component, OnInit } from '@angular/core';
import {User} from '../models/user.model.client';
import {UserServiceClient} from '../services/user.service.client';

@Component({
  selector: 'app-admin-userlist',
  templateUrl: './admin-userlist.component.html',
  styleUrls: ['./admin-userlist.component.css']
})
export class AdminUserlistComponent implements OnInit {

  users;

  constructor(private service: UserServiceClient) {
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
