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
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import {UserServiceClient} from './services/user.service.client';
import {LikeServiceClient} from './services/like.service.client';
import { AuthorPageComponent } from './author-page/author-page.component';
import { AuthorBookListComponent } from './author-book-list/author-book-list.component';
import {AuthoredBookListServiceClient} from './services/authored-booklist.service.client';
import { PublicProfileComponent } from './public-profile/public-profile.component';
import {PublicProfileServiceClient} from './services/public-profile.service.client';
import {ReviewServiceClient} from './services/review.service.client';
import {FollowServiceClient} from './services/follow.service.client';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { AdminBookListComponent } from './admin-book-list/admin-book-list.component';
import { AdminReviewlistComponent } from './admin-reviewlist/admin-reviewlist.component';
import { AdminUserlistComponent } from './admin-userlist/admin-userlist.component';
import { CommunityPageComponent } from './community-page/community-page.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import {AdminUserListServiceClient} from './services/admin-userlist.service.client';
import {ShelfServiceClient} from './services/shelf.service.client';

@NgModule({
  declarations: [
    AppComponent,
    SearchPageComponent,
    BookDetailsComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    AuthorPageComponent,
    AuthorBookListComponent,
    PublicProfileComponent,
    AdminPageComponent,
    AdminBookListComponent,
    AdminReviewlistComponent,
    AdminUserlistComponent,
    CommunityPageComponent,
    LandingPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing

  ],
  providers: [SearchPageServiceClient,
    BookDetailsServiceClient,
    BookServiceClient,
    UserServiceClient,
    LikeServiceClient,
    AuthoredBookListServiceClient,
    PublicProfileServiceClient,
    ReviewServiceClient,
    FollowServiceClient,
    AdminUserListServiceClient,
    ShelfServiceClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
