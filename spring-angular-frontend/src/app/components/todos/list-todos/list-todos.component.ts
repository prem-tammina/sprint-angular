import { Component, OnInit } from '@angular/core';
import { Todo } from '../model/todo';
import { TodoService } from 'src/app/services/data/todo/todo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  private todoService: TodoService;
  private todos: Todo[];
  private serviceMessage: string;
  private router: Router;

  constructor(todoService: TodoService, router: Router) {
    this.todoService = todoService;
    this.router = router;
  }

  private loadTodos(): void {
    this.todoService.getAllTodoByUsername('premtammina').subscribe((todos: Todo[]) => {
      this.todos = todos;
    });
  }

  ngOnInit() {
    this.loadTodos();
  }

  deleteTodo(id: number): void {
    this.todoService.deleteTodoById('premtammina', id).subscribe((response) => {
      console.log(response);
      this.serviceMessage = `Deleted Todo of ${id}`;
      this.loadTodos();
    });
  }

  updateTodo(id: number): void {
    this.router.navigate(['todo', id]);
  }

  saveTodo():void{
    this.router.navigate(['todo', 0]);
  }

}
