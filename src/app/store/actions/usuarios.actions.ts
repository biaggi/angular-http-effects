import { createAction, props } from "@ngrx/store";
import { UserModel } from '../../models/usuario.model';
import { PayloadErrorIface } from '../types';

export const cargarUsuarios = createAction('[usuarios] cargarUsuarios');
export const cargarUsuariosSuccess = createAction('[usuarios] cargarUsuariosSuccess', props<{usuarios: UserModel[]}>());
export const cargarUsuariosError = createAction('[usuarios] cargarUsuariosError', props<{payload: PayloadErrorIface}>());
