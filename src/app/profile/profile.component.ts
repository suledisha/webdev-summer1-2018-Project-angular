import { Component, OnInit } from '@angular/core';
import {User} from '../models/user.model.client';
import {UserServiceClient} from '../services/user.service.client';
import {Router} from '@angular/router';
import {LikeServiceClient} from '../services/like.service.client';
import {Book} from '../models/book.model.client';
import {ReviewServiceClient} from '../services/review.service.client';
import {FollowServiceClient} from '../services/follow.service.client';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private service: UserServiceClient,
              private likeService: LikeServiceClient,
              private reviewService: ReviewServiceClient,
              private followService: FollowServiceClient,
              private router: Router) { }

  user = {};
  _id;
  username;
  password;
  firstName;
  lastName;
  email;
  likedBooks = [];
  reviews = [];
  following = [];
  followedby = [];


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

  removeReview(bookId) {
    this.reviewService.userRemovesReview(bookId)
      .then((review) => {
        this.reviewService
          .findReviewsForUser()
          .then(reviews => this.reviews = reviews );
      });

  }

  unfollow(userId) {
    this.followService.userUnfollowsUser(userId)
      .then((follow) => {
        this.followService.findAllFollowing()
          .then(following => this.following = following);
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
        .then(likedBooks => this.likedBooks = likedBooks);
      this.reviewService.findReviewsForUser()
        .then(reviews => this.reviews = reviews);
      this.followService.findAllFollowing()
        .then(following => this.following = following);
      this.followService.findAllFollowedBy()
        .then(followedby => this.followedby = followedby);

      console.log(this.followedby);
    }
  }

}
