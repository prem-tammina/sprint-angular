import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  private http: HttpClient;

  constructor(http: HttpClient) {
    this.http = http;
  }

  executeHellowWorldBeanService() {
    console.log("Execute Hello World Bean Service");
  }
}
