import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Todo } from '../../../components/todos/model/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private http: HttpClient;

  constructor(http: HttpClient) {
    this.http = http;
  }

  getAllTodoByUsername(username: string): Observable<Todo[]> {
    return this.http.get<Todo[]>(`http://localhost:8080/${username}/todos`);
  }

  deleteTodoById(username: string, id: number): Observable<any> {
    return this.http.delete(`http://localhost:8080/${username}/todos/${id}`);
  }

  getTodoById(username: string, id: number): Observable<any> {
    return this.http.get<Todo>(`http://localhost:8080/${username}/todo/${id}`);
  }

}
