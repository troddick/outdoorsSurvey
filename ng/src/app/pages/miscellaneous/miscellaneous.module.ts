import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { routedComponents, MiscellaneousRoutingModule } from './miscellaneous-routing.module';

@NgModule({
    imports: [ 
        MiscellaneousRoutingModule, 
        SharedModule
    ],
    declarations: [
        ...routedComponents,
    ],
})
export class MiscellaneousModule { }
