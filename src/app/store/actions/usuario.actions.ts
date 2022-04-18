import { createAction, props } from "@ngrx/store";
import { UserModel } from '../../models/usuario.model';
import { PayloadErrorIface } from '../types';

export const cargarUsuario = createAction('[usuario] cargarUsuario', props<{id: number}>());
export const cargarUsuarioSuccess = createAction('[usuario] cargarUsuarioSuccess', props<{usuario: UserModel}>());
export const cargarUsuarioError = createAction('[usuario] cargarUsuarioError', props<{payload: PayloadErrorIface}>());
