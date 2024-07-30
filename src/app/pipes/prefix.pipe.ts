import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'prefix',
  standalone: true,
})
export class PrefixPipe implements PipeTransform {
  transform(value: unknown, prefix: string): string {
    return `${prefix}${String(value)}`;
  }
}
