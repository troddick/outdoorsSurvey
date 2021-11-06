import { Component, Directive, Input } from '@angular/core';

// fake nbSpinner directive
@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[nbSpinner]'
})
export class NbSpinnerStubDirective {
  @Input() 'nbSpinner': any;
}
// fake [status] directive
@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[status]'
})
export class NbStatusStubDirective {
  @Input() 'status': any;
}
// fake nb-icon selector component
@Component({
  // tslint:disable-next-line:component-selector
  selector: 'nb-icon',
  template: `<div></div>`,
})
export class FakeNBIconComponent { }
