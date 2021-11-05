import { Component, OnInit, ViewChild } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { ActivatedRoute } from '@angular/router';

import { HelperService } from 'src/app/core/services/helper.service';

import { IDropdown } from 'src/app/core/interfaces/dropdown.interface';
import { IPerson } from 'src/app/core/interfaces/person.interface';

import { ManagePersonModalComponent } from './manage-person/manage-person-modal.component';
import { PersonService } from 'src/app/core/services/person.service';
import { NgSelectComponent } from '@ng-select/ng-select';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  loading: boolean = false;
  persons: Array<IPerson> = [];
  seasons: Array<IDropdown> = [];
  locations: Array<IDropdown> = [];
  activities: Array<IDropdown> = [];
  favActivity: number = 0;

  constructor(private dialogService: NbDialogService,
              private helperService: HelperService,
              private personService: PersonService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    // resolved data
    this.persons = this.route.snapshot.data.persons;    
    this.helperService.sortObjectArray(this.persons, 'name', 'asc');
    this.seasons = this.route.snapshot.data.seasons;
    this.locations = this.route.snapshot.data.locations;
    this.activities = this.route.snapshot.data.activities;
  }
  // show modal for edit
  onEditClick(id) {
    this.dialogService.open(ManagePersonModalComponent, {
      context: {
        modalHeader: 'Edit Person',
        person: this.persons.find(p => p.id === id),
        activities: this.activities,
        seasons: this.seasons,
        locations: this.locations
      }
    }).onClose.subscribe(updatedPerson => {
      if (updatedPerson) {
        const index = this.helperService.indexByAttr(this.persons, 'id', id);
        this.persons[index] = updatedPerson;
      }
    });
  }
  // show modal for create
  onCreateClick() {
    this.dialogService.open(ManagePersonModalComponent, {
      context: {
        modalHeader: 'Add Person',
        person: { id: 0, name: '', season: null, location: null, activity: null },
        activities: this.activities,
        seasons: this.seasons,
        locations: this.locations
      }
    }).onClose.subscribe(newPerson => {
      if (newPerson) {
        this.persons.push(newPerson);
        this.helperService.sortObjectArray(this.persons, 'name', 'asc');
      }
    });
  }
  // filter list by chosen activity
  onActivityChange(activity: IDropdown) {
    if (activity) {
      this.favActivity = activity.value;
      this.loading = true;
      this.personService.getPersons_Call(`activity=${this.favActivity}`).subscribe(
        response => {
          this.persons = response;
          this.loading = false;
        }, err => {
          this.helperService.showErrorToast(err, 'Error');
          this.loading = false;
        }
      );
    } else {
      this.favActivity = 0;
      this.loading = true;
      this.personService.getPersons_Call().subscribe(allResp => {
        this.persons = allResp;
        this.loading = false;
      }, err => {
        this.helperService.showErrorToast(err, 'Error');
        this.loading = false;
      });
    }
  }
}
