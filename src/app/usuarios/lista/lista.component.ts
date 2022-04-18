import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserModel } from 'src/app/models/usuario.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.sass']
})
export class ListaComponent implements OnInit {

  users$: Observable<UserModel[]> = new Observable();

  constructor(private usuarioService: UserService ) { }

  ngOnInit(): void {
    this.users$ = this.usuarioService.getUsers()
  }

}
