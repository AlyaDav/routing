import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user';
import { ActivatedRoute, ParamMap, Router} from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Item } from 'src/app/models/item';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  user: User;

  items:Item[];
  

  constructor(private userService: UserService,
              private route:ActivatedRoute,
              private router: Router
              ) { }

  ngOnInit() {
this.getUser();

}

getUser():void {
 
  console.log();
  this.route.params.subscribe(params=>{
    this.userService.getByUsers(params.username).subscribe(data =>{
    this.user=data.data;
    this.getItem();
    console.log(data);
    })
    
  })
}

getItem(){
    this.userService.getByItems(this.user._id).subscribe(data =>{
    this.items=data.data
      console.log(this.items);
      
    })
}



}

