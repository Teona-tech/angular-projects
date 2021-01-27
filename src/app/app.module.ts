import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { RegisterComponent } from './register/register.component';
import { UsersComponent } from './users/users.component';
import { LoginComponent } from './login/login.component';
import { LoginGuard } from './login.guard';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
  
    RegisterComponent,
    UsersComponent,
  
    LoginComponent,
   
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule.forRoot([
    
      { path: 'register', data: { name: 'Register' }, component: RegisterComponent },
      { path: 'users', data: { name: 'Users' }, canActivate: [LoginGuard], component: UsersComponent },
     
     
      { path: 'login', data: { name: 'Login' }, component: LoginComponent },
     
    ]),
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
