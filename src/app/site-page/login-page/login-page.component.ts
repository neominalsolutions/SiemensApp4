import { Component, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LoginService } from './login.service';
import { Subscription } from 'rxjs';

@Component({
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent implements OnDestroy {
  sub!: Subscription;

  constructor(private fb: FormBuilder, private loginService: LoginService) {}

  loginForm: FormGroup = this.fb.group({
    email: ['eve.holt@reqres.in'],
    password: ['cityslicka'],
  });

  login() {
    const param = this.loginForm.value;
    const header = { lng: 'tr' };

    // debugger;

    this.sub = this.loginService.login(param, header).subscribe();
  }

  ngOnDestroy(): void {
    if (this.sub != undefined) {
      this.sub.unsubscribe();
    }
  }
}
