import { Pipe, PipeTransform } from '@angular/core';

@Pipe ({
  name: 'substring'
})

export class SubstringPipe implements PipeTransform {
  transform(value: string) {
    if (value.length > 50) {
      return value.substr(0,47) + "...";
    } else {
      return value;
    }
  }
}
