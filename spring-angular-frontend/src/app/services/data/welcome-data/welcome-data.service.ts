import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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
    return this.http.get<HelloBean>(`http://localhost:8080/hello-world-bean/${name}`);
  }

}
