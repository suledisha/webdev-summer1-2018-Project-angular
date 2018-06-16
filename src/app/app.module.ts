import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SearchPageComponent } from './search-page/search-page.component';
import {SearchPageServiceClient} from './services/search-page.service.client';
import {FormsModule} from '@angular/forms';
import {routing} from './app.routing';
import { BookDetailsComponent } from './book-details/book-details.component';
import {BookDetailsServiceClient} from './services/book-details.service.client';
import {BookServiceClient} from './services/book.service.client';

@NgModule({
  declarations: [
    AppComponent,
    SearchPageComponent,
    BookDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing

  ],
  providers: [SearchPageServiceClient, BookDetailsServiceClient, BookServiceClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
