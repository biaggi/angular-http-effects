import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { PayloadErrorIface, StatusType } from '../../store/types';
import { UserModel } from '../../models/usuario.model';
import { AppState } from '../../store/store';
import * as actions from '../../store/actions';
import { ActivatedRoute } from '@angular/router';
import { filter, map, tap } from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.sass'],
})
export class UsuarioComponent implements OnInit, OnDestroy {
  user: UserModel | undefined;
  error: PayloadErrorIface | undefined;
  status: StatusType = 'idle';
  subs: Subscription[] = [];

  constructor(
    private store: Store<AppState>,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(data => console.log(data))
    this.activatedRoute.paramMap.pipe(
      filter((params: any) => {console.log(params); return params.params.id !== undefined}),
      map((params) => params.params.id),
    ).subscribe(id => this.store.dispatch(actions.cargarUsuario({ id: id })));

    const selectUser = this.store
      .select('user')
      .subscribe(({ user, status, error }) => {
        this.user = user;
        this.status = status;
        this.error = error;
      });
    this.subs.push(selectUser);
  }
  ngOnDestroy(): void {
    this.subs.map((item) => item.unsubscribe());
  }
}
