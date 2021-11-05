import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { CONFIG } from '../utils/routes-config';
import { Observable, of } from 'rxjs';
import { IDropdown } from '../interfaces/dropdown.interface';


@Injectable({ providedIn: 'root' })
export class LocationService {

  constructor(private apiService: ApiService) { }

  public getLocations_Call(): Observable<Array<IDropdown>> {
    return of(fakeLocations); // this.apiService.getAll<Array<IDropdown>>(CONFIG.Location.locations.url);
  }

  public getSingleLocation_Call(id) {
    return this.apiService.getSingle<IDropdown>(CONFIG.Location.locations.url, id);
  }

  public postLocation_Call(location: IDropdown) {
    return this.apiService.add<IDropdown>(CONFIG.Location.locations.url, location);
  }

  public putLocation_Call(id: number, location: IDropdown) {
    return this.apiService.update<IDropdown>(CONFIG.Location.locations.url, id, location);
  }
  public deleteLocation_Call(id) {
    return this.apiService.delete<IDropdown>(CONFIG.Location.locations.url, id);
  }
}
const fakeLocations: Array<IDropdown> = [
  { value: 1, label: 'Mountains'}, { value: 2, label: 'Desert'},
  { value: 3, label: 'Coastal' }, { value: 4, label: 'Rural' },
  { value: 5, label: 'City'}
]