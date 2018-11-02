import { Component, OnInit } from '@angular/core';
import {Item} from '../models/item';
import { UserService } from '../services/user.service';
import { User } from '../models/user';

@Component({
  selector: 'app-market',
  templateUrl: './market.component.html',
  styleUrls: ['./market.component.css']
})
export class MarketComponent implements OnInit {
  currentItem: Item;
  items: Item[];
  users:User[];
  constructor(private userService: UserService) { }

  ngOnInit():void {
   this.getItems();
  }

  getUsers(){
     this.userService.getAllUsers()
    .subscribe(data=> {
      console.log(data);
      this.users=data
      console.log(this.users);
    });
  }


  getItems(){
    this.userService.getAllItems()
   .subscribe(data=> {
     console.log(data);
     this.items=data
     console.log(this.items);
   });
 }
}
