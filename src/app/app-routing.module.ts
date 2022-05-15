import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ComicComponent } from './components/comic/comic.component';
import { CrossoverComponent } from './components/crossover/crossover.component';
import { HeroComponent } from './components/hero/hero.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { UsersComponent } from './components/users/users.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'heroes', component: HeroesComponent},
  {path: 'crossover', component: CrossoverComponent},
  {path: 'comic', component: ComicComponent},
  {path: 'users', component: UsersComponent},
  {path: 'about', component: AboutComponent},
  {path: 'hero/:id', component: HeroComponent},
  {path: 'search/:name', component: SearchComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
