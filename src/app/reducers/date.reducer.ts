import { usersActions, usersActionsType} from './user.actions';
import { startOfDay } from '@fullcalendar/core';

export const usersNode = 'users';
export interface UserData {
    name: string,
    endDate: Date | null,
    startDate: Date | null,
    _id: string
}

export interface Users {
    users: any,
    updatedAt:Array<object>,
}
const initialState: Users = {
users:[],
updatedAt: [],
}

export const  UsersReducer = (state = initialState, action: usersActions) => {
 switch(action.type) {
    case usersActionsType.increasee:
    return {
        ...state, users: state.users
    }
    case usersActionsType.updatedAt:
        return {
            ...state, updatedAt: action.payload.updatedAt 
        }
    default: 
     return state;
 }

}

