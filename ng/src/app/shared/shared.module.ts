/* Your shared module should contain the code that could potentially be reused across your app.
   Such code might for instance be:
  - Components
  - Directives
  - Pipes
*/
import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
    NbActionsModule, NbCardModule, NbCheckboxModule, NbContextMenuModule,
    NbIconModule, NbInputModule, NbLayoutModule, NbMenuModule, NbDialogModule,
    NbRadioModule, NbSelectModule, NbSpinnerModule, NbThemeModule, NbToastrModule,
    NbTooltipModule
} from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { NgSelectModule } from '@ng-select/ng-select';
import { HeaderComponent } from './components/header/header.component';
import { ContainerLayoutComponent } from './components/container/container-layout.component';
import { ReplaceIdWithValuePipe } from './pipes/replace-id-with-value.pipe';

const BASE_MODULES = [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
];

const NB_MODULES = [
    NbActionsModule,
    NbCardModule,
    NbCheckboxModule,
    NbContextMenuModule,
    NbEvaIconsModule,
    NbIconModule,
    NbInputModule,
    NbLayoutModule,
    NbMenuModule.forRoot(),
    NbRadioModule,
    NbSelectModule,
    NbSpinnerModule,
    NbTooltipModule
];
const THIRDPARTYMODS = [
    NgSelectModule
 ];

const COMPONENTS = [
  ContainerLayoutComponent,
  HeaderComponent
    
];
const PIPES = [
  ReplaceIdWithValuePipe
 ];
const DIRECTIVES = [ ];

const NB_THEME_PROVIDERS = [
  ...NbThemeModule.forRoot(
    {
      name: 'default',
    },
    [  ],
  ).providers,
  ...NbMenuModule.forRoot().providers,
];

@NgModule({
  imports: [  ...BASE_MODULES
            , ...NB_MODULES
            , ...THIRDPARTYMODS
            , NbDialogModule.forRoot({hasBackdrop: true, closeOnBackdropClick: false})
            , NbToastrModule.forRoot()
          ],
  exports: [  ...BASE_MODULES
            , ...COMPONENTS
            , ...DIRECTIVES
            , ...NB_MODULES
            , ...PIPES
            , ...THIRDPARTYMODS
            , NbDialogModule
            , NbToastrModule
  ],
  declarations: [ ...COMPONENTS, ...PIPES, ...DIRECTIVES ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders<SharedModule> {
    return {
      ngModule: SharedModule,
      providers: [...NB_THEME_PROVIDERS ],
    };
  }
}
