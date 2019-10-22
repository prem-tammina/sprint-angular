import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginAuthService } from '../../../services/login-auth/login-auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;
  errorMessage: string = 'Invalid Credentials';
  invalidLogin: boolean = false;

  private router: Router;
  private loginAuthService: LoginAuthService;

  constructor(router: Router, loginAuthService: LoginAuthService) {
    this.router = router;
    this.loginAuthService = loginAuthService;
  }

  ngOnInit() {
  }

  handleLogin() {
    if (this.loginAuthService.authenticate(this.username, this.password)) {
      this.invalidLogin = false;
      this.router.navigate(['welcome', this.username]);
    } else {
      this.invalidLogin = true;
    }    
  }

}
