import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { CONFIG } from '../utils/routes-config';
import { IPerson } from '../interfaces/person.interface';
import { Observable, of } from 'rxjs';


@Injectable({ providedIn: 'root' })
export class PersonService {

  constructor(private apiService: ApiService) { }

  public getPersons_Call(query?): Observable<Array<IPerson>> {
    if (query) {
      return this.apiService.getAll<Array<IPerson>>(`${CONFIG.Person.persons.url}?${query}`);
    } else {
      return this.apiService.getAll<Array<IPerson>>(CONFIG.Person.persons.url);
    }
  }

  public getSinglePerson_Call(id) {
    return this.apiService.getSingle<IPerson>(CONFIG.Person.persons.url, id);
  }

  public postPerson_Call(person: IPerson) {
    return this.apiService.add<IPerson>(CONFIG.Person.persons.url, person);
  }

  public putPerson_Call(id: number, person: IPerson) {
    return this.apiService.update<IPerson>(CONFIG.Person.persons.url, id, person);
  }
  public deletePerson_Call(id) {
    return this.apiService.delete<IPerson>(CONFIG.Person.persons.url, id);
  }
}