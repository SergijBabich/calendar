import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';;
import { RequestAbsenceComponent } from '../request-absence/request-absence.component';
import { CalendarComponent } from '../calendar/calendar.component'
import { StoreModule } from '@ngrx/store';
import { UsersEffects } from '../../reducers/user.effects'
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [ RequestAbsenceComponent,
    CalendarComponent,],
  imports: [
    RequestAbsenceComponent,
    CalendarComponent,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class MainModule { }
