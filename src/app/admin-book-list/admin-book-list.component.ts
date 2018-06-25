import { Component, OnInit } from '@angular/core';
import {BookServiceClient} from '../services/book.service.client';

@Component({
  selector: 'app-admin-book-list',
  templateUrl: './admin-book-list.component.html',
  styleUrls: ['./admin-book-list.component.css']
})
export class AdminBookListComponent implements OnInit {

  constructor(private service: BookServiceClient) { }

  books;
  remove(bookId) {
    this.service.deleteBookById(bookId)
      .then((book) => {
        this.service.findAllBooks()
          .then(books => this.books = books);
      });
  }

  ngOnInit() {
    this.service.findAllBooks()
      .then(books => this.books = books);
  }

}
