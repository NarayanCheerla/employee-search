import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLogedIn = false;

  constructor() { }

  urlRedirect: string;

  login(){
    this.isLogedIn = true;
  }

  logout(){
    return this.isLogedIn;
  }
}
