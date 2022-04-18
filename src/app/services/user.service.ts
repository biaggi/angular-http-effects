import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private url = 'https://reqres.in/api';
  constructor(private httpClient: HttpClient) {}

  getUsers() {
    return this.httpClient.get(`${this.url}/users?per_page=10`).pipe(
      map((users: any) => {
        console.log(users.data);
        return users.data;
      })
    );
  }
}
