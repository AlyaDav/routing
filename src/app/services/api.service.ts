import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Item } from '../models/item';
import { environment } from 'src/environments/environment.prod';
import { User } from '../models/user';
import { ResponseData } from '../models/responseData';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url = environment.url;

  constructor(private http: HttpClient) { }


  getAllUsers(): Observable<ResponseData<User>> {
    return this.http.get<ResponseData<User>>
      (this.url + 'user/all');
  }
  getUser(username: string): Observable<ResponseData<User>> {
    return this.http.get<ResponseData<User>>
      (this.url + 'user/?username=' + username);
  }


  getAllItems(): Observable<ResponseData<Item[]>> {
    return this.http.get<ResponseData<Item[]>>
      (this.url + 'item/all');
  }
  getByItems(userId: string): Observable<ResponseData<Item[]>> {
    return this.http.get<ResponseData<Item[]>>
      (this.url + 'item/?userId=' + userId);
  }

  addItem(
    title: string,
    price: number,
    about: string,
    username: string
  ): Observable<Item> {
    let newItem = new Item(title, price, about, username)
    return this.http.post<Item>(this.url + 'item/sell', newItem);
  }

  buyItem(
    itemId: String,
    sellerId: String,
    buyerId: String) {
    return this.http.post(this.url + 'item/buy', { itemId, sellerId, buyerId });
  }
}