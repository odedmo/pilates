import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

const apiPath = 'http://localhost:3000/api/';

@Injectable()
export class ApiService {

    constructor(private http: Http) {}

    messages:any[] = [];

    getMessages() {
        this.http.get(apiPath + 'posts').subscribe(res => {
            this.messages = res.json();
        });
    }

    register(registerData: any) {
        this.http.post(apiPath + 'register', registerData).subscribe(res => {});
    }
}