import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private userService: UserService,
    private router: Router) { }

  ngOnInit() {
 
  }
  onRegistration(username:string, password:string, email: string){
    console.log(username+'  '+ password)
   this.userService.register(username, password, email).subscribe(
    data => {
      console.log(data)
      this.router.navigate([''])}
   );
    
  }
}
// this.userService.register({id:11,username, password, email, coin:11, fio:'',items:['1, 2, 3,4 ,5,7'],
//    sex:'',role:'',delered:false} as User).subscribe();