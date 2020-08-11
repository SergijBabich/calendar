import { Component, OnInit, ViewChild,Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { Users } from '../../reducers/date.reducer';
import { Observable, from } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { selectUser, selectUpdatedAt } from '../../selectors/user.selector'
import {MatDatepickerInputEvent} from '@angular/material/datepicker';
import { FormGroup, FormBuilder, FormControl, Validators, NG_VALUE_ACCESSOR, ControlValueAccessor} from '@angular/forms';
import { CompfirmAbsenceService } from '../../services/confirm-absence.service';
import {NgForm} from '@angular/forms';
  import * as moment from 'moment';
@Component({
  selector: 'app-query-window',
  templateUrl: './request-absence.component.html',
  styleUrls: ['./request-absence.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => RequestAbsenceComponent),
      multi: true
    }
  ]
})
export class RequestAbsenceComponent implements OnInit, ControlValueAccessor {
  @Input()  activeClass: boolean;
  @Output() onChanged = new EventEmitter<boolean>();
  @Input() users: Array<Users>;

  public minDate = new Date();
  private selectedStartDate;
  private selectedEndDate; 
  private selectedUser;
  private checkStartDate;
  private checkEndDate;
  form: FormGroup;
  public validEndDate: boolean = false;
  public validStartDate: boolean = false;
  constructor(
              private fb: FormBuilder,
              private _dateService: CompfirmAbsenceService
              ) { }
  writeValue(obj: any): void {
    throw new Error("Method not implemented.");
  }
  registerOnChange(fn: any): void {
    throw new Error("Method not implemented.");
  }
  registerOnTouched(fn: any): void {
    throw new Error("Method not implemented.");
  }
  setDisabledState?(isDisabled: boolean): void {
    throw new Error("Method not implemented.");
  }

  submit(f: NgForm) {
    this._dateService.scheduleVacation(this.selectedUser._id,this.selectedStartDate, this.selectedEndDate)
    .subscribe((response:Response) => { console.log(this.selectedEndDate, this.selectedStartDate)});
    this.onChanged.emit(true);
  }

 ckeckStartDateEvent(type: string, event: MatDatepickerInputEvent<Date>) {
    let selectedStartDate =  event.value;

     this.checkStartDate = moment(selectedStartDate).isBefore(this.selectedUser.startDate);
    if (!this.checkStartDate &&  this.selectedUser.startDate !== null) {
      this.validStartDate = true;
    }else {
      this.validStartDate = false;
    }

  }
  checkEndDateEvent(type: string, event: MatDatepickerInputEvent<Date>) {
    let selectedEndDate = event.value;
     this.checkEndDate = moment(selectedEndDate).isAfter(this.selectedUser.endDate);

    if (!this.checkEndDate &&  this.selectedUser.endDate !== null) {
      this.validEndDate = true
    } else {
      this.validEndDate = false;
    }
 }
  ngOnInit(): void {
    this.form = this.fb.group({
      select: ['', Validators.required] ,
      startDate: ['', Validators.required],
      endDate: ['', Validators.required], 
   }) 
  //this.form.setValidators(comparisonValidator())
    this.form.valueChanges.subscribe((value:any) => {
      this.selectedUser =   value.select;
      this.selectedStartDate = moment(value.startDate).format('L');  
      this.selectedEndDate = moment(value.endDate).format('L');   
    })
  }

}
