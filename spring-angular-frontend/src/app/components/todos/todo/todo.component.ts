import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/services/data/todo/todo.service';
import { Todo } from '../model/todo';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  private todoService: TodoService;
  private id: number;
  private todo: Todo = new Todo(0, '');
  private activatedRoute: ActivatedRoute;

  constructor(todoService: TodoService, activatedRoute: ActivatedRoute) {
    this.todoService = todoService;
    this.activatedRoute = activatedRoute;
  }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.todoService.getTodoById('premtammina', this.id).subscribe((todo: Todo) => {
      this.todo = todo;
    });
  }

  saveTodo(): void {

  }

}
