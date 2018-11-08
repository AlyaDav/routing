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


  getAllUsers(): Observable<any> {
    return this.http.get<any>(this.url + 'user/all');
  }
  getByUsers(username: string): Observable<any> {
    return this.http.get<any>(this.url + 'user/?username=' + username); // конкретный user
  }




  getAllItems(): Observable<any> {
    return this.http.get<any>(this.url + 'item/all');
  }
  getByItems(userId: string): Observable<any> {
    return this.http.get<any>(this.url + 'item/?userId=' + userId);
  }



  register(username: string, password: String, email: string) {
    
    return this.http.post(this.url + 'authentication/signUp', { username, password, email });
  }
  entrance(username: string, password: String) {
    return this.http.post(this.url + 'authentication/signIn ', { username, password });
  }


  createItem(title: string, price: number, about: string, username: string):Observable<Item> {
   
    return this.http.post<Item>(this.url + 'item/sell', {title, price, about, username});
  }

  buyItem(itemId: String, sellerId: String, buyerId: String){
    console.log('buyItem')
    return this.http.post(this.url + 'item/buy', {itemId, sellerId, buyerId});

  }


}