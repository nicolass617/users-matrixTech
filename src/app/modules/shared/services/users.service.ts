import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  getUserById(id: any) {
    const endpoint = `https://6399e37216b0fdad774cf72f.mockapi.io/api/v1/users/${id}`;
    return this.http.get(endpoint);
  }

  saveUser(body: any) {
    return this.http.post('https://6399e37216b0fdad774cf72f.mockapi.io/api/v1/users', body);
  }

}
