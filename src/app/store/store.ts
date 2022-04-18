import { ActionReducerMap } from '@ngrx/store';
import * as reducers from './reducers';


export interface AppState {
   users: reducers.UserState
}



export const appReducers: ActionReducerMap<AppState> = {
   users: reducers.usuarioReducer,
}
