import { HttpClient } from '@angular/common/http';
import { Injectable }  from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class CompfirmAbsenceService {
    constructor( private _http: HttpClient) {  } 
    baseUrl: string = `http://localhost:3012/accept-vacation/`
    
      public scheduleVacation(id, startDate ,endDate):Observable<object> {
        return this._http.put<Response[]>(`${this.baseUrl}${id}`, {
            startDate,
            endDate
        
        })     
  }
}
