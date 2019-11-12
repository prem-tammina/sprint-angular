import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/pages/login/login.component';
import { WelcomeComponent } from './components/pages/welcome/welcome.component';
import { ErrorComponent } from './components/pages/error/error.component';
import { ListTodosComponent } from './components/todos/list-todos/list-todos.component';
import { LogoutComponent } from './components/pages/logout/logout.component';
import { RouteGuardService } from './services/route-guard/route-guard.service';
import { TodoComponent } from './components/todos/todo/todo.component';


const routes: Routes = [
  {
    path: '', component: LoginComponent
  }, {
    path: 'login', component: LoginComponent
  }, {
    path: 'logout', component: LogoutComponent
  }, {
    path: 'welcome/:name', component: WelcomeComponent, canActivate: [RouteGuardService]
  }, {
    path: 'todos', component: ListTodosComponent, canActivate: [RouteGuardService]
  }, {
    path: 'todo/:id', component: TodoComponent, canActivate: [RouteGuardService]
  }, {
    path: '**', component: ErrorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
