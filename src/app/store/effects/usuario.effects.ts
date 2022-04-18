import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { tap, mergeMap, map, catchError } from 'rxjs/operators';
import { UserService } from '../../services/user.service';
import * as actions from '../actions';
import { AppState } from '../store';
import { UserModel } from '../../models/usuario.model';

@Injectable()
export class UserEffects {
  constructor(private actions$: Actions, private userService: UserService) {}

  effectName$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(actions.cargarUsuario),
      /** An EMPTY observable only emits completion. Replace with your own observable stream */
      mergeMap((action) => {
        const { id } = action;
        return this.userService.getUser(id).pipe(
          map((user: UserModel) => {
            return actions.cargarUsuarioSuccess({
              usuario: {
                id: user.id,
                first_name: user.first_name,
                last_name: user.last_name,
                avatar: user.avatar,
              },
            });
          }),
          catchError((err) =>
            of(
              actions.cargarUsuarioError({
                payload: {
                  message: err.message,
                  url: err.url,
                  status: err.status,
                  name: err.name,
                },
              })
            )
          )
        );
      })
    );
  });
}
