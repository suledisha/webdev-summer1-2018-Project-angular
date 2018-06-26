import { Component, OnInit } from '@angular/core';
import {SearchPageServiceClient} from '../services/search-page.service.client';
import {UserServiceClient} from '../services/user.service.client';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit {

  books = [];
  title: String;
  author: String;
  _id;
  role;
  constructor(private service: SearchPageServiceClient,
              private userService: UserServiceClient) {

  }

  ngOnInit() {
    this.userService
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
  }
  findBook(title, author) {
    this.service.findBookByTitle(title, author)
      .then(books =>
        this.books = books.items);
  }

}
