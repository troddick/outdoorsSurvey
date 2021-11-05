import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { NbDialogRef } from '@nebular/theme';

import { PersonService } from 'src/app/core/services/person.service';
import { HelperService } from 'src/app/core/services/helper.service';

import { IDropdown } from 'src/app/core/interfaces/dropdown.interface';
import { IPerson } from 'src/app/core/interfaces/person.interface';

@Component({
  selector: 'app-manage-person-modal',
  templateUrl: './manage-person-modal.component.html',
  styleUrls: ['./manage-person-modal.component.scss']
})
export class ManagePersonModalComponent implements OnInit, AfterViewInit {
  @ViewChild('firstInput') firstInput: ElementRef;
  @Input() modalHeader: string;
  @Input() person: IPerson;
  @Input() activities: Array<IDropdown>;
  @Input() seasons: Array<IDropdown>;
  @Input() locations: Array<IDropdown>;
  loading: boolean = false;
  personForm: FormGroup;
  requiredSelect: boolean = false;
  submitted: boolean = false;

  constructor(private dialogRef: NbDialogRef<any>
            , private personService: PersonService
            , private formBuilder: FormBuilder
            , private helperService: HelperService) { }

  ngOnInit() {
    this.personForm = this.formBuilder.group({
      id: 0,
      name: [ '', Validators.compose(
        [ Validators.required, Validators.maxLength(100)]
      )],
      age: [ null, Validators.compose( [ Validators.min(0), Validators.max(110) ] ) ],
      season: [ null, Validators.required ],
      reason: [ '', Validators.maxLength(500) ],
      location: [ null, Validators.required ],
      activity: [ null, Validators.required ],
    //  createdAt: ''
    });
    if (this.person.id > 0) {
      this.personForm.patchValue(this.person);
    }
  }
  ngAfterViewInit() {
    // focus on first input
    setTimeout(() => {
      if (this.firstInput) { this.firstInput.nativeElement.focus(); }
    }, 20);
  }
  // convenience getter for easy access to form fields in html
  get f() { return this.personForm.controls; }

  onSavePerson() {
    this.submitted = true;
    if (!this.personForm.invalid) {
      this.loading = true;
      if (this.person.id > 0) {
        this.putPerson();
      } else {
        this.postPerson();
      }
    } else { this.requiredSelect = true;}
  }
  // update this person and send response back 
  putPerson() {
    this.personService.putPerson_Call(this.f.id.value, this.personForm.value)
    .subscribe(response => {
      this.loading = false;
      this.helperService.showSuccessToast('Successfully updated Person', 'Success');
      this.dialogRef.close(response);
    }, err => {
      this.loading = false;
      this.helperService.showErrorToast(err, 'Error updating Person');
    });
  }
  // create this person and send response back
  postPerson() {
    /* const datePipe: DatePipe = new DatePipe('en-US');
    let formattedDate = datePipe.transform(new Date(), 'YYYY-MM-dd hh:mm:ss');
    this.personForm.controls.createdAt.setValue(formattedDate); */
    this.personService.postPerson_Call(this.personForm.value)
    .subscribe(response => {
      this.loading = false;
      this.helperService.showSuccessToast('Successfully created Person', 'Success');
      this.dialogRef.close(response);
    }, err => {
      this.loading = false;
      this.helperService.showErrorToast(err, 'Error creating Person');
    });
  }
  onCancelModal() {
    this.dialogRef.close();
  }
  // only positive numbers
  onKeyPress(event: any) {
    const regexpNumber = /[0-9]/;
    const inputCharacter = String.fromCharCode(event.charCode);
    if (event.keyCode !== 8 && !regexpNumber.test(inputCharacter)) {
      event.preventDefault();
    }
  }
}

