import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './com/pages/login/login.component';
import { WelcomeComponent } from './com/pages/welcome/welcome.component';
import { ErrorComponent } from './com/pages/error/error.component';
import { ListTodosComponent } from './com/todos/list-todos/list-todos.component';


const routes: Routes = [
  {
    path: '', component: LoginComponent
  }, {
    path: 'login', component: LoginComponent
  }, {
    path: 'welcome/:name', component: WelcomeComponent
  }, {
    path: 'todos', component: ListTodosComponent
  },{
    path: '**', component: ErrorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
