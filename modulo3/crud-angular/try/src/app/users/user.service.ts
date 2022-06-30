import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User } from './user.model';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  urlApi: string = 'http://192.168.1.75:3000/api/user';


  constructor(private httpClient: HttpClient) { }

  getAllUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(this.urlApi);
  }

  getUser(id: string): Observable<User> { // id tipo string pq vem da url
    return this.httpClient.get<User>(`${this.urlApi}/id/${id}`);
  }

  postUser(user: User): Observable<User> {
    return this.httpClient.post<User>(`${this.urlApi}`, user)
  }

  updateUser(id: string, user: User): Observable<User> { // id tipo string pq vem da url
    return this.httpClient.put<User>(`${this.urlApi}/id/${id}`, user)
  }

  deleteUser(id: number): Observable<User> {
    return this.httpClient.delete<User>(`${this.urlApi}/id/${id}`)
  }

}
