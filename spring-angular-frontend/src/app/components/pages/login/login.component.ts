import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string = 'premtammina22@gmail.com';
  password: string = 'prem123';
  errorMessage: string = 'Invalid Credentials';
  invalidLogin: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  handleLogin() {    
    if (this.username == 'premtammina22@gmail.com' && this.password == 'prem123') {
      this.invalidLogin = false;
    } else {
      this.invalidLogin = true;
    }
    console.log(this.invalidLogin);
  }

}
