import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'characterLength',
})
export class CharacterLengthPipe implements PipeTransform {
  transform(value: string, length: number) {
    return value.substring(0, length);
  }
}
