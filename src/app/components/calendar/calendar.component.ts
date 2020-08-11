import { Component, OnInit, Input } from '@angular/core';
import * as moment from 'moment';
import { select, Store } from '@ngrx/store';
import {UserData} from '../../reducers/date.reducer'
@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css'],
})
export class CalendarComponent implements OnInit {
 @Input()  users: Array<UserData>;
 @Input() calendarData: Array<Array<object>>;

  public yearView = [];
  public month;
  public isWeekday:boolean = false;
  public months: string[] = moment.monthsShort();
      
  




  constructor() {
    console.log(this)
  }
  ngOnInit(): void {
    console.log(this.users)
  }
  containsAppointment1(day) {
    let classList;
    this.users.some(({startDate, endDate}, ind: number, array:Array<UserData>):boolean => {
        for (let j = ind + 1; j < array.length; j++) {
            if (day.isSameOrAfter(array[ind].startDate) && day.isSameOrBefore(array[ind].endDate) && day.isSameOrAfter(array[j].startDate) && day.isSameOrBefore(array[j].endDate)) {
                ind++
                return classList = true;
            }
        }
    });
    return classList
}
  containsAppointment(day) {
    let classList;
    this.users.some(({ startDate, endDate}, ind:number, array:Array<object>):boolean => {
        if (day.isSameOrAfter(startDate) && day.isSameOrBefore(endDate)) {
            return classList = true;
        }

        return classList = false;
    });
    return classList
}

}