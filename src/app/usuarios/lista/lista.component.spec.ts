import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaComponent } from './lista.component';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { AppState, initialState } from 'src/app/store/store';
import { initialStateUsers } from 'src/app/store/reducers';
import * as actions from '../../store/actions';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { LocationStrategy } from '@angular/common';
import { RouterTestingModule } from '@angular/router/testing';


describe('ListaComponent', () => {
  let component: ListaComponent;
  let fixture: ComponentFixture<ListaComponent>;
  let store: MockStore<AppState>;

  const initialStateMock: AppState = {
    ...initialState,
    users: {
      ...initialStateUsers,
      users: [{ id: 1, first_name: 'a', last_name: 'b', avatar: 'c' }],
    },
  };

  const userService = jasmine.createSpyObj('userService', ['getUser']);

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListaComponent],
      imports: [RouterTestingModule],
      providers: [provideMockStore({ initialState })]
    }).compileComponents();

    store = TestBed.inject(MockStore);
    fixture = TestBed.createComponent(ListaComponent);
    component = fixture.componentInstance;
    store.setState(initialStateMock);

    spyOn(store, 'dispatch').and.callFake(() => {});
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should dispatch action to get data', () => {
    expect(store.dispatch).toHaveBeenCalledWith(actions.cargarUsuarios());
  });

  it('should render a user', () => {
    const element: DebugElement = fixture.debugElement.query(By.css('.card-title'));
    expect(element.nativeElement.textContent).toBe('a');
  });
});
