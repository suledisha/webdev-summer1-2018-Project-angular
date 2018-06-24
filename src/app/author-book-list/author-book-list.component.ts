import { Component, OnInit } from '@angular/core';
import {AuthoredBookListServiceClient} from '../services/authored-booklist.service.client';
import {BookDetailsServiceClient} from '../services/book-details.service.client';
import {BookServiceClient} from '../services/book.service.client';

@Component({
  selector: 'app-author-book-list',
  templateUrl: './author-book-list.component.html',
  styleUrls: ['./author-book-list.component.css']
})
export class AuthorBookListComponent implements OnInit {

  volumeId = '';
  authoredBooks = [];
  constructor(private service: AuthoredBookListServiceClient,
              private bookDetailService: BookDetailsServiceClient,
              private bookService: BookServiceClient) { }

  addToAuthoredBooks() {
    this.bookDetailService.findBookById(this.volumeId)
      .then(book => {
        this.bookService.createBook(book.id, book.volumeInfo.title)
          .then(newbook => {
          this.service.addToAuthoredBooks(newbook._id);
        })
          .then(authored => {
          this.service
            .findAuthoredBooksForUser()
            .then(authoredBooks => this.authoredBooks = authoredBooks );
        });
      });
  }
  removeFromAuthoredBooks(bookId) {
    this.service.removeFromAuthoredBooks(bookId)
      .then(authored => {
      this.service
        .findAuthoredBooksForUser()
        .then(authoredBooks => this.authoredBooks = authoredBooks );
    });
  }

  ngOnInit() {
    this.service
      .findAuthoredBooksForUser()
      .then(authoredBooks => this.authoredBooks = authoredBooks );
  }

}
