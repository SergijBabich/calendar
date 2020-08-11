import { HttpClient } from '@angular/common/http';
import { Injectable }  from '@angular/core';
import { Observable, from } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { UserData } from '../reducers/date.reducer'
@Injectable()
export class UsersService {
    constructor( private _http: HttpClient) {  } 
    baseUrl: string = `http://localhost:3012/`
    
      public getUsers():Observable<any> {
        return this._http.get<Response[]>(this.baseUrl)    
  }
}
