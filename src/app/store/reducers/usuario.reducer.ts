import { createReducer, on } from '@ngrx/store';
import * as actions from '../actions';
import { UserModel } from '../../models/usuario.model';
import { StatusType, PayloadErrorIface } from '../types';

export interface UserState {
  user: UserModel | undefined;
  error: PayloadErrorIface | undefined;
  status: StatusType;
}

export const initialStateUser: UserState = {
  user: undefined,
  error: undefined,
  status: 'idle',
};

export const usuarioReducer = createReducer(
  initialStateUser,
  on(actions.cargarUsuario, (state) => ({
    ...state,
    status: 'loading',
    error: undefined,
  })),
  on(actions.cargarUsuarioSuccess, (state, { usuario }) => {
    return ({
    ...state,
    user: usuario,
    status: 'idle',
    error: undefined,
  })
}
  ),
  on(actions.cargarUsuarioError, (state, { payload }) => ({
    ...state,
    error: payload,
    status: 'error',
  }))
);
