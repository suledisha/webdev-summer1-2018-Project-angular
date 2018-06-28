import { Component, OnInit } from '@angular/core';
import {UserServiceClient} from '../services/user.service.client';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  _id = '-1';
  role = ' ';

  constructor( private userService: UserServiceClient) { }

  ngOnInit() {
    this.userService
      .profile()
      .then(user => {
        if (user !== null) {
          this._id = user._id;
          this.role = user.role;
          console.log(user._id);
        }

      });
  }

}
