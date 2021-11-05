import { NgModule } from '@angular/core';

import { PagesRoutingModule } from './pages-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';
import { HomeModule } from './home/home.module';
import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';

const PAGES_COMPONENTS = [
  PagesComponent
]

@NgModule({
  declarations: [
    ...PAGES_COMPONENTS
  ],
  imports: [
    FormsModule, 
    ReactiveFormsModule,
    PagesRoutingModule,
    HomeModule,
    MiscellaneousModule,
    SharedModule
  ]
})
export class PagesModule { }
