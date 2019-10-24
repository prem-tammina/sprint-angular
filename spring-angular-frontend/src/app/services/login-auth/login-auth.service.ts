import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginAuthService {

  constructor() { }

  authenticate(username: string, password: string): boolean {
    if (username === 'premtammina22@gmail.com' && password === 'prem123') {
      sessionStorage.setItem('auth-user', username);
      return true;
    } else {
      return false;
    }
  }

  isUserLoggedIn(option?: string): boolean {
    console.log(option);
    let loggedInUser = sessionStorage.getItem('auth-user');
    if (loggedInUser === null) {
      return false;
    } else {
      return true;
    }
  }

  logout(): void {
    sessionStorage.removeItem('auth-user');
  }
}
