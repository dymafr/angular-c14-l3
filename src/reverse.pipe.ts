import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'reverse'})
export class ReversePipe implements PipeTransform {
  transform(value: string, avant:string = ''): string {
    let reversedName: string = "";
    for (var i = value.length - 1; i >= 0; i--) {
      reversedName += value.charAt(i);
    }
    return `${avant} ${reversedName}`;
  }
}