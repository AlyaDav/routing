import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/models/item';
import { UserService } from 'src/app/services/user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { filter } from 'rxjs/operators';



@Component({
  selector: 'app-market',
  templateUrl: './market.component.html',
  styleUrls: ['./market.component.css']
})
export class MarketComponent implements OnInit {

  items: Item[];
  username: string;
  userId: string;

  constructor(private userService: UserService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.username = params['username'];
      this.userId = params['userId'];
      console.log(params)
    })

    this.getItems();
  }


  getItems() {
    this.userService.getAllItems()
      .subscribe(data => {
        this.items = data.data
      });
  }

  onBuy(item: Item) {

    this.userService.buyItem(item._id, item.sellerId, this.userId)
      .subscribe(data => {
        console.log(data);
      })
  }

  getMyItems(username:string){
    this.items= this.items.filter(data => {
      console.log(data); 
      console.log(username);
      return  data.username==username;
       });

    // this.userService.getAllItems()
    //   .subscribe(data => {
    //     this.items = data.data
    //     .pipe(filter(data => this.username == username))
    //   });
  }
}
