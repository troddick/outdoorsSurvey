import { NgModule } from '@angular/core';

import { HomeComponent } from './home.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ManagePersonModalComponent } from './manage-person/manage-person-modal.component';

@NgModule({
  imports: [ SharedModule ],
  declarations: [ HomeComponent, ManagePersonModalComponent ],
  providers: [ ]
})
export class HomeModule { }
