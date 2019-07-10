import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {AuthService} from '../auth.service';
import {FormControl, FormGroup, ValidationErrors, Validators} from '@angular/forms';
import { trigger, transition, useAnimation } from '@angular/animations';
import { jello } from 'ng-animate';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../auth.component.scss'],
  animations: [
    trigger('pulser', [
      transition('* => *', useAnimation(jello)),
      transition('false => true', useAnimation(jello))
    ])
  ],

})

export class LoginComponent implements OnInit {

  loginGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });

  registerGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    registeredEmail: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
    repeatPassword: new FormControl('', [Validators.required, this.passwordsMatchValidator])
  });

  isLogin = true;
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  login(): void {

    const {
      email,
      password,
    } = this.loginGroup.getRawValue();

    if (email !== '' || password !== '') {
      this.authService.login(email, password)
        .subscribe(data => {
          this.router.navigate(['']);
        });
    }
  }

  passwordsMatchValidator(control: FormControl): ValidationErrors {
    const password = control.root.get('password');
    return password && control.value !== password.value ? {
      passwordMatch: true
    } : null;
  }

  fakeLogin(): void {
    this.router.navigate(['/register']);
  }

  navigateRegister(): void {
    this.router.navigate(['/platform/']);
  }

  showRegister(): void {
    this.isLogin = false;
  }

  showLogin(): void {
    this.isLogin = true;
  }
}
