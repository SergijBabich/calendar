import { Component, OnInit } from '@angular/core';
import { Calendar } from '@fullcalendar/core';
import resourceTimelinePlugin from '@fullcalendar/resource-timeline';
import { Users } from '../../reducers/date.reducer';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { selectUser, selectUpdatedAt } from '../../selectors/user.selector'
import { UserIncreaseeAction, UserUpdatedAtAction } from '../../reducers/user.actions';
import { CalendarService } from '../../services/calendar.service'
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  public users$: Observable<any> = this.store$.pipe(select(selectUser)) 
  public updatedAt$: Observable<any> = this.store$.pipe(select(selectUpdatedAt)) 
  public activeClass = true;
  public users: Array<Users>;
  public calendarData;
  constructor(private store$: Store<Users>,
              public calendar$: CalendarService) { 
  }

  menuShow() {
    this.activeClass = !this.activeClass;
}
onChanged(activeClass: any) {
    this.getUsersData();
    this.activeClass = true;
    this.store$.dispatch(new UserIncreaseeAction())
}
getCalendarData(): void {
    this.calendarData = this.calendar$.formArrayOfDays()
}
getUsersData(): void {
    this.store$.select('users').subscribe(({updatedAt}) => {
        this.users = updatedAt;
        console.log(updatedAt)
    })
}

  ngOnInit(): void {
    this.getCalendarData();
    this.store$.dispatch(new  UserIncreaseeAction())
    this.getUsersData(); 
  }
  

}
