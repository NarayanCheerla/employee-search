import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, public auth: AuthService) { }
  user: any;
  pass: any;

  ngOnInit() {
  }

  login() {
    if (this.user === 'admin' && this.pass === 'admin') {
      this.auth.login();
    } else {
      this.auth.logout();
      this.auth.urlRedirect = '/logout';
    }
    this.router.navigate([this.auth.urlRedirect ? this.auth.urlRedirect : '/employee-search']);
  }
}
