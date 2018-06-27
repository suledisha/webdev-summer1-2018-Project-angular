import { Component, OnInit } from '@angular/core';
import {UserServiceClient} from '../services/user.service.client';
import {Router} from '@angular/router';
import {FollowServiceClient} from '../services/follow.service.client';

@Component({
  selector: 'app-author-page',
  templateUrl: './author-page.component.html',
  styleUrls: ['./author-page.component.css']
})
export class AuthorPageComponent implements OnInit {

  constructor(private service: UserServiceClient,
              private followService: FollowServiceClient,
              private router: Router) { }

  _id;
  username;
  password;
  firstName;
  lastName;
  email;
  bio;
  snippet;
  authoredBooks = [];
  following = [];
  followedby = [];

  logout() {
    this.service
      .logout()
      .then(() =>
        this.router.navigate(['login']));

  }
  unfollow(userId) {
    this.followService.userUnfollowsUser(userId)
      .then((follow) => {
        this.followService.findAllFollowing()
          .then(following => this.following = following);
      });

  }

  update() {
    // console.log(user);
    this.service
      .update(this._id, this.username, this.firstName, this.lastName, this.email, this.bio, this.snippet);

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
          this.bio = user.bio;
          this.snippet = user.snippet;
          console.log(user._id);
        } else {
          this._id = -1;
        }

      });

    if (this._id !== -1) {
      this.followService.findAllFollowing()
        .then(following => this.following = following);
      this.followService.findAllFollowedBy()
        .then(followedby => this.followedby = followedby);

    }
  }

}
