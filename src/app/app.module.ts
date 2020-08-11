import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { RequestAbsenceComponent } from './components/request-absence/request-absence.component';
import { CompfirmAbsenceService } from './services/confirm-absence.service'
import { CalendarService } from './services/calendar.service'
import { StoreModule } from '@ngrx/store';
import { UsersReducer} from './reducers/date.reducer';
import { UsersService } from './services/users.service';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { UsersEffects } from './reducers/user.effects';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    CalendarComponent,
    RequestAbsenceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    StoreModule.forRoot({
      users: UsersReducer
    }),
    HttpClientModule,
    HttpClientJsonpModule,
    EffectsModule.forRoot([UsersEffects]),
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    ReactiveFormsModule,
    FormsModule,
    
    
  ],
  exports: [  
     MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule],
  providers: [UsersService, CompfirmAbsenceService, CalendarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
