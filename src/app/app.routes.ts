import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NewsComponent } from './pages/news/news.component';
import { PostDetailComponent } from './pages/post-detail/post-detail.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AdminPanelComponent } from './pages/admin-panel/admin-panel.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'nowosci', component: NewsComponent },
  { path: 'post-pub', component: PostDetailComponent }, // np. /post-pub?id=UUID
  { path: 'o-nas', component: AboutComponent },
  { path: 'kontakt', component: ContactComponent },
  { path: 'online-panel', component: AdminPanelComponent },
  { path: '**', redirectTo: '' }
];