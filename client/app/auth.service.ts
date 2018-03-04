import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
    messages:any[] = []
    apiPath = 'http://localhost:3000/api/';
    TOKEN_KEY = 'token';

    constructor(private http: HttpClient) {}

    get token() {
        return localStorage.getItem(this.TOKEN_KEY);
    }

    register(registerData: any) {
        this.http.post(this.apiPath + 'register', registerData, {responseType: 'text'}).subscribe(res => {});
    }

    login(loginData: any) {
        this.http.post<any>(this.apiPath + 'login', loginData).subscribe(res => {
            localStorage.setItem('token', res.token);
        });
    }
}