import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {UserServiceClient} from '../services/user.service.client';
import {User} from '../models/user.model.client';
import {AuthoredBookListServiceClient} from '../services/authored-booklist.service.client';
import {LikeServiceClient} from '../services/like.service.client';
import {PublicProfileServiceClient} from '../services/public-profile.service.client';
import {ReviewServiceClient} from '../services/review.service.client';

@Component({
  selector: 'app-public-profile',
  templateUrl: './public-profile.component.html',
  styleUrls: ['./public-profile.component.css']
})
export class PublicProfileComponent implements OnInit {

  userId: '';
  user: User;
  books = [];
  reviews = [];

  constructor( private route: ActivatedRoute,
               private service: UserServiceClient,
               private publicProfileService: PublicProfileServiceClient,
               private reviewService: ReviewServiceClient) {
    this.route.params.subscribe(params => this.loadUser(params['userId']));
  }

  loadUser(userId) {
    this.userId = userId;
    this.service.findUserById(userId)
      .then(user => {
        this.user = user
        if (user.role === 'author') {
          this.publicProfileService
            .findAuthoredBooksUserById(user._id)
            .then(authoredBooks => this.books = authoredBooks );
        } else {
          this.publicProfileService.findLikedBooksUserById(user._id)
            .then(likedBooks => this.books = likedBooks );
          this.publicProfileService.findReviewsUserById(user._id)
            .then(reviews => this.reviews = reviews );

        }
      });

  }
  ngOnInit() {
  }

}
