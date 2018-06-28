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
  alreadyauthored = 0;
  constructor(private service: AuthoredBookListServiceClient,
              private bookDetailService: BookDetailsServiceClient,
              private bookService: BookServiceClient) { }

  addToAuthoredBooks() {
    this.bookDetailService.findBookById(this.volumeId)
      .then(foundbook => {
        this.bookService.findBookByCredential(this.volumeId)
          .then(book => {
            if (book._id === '-1') {
              this.bookService.createBook(foundbook.id, foundbook.volumeInfo.title)
                .then(newbook => {
                  this.service.addToAuthoredBooks(newbook._id);
                })
                .then(authored => {
                  this.service
                    .findAuthoredBooksForUser()
                    .then(authoredBooks => this.authoredBooks = authoredBooks);
                });
            } else {
              for (const entry of this.authoredBooks) {
                if (entry.book._id === book._id) {
                  this.alreadyauthored = 1;
                }
              }
              if (this.alreadyauthored === 0) {
                this.service.addToAuthoredBooks(book._id)
                  .then(authored => {
                    this.service
                      .findAuthoredBooksForUser()
                      .then(authoredBooks => this.authoredBooks = authoredBooks);
                  });
              } else {
                alert('Already authored!');
              }
            }
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
