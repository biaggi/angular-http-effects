import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { UserModel } from 'src/app/models/usuario.model';
import { AppState } from 'src/app/store/store';
import * as actions from '../../store/actions';
import { PayloadErrorIface, StatusType } from '../../store/types';
import * as selectors from '../../store/selectors';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.sass'],
})
export class ListaComponent implements OnInit {
  users: UserModel[] = [];
  error: PayloadErrorIface | undefined;
  status: StatusType = 'idle';

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.select(selectors.selectUsers).subscribe(({ users, status, error }) => {
      this.users = users;
      this.status = status;
      this.error = error;
    });
    this.store.dispatch(actions.cargarUsuarios());
  }
}
