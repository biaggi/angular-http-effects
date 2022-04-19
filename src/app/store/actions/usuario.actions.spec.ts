import * as actions from './usuario.actions';

const mockUser = { id: 1, first_name: 'a', last_name: 'b', avatar: 'c' };
const mockError = { message: 'error', url: 'a', status: 200, name: 'a' };

// describe('Usuario Actions', () => {
//   it('cargar usuario', () => {
//     const action = actions.cargarUsuario({id: 1});
//     expect(action).equ
//   });
//   it('finalizar carga de usuario', () => {
//     const state = reducer.usuarioReducer(
//       reducer.initialStateUser,
//       actions.cargarUsuarioSuccess({ usuario: mockUser })
//     );
//     expect(state).toEqual({
//       ...reducer.initialStateUser,
//       status: 'idle',
//       user: mockUser,
//     });
//   });
//   it('finalizar carga con error', () => {
//     const state = reducer.usuarioReducer(
//       reducer.initialStateUser,
//       actions.cargarUsuarioError({ payload: mockError })
//     );
//     expect(state).toEqual({
//       ...reducer.initialStateUser,
//       status: 'error',
//       error: mockError,
//     });
//   });
// });


// export const cargarUsuario = createAction('[usuario] cargarUsuario', props<{id: number}>());
// export const cargarUsuarioSuccess = createAction('[usuario] cargarUsuarioSuccess', props<{usuario: UserModel}>());
// export const cargarUsuarioError = createAction('[usuario] cargarUsuarioError', props<{payload: PayloadErrorIface}>());
