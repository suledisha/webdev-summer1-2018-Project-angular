import { Component, OnInit } from '@angular/core';
import {User} from '../models/user.model.client';
import {UserServiceClient} from '../services/user.service.client';
import {Router} from '@angular/router';
import {LikeServiceClient} from '../services/like.service.client';
import {Book} from '../models/book.model.client';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private service: UserServiceClient,
              private likeService: LikeServiceClient,
              private router: Router) { }

  user = {};
  _id;
  username;
  password;
  firstName;
  lastName;
  email;
  likedBooks = [];



  logout() {
    this.service
      .logout()
      .then(() =>
        this.router.navigate(['login']));

  }


  update() {
    // console.log(user);
    this.service
      .update(this._id, this.username, this.firstName, this.lastName, this.email, '', '');

  }

  unlike(bookId) {
    this.likeService.userUnlikesBook(bookId)
      .then((likes) => {
        this.likeService
          .findLikedBooksForUser()
          .then(likedBooks => this.likedBooks = likedBooks );
      });

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
          console.log(user._id);
        } else {
          this._id = -1;
        }

      });

    if (this._id !== -1) {
      this.likeService
        .findLikedBooksForUser()
        .then(likedBooks => this.likedBooks = likedBooks );
    }
  }

}
