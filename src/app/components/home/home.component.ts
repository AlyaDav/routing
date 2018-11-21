import { Component, OnInit, OnDestroy } from '@angular/core';
import { User } from 'src/app/models/user';
import { ActivatedRoute } from '@angular/router';
import { Item } from 'src/app/models/item';
import { Subscription } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit, OnDestroy {
  user: User;
  subscription: Subscription;
  items: Item[];

  constructor(
    private apiService: ApiService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.getUser();
  }

  getUser(): void {
    this.subscription = this.route.params.subscribe(
      params => {
        this.apiService.getUser(params.username).subscribe(
          data => {
            this.user = data.data;
            this.getItem();
          });
      });
  }

  getItem() {
    this.apiService.getByItems(this.user._id).subscribe(
      data => this.items = data.data
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}

