import { Action } from "@ngrx/store";
import {UserData} from './date.reducer'
export enum usersActionsType {
    increasee = '[USER] increasee',
    updatedAt = '[USER] updated',
} 


export class UserIncreaseeAction implements Action {
    readonly type  = usersActionsType.increasee
    
} 


export class UserUpdatedAtAction implements Action {
    readonly type  = usersActionsType.updatedAt;
    constructor(public payload: {
        updatedAt: any;
    }) {}
} 


export type usersActions = UserIncreaseeAction | UserUpdatedAtAction;