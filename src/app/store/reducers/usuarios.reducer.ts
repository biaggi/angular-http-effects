import { createReducer, on } from '@ngrx/store';
import * as actions from '../actions';
import { UserModel } from '../../models/usuario.model';
import { StatusType, PayloadErrorIface } from '../types';

export interface UsersState {
  users: UserModel[];
  error: PayloadErrorIface | undefined;
  status: StatusType;
}

export const initialStateUsers: UsersState = {
  users: [],
  error: undefined,
  status: 'idle',
};

export const usuariosReducer = createReducer(
  initialStateUsers,
  on(actions.cargarUsuarios, (state) => ({
    ...state, status: 'loading', error: undefined
  })),
  on(actions.cargarUsuariosSuccess, (state, { usuarios }) => ({
    ...state,
    users: [...usuarios],
    status: 'idle',
    error: undefined
  })),
  on(actions.cargarUsuariosError, (state, { payload }) => ({
    ...state,
    error: payload,
    status: 'error',
  }))
);
