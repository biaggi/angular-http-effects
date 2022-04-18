import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import { UserModel } from '../models/usuario.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private url = 'https://reqres.in/api';
  constructor(private httpClient: HttpClient) {}

  // UserModel[]
  getUsers() {
    return this.httpClient.get(`${this.url}/users?per_page=50`).pipe(
      map((users: any) => {
        return users.data.map((user: any) => ({
          id: user.id,
          first_name: user.first_name,
          last_name: user.last_name,
          avatar: user.avatar,

        }))
      }),
      tap((data) => console.log('tap', data))
    );
  }
}
