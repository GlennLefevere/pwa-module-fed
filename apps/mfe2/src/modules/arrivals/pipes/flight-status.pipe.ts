import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'flightStatus'
})
export class FlightStatusPipe implements PipeTransform {

  transform(value: Date): string {
    const result = 'Expected';
    const compareDate = new Date();
    if(!!value && compareTime(compareDate, new Date(value))) {
      return 'Arrived';
    }

    return result;
  }

}

function compareTime(d1: Date, d2: Date): boolean {
  if(d1.getHours() > d2.getHours()) {
    return true;
  } else if(d1.getHours() === d2.getHours() && d1.getMinutes() > d2.getMinutes()) {
    return true;
  }
  return false;
}
