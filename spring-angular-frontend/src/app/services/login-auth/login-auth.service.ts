import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginAuthService {

  constructor() { }

  authenticate(username: string, password: string): boolean {
    if (username === "premtammina22@gmail.com" && password === "prem123") {
      return true;
    } else {
      return false;
    }
  }
}
