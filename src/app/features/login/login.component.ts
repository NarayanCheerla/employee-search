import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router) { }
  user: any;
  pass: any;

  ngOnInit() {
  }

  login(){
    if(this.user === "admin" && this.pass==="admin")
      this.router.navigate(['employee-search']);
  }
}
