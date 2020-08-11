import { HttpClient } from '@angular/common/http';
import { Injectable }  from '@angular/core';
import { Observable } from 'rxjs';
import * as moment from 'moment';
export interface arrayDays {
  isWeekday?:boolean
}
@Injectable()
export class CalendarService {
    constructor( ) {  } 
    formArrayOfDays() {
        let yearView;
        const months = moment.months();
         yearView = months.map((month, indx) => {
          indx = ++indx;
          return  new Array(moment(indx , "M").daysInMonth()).fill(null).map((x, i) =>{ 
             let arrayDays: any =  moment().month(month).startOf('month').add(i, 'days')
             if (arrayDays.isoWeekday() !== 6 && arrayDays.isoWeekday() !== 7) {
              arrayDays.isWeekday = true;
            }
            return arrayDays;
          });
          
        })
        return yearView
      }
}
