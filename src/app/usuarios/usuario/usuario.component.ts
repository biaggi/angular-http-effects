import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { PayloadErrorIface, StatusType } from '../../store/types';
import { UserModel } from '../../models/usuario.model';
import { AppState } from '../../store/store';
import * as actions from '../../store/actions';


@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.sass'],
})
export class UsuarioComponent implements OnInit {
  user: UserModel | undefined;
  error: PayloadErrorIface | undefined;
  status: StatusType = 'idle';

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.select('user').subscribe(({ user, status, error }) => {
      this.user = user;
      this.status = status;
      this.error = error;
    });
    this.store.dispatch(actions.cargarUsuario({id: 1}));
  }
}
