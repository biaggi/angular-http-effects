import { ActionReducerMap } from '@ngrx/store';
import * as reducers from './reducers';
import { initialStateUsers } from './reducers/usuarios.reducer';
import { initialStateUser } from './reducers/usuario.reducer';


export interface AppState {
   users: reducers.UsersState,
   user: reducers.UserState
}

export const initialState: AppState = {
  users: initialStateUsers,
  user: initialStateUser
}



export const appReducers: ActionReducerMap<AppState> = {
   users: reducers.usuariosReducer,
   user: reducers.usuarioReducer
}
