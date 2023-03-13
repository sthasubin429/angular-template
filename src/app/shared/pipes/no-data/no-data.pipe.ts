import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noData'
})
export class NoDataPipe implements PipeTransform {
  transform(value: unknown, message: string = 'No Data'): string | unknown {
    if ((typeof value === 'string' && value !== '') || value) {
      return value;
    } else {
      return message;
    }
  }
}
