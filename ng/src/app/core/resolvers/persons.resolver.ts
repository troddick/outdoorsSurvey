import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { HelperService } from '../services/helper.service';
import { PersonService } from '../services/person.service';

@Injectable({ providedIn: 'root' })
export class PersonsResolver implements Resolve<any> {

    constructor(public personService: PersonService
              , private helperService: HelperService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any>|Promise<any>|any {
      return this.personService.getPersons_Call()
          .pipe(catchError(async (error) => this.helperService.showErrorToast(error, 'Error getting persons') ));
  }
}
