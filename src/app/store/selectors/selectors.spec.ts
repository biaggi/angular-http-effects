import * as selectors from './selectors';
import { AppState } from '../store';
import { UsersState } from '../reducers/usuarios.reducer';
const mockUser = { id: 1, first_name: 'a', last_name: 'b', avatar: 'c' };
const mockUsersState: UsersState = {
  users: [mockUser],
  error: undefined,
  status: 'idle',
};
const mockState: AppState = {
  users: mockUsersState,
  user: { user: undefined, error: undefined, status: 'idle' },
};
describe('Selectors', () => {
  it('select with selector', () => {
    const result = selectors.selectUsersSorted.projector({
      users: [mockUser],
      error: undefined,
      status: 'idle',
    });
    expect(result.users).toEqual([mockUser]);
  });
  it('select with function', () => {
    const result = selectors.selectUsers(mockState);
    expect(result.users).toEqual([mockUser]);
  });
});
