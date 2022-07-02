import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {User} from '../model/User';

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(private _httpClient: HttpClient) {
  }

  getUsers() {
    return this._httpClient.get<User[]>('http://localhost:8888/users/get');
  }

  addUser(newUser: User) {
    return this._httpClient.post<User>('http://localhost:8888/users/add', newUser);
  }

  signUpUser(newUser: User) {
    return this._httpClient.post<User>('http://localhost:8888/users/signup', newUser);
  }

  deleteUser(id: any) {
    return this._httpClient.delete<User>('http://localhost:8888/users/' + id);
  }

  updateUser(user: User) {
    return this._httpClient.put<User>('http://localhost:8888/users/update', user);
  }
}
