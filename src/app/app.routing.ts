import { Routes, RouterModule } from '@angular/router';
import {SearchPageComponent} from './search-page/search-page.component';
import {BookDetailsComponent} from './book-details/book-details.component';
import {ProfileComponent} from './profile/profile.component';
import {RegisterComponent} from './register/register.component';
import {LoginComponent} from './login/login.component';
import {AuthorPageComponent} from './author-page/author-page.component';
import {AuthorBookListComponent} from './author-book-list/author-book-list.component';
import {PublicProfileComponent} from './public-profile/public-profile.component';
import {AdminPageComponent} from './admin-page/admin-page.component';
import {AdminBookListComponent} from './admin-book-list/admin-book-list.component';
import {AdminReviewlistComponent} from './admin-reviewlist/admin-reviewlist.component';
import {AdminUserlistComponent} from './admin-userlist/admin-userlist.component';


const appRoutes: Routes = [
  { path: '', redirectTo: 'search', pathMatch: 'full'},
  { path: 'search', component: SearchPageComponent},
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'profile', component: ProfileComponent},
  { path: 'admin-page', component: AdminPageComponent},
  { path: 'bookList', component: AdminBookListComponent},
  { path: 'reviewList', component: AdminReviewlistComponent},
  {path: 'userList', component: AdminUserlistComponent},
  { path: 'author-page', component: AuthorPageComponent},
  { path: 'author-book-list', component: AuthorBookListComponent},
  { path: 'book/:bookId', component: BookDetailsComponent},
  { path: 'user/:userId', component: PublicProfileComponent},
  { path: '**', component: SearchPageComponent} // last
];
export const routing = RouterModule.forRoot(appRoutes);
