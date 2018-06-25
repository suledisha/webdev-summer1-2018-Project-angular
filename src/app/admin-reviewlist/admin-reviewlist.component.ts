import { Component, OnInit } from '@angular/core';
import {ReviewServiceClient} from '../services/review.service.client';

@Component({
  selector: 'app-admin-reviewlist',
  templateUrl: './admin-reviewlist.component.html',
  styleUrls: ['./admin-reviewlist.component.css']
})
export class AdminReviewlistComponent implements OnInit {

  constructor(private service: ReviewServiceClient) { }
  reviews;

  remove(reviewId) {
    this.service.deleteReviewById(reviewId)
      .then((rev) => {
        this.service.findAllReviews()
          .then(reviews => this.reviews = reviews);
      });
  }

  ngOnInit() {
    this.service.findAllReviews()
      .then(reviews => this.reviews = reviews);
  }

}
