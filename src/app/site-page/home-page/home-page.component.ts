import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent {
  // window.location.href => JS api tarayıcıda sayfa refresj işlemlerinde. Dikkat Client State localstorage da değilse silinir. BehaviorSubject
  // eğer ts den angular routing yaparak bir sayfaya yönlenmek için ise, router service kullanırız

  constructor(private router: Router) {}

  gotoAdmin() {
    const ok = confirm('Admin Sayfasına gitmek istediğinizden emin misiniz');
    if (ok) this.router.navigate(['admin']);
  }
}
