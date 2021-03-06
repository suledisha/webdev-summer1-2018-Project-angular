import { Component, OnInit } from '@angular/core';
import {Route, Router} from '@angular/router';
import {UserServiceClient} from '../services/user.service.client';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username;
  password;
  login(username, password) {
    console.log([username, password]);
    this.service.login(username, password)
      .then((user) => {
        if (user._id === -1) {
          alert('Invalid');
        } else if (user.role === 'author') {
          this.router.navigate(['author-page']);
        } else if (user.role === 'admin') {
          this.router.navigate(['admin-page']);
        } else {
          this.router.navigate(['profile']);
        }
      });

  }

  constructor(private router: Router, private service: UserServiceClient) { }

  ngOnInit() {
  }

}
