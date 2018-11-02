import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../models/user';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  currentUser: User;

  constructor(private userService: UserService) { }

  ngOnInit() {
   this.getUser(this.currentUser);
  }

  getUser(currentUser: User):void {
    this.userService.getByUsers(currentUser.username)
   .subscribe(data=> {
     console.log(data);
     this.currentUser=data
     console.log(this.currentUser);
   });
 }
}