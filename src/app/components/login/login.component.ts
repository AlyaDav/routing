import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private router: Router,
    private authService: AuthService,
  ) { }

  loginForm = new FormGroup({
    userName: new FormControl('',
      [Validators.required]),
    password: new FormControl('',
      [Validators.required])
  });

  ngOnInit() {
    this.authService.logout();
  }

  onSubmit() {
    let username = this.loginForm.value.userName
    let password = this.loginForm.value.password
    this.authService.login(username, password)
      .subscribe(
        data => {
          if (data['success']) this.router.navigate(['/authentication/signIn/', username])
          else alert(data['error'])
          if (data['error']['errmsg']) alert(data['error']['errmsg'])
        }
      )
  }
}
