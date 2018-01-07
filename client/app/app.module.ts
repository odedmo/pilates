import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { MatButtonModule, MatCardModule, MatToolbarModule, MatInputModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';
import { ApiService } from './api.service';
import { AuthService } from './auth.service';
import { MessagesComponent } from './messages.component';
import { UsersComponent } from './users.component';
import { RegisterComponent } from './register.component';
import { LoginComponent } from './login.component';

const routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'users', component: UsersComponent },
  { path: 'profile/:id', component: UsersComponent }
]

@NgModule({
  declarations: [
    AppComponent, MessagesComponent, UsersComponent, RegisterComponent, LoginComponent
  ],
  imports: [
    BrowserModule, 
    HttpModule, 
    FormsModule,
    MatButtonModule, 
    MatCardModule, 
    MatToolbarModule, 
    RouterModule.forRoot(routes), 
    MatInputModule,
    BrowserAnimationsModule
  ],
  providers: [ApiService, AuthService],
  bootstrap: [AppComponent]
})

export class AppModule {}