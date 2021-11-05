import { Pipe, PipeTransform } from '@angular/core';
/*
 * Raise the value exponentially
 * Takes an exponent argument that defaults to 1.
 * Usage:
 *   value | exponentialStrength:exponent
 * Example:
 *   {{ 2 | exponentialStrength:10 }}
 *   formats to: 1024
*/
@Pipe({name: 'replaceIdWithValue'})
export class ReplaceIdWithValuePipe implements PipeTransform {
    transform(value: any, arr: Array<any>, propToSearch: string, propToReturn: string): string {
        if (value && Array.isArray(arr)) {
            return arr.find(a => a[propToSearch] === value)[propToReturn] || '';
        }
        return '';
  }
}