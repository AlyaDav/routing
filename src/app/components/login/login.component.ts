import { Component, OnInit } from '@angular/core';
import { Router  } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { log } from 'util';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userService: UserService,
    private router: Router,
    )    { }

    usernameFormControl = new FormControl('',
    [ Validators.required]);

    passwordFormControl = new FormControl('',
    [ Validators.required]);

    loginForm = new FormGroup({
      userName: this.usernameFormControl,
      password: this.passwordFormControl
    });
  ngOnInit() {

  }

  onSubmit() {
    console.log(this.loginForm);
let username =this.loginForm.value.userName
let password =this.loginForm.value.password
    console.log(username + '  ' + password);
    this.userService.entrance(username, password)
      .subscribe(
        data => {
          console.log('12312')
          this.router.navigate(['/authentication/signIn/',username])}
      )
  

}
}
