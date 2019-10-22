import { Component, OnInit } from '@angular/core';
import { Todo } from '../model/todo';

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  todos: Todo[] = [new Todo(1, 'Create deal today 1'), new Todo(2, 'Create deal today 2'), new Todo(3, 'Create deal today 3')];

  constructor() { }

  ngOnInit() {
  }

}
