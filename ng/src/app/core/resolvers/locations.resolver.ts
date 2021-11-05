import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { HelperService } from '../services/helper.service';
import { LocationService } from '../services/location.service';

@Injectable({ providedIn: 'root' })
export class LocationsResolver implements Resolve<any> {

    constructor(public locationService: LocationService
              , private helperService: HelperService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any>|Promise<any>|any {
      return this.locationService.getLocations_Call()
          .pipe(catchError(async (error) => this.helperService.showErrorToast(error, 'Error getting locations') ));
  }
}
