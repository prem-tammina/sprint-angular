import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from '../../../components/todos/model/todo';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private http: HttpClient;

  constructor(http: HttpClient) {
    this.http = http;
  }

  getAllTodoByUsername(username: string): Observable<Todo[]> {
    return this.http.get<Todo[]>(`http://localhost:8080/todos/${username}`);
  }

}
