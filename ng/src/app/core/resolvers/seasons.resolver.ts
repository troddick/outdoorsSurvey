import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { HelperService } from '../services/helper.service';
import { SeasonService } from '../services/season.service';

@Injectable({ providedIn: 'root' })
export class SeasonsResolver implements Resolve<any> {

    constructor(public seasonService: SeasonService
              , private helperService: HelperService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any>|Promise<any>|any {
      return this.seasonService.getSeasons_Call()
          .pipe(catchError(async (error) => this.helperService.showErrorToast(error, 'Error getting seasons') ));
  }
}
