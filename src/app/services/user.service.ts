import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../models/user';
import { Observable } from 'rxjs';
import { Item } from '../models/item';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url = 'http://127.0.0.1:3000/api/'
  constructor(private http: HttpClient) { }


  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.url + 'user/all');
  }
  getByUsers(username: string): Observable<User> {
    return this.http.get<User>(this.url + 'user/' + username);
  }




  getAllItems(): Observable<Item[]> {
    return this.http.get<Item[]>(this.url + 'item/all');
  }
  getByItems(_id: string): Observable<Item> {
    return this.http.get<Item>(this.url + 'item/' + _id);
  }


// ?
  register(user: User, password: String){
    return this.http.post(this.url + 'authentication/signUp', user);
  }
  entrance(user: User, password: String){
    return this.http.post(this.url + 'authentication/signIn ', user);
  }

}