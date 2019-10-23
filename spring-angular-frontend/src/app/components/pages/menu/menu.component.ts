import { Component, OnInit } from '@angular/core';
import { LoginAuthService } from '../../../services/login-auth/login-auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  //isLoggedIn: boolean;

  private loginAuthService: LoginAuthService;

  constructor(loginAuthService: LoginAuthService) {
    this.loginAuthService = loginAuthService;
  }

  ngOnInit() {
    //this.isLoggedIn = this.loginAuthService.isUserLoggedIn();
  }

}
