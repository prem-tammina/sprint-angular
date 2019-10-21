import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './com/pages/welcome/welcome.component';
import { LoginComponent } from './com/pages/login/login.component';
import { ErrorComponent } from './com/pages/error/error.component';
import { ListTodosComponent } from './com/todos/list-todos/list-todos.component';
import { HeaderComponent } from './com/pages/header/header.component';
import { FooterComponent } from './com/pages/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    LoginComponent,
    ErrorComponent,
    ListTodosComponent,
    HeaderComponent,
    FooterComponent    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
