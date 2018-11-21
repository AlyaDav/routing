import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }
  
  createNewUser(
    username: string,
    password: string,
    email: string) {
    return new User(username, password, email)
  }
}
