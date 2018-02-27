import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const apiPath = 'http://localhost:3000/api/';

@Injectable()
export class ApiService {

    constructor(private http: HttpClient) {}

    messages: any[] = [];
    users: any[] = [];

    getMessages(userId: String) {
        this.http.get<any>(apiPath + 'posts/' + userId).subscribe(res => {
            this.messages = res;
        });
    }

    postMessage(message: Object) {
        this.http.post(apiPath + 'post', message).subscribe(res => {});
    }

    getUsers() {
        this.http.get<any>(apiPath + 'users').subscribe(res => {
            this.users = res;
        });
    }

    getProfile(id: String) {
        return this.http.get(apiPath + 'profile/' + id);
    }
}