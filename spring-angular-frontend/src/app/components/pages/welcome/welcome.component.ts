import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from 'src/app/services/data/welcome-data/welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  private activeRoute: ActivatedRoute;
  private welcomeDataService: WelcomeDataService;

  username: string;

  constructor(activeRoute: ActivatedRoute, welcomeDataService: WelcomeDataService) {
    this.activeRoute = activeRoute;
    this.welcomeDataService = welcomeDataService;
  }

  ngOnInit() {
    this.username = this.activeRoute.snapshot.params['name'];
  }

  getWelcomeMessage(): void {
    this.welcomeDataService.executeHellowWorldBeanService();
  }
}
