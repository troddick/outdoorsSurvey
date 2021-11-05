import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { CONFIG } from '../utils/routes-config';
import { Observable, of } from 'rxjs';
import { IDropdown } from '../interfaces/dropdown.interface';


@Injectable({ providedIn: 'root' })
export class SeasonService {

  constructor(private apiService: ApiService) { }

  public getSeasons_Call(): Observable<Array<IDropdown>> {
    return of(fakeSeasons); // this.apiService.getAll<Array<IDropdown>>(CONFIG.Season.seasons.url);
  }

  public getSingleSeason_Call(id) {
    return this.apiService.getSingle<IDropdown>(CONFIG.Season.seasons.url, id);
  }

  public postSeason_Call(season: IDropdown) {
    return this.apiService.add<IDropdown>(CONFIG.Season.seasons.url, season);
  }

  public putSeason_Call(id: number, season: IDropdown) {
    return this.apiService.update<IDropdown>(CONFIG.Season.seasons.url, id, season);
  }
  public deleteSeason_Call(id) {
    return this.apiService.delete<IDropdown>(CONFIG.Season.seasons.url, id);
  }
}

const fakeSeasons: Array<IDropdown> = [
  { value: 1, label: 'Summer'}, { value: 2, label: 'Winter'},
  { value: 3, label: 'Spring' }, { value: 4, label: 'Fall' }
]