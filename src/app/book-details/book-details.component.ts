import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {BookDetailsServiceClient} from '../services/book-details.service.client';
import {BookServiceClient} from '../services/book.service.client';
import {LikeServiceClient} from '../services/like.service.client';
import {ReviewServiceClient} from '../services/review.service.client';
import {UserServiceClient} from '../services/user.service.client';
import {User} from '../models/user.model.client';
import {ShelfServiceClient} from '../services/shelf.service.client';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {

  _id = '-1';
  role = ' ';
  reviews;
  likes;
  bookId = '';
  reviewText = '';
  reviewTitle = '';
  likedByCurrentUser =[];
  shelvedByCurrentUser =[];
  alreadyLikes = 0;
  alreadyShelved = 0;
  book_id = '';
  book = {
    id: '',
    volumeInfo: {
      title: '',
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
              private userService: UserServiceClient,
              private service: BookDetailsServiceClient,
              private bookService: BookServiceClient,
              private likeService: LikeServiceClient,
              private reviewService: ReviewServiceClient,
              private shelfService: ShelfServiceClient) {
    this.route.params.subscribe(params => this.loadBook(params['bookId']));
  }

  ngOnInit() {
    this.userService
      .profile()
      .then(user => {
        if (user !== null) {
          this._id = user._id;
          this.role = user.role;
          console.log(user._id);
          this.likeService.findLikedBooksForUser()
            .then(likes => {
              console.log(likes);
              this.likedByCurrentUser = likes;
              for (const entry of this.likedByCurrentUser) {
                if (entry.book._id === this.book_id) {
                  this.alreadyLikes = 1;
                }
              }});
          this.shelfService.findShelvedForUser()
            .then(shelf => {
              console.log(shelf);
              this.shelvedByCurrentUser = shelf;
              for (const entry of this.shelvedByCurrentUser) {
                if (entry.book._id === this.book_id) {
                  this.alreadyShelved = 1;
                }
              }});
        }

      });
    console.log(this._id, this.role);
  }

  likeBook(id, title) {
    if (this._id === '-1') {
      alert('Please Login/Register up to like');
      this.router.navigate(['login']);
    } else {
      this.bookService.findBookByCredential(id)
        .then(book => {
          if (book._id === '-1') {
            this.bookService.createBook(id, title)
              .then(newbook => {
                this.likeService.userLikesBook(newbook._id);
              }).then((like) => {
              this.router.navigate(['profile']);
            });
          } else {
            this.likeService.userLikesBook(book._id)
              .then((like) => {
                this.router.navigate(['profile']);
              });
          }
        });
    }
  }

  submitReview(id, title) {
    if (this._id === '-1') {
      alert('Please Login/Register up to review');
      this.router.navigate(['login']);
    } else {
      this.bookService.findBookByCredential(id)
        .then(book => {
          if (book._id === '-1') {
            this.bookService.createBook(id, title)
              .then(newbook => {
                this.reviewService.userReviewsBook(newbook._id, this.reviewTitle, this.reviewText)
                  .then((review) => {
                    this.router.navigate(['profile']);
                  });
              });
          } else {
            this.reviewService.userReviewsBook(book._id, this.reviewTitle, this.reviewText)
              .then((review) => {
                this.router.navigate(['profile']);
              });
          }
        });
    }
  }

  shelfBook(id, title) {
      if (this._id === '-1') {
        alert('Please Login/Register up to shelve books');
        this.router.navigate(['login']);
      } else {
        this.bookService.findBookByCredential(id)
          .then(book => {
            if (book._id === '-1') {
              this.bookService.createBook(id, title)
                .then(newbook => {
                  this.shelfService.userShelvesBook(newbook._id, 'Read')
                    .then((shelf) => {
                      this.router.navigate(['profile']);
                    });
                });
            } else {
              this.shelfService.userShelvesBook(book._id, 'Read')
                .then((shelf) => {
                  this.router.navigate(['profile']);
                });
            }
          });
      }
    }



  loadBook(bookId) {
    this.bookId = bookId;
    this.service.findBookById(bookId)
      .then(book => this.book = book);
    this.bookService.findBookByCredential(this.bookId)
      .then(book => {
        this.book_id = book._id
        if (book._id !== '-1') {
          this.reviewService.findReviewsForBook(book._id)
            .then(reviews => this.reviews = reviews);
          this.likeService.findLikesForBooks(book._id)
            .then(likes => this.likes = likes.count);
        }
      });
  }
}
