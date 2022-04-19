import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { tap, mergeMap, map, catchError } from 'rxjs/operators';
import { UserService } from '../../services/user.service';
import * as actions from '../actions';
import { AppState } from '../store';

@Injectable()
export class UsersEffects {
  constructor(
    private actions$: Actions,
    private userService: UserService,
  ) {}

  cargarUsuarios$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(actions.cargarUsuarios),
      /** An EMPTY observable only emits completion. Replace with your own observable stream */
      mergeMap(() => {
        return this.userService.getUsers().pipe(
          map((data) => {
            return actions.cargarUsuariosSuccess({ usuarios: data });
          }),
          catchError((err) => of(actions.cargarUsuariosError({ payload:  {
            message: err.message,
            url: err.url,
            status: err.status,
            name: err.name
          }})))
        );
      })
    );
  });
}
