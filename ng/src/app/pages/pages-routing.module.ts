import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';
import { PersonsResolver } from '../core/resolvers/persons.resolver';
import { HomeComponent } from './home/home.component';
import { ActivitiesResolver } from '../core/resolvers/activities.resolver';
import { LocationsResolver } from '../core/resolvers/locations.resolver';
import { SeasonsResolver } from '../core/resolvers/seasons.resolver';
import { NotFoundComponent } from './miscellaneous/not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent,
        resolve: { 
          persons: PersonsResolver,
          activities: ActivitiesResolver,
          locations: LocationsResolver,
          seasons: SeasonsResolver }
      },
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
      {
        path: '**',
        component: NotFoundComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
