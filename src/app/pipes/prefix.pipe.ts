import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'prefix',
  standalone: true,
})
export class PrefixPipe implements PipeTransform {
  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }
}
