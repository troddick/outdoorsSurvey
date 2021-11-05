import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NbDialogRef } from '@nebular/theme';

import { HelperService } from 'src/app/core/services/helper.service';
import { PersonService } from 'src/app/core/services/person.service';

import { ManagePersonModalComponent } from './manage-person-modal.component';
import { MockTestingModule } from 'src/app/core/services/testing-helpers/mock-testing.module';

describe('ManagePersonModalComponent', () => {
    let component: ManagePersonModalComponent;
    let fixture: ComponentFixture<ManagePersonModalComponent>;
    let mockNbDialogRef;
    let mockPersonService;
    let mockHelperService;

    beforeEach(waitForAsync(() => {
      mockNbDialogRef = jasmine.createSpyObj('NbDialogRef', ['Hides ']);
      mockPersonService = jasmine.createSpyObj('PersonService', ['putPerson_Call', 'postPerson_Call']);
      mockHelperService = jasmine.createSpyObj('HelperService', ['showSuccessToast', 'showErrorToast']);

      TestBed.configureTestingModule({
          declarations: [ ManagePersonModalComponent ],
          imports: [ RouterTestingModule, MockTestingModule ],
          schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
          providers: [
            { provide: ActivatedRoute, useValue: {
              snapshot: {
                data: {
                  kits: { data: [] }
                }
              }
            }},
            { provide: NbDialogRef, useValue: mockNbDialogRef },
            { provide: PersonService, useValue: mockPersonService },
            { provide: HelperService, useValue: mockHelperService }
          ],
      })
      .compileComponents();
    }));

    beforeEach(() => {
      fixture = TestBed.createComponent(ManagePersonModalComponent);
      component = fixture.componentInstance;
      component.modalHeader = 'test';
      component.person = { id: 1, name: 'test',season: 1, location: 1, activity: 1 };
      fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
