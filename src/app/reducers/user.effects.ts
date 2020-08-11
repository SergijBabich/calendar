import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { usersActionsType, UserUpdatedAtAction }  from './user.actions';
import { Action } from 'rxjs/internal/scheduler/Action';
import { UsersService } from '../services/users.service';
@Injectable()

export class UsersEffects {
    constructor( private actions$: Actions,
                 private usersService : UsersService   
        ) {}
      
      loadMovies$ = createEffect(() => this.actions$.pipe(
        ofType(usersActionsType.increasee),
        mergeMap(() => this.usersService.getUsers().pipe(
            map(users =>  { 
                return new UserUpdatedAtAction({
                    updatedAt: users
                })
            })
          ))
        )
      )
  
}