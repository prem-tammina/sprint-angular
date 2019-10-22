import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  private activeRoute: ActivatedRoute;
  username: string;

  constructor(activeRoute: ActivatedRoute) {
    this.activeRoute = activeRoute;
  }

  ngOnInit() {
    this.username = this.activeRoute.snapshot.params['name'];
  }

}
