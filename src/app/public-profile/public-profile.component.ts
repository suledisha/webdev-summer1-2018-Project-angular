import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {UserServiceClient} from '../services/user.service.client';
import {User} from '../models/user.model.client';
import {AuthoredBookListServiceClient} from '../services/authored-booklist.service.client';
import {LikeServiceClient} from '../services/like.service.client';
import {PublicProfileServiceClient} from '../services/public-profile.service.client';
import {ReviewServiceClient} from '../services/review.service.client';
import {FollowServiceClient} from '../services/follow.service.client';

@Component({
  selector: 'app-public-profile',
  templateUrl: './public-profile.component.html',
  styleUrls: ['./public-profile.component.css']
})
export class PublicProfileComponent implements OnInit {

  _id = '-1';
  role = ' ';
  userId: '';
  user: User;
  books = [];
  reviews = [];
  shelved =[];
  following = [];
  followedby = [];
  isUserFollowing = 0;
  followedByCurrentUser = [];

  constructor( private route: ActivatedRoute,
               private router: Router,
               private service: UserServiceClient,
               private publicProfileService: PublicProfileServiceClient,
               private reviewService: ReviewServiceClient,
               private followService: FollowServiceClient) {
    this.route.params.subscribe(params => this.loadUser(params['userId']));
  }

  loadUser(userId) {
    this.userId = userId;
    this.service.findUserById(userId)
      .then(user => {
        this.user = user;
        if (user.role === 'author') {
          this.publicProfileService
            .findAuthoredBooksUserById(user._id)
            .then(authoredBooks => this.books = authoredBooks );
          this.publicProfileService.findFollowingUserById(user._id)
            .then(following => this.following = following );
          this.publicProfileService.findFollowedByUserById(user._id)
            .then(followedby => this.followedby = followedby );
        } else {
          this.publicProfileService.findLikedBooksUserById(user._id)
            .then(likedBooks => this.books = likedBooks );
          this.publicProfileService.findReviewsUserById(user._id)
            .then(reviews => this.reviews = reviews );
          this.publicProfileService.findFollowingUserById(user._id)
            .then(following => this.following = following );
          this.publicProfileService.findFollowedByUserById(user._id)
            .then(followedby => this.followedby = followedby );
          this.publicProfileService.findShelvedBooksUserById(user._id)
            .then(shelved => this.shelved = shelved );
        }
      });

  }
  followUser() {
    if (this._id === '-1') {
      alert('Please Login/Register up to follow');
      this.router.navigate(['login']);
    } else {
      this.followService.userfollowsUser(this.userId)
        .then((follows) => {
          this.router.navigate(['profile']);
        });
    }
  }
  ngOnInit() {

    this.service
      .profile()
      .then(user => {
        if (user !== null) {
          this._id = user._id;
          this.role = user.role;
          if (this._id === this.userId) {
            this.isUserFollowing = -1;
          } else {
          this.followService.findAllFollowing()
            .then(following => {
              console.log(following);
              this.followedByCurrentUser = following;
          for (const entry of this.followedByCurrentUser) {
            if (entry.following._id === this.userId) {
              this.isUserFollowing = 1;
            }
          }});
          }}});
          // console.log(user._id);

    console.log(this.followedByCurrentUser);
    console.log(this.isUserFollowing);
    }

}
