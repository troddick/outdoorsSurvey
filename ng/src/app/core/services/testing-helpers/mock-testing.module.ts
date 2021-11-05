import { NgModule } from '@angular/core';
import { BUILT_IN_THEMES, DEFAULT_MEDIA_BREAKPOINTS, NbCheckboxModule, NbJSThemesRegistry,
  NbLayoutDirectionService, NbLayoutRulerService, NbLayoutScrollService,
  NbMediaBreakpointsService, NbOverlayContainerAdapter, NbSpinnerService,
  NbThemeModule, NbFocusMonitor, NbAlertModule, NbInputModule,
  NbThemeService, NB_BUILT_IN_JS_THEMES, NB_DOCUMENT, NB_JS_THEMES, NB_MEDIA_BREAKPOINTS,
  NB_THEME_OPTIONS, NB_WINDOW, NbActionsModule, NbTooltipModule } from '@nebular/theme';
import { FakeNBIconComponent, NbSpinnerStubDirective, NbStatusStubDirective } from './mock-stubs';

import { NbEvaIconsModule } from '@nebular/eva-icons';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';

const MODULES = [
    NbActionsModule,
    NbAlertModule,
    NbCheckboxModule,
    NbEvaIconsModule,
    NbInputModule,
    NbTooltipModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule,
];
const DIRECTIVES = [
    NbSpinnerStubDirective,
    NbStatusStubDirective
];

const COMPONENTS = [
    FakeNBIconComponent
];

@NgModule({
  declarations: [ ...COMPONENTS, ...DIRECTIVES ],
  imports: [
    ...MODULES,
    NbThemeModule.forRoot()
  ],
  exports: [
    ...COMPONENTS,
    ...DIRECTIVES,
    ...MODULES,
    NbThemeModule
],
  providers: [
    NbFocusMonitor,
    NbThemeService,
    // Required by NbThemeService
    NbMediaBreakpointsService,
    { provide: NB_THEME_OPTIONS, useValue: { name: 'default' } },
    { provide: NB_MEDIA_BREAKPOINTS, useValue: DEFAULT_MEDIA_BREAKPOINTS },
    { provide: NB_JS_THEMES, useValue: [] },
    { provide: NB_BUILT_IN_JS_THEMES, useValue: BUILT_IN_THEMES },
    NbJSThemesRegistry,
    NbSpinnerService,
    // Required by NbLayoutComponent
    { provide: NB_DOCUMENT, useValue: document },
    { provide: NB_WINDOW, useValue: window },
    NbLayoutDirectionService,
    NbLayoutScrollService,
    NbLayoutRulerService,
    NbOverlayContainerAdapter
  ]
})
export class MockTestingModule {}
