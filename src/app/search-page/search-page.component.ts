import { Component, OnInit } from '@angular/core';
import {SearchPageServiceClient} from '../services/search-page.service.client';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit {

  books = [];
  title: String;
  author: String;
  constructor(private service: SearchPageServiceClient) {

  }

  ngOnInit() {
  }
  findBook(title, author) {
    this.service.findBookByTitle(title, author)
      .then(books =>
        this.books = books.items);
  }

}
