import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app/app.component.html'
})

export class AppComponent {  

  constructor(private apiService: ApiService) {}

  title = 'app';

  ngOnInit() {
    this.apiService.getMessages();
  }
}