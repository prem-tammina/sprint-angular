import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string = 'premtammina22@gmail.com';
  password: string = 'prem123';

  constructor() { }

  ngOnInit() {
  }

  login() {
    console.log(this.username);
  }

}
