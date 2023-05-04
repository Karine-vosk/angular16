import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate',
  standalone: true
})

export class TruncatePipe implements PipeTransform {

  transform(value: any, maxLength: number, startChar: number, endChar: number, separator: string): any {

    if (value && value.length > maxLength) {
      const start = value.substring(0, startChar);
      const end = value.substring(value.length - endChar, value.length);

      return start + separator + end;
    }
    return value;
  }

}

