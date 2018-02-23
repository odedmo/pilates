import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

const apiPath = 'http://localhost:3000/api/';

@Injectable()
export class ApiService {

    constructor(private http: Http) {}

    messages: any[] = [];
    users: any[] = [];

    getMessages(userId: String) {
        this.http.get(apiPath + 'posts/' + userId).subscribe(res => {
            this.messages = res.json();
        });
    }

    postMessage(message: Object) {
        this.http.post(apiPath + 'post', message).subscribe(res => {});
    }

    getUsers() {
        this.http.get(apiPath + 'users').subscribe(res => {
            this.users = res.json();
        });
    }

    getProfile(id: String) {
        return this.http.get(apiPath + 'profile/' + id);
    }
}