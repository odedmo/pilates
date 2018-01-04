import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MatButtonModule, MatCardModule } from '@angular/material';

import { HttpModule } from '@angular/http';
import { ApiService } from './api.service';
import { MessagesComponent } from './messages.component';

@NgModule({
  declarations: [
    AppComponent, MessagesComponent
  ],
  imports: [
    BrowserModule, HttpModule, MatButtonModule, MatCardModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})

export class AppModule {}