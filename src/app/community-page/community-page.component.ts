import { Component, OnInit } from '@angular/core';
import {BookServiceClient} from '../services/book.service.client';
import {UserServiceClient} from '../services/user.service.client';

@Component({
  selector: 'app-community-page',
  templateUrl: './community-page.component.html',
  styleUrls: ['./community-page.component.css']
})
export class CommunityPageComponent implements OnInit {

  constructor(private bookservice: BookServiceClient,
              private userservice: UserServiceClient) { }
  books;
  authors;
  readers;
  _id;
  role;

  ngOnInit() {
    this.userservice
      .profile()
      .then(user => {
        if (user !== null) {
          this._id = user._id;
          this.role = user.role;
          console.log(user._id);
        } else {
          this._id = -1;
          this.role = '';
        }

      });
    this.bookservice.findAllBooks()
      .then(books => this.books = books);
    this.userservice.findAllAuthors()
      .then(authors => this.authors = authors);
    this.userservice.findAllReaders()
      .then(readers => this.readers = readers);
  }

}
