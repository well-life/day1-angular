import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'indoDate'
})
export class IndoDatePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
