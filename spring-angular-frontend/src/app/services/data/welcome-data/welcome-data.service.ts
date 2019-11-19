import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HelloBean } from 'src/app/models/hello-bean';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  private http: HttpClient;

  constructor(http: HttpClient) {
    this.http = http;
  }

  executeHelloWorldBeanService(): Observable<HelloBean> {
    return this.http.get<HelloBean>('http://localhost:8080/hello-world-bean');
  }

  executeHelloWorldBeanServiceWithName(name: string): Observable<HelloBean> {
    let headers = new HttpHeaders({
      Authorization: this.createBasicAuthenticationHttpHeader()
    });
    return this.http.get<HelloBean>(`http://localhost:8080/hello-world-bean/${name}`, {
      headers: headers
    });
  }

  createBasicAuthenticationHttpHeader(): string {
    let username = 'premtammina22@gmail.com';
    let password = 'prem123';
    let basicAuthHeaderString = 'Basic ' + (window.btoa(username + ":" + password));

    return basicAuthHeaderString;
  }

}
