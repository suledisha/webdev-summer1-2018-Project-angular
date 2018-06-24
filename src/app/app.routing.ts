import { Routes, RouterModule } from '@angular/router';
import {SearchPageComponent} from './search-page/search-page.component';
import {BookDetailsComponent} from './book-details/book-details.component';
import {ProfileComponent} from './profile/profile.component';
import {RegisterComponent} from './register/register.component';
import {LoginComponent} from './login/login.component';
import {AuthorPageComponent} from './author-page/author-page.component';
import {AuthorBookListComponent} from './author-book-list/author-book-list.component';


const appRoutes: Routes = [
  { path: '', redirectTo: 'search', pathMatch: 'full'},
  { path: 'search', component: SearchPageComponent},
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'profile', component: ProfileComponent},
  { path: 'author-page', component: AuthorPageComponent},
  { path: 'author-book-list', component: AuthorBookListComponent},
  { path: 'book/:bookId', component: BookDetailsComponent},
  { path: '**', component: SearchPageComponent} // last
];
export const routing = RouterModule.forRoot(appRoutes);
