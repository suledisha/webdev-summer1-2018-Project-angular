import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {BookDetailsServiceClient} from '../services/book-details.service.client';
import {BookServiceClient} from '../services/book.service.client';
import {LikeServiceClient} from '../services/like.service.client';
import {ReviewServiceClient} from '../services/review.service.client';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {

  bookId = '';
  reviewText = '';
  reviewTitle ='';
  book = {
    id: '',
    volumeInfo : {
      title : '',
      averageRating: '',
      description: '',
      publisher: '',
      publishedDate: '',
      imageLinks: {
        smallThumbnail: ''
      },
      authors: []
    }
  };
  constructor(private route: ActivatedRoute,
              private router: Router,
              private service: BookDetailsServiceClient,
              private bookService: BookServiceClient,
              private likeService: LikeServiceClient,
              private reviewService : ReviewServiceClient) {
    this.route.params.subscribe(params => this.loadBook(params['bookId']));
  }

  ngOnInit() {
  }

  likeBook(id, title) {
    this.bookService.createBook(id, title)
      .then(book => {
        this.likeService.userLikesBook(book._id);
      });
  }

  submitReview(id, title) {

    this.bookService.createBook(id, title)
      .then(book => {
        this.reviewService.userReviewsBook(book._id, this.reviewTitle, this.reviewText);
      });
  }


  loadBook(bookId) {
    this.bookId = bookId;
    this.service.findBookById(bookId)
      .then(book => this.book = book);
  }
}
