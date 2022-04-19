import { AppState } from '../store';
import { UsersState } from '../reducers/usuarios.reducer';
import { createSelector } from '@ngrx/store';

export const selectUsers = (state: AppState) => state.users;

export const selectUsersSorted = createSelector(
  selectUsers,
  (users: UsersState) => {console.log('test', users); return users;}
);
