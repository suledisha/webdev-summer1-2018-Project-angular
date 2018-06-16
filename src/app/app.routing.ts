import { Routes, RouterModule } from '@angular/router';
import {SearchPageComponent} from './search-page/search-page.component';
import {BookDetailsComponent} from './book-details/book-details.component';


const appRoutes: Routes = [
  { path: '', redirectTo: 'search', pathMatch: 'full'},
  { path: 'search', component: SearchPageComponent},
  { path: 'book/:bookId', component: BookDetailsComponent},
  { path: '**', component: SearchPageComponent} // last
];
export const routing = RouterModule.forRoot(appRoutes);
