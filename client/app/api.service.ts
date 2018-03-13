import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';

@Injectable()
export class ApiService {

    constructor(private http: HttpClient) {}

    messages: any[] = [];
    users: any[] = [];
    apiPath = environment.path;

    getMessages(userId: String) {
        this.http.get<any>(this.apiPath + 'posts/' + userId).subscribe(res => {
            this.messages = res;
        });
    }

    postMessage(message: Object) {
        this.http.post(this.apiPath + 'post', message, {responseType: 'text'}).subscribe(res => {});
    }

    getUsers() {
        this.http.get<any>(this.apiPath + 'users').subscribe(res => {
            this.users = res;
        });
    }

    getProfile(id: String) {
        return this.http.get(this.apiPath + 'profile/' + id);
    }
}