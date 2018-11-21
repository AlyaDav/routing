import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/models/item';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-market',
  templateUrl: './market.component.html',
  styleUrls: ['./market.component.css']
})
export class MarketComponent implements OnInit {

  items: Item[];
  username: string;
  userId: string;
  subscription: Subscription;

  constructor(
    private apiService: ApiService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.subscription = this.route.queryParams.subscribe(
      params => {
        this.username = params['username'];
        this.userId = params['userId'];
      });

    this.getItems();
  }


  getItems() {
    this.apiService.getAllItems()
      .subscribe(data => {
        this.items = data.data
      });
  }

  onBuy(item: Item) {
    this.apiService.buyItem(item._id, item.sellerId, this.userId)
      .subscribe(data => {
        if (data['success']) alert(' You buy Item')
        else { alert(data['error']) }
      })
  }

  getMyItems(username: string) {
    this.items = this.items.filter(data => {
      return data.username === username;
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
