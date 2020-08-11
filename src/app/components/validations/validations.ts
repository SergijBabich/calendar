
import { FormGroup, ValidatorFn, ValidationErrors } from '@angular/forms';
import * as moment from 'moment';


  export function  comparisonValidator() : ValidatorFn{
    return (group: FormGroup): ValidationErrors => {
        let selected =  group.controls['select'].value;
        let startUserDate ; 
        let endUserDate ;
        if (selected) {

             startUserDate = moment(selected.startDate).format('L'); 
             endUserDate = moment(selected.endDate).format('L');
          
        }

        let selectedStartDate = moment(group.controls['startDate'].value).format('L');
        let selectedEndDate =  moment(group.controls['endDate'].value).format('L');


       let checkStartDate = moment(selectedStartDate).isBefore(startUserDate);
       let checkEndDate = moment(selectedEndDate).isAfter(endUserDate);

     if(group.controls['startDate'].value) {
      } else {
       // isDisabled = true;
    //    isButtonDisabled = true;
      }

     if( checkStartDate && checkEndDate  ) {
     // isButtonDisabled = false;
    } else {
      console.log("ошибка")
    //  isButtonDisabled = true;
    }

       return;
   };
 }