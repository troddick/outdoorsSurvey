import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { NbDialogService } from '@nebular/theme';

import { MockTestingModule } from 'src/app/core/services/testing-helpers/mock-testing.module';
import { HomeComponent } from './home.component';
import { HelperService } from 'src/app/core/services/helper.service';
import { PersonService } from 'src/app/core/services/person.service';
import { ActivatedRoute } from '@angular/router';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let mockNbDialogService;
  let mockHelperService;
  let mockPersonService;

  beforeEach(waitForAsync(() => {
    mockNbDialogService = jasmine.createSpyObj('NbDialogService', ['open']);
    mockHelperService = jasmine.createSpyObj('HelperService', ['sortObjectArray', 'indexByAttr', 'showErrorToast']);
    mockPersonService = jasmine.createSpyObj('PersonService', ['getPersons_Call']);
    TestBed.configureTestingModule({
      imports: [ MockTestingModule ],
      declarations: [ HomeComponent ],
      providers: [
        { provide: ActivatedRoute, useValue: {
          snapshot: {
            data: {
              persons: [],
              seasons: [],
              locations: [],
              activities: []
            }
          }
        }},
        { provide: NbDialogService, useValue: mockNbDialogService },
        { provide: HelperService, useValue: mockHelperService },
        { provide: PersonService, useValue: mockPersonService }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
