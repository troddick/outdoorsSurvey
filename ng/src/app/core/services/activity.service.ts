import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { CONFIG } from '../utils/routes-config';
import { Observable, of } from 'rxjs';
import { IDropdown } from '../interfaces/dropdown.interface';


@Injectable({ providedIn: 'root' })
export class ActivityService {

  constructor(private apiService: ApiService) { }

  public getActivities_Call(): Observable<Array<IDropdown>> {
    return of(fakeActivities); // this.apiService.getAll<Array<IDropdown>>(CONFIG.Activity.activities.url);
  }

  public getSingleActivity_Call(id) {
    return this.apiService.getSingle<IDropdown>(CONFIG.Activity.activities.url, id);
  }

  public postActivity_Call(activity: IDropdown) {
    return this.apiService.add<IDropdown>(CONFIG.Activity.activities.url, activity);
  }

  public putActivity_Call(id: number, activity: IDropdown) {
    return this.apiService.update<IDropdown>(CONFIG.Activity.activities.url, id, activity);
  }
  public deleteActivity_Call(id) {
    return this.apiService.delete<IDropdown>(CONFIG.Activity.activities.url, id);
  }
}

const fakeActivities: Array<IDropdown> = [
  { value: 1, label: 'Hiking'}, { value: 2, label: 'Running'},
  { value: 3, label: 'Biking' }, { value: 4, label: 'Swimming' },
  { value: 5, label: 'Skating'}, {value: 6, label: 'Skiing'}
]