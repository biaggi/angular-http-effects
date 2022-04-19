import { TestScheduler } from 'rxjs/testing';
import { UserService } from '../../services/user.service';
import { AppState, initialState as appInitialState } from '../store';
import { UserEffects } from './usuario.effects';
import { Observable, of } from 'rxjs';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import * as allActions from '../actions';

describe('User effects', () => {
  const initialState = appInitialState;
  const userService = jasmine.createSpyObj('userService', ['getUser']);

  let effects: UserEffects;
  let actions: Observable<any>;
  let store: MockStore<AppState>;
  let testScheduler: TestScheduler;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        UserEffects,
        provideMockStore({ initialState }),
        provideMockActions(() => actions),
        { provide: UserService, useValue: userService },
      ],
    });

    effects = TestBed.inject(UserEffects);
    store = TestBed.inject(MockStore);

    store.setState(initialState);

    testScheduler = new TestScheduler((actual, expected) => {
      console.log('actual', actual)
      console.log('expected', expected)
      expect(actual).toEqual(expected);
    });
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });

  it('should handle user load and return a user loaded action', () => {
    const mockUser = { id: 1, first_name: 'a', last_name: 'b', avatar: 'c' };
    const action = allActions.cargarUsuario({ id: 1 });
    const outcome = allActions.cargarUsuarioSuccess({ usuario: mockUser });

    testScheduler.run(({ hot, cold, expectObservable }) => {
      actions = hot('-a', { a: action });
      const response = cold('-b|', { b: mockUser });
      userService.getUser.and.returnValue(response);

      expectObservable(effects.cargarUsuario$).toBe('--b', { b: outcome });
    });
  });
});
