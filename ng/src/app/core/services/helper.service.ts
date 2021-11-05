import { Injectable } from '@angular/core';
import { NbGlobalLogicalPosition, NbToastrConfig, NbToastrService } from '@nebular/theme';

@Injectable({ providedIn: 'root' })
export class HelperService {
    constructor(private toastrService: NbToastrService) {}
    // show error toaster with error and title
    showErrorToast(err, title) {
        if (err.error instanceof Error) {
            // A client-side or network error occurred. Handle it accordingly.
            this.toastrService.show(err.error.message, title, this.errorToastr());
        } else {
            // The backend returned an unsuccessful response code.
            this.toastrService.show(`Backend returned code ${err.status}, body was: ${err.message}`, title, this.errorToastr());
        }
    }
    // show success toaster
    showSuccessToast(message, title) {
      this.toastrService.show(message, title, this.successToastr());
    }
    // toastr config for error
    errorToastr() {
        return new NbToastrConfig(
            { position: NbGlobalLogicalPosition.BOTTOM_END, status: 'warning', duration: 0 },
        );
    }
    // toastr config for success
    successToastr() {
        return new NbToastrConfig(
            { position: NbGlobalLogicalPosition.BOTTOM_END, status: 'success', duration: 4000 },
        );
    }
    // return index of an object in an array by a single property
    indexByAttr(array, attr, value): number {
        for (let i = 0; i < array.length; i++) {
            if (array[i][attr] === value) {
                return i;
            }
        }
        return -1;
    }
    // sort object array by a property
    sortObjectArray(arr: Array<any>, propName: string, direction: string) {
        if (arr && arr.length > 0) {
            if (direction === 'asc') {
                if (propName.toLowerCase().indexOf('date') >= 0) {
                    // is date
                    arr.sort((a, b) => new Date(a[propName]) < new Date(b[propName]) ? -1 : 1);
                } else if (isNaN(arr[0][propName])) {
                    // is string
                    arr.sort((a, b) => a[propName].toLowerCase() < b[propName].toLowerCase() ? -1 : 1);
                } else {
                    // is number
                    arr.sort((a, b) => a[propName] < b[propName] ? -1 : 1);
                }
            } else {
                if (propName.toLowerCase().indexOf('date') >= 0) {
                    // is date
                    arr.sort((a, b) => new Date(a[propName]) > new Date(b[propName]) ? -1 : 1);
                } else if (isNaN(arr[0][propName])) {
                    // is string
                    arr.sort((a, b) => a[propName].toLowerCase() > b[propName].toLowerCase() ? -1 : 1);
                } else {
                    // is number
                    arr.sort((a, b) => a[propName] > b[propName] ? -1 : 1);
                }
            }
        }
    }
}
