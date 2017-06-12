import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { AboutComponent } from './about/about.component';
import { NewPostComponent } from './new-post/new-post.component';
import { SportsComponent } from './sports/sports.component';
import { MoviesComponent } from './movies/movies.component';
import { NewsComponent } from './news/news.component';
import { GamingComponent } from './gaming/gaming.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { AdminComponent }   from './admin/admin.component';


const appRoutes: Routes = [
  {
    path: '',
    component: WelcomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'admin',
    component: AdminComponent
  },
  {
    path: 'new-post',
    component: NewPostComponent
  },
  {
    path: 'sports',
    component: SportsComponent
  },
  {
    path: 'movies',
    component: MoviesComponent
  },
  {
    path: 'news',
    component: NewsComponent
  },
  {
    path: 'gaming',
    component: GamingComponent
  },
  {
    path: 'posts/:id',
    component: PostDetailComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
