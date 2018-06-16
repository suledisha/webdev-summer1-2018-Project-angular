import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {BookDetailsServiceClient} from '../services/book-details.service.client';
import {BookServiceClient} from '../services/book.service.client';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {

  bookId = '';
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
  constructor(private route: ActivatedRoute, private service: BookDetailsServiceClient, private bookService: BookServiceClient) {
    this.route.params.subscribe(params => this.loadBook(params['bookId']));
  }

  ngOnInit() {
  }
  likeBook(id, title) {
    this.bookService.createBook(id, title);
  }
  loadBook(bookId) {
    this.service.findBookById(bookId)
      .then(book => this.book = book);
  }
}
