import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const apiPath = 'http://localhost:3000/api/';

@Injectable()
export class AuthService {
    messages:any[] = []

    constructor(private http: HttpClient) {}

    register(registerData: any) {
        this.http.post(apiPath + 'register', registerData).subscribe(res => {});
    }

    login(loginData: any) {
        this.http.post<any>(apiPath + 'login', loginData).subscribe(res => {
            localStorage.setItem('token', res.token);
        });
    }
}