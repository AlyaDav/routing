import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { ResponseData } from '../models/responseData';
import { User } from '../models/user';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url = environment.url;

  constructor(
    private http: HttpClient,
    private userService: UserService
  ) { }

  logout() {
    localStorage.removeItem('currentUser');
  }

  login(
    username: string,
    password: string
  ) {
    let newUser = this.userService.createNewUser(username, password, null)
    return this.http.post<ResponseData<User>>(
      this.url + 'authentication/signIn ', newUser
    ).pipe(map(user => {
      if (user) localStorage.setItem('currentUser', JSON.stringify(user.data));
      return user;
    }));
  }

  register(
    username: string,
    password: string,
    email: string
  ): Observable<User> {
    let newUser = this.userService.createNewUser(username, password, email)
    return this.http.post<User>
      (this.url + 'authentication/signUp', newUser);
  }
}
