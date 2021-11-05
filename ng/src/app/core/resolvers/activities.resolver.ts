import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { ActivityService } from '../services/activity.service';
import { HelperService } from '../services/helper.service';

@Injectable({ providedIn: 'root' })
export class ActivitiesResolver implements Resolve<any> {

    constructor(public activityService: ActivityService
              , private helperService: HelperService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any>|Promise<any>|any {
      return this.activityService.getActivities_Call()
          .pipe(catchError(async (error) => this.helperService.showErrorToast(error, 'Error getting activities') ));
  }
}
