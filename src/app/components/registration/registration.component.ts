import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  registrationForm = new FormGroup({
    name: new FormControl('',
      [Validators.required]),
    email: new FormControl('',
      [Validators.required, Validators.email]),
    password: new FormControl('',
      [Validators.required]),
  });

  ngOnInit() { }

  onRegistration() {
    this.authService.register(
      this.registrationForm.value.name,
      this.registrationForm.value.password,
      this.registrationForm.value.email
    ).subscribe(
      data => {
        if (data['success']) this.router.navigate(['']);
        else if (data['error']['errmsg']) alert(data['error']['errmsg']);
        else (alert('error ' + data['error']));
      }
    );
  }
}
