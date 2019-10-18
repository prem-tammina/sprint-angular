import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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

  private router: Router;

  constructor(router: Router) { 
    this.router = router;
  }

  ngOnInit() {
  }

  handleLogin() {
    if (this.username == 'premtammina22@gmail.com' && this.password == 'prem123') {
      this.invalidLogin = false;
      this.router.navigate(['welcome', this.username]);
    } else {
      this.invalidLogin = true;
    }
    console.log(this.invalidLogin);
  }

}
