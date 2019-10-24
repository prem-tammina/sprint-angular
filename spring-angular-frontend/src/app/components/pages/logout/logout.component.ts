import { Component, OnInit } from '@angular/core';
import { LoginAuthService } from 'src/app/services/login-auth/login-auth.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {
  private loginAuthService: LoginAuthService;

  constructor(loginAuthService: LoginAuthService) {
    this.loginAuthService = loginAuthService;
  }

  ngOnInit() {
    this.loginAuthService.logout();
  }

}
