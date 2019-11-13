import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/services/data/todo/todo.service';
import { Todo } from '../model/todo';
import { ActivatedRoute, Router } from '@angular/router';

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
  private router: Router;

  constructor(todoService: TodoService, activatedRoute: ActivatedRoute, router: Router) {
    this.todoService = todoService;
    this.activatedRoute = activatedRoute;
    this.router = router;
  }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params['id'];
    if (this.id > 0) {
      this.todoService.getTodoById('premtammina', this.id).subscribe((todo: Todo) => {
        this.todo = todo;
      });
    }
  }

  saveTodo(): void {
    if (this.id > 0) {
      this.todoService.updateTodo('premtammina', this.todo).subscribe((data) => {
        console.log(data);
        this.router.navigate(['todos']);
      });
    } else if (this.id == 0) {
      this.todoService.saveTodo('premtammina', this.todo).subscribe((data) => {
        console.log(data);
        this.router.navigate(['todos']);
      });
    }
  }

}
