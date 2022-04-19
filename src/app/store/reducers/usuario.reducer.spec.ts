import * as reducer from './usuario.reducer';
import * as actions from '../actions/usuario.actions';
import { initialStateUser } from './usuario.reducer';

const mockUser = { id: 1, first_name: 'a', last_name: 'b', avatar: 'c' };
const mockError = { message: 'error', url: 'a', status: 200, name: 'a' };

describe('Usuario Reducer', () => {
  it('unknown action', () => {
    const state = reducer.usuarioReducer(reducer.initialStateUser, {
      type: 'unknown',
    });
    expect(state).toBe(reducer.initialStateUser);
  });
  it('cargar usuario', () => {
    const state = reducer.usuarioReducer(
      reducer.initialStateUser,
      actions.cargarUsuario
    );
    expect(state).not.toBe(initialStateUser);
    expect(state.status).toEqual('loading');
  });
  it('finalizar carga de usuario', () => {
    const state = reducer.usuarioReducer(
      reducer.initialStateUser,
      actions.cargarUsuarioSuccess({ usuario: mockUser })
    );
    expect(state).not.toBe(initialStateUser);
    expect(state.status).toEqual('idle');
    expect(state.user).toEqual(mockUser);
  });
  it('finalizar carga con error', () => {
    const state = reducer.usuarioReducer(
      reducer.initialStateUser,
      actions.cargarUsuarioError({ payload: mockError })
    );
    expect(state).not.toBe(initialStateUser);
    expect(state.status).toBe('error');
    expect(state.error).toBe(mockError);
  });
});
