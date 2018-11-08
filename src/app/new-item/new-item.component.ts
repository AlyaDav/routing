import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Item } from '../models/item';

@Component({
  selector: 'app-new-item',
  templateUrl: './new-item.component.html',
  styleUrls: ['./new-item.component.css']
})
export class NewItemComponent implements OnInit {
  username:string="1";
  constructor(private userService: UserService,
    private router: Router,
    private route:ActivatedRoute,) { }

  ngOnInit( ) {
    this.route.queryParams.subscribe( params => {
      this.username=params['username'];
      console.log(params)
    })
  }
  onCreateItem(title: string, price: number, about: string) {
    
    console.log(title, price, about, this.username)
    this.userService.createItem(title, price, about, this.username)
      .subscribe(
        data => {
          console.log(data);
           this.router.navigate(['authentication/signIn/',this.username])
        })
  }
}
