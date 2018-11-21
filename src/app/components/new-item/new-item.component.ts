import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-new-item',
  templateUrl: './new-item.component.html',
  styleUrls: ['./new-item.component.css']
})

export class NewItemComponent implements OnInit {

  subscription: Subscription;
  username: string = '';

  constructor(
    private apiService: ApiService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  newItemForm = new FormGroup({
    title: new FormControl('',
      [Validators.required]),
    price: new FormControl('',
      [Validators.required]),
    about: new FormControl(''),
  });

  ngOnInit() {
    this.subscription = this.route.queryParams.subscribe(params => {
      this.username = params['username'];
    });
  }

  onCreateItem() {
    this.apiService.addItem(this.newItemForm.value.title,
      this.newItemForm.value.price,
      this.newItemForm.value.about,
      this.username).subscribe(
        data => this.router.navigate(['authentication/signIn/', this.username])
      )
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
